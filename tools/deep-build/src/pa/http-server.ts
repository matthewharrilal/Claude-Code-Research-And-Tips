/**
 * Local HTTP server for serving HTML artifacts to Playwright.
 * Playwright blocks file:// protocol, so we serve via localhost.
 */

import http from 'node:http';
import fs from 'node:fs';
import net from 'node:net';
import { FileNotFoundError, PlaywrightError } from '../types/errors.js';

/**
 * Find an available port starting from the given port.
 */
async function findAvailablePort(startPort: number): Promise<number> {
  let port = startPort;
  while (port < startPort + 100) {
    const available = await new Promise<boolean>((resolve) => {
      const server = net.createServer();
      server.once('error', () => resolve(false));
      server.once('listening', () => {
        server.close();
        resolve(true);
      });
      server.listen(port);
    });
    if (available) return port;
    port++;
  }
  throw new PlaywrightError(`No available port found in range ${startPort}-${startPort + 99}`);
}

/**
 * Start a local HTTP server that serves a single HTML file.
 * Returns the URL and a kill function to shut down the server.
 */
export async function startArtifactServer(
  htmlPath: string,
): Promise<{ url: string; kill: () => void }> {
  if (!fs.existsSync(htmlPath)) {
    throw new FileNotFoundError(htmlPath);
  }

  const port = await findAvailablePort(8765);
  const html = fs.readFileSync(htmlPath, 'utf-8');

  const connections = new Set<net.Socket>();

  const server = http.createServer((_req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    });
    res.end(html);
  });

  server.on('connection', (socket) => {
    connections.add(socket);
    socket.once('close', () => connections.delete(socket));
  });

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => resolve());
  });

  const url = `http://127.0.0.1:${port}`;

  return {
    url,
    kill: () => {
      // Destroy all active connections so server.close() completes promptly
      for (const socket of connections) {
        socket.destroy();
      }
      connections.clear();
      server.close();
    },
  };
}

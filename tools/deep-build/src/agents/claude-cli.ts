/**
 * Claude CLI spawner. Wraps `claude -p` via child_process.spawn.
 * Every call uses token isolation (unset CLAUDECODE, scoped workdir,
 * --setting-sources "", --no-session-persistence, --output-format json).
 */

import { spawn, ChildProcess } from 'node:child_process';
import type { ClaudeResponse } from '../types/pass.js';
import { ClaudeInvocationError } from '../types/errors.js';
import { retry, safeJsonParse } from '../utils.js';
import {
  MODEL,
  MAX_TURNS,
  ALLOWED_TOOLS,
  STRICT_MCP_ROLES,
  RETRY_LIMIT,
  RETRY_BACKOFF,
} from '../config/constants.js';

export interface ClaudeSpawnOptions {
  /** Agent role — determines max-turns, tools, and MCP config */
  role: string;
  /** The assembled prompt text (sent via stdin) */
  prompt: string;
  /** Isolated working directory (must have .git/HEAD to block CLAUDE.md traversal) */
  workspaceDir: string;
  /** Override max-turns from constants */
  maxTurns?: number;
  /** Override allowed tools from constants */
  allowedTools?: string;
  /** Additional directories for --add-dir (cross-directory read access) */
  additionalDirs?: string[];
  /** Timeout in ms. Default 600_000 (10 min) */
  timeoutMs?: number;
}

const DEFAULT_TIMEOUT_MS = 600_000;

/** Maximum stdout size before we abort (50MB — prevents OOM from runaway output) */
const MAX_STDOUT_BYTES = 50 * 1024 * 1024;

/** Track active child processes for cleanup on parent exit */
const activeChildren = new Set<ChildProcess>();

/** Register cleanup handler once */
let cleanupRegistered = false;
function registerCleanup(): void {
  if (cleanupRegistered) return;
  cleanupRegistered = true;
  const cleanup = () => {
    for (const child of activeChildren) {
      try { child.kill('SIGKILL'); } catch { /* best effort */ }
    }
  };
  process.on('exit', cleanup);
  process.on('SIGTERM', () => { cleanup(); process.exit(143); });
  process.on('SIGINT', () => { cleanup(); process.exit(130); });
}

/**
 * Build the argument array for `claude -p`.
 */
function buildArgs(options: ClaudeSpawnOptions): string[] {
  const maxTurns = options.maxTurns ?? MAX_TURNS[options.role] ?? 1;
  const allowedTools = options.allowedTools ?? ALLOWED_TOOLS[options.role] ?? '';

  const args: string[] = [
    '-p',
    '--model', MODEL,
    '--no-session-persistence',
    '--output-format', 'json',
    '--setting-sources', '',
    '--max-turns', String(maxTurns),
    '--dangerously-skip-permissions',
  ];

  // --allowedTools: always include, even if empty string (restricts to no tools)
  args.push('--allowedTools', allowedTools);

  // Strict MCP config for PA auditors (denies Playwright access)
  if (STRICT_MCP_ROLES.includes(options.role)) {
    args.push('--strict-mcp-config');
  }

  // Cross-directory access
  if (options.additionalDirs) {
    for (const dir of options.additionalDirs) {
      args.push('--add-dir', dir);
    }
  }

  return args;
}

/**
 * Build the environment for the child process.
 * 4-layer isolation: unset CLAUDECODE, disable telemetry/compact/updater.
 */
function buildEnv(): Record<string, string | undefined> {
  return {
    ...process.env,
    CLAUDECODE: undefined,
    DISABLE_TELEMETRY: '1',
    DISABLE_AUTO_COMPACT: '1',
    DISABLE_AUTOUPDATER: '1',
  };
}

/**
 * Spawn a single claude -p process and collect its output.
 * Prompt is sent via stdin. Output is collected from stdout.
 * Returns the raw stdout string on success, throws on failure.
 */
function spawnOnce(options: ClaudeSpawnOptions): Promise<string> {
  registerCleanup();

  return new Promise((resolve, reject) => {
    const args = buildArgs(options);
    const timeout = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

    const child = spawn('claude', args, {
      cwd: options.workspaceDir,
      env: buildEnv(),
      stdio: ['pipe', 'pipe', 'pipe'],
      detached: true, // Create process group so we can kill child + its descendants
    });

    // Track for orphan cleanup
    activeChildren.add(child);

    const stdoutChunks: Buffer[] = [];
    const stderrChunks: Buffer[] = [];
    let stdoutBytes = 0;
    let stdoutEnded = false;
    let stderrEnded = false;
    let processExitCode: number | null = null;
    let settled = false;
    let stdoutOverflow = false;

    function settle(result: { resolve: string } | { reject: Error }): void {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      activeChildren.delete(child);
      if ('resolve' in result) resolve(result.resolve);
      else reject(result.reject);
    }

    function forceKill(): void {
      try {
        // kill(-pid) sends signal to the entire process group
        if (child.pid) process.kill(-child.pid, 'SIGKILL');
      } catch {
        // Process group kill failed; try direct kill
        try { child.kill('SIGKILL'); } catch { /* already dead */ }
      }
    }

    function trySettle(): void {
      // Only settle when ALL streams have ended AND process has exited
      if (settled || !stdoutEnded || !stderrEnded || processExitCode === null) return;

      const stdout = Buffer.concat(stdoutChunks).toString('utf-8');
      const stderr = Buffer.concat(stderrChunks).toString('utf-8');

      if (stdoutOverflow) {
        settle({ reject: new ClaudeInvocationError(
          `claude -p stdout exceeded ${MAX_STDOUT_BYTES} bytes (role: ${options.role})`,
          'invalid-response',
        )});
        return;
      }

      if (processExitCode !== 0) {
        const combined = stdout + stderr;
        if (isRateLimitError(combined)) {
          settle({ reject: new ClaudeInvocationError(
            `claude -p rate limited (role: ${options.role}): ${stderr.slice(0, 300)}`,
            'rate-limit',
          )});
          return;
        }
        if (isOverloadError(combined)) {
          settle({ reject: new ClaudeInvocationError(
            `claude -p model overloaded (role: ${options.role}): ${stderr.slice(0, 300)}`,
            'model-overload',
          )});
          return;
        }
        if (isTransientNetworkError(combined)) {
          settle({ reject: new ClaudeInvocationError(
            `claude -p transient network error (role: ${options.role}): ${stderr.slice(0, 300)}`,
            'network-error',
          )});
          return;
        }
        settle({ reject: new ClaudeInvocationError(
          `claude -p exited with code ${processExitCode} (role: ${options.role}): ${stderr.slice(0, 500)}`,
          'unknown',
        )});
        return;
      }

      if (!stdout.trim()) {
        settle({ reject: new ClaudeInvocationError(
          `claude -p returned empty stdout (role: ${options.role})`,
          'invalid-response',
        )});
        return;
      }

      settle({ resolve: stdout });
    }

    child.stdout.on('data', (chunk: Buffer) => {
      stdoutBytes += chunk.length;
      if (stdoutBytes > MAX_STDOUT_BYTES) {
        if (!stdoutOverflow) {
          stdoutOverflow = true;
          console.error(`[claude-cli] stdout overflow (${stdoutBytes} bytes), killing child (role: ${options.role})`);
          forceKill();
        }
        return; // Stop accumulating
      }
      stdoutChunks.push(chunk);
    });
    child.stderr.on('data', (chunk: Buffer) => stderrChunks.push(chunk));

    child.stdout.on('end', () => { stdoutEnded = true; trySettle(); });
    child.stderr.on('end', () => { stderrEnded = true; trySettle(); });

    // Timeout: SIGTERM, then SIGKILL after grace period
    const timer = setTimeout(() => {
      if (settled) return;
      console.error(`[claude-cli] Timeout after ${timeout}ms, sending SIGTERM (role: ${options.role})`);
      try { child.kill('SIGTERM'); } catch { /* already dead */ }
      // Grace period — then force kill. Use child.exitCode to check if
      // process actually exited, not child.killed (which just means WE sent a signal)
      setTimeout(() => {
        if (child.exitCode === null) {
          console.error(`[claude-cli] Grace period expired, sending SIGKILL (role: ${options.role})`);
          forceKill();
        }
      }, 5000);
      settle({ reject: new ClaudeInvocationError(
        `claude -p timed out after ${timeout}ms (role: ${options.role})`,
        'timeout',
      )});
    }, timeout);

    child.on('close', (code) => {
      processExitCode = code ?? 1;
      trySettle();
    });

    child.on('error', (err) => {
      settle({ reject: new ClaudeInvocationError(
        `claude -p spawn failed (role: ${options.role}): ${err.message}`,
        'unknown',
      )});
    });

    // FIX: Handle stdin errors (EPIPE if child exits before reading all input)
    child.stdin.on('error', (err) => {
      // EPIPE is expected if the child process exits/crashes before consuming stdin.
      // Don't settle here — let the close/error handler settle with the real exit info.
      console.error(`[claude-cli] stdin write error (role: ${options.role}): ${err.message}`);
    });

    // FIX: Use proper backpressure handling for large prompts.
    // child.stdin.write() returns false if the internal buffer is full.
    const canContinue = child.stdin.write(options.prompt);
    if (!canContinue) {
      // Wait for drain before ending — prevents buffering the entire prompt in memory twice
      child.stdin.once('drain', () => child.stdin.end());
    } else {
      child.stdin.end();
    }
  });
}

/**
 * Check if error text indicates a rate limit.
 */
function isRateLimitError(text: string): boolean {
  const lower = text.toLowerCase();
  return lower.includes('rate limit') ||
    lower.includes('rate_limit') ||
    lower.includes('429') ||
    lower.includes('too many requests');
}

/**
 * Check if error text indicates model overload.
 */
function isOverloadError(text: string): boolean {
  const lower = text.toLowerCase();
  return lower.includes('overloaded') ||
    lower.includes('503') ||
    lower.includes('capacity');
}

/**
 * Check if error text indicates a transient network error (retryable).
 */
function isTransientNetworkError(text: string): boolean {
  const lower = text.toLowerCase();
  return lower.includes('econnreset') ||
    lower.includes('econnrefused') ||
    lower.includes('etimedout') ||
    lower.includes('connection reset') ||
    lower.includes('502') ||
    lower.includes('bad gateway') ||
    lower.includes('socket hang up') ||
    lower.includes('epipe');
}

/**
 * Spawn claude -p with retry and return a typed ClaudeResponse.
 *
 * Retries on: rate-limit, model-overload, timeout.
 * Does NOT retry on: invalid-response, unknown errors.
 */
export async function spawnClaude(options: ClaudeSpawnOptions): Promise<ClaudeResponse> {
  const rawJson = await retry(
    () => spawnOnce(options),
    RETRY_LIMIT,
    RETRY_BACKOFF,
    (attempt, error) => {
      const category = error instanceof ClaudeInvocationError ? error.category : 'unknown';
      // Only retry on transient errors
      if (category !== 'rate-limit' && category !== 'model-overload' && category !== 'timeout' && category !== 'network-error') {
        throw error; // Re-throw to abort retry loop
      }
      console.error(
        `[claude-cli] Retry ${attempt}/${RETRY_LIMIT} for role=${options.role} ` +
        `(${category}): ${error.message.slice(0, 200)}`
      );
    },
  );

  // Parse the JSON response
  const response = safeJsonParse<ClaudeResponse>(rawJson.trim(), `claude -p response (role: ${options.role})`);

  // Validate expected shape
  if (typeof response.type !== 'string' || typeof response.result !== 'string') {
    throw new ClaudeInvocationError(
      `claude -p response missing required fields (role: ${options.role}). ` +
      `type=${response.type}, has result=${typeof response.result}`,
      'invalid-response',
    );
  }

  return response;
}

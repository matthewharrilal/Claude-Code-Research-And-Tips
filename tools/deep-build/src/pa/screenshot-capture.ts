/**
 * Screenshot capture via Playwright.
 * Takes full-page screenshots at multiple viewports.
 * Sequential capture to avoid Playwright contention.
 */

import path from 'node:path';
import { chromium } from 'playwright';
import type { ViewportConfig } from '../types/pipeline.js';
import type { ScreenshotManifest } from '../types/pa.js';
import { PlaywrightError } from '../types/errors.js';
import { VIEWPORTS } from '../config/constants.js';
import { ensureDir } from '../utils.js';

/**
 * Capture full-page screenshots at all configured viewports.
 * Screenshots are saved sequentially (no Playwright contention).
 *
 * @param serverUrl - The localhost URL serving the HTML artifact
 * @param outputDir - Directory to save screenshots (created if missing)
 * @param viewports - Viewport configurations (defaults to VIEWPORTS constant)
 * @returns Array of ScreenshotManifest entries
 */
export async function captureScreenshots(
  serverUrl: string,
  outputDir: string,
  viewports?: ViewportConfig[],
): Promise<ScreenshotManifest[]> {
  const vps = viewports ?? VIEWPORTS;
  ensureDir(outputDir);

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    throw new PlaywrightError(
      `Failed to launch Chromium: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  const manifests: ScreenshotManifest[] = [];

  try {
    for (const vp of vps) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
      });

      const page = await context.newPage();

      // Disable scroll animations for consistent screenshots
      await page.addStyleTag({
        content: '*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; }',
      });

      try {
        await page.goto(serverUrl, { waitUntil: 'networkidle', timeout: 30_000 });
      } catch (err) {
        await context.close();
        throw new PlaywrightError(
          `Failed to navigate to ${serverUrl} at ${vp.label}: ${err instanceof Error ? err.message : String(err)}`,
        );
      }

      // Wait for fonts to load (with timeout to avoid hanging)
      try {
        await page.evaluate(() => document.fonts.ready);
      } catch {
        // Font loading timeout is non-fatal — proceed with screenshot
      }

      const filename = `screenshot-${vp.label}.png`;
      const screenshotPath = path.join(outputDir, filename);

      try {
        await page.screenshot({
          path: screenshotPath,
          fullPage: true,
          type: 'png',
          timeout: 30_000,
        });
      } catch (err) {
        await context.close();
        throw new PlaywrightError(
          `Failed to capture screenshot at ${vp.label}: ${err instanceof Error ? err.message : String(err)}`,
        );
      }

      manifests.push({
        viewport: vp,
        path: screenshotPath,
        capturedAt: new Date().toISOString(),
        fullPage: true,
      });

      await context.close();
    }
  } finally {
    await browser.close();
  }

  return manifests;
}

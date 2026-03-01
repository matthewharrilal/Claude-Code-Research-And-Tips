/**
 * Programmatic gate runner — runs browser-side gate checks via Playwright.
 * Navigates to a served HTML page, injects gate-runner-browser.js, returns GateVerdict.
 */

import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import type { GateVerdict, GateResult } from '../types/pa.js';
import { PlaywrightError } from '../types/errors.js';

/**
 * Run all programmatic gates against an HTML artifact served at serverUrl.
 * The gate-runner-browser.js file must exist in the same directory as this module.
 */
export async function runGates(htmlPath: string, serverUrl: string): Promise<GateVerdict> {
  // Resolve gate-runner-browser.js relative to this file's directory
  const browserScriptPath = path.join(path.dirname(new URL(import.meta.url).pathname), 'gate-runner-browser.js');

  let browserScript: string;
  try {
    browserScript = fs.readFileSync(browserScriptPath, 'utf-8');
  } catch {
    // Fallback: try from source directory (pre-compilation)
    const srcPath = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..', 'src', 'validation', 'gate-runner-browser.js');
    try {
      browserScript = fs.readFileSync(srcPath, 'utf-8');
    } catch {
      throw new PlaywrightError(`gate-runner-browser.js not found at ${browserScriptPath} or ${srcPath}`);
    }
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });
    const page = await context.newPage();

    await page.goto(serverUrl, { waitUntil: 'networkidle', timeout: 30_000 });

    // Wait for fonts and rendering
    await page.evaluate(() => document.fonts.ready);

    // Inject and execute the gate runner script
    // The script should define a function that returns gate results
    const results = await page.evaluate(browserScript) as GateResult[];

    if (!Array.isArray(results)) {
      throw new PlaywrightError(`Gate runner returned non-array: ${typeof results}`);
    }

    const passedCount = results.filter(g => g.passed).length;
    const failedCount = results.filter(g => !g.passed).length;
    const requiredFailures = results.filter(g => !g.passed && g.tier === 'REQUIRED').length;

    return {
      gates: results,
      passedCount,
      failedCount,
      requiredFailures,
      allRequiredPassed: requiredFailures === 0,
      evaluatedAt: new Date().toISOString(),
    };
  } catch (error) {
    if (error instanceof PlaywrightError) throw error;
    const msg = error instanceof Error ? error.message : String(error);
    throw new PlaywrightError(`Gate runner failed: ${msg}`);
  } finally {
    if (browser) {
      await browser.close().catch(() => {});
    }
  }
}

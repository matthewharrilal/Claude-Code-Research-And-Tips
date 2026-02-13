/*
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE HEADER — Phase 2B
File: design-extraction/component-system/tests/playwright.config.ts
Part Of: component-system/tests — Automated soul verification tests
Contributed To: Programmatic enforcement of soul constraints
═══════════════════════════════════════════════════════════════════════════════
*/

import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Component System Tests
 *
 * Phase 3.5 Editorial Design System
 * Covers all 12 components with 4 test categories each:
 * 1. Soul Principle Tests (verify we ARE editorial)
 * 2. Anti-Pattern Tests (verify we are NOT generic)
 * 3. Structure Tests (verify correct HTML)
 * 4. Visual Regression Tests (screenshot baselines)
 */

export default defineConfig({
  testDir: './',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  use: {
    // Base URL points to local dev server
    baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Use webServer to serve static files
  webServer: {
    command: 'npx serve .. -l 8080 -s',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Output directory for screenshots
  outputDir: './test-results/',

  // Snapshot directory for visual regression
  snapshotDir: './snapshots/',

  // Update snapshots when running with --update-snapshots
  updateSnapshots: 'missing',

  // Expect timeout for assertions
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
      threshold: 0.2,
    },
  },
});

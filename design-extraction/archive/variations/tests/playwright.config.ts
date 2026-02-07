/* LIGHT SECTION
Full Context For ALL Files: perceptual-audit-v2/synthesis/

File: archive/variations/tests/playwright.config.ts
Scope: LIGHT — Minimal context for quick lookup
Part Of: archive/variations/tests — Variation test infrastructure
Contributed To: Automated variation verification (historical)

What this file does:
Playwright test configuration for component variations visual testing.
Defines browser configurations, reporter settings, and test execution parameters.

Who uses this:
- Test runners for automated verification (historical)
- Agents reviewing test infrastructure
- CI/CD pipelines for variation experiments

Status: ARCHIVED — Historical configuration from variation experiments
Links to: perceptual-audit-v2/synthesis/ for current test patterns
*/

import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Component Variations Tests
 *
 * Run tests with:
 *   npx playwright test
 *   npx playwright test --project=chromium
 *   npx playwright test --grep "Code Block"
 */
export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
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
});

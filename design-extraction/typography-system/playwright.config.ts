import { defineConfig, devices } from '@playwright/test';
import path from 'path';

/**
 * Playwright Configuration for Typography System Tests
 *
 * This configuration is optimized for testing local HTML files with:
 * - Chrome/Chromium browser only (for now)
 * - file:// protocol for local HTML testing
 * - 1440x900 default viewport (common desktop size)
 * - Screenshots on failure
 * - Video recording on retry
 */

// Get the absolute path to the typography system directory
const BASE_DIR = path.resolve(__dirname);

export default defineConfig({
  // Test directory
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 1,

  // Limit workers on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  // Shared settings for all projects
  use: {
    // Base URL for file:// protocol - tests will construct full paths
    baseURL: `file://${BASE_DIR}`,

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Take screenshot on failure
    screenshot: 'only-on-failure',

    // Record video on retry
    video: 'on-first-retry',

    // Timeout for each action
    actionTimeout: 10000,

    // Timeout for navigation
    navigationTimeout: 30000,
  },

  // Global timeout for each test
  timeout: 30000,

  // Expect timeout
  expect: {
    // Timeout for assertions
    timeout: 5000,

    // Configure snapshot testing
    toHaveScreenshot: {
      // Allow 25% pixel difference for font rendering variations
      maxDiffPixelRatio: 0.25,

      // Threshold for color difference
      threshold: 0.2,
    },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Override viewport to 1440x900
        viewport: { width: 1440, height: 900 },
      },
    },

    // Uncomment to add more browsers later
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Output folder for test artifacts
  outputDir: 'test-results/',

  // Folder for test snapshots
  snapshotDir: 'test-snapshots/',
});

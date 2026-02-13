/*
LIGHT SECTION — Phase 2D
Part Of: card-system/tests — Card test infrastructure
Contributed To: Automated soul verification methodology
Full Context: perceptual-audit-v2/synthesis/
*/

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  snapshotDir: './test-snapshots',
});

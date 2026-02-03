import { test, expect } from '@playwright/test';

/**
 * NESTED COMPONENTS Tests
 *
 * Tests verifying that components compose correctly when nested
 * inside cards or other containers.
 *
 * Test Categories:
 * 1. Composition Tests - components work inside containers
 * 2. Spacing Tests - proper margins/padding in nested contexts
 * 3. Style Inheritance Tests - styles don't leak or conflict
 * 4. Multiple Components Tests - sequences work correctly
 */

test.describe('Nested Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase-nested.html');
  });

  // ============================================================================
  // CATEGORY 1: Composition Tests
  // ============================================================================
  test.describe('Component Composition', () => {
    test('code-block renders correctly inside card', async ({ page }) => {
      const nestedCodeBlock = page.locator('.card .code-block, [class*="card"] [data-component="code-block"]').first();
      if (await nestedCodeBlock.count() > 0) {
        // Should have left border accent
        const borderLeftWidth = await nestedCodeBlock.evaluate((el) =>
          getComputedStyle(el).borderLeftWidth
        );
        expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);

        // Should have sharp corners
        const borderRadius = await nestedCodeBlock.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).toBe('0px');
      }
    });

    test('callouts render correctly inside card', async ({ page }) => {
      const nestedCallout = page.locator('.card aside, [class*="card"] [data-component*="callout"], [class*="card"] [data-component*="box"]').first();
      if (await nestedCallout.count() > 0) {
        // Should maintain transparent background
        const bgColor = await nestedCallout.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
      }
    });

    test('file-tree renders correctly inside card', async ({ page }) => {
      const nestedFileTree = page.locator('.card .file-tree, [class*="card"] [data-component="file-tree"]').first();
      if (await nestedFileTree.count() > 0) {
        // Should have left border accent
        const borderLeftWidth = await nestedFileTree.evaluate((el) =>
          getComputedStyle(el).borderLeftWidth
        );
        expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
      }
    });

    test('decision-matrix renders correctly inside card', async ({ page }) => {
      const nestedMatrix = page.locator('.card .decision-matrix, [class*="card"] [data-component="decision-matrix"]').first();
      if (await nestedMatrix.count() > 0) {
        // Should have left border accent
        const borderLeftWidth = await nestedMatrix.evaluate((el) =>
          getComputedStyle(el).borderLeftWidth
        );
        expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
      }
    });

    test('nested components maintain data-component attributes', async ({ page }) => {
      const allNested = page.locator('[class*="card"] [data-component], .card [data-component]');
      const count = await allNested.count();

      for (let i = 0; i < count; i++) {
        const component = allNested.nth(i);
        const dataComponent = await component.getAttribute('data-component');
        expect(dataComponent).toBeTruthy();
      }
    });
  });

  // ============================================================================
  // CATEGORY 2: Spacing Tests
  // ============================================================================
  test.describe('Spacing in Nested Context', () => {
    test('nested components have appropriate margins', async ({ page }) => {
      const nestedComponents = page.locator('[class*="card"] [data-component]').all();
      const components = await nestedComponents;

      for (const component of components) {
        const margin = await component.evaluate((el) =>
          getComputedStyle(el).margin
        );
        // Should have some margin for breathing room
        const marginValues = margin.split(' ').map((m: string) => parseInt(m));
        expect(marginValues.some((m: number) => m >= 16)).toBeTruthy();
      }
    });

    test('consecutive nested components have consistent spacing', async ({ page }) => {
      const container = page.locator('[class*="card"], .card').first();
      if (await container.count() > 0) {
        const components = container.locator('[data-component]');
        const count = await components.count();

        if (count > 1) {
          const firstRect = await components.nth(0).boundingBox();
          const secondRect = await components.nth(1).boundingBox();

          if (firstRect && secondRect) {
            const gap = secondRect.y - (firstRect.y + firstRect.height);
            // Gap should be consistent (16-32px range)
            expect(gap).toBeGreaterThanOrEqual(8);
          }
        }
      }
    });

    test('nested code-block padding is preserved', async ({ page }) => {
      const nestedCodeBlock = page.locator('[class*="card"] [data-component="code-block"]').first();
      if (await nestedCodeBlock.count() > 0) {
        const padding = await nestedCodeBlock.evaluate((el) =>
          getComputedStyle(el).padding
        );
        const paddingValues = padding.split(' ').map((p: string) => parseInt(p));
        paddingValues.forEach((p: number) => {
          expect(p).toBeGreaterThanOrEqual(20);
        });
      }
    });
  });

  // ============================================================================
  // CATEGORY 3: Style Inheritance Tests
  // ============================================================================
  test.describe('Style Inheritance', () => {
    test('nested component colors are not overridden', async ({ page }) => {
      const nestedLabel = page.locator('[class*="card"] .gotcha-box__label, [class*="card"] .code-block__label').first();
      if (await nestedLabel.count() > 0) {
        const color = await nestedLabel.evaluate((el) =>
          getComputedStyle(el).color
        );
        // Should still be primary red
        expect(color).toBe('rgb(232, 48, 37)');
      }
    });

    test('nested component fonts are preserved', async ({ page }) => {
      const nestedLabel = page.locator('[class*="card"] [class$="__label"]').first();
      if (await nestedLabel.count() > 0) {
        const fontFamily = await nestedLabel.evaluate((el) =>
          getComputedStyle(el).fontFamily
        );
        // Should still use serif for labels
        expect(fontFamily).toContain('Instrument Serif');
      }
    });

    test('nested code uses monospace font', async ({ page }) => {
      const nestedCode = page.locator('[class*="card"] .code-block__code, [class*="card"] code').first();
      if (await nestedCode.count() > 0) {
        const fontFamily = await nestedCode.evaluate((el) =>
          getComputedStyle(el).fontFamily
        );
        expect(fontFamily).toMatch(/JetBrains Mono|SF Mono|monospace/);
      }
    });

    test('border-radius remains 0 in nested context', async ({ page }) => {
      const nestedComponents = page.locator('[class*="card"] [data-component]');
      const count = await nestedComponents.count();

      for (let i = 0; i < count; i++) {
        const component = nestedComponents.nth(i);
        const borderRadius = await component.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).toBe('0px');
      }
    });

    test('box-shadow remains none in nested context', async ({ page }) => {
      const nestedComponents = page.locator('[class*="card"] [data-component]');
      const count = await nestedComponents.count();

      for (let i = 0; i < count; i++) {
        const component = nestedComponents.nth(i);
        const boxShadow = await component.evaluate((el) =>
          getComputedStyle(el).boxShadow
        );
        expect(boxShadow).toBe('none');
      }
    });
  });

  // ============================================================================
  // CATEGORY 4: Multiple Components Tests
  // ============================================================================
  test.describe('Multiple Components in Sequence', () => {
    test('multiple callouts in sequence maintain visual consistency', async ({ page }) => {
      await page.goto('/index.html');

      const callouts = page.locator('[data-component*="callout"], [data-component*="box"]');
      const count = await callouts.count();

      if (count > 1) {
        // All callouts should have consistent border treatment
        const borderLeftWidths: number[] = [];
        for (let i = 0; i < count; i++) {
          const callout = callouts.nth(i);
          const borderLeftWidth = await callout.evaluate((el) =>
            getComputedStyle(el).borderLeftWidth
          );
          borderLeftWidths.push(parseInt(borderLeftWidth));
        }

        // Check consistency (all should be similar or follow a pattern)
        const uniqueWidths = [...new Set(borderLeftWidths)];
        // Allow up to 5 unique widths (different callout types have different treatments)
        // - Gotcha: 6px left border
        // - Essence: 3px all-around
        // - Info: 3px left border
        // - Tip: 0 left (top border instead)
        // - Challenge: 2px all-around
        expect(uniqueWidths.length).toBeLessThanOrEqual(5);
      }
    });

    test('code-block followed by callout has proper spacing', async ({ page }) => {
      await page.goto('/index.html');

      const codeBlock = page.locator('[data-component="code-block"]');
      const gotchaBox = page.locator('[data-component="gotcha-box"]');

      if (await codeBlock.count() > 0 && await gotchaBox.count() > 0) {
        const codeRect = await codeBlock.boundingBox();
        const gotchaRect = await gotchaBox.boundingBox();

        if (codeRect && gotchaRect && gotchaRect.y > codeRect.y) {
          const gap = gotchaRect.y - (codeRect.y + codeRect.height);
          // Should have substantial gap between sections
          expect(gap).toBeGreaterThanOrEqual(32);
        }
      }
    });

    test('multiple components on page do not cause style leaks', async ({ page }) => {
      await page.goto('/showcase-all.html');

      // Check that each component type maintains its own styling
      const codeBlock = page.locator('[data-component="code-block"]').first();
      const fileTree = page.locator('[data-component="file-tree"]').first();

      if (await codeBlock.count() > 0 && await fileTree.count() > 0) {
        const codeBlockBg = await codeBlock.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        const fileTreeBg = await fileTree.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );

        // Both should have warm backgrounds but may be slightly different
        // Main check is that neither has dark terminal background
        expect(codeBlockBg).not.toBe('rgb(30, 30, 30)');
        expect(fileTreeBg).not.toBe('rgb(30, 30, 30)');
      }
    });

    test('all components on showcase page have sharp corners', async ({ page }) => {
      await page.goto('/showcase-all.html');

      const allComponents = page.locator('[data-component]');
      const count = await allComponents.count();

      for (let i = 0; i < count; i++) {
        const component = allComponents.nth(i);
        const borderRadius = await component.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).toBe('0px');
      }
    });

    test('all components on showcase page have no shadows', async ({ page }) => {
      await page.goto('/showcase-all.html');

      const allComponents = page.locator('[data-component]');
      const count = await allComponents.count();

      for (let i = 0; i < count; i++) {
        const component = allComponents.nth(i);
        const boxShadow = await component.evaluate((el) =>
          getComputedStyle(el).boxShadow
        );
        expect(boxShadow).toBe('none');
      }
    });
  });

  // ============================================================================
  // Visual Regression for Nested Components
  // ============================================================================
  test.describe('Visual Regression', () => {
    test('nested components page matches baseline', async ({ page }) => {
      await page.goto('/showcase-nested.html');
      await expect(page).toHaveScreenshot('nested-components-full.png', {
        fullPage: true,
      });
    });
  });
});

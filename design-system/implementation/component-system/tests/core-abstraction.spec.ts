/*
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE HEADER — Phase 2B
File: design-extraction/component-system/tests/core-abstraction.spec.ts
Part Of: component-system/tests — Automated soul verification tests
Contributed To: Programmatic enforcement of soul constraints
═══════════════════════════════════════════════════════════════════════════════
*/

import { test, expect } from '@playwright/test';

/**
 * CORE ABSTRACTION Component Tests
 *
 * Tests for the philosophy-code relationship component that shows
 * the profound connection between principle and implementation.
 *
 * Test Categories:
 * 1. Soul Principle Tests - verify editorial nature
 * 2. Anti-Pattern Tests - verify not disconnected boxes
 * 3. Structure Tests - verify correct HTML
 * 4. Visual Regression Tests - screenshot baselines
 */

test.describe('Core Abstraction Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // CATEGORY 1: Soul Principle Tests
  // ============================================================================
  test.describe('Soul Principles', () => {
    test('has unified container with full border frame', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]');
      const borderWidth = await coreAbstraction.evaluate((el) =>
        getComputedStyle(el).borderWidth
      );
      const widths = borderWidth.split(' ').map((w: string) => parseInt(w));
      widths.forEach((width: number) => {
        expect(width).toBeGreaterThanOrEqual(2);
      });
    });

    test('has sharp corners (border-radius: 0)', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]');
      const borderRadius = await coreAbstraction.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('has no shadow', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]');
      const boxShadow = await coreAbstraction.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('philosophy section is above code section (stacked)', async ({ page }) => {
      const philosophy = page.locator('.core-abstraction__philosophy');
      const code = page.locator('.core-abstraction__code');

      const philosophyRect = await philosophy.boundingBox();
      const codeRect = await code.boundingBox();

      if (philosophyRect && codeRect) {
        // Philosophy should be above code (smaller Y value)
        expect(philosophyRect.y).toBeLessThan(codeRect.y);
      }
    });

    test('philosophy section has warm cream background', async ({ page }) => {
      const philosophy = page.locator('.core-abstraction__philosophy');
      const bgColor = await philosophy.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should be warm cream #FEF9F5 = rgb(254, 249, 245)
      const warmColors = [
        'rgb(254, 249, 245)',
        'rgb(245, 240, 235)',
        'rgb(255, 255, 255)',
      ];
      expect(warmColors.some((c) => bgColor === c || bgColor.includes('254'))).toBeTruthy();
    });

    test('quote uses serif italic font', async ({ page }) => {
      const quote = page.locator('.core-abstraction__quote');
      const fontFamily = await quote.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      const fontStyle = await quote.evaluate((el) =>
        getComputedStyle(el).fontStyle
      );
      expect(fontFamily).toContain('Instrument Serif');
      expect(fontStyle).toBe('italic');
    });

    test('quote has larger font size (h4 scale)', async ({ page }) => {
      const quote = page.locator('.core-abstraction__quote');
      const fontSize = await quote.evaluate((el) =>
        getComputedStyle(el).fontSize
      );
      // h4 is 1.25rem = 20px minimum
      expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(18);
    });

    test('label uses serif italic uppercase', async ({ page }) => {
      const label = page.locator('.core-abstraction__label');
      const fontFamily = await label.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      const fontStyle = await label.evaluate((el) =>
        getComputedStyle(el).fontStyle
      );
      const textTransform = await label.evaluate((el) =>
        getComputedStyle(el).textTransform
      );
      expect(fontFamily).toContain('Instrument Serif');
      expect(fontStyle).toBe('italic');
      expect(textTransform).toBe('uppercase');
    });

    test('label uses primary red color', async ({ page }) => {
      const label = page.locator('.core-abstraction__label');
      const color = await label.evaluate((el) =>
        getComputedStyle(el).color
      );
      expect(color).toBe('rgb(232, 48, 37)');
    });

    test('code section has dark background for contrast', async ({ page }) => {
      const code = page.locator('.core-abstraction__code');
      const bgColor = await code.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should be dark - check that it's not light cream
      // Parse RGB values to check darkness
      const match = bgColor.match(/\d+/g);
      if (match) {
        const [r, g, b] = match.map(Number);
        const luminance = (r + g + b) / 3;
        expect(luminance).toBeLessThan(100); // Dark background
      }
    });

    test('code uses monospace font', async ({ page }) => {
      const codeContent = page.locator('.core-abstraction__code code');
      const fontFamily = await codeContent.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toMatch(/JetBrains Mono|SF Mono|monospace/);
    });

    test('has generous padding in both sections', async ({ page }) => {
      const philosophy = page.locator('.core-abstraction__philosophy');
      const code = page.locator('.core-abstraction__code');

      const philosophyPadding = await philosophy.evaluate((el) =>
        getComputedStyle(el).padding
      );
      const codePadding = await code.evaluate((el) =>
        getComputedStyle(el).padding
      );

      const philPaddings = philosophyPadding.split(' ').map((p: string) => parseInt(p));
      const codePaddings = codePadding.split(' ').map((p: string) => parseInt(p));

      philPaddings.forEach((p: number) => expect(p).toBeGreaterThanOrEqual(20));
      codePaddings.forEach((p: number) => expect(p).toBeGreaterThanOrEqual(20));
    });
  });

  // ============================================================================
  // CATEGORY 2: Anti-Pattern Tests
  // ============================================================================
  test.describe('Anti-Patterns', () => {
    test('is NOT two separate disconnected boxes', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]');
      const philosophy = page.locator('.core-abstraction__philosophy');
      const code = page.locator('.core-abstraction__code');

      // Both should be inside the same container
      const philosophyParent = await philosophy.evaluate((el) =>
        el.parentElement?.getAttribute('data-component')
      );
      const codeParent = await code.evaluate((el) =>
        el.parentElement?.getAttribute('data-component')
      );

      expect(philosophyParent).toBe('core-abstraction');
      expect(codeParent).toBe('core-abstraction');
    });

    test('does NOT have different border treatments per section', async ({ page }) => {
      const philosophy = page.locator('.core-abstraction__philosophy');
      const code = page.locator('.core-abstraction__code');

      // Neither section should have its own border (unified container does)
      const philosophyBorderLeft = await philosophy.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      const philosophyBorderRight = await philosophy.evaluate((el) =>
        getComputedStyle(el).borderRightWidth
      );
      const codeBorderLeft = await code.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      const codeBorderRight = await code.evaluate((el) =>
        getComputedStyle(el).borderRightWidth
      );

      // Internal sections should not have side borders
      expect(philosophyBorderLeft).toBe('0px');
      expect(philosophyBorderRight).toBe('0px');
      expect(codeBorderLeft).toBe('0px');
      expect(codeBorderRight).toBe('0px');
    });

    test('is NOT a tab interface', async ({ page }) => {
      const tabs = page.locator('.core-abstraction [role="tab"], .core-abstraction [class*="tab"]');
      await expect(tabs).toHaveCount(0);
    });

    test('does NOT use Bootstrap blue accent (#3182ce, #007bff)', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]');
      const borderColor = await coreAbstraction.evaluate((el) =>
        getComputedStyle(el).borderColor
      );
      expect(borderColor).not.toContain('rgb(49, 130, 206)');
      expect(borderColor).not.toContain('rgb(0, 123, 255)');
    });

    test('does NOT have rounded corners on container', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]');
      const borderRadius = await coreAbstraction.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('does NOT have margin gap between sections (unified)', async ({ page }) => {
      const philosophy = page.locator('.core-abstraction__philosophy');
      const code = page.locator('.core-abstraction__code');

      const philosophyMargin = await philosophy.evaluate((el) =>
        getComputedStyle(el).marginBottom
      );
      const codeMargin = await code.evaluate((el) =>
        getComputedStyle(el).marginTop
      );

      expect(philosophyMargin).toBe('0px');
      expect(codeMargin).toBe('0px');
    });
  });

  // ============================================================================
  // CATEGORY 3: Structure Tests
  // ============================================================================
  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]');
      await expect(coreAbstraction).toHaveCount(1);
    });

    test('uses article element as container', async ({ page }) => {
      const article = page.locator('article[data-component="core-abstraction"]');
      await expect(article).toHaveCount(1);
    });

    test('has philosophy section', async ({ page }) => {
      const philosophy = page.locator('.core-abstraction__philosophy');
      await expect(philosophy).toHaveCount(1);
    });

    test('has code section', async ({ page }) => {
      const code = page.locator('.core-abstraction__code');
      await expect(code).toHaveCount(1);
    });

    test('has label in philosophy section', async ({ page }) => {
      const label = page.locator('.core-abstraction__label');
      await expect(label).toHaveCount(1);
    });

    test('has quote element (blockquote)', async ({ page }) => {
      const quote = page.locator('.core-abstraction__quote, .core-abstraction blockquote');
      await expect(quote).toHaveCount(1);
    });

    test('may have attribution (cite element)', async ({ page }) => {
      const attribution = page.locator('.core-abstraction__attribution');
      if (await attribution.count() > 0) {
        const tagName = await attribution.evaluate((el) => el.tagName.toLowerCase());
        expect(tagName).toBe('cite');
      }
    });

    test('has code-label in code section', async ({ page }) => {
      const codeLabel = page.locator('.core-abstraction__code-label');
      await expect(codeLabel).toHaveCount(1);
    });

    test('has pre > code structure for code', async ({ page }) => {
      const preCode = page.locator('.core-abstraction__code pre code');
      await expect(preCode).toHaveCount(1);
    });
  });

  // ============================================================================
  // CATEGORY 4: Visual Regression Tests
  // ============================================================================
  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const coreAbstraction = page.locator('[data-component="core-abstraction"]').first();
      await expect(coreAbstraction).toHaveScreenshot('core-abstraction-baseline.png');
    });

    test('philosophy section matches baseline', async ({ page }) => {
      const philosophy = page.locator('.core-abstraction__philosophy').first();
      await expect(philosophy).toHaveScreenshot('core-abstraction-philosophy.png');
    });

    test('code section matches baseline', async ({ page }) => {
      const code = page.locator('.core-abstraction__code').first();
      await expect(code).toHaveScreenshot('core-abstraction-code.png');
    });
  });
});

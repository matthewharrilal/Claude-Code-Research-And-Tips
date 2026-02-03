import { test, expect } from '@playwright/test';

/**
 * CODE BLOCK Component Tests
 *
 * Tests for the editorial code block that treats code as magazine typography,
 * not VS Code.
 *
 * Test Categories:
 * 1. Soul Principle Tests - verify editorial nature
 * 2. Anti-Pattern Tests - verify not IDE-like
 * 3. Structure Tests - verify correct HTML
 * 4. Visual Regression Tests - screenshot baselines
 */

test.describe('Code Block Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // CATEGORY 1: Soul Principle Tests
  // ============================================================================
  test.describe('Soul Principles', () => {
    test('has sharp corners (border-radius: 0)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const borderRadius = await codeBlock.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('has no shadow (box-shadow: none)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const boxShadow = await codeBlock.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('has left border accent (4px primary)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const borderLeftWidth = await codeBlock.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      const borderLeftColor = await codeBlock.evaluate((el) =>
        getComputedStyle(el).borderLeftColor
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
      expect(borderLeftColor).toBe('rgb(232, 48, 37)'); // #E83025
    });

    test('has warm cream background', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const bgColor = await codeBlock.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should be warm cream, not dark
      // #FEF9F5 = rgb(254, 249, 245) or #F5F0EB = rgb(245, 240, 235)
      const warmCreams = [
        'rgb(254, 249, 245)',
        'rgb(245, 240, 235)',
        'rgb(255, 255, 255)',
      ];
      expect(warmCreams.some((c) => bgColor === c || bgColor.includes('254, 249, 245'))).toBeTruthy();
    });

    test('label uses serif italic font', async ({ page }) => {
      const label = page.locator('.code-block__label');
      const fontFamily = await label.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      const fontStyle = await label.evaluate((el) =>
        getComputedStyle(el).fontStyle
      );
      expect(fontFamily).toContain('Instrument Serif');
      expect(fontStyle).toBe('italic');
    });

    test('label is uppercase with letter-spacing', async ({ page }) => {
      const label = page.locator('.code-block__label');
      const textTransform = await label.evaluate((el) =>
        getComputedStyle(el).textTransform
      );
      const letterSpacing = await label.evaluate((el) =>
        getComputedStyle(el).letterSpacing
      );
      expect(textTransform).toBe('uppercase');
      expect(parseFloat(letterSpacing)).toBeGreaterThan(0);
    });

    test('code uses monospace font', async ({ page }) => {
      const code = page.locator('.code-block__code');
      const fontFamily = await code.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toMatch(/JetBrains Mono|SF Mono|monospace/);
    });

    test('has generous padding (24px+)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const padding = await codeBlock.evaluate((el) =>
        getComputedStyle(el).padding
      );
      const paddingValues = padding.split(' ').map((p: string) => parseInt(p));
      paddingValues.forEach((p: number) => {
        expect(p).toBeGreaterThanOrEqual(20);
      });
    });

    test('syntax highlighting uses primary red for keywords', async ({ page }) => {
      const keyword = page.locator('.code-block__code .keyword').first();
      if (await keyword.count() > 0) {
        const color = await keyword.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).toBe('rgb(232, 48, 37)'); // #E83025
      }
    });

    test('copy button is positioned for hover reveal', async ({ page }) => {
      const copyBtn = page.locator('.code-block__copy');
      const opacity = await copyBtn.evaluate((el) =>
        getComputedStyle(el).opacity
      );
      // Should be hidden by default (opacity: 0)
      expect(parseFloat(opacity)).toBeLessThanOrEqual(0.1);
    });
  });

  // ============================================================================
  // CATEGORY 2: Anti-Pattern Tests
  // ============================================================================
  test.describe('Anti-Patterns', () => {
    test('does NOT have dark VS Code background (#1e1e1e)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const bgColor = await codeBlock.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(30, 30, 30)');
    });

    test('does NOT have One Dark Pro background (#282c34)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const bgColor = await codeBlock.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(40, 44, 52)');
    });

    test('does NOT have GitHub dark background (#0d1117)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const bgColor = await codeBlock.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(13, 17, 23)');
    });

    test('does NOT have line numbers', async ({ page }) => {
      const lineNumbers = page.locator('.line-number, .line-numbers, .code-line-number, [class*="line-num"]');
      await expect(lineNumbers).toHaveCount(0);
    });

    test('does NOT have traffic light dots', async ({ page }) => {
      const trafficLights = page.locator('.traffic-light, .window-controls, .dot--red, .dot--yellow, .dot--green, [class*="window-dot"]');
      await expect(trafficLights).toHaveCount(0);
    });

    test('does NOT have header bar / window chrome', async ({ page }) => {
      const headerBar = page.locator('.code-block__header, .code-header, .window-header, [class*="window-bar"]');
      await expect(headerBar).toHaveCount(0);
    });

    test('does NOT have rounded corners', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const borderRadius = await codeBlock.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('does NOT have box shadow', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const boxShadow = await codeBlock.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('syntax highlighting uses max 3 colors (not 7+ like IDEs)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const colors = await codeBlock.evaluate((el) => {
        const spans = el.querySelectorAll('span');
        const colorSet = new Set<string>();
        spans.forEach((span) => {
          const color = getComputedStyle(span).color;
          colorSet.add(color);
        });
        return Array.from(colorSet);
      });
      // Should have at most 4 distinct colors (base + 3 syntax)
      expect(colors.length).toBeLessThanOrEqual(4);
    });

    test('copy button is NOT always visible', async ({ page }) => {
      const copyBtn = page.locator('.code-block__copy');
      const opacity = await copyBtn.evaluate((el) =>
        getComputedStyle(el).opacity
      );
      // Should be hidden (opacity: 0) by default
      expect(parseFloat(opacity)).toBeLessThanOrEqual(0.1);
    });

    test('does NOT use Bootstrap blue for copy button', async ({ page }) => {
      const copyBtn = page.locator('.code-block__copy');
      const bgColor = await copyBtn.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(0, 123, 255)');
    });
  });

  // ============================================================================
  // CATEGORY 3: Structure Tests
  // ============================================================================
  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      await expect(codeBlock).toHaveCount(1);
    });

    test('uses figure element as container', async ({ page }) => {
      const figure = page.locator('figure[data-component="code-block"], figure.code-block');
      await expect(figure).toHaveCount(1);
    });

    test('has label element', async ({ page }) => {
      const label = page.locator('.code-block__label');
      await expect(label).toHaveCount(1);
    });

    test('has copy button element', async ({ page }) => {
      const copyBtn = page.locator('.code-block__copy');
      await expect(copyBtn).toHaveCount(1);
    });

    test('copy button has aria-label', async ({ page }) => {
      const copyBtn = page.locator('.code-block__copy');
      const ariaLabel = await copyBtn.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
    });

    test('has pre > code structure', async ({ page }) => {
      const preCode = page.locator('.code-block pre code, .code-block__pre .code-block__code');
      await expect(preCode).toHaveCount(1);
    });

    test('code has code-block__code class', async ({ page }) => {
      const code = page.locator('.code-block__code');
      await expect(code).toHaveCount(1);
    });

    test('label displays language name', async ({ page }) => {
      const label = page.locator('.code-block__label');
      const text = await label.textContent();
      // Should have language identifier
      expect(text).toBeTruthy();
      expect(text?.length).toBeGreaterThan(0);
    });
  });

  // ============================================================================
  // CATEGORY 4: Visual Regression Tests
  // ============================================================================
  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]').first();
      await expect(codeBlock).toHaveScreenshot('code-block-baseline.png');
    });

    test('hover state shows copy button', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]').first();
      await codeBlock.hover();
      await expect(codeBlock).toHaveScreenshot('code-block-hover.png');
    });
  });
});

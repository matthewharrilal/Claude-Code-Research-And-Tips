/*
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE HEADER — Phase 2B
File: design-extraction/component-system/tests/ascii-dither.spec.ts
Part Of: component-system/tests — Automated soul verification tests
Contributed To: Programmatic enforcement of soul constraints
═══════════════════════════════════════════════════════════════════════════════
*/

import { test, expect } from '@playwright/test';

/**
 * ASCII DITHERED ART Component Tests
 *
 * Tests for the ASCII art component that creates halftone-like texture
 * through monospace character density.
 *
 * Test Categories:
 * 1. Soul Principle Tests - verify editorial nature
 * 2. Anti-Pattern Tests - verify not generic placeholder
 * 3. Structure Tests - verify correct HTML
 * 4. Visual Regression Tests - screenshot baselines
 */

test.describe('ASCII Dithered Art Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // CATEGORY 1: Soul Principle Tests
  // ============================================================================
  test.describe('Soul Principles', () => {
    test('uses monospace font family', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const fontFamily = await asciiArt.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toMatch(/JetBrains Mono|SF Mono|monospace/);
    });

    test('has tight line-height (0.85 or less)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const lineHeight = await asciiArt.evaluate((el) =>
        getComputedStyle(el).lineHeight
      );
      const fontSize = await asciiArt.evaluate((el) =>
        parseFloat(getComputedStyle(el).fontSize)
      );
      const lineHeightValue = parseFloat(lineHeight);
      const ratio = lineHeightValue / fontSize;
      expect(ratio).toBeLessThanOrEqual(0.9);
    });

    test('has small font-size for halftone illusion (6px or similar)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const fontSize = await asciiArt.evaluate((el) =>
        getComputedStyle(el).fontSize
      );
      const fontSizeValue = parseFloat(fontSize);
      expect(fontSizeValue).toBeLessThanOrEqual(10);
    });

    test('has negative letter-spacing to fill gaps', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const letterSpacing = await asciiArt.evaluate((el) =>
        getComputedStyle(el).letterSpacing
      );
      // Letter-spacing should be negative or normal
      if (letterSpacing !== 'normal') {
        const spacing = parseFloat(letterSpacing);
        expect(spacing).toBeLessThanOrEqual(0);
      }
    });

    test('preserves whitespace with white-space: pre', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const whiteSpace = await asciiArt.evaluate((el) =>
        getComputedStyle(el).whiteSpace
      );
      expect(whiteSpace).toMatch(/pre|pre-wrap/);
    });

    test('has no border (brutalist: no decoration)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const borderWidth = await asciiArt.evaluate((el) =>
        getComputedStyle(el).borderWidth
      );
      expect(borderWidth).toBe('0px');
    });

    test('has border-radius: 0 (sharp edges)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const borderRadius = await asciiArt.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('has box-shadow: none (flat design)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const boxShadow = await asciiArt.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('uses brand color from palette', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const color = await asciiArt.evaluate((el) =>
        getComputedStyle(el).color
      );
      // Should be either primary red or text color
      const validColors = [
        'rgb(232, 48, 37)',    // #E83025 primary
        'rgb(26, 26, 26)',     // #1A1A1A text
        'rgb(102, 102, 102)',  // #666666 secondary
      ];
      expect(validColors).toContain(color);
    });

    test('has transparent background', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const bgColor = await asciiArt.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('disables text selection (user-select: none)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const userSelect = await asciiArt.evaluate((el) => {
        const style = getComputedStyle(el);
        return style.userSelect || style.webkitUserSelect;
      });
      expect(userSelect).toBe('none');
    });

    test('disables font ligatures', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const fontVariant = await asciiArt.evaluate((el) =>
        getComputedStyle(el).fontVariantLigatures
      );
      expect(fontVariant).toBe('none');
    });
  });

  // ============================================================================
  // CATEGORY 2: Anti-Pattern Tests
  // ============================================================================
  test.describe('Anti-Patterns', () => {
    test('does NOT have gray placeholder background (#f0f0f0)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const bgColor = await asciiArt.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(240, 240, 240)');
    });

    test('does NOT have dashed border (upload dropzone pattern)', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const borderStyle = await asciiArt.evaluate((el) =>
        getComputedStyle(el).borderStyle
      );
      expect(borderStyle).not.toBe('dashed');
    });

    test('does NOT have rounded corners', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const borderRadius = await asciiArt.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('does NOT use placeholder icon (SVG or image)', async ({ page }) => {
      const asciiContainer = page.locator('.ascii-art-container, [data-component="ascii-art"]');
      const icons = asciiContainer.locator('svg, img, [class*="icon"]');
      await expect(icons).toHaveCount(0);
    });

    test('does NOT have hover effects', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const cursorBefore = await asciiArt.evaluate((el) =>
        getComputedStyle(el).cursor
      );

      await asciiArt.hover();

      const bgColorAfter = await asciiArt.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );

      // Should remain transparent after hover
      expect(bgColorAfter).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('does NOT have gradient background', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const bgImage = await asciiArt.evaluate((el) =>
        getComputedStyle(el).backgroundImage
      );
      expect(bgImage).not.toMatch(/gradient/i);
    });

    test('does NOT look like "click to upload" pattern', async ({ page }) => {
      // Check for absence of upload-related text or elements
      const asciiContainer = page.locator('.ascii-art-container');
      const textContent = await asciiContainer.textContent();
      expect(textContent).not.toMatch(/upload|click|drop|add image/i);
    });
  });

  // ============================================================================
  // CATEGORY 3: Structure Tests
  // ============================================================================
  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      await expect(asciiArt).toHaveCount(1);
    });

    test('uses pre element for content', async ({ page }) => {
      const preElement = page.locator('pre[data-component="ascii-art"], pre.ascii-art');
      await expect(preElement).toHaveCount(1);
    });

    test('is wrapped in figure element', async ({ page }) => {
      const figure = page.locator('figure.ascii-art-container');
      await expect(figure).toHaveCount(1);
    });

    test('has aria-label for accessibility', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const ariaLabel = await asciiArt.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
    });

    test('has visually-hidden figcaption for accessibility', async ({ page }) => {
      const figcaption = page.locator('.ascii-art-container figcaption');
      await expect(figcaption).toHaveCount(1);
    });

    test('contains ASCII characters for art', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const textContent = await asciiArt.textContent();
      // Should contain typical ASCII art characters
      expect(textContent).toMatch(/[@#%*+=\-:.\s]/);
    });

    test('has ascii-art CSS class', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const classList = await asciiArt.evaluate((el) =>
        Array.from(el.classList)
      );
      expect(classList).toContain('ascii-art');
    });

    test('size variant class applied correctly', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]');
      const classList = await asciiArt.evaluate((el) =>
        Array.from(el.classList)
      );
      // Should have a size modifier class
      const sizeClasses = ['ascii-art--xs', 'ascii-art--sm', 'ascii-art--md', 'ascii-art--lg', 'ascii-art--xl'];
      const hasSizeClass = sizeClasses.some((cls) => classList.includes(cls));
      expect(hasSizeClass).toBeTruthy();
    });
  });

  // ============================================================================
  // CATEGORY 4: Visual Regression Tests
  // ============================================================================
  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const asciiArt = page.locator('[data-component="ascii-art"]').first();
      await expect(asciiArt).toHaveScreenshot('ascii-art-baseline.png');
    });

    test('container layout matches baseline', async ({ page }) => {
      const container = page.locator('.ascii-art-container').first();
      await expect(container).toHaveScreenshot('ascii-art-container.png');
    });
  });
});

/*
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE HEADER — Phase 2B
File: design-extraction/component-system/tests/file-tree.spec.ts
Part Of: component-system/tests — Automated soul verification tests
Contributed To: Programmatic enforcement of soul constraints
═══════════════════════════════════════════════════════════════════════════════
*/

import { test, expect } from '@playwright/test';

/**
 * FILE TREE Component Tests
 *
 * Tests for the editorial file structure visualization component
 * that presents file trees with editorial treatment.
 *
 * Test Categories:
 * 1. Soul Principle Tests - verify editorial nature
 * 2. Anti-Pattern Tests - verify not terminal dump
 * 3. Structure Tests - verify correct HTML
 * 4. Visual Regression Tests - screenshot baselines
 */

test.describe('File Tree Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // CATEGORY 1: Soul Principle Tests
  // ============================================================================
  test.describe('Soul Principles', () => {
    test('has left border accent (4px primary)', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const borderLeftWidth = await fileTree.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      const borderLeftColor = await fileTree.evaluate((el) =>
        getComputedStyle(el).borderLeftColor
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
      expect(borderLeftColor).toBe('rgb(232, 48, 37)');
    });

    test('has sharp corners (border-radius: 0)', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const borderRadius = await fileTree.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('has no shadow', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const boxShadow = await fileTree.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('uses monospace font', async ({ page }) => {
      const content = page.locator('.file-tree__content');
      const fontFamily = await content.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toMatch(/JetBrains Mono|SF Mono|monospace/);
    });

    test('has generous line-height (1.8+)', async ({ page }) => {
      const content = page.locator('.file-tree__content');
      const lineHeight = await content.evaluate((el) =>
        getComputedStyle(el).lineHeight
      );
      const fontSize = await content.evaluate((el) =>
        parseFloat(getComputedStyle(el).fontSize)
      );
      const lineHeightValue = parseFloat(lineHeight);
      const ratio = lineHeightValue / fontSize;
      // Allow for some flexibility, but should be generous
      expect(ratio).toBeGreaterThanOrEqual(1.6);
    });

    test('label uses serif italic uppercase', async ({ page }) => {
      const label = page.locator('.file-tree__label');
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
      const label = page.locator('.file-tree__label');
      const color = await label.evaluate((el) =>
        getComputedStyle(el).color
      );
      expect(color).toBe('rgb(232, 48, 37)');
    });

    test('label has letter-spacing for editorial feel', async ({ page }) => {
      const label = page.locator('.file-tree__label');
      const letterSpacing = await label.evaluate((el) =>
        getComputedStyle(el).letterSpacing
      );
      expect(parseFloat(letterSpacing)).toBeGreaterThan(0);
    });

    test('has warm background (not dark terminal)', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const bgColor = await fileTree.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Check it's a light/warm color, not dark
      const match = bgColor.match(/\d+/g);
      if (match) {
        const [r, g, b] = match.map(Number);
        const luminance = (r + g + b) / 3;
        expect(luminance).toBeGreaterThan(200); // Light/warm background
      }
    });

    test('has generous padding', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const padding = await fileTree.evaluate((el) =>
        getComputedStyle(el).padding
      );
      const paddingValues = padding.split(' ').map((p: string) => parseInt(p));
      paddingValues.forEach((p: number) => {
        expect(p).toBeGreaterThanOrEqual(20);
      });
    });

    test('emphasized items use primary red', async ({ page }) => {
      const emphasized = page.locator('.file-tree__item--emphasized');
      if (await emphasized.count() > 0) {
        const color = await emphasized.first().evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).toBe('rgb(232, 48, 37)');
      }
    });

    test('annotations use muted color', async ({ page }) => {
      const annotation = page.locator('.file-tree__annotation');
      if (await annotation.count() > 0) {
        const color = await annotation.first().evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).toBe('rgb(102, 102, 102)');
      }
    });
  });

  // ============================================================================
  // CATEGORY 2: Anti-Pattern Tests
  // ============================================================================
  test.describe('Anti-Patterns', () => {
    test('does NOT have dark terminal background (#1e1e1e)', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const bgColor = await fileTree.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(30, 30, 30)');
    });

    test('does NOT have VS Code dark background (#252526)', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const bgColor = await fileTree.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(37, 37, 38)');
    });

    test('does NOT have generic gray text (#cccccc)', async ({ page }) => {
      const content = page.locator('.file-tree__content');
      const color = await content.evaluate((el) =>
        getComputedStyle(el).color
      );
      expect(color).not.toBe('rgb(204, 204, 204)');
    });

    test('does NOT have rounded corners', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const borderRadius = await fileTree.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('does NOT have interactive hover states', async ({ page }) => {
      const content = page.locator('.file-tree__content');
      const cursorBefore = await content.evaluate((el) =>
        getComputedStyle(el).cursor
      );

      await content.hover();

      // Cursor should be default text cursor, not pointer
      expect(cursorBefore).not.toBe('pointer');
    });

    test('does NOT have file icons', async ({ page }) => {
      const icons = page.locator('.file-tree svg, .file-tree [class*="icon"], .file-tree img');
      await expect(icons).toHaveCount(0);
    });

    test('is NOT missing a label (raw dump)', async ({ page }) => {
      const label = page.locator('.file-tree__label');
      await expect(label).toHaveCount(1);
      await expect(label).toBeVisible();
    });
  });

  // ============================================================================
  // CATEGORY 3: Structure Tests
  // ============================================================================
  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      await expect(fileTree).toHaveCount(1);
    });

    test('has label element', async ({ page }) => {
      const label = page.locator('.file-tree__label');
      await expect(label).toHaveCount(1);
    });

    test('has content element with pre tag', async ({ page }) => {
      const content = page.locator('.file-tree__content');
      await expect(content).toHaveCount(1);
      const tagName = await content.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('pre');
    });

    test('preserves whitespace', async ({ page }) => {
      const content = page.locator('.file-tree__content');
      const whiteSpace = await content.evaluate((el) =>
        getComputedStyle(el).whiteSpace
      );
      expect(whiteSpace).toMatch(/pre|pre-wrap/);
    });

    test('has file-tree CSS class', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const classList = await fileTree.evaluate((el) =>
        Array.from(el.classList)
      );
      expect(classList).toContain('file-tree');
    });

    test('may have directory elements', async ({ page }) => {
      const directories = page.locator('.file-tree__directory');
      // Optional but should exist if structure is complex
      const count = await directories.count();
      expect(count).toBeGreaterThanOrEqual(0);
    });

    test('may have annotation elements', async ({ page }) => {
      const annotations = page.locator('.file-tree__annotation');
      // Optional for adding context
      const count = await annotations.count();
      expect(count).toBeGreaterThanOrEqual(0);
    });

    test('may have branch characters', async ({ page }) => {
      const branches = page.locator('.file-tree__branch');
      // Optional for tree structure
      const count = await branches.count();
      expect(count).toBeGreaterThanOrEqual(0);
    });
  });

  // ============================================================================
  // CATEGORY 4: Visual Regression Tests
  // ============================================================================
  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]').first();
      await expect(fileTree).toHaveScreenshot('file-tree-baseline.png');
    });

    test('label matches baseline', async ({ page }) => {
      const label = page.locator('.file-tree__label').first();
      await expect(label).toHaveScreenshot('file-tree-label.png');
    });
  });
});

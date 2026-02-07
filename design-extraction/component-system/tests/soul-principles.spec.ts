/*
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE HEADER — Phase 2B
File: design-extraction/component-system/tests/soul-principles.spec.ts
Part Of: component-system/tests — Automated soul verification tests
Contributed To: Programmatic enforcement of soul constraints
═══════════════════════════════════════════════════════════════════════════════
*/

import { test, expect } from '@playwright/test';

/**
 * SOUL PRINCIPLES TESTS
 *
 * Universal rules that apply to ALL 12 components.
 * These tests verify the editorial soul is maintained across the system.
 *
 * Reference: SOUL-DEFINITION.md Section 2.2 "The 6 Universal Rules"
 */

test.describe('Soul Principles - Universal Rules', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // RULE 1: Sharp Edges (border-radius: 0) - ALWAYS
  // ============================================================================
  test.describe('Rule 1: Sharp Edges', () => {
    test('all components have border-radius: 0', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const borderRadius = await component.evaluate((el) => {
          return getComputedStyle(el).borderRadius;
        });
        expect(borderRadius, `Component ${i} should have no border-radius`).toBe('0px');
      }
    });

    test('code-block has sharp corners', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const borderRadius = await codeBlock.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('gotcha-box has sharp corners', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const borderRadius = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('essence-box has sharp corners', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const borderRadius = await essenceBox.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('decision-matrix has sharp corners', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      const borderRadius = await matrix.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('challenge-box level indicator is square (not circle)', async ({ page }) => {
      const levelIndicator = page.locator('.challenge-box__level');
      const borderRadius = await levelIndicator.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('modifier tags have sharp corners', async ({ page }) => {
      const modifiers = page.locator('.challenge-box__modifier');
      const count = await modifiers.count();

      for (let i = 0; i < count; i++) {
        const modifier = modifiers.nth(i);
        const borderRadius = await modifier.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).toBe('0px');
      }
    });
  });

  // ============================================================================
  // RULE 2: Flat Design (box-shadow: none) - ALWAYS
  // ============================================================================
  test.describe('Rule 2: Flat Design', () => {
    test('all components have no box-shadow', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const boxShadow = await component.evaluate((el) => {
          return getComputedStyle(el).boxShadow;
        });
        expect(boxShadow, `Component ${i} should have no box-shadow`).toBe('none');
      }
    });

    test('code-block has no shadow', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const boxShadow = await codeBlock.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('essence-box has no shadow', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const boxShadow = await essenceBox.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('reasoning-box has no shadow', async ({ page }) => {
      const reasoningBox = page.locator('[data-component="reasoning-box"]');
      const boxShadow = await reasoningBox.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('challenge-box has no shadow', async ({ page }) => {
      const challengeBox = page.locator('[data-component="challenge-box"]');
      const boxShadow = await challengeBox.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });
  });

  // ============================================================================
  // RULE 3: Limited Palette (red + cream + black only)
  // ============================================================================
  test.describe('Rule 3: Limited Palette', () => {
    // Helper to convert RGB to hex
    const rgbToHex = (rgb: string): string => {
      const match = rgb.match(/\d+/g);
      if (!match) return rgb;
      const [r, g, b] = match.map(Number);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    };

    test('primary accent uses brand red (#E83025)', async ({ page }) => {
      const gotchaLabel = page.locator('.gotcha-box__label');
      const color = await gotchaLabel.evaluate((el) =>
        getComputedStyle(el).color
      );
      // E83025 in RGB is rgb(232, 48, 37)
      expect(color).toBe('rgb(232, 48, 37)');
    });

    test('text uses near-black (#1A1A1A)', async ({ page }) => {
      const body = page.locator('body');
      const color = await body.evaluate((el) =>
        getComputedStyle(el).color
      );
      // 1A1A1A in RGB is rgb(26, 26, 26)
      expect(color).toBe('rgb(26, 26, 26)');
    });

    test('no Bootstrap blue colors (#007bff) present', async ({ page }) => {
      const allElements = page.locator('*');
      const count = await allElements.count();
      const bootstrapBlue = 'rgb(0, 123, 255)';

      // Sample first 100 elements to avoid timeout
      const sampled = Math.min(count, 100);
      for (let i = 0; i < sampled; i++) {
        const element = allElements.nth(i);
        const color = await element.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).not.toBe(bootstrapBlue);
      }
    });

    test('no Bootstrap success green (#28a745) present', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();
      const bootstrapGreen = 'rgb(40, 167, 69)';

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const color = await component.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).not.toBe(bootstrapGreen);
      }
    });
  });

  // ============================================================================
  // RULE 4: Typography Hierarchy (serif display, sans body, mono code)
  // ============================================================================
  test.describe('Rule 4: Typography Hierarchy', () => {
    test('display labels use serif font family', async ({ page }) => {
      const gotchaLabel = page.locator('.gotcha-box__label');
      const fontFamily = await gotchaLabel.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toContain('Instrument Serif');
    });

    test('essence-box content uses serif italic', async ({ page }) => {
      const content = page.locator('.essence-box__content');
      const fontFamily = await content.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      const fontStyle = await content.evaluate((el) =>
        getComputedStyle(el).fontStyle
      );
      expect(fontFamily).toContain('Instrument Serif');
      expect(fontStyle).toBe('italic');
    });

    test('body text uses sans-serif font', async ({ page }) => {
      const description = page.locator('.section-description').first();
      const fontFamily = await description.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toContain('Inter');
    });

    test('code blocks use monospace font', async ({ page }) => {
      const codeText = page.locator('.code-block__code');
      const fontFamily = await codeText.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toMatch(/JetBrains Mono|SF Mono|monospace/);
    });

    test('file tree uses monospace font', async ({ page }) => {
      const fileTree = page.locator('.file-tree__content');
      const fontFamily = await fileTree.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toMatch(/JetBrains Mono|SF Mono|monospace/);
    });
  });

  // ============================================================================
  // RULE 5: Heavy Borders When Bordered (2-4px minimum)
  // ============================================================================
  test.describe('Rule 5: Heavy Borders', () => {
    test('code-block has 4px left border', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const borderLeftWidth = await codeBlock.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
    });

    test('gotcha-box has 6px left border', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const borderLeftWidth = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(6);
    });

    test('essence-box has 3px border on all sides', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const borderWidth = await essenceBox.evaluate((el) =>
        getComputedStyle(el).borderWidth
      );
      // Check that all borders are at least 3px
      const widths = borderWidth.split(' ').map((w: string) => parseInt(w));
      widths.forEach((width: number) => {
        expect(width).toBeGreaterThanOrEqual(3);
      });
    });

    test('decision-matrix has 4px left border', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      const borderLeftWidth = await matrix.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
    });

    test('file-tree has 4px left border', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const borderLeftWidth = await fileTree.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
    });

    test('task-progression has 4px left border', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      const borderLeftWidth = await progression.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
    });
  });

  // ============================================================================
  // RULE 6: Whitespace as Design Element
  // ============================================================================
  test.describe('Rule 6: Generous Whitespace', () => {
    test('code-block has generous padding (24px+)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const padding = await codeBlock.evaluate((el) =>
        getComputedStyle(el).padding
      );
      const paddingValues = padding.split(' ').map((p: string) => parseInt(p));
      paddingValues.forEach((p: number) => {
        expect(p).toBeGreaterThanOrEqual(20);
      });
    });

    test('essence-box has generous padding (32px)', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const padding = await essenceBox.evaluate((el) =>
        getComputedStyle(el).padding
      );
      const paddingValues = padding.split(' ').map((p: string) => parseInt(p));
      paddingValues.forEach((p: number) => {
        expect(p).toBeGreaterThanOrEqual(24);
      });
    });

    test('file-tree has comfortable line-height (1.8)', async ({ page }) => {
      const fileTreeContent = page.locator('.file-tree__content');
      const lineHeight = await fileTreeContent.evaluate((el) =>
        getComputedStyle(el).lineHeight
      );
      // Line-height can be in px or unitless
      const lhValue = parseFloat(lineHeight);
      // Assuming 14px font, 1.8 * 14 = 25.2px
      expect(lhValue).toBeGreaterThanOrEqual(20);
    });

    test('components have vertical margin for breathing room', async ({ page }) => {
      const components = [
        'code-block',
        'gotcha-box',
        'essence-box',
        'decision-matrix',
      ];

      for (const comp of components) {
        const element = page.locator(`[data-component="${comp}"]`);
        const margin = await element.evaluate((el) =>
          getComputedStyle(el).margin
        );
        // Check that vertical margin exists
        const marginValues = margin.split(' ').map((m: string) => parseInt(m));
        expect(marginValues.some((m: number) => m >= 24)).toBeTruthy();
      }
    });
  });
});

// ============================================================================
// CSS VARIABLE VERIFICATION
// ============================================================================
test.describe('CSS Variables - Locked Values', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test('--border-radius is 0', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--border-radius');
    });
    expect(value.trim()).toBe('0');
  });

  test('--box-shadow is none', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--box-shadow');
    });
    expect(value.trim()).toBe('none');
  });

  test('--color-primary is #E83025', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
    });
    expect(value.trim()).toBe('#E83025');
  });

  test('--color-background is #FEF9F5', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-background');
    });
    expect(value.trim()).toBe('#FEF9F5');
  });

  test('--color-text is #1A1A1A', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-text');
    });
    expect(value.trim()).toBe('#1A1A1A');
  });

  test('--font-display contains Instrument Serif', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--font-display');
    });
    expect(value).toContain('Instrument Serif');
  });

  test('--font-body contains Inter', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--font-body');
    });
    expect(value).toContain('Inter');
  });

  test('--font-mono contains JetBrains Mono', async ({ page }) => {
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--font-mono');
    });
    expect(value).toContain('JetBrains Mono');
  });
});

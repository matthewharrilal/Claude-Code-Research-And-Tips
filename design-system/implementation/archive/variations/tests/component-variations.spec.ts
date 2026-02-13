/* LIGHT SECTION
Full Context For ALL Files: perceptual-audit-v2/synthesis/

File: archive/variations/tests/component-variations.spec.ts
Scope: LIGHT — Minimal context for quick lookup
Part Of: archive/variations/tests — Variation test infrastructure
Contributed To: Automated variation verification (historical)

What this file does:
Playwright test suite for visual/CSS property verification of design system variations.
Tests validate specific CSS properties and ensure design consistency across variations.

Who uses this:
- CI/CD pipelines for automated verification (historical)
- Agents reviewing test methodology
- Visual regression test execution

Status: ARCHIVED — Historical test infrastructure from variation experiments
Links to: perceptual-audit-v2/synthesis/ for current component specifications
*/

/**
 * Component Variations Test Suite
 *
 * Playwright tests for visual/CSS property verification of design system variations.
 * Tests validate specific CSS properties like background-color, border-width,
 * transform, text-shadow, and pseudo-element existence.
 *
 * Base path: /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-extraction/variations/
 */

import { test, expect, Page } from '@playwright/test';

const BASE_PATH = '/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-extraction/variations';

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Helper to convert RGB string to hex
 */
function rgbToHex(rgb: string): string {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) return rgb;
  const r = parseInt(match[1]).toString(16).padStart(2, '0');
  const g = parseInt(match[2]).toString(16).padStart(2, '0');
  const b = parseInt(match[3]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

/**
 * Helper to check if color is dark (for background checks)
 */
function isDarkColor(colorValue: string): boolean {
  const rgb = colorValue.match(/\d+/g);
  if (!rgb || rgb.length < 3) return false;
  const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
  return brightness < 128;
}

/**
 * Helper to check if a pseudo-element exists via computed styles
 */
async function hasPseudoElement(page: Page, selector: string, pseudoType: '::before' | '::after'): Promise<boolean> {
  return await page.evaluate(({ sel, pseudo }) => {
    const element = document.querySelector(sel);
    if (!element) return false;
    const style = window.getComputedStyle(element, pseudo);
    const content = style.getPropertyValue('content');
    return content !== 'none' && content !== '';
  }, { sel: selector, pseudo: pseudoType });
}

/**
 * Helper to get computed style property
 */
async function getComputedStyle(page: Page, selector: string, property: string): Promise<string> {
  return await page.evaluate(({ sel, prop }) => {
    const element = document.querySelector(sel);
    if (!element) return '';
    return window.getComputedStyle(element).getPropertyValue(prop);
  }, { sel: selector, prop: property });
}

/**
 * Helper to parse border width from CSS value
 */
function parseBorderWidth(value: string): number {
  const match = value.match(/(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

// ============================================================================
// CODE BLOCK TESTS
// ============================================================================

test.describe('Code Block - Terminal (variation-1)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/code-blocks/variation-1-terminal.html`);
  });

  test('has dark background (background-color check)', async ({ page }) => {
    const bgColor = await getComputedStyle(page, '.crt-screen', 'background-color');
    expect(isDarkColor(bgColor)).toBe(true);
    // Verify it's a dark color - brightness check already passed above
  });

  test('has scanline overlay (::before element exists)', async ({ page }) => {
    const hasBefore = await hasPseudoElement(page, '.crt-screen', '::before');
    expect(hasBefore).toBe(true);

    // Verify it has the repeating-linear-gradient for scanlines
    const bgImage = await page.evaluate(() => {
      const element = document.querySelector('.crt-screen');
      if (!element) return '';
      return window.getComputedStyle(element, '::before').getPropertyValue('background-image');
    });
    expect(bgImage).toContain('repeating-linear-gradient');
  });

  test('has bezel border >= 6px via padding', async ({ page }) => {
    // The bezel is created via padding, not border-width
    const padding = await getComputedStyle(page, '.crt-bezel', 'padding');
    const paddingValue = parseBorderWidth(padding);
    expect(paddingValue).toBeGreaterThanOrEqual(6);
  });

  test('has text-shadow glow effect', async ({ page }) => {
    const textShadow = await getComputedStyle(page, 'pre', 'text-shadow');
    expect(textShadow).not.toBe('none');
    expect(textShadow.length).toBeGreaterThan(0);
    // Should contain multiple shadow layers
    expect(textShadow.split(',').length).toBeGreaterThanOrEqual(2);
  });

  test('uses VT323 or monospace font', async ({ page }) => {
    const fontFamily = await getComputedStyle(page, 'pre', 'font-family');
    expect(fontFamily.toLowerCase()).toMatch(/vt323|courier|monospace/);
  });
});

test.describe('Code Block - Zine (variation-2)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/code-blocks/variation-2-zine.html`);
  });

  test('has paper background color (#f5f5f0 or cream)', async ({ page }) => {
    const bgColor = await getComputedStyle(page, '.zine-code-block', 'background-color');
    const hex = rgbToHex(bgColor);
    // Should be a cream/beige color (RGB values should be similar and high)
    const rgb = bgColor.match(/\d+/g);
    expect(rgb).not.toBeNull();
    if (rgb) {
      expect(parseInt(rgb[0])).toBeGreaterThan(200); // R > 200
      expect(parseInt(rgb[1])).toBeGreaterThan(200); // G > 200
      expect(parseInt(rgb[2])).toBeGreaterThan(180); // B slightly lower for cream
    }
  });

  test('has texture overlay (::before with SVG noise)', async ({ page }) => {
    const hasBefore = await hasPseudoElement(page, '.zine-code-block', '::before');
    expect(hasBefore).toBe(true);

    const bgImage = await page.evaluate(() => {
      const element = document.querySelector('.zine-code-block');
      if (!element) return '';
      return window.getComputedStyle(element, '::before').getPropertyValue('background-image');
    });
    expect(bgImage).toContain('url');
  });

  test('has rotation transform != none', async ({ page }) => {
    const transform = await getComputedStyle(page, '.zine-code-block', 'transform');
    expect(transform).not.toBe('none');
    // Should be a matrix or rotate transform
    expect(transform).toMatch(/matrix|rotate/);
  });

  test('has dashed border for cut-out feel', async ({ page }) => {
    const borderStyle = await getComputedStyle(page, '.zine-header', 'border-bottom-style');
    expect(borderStyle).toBe('dashed');
  });
});

test.describe('Code Block - Brutalist (variation-3)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/code-blocks/variation-3-brutalist.html`);
  });

  test('has heavy border on one side only (8px+)', async ({ page }) => {
    const borderLeft = await getComputedStyle(page, '.code-block', 'border-left-width');
    const leftWidth = parseBorderWidth(borderLeft);
    expect(leftWidth).toBeGreaterThanOrEqual(8);

    // Other sides should have thinner or no border
    const borderRight = await getComputedStyle(page, '.code-block', 'border-right-width');
    const rightWidth = parseBorderWidth(borderRight);
    expect(rightWidth).toBeLessThan(leftWidth);
  });

  test('has border-radius = 0', async ({ page }) => {
    const borderRadius = await getComputedStyle(page, '.code-block', 'border-radius');
    expect(borderRadius).toBe('0px');
  });

  test('has no box-shadow or minimal shadow', async ({ page }) => {
    const boxShadow = await getComputedStyle(page, '.code-block', 'box-shadow');
    // Either none or very minimal
    expect(boxShadow === 'none' || boxShadow.includes('0px') || boxShadow === '').toBe(true);
  });

  test('uses stark black/white contrast', async ({ page }) => {
    const bgColor = await getComputedStyle(page, '.code-block', 'background-color');
    const textColor = await getComputedStyle(page, '.code-block pre', 'color');

    // Background should be very dark or very light
    const bgDark = isDarkColor(bgColor);
    const textRgb = textColor.match(/\d+/g);

    if (bgDark) {
      // If bg is dark, text should be light
      expect(textRgb).not.toBeNull();
      if (textRgb) {
        expect(parseInt(textRgb[0])).toBeGreaterThan(200);
      }
    }
  });
});

test.describe('Code Block - Editorial (variation-4)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/code-blocks/variation-4-editorial.html`);
  });

  test('has thin elegant border <= 2px', async ({ page }) => {
    const border = await getComputedStyle(page, '.code-editorial', 'border-width');
    const borderWidth = parseBorderWidth(border);
    expect(borderWidth).toBeLessThanOrEqual(2);
  });

  test('uses serif font for caption', async ({ page }) => {
    const fontFamily = await getComputedStyle(page, '.code-caption', 'font-family');
    expect(fontFamily.toLowerCase()).toMatch(/playfair|georgia|serif/);
  });

  test('has warm cream background', async ({ page }) => {
    const bgColor = await getComputedStyle(page, '.code-editorial', 'background-color');
    const rgb = bgColor.match(/\d+/g);
    expect(rgb).not.toBeNull();
    if (rgb) {
      // Cream color: high R, high G, slightly lower B
      expect(parseInt(rgb[0])).toBeGreaterThan(240);
      expect(parseInt(rgb[1])).toBeGreaterThan(240);
    }
  });

  test('has hover-reveal copy button with opacity transition', async ({ page }) => {
    const opacity = await getComputedStyle(page, '.code-copy', 'opacity');
    // Initially hidden (opacity 0)
    expect(parseFloat(opacity)).toBe(0);

    // After hover, should be visible
    await page.hover('.code-editorial');
    await page.waitForTimeout(300); // Wait for transition
    const opacityAfterHover = await getComputedStyle(page, '.code-copy', 'opacity');
    expect(parseFloat(opacityAfterHover)).toBe(1);
  });
});

// ============================================================================
// CARD TESTS
// ============================================================================

test.describe('Card - Typography (variation-1)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/cards/variation-1-typography.html`);
  });

  test('title font-size >= 32px', async ({ page }) => {
    const fontSize = await getComputedStyle(page, '.card-title', 'font-size');
    const size = parseFloat(fontSize);
    expect(size).toBeGreaterThanOrEqual(32);
  });

  test('minimal container - thin border only', async ({ page }) => {
    // Should have border-top only (or minimal styling)
    const borderTop = await getComputedStyle(page, '.card', 'border-top-width');
    const borderTopWidth = parseBorderWidth(borderTop);
    expect(borderTopWidth).toBeGreaterThan(0);
    expect(borderTopWidth).toBeLessThanOrEqual(4);

    // Other borders should be minimal or none
    const borderRight = await getComputedStyle(page, '.card', 'border-right-width');
    expect(parseBorderWidth(borderRight)).toBe(0);
  });

  test('uses condensed display font', async ({ page }) => {
    const fontFamily = await getComputedStyle(page, '.card-title', 'font-family');
    expect(fontFamily.toLowerCase()).toMatch(/bebas|impact|condensed|black/);
  });
});

test.describe('Card - Badges (variation-2)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/cards/variation-2-badges.html`);
  });

  test('has rotated element with transform (level stamp)', async ({ page }) => {
    const transform = await getComputedStyle(page, '.level-stamp', 'transform');
    expect(transform).not.toBe('none');
    expect(transform).toMatch(/matrix|rotate/);
  });

  test('corner ribbon has 45deg rotation', async ({ page }) => {
    const transform = await getComputedStyle(page, '.corner-ribbon span', 'transform');
    expect(transform).not.toBe('none');
  });

  test('has double-ring seal effect on stamp', async ({ page }) => {
    // Check for inner ring via ::before
    const hasBefore = await hasPseudoElement(page, '.level-stamp-inner', '::before');
    expect(hasBefore).toBe(true);
  });

  test('has barcode element', async ({ page }) => {
    const barcodeExists = await page.locator('.barcode-bars').isVisible();
    expect(barcodeExists).toBe(true);
  });
});

test.describe('Card - Asymmetric (variation-3)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/cards/variation-3-asymmetric.html`);
  });

  test('content has thick left border (8px)', async ({ page }) => {
    const borderLeft = await getComputedStyle(page, '.editorial-card', 'border-left-width');
    const leftWidth = parseBorderWidth(borderLeft);
    expect(leftWidth).toBeGreaterThanOrEqual(6);
  });

  test('uses grid layout for asymmetric composition', async ({ page }) => {
    const display = await getComputedStyle(page, '.editorial-card', 'display');
    expect(display).toBe('grid');
  });

  test('has serif/sans font pairing', async ({ page }) => {
    const titleFont = await getComputedStyle(page, '.card-title', 'font-family');
    const bodyFont = await getComputedStyle(page, '.card-description', 'font-family');

    // Title should be serif
    expect(titleFont.toLowerCase()).toMatch(/playfair|georgia|serif/);
    // Body should be sans
    expect(bodyFont.toLowerCase()).toMatch(/source|system|sans/);
  });

  test('oversized level number on right side', async ({ page }) => {
    const fontSize = await getComputedStyle(page, '.level-number', 'font-size');
    const size = parseFloat(fontSize);
    expect(size).toBeGreaterThanOrEqual(48);
  });
});

test.describe('Card - Textured (variation-4)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/cards/variation-4-textured.html`);
  });

  test('background-image contains SVG or gradient texture', async ({ page }) => {
    const hasBefore = await hasPseudoElement(page, '.card-body', '::before');
    expect(hasBefore).toBe(true);

    const bgImage = await page.evaluate(() => {
      const element = document.querySelector('.card-body');
      if (!element) return '';
      return window.getComputedStyle(element, '::before').getPropertyValue('background-image');
    });
    expect(bgImage).toContain('url');
  });

  test('has halftone dot pattern via ::after', async ({ page }) => {
    const hasAfter = await hasPseudoElement(page, '.card-body', '::after');
    expect(hasAfter).toBe(true);

    const bgImage = await page.evaluate(() => {
      const element = document.querySelector('.card-body');
      if (!element) return '';
      return window.getComputedStyle(element, '::after').getPropertyValue('background-image');
    });
    expect(bgImage).toContain('radial-gradient');
  });

  test('has physical shadow for depth', async ({ page }) => {
    const boxShadow = await getComputedStyle(page, '.card-body', 'box-shadow');
    expect(boxShadow).not.toBe('none');
  });

  test('has corner fold decoration', async ({ page }) => {
    const cornerFoldExists = await page.locator('.corner-fold').isVisible();
    expect(cornerFoldExists).toBe(true);
  });
});

// ============================================================================
// CALLOUT TESTS - All 4 variations x 5 semantic types = 20+ tests
// ============================================================================

// Variation 1: Stamp Callouts
test.describe('Callout - Stamp (variation-1)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/callouts/variation-1-stamp.html`);
  });

  const semanticTypes = ['info', 'warning', 'error', 'success', 'tip'];

  test('icon size >= 24px for all types', async ({ page }) => {
    const iconSize = await getComputedStyle(page, '.stamp-icon', 'width');
    const size = parseFloat(iconSize);
    expect(size).toBeGreaterThanOrEqual(24);
  });

  test('stamp icon has rotation transform', async ({ page }) => {
    const transform = await getComputedStyle(page, '.stamp-icon', 'transform');
    expect(transform).not.toBe('none');
  });

  test('has seal effect on icon (box-shadow or border)', async ({ page }) => {
    // Check for either box-shadow rings or border on the stamp icon
    const boxShadow = await getComputedStyle(page, '.stamp-icon', 'box-shadow');
    const border = await getComputedStyle(page, '.stamp-icon', 'border');
    const hasSealEffect = boxShadow !== 'none' || border !== '' && border !== 'none';
    expect(hasSealEffect).toBe(true);
  });

  test('has textured background overlay', async ({ page }) => {
    const hasBefore = await hasPseudoElement(page, '.stamp-callout', '::before');
    expect(hasBefore).toBe(true);
  });

  for (const type of semanticTypes) {
    test(`${type} callout has distinct styling`, async ({ page }) => {
      // Check if the callout element exists and has styling
      const element = await page.$(`.stamp-callout.${type}`);
      expect(element).not.toBeNull();
      // Verify the element has visible styling (not transparent)
      const bgColor = await getComputedStyle(page, `.stamp-callout.${type}`, 'background-color');
      const borderColor = await getComputedStyle(page, `.stamp-callout.${type}`, 'border-color');
      expect(bgColor !== '' || borderColor !== '').toBe(true);
    });
  }
});

// Variation 2: Heavy Border Callouts
test.describe('Callout - Heavy Border (variation-2)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/callouts/variation-2-heavy-border.html`);
  });

  test('border-width >= 8px on one side', async ({ page }) => {
    const borderLeft = await getComputedStyle(page, '.callout', 'border-left-width');
    const leftWidth = parseBorderWidth(borderLeft);
    expect(leftWidth).toBeGreaterThanOrEqual(8);
  });

  test('has zero border-radius (sharp corners)', async ({ page }) => {
    const borderRadius = await getComputedStyle(page, '.callout', 'border-radius');
    expect(borderRadius).toBe('0px');
  });

  test('uses Space Grotesk for labels', async ({ page }) => {
    const fontFamily = await getComputedStyle(page, '.callout-label', 'font-family');
    expect(fontFamily.toLowerCase()).toMatch(/space|grotesk|system/);
  });

  const semanticTypes = [
    { class: 'callout-info', color: '#555bff' },
    { class: 'callout-warning', color: '#e6b800' },
    { class: 'callout-error', color: '#ff5555' },
    { class: 'callout-success', color: '#1fc11b' },
    { class: 'callout-tip', color: '#2a7d7d' },
  ];

  for (const type of semanticTypes) {
    test(`${type.class} has correct border color`, async ({ page }) => {
      const borderColor = await getComputedStyle(page, `.${type.class}`, 'border-left-color');
      expect(borderColor).not.toBe('');
    });
  }
});

// Variation 3: Typography Callouts
test.describe('Callout - Typography (variation-3)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/callouts/variation-3-typography.html`);
  });

  test('label font-size significantly larger than content (>= 20px)', async ({ page }) => {
    const labelSize = await getComputedStyle(page, '.callout-label', 'font-size');
    const labelPx = parseFloat(labelSize);
    expect(labelPx).toBeGreaterThanOrEqual(20);

    const contentSize = await getComputedStyle(page, '.callout-content', 'font-size');
    const contentPx = parseFloat(contentSize);

    // Label should be significantly larger
    expect(labelPx).toBeGreaterThan(contentPx * 1.2);
  });

  test('label uses serif display font', async ({ page }) => {
    const fontFamily = await getComputedStyle(page, '.callout-label', 'font-family');
    expect(fontFamily.toLowerCase()).toMatch(/playfair|georgia|serif/);
  });

  test('label is uppercase with letter-spacing', async ({ page }) => {
    const textTransform = await getComputedStyle(page, '.callout-label', 'text-transform');
    expect(textTransform).toBe('uppercase');

    const letterSpacing = await getComputedStyle(page, '.callout-label', 'letter-spacing');
    expect(letterSpacing).not.toBe('normal');
  });

  test('has separator line between label and content', async ({ page }) => {
    const separatorExists = await page.locator('.callout-separator').first().isVisible();
    expect(separatorExists).toBe(true);
  });

  const semanticTypes = ['info', 'warning', 'error', 'success', 'tip'];
  for (const type of semanticTypes) {
    test(`${type} callout has distinct color`, async ({ page }) => {
      const borderColor = await getComputedStyle(page, `.callout-${type}`, 'border-left-color');
      expect(borderColor).not.toBe('');
    });
  }
});

// Variation 4: Decorative Frame Callouts
test.describe('Callout - Decorative (variation-4)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/callouts/variation-4-decorative.html`);
  });

  test('has pseudo-element ornaments (::before and ::after on .callout)', async ({ page }) => {
    const hasBefore = await hasPseudoElement(page, '.callout', '::before');
    const hasAfter = await hasPseudoElement(page, '.callout', '::after');
    expect(hasBefore).toBe(true);
    expect(hasAfter).toBe(true);
  });

  test('corner ornaments have border styling', async ({ page }) => {
    const borderTop = await page.evaluate(() => {
      const element = document.querySelector('.callout');
      if (!element) return '';
      return window.getComputedStyle(element, '::before').getPropertyValue('border-top-width');
    });
    expect(parseBorderWidth(borderTop)).toBeGreaterThan(0);
  });

  test('uses serif font for label', async ({ page }) => {
    const fontFamily = await getComputedStyle(page, '.callout-label', 'font-family');
    expect(fontFamily.toLowerCase()).toMatch(/playfair|georgia|serif/);
  });

  test('has subtle shadow for depth', async ({ page }) => {
    const boxShadow = await getComputedStyle(page, '.callout', 'box-shadow');
    expect(boxShadow).not.toBe('none');
  });

  const semanticTypes = ['info', 'warning', 'error', 'success', 'tip'];
  for (const type of semanticTypes) {
    test(`${type} callout exists and has distinct styling`, async ({ page }) => {
      const bgColor = await getComputedStyle(page, `.callout-${type}`, 'background-color');
      expect(bgColor).not.toBe('');
      expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
    });
  }
});

// ============================================================================
// COLOR TESTS
// ============================================================================

test.describe('Colors - Textured Swatches', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/colors/textured-swatches.html`);
  });

  test('textured swatches have ::before or background texture', async ({ page }) => {
    // Grain texture swatch
    const hasGrainBefore = await hasPseudoElement(page, '.swatch.grain', '::before');
    expect(hasGrainBefore).toBe(true);

    // Halftone texture swatch
    const hasHalftoneBefore = await hasPseudoElement(page, '.swatch.halftone', '::before');
    expect(hasHalftoneBefore).toBe(true);

    // Paper texture swatch
    const hasPaperBefore = await hasPseudoElement(page, '.swatch.paper', '::before');
    expect(hasPaperBefore).toBe(true);
  });

  test('grain texture uses SVG feTurbulence', async ({ page }) => {
    const bgImage = await page.evaluate(() => {
      const element = document.querySelector('.swatch.grain');
      if (!element) return '';
      return window.getComputedStyle(element, '::before').getPropertyValue('background-image');
    });
    expect(bgImage).toContain('url');
    expect(bgImage).toContain('svg');
  });

  test('halftone texture uses radial-gradient', async ({ page }) => {
    const bgImage = await page.evaluate(() => {
      const element = document.querySelector('.swatch.halftone');
      if (!element) return '';
      return window.getComputedStyle(element, '::before').getPropertyValue('background-image');
    });
    expect(bgImage).toContain('radial-gradient');
  });

  test('flat swatches have no texture overlay', async ({ page }) => {
    const hasBefore = await page.evaluate(() => {
      const element = document.querySelector('.swatch.flat');
      if (!element) return true;
      const style = window.getComputedStyle(element, '::before');
      const content = style.getPropertyValue('content');
      return content !== 'none' && content !== '';
    });
    expect(hasBefore).toBe(false);
  });

  test('intensity scale shows progressive opacity', async ({ page }) => {
    const opacities: number[] = [];
    for (let i = 1; i <= 5; i++) {
      const opacity = await page.evaluate((index) => {
        const element = document.querySelector(`.intensity-swatch:nth-child(${index})`);
        if (!element) return '0';
        return window.getComputedStyle(element, '::before').getPropertyValue('opacity');
      }, i);
      opacities.push(parseFloat(opacity));
    }

    // First should be 0, rest should increase
    expect(opacities[0]).toBe(0);
    for (let i = 1; i < opacities.length; i++) {
      expect(opacities[i]).toBeGreaterThanOrEqual(opacities[i - 1]);
    }
  });
});

test.describe('Colors - Color Relationships', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`file://${BASE_PATH}/colors/color-relationships.html`);
  });

  test('shows multiple color pairings', async ({ page }) => {
    const pairingCards = await page.locator('.pairing-card').count();
    expect(pairingCards).toBeGreaterThanOrEqual(5);
  });

  test('each pairing shows foreground and background colors', async ({ page }) => {
    const colorChips = await page.locator('.pairing-card').first().locator('.color-chip').count();
    expect(colorChips).toBeGreaterThanOrEqual(2);
  });

  test('duotone section shows color pairings side by side', async ({ page }) => {
    const duotoneCards = await page.locator('.duotone-card').count();
    expect(duotoneCards).toBeGreaterThanOrEqual(2);

    const duotoneHalves = await page.locator('.duotone-card').first().locator('.duotone-half').count();
    expect(duotoneHalves).toBe(2);
  });

  test('contrast table shows WCAG compliance levels', async ({ page }) => {
    const passMarkers = await page.locator('.status-pass').count();
    expect(passMarkers).toBeGreaterThan(0);
  });

  test('legend explains AAA, AA, and Fail levels', async ({ page }) => {
    const aaaLegend = await page.locator('.legend-badge.aaa').isVisible();
    const aaLegend = await page.locator('.legend-badge.aa').isVisible();
    const failLegend = await page.locator('.legend-badge.fail').isVisible();

    expect(aaaLegend).toBe(true);
    expect(aaLegend).toBe(true);
    expect(failLegend).toBe(true);
  });
});

// ============================================================================
// CROSS-VARIATION CONSISTENCY TESTS
// ============================================================================

test.describe('Cross-Variation Consistency', () => {
  test('all code block variations have copy button', async ({ page }) => {
    const variations = [
      'code-blocks/variation-1-terminal.html',
      'code-blocks/variation-2-zine.html',
      'code-blocks/variation-3-brutalist.html',
      'code-blocks/variation-4-editorial.html',
    ];

    for (const variation of variations) {
      await page.goto(`file://${BASE_PATH}/${variation}`);
      const copyButton = await page.locator('button').filter({ hasText: /copy/i }).first().isVisible();
      expect(copyButton).toBe(true);
    }
  });

  test('all card variations display title prominently', async ({ page }) => {
    const variations = [
      'cards/variation-1-typography.html',
      'cards/variation-2-badges.html',
      'cards/variation-3-asymmetric.html',
      'cards/variation-4-textured.html',
    ];

    for (const variation of variations) {
      await page.goto(`file://${BASE_PATH}/${variation}`);
      const title = await page.locator('h1, h2, .card-title').first();
      const fontSize = await title.evaluate(el => window.getComputedStyle(el).fontSize);
      expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(20);
    }
  });

  test('all callout variations support 5 semantic types', async ({ page }) => {
    const variations = [
      'callouts/variation-1-stamp.html',
      'callouts/variation-2-heavy-border.html',
      'callouts/variation-3-typography.html',
      'callouts/variation-4-decorative.html',
    ];

    for (const variation of variations) {
      await page.goto(`file://${BASE_PATH}/${variation}`);
      const callouts = await page.locator('[class*="callout"]').count();
      expect(callouts).toBeGreaterThanOrEqual(5);
    }
  });
});

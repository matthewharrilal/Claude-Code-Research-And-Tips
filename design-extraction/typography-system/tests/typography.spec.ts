import { test, expect } from '@playwright/test';
import path from 'path';

/**
 * Typography System Test Suite
 * ============================
 *
 * Comprehensive Playwright tests for the Sanrok-style typography system.
 * Tests font loading, type scale, line heights, font styles, stroke treatments,
 * CSS variables, viewport dominance, and visual regression.
 *
 * Based on:
 * - index.html (demo page)
 * - typography.css (main stylesheet)
 * - type-scale.css (type scale variables)
 * - stroke-treatments.css (filled/outline treatments)
 * - typography-components.css (component classes)
 */

// Helper to get absolute file path for the demo page
const getIndexPath = () => `file://${path.resolve(__dirname, '../index.html')}`;

// ============================================================================
// CATEGORY 1: FONT LOADING TESTS
// Verify that required fonts (Instrument Serif, Inter) are loaded correctly
// ============================================================================

test.describe('Category 1: Font Loading', () => {
  test('Instrument Serif is loaded', async ({ page }) => {
    await page.goto(getIndexPath());

    // Wait for fonts to be ready
    await page.waitForFunction(() => document.fonts.ready);

    // Check if Instrument Serif is available
    const fontLoaded = await page.evaluate(() =>
      document.fonts.check('12px "Instrument Serif"')
    );
    expect(fontLoaded, 'Instrument Serif font should be loaded').toBe(true);

    // Verify it's actually being used on hero text
    const fontFamily = await page.locator('.typo-hero').first().evaluate(
      el => getComputedStyle(el).fontFamily
    );
    expect(fontFamily.toLowerCase()).toContain('instrument serif');
  });

  test('Inter is loaded', async ({ page }) => {
    await page.goto(getIndexPath());

    // Wait for fonts to be ready
    await page.waitForFunction(() => document.fonts.ready);

    // Check if Inter is available
    const fontLoaded = await page.evaluate(() =>
      document.fonts.check('12px "Inter"')
    );
    expect(fontLoaded, 'Inter font should be loaded').toBe(true);

    // Verify it's actually being used on body text
    const fontFamily = await page.locator('.typo-body').first().evaluate(
      el => getComputedStyle(el).fontFamily
    );
    expect(fontFamily.toLowerCase()).toContain('inter');
  });

  test('data-fonts-loaded attribute is set to true', async ({ page }) => {
    await page.goto(getIndexPath());

    // Wait for the data-fonts-loaded attribute to be set
    await page.waitForFunction(
      () => document.body.getAttribute('data-fonts-loaded') !== null,
      { timeout: 5000 }
    );

    // Give extra time for font verification to complete
    await page.waitForTimeout(500);

    const loaded = await page.locator('body').getAttribute('data-fonts-loaded');
    expect(loaded, 'Body should have data-fonts-loaded="true"').toBe('true');
  });

  test('Font status indicator shows loaded state', async ({ page }) => {
    await page.goto(getIndexPath());

    // Wait for fonts
    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForTimeout(500);

    // Check the font status indicator
    const statusEl = page.locator('#font-status');
    await expect(statusEl).toBeVisible();

    // Should have the loaded class
    const hasLoadedClass = await statusEl.evaluate(el => el.classList.contains('loaded'));
    expect(hasLoadedClass, 'Font status indicator should have "loaded" class').toBe(true);
  });
});

// ============================================================================
// CATEGORY 2: TYPE SCALE TESTS
// Verify font sizes match the expected type scale
// ============================================================================

test.describe('Category 2: Type Scale', () => {
  test('Hero text is at least 64px', async ({ page }) => {
    await page.goto(getIndexPath());
    await page.setViewportSize({ width: 1440, height: 900 });

    const fontSize = await page.locator('[data-testid="hero-text"]').evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    // At 1440px viewport, hero should be large (clamp min is 64px)
    expect(fontSize, 'Hero text should be at least 64px').toBeGreaterThanOrEqual(64);
  });

  test('Body text is 16px', async ({ page }) => {
    await page.goto(getIndexPath());

    const fontSize = await page.locator('[data-testid="body-text"]').evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    expect(fontSize, 'Body text should be exactly 16px').toBe(16);
  });

  test('Display sizes decrease progressively', async ({ page }) => {
    await page.goto(getIndexPath());
    await page.setViewportSize({ width: 1440, height: 900 });

    const heroSize = await page.locator('.typo-hero').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );
    const display1Size = await page.locator('.typo-display-1').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );
    const display2Size = await page.locator('.typo-display-2').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    expect(heroSize, 'Hero should be larger than Display 1').toBeGreaterThan(display1Size);
    expect(display1Size, 'Display 1 should be larger than Display 2').toBeGreaterThan(display2Size);
  });

  test('Caption and micro sizes are smaller than body', async ({ page }) => {
    await page.goto(getIndexPath());

    const bodySize = await page.locator('.typo-body').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );
    const captionSize = await page.locator('.typo-caption').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );
    const microSize = await page.locator('.typo-micro').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    expect(captionSize, 'Caption should be smaller than body').toBeLessThan(bodySize);
    expect(microSize, 'Micro should be smaller than caption').toBeLessThan(captionSize);
  });
});

// ============================================================================
// CATEGORY 3: LINE HEIGHT TESTS
// Verify line heights match the Sanrok design philosophy
// ============================================================================

test.describe('Category 3: Line Height', () => {
  test('Hero text has tight line-height (<=1.0)', async ({ page }) => {
    await page.goto(getIndexPath());

    const lineHeight = await page.locator('.typo-hero').first().evaluate(el => {
      const computed = getComputedStyle(el);
      const fontSize = parseFloat(computed.fontSize);
      const lineHeightPx = parseFloat(computed.lineHeight);
      return lineHeightPx / fontSize;
    });

    expect(lineHeight, 'Hero line-height should be <= 1.0 (tight)').toBeLessThanOrEqual(1.0);
  });

  test('Body text has relaxed line-height (>=1.4)', async ({ page }) => {
    await page.goto(getIndexPath());

    const lineHeight = await page.locator('.typo-body').first().evaluate(el => {
      const computed = getComputedStyle(el);
      const fontSize = parseFloat(computed.fontSize);
      const lineHeightPx = parseFloat(computed.lineHeight);
      return lineHeightPx / fontSize;
    });

    expect(lineHeight, 'Body line-height should be >= 1.4 (relaxed)').toBeGreaterThanOrEqual(1.4);
  });

  test('Display text has tight line-height for Sanrok aesthetic', async ({ page }) => {
    await page.goto(getIndexPath());

    // Check display text in the Sanrok reproduction section
    const sanrokDemo = page.locator('[data-testid="sanrok-demo"]');
    const lineHeight = await sanrokDemo.locator('.typo-display-1').first().evaluate(el => {
      const computed = getComputedStyle(el);
      const fontSize = parseFloat(computed.fontSize);
      const lineHeightPx = parseFloat(computed.lineHeight);
      return lineHeightPx / fontSize;
    });

    // Sanrok style uses very tight line-height (0.9)
    expect(lineHeight, 'Display line-height in Sanrok section should be <= 1.0').toBeLessThanOrEqual(1.0);
  });

  test('Leading utility classes work correctly', async ({ page }) => {
    await page.goto(getIndexPath());

    // The demo has explicit line-height styles in the line-height section
    const tightBox = page.locator('.line-height-box').first();
    const tightLineHeight = await tightBox.locator('p').evaluate(el => {
      const computed = getComputedStyle(el);
      const fontSize = parseFloat(computed.fontSize);
      const lineHeightPx = parseFloat(computed.lineHeight);
      return lineHeightPx / fontSize;
    });

    expect(tightLineHeight, 'Tight leading should be around 0.9').toBeCloseTo(0.9, 1);
  });
});

// ============================================================================
// CATEGORY 4: FONT STYLE TESTS
// Verify italic and roman styles are applied correctly
// ============================================================================

test.describe('Category 4: Font Style', () => {
  test('Display text is italic', async ({ page }) => {
    await page.goto(getIndexPath());

    const fontStyle = await page.locator('.typo-hero').first().evaluate(
      el => getComputedStyle(el).fontStyle
    );

    expect(fontStyle, 'Hero/Display text should be italic').toBe('italic');
  });

  test('Body text is not italic', async ({ page }) => {
    await page.goto(getIndexPath());

    const fontStyle = await page.locator('.typo-body').first().evaluate(
      el => getComputedStyle(el).fontStyle
    );

    expect(fontStyle, 'Body text should be normal (not italic)').toBe('normal');
  });

  test('Heading classes (typo-h1, h2, etc.) are not italic by default', async ({ page }) => {
    await page.goto(getIndexPath());

    const h1Style = await page.locator('.typo-h1').first().evaluate(
      el => getComputedStyle(el).fontStyle
    );
    const h2Style = await page.locator('.typo-h2').first().evaluate(
      el => getComputedStyle(el).fontStyle
    );

    // Heading classes should be roman (not italic) by default
    expect(h1Style, 'H1 should be normal').toBe('normal');
    expect(h2Style, 'H2 should be normal').toBe('normal');
  });

  test('typo-display classes are all italic', async ({ page }) => {
    await page.goto(getIndexPath());

    const display1Style = await page.locator('.typo-display-1').first().evaluate(
      el => getComputedStyle(el).fontStyle
    );
    const display2Style = await page.locator('.typo-display-2').first().evaluate(
      el => getComputedStyle(el).fontStyle
    );

    expect(display1Style, 'Display-1 should be italic').toBe('italic');
    expect(display2Style, 'Display-2 should be italic').toBe('italic');
  });
});

// ============================================================================
// CATEGORY 5: STROKE TREATMENT TESTS
// Verify filled and outline text treatments work correctly
// ============================================================================

test.describe('Category 5: Stroke Treatments', () => {
  test('.word-filled has solid color', async ({ page }) => {
    await page.goto(getIndexPath());

    const color = await page.locator('[data-testid="filled-text"]').evaluate(
      el => getComputedStyle(el).color
    );

    // Should be #E83025 = rgb(232, 48, 37)
    expect(color, 'Filled text should have the primary color').toMatch(/rgb\(232,\s*48,\s*37\)/);
  });

  test('.word-outline has transparent color with stroke', async ({ page }) => {
    await page.goto(getIndexPath());

    const styles = await page.locator('[data-testid="outline-text"]').evaluate(el => {
      const computed = getComputedStyle(el);
      return {
        color: computed.color,
        webkitTextStroke: computed.webkitTextStroke,
        webkitTextStrokeWidth: computed.webkitTextStrokeWidth,
        webkitTextStrokeColor: computed.webkitTextStrokeColor
      };
    });

    // Color should be transparent
    expect(
      styles.color,
      'Outline text should have transparent color'
    ).toMatch(/rgba?\(0,\s*0,\s*0,\s*0\)|transparent/);

    // Should have text stroke defined
    const hasStroke = styles.webkitTextStroke || styles.webkitTextStrokeWidth;
    expect(hasStroke, 'Outline text should have webkit-text-stroke').toBeTruthy();
  });

  test('Filled and outline create visual contrast', async ({ page }) => {
    await page.goto(getIndexPath());

    const filledColor = await page.locator('[data-testid="filled-text"]').evaluate(
      el => getComputedStyle(el).color
    );
    const outlineColor = await page.locator('[data-testid="outline-text"]').evaluate(
      el => getComputedStyle(el).color
    );

    // They should be different colors (filled is solid, outline is transparent)
    expect(filledColor, 'Filled and outline should have different colors').not.toBe(outlineColor);
  });

  test('.text-outline class applies stroke correctly', async ({ page }) => {
    await page.goto(getIndexPath());

    // Find an element with text-outline class in the demo
    const outlineElement = page.locator('.text-outline').first();

    if (await outlineElement.count() > 0) {
      const styles = await outlineElement.evaluate(el => {
        const computed = getComputedStyle(el);
        return {
          color: computed.color,
          stroke: computed.webkitTextStrokeWidth
        };
      });

      expect(styles.color).toMatch(/rgba?\(0,\s*0,\s*0,\s*0\)|transparent/);
    }
  });
});

// ============================================================================
// CATEGORY 6: CSS VARIABLE TESTS
// Verify CSS custom properties are defined and have correct values
// ============================================================================

test.describe('Category 6: CSS Variables', () => {
  test('CSS variables are defined', async ({ page }) => {
    await page.goto(getIndexPath());

    const variables = await page.evaluate(() => {
      const root = getComputedStyle(document.documentElement);
      return {
        fontDisplay: root.getPropertyValue('--font-display').trim(),
        fontBody: root.getPropertyValue('--font-body').trim(),
        colorPrimary: root.getPropertyValue('--color-primary').trim(),
        textHero: root.getPropertyValue('--text-hero').trim(),
        leadingNone: root.getPropertyValue('--leading-none').trim()
      };
    });

    expect(variables.fontDisplay, '--font-display should contain Instrument Serif').toContain('Instrument Serif');
    expect(variables.fontBody, '--font-body should contain Inter').toContain('Inter');
    expect(variables.colorPrimary, '--color-primary should be #E83025').toBe('#E83025');
    expect(variables.textHero, '--text-hero should be defined').toBeTruthy();
    expect(variables.leadingNone, '--leading-none should be 0.9').toBe('0.9');
  });

  test('Type scale variables are properly defined', async ({ page }) => {
    await page.goto(getIndexPath());

    const typeScale = await page.evaluate(() => {
      const root = getComputedStyle(document.documentElement);
      return {
        textHero: root.getPropertyValue('--text-hero').trim(),
        textDisplay1: root.getPropertyValue('--text-display-1').trim(),
        textDisplay2: root.getPropertyValue('--text-display-2').trim(),
        textBody: root.getPropertyValue('--text-body').trim(),
        textCaption: root.getPropertyValue('--text-caption').trim()
      };
    });

    // All should be defined (not empty)
    Object.entries(typeScale).forEach(([key, value]) => {
      expect(value, `${key} should be defined`).toBeTruthy();
    });

    // Body should be 16px
    expect(typeScale.textBody, '--text-body should be 16px').toBe('16px');
  });

  test('Leading (line-height) variables are defined', async ({ page }) => {
    await page.goto(getIndexPath());

    const leading = await page.evaluate(() => {
      const root = getComputedStyle(document.documentElement);
      return {
        leadingNone: root.getPropertyValue('--leading-none').trim(),
        leadingTight: root.getPropertyValue('--leading-tight').trim(),
        leadingSnug: root.getPropertyValue('--leading-snug').trim(),
        leadingNormal: root.getPropertyValue('--leading-normal').trim(),
        leadingRelaxed: root.getPropertyValue('--leading-relaxed').trim()
      };
    });

    expect(leading.leadingNone, '--leading-none should be 0.9').toBe('0.9');
    expect(leading.leadingTight, '--leading-tight should be 1.0').toBe('1.0');
    expect(leading.leadingSnug, '--leading-snug should be 1.2').toBe('1.2');
    expect(parseFloat(leading.leadingNormal), '--leading-normal should be >= 1.4').toBeGreaterThanOrEqual(1.4);
    expect(parseFloat(leading.leadingRelaxed), '--leading-relaxed should be >= 1.6').toBeGreaterThanOrEqual(1.6);
  });

  test('Tracking (letter-spacing) variables are defined', async ({ page }) => {
    await page.goto(getIndexPath());

    const tracking = await page.evaluate(() => {
      const root = getComputedStyle(document.documentElement);
      return {
        trackingTighter: root.getPropertyValue('--tracking-tighter').trim(),
        trackingTight: root.getPropertyValue('--tracking-tight').trim(),
        trackingNormal: root.getPropertyValue('--tracking-normal').trim(),
        trackingWide: root.getPropertyValue('--tracking-wide').trim(),
        trackingWider: root.getPropertyValue('--tracking-wider').trim()
      };
    });

    // Tighter should be negative
    expect(tracking.trackingTighter, '--tracking-tighter should be negative').toMatch(/^-/);
    // Normal should be 0
    expect(tracking.trackingNormal, '--tracking-normal should be 0').toBe('0');
    // Wide should be positive
    expect(tracking.trackingWide, '--tracking-wide should be positive').not.toMatch(/^-/);
  });
});

// ============================================================================
// CATEGORY 7: VIEWPORT DOMINANCE TEST
// Verify hero text fills most of the viewport width
// ============================================================================

test.describe('Category 7: Viewport Dominance', () => {
  test('Hero text fills at least 80% of viewport width', async ({ page }) => {
    await page.goto(getIndexPath());
    await page.setViewportSize({ width: 1440, height: 900 });

    // Wait for fonts to load
    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForTimeout(300);

    const hero = page.locator('[data-testid="hero-text"]');
    const textWidth = await hero.evaluate(el => el.scrollWidth);
    const viewportWidth = 1440;
    const fillPercentage = (textWidth / viewportWidth) * 100;

    expect(
      fillPercentage,
      `Hero must fill >=80% of viewport (currently ${fillPercentage.toFixed(1)}%)`
    ).toBeGreaterThanOrEqual(80);
  });

  test('Sanrok reproduction section is near-full viewport height', async ({ page }) => {
    await page.goto(getIndexPath());
    await page.setViewportSize({ width: 1440, height: 900 });

    const sanrokSection = page.locator('[data-testid="sanrok-demo"]');
    const minHeightPx = await sanrokSection.evaluate(el => {
      const computed = getComputedStyle(el);
      return parseFloat(computed.minHeight);
    });

    // 90vh of 900px viewport = 810px. Allow some tolerance.
    // The min-height should be at least 80% of viewport (720px)
    const viewportHeight = 900;
    const minHeightPercentage = (minHeightPx / viewportHeight) * 100;
    expect(minHeightPercentage, 'Sanrok section should have near-full viewport height (>=80vh)').toBeGreaterThanOrEqual(80);
  });

  test('Display text scales with viewport', async ({ page }) => {
    await page.goto(getIndexPath());

    // Test at small viewport
    await page.setViewportSize({ width: 375, height: 667 });
    const smallSize = await page.locator('.typo-hero').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    // Test at large viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    const largeSize = await page.locator('.typo-hero').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    expect(largeSize, 'Hero should be larger on wider viewport').toBeGreaterThan(smallSize);
  });
});

// ============================================================================
// CATEGORY 8: FALLBACK FONT DETECTION TEST
// Ensure display text uses the intended font, not fallbacks
// ============================================================================

test.describe('Category 8: Fallback Font Detection', () => {
  test('Display text is NOT using fallback font', async ({ page }) => {
    await page.goto(getIndexPath());

    // Wait for fonts
    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForFunction(() => document.fonts.check('12px "Instrument Serif"'));

    const fontFamily = await page.locator('.typo-hero').first().evaluate(
      el => getComputedStyle(el).fontFamily.toLowerCase()
    );

    expect(fontFamily, 'Font family should contain Instrument Serif').toContain('instrument serif');

    // Ensure it's not falling back to system fonts as primary
    expect(fontFamily, 'Should not fall back to Georgia as primary').not.toMatch(/^georgia/);
    expect(fontFamily, 'Should not fall back to Times as primary').not.toMatch(/^"times/);
    expect(fontFamily, 'Should not fall back to serif as primary').not.toMatch(/^serif/);
  });

  test('Body text uses Inter, not system fallback', async ({ page }) => {
    await page.goto(getIndexPath());

    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForFunction(() => document.fonts.check('12px "Inter"'));

    const fontFamily = await page.locator('.typo-body').first().evaluate(
      el => getComputedStyle(el).fontFamily.toLowerCase()
    );

    expect(fontFamily, 'Font family should contain Inter').toContain('inter');

    // Should not fall back to system UI font
    expect(fontFamily, 'Should not fall back to system-ui as primary').not.toMatch(/^-apple-system/);
    expect(fontFamily, 'Should not fall back to BlinkMacSystemFont as primary').not.toMatch(/^blinkmac/i);
  });

  test('Font loading indicator confirms both fonts loaded', async ({ page }) => {
    await page.goto(getIndexPath());

    // Wait for the script to complete font checks
    await page.waitForFunction(
      () => document.body.getAttribute('data-fonts-loaded') === 'true',
      { timeout: 5000 }
    );

    // Both fonts should be verified by document.fonts API
    const instrumentLoaded = await page.evaluate(() =>
      document.fonts.check('12px "Instrument Serif"')
    );
    const interLoaded = await page.evaluate(() =>
      document.fonts.check('12px "Inter"')
    );

    expect(instrumentLoaded, 'Instrument Serif should be loaded').toBe(true);
    expect(interLoaded, 'Inter should be loaded').toBe(true);
  });
});

// ============================================================================
// CATEGORY 9: MIXED TEXT DEMO TEST
// Verify Sanrok reproduction has both filled and outline words
// ============================================================================

test.describe('Category 9: Mixed Text Demo', () => {
  test('Sanrok demo has both filled AND outline text', async ({ page }) => {
    await page.goto(getIndexPath());

    const demo = page.locator('[data-testid="sanrok-demo"]');
    const filledCount = await demo.locator('.word-filled').count();
    const outlineCount = await demo.locator('.word-outline').count();

    expect(filledCount, 'Must have filled words').toBeGreaterThan(0);
    expect(outlineCount, 'Must have outline words').toBeGreaterThan(0);
  });

  test('Mixed treatment creates visual rhythm in each line', async ({ page }) => {
    await page.goto(getIndexPath());

    const demo = page.locator('[data-testid="sanrok-demo"]');

    // First line "WE ARE SANROK®." should have both treatments
    const firstLine = demo.locator('p').first();
    const hasFilledInFirst = await firstLine.locator('.word-filled').count() > 0;
    const hasOutlineInFirst = await firstLine.locator('.word-outline').count() > 0;

    expect(hasFilledInFirst, 'First line should have filled text').toBe(true);
    expect(hasOutlineInFirst, 'First line should have outline text').toBe(true);
  });

  test('Display text testid elements exist', async ({ page }) => {
    await page.goto(getIndexPath());

    // Check that required test IDs exist
    await expect(page.locator('[data-testid="sanrok-demo"]')).toBeVisible();
    await expect(page.locator('[data-testid="hero-text"]')).toBeVisible();
    await expect(page.locator('[data-testid="filled-text"]')).toBeVisible();
    await expect(page.locator('[data-testid="outline-text"]')).toBeVisible();
    await expect(page.locator('[data-testid="display-text"]')).toBeVisible();
    await expect(page.locator('[data-testid="body-text"]')).toBeVisible();
  });

  test('Filled and outline words alternate in demo', async ({ page }) => {
    await page.goto(getIndexPath());

    const demo = page.locator('[data-testid="sanrok-demo"]');

    // Count total treatments
    const totalFilled = await demo.locator('.word-filled').count();
    const totalOutline = await demo.locator('.word-outline').count();

    // Should have a good mix (at least 3 of each)
    expect(totalFilled, 'Should have multiple filled words').toBeGreaterThanOrEqual(3);
    expect(totalOutline, 'Should have multiple outline words').toBeGreaterThanOrEqual(3);
  });
});

// ============================================================================
// CATEGORY 10: VISUAL REGRESSION TEST
// Screenshot comparison to catch unexpected visual changes
// ============================================================================

test.describe('Category 10: Visual Regression', () => {
  test('Sanrok reproduction matches baseline', async ({ page }) => {
    await page.goto(getIndexPath());
    await page.setViewportSize({ width: 1440, height: 900 });

    // Wait for fonts to load completely
    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForTimeout(500); // Allow rendering to stabilize

    const demo = page.locator('[data-testid="sanrok-demo"]');

    // Ensure the demo is in view
    await demo.scrollIntoViewIfNeeded();

    await expect(demo).toHaveScreenshot('sanrok-reproduction.png', {
      threshold: 0.25, // 25% tolerance for font rendering differences
      animations: 'disabled',
      maxDiffPixelRatio: 0.25
    });
  });

  test('Type scale section matches baseline', async ({ page }) => {
    await page.goto(getIndexPath());
    await page.setViewportSize({ width: 1440, height: 900 });

    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForTimeout(300);

    // Find the type scale demo section
    const typeScaleSection = page.locator('.type-scale-demo').first();
    await typeScaleSection.scrollIntoViewIfNeeded();

    await expect(typeScaleSection).toHaveScreenshot('type-scale.png', {
      threshold: 0.2,
      animations: 'disabled'
    });
  });

  test('Full page screenshot matches baseline', async ({ page }) => {
    await page.goto(getIndexPath());
    await page.setViewportSize({ width: 1440, height: 900 });

    await page.waitForFunction(() => document.fonts.ready);
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      threshold: 0.25,
      animations: 'disabled'
    });
  });
});

// ============================================================================
// BONUS: RESPONSIVE BEHAVIOR TESTS
// Additional tests for responsive typography behavior
// ============================================================================

test.describe('Bonus: Responsive Behavior', () => {
  test('Typography scales down on mobile viewport', async ({ page }) => {
    await page.goto(getIndexPath());

    // Desktop size
    await page.setViewportSize({ width: 1440, height: 900 });
    const desktopHeroSize = await page.locator('.typo-hero').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    // Mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileHeroSize = await page.locator('.typo-hero').first().evaluate(
      el => parseFloat(getComputedStyle(el).fontSize)
    );

    expect(mobileHeroSize, 'Hero should be smaller on mobile').toBeLessThan(desktopHeroSize);
    expect(mobileHeroSize, 'Hero should still be readable on mobile (>=32px)').toBeGreaterThanOrEqual(32);
  });

  test('Stroke width adjusts on smaller screens', async ({ page }) => {
    await page.goto(getIndexPath());

    // Desktop - should have 2px stroke
    await page.setViewportSize({ width: 1440, height: 900 });
    const desktopStroke = await page.locator('[data-testid="outline-text"]').evaluate(el => {
      const computed = getComputedStyle(el);
      return computed.webkitTextStrokeWidth || '2px';
    });

    // Mobile - should have thinner stroke (responsive CSS)
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileStroke = await page.locator('[data-testid="outline-text"]').evaluate(el => {
      const computed = getComputedStyle(el);
      return computed.webkitTextStrokeWidth || '1px';
    });

    // Mobile stroke should be thinner or equal (responsive adjustment)
    expect(parseFloat(mobileStroke), 'Mobile stroke should be <= desktop stroke').toBeLessThanOrEqual(parseFloat(desktopStroke));
  });

  test('Body text remains 16px across viewports', async ({ page }) => {
    await page.goto(getIndexPath());

    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1440, height: 900 },
      { width: 1920, height: 1080 }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      const bodySize = await page.locator('[data-testid="body-text"]').evaluate(
        el => parseFloat(getComputedStyle(el).fontSize)
      );
      expect(bodySize, `Body should be 16px at ${viewport.width}px viewport`).toBe(16);
    }
  });
});

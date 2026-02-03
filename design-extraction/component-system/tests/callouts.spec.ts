import { test, expect } from '@playwright/test';

/**
 * CALLOUTS Component Tests
 *
 * Tests for all 6 callout types:
 * - Gotcha Box (warning)
 * - Essence Box (key insight)
 * - Reasoning Box (tradeoff analysis)
 * - Challenge Box (difficulty indicator)
 * - Info Callout (contextual note)
 * - Tip Callout (pro tip)
 *
 * Test Categories:
 * 1. Soul Principle Tests - verify editorial nature
 * 2. Anti-Pattern Tests - verify not generic Bootstrap alerts
 * 3. Structure Tests - verify correct HTML
 * 4. Visual Regression Tests - screenshot baselines
 */

// ============================================================================
// GOTCHA BOX TESTS
// ============================================================================
test.describe('Gotcha Box Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test.describe('Soul Principles', () => {
    test('has transparent background (NOT yellow)', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const bgColor = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('has bold left border (6px primary)', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const borderLeftWidth = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(6);
    });

    test('has left border only (no other borders)', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const borderTop = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderTopWidth
      );
      const borderRight = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderRightWidth
      );
      const borderBottom = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderBottomWidth
      );
      expect(borderTop).toBe('0px');
      expect(borderRight).toBe('0px');
      expect(borderBottom).toBe('0px');
    });

    test('has sharp corners (border-radius: 0)', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const borderRadius = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('has no shadow', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const boxShadow = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });

    test('label uses serif italic', async ({ page }) => {
      const label = page.locator('.gotcha-box__label');
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
      const label = page.locator('.gotcha-box__label');
      const textTransform = await label.evaluate((el) =>
        getComputedStyle(el).textTransform
      );
      expect(textTransform).toBe('uppercase');
    });

    test('label uses primary red color', async ({ page }) => {
      const label = page.locator('.gotcha-box__label');
      const color = await label.evaluate((el) =>
        getComputedStyle(el).color
      );
      expect(color).toBe('rgb(232, 48, 37)');
    });
  });

  test.describe('Anti-Patterns', () => {
    test('does NOT have yellow warning background (#fff3cd)', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const bgColor = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(255, 243, 205)');
    });

    test('does NOT have warning icon', async ({ page }) => {
      const icons = page.locator('.gotcha-box [class*="icon"], .gotcha-box svg, .gotcha-box img');
      await expect(icons).toHaveCount(0);
    });

    test('does NOT have brown text color (#856404)', async ({ page }) => {
      const content = page.locator('.gotcha-box__content');
      const color = await content.evaluate((el) =>
        getComputedStyle(el).color
      );
      expect(color).not.toBe('rgb(133, 100, 4)');
    });

    test('does NOT have rounded corners', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const borderRadius = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });
  });

  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      await expect(gotchaBox).toHaveCount(1);
    });

    test('uses aside element', async ({ page }) => {
      const aside = page.locator('aside[data-component="gotcha-box"]');
      await expect(aside).toHaveCount(1);
    });

    test('has role="note"', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const role = await gotchaBox.getAttribute('role');
      expect(role).toBe('note');
    });

    test('has aria-label', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const ariaLabel = await gotchaBox.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
    });

    test('has label element', async ({ page }) => {
      const label = page.locator('.gotcha-box__label');
      await expect(label).toHaveCount(1);
    });

    test('has content element', async ({ page }) => {
      const content = page.locator('.gotcha-box__content');
      await expect(content).toHaveCount(1);
    });
  });

  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]').first();
      await expect(gotchaBox).toHaveScreenshot('gotcha-box-baseline.png');
    });
  });
});

// ============================================================================
// ESSENCE BOX TESTS
// ============================================================================
test.describe('Essence Box Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test.describe('Soul Principles', () => {
    test('has transparent background', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const bgColor = await essenceBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('has full border frame (3px on all sides)', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const borderWidth = await essenceBox.evaluate((el) =>
        getComputedStyle(el).borderWidth
      );
      const widths = borderWidth.split(' ').map((w: string) => parseInt(w));
      widths.forEach((width: number) => {
        expect(width).toBeGreaterThanOrEqual(3);
      });
    });

    test('has border in primary red', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const borderColor = await essenceBox.evaluate((el) =>
        getComputedStyle(el).borderColor
      );
      expect(borderColor).toContain('rgb(232, 48, 37)');
    });

    test('has sharp corners (border-radius: 0)', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const borderRadius = await essenceBox.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('content uses serif italic font', async ({ page }) => {
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

    test('content has larger font size (h4 scale)', async ({ page }) => {
      const content = page.locator('.essence-box__content');
      const fontSize = await content.evaluate((el) =>
        getComputedStyle(el).fontSize
      );
      // h4 is 1.25rem = 20px
      expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(18);
    });

    test('has generous padding (32px)', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const padding = await essenceBox.evaluate((el) =>
        getComputedStyle(el).padding
      );
      const paddingValues = padding.split(' ').map((p: string) => parseInt(p));
      paddingValues.forEach((p: number) => {
        expect(p).toBeGreaterThanOrEqual(24);
      });
    });

    test('attribution is right-aligned', async ({ page }) => {
      const attribution = page.locator('.essence-box__attribution');
      if (await attribution.count() > 0) {
        const textAlign = await attribution.evaluate((el) =>
          getComputedStyle(el).textAlign
        );
        expect(textAlign).toBe('right');
      }
    });
  });

  test.describe('Anti-Patterns', () => {
    test('does NOT have gray background (#f9f9f9)', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const bgColor = await essenceBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(249, 249, 249)');
    });

    test('does NOT have decorative quote marks', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const beforeContent = await essenceBox.evaluate((el) => {
        return getComputedStyle(el, '::before').content;
      });
      const afterContent = await essenceBox.evaluate((el) => {
        return getComputedStyle(el, '::after').content;
      });
      // Should be "none" or empty
      expect(beforeContent).not.toMatch(/[""]/);
      expect(afterContent).not.toMatch(/[""]/);
    });

    test('does NOT have left border only (should be full frame)', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      const borderTop = await essenceBox.evaluate((el) =>
        getComputedStyle(el).borderTopWidth
      );
      // Should have top border (not just left)
      expect(parseInt(borderTop)).toBeGreaterThan(0);
    });
  });

  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]');
      await expect(essenceBox).toHaveCount(1);
    });

    test('uses aside element', async ({ page }) => {
      const aside = page.locator('aside[data-component="essence-box"]');
      await expect(aside).toHaveCount(1);
    });

    test('has content element', async ({ page }) => {
      const content = page.locator('.essence-box__content');
      await expect(content).toHaveCount(1);
    });

    test('may have attribution element', async ({ page }) => {
      const attribution = page.locator('.essence-box__attribution');
      // Attribution is optional but should use cite element if present
      if (await attribution.count() > 0) {
        const tagName = await attribution.evaluate((el) => el.tagName.toLowerCase());
        expect(tagName).toBe('cite');
      }
    });
  });

  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const essenceBox = page.locator('[data-component="essence-box"]').first();
      await expect(essenceBox).toHaveScreenshot('essence-box-baseline.png');
    });
  });
});

// ============================================================================
// INFO CALLOUT TESTS
// ============================================================================
test.describe('Info Callout Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test.describe('Soul Principles', () => {
    test('has transparent background', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const bgColor = await infoCallout.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('has subtle left border (3px secondary)', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const borderLeftWidth = await infoCallout.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(3);
    });

    test('has sharp corners', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const borderRadius = await infoCallout.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('label uses small caps uppercase', async ({ page }) => {
      const label = page.locator('.info-callout__label');
      const textTransform = await label.evaluate((el) =>
        getComputedStyle(el).textTransform
      );
      expect(textTransform).toBe('uppercase');
    });

    test('content is smaller and muted', async ({ page }) => {
      const content = page.locator('.info-callout__content');
      const color = await content.evaluate((el) =>
        getComputedStyle(el).color
      );
      // Should be muted secondary color
      expect(color).toBe('rgb(102, 102, 102)');
    });
  });

  test.describe('Anti-Patterns', () => {
    test('does NOT have blue background (#d1ecf1)', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const bgColor = await infoCallout.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(209, 236, 241)');
    });

    test('does NOT have info circle icon', async ({ page }) => {
      const icons = page.locator('.info-callout [class*="icon"], .info-callout svg');
      await expect(icons).toHaveCount(0);
    });

    test('does NOT have blue border', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const borderColor = await infoCallout.evaluate((el) =>
        getComputedStyle(el).borderLeftColor
      );
      expect(borderColor).not.toBe('rgb(0, 123, 255)');
    });
  });

  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      await expect(infoCallout).toHaveCount(1);
    });

    test('uses aside element', async ({ page }) => {
      const aside = page.locator('aside[data-component="info-callout"]');
      await expect(aside).toHaveCount(1);
    });

    test('has role="note"', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const role = await infoCallout.getAttribute('role');
      expect(role).toBe('note');
    });
  });

  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]').first();
      await expect(infoCallout).toHaveScreenshot('info-callout-baseline.png');
    });
  });
});

// ============================================================================
// TIP CALLOUT TESTS
// ============================================================================
test.describe('Tip Callout Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test.describe('Soul Principles', () => {
    test('has transparent background', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const bgColor = await tipCallout.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('has top border accent (2px primary)', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const borderTopWidth = await tipCallout.evaluate((el) =>
        getComputedStyle(el).borderTopWidth
      );
      expect(parseInt(borderTopWidth)).toBeGreaterThanOrEqual(2);
    });

    test('has sharp corners', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const borderRadius = await tipCallout.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('label uses serif italic', async ({ page }) => {
      const label = page.locator('.tip-callout__label');
      const fontFamily = await label.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      const fontStyle = await label.evaluate((el) =>
        getComputedStyle(el).fontStyle
      );
      expect(fontFamily).toContain('Instrument Serif');
      expect(fontStyle).toBe('italic');
    });

    test('label uses primary red', async ({ page }) => {
      const label = page.locator('.tip-callout__label');
      const color = await label.evaluate((el) =>
        getComputedStyle(el).color
      );
      expect(color).toBe('rgb(232, 48, 37)');
    });
  });

  test.describe('Anti-Patterns', () => {
    test('does NOT have green background (#d4edda)', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const bgColor = await tipCallout.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(212, 237, 218)');
    });

    test('does NOT have lightbulb icon', async ({ page }) => {
      const icons = page.locator('.tip-callout [class*="icon"], .tip-callout svg, .tip-callout [class*="bulb"]');
      await expect(icons).toHaveCount(0);
    });

    test('does NOT have left border (should be top)', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const borderLeftWidth = await tipCallout.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      // Should not have significant left border
      expect(parseInt(borderLeftWidth)).toBeLessThanOrEqual(1);
    });
  });

  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      await expect(tipCallout).toHaveCount(1);
    });

    test('uses aside element', async ({ page }) => {
      const aside = page.locator('aside[data-component="tip-callout"]');
      await expect(aside).toHaveCount(1);
    });

    test('has role="note"', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const role = await tipCallout.getAttribute('role');
      expect(role).toBe('note');
    });
  });

  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]').first();
      await expect(tipCallout).toHaveScreenshot('tip-callout-baseline.png');
    });
  });
});

// ============================================================================
// REASONING BOX TESTS
// ============================================================================
test.describe('Reasoning Box Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test.describe('Soul Principles', () => {
    test('has transparent background', async ({ page }) => {
      const reasoningBox = page.locator('[data-component="reasoning-box"]');
      const bgColor = await reasoningBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('has border frame', async ({ page }) => {
      const reasoningBox = page.locator('[data-component="reasoning-box"]');
      const borderWidth = await reasoningBox.evaluate((el) =>
        getComputedStyle(el).borderWidth
      );
      expect(borderWidth).not.toBe('0px');
    });

    test('has sharp corners', async ({ page }) => {
      const reasoningBox = page.locator('[data-component="reasoning-box"]');
      const borderRadius = await reasoningBox.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('has two-column grid layout', async ({ page }) => {
      const grid = page.locator('.reasoning-box__grid');
      const display = await grid.evaluate((el) =>
        getComputedStyle(el).display
      );
      expect(display).toBe('grid');
    });

    test('summary has accent border top', async ({ page }) => {
      const summary = page.locator('.reasoning-box__summary');
      const borderTopWidth = await summary.evaluate((el) =>
        getComputedStyle(el).borderTopWidth
      );
      expect(parseInt(borderTopWidth)).toBeGreaterThanOrEqual(2);
    });

    test('title uses serif italic', async ({ page }) => {
      const title = page.locator('.reasoning-box__title');
      const fontFamily = await title.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toContain('Instrument Serif');
    });
  });

  test.describe('Anti-Patterns', () => {
    test('columns do NOT have green/red backgrounds', async ({ page }) => {
      const columns = page.locator('.reasoning-box__column');
      const count = await columns.count();

      for (let i = 0; i < count; i++) {
        const column = columns.nth(i);
        const bgColor = await column.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(bgColor).not.toBe('rgb(212, 237, 218)');
        expect(bgColor).not.toBe('rgb(248, 215, 218)');
      }
    });

    test('does NOT have checkmark/X icons', async ({ page }) => {
      const icons = page.locator('.reasoning-box [class*="check"], .reasoning-box [class*="cross"], .reasoning-box [class*="icon"]');
      await expect(icons).toHaveCount(0);
    });
  });

  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const reasoningBox = page.locator('[data-component="reasoning-box"]');
      await expect(reasoningBox).toHaveCount(1);
    });

    test('has title element', async ({ page }) => {
      const title = page.locator('.reasoning-box__title');
      await expect(title).toHaveCount(1);
    });

    test('has grid element', async ({ page }) => {
      const grid = page.locator('.reasoning-box__grid');
      await expect(grid).toHaveCount(1);
    });

    test('has two columns', async ({ page }) => {
      const columns = page.locator('.reasoning-box__column');
      await expect(columns).toHaveCount(2);
    });

    test('has summary element', async ({ page }) => {
      const summary = page.locator('.reasoning-box__summary');
      await expect(summary).toHaveCount(1);
    });
  });

  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const reasoningBox = page.locator('[data-component="reasoning-box"]').first();
      await expect(reasoningBox).toHaveScreenshot('reasoning-box-baseline.png');
    });
  });
});

// ============================================================================
// CHALLENGE BOX TESTS
// ============================================================================
test.describe('Challenge Box Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test.describe('Soul Principles', () => {
    test('has transparent background', async ({ page }) => {
      const challengeBox = page.locator('[data-component="challenge-box"]');
      const bgColor = await challengeBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('level indicator is square (not circle)', async ({ page }) => {
      const level = page.locator('.challenge-box__level');
      const borderRadius = await level.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('level indicator uses primary red background', async ({ page }) => {
      const level = page.locator('.challenge-box__level');
      const bgColor = await level.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toBe('rgb(232, 48, 37)');
    });

    test('modifier tags have outline style', async ({ page }) => {
      const modifier = page.locator('.challenge-box__modifier').first();
      if (await modifier.count() > 0) {
        const bgColor = await modifier.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        const borderWidth = await modifier.evaluate((el) =>
          getComputedStyle(el).borderWidth
        );
        expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
        expect(borderWidth).not.toBe('0px');
      }
    });

    test('modifier tags have sharp corners', async ({ page }) => {
      const modifier = page.locator('.challenge-box__modifier').first();
      if (await modifier.count() > 0) {
        const borderRadius = await modifier.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).toBe('0px');
      }
    });
  });

  test.describe('Anti-Patterns', () => {
    test('does NOT have star ratings', async ({ page }) => {
      const stars = page.locator('.challenge-box [class*="star"], .challenge-box [class*="rating"]');
      await expect(stars).toHaveCount(0);
    });

    test('does NOT have progress bar', async ({ page }) => {
      const progressBars = page.locator('.challenge-box [class*="progress"]');
      await expect(progressBars).toHaveCount(0);
    });

    test('does NOT have red danger background', async ({ page }) => {
      const challengeBox = page.locator('[data-component="challenge-box"]');
      const bgColor = await challengeBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(248, 215, 218)');
    });

    test('level is NOT a circle (50% border-radius)', async ({ page }) => {
      const level = page.locator('.challenge-box__level');
      const borderRadius = await level.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).not.toBe('50%');
    });
  });

  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const challengeBox = page.locator('[data-component="challenge-box"]');
      await expect(challengeBox).toHaveCount(1);
    });

    test('has level indicator element', async ({ page }) => {
      const level = page.locator('.challenge-box__level');
      await expect(level).toHaveCount(1);
    });

    test('has details element', async ({ page }) => {
      const details = page.locator('.challenge-box__details');
      await expect(details).toHaveCount(1);
    });

    test('has label element', async ({ page }) => {
      const label = page.locator('.challenge-box__label');
      await expect(label).toHaveCount(1);
    });
  });

  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const challengeBox = page.locator('[data-component="challenge-box"]').first();
      await expect(challengeBox).toHaveScreenshot('challenge-box-baseline.png');
    });
  });
});

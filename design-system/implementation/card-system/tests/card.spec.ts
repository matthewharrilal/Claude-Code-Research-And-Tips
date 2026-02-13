/*
LIGHT SECTION — Phase 2D
Part Of: card-system/tests — Card test infrastructure
Contributed To: Automated soul verification methodology
Full Context: perceptual-audit-v2/synthesis/
*/

import { test, expect } from '@playwright/test';
import * as path from 'path';

test.describe('Card Component System — Phase 3', () => {

  test.beforeEach(async ({ page }) => {
    const filePath = path.resolve(__dirname, '../index.html');
    await page.goto(`file://${filePath}`);
    await page.waitForFunction(() => document.fonts.ready);
  });

  // ═══════════════════════════════════════════════════════════════
  // SOUL PRINCIPLE 1: NO CONTAINER CHROME
  // ═══════════════════════════════════════════════════════════════

  test.describe('Soul Principle 1: No Container Chrome', () => {

    test('Card background is transparent', async ({ page }) => {
      const cards = await page.locator('.project-card').all();
      expect(cards.length, 'Should have project cards').toBeGreaterThan(0);

      for (const card of cards) {
        const bg = await card.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(bg, 'Card must have transparent background').toMatch(
          /rgba\(0,\s*0,\s*0,\s*0\)|transparent/
        );
      }
    });

    test('Card has no border', async ({ page }) => {
      const cards = await page.locator('.project-card').all();

      for (const card of cards) {
        const borderWidth = await card.evaluate(el =>
          parseFloat(getComputedStyle(el).borderWidth) || 0
        );
        expect(borderWidth, 'Card must have no border').toBe(0);
      }
    });

    test('Card has zero border-radius', async ({ page }) => {
      const cards = await page.locator('.project-card').all();

      for (const card of cards) {
        const radius = await card.evaluate(el => getComputedStyle(el).borderRadius);
        expect(radius, 'Card must have 0 border-radius').toBe('0px');
      }
    });

    test('Card has no box-shadow', async ({ page }) => {
      const cards = await page.locator('.project-card').all();

      for (const card of cards) {
        const shadow = await card.evaluate(el => getComputedStyle(el).boxShadow);
        expect(shadow, 'Card must have no shadow').toBe('none');
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // SOUL PRINCIPLE 2: OUTLINE TAGS (NOT FILLED)
  // ═══════════════════════════════════════════════════════════════

  test.describe('Soul Principle 2: Outline Tags', () => {

    test('Tag background is transparent', async ({ page }) => {
      const tags = await page.locator('.tag').all();
      expect(tags.length, 'Should have tags').toBeGreaterThan(0);

      for (const tag of tags) {
        const bg = await tag.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(bg, 'Tag must have transparent background').toMatch(
          /rgba\(0,\s*0,\s*0,\s*0\)|transparent/
        );
      }
    });

    test('Tag has visible border', async ({ page }) => {
      const tags = await page.locator('.tag').all();

      for (const tag of tags) {
        const borderWidth = await tag.evaluate(el =>
          parseFloat(getComputedStyle(el).borderWidth)
        );
        const borderStyle = await tag.evaluate(el =>
          getComputedStyle(el).borderStyle
        );

        expect(borderWidth, 'Tag must have border width').toBeGreaterThan(0);
        expect(borderStyle, 'Tag must have solid border').toBe('solid');
      }
    });

    test('Tag border-radius is 0 or <=2px', async ({ page }) => {
      const tags = await page.locator('.tag').all();

      for (const tag of tags) {
        const radius = await tag.evaluate(
          el => parseFloat(getComputedStyle(el).borderRadius)
        );
        expect(radius, 'Tag border-radius must be <=2px').toBeLessThanOrEqual(2);
      }
    });

    test('Tag text is uppercase', async ({ page }) => {
      const tags = await page.locator('.tag').all();

      for (const tag of tags) {
        const transform = await tag.evaluate(el => getComputedStyle(el).textTransform);
        expect(transform, 'Tag text must be uppercase').toBe('uppercase');
      }
    });

    test('Tag uses Inter font', async ({ page }) => {
      const tag = page.locator('.tag').first();
      const font = await tag.evaluate(el =>
        getComputedStyle(el).fontFamily.toLowerCase()
      );
      expect(font, 'Tag must use Inter font').toContain('inter');
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // SOUL PRINCIPLE 3: TYPOGRAPHY HIERARCHY
  // ═══════════════════════════════════════════════════════════════

  test.describe('Soul Principle 3: Typography Hierarchy', () => {

    test('Title uses Instrument Serif', async ({ page }) => {
      const title = page.locator('.project-card__title').first();
      const font = await title.evaluate(el =>
        getComputedStyle(el).fontFamily.toLowerCase()
      );
      expect(font, 'Title must use Instrument Serif').toContain('instrument serif');
    });

    test('Title is italic', async ({ page }) => {
      const title = page.locator('.project-card__title').first();
      const style = await title.evaluate(el => getComputedStyle(el).fontStyle);
      expect(style, 'Title must be italic').toBe('italic');
    });

    test('Title is uppercase', async ({ page }) => {
      const title = page.locator('.project-card__title').first();
      const transform = await title.evaluate(el => getComputedStyle(el).textTransform);
      expect(transform, 'Title must be uppercase').toBe('uppercase');
    });

    test('Title is primary color (red)', async ({ page }) => {
      const title = page.locator('.project-card__title').first();
      const color = await title.evaluate(el => getComputedStyle(el).color);
      // #E83025 = rgb(232, 48, 37)
      expect(color, 'Title must be red').toMatch(/rgb\(232,\s*48,\s*37\)/);
    });

    test('Year uses Inter font', async ({ page }) => {
      const year = page.locator('.project-card__year').first();
      const font = await year.evaluate(el =>
        getComputedStyle(el).fontFamily.toLowerCase()
      );
      expect(font, 'Year must use Inter font').toContain('inter');
    });

    test('Year is not italic', async ({ page }) => {
      const year = page.locator('.project-card__year').first();
      const style = await year.evaluate(el => getComputedStyle(el).fontStyle);
      expect(style, 'Year must not be italic').toBe('normal');
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // SOUL PRINCIPLE 4: FLAT DESIGN (NO DEPTH)
  // ═══════════════════════════════════════════════════════════════

  test.describe('Soul Principle 4: Flat Design', () => {

    test('No project-card element has box-shadow', async ({ page }) => {
      const cards = await page.locator('.project-card').all();

      for (const card of cards) {
        const shadow = await card.evaluate(e => getComputedStyle(e).boxShadow);
        expect(shadow, 'No card should have shadow').toBe('none');
      }
    });

    test('No card element has gradient background', async ({ page }) => {
      const elements = await page.locator('.project-card, .project-card *').all();

      for (const el of elements) {
        const bg = await el.evaluate(e => getComputedStyle(e).backgroundImage);
        if (bg !== 'none') {
          expect(bg, 'No card element should have gradient').not.toContain('gradient');
        }
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // SOUL PRINCIPLE 5: SHARP EDGES
  // ═══════════════════════════════════════════════════════════════

  test.describe('Soul Principle 5: Sharp Edges', () => {

    test('No card element has border-radius > 4px', async ({ page }) => {
      const elements = await page.locator('.project-card, .project-card__title, .project-card__year, .tag').all();

      for (const el of elements) {
        const radius = await el.evaluate(
          e => parseFloat(getComputedStyle(e).borderRadius) || 0
        );
        expect(radius, 'Card element border-radius must be <=4px').toBeLessThanOrEqual(4);
      }
    });

    test('Images have zero border-radius', async ({ page }) => {
      const images = await page.locator('.project-card__image').all();

      for (const img of images) {
        const radius = await img.evaluate(el => getComputedStyle(el).borderRadius);
        expect(radius, 'Images must have 0 border-radius').toBe('0px');
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // SOUL PRINCIPLE 6: GRID LAYOUT
  // ═══════════════════════════════════════════════════════════════

  test.describe('Soul Principle 6: Grid Layout', () => {

    test('Project grid uses CSS grid', async ({ page }) => {
      const grid = page.locator('.project-grid').first();
      const display = await grid.evaluate(el => getComputedStyle(el).display);
      expect(display, 'Grid must use CSS grid').toBe('grid');
    });

    test('Project grid has 24px gap', async ({ page }) => {
      const grid = page.locator('.project-grid').first();
      const gap = await grid.evaluate(el => getComputedStyle(el).gap);
      expect(gap, 'Grid gap must be 24px').toBe('24px');
    });

    test('Cards span 6 columns on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1200, height: 800 });
      const card = page.locator('.project-card').first();
      const gridColumn = await card.evaluate(el => getComputedStyle(el).gridColumn);
      expect(gridColumn, 'Cards must span 6 columns').toContain('span 6');
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // SOUL PRINCIPLE 7: DUOTONE IMAGES
  // ═══════════════════════════════════════════════════════════════

  test.describe('Soul Principle 7: Duotone Images', () => {

    test('Duotone containers exist', async ({ page }) => {
      const containers = await page.locator('.duotone').all();
      expect(containers.length, 'Should have duotone containers').toBeGreaterThan(0);
    });

    test('Images have filter effect applied', async ({ page }) => {
      const images = await page.locator('.duotone img').all();

      for (const img of images) {
        const filter = await img.evaluate(el => getComputedStyle(el).filter);
        expect(filter, 'Images should have filter effect').not.toBe('none');
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // ANTI-PATTERN ENFORCEMENT
  // ═══════════════════════════════════════════════════════════════

  test.describe('Anti-Pattern Enforcement', () => {

    test('Generic card example exists for comparison', async ({ page }) => {
      const generic = page.locator('[data-test="generic-card"]');
      await expect(generic, 'Generic card example should exist').toBeVisible();
    });

    test('Generic card has rounded corners (proof it is different)', async ({ page }) => {
      const generic = page.locator('[data-test="generic-card"]');
      const radius = await generic.evaluate(el =>
        parseFloat(getComputedStyle(el).borderRadius)
      );
      expect(radius, 'Generic card should have rounded corners').toBeGreaterThan(0);
    });

    test('Generic card has shadow (proof it is different)', async ({ page }) => {
      const generic = page.locator('[data-test="generic-card"]');
      const shadow = await generic.evaluate(el => getComputedStyle(el).boxShadow);
      expect(shadow, 'Generic card should have shadow').not.toBe('none');
    });

    test('Sanrok card does NOT have rounded corners', async ({ page }) => {
      const sanrok = page.locator('[data-test="sanrok-card"]');
      const radius = await sanrok.evaluate(el => getComputedStyle(el).borderRadius);
      expect(radius, 'Sanrok card must have 0 border-radius').toBe('0px');
    });

    test('Sanrok card does NOT have shadow', async ({ page }) => {
      const sanrok = page.locator('[data-test="sanrok-card"]');
      const shadow = await sanrok.evaluate(el => getComputedStyle(el).boxShadow);
      expect(shadow, 'Sanrok card must have no shadow').toBe('none');
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // VISUAL REGRESSION
  // ═══════════════════════════════════════════════════════════════

  test.describe('Visual Regression', () => {

    test('Sanrok reproduction section matches baseline', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      const section = page.locator('[data-test="sanrok-reproduction"]');
      await expect(section).toBeVisible();

      const screenshot = await section.screenshot();
      expect(screenshot).toMatchSnapshot('sanrok-reproduction.png', {
        threshold: 0.25,
      });
    });

    test('Anti-pattern comparison shows clear difference', async ({ page }) => {
      await page.setViewportSize({ width: 1200, height: 800 });
      const section = page.locator('[data-test="anti-pattern"]');
      await expect(section).toBeVisible();

      const screenshot = await section.screenshot();
      expect(screenshot).toMatchSnapshot('anti-pattern-comparison.png', {
        threshold: 0.2,
      });
    });
  });
});

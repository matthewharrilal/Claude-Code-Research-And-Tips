import { test, expect } from '@playwright/test';

/**
 * TASK PROGRESSION Component Tests
 *
 * Tests for the editorial step indicator component that shows progress
 * like a magazine table of contents, not a checkout wizard.
 *
 * Test Categories:
 * 1. Soul Principle Tests - verify editorial nature
 * 2. Anti-Pattern Tests - verify not checkout wizard
 * 3. Structure Tests - verify correct HTML
 * 4. Visual Regression Tests - screenshot baselines
 */

test.describe('Task Progression Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // CATEGORY 1: Soul Principle Tests
  // ============================================================================
  test.describe('Soul Principles', () => {
    test('has left border accent (4px primary)', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      const borderLeftWidth = await progression.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      const borderLeftColor = await progression.evaluate((el) =>
        getComputedStyle(el).borderLeftColor
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
      expect(borderLeftColor).toBe('rgb(232, 48, 37)');
    });

    test('has vertical layout (not horizontal)', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      const items = page.locator('.task-progression__item');

      if (await items.count() > 1) {
        const firstRect = await items.nth(0).boundingBox();
        const secondRect = await items.nth(1).boundingBox();

        if (firstRect && secondRect) {
          // Second item should be below first (larger Y value)
          expect(secondRect.y).toBeGreaterThan(firstRect.y);
        }
      }
    });

    test('numbers use typography (serif italic)', async ({ page }) => {
      const number = page.locator('.task-progression__number').first();
      const fontFamily = await number.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      const fontStyle = await number.evaluate((el) =>
        getComputedStyle(el).fontStyle
      );
      expect(fontFamily).toContain('Instrument Serif');
      expect(fontStyle).toBe('italic');
    });

    test('numbers use primary red color (current or default state)', async ({ page }) => {
      // Check current item first, or items without state classes
      const currentNumber = page.locator('.task-progression__item--current .task-progression__number').first();
      const defaultNumber = page.locator('.task-progression__item:not([class*="--complete"]):not([class*="--upcoming"]) .task-progression__number').first();

      // Try current item first
      if (await currentNumber.count() > 0) {
        const color = await currentNumber.evaluate((el) => getComputedStyle(el).color);
        expect(color).toBe('rgb(232, 48, 37)');
      } else if (await defaultNumber.count() > 0) {
        const color = await defaultNumber.evaluate((el) => getComputedStyle(el).color);
        expect(color).toBe('rgb(232, 48, 37)');
      }
    });

    test('numbers have larger font size (h3 scale)', async ({ page }) => {
      const number = page.locator('.task-progression__number').first();
      const fontSize = await number.evaluate((el) =>
        getComputedStyle(el).fontSize
      );
      // h3 is 1.5rem = 24px
      expect(parseFloat(fontSize)).toBeGreaterThanOrEqual(20);
    });

    test('items have bottom border separator', async ({ page }) => {
      const items = page.locator('.task-progression__item');
      const count = await items.count();

      if (count > 1) {
        const firstItem = items.first();
        const borderBottom = await firstItem.evaluate((el) =>
          getComputedStyle(el).borderBottomWidth
        );
        expect(parseInt(borderBottom)).toBeGreaterThanOrEqual(1);
      }
    });

    test('last item has no bottom border', async ({ page }) => {
      const items = page.locator('.task-progression__item');
      const count = await items.count();

      if (count > 0) {
        const lastItem = items.last();
        const borderBottom = await lastItem.evaluate((el) =>
          getComputedStyle(el).borderBottomWidth
        );
        expect(borderBottom).toBe('0px');
      }
    });

    test('current state has background highlight', async ({ page }) => {
      const currentItem = page.locator('.task-progression__item--current');
      if (await currentItem.count() > 0) {
        const bgColor = await currentItem.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Should have some background (not fully transparent)
        expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
      }
    });

    test('complete state uses muted number color', async ({ page }) => {
      const completeItem = page.locator('.task-progression__item--complete');
      if (await completeItem.count() > 0) {
        const number = completeItem.locator('.task-progression__number');
        const color = await number.evaluate((el) =>
          getComputedStyle(el).color
        );
        // Should be muted (secondary text color)
        expect(color).toBe('rgb(102, 102, 102)');
      }
    });

    test('title uses sans-serif font', async ({ page }) => {
      const title = page.locator('.task-progression__title').first();
      const fontFamily = await title.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      expect(fontFamily).toContain('Inter');
    });
  });

  // ============================================================================
  // CATEGORY 2: Anti-Pattern Tests
  // ============================================================================
  test.describe('Anti-Patterns', () => {
    test('is NOT horizontal layout (wizard stepper)', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      const display = await progression.evaluate((el) =>
        getComputedStyle(el).display
      );
      const flexDirection = await progression.evaluate((el) =>
        getComputedStyle(el).flexDirection
      );

      // Should not be horizontal flex row
      if (display === 'flex') {
        expect(flexDirection).not.toBe('row');
      }
    });

    test('numbers are NOT in circles (50% border-radius)', async ({ page }) => {
      const numbers = page.locator('.task-progression__number');
      const count = await numbers.count();

      for (let i = 0; i < count; i++) {
        const number = numbers.nth(i);
        const borderRadius = await number.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).not.toBe('50%');
        expect(borderRadius).toBe('0px');
      }
    });

    test('does NOT have connecting lines between steps', async ({ page }) => {
      const connectors = page.locator('.task-progression__line, .step-connector, .wizard-line, [class*="connector"]');
      await expect(connectors).toHaveCount(0);
    });

    test('complete state does NOT use green (#28a745)', async ({ page }) => {
      const completeItem = page.locator('.task-progression__item--complete');
      if (await completeItem.count() > 0) {
        const bgColor = await completeItem.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        const number = completeItem.locator('.task-progression__number');
        const numberColor = await number.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(bgColor).not.toBe('rgb(40, 167, 69)');
        expect(numberColor).not.toBe('rgb(40, 167, 69)');
      }
    });

    test('does NOT use Bootstrap primary blue (#007bff)', async ({ page }) => {
      const numbers = page.locator('.task-progression__number');
      const count = await numbers.count();

      for (let i = 0; i < count; i++) {
        const number = numbers.nth(i);
        const color = await number.evaluate((el) =>
          getComputedStyle(el).color
        );
        const bgColor = await number.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(color).not.toBe('rgb(0, 123, 255)');
        expect(bgColor).not.toBe('rgb(0, 123, 255)');
      }
    });

    test('does NOT have progress percentage text', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      const textContent = await progression.textContent();
      expect(textContent).not.toMatch(/\d+%\s*(complete|done)/i);
    });

    test('does NOT have green checkmark icons', async ({ page }) => {
      const checkmarks = page.locator('.task-progression [class*="check"], .task-progression svg.check, .task-progression [class*="tick"]');
      await expect(checkmarks).toHaveCount(0);
    });

    test('numbers do NOT have background (not circles/badges)', async ({ page }) => {
      const numbers = page.locator('.task-progression__number');
      const count = await numbers.count();

      // Check first active/upcoming number (not complete which may be muted)
      for (let i = 0; i < count; i++) {
        const number = numbers.nth(i);
        const bgColor = await number.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Should be transparent
        expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
      }
    });
  });

  // ============================================================================
  // CATEGORY 3: Structure Tests
  // ============================================================================
  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      await expect(progression).toHaveCount(1);
    });

    test('has task-progression CSS class', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      const classList = await progression.evaluate((el) =>
        Array.from(el.classList)
      );
      expect(classList).toContain('task-progression');
    });

    test('has item elements', async ({ page }) => {
      const items = page.locator('.task-progression__item');
      const count = await items.count();
      expect(count).toBeGreaterThan(0);
    });

    test('each item has number element', async ({ page }) => {
      const items = page.locator('.task-progression__item');
      const count = await items.count();

      for (let i = 0; i < count; i++) {
        const item = items.nth(i);
        const number = item.locator('.task-progression__number');
        await expect(number).toHaveCount(1);
      }
    });

    test('each item has content element', async ({ page }) => {
      const items = page.locator('.task-progression__item');
      const count = await items.count();

      for (let i = 0; i < count; i++) {
        const item = items.nth(i);
        const content = item.locator('.task-progression__content');
        await expect(content).toHaveCount(1);
      }
    });

    test('each item has title', async ({ page }) => {
      const items = page.locator('.task-progression__item');
      const count = await items.count();

      for (let i = 0; i < count; i++) {
        const item = items.nth(i);
        const title = item.locator('.task-progression__title');
        await expect(title).toHaveCount(1);
      }
    });

    test('items have state modifier classes', async ({ page }) => {
      const items = page.locator('.task-progression__item');
      const count = await items.count();

      const stateClasses = [
        'task-progression__item--complete',
        'task-progression__item--current',
        'task-progression__item--upcoming',
      ];

      let hasStateClass = false;
      for (let i = 0; i < count; i++) {
        const item = items.nth(i);
        const classList = await item.evaluate((el) =>
          Array.from(el.classList)
        );
        if (stateClasses.some((cls) => classList.includes(cls))) {
          hasStateClass = true;
        }
      }
      expect(hasStateClass).toBeTruthy();
    });
  });

  // ============================================================================
  // CATEGORY 4: Visual Regression Tests
  // ============================================================================
  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]').first();
      await expect(progression).toHaveScreenshot('task-progression-baseline.png');
    });

    test('complete state matches baseline', async ({ page }) => {
      const completeItem = page.locator('.task-progression__item--complete').first();
      if (await completeItem.count() > 0) {
        await expect(completeItem).toHaveScreenshot('task-progression-complete.png');
      }
    });

    test('current state matches baseline', async ({ page }) => {
      const currentItem = page.locator('.task-progression__item--current').first();
      if (await currentItem.count() > 0) {
        await expect(currentItem).toHaveScreenshot('task-progression-current.png');
      }
    });
  });
});

import { test, expect } from '@playwright/test';

/**
 * DECISION MATRIX Component Tests
 *
 * Tests for the editorial table component that presents data without
 * spreadsheet aesthetics.
 *
 * Test Categories:
 * 1. Soul Principle Tests - verify editorial nature
 * 2. Anti-Pattern Tests - verify not spreadsheet-like
 * 3. Structure Tests - verify correct HTML
 * 4. Visual Regression Tests - screenshot baselines
 */

test.describe('Decision Matrix Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // CATEGORY 1: Soul Principle Tests
  // ============================================================================
  test.describe('Soul Principles', () => {
    test('has left border accent (4px primary)', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      const borderLeftWidth = await matrix.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      const borderLeftColor = await matrix.evaluate((el) =>
        getComputedStyle(el).borderLeftColor
      );
      expect(parseInt(borderLeftWidth)).toBeGreaterThanOrEqual(4);
      expect(borderLeftColor).toBe('rgb(232, 48, 37)');
    });

    test('table width is auto (content-driven)', async ({ page }) => {
      const table = page.locator('.decision-matrix__table');
      const width = await table.evaluate((el) =>
        getComputedStyle(el).width
      );
      // Should not be 100% or full container width
      // Check that it's auto or specific pixel value less than container
      const widthValue = await table.evaluate((el) => {
        const tableWidth = el.getBoundingClientRect().width;
        const containerWidth = el.parentElement?.getBoundingClientRect().width || 0;
        return tableWidth < containerWidth * 0.95;
      });
      // Content-driven means table doesn't stretch to 100%
      expect(widthValue).toBeTruthy();
    });

    test('cells have bottom borders only', async ({ page }) => {
      const cells = page.locator('.decision-matrix__table td');
      const count = await cells.count();

      if (count > 0) {
        const cell = cells.first();
        const borderTop = await cell.evaluate((el) =>
          getComputedStyle(el).borderTopWidth
        );
        const borderLeft = await cell.evaluate((el) =>
          getComputedStyle(el).borderLeftWidth
        );
        const borderRight = await cell.evaluate((el) =>
          getComputedStyle(el).borderRightWidth
        );
        const borderBottom = await cell.evaluate((el) =>
          getComputedStyle(el).borderBottomWidth
        );

        expect(borderTop).toBe('0px');
        expect(borderLeft).toBe('0px');
        expect(borderRight).toBe('0px');
        // Bottom border should exist
        expect(parseInt(borderBottom)).toBeGreaterThanOrEqual(1);
      }
    });

    test('header uses typography hierarchy (not background)', async ({ page }) => {
      const headerCells = page.locator('.decision-matrix__table th');
      const count = await headerCells.count();

      for (let i = 0; i < count; i++) {
        const th = headerCells.nth(i);
        const bgColor = await th.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Should be transparent (typography creates hierarchy)
        expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
      }
    });

    test('header uses uppercase text', async ({ page }) => {
      const headerCells = page.locator('.decision-matrix__table th');
      const count = await headerCells.count();

      for (let i = 0; i < count; i++) {
        const th = headerCells.nth(i);
        const textTransform = await th.evaluate((el) =>
          getComputedStyle(el).textTransform
        );
        expect(textTransform).toBe('uppercase');
      }
    });

    test('header uses display font family', async ({ page }) => {
      const headerCells = page.locator('.decision-matrix__table th');
      const count = await headerCells.count();

      for (let i = 0; i < count; i++) {
        const th = headerCells.nth(i);
        const fontFamily = await th.evaluate((el) =>
          getComputedStyle(el).fontFamily
        );
        expect(fontFamily).toContain('Instrument Serif');
      }
    });

    test('label uses serif italic', async ({ page }) => {
      const label = page.locator('.decision-matrix__label');
      const fontFamily = await label.evaluate((el) =>
        getComputedStyle(el).fontFamily
      );
      const fontStyle = await label.evaluate((el) =>
        getComputedStyle(el).fontStyle
      );
      expect(fontFamily).toContain('Instrument Serif');
      expect(fontStyle).toBe('italic');
    });

    test('label uses primary red color', async ({ page }) => {
      const label = page.locator('.decision-matrix__label');
      const color = await label.evaluate((el) =>
        getComputedStyle(el).color
      );
      expect(color).toBe('rgb(232, 48, 37)');
    });

    test('has generous padding in cells', async ({ page }) => {
      const cells = page.locator('.decision-matrix__table td');
      const count = await cells.count();

      if (count > 0) {
        const cell = cells.first();
        const padding = await cell.evaluate((el) =>
          getComputedStyle(el).padding
        );
        const paddingValues = padding.split(' ').map((p: string) => parseInt(p));
        // Should have substantial padding
        expect(paddingValues.some((p: number) => p >= 16)).toBeTruthy();
      }
    });

    test('last row has no bottom border', async ({ page }) => {
      const rows = page.locator('.decision-matrix__table tbody tr');
      const count = await rows.count();

      if (count > 0) {
        const lastRow = rows.last();
        const lastCell = lastRow.locator('td').first();
        const borderBottom = await lastCell.evaluate((el) =>
          getComputedStyle(el).borderBottomWidth
        );
        // Last row should have no bottom border
        expect(borderBottom).toBe('0px');
      }
    });
  });

  // ============================================================================
  // CATEGORY 2: Anti-Pattern Tests
  // ============================================================================
  test.describe('Anti-Patterns', () => {
    test('does NOT have gray header background (#f8f9fa)', async ({ page }) => {
      const headerCells = page.locator('.decision-matrix__table th');
      const count = await headerCells.count();

      for (let i = 0; i < count; i++) {
        const th = headerCells.nth(i);
        const bgColor = await th.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(bgColor).not.toBe('rgb(248, 249, 250)');
      }
    });

    test('does NOT have zebra striping', async ({ page }) => {
      const rows = page.locator('.decision-matrix__table tbody tr');
      const count = await rows.count();

      if (count > 1) {
        const firstRowBg = await rows.nth(0).evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        const secondRowBg = await rows.nth(1).evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Both rows should have same background
        expect(firstRowBg).toBe(secondRowBg);
      }
    });

    test('does NOT have color coding (green/red)', async ({ page }) => {
      const cells = page.locator('.decision-matrix__table td');
      const count = await cells.count();

      for (let i = 0; i < count; i++) {
        const cell = cells.nth(i);
        const color = await cell.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).not.toBe('rgb(40, 167, 69)');  // Bootstrap green
        expect(color).not.toBe('rgb(220, 53, 69)');  // Bootstrap red
      }
    });

    test('does NOT have checkmark/X indicators', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      const textContent = await matrix.textContent();
      // Should not contain common check/X patterns (allowing for actual content)
      const icons = page.locator('.decision-matrix [class*="check"], .decision-matrix [class*="icon"], .decision-matrix svg');
      await expect(icons).toHaveCount(0);
    });

    test('does NOT have hover row highlighting', async ({ page }) => {
      const rows = page.locator('.decision-matrix__table tbody tr');
      const count = await rows.count();

      if (count > 0) {
        const row = rows.first();
        const bgColorBefore = await row.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );

        await row.hover();

        const bgColorAfter = await row.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );

        // Background should not change on hover
        expect(bgColorBefore).toBe(bgColorAfter);
      }
    });

    test('does NOT have all-side borders (prison cells)', async ({ page }) => {
      const cells = page.locator('.decision-matrix__table td');
      const count = await cells.count();

      if (count > 0) {
        const cell = cells.first();
        const borderLeft = await cell.evaluate((el) =>
          getComputedStyle(el).borderLeftWidth
        );
        const borderRight = await cell.evaluate((el) =>
          getComputedStyle(el).borderRightWidth
        );
        expect(borderLeft).toBe('0px');
        expect(borderRight).toBe('0px');
      }
    });

    test('does NOT have rounded corners', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      const borderRadius = await matrix.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('0px');
    });

    test('does NOT have box shadow', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      const boxShadow = await matrix.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).toBe('none');
    });
  });

  // ============================================================================
  // CATEGORY 3: Structure Tests
  // ============================================================================
  test.describe('Structure', () => {
    test('has correct data-component attribute', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      await expect(matrix).toHaveCount(1);
    });

    test('has label element', async ({ page }) => {
      const label = page.locator('.decision-matrix__label');
      await expect(label).toHaveCount(1);
    });

    test('has table element', async ({ page }) => {
      const table = page.locator('.decision-matrix__table');
      await expect(table).toHaveCount(1);
    });

    test('table has thead', async ({ page }) => {
      const thead = page.locator('.decision-matrix__table thead');
      await expect(thead).toHaveCount(1);
    });

    test('table has tbody', async ({ page }) => {
      const tbody = page.locator('.decision-matrix__table tbody');
      await expect(tbody).toHaveCount(1);
    });

    test('thead contains th elements', async ({ page }) => {
      const headerCells = page.locator('.decision-matrix__table thead th');
      const count = await headerCells.count();
      expect(count).toBeGreaterThan(0);
    });

    test('tbody contains tr elements', async ({ page }) => {
      const rows = page.locator('.decision-matrix__table tbody tr');
      const count = await rows.count();
      expect(count).toBeGreaterThan(0);
    });

    test('has decision-matrix CSS class', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]');
      const classList = await matrix.evaluate((el) =>
        Array.from(el.classList)
      );
      expect(classList).toContain('decision-matrix');
    });
  });

  // ============================================================================
  // CATEGORY 4: Visual Regression Tests
  // ============================================================================
  test.describe('Visual Regression', () => {
    test('matches baseline screenshot', async ({ page }) => {
      const matrix = page.locator('[data-component="decision-matrix"]').first();
      await expect(matrix).toHaveScreenshot('decision-matrix-baseline.png');
    });

    test('table layout matches baseline', async ({ page }) => {
      const table = page.locator('.decision-matrix__table').first();
      await expect(table).toHaveScreenshot('decision-matrix-table.png');
    });
  });
});

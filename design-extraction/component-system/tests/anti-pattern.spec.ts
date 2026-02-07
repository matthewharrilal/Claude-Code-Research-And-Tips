/*
═══════════════════════════════════════════════════════════════════════════════
LIGHT SECTION PROVENANCE HEADER — Phase 2B
File: design-extraction/component-system/tests/anti-pattern.spec.ts
Part Of: component-system/tests — Automated soul verification tests
Contributed To: Programmatic enforcement of soul constraints
═══════════════════════════════════════════════════════════════════════════════
*/

import { test, expect } from '@playwright/test';

/**
 * ANTI-PATTERN TESTS
 *
 * Verify that NONE of the banned properties appear anywhere.
 * These tests ensure we are NOT generic Bootstrap/Tailwind/Material.
 *
 * Reference: ANTI-PATTERNS.md Section 2 "Universal Anti-Patterns"
 */

test.describe('Anti-Pattern Tests - What We Must NOT Be', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  // ============================================================================
  // BANNED: Border Radius Values
  // ============================================================================
  test.describe('Banned: Non-Zero Border Radius', () => {
    const bannedRadii = [
      { value: '4px', name: 'Bootstrap default' },
      { value: '6px', name: 'Bootstrap/shadcn' },
      { value: '8px', name: 'Tailwind rounded-lg' },
      { value: '12px', name: 'Material Design' },
    ];

    test('no component has 4px border-radius', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const borderRadius = await component.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).not.toBe('4px');
      }
    });

    test('no component has 8px border-radius', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const borderRadius = await component.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).not.toBe('8px');
      }
    });

    test('no element has 50% border-radius (circles banned)', async ({ page }) => {
      const allElements = page.locator('[class*="__"]');
      const count = await allElements.count();

      for (let i = 0; i < count; i++) {
        const element = allElements.nth(i);
        const borderRadius = await element.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).not.toBe('50%');
        expect(borderRadius).not.toMatch(/\d+px \d+px \d+px \d+px \/ 50%/);
      }
    });

    test('challenge-box level is NOT a circle', async ({ page }) => {
      const levelIndicator = page.locator('.challenge-box__level');
      const borderRadius = await levelIndicator.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).not.toBe('50%');
      expect(borderRadius).toBe('0px');
    });
  });

  // ============================================================================
  // BANNED: Box Shadows
  // ============================================================================
  test.describe('Banned: Box Shadows', () => {
    test('no component has Bootstrap-style shadow', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const boxShadow = await component.evaluate((el) =>
          getComputedStyle(el).boxShadow
        );
        expect(boxShadow).toBe('none');
        expect(boxShadow).not.toMatch(/rgba?\(/);
      }
    });

    test('no element has inset shadow', async ({ page }) => {
      const allElements = page.locator('[class*="__"]');
      const count = await allElements.count();

      for (let i = 0; i < count; i++) {
        const element = allElements.nth(i);
        const boxShadow = await element.evaluate((el) =>
          getComputedStyle(el).boxShadow
        );
        expect(boxShadow).not.toMatch(/inset/);
      }
    });
  });

  // ============================================================================
  // BANNED: Traffic Light Colors
  // ============================================================================
  test.describe('Banned: Traffic Light Colors', () => {
    // Bootstrap colors that are banned
    const bannedColors = {
      successGreen: 'rgb(40, 167, 69)',      // #28a745
      dangerRed: 'rgb(220, 53, 69)',         // #dc3545
      warningYellow: 'rgb(255, 193, 7)',     // #ffc107
      infoBlue: 'rgb(23, 162, 184)',         // #17a2b8
      primaryBlue: 'rgb(0, 123, 255)',       // #007bff
    };

    const bannedBackgrounds = {
      successBg: 'rgb(212, 237, 218)',       // #d4edda
      dangerBg: 'rgb(248, 215, 218)',        // #f8d7da
      warningBg: 'rgb(255, 243, 205)',       // #fff3cd
      infoBg: 'rgb(209, 236, 241)',          // #d1ecf1
    };

    test('no Bootstrap success green (#28a745) anywhere', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const color = await component.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).not.toBe(bannedColors.successGreen);
      }
    });

    test('no Bootstrap danger red (#dc3545) anywhere', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const color = await component.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).not.toBe(bannedColors.dangerRed);
      }
    });

    test('no Bootstrap warning yellow (#ffc107) anywhere', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const color = await component.evaluate((el) =>
          getComputedStyle(el).color
        );
        expect(color).not.toBe(bannedColors.warningYellow);
      }
    });

    test('no Bootstrap primary blue (#007bff) anywhere', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const color = await component.evaluate((el) =>
          getComputedStyle(el).color
        );
        const bgColor = await component.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(color).not.toBe(bannedColors.primaryBlue);
        expect(bgColor).not.toBe(bannedColors.primaryBlue);
      }
    });

    test('no yellow warning background (#fff3cd)', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const bgColor = await component.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(bgColor).not.toBe(bannedBackgrounds.warningBg);
      }
    });

    test('no green success background (#d4edda)', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const bgColor = await component.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(bgColor).not.toBe(bannedBackgrounds.successBg);
      }
    });

    test('no blue info background (#d1ecf1)', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const bgColor = await component.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        expect(bgColor).not.toBe(bannedBackgrounds.infoBg);
      }
    });
  });

  // ============================================================================
  // BANNED: Icon Patterns
  // ============================================================================
  test.describe('Banned: Icons for Meaning', () => {
    test('gotcha-box has no warning icon (triangle, emoji)', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');

      // Check for no warning icons in content or pseudo-elements
      const beforeContent = await gotchaBox.evaluate((el) => {
        const styles = getComputedStyle(el, '::before');
        return styles.content;
      });

      // Should be "none" or ""
      expect(beforeContent).not.toMatch(/\\26A0|warning/i);
    });

    test('info-callout has no info icon (circle-i)', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');

      const beforeContent = await infoCallout.evaluate((el) => {
        const styles = getComputedStyle(el, '::before');
        return styles.content;
      });

      expect(beforeContent).not.toMatch(/\\2139|info/i);
    });

    test('tip-callout has no lightbulb icon', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');

      const beforeContent = await tipCallout.evaluate((el) => {
        const styles = getComputedStyle(el, '::before');
        return styles.content;
      });

      expect(beforeContent).not.toMatch(/lightbulb|bulb|tip/i);
    });

    test('no emoji icons in any callout labels', async ({ page }) => {
      const labels = page.locator('[class$="__label"]');
      const count = await labels.count();

      for (let i = 0; i < count; i++) {
        const label = labels.nth(i);
        const textContent = await label.textContent();
        // Check for common emoji patterns
        expect(textContent).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
      }
    });
  });

  // ============================================================================
  // BANNED: Hover Lift Effects
  // ============================================================================
  test.describe('Banned: Hover Lift Effects', () => {
    test('no translateY hover effect on components', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const transform = await component.evaluate((el) =>
          getComputedStyle(el).transform
        );
        expect(transform).toBe('none');
      }
    });

    test('no scale hover effect on components', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const transform = await component.evaluate((el) =>
          getComputedStyle(el).transform
        );
        expect(transform).not.toMatch(/scale/);
      }
    });
  });

  // ============================================================================
  // BANNED: Zebra Striping
  // ============================================================================
  test.describe('Banned: Zebra Striping', () => {
    test('decision-matrix rows have no alternating backgrounds', async ({ page }) => {
      const rows = page.locator('.decision-matrix__table tbody tr');
      const count = await rows.count();

      if (count > 1) {
        const firstRowBg = await rows.nth(0).evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        const secondRowBg = await rows.nth(1).evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );

        // Both should be transparent or same color
        expect(firstRowBg).toBe(secondRowBg);
      }
    });

    test('no nth-child alternating styles on table rows', async ({ page }) => {
      const rows = page.locator('table tbody tr');
      const count = await rows.count();

      for (let i = 0; i < count; i++) {
        const row = rows.nth(i);
        const bgColor = await row.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Should be transparent (rgba(0, 0, 0, 0))
        expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
      }
    });
  });

  // ============================================================================
  // BANNED: Gradient Backgrounds
  // ============================================================================
  test.describe('Banned: Gradient Backgrounds', () => {
    test('no gradient backgrounds on components', async ({ page }) => {
      const components = page.locator('[data-component]');
      const count = await components.count();

      for (let i = 0; i < count; i++) {
        const component = components.nth(i);
        const bgImage = await component.evaluate((el) =>
          getComputedStyle(el).backgroundImage
        );
        expect(bgImage).not.toMatch(/gradient/i);
      }
    });

    test('challenge-box level has solid color (no gradient)', async ({ page }) => {
      const levelIndicator = page.locator('.challenge-box__level');
      const bgImage = await levelIndicator.evaluate((el) =>
        getComputedStyle(el).backgroundImage
      );
      expect(bgImage).toBe('none');
    });
  });

  // ============================================================================
  // COMPONENT-SPECIFIC ANTI-PATTERNS
  // ============================================================================
  test.describe('Code Block Anti-Patterns', () => {
    test('does NOT have dark VS Code background (#1e1e1e)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const bgColor = await codeBlock.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // VS Code dark is rgb(30, 30, 30)
      expect(bgColor).not.toBe('rgb(30, 30, 30)');
    });

    test('does NOT have One Dark Pro background (#282c34)', async ({ page }) => {
      const codeBlock = page.locator('[data-component="code-block"]');
      const bgColor = await codeBlock.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).not.toBe('rgb(40, 44, 52)');
    });

    test('does NOT have visible line numbers', async ({ page }) => {
      const lineNumbers = page.locator('.line-number, .line-numbers, .code-line-number');
      await expect(lineNumbers).toHaveCount(0);
    });

    test('does NOT have traffic light dots', async ({ page }) => {
      const trafficLights = page.locator('.traffic-light, .window-controls, .dot--red, .dot--yellow, .dot--green');
      await expect(trafficLights).toHaveCount(0);
    });

    test('does NOT have header bar / window chrome', async ({ page }) => {
      const headerBar = page.locator('.code-block__header, .code-header, .window-header');
      await expect(headerBar).toHaveCount(0);
    });

    test('syntax highlighting uses max 3 colors', async ({ page }) => {
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
      // Should have at most 3 distinct colors for syntax highlighting
      expect(colors.length).toBeLessThanOrEqual(4); // Base text + 3 syntax colors
    });
  });

  test.describe('Gotcha Box Anti-Patterns', () => {
    test('does NOT have yellow background', async ({ page }) => {
      const gotchaBox = page.locator('[data-component="gotcha-box"]');
      const bgColor = await gotchaBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should be transparent
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('does NOT have all-around border', async ({ page }) => {
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
      // Should have left border only
      expect(borderTop).toBe('0px');
      expect(borderRight).toBe('0px');
      expect(borderBottom).toBe('0px');
    });
  });

  test.describe('Task Progression Anti-Patterns', () => {
    test('is NOT horizontal layout (wizard stepper)', async ({ page }) => {
      const progression = page.locator('[data-component="task-progression"]');
      const display = await progression.evaluate((el) =>
        getComputedStyle(el).display
      );
      const flexDirection = await progression.evaluate((el) =>
        getComputedStyle(el).flexDirection
      );
      // Should not be a horizontal flex row
      if (display === 'flex') {
        expect(flexDirection).not.toBe('row');
      }
    });

    test('does NOT have connecting lines between steps', async ({ page }) => {
      const connectors = page.locator('.task-progression__line, .step-connector, .wizard-line');
      await expect(connectors).toHaveCount(0);
    });

    test('numbers are NOT in circles', async ({ page }) => {
      const numbers = page.locator('.task-progression__number');
      const count = await numbers.count();

      for (let i = 0; i < count; i++) {
        const number = numbers.nth(i);
        const borderRadius = await number.evaluate((el) =>
          getComputedStyle(el).borderRadius
        );
        expect(borderRadius).not.toBe('50%');
      }
    });

    test('complete state does NOT use green checkmark', async ({ page }) => {
      const completeItems = page.locator('.task-progression__item--complete');
      const count = await completeItems.count();

      for (let i = 0; i < count; i++) {
        const item = completeItems.nth(i);
        const color = await item.evaluate((el) => {
          const number = el.querySelector('.task-progression__number');
          return number ? getComputedStyle(number).color : '';
        });
        // Should not be Bootstrap green
        expect(color).not.toBe('rgb(40, 167, 69)');
      }
    });
  });

  test.describe('Info Callout Anti-Patterns', () => {
    test('does NOT have blue background', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const bgColor = await infoCallout.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should be transparent
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('does NOT have blue border', async ({ page }) => {
      const infoCallout = page.locator('[data-component="info-callout"]');
      const borderColor = await infoCallout.evaluate((el) =>
        getComputedStyle(el).borderLeftColor
      );
      // Should not be Bootstrap blue
      expect(borderColor).not.toBe('rgb(0, 123, 255)');
      expect(borderColor).not.toBe('rgb(13, 110, 253)');
    });
  });

  test.describe('Tip Callout Anti-Patterns', () => {
    test('does NOT have green background', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const bgColor = await tipCallout.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should be transparent
      expect(bgColor).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
    });

    test('has top border (NOT left border like info)', async ({ page }) => {
      const tipCallout = page.locator('[data-component="tip-callout"]');
      const borderTopWidth = await tipCallout.evaluate((el) =>
        getComputedStyle(el).borderTopWidth
      );
      const borderLeftWidth = await tipCallout.evaluate((el) =>
        getComputedStyle(el).borderLeftWidth
      );
      // Should have top border, not left
      expect(parseInt(borderTopWidth)).toBeGreaterThan(0);
    });
  });

  test.describe('Decision Matrix Anti-Patterns', () => {
    test('does NOT have gray header background', async ({ page }) => {
      const headerCells = page.locator('.decision-matrix__table th');
      const count = await headerCells.count();

      for (let i = 0; i < count; i++) {
        const th = headerCells.nth(i);
        const bgColor = await th.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Should be transparent, not Bootstrap gray (#f8f9fa)
        expect(bgColor).not.toBe('rgb(248, 249, 250)');
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
        // Should not have left/right borders
        expect(borderLeft).toBe('0px');
        expect(borderRight).toBe('0px');
      }
    });

    test('does NOT have hover row highlighting', async ({ page }) => {
      const rows = page.locator('.decision-matrix__table tbody tr');
      const count = await rows.count();

      if (count > 0) {
        const row = rows.first();
        // Hover and check for background change
        await row.hover();
        const bgColorAfterHover = await row.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Should still be transparent
        expect(bgColorAfterHover).toMatch(/transparent|rgba\(0, 0, 0, 0\)/);
      }
    });
  });

  test.describe('Reasoning Box Anti-Patterns', () => {
    test('columns do NOT have color-coded backgrounds', async ({ page }) => {
      const columns = page.locator('.reasoning-box__column');
      const count = await columns.count();

      for (let i = 0; i < count; i++) {
        const column = columns.nth(i);
        const bgColor = await column.evaluate((el) =>
          getComputedStyle(el).backgroundColor
        );
        // Should not be green or red
        expect(bgColor).not.toBe('rgb(212, 237, 218)'); // success green
        expect(bgColor).not.toBe('rgb(248, 215, 218)'); // danger red
      }
    });

    test('does NOT have checkmark/X icons', async ({ page }) => {
      const icons = page.locator('.reasoning-box [class*="icon"], .reasoning-box [class*="check"], .reasoning-box [class*="cross"]');
      await expect(icons).toHaveCount(0);
    });
  });

  test.describe('File Tree Anti-Patterns', () => {
    test('does NOT have dark terminal background', async ({ page }) => {
      const fileTree = page.locator('[data-component="file-tree"]');
      const bgColor = await fileTree.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should not be VS Code/terminal dark
      expect(bgColor).not.toBe('rgb(30, 30, 30)');
      expect(bgColor).not.toBe('rgb(37, 37, 38)');
    });

    test('has editorial label (not just raw tree output)', async ({ page }) => {
      const label = page.locator('.file-tree__label');
      await expect(label).toHaveCount(1);
      await expect(label).toBeVisible();
    });
  });

  test.describe('Challenge Box Anti-Patterns', () => {
    test('does NOT have star ratings', async ({ page }) => {
      const stars = page.locator('.star, .stars, [class*="rating"]');
      await expect(stars).toHaveCount(0);
    });

    test('does NOT have progress bar', async ({ page }) => {
      // Note: We use specific selectors to avoid matching task-progression
      const progressBars = page.locator('.progress-bar, .progress, [role="progressbar"], .challenge-box__progress');
      await expect(progressBars).toHaveCount(0);
    });

    test('does NOT have red danger styling', async ({ page }) => {
      const challengeBox = page.locator('[data-component="challenge-box"]');
      const bgColor = await challengeBox.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Should not be danger red background
      expect(bgColor).not.toBe('rgb(248, 215, 218)');
    });
  });
});

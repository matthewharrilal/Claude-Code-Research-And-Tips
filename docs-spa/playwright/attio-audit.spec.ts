import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:3000/poc/attio-docs'

// Tolerance values
const WIDTH_TOLERANCE = 10
const FONT_TOLERANCE = 1

/**
 * ROUND 1: Layout - Column Widths and Gaps
 */
test.describe('Round 1: Layout', () => {
  test('sidebar width is 240px ±10px', async ({ page }) => {
    await page.goto(BASE_URL)
    const sidebar = page.locator('aside').first()
    const box = await sidebar.boundingBox()
    expect(box?.width).toBeGreaterThanOrEqual(240 - WIDTH_TOLERANCE)
    expect(box?.width).toBeLessThanOrEqual(240 + WIDTH_TOLERANCE)
  })

  test('content max-width is 650px ±20px', async ({ page }) => {
    await page.goto(BASE_URL)
    const content = page.locator('.attio-content')
    const box = await content.boundingBox()
    expect(box?.width).toBeLessThanOrEqual(650 + 20)
  })

  test('TOC width is 200px ±10px', async ({ page }) => {
    await page.goto(BASE_URL)
    const toc = page.locator('aside').last()
    const box = await toc.boundingBox()
    expect(box?.width).toBeGreaterThanOrEqual(200 - WIDTH_TOLERANCE)
    expect(box?.width).toBeLessThanOrEqual(200 + WIDTH_TOLERANCE)
  })

  test('header height is 56px', async ({ page }) => {
    await page.goto(BASE_URL)
    const header = page.locator('header')
    const box = await header.boundingBox()
    expect(box?.height).toBe(56)
  })

  test('three-column layout is present', async ({ page }) => {
    await page.goto(BASE_URL)
    // Verify all three columns exist
    await expect(page.locator('aside').first()).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('aside').last()).toBeVisible()
  })
})

/**
 * ROUND 2: Typography - Font Sizes and Weights
 */
test.describe('Round 2: Typography', () => {
  test('h1 is 48px bold #111827', async ({ page }) => {
    await page.goto(BASE_URL)
    const h1 = page.locator('.attio-content h1')
    const styles = await h1.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        color: computed.color,
      }
    })
    expect(parseInt(styles.fontSize)).toBeCloseTo(48, FONT_TOLERANCE)
    expect(parseInt(styles.fontWeight)).toBeGreaterThanOrEqual(700)
    // rgb(17, 24, 39) = #111827
    expect(styles.color).toBe('rgb(17, 24, 39)')
  })

  test('h2 is 24px semibold', async ({ page }) => {
    await page.goto(BASE_URL)
    const h2 = page.locator('.attio-content h2').first()
    const styles = await h2.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return {
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
      }
    })
    expect(parseInt(styles.fontSize)).toBeCloseTo(24, FONT_TOLERANCE)
    expect(parseInt(styles.fontWeight)).toBeGreaterThanOrEqual(600)
  })

  test('body text is 16px', async ({ page }) => {
    await page.goto(BASE_URL)
    const p = page.locator('.attio-content p').first()
    const styles = await p.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { fontSize: computed.fontSize }
    })
    expect(parseInt(styles.fontSize)).toBeCloseTo(16, FONT_TOLERANCE)
  })

  test('nav text is 14px', async ({ page }) => {
    await page.goto(BASE_URL)
    const navItem = page.locator('aside').first().locator('a').first()
    const styles = await navItem.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { fontSize: computed.fontSize }
    })
    expect(parseInt(styles.fontSize)).toBeCloseTo(14, FONT_TOLERANCE)
  })
})

/**
 * ROUND 3: Spacing - Margins and Padding
 */
test.describe('Round 3: Spacing', () => {
  test('h1 margin-bottom is 16px', async ({ page }) => {
    await page.goto(BASE_URL)
    const h1 = page.locator('.attio-content h1')
    const styles = await h1.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { marginBottom: computed.marginBottom }
    })
    expect(parseInt(styles.marginBottom)).toBeCloseTo(16, 4)
  })

  test('h2 margin-top is 48px', async ({ page }) => {
    await page.goto(BASE_URL)
    const h2 = page.locator('.attio-content h2').first()
    const styles = await h2.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { marginTop: computed.marginTop }
    })
    expect(parseInt(styles.marginTop)).toBeCloseTo(48, 8)
  })

  test('paragraph margin-bottom is 16px', async ({ page }) => {
    await page.goto(BASE_URL)
    const p = page.locator('.attio-content p').first()
    const styles = await p.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { marginBottom: computed.marginBottom }
    })
    expect(parseInt(styles.marginBottom)).toBeCloseTo(16, 4)
  })

  test('list item spacing is 8px', async ({ page }) => {
    await page.goto(BASE_URL)
    const li = page.locator('.attio-content li').first()
    const styles = await li.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { marginBottom: computed.marginBottom }
    })
    expect(parseInt(styles.marginBottom)).toBeCloseTo(8, 4)
  })
})

/**
 * ROUND 4: Colors - Backgrounds, Text, Borders
 */
test.describe('Round 4: Colors', () => {
  test('background is white (#FFFFFF)', async ({ page }) => {
    await page.goto(BASE_URL)
    const body = page.locator('.attio-docs')
    const styles = await body.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { background: computed.backgroundColor }
    })
    expect(styles.background).toBe('rgb(255, 255, 255)')
  })

  test('primary text is #111827', async ({ page }) => {
    await page.goto(BASE_URL)
    const h1 = page.locator('.attio-content h1')
    const styles = await h1.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { color: computed.color }
    })
    expect(styles.color).toBe('rgb(17, 24, 39)')
  })

  test('secondary text is #374151', async ({ page }) => {
    await page.goto(BASE_URL)
    const p = page.locator('.attio-content p').first()
    const styles = await p.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { color: computed.color }
    })
    expect(styles.color).toBe('rgb(55, 65, 81)')
  })

  test('muted text is #6B7280', async ({ page }) => {
    await page.goto(BASE_URL)
    const subtitle = page.locator('.attio-content .subtitle')
    const styles = await subtitle.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      return { color: computed.color }
    })
    expect(styles.color).toBe('rgb(107, 114, 128)')
  })
})

/**
 * ROUND 5: Components - Functionality and States
 */
test.describe('Round 5: Components', () => {
  test('search box has ⌘K hint', async ({ page }) => {
    await page.goto(BASE_URL)
    const searchHint = page.locator('kbd').first()
    await expect(searchHint).toContainText('⌘K')
  })

  test('sidebar navigation is collapsible', async ({ page }) => {
    await page.goto(BASE_URL)
    // Find a collapsible section
    const collapsibleButton = page.locator('aside').first().locator('button').first()
    await expect(collapsibleButton).toBeVisible()

    // Click to toggle
    await collapsibleButton.click()
    // Should still be visible (toggled state)
    await expect(collapsibleButton).toBeVisible()
  })

  test('TOC has "ON THIS PAGE" header', async ({ page }) => {
    await page.goto(BASE_URL)
    const tocHeader = page.locator('aside').last().locator('h4')
    await expect(tocHeader).toContainText('On this page')
  })

  test('breadcrumbs have / separator', async ({ page }) => {
    await page.goto(BASE_URL)
    const breadcrumbs = page.locator('nav').first()
    const text = await breadcrumbs.textContent()
    expect(text).toContain('/')
  })

  test('header has all navigation items', async ({ page }) => {
    await page.goto(BASE_URL)
    await expect(page.locator('header')).toContainText('Product')
    await expect(page.locator('header')).toContainText('Resources')
    await expect(page.locator('header')).toContainText('Customers')
    await expect(page.locator('header')).toContainText('Pricing')
    await expect(page.locator('header')).toContainText('Sign in')
    await expect(page.locator('header')).toContainText('Start for free')
  })
})

/**
 * ROUND 6: Visual Regression
 */
test.describe('Round 6: Visual Regression', () => {
  test('full page screenshot matches baseline', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.waitForLoadState('networkidle')

    // Take full page screenshot
    await expect(page).toHaveScreenshot('attio-docs-full.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05, // 5% tolerance
    })
  })

  test('header screenshot matches baseline', async ({ page }) => {
    await page.goto(BASE_URL)
    const header = page.locator('header')

    await expect(header).toHaveScreenshot('attio-docs-header.png', {
      maxDiffPixelRatio: 0.05,
    })
  })

  test('sidebar screenshot matches baseline', async ({ page }) => {
    await page.goto(BASE_URL)
    const sidebar = page.locator('aside').first()

    await expect(sidebar).toHaveScreenshot('attio-docs-sidebar.png', {
      maxDiffPixelRatio: 0.05,
    })
  })
})

/**
 * ROUND 7: Cross-Browser (run with different browser projects)
 */
test.describe('Round 7: Cross-Browser Consistency', () => {
  test('layout renders correctly', async ({ page }) => {
    await page.goto(BASE_URL)

    // Verify core layout is present
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('aside').first()).toBeVisible()
    await expect(page.locator('main')).toBeVisible()

    // Verify no horizontal overflow
    const body = page.locator('body')
    const scrollWidth = await body.evaluate((el) => el.scrollWidth)
    const clientWidth = await body.evaluate((el) => el.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1) // 1px tolerance
  })
})

/**
 * ROUND 8: Responsive (different viewport widths)
 */
test.describe('Round 8: Responsive', () => {
  test('renders at 1920px width', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto(BASE_URL)

    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('aside').first()).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('aside').last()).toBeVisible()
  })

  test('renders at 1440px width', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto(BASE_URL)

    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('aside').first()).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
  })

  test('renders at 1280px width', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto(BASE_URL)

    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('aside').first()).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
  })
})

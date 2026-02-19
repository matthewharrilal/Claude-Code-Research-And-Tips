/**
 * SPATIAL CONFIDENCE GATE RUNNER
 * ==============================
 *
 * Programmatic spatial enforcement for the flagship design system experiment.
 * Eliminates human measurement error that produced false positives in the
 * ceiling experiment (e.g., container measured at 2160px instead of 960px).
 *
 * 8 tests, all binary PASS/FAIL with measured values:
 *   SC-01 (K1): Container width            940-1100px
 *   SC-02 (K2): Content-to-void ratio      >= 70%
 *   SC-03 (K3): Max contiguous void         No 2+ consecutive low-content viewports
 *   SC-04:      Squint test (computational) >= 3 distinct content regions
 *   SC-05 (K4): Header proportion           <= 288px
 *   SC-06:      Characters per line (CPL)   45-80
 *   SC-07 (K8): Footer presence             Footer exists with meaningful text
 *   SC-08 (K5): Designed moment past 50%    >= 1 high-complexity section in bottom half
 *
 * Usage (Playwright):
 *   const results = await runSpatialGate(page);
 *   // results.passed === true means all 8 checks passed
 *
 * Prerequisites:
 *   - Viewport is set to 1440x900 before calling
 *   - Page is fully loaded (networkidle or equivalent)
 *   - Fonts have loaded (handled internally via document.fonts.ready)
 *
 * @param {import('playwright').Page} page - Playwright page object
 * @returns {Promise<{passed: boolean, results: Array}>}
 */
async function runSpatialGate(page) {
  // ----------------------------------------------------------------
  // SETUP: Ensure viewport is 1440x900 and wait for fonts
  // ----------------------------------------------------------------
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForLoadState('domcontentloaded');

  // Wait for fonts to load -- critical for accurate CPL and height measurements
  await page.evaluate(() => document.fonts.ready);

  // Small additional settle time for layout reflow after font load
  await page.waitForTimeout(500);

  // ----------------------------------------------------------------
  // RUN ALL 8 CHECKS INSIDE page.evaluate
  // ----------------------------------------------------------------
  const results = await page.evaluate(() => {
    const output = [];

    // --------------------------------------------------
    // SHARED HELPERS
    // --------------------------------------------------

    /**
     * Tags considered "content-bearing" for spatial analysis.
     * These elements carry reader-consumable information.
     */
    const CONTENT_TAGS = new Set([
      'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'li', 'td', 'th', 'dt', 'dd',
      'pre', 'code', 'blockquote', 'figcaption',
      'img', 'svg', 'canvas', 'video', 'audio', 'iframe', 'figure'
    ]);

    /**
     * Check whether an element is "content" at a sample point.
     * Content = any element with text, images, tables, code.
     * Void = only body/html background showing.
     */
    function isContentElement(el) {
      const tag = el.tagName.toLowerCase();
      if (!CONTENT_TAGS.has(tag)) return false;
      // Media elements are always content regardless of text
      if (['img', 'svg', 'canvas', 'video', 'audio', 'iframe'].includes(tag)) return true;
      // Text-bearing elements must have actual text
      return el.textContent.trim().length > 0;
    }

    /**
     * Find the main content container using a cascade of selectors.
     * Returns the first match, or falls back to the largest block child of body.
     */
    function findContainer() {
      const selectors = [
        '.page-container',
        '.container',
        '[class*="container"]',
        'main',
        '[role="main"]',
        'article'
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el) return el;
      }
      // Fallback: find the largest block-level child of body
      const children = Array.from(document.body.children);
      let largest = null;
      let largestArea = 0;
      for (const child of children) {
        const rect = child.getBoundingClientRect();
        const area = rect.width * rect.height;
        if (area > largestArea) {
          largestArea = area;
          largest = child;
        }
      }
      return largest;
    }

    /**
     * Sample a grid of points within the viewport at a given scroll position.
     * Returns the fraction of grid points that hit content elements.
     *
     * @param {number} scrollY - The scroll position (top of viewport)
     * @param {number} containerLeft - Left edge of the content container
     * @param {number} containerWidth - Width of the content container
     * @param {number} gridCols - Number of horizontal sample points
     * @param {number} gridRows - Number of vertical sample points
     * @returns {number} Fraction of sample points with content (0-1)
     */
    function sampleContentGrid(scrollY, containerLeft, containerWidth, gridCols, gridRows) {
      const viewportHeight = window.innerHeight;
      let contentHits = 0;
      let totalPoints = 0;

      for (let col = 0; col < gridCols; col++) {
        // Sample across the container width, not the full viewport.
        // This avoids penalizing the page for the margins flanking a 960px container.
        const x = containerLeft + (containerWidth * (col + 0.5)) / gridCols;

        for (let row = 0; row < gridRows; row++) {
          const y = (viewportHeight * (row + 0.5)) / gridRows;
          totalPoints++;

          try {
            const elements = document.elementsFromPoint(x, y);
            if (elements.some(isContentElement)) {
              contentHits++;
            }
          } catch (_) {
            // elementsFromPoint can throw if coordinates are outside viewport;
            // count as void
          }
        }
      }

      return totalPoints > 0 ? contentHits / totalPoints : 0;
    }


    // ==================================================================
    // SC-01 (K1): CONTAINER WIDTH
    // ==================================================================
    // Find the main content container and measure its computed width.
    // PASS if 940-1100px. This is the single most critical spatial check --
    // the ceiling experiment's container was 960px in CSS but was falsely
    // measured at 2160px because the VIEWPORT was measured, not the container.
    // ==================================================================
    (function checkSC01() {
      const container = findContainer();
      if (!container) {
        output.push({
          id: 'SC-01',
          name: 'Container Width',
          pass: false,
          measured: null,
          threshold: '940-1100px',
          detail: 'FAIL: No content container found. Searched for .page-container, .container, [class*="container"], main, [role="main"], article, and largest body child. Page lacks a content wrapper.',
          action: 'Add a content wrapper with max-width: 960px (or up to 1100px); margin: 0 auto.'
        });
        return;
      }

      const rect = container.getBoundingClientRect();
      const width = Math.round(rect.width);
      const computedMaxWidth = window.getComputedStyle(container).maxWidth;
      const pass = width >= 940 && width <= 1100;

      output.push({
        id: 'SC-01',
        name: 'Container Width',
        pass,
        measured: width,
        threshold: '940-1100px',
        detail: pass
          ? `PASS: Container is ${width}px wide (max-width: ${computedMaxWidth}). Selector: ${container.tagName.toLowerCase()}${container.className ? '.' + container.className.split(' ').join('.') : ''}`
          : `FAIL: Container is ${width}px wide (max-width: ${computedMaxWidth}). ${width > 960 ? 'Container is too wide.' : 'Container is too narrow -- check horizontal padding.'}`,
        action: pass ? 'None.' : (width > 960 ? 'Set max-width: 960px on the content container.' : 'Reduce horizontal padding or increase max-width.')
      });
    })();


    // ==================================================================
    // SC-02 (K2): CONTENT-TO-VOID RATIO
    // ==================================================================
    // Scroll through the page in viewport-height increments (900px at 1440x900).
    // At each position, sample a 10x10 grid of points across the content
    // container to determine what percentage has content vs bare background.
    // Calculate the total content percentage across all increments.
    // PASS if >= 70%.
    //
    // Why grid sampling? A single vertical line (center of container) misses
    // content that is offset horizontally (e.g., a sidebar callout, a table
    // that only occupies the left half). The 10x10 grid captures horizontal
    // content distribution within each viewport.
    // ==================================================================
    const sc02Data = (function checkSC02() {
      const container = findContainer();
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const gridCols = 10;
      const gridRows = 10;

      // Determine container bounds for grid sampling
      let containerLeft = 0;
      let containerWidth = window.innerWidth;
      if (container) {
        const rect = container.getBoundingClientRect();
        containerLeft = rect.left;
        containerWidth = rect.width;
      }

      const incrementCount = Math.max(1, Math.ceil(totalHeight / viewportHeight));
      let totalContentFraction = 0;
      const perIncrement = []; // Store per-increment data for SC-03

      for (let i = 0; i < incrementCount; i++) {
        const scrollPos = i * viewportHeight;
        window.scrollTo(0, scrollPos);

        // Re-measure container position after scroll (it may have changed
        // if the container has position:sticky or similar)
        if (container) {
          const rect = container.getBoundingClientRect();
          containerLeft = rect.left;
          containerWidth = rect.width;
        }

        const fraction = sampleContentGrid(scrollPos, containerLeft, containerWidth, gridCols, gridRows);
        totalContentFraction += fraction;
        perIncrement.push({
          index: i,
          scrollY: scrollPos,
          contentFraction: fraction
        });
      }

      window.scrollTo(0, 0);

      const avgContentPercent = incrementCount > 0
        ? (totalContentFraction / incrementCount) * 100
        : 0;
      const pass = avgContentPercent >= 70;

      output.push({
        id: 'SC-02',
        name: 'Content-to-Void Ratio',
        pass,
        measured: parseFloat(avgContentPercent.toFixed(1)),
        threshold: '>= 70%',
        detail: pass
          ? `PASS: ${avgContentPercent.toFixed(1)}% average content coverage across ${incrementCount} viewport increments.`
          : `FAIL: ${avgContentPercent.toFixed(1)}% average content coverage (need >= 70%). ${
              avgContentPercent >= 55 ? 'Moderate void -- reduce zone padding and transitions by 30-50%.'
              : avgContentPercent >= 40 ? 'Significant void -- zone merging or content addition required.'
              : 'Catastrophic void (ceiling-experiment level) -- structural redesign required.'
            }`,
        action: pass ? 'None.' : 'Increase content density or reduce structural spacing.',
        incrementCount,
        perIncrement: perIncrement.map(p => ({
          viewport: p.index,
          scrollY: p.scrollY,
          contentPercent: parseFloat((p.contentFraction * 100).toFixed(1))
        }))
      });

      return { perIncrement, pass, avgContentPercent };
    })();


    // ==================================================================
    // SC-03 (K3): MAX CONTIGUOUS VOID
    // ==================================================================
    // Using the per-viewport-increment data from SC-02, check for 2 or more
    // CONSECUTIVE viewport positions where content coverage drops below 30%.
    // This catches the ceiling experiment's dominant failure: vast stretches
    // of blank cream background visible while scrolling.
    //
    // PASS if no 2+ consecutive positions fall below 30% content.
    // ==================================================================
    (function checkSC03() {
      const increments = sc02Data.perIncrement;
      const threshold = 0.30; // 30% content fraction
      let maxConsecutiveLow = 0;
      let currentConsecutiveLow = 0;
      let worstRunStart = -1;
      let currentRunStart = -1;

      for (let i = 0; i < increments.length; i++) {
        if (increments[i].contentFraction < threshold) {
          if (currentConsecutiveLow === 0) {
            currentRunStart = i;
          }
          currentConsecutiveLow++;
          if (currentConsecutiveLow > maxConsecutiveLow) {
            maxConsecutiveLow = currentConsecutiveLow;
            worstRunStart = currentRunStart;
          }
        } else {
          currentConsecutiveLow = 0;
        }
      }

      const pass = maxConsecutiveLow < 2;
      const viewportHeight = window.innerHeight;

      output.push({
        id: 'SC-03',
        name: 'Max Contiguous Void',
        pass,
        measured: maxConsecutiveLow,
        threshold: '< 2 consecutive viewport increments below 30% content',
        detail: pass
          ? `PASS: Longest run of low-content viewports is ${maxConsecutiveLow} (need < 2). No contiguous void crisis.`
          : `FAIL: ${maxConsecutiveLow} consecutive viewport increments below 30% content, starting at viewport index ${worstRunStart} (scroll position ~${worstRunStart * viewportHeight}px). This is a ${maxConsecutiveLow * viewportHeight}px stretch of predominantly empty space.`,
        action: pass ? 'None.' : `Add content or reduce spacing in the region around scroll position ${worstRunStart * viewportHeight}px through ${(worstRunStart + maxConsecutiveLow) * viewportHeight}px.`,
        worstRunStart: worstRunStart >= 0 ? worstRunStart : null,
        worstRunLength: maxConsecutiveLow,
        lowContentViewports: increments
          .filter(p => p.contentFraction < threshold)
          .map(p => ({
            viewport: p.index,
            scrollY: p.scrollY,
            contentPercent: parseFloat((p.contentFraction * 100).toFixed(1))
          }))
      });
    })();


    // ==================================================================
    // SC-04: SQUINT TEST (COMPUTATIONAL)
    // ==================================================================
    // At 25% conceptual zoom (simulated by dividing the page into large
    // macro-regions), check that at least 3 visually distinct content
    // regions are identifiable. A "region" is a contiguous vertical span
    // where element density or background color is significantly different
    // from its neighbors.
    //
    // Approach: Divide the page into bands of ~360px (simulating what you'd
    // see at 25% zoom of a 1440px viewport). For each band, compute:
    //   1. Element density (number of content elements per band)
    //   2. Dominant background color
    // A "region boundary" occurs when either:
    //   - Element density changes by > 50% between adjacent bands
    //   - Background color changes significantly (deltaE > 30)
    //
    // PASS if >= 3 distinct regions detected.
    // ==================================================================
    (function checkSC04() {
      const totalHeight = document.documentElement.scrollHeight;
      const bandHeight = 360; // ~25% of 1440 viewport height
      const bandCount = Math.max(1, Math.ceil(totalHeight / bandHeight));

      // Collect per-band metrics
      const bands = [];

      for (let i = 0; i < bandCount; i++) {
        const bandTop = i * bandHeight;
        const bandBottom = Math.min(bandTop + bandHeight, totalHeight);

        // Count content elements whose top falls within this band
        let density = 0;
        const allElements = document.querySelectorAll(
          'p, h1, h2, h3, h4, h5, h6, li, td, th, pre, code, blockquote, img, svg, figure, table, ul, ol'
        );
        for (const el of allElements) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + window.scrollY;
          if (elTop >= bandTop && elTop < bandBottom) {
            density++;
          }
        }

        // Sample background color at the center of the band
        const sampleY = Math.min(bandTop + bandHeight / 2, totalHeight - 1);
        window.scrollTo(0, Math.max(0, sampleY - window.innerHeight / 2));
        const localY = sampleY - Math.max(0, sampleY - window.innerHeight / 2);
        const centerX = window.innerWidth / 2;

        let bgColor = { r: 255, g: 255, b: 255 }; // default white
        try {
          const elements = document.elementsFromPoint(centerX, localY);
          // Find the first non-transparent background
          for (const el of elements) {
            const bg = window.getComputedStyle(el).backgroundColor;
            if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
              const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
              if (match) {
                bgColor = { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
                break;
              }
            }
          }
        } catch (_) {}

        bands.push({ index: i, top: bandTop, density, bgColor });
      }

      window.scrollTo(0, 0);

      // Detect region boundaries
      let regionCount = 1; // Start with 1 (first region always exists)
      const boundaries = [];

      for (let i = 1; i < bands.length; i++) {
        const prev = bands[i - 1];
        const curr = bands[i];

        // Density change check: > 50% relative change
        const maxDensity = Math.max(prev.density, curr.density, 1);
        const minDensity = Math.min(prev.density, curr.density);
        const densityChange = (maxDensity - minDensity) / maxDensity;

        // Background color change check: simple RGB distance
        const dr = curr.bgColor.r - prev.bgColor.r;
        const dg = curr.bgColor.g - prev.bgColor.g;
        const db = curr.bgColor.b - prev.bgColor.b;
        const colorDistance = Math.sqrt(dr * dr + dg * dg + db * db);

        const isDensityBoundary = densityChange > 0.5 && maxDensity >= 3;
        const isColorBoundary = colorDistance > 30;

        if (isDensityBoundary || isColorBoundary) {
          regionCount++;
          boundaries.push({
            betweenBands: `${i - 1}-${i}`,
            atPx: curr.top,
            densityChange: parseFloat(densityChange.toFixed(2)),
            colorDistance: parseFloat(colorDistance.toFixed(1)),
            reason: isDensityBoundary && isColorBoundary ? 'density + color'
              : isDensityBoundary ? 'density' : 'color'
          });
        }
      }

      const pass = regionCount >= 3;

      output.push({
        id: 'SC-04',
        name: 'Squint Test (Computational)',
        pass,
        measured: regionCount,
        threshold: '>= 3 distinct content regions',
        detail: pass
          ? `PASS: ${regionCount} distinct content regions detected across ${bandCount} bands. Page has visual variety at macro scale.`
          : `FAIL: Only ${regionCount} distinct region(s) detected (need >= 3). The page appears monotonous at macro scale -- sections lack visual differentiation in density or background color.`,
        action: pass ? 'None.' : 'Add visual variety: vary background colors between sections, alternate content density (dense text vs sparse code/diagrams), or add section dividers with distinct styling.',
        boundaries,
        bandDetails: bands.map(b => ({
          band: b.index,
          topPx: b.top,
          elementDensity: b.density,
          bgColor: `rgb(${b.bgColor.r}, ${b.bgColor.g}, ${b.bgColor.b})`
        }))
      });
    })();


    // ==================================================================
    // SC-05 (K4): HEADER PROPORTION
    // ==================================================================
    // Measure the header element's total height including padding.
    // PASS if <= 288px (20% of 1440px viewport height).
    //
    // The ceiling experiment's header occupied ~25%+ of the viewport,
    // described as "too heavy" by both perceptual auditors. A fix reduced
    // padding from 128px to 72px. This check enforces the upper bound.
    // ==================================================================
    (function checkSC05() {
      window.scrollTo(0, 0);

      const header = document.querySelector('header')
        || document.querySelector('[role="banner"]')
        || document.querySelector('.header');

      if (!header) {
        output.push({
          id: 'SC-05',
          name: 'Header Proportion',
          pass: false,
          measured: null,
          threshold: '<= 288px',
          detail: 'FAIL: No header element found. Searched for <header>, [role="banner"], .header.',
          action: 'Add a <header> element or verify the page has appropriate landmark structure.'
        });
        return;
      }

      const rect = header.getBoundingClientRect();
      const height = Math.round(rect.height);
      const pass = height <= 288;

      output.push({
        id: 'SC-05',
        name: 'Header Proportion',
        pass,
        measured: height,
        threshold: '<= 288px (20% of 1440px viewport)',
        detail: pass
          ? `PASS: Header is ${height}px tall (limit: 288px). Uses ${((height / 900) * 100).toFixed(1)}% of the 900px viewport.`
          : `FAIL: Header is ${height}px tall, exceeding the 288px limit by ${height - 288}px. This occupies ${((height / 900) * 100).toFixed(1)}% of the viewport.`,
        action: pass ? 'None.' : `Reduce header padding by approximately ${height - 288}px. The ceiling experiment fixed this by reducing header padding from 128px to 72px.`
      });
    })();


    // ==================================================================
    // SC-06: CHARACTERS PER LINE (CPL)
    // ==================================================================
    // Find body text paragraphs and measure average characters per line
    // by comparing element width to font metrics.
    //
    // Method: For each paragraph, measure:
    //   1. The element's rendered width
    //   2. The computed font-size
    //   3. Approximate character width (0.5 * font-size for proportional fonts)
    //   4. CPL = element width / character width
    //
    // For more accuracy, we also check actual text content: if a paragraph
    // has multiple lines, we can estimate CPL from textContent.length / lineCount,
    // where lineCount = element height / line-height.
    //
    // PASS if average CPL is 45-80.
    // ==================================================================
    (function checkSC06() {
      window.scrollTo(0, 0);

      const paragraphs = document.querySelectorAll('p');

      if (paragraphs.length === 0) {
        output.push({
          id: 'SC-06',
          name: 'Characters Per Line (CPL)',
          pass: false,
          measured: null,
          threshold: '45-80 CPL',
          detail: 'FAIL: No <p> elements found on the page. Cannot measure CPL.',
          action: 'Add body text paragraphs to the page.'
        });
        return;
      }

      const cplValues = [];

      for (const p of paragraphs) {
        const text = p.textContent.trim();
        // Skip very short paragraphs (likely headings or labels misclassed as <p>)
        if (text.length < 40) continue;

        const rect = p.getBoundingClientRect();
        const style = window.getComputedStyle(p);
        const fontSize = parseFloat(style.fontSize);
        const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.5;

        // Estimate line count from element height
        const lineCount = Math.max(1, Math.round(rect.height / lineHeight));

        if (lineCount >= 2) {
          // Multi-line paragraph: CPL from text length / line count
          // This is the most accurate method because it uses actual character count
          const estimatedCPL = text.length / lineCount;
          cplValues.push(estimatedCPL);
        } else {
          // Single-line paragraph: CPL from width / average char width
          // Average character width for proportional fonts is roughly 0.45-0.55 of font-size
          // Use 0.48 as a reasonable middle ground for body text in common fonts
          const avgCharWidth = fontSize * 0.48;
          const estimatedCPL = rect.width / avgCharWidth;
          cplValues.push(estimatedCPL);
        }
      }

      if (cplValues.length === 0) {
        output.push({
          id: 'SC-06',
          name: 'Characters Per Line (CPL)',
          pass: false,
          measured: null,
          threshold: '45-80 CPL',
          detail: 'FAIL: No paragraphs with sufficient text (>= 40 chars) found.',
          action: 'Ensure body text paragraphs have substantive content.'
        });
        return;
      }

      const avgCPL = cplValues.reduce((a, b) => a + b, 0) / cplValues.length;
      const roundedCPL = Math.round(avgCPL);
      const pass = roundedCPL >= 45 && roundedCPL <= 80;

      output.push({
        id: 'SC-06',
        name: 'Characters Per Line (CPL)',
        pass,
        measured: roundedCPL,
        threshold: '45-80 CPL',
        detail: pass
          ? `PASS: Average CPL is ${roundedCPL} across ${cplValues.length} paragraphs (optimal reading range).`
          : `FAIL: Average CPL is ${roundedCPL} (${roundedCPL < 45 ? 'too narrow -- lines are too short for comfortable reading' : 'too wide -- lines exceed comfortable reading width'}). Sampled ${cplValues.length} paragraphs.`,
        action: pass ? 'None.' : (roundedCPL < 45
          ? 'Increase container width or reduce horizontal padding to allow longer lines.'
          : 'Decrease container width or increase horizontal padding. Target max-width: 960px with moderate padding.'),
        sampleCount: cplValues.length,
        cplRange: {
          min: Math.round(Math.min(...cplValues)),
          max: Math.round(Math.max(...cplValues)),
          avg: roundedCPL
        }
      });
    })();


    // ==================================================================
    // SC-07 (K8): FOOTER PRESENCE
    // ==================================================================
    // Check for a footer element or closing section with meaningful text
    // content (not just whitespace). The middle experiment had NO footer
    // (the builder could not ask the planner because of zero messaging).
    // The ceiling experiment added a footer. This check enforces it.
    //
    // PASS if footer exists with text.
    // ==================================================================
    (function checkSC07() {
      const footer = document.querySelector('footer')
        || document.querySelector('[role="contentinfo"]')
        || document.querySelector('.footer');

      if (!footer) {
        output.push({
          id: 'SC-07',
          name: 'Footer Presence',
          pass: false,
          measured: null,
          threshold: 'Footer exists with meaningful text content',
          detail: 'FAIL: No footer element found. Searched for <footer>, [role="contentinfo"], .footer. This is a BLOCKING failure -- footer is a required landmark.',
          action: 'Add a <footer> element with meaningful closing content (copyright, attribution, navigation, or structural bookend).'
        });
        return;
      }

      const text = footer.textContent.trim();
      const hasText = text.length > 0;

      // Also check for meaningful content, not just whitespace or empty tags
      const hasMeaningfulContent = text.length >= 5; // At least a few words

      const pass = hasText && hasMeaningfulContent;

      output.push({
        id: 'SC-07',
        name: 'Footer Presence',
        pass,
        measured: text.length,
        threshold: 'Footer exists with meaningful text (>= 5 characters)',
        detail: pass
          ? `PASS: Footer found with ${text.length} characters of text content. Preview: "${text.substring(0, 80)}${text.length > 80 ? '...' : ''}"`
          : `FAIL: Footer element exists but ${!hasText ? 'contains no text' : `has only ${text.length} character(s) -- not meaningful content`}. Footer must contain real content, not just empty structure.`,
        action: pass ? 'None.' : 'Add meaningful text content to the footer (copyright, attribution, structural bookend).'
      });
    })();


    // ==================================================================
    // SC-08 (K5): DESIGNED MOMENT PAST 50%
    // ==================================================================
    // Scan elements in the bottom 50% of the page for sections with high
    // visual complexity. A "designed moment" is a section that uses 3 or
    // more simultaneous visual mechanisms:
    //   - Non-default border (any border that is not 'none' or '0px')
    //   - Non-default background color (not transparent, not body bg)
    //   - Varied font sizes (2+ different font sizes within the section)
    //   - Background patterns or images
    //   - Multiple nested structural elements (3+ levels)
    //   - Color accents (colored text, not just the default body color)
    //
    // PASS if at least 1 high-complexity section (3+ mechanisms) is found
    // in the bottom 50% of the page.
    //
    // This prevents the ceiling experiment's failure mode: all visual
    // complexity concentrated at the top, with the bottom half being
    // monotonous repetition.
    // ==================================================================
    (function checkSC08() {
      const totalHeight = document.documentElement.scrollHeight;
      const midpoint = totalHeight / 2;

      // Find all section-level elements
      const sectionCandidates = document.querySelectorAll(
        'section, [class*="zone"], [class*="section"], article > div, main > div, .content-block, .card, aside, details, figure, table'
      );

      // Also check direct children of the body/main if no section elements found
      let sections = Array.from(sectionCandidates);
      if (sections.length === 0) {
        const main = document.querySelector('main') || document.body;
        sections = Array.from(main.children);
      }

      // Get the body's default text color and background for comparison
      const bodyStyle = window.getComputedStyle(document.body);
      const bodyColor = bodyStyle.color;
      const bodyBg = bodyStyle.backgroundColor;

      let designedMoments = [];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;

        // Only consider sections whose top is in the bottom 50% of the page
        if (sectionTop < midpoint) continue;

        // Skip tiny elements (probably not real sections)
        if (rect.height < 50) continue;

        const style = window.getComputedStyle(section);
        let mechanismCount = 0;
        const mechanisms = [];

        // Check 1: Non-default border
        const border = style.borderWidth;
        const borderStyle = style.borderStyle;
        if (borderStyle !== 'none' && border !== '0px') {
          mechanismCount++;
          mechanisms.push('border');
        }

        // Check 2: Non-default background color
        const bg = style.backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)' && bg !== bodyBg) {
          mechanismCount++;
          mechanisms.push('background-color');
        }

        // Check 3: Background image or pattern
        const bgImage = style.backgroundImage;
        if (bgImage && bgImage !== 'none') {
          mechanismCount++;
          mechanisms.push('background-image');
        }

        // Check 4: Varied font sizes within the section
        const fontSizes = new Set();
        const textElements = section.querySelectorAll('*');
        for (const el of textElements) {
          if (el.textContent.trim().length > 0) {
            fontSizes.add(window.getComputedStyle(el).fontSize);
          }
          // Performance guard: don't scan too many elements
          if (fontSizes.size >= 3) break;
        }
        if (fontSizes.size >= 2) {
          mechanismCount++;
          mechanisms.push(`font-variation (${fontSizes.size} sizes)`);
        }

        // Check 5: Color accents (text color different from body default)
        let hasColorAccent = false;
        const colorCheckElements = section.querySelectorAll('span, strong, em, a, mark, cite, [class*="accent"], [class*="highlight"]');
        for (const el of colorCheckElements) {
          const elColor = window.getComputedStyle(el).color;
          if (elColor !== bodyColor && elColor !== 'inherit') {
            hasColorAccent = true;
            break;
          }
        }
        if (hasColorAccent) {
          mechanismCount++;
          mechanisms.push('color-accent');
        }

        // Check 6: Structural depth (nested elements 3+ levels)
        let maxDepth = 0;
        function measureDepth(el, depth) {
          if (depth > maxDepth) maxDepth = depth;
          if (depth >= 3) return; // Found enough, stop recursing
          for (const child of el.children) {
            measureDepth(child, depth + 1);
          }
        }
        measureDepth(section, 0);
        if (maxDepth >= 3) {
          mechanismCount++;
          mechanisms.push(`nesting-depth (${maxDepth})`);
        }

        if (mechanismCount >= 3) {
          designedMoments.push({
            element: section.tagName.toLowerCase() + (section.className ? '.' + section.className.split(' ')[0] : ''),
            topPx: Math.round(sectionTop),
            pagePercent: parseFloat(((sectionTop / totalHeight) * 100).toFixed(1)),
            mechanismCount,
            mechanisms
          });
        }
      }

      const pass = designedMoments.length >= 1;

      output.push({
        id: 'SC-08',
        name: 'Designed Moment Past 50%',
        pass,
        measured: designedMoments.length,
        threshold: '>= 1 high-complexity section (3+ mechanisms) in bottom 50% of page',
        detail: pass
          ? `PASS: ${designedMoments.length} designed moment(s) found in the bottom half of the page. The page sustains visual interest through its full length.`
          : 'FAIL: No sections with 3+ visual mechanisms found in the bottom 50% of the page. All visual complexity is concentrated at the top, creating a trailing-off effect.',
        action: pass ? 'None.' : 'Add visual complexity to at least one section in the bottom half: combine borders, background colors, varied typography, color accents, or structural nesting.',
        designedMoments
      });
    })();


    // --------------------------------------------------
    // RESET SCROLL AND RETURN
    // --------------------------------------------------
    window.scrollTo(0, 0);
    return output;
  });


  // ----------------------------------------------------------------
  // FORMAT AND PRINT REPORT
  // ----------------------------------------------------------------
  const allPassed = results.every(r => r.pass === true);

  // Print structured report to console
  console.log('');
  console.log('====================================================');
  console.log('   SPATIAL CONFIDENCE GATE -- PROGRAMMATIC REPORT');
  console.log('====================================================');
  console.log(`   Viewport: 1440 x 900`);
  console.log(`   Timestamp: ${new Date().toISOString()}`);
  console.log(`   Page URL: ${page.url()}`);
  console.log('----------------------------------------------------');
  console.log('');

  for (const r of results) {
    const status = r.pass ? 'PASS' : 'FAIL';
    const icon = r.pass ? '[PASS]' : '[FAIL]';
    console.log(`  ${icon} ${r.id}: ${r.name}`);
    console.log(`         Measured: ${r.measured !== null ? r.measured : 'N/A'} | Threshold: ${r.threshold}`);
    console.log(`         ${r.detail}`);
    if (!r.pass) {
      console.log(`         ACTION: ${r.action}`);
    }
    console.log('');
  }

  console.log('----------------------------------------------------');
  const passCount = results.filter(r => r.pass).length;
  const failCount = results.filter(r => !r.pass).length;

  if (allPassed) {
    console.log(`  VERDICT: ALL ${results.length} CHECKS PASSED`);
    console.log('  Gate status: PASS -- proceed to next phase.');
  } else {
    console.log(`  VERDICT: ${failCount} of ${results.length} CHECKS FAILED`);
    console.log(`  Failed: ${results.filter(r => !r.pass).map(r => r.id).join(', ')}`);
    console.log('  Gate status: FAIL -- fix cycle required.');
  }
  console.log('====================================================');
  console.log('');

  return {
    passed: allPassed,
    passCount,
    failCount,
    results
  };
}


// ================================================================
// MODULE EXPORT
// ================================================================
// When used as a module (e.g., required by a Playwright test file),
// export the main function. When injected directly, it is available
// as a global function.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runSpatialGate };
}

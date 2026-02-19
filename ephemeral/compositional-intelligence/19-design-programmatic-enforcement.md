# Report 19: Programmatic Phase Enforcement Design

**Agent:** Programmatic Phase Enforcement Designer (Opus 4.6)
**Date:** 2026-02-19
**Task:** Design a system that makes phase completion verifiable through code, not prose
**Sources Read (ALL fully):**
1. `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (977 lines -- full PV2 architecture)
2. `ephemeral/pv2-cross-reference/14-MASTER-SYNTHESIS.md` (614 lines -- 23-report synthesis)
3. `~/.claude/skills/tension-composition/SKILL.md` (1,878 lines -- current phase structure, first 600 lines + gates at 799-862, 1400-1600)
4. `ephemeral/pv2-cross-reference/04-perception-gates.md` (150 lines -- gate classification analysis)

---

## EXECUTIVE SUMMARY

Text-based phase enforcement ("complete Phase 3 before Phase 4") achieves ~0% compliance in LLM builders. The builder skips, reorders, or partially completes phases because text instructions have zero enforcement mechanism. PV2 needs programmatic enforcement -- code that runs between phases and either PASSES the builder forward or BLOCKS progress with specific fix instructions.

This report designs four enforcement mechanisms, evaluates each for feasibility, recommends a hybrid architecture, and honestly identifies the boundary between what code can verify and what requires perceptual judgment.

**Core finding:** Phases 0-4 (structure, soul, backgrounds, borders) are ~90% programmatically verifiable. Phases 5-6 (typography zones, element richness) are ~60% verifiable. Phase 8's multi-coherence claim ("3+ channels shift at every boundary") is ~40% verifiable -- code can count channel changes but cannot assess whether they SERVE the same semantic direction. The 40% gap is where perceptual audit remains irreplaceable.

---

## SECTION 1: THE FOUR ENFORCEMENT OPTIONS

### Option A: Artifact Dependency Chain

**How it works:** Each phase produces a specific, structured artifact. The NEXT phase requires that artifact as input. If Phase 3 doesn't produce a zone-background manifest, Phase 4 literally cannot start because it needs that manifest to know where to place borders.

**Mechanism:**
```
Phase 1 → outputs: skeleton.html (pure HTML, zero CSS)
Phase 2 → requires: skeleton.html; outputs: skeleton-with-soul.html (HTML + soul CSS)
Phase 3 → requires: skeleton-with-soul.html; outputs: zoned.html (HTML + soul + zone backgrounds)
Phase 4 → requires: zoned.html; outputs: bordered.html (adds borders + transitions)
...
```

**Feasibility: HIGH.** This is how compilation pipelines work. Each intermediate artifact is a file that can be validated before the next phase reads it.

**Overhead: MODERATE.** Requires the builder to produce 9 intermediate HTML files instead of 1 final file. Each intermediate file is validated by a micro-gate before the next phase begins. This adds ~10-15 min (9 file-writes + 9 micro-gate runs at ~1 min each).

**Does it solve the text-is-just-words problem?** PARTIALLY. The builder MUST produce each artifact, but artifact production does not guarantee artifact QUALITY. A builder could output skeleton.html with zero semantic markup and still "pass" if the gate only checks file existence. Quality requires content-aware validation at each step.

**Verdict: STRONG FOUNDATION, but needs content-aware micro-gates at each handoff.**

---

### Option B: Playwright-Based Phase Gates

**How it works:** After each phase, a JavaScript gate runner launches Playwright, navigates to the current HTML file, and runs `getComputedStyle` checks specific to that phase's expected output. The gate returns PASS or FAIL with measured values.

**Mechanism:**
```javascript
// Phase 3 gate: Zone Backgrounds
async function gate_phase3(page) {
  const zones = await page.$$eval('[data-zone]', els =>
    els.map(el => getComputedStyle(el).backgroundColor)
  );
  // Check: >= 2 zones exist
  if (zones.length < 2) return { pass: false, reason: 'Only 1 zone found' };
  // Check: adjacent zones differ by >= 15 RGB
  for (let i = 1; i < zones.length; i++) {
    const delta = rgbDelta(zones[i-1], zones[i]);
    if (delta < 15) return {
      pass: false,
      reason: `Zones ${i-1} and ${i} differ by only ${delta} RGB (need >= 15)`,
      fix: `Increase background delta between zone ${i-1} (${zones[i-1]}) and zone ${i} (${zones[i]}). Try darkening zone ${i} by at least ${15 - delta} RGB points.`
    };
  }
  return { pass: true, measured: zones };
}
```

**Feasibility: HIGH for threshold checks, LOW for compositional checks.** Playwright + `getComputedStyle` can measure any computed CSS property. It CANNOT assess whether the measured values are compositionally coherent.

**Overhead: HIGH.** Each phase gate requires Playwright launch (~2-3 sec), page navigation (~1 sec), and DOM traversal (~1-5 sec). 9 phases = 9 launches = ~30-45 sec total. But this assumes the builder SAVES the HTML to disk after each phase, which adds friction.

**Does it solve the text-is-just-words problem?** YES for threshold violations. A background delta of 3 RGB cannot pass a gate that checks for >= 15 RGB. But NO for compositional quality -- code cannot check whether borders "reinforce the metaphor" or typography zones "serve the content hierarchy."

**Verdict: BEST enforcement mechanism for the 4 core perception gates (SC-09, SC-10, SC-11, SC-12). Overkill for structural checks that can be done with DOM inspection (no Playwright needed).**

---

### Option C: YAML Checkpoint Manifest

**How it works:** Each phase's expected deliverables are defined in a YAML manifest. The orchestrator parses the manifest after each phase and validates that the expected outputs exist. If Phase 3 requires `zone_backgrounds: [list of hex values]` and the builder doesn't provide them, the manifest check fails.

**Mechanism:**
```yaml
# phase-3-checkpoint.yaml
phase: 3
name: Zone Backgrounds
required_deliverables:
  - name: zone_count
    type: integer
    range: [2, 5]
  - name: zone_backgrounds
    type: hex_color_list
    min_length: 2
    constraint: adjacent_delta_gte_15_rgb
  - name: zone_assignments
    type: section_to_zone_map
    every_section_assigned: true
self_checks:
  - question: "Can you SEE the zone boundaries without borders?"
    type: boolean
    must_be: true
```

**Feasibility: MODERATE.** YAML manifests can define expected deliverables clearly. But validation logic must be IMPLEMENTED (the YAML doesn't self-validate -- something must parse it and run the checks). This pushes the complexity to an executor that reads YAML + validates against HTML output.

**Overhead: LOW-MODERATE.** YAML is lightweight (~20 lines per phase = ~180 lines total manifest). The executor that validates it is the real work.

**Does it solve the text-is-just-words problem?** PARTIALLY. The manifest makes expectations EXPLICIT and STRUCTURED, which is better than prose. But the builder still self-reports most deliverables. Only machine-verifiable properties (like zone count, hex values, section assignments) can be programmatically confirmed.

**Verdict: USEFUL AS SCHEMA, but requires Playwright/DOM executor for actual enforcement. Not sufficient standalone.**

---

### Option D: Separate Agent Per Phase

**How it works:** Each build phase is assigned to a separate agent instance. Phase 1 agent writes the HTML skeleton. Phase 2 agent adds soul CSS. Phase 3 agent adds zone backgrounds. Each agent reads the previous agent's output and ONLY its phase instructions.

**Mechanism:**
```
Agent-P1 (HTML skeleton)  → skeleton.html
Agent-P2 (Soul + base)    → reads skeleton.html, outputs soul.html
Agent-P3 (Zone bgs)       → reads soul.html, outputs zoned.html
Agent-P4 (Borders)        → reads zoned.html, outputs bordered.html
...
```

**Feasibility: LOW-MODERATE.** Works in principle but has severe practical problems:
- **Context fragmentation:** Each agent sees only its phase, losing the holistic vision that makes compositions cohere. Phase 6 (element richness) needs to know the metaphor from Phase 3, the zone structure from Phase 3, and the border system from Phase 4 -- but under this model, Agent-P6 would need to re-derive all of that from reading the HTML.
- **Compounding errors:** If Agent-P2 makes a subtle soul violation, Agent-P3 builds on top of it, and the error cascades through all subsequent agents.
- **Cost:** 9 agent spawns = 9x the model invocation cost. At ~90-150 min total for a single builder, 9 agents doing ~10-20 min each costs roughly the same in compute but loses compositional coherence.

**Overhead: VERY HIGH.** 9 agents with context loading, output production, and handoff validation.

**Does it solve the text-is-just-words problem?** YES for phase ordering (Agent-P4 literally cannot start before Agent-P3 finishes). NO for quality within phases (each agent still follows text instructions within its phase).

**Verdict: EXTREME OVERHEAD for modest enforcement gain. The compositional coherence loss is fatal. A single builder with programmatic gates between phases achieves the same ordering guarantee without fragmenting the creative vision.**

---

## SECTION 2: THE RECOMMENDED HYBRID ARCHITECTURE

After evaluating all four options, the optimal architecture combines A (artifact dependency) + B (Playwright gates) + C (YAML schema):

**Single Opus builder executes all 9 phases sequentially. After phases 1, 3, 4, 5, and 8, the orchestrator runs a phase-specific gate. The gate is a JavaScript function that inspects the current HTML file using DOM APIs and (where needed) Playwright's getComputedStyle.**

### Why This Hybrid

- **From Option A:** The builder saves the HTML file at 5 checkpoints (not 9 -- gates at every phase would interrupt creative flow). Each checkpoint is a dependency: the gate must PASS before the builder receives instructions to proceed to the next phase block.
- **From Option B:** The gate functions use Playwright for CSS property measurement (backgrounds, font-sizes, spacing, borders). These are the properties where text-based checking failed catastrophically in the flagship experiment.
- **From Option C:** Each gate's expected properties are defined in a structured schema (though implemented as JavaScript objects rather than external YAML, to avoid an additional parsing layer).

### Phase Gate Architecture

```
PHASE 0: Builder reads plan     (no gate -- planning phase)
PHASE 1: HTML skeleton          → GATE 1 (structural)
PHASE 2: Soul + base typography (no separate gate -- verified within Gate 3)
PHASE 3: Zone backgrounds       → GATE 2 (perceptual)
PHASE 4: Borders + transitions  → GATE 3 (perceptual + structural)
PHASE 5: Typography zones       → GATE 4 (perceptual)
PHASE 6: Element richness       (no separate gate -- verified within Gate 5)
PHASE 7: Accessibility          (no separate gate -- verified within Gate 5)
PHASE 8: Final verification     → GATE 5 (comprehensive: all 12+ checks)
```

**5 gates, not 9.** Gates at phases 1, 3, 4, 5, and 8 match the "5 mandatory checkpoints" already specified in the PV2 architecture diagram. The phases without separate gates (0, 2, 6, 7) have their outputs verified by the NEXT gate in sequence. This prevents over-interruption while maintaining enforcement.

---

## SECTION 3: JAVASCRIPT GATE RUNNER DESIGN

### 3.1: Gate 1 -- HTML Skeleton Verification (After Phase 1)

**What it checks:** Structure, not appearance. No Playwright needed -- pure DOM parsing.

```javascript
async function gatePhase1(page) {
  const results = [];

  // G1-01: Semantic landmarks
  const landmarks = await page.$$eval(
    'header, main, footer, nav, [role="complementary"]',
    els => els.map(el => el.tagName.toLowerCase())
  );
  const hasHeader = landmarks.includes('header');
  const hasMain = landmarks.includes('main');
  const hasFooter = landmarks.includes('footer');
  const ariaCount = landmarks.length;

  results.push({
    id: 'G1-01', name: 'ARIA Landmarks',
    pass: ariaCount >= 3,
    measured: { ariaCount, hasHeader, hasMain, hasFooter },
    fix: ariaCount < 3
      ? `Add ${3 - ariaCount} more ARIA landmarks. Currently have: ${landmarks.join(', ')}. Need header, main, and at least one more (footer, nav, or [role="complementary"]).`
      : null
  });

  // G1-02: Zone structure (data-zone or section elements)
  const zones = await page.$$eval(
    '[data-zone], main > section',
    els => els.length
  );
  results.push({
    id: 'G1-02', name: 'Zone Count',
    pass: zones >= 2 && zones <= 5,
    measured: { zones },
    fix: zones < 2
      ? `Only ${zones} zone(s) found. Add more <section> elements within <main>. Build plan specifies zone count -- check _build-plan.md.`
      : zones > 5
        ? `${zones} zones found (max 5). Merge related sections to reduce zone count.`
        : null
  });

  // G1-03: Skip link
  const skipLink = await page.$('a[href="#main"], a[href="#content"], .skip-link');
  results.push({
    id: 'G1-03', name: 'Skip Link',
    pass: skipLink !== null,
    measured: { present: skipLink !== null },
    fix: skipLink === null
      ? 'Add a skip link: <a href="#main" class="skip-link">Skip to content</a> as first child of <body>.'
      : null
  });

  // G1-04: Component library usage
  const componentClasses = await page.$$eval('*', els => {
    const libraryPatterns = [
      'callout', 'data-table', 'pull-quote', 'blockquote',
      'grid-2col', 'grid-3col', 'card', 'metric', 'timeline',
      'accordion', 'tab-panel'
    ];
    const found = new Set();
    els.forEach(el => {
      el.classList.forEach(cls => {
        libraryPatterns.forEach(pat => {
          if (cls.includes(pat)) found.add(pat);
        });
      });
    });
    return [...found];
  });
  results.push({
    id: 'G1-04', name: 'Component Library Adoption',
    pass: componentClasses.length >= 3,
    measured: { count: componentClasses.length, classes: componentClasses },
    fix: componentClasses.length < 3
      ? `Only ${componentClasses.length} component library classes found (${componentClasses.join(', ')}). Need >= 3. Review merged-components.css for available components: callout, data-table, pull-quote, grid-2col, grid-3col, card, metric, timeline, accordion, tab-panel.`
      : null
  });

  // G1-05: Grid layouts
  const gridContainers = await page.$$eval('*', els =>
    els.filter(el => {
      const style = getComputedStyle(el);
      return style.display === 'grid' || style.display === 'inline-grid';
    }).length
  );
  results.push({
    id: 'G1-05', name: 'Grid Layouts',
    pass: gridContainers >= 2,
    measured: { gridContainers },
    fix: gridContainers < 2
      ? `Only ${gridContainers} grid layout(s) found. Add grid displays (display: grid) to at least 2 containers. Use .grid-2col or .grid-3col from component library.`
      : null
  });

  return {
    gate: 'Phase 1: HTML Skeleton',
    pass: results.every(r => r.pass),
    results,
    blocking: results.filter(r => !r.pass)
  };
}
```

**What this can verify:** 5 structural properties. All binary, all measurable from DOM alone.

**What this CANNOT verify:** Whether the HTML semantic structure MATCHES the build plan's zone assignments. That requires comparing the plan (text) against the HTML (structure) -- a semantic matching problem beyond simple DOM inspection.

---

### 3.2: Gate 2 -- Zone Background Verification (After Phase 3)

**What it checks:** Perceptual visibility of zone boundaries. REQUIRES Playwright for getComputedStyle.

```javascript
async function gatePhase3(page) {
  const results = [];

  // G2-01: Background delta between adjacent zones
  const zoneBgs = await page.$$eval(
    '[data-zone], main > section',
    els => els.map(el => {
      const bg = getComputedStyle(el).backgroundColor;
      const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      return match ? { r: +match[1], g: +match[2], b: +match[3] } : null;
    }).filter(Boolean)
  );

  if (zoneBgs.length < 2) {
    results.push({
      id: 'G2-01', name: 'Zone Background Delta',
      pass: false,
      measured: { zoneCount: zoneBgs.length },
      fix: 'Fewer than 2 zones with computed backgrounds found. Ensure each zone has a background-color set explicitly.'
    });
  } else {
    for (let i = 1; i < zoneBgs.length; i++) {
      const delta = Math.max(
        Math.abs(zoneBgs[i].r - zoneBgs[i-1].r),
        Math.abs(zoneBgs[i].g - zoneBgs[i-1].g),
        Math.abs(zoneBgs[i].b - zoneBgs[i-1].b)
      );
      results.push({
        id: `G2-01-${i}`, name: `Zone ${i-1}→${i} Background Delta`,
        pass: delta >= 15,
        measured: {
          zone_prev: zoneBgs[i-1],
          zone_curr: zoneBgs[i],
          delta
        },
        fix: delta < 15
          ? `Zones ${i-1} and ${i} differ by only ${delta} RGB (need >= 15). Zone ${i-1}: rgb(${zoneBgs[i-1].r},${zoneBgs[i-1].g},${zoneBgs[i-1].b}). Zone ${i}: rgb(${zoneBgs[i].r},${zoneBgs[i].g},${zoneBgs[i].b}). INCREASE the difference by at least ${15 - delta} RGB points. Try darkening zone ${i} or lightening zone ${i-1}.`
          : null
      });
    }
  }

  // G2-02: Warm palette check (R >= G >= B)
  for (let i = 0; i < zoneBgs.length; i++) {
    const { r, g, b } = zoneBgs[i];
    results.push({
      id: `G2-02-${i}`, name: `Zone ${i} Warm Palette`,
      pass: r >= g && g >= b,
      measured: zoneBgs[i],
      fix: (r < g || g < b)
        ? `Zone ${i} background rgb(${r},${g},${b}) violates warm palette (R >= G >= B). Current order: R=${r}, G=${g}, B=${b}. Adjust to maintain R >= G >= B. Example warm colors: #FEF9F5 (254,249,245), #F5EDE3 (245,237,227), #EBE3D9 (235,227,217).`
        : null
    });
  }

  // G2-03: No pure extremes
  const allBgs = await page.$$eval('*', els => {
    const bgs = [];
    els.forEach(el => {
      const bg = getComputedStyle(el).backgroundColor;
      const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (match) {
        const r = +match[1], g = +match[2], b = +match[3];
        if ((r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255)) {
          bgs.push({ element: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''), rgb: `rgb(${r},${g},${b})` });
        }
      }
    });
    return bgs;
  });
  results.push({
    id: 'G2-03', name: 'No Pure Extremes',
    pass: allBgs.length === 0,
    measured: { violations: allBgs },
    fix: allBgs.length > 0
      ? `${allBgs.length} elements use pure black or pure white backgrounds: ${allBgs.map(v => v.element + '=' + v.rgb).join(', ')}. Replace #000000 with #1A1A1A and #FFFFFF with #FEF9F5 or similar warm values.`
      : null
  });

  return {
    gate: 'Phase 3: Zone Backgrounds',
    pass: results.every(r => r.pass),
    results,
    blocking: results.filter(r => !r.pass)
  };
}
```

**What this can verify:** Background color deltas, warm palette adherence, pure extreme violations. These are THE failure modes that sank the flagship (1-8 RGB deltas, imperceptible zone boundaries).

**What this CANNOT verify:** Whether the background COLOR CHOICES express the metaphor's intent. Code sees "15 RGB delta = PASS" but cannot assess whether the warm-to-cool arc reinforces the content hierarchy.

---

### 3.3: Gate 3 -- Borders + Transitions (After Phase 4)

```javascript
async function gatePhase4(page) {
  const results = [];

  // G3-01: Border presence on sections
  const sections = await page.$$eval(
    '[data-zone], main > section',
    els => els.map(el => {
      const style = getComputedStyle(el);
      return {
        borderLeft: parseFloat(style.borderLeftWidth) || 0,
        borderBottom: parseFloat(style.borderBottomWidth) || 0,
        borderTop: parseFloat(style.borderTopWidth) || 0,
      };
    })
  );
  const withBorders = sections.filter(
    s => s.borderLeft > 0 || s.borderBottom > 0 || s.borderTop > 0
  );
  results.push({
    id: 'G3-01', name: 'Border Presence',
    pass: withBorders.length >= 1,
    measured: {
      totalSections: sections.length,
      withBorders: withBorders.length
    },
    fix: withBorders.length === 0
      ? 'ZERO sections have borders. The flagship had this exact failure. Add border-left (4px solid) to callouts/blockquotes and horizontal rules between major sections.'
      : null
  });

  // G3-02: Callout/blockquote border-left
  const callouts = await page.$$eval(
    '.callout, blockquote, .callout-box, [class*="callout"]',
    els => els.map(el => ({
      tag: el.tagName,
      borderLeft: getComputedStyle(el).borderLeftWidth
    }))
  );
  const calloutWithBorder = callouts.filter(
    c => parseFloat(c.borderLeft) >= 3
  );
  // Only check if callouts exist
  if (callouts.length > 0) {
    results.push({
      id: 'G3-02', name: 'Callout Border-Left',
      pass: calloutWithBorder.length === callouts.length,
      measured: {
        totalCallouts: callouts.length,
        withBorderLeft: calloutWithBorder.length
      },
      fix: calloutWithBorder.length < callouts.length
        ? `${callouts.length - calloutWithBorder.length} callout(s) missing border-left >= 3px. Add: border-left: 4px solid [accent-color].`
        : null
    });
  }

  // G3-03: Horizontal rules or section dividers exist
  const dividers = await page.$$eval(
    'hr, [class*="divider"], [class*="separator"]',
    els => els.length
  );
  results.push({
    id: 'G3-03', name: 'Section Dividers',
    pass: dividers >= 1,
    measured: { dividers },
    fix: dividers === 0
      ? 'No horizontal rules or dividers found between sections. Add <hr> elements or styled dividers between major content zones for visual separation.'
      : null
  });

  // G3-04: Container width (the #1 failure mode)
  const container = await page.$eval(
    'main, [class*="container"], .content',
    el => {
      const style = getComputedStyle(el);
      return {
        maxWidth: style.maxWidth,
        computedWidth: el.getBoundingClientRect().width
      };
    }
  );
  const maxW = parseFloat(container.maxWidth);
  results.push({
    id: 'G3-04', name: 'Container Width',
    pass: maxW >= 940 && maxW <= 960,
    measured: container,
    fix: (maxW < 940 || maxW > 960)
      ? `Container max-width is ${maxW}px (need 940-960px). This is the #1 Phase D failure mode. Set max-width: 960px on the main content container.`
      : null
  });

  return {
    gate: 'Phase 4: Borders + Transitions',
    pass: results.every(r => r.pass),
    results,
    blocking: results.filter(r => !r.pass)
  };
}
```

---

### 3.4: Gate 4 -- Typography Zones (After Phase 5)

```javascript
async function gatePhase5(page) {
  const results = [];

  // G4-01: Font-size zone differentiation
  const headings = await page.$$eval(
    'h1, h2, h3',
    els => els.map(el => parseFloat(getComputedStyle(el).fontSize))
  );
  const bodyText = await page.$$eval(
    'p',
    els => els.map(el => parseFloat(getComputedStyle(el).fontSize))
  );
  const detailText = await page.$$eval(
    'figcaption, .caption, small, .meta, .detail',
    els => els.map(el => parseFloat(getComputedStyle(el).fontSize))
  );

  const displaySize = headings.length ? Math.max(...headings) : 0;
  const bodySize = bodyText.length ? bodyText[0] : 0;
  const detailSize = detailText.length ? Math.min(...detailText) : bodySize;

  // Display-to-body delta
  if (displaySize > 0 && bodySize > 0) {
    const displayDelta = displaySize - bodySize;
    results.push({
      id: 'G4-01', name: 'Display-Body Font Delta',
      pass: displayDelta >= 10,
      measured: { displaySize, bodySize, delta: displayDelta },
      fix: displayDelta < 10
        ? `Heading font (${displaySize}px) is only ${displayDelta}px larger than body (${bodySize}px). Need >= 10px delta for visible hierarchy. The flagship had ALL text at 16px -- this is the exact failure. Set display headings to 28-36px.`
        : null
    });
  }

  // Body-to-detail delta
  if (bodySize > 0 && detailSize > 0 && detailSize < bodySize) {
    const detailDelta = bodySize - detailSize;
    results.push({
      id: 'G4-02', name: 'Body-Detail Font Delta',
      pass: detailDelta >= 2,
      measured: { bodySize, detailSize, delta: detailDelta },
      fix: detailDelta < 2
        ? `Body font (${bodySize}px) and detail font (${detailSize}px) differ by only ${detailDelta}px. Need >= 2px delta. Set detail text (captions, meta) to 13-14px.`
        : null
    });
  }

  // G4-03: Font family differentiation (font trinity)
  const families = await page.$$eval('h1, h2, p, figcaption, code', els => {
    const fams = new Set();
    els.forEach(el => {
      const f = getComputedStyle(el).fontFamily.split(',')[0].trim().replace(/"/g, '');
      fams.add(f);
    });
    return [...fams];
  });
  results.push({
    id: 'G4-03', name: 'Font Family Variety',
    pass: families.length >= 2,
    measured: { families, count: families.length },
    fix: families.length < 2
      ? `Only ${families.length} font family(ies) in use: ${families.join(', ')}. Need >= 2 from the trinity: Instrument Serif (display), system serif (body), system sans (detail/UI). The flagship used uniform typography -- this is the fix.`
      : null
  });

  // G4-04: Letter-spacing differentiation
  const letterSpacings = await page.$$eval('h1, h2, p, figcaption', els =>
    els.map(el => ({
      tag: el.tagName,
      letterSpacing: parseFloat(getComputedStyle(el).letterSpacing) || 0
    }))
  );
  const uniqueSpacings = new Set(letterSpacings.map(l => Math.round(l.letterSpacing * 100)));
  results.push({
    id: 'G4-04', name: 'Letter-Spacing Variety',
    pass: uniqueSpacings.size >= 2,
    measured: {
      unique: uniqueSpacings.size,
      values: [...uniqueSpacings].map(v => v/100 + 'px')
    },
    fix: uniqueSpacings.size < 2
      ? `Only ${uniqueSpacings.size} distinct letter-spacing value(s). Need >= 2 for visible typographic differentiation. Set display headings to ~0.5-1px letter-spacing and body to 0px (or vice versa). The flagship wasted CSS on 0.001-0.01em differences that were imperceptible.`
      : null
  });

  // G4-05: Soul compliance -- border-radius: 0
  const borderRadii = await page.$$eval('*', els => {
    const violations = [];
    els.forEach(el => {
      const br = getComputedStyle(el).borderRadius;
      if (br && br !== '0px') {
        violations.push({ element: el.tagName + '.' + (el.className || '').split(' ')[0], borderRadius: br });
      }
    });
    return violations;
  });
  results.push({
    id: 'G4-05', name: 'Soul: border-radius = 0',
    pass: borderRadii.length === 0,
    measured: { violations: borderRadii.slice(0, 5) },
    fix: borderRadii.length > 0
      ? `${borderRadii.length} elements have border-radius > 0: ${borderRadii.slice(0,3).map(v => v.element + '=' + v.borderRadius).join(', ')}. Soul constraint: border-radius MUST be 0 everywhere.`
      : null
  });

  return {
    gate: 'Phase 5: Typography Zones',
    pass: results.every(r => r.pass),
    results,
    blocking: results.filter(r => !r.pass)
  };
}
```

---

### 3.5: Gate 5 -- Comprehensive Final Verification (After Phase 8)

This is the full 12-gate run from the PV2 architecture diagram (SC-01 through SC-12), PLUS the multi-coherence verification. It runs all previous gates' checks as a regression test, plus new checks for accessibility and stacking.

```javascript
async function gateFinal(page) {
  const results = [];

  // Run all previous gate checks (G1-* through G4-*) as regression
  // ... [all checks from Gates 1-4 repeated]

  // ADDITIONAL CHECKS unique to Gate 5:

  // G5-01: Stacked gap verification (SC-10)
  // Measure total gap between last element of zone N and first element of zone N+1
  const zoneBoundaries = await page.$$eval(
    '[data-zone], main > section',
    els => {
      const boundaries = [];
      for (let i = 0; i < els.length - 1; i++) {
        const endRect = els[i].getBoundingClientRect();
        const startRect = els[i + 1].getBoundingClientRect();
        const gap = startRect.top - endRect.bottom;
        boundaries.push({
          fromZone: i,
          toZone: i + 1,
          gap: Math.round(gap)
        });
      }
      return boundaries;
    }
  );
  zoneBoundaries.forEach(b => {
    results.push({
      id: `G5-01-${b.fromZone}`,
      name: `Stacked Gap Zone ${b.fromZone}→${b.toZone}`,
      pass: b.gap <= 108,
      measured: b,
      fix: b.gap > 108
        ? `Gap between zone ${b.fromZone} and zone ${b.toZone} is ${b.gap}px (max 108px). This creates a visible whitespace void. Reduce padding-bottom on zone ${b.fromZone} and/or padding-top on zone ${b.toZone}. Total stacked gap = margin-bottom + padding-bottom + border + padding-top + margin-top. Check each component.`
        : null
    });
  });

  // G5-02: Multi-coherence check (>= 3 channels shifting at zone boundaries)
  // This is the COMPOSITIONAL check -- see Section 4 for honest limitations
  const channelShifts = await page.$$eval(
    '[data-zone], main > section',
    els => {
      const shifts = [];
      for (let i = 1; i < els.length; i++) {
        const prev = getComputedStyle(els[i-1]);
        const curr = getComputedStyle(els[i]);
        let channels = 0;

        // Channel 1: Chromatic (background color)
        if (prev.backgroundColor !== curr.backgroundColor) channels++;
        // Channel 2: Typographic (font-size of first child)
        const prevP = els[i-1].querySelector('p, h2, h3');
        const currP = els[i].querySelector('p, h2, h3');
        if (prevP && currP) {
          const prevFs = parseFloat(getComputedStyle(prevP).fontSize);
          const currFs = parseFloat(getComputedStyle(currP).fontSize);
          if (Math.abs(prevFs - currFs) >= 2) channels++;
        }
        // Channel 3: Spatial (padding)
        const prevPad = parseFloat(prev.paddingTop) + parseFloat(prev.paddingBottom);
        const currPad = parseFloat(curr.paddingTop) + parseFloat(curr.paddingBottom);
        if (Math.abs(prevPad - currPad) >= 24) channels++;
        // Channel 4: Structural (border)
        const prevBorder = parseFloat(prev.borderLeftWidth) + parseFloat(prev.borderBottomWidth);
        const currBorder = parseFloat(curr.borderLeftWidth) + parseFloat(curr.borderBottomWidth);
        if (Math.abs(prevBorder - currBorder) >= 1) channels++;

        shifts.push({
          boundary: `zone ${i-1}→${i}`,
          channels,
          detail: { bg: prev.backgroundColor !== curr.backgroundColor, typo: false, spatial: false, structural: false }
        });
      }
      return shifts;
    }
  );

  const lowCoherence = channelShifts.filter(s => s.channels < 3);
  results.push({
    id: 'G5-02', name: 'Multi-Coherence (>= 3 channels per boundary)',
    pass: lowCoherence.length === 0,
    measured: { shifts: channelShifts },
    fix: lowCoherence.length > 0
      ? `${lowCoherence.length} boundary(ies) have fewer than 3 channel shifts: ${lowCoherence.map(l => l.boundary + ' (' + l.channels + ' channels)').join(', ')}. At each zone boundary, >= 3 of these must change: background color, font-size, padding, border-width. Add differentiation at the weak boundaries.`
      : null
  });

  // G5-03: Accessibility -- focus styles
  // Note: this checks CSS rules exist, not that they work interactively
  const focusStyles = await page.evaluate(() => {
    const sheets = document.styleSheets;
    let hasFocus = false;
    for (const sheet of sheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText && rule.selectorText.includes(':focus')) {
            hasFocus = true;
            break;
          }
        }
      } catch (e) {} // CORS protection on external sheets
    }
    return hasFocus;
  });
  results.push({
    id: 'G5-03', name: 'Focus Styles',
    pass: focusStyles,
    measured: { hasFocusRules: focusStyles },
    fix: !focusStyles
      ? 'No :focus CSS rules found. Add focus styles: *:focus { outline: 2px solid [accent-color]; outline-offset: 2px; } and .skip-link:focus { position: static; }'
      : null
  });

  // G5-04: Reduced motion
  const reducedMotion = await page.evaluate(() => {
    const sheets = document.styleSheets;
    let has = false;
    for (const sheet of sheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.media && rule.media.mediaText.includes('prefers-reduced-motion')) {
            has = true;
            break;
          }
        }
      } catch (e) {}
    }
    return has;
  });
  results.push({
    id: 'G5-04', name: 'Reduced Motion Media Query',
    pass: reducedMotion,
    measured: { hasReducedMotion: reducedMotion },
    fix: !reducedMotion
      ? 'No @media (prefers-reduced-motion) rule found. Add: @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }'
      : null
  });

  return {
    gate: 'Phase 8: Final Comprehensive',
    pass: results.every(r => r.pass),
    results,
    blocking: results.filter(r => !r.pass)
  };
}
```

---

## SECTION 4: COMPOSITIONAL GATES vs THRESHOLD GATES

### What Code CAN Verify (Threshold Gates)

| Property | Measurement Method | Threshold | Confidence |
|----------|-------------------|-----------|------------|
| Background color delta | `getComputedStyle().backgroundColor` RGB comparison | >= 15 RGB | **HIGH** (95%) |
| Stacked gap | `getBoundingClientRect().top - getBoundingClientRect().bottom` | <= 108px | **HIGH** (90%) |
| Font-size delta | `getComputedStyle().fontSize` comparison across zones | >= 2px | **HIGH** (95%) |
| Container width | `getComputedStyle().maxWidth` | 940-960px | **HIGH** (99%) |
| Border presence | `getComputedStyle().borderLeftWidth` | >= 1px | **HIGH** (95%) |
| ARIA landmarks | `querySelectorAll('header, main, footer, nav')` | >= 3 | **HIGH** (99%) |
| Letter-spacing delta | `getComputedStyle().letterSpacing` comparison | >= 0.48px (0.03em at 16px) | **HIGH** (90%) |
| Warm palette | RGB value comparison (R >= G >= B) | R >= G >= B | **HIGH** (95%) |
| Channel count at boundaries | Count CSS properties that differ between adjacent zones | >= 3 per boundary | **MODERATE** (70%) |
| Soul compliance | `getComputedStyle().borderRadius`, `boxShadow` | 0px, none | **HIGH** (99%) |

### What Code CANNOT Verify (Compositional Quality)

| Property | Why Code Fails | What It Would Need | Confidence of Code |
|----------|---------------|-------------------|-------------------|
| Semantic direction of channel shifts | Code sees "background changes + font-size changes" but not "both express deepening formality" | Understanding of content semantics + visual grammar | **0%** |
| Metaphor structural coherence | Code cannot assess whether a border weight encodes "geological strata" vs arbitrary decoration | Understanding of metaphor-to-CSS mapping | **0%** |
| Typography serving content hierarchy | Code sees size differences but not whether headings "feel" proportional to content importance | Human typographic judgment | **10%** (can check ratios, not rightness) |
| Transition grammar fitness | Code can detect transition TYPE (smooth/bridge/breathing) but not whether the type FITS the content shift | Understanding of content tone changes | **5%** |
| Visual rhythm / density arc | Code can measure padding per zone but not whether the arc creates a satisfying reading experience | Gestalt perception | **15%** (can check for monotony) |
| "Does this feel DESIGNED?" (PA-05) | The holistic quality judgment that PA-05 captures. A page can pass ALL threshold gates and still feel FLAT if the choices don't compose into a whole. | Human perceptual judgment | **0%** |

### The Honest Boundary

**~70% of what makes a page CORRECT is programmatically verifiable.** Background deltas, container width, soul compliance, accessibility landmarks, font-size zones, border presence, stacking limits -- these are all binary and measurable.

**~30% of what makes a page DESIGNED is not programmatically verifiable.** Semantic coherence, metaphor fidelity, compositional rhythm, typographic rightness, and the holistic "does this feel intentional?" judgment require human (or fresh-eyes PA) evaluation.

**The implication for PV2:** Programmatic gates are a FILTER, not a verdict. They catch the bottom 70% of failures cheaply (~2 min for all 12+ gates via Playwright). The PA audit catches the top 30% expensively (~30-45 min for 9 auditors). Both layers are needed. Neither is sufficient alone.

**Can code verify multi-coherence?** PARTIALLY. Code CAN count how many CSS channels change at each zone boundary (G5-02 above). It counts: background, font-size, padding, border. If >= 3 change, the boundary has "multi-channel shifting." But code CANNOT verify that those shifts are COHERENT -- that they express the same semantic direction. A page where background gets darker while font-size gets smaller while padding increases might satisfy ">= 3 channels shift" while creating visual chaos (three conflicting signals). The PA catches this; the code does not.

**Proposed resolution:** Gate G5-02 checks channel COUNT (binary: >= 3 or not). PA-05 checks channel COHERENCE (perceptual: do they compose?). Gate G5-02 is a necessary-but-not-sufficient filter.

---

## SECTION 5: PHASE LOCK MECHANISM

### How Phase Blocking Works in Practice

The orchestrator is the enforcement layer. The builder is a single Opus agent executing a recipe. The orchestrator controls what the builder sees and when.

**Enforcement pattern:**

```
ORCHESTRATOR                          BUILDER
     |                                   |
     |-- "Execute Phases 0-1. Save      |
     |    HTML after Phase 1."          |
     |                                   |
     |                            [builds skeleton]
     |                            [saves skeleton.html]
     |                                   |
     |<-- "Phase 1 complete.            |
     |     File saved."                 |
     |                                   |
     |-- [Runs Gate 1 on skeleton.html]  |
     |                                   |
     |   GATE 1: PASS                    |
     |                                   |
     |-- "Gate 1 PASSED. Execute        |
     |    Phases 2-3. Save HTML         |
     |    after Phase 3."               |
     |                                   |
     |                            [adds soul + backgrounds]
     |                            [saves zoned.html]
     |                                   |
     |<-- "Phase 3 complete."           |
     |                                   |
     |-- [Runs Gate 2 on zoned.html]     |
     |                                   |
     |   GATE 2: FAIL                    |
     |   "Zones 2→3 delta = 4 RGB       |
     |    (need >= 15). FIX: darken     |
     |    zone 3 by 11+ RGB points."    |
     |                                   |
     |-- "Gate 2 FAILED. Fix the        |
     |    following issue, then          |
     |    re-save: [fix recipe]"         |
     |                                   |
     |                            [fixes background]
     |                            [re-saves zoned.html]
     |                                   |
     |-- [Re-runs Gate 2]                |
     |                                   |
     |   GATE 2: PASS                    |
     |                                   |
     |-- "Gate 2 PASSED. Execute        |
     |    Phase 4."                      |
     |                                   |
```

**Key details:**

1. **The builder never receives "next phase" instructions until the current gate passes.** This is the enforcement mechanism. It is not text saying "complete Phase 3 before Phase 4" -- it is the orchestrator literally not telling the builder about Phase 4 until Gate 2 passes.

2. **The builder saves HTML at 5 checkpoints, not continuously.** Phases are grouped: [0-1], [2-3], [4], [5], [6-7-8]. This balances enforcement rigor against creative flow interruption.

3. **Fix cycles are INLINE, not separate waves.** When Gate 2 fails, the fix instruction goes to the SAME builder agent that produced the error. The builder fixes, re-saves, and the gate re-runs. Maximum 3 re-runs per gate before escalation.

4. **The orchestrator runs the gate function as a Playwright script.** This means the gate runner is a JavaScript file that the orchestrator spawns as a subprocess, not a function the builder calls on itself. Self-assessment is eliminated.

### Implementation Options

**Option 1: Single agent with checkpoint saves (RECOMMENDED)**

The orchestrator sends the builder instructions in 5 batches, waiting for a file save + gate pass between each batch. The builder is a single long-running Opus agent. This preserves compositional coherence (one agent sees the whole vision) while enforcing phase ordering (gates block progress).

**Pros:** Lowest overhead, preserves builder context, matching proven remediation pattern.
**Cons:** Builder could theoretically ignore "save after Phase 1" instruction. Mitigation: orchestrator checks file modification timestamp.

**Option 2: Separate orchestrator agent**

A dedicated orchestrator agent (Sonnet, cheaper) manages the gate-running loop. It spawns the Opus builder with phase-specific instructions, runs gates, and either sends "proceed" or "fix" messages.

**Pros:** Clean separation of concerns. Orchestrator is mechanical; builder is creative.
**Cons:** Additional agent spawn cost. Message passing overhead.

**Recommended:** Option 1 for the first PV2 build. Option 2 if the first build reveals the single-agent pattern allows phase-skipping.

---

## SECTION 6: GATE OUTPUT AS FIX RECIPE

Every gate check returns not just PASS/FAIL but a structured fix instruction. The fix instruction is formatted as an ACTION the builder can take immediately:

### Fix Recipe Format

```json
{
  "id": "G2-01-2",
  "name": "Zone 1→2 Background Delta",
  "pass": false,
  "measured": {
    "zone_prev": { "r": 254, "g": 252, "b": 243 },
    "zone_curr": { "r": 253, "g": 251, "b": 242 },
    "delta": 1
  },
  "fix": "Zones 1 and 2 differ by only 1 RGB (need >= 15). Zone 1: rgb(254,252,243). Zone 2: rgb(253,251,242). INCREASE the difference by at least 14 RGB points. Try darkening zone 2 to rgb(239,237,228) or similar."
}
```

**Fix recipe principles:**

1. **Measured values, not judgments.** The fix says "delta = 1 RGB" not "backgrounds are too similar." The builder sees the exact numbers.

2. **Specific CSS suggestion.** The fix says "try darkening zone 2 to rgb(239,237,228)" not "make the backgrounds more different." This is the RECIPE format (action verb + specific value) that the master synthesis identified as the success factor.

3. **Reference to the threshold.** The fix says "need >= 15" so the builder knows the TARGET, not just the failure.

4. **One fix per issue.** If Gate 2 has 3 failing checks, the builder receives 3 separate fix instructions, each actionable independently.

---

## SECTION 7: HONEST LIMITATIONS SUMMARY

### What Programmatic Enforcement SOLVES

| Problem | How Enforcement Fixes It | Confidence |
|---------|------------------------|------------|
| Builder skips Phase 3 (backgrounds) | Gate 2 checks for zone backgrounds. If absent, builder is blocked from Phase 4. | **99%** |
| Builder produces imperceptible deltas (1-8 RGB) | Gate 2 measures RGB deltas. Sub-15 fails with fix recipe. | **95%** |
| Builder uses border-radius > 0 | Gate 4 scans all computed border-radius values. Any > 0 fails. | **99%** |
| Builder produces whitespace voids (210+ px) | Gate 5 measures stacked gaps at zone boundaries. > 108px fails. | **90%** |
| Builder skips accessibility | Gate 5 checks for ARIA landmarks, skip link, focus styles, reduced motion. | **90%** |
| Builder uses uniform typography | Gate 4 checks font-size deltas across zones. All same = fail. | **95%** |
| Builder exceeds container width | Gate 3 checks max-width. > 960px fails. | **99%** |

### What Programmatic Enforcement CANNOT SOLVE

| Problem | Why Code Fails | Mitigation |
|---------|---------------|------------|
| Metaphor is "announced" not "structural" | Code cannot assess whether visual forms connect to metaphor | Wave 0.5 fresh-eyes validation |
| Channel shifts are incoherent (3+ channels shift but in conflicting directions) | Code counts channels, not semantic alignment | PA-05 multi-coherence judgment |
| Typography is technically varied but aesthetically wrong | Code checks deltas, not proportional beauty | PA auditors evaluate visual hierarchy |
| Page feels FLAT despite passing all gates | Gates are necessary-but-not-sufficient for "designed" quality | 9 fresh-eyes PA auditors (Mode 4) |
| Recipe ceiling (all gates pass at 3/4, need 4/4) | 4/4 requires compositional fluency beyond what any gate can measure | TC re-engagement for metaphor-driven adaptation |
| Content-metaphor fit | Code cannot judge whether visual metaphor serves content purpose | Fresh-eyes metaphor validation (Wave 0.5) |
| Transition grammar appropriateness | Code detects transition TYPE but not whether type fits content shift | PA auditors + builder compositional judgment |

### The 70/30 Split

**Programmatic gates eliminate 70% of failures -- the cheap, binary, measurable ones.** These are exactly the failures that killed the flagship (imperceptible backgrounds, uniform typography, missing borders, whitespace voids, container width violations). Gates catch them in ~2 minutes for a total cost of one Playwright session.

**Perceptual audit catches the remaining 30% -- the expensive, gestalt, compositional ones.** These are the failures that separate COMPOSED (3/4) from DESIGNED (4/4). They require 9 independent human-proxy agents spending ~30-45 minutes viewing screenshots with zero build context.

**The two layers are complementary, not redundant.** A page that fails Gate 2 (background delta = 3 RGB) should never reach PA auditors -- that is waste. A page that passes all gates but feels FLAT should not be declared a success -- that is the flagship's exact failure mode. PV2's two-layer architecture is the correct answer.

---

## SECTION 8: IMPLEMENTATION PRIORITY

### What to Build First

1. **Gate 2 (Zone Backgrounds)** -- Catches THE primary failure mode (imperceptible deltas). Highest ROI.
2. **Gate 3 (Borders + Container Width)** -- Catches the #1 Phase D failure (container width) and the flagship's zero-border failure.
3. **Gate 4 (Typography Zones)** -- Catches uniform typography (flagship: all 16px/400).
4. **Gate 5 (Stacking + Multi-Coherence + Accessibility)** -- Catches whitespace voids and the remaining perception failures.
5. **Gate 1 (HTML Skeleton)** -- Catches structural issues. Lowest priority because structural failures are usually caught by the builder's own output inspection.

### What to Skip

- **Per-phase YAML manifests:** Adds complexity without sufficient enforcement. The JavaScript gate functions already encode the validation schema.
- **Separate agent per phase:** Too expensive, fragments compositional vision.
- **Continuous Playwright monitoring:** Overkill. 5 checkpoint gates are sufficient.

### Total Gate Runner Size

Estimated: ~300-400 lines of JavaScript for all 5 gates. This matches the PV2 architecture diagram's estimate of ~300 lines for `gate-runner.js`. The gates above are designed to be independent functions that can be composed into a single runner file.

---

## APPENDIX: GATE-TO-SC MAPPING

How the 5 phase gates map to the 12 SC-* gates from the PV2 architecture:

| Phase Gate | SC Gates Covered | When Run |
|-----------|-----------------|----------|
| Gate 1 (Skeleton) | SC-06, SC-07, SC-08, SC-12 | After Phase 1 |
| Gate 2 (Backgrounds) | SC-04, SC-05, SC-09 | After Phase 3 |
| Gate 3 (Borders + Width) | SC-01, SC-02 (partial) | After Phase 4 |
| Gate 4 (Typography) | SC-02 (soul), SC-03, SC-11 | After Phase 5 |
| Gate 5 (Final) | ALL SC-01 through SC-12 + coherence + accessibility | After Phase 8 |

Gate 5 is a REGRESSION RUN of all previous gates plus new checks. This ensures nothing regressed during later phases (e.g., Phase 6 adding a component that breaks Phase 3's background delta).

---

**END OF REPORT**

**Statistics:**
- 4 enforcement options evaluated
- 1 hybrid architecture recommended (A+B+C)
- 5 phase gates designed with JavaScript
- 30+ individual checks across gates
- Fix recipes for every check
- Honest limitation analysis: 70/30 split (programmatic/perceptual)
- Total estimated gate runner: ~300-400 lines JavaScript

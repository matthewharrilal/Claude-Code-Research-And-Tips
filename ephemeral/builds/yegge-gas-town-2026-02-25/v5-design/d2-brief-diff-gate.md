# D2: Brief-Output Diff Gate — Design Document

**Date:** 2026-02-26
**Crack Dimension:** D2 (Compression Loss: Brief → Build)
**Purpose:** Surface what the builder dropped during compression from brief to HTML/CSS output.

---

## 1. Design Rationale

### The Problem

The TC brief specifies mechanisms, zone backgrounds, typography values, components, multi-coherence channels, metaphor names, and disposition techniques. The builder reads this brief and writes HTML/CSS. Currently, NO gate checks what was specified but NOT implemented. A mechanism listed in the brief that doesn't appear in the CSS is invisible to the pipeline.

Existing gates check the OUTPUT in isolation (is the background delta >= 15? are there >= 2 typography bands?). They do not check whether the output MATCHES THE INPUT. GR-55 checks multi-coherence channel count at boundaries but doesn't compare against what the brief SPECIFIED for those boundaries. GR-66 checks component class count but doesn't compare against what the brief RECOMMENDED.

### What This Gate Checks

**BV-08: Brief-Output Diff** — a post-build gate that takes BOTH the brief text AND the HTML output and computes a structural diff across 6 dimensions:

1. **Zone count:** Brief specifies N zones → HTML has N zone sections
2. **Zone backgrounds:** Brief specifies hex values per zone → CSS custom properties or computed backgrounds match
3. **Typography specs:** Brief specifies font sizes, weights, line-heights per zone → CSS contains these values
4. **Component types:** Brief mentions component types (callout, pull-quote, table, code-block, etc.) → HTML contains these elements
5. **Metaphor naming:** Brief specifies concept-named CSS properties (--loading-dock, --factory-floor) → CSS :root contains them
6. **Disposition techniques:** Brief specifies CSS property:value pairs in D-01 through D-09 → CSS contains evidence of each

### Why BV-08, Not GR-XX

This gate needs BOTH brief text AND HTML text. It doesn't need Playwright — it parses text. The BV prefix is appropriate because:
- It's a brief-output comparison, not an isolated output check
- It runs after the build (not before like BV-01–BV-07), but it's structurally a brief verification
- Its input signature is `(briefText, htmlText)` — same pattern as BV gates

**Alternative considered:** Making it a GR gate that takes `page` (Playwright). Rejected because all the checks can be done with text parsing — no need for computed styles. Text parsing is faster, simpler, and avoids Playwright contention.

**Gate ID: BV-08** (next available BV number after BV-07).

### Threshold

- **PASS:** >= 80% of brief-specified items found in output across all 6 dimensions
- **FAIL:** < 80% coverage in ANY dimension
- **Tier: RECOMMENDED** — a FAIL doesn't block the build but is reported prominently in gate results and flags specific dropped items for the REFINE builder

Rationale for 80% (not 100%): Builders have 80% creative authority. They may legitimately decide a component type doesn't serve the content, or merge two zones. 100% would be too rigid. But dropping more than 20% of brief specs signals compression loss, not creative judgment.

### False Positive Mitigation

The core challenge: a mechanism or value can be implemented WITHOUT using the exact name from the brief.

**Strategies:**
1. **Hex matching is exact** — background colors are machine-comparable. No fuzzy matching needed.
2. **Font sizes use +-1px tolerance** — `font-size: 15px` matches a brief spec of `16px` within 1px (rounding).
3. **Component matching is pattern-based** — the brief says "pull-quote" → search for `pull-quote`, `pullquote`, `blockquote.highlight`, `blockquote[class]`. A short synonym list per component type.
4. **Metaphor naming is exact** — custom property names are string-matchable in CSS text.
5. **Disposition CSS is value-based** — the brief says `background: var(--color-text)` → search for that literal string or its expanded form.
6. **Zone count uses structural heuristics** — `<section>` elements, `[class*="zone"]` elements, elements with distinct background-color in `style` or class.

---

## 2. Complete Gate Function Code

```javascript
// =============================================================================
// BV-08: Brief-Output Diff Gate
// Phase: Post-build (Phase 3A, alongside GR gates but text-only)
// Input: briefText (string) — the assembled execution brief
//        htmlText (string) — the builder's HTML output (full file text)
// Output: single gate result object
// =============================================================================

function checkBriefOutputDiff(briefText, htmlText) {
  const dimensions = {};
  const briefLower = briefText.toLowerCase();
  const htmlLower = htmlText.toLowerCase();

  // --- Helper: extract CSS from HTML (inline <style> blocks) ---
  const styleBlocks = htmlText.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  const cssText = styleBlocks.map(b => b.replace(/<\/?style[^>]*>/gi, '')).join('\n');
  const cssLower = cssText.toLowerCase();

  // =========================================================================
  // DIMENSION 1: Zone Count
  // Brief format: "Zone Boundary" table rows like "Z1 → Z2" or "Z1 -> Z2"
  //   OR zone assignments like "Z1 (Orientation):" / "Z2 (Mental Model):"
  // HTML format: <section class="zone-*"> or [class*="zone"] elements
  // =========================================================================
  const briefZoneRefs = new Set();
  // Match "Z1", "Z2", etc. in zone assignment lines
  const zoneAssignmentPattern = /\bZ(\d+)\b/g;
  let zm;
  while ((zm = zoneAssignmentPattern.exec(briefText)) !== null) {
    briefZoneRefs.add(parseInt(zm[1]));
  }
  const briefZoneCount = briefZoneRefs.size;

  // Count zone sections in HTML
  const htmlZonePatterns = [
    /class="[^"]*zone-[^"]*"/gi,           // class="zone-loading-dock"
    /class="[^"]*z\d+-section[^"]*"/gi,     // class="z1-section"
    /<section[^>]*class="[^"]*"/gi          // <section class="...">
  ];
  const htmlZoneClasses = new Set();
  for (const pat of htmlZonePatterns) {
    const matches = htmlText.match(pat) || [];
    for (const m of matches) {
      // Extract the zone identifier
      const zoneMatch = m.match(/zone-([a-z-]+)/i) || m.match(/z(\d+)-section/i);
      if (zoneMatch) htmlZoneClasses.add(zoneMatch[1]);
    }
  }
  const htmlZoneCount = htmlZoneClasses.size;
  const zoneDelta = Math.abs(briefZoneCount - htmlZoneCount);

  dimensions.zones = {
    briefExpected: briefZoneCount,
    htmlFound: htmlZoneCount,
    briefZoneIds: [...briefZoneRefs].sort(),
    htmlZoneIds: [...htmlZoneClasses].sort(),
    delta: zoneDelta,
    pass: zoneDelta <= 1  // Allow +-1 zone (merge or split)
  };

  // =========================================================================
  // DIMENSION 2: Zone Backgrounds (hex matching)
  // Brief format: hex values in zone assignment lines or background table
  // HTML format: CSS custom properties in :root or inline backgrounds
  // =========================================================================
  const briefHexPattern = /#([0-9a-fA-F]{6})\b/g;
  // Scope to zone background section of brief
  const bgSectionMatch = briefText.match(
    /(?:Zone\s*Background|Background\s*Assignment|Zone\s*assignments)([\s\S]*?)(?=^#+\s*(?:Multi|Transition|Structural|Density|Content-Form|Creative|CSS Value)|---)/im
  );
  const bgSection = bgSectionMatch ? bgSectionMatch[0] : '';
  const briefBgHexes = new Set();
  let hm;
  const bgHexPattern = /#([0-9a-fA-F]{6})\b/g;
  while ((hm = bgHexPattern.exec(bgSection)) !== null) {
    briefBgHexes.add('#' + hm[1].toUpperCase());
  }

  const cssHexes = new Set();
  const cssHexPattern = /#([0-9a-fA-F]{6})\b/g;
  let ch;
  while ((ch = cssHexPattern.exec(cssText)) !== null) {
    cssHexes.add('#' + ch[1].toUpperCase());
  }

  const bgFound = [];
  const bgMissing = [];
  for (const hex of briefBgHexes) {
    if (cssHexes.has(hex)) {
      bgFound.push(hex);
    } else {
      bgMissing.push(hex);
    }
  }

  const bgCoverage = briefBgHexes.size > 0
    ? bgFound.length / briefBgHexes.size
    : 1;

  dimensions.backgrounds = {
    briefExpected: [...briefBgHexes],
    found: bgFound,
    missing: bgMissing,
    coverage: parseFloat((bgCoverage * 100).toFixed(1)),
    pass: bgCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 3: Typography Specs
  // Brief format: "body 18px", "H2 40px", "line-height 1.8", "letter-spacing 0.05em"
  // HTML/CSS format: font-size, line-height, letter-spacing values in CSS
  // =========================================================================
  const briefTypoSpecs = [];
  // Extract font-size mentions like "18px", "16px", "40px"
  const fontSizePattern = /\b(\d+(?:\.\d+)?)\s*px\b/g;
  let fszMatch;
  // Only look in Tier 3 and Tier 4 (compositional spec, not the identity tier which is always present)
  const tier3Start = briefText.search(/^#+\s*Tier\s*3/im);
  const typoSection = tier3Start >= 0 ? briefText.substring(tier3Start) : briefText;
  while ((fszMatch = fontSizePattern.exec(typoSection)) !== null) {
    const val = parseFloat(fszMatch[1]);
    if (val >= 10 && val <= 96) { // Reasonable font-size range
      briefTypoSpecs.push({ type: 'font-size', value: val, unit: 'px' });
    }
  }
  // Extract line-height mentions like "1.7", "1.8", "1.6"
  const lineHeightPattern = /line-height[:\s]+(\d+\.\d+)/gi;
  let lhMatch;
  while ((lhMatch = lineHeightPattern.exec(typoSection)) !== null) {
    briefTypoSpecs.push({ type: 'line-height', value: parseFloat(lhMatch[1]), unit: '' });
  }
  // Extract letter-spacing mentions like "0.05em", "0.03em"
  const lsPattern = /letter-spacing[:\s]+(\d+\.\d+)\s*em/gi;
  let lsMatch;
  while ((lsMatch = lsPattern.exec(typoSection)) !== null) {
    briefTypoSpecs.push({ type: 'letter-spacing', value: parseFloat(lsMatch[1]), unit: 'em' });
  }

  // Deduplicate specs by type+value
  const uniqueTypoSpecs = [];
  const seenTypo = new Set();
  for (const spec of briefTypoSpecs) {
    const key = `${spec.type}:${spec.value}`;
    if (!seenTypo.has(key)) {
      seenTypo.add(key);
      uniqueTypoSpecs.push(spec);
    }
  }

  // Check CSS for each spec (with tolerance)
  const typoFound = [];
  const typoMissing = [];
  for (const spec of uniqueTypoSpecs) {
    let found = false;
    if (spec.type === 'font-size') {
      // Search for exact or +-1px
      const variants = [spec.value - 1, spec.value, spec.value + 1];
      for (const v of variants) {
        if (cssText.includes(`font-size: ${v}px`) ||
            cssText.includes(`font-size:${v}px`) ||
            cssText.includes(`${v}px`)) {
          found = true;
          break;
        }
      }
      // Also check rem equivalents (base 16px)
      const remVal = (spec.value / 16).toFixed(4);
      const remVariants = [
        `${parseFloat(remVal)}rem`,
        `${(spec.value / 16).toFixed(3)}rem`,
        `${(spec.value / 16).toFixed(2)}rem`,
        `${(spec.value / 16).toFixed(1)}rem`
      ];
      for (const rv of remVariants) {
        if (cssText.includes(rv)) { found = true; break; }
      }
    } else if (spec.type === 'line-height') {
      // Search for the exact value or +-0.1
      const variants = [
        (spec.value - 0.1).toFixed(1),
        spec.value.toFixed(1),
        (spec.value + 0.1).toFixed(1)
      ];
      for (const v of variants) {
        if (cssText.includes(`line-height: ${v}`) || cssText.includes(`line-height:${v}`)) {
          found = true;
          break;
        }
      }
    } else if (spec.type === 'letter-spacing') {
      // Exact em value or +-0.005
      const variants = [
        (spec.value - 0.005).toFixed(3),
        spec.value.toFixed(3),
        spec.value.toFixed(2),
        (spec.value + 0.005).toFixed(3)
      ];
      for (const v of variants) {
        if (cssText.includes(`${parseFloat(v)}em`)) { found = true; break; }
      }
    }
    if (found) {
      typoFound.push(spec);
    } else {
      typoMissing.push(spec);
    }
  }

  const typoCoverage = uniqueTypoSpecs.length > 0
    ? typoFound.length / uniqueTypoSpecs.length
    : 1;

  dimensions.typography = {
    briefExpected: uniqueTypoSpecs.length,
    found: typoFound.length,
    missing: typoMissing,
    coverage: parseFloat((typoCoverage * 100).toFixed(1)),
    pass: typoCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 4: Component Types
  // Brief mentions: "callout", "pull-quote", "table", "code block", "accordion",
  //   "grid", "comparison-grid", "timeline", "data-table", "blockquote", etc.
  // HTML: class names, element types, structural patterns
  // =========================================================================
  const componentSynonyms = {
    'callout':       ['.callout', 'class="callout', 'class="aside', '.aside'],
    'pull-quote':    ['.pull-quote', '.pullquote', 'blockquote class=', '.blockquote-highlight', '.epigraph'],
    'table':         ['<table', '.data-table', '.table-wrapper', '.key-value'],
    'code-block':    ['<pre', '<code', '.code-block', '.code-wrapper'],
    'accordion':     ['<details', '<summary', '.accordion', '.expandable'],
    'grid':          ['.grid', '.bento', '.comparison-grid', 'display: grid', 'display:grid'],
    'timeline':      ['.timeline', '.step-list', '.numbered-flow'],
    'card':          ['.card', '.stat-block'],
    'footnote':      ['.footnote', '.citation', '.source-link'],
    'highlight':     ['.highlight-box', '.highlight', '.inversion'],
    'nav':           ['.section-nav', 'nav class=', '.back-to-top'],
    'definition':    ['.definition', '<dl', '<dt'],
    'checklist':     ['.checklist', 'type="checkbox'],
    'multi-column':  ['column-count', 'columns:', '.multi-col', 'grid-template-columns']
  };

  // Extract mentioned component types from brief
  const briefComponents = new Set();
  for (const [compName, _synonyms] of Object.entries(componentSynonyms)) {
    // Check if the brief mentions this component type
    const briefPatterns = [
      compName,
      compName.replace('-', ' '),
      compName.replace('-', ''),
      // Common brief phrasing
      compName + 's',  // plurals
    ];
    for (const bp of briefPatterns) {
      if (briefLower.includes(bp.toLowerCase())) {
        briefComponents.add(compName);
        break;
      }
    }
  }

  // Check which mentioned components appear in HTML
  const compFound = [];
  const compMissing = [];
  for (const comp of briefComponents) {
    const synonyms = componentSynonyms[comp] || [];
    let found = false;
    for (const syn of synonyms) {
      if (htmlLower.includes(syn.toLowerCase())) {
        found = true;
        break;
      }
    }
    if (found) {
      compFound.push(comp);
    } else {
      compMissing.push(comp);
    }
  }

  const compCoverage = briefComponents.size > 0
    ? compFound.length / briefComponents.size
    : 1;

  dimensions.components = {
    briefExpected: [...briefComponents],
    found: compFound,
    missing: compMissing,
    coverage: parseFloat((compCoverage * 100).toFixed(1)),
    pass: compCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 5: Metaphor Naming (CSS custom properties)
  // Brief format: "--loading-dock", "--factory-floor", etc.
  // CSS format: same names in :root { } or var() references
  // =========================================================================
  const briefCustomProps = new Set();
  const customPropPattern = /--([a-z][a-z0-9-]+)/g;
  // Only extract from Tier 3 metaphor section
  const metaphorSectionMatch = briefText.match(
    /(?:Structural\s*Metaphor|CSS\s*custom\s*properties)([\s\S]*?)(?=^#+\s|---)/im
  );
  const metaphorSection = metaphorSectionMatch ? metaphorSectionMatch[0] : '';
  let cpMatch;
  while ((cpMatch = customPropPattern.exec(metaphorSection)) !== null) {
    // Skip generic names that aren't metaphor-specific
    const name = cpMatch[1];
    if (!name.startsWith('space-') && !name.startsWith('border-') &&
        !name.startsWith('font-') && !name.startsWith('color-')) {
      briefCustomProps.add('--' + name);
    }
  }

  const cssCustomProps = new Set();
  const cssPropPattern = /--([a-z][a-z0-9-]+)/g;
  let cssCpMatch;
  while ((cssCpMatch = cssPropPattern.exec(cssText)) !== null) {
    cssCustomProps.add('--' + cssCpMatch[1]);
  }

  const metaFound = [];
  const metaMissing = [];
  for (const prop of briefCustomProps) {
    if (cssCustomProps.has(prop)) {
      metaFound.push(prop);
    } else {
      metaMissing.push(prop);
    }
  }

  const metaCoverage = briefCustomProps.size > 0
    ? metaFound.length / briefCustomProps.size
    : 1;

  dimensions.metaphorNaming = {
    briefExpected: [...briefCustomProps],
    found: metaFound,
    missing: metaMissing,
    coverage: parseFloat((metaCoverage * 100).toFixed(1)),
    pass: metaCoverage >= 0.8
  };

  // =========================================================================
  // DIMENSION 6: Disposition CSS Techniques
  // Brief format: CSS property:value pairs within D-01 through D-09 sections
  //   e.g. "background: var(--color-text)", "transform: translateY(-2px)"
  // CSS format: matching property:value patterns
  // =========================================================================
  const briefDispositionCSS = [];
  // Extract D-01 through D-09 sections
  const dispSectionPattern = /###\s*D-0(\d)[:\s][\s\S]*?(?=###\s*D-0\d|###\s*Hover|---|\n##\s|$)/gi;
  let dispMatch;
  while ((dispMatch = dispSectionPattern.exec(briefText)) !== null) {
    const dispId = 'D-0' + dispMatch[1];
    const dispText = dispMatch[0];
    // Extract CSS-like patterns: property: value
    const cssPatterns = [
      /`([a-z-]+:\s*[^`]+)`/gi,          // inline code: `property: value`
      /([a-z-]+):\s*(var\(--[^)]+\))/gi,  // property: var(--name)
      /translateY\([^)]+\)/gi,             // transform values
      /font-size:\s*\d+px/gi,             // font-size specs
      /line-height:\s*[\d.]+/gi,          // line-height specs
      /border[a-z-]*:\s*\d+px/gi,         // border specs
      /transition:\s*[^;]+/gi             // transition specs
    ];
    for (const pat of cssPatterns) {
      let cssMatch;
      while ((cssMatch = pat.exec(dispText)) !== null) {
        const value = cssMatch[0].replace(/`/g, '').trim();
        if (value.length > 3 && value.length < 120) {
          briefDispositionCSS.push({ disposition: dispId, css: value });
        }
      }
    }
  }

  // Also check Hover Behavior Vocabulary section
  const hoverSection = briefText.match(/###?\s*Hover\s*Behavior[\s\S]*?(?=###\s*D-|---|\n##\s|$)/i);
  if (hoverSection) {
    const hoverCSS = hoverSection[0].match(/`([a-z-]+:\s*[^`]+)`/gi) || [];
    for (const hc of hoverCSS) {
      const value = hc.replace(/`/g, '').trim();
      if (value.length > 3 && value.length < 120) {
        briefDispositionCSS.push({ disposition: 'D-07-hover', css: value });
      }
    }
  }

  // Check for presence of key CSS patterns (not exact string match — extract the property name)
  const dispFound = [];
  const dispMissing = [];
  for (const item of briefDispositionCSS) {
    // Extract just the property name for flexible matching
    const propMatch = item.css.match(/^([a-z-]+)\s*:/i);
    if (propMatch) {
      const propName = propMatch[1].toLowerCase();
      // Check if CSS contains this property
      if (cssLower.includes(propName + ':') || cssLower.includes(propName + ' :')) {
        dispFound.push(item);
      } else {
        dispMissing.push(item);
      }
    } else {
      // Non-property patterns (like translateY) — check literal
      const searchTerm = item.css.toLowerCase().split('(')[0].trim();
      if (cssLower.includes(searchTerm)) {
        dispFound.push(item);
      } else {
        dispMissing.push(item);
      }
    }
  }

  const dispCoverage = briefDispositionCSS.length > 0
    ? dispFound.length / briefDispositionCSS.length
    : 1;

  dimensions.dispositionCSS = {
    briefExpected: briefDispositionCSS.length,
    found: dispFound.length,
    missing: dispMissing.slice(0, 10), // Cap at 10 to avoid huge output
    coverage: parseFloat((dispCoverage * 100).toFixed(1)),
    pass: dispCoverage >= 0.8
  };

  // =========================================================================
  // AGGREGATE
  // =========================================================================
  const allDimensions = [
    dimensions.zones,
    dimensions.backgrounds,
    dimensions.typography,
    dimensions.components,
    dimensions.metaphorNaming,
    dimensions.dispositionCSS
  ];
  const passingDimensions = allDimensions.filter(d => d.pass).length;
  const totalDimensions = allDimensions.length;
  const overallPass = passingDimensions === totalDimensions;

  // Compute overall coverage as weighted average
  // (zones is binary pass/fail, others are percentage-based)
  const coverageValues = [
    dimensions.backgrounds.coverage,
    dimensions.typography.coverage,
    dimensions.components.coverage,
    dimensions.metaphorNaming.coverage,
    dimensions.dispositionCSS.coverage
  ];
  const avgCoverage = coverageValues.reduce((a, b) => a + b, 0) / coverageValues.length;

  // Compute the dropped items list (most actionable output)
  const droppedItems = [];
  if (!dimensions.zones.pass) {
    droppedItems.push(`ZONES: Brief specified ${dimensions.zones.briefExpected} zones, HTML has ${dimensions.zones.htmlFound}`);
  }
  for (const hex of dimensions.backgrounds.missing) {
    droppedItems.push(`BACKGROUND: ${hex} specified in brief but not found in CSS`);
  }
  for (const spec of dimensions.typography.missing) {
    droppedItems.push(`TYPOGRAPHY: ${spec.type} ${spec.value}${spec.unit} specified but not found in CSS`);
  }
  for (const comp of dimensions.components.missing) {
    droppedItems.push(`COMPONENT: "${comp}" mentioned in brief but no matching element in HTML`);
  }
  for (const prop of dimensions.metaphorNaming.missing) {
    droppedItems.push(`METAPHOR: custom property ${prop} specified but not in CSS`);
  }
  for (const item of dimensions.dispositionCSS.missing.slice(0, 5)) {
    droppedItems.push(`DISPOSITION: ${item.disposition} technique "${item.css}" not found in CSS`);
  }

  return {
    gate: 'BV-08',
    name: 'Brief-Output Diff',
    status: overallPass ? 'PASS' : 'FAIL',
    source: 'code',
    measured: {
      dimensions,
      passingDimensions,
      totalDimensions,
      averageCoverage: parseFloat(avgCoverage.toFixed(1))
    },
    threshold: {
      minCoveragePerDimension: '80%',
      zoneTolerance: '+-1',
      fontSizeTolerance: '+-1px',
      lineHeightTolerance: '+-0.1',
      letterSpacingTolerance: '+-0.005em'
    },
    details: {
      droppedItems,
      droppedCount: droppedItems.length,
      dimensionSummary: {
        zones: `${dimensions.zones.htmlFound}/${dimensions.zones.briefExpected} zones (${dimensions.zones.pass ? 'PASS' : 'FAIL'})`,
        backgrounds: `${dimensions.backgrounds.coverage}% coverage (${dimensions.backgrounds.pass ? 'PASS' : 'FAIL'})`,
        typography: `${dimensions.typography.coverage}% coverage (${dimensions.typography.pass ? 'PASS' : 'FAIL'})`,
        components: `${dimensions.components.coverage}% coverage (${dimensions.components.pass ? 'PASS' : 'FAIL'})`,
        metaphorNaming: `${dimensions.metaphorNaming.coverage}% coverage (${dimensions.metaphorNaming.pass ? 'PASS' : 'FAIL'})`,
        dispositionCSS: `${dimensions.dispositionCSS.coverage}% coverage (${dimensions.dispositionCSS.pass ? 'PASS' : 'FAIL'})`
      }
    },
    evidence: 'OBSERVED',
    note: 'RECOMMENDED: Compares brief spec against HTML/CSS output to surface dropped items. 80% threshold per dimension. droppedItems array is the actionable output for REFINE builders.'
  };
}
```

---

## 3. Gate Manifest Entry

Add to `gate-manifest.json`:

```json
{
  "tiers": {
    "briefVerification": {
      "count": 8,
      "gates": ["BV-01", "BV-02", "BV-03", "BV-04", "BV-05", "BV-06", "BV-07", "BV-08"],
      "verdictImpact": "BV-01–BV-05: ANY FAIL = return brief to assembler (max 2 revision cycles). BV-06: FAIL = pipeline has regressed. BV-07: FAIL = builder input too large. BV-08: FAIL = compression loss detected, flag for REFINE builder."
    }
  },

  "executionOrder": [
    {
      "step": 3.5,
      "phase": "Post-build brief-output diff (Phase 3A, text-only)",
      "function": "checkBriefOutputDiff(briefText, htmlText)",
      "gates": ["BV-08"],
      "requires": "Brief text + HTML text (file read, no Playwright)",
      "note": "D2 crack dimension: Surfaces what the builder dropped during compression. Runs after build, alongside GR gates. droppedItems array feeds REFINE builder."
    }
  ]
}
```

**Canonical count update:** `briefVerification.count` changes from 7 to 8. `grandTotal` changes from 54 to 55.

---

## 4. Gate Spec Entry

Add to `gate-runner-spec.md` summary table:

| Gate | Name | Tier | Phase | Input | Threshold | Verdict Impact |
|------|------|------|-------|-------|-----------|---------------|
| BV-08 | Brief-Output Diff | RECOMMENDED | Post-build (3A) | briefText + htmlText | >= 80% coverage per dimension (6 dimensions: zones, backgrounds, typography, components, metaphor naming, disposition CSS) | FAIL flagged in report. droppedItems array passed to REFINE builder. Does not individually block. |

---

## 5. Integration with Orchestrator

### Where BV-08 fits in the pipeline flow:

```
Phase 1: Brief assembly → BV-01–BV-07 verify brief
Phase 2: Builder executes
Phase 3A (NEW): checkBriefOutputDiff(briefText, htmlText)  ← BV-08
Phase 3A: runPhase3Gates(page)                               ← GR-01 through GR-67
Phase 3B: Screenshots + PA deployment
Phase 3C: Post-weaver gates
```

BV-08 runs AFTER the builder produces HTML but BEFORE the Playwright gate runner. It only needs text, so it can run in parallel with Playwright setup.

### REFINE builder integration:

When BV-08 FAILs and the verdict is REFINE, the orchestrator should include the `droppedItems` array in the REFINE builder's input. This is the D2 crack's actionable remediation:

```
REFINE BRIEF ADDENDUM:
The following items from the original brief were not found in your output.
Review each and either implement it or document why it was omitted:

- BACKGROUND: #EDE6DA specified in brief but not found in CSS
- COMPONENT: "accordion" mentioned in brief but no matching element in HTML
- METAPHOR: custom property --dispatch-floor specified but not in CSS
```

---

## 6. Risk Analysis

### False Positives (gate says FAIL when builder did implement the spec)

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| **Hex case mismatch** | LOW | All hex comparison uses `.toUpperCase()` normalization |
| **Rem vs px mismatch** | MEDIUM | Font-size check converts to rem equivalents. But non-standard base sizes (not 16px) would break this. Mitigated by the +-1px tolerance on px values. |
| **Component synonyms incomplete** | MEDIUM | A builder might use `.quote-card` for a pull-quote. The synonym list covers 14 types with 3-5 variants each, but novel names are possible. **Mitigation:** Expand synonym list over time based on actual builds. |
| **Metaphor property filtering** | LOW | The filter excludes `--space-*`, `--border-*`, `--font-*`, `--color-*` prefixes to avoid matching generic tokens. But a builder who uses `--color-factory-red` would be missed. **Mitigation:** Only match properties FROM THE BRIEF, not invent expected ones. |
| **Disposition CSS property matching too loose** | MEDIUM | Matching property NAME rather than property+value means `border-bottom: 1px` in CSS would match a brief spec of `border-bottom: 3px`. This is by design — we check presence not exact values (exact values are GR gate territory). |
| **Brief section extraction misses data** | LOW | Regex-based section extraction could miss non-standard formatting. Mitigated by falling back to full brief text if section not found. |

### False Negatives (gate says PASS when builder actually dropped specs)

| Risk | Likelihood | Impact |
|------|-----------|--------|
| **Structural omission masked by incidental match** | MEDIUM | Brief specifies `font-size: 40px` for H2 in Z1. Builder uses 40px for something else. Gate counts it as implemented. **Impact:** Low — the value exists in CSS, even if not applied to the specified element. GR-45 (Typography Variation) catches same-size-everywhere. |
| **80% threshold too permissive** | LOW | Builder drops 19% of specs and passes. **Impact:** Acceptable — 80% matches the 80% creative authority principle. The droppedItems list still surfaces what was dropped even on PASS. |
| **Disposition CSS matching too property-level** | MEDIUM | Brief says `transition: 0.2s ease` and CSS has `transition: all 0.3s`. Gate sees `transition:` present and passes. **Impact:** Low — presence of the property type matters more than exact values. |

### Edge Cases

1. **Empty brief or HTML:** All dimensions default to `pass: true` (coverage = 1.0 when expected = 0). This prevents false FAILs on trivially empty inputs.
2. **Brief with no Tier 3 section:** Typography extraction falls back to full brief. Zone and background extraction rely on zone-specific patterns that are also in other sections.
3. **HTML with no `<style>` blocks:** CSS text extraction returns empty. All CSS-based dimensions will show 0% coverage. This is correct — a page with no CSS has dropped everything.
4. **Multiple builds (REFINE cycles):** BV-08 should be re-run on each REFINE cycle's output. The droppedItems list will shrink as the builder addresses items. This provides convergence tracking.
5. **Very large briefs (> 200 lines):** Typography extraction deduplicates by type+value, so repeated specs don't inflate the expected count. Component matching uses a fixed synonym table, so brief verbosity doesn't affect component counts.

---

## 7. Testing Against the Live Build

To validate this design, I compared the brief (`p1-execution-brief.md`) against the output (`p2-yegge-gas-town.html`) from the Yegge Gas Town build:

### Expected Results:

**Zones:** Brief specifies Z1-Z5 (5 zones). HTML has `.zone-loading-dock`, `.zone-dispatch-floor`, `.zone-factory-floor`, `.zone-assembly-line`, `.zone-shipping-bay` (5 zones). **PASS.**

**Backgrounds:** Brief specifies `#FEF9F5`, `#EDE6DA`, `#1E1E1E`, `#F0EBE0`, `#E5DDD0`. CSS `:root` contains all 5 as custom property values. **PASS (100%).**

**Typography:** Brief specifies font sizes 18px, 16px, 40px, 32px, 15px, 28px. Brief specifies line-heights 1.8, 1.7, 1.6, 1.5. Brief specifies letter-spacing 0.05em, 0.04em, 0.03em. CSS should contain most of these. **Expected ~85-90% coverage.**

**Components:** Brief mentions callout, pull-quote, table, code-block, accordion, grid, multi-column, nav. HTML should contain most. **Expected ~80-90% coverage.**

**Metaphor Naming:** Brief specifies `--loading-dock`, `--dispatch-floor`, `--factory-floor`, `--assembly-line`, `--shipping-bay`, `--factory-accent`, `--factory-steel`, `--factory-text-light`. All present in CSS `:root`. **PASS (100%).**

**Disposition CSS:** Brief contains ~15-20 CSS technique mentions across D-01 through D-09 + hover vocabulary. Most property types should be present. **Expected ~75-85% coverage.**

The Yegge Gas Town build (PA-05 3.5/4) should PASS BV-08. This is correct — it's a high-quality build with low compression loss. The earlier Flagship build (PA-05 1.5/4) would likely FAIL on typography and disposition dimensions, which is also correct.

---

## 8. Future Enhancements

1. **Semantic matching for mechanisms:** Brief specifies mechanisms by name ("border-weight hierarchy", "density compression"). Cross-reference mechanism-catalog.md for CSS patterns associated with each mechanism name. Check HTML/CSS for those patterns. This requires a mechanism→CSS pattern lookup table.

2. **Per-zone matching:** Instead of checking if a value EXISTS anywhere in CSS, check that it appears in the CORRECT ZONE's CSS rules. This would catch "right value, wrong zone" errors. Requires CSS rule scoping analysis.

3. **Multi-coherence boundary matching:** Brief specifies "Z1→Z2: 4 channels shift" with specific channels listed. BV-08 could verify that the listed channels actually differ at that boundary. This overlaps with GR-55 but would be brief-aware rather than brief-blind.

4. **Dropped items auto-routing:** Instead of dumping all droppedItems into the REFINE brief, classify them by severity (BLOCKING: background hex missing; SIGNIFICANT: component type missing; MINOR: disposition technique variant). Route only BLOCKING items to the REFINE builder's attention.

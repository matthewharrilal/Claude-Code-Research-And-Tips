# HTML Restructure Manifest — Phase 1

Source: `ephemeral/flagship-experiment/07-intentionality.html` (2,035 lines)
Spec: `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` Section 3 (Phase 1)

Changes are listed in line-number order (top to bottom). Apply in this order to maintain line number accuracy -- or apply bottom-up to avoid offset drift.

---

## Step 1.1: Skip Link + Main Wrapper

### Change 1: Insert skip link before header
- Type: INSERT_BEFORE
- Line: 1046
- Current: `  <header class="page-header">`
- New: `  <a href="#main-content" class="skip-link">Skip to main content</a>`
- Notes: Inserted as first child of `<body>`, before the `<header>` tag

### Change 2: Add role="banner" to header
- Type: REPLACE
- Line: 1046
- Current: `  <header class="page-header">`
- New: `  <header class="page-header" role="banner">`

### Change 3: Insert `<main>` after `</header>`
- Type: INSERT_AFTER
- Line: 1052
- Current: `  </header>`
- New: `  <main id="main-content">`

### Change 4: Insert `</main>` before footer
- Type: INSERT_BEFORE
- Line: 2019
- Current: `  <footer class="page-footer">`
- New: `  </main>`

### Change 5: Add role="contentinfo" to footer
- Type: REPLACE
- Line: 2019
- Current: `  <footer class="page-footer">`
- New: `  <footer class="page-footer" role="contentinfo">`

---

## Step 1.2: ARIA Labels on All 12 Sections

### Change 6: S1 aria-label
- Type: REPLACE
- Line: 1066
- Current: `  <section class="zone-s1" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">`
- New: `  <section class="zone-s1" aria-label="Section 1: What the Research Set Out to Find" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">`

### Change 7: S2 aria-label
- Type: REPLACE
- Line: 1097
- Current: `  <section class="zone-s2" style="padding-top: var(--space-20); padding-bottom: var(--space-20);">`
- New: `  <section class="zone-s2" aria-label="Section 2: Master Insight" style="padding-top: var(--space-20); padding-bottom: var(--space-20);">`

### Change 8: S3 aria-label
- Type: REPLACE
- Line: 1132
- Current: `  <section class="zone-s3" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">`
- New: `  <section class="zone-s3" aria-label="Section 3: Why Great Documentation Breathes" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">`

### Change 9: S4 aria-label
- Type: REPLACE
- Line: 1204
- Current: `  <section class="zone-s4" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">`
- New: `  <section class="zone-s4" aria-label="Section 4: The Choreography of Reading" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">`

### Change 10: S5 aria-label
- Type: REPLACE
- Line: 1282
- Current: `  <section class="zone-s5" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">`
- New: `  <section class="zone-s5" aria-label="Section 5: The Characters on Your Page" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">`

### Change 11: S6 aria-label
- Type: REPLACE
- Line: 1401
- Current: `  <section class="zone-s6" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">`
- New: `  <section class="zone-s6" aria-label="Section 6: Whitespace and Typography as Design Decisions" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">`

### Change 12: S7 aria-label
- Type: REPLACE
- Line: 1441
- Current: `  <section class="zone-s7" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">`
- New: `  <section class="zone-s7" aria-label="Section 7: Three Tensions and How to Resolve Them" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">`

### Change 13: S8 aria-label
- Type: REPLACE
- Line: 1523
- Current: `  <section class="zone-s8" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">`
- New: `  <section class="zone-s8" aria-label="Section 8: From Principles to Page Structure" style="padding-top: var(--space-8); padding-bottom: var(--space-8);">`

### Change 14: S9 aria-label
- Type: REPLACE
- Line: 1670
- Current: `  <section class="zone-s9" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">`
- New: `  <section class="zone-s9" aria-label="Section 9: What the Research Recommends" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">`

### Change 15: S10 aria-label
- Type: REPLACE
- Line: 1761
- Current: `  <section class="zone-s10" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">`
- New: `  <section class="zone-s10" aria-label="Section 10: What to Avoid and Why" style="padding-top: var(--space-10); padding-bottom: var(--space-10);">`

### Change 16: S11 aria-label
- Type: REPLACE
- Line: 1832
- Current: `  <section class="zone-s11" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">`
- New: `  <section class="zone-s11" aria-label="Section 11: Where the Research Points Next" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">`

### Change 17: S12 aria-label
- Type: REPLACE
- Line: 1985
- Current: `  <section class="zone-s12" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">`
- New: `  <section class="zone-s12" aria-label="Section 12: An Invitation, Not a Conclusion" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">`

---

## Step 1.3: role="note" on All Component Blocks (9 instances)

### Change 18: S3 component-block (Density Rhythm)
- Type: REPLACE
- Line: 1180
- Current: `      <div class="component-block">`
- New: `      <div class="component-block" role="note">`

### Change 19: S5 component-block (Combination Rule)
- Type: REPLACE
- Line: 1376
- Current: `      <div class="component-block dense">`
- New: `      <div class="component-block dense" role="note">`

### Change 20: S7 Tension 1 - tension block
- Type: REPLACE
- Line: 1452
- Current: `        <div class="component-block dense">`
- New: `        <div class="component-block dense" role="note">`

### Change 21: S7 Tension 1 - resolution block
- Type: REPLACE
- Line: 1458
- Current: `        <div class="component-block dense resolution">`
- New: `        <div class="component-block dense resolution" role="note">`

### Change 22: S7 Tension 2 - tension block
- Type: REPLACE
- Line: 1468
- Current: `        <div class="component-block dense">`
- New: `        <div class="component-block dense" role="note">`

### Change 23: S7 Tension 2 - resolution block
- Type: REPLACE
- Line: 1474
- Current: `        <div class="component-block dense resolution">`
- New: `        <div class="component-block dense resolution" role="note">`

### Change 24: S7 Tension 3 - tension block
- Type: REPLACE
- Line: 1484
- Current: `        <div class="component-block dense">`
- New: `        <div class="component-block dense" role="note">`

### Change 25: S7 Tension 3 - resolution block
- Type: REPLACE
- Line: 1490
- Current: `        <div class="component-block dense resolution">`
- New: `        <div class="component-block dense resolution" role="note">`

### Change 26: S12 component-block (The Discovery)
- Type: REPLACE
- Line: 2000
- Current: `      <div class="component-block sparse" style="margin-top: var(--space-8);">`
- New: `      <div class="component-block sparse" style="margin-top: var(--space-8);" role="note">`

---

## Step 1.4: role="separator" aria-hidden="true" on All Dividers (11 instances)

### Change 27: S1-S2 divider
- Type: REPLACE
- Line: 1086
- Current: `    <div class="divider-smooth"></div>`
- New: `    <div class="divider-smooth" role="separator" aria-hidden="true"></div>`

### Change 28: S2-S3 divider
- Type: REPLACE
- Line: 1114
- Current: `    <div class="divider-bridge"></div>`
- New: `    <div class="divider-bridge" role="separator" aria-hidden="true"></div>`

### Change 29: S3-S4 divider
- Type: REPLACE
- Line: 1193
- Current: `    <div class="divider-smooth"></div>`
- New: `    <div class="divider-smooth" role="separator" aria-hidden="true"></div>`

### Change 30: S4-S5 divider
- Type: REPLACE
- Line: 1263
- Current: `    <div class="divider-bridge"></div>`
- New: `    <div class="divider-bridge" role="separator" aria-hidden="true"></div>`

### Change 31: S5-S6 divider
- Type: REPLACE
- Line: 1389
- Current: `    <div class="divider-smooth"></div>`
- New: `    <div class="divider-smooth" role="separator" aria-hidden="true"></div>`

### Change 32: S6-S7 divider
- Type: REPLACE
- Line: 1422
- Current: `    <div class="divider-smooth"></div>`
- New: `    <div class="divider-smooth" role="separator" aria-hidden="true"></div>`

### Change 33: S7-S8 divider
- Type: REPLACE
- Line: 1505
- Current: `    <div class="divider-bridge"></div>`
- New: `    <div class="divider-bridge" role="separator" aria-hidden="true"></div>`

### Change 34: S8-S9 divider
- Type: REPLACE
- Line: 1653
- Current: `    <div class="divider-breathing"></div>`
- New: `    <div class="divider-breathing" role="separator" aria-hidden="true"></div>`

### Change 35: S9-S10 divider
- Type: REPLACE
- Line: 1748
- Current: `    <div class="divider-smooth"></div>`
- New: `    <div class="divider-smooth" role="separator" aria-hidden="true"></div>`

### Change 36: S10-S11 divider
- Type: REPLACE
- Line: 1814
- Current: `    <div class="divider-smooth"></div>`
- New: `    <div class="divider-smooth" role="separator" aria-hidden="true"></div>`

### Change 37: S11-S12 divider
- Type: REPLACE
- Line: 1963
- Current: `    <div class="divider-bridge"></div>`
- New: `    <div class="divider-bridge" role="separator" aria-hidden="true"></div>`

---

## Step 1.5: Convert component-block to callout Family (9 instances)

NOTE: These changes overlap with Changes 18-26 (role="note"). Apply BOTH together -- the final class names AND role="note" should both be present. The changes below show the FINAL state after both steps.

### Change 38: S3 "Density Rhythm" -- callout--info
- Type: REPLACE
- Line: 1180-1186
- Current:
```html
      <div class="component-block">
        <div class="component-label">Density Rhythm</div>
        <div class="component-body">
          <p>Each section of a well-designed page carries a unique signature across all six dimensions. A component catalog might run low on spatial density but high on semantic density &mdash; few items per screen, but each one carries concentrated meaning. A stress-test section deliberately pushes all six dimensions high, because proving a system works under pressure requires pressure.</p>
          <p style="margin-top: var(--space-3);">The practical takeaway is that density is a mixing board, not a volume knob. Turning up spatial density while turning down cognitive density creates a section that feels rich without feeling demanding. Turning up temporal density while keeping spatial density low creates a sense of discovery as you scroll. The rhythm emerges from how these six channels move together. The spacing you feel shifting as you scroll through this page is density rhythm in action &mdash; generous here in the opening sections, compressing as the analysis deepens ahead, releasing as conclusions arrive.</p>
        </div>
      </div>
```
- New:
```html
      <div class="callout callout--info" role="note">
        <div class="callout__label">Density Rhythm</div>
        <div class="callout__body">
          <p>Each section of a well-designed page carries a unique signature across all six dimensions. A component catalog might run low on spatial density but high on semantic density &mdash; few items per screen, but each one carries concentrated meaning. A stress-test section deliberately pushes all six dimensions high, because proving a system works under pressure requires pressure.</p>
          <p style="margin-top: var(--space-3);">The practical takeaway is that density is a mixing board, not a volume knob. Turning up spatial density while turning down cognitive density creates a section that feels rich without feeling demanding. Turning up temporal density while keeping spatial density low creates a sense of discovery as you scroll. The rhythm emerges from how these six channels move together. The spacing you feel shifting as you scroll through this page is density rhythm in action &mdash; generous here in the opening sections, compressing as the analysis deepens ahead, releasing as conclusions arrive.</p>
        </div>
      </div>
```

### Change 39: S5 "Combination Rule" -- callout--info
- Type: REPLACE
- Line: 1376-1381
- Current:
```html
      <div class="component-block dense">
        <div class="component-label">Combination Rule</div>
        <div class="component-body">
          <p>The governing rule is straightforward: never stack components with the same temperature or the same velocity back to back without a buffer. A warm callout followed by another warm callout feels cloying. A slow component followed by another slow component feels like slogging through mud. The buffer &mdash; a faster or differently-tempered element between them &mdash; creates the contrast that keeps the reading experience alive.</p>
        </div>
      </div>
```
- New:
```html
      <div class="callout callout--info" role="note">
        <div class="callout__label">Combination Rule</div>
        <div class="callout__body">
          <p>The governing rule is straightforward: never stack components with the same temperature or the same velocity back to back without a buffer. A warm callout followed by another warm callout feels cloying. A slow component followed by another slow component feels like slogging through mud. The buffer &mdash; a faster or differently-tempered element between them &mdash; creates the contrast that keeps the reading experience alive.</p>
        </div>
      </div>
```

### Change 40: S7 Tension 1 - tension -- callout--gotcha
- Type: REPLACE
- Line: 1452-1457
- Current:
```html
        <div class="component-block dense">
          <div class="component-label" style="color: var(--color-coral);">Tension &mdash; Grid vs. Precision</div>
          <div class="component-body">
            <p>Creative layout research found that "breaking the grid" creates visual interest and signals intentional design rather than template output. But an editorial design philosophy demands sharp edges, flat surfaces, and geometric discipline.</p>
          </div>
        </div>
```
- New:
```html
        <div class="callout callout--gotcha" role="note">
          <div class="callout__label" style="color: var(--color-coral);">Tension &mdash; Grid vs. Precision</div>
          <div class="callout__body">
            <p>Creative layout research found that "breaking the grid" creates visual interest and signals intentional design rather than template output. But an editorial design philosophy demands sharp edges, flat surfaces, and geometric discipline.</p>
          </div>
        </div>
```

### Change 41: S7 Tension 1 - resolution -- callout--tip
- Type: REPLACE
- Line: 1458-1463
- Current:
```html
        <div class="component-block dense resolution">
          <div class="component-label">Resolution</div>
          <div class="component-body">
            <p>Break the grid with content positioning, not with decoration. Pull quotes that bleed into margins. Full-width components that span columns unexpectedly. Asymmetric spacing between sections. These create surprise and visual energy without requiring rounded corners, drop shadows, or decorative elements that would compromise the editorial character.</p>
          </div>
        </div>
```
- New:
```html
        <div class="callout callout--tip" role="note">
          <div class="callout__label">Resolution</div>
          <div class="callout__body">
            <p>Break the grid with content positioning, not with decoration. Pull quotes that bleed into margins. Full-width components that span columns unexpectedly. Asymmetric spacing between sections. These create surprise and visual energy without requiring rounded corners, drop shadows, or decorative elements that would compromise the editorial character.</p>
          </div>
        </div>
```

### Change 42: S7 Tension 2 - tension -- callout--gotcha
- Type: REPLACE
- Line: 1468-1473
- Current:
```html
        <div class="component-block dense">
          <div class="component-label" style="color: var(--color-coral);">Tension &mdash; Disclosure vs. Flatness</div>
          <div class="component-body">
            <p>Density research found that depth &mdash; the ability to reveal more information on demand &mdash; is one of six density dimensions. But flat design rejects the visual affordances traditionally used for progressive disclosure: raised buttons, shadow elevation, layered depth cues.</p>
          </div>
        </div>
```
- New:
```html
        <div class="callout callout--gotcha" role="note">
          <div class="callout__label" style="color: var(--color-coral);">Tension &mdash; Disclosure vs. Flatness</div>
          <div class="callout__body">
            <p>Density research found that depth &mdash; the ability to reveal more information on demand &mdash; is one of six density dimensions. But flat design rejects the visual affordances traditionally used for progressive disclosure: raised buttons, shadow elevation, layered depth cues.</p>
          </div>
        </div>
```

### Change 43: S7 Tension 2 - resolution -- callout--tip
- Type: REPLACE
- Line: 1474-1479
- Current:
```html
        <div class="component-block dense resolution">
          <div class="component-label">Resolution</div>
          <div class="component-body">
            <p>Use structural mechanisms instead of visual ones. Expandable sections with flat toggles. Scroll-based reveals where content appears as you move down the page. Click-to-expand interactions rather than hover-to-reveal. The depth exists in the information architecture, not in fake three-dimensionality.</p>
          </div>
        </div>
```
- New:
```html
        <div class="callout callout--tip" role="note">
          <div class="callout__label">Resolution</div>
          <div class="callout__body">
            <p>Use structural mechanisms instead of visual ones. Expandable sections with flat toggles. Scroll-based reveals where content appears as you move down the page. Click-to-expand interactions rather than hover-to-reveal. The depth exists in the information architecture, not in fake three-dimensionality.</p>
          </div>
        </div>
```

### Change 44: S7 Tension 3 - tension -- callout--gotcha
- Type: REPLACE
- Line: 1484-1489
- Current:
```html
        <div class="component-block dense">
          <div class="component-label" style="color: var(--color-coral);">Tension &mdash; Density vs. Breathing Room</div>
          <div class="component-body">
            <p>Density research valued high semantic density for expert users. Documentation pattern research found that whitespace improves retention by 38%. Both are correct &mdash; for different contexts.</p>
          </div>
        </div>
```
- New:
```html
        <div class="callout callout--gotcha" role="note">
          <div class="callout__label" style="color: var(--color-coral);">Tension &mdash; Density vs. Breathing Room</div>
          <div class="callout__body">
            <p>Density research valued high semantic density for expert users. Documentation pattern research found that whitespace improves retention by 38%. Both are correct &mdash; for different contexts.</p>
          </div>
        </div>
```

### Change 45: S7 Tension 3 - resolution -- callout--tip
- Type: REPLACE
- Line: 1490-1495
- Current:
```html
        <div class="component-block dense resolution">
          <div class="component-label">Resolution</div>
          <div class="component-body">
            <p>Vary density by section purpose. Reference sections that experts scan can run dense. Learning sections where readers absorb new concepts need generous whitespace. Stress-test sections deliberately push density to its limits, proving the system works under pressure. The rhythm between these section types IS the density rhythm &mdash; and this page practices what it teaches, running sparse in its opening, dense through this analytical middle, and generous again as it approaches its close.</p>
          </div>
        </div>
```
- New:
```html
        <div class="callout callout--tip" role="note">
          <div class="callout__label">Resolution</div>
          <div class="callout__body">
            <p>Vary density by section purpose. Reference sections that experts scan can run dense. Learning sections where readers absorb new concepts need generous whitespace. Stress-test sections deliberately push density to its limits, proving the system works under pressure. The rhythm between these section types IS the density rhythm &mdash; and this page practices what it teaches, running sparse in its opening, dense through this analytical middle, and generous again as it approaches its close.</p>
          </div>
        </div>
```

### Change 46: S12 "The Discovery" -- callout--essence
- Type: REPLACE
- Line: 2000-2005
- Current:
```html
      <div class="component-block sparse" style="margin-top: var(--space-8);">
        <div class="component-label">The Discovery</div>
        <div class="component-body">
          <p class="closing-essence">That is the real discovery buried in 337 findings: documentation design is not about choosing the right template. It is about building a system that makes the right choices inevitable.</p>
        </div>
      </div>
```
- New:
```html
      <div class="callout callout--essence" style="margin-top: var(--space-8);" role="note">
        <div class="callout__label">The Discovery</div>
        <div class="callout__body">
          <p class="closing-essence">That is the real discovery buried in 337 findings: documentation design is not about choosing the right template. It is about building a system that makes the right choices inevitable.</p>
        </div>
      </div>
```

---

## Step 1.6: Convert section-meta to section-indicator (12 instances)

### Change 47: S1 section-meta
- Type: REPLACE
- Line: 1069
- Current: `      <div class="section-meta">Section 01 &middot; F-Pattern &middot; Sparse Density</div>`
- New: `      <div class="section-indicator">Section 01 &middot; F-Pattern &middot; Sparse Density</div>`

### Change 48: S2 section-meta
- Type: REPLACE
- Line: 1100
- Current: `      <div class="section-meta">Section 02 &middot; Focal &middot; Sparse Density</div>`
- New: `      <div class="section-indicator">Section 02 &middot; Focal &middot; Sparse Density</div>`

### Change 49: S3 section-meta
- Type: REPLACE
- Line: 1135
- Current: `      <div class="section-meta">Section 03 &middot; F-Pattern &middot; Medium Density</div>`
- New: `      <div class="section-indicator">Section 03 &middot; F-Pattern &middot; Medium Density</div>`

### Change 50: S4 section-meta
- Type: REPLACE
- Line: 1207
- Current: `      <div class="section-meta">Section 04 &middot; F-Pattern &middot; Medium Density</div>`
- New: `      <div class="section-indicator">Section 04 &middot; F-Pattern &middot; Medium Density</div>`

### Change 51: S5 section-meta
- Type: REPLACE
- Line: 1285
- Current: `      <div class="section-meta">Section 05 &middot; Dense Grid &middot; Dense</div>`
- New: `      <div class="section-indicator">Section 05 &middot; Dense Grid &middot; Dense</div>`

### Change 52: S6 section-meta
- Type: REPLACE
- Line: 1404
- Current: `      <div class="section-meta">Section 06 &middot; F-Pattern &middot; Medium-Dense</div>`
- New: `      <div class="section-indicator">Section 06 &middot; F-Pattern &middot; Medium-Dense</div>`

### Change 53: S7 section-meta
- Type: REPLACE
- Line: 1444
- Current: `      <div class="section-meta">Section 07 &middot; F-Pattern &middot; Dense</div>`
- New: `      <div class="section-indicator">Section 07 &middot; F-Pattern &middot; Dense</div>`

### Change 54: S8 section-meta
- Type: REPLACE
- Line: 1526
- Current: `      <div class="section-meta">Section 08 &middot; Dense Grid &middot; Dense</div>`
- New: `      <div class="section-indicator">Section 08 &middot; Dense Grid &middot; Dense</div>`

### Change 55: S9 section-meta
- Type: REPLACE
- Line: 1673
- Current: `      <div class="section-meta">Section 09 &middot; F-Pattern &middot; Medium-Dense</div>`
- New: `      <div class="section-indicator">Section 09 &middot; F-Pattern &middot; Medium-Dense</div>`

### Change 56: S10 section-meta
- Type: REPLACE
- Line: 1764
- Current: `      <div class="section-meta">Section 10 &middot; F-Pattern &middot; Medium-Dense</div>`
- New: `      <div class="section-indicator">Section 10 &middot; F-Pattern &middot; Medium-Dense</div>`

### Change 57: S11 section-meta
- Type: REPLACE
- Line: 1835
- Current: `      <div class="section-meta">Section 11 &middot; F-Pattern &middot; Medium Density</div>`
- New: `      <div class="section-indicator">Section 11 &middot; F-Pattern &middot; Medium Density</div>`

### Change 58: S12 section-meta
- Type: REPLACE
- Line: 1988
- Current: `      <div class="section-meta">Section 12 &middot; F-Pattern &middot; Sparse Density</div>`
- New: `      <div class="section-indicator">Section 12 &middot; F-Pattern &middot; Sparse Density</div>`

---

## Step 1.7: Grid Wrapper for S7 Tension/Resolution Pairs

Replace `tension-group` with `tension-pair` for all 3 tension groups. The internal content stays the same (after callout conversion above).

### Change 59: S7 Tension 1 wrapper
- Type: REPLACE
- Line: 1451
- Current: `      <div class="tension-group">`
- New: `      <div class="tension-pair">`

### Change 60: S7 Tension 1 closing tag
- Type: REPLACE
- Line: 1464
- Current: `      </div>`
- New: `      </div>`
- Notes: Closing `</div>` stays the same (class change is on the opening tag only). No action needed -- included for completeness.

### Change 61: S7 Tension 2 wrapper
- Type: REPLACE
- Line: 1467
- Current: `      <div class="tension-group">`
- New: `      <div class="tension-pair">`

### Change 62: S7 Tension 3 wrapper
- Type: REPLACE
- Line: 1483
- Current: `      <div class="tension-group">`
- New: `      <div class="tension-pair">`

---

## Step 1.8: Grid Wrapper for S8 Sequence Blocks

Wrap all 4 sequence blocks (lines 1605-1640) in a `<div class="sequence-grid">`.

### Change 63: Insert sequence-grid opening
- Type: INSERT_BEFORE
- Line: 1605
- Current: `      <div class="sequence-block">`
- New: `      <div class="sequence-grid">`
- Notes: Insert this wrapper BEFORE the first sequence-block

### Change 64: Insert sequence-grid closing
- Type: INSERT_AFTER
- Line: 1640
- Current: `      </div>`
- New: `      </div>`
- Notes: Insert closing `</div>` for sequence-grid AFTER the last sequence-block's closing tag (the `</div>` at line 1640)

---

## Step 1.9: Grid Wrapper for S11 Hypothesis Tables + Remove Group Wrappers

### Change 65: Insert hypothesis-grid opening
- Type: INSERT_BEFORE
- Line: 1841
- Current: `      <h3>Density Explorations</h3>`
- New: `      <div class="hypothesis-grid">`
- Notes: Opens the grid that will contain the first two hypothesis tables (Density + Axis)

### Change 66: Remove hypothesis-group-2 opening wrapper
- Type: REPLACE
- Line: 1877-1878
- Current:
```html
      <!-- Mechanism #12 progressive disclosure: increasing spacing between hypothesis groups -->
      <div class="hypothesis-group-2">
```
- New:
```html
      <!-- Mechanism #12 progressive disclosure: increasing spacing between hypothesis groups -->
```
- Notes: Remove the `<div class="hypothesis-group-2">` but keep the comment

### Change 67: Remove hypothesis-group-2 closing + close hypothesis-grid
- Type: REPLACE
- Line: 1914
- Current: `      </div>`
- New: `      </div>`
- Notes: This `</div>` was closing `.hypothesis-group-2`. It now closes `.hypothesis-grid`. The grid wraps from Density Explorations h3 through end of Axis table.

Actually, this needs to be more precise. Let me restructure:

### Change 66 (revised): Unwrap hypothesis-group-2 and close hypothesis-grid after Axis table
- Type: REPLACE
- Lines: 1877-1914
- Current:
```html
      <!-- Mechanism #12 progressive disclosure: increasing spacing between hypothesis groups -->
      <div class="hypothesis-group-2">
        <h3>Axis Explorations</h3>
        <p>From eye-movement and reading-flow research:</p>

        <div class="table-wrapper" style="margin-top: var(--space-4);">
          <table class="table-light">
            <thead>
              <tr>
                <th>Hypothesis</th>
                <th>What It Tests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Z-pattern layout</td>
                <td>Classic diagonal reading gravity</td>
              </tr>
              <tr>
                <td>F-pattern layout</td>
                <td>Text-heavy scanning optimization</td>
              </tr>
              <tr>
                <td>Bento grid</td>
                <td>Variable-cell modular composition</td>
              </tr>
              <tr>
                <td>Spiral reveal</td>
                <td>Non-linear progressive discovery</td>
              </tr>
              <tr>
                <td>Axis choreography</td>
                <td>Musical transitions between patterns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
```
- New:
```html
      <!-- Mechanism #12 progressive disclosure: increasing spacing between hypothesis groups -->
        <h3>Axis Explorations</h3>
        <p>From eye-movement and reading-flow research:</p>

        <div class="table-wrapper" style="margin-top: var(--space-4);">
          <table class="table-light">
            <thead>
              <tr>
                <th>Hypothesis</th>
                <th>What It Tests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Z-pattern layout</td>
                <td>Classic diagonal reading gravity</td>
              </tr>
              <tr>
                <td>F-pattern layout</td>
                <td>Text-heavy scanning optimization</td>
              </tr>
              <tr>
                <td>Bento grid</td>
                <td>Variable-cell modular composition</td>
              </tr>
              <tr>
                <td>Spiral reveal</td>
                <td>Non-linear progressive discovery</td>
              </tr>
              <tr>
                <td>Axis choreography</td>
                <td>Musical transitions between patterns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
```
- Notes: Remove `<div class="hypothesis-group-2">` opening tag. The closing `</div>` at line 1914 now closes the `hypothesis-grid` that was opened at Change 65.

### Change 67: Unwrap hypothesis-group-3
- Type: REPLACE
- Lines: 1916-1952
- Current:
```html
      <div class="hypothesis-group-3">
        <h3>Combination Explorations</h3>
        <p>From component-chemistry theory:</p>

        <div class="table-wrapper" style="margin-top: var(--space-4);">
          <table class="table-light">
            <thead>
              <tr>
                <th>Hypothesis</th>
                <th>What It Tests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reasoning inside Code</td>
                <td>Complementary role nesting</td>
              </tr>
              <tr>
                <td>Task containing Decision</td>
                <td>Action emerging from deliberation</td>
              </tr>
              <tr>
                <td>File Tree with Callouts</td>
                <td>Editorial spread with annotation</td>
              </tr>
              <tr>
                <td>Essence as background</td>
                <td>Principle framing context</td>
              </tr>
              <tr>
                <td>All callouts as conversation</td>
                <td>Temperature flow across a page</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
```
- New:
```html
      <h3>Combination Explorations</h3>
      <p>From component-chemistry theory:</p>

      <div class="table-wrapper" style="margin-top: var(--space-4);">
        <table class="table-light">
          <thead>
            <tr>
              <th>Hypothesis</th>
              <th>What It Tests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reasoning inside Code</td>
              <td>Complementary role nesting</td>
            </tr>
            <tr>
              <td>Task containing Decision</td>
              <td>Action emerging from deliberation</td>
            </tr>
            <tr>
              <td>File Tree with Callouts</td>
              <td>Editorial spread with annotation</td>
            </tr>
            <tr>
              <td>Essence as background</td>
              <td>Principle framing context</td>
            </tr>
            <tr>
              <td>All callouts as conversation</td>
              <td>Temperature flow across a page</td>
            </tr>
          </tbody>
        </table>
      </div>
```
- Notes: Remove `<div class="hypothesis-group-3">` and its closing `</div>`. Combination table stays full-width outside the grid.

---

## Summary

### TOTAL CHANGES: 67

| Step | Description | Count |
|------|-------------|-------|
| 1.1 | Skip link + main wrapper + roles | 5 |
| 1.2 | ARIA labels on 12 sections | 12 |
| 1.3 | role="note" on 9 component blocks | 9 |
| 1.4 | role="separator" on 11 dividers | 11 |
| 1.5 | component-block to callout (9 instances) | 9 |
| 1.6 | section-meta to section-indicator (12 instances) | 12 |
| 1.7 | tension-group to tension-pair (3 instances) | 3 (+1 no-op = 4) |
| 1.8 | sequence-grid wrapper | 2 |
| 1.9 | hypothesis-grid + unwrap groups | 3 |
| **TOTAL** | | **67** |

### DEDUPLICATION NOTE

Changes 18-26 (role="note") and Changes 38-46 (callout conversion) target the SAME 9 elements. When applying, use the FINAL state from Changes 38-46 which includes BOTH the class rename AND the role="note" attribute. This means the effective unique element modifications are:

- 5 structural (skip link, main, roles on header/footer)
- 12 section aria-labels
- 9 callout conversions (includes role="note")
- 11 divider separator roles
- 12 section-indicator renames
- 3 tension-pair renames
- 2 sequence-grid wrapper insertions
- 3 hypothesis grid operations

**= 57 unique element modifications** (the 9 role="note" changes are subsumed by the 9 callout conversions)

### CSS DEPENDENCIES

After these HTML changes, the following NEW CSS classes must be defined in Phases 2-7:
- `.skip-link` (visually hidden, shown on focus)
- `.callout`, `.callout--info`, `.callout--gotcha`, `.callout--tip`, `.callout--essence`
- `.callout__label`, `.callout__body`
- `.section-indicator` (replaces `.section-meta`)
- `.tension-pair` (replaces `.tension-group`)
- `.sequence-grid` (new grid wrapper)
- `.hypothesis-grid` (new grid wrapper)

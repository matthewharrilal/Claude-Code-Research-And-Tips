# Skill Invocation + TeamCreate Integration Per Stage

**Author:** skill-invoker
**Date:** 2026-02-10
**Source:** 11-final-specification.md (1,541 lines), SKILL-v2.md (625 lines), all stage CLAUDE.md files, provenance chain docs
**Purpose:** Exact instructions for invoking the Perceptual Auditing skill at each pipeline stage (DD, OD, AD, CD, Components)

---

## HOW TO USE THIS DOCUMENT

This document answers: **"Given a specific pipeline stage and exploration, exactly what do I pass to the Perceptual Auditing skill?"**

For each stage, it specifies:
1. Which mode to use and why
2. Which research context to load
3. What the Lock Sheet should contain
4. Exact team architecture
5. Exact file paths for that stage
6. Prompt template adaptations
7. HTTP server and page serving details

**This document is consumed by** the Master Execution Prompt (document 16) and by any Lead agent invoking `/perceptual-audit` during pipeline execution.

---

## 1. UNIVERSAL CONSTANTS (All Stages)

### 1.1 ALWAYS-LOCKED Soul Rules (Never Vary by Stage)

These are injected into EVERY Lock Sheet at EVERY stage, without exception:

| Rule | Value | Source |
|------|-------|--------|
| Sharp edges | `border-radius: 0` | Soul Piece #1 |
| Flat design | `box-shadow: none` | Soul Piece #4 |
| No drop shadows | No `filter: drop-shadow()` | Soul Piece #5 |
| No 2px structural borders | Commit to 3-4px or none | OD-F-AP-001 |
| Opacity always 1 | `opacity === 1.0` on all visual elements | ANTI-PHYSICAL identity |
| Font trio locked | Instrument Serif / Inter / JetBrains Mono | Soul constraint |

**Source file:** `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md`

### 1.2 HTTP Server Protocol (All Stages)

Playwright blocks `file://` protocol. The Lead MUST start an HTTP server before spawning any visual agent.

```bash
# Start from the showcase root (contains explorations/)
cd docs-spa/app/showcase
python3 -m http.server 8080 &

# Verify
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/
# Expected: 200
```

**Base URL pattern per stage:**
| Stage | Exploration Path | URL Pattern |
|-------|-----------------|-------------|
| DD | `explorations/density/DD-{NNN}-{name}.html` | `http://localhost:8080/explorations/density/DD-{NNN}-{name}.html` |
| OD | `explorations/organizational/OD-{NNN}-{name}.html` | `http://localhost:8080/explorations/organizational/OD-{NNN}-{name}.html` |
| AD | `explorations/axis/AD-{NNN}-{name}.html` | `http://localhost:8080/explorations/axis/AD-{NNN}-{name}.html` |
| CD | `explorations/combination/CD-{NNN}-{name}.html` | `http://localhost:8080/explorations/combination/CD-{NNN}-{name}.html` |
| Components | Design system component demos | `http://localhost:8080/DESIGN-SYSTEM/components/demos/` |

### 1.3 Output Directory Convention

```
{exploration-dir}/_perceptual-audit/
  screenshots/
  lock-sheet.md
  findings-*.md
  AUDIT-REPORT.md
```

Per-stage examples:
- DD: `explorations/density/_perceptual-audit/DD-001/`
- OD: `explorations/organizational/_perceptual-audit/OD-001/`
- AD: `explorations/axis/_perceptual-audit/AD-001/`
- CD: `explorations/combination/_perceptual-audit/CD-001/`
- Components: `DESIGN-SYSTEM/components/_perceptual-audit/{component-name}/`

### 1.4 Team Naming Convention

```
pa-{stage}-{exploration-id}-{mode}-{date}
```

Examples:
- `pa-dd-001-standard-20260210`
- `pa-od-003-standalone-20260210`
- `pa-ad-full-standalone-20260210` (multi-page audit)
- `pa-comp-tokens-quick-20260210`

---

## 2. STAGE-SPECIFIC MODE SELECTION

### 2.1 Decision Matrix

| Stage | Default Mode | Escalation Trigger | Rationale |
|-------|-------------|-------------------|-----------|
| **DD** | **Standard** (4 agents) | Escalate to Standalone if any page returns DO-NOT-SHIP | DD pages are simplest (density-only), but still need full Tier 1+2 coverage. Quick is insufficient for first-time auditing. |
| **OD** | **Standard** (4 agents) | Escalate to Standalone if cross-page dialect drift detected (PA-24) | OD pages add organizational complexity on top of DD density. Standard catches most issues. |
| **AD** | **Standalone** (7 agents) | Already maximum mode | AD pages are the most complex (density + organization + axis geometry). Three-layer interaction demands full 28-question battery + adversarial challenge. |
| **CD** | **Standalone** (7 agents) | Already maximum mode | CD combines ALL prior dimensions. Highest interaction complexity. Adversarial agent essential. |
| **Components** | **Quick** (0 agents, inline) | Escalate to Standard if component has layout concerns | Individual components are narrow-scope. Quick mode with PA-01-05 is sufficient. Full pages composed of components get Standard/Standalone. |

### 2.2 Multi-Page vs Single-Page Auditing

| Approach | When | Team Scaling |
|----------|------|-------------|
| **Per-page audit** | Default: one team per exploration page | 1 team of 4 (Standard) or 7 (Standalone) |
| **Batch audit** | When auditing an entire stage (all 6 pages) | 1 team per page, sequential. NOT parallel (Playwright contention). |
| **Cross-page audit** | Standalone mode with PA-24/PA-25 | Single team audits 1 primary page + screenshots of 2-3 siblings for comparison |

**Recommended approach for a full-stage audit:**
1. Audit the WEAKEST page first (lowest score or most complex) in Standalone mode
2. If SHIP verdict: audit remaining 5 pages in Standard mode
3. If DO-NOT-SHIP: fix, re-audit that page, then continue
4. Final cross-page pass: Quick mode on all 6 pages for PA-24/PA-25 only

---

## 3. RESEARCH CONTEXT PER STAGE

### 3.1 DD Stage Research Context

**Research Contextualizer reads:**

| File | Path (relative to showcase/) | Purpose |
|------|------------------------------|---------|
| Soul Discoveries | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | ALWAYS-LOCKED rules |
| Accumulated Identity v1 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.md` | Identity at DD stage (539 lines) |
| R3 Density Dimensions | `DESIGN-SYSTEM/provenance/original-research/R3-DENSITY-DIMENSIONS.md` | PRIMARY research (51 findings) |
| R1 Documentation Patterns | `DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md` | SECONDARY research (28 findings) |
| COMP-F findings | `DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md` | Component constraints |
| DD outbound findings | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | DD-F decisions to LOCK |

**LOCKED decisions at DD:**
- 6 density patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL)
- DD-F-006: Fractal self-similarity at 5 scales
- DD-F-012: Density implies axis preferences
- All COMP-F findings (component structure)

**CHALLENGEABLE at DD:**
- Specific container widths chosen by DD builders
- Section spacing values not cited in research
- Color accent usage within pattern implementation
- Grid column counts within density containers

### 3.2 OD Stage Research Context

**Research Contextualizer reads:**

| File | Path (relative to showcase/) | Purpose |
|------|------------------------------|---------|
| Soul Discoveries | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | ALWAYS-LOCKED |
| Accumulated Identity v1.1 | `knowledge-architecture/ACCUMULATED-IDENTITY-v1.1.md` | Identity at OD stage (577 lines) |
| R1 Documentation Patterns | `DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md` | PRIMARY research for OD (28 findings) |
| R3 Density Dimensions | `DESIGN-SYSTEM/provenance/original-research/R3-DENSITY-DIMENSIONS.md` | Inherited density research (51 findings) |
| DD-F findings | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | LOCKED from DD stage |
| OD-F findings | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | OD-F decisions to LOCK |
| EXT-RESEARCH-REGISTRY | `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md` | Extended research |
| OD Convention Spec | (if exists) | Convention values |
| HANDOFF-DD-TO-OD | `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` | Constraints from DD |
| Prior audit results | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-AUDIT-SYNTHESIS.md` | Previous findings |

**LOCKED decisions at OD (in addition to DD LOCKED):**
- 6 organizational patterns (Conversational, Narrative, Task-Based, Confidence, Spatial, Creative)
- OD-density pairings (e.g., OD-001 = Conversational + PULSE/TIDAL)
- All DD-F findings (inherited)
- OD-F-005: Org-density unification (org pattern IS density expression)
- 17 OD-F findings total

**CHALLENGEABLE at OD:**
- Container widths, column counts, section spacing
- Specific Q&A formatting choices (OD-001)
- Narrative section transition implementations
- Any convention value without research citation

### 3.3 AD Stage Research Context

**Research Contextualizer reads:**

| File | Path (relative to showcase/) | Purpose |
|------|------------------------------|---------|
| Soul Discoveries | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | ALWAYS-LOCKED |
| Accumulated Identity v2 | `knowledge-architecture/ACCUMULATED-IDENTITY-v2.md` | FULL identity (latest) |
| R4 Axis Innovations | `DESIGN-SYSTEM/provenance/original-research/R4-AXIS-INNOVATIONS.md` | PRIMARY research (192 findings) |
| R2 Creative Layouts | `DESIGN-SYSTEM/provenance/original-research/R2-CREATIVE-LAYOUTS.md` | SECONDARY research (27 findings) |
| R1, R3 | `DESIGN-SYSTEM/provenance/original-research/R{1,3}-*.md` | Inherited research |
| DD-F findings | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | Inherited LOCKED |
| OD-F findings | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | Inherited LOCKED |
| AD-F findings | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md` | AD-F decisions to LOCK |
| AD Convention Spec | `knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md` | 822-line convention spec |
| EXT-RESEARCH-REGISTRY | `DESIGN-SYSTEM/provenance/EXT-RESEARCH-REGISTRY.md` | Extended research |
| HANDOFF-OD-TO-AD | `DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md` | Constraints from OD |
| AD Audit Synthesis | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-AUDIT-SYNTHESIS.md` | Previous audit findings |
| AD Synthesis | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` | Cross-exploration analysis |

**LOCKED decisions at AD (in addition to DD + OD LOCKED):**
- 6 axis patterns (Z-Pattern, F-Pattern, Bento Grid, Spiral, Choreography, Compound)
- Axis-OD pairings (e.g., AD-001 Z-Pattern = OD-001 Conversational)
- 5x5 transition grammar (AD-F-024)
- ATTENTION TOPOLOGY meta-equivalence (AD-F-023)
- DD-F-012 ELEVATED: axis IS density (not "serves")
- 28 AD-F findings total
- ANTI-PHYSICAL identity extensions (AD-005 choreography = static structure, not animation)

**CHALLENGEABLE at AD:**
- Container widths within convention bounds
- Grid cell sizing within axis constraints
- Section spacing values not directly research-cited
- Convention values from AD-CONVENTION-SPEC that lack specific R-4 citations
- Builder choices within convention bounds

### 3.4 CD Stage Research Context

**Research Contextualizer reads:**

| File | Path (relative to showcase/) | Purpose |
|------|------------------------------|---------|
| Soul Discoveries | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | ALWAYS-LOCKED |
| Accumulated Identity v3 | `knowledge-architecture/ACCUMULATED-IDENTITY-v3.md` | Latest identity (to be produced by CD) |
| R5 Combination Theory | `DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md` | PRIMARY research (39 findings) |
| ALL prior research (R1-R4) | `DESIGN-SYSTEM/provenance/original-research/R{1-4}-*.md` | Inherited research |
| ALL prior findings | DD-F + OD-F + AD-F outbound findings | All inherited LOCKED decisions |
| CD Convention Spec | (to be created) | CD-specific conventions |
| HANDOFF-AD-TO-CD | `DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | Gate file from AD |

**LOCKED decisions at CD:**
- ALL prior LOCKED decisions from DD, OD, AD (cumulative)
- Density-Org-Axis unification (ATTENTION TOPOLOGY)
- 5x5 transition grammar
- CD-F findings (to be produced)

**CHALLENGEABLE at CD:**
- HOW density + org + axis combine (the combination method)
- Specific combination layout implementations
- Responsive adaptation approaches
- Any convention value without R-5 citation

### 3.5 Component Stage Research Context

**Research Contextualizer reads:**

| File | Path (relative to showcase/) | Purpose |
|------|------------------------------|---------|
| Soul Discoveries | `DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md` | ALWAYS-LOCKED |
| Accumulated Identity (latest) | `knowledge-architecture/ACCUMULATED-IDENTITY-v{latest}.md` | Full identity |
| COMP-F findings | `DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md` | Component constraints |
| BACKBONE | `DESIGN-SYSTEM/BACKBONE.md` | System narrative |
| Token files | `DESIGN-SYSTEM/tokens/*.md` | Locked token values |
| Pattern files | `DESIGN-SYSTEM/patterns/*.md` | Validated patterns |
| Anti-patterns | `DESIGN-SYSTEM/anti-patterns/registry.md` | What to avoid |

**LOCKED decisions for Components:**
- ALL soul rules
- ALL token values (colors, typography, spacing)
- Component structural DNA (Soul Piece #3)
- Callout 2-zone structure (label + body)

**CHALLENGEABLE for Components:**
- Specific spacing within token-valid ranges
- Layout choices within components
- Content formatting within soul constraints

---

## 4. LOCK SHEET TEMPLATES PER STAGE

### 4.1 DD Lock Sheet Template

```markdown
# RESEARCH-LOCK-SHEET.md
# Project: DD-{NNN}-{name}
# Stage: DD (Density Exploration)
# Generated by: Research Contextualizer
# Date: {date}

## ALWAYS-LOCKED (Soul / Identity -- Universal)

| Rule | Lock Source |
|------|------------|
| border-radius: 0 | Soul Piece #1 |
| box-shadow: none | Soul Piece #4 |
| No filter: drop-shadow() | Soul Piece #5 |
| No 2px structural borders | OD-F-AP-001 |
| Opacity === 1 on backgrounds | ANTI-PHYSICAL identity |
| Font trio: Instrument Serif / Inter / JetBrains Mono | Soul constraint |

## LOCKED (Research-Backed Decisions)

| Decision | Lock Source | Research Chain | Auditable Execution Aspects |
|----------|------------|----------------|----------------------------|
| {density-pattern} pattern choice | DD planning | R3-{ID} | Spacing rhythm, section transitions, visual weight |
| Fractal self-similarity at 5 scales | DD-F-006 | R3-023 | How each scale is expressed visually |
| {specific DD-F findings for this page} | DD-F-{ID} | {chain} | {execution aspects} |

## CHALLENGEABLE (Builder-Chosen / Convention Without Citation)

| Decision | Origin | Why Challengeable |
|----------|--------|-------------------|
| Container max-width value | Builder choice | No R3 citation for specific width |
| Column count in grid sections | Builder choice | Research specifies pattern, not column count |
| Section spacing values | Builder choice | No specific R3 citation |
| Color accent distribution | Builder choice | Soul locks palette, not distribution |

## PREVIOUS FINDINGS
(empty for first audit; populated from prior audit results for re-audits)
```

### 4.2 AD Lock Sheet Template (Most Complex)

```markdown
# RESEARCH-LOCK-SHEET.md
# Project: AD-{NNN}-{name}
# Stage: AD (Axis Exploration)
# Generated by: Research Contextualizer
# Date: {date}

## ALWAYS-LOCKED (Soul / Identity -- Universal)

[Same as DD -- see Section 1.1]

## LOCKED (Research-Backed Decisions)

| Decision | Lock Source | Research Chain | Auditable Execution Aspects |
|----------|------------|----------------|----------------------------|
| {axis-pattern} axis choice | AD planning | R4-{ID} | How the axis guides reading flow |
| Paired OD pattern: {OD-name} | AD-OD pairing | OD-F-005 | How org pattern is expressed within axis |
| Paired density: {density-name} | DD-F-012 | R3-{ID} | How density rhythm operates within axis |
| Axis IS density (not "serves") | DD-F-012 ELEVATED | AD-F-{ID} | 3-way unification must be evident |
| ATTENTION TOPOLOGY meta-equivalence | AD-F-023 | Cross-AD | All three dimensions visible as one phenomenon |
| 5x5 transition grammar | AD-F-024 | AD synthesis | Section transitions follow grammar |
| ANTI-PHYSICAL: choreography = static structure | AD-005 | ACCUMULATED-IDENTITY-v2 | No CSS animation for movement metaphors |
| {specific AD-F findings for this page} | AD-F-{ID} | {chain} | {execution aspects} |
| {inherited DD-F findings} | DD-F-{ID} | {chain} | {aspects} |
| {inherited OD-F findings} | OD-F-{ID} | {chain} | {aspects} |

## CHALLENGEABLE (Convention Without Citation)

| Decision | Origin | Why Challengeable |
|----------|--------|-------------------|
| Container max-width from AD-CONVENTION-SPEC | Convention | Check if specific R4 citation exists |
| Column sizing within axis grid | Convention / Builder | Research specifies pattern, not dimensions |
| Section spacing values | Convention / Builder | Unless directly R4-cited |
| {any convention value without finding citation} | AD-CONVENTION-SPEC | No formal finding ID |

## PREVIOUS FINDINGS

| Finding ID | Description | Status |
|------------|-------------|--------|
| {from AD-AUDIT-SYNTHESIS.md} | {description} | FIXED / STILL PRESENT |
```

---

## 5. TEAM ARCHITECTURE PER STAGE

### 5.1 DD Stage: Standard Mode (4 Agents)

```
[Lead]
  |-- Research Contextualizer (Wave 1)
  |     Reads: SOUL-DISCOVERIES, ACCUMULATED-IDENTITY-v1, R3, R1, COMP-F, DD-F
  |     Writes: lock-sheet.md (~5 min)
  |
  |-- Auditor Alpha (Wave 2)
  |     PA-01 through PA-11 at 1440px + 768px
  |     Scroll-through MANDATORY
  |     Writes: findings-alpha.md
  |
  |-- Auditor Beta (Wave 2, +30s stagger)
  |     PA-12 through PA-20 at 1440px + 768px
  |     Scroll-through MANDATORY
  |     Writes: findings-beta.md
  |
  |-- Synthesizer-Validator (Wave 3)
  |     Reads: lock-sheet + both findings files
  |     Writes: AUDIT-REPORT.md
```

**DD-specific prompt adaptation:** Auditors should pay special attention to density rhythm (PA-17: "Is there a visual rhythm?") since density IS the purpose of DD pages. The scroll-through is especially important for DD because density patterns are experienced THROUGH scrolling -- the rhythm of dense-to-sparse or crescendo can only be felt by scrolling through the page section by section at viewport scale.

### 5.2 OD Stage: Standard Mode (4 Agents)

Same team structure as DD with these adaptations:

**Research Contextualizer additions:**
- MUST read OD-F findings + DD-F findings (cumulative)
- MUST read HANDOFF-DD-TO-OD for constraints
- Lock Sheet grows by ~15-20 entries vs DD

**Auditor prompt adaptations:**
- PA-03 (coherence) is critical: OD pages combine density + organization -- "Does this feel like one designer?" tests whether the two dimensions integrate
- PA-12 (visual flow) maps to organizational pattern: does the organization structure CREATE smooth flow?
- PA-16 (consistency): compare paired elements across the page -- e.g., two Q&A blocks in OD-001

### 5.3 AD Stage: Standalone Mode (7 Agents)

```
[Lead]
  |-- Research Contextualizer (Wave 1)
  |     Reads: SOUL-DISCOVERIES, ACCUMULATED-IDENTITY-v2, R4 (PRIMARY),
  |            R2, R1, R3, DD-F, OD-F, AD-F, AD-CONVENTION-SPEC,
  |            HANDOFF-OD-TO-AD, AD-AUDIT-SYNTHESIS, AD-SYNTHESIS
  |     Writes: lock-sheet.md (~8 min, largest Lock Sheet)
  |
  |-- Auditor A: Impression + Emotion + Color (Wave 2)
  |     PA-01, PA-04, PA-05, PA-18, PA-19, PA-20
  |     Three viewports: 1440px, 1024px, 768px
  |     Scroll-through at all three viewports
  |     Writes: findings-impression-emotion.md
  |
  |-- Auditor B: Readability + Responsiveness (Wave 2, +10s)
  |     PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23
  |     Three viewports
  |     Scroll-through at all three viewports
  |     Writes: findings-readability-resp.md
  |
  |-- Auditor C: Spatial + Grid (Wave 2, +20s)
  |     PA-09, PA-10, PA-11, PA-14, PA-15, PA-17
  |     Three viewports
  |     Scroll-through at all three viewports
  |     Writes: findings-spatial-grid.md
  |
  |-- Auditor D: Hierarchy + Coherence + Cross-Page (Wave 2, +30s)
  |     PA-03, PA-12, PA-13, PA-16, PA-24, PA-25
  |     Three viewports + cross-page screenshots (2-3 sibling AD pages)
  |     Writes: findings-hierarchy-coherence.md
  |
  |-- Adversarial Agent (Wave 2, +40s)
  |     PA-26, PA-27, PA-28
  |     Reads Lock Sheet (CHALLENGEABLE section)
  |     Tests at multiple non-standard viewports
  |     Writes: findings-adversarial.md
  |
  |-- Weaver-Synthesizer (Wave 3)
  |     Reads: lock-sheet + all 5 findings + AD-AUDIT-SYNTHESIS (prior)
  |     Writes: AUDIT-REPORT.md
```

**AD-specific prompt adaptations:**
- **Auditor A (PA-20):** "Describe this page's personality in 3 words. Does it match '{axis-pattern} + {org-pattern} + {density-pattern}'?" The 3-way unification means the personality should reflect ALL three dimensions as one.
- **Auditor B (PA-21-23):** AD pages have complex responsive behavior due to axis geometry. The squeeze test is critical -- axis patterns may collapse differently than simpler layouts.
- **Auditor C (PA-15):** Trace the left edges. AD axis patterns create intentional misalignment in some cases (Z-Pattern, Spiral). The auditor must distinguish INTENTIONAL axis-driven misalignment from ACCIDENTAL alignment scatter.
- **Auditor D (PA-24-25):** Cross-page consistency is paramount for AD. All 6 AD pages should feel like siblings despite having different axis patterns. Take screenshots of 2-3 sibling AD pages for comparison.
- **Adversarial (PA-26):** Key challenge target: does the AD-CONVENTION-SPEC's container width work for ALL 6 axis patterns? The 860px convention bottleneck documented in prior audits may resurface with axis geometry.

### 5.4 CD Stage: Standalone Mode (7 Agents)

Same structure as AD with these differences:

**Research Contextualizer:**
- MUST read R5 Combination Theory as PRIMARY
- Lock Sheet is the LARGEST (all cumulative DD-F + OD-F + AD-F + CD-F)
- MUST include combination-specific constraints from HANDOFF-AD-TO-CD

**Adversarial Agent critical focus:**
- PA-26: Do the COMBINATION rules create visual problems? When density + org + axis are combined, do the individual conventions conflict?
- PA-28: Test content variation more aggressively -- combined layouts are most fragile with varying content lengths

### 5.5 Component Stage: Quick Mode (Inline)

```
[Invoking Agent -- performs inline]
  1. Take viewport-only screenshot at 1440px AND 768px
  2. Cold Look at each
  3. PA-01 through PA-05 for each viewport
  4. Verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP
```

**Escalation to Standard:** If the component is complex (e.g., a full layout component, a pattern demo page), escalate to Standard mode with a team of 4.

---

## 6. CROSS-STAGE COORDINATION

### 6.1 Finding Cascade (Stage N Informs Stage N+1)

```
DD Audit Findings
  |
  |--> Feed into OD Lock Sheet as PREVIOUS FINDINGS
  |--> If DD finding was "container too narrow" and FIXED:
  |      OD Lock Sheet: "Container width: [new value], LOCKED (fix validated)"
  |--> If DD finding was STILL PRESENT:
  |      OD Lock Sheet: "Container width: CHALLENGEABLE (known issue from DD)"
  |
OD Audit Findings
  |
  |--> Feed into AD Lock Sheet as PREVIOUS FINDINGS
  |--> OD dialect findings (e.g., "3 dialects: Polished/Functional/Editorial")
  |      become LOCKED context for AD auditors
  |
AD Audit Findings
  |
  |--> Feed into CD Lock Sheet as PREVIOUS FINDINGS
  |--> AD axis-specific failures become constraints for CD combinations
```

### 6.2 Backward Cascade (When Stage N+1 Reveals Stage N Problems)

When an AD audit reveals a problem traceable to a DD convention:

1. **Document in AUDIT-REPORT.md** as "CROSS-STAGE FINDING"
2. **ESCALATE to human** -- never auto-fix a prior stage
3. **Format:**
   ```markdown
   ## CROSS-STAGE FINDING

   Current page: AD-003 (Bento Grid)
   Problem: Grid cells too narrow at 1024px viewport
   Root cause: DD-established container max-width of 860px
   DD convention: [convention spec value]
   AD implication: Bento grid needs more horizontal space than cascading layouts

   Recommendation: Escalate to human for container width review
   ```

### 6.3 Multi-Stage Audit Sequencing

When auditing an entire pipeline from scratch:

```
Phase 1: Audit DD-006 (FRACTAL -- highest-scored, most complex DD)
         Mode: Standard
         Duration: ~30 min

Phase 2: If SHIP -> Audit remaining DD pages (DD-001 through DD-005)
         Mode: Standard (sequential, one at a time)
         Duration: ~150 min (5 x 30 min)

Phase 3: Audit OD-006 (CREATIVE -- crown jewel, most complex OD)
         Mode: Standard
         Duration: ~30 min

Phase 4: If SHIP -> Audit remaining OD pages
         Mode: Standard (sequential)
         Duration: ~150 min

Phase 5: Audit AD-006 (COMPOUND -- uses ALL patterns, most complex AD)
         Mode: Standalone
         Duration: ~60 min

Phase 6: If SHIP -> Audit remaining AD pages
         Mode: Standalone for AD-003/AD-005 (complex), Standard for AD-001/AD-002/AD-004
         Duration: ~180-240 min

Total estimated: ~10-12 hours for full pipeline audit (18 pages)
```

---

## 7. SCROLL-THROUGH ADAPTATIONS PER STAGE

Each stage's pages have different structures that affect how scroll-through auditing works.

### 7.1 DD Pages (Density-Focused)

**Page characteristics:**
- Length: ~10,000-15,000px typical
- Density patterns create variable section densities
- CRESCENDO pages get denser toward the bottom
- GEOLOGICAL pages have distinct strata
- FRACTAL pages have nested repeating patterns

**Scroll-through focus:**
- Watch for density RHYTHM as you scroll -- does the pattern build/recede as intended?
- PULSE pages should alternate dense-sparse-dense-sparse
- CRESCENDO pages should feel like increasing energy as you scroll down
- Dead zones between sections are red flags for density patterns specifically

**Expected screenshot count:** 8-12 per page at 1440px

### 7.2 OD Pages (Organization-Focused)

**Page characteristics:**
- Length: ~12,000-18,000px typical (longer due to organizational structure)
- Q&A sections (OD-001), narrative arcs (OD-002), task clusters (OD-003)
- May have hub-spoke layouts (OD-005) with distinct navigation paths
- OD-006 (Creative) has fractal organization at 5 scales

**Scroll-through focus:**
- Watch for ORGANIZATIONAL coherence as you scroll -- do sections feel logically grouped?
- Q&A pages: do question-answer pairs read naturally when scrolled through?
- Narrative pages: does the story momentum sustain across scroll positions?
- Hub-spoke: does the central hub remain contextually present as you scroll to spokes?

**Expected screenshot count:** 10-15 per page at 1440px

### 7.3 AD Pages (Axis-Focused)

**Page characteristics:**
- Length varies dramatically by axis pattern:
  - Z-Pattern: medium (alternating left-right)
  - F-Pattern: tall (content-heavy, top-down)
  - Bento Grid: wide sections with grid cells
  - Spiral: varies (content flows in spiral logic)
  - Choreography: medium-tall (attention direction changes)
  - Compound: longest (combines multiple axis patterns)
- Complex responsive behavior at different viewports
- Axis geometry may create non-standard scroll experiences

**Scroll-through focus:**
- Z-Pattern (AD-001): Watch eye-path as you scroll -- does the Z repeat naturally?
- F-Pattern (AD-002): Watch typography weight distribution -- does the F-pattern hierarchy hold at each scroll position?
- Bento Grid (AD-003): CRITICAL -- this is the canonical failure mode. Watch for crushed columns at viewport scale.
- Spiral (AD-004): Watch for disorientation -- does the spiral create flow or confusion?
- Choreography (AD-005): Watch for attention direction changes -- smooth or jarring?
- Compound (AD-006): Watch for pattern transitions -- where does one axis hand off to another?

**Expected screenshot count:** 8-20 per page depending on axis pattern length

### 7.4 CD Pages (Combination-Focused)

**Page characteristics:**
- Longest pages (all three dimensions combined)
- Multiple pattern transitions within a single page
- Most complex responsive behavior
- Highest risk of visual dialect drift within a single page

**Scroll-through focus:**
- Watch for COMBINATION SEAMS -- where density, org, and axis patterns transition
- Do the three dimensions feel unified or layered (the ATTENTION TOPOLOGY test)?
- Are combination transitions smooth or do they create visual walls?

**Expected screenshot count:** 15-25 per page at 1440px

### 7.5 Component Pages

**Page characteristics:**
- Short (single component demonstrations)
- Token-controlled styling
- May have multiple variant states

**Scroll-through:** Usually unnecessary -- viewport-only Cold Look is sufficient for components. Exception: pattern demo pages that compose multiple components.

---

## 8. EXACT TEAMCREATE CONFIGURATIONS

### 8.1 Standard Mode TeamCreate (DD/OD)

**Task creation for a single DD or OD page audit:**

```
Task #1: "Produce Lock Sheet for {stage}-{NNN}"
  Owner: contextualizer
  blockedBy: []
  blocks: [#2, #3]
  Description:
    Read {list of research files for stage}.
    Write lock-sheet.md to {output-path}/_perceptual-audit/lock-sheet.md.
    Lock Sheet must have ALWAYS-LOCKED, LOCKED, CHALLENGEABLE, and
    PREVIOUS FINDINGS sections.
    You are a FILE-READING agent: no Playwright, no screenshots.
    MUST write the file using the Write tool.
    MUST mark task as completed using TaskUpdate.

Task #2: "Audit PA-01-11 for {stage}-{NNN}"
  Owner: auditor-alpha
  blockedBy: [#1]
  blocks: [#4]
  Description:
    Visual audit of {target-url} answering PA-01 through PA-11.
    MUST NOT read the Lock Sheet.
    MUST NOT read any source files (.css, .html, .tsx).
    Take Cold Look at 1440px, scroll-through at 1440px, Cold Look at
    768px, scroll-through at 768px.
    Write findings-alpha.md to {output-path}.
    Language restrictions: no CSS property names.
    MUST write the file using the Write tool.

Task #3: "Audit PA-12-20 for {stage}-{NNN}"
  Owner: auditor-beta
  blockedBy: [#1]
  blocks: [#4]
  Description:
    Same structure as #2 but for PA-12 through PA-20.
    Start 30 seconds AFTER auditor-alpha (Playwright stagger).
    Write findings-beta.md to {output-path}.

Task #4: "Synthesize findings and produce verdict for {stage}-{NNN}"
  Owner: synthesizer
  blockedBy: [#2, #3]
  blocks: []
  Description:
    Read lock-sheet.md, findings-alpha.md, findings-beta.md.
    Cross-reference findings against Lock Sheet (sovereignty classification).
    Contamination check: flag any findings with CSS property names.
    Deduplicate and rank findings.
    Cold Look concordance: do auditors' gut reactions agree?
    Final verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP.
    Write AUDIT-REPORT.md to {output-path}.
    MUST write the file using the Write tool.
```

### 8.2 Standalone Mode TeamCreate (AD/CD)

**Task creation for a single AD or CD page audit:**

```
Task #1: "Produce Lock Sheet for {stage}-{NNN}"
  Owner: contextualizer
  blockedBy: []
  blocks: [#2, #3, #4, #5, #6]
  Description:
    Read FULL research chain: Soul Discoveries, ACCUMULATED-IDENTITY-v{latest},
    R{primary} + R{secondary}, all prior stage findings (DD-F, OD-F, AD-F),
    convention spec, HANDOFF file, prior AUDIT-SYNTHESIS.
    Write lock-sheet.md (~8 min).
    MUST write the file using the Write tool.

Task #2: "Audit Impression+Emotion+Color for {stage}-{NNN}"
  Owner: auditor-a
  blockedBy: [#1]
  blocks: [#7]
  Description:
    PA-01, PA-04, PA-05, PA-18, PA-19, PA-20.
    Three viewports: 1440px, 1024px, 768px.
    Scroll-through at all three viewports.
    MUST NOT read Lock Sheet or source files.
    Write findings-impression-emotion.md.

Task #3: "Audit Readability+Responsiveness for {stage}-{NNN}"
  Owner: auditor-b
  blockedBy: [#1]
  blocks: [#7]
  Description:
    PA-02, PA-06, PA-07, PA-08, PA-21, PA-22, PA-23.
    Three viewports with scroll-through.
    Start +10s after auditor-a (Playwright stagger).
    Write findings-readability-resp.md.

Task #4: "Audit Spatial+Grid for {stage}-{NNN}"
  Owner: auditor-c
  blockedBy: [#1]
  blocks: [#7]
  Description:
    PA-09, PA-10, PA-11, PA-14, PA-15, PA-17.
    Three viewports with scroll-through.
    Start +20s after auditor-a.
    Write findings-spatial-grid.md.

Task #5: "Audit Hierarchy+Coherence+Cross-Page for {stage}-{NNN}"
  Owner: auditor-d
  blockedBy: [#1]
  blocks: [#7]
  Description:
    PA-03, PA-12, PA-13, PA-16, PA-24, PA-25.
    Three viewports with scroll-through.
    For PA-24/PA-25: take screenshots of 2-3 sibling {stage} pages.
    Start +30s after auditor-a.
    Write findings-hierarchy-coherence.md.

Task #6: "Adversarial challenge for {stage}-{NNN}"
  Owner: adversarial
  blockedBy: [#1]
  blocks: [#7]
  Description:
    PA-26, PA-27, PA-28.
    READ Lock Sheet (CHALLENGEABLE section specifically).
    Test at non-standard viewports: 900px, 1100px, 500px, 320px.
    For PA-28: resize 1440->320 in 50px increments, screenshot breakage.
    Start +40s after auditor-a.
    Write findings-adversarial.md.

Task #7: "Weave all findings into final verdict for {stage}-{NNN}"
  Owner: weaver
  blockedBy: [#2, #3, #4, #5, #6]
  blocks: []
  Description:
    Read lock-sheet.md + all 5 findings files.
    Read prior AUDIT-SYNTHESIS for comparison.
    Contamination check, cross-reference, deduplicate, rank.
    Cold Look concordance across all auditors.
    Sovereignty classification for every finding.
    Convention challenge synthesis from PA-26/PA-27.
    Fragility assessment from PA-28.
    Fix recommendations ranked by visual impact.
    Final verdict: SHIP / SHIP WITH CONCERNS / DO NOT SHIP.
    Write AUDIT-REPORT.md (~300-500 lines).
    MUST write the file using the Write tool.
```

### 8.3 Fix Team (Optional, Any Stage)

Spawned ONLY if verdict is DO NOT SHIP and `--fix` flag was set:

```
Task #F1: "Fix {file-1} per audit findings"
  Owner: fixer-a
  blockedBy: []  (starts after audit team is fully shut down)
  blocks: [#F-verify]
  Description:
    Read AUDIT-REPORT.md findings for {file-1}.
    Read convention spec for constraints.
    Fix per-file (you own this file exclusively).
    After EVERY fix: take screenshot, answer PA-01 and PA-02.
    "Does this LOOK better or just change a number?"
    Write fix-report-fixer-a.md.

Task #F2: (repeat for each file with findings)

Task #F-verify: "Re-verify fixed pages"
  Owner: re-verifier
  blockedBy: [#F1, #F2, ...]
  blocks: []
  Description:
    Run Quick mode on each fixed page.
    Compare with original audit Cold Look.
    Verdict: CONFIRMED / PARTIAL / FAILED / REGRESSED.
```

---

## 9. PROMPT TEMPLATES PER STAGE

### 9.1 Stage-Specific Prompt Variables

Each prompt template from Section 10 of the final specification uses these variables. Here are their values per stage:

**DD Stage:**
```
{target-id}          = DD-{NNN}-{name} (e.g., DD-001-breathing)
{target-url}         = http://localhost:8080/explorations/density/DD-{NNN}-{name}.html
{output-path}        = explorations/density/_perceptual-audit/DD-{NNN}
{path-to-convention-spec} = (none for DD -- no formal convention spec)
{path-to-identity-doc}    = knowledge-architecture/ACCUMULATED-IDENTITY-v1.md
{path-to-soul-discoveries} = DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md
{path-to-outbound-findings} = DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md
```

**OD Stage:**
```
{target-id}          = OD-{NNN}-{name} (e.g., OD-001-conversational)
{target-url}         = http://localhost:8080/explorations/organizational/OD-{NNN}-{name}.html
{output-path}        = explorations/organizational/_perceptual-audit/OD-{NNN}
{path-to-convention-spec} = (OD convention spec if exists)
{path-to-identity-doc}    = knowledge-architecture/ACCUMULATED-IDENTITY-v1.1.md
{path-to-soul-discoveries} = DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md
{path-to-outbound-findings} = DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md
```

**AD Stage:**
```
{target-id}          = AD-{NNN}-{name} (e.g., AD-003-bento-grid)
{target-url}         = http://localhost:8080/explorations/axis/AD-{NNN}-{name}.html
{output-path}        = explorations/axis/_perceptual-audit/AD-{NNN}
{path-to-convention-spec} = knowledge-architecture/_ad-execution/AD-CONVENTION-SPEC.md
{path-to-identity-doc}    = knowledge-architecture/ACCUMULATED-IDENTITY-v2.md
{path-to-soul-discoveries} = DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md
{path-to-outbound-findings} = DESIGN-SYSTEM/provenance/stage-4-axis-ad/AD-outbound-findings.md
```

**CD Stage:**
```
{target-id}          = CD-{NNN}-{name}
{target-url}         = http://localhost:8080/explorations/combination/CD-{NNN}-{name}.html
{output-path}        = explorations/combination/_perceptual-audit/CD-{NNN}
{path-to-convention-spec} = (CD convention spec, to be created)
{path-to-identity-doc}    = knowledge-architecture/ACCUMULATED-IDENTITY-v3.md
{path-to-soul-discoveries} = DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md
{path-to-outbound-findings} = (CD outbound findings, to be created)
```

### 9.2 Stage-Specific Auditor Focus Annotations

Append these to the standard auditor prompts per stage:

**DD Auditor Alpha addendum:**
```
STAGE-SPECIFIC FOCUS (DD -- Density):
When answering PA-09 (dead space) and PA-11 (margins), pay special
attention to the DENSITY PATTERN. This page uses the {density-pattern}
pattern. Dead space may be INTENTIONAL (breathing room in PULSE,
geological strata in GEOLOGICAL) or PROBLEMATIC (energy loss in
CRESCENDO, broken islands in ISLANDS). Judge whether the space serves
the density intention.

When answering PA-17 (visual rhythm) in the scroll-through, the density
pattern IS the rhythm. Can you feel the {density-pattern} as you scroll?
```

**OD Auditor Beta addendum:**
```
STAGE-SPECIFIC FOCUS (OD -- Organization):
When answering PA-12 (visual flow), the organizational pattern
({org-pattern}) should CREATE the flow. Does the {org-pattern}
structure feel natural as you scroll through?

When answering PA-16 (identical elements), OD pages often have repeating
organizational units (Q&A pairs, narrative chapters, task groups).
Compare these units -- do they maintain visual consistency despite
content variation?
```

**AD Auditor C addendum:**
```
STAGE-SPECIFIC FOCUS (AD -- Axis):
When answering PA-14 (column room) and PA-15 (left edges), this page
uses the {axis-pattern} axis. Some axis patterns INTENTIONALLY create
non-aligned layouts (Z-Pattern alternates left-right, Spiral creates
curved flow). Distinguish between INTENTIONAL axis-driven positioning
and ACCIDENTAL misalignment.

PA-10 (squint test): The axis pattern should create a clear SHAPE when
you squint. Z-Pattern = zigzag, F-Pattern = top-heavy, Bento Grid = mosaic,
Spiral = curve, Choreography = directed flow, Compound = composite.
Does the squinted page match the intended axis geometry?
```

**AD Adversarial addendum:**
```
STAGE-SPECIFIC FOCUS (AD -- Axis Adversarial):
PA-26 CRITICAL TARGET: The AD-CONVENTION-SPEC defines container widths,
grid rules, and axis-specific constraints. For Bento Grid (AD-003)
specifically, test whether the container width supports the grid column
count without word stacking -- this is the canonical failure mode.

PA-27: Would you design a {axis-pattern} layout this way with no
existing code? The 3-way unification (axis=org=density) adds constraint
layers. Are those constraints HELPING the design or FIGHTING it?

PA-28: Axis patterns are MORE fragile at responsive breakpoints than
simpler layouts. Test viewport widths where axis geometry collapses:
the Z-Pattern at narrow widths, the Bento Grid at tablet widths,
the Spiral at any width where the spiral logic breaks.
```

---

## 10. FULL-STAGE AUDIT EXECUTION PROTOCOL

### 10.1 Protocol for Auditing All 6 Pages of One Stage

**Step 1: Start HTTP Server**
```bash
cd /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/docs-spa/app/showcase
python3 -m http.server 8080 &
```

**Step 2: Create Output Directory**
```bash
mkdir -p explorations/{stage-dir}/_perceptual-audit
```

**Step 3: Audit the Most Complex Page First**
| Stage | Start With | Why |
|-------|-----------|-----|
| DD | DD-006 (Fractal) | Highest-scored, most patterns, meta-pattern |
| OD | OD-006 (Creative) | Crown jewel, all patterns, fractal primary |
| AD | AD-006 (Compound) | Combines all axis patterns |
| CD | CD-006 (if follows same convention) | Most complex combination |

**Step 4: Mode for First Page**
- DD/OD: Standard (4 agents)
- AD/CD: Standalone (7 agents)

**Step 5: If First Page Ships -- Audit Remaining 5**
- DD/OD: Standard mode, one page at a time, sequential
- AD: Standalone for AD-003 (Bento Grid -- canonical failure mode) and AD-005 (Choreography -- ANTI-PHYSICAL boundary). Standard for AD-001, AD-002, AD-004.
- CD: Standalone for all (combination complexity demands full battery)

**Step 6: Cross-Page Pass**
After all 6 pages are individually audited:
- Quick mode on all 6 pages focused on PA-24 (family resemblance) and PA-25 (design system identity)
- Compare Cold Look verdicts across all 6 pages
- Look for dialect drift between pages

**Step 7: Synthesis**
Write a stage-level AUDIT-SYNTHESIS.md that:
- Aggregates all individual AUDIT-REPORT.md files
- Identifies cross-page patterns
- Documents any cross-stage findings
- Provides a stage-level SHIP / DO-NOT-SHIP verdict

### 10.2 Estimated Timelines

| Stage | Pages | Mode | Per-Page | Total | Team Size |
|-------|-------|------|----------|-------|-----------|
| DD | 6 | Standard | ~30 min | ~3 hours | 4 agents/page |
| OD | 6 | Standard | ~30 min | ~3 hours | 4 agents/page |
| AD | 6 | Standalone (3) + Standard (3) | ~45 min avg | ~4.5 hours | 4-7 agents/page |
| CD | 6 | Standalone | ~60 min | ~6 hours | 7 agents/page |
| Cross-page | 4 passes | Quick | ~15 min | ~1 hour | 0 agents (inline) |
| **Total** | **24 pages** | Mixed | | **~17.5 hours** | |

---

## 11. INFORMATION ISOLATION MATRIX (All Stages)

| Agent | Can Read | Cannot Read |
|-------|----------|-------------|
| Research Contextualizer | Research files, findings, conventions, identity, soul discoveries, prior audits | Source files (.css, .html, .tsx), screenshots |
| Visual Auditor (any) | Screenshots (via Playwright), their own findings file | Source files, Lock Sheet, other auditors' findings, convention specs |
| Adversarial Agent | Screenshots (via Playwright), Lock Sheet (CHALLENGEABLE section) | Source files, other auditors' findings |
| Synthesizer/Weaver | Lock Sheet, all findings files, prior audit reports | Source files, screenshots (no Playwright) |
| Fixer | Source files, AUDIT-REPORT, convention spec | (can read everything relevant to fixing) |

**Critical firewall:** Visual Auditors NEVER see the Lock Sheet. The temporal firewall ensures perceptual reactions are captured before any research context is introduced. This is universal across all stages.

---

## 12. SKILL ROUTING (CLAUDE.md Integration)

The following routing block should be placed in the skill's CLAUDE.md:

```
/perceptual-audit {target}                        -> Quick mode (default)
/perceptual-audit {target} --mode embedded         -> Embedded (mandatory for builders)
/perceptual-audit {target} --mode quick            -> Quick (60s gut check)
/perceptual-audit {target} --mode standard         -> Standard (4-agent team)
/perceptual-audit {target} --mode standalone       -> Standalone (7-agent team)
/perceptual-audit {target} --mode standalone --fix -> Standalone + fix team
/perceptual-audit {stage} --all                    -> Full-stage audit (all 6 pages)
/perceptual-audit --pipeline                       -> Full pipeline audit (all stages)
```

**Target resolution:**
- `DD-001` or `dd-001` -> resolves to `explorations/density/DD-001-breathing.html`
- `OD-003` or `od-003` -> resolves to `explorations/organizational/OD-003-task-based.html`
- `AD-006` or `ad-006` -> resolves to `explorations/axis/AD-006-compound.html`
- `CD-001` or `cd-001` -> resolves to `explorations/combination/CD-001-{name}.html`

**Stage resolution for `--all`:**
- `DD` -> audits DD-001 through DD-006 (Standard mode each)
- `OD` -> audits OD-001 through OD-006 (Standard mode each)
- `AD` -> audits AD-001 through AD-006 (Standalone for 003/005/006, Standard for others)
- `CD` -> audits CD-001 through CD-006 (Standalone mode each)

---

## 13. ERROR HANDLING AND RECOVERY

### 13.1 Common Failures and Recovery

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Lock Sheet not written within 10 min | File existence check | Lead produces emergency Lock Sheet from convention spec + identity doc |
| Auditor doesn't write findings file | File existence check at 2x expected duration | Respawn with explicit "MUST write file using Write tool" |
| Playwright contention | Agent reports unavailability | Agent WAITS (no source-code fallback). After 3 retries, works from captured screenshots. |
| All auditors return zero concerns | Red flag detection | Spawn adversarial auditor with prompt: "Your predecessors found nothing wrong. Find what they missed." |
| HTTP server not running | Auditor navigation fails | Lead starts server, sends URL to auditors |
| Auditor answers contain CSS properties | Contamination check in synthesis | Flag as CONTAMINATED, exclude from findings, note in report |

### 13.2 Agent Timeout Budget

| Agent | Expected Duration | Timeout |
|-------|-------------------|---------|
| Research Contextualizer (Standard) | 5 min | 10 min |
| Research Contextualizer (Standalone) | 8 min | 15 min |
| Visual Auditor (Standard, 2 viewports) | 12-15 min | 25 min |
| Visual Auditor (Standalone, 3 viewports) | 20-25 min | 40 min |
| Adversarial Agent | 15-20 min | 30 min |
| Synthesizer/Weaver | 8-12 min | 20 min |
| Fixer (per file) | 10-15 min | 25 min |

---

## 14. CHECKLIST: BEFORE INVOKING PERCEPTUAL AUDIT

For any Lead about to invoke the skill, verify:

```
PRE-FLIGHT CHECKLIST:

[ ] HTTP server running at localhost:8080 from showcase/ directory
[ ] Target page loads correctly in browser (curl test)
[ ] Output directory created: {exploration-dir}/_perceptual-audit/{target-id}/
[ ] Know the target stage (DD/OD/AD/CD/Component)
[ ] Know the correct mode (see Section 2.1 decision matrix)
[ ] Have the correct file paths for research context (see Section 3)
[ ] Know which research files the contextualizer must read
[ ] Know the exploration-specific adaptations (see Section 9.2)
[ ] Playwright MCP is available (test with a simple navigation)
[ ] No other agents are currently using Playwright (contention risk)
```

---

*Skill invocation design complete. 2026-02-10.*
*Consumed: 11-final-specification.md, SKILL-v2.md, all stage CLAUDE.md files, provenance chain documents, outbound findings registries, ACCUMULATED-IDENTITY versions.*

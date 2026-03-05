# Lock Sheet — Ceiling Page Perceptual Audit
**Date:** 2026-02-16
**Page:** ceiling-page.html (SYSTEM: Remote Mac Control)
**Mode:** Standalone (Mode 4)

---

## ALWAYS-LOCKED (Soul — Universal, Never Challengeable)

| Rule | Lock Source |
|------|-------------|
| **NEVER use border-radius > 0 on any element** | prohibitions.md #1 — Sharp edges = decisive, confident, print heritage. THE #1 soul constraint. |
| **NEVER use box-shadow on any element** | prohibitions.md #2 — Shadows = fake 3D, dishonest. Flat = print heritage, honest. |
| **NEVER use filter: drop-shadow() on any element** | prohibitions.md #3 — Same principle as box-shadow. Any shadow effect violates anti-physical identity. |
| **NEVER use semi-transparent backgrounds (opacity < 1 on visual elements)** | prohibitions.md #4 — Opacity < 1.0 creates same visual effect as box-shadow. Embedded rgba violations. |
| **NEVER use gradient backgrounds (linear-gradient, radial-gradient, etc.)** | prohibitions.md #5 — Gradients imply light sources, dimensional depth, decorative complexity. |
| **NEVER use pure black (#000000) or pure white (#FFFFFF)** | prohibitions.md #6 — Use warm palette: soft black (#1A1A1A), warm cream (#FEF9F5). Exception: #FFFFFF permitted as `--color-zone-dense` per tokens.css. |
| **NEVER use Instrument Serif for body text** | prohibitions.md #7 — Display ONLY (headings, titles). Inter for body. |
| **NEVER use rounded corners for decoration** | prohibitions.md #8 — Redundant reinforcement of #1. Rounding = "safe/generic" philosophy rejected. |

---

## LOCKED (Research-Backed — Decision Protected, Execution Auditable)

| Decision | Finding Source | Auditable Execution Aspects |
|----------|---------------|----------------------------|
| **Container width: 940-960px** | Middle experiment success + Phase D primary failure mode (4/5 violations) | Measure computed max-width on .page-container. BLOCKING defect if violated. |
| **Border weights: 1px/3px/4px only (2px prohibited)** | prohibitions.md #9 (conditional) — 2px border epidemic (OD-F-AP-001). Too thin for structure, too thick for separator. | Count 2px borders. Zero permitted except OD-004 confidence encoding exception. |
| **Accent borders minimum 4px** | prohibitions.md #10 (conditional) — 4px left-border is KortAI signature. Exception: AD-004 progressive depth (4px/3px/1px). | Measure callout left-border. Must be 4px unless documented exception. |
| **Color palette (8 locked values)** | tokens.css lines 26-33 — Primary: #E83025, Background: #FEF9F5, Text: #1A1A1A, Border: #E0D5C5 | Check all color values. Must match tokens or use var() references. |
| **Typography trinity** | tokens.css lines 68-70 — Display: Instrument Serif, Body: Inter, Code: JetBrains Mono | Verify font-family on h1-h6, p, pre. No substitutions. |
| **Spacing scale (4px base unit)** | tokens.css lines 96-113 — 6 anchors (space-2 through space-20). 4px base unit LOCKED. | Measure padding/margin. Must be multiples of 4px or use var() tokens. |
| **All h3 headings italic** | prohibitions.md #17 — Editorial hierarchy convention. | Check computed font-style on all h3. Must be italic, zero exceptions. |
| **No vertical table borders** | prohibitions.md #13 — Open grid = breathing room. Vertical lines = prison bars. | Inspect table borders. Horizontal rules only. |
| **Warm palette only (no cool grays)** | prohibitions.md #16 — Cool grays = sterile, institutional. Use warm cream, warm tan. | Check background colors. No #F5F5F5 or #E0E0E0. |
| **18 mechanisms (catalog)** | mechanism-catalog.md — Border-Weight Gradient (#1), 2-Zone DNA (#2), Solid Offset (#3), etc. Full list lines 129-765. | Verify which mechanisms deployed. Check semantic justification for each. |
| **5 mechanism categories** | mechanism-catalog.md lines 52-63 — Spatial (S), Hierarchy (H), Component (C), Depth/Emphasis (D), Structure/Navigation (N) | Ceiling tier: per-category minimum (1+ from each). Verify coverage. |
| **Per-category mechanism selection** | mechanism-catalog.md lines 65-90 — Middle: content-structure mapping. Ceiling: metaphor-driven multi-channel coherence. | Audit: do mechanisms reinforce SAME semantic through different CSS channels? |
| **Zone background differentiation tokens** | mechanism-catalog.md lines 359-400 — Sparse: #FEF9F5, Dense: #FFFFFF, Breathing: #FAF5ED, Bedrock: #1A1A1A | Check zone background mappings. Semantic recommendations documented. |
| **Callout semantic differentiation (5 colors)** | semantic-rules.md lines 226-243 — Info/Note: blue, Tip: green, Essence: amber, Gotcha: red, Challenge: purple | Verify callout accent colors. 8 CSS classes → 5 semantic colors. |
| **Inline vs block code threshold** | semantic-rules.md lines 56-95 — ≤1 line → inline, ≥2 lines → block. >50 chars single line → consider block. | Check code formatting. Single-line commands inline, multi-line pre/code block. |
| **Breathing-room zone criteria** | semantic-rules.md lines 142-191 — Position: between sections, ≤3 sentences, ≥48px padding | Identify breathing zones. Measure padding, content length. |
| **CPL (characters per line): 45-80** | Middle experiment boundary + WCAG guidance | Measure content width ÷ font-size ÷ 0.6. Must be 45-80. |
| **Heading spacing ratio ≥ 1.5:1** | Middle experiment compliance (2.0:1) | Measure h2/h3 margin-top / margin-bottom. Ratio must be ≥ 1.5. |

---

## CHALLENGEABLE (Convention/Builder — Open to Perceptual Challenge)

| Decision | Origin | Why Challengeable |
|----------|--------|-------------------|
| **Secure facility metaphor** | Builder 02-build-plan.md — Derived from content analysis (remote Mac control → controlled access) | Metaphor choices are creative decisions. Alternative metaphors possible (industrial pipeline, network topology, etc.). |
| **4 trust zones structure** | Builder plan — Exterior/Lobby/Secured Wing/Operations Center | Zone count and boundaries are compositional judgment. Could be 3 zones (simplified) or 5 zones (more granular). |
| **Zone background assignments** | Builder plan — Z-EXT: #FEF9F5, Z-LOBBY: #FAF5ED, Z-SEC: #FFFFFF, Z-OPS: #FAF5ED | Specific color-to-zone mappings are builder choice within token palette. Could use different progression. |
| **Border-weight zone encoding** | Builder plan — 1px exterior, 3px lobby, 4px secured/ops | Mapping border weights to authorization levels is metaphor-driven. Could encode differently (color instead of weight). |
| **Spacing compression values** | Builder plan — 64px/48px/32px/24px progression | Exact padding values are builder choice within token scale. Compression ratio (37.5%) near floor (40%). |
| **14 mechanisms deployed** | Builder plan mechanism table | Mechanism count within Ceiling natural landing (12-15). Could be 12 or 15. |
| **Reinforcing pairs (3)** | Builder plan — Border-weight + zone backgrounds, spacing + density, border + spacing | Which mechanisms reinforce each other is compositional judgment. |
| **Transition types (7)** | Builder plan transition table — 3 SMOOTH, 2 BRIDGE, 2 BREATHING | Number and placement of transitions is builder discretion. Minimum 3 types required. |
| **Designed moments (5)** | Builder plan DM-1 through DM-5 | Which moments get emphasis is creative judgment. Architecture diagram, security checkpoint, etc. |
| **Purpose-built components (3)** | Builder plan — Trust zone indicator, checkpoint verification block, integration workstation | Tier 3 components are metaphor-specific. Alternative component structures possible. |
| **WS-01/CHECK-01/ZONE vocabulary** | Builder vocabulary generation | Metaphor-derived class names are creative output. Could use different naming conventions. |
| **Footer content** | Builder plan landmark section — Title echo, zone summary, provenance | Specific footer text is builder choice. Content structure (title/summary/attribution) convention. |
| **18px body font size** | Builder CPL calculation — 960px - 96px = 864px ÷ 18px ÷ 0.6 = 80.0 CPL | Font size chosen to meet CPL boundary. Could use 17px or 16px with adjusted padding. |
| **48px horizontal padding** | Builder CPL calculation — var(--space-12) each side | Padding value chosen to meet CPL constraint. Could adjust with font-size trade-off. |
| **Solid offset on 2-3 elements** | Builder plan — Architecture diagram, combination matrix, capability ladder | Which elements get solid offset is emphasis judgment. Mechanism #3 application selective. |
| **Code block syntax highlighting** | Builder inheritance from mechanism #17 | 7 syntax tokens standard. Color assignments conventional. |
| **Table styling (clean, no zebra)** | Builder inheritance from semantic-rules.md — All validated tables use clean styling | Zebra-striping hypothetical, never validated. Clean tables universal convention. |

---

## PREVIOUS FINDINGS (from ceiling experiment verdict)

| Finding ID | Description | Status |
|-----------|-------------|--------|
| **CRITICAL-01** | Container width 2160px instead of 940-960px | BLOCKING DEFECT — Primary Phase D failure mode. Requires fix before shipping. |
| **SEV-2-01** | Header metadata illegibility (light gray on dark gray) | SHOULD-FIX — PA-1 CF-02, PA-2 observation. Increase contrast or size. |
| **SEV-2-02** | Header proportions too heavy (PA-05c PROPORTIONATE fail) | SHOULD-FIX — Both PAs agree. Header dominates first viewport. |
| **SEV-2-03** | Border rendering at fractional pixels (0.75px, 3.75px instead of 1px, 4px) | MITIGABLE — CSS correct, browser sub-pixel artifact. Add transform: translateZ(0). |
| **SEV-3-01** | Zone-dense uses #FEFEFE instead of #FFFFFF | ACCEPTABLE — Token system permits near-white. Not pure white violation. |
| **SEV-3-02** | Spacing compression 37.5% vs 40% floor | ACCEPTABLE — Within planned tolerance (just under floor). |
| **SEV-3-03** | Token compliance 86% vs 90% aspirational | ACCEPTABLE — Exceeds 80% minimum. Raw values justified. |
| **SUCCESS-01** | PA-05 DESIGNED: 3/4 dimensions passed (PROPORTIONATE fail only) | PARTIAL PASS — Designed/Coherent/Polished pass. Proportionate fail (header weight). |
| **SUCCESS-02** | D3 Novelty: 3/3 STRONGLY NOVEL (9/9 perfect score) | EXCEEDED — Blind assessment, highest novelty of all tested pages. |
| **SUCCESS-03** | Better than Middle: 3+ perceptual improvements documented | EXCEEDED — Zone rhythm, context-first orientation, metaphor vocabulary generation. |
| **SUCCESS-04** | Metaphor expression: Observed by all PAs without knowing | PASS — "Secure facility" identified by PA-1, PA-2, comparative auditor. |
| **SUCCESS-05** | Soul compliance: 8/8 | PASS — All absolute prohibitions honored. |
| **SUCCESS-06** | Token compliance: 86% | PASS — Exceeds 80% threshold. |
| **SUCCESS-07** | Heading spacing: 2.0:1 (h2 and h3) | PASS — Exceeds 1.5:1 minimum. |
| **SUCCESS-08** | Landmark completeness: Header + Footer + all zones | PASS — All landmarks present. Middle defect (missing footer) NOT repeated. |
| **FAIL-01** | Inter-agent messaging: 0 messages | FAIL — Threshold ≥5 messages. But NO defects attributed to communication failure. |
| **VERDICT** | SUCCESS WITH CRITICAL CONTAINER VIOLATION | Ceiling-tier composition achieved. Container width blocking for ship. Fix required. |

---

## LOCK SHEET USAGE NOTES

**For Weaver-Synthesizer:**

This Lock Sheet will be provided to you during synthesis. Use it to classify audit findings:

1. **ALWAYS-LOCKED violations** → WOULD-NOT-SHIP (Severity-1)
   - Example: border-radius > 0 found → "Soul violation, blocking"

2. **LOCKED execution violations** → SHOULD-FIX or BLOCKING depending on finding
   - Example: Container 2160px → "Guardrail violation, blocking" (already documented)
   - Example: 2px borders found → "Epidemic violation, should-fix"

3. **CHALLENGEABLE execution concerns** → Subject to perceptual judgment
   - Example: "Zone backgrounds don't feel like authorization progression" → Valid PA finding
   - Example: "14 mechanisms is too many" → Challengeable (within Ceiling range 12-15)
   - Example: "WS-01 vocabulary feels forced" → Valid metaphor critique

4. **PREVIOUS FINDINGS conflicts** → Reconcile with verdict synthesis
   - If PA finding contradicts verdict → Note discrepancy, evaluate evidence
   - If PA finding confirms verdict → Reference finding ID (e.g., "Confirms CRITICAL-01")

**Key Principle:**

Soul rules (ALWAYS-LOCKED) are NEVER challengeable by PA.
Research-backed decisions (LOCKED) protect the DECISION but audit can challenge EXECUTION quality.
Builder choices (CHALLENGEABLE) are fully open to perceptual critique.

---

**Lock Sheet Complete**
**Total Rules Cataloged:** 8 soul + 16 locked + 16 challengeable + 16 previous findings = 56 entries
**Ready for Weaver-Synthesizer phase**

# Prohibitions Provenance Trace

**Tracer:** prohibitions-tracer (Task #4)
**Date:** 2026-03-01
**File audited:** `design-system/compositional-core/identity/prohibitions.md` (419 lines, 22 prohibitions)
**Prior audit:** `ephemeral/tc-skill-audit/12-identity-files-audit.md` (identity-auditor, same date)

---

## Methodology

For each of the 22 prohibitions, I:
1. Read every cited evidence source
2. Verified whether the cited file exists and contains what's claimed
3. Traced the actual origin of the rule
4. Classified as GENUINE / REACTIVE / ARBITRARY / PIPELINE-PROCESS

**Classification key:**
- **GENUINE:** Observed need across multiple explorations, validated by multiple agents/stages
- **REACTIVE:** Created after one specific failure, not derived from cross-exploration evidence
- **ARBITRARY:** No clear evidence trail; the prohibition exists but its provenance is asserted rather than demonstrated
- **PIPELINE-PROCESS:** Enforces pipeline methodology, not design identity

---

## Source File Existence Audit

Before tracing individual rules, a critical finding: **two of the most-cited source files no longer exist in their referenced locations.**

| Cited Source | Exists? | Actual Location | Times Cited |
|---|---|---|---|
| `geometry.md` | YES | `design-system/specification/tokens/geometry.md` | 5 rules |
| `anti-patterns/registry.md` | YES | `design-system/specification/anti-patterns/registry.md` | 12 rules |
| `Identity-lens.md` | NO (archived) | `archive/extraction-epistemology/05-identity-lens.md` | 16 rules |
| `Enablement-lens.md` | NO (archived) | `archive/extraction-epistemology/04-enablement-lens.md` | 2 rules |
| `Lens-manifesto.md` | RELOCATED | `design-system/compositional-core/process/lens-manifesto.md` | 7 rules |
| `soul-constraints.md` | YES | `design-system/compositional-core/identity/soul-constraints.md` | 1 rule |
| `Rigidity-mechanics.md` | NO | File does not exist anywhere | 1 rule |

**Key finding:** Identity-lens.md (the most-cited source, 16 references) is a Phase C extraction intermediate that now lives in `archive/extraction-epistemology/`. It was written by a single agent ("identity-lens") on 2026-02-14 as one of 5 competing lens analyses. It is NOT a primary research document -- it is a SECONDARY ANALYSIS that itself cites the explorations (DD-006, OD-002, CD-002, AD-004, Boris Vault, Gas Town). The prohibitions cite this intermediary as if it were primary evidence.

---

## Rule-by-Rule Provenance Trace

### ABSOLUTE PROHIBITIONS (1-8)

---

### #1: NEVER Use border-radius > 0

**Evidence cited:**
1. `geometry.md` lines 31-32 -- VERIFIED. geometry.md line 75: "Rule: border-radius: 0 on EVERYTHING. No exceptions." Line 77: "Sharp edges = decisive, confident. Rounded = generic."
2. `anti-patterns/registry.md` lines 59-72 -- VERIFIED. Lines 59-72 document "Rounded Corners" anti-pattern with AD forward reference AD-F-013.
3. AD validation re: AD-F-013 -- VERIFIED. AD-004 angular spiral exists because of border-radius: 0. AD-AUDIT-SYNTHESIS confirms 0 border-radius violations across 6 AD explorations.
4. `Identity-lens.md` line 30 -- VERIFIED. Archive file line 30: "border-radius: 0 EVERYWHERE -- Zero rounded corners, always"

**Actual provenance chain:**
- SOUL-DISCOVERIES.md (2026-02-04): border-radius: 0 documented as locked token from perceptual deepening
- geometry.md: Canonicalized as token
- DD/OD/AD explorations: All built with border-radius: 0, validated across 18 explorations
- AD-F-013: border-radius: 0 proven GENERATIVE (angular spiral in AD-004)
- Identity-lens: Synthesized as Tier 1 soul constraint

**Classification: GENUINE**
This is the strongest-provenance rule in the entire document. Multiple independent validation points: perceptual deepening origin, 18-exploration cross-validation, AD finding proving it generative not just restrictive, 24+ audit agents confirming zero violations. The evidence is deep and multi-layered.

---

### #2: NEVER Use box-shadow

**Evidence cited:**
1. `geometry.md` lines 88-95 -- VERIFIED. Lines 91-97 in file: "Rule: box-shadow: none on EVERYTHING. No exceptions. Why? Shadows = fake 3D, dishonest. Flat = print heritage, honest."
2. AD validation re: AD-F-020 -- VERIFIED. AD-AUDIT-SYNTHESIS confirms 0 shadow violations across 6 ADs. AD-005 reinterpreted "visual movement" to "structural movement."
3. `anti-patterns/registry.md` lines 76-89 -- VERIFIED. Lines 76-89: "Drop Shadows" anti-pattern with AD forward references AD-F-014, AD-F-022.
4. `Identity-lens.md` line 31 -- VERIFIED. Line 31: "box-shadow: none EVERYWHERE -- No shadows, no depth illusion"

**Actual provenance chain:** Same as #1 -- SOUL-DISCOVERIES origin, token lock, 18-exploration validation. AD-F-020 adds philosophical grounding (anti-physical identity). AD-AUDIT-SYNTHESIS found actual box-shadow violations in AD-004 (FIX-002) and AD-006 (FIX-003) that had to be fixed, proving the rule catches real problems.

**Classification: GENUINE**
Strong provenance. The fact that AD explorations introduced shadow violations that audit caught demonstrates this is a genuinely needed rule (builders default to shadows without it).

---

### #3: NEVER Use filter: drop-shadow()

**Evidence cited:**
1. `geometry.md` line 151 -- VERIFIED. Line 150: "Drop shadow | NEVER"
2. `Identity-lens.md` line 32 -- VERIFIED. Line 32: "filter: drop-shadow() FORBIDDEN -- No shadow effects"
3. `soul-constraints.md` -- VERIFIED. Soul-constraints.md documents this as corollary of box-shadow.

**Actual provenance:** This is a CSS implementation corollary of #2. box-shadow and filter: drop-shadow() produce the same visual effect through different CSS properties. The prohibition exists because a builder could technically satisfy "no box-shadow" while using filter: drop-shadow() for the same visual result.

**Classification: GENUINE (but redundant with #2)**
The principle (no simulated depth) is genuine. Having a separate rule for a CSS property synonym is pipeline-era gate thinking (each CSS property gets its own checkable rule). The prior audit (12-identity-files-audit.md) also classified this as "IDENTITY (redundant)" and recommended merging into #2.

---

### #4: NEVER Use Semi-Transparent Backgrounds

**Evidence cited:**
1. `anti-patterns/registry.md` lines 329-354 -- VERIFIED. Lines 329-354 document OD-AP-003: "Semi-Transparent Backgrounds (Systemic Audit Gap)." Found in EVERY wave of OD re-enrichment. Binary rule: opacity === 1.0.
2. `Identity-lens.md` line 33 -- VERIFIED. Line 33: "opacity: 1 on all backgrounds -- No transparency tricks"
3. Re-enrichment finding -- VERIFIED. Registry documents "rgba(0,0,0,0.04) on callout inline code and troubleshoot inline code" found in multiple waves.

**Actual provenance chain:**
- OD re-enrichment (2026-02-09): 43 agents, 3 waves. Each wave's builder independently introduced opacity < 1.0 violations.
- OD-AP-003: Formally documented as "Systemic Audit Gap" -- meaning prior audits MISSED these.
- The violations were specifically rgba(0,0,0,0.04) -- so subtle they survived multiple review layers.

**Classification: REACTIVE (justified)**
This rule was created in direct response to the OD re-enrichment finding (OD-AP-003). It exists because builders kept producing semi-transparent backgrounds that auditors kept missing. The evidence is strong but NARROW -- it comes from one stage (OD) and one re-enrichment process. However, the fact that 3 independent waves all produced the same violation suggests it's a genuine builder tendency, not a one-off. The prior audit classified this as "IDENTITY (borderline PIPELINE-ARTIFACT)" noting the CSS-property-level specificity reads as a gate-runner rule.

---

### #5: NEVER Use Gradient Backgrounds

**Evidence cited:**
1. `Identity-lens.md` line 282 -- VERIFIED. Line 282: "Gradient backgrounds -- Violates flat color principle"
2. Anti-patterns registry concept -- PARTIALLY VERIFIED. The registry mentions "neumorphism, glassmorphism, or decorative effects" but does not have a dedicated gradient entry. Gradients are implied but not explicitly cataloged as their own anti-pattern.
3. `Enablement-lens.md` -- NOT VERIFIED. The enablement lens (04-enablement-lens.md) does not contain a specific gradient prohibition. The "flat backgrounds only" claim is inferred.

**Actual provenance:**
- Identity-lens.md lists gradients in the "Anti-Identity" section (line 282) alongside other visual breaks
- SOUL-DISCOVERIES.md does not mention gradients specifically
- geometry.md does not mention gradients
- No exploration was found to violate this -- it's preemptive

**Classification: GENUINE (by inference)**
Gradients imply light sources and dimensional depth, which contradicts the anti-physical identity established by #1 and #2. However, the evidence is THINNER than #1-#2. No exploration violation was discovered; the rule exists by logical extension of the anti-physical principle. It's genuine but derived from philosophical consistency rather than empirical need.

---

### #6: NEVER Use Pure Black (#000) or Pure White (#FFF)

**Evidence cited:**
1. `geometry.md` implied -- WEAKLY VERIFIED. geometry.md does not explicitly prohibit #000/#FFF. It documents token values but doesn't state a prohibition on pure black/white.
2. `Identity-lens.md` line 53 and line 283 -- VERIFIED. Line 53: "Soft black (never pure #000)"; Line 283: "Pure black (#000) or pure white (#FFF) -- Violates warm palette"
3. `anti-patterns/registry.md` lines 113-124 -- VERIFIED. Documents "Gray Backgrounds" anti-pattern: "background: #F5F5F5 or similar cool grays. Sterile, institutional, not editorial. Alternative: Warm cream (#FEF9F5)." This covers cool grays but not pure black specifically.
4. `Lens-manifesto.md` line 266 -- NOT VERIFIED in current file. lens-manifesto.md in its current location (process/lens-manifesto.md) does not contain a line 266 with this text. The file was likely restructured since the prohibition was written.

**Actual provenance:**
- The warm palette (#FEF9F5 background, #1A1A1A text) is in SOUL-DISCOVERIES and tokens
- The PROHIBITION against pure black/white is primarily from Identity-lens.md's analysis
- No exploration violation for pure black/white was documented -- the token system already provides the warm alternatives
- The rule is logical (if the palette is warm, pure extremes break warmth) but the evidence trail is circular: tokens define warm values → identity-lens observes warm values → prohibition says don't use non-warm values

**Classification: GENUINE (weak evidence)**
The warm palette is genuine identity. But the prohibition is REDUNDANT with simply having the token system -- if builders use tokens, they never encounter #000/#FFF. The prohibition exists as a guard against builders ignoring tokens and hardcoding color values. Evidence is weaker than #1-#2 because no violations were discovered; it's preemptive.

---

### #7: NEVER Use Instrument Serif for Body Text

**Evidence cited:**
1. `geometry.md` implied -- NOT VERIFIED. geometry.md does not mention font usage rules (it's about borders and geometry).
2. `Identity-lens.md` lines 71-79 -- VERIFIED. Lines 70-79 document Typography Trinity with specific font assignments.
3. `Lens-manifesto.md` line 265 -- NOT VERIFIED in current file location.
4. `anti-patterns/registry.md` lines 172-188 -- VERIFIED. Lines 172-188: "Sans-Serif for Essence Body" anti-pattern. However, this is about Essence callouts specifically, not general body text. It says Instrument Serif italic should be used for Essence callout body -- which actually CONTRADICTS the prohibition that says "NEVER use Instrument Serif for body text."

**Actual provenance:**
- Typography trinity is in tokens (display font = Instrument Serif, body = Inter)
- All 18 explorations use this trinity consistently
- The rule is identity-genuine: the serif/sans split IS the typographic signature

**Complication:** The anti-patterns registry entry cited (lines 172-188) actually says the OPPOSITE of what prohibition #7 claims. The registry says "Using Inter for Essence Callout body text... Loses reverent, archival quality. Alternative: Instrument Serif italic." This means Instrument Serif IS used for body text in Essence callouts. Prohibition #7 is either incorrectly stated or incorrectly evidenced.

**Classification: GENUINE (contradicted by own evidence)**
The typography trinity is genuine identity. But the absolute prohibition is contradicted by the anti-patterns registry's own recommendation to use Instrument Serif for Essence callout body text. The rule should be "Instrument Serif is for display and Essence callouts, not general body text" -- a nuance the absolute framing loses.

---

### #8: NEVER Use Rounded Corners for Decoration (Redundant with #1)

**Evidence cited:**
1. `anti-patterns/registry.md` lines 59-62 -- VERIFIED. Same entry as #1.
2. `Identity-lens.md` line 280 -- VERIFIED. Line 280: "Rounded corners (border-radius > 0) -- INSTANTLY breaks anti-physical identity"
3. `Lens-manifesto.md` cosmetic vs structural distinction -- NOT VERIFIED. Current lens-manifesto.md does not contain an explicit cosmetic vs structural distinction for border-radius.

**Actual provenance:** The prohibition document itself acknowledges this is "Redundant Reinforcement of #1." The claimed distinct intent ("cosmetic softening vs geometric precision") is asserted but not evidenced. Both rules reduce to the same CSS check: border-radius > 0.

**Classification: PIPELINE-PROCESS (redundant)**
Both the current document and the prior audit agree this is redundant. It exists because pipeline gates needed separate entries for separate failure modes. A single world-description of angular geometry covers both.

---

### CONDITIONAL PROHIBITIONS (9-18)

---

### #9: NEVER Use 2px Borders (except OD-004 confidence encoding)

**Evidence cited:**
1. `anti-patterns/registry.md` lines 282-307 -- VERIFIED. OD-F-AP-001: "2px Border Epidemic" -- 108 CSS declarations, 1000+ computed instances across OD-001 through OD-006. Discovery context: OD granular adversarial audit (2026-02-07), 17 agents. "#1 systemic issue identified."
2. `geometry.md` line 120 -- VERIFIED. Line 120: "The 2px width is deliberately skipped to avoid the 2px epidemic anti-pattern (OD-F-AP-001)"
3. `Identity-lens.md` line 42 -- VERIFIED. Line 40: "NO 2px BORDERS ever -- Forbidden epidemic value"
4. OD granular audit -- VERIFIED via anti-patterns registry documentation.

**Actual provenance chain:**
- OD adversarial audit (2026-02-07): 17 agents discovered 108 CSS declarations with border-width: 2px across all 6 OD explorations
- Classified as "#1 systemic issue" -- not soul violation but hierarchy weakness
- AD-F-014: AD deliberately SKIPPED 2px in border-weight gradient (4px/3px/1px) to avoid recurrence
- Codified into geometry.md and anti-patterns registry

**Classification: GENUINE**
Strong multi-stage evidence. 17 independent audit agents identified the same issue. The 2px epidemic was empirically measured (108 declarations, 1000+ instances). AD stage deliberately designed around it. The OD-004 exception is also genuinely documented (confidence encoding uses 2px semantically). This is one of the best-evidenced prohibitions.

**Note on channeling:** The prior audit flags that the OD-004 exception "channels builders toward one specific pattern." The principle (border weights are semantic) is identity; the specific exception reference is channeling.

---

### #10: NEVER Use Accent Borders < 4px (except progressive depth)

**Evidence cited:**
1. `geometry.md` lines 109-121 -- VERIFIED. Lines 109-120 document 4px minimum, AD-004 progressive border-weight gradient exception.
2. `anti-patterns/registry.md` lines 190-203 -- VERIFIED. Lines 192-203: "Thin Callout Borders -- border-left: 1px or 2px. Too subtle, doesn't create visual anchor. Alternative: 4px minimum."
3. `Identity-lens.md` lines 41-47 -- VERIFIED. Lines 41-47 document 4px left-border as "KortAI's signature accent" with visual evidence across DD-006, OD-002, Boris vault.

**Actual provenance:**
- The 4px callout border appears in ALL explorations (DD, OD, AD, CD)
- Identity-lens independently identified it as signature accent through visual rendering
- The "thin border" anti-pattern was independently documented in registry
- AD-004 exception is specific and documented

**Classification: GENUINE**
Cross-exploration empirical evidence (4px border present in all 18 explorations). Identity-lens verified through visual rendering. The AD-004 exception is genuinely documented but constitutes channeling (prior audit's observation).

---

### #11: NEVER Use Decorative Elements Without Information

**Evidence cited:**
1. `Identity-lens.md` lines 133-139 -- VERIFIED. Lines 133-139: Anti-Complexity Principle. "This principle is ENCODED IN THE CSS. The soul constraints... are the CSS manifestation of anti-complexity."
2. `anti-patterns/registry.md` line 269 -- VERIFIED. Anti-patterns registry mentions "neumorphism, glassmorphism, or decorative effects."
3. `Lens-manifesto.md` line 268 -- NOT VERIFIED in current location.
4. `Enablement-lens.md` principle -- PARTIALLY VERIFIED. Enablement lens focuses on creative need vs friction, implying information-density preference, but does not state an explicit prohibition on decoration.

**Actual provenance:**
- The anti-complexity principle traces to Boris Cherny's engineering philosophy documented in the original content
- Identity-lens synthesized it from visual observation: "Every page uses flat, undecorated rectangles"
- The explorations themselves are the evidence: zero decorative-only elements across 18 HTML files
- No violations were found because the anti-physical identity naturally precludes decoration

**Classification: GENUINE (by observation)**
The principle is genuine -- all 18 explorations demonstrate information-carrying visual elements only. But this is descriptive (what was built) not prescriptive (what was needed to prevent failures). No builder was caught adding gratuitous decoration. The rule is genuine identity description but wasn't created in response to any observed problem.

---

### #12: NEVER Break Grid with Decoration

**Evidence cited:**
1. `anti-patterns/registry.md` lines 163-167 -- VERIFIED. Lines 163-167: "Decorative Grid Breaking -- Breaking grid with decorative elements. Violates flat design. Alternative: Break with CONTENT, not decoration."
2. `Identity-lens.md` line 299 -- PARTIALLY VERIFIED. Line 296-299 list structural breaks including "Floating action buttons -- Breaks flat hierarchy" but this isn't specifically about grid breaking with decoration.
3. "Structural identity concept: page anatomy consistency" -- VAGUE. Not traceable to a specific file or finding.

**Actual provenance:**
- Anti-patterns registry documents the rule
- No exploration violation was found -- the rule is preemptive
- The principle flows from anti-complexity (#11) + flat design philosophy

**Classification: GENUINE (by extension)**
Logical extension of #11 and the anti-physical identity. No empirical violation discovered. The rule is sound but exists by inference rather than observed need.

---

### #13: NEVER Use Vertical Borders in Tables

**Evidence cited:**
1. `geometry.md` lines 130-138 -- VERIFIED. Lines 130-137: "No Vertical Borders in Tables -- Why? Vertical lines = prison bars. Open grid = breathing room."
2. `anti-patterns/registry.md` lines 241-258 -- VERIFIED. Lines 242-258: "Vertical Table Borders" anti-pattern with CSS examples.
3. `Enablement-lens.md` line 80 -- VERIFIED. Line 79: "Table open-grid pattern (no vertical borders, horizontal-only, semantic header row)"

**Actual provenance:**
- geometry.md documents this as a token-level rule
- All explorations with tables use horizontal-only borders
- Enablement-lens independently identified this as a component pattern worth extracting
- Anti-patterns registry provides detailed CSS alternatives

**Classification: GENUINE**
Multi-source verification: geometry tokens, anti-patterns registry, enablement lens, and empirical observation across explorations. All tables in the system use horizontal-only borders. This is a genuine, well-evidenced aesthetic choice.

---

### #14: NEVER Use Hover Lift Effects

**Evidence cited:**
1. `anti-patterns/registry.md` lines 229-237 -- VERIFIED. Lines 232-237: "Hover Lift Effects -- transform: translateY(-4px) on hover. Treats content like buttons, fake 3D. Alternative: No transform."
2. `Identity-lens.md` line 295 -- PARTIALLY VERIFIED. Line 293-296 list structural breaks but "Floating action buttons" is cited, not specifically hover lift.
3. AD-F-020 -- VERIFIED. AD-005 (Choreography) reinterpreted "visual movement" to "structural movement." 20 R-4 findings reinterpreted, 8 SOUL FAIL findings document the boundary.

**Actual provenance:**
- The anti-physical identity forbids physical metaphors (movement through space)
- AD-F-020 provides the strongest evidence: the entire choreography exploration was about redefining "movement" as reader attention flow, not CSS animation
- The "content is editorial, not interactive" distinction is genuine identity

**Classification: GENUINE**
AD-F-020 provides strong philosophical grounding. The anti-patterns registry documents the specific CSS pattern. The rule follows from the anti-physical identity: content is read, not manipulated.

---

### #15: NEVER Use Traffic-Light Color Adjacency

**Evidence cited:**
1. `anti-patterns/registry.md` lines 94-109 -- VERIFIED. Lines 95-109: "Traffic-Light Colors -- Green (#4A9D6B) adjacent to red (#E83025). Kindergarten-level visual language."
2. "Visual break prohibition category (identity-lens.md)" -- NOT VERIFIED. Identity-lens.md lists visual breaks (lines 278-287) but traffic-light adjacency is not specifically listed.

**Actual provenance:**
- Anti-patterns registry documents the rule with a specific HTML example
- No exploration violation was found
- No research finding (R1-R5) mentions color adjacency
- The rule is a specific color layout guideline, not an identity constraint

**Classification: ARBITRARY (with aesthetic justification)**
The anti-patterns registry documents this, but there's no evidence of it ever being a problem in any exploration. The aesthetic reasoning ("kindergarten-level") is judgment, not empirical observation. A builder who understands the warm palette identity would naturally use colors with intention. The prior audit classified this as CHANNELING: "A builder with world-understanding would naturally avoid kindergarten-level color combinations."

---

### #16: NEVER Use Cool-Toned Grays

**Evidence cited:**
1. `anti-patterns/registry.md` lines 113-124 -- VERIFIED. Lines 113-124: "Gray Backgrounds -- background: #F5F5F5 or similar cool grays. Sterile, institutional. Alternative: Warm cream (#FEF9F5)."
2. `Identity-lens.md` line 285 -- VERIFIED. Line 285: "Cool-toned grays -- Violates warm palette"
3. `Lens-manifesto.md` principle -- NOT VERIFIED specifically in current file.

**Actual provenance:**
- The warm palette is documented in SOUL-DISCOVERIES (warm cream #FEF9F5)
- Token system provides warm alternatives
- Anti-patterns registry formally documents cool grays as anti-pattern
- Identity-lens independently verified warm palette through visual rendering

**Classification: GENUINE (corollary of #6)**
This is effectively the same rule as #6 (no pure black/white) extended to grays. The warm palette is genuine identity. Having both #6 and #16 is slightly redundant -- both are about maintaining warm color temperature.

---

### #17: NEVER Use Non-Italic h3 Headings

**Evidence cited:**
1. `anti-patterns/registry.md` lines 207-219 -- VERIFIED. Lines 207-218: "Non-Italic h3 -- h3 with normal font-style. Breaks editorial hierarchy convention. Alternative: All h3 should be italic."
2. "Typography conventions (identity-lens.md)" -- NOT VERIFIED. Identity-lens.md documents the typography trinity but does not mention h3 italic convention specifically.

**Actual provenance:**
- Anti-patterns registry documents this as a convention
- The explorations do use italic h3 headings (observable in CSS)
- However, NO research finding (R1-R5) establishes h3 italic as an identity marker
- NO soul discovery mentions h3 italic
- The rule originated from observation of exploration CSS patterns, not from identity analysis

**Classification: ARBITRARY**
This is the most micro-specific prohibition in the document. Italic h3 is a CONVENTION that emerged from exploration CSS, not an IDENTITY requirement. No research finding, soul discovery, or identity-lens observation establishes h3 italic as essential to KortAI recognition. You could use non-italic h3 and the page would still be recognizably KortAI. The prior audit classified this as CHANNELING: "extremely specific typographic micro-management."

---

### #18: NEVER Use Same-Density Stacking

**Evidence cited:**
1. `anti-patterns/registry.md` lines 155-161 -- VERIFIED. Lines 156-161: "Same Density Throughout -- Uniform spacing/density. Monotonous, no rhythm. Alternative: PULSE, CRESCENDO, BOOKENDS, WAVE."
2. `anti-patterns/registry.md` lines 261-266 -- VERIFIED. Lines 262-266: "Same-Velocity Stacking -- SLOW+SLOW or FAST+FAST adjacent. Monotonous."
3. `Identity-lens.md` lines 116-126 -- VERIFIED. Lines 118-126: "Density Layering (Fractal Self-Similarity) -- The same dense/sparse rhythm at multiple scales."

**Actual provenance:**
- Fractal density rhythm (DD-F-006) is a genuine research finding from R3-023
- The principle (dense/sparse alternation) is genuine identity
- However, expressing it as a PROHIBITION ("never stack same density") rather than a DESCRIPTION ("KortAI pages have fractal density rhythm") is a framing choice
- The named patterns (PULSE, CRESCENDO, BOOKENDS, WAVE) are pipeline-era vocabulary that channels builders

**Classification: GENUINE (identity) but CHANNELING (framing)**
The underlying principle is genuine and well-evidenced (DD-F-006, R3-023, cross-exploration observation). But the prohibition framing + named pattern alternatives constitute channeling. The prior audit agrees: "Density variation IS good composition, but making it a prohibition rather than a world-characteristic channels the builder into specific patterns."

---

### META-PROHIBITIONS (19-22)

---

### #19: NEVER Justify Without Research Provenance

**Evidence cited:**
1. `Identity-lens.md` lines 141-147 -- VERIFIED. Lines 141-147: "Research-First Methodology... Every visual decision is grounded in research findings (R1-R5)."
2. "CLAUDE.md MANDATORY RESEARCH GROUNDING section" -- VERIFIED. design-system/CLAUDE.md has a RESEARCH FINDING COUNTS section.
3. `Lens-manifesto.md` "Document provenance" principle -- PARTIALLY VERIFIED. lens-manifesto.md discusses provenance as a methodology but doesn't state it as a prohibition.

**Actual provenance:**
- This is a PROCESS RULE for how the pipeline operates
- It enforces the provenance chain methodology
- Identity-lens cited this as "philosophical identity" -- but requiring R-citation for CSS decisions is methodology, not visual identity
- No exploration or audit established this as an identity-bearing constraint

**Classification: PIPELINE-PROCESS**
This rule is about how the pipeline works, not what KortAI looks like. A builder who produces a perfect KortAI page without citing R3-023 has not violated KortAI's visual identity. The prior audit agrees: "entirely pipeline-process enforcement."

---

### #20: NEVER Create Patterns Without Tension Derivation

**Evidence cited:**
1. `Rigidity-mechanics.md` lines 915-920 -- NOT VERIFIED. This file does not exist anywhere in the repository. The citation is to a nonexistent source.
2. "Tension-composition skill: Phase 1-3 must happen BEFORE pattern consultation" -- VERIFIED as a skill process, not as identity evidence.
3. `Lens-manifesto.md` M6: "Explicit Divergence Mandate" -- NOT VERIFIED. Current lens-manifesto.md does not contain an "M6" section or "Explicit Divergence Mandate" text at its current location.

**Actual provenance:**
- The tension-composition methodology is a SKILL (located at ~/.claude/skills/tension-composition/SKILL.md)
- Requiring tension derivation before pattern creation is a pipeline PROCESS rule
- The cited primary source (Rigidity-mechanics.md) DOES NOT EXIST
- This rule enforces how the pipeline builds, not what KortAI looks like

**Classification: PIPELINE-PROCESS (with missing citation)**
This is process methodology masquerading as identity prohibition. The primary citation is to a nonexistent file. The prior audit agrees: "pipeline process rule."

---

### #21: NEVER Allow Full Viewport of Contentless Space

**Evidence cited:**
1. Ceiling experiment (2026-02-16): "70-80% of scroll was empty cream void (9/9 Mode 4 auditors flagged)" -- VERIFIED per MEMORY.md records.
2. Mode 4 PA audit: "24 consecutive frames of nothing" -- NOT DIRECTLY VERIFIED (audit output files would be in ephemeral/ceiling-experiment/_perceptual-audit/)
3. Failure analysis root cause -- VERIFIED per MEMORY.md: "Metaphor structural obligations created whitespace as feature."
4. Re-audit of fix team -- VERIFIED per MEMORY.md: CSS-only patches reduced ~1,652px from ~10,000px void.

**Actual provenance:**
- Created 2026-02-16, specifically in response to ceiling experiment failure
- 9/9 Mode 4 auditors flagged whitespace void independently
- The measurement protocol (scroll positions, 30% threshold, consecutive positions) is a gate-runner specification
- No prior exploration (DD, OD, AD, CD) had this problem -- it appeared only in the ceiling experiment

**Classification: REACTIVE**
Classic reactive rule: one experiment failed with massive whitespace voids, rule created to prevent recurrence. The failure was real and dramatic (9/9 auditors flagged it). But this is a quality check that belongs in the gate/PA system, not in identity. "Pages should have content" is not an identity marker -- it's a quality minimum. The prior audit classified this as PIPELINE-ARTIFACT.

The detailed measurement protocol (scroll positions, 30% threshold, consecutive positions) spanning 30 lines of the prohibition is pure gate-runner specification language, not identity description.

---

### #22: NEVER Concentrate Visual Interest in First Third

**Evidence cited:**
1. Ceiling experiment: "Only 1 designed moment at 10% scroll depth (PA-36)" -- VERIFIED per MEMORY.md.
2. Mode 4 PA audit: "Visual novelty dies at 30% scroll depth (PA-47)" -- NOT DIRECTLY VERIFIED (audit output files)
3. Mode 4 PA audit: "Interest level: PEAK -> CLIFF -> FLATLINE (PA-35)" -- NOT DIRECTLY VERIFIED
4. Mode 4 PA audit: "Visual weight concentrated at top, depleted downward (PA-32)" -- NOT DIRECTLY VERIFIED

**Actual provenance:**
- Created 2026-02-16, in response to the same ceiling experiment as #21
- All cited evidence is PA question numbers from one experiment
- No prior exploration (DD, OD, AD, CD) had this problem
- The rule includes a measurement protocol ("designed moment" definition, scroll depth percentage mapping) that is gate-runner specification language

**Classification: REACTIVE**
Same origin as #21 -- one experiment, one failure, one rule. The measurement protocol is pure gate specification. The prior audit classified this as PIPELINE-ARTIFACT and recommended moving it to the PA system. "Visual interest should be distributed across the page" is good composition advice but not an identity-defining characteristic of KortAI.

---

## Summary Classification Table

| # | Name | Classification | Evidence Strength | Key Issue |
|---|------|---------------|-------------------|-----------|
| 1 | No border-radius > 0 | **GENUINE** | Strong | Multi-stage, multi-source, AD-F-013 proves generative |
| 2 | No box-shadow | **GENUINE** | Strong | Multi-stage, AD-F-020 philosophical grounding |
| 3 | No filter: drop-shadow | **GENUINE (redundant)** | Medium | CSS synonym of #2, same principle |
| 4 | No semi-transparent backgrounds | **REACTIVE (justified)** | Medium | OD-AP-003, 3 independent re-enrichment waves |
| 5 | No gradient backgrounds | **GENUINE (inferred)** | Weak | No violation found, logical extension of anti-physical |
| 6 | No pure black/white | **GENUINE (weak)** | Weak | Token system already prevents this |
| 7 | Serif for display only | **GENUINE (contradicted)** | Medium | Anti-patterns registry contradicts by recommending serif for Essence body |
| 8 | No rounded corners (decoration) | **PIPELINE-PROCESS** | N/A | Redundant duplicate of #1 |
| 9 | No 2px borders | **GENUINE** | Strong | 17-agent audit, 108 declarations, AD designed around it |
| 10 | No accent < 4px | **GENUINE** | Strong | Cross-exploration signature, identity-lens verified |
| 11 | No decorative elements | **GENUINE** | Medium | Observation-based, no violations found |
| 12 | No decorative grid breaks | **GENUINE (extension)** | Weak | Logical extension of #11, no violations found |
| 13 | No vertical table borders | **GENUINE** | Strong | Multi-source: geometry, registry, enablement, observation |
| 14 | No hover lift | **GENUINE** | Strong | AD-F-020 philosophical grounding |
| 15 | Traffic-light adjacency | **ARBITRARY** | Weak | No violation found, aesthetic judgment only |
| 16 | No cool grays | **GENUINE** | Medium | Corollary of #6 warm palette |
| 17 | h3 must be italic | **ARBITRARY** | Weak | Convention from explorations, not identity requirement |
| 18 | No same-density stacking | **GENUINE + CHANNELING** | Medium | Principle genuine (DD-F-006), framing channels |
| 19 | Research provenance required | **PIPELINE-PROCESS** | N/A | Process methodology, not identity |
| 20 | Tension derivation required | **PIPELINE-PROCESS** | N/A | Process rule, cited source doesn't exist |
| 21 | No viewport-height voids | **REACTIVE** | Medium | Ceiling experiment (2026-02-16), gate-runner language |
| 22 | No top-heavy visual interest | **REACTIVE** | Medium | Same ceiling experiment, gate-runner language |

## Aggregate Counts

| Classification | Count | Rules |
|---|---|---|
| **GENUINE (strong evidence)** | 8 | #1, #2, #9, #10, #13, #14, plus weaker: #11, #16 |
| **GENUINE (weak/inferred evidence)** | 4 | #5, #6, #7 (contradicted), #12 |
| **GENUINE + CHANNELING** | 1 | #18 |
| **GENUINE (redundant)** | 1 | #3 (merge into #2) |
| **REACTIVE** | 3 | #4 (justified), #21, #22 |
| **ARBITRARY** | 2 | #15, #17 |
| **PIPELINE-PROCESS** | 3 | #8 (redundant #1), #19, #20 |

## Cross-Reference with Prior Audit

The prior audit (12-identity-files-audit.md) classified rules using a different taxonomy. Here's the mapping:

| Rule | Prior Audit | This Audit | Agreement? |
|---|---|---|---|
| 1 | IDENTITY | GENUINE | YES |
| 2 | IDENTITY | GENUINE | YES |
| 3 | IDENTITY (redundant) | GENUINE (redundant) | YES |
| 4 | IDENTITY (borderline) | REACTIVE (justified) | PARTIAL -- both flag it |
| 5 | IDENTITY | GENUINE (inferred) | YES |
| 6 | IDENTITY | GENUINE (weak) | PARTIAL -- I flag weak evidence |
| 7 | IDENTITY | GENUINE (contradicted) | PARTIAL -- I found the contradiction |
| 8 | PIPELINE-ARTIFACT | PIPELINE-PROCESS | YES |
| 9 | IDENTITY + CHANNELING | GENUINE | YES |
| 10 | IDENTITY + CHANNELING | GENUINE | YES |
| 11 | IDENTITY | GENUINE | YES |
| 12 | IDENTITY | GENUINE (extension) | YES |
| 13 | IDENTITY | GENUINE | YES |
| 14 | IDENTITY | GENUINE | YES |
| 15 | CHANNELING | ARBITRARY | ALIGNED (both recommend removal) |
| 16 | IDENTITY | GENUINE | YES |
| 17 | CHANNELING | ARBITRARY | YES |
| 18 | CHANNELING | GENUINE + CHANNELING | PARTIAL -- I preserve the genuine principle |
| 19 | PIPELINE-ARTIFACT | PIPELINE-PROCESS | YES |
| 20 | PIPELINE-ARTIFACT | PIPELINE-PROCESS | YES |
| 21 | PIPELINE-ARTIFACT | REACTIVE | ALIGNED (both recommend relocation) |
| 22 | PIPELINE-ARTIFACT | REACTIVE | ALIGNED (both recommend relocation) |

**Agreement rate: 18/22 aligned, 4/22 partial divergence.**
The 4 partial divergences are matters of degree, not fundamental disagreement.

---

## Key Findings

### 1. Evidence Citation Integrity Issues

- **Identity-lens.md** (16 citations): This is an ARCHIVED intermediate analysis from Phase C extraction, written by a single agent. Citing it as primary evidence is circular -- it's an interpretation of the explorations, not an independent source. Most of its content traces back to the same explorations the other evidence sources cite.

- **Lens-manifesto.md** (7 citations): Line numbers cited don't match the current file location. The file was restructured or moved since prohibitions.md was written.

- **Rigidity-mechanics.md** (1 citation, rule #20): FILE DOES NOT EXIST. The prohibition cites a source that cannot be verified.

- **Geometry.md "implied"** (2 citations, rules #6, #7): "Implied" is not evidence. geometry.md documents border/shadow tokens, not font or color prohibitions.

### 2. The Prohibition Document Has Three Distinct Categories Mixed Together

**Category A -- Visual Identity (rules #1-#7, #9-#14, #16):** Genuine design system identity. These describe what KortAI looks like and feels like. They belong in an identity document.

**Category B -- Compositional Guidance (rules #15, #17, #18):** Design opinions about color adjacency, heading style, and density variation. These are guidance for good composition within the KortAI system, not identity-defining constraints. They belong in a guidelines document.

**Category C -- Process Rules (rules #8, #19, #20, #21, #22):** Pipeline methodology (provenance, tension derivation) and reactive quality checks (void prevention, visual interest distribution). These belong in the pipeline/gate system, not identity.

### 3. Redundancy

- #3 is a CSS synonym of #2 (both prohibit simulated depth)
- #8 is explicitly labeled redundant with #1
- #16 is a corollary of #6 (both about warm color temperature)

Removing these redundancies reduces the ABSOLUTE prohibitions from 8 to 6.

### 4. The Strongest-Evidenced Rules

The rules with the deepest provenance chains (multiple stages, multiple independent agents, empirical measurements):
1. **#1 (border-radius: 0):** Perceptual deepening → tokens → 18 explorations → AD-F-013 generative proof → 24+ audit agents
2. **#9 (no 2px borders):** 17-agent OD audit → 108 declarations measured → AD designed around it → geometry tokens updated
3. **#2 (box-shadow: none):** Same chain as #1 plus AD-F-020 philosophical grounding plus actual violations caught in audit (FIX-002, FIX-003)

### 5. The Weakest-Evidenced Rules

Rules where the evidence is circular, nonexistent, or purely preventive:
1. **#20 (tension derivation):** Cited source DOES NOT EXIST
2. **#15 (traffic-light adjacency):** No violation ever observed, aesthetic judgment only
3. **#17 (h3 italic):** Convention from exploration CSS, no identity analysis supports it
4. **#5 (no gradients):** Logical extension but no exploration ever used gradients
5. **#6 (no pure black/white):** Token system already prevents this; prohibition is redundant guard

---

**END PROVENANCE TRACE**

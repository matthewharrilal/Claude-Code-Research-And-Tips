# Dimension 6: Synthesizer Merge Quality

## Audit Scope

Evaluates the SYNTHESIZER agent's merge quality across 2 real pipeline runs:
- **Molly Panopticon** (`ephemeral/builds/molly-panopticon-extraction-2026-03-02/`)
- **Yegge Gas Town** (`ephemeral/builds/yegge-gas-town-extraction-2026-03-02/`)

Input files per run: TC brief, 5 specialist outputs (S1-S5), producing 3 package files (_package-pass-1/2/3.md).

Reference: synthesizer prompt at `~/.claude/skills/research-compose/prompts/synthesizer-prompt.md` (654 lines).

---

## A. Merge Quality: Genuine Merge vs Concatenation

### Verdict: GENUINE MERGE (both runs)

Evidence of true synthesis (not just stacking specialist outputs):

**Molly Run — Documented Merge Actions (Pass 1 Agent Log):**
- Merged S1 geological model (R3-Insight-5) + S2 validated DD-F-004 + S3 DD-004 case study into a SINGLE "Background Arc Progression" mechanism. Three specialist perspectives collapsed into one coherent mechanism with unified CSS.
- Merged S1 typography findings (R2-5.1, R1-5.2, R4-3.1) + S2 CRESCENDO validation into a SINGLE "Five-Voice Typography System" mechanism.
- Merged S1 spacing findings (R5-Q2, R1-1.1) + S2 CRESCENDO two-level model + S3 DD-004 compression gradient into a SINGLE spacing mechanism.

**Yegge Run — Documented Merge Actions (Pass 1 Agent Log):**
- Merged S1 R3-Insight 5 + S2 DD-F-004 chain + S3 DD-004 case study into Mechanism 1 (Geological Stratification).
- Merged S1 R2-4.1 + S2 DD-F-004->AD-F-014 chain + S3 OD-004 case study into Mechanism 2 (Border-Weight).
- Merged S1 R5-T2 + S3 CD-001 velocity interleaving into Mechanism 4.
- S1 and S2 fractal findings merged into Mechanism 5.

**Structural Evidence of Merge (beyond agent log claims):**
- Each mechanism entry cites findings from 2-4 specialists in a single "Finding basis" line (e.g., molly Mechanism 2.1: "R3-Insight-5, R3-Insight-24, Validated DD-F-004, DD-004/OD-004/OD-006 convergence"). This is not concatenation — it is cross-referencing.
- CSS implementations unify insights from different specialists into a single code block. Example: molly's five-voice typography system synthesizes S1's finding that typography is the primary mechanism, S2's CRESCENDO validation, and the TC brief's three-typeface rule into one unified CSS block with five voice classes.
- The zone architecture in Pass 2 (Section 4) maps content sections to zones using language from ALL sources: TC brief (metaphor zones), S1 (findings per zone), S3 (case study CSS adapted per zone), S4 (constraints applied per zone), S5 (protocol patterns for transitions).

**Conflict Resolution Quality:**
- Molly: S1 rated fractal at 5 scales; S3 rejected DD-006 fractal as non-primary. Synthesizer resolved via TC brief: deployed at 4 scales. This is the correct hierarchy application (TC brief > validated > specific > generic).
- Molly: S2 identifies PULSE as relevant; S1 does not list it. Resolved: PULSE manifests intrinsically through content alternation — no separate mechanism needed. This demonstrates judgment, not just rule application.
- Yegge: S1 rated bento grid HIGH for 8 Roles; S2 validated border-weight gradient as PRIMARY hierarchy mechanism. Resolved: border-weight is structural mechanism; bento grid is layout choice deployed in Pass 2 zone recipe. Both serve the metaphor from different angles. Nuanced resolution that preserves both contributions.

**Lost Insights — Not Observed:**
I checked whether any specialist HIGH finding was silently dropped. Both agent logs document exactly which findings were included and which were omitted with rationale:
- Molly Pass 2: "20 of 24 HIGH available — top 20 by validation strength and zone specificity. 4 omitted: R1-3.1 (subsumed), R1-5.3 (not applicable), R4-4.1 (derivation included in type scale), R5-N1 (universal, not content-specific)."
- Yegge Pass 2: "24 of 25 HIGH findings from S1 — top 24. R4-Section 3.2 (cinematic patterns) merged into zone recipes rather than separate finding entry."
- Case study routing is similarly documented: non-included case studies are noted as merged into mechanisms rather than dropped.

### Score: 9/10

Deducted 1 point because: the "merge" could be deeper in Pass 2 findings tables. While mechanisms are genuinely merged, the findings tables in Section 3 sometimes feel like zone-sorted specialist output rather than deeply synthesized insights. The VALIDATED findings are genuine synthesis; the HIGH findings by zone are closer to sorted-and-formatted specialist entries with CSS additions. This is a minor concern — the format requirement (table with columns) encourages this structure.

---

## B. Content Specificity Test

### Verdict: HIGH SPECIFICITY (both runs)

The swap test: could you give the molly packages to the yegge builder and vice versa? **No. They would be unusable.**

**Molly-Specific Elements (would be meaningless for yegge):**
- Metaphor: "cartographic survey station" — every zone named for cartographic concepts (Cartouche, Survey Grid, Marginal Annotations, Legend, Terra Incognita)
- CSS class names: `.zone--cartouche`, `.zone--grid`, `.zone--annotations`, `.zone--terra`, `.voice-cartographer`, `.voice-surveyor`, `.voice-fieldworker`, `.voice-annotator`
- Custom properties: `--zone-parchment`, `--zone-drafting`, `--zone-fieldwork`, `--zone-bedrock`
- Content mapping: "Part I (Philosophy of Self-Legibility) -> CARTOUCHE", "Parts VI-VII -> MARGINAL ANNOTATIONS"
- Anti-patterns risk-profiled for THIS content: "Callout Cacophony — HIGH — This content has 7 key blockquotes (Part XIII), 4 philosophical warnings (Part VI)..."
- Propositions reference specific content: "The annotations should feel like a different hand" (Parts VI-VII), "The legend should decode the map" (Part XIII's 7 quotes)

**Yegge-Specific Elements (would be meaningless for molly):**
- Metaphor: "industrial control tower" — zones named for tower floors (Overseer Floor, Operations Core, Bedrock, Philosophical Plateau, Factory Floor, Return to Surface)
- CSS class names: `.zone--overseer`, `.zone--operations`, `.zone--bedrock`, `.zone--philosophical`, `.zone--factory`, `.zone--resolution`, `.role--town-level`, `.role--rig-level`, `.role--worker-level`
- Custom properties: `--tower-surface`, `--tower-coordination`, `--tower-execution`, `--tower-bedrock`
- Content mapping: "8 Roles Architecture -> Zone 2 (Operations Core)", "Beads Memory System -> Zone 3 (Bedrock)"
- Anti-patterns: "Uniform Role Cards — HIGH — The 8 Roles section has 8 roles with identical structural properties"
- Propositions reference specific content: "The 8 Roles section has visible hierarchy, not uniform cards", "The Beads dark zone feels like the deepest floor"

**Specificity Depth:**
Both synthesizers go beyond surface vocabulary. The anti-pattern risk profiles are genuinely content-specific — molly's "Callout Cacophony" risk is HIGH because "this content has 7 key blockquotes (Part XIII), 4 philosophical warnings (Part VI), 4 anti-pattern subsections (Part X)." Yegge's "Uniform Role Cards" risk is HIGH because "the 8 Roles section has 8 roles with identical structural properties." These are not generic warnings — they name specific content sections, count specific elements, and provide CSS mitigations targeting the actual content.

The zone recipes in Section 4 are entirely content-driven. Molly's Zone 3 recipe: "Content: Goodhart's Law warning, Anthropic trade-off, Flutterwhat critique. Density: MODERATE — breathing opens (48-56px), wider margins signal 'a different voice.'" Yegge's Zone 3 recipe: "Content: 3-layer memory model (Hot/Warm/Cold), retrieval diagrams, code blocks. Deploy background: #1A1A1A dark bedrock — the data plane beneath workers."

### Score: 10/10

No generic or interchangeable content detected. Every section is saturated with content-specific references.

---

## C. Rotation Implementation

### Verdict: CORRECT (both runs)

**Section Assignment:**
| Pass | Required Sections | Molly | Yegge |
|------|------------------|-------|-------|
| Pass 1 (FOUNDATIONS) | 0, 1, 2, 9 | 0, 1, 2, 9 | 0, 1, 2, 9 |
| Pass 2 (ENRICHMENT) | 3, 4, 5 | 3, 4, 5 | 3, 4, 5 |
| Pass 3 (HARDENING) | 6, 7, 8 | 6, 7, 8 | 6, 7, 8 |

Both runs split sections correctly across all 3 files.

**Self-Containment:**
- Each file opens with pass purpose: "You are building the initial HTML skeleton" (Pass 1), "You are ENRICHING an existing HTML page" (Pass 2), "This is the FINAL pass before perceptual audit" (Pass 3).
- Each file includes a "Soul reminder" line restating the critical constraints (border-radius: 0, box-shadow: none, 3-category borders, container 960px, font trinity). This prevents a builder from needing Pass 1 to know the rules while reading Pass 3.
- Pass 1 includes the full soul checklist (Section 0) and consumption protocol (Section 9) — the builder's orientation material.
- Pass 2 opens with "The structure from Pass 1 is your foundation" (or "The 6-zone structure from Pass 1") — establishing context without requiring the builder to have read Pass 1.
- Pass 3 opens with "The build should already have [X] zones, correct backgrounds, mechanisms deployed, findings applied zone-by-zone, and case study CSS integrated" — establishing expectations without requiring Pass 1 or 2.

**Line Count vs Quality Floor:**

| File | Floor | Molly Actual | Yegge Actual | Status |
|------|-------|-------------|-------------|--------|
| Pass 1 | 130-170 | 295 | 311 | EXCEEDS |
| Pass 2 | 130-180 | 224 | 210 | EXCEEDS |
| Pass 3 | 110-150 | 220 | 267 | EXCEEDS |
| Total | 400-600 | 739 | 788 | EXCEEDS |
| No file below 100 | 100 min | 220 min | 210 min | PASS |

All files significantly exceed line count floors. The total is 123-188 lines above the 600-line ceiling. This is a quality floor, not a ceiling — exceeding is acceptable. However, the consistent overshoot (23-32% above ceiling) suggests the synthesizer may be under-compressing. The prompt says "400-600 lines" which reads as a target range, not a minimum. This warrants monitoring.

### Score: 8/10

Section splits and self-containment are perfect. Deducted 2 points for consistently exceeding the stated line range (400-600). While more content is not inherently bad, a 23-32% overshoot on every run suggests the synthesizer is not respecting the stated budget. If this were a ceiling, it would be a violation. The prompt phrasing is ambiguous — "Total across 3 files: 400-600 lines" reads as a range, suggesting 600 is the upper bound. Both runs exceed it substantially.

---

## D. Recipe vs Checklist Format

### Verdict: RECIPE-DOMINANT (both runs)

**Verb Counts (approximate, across all 3 files):**

| Category | Molly | Yegge |
|----------|-------|-------|
| Recipe verbs (READ, INTERNALIZE, STUDY, BUILD, DEPLOY, APPLY, MAP, COMPOSE, ABSORB, SET, INSERT) | ~102 | ~90 |
| Directive verbs (SCAN, WRITE) | ~9 | ~9 |
| Checklist verbs (Verify, Ensure, Must be, Check) | ~13 | ~22 |

**Recipe-to-Checklist Ratio:**
- Molly: ~7.8:1 recipe-to-checklist
- Yegge: ~4.1:1 recipe-to-checklist

Both runs are recipe-dominant. The checklist verbs appear almost exclusively in the Pass 3 anti-pattern check procedure (which is inherently a checklist — "SCAN for soul violations", "VERIFY footer exists"). The mechanisms (Section 2) and zone recipes (Section 4) use sequenced recipe verbs throughout: "Deploy background", "Apply spacing", "Read the content", "Set Part VI opening paragraph at font-size: 17px."

**Consumption Protocol (Section 9) — Exemplary:**
Both runs produce a perfectly sequenced 5-step protocol using progressive verbs:
1. READ Section 0 (Soul Checklist)
2. INTERNALIZE Section 1 (Build Context)
3. STUDY Section 2 (Mechanisms)
4. BUILD the HTML skeleton
5. WRITE decisions document

This is exactly the recipe format the prompt demands — each step builds on the previous, with explanatory context for WHY each step matters.

**Yegge's Higher Checklist Count:**
Yegge has more "Verify" instances because its Pass 3 anti-pattern section has more explicit verification steps (the "Uniform Role Cards" anti-pattern requires checking border-widths across 3 tiers). This is appropriate — anti-pattern checking IS verification work.

### Score: 9/10

Both runs strongly favor recipe format. Deducted 1 point because yegge's ratio is 4:1 rather than the 8:1 achieved by molly. The difference is minor and contextually justified (yegge's content has more verifiable structural properties), but it suggests the synthesizer's recipe orientation varies slightly by content complexity.

---

## E. Novelty Markers

### Verdict: PRESENT AND ACCURATE (both runs)

**Tag Counts (Section 2 mechanisms only):**

| Run | NOVEL | STANDARD | Total |
|-----|-------|----------|-------|
| Molly | 6 | 2 | 8 |
| Yegge | 5 | 3 | 8 |

**Tag Accuracy Assessment:**

Molly NOVEL tags — spot-checked against specialist inputs:
- Background Arc Progression [NOVEL]: ACCURATE — synthesized from S1 geological model + S2 validated DD-F-004 + TC brief's 4-material prescription. A generic builder would not independently derive a 4-zone background arc from "cartographic survey station."
- Five-Voice Typography [NOVEL]: ACCURATE — the insight that 3 typefaces produce 5 voices (cartographer, surveyor, field worker, instrument, annotator) is a synthesis the builder would not generate independently.
- Asymmetric Margins for Annotations [NOVEL]: ACCURATE — the TC brief's "marginal annotations" concept translated into CSS asymmetric margins is a content-specific derivation.

Molly STANDARD tags — spot-checked:
- Pull Quotes as Legend Entries [STANDARD]: ACCURATE — pull quote styling is a standard design pattern. The legend color-coding is novel, but the base mechanism is standard.
- Fractal Self-Similarity at 4 Scales [STANDARD]: ACCURATE — fractal density at multiple scales is a well-established design principle from the design system.

Yegge NOVEL tags — spot-checked:
- Velocity Interleaving [NOVEL]: ACCURATE — the specific insight that Yegge's voice serves as FAST interleaving between HEAVY role cards is content-specific.
- BRIDGE Transitions [NOVEL]: ACCURATE — identifying 4 specific register shifts (PROVOCATIVE->REFERENCE, etc.) and prescribing cognitive reset at each is content-derived.
- CRESCENDO Typography Compression [NOVEL]: BORDERLINE — typography compression is a known mechanism from the design system (STANDARD in principle), but the specific tower-descent implementation (2rem -> 1.625rem -> 1.375rem mapped to floors) is content-specific enough to justify NOVEL.

Yegge STANDARD tags — spot-checked:
- Fractal 5-Scale [STANDARD]: ACCURATE — well-established pipeline mechanism.
- PULSE Alternation [STANDARD]: ACCURATE — a foundational alternation pattern from the design system.
- Density Wave Sequencing [STANDARD]: ACCURATE — a standard spacing pattern.

**Pass 2 Findings Also Tagged:**
Both runs tag findings in the Section 3 tables with NOVEL/STANDARD, extending the tagging system beyond mechanisms. Molly Pass 2: 15 NOVEL, 5 STANDARD. This is valuable for the builder — it tells them which findings require careful attention vs which are reinforcing known patterns.

### Score: 9/10

Tags are present, accurate, and meaningful. Deducted 1 point for the borderline CRESCENDO case in yegge — the mechanism is well-known from the design system, and tagging it NOVEL risks the builder over-investing attention on a pattern they should already know. The distinction between "standard mechanism, novel application" and "novel mechanism" could be sharper.

---

## F. Quality Floor Compliance

### Per-File Requirements

| Requirement | Molly | Yegge |
|------------|-------|-------|
| Pass 1: 130-170 lines, Sections 0,1,2,9 | 295 lines, Sections 0,1,2,9 | 311 lines, Sections 0,1,2,9 |
| Pass 2: 130-180 lines, Sections 3,4,5 | 224 lines, Sections 3,4,5 | 210 lines, Sections 3,4,5 |
| Pass 3: 110-150 lines, Sections 6,7,8 | 220 lines, Sections 6,7,8 | 267 lines, Sections 6,7,8 |
| No file below 100 lines | PASS (220 min) | PASS (210 min) |
| Total 400-600 lines | 739 (EXCEEDS) | 788 (EXCEEDS) |

### Content Requirements

| Requirement | Molly | Yegge |
|------------|-------|-------|
| Recipe format throughout | YES — 7.8:1 ratio | YES — 4.1:1 ratio |
| Section 2: 5-8 mechanisms with CSS | 8 mechanisms, all with CSS | 8 mechanisms, all with CSS |
| Section 3: 15+ HIGH findings | 20 findings with build actions | 24 findings with build actions |
| Section 4: ASCII density diagram | YES — 7-line diagram | YES — 6-line diagram |
| Section 5: 2-4 case studies with CSS | 3 case studies, all with CSS | 3 case studies, all with CSS |
| Section 6: 5+ risk-profiled anti-patterns | 8 anti-patterns (3 HIGH, 4 MEDIUM, 1 LOW) | 7 anti-patterns (4 HIGH, 2 MEDIUM) |
| Section 7: 4+ proven CSS patterns | 6 CSS patterns | 6 CSS patterns |
| Section 8: 3-5 propositions | 5 propositions | 5 propositions |

### Integration Requirements

| Requirement | Molly | Yegge |
|------------|-------|-------|
| Specialist overlaps merged | YES — agent logs document merge actions | YES — agent logs document merge actions |
| Conflicts resolved via hierarchy | YES — 2 documented (fractal scale, PULSE) | YES — 1 documented (bento vs border-weight) |
| Mechanisms trace to findings/case studies | YES — every mechanism has "Finding basis" line | YES — every mechanism has "Finding basis" line |
| Anti-patterns mitigated with CSS | YES — all 8 have CSS mitigation column | YES — all 7 have CSS mitigation column |
| CSS uses concept-based naming | YES (--zone-parchment, .voice-cartographer) | YES (--tower-surface, .role--town-level) |

### Score: 8/10

All content requirements met or exceeded. All integration requirements met. Deducted 2 points for the line count overshoot — the stated range is 400-600 total, and both runs exceed by 23-32%. This is a consistent pattern across both runs, suggesting the synthesizer systematically produces more output than budgeted.

---

## Cross-Run Patterns

### Consistent Strengths
1. **Genuine merge, not concatenation.** Both runs demonstrate real synthesis — multiple specialist findings collapsed into single unified mechanisms with cross-referencing.
2. **Deep content specificity.** Every class name, every zone recipe, every anti-pattern risk profile is saturated with content-specific language. Zero interchangeability between runs.
3. **Complete agent logs.** Both runs document input sizes, deduplication actions, conflict resolutions, omission rationale, novelty tags, and output sizes. This is exemplary transparency.
4. **Recipe format discipline.** Both runs maintain recipe orientation with sequenced verbs. The consumption protocol (Section 9) is consistently well-structured.
5. **Anti-pattern risk profiling is content-specific.** Not generic "watch out for X" — each anti-pattern explains WHY it is HIGH/MEDIUM risk for THIS specific content, citing section numbers and element counts.

### Consistent Weaknesses
1. **Line count overshoot.** Both runs exceed 600-line ceiling by 139-188 lines. The synthesizer is consistently generous with output.
2. **Pass 2 findings tables closer to formatted specialist output than deep synthesis.** While mechanisms (Section 2) show genuine merge, the findings tables (Section 3) are more like zone-sorted specialist entries with CSS additions. The VALIDATED findings are synthesized; the HIGH findings are organized.
3. **Mechanism count is identical (8/8).** Both runs produce exactly 8 mechanisms regardless of content differences. This suggests the synthesizer may be targeting a fixed count rather than deriving the count from content needs. 8 mechanisms serves both contents well, but the identical count across very different content raises a question about whether the synthesizer is adapting or following a template.
4. **Case study count is identical (3/3).** Both runs select exactly 3 case studies. The prompt says "2-4 case studies" — landing at 3 every time suggests a default behavior rather than content-driven selection.
5. **Proposition count is identical (5/5).** Both runs produce exactly 5 structural propositions. The prompt says "3-5 propositions." Again, identical count across different content.

### Notable Differences Between Runs
- **Yegge produces more findings** (24 vs 20) — appropriate given yegge's more complex 8-role architecture requiring more zone-specific findings.
- **Molly has 1 more anti-pattern** (8 vs 7) — appropriate given molly's higher callout/blockquote density creating more anti-pattern risk.
- **Yegge has higher checklist verb ratio** — appropriate given more structural verification needs (role hierarchy tiers).
- **Molly's novelty ratio is 6:2; yegge's is 5:3** — both within expected range, slight difference explained by molly's more metaphor-driven mechanisms vs yegge's use of more standard design system patterns.

---

## Summary Scores

| Dimension | Score | Notes |
|-----------|-------|-------|
| A. Merge Quality | 9/10 | Genuine merge with documented conflict resolution; findings tables slightly less merged than mechanisms |
| B. Content Specificity | 10/10 | Zero interchangeability; every element content-saturated |
| C. Rotation Implementation | 8/10 | Correct splits and self-containment; consistent line overshoot |
| D. Recipe vs Checklist | 9/10 | Recipe-dominant in both; minor ratio difference |
| E. Novelty Markers | 9/10 | Present, accurate, meaningful; one borderline case |
| F. Quality Floor | 8/10 | All content requirements exceeded; line budget exceeded |
| **Overall** | **8.8/10** | |

### Top Recommendations

1. **Tighten line budget compliance.** The synthesizer needs either a harder ceiling enforcement or the prompt should increase the range to 400-800 to match actual output. The current 600-line ceiling is consistently violated, suggesting the synthesizer's natural output size is 700-800 lines.

2. **Vary structural counts by content.** The identical 8-mechanism / 3-case-study / 5-proposition counts across very different content suggest template-following rather than content-driven adaptation. Consider adding prompt language: "The number of mechanisms should vary by content complexity (5 for simple, 8-10 for complex)."

3. **Deepen findings table synthesis.** The Section 3 findings tables could move from "specialist finding + zone assignment + CSS" to "synthesized insight derived from multiple specialist perspectives + zone assignment + CSS." Currently mechanisms achieve this synthesis but findings do not.

---

## Appendix: File Inventory

**Molly Run:**
- `_tc-brief.md` (144 lines source for synthesizer)
- `_specialist-1-findings.md` (225 lines)
- `_specialist-2-validated.md` (150 lines)
- `_specialist-3-casestudies.md` (416 lines)
- `_specialist-4-constraints.md` (378 lines)
- `_specialist-5-protocol.md` (151 lines)
- `_package-pass-1.md` (295 lines output)
- `_package-pass-2.md` (224 lines output)
- `_package-pass-3.md` (220 lines output)

**Yegge Run:**
- `_tc-brief.md` (154 lines source for synthesizer)
- `_specialist-1-findings.md` (243 lines)
- `_specialist-2-validated.md` (175 lines)
- `_specialist-3-casestudies.md` (409 lines)
- `_specialist-4-constraints.md` (370 lines)
- `_specialist-5-protocol.md` (158 lines)
- `_package-pass-1.md` (311 lines output)
- `_package-pass-2.md` (210 lines output)
- `_package-pass-3.md` (267 lines output)

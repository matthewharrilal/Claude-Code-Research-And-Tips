# Enhanced Fat Core: Compositional Completeness Without Context Bloat

**Agent:** fat-core-designer
**Task:** #10 — What would "compositionally complete" Fat Core look like?
**Sources Read:**
- `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (1,354 lines — current Fat Core spec)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (1,218 lines — 18 mechanisms)
- `memory/scale-research.md` (92 lines — compositional theory)

---

## 1. CURRENT STATE: What Fat Core Already Has

The PV2 diagram (lines 978-1055) specifies Fat Core as:

| Input | Lines | Compositional Layer Covered |
|-------|-------|-----------------------------|
| content.md | Variable | None (raw material) |
| conventions-brief.md | ~100 | L1 (perception thresholds) + soul |
| tokens.css | 174 | L1 (values) |
| prohibitions.md | 353 | Soul (identity) |
| mechanism-catalog.md | 1,218 | L3 (channels) partially |
| merged-components.css | ~800 | L4 (component patterns) |
| **TOTAL** | **~2,645** | **L1 FULL, L3 PARTIAL, rest ABSENT** |

The conventions brief (~100 lines) encodes 5 sections:
1. Perception Thresholds (L1)
2. Soul constraints (identity)
3. Spatial Rules (L1/L2 partial)
4. Quality Floor (minimum standards)
5. Creative Authority clause

**What's MISSING from Fat Core's input:**

| Layer | Description | Current Status | Impact |
|-------|-------------|----------------|--------|
| L2: Scales | 5 zoom levels where pattern appears | ABSENT | Builder may deploy mechanisms at 1-2 scales only |
| L3: Channels | 6 CSS property groups shift together | PARTIAL (catalog lists them but no deployment protocol) | Builder may treat channels independently, not coherently |
| L4: Multi-coherence | >= 3 channels shift at each boundary | ABSENT | Zone transitions may be single-channel (bg only) |
| L5: Anti-scale model | Richness = density x restraint x spatial confidence | ABSENT (judgment domain) | Builder may pursue saturation over restraint |

**The question:** Does Opus already possess L2-L5 compositional intelligence innately, making explicit encoding unnecessary? Or does explicit encoding unlock quality the model won't produce spontaneously?

**Evidence for "Opus already knows":**
- CD-006 (39/40) used 1 Opus agent with minimal pipeline guidance. Multi-coherence emerged naturally.
- Middle experiment: 100-line input -> PA-05 4/4 DESIGNED. 12 mechanisms across 2 scales.

**Evidence for "explicit encoding needed":**
- Flagship: 530-line input -> 1.5/4 FLAT. More input, worse quality. But the input was GUARDRAILS, not compositional knowledge.
- Ceiling experiment: 14 mechanisms deployed, only 1 perceptually visible. Scale coverage existed in code, not perception.
- The ceiling PLANNED compositional coherence (TC produced it) but the BUILDER didn't execute it (compression at Boundary 3).

**Resolution:** Fat Core ELIMINATES Boundary 3 (the planner IS the builder). So the question is really: given that one agent both plans and builds, does it need explicit compositional guidance, or will the planning phase naturally produce compositional output in the building phase?

My answer: **It needs MINIMAL, STRATEGIC guidance -- not comprehensive encoding.** The CD-006 evidence shows Opus can produce 4/4 work. But the Ceiling evidence shows that even Opus WITH full compositional theory can produce 1.5/4 work when the theory competes with execution for attention. The key is: give the agent compositional PRINCIPLES (10-30 lines) not compositional SPECIFICATIONS (200+ lines).

---

## 2. FIVE ENHANCEMENT OPTIONS ANALYZED

### Option A: 30-Line Compositional Principles Section in Conventions Brief

**What it adds:**
```markdown
## COMPOSITIONAL PRINCIPLES (add to conventions-brief.md)

SCALES: Your design should read coherently at 3+ zoom levels:
- Page (how sections sequence across scroll)
- Section (how elements arrange within one viewport)
- Component (how content organizes inside one element)
Check: Squint at the full page. Does the rhythm continue when you zoom into one section?

CHANNELS: CSS changes should travel together across boundaries:
- When background shifts, typography ALSO shifts (font-size, weight, or spacing)
- When entering a new zone, >=3 CSS properties should change simultaneously
- Test: At each section boundary, count properties that change. If <3, the transition is flat.

COHERENCE DIRECTION: All channel changes at a boundary should point the same semantic way:
- "DEEPENING" = darker bg + tighter spacing + heavier borders + smaller type
- "OPENING" = lighter bg + more whitespace + thinner borders + larger type
- Never mix (darker bg + MORE whitespace = contradictory signal)

RESTRAINT: Mechanism density cap = 4 per viewport section.
- If deploying >4 mechanisms in one screenful, redistribute to later sections
- Every third of the page (by scroll) should have >=2 distinct mechanisms
- Document 3+ mechanisms you CONSIDERED AND REJECTED (forces evaluation)

ANTI-SATURATION: Richness = density x restraint x spatial confidence
- Density: how much meaning each CSS choice carries
- Restraint: what you DON'T add matters more than what you do
- Spatial confidence: does the page feel intentional at arm's length?
```

**Input size impact:** +30 lines to conventions brief (100 -> 130 lines). Total builder input increases from ~2,645 to ~2,675. Negligible.

**Expected quality impact:** HIGH. This encodes L2 (scales), L3 (channels), L4 (multi-coherence), and L5 (anti-scale) in 30 lines. The principles are DIRECTIONAL (tell the agent what to aim for) not PROCEDURAL (tell the agent step-by-step). This matches how CD-006 succeeded: Opus understood the direction and composed toward it.

**Specific predictions:**
- Scale coverage: 1-2 scales -> 3+ scales (principles remind agent to check multiple zoom levels)
- Multi-coherence: random -> coordinated (the ">=3 properties shift" rule is binary and enforceable)
- Restraint: saturation risk -> distributed deployment (density cap + distribution rule)
- Anti-scale: agent prioritizes spatial confidence over mechanism count

**Risk of degradation:** LOW. 30 lines adds 1.1% to total input. Well below the ~300-line attention threshold identified in Report 31. The principles are SHORT, BINARY, and ACTIONABLE -- not prose-heavy guardrails. The key risk is that even 30 lines of compositional theory could shift the agent into "compliance mode" (satisfying the checklist) rather than "creative mode" (composing freely). Mitigation: frame as PRINCIPLES (what good looks like) not RULES (what to check).

**VERDICT: RECOMMENDED. Best signal-to-noise ratio of all options. Encodes L2-L5 in 30 lines without meaningful input bloat.**

---

### Option B: Structured YAML Artifacts Encoding Compositional Requirements

**What it adds:**
A pre-generated YAML file (produced by orchestrator or TC-like planner agent) specifying per-boundary channel expectations:

```yaml
# transition-spec.yaml (~80-150 lines)
boundaries:
  zone-1-to-zone-2:
    semantic_direction: "DEEPENING"
    channels:
      chromatic:
        before: "#FEF9F5"
        after: "#F0EBE3"
        delta_rgb: 18
      typographic:
        before: "18px/400"
        after: "16px/500"
        delta_px: 2
      spatial:
        before: "64px padding"
        after: "48px padding"
        delta_px: 16
      structural:
        before: "no border"
        after: "3px solid #E83025"
    channel_count: 4  # PASS (>=3)
    coherence: "all channels deepen"  # PASS

  zone-2-to-zone-3:
    # ... similar ...
```

Plus a fractal echo table:

```yaml
# fractal-echo.yaml (~30 lines)
pattern: "progressive density"
scales:
  navigation: "dark header, sparse nav"
  page: "sections compress 64px -> 48px -> 32px"
  section: "within sections, components tighten spacing"
  component: "callout labels sparse (12px), bodies dense (16px)"
  character: "letter-spacing tightens from 0.04em to 0.02em"
pattern_consistent: true  # PASS
```

**Input size impact:** +110-180 lines. Total input: ~2,645 -> ~2,755-2,825. Moderate increase (4-7%).

**Expected quality impact:** VERY HIGH for L3 (channels) and L4 (multi-coherence). The transition table gives the builder EXACT CSS values to use at each boundary. This was THE critical fix identified in Report 68 -- it changes Boundary 3 from 20:1 prose compression to lossless YAML transfer.

BUT: this re-introduces a PLANNING PHASE before building. Someone (orchestrator? a lightweight TC?) must generate these YAML artifacts. This partially negates Fat Core's core value proposition: NO planning/building separation.

**Risk of degradation:** MEDIUM-HIGH. This is the core tension:

1. **The YAML approach recreates Boundary 3.** Even if the planning agent is thin (100 lines), it still produces structured artifacts that the builder must consume. Intelligence crosses a boundary. Compression may occur.

2. **YAML is specific, not directional.** The builder receives `before: "#FEF9F5", after: "#F0EBE3"` and executes it. This removes compositional judgment from the builder. The builder becomes an implementer, not a composer. CD-006 didn't have a transition table -- it COMPOSED transitions.

3. **Input volume increases past the sweet spot.** With YAML files, the builder reads 2,755-2,825 lines. Still below the 300-line INSTRUCTION threshold (the YAML is data, not instructions), but the agent must now PARSE structured data in addition to creative composition. Parsing competes with composing for attention.

**Interaction with Fat Core philosophy:** Fat Core's thesis is "one agent plans AND builds -- no handoff." YAML artifacts mean either (a) the same agent generates the YAML then consumes it (self-handoff, probably fine), or (b) a separate agent generates it (Boundary 3 is back). If (a), this is essentially asking the agent to plan in YAML first, then build to spec. This is a structured internal planning step, which may help or may constrain.

**VERDICT: NOT RECOMMENDED for Fat Core. This approach fits Linear Pipeline (PV2 recipe path) better. For Fat Core, Option A (principles) + Option C (self-check) achieves the same quality floor without re-introducing boundary compression. If the builder is the SAME agent that would generate the YAML, the YAML is unnecessary overhead -- the agent already holds the reasoning internally.**

---

### Option C: Self-Check Phase Where Builder Evaluates Against Compositional Criteria

**What it adds:**
After the builder completes its first pass of HTML/CSS, a mandatory self-evaluation pause (similar to Phase 6.5 Observation Pause from PV2 diagram line 567):

```markdown
## SELF-CHECK PROTOCOL (add to conventions-brief.md, ~25 lines)

After completing your first draft of HTML+CSS, PAUSE and answer these questions.
Do NOT proceed to final output until answering all 8.

SCALE CHECK:
Q1: Squint at the full page. Do you see rhythm? (Y/N)
Q2: Look at one section. Does the same rhythm appear inside it? (Y/N)
Q3: Look at one component. Does it echo the page-level pattern? (Y/N)
If any N: add mechanism deployment at that scale before continuing.

CHANNEL CHECK:
Q4: At each zone boundary, how many CSS properties change?
    (count bg, font-size, font-weight, spacing, borders, letter-spacing)
    If <3 at ANY boundary: add channel shifts.
Q5: Do all channel shifts point the same semantic direction? (Y/N)
    If N: identify contradictory channel and align it.

RESTRAINT CHECK:
Q6: Count mechanisms per viewport-height section. Any section >4? (Y/N)
    If Y: redistribute or remove lowest-impact mechanism.
Q7: Does every third of the page have >=2 distinct mechanisms? (Y/N)
    If Y: proceed. If N: add deployment to sparse section.

SPATIAL CONFIDENCE:
Q8: If you removed ALL color and saw only spacing and borders, would
    the page still feel structured? (Y/N)
    If N: your spatial skeleton is incomplete. Fix before adding richness.
```

**Input size impact:** +25 lines to conventions brief (100 -> 125 lines with Option C alone; 155 with A+C combined). Negligible.

**Expected quality impact:** HIGH. This directly addresses the Ceiling experiment's failure mode: 14 mechanisms deployed but only 1 perceptually visible. If the builder had paused to answer Q1-Q3 (scale check) and Q4-Q5 (channel check), it would have caught the concentration problem DURING building, not after.

The key insight: self-check EXPLOITS the fact that Fat Core's builder is the same agent that planned. The builder has compositional intent in its context. The self-check turns implicit intent into explicit verification -- it asks "did I actually DO what I planned?"

**CD-006 parallel:** CD-006's builder reportedly used metacognitive loops ("I've built the structure, now let me scroll through and see..."). This is exactly what the self-check protocol formalizes. The difference: CD-006 did it spontaneously (Opus trait), this protocol ensures it happens even if the builder gets absorbed in CSS details.

**Risk of degradation:** LOW. The questions are BINARY (Y/N), not judgment-based. They don't add competing information -- they redirect attention to what the builder already produced. The risk is minimal because:
1. No new information enters the context (the builder evaluates its OWN output)
2. Binary questions have near-100% compliance (established finding)
3. The check takes 5-10 minutes (same as Phase 6.5 Observation Pause)

The only risk: a builder that "answers Y to everything" without actually evaluating. This is a known LLM behavior (optimistic self-assessment). Mitigation: Q4 asks for a COUNT, not a Y/N. If the builder must report "bg changes at boundary 1-2, that's 1 property," it's harder to self-deceive.

**VERDICT: STRONGLY RECOMMENDED. Highest expected quality per line of input. Exploits Fat Core's unique advantage (builder = planner, so self-check has full compositional context). Combine with Option A for maximum coverage.**

---

### Option D: Route Mechanism Catalog to Builder (Full 1,218 lines)

**What it adds:**
The full mechanism-catalog.md as builder input. Currently in the PV2 diagram (line 380), the catalog IS routed to the builder in the Linear Pipeline path. Fat Core also lists it (line 999: "reference files (tokens, prohibitions, catalog)").

So this is actually ALREADY SPECIFIED for Fat Core. The question is whether it SHOULD be.

**Input size impact:** The catalog is 1,218 lines -- by far the largest single input file. With it, total builder input is ~2,645. Without it, input drops to ~1,427. The catalog constitutes 46% of total builder input.

**Expected quality impact:** MIXED. The catalog provides:

1. **18 mechanism descriptions with CSS examples** -- gives builder a vocabulary of concrete techniques
2. **Per-category organization (S/H/C/D/N)** -- enables per-category deployment
3. **Application modes (progressive vs discrete)** -- prevents anti-patterns
4. **Transition grammar** -- 3 transition types with CSS patterns
5. **Restraint protocol** -- density cap, distribution rule
6. **Scale definitions** -- 5 scales with tier-to-scale mapping

This is RICH compositional intelligence. But it's also 1,218 lines of reference material competing for attention with the actual building task.

**The inverse correlation problem:** Report 31 found quality inversely correlates with builder input volume:
- Middle: 100 lines -> 4/4
- Remediation: 300 lines -> 2.5/4
- Flagship: 530 lines -> 1.5/4

The catalog alone (1,218 lines) exceeds the Flagship's total input. If the correlation holds, routing the full catalog should HURT quality, not help it.

**Counter-argument:** The inverse correlation may reflect INSTRUCTION volume, not REFERENCE volume. The catalog is reference material (look up when needed), not sequential instructions (follow in order). An agent can skim reference material and focus on relevant sections. The Middle's 100-line input was INSTRUCTIONS (recipe), not reference.

**Counter-counter-argument:** LLMs don't reliably distinguish reference from instruction. Context window attention distributes across all input. More input = more competition for attention = lower quality per decision. This is the fundamental mechanism behind the inverse correlation.

**Partial routing option:** Instead of the full 1,218-line catalog, extract a CONDENSED catalog (~150-200 lines):
- 18 mechanism names + 1-line descriptions + CSS pattern signature (no full examples)
- Per-category counts (S:3, H:3, C:4, D:3, N:5)
- Transition grammar summary (3 types, 1 paragraph each)
- Restraint protocol (4 rules)
- Scale definitions omitted (covered by Option A principles)

This would provide vocabulary awareness without the full reference weight.

**Risk of degradation:** HIGH for full catalog. MEDIUM for condensed catalog.

**VERDICT: NOT RECOMMENDED as full 1,218 lines. CONDITIONALLY RECOMMENDED as condensed ~150-line version. The full catalog is a reference document designed for human reading, not LLM consumption. A condensed version gives the builder vocabulary awareness without attention competition. However, if Option A (principles) is adopted, much of what the condensed catalog provides is REDUNDANT -- the principles section already covers scale/channel/coherence behavior. The catalog adds mechanism-level specificity (WHICH techniques exist) but the builder can generate mechanisms from compositional understanding.**

**The deeper question:** Does the builder need to KNOW about "Mechanism #7: Zone Background Differentiation" by name, or does it just need to know "use background color shifts to mark zone transitions"? The principles in Option A cover the latter. The catalog covers the former. For CD-006 (39/40), the builder had NO mechanism catalog and composed naturally. Naming mechanisms may help consistency but may also constrain creative discovery.

---

### Option E: Something Else — The "Conviction Card" (15 lines)

**What it adds:**
Instead of compositional principles, a SINGLE concrete example of what "compositionally complete" looks like at one zone boundary. Not theory -- a worked example:

```markdown
## WHAT COMPOSED LOOKS LIKE (1 example = worth 1000 rules)

Here is ONE zone boundary from CD-006 (39/40), the highest-scoring page ever built:

**Zone 2 -> Zone 3 (overview -> deep-dive):**

  Background: #FEF9F5 -> #F0EBE3 (delta 18 RGB -- visible warmth shift)
  Font-size: 18px -> 16px (reader subconsciously registers "denser")
  Spacing: padding 64px -> 48px (compression = deeper territory)
  Border: none -> 3px solid #E83025 (hard cut = new domain)
  Letter-spacing: 0.04em -> 0.02em (tightening echoes spatial compression)

  5 channels shift TOGETHER. All point "DEEPER."
  Reader feels the transition without analyzing it.

  THIS is multi-coherence. Make every zone boundary do this.
  3+ channels shifting in the same semantic direction.

  Your page has different content. Your boundaries will have different values.
  The PATTERN (multiple channels, same direction) transfers. The VALUES don't.
```

**Input size impact:** +15 lines. Negligible.

**Expected quality impact:** POTENTIALLY HIGHEST. One concrete example does more than 30 lines of principles or 150 lines of mechanism catalog, because:

1. **Concrete beats abstract for LLMs.** The example shows EXACTLY what 5-channel multi-coherence looks like in CSS. The builder doesn't need to derive it from theory.
2. **Telescope + Microscope.** The example includes both WHY ("reader feels the transition") and WHAT (specific CSS values). This is the interlaced format identified as highest-performing (PV2 diagram line 506-533).
3. **Transfer instruction is explicit.** "The PATTERN transfers. The VALUES don't." This prevents template copying while encoding the compositional principle.
4. **Based on actual crown jewel evidence.** Not theoretical -- sourced from CD-006 which achieved 39/40.

**Risk of degradation:** LOW-MEDIUM. The risk is that the builder pattern-matches to the specific example rather than generalizing. Mitigation: the example explicitly states "your values will be different" and frames the transferable element (pattern, not values). A secondary risk: one example may not cover all compositional dimensions (this covers multi-coherence but not scales or restraint).

**Enhanced version** (combine conviction card + restraint reminder, ~20 lines):

Add after the example:
```markdown
RESTRAINT: Maximum 4 mechanisms per viewport-height screenful.
If you can see more than 4 techniques in one scroll-stop, redistribute.
Richness = density x restraint. More is not better.
```

**VERDICT: STRONGLY RECOMMENDED as a complement to Option A or as a standalone minimal approach. If the builder sees ONE concrete example of what 4/4 looks like at the CSS level, it calibrates quality expectations more effectively than any number of abstract principles.**

---

## 3. SYNTHESIS: THE RECOMMENDED CONFIGURATION

### Fat Core "Compositionally Complete" = Option A + Option C + Option E

**Total addition to conventions brief: ~70 lines (130 -> 170 lines)**

```
CONVENTIONS BRIEF (enhanced, ~170 lines)
├── Perception Thresholds (existing ~20 lines)    -- L1
├── Soul Constraints (existing ~20 lines)          -- Identity
├── Spatial Rules (existing ~20 lines)             -- L1/L2
├── Quality Floor (existing ~20 lines)             -- Standards
├── Creative Authority (existing ~20 lines)        -- Freedom
├── Compositional Principles (Option A, ~30 lines) -- L2/L3/L4/L5
├── Conviction Card (Option E, ~20 lines)          -- Concrete example
└── Self-Check Protocol (Option C, ~25 lines)      -- Post-build verification
```

**What this achieves:**

| Layer | Before Enhancement | After Enhancement | How |
|-------|-------------------|-------------------|-----|
| L1 (Thresholds) | FULL | FULL | Existing perception thresholds |
| L2 (Scales) | ABSENT | COVERED | Option A "check 3+ zoom levels" |
| L3 (Channels) | PARTIAL | COVERED | Option A ">=3 channels shift" + Option E example |
| L4 (Multi-coherence) | ABSENT | COVERED | Option A "same semantic direction" + Option E example |
| L5 (Anti-scale) | ABSENT | COVERED | Option A "density x restraint x spatial confidence" |
| Verification | ABSENT | COVERED | Option C self-check (8 binary questions) |

**Total builder input comparison:**

| Configuration | Input Lines | PA-05 Prediction | Rationale |
|---------------|------------|------------------|-----------|
| Original Fat Core | ~2,645 | 2.5-3.5/4 | Opus innate ability + thresholds |
| Enhanced Fat Core (A+C+E) | ~2,715 | 3.0-4.0/4 | +70 lines of pure compositional signal |
| Enhanced Fat Core (B) | ~2,825 | 2.5-3.5/4 | YAML adds data, competes for attention |
| Enhanced Fat Core (D full) | ~2,645 (already included) | 2.0-3.0/4 | Full catalog = attention dilution |

**Why this configuration and not others:**

1. **Option A works because principles are DIRECTIONAL.** They tell the agent what "composed" means at the CSS level. The agent already knows how to write CSS -- it needs to know what COMPOSITION means. 30 lines of direction > 200 lines of specification.

2. **Option C works because Fat Core's advantage IS self-awareness.** The builder that planned the page can evaluate its own output against its own intent. Self-check formalizes this. No external agent needed. No boundary crossing.

3. **Option E works because one example calibrates expectations.** The Flagship failed not because the builder couldn't write CSS but because it had no calibration for what "composed" LOOKS LIKE at the CSS level. The conviction card fixes this with 15 lines.

4. **Option B doesn't work because it recreates Boundary 3.** YAML artifacts are planning documents. If the builder generates them internally, they're unnecessary overhead. If an external agent generates them, Fat Core becomes Linear Pipeline with fewer agents.

5. **Option D (full catalog) doesn't work because 1,218 lines of reference competes with 170 lines of direction.** The catalog is 7x the conventions brief. Attention economics dictate that the catalog will dominate, and the builder will spend time parsing mechanisms instead of composing.

---

## 4. WHAT GETS REMOVED FROM FULL BUILDER INPUT

For the enhanced Fat Core, I recommend ALSO trimming the reference file set:

| File | Current Size | Recommendation | Rationale |
|------|-------------|----------------|-----------|
| conventions-brief.md | 100 -> 170 lines | KEEP (enhanced) | Core compositional guidance |
| tokens.css | 174 lines | KEEP (full) | Values needed for CSS writing |
| prohibitions.md | 353 lines | **TRIM to ~80 lines** | Builder needs the 8 ABSOLUTE prohibitions + soul constraints. Remove 12 conditional prohibitions and meta-discussion. |
| mechanism-catalog.md | 1,218 lines | **TRIM to ~150 lines** | Condensed: 18 names + 1-line descriptions + transition grammar summary + restraint protocol. Remove full CSS examples, cross-validation tables, extraction methodology. |
| merged-components.css | ~800 lines | **KEEP for reference** | Builder may need component patterns |
| content.md | Variable | KEEP | The actual content |

**Trimmed total: ~2,645 -> ~1,574 lines (40% reduction)**

This puts the builder well below the 2,000-line comfort zone while ADDING compositional intelligence. The reduction comes from trimming reference material (prohibitions detail, catalog examples) while adding high-signal compositional guidance.

---

## 5. RISK ANALYSIS

### Risk 1: Compositional principles trigger compliance mode (MEDIUM)
The 30-line principles in Option A could shift the builder from "create freely" to "check boxes."
**Mitigation:** Frame principles as WHAT GOOD LOOKS LIKE, not WHAT YOU MUST DO. Use language like "composed pages do X" rather than "you MUST do X." The Creative Authority clause (already in conventions brief) explicitly permits overrides.
**Monitoring:** If PA-05 drops below baseline (no principles), remove Option A.

### Risk 2: Conviction card creates template anchoring (LOW-MEDIUM)
The CD-006 boundary example could anchor the builder to those specific CSS values.
**Mitigation:** Example explicitly says "your values will be different" and "the PATTERN transfers, the VALUES don't." Use a boundary that's generic enough to transfer (bg + typography + spacing shifts) rather than one with unique flourishes.
**Monitoring:** Check if first boundary in built page has similar values to example. If yes, anchoring occurred.

### Risk 3: Self-check is performative (LOW)
The builder answers "Y" to all questions without actually evaluating.
**Mitigation:** Q4 asks for a COUNT ("how many CSS properties change at each boundary?"). Quantitative questions resist performative answers. The gate runner can verify Q4 answers against actual computed styles.
**Monitoring:** Compare self-check answers to gate runner measurements. Consistent self-deception = remove self-check and rely on gates.

### Risk 4: Total input is still too high (LOW)
Even after trimming, ~1,574 lines may exceed attention capacity.
**Mitigation:** The composition is ~170 lines direction + ~1,400 lines reference. LLMs handle reference material (CSS files, token values) differently from instructions -- reference is consulted, not followed sequentially. The 300-line inverse correlation finding applies to INSTRUCTIONS, and this configuration keeps instructions at ~170 lines.
**Monitoring:** Compare to Experiment A (no pipeline, ~42 lines) to establish baseline.

### Risk 5: Enhancement is insufficient -- Opus needs MORE, not less (MEDIUM)
Possible that Fat Core with 170-line brief still produces 2.5/4 because compositional intelligence requires STRUCTURED artifacts (transition tables) that principles alone can't encode.
**Mitigation:** Run Experiment B (Fat Core) with enhanced brief. If PA-05 < 3.0, test adding YAML transition table as self-generated artifact (builder writes YAML first, then builds to it). This transforms Option B from "external planning" to "structured self-planning" -- compatible with Fat Core.
**Monitoring:** If adding self-generated YAML improves quality, it means Opus benefits from structured intermediate representations even when it generates them itself.

---

## 6. EXPERIMENTAL VALIDATION PLAN

### Test 1: Enhanced Fat Core (Recommended Configuration)
- Input: content.md + enhanced conventions brief (170 lines) + tokens.css + trimmed prohibitions (~80 lines) + condensed catalog (~150 lines) + merged-components.css
- Total: ~1,574 lines
- Expected PA-05: 3.0-4.0/4
- If >= 3.0: ADOPT this configuration
- If 2.5-3.0: Consider adding self-generated YAML (Option B as self-planning)
- If < 2.5: Something else is wrong (not input composition)

### Test 2: Minimal Fat Core (Baseline)
- Input: content.md + original conventions brief (100 lines) + tokens.css + full prohibitions + full catalog
- Total: ~2,645 lines (unchanged)
- Expected PA-05: 2.5-3.5/4
- This establishes whether the enhancement HELPS or HURTS

### Test 3: Ultra-Minimal (Conviction Card Only)
- Input: content.md + 42-line minimal prompt + conviction card (15 lines) + tokens.css + prohibitions summary (20 lines)
- Total: ~500 lines
- Expected PA-05: 2.0-3.5/4 (high variance)
- Tests whether the conviction card alone is sufficient calibration

### Decision Tree:
```
Test 1 >= 3.5? --> SHIP enhanced Fat Core. Compositionally complete.
Test 1 3.0-3.5 and Test 1 > Test 2? --> Enhancement helps. Iterate on principles.
Test 1 < 3.0 and Test 2 >= 3.0? --> Enhancement HURTS. Revert to original.
Test 3 >= 3.0? --> Ultra-minimal wins. Kill all infrastructure beyond conviction card.
All < 3.0? --> Fat Core thesis is wrong. Return to Linear Pipeline investigation.
```

---

## 7. THE COMPOSITIONAL COMPLETENESS EQUATION

If Fat Core is enhanced with Options A+C+E, what is "compositionally complete"?

**Compositionally complete = the builder has, in its context, everything needed to produce multi-coherent, multi-scale, restrained output -- and nothing that distracts from it.**

Concretely:
- **L1 (Thresholds):** Binary gates in conventions brief. Can't produce invisible CSS.
- **L2 (Scales):** Principles section says "check 3 zoom levels." Self-check enforces with Q1-Q3.
- **L3 (Channels):** Principles section says ">=3 channels shift together." Conviction card shows WHAT this looks like.
- **L4 (Multi-coherence):** Principles section says "same semantic direction." Conviction card demonstrates with 5-channel example.
- **L5 (Anti-scale):** Principles section encodes `richness = density x restraint x spatial confidence`. Self-check Q8 (spatial confidence) enforces the floor.

**What's explicitly NOT in the conventions brief (and shouldn't be):**
- Mechanism names (#1-#18): the builder composes techniques, it doesn't check a list
- Transition table specifications: the builder CREATES transitions, it doesn't implement a plan
- Fractal echo tables: the builder CHECKS for scale coherence via self-check, it doesn't fill a template
- Per-boundary channel assignments: the builder COMPOSES per-boundary decisions, it doesn't execute specifications

**The philosophy:** Compositional completeness in Fat Core means the builder has AWARENESS of all 5 compositional layers and AGENCY to express them freely. It does NOT mean the builder has SPECIFICATIONS for how to express them. Specifications create the recipe ceiling (3/4). Awareness + agency enable the convention ceiling (4/4).

---

## APPENDIX: The Enhanced Conventions Brief (Full Draft, ~170 lines)

```markdown
# CONVENTIONS BRIEF — Fat Core Builder

You are building a single HTML page from the content provided.
You plan AND build. There is no separate planning phase.
Read the content, understand its structure, compose a visual form.

## SOUL (NEVER override, 0 exceptions)

border-radius: 0
box-shadow: none
No drop-shadow filter
No gradients
No pure #000000 or #FFFFFF
Font trinity: Instrument Serif (display), Inter (body), JetBrains Mono (code)
Container: 940-960px centered

## PERCEPTION THRESHOLDS (binary, enforceable)

Adjacent zone backgrounds: >= 15 RGB point difference
Adjacent font-sizes: >= 2px difference
Letter-spacing values: >= 0.02em (nothing sub-perceptual)
Maximum stacked gap at zone boundary: <= 108px total
Borders: >= 1 visible border-left (3px+ or 2 <hr> elements)

## SPATIAL RULES

Container width: 940-960px (NON-NEGOTIABLE, the primary historical failure mode)
Minimum label-to-heading gap: 16px
Minimum container padding: 32px
Maximum compression ratio (densest / sparsest section): 40%
Zone count: 2-5 zones (semantic groupings of content)

## QUALITY FLOOR

Component library classes used: >= 3
ARIA landmarks: >= 3
Skip link: present
2+ distinct grid layouts somewhere on the page

## COMPOSITIONAL PRINCIPLES

SCALES: Your design should read coherently at 3+ zoom levels:
- Page (how sections sequence across the full scroll)
- Section (how elements arrange within one viewport)
- Component (how content organizes inside one element)
Check: Squint at the full page. Zoom into one section. Zoom into one component.
Does the same rhythm continue at each level?

CHANNELS: CSS changes should travel together at zone boundaries:
- When background shifts, typography ALSO shifts (size, weight, or spacing)
- At each zone boundary, >= 3 CSS properties change simultaneously
- Properties: background, font-size, font-weight, letter-spacing, border, padding

COHERENCE: All channel changes at a boundary point the SAME semantic direction:
- DEEPENING = darker bg + tighter spacing + heavier weight + smaller size
- OPENING = lighter bg + more whitespace + lighter weight + larger size
- Never mix directions at the same boundary

RESTRAINT: Richness = density x restraint x spatial confidence
- Maximum 4 distinct mechanisms per viewport-height screenful
- Every third of page (by scroll depth) has >= 2 distinct mechanisms
- What you DON'T add matters as much as what you do
- If the page feels busy, REMOVE. Do not add more.

## WHAT COMPOSED LOOKS LIKE (1 boundary from CD-006, scored 39/40)

Zone 2 -> Zone 3 (overview to deep-dive):
  Background: #FEF9F5 -> #F0EBE3 (18 RGB delta, visible warmth shift)
  Font-size: 18px -> 16px (reader registers "denser")
  Spacing: padding 64px -> 48px (compression = deeper territory)
  Border: none -> 3px solid #E83025 (hard cut = new domain)
  Letter-spacing: 0.04em -> 0.02em (tightening echoes compression)

5 channels shift TOGETHER, all point DEEPER.
Reader feels the transition without analyzing it.

Your page has different content. Your boundary values will differ.
The PATTERN (multiple channels, same direction) transfers. The VALUES do not.

## CREATIVE AUTHORITY

You may override ANY non-soul value if you document WHY with compositional
reasoning. Soul values (border-radius: 0, box-shadow: none, container 960px,
font trinity) are LOCKED. Everything else is a SUGGESTION you can improve upon.

## SELF-CHECK (after first draft, before final output)

SCALE CHECK:
Q1: Squint at full page. Do you see rhythm? (Y/N)
Q2: Look at one section. Same rhythm inside it? (Y/N)
Q3: Look at one component. Does it echo page-level pattern? (Y/N)
If any N: add mechanism deployment at that scale.

CHANNEL CHECK:
Q4: At each zone boundary, count CSS properties that change.
    List: boundary X: [bg, font-size, spacing] = 3 channels.
    If any boundary < 3: add channel shifts.
Q5: Do all shifts at each boundary point the same direction? (Y/N)
    If N: identify contradictory channel and align.

RESTRAINT CHECK:
Q6: Any viewport-height section with >4 distinct mechanisms? (Y/N)
    If Y: redistribute to sparser sections.
Q7: Does every third of the page have >= 2 mechanisms? (Y/N)
    If N: add deployment to sparse section.

SPATIAL CONFIDENCE:
Q8: Remove all color mentally. With only spacing and borders,
    does the page still feel structured? (Y/N)
    If N: spatial skeleton is incomplete. Fix before adding richness.
```

**Line count: ~152 lines.** Within the 170-line budget. Could expand to 170 with additional examples or clarifying notes as needed.

---

**END REPORT**

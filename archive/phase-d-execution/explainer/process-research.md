# Phase D Process Research — Plain English Explanation

**Author:** process-researcher
**Date:** 2026-02-14
**Purpose:** Explain what Phase D tested, what each variant did, and what all the jargon means

---

## What Phase D Was Testing

Phase D was a validation experiment to test whether the design system tools work properly. Think of it like a final exam before graduating — you've built all these tools, now you need to prove they actually work in real conditions.

The team tested 5 different web pages, each built a different way, to see:
1. Can builders actually use the component library?
2. Can builders create good designs from scratch using only the tools?
3. Do the safety mechanisms work (the ones meant to prevent copycat designs)?
4. Which approach produces the best results?

All 5 pages used the same content (a technical article about AI agent architecture) but each page was built using different instructions and different levels of access to the component library.

---

## The Two Tracks

### Track 1: Assembly (Like Building with LEGO)

**What it means:** You have a box of pre-made components (like LEGO bricks) and you just snap them together to build a page.

**The task:** Take the content and add visual structure by picking components from the library.

**Analogy:** You're decorating a house with furniture from IKEA. You don't design the furniture, you just choose which pieces go where.

**What they built:** page-A (track-1-assembly.html)

**Time:** ~8 minutes (fastest)

**Result:** INSTANT FAIL — The builder didn't follow the rules and used forbidden design elements (pure white backgrounds, wrong colors, wrong spacing). It's like they grabbed furniture from Target instead of IKEA — broke the soul constraints.

---

### Track 2: Compositional (Like Writing Original Music)

**What it means:** You create a custom design from scratch by analyzing the content deeply and inventing a visual metaphor that makes the content easier to understand.

**The task:** Read the content, identify what makes it difficult, create a creative solution (a metaphor), then build a page that uses that metaphor.

**Analogy:** You're a musician writing an original song. You can't just play covers — you need to compose something new that fits the mood and message.

**What they built:** 4 variants (pages B, C, D, E)

**Time:** 12-40 minutes depending on variant

**Result:** Mixed — 1 conditional pass, 3 fails (but for different reasons)

---

## What is a "Metaphor" in This Context?

A metaphor is a creative visual structure that helps readers understand difficult content.

**Example from Variant C:**
- **Content problem:** The article talks about engineers transforming from "coders" to "orchestrators" — they're still engineers, but also something new. That's hard to explain.
- **Metaphor solution:** Use the idea of metamorphic rocks (rocks that transform under pressure but keep their original identity). A rock can be BOTH shale AND slate at the same time.
- **Visual implementation:** Use visual zones on the page that represent different "transformation stages" — just like rock layers represent different states of transformation.

**Why metaphors?** Because some content is too complex for simple headings and paragraphs. A good metaphor creates structure that makes relationships visible.

---

## The Four Variants (A, B, C, D) — What Made Each Different?

All four variants did the same task (Track 2 compositional derivation) but with different rules:

### Variant A: Skill-Only (The Blind Artist)

**The rules:**
- You have a creative process (the tension-composition skill) to follow
- You CANNOT look at the component library at all
- You must create everything from scratch using only basic building blocks (colors, fonts, spacing)

**The point:** Prove that the creative process works even without library inspiration.

**What they built:** Blueprint metaphor (architectural drawings with Plan View, Elevation View, Section Cut)

**Time:** ~30 minutes

**Result:** CONDITIONAL FAIL — Good creativity (3/5 novelty), but container too wide (96 CPL — characters per line — makes text hard to read). Like a beautiful painting that's the wrong size for the wall.

**Metaphor novelty:** 3/5 (relatively novel — blueprints are not in the library)

---

### Variant B: Weak Permission (The Hesitant Shopper)

**The rules:**
- Same creative process as Variant A
- Library is "available for reference" but NOT required
- Builder can choose whether to look at library or not

**The point:** Test if giving soft permission to use the library changes behavior.

**What they built:** Laboratory metaphor (Safety Briefing, Measurement Protocol, Calibration Reference)

**Time:** ~26 minutes

**Result:** CONDITIONAL PASS — Best technical compliance (18/19 checks passed), novel metaphor (4/5 novelty), borderline container width (might be slightly too wide)

**Metaphor novelty:** 4/5 (very novel — lab equipment is not in the library)

**Surprising finding:** Weak permission had ZERO effect — the builder never looked at the library. Saying "you can use this if you want" doesn't change behavior at all.

---

### Variant C: Anti-Gravity (The Guarded Creative)

**The rules:**
- Same creative process as A and B
- Library is FORBIDDEN during the creative phase (Phases 0-3)
- After committing to a metaphor, you check: "Is my metaphor too similar to library examples?"
- If it's too similar (>40% overlap), you must either justify the similarity or start over
- Special "Phase 3.5 gate" enforces this check

**The point:** Test if anti-gravity mechanisms prevent copycat designs while still allowing creative freedom.

**What they built:** Metamorphic geology metaphor (diagenetic zones → low-grade → medium-grade, representing transformation stages)

**Time:** ~40 minutes (slowest — extra verification steps)

**Result:** FAIL — Container too narrow (~650px at 1440px viewport), metaphor converged to library (85% similar to OD-004 which uses geological layers)

**Metaphor novelty:** 1/5 (low — very similar to OD-004's geological stratification)

**The controversy:** The report says Variant C failed the anti-gravity test (converged to library pattern), BUT the agent's log shows they DID complete the Phase 3.5 gate and scored 4.5/5 divergence dimensions. The analyst only read the first 200 lines of an 80,000-line log and missed this. So anti-gravity is "disputed" — it might have worked, but the final design still ended up very similar to OD-004.

---

### Variant D: Library-First (The Copycat Baseline)

**The rules:**
- SKIP the creative process
- Read library examples FIRST
- Pick an existing pattern and adapt it to the content
- INTENTIONALLY converge to library (this is the control/baseline)

**The point:** Measure maximum convergence — how much copying happens when you're ALLOWED to copy? This sets a baseline to compare against Variants A/B/C.

**What they built:** Geological stratification (bedrock/strata/topsoil/atmosphere) — deliberately copied OD-004

**Time:** ~12 minutes (second-fastest — no creative work, just adaptation)

**Result:** FAIL — Container too narrow (~750px), but this was EXPECTED because the borrowed metaphor was designed for different content

**Metaphor novelty:** 0/5 (zero — this was intentional copying)

**Visual quality:** HIGHEST of all 5 pages — judges loved it, even though it was a copy. This shows library patterns ARE high-quality, just not novel.

**Key insight:** Borrowing produces beautiful results fast, but at the cost of originality.

---

## Key Jargon Decoded

### "Soul Violations"
**What it means:** Breaking the absolute design rules that define the design system's identity.

**Examples:**
- Using rounded corners (border-radius > 0) — this design system requires sharp edges everywhere
- Using shadows (box-shadow or drop-shadow) — forbidden
- Using pure black (#000000) or pure white (#FFFFFF) — must use near-black (#1A1A1A) and warm cream (#FEF9F5)

**Why it matters:** These are non-negotiable rules. Breaking them is like a vegetarian restaurant serving meat — it violates the core identity.

**Phase D result:** Track 1 had 5 soul violations (pure white header). All Track 2 variants had ZERO soul violations.

---

### "Anti-Gravity"
**What it means:** Design mechanisms that prevent builders from unconsciously copying library patterns.

**The metaphor:** If the library exerts "gravitational pull" (you naturally drift toward copying what you've seen), anti-gravity mechanisms push you away to ensure original thinking.

**5 Anti-Gravity Mechanisms (R1-R5):**

**R1: Phase-Gated Library Access**
- **Rule:** You CANNOT read library examples during the creative phase (Phases 0-3)
- **Why:** If you see examples before committing to your own idea, you'll copy unconsciously
- **Verified:** YES — Variant C didn't access library during Phases 0-3

**R5: Binary Sequential Phases**
- **Rule:** You MUST complete phases in order (0 → 1 → 2 → 3 → 3.5 → 4 → 5 → 6 → 7). No skipping.
- **Why:** Skipping phases lets you cheat the process
- **Verified:** YES — Variant C completed Phase 0, then Phase 1 in sequence

**R6: Divergence Mandate (The Controversial One)**
- **Rule:** At Phase 3.5, compare your metaphor to library. If >40% similar AND <3/5 dimensions different, you must regenerate with a different metaphor.
- **Why:** Catch unconscious convergence before you build the page
- **Verified:** DISPUTED — Variant C's log shows they completed the gate and scored 4.5/5 divergence, but the final design was still 85% similar to OD-004. Either the gate passed incorrectly OR similarity was acceptable within the same domain family.

---

### "Tension-Composition Pipeline"
**What it is:** A 7-phase creative process for deriving visual metaphors from content.

**Plain English:** A step-by-step recipe for reading content, identifying what makes it difficult, and inventing a visual structure that solves that difficulty.

**The Phases (simplified):**

**Phase 0: Setup**
- Read the content
- Load the design rules
- Classify the content type (prose-heavy? code-heavy? data-heavy?)

**Phase 1: Multi-Axis Questioning**
- Ask deep questions about the content from 4 perspectives:
  - FEEL: What should readers feel while reading?
  - UNDERSTAND: What relationships need to be clear?
  - DO: What actions should readers take after reading?
  - BECOME: How should readers change after reading?
- This questioning reveals hidden structure in the content

**Phase 2: Tension Derivation**
- Identify the core difficulty: What makes this content hard?
- Example: "Readers need to understand that engineers are BOTH coders AND orchestrators simultaneously" (dual-identity paradox)

**Phase 3: Metaphor Collapse**
- Search for metaphors that naturally resolve the tension
- Test candidates against constraints
- Commit to one metaphor

**Phase 3.5: Metaphor Commitment Gate (Anti-Gravity Checkpoint)**
- Lock in your metaphor
- Check: Is it too similar to library patterns?
- If too similar, justify OR regenerate

**Phase 4: Mechanism Extraction**
- Read the mechanism catalog (NOW you're allowed to see library techniques)
- Pick design techniques that fit your metaphor
- Example: Border weight encoding (4px = strong, 3px = moderate, 1px = weak)

**Phase 5: Divergence Verification (optional)**
- If you consulted library in Phase 3.5, verify you stayed divergent
- Compare implementations, not just metaphors

**Phase 6: Implementation**
- Build the actual page
- Apply metaphor + mechanisms to content

**Phase 7: Verification**
- Run programmatic checks (container width, spacing, colors)
- Run perceptual audit (does it feel good? is it readable?)

---

### "Phase 3.5 Gate"
**What it is:** A mandatory checkpoint between "choosing a metaphor" (Phase 3) and "building the page" (Phase 4-6).

**Purpose:** Catch unconscious copying before you've invested time building.

**The 5 Questions:**
1. Did I derive this metaphor independently (without reading library)?
2. Can I justify why this metaphor fits WITHOUT referencing library examples?
3. Does my metaphor appear in the library index?
4. If yes to #3: Fill out divergence table (5 dimensions of comparison)
5. Passing criteria: ALL 5 questions must favor independent derivation OR divergence table shows 3+ dimensions different

**What happens if you fail:** Regenerate with a different metaphor.

**Variant C example (from the log):**
- Agent chose "Metamorphic Geology" metaphor
- Checked library index
- Found OD-004 uses "Geological Stratification"
- Both geological ← CONVERGENCE DETECTED
- Created divergence table:
  - Dimension 1 (domain): SAME (both geological)
  - Dimension 2 (isomorphisms): DIFFERENT (transformation vs confidence)
  - Dimension 3 (architecture): DIFFERENT (3 zones vs 4-6 layers)
  - Dimension 4 (vocabulary): DIFFERENT (isograd/metamorphic vs bedrock/strata)
  - Dimension 5 (mechanisms): SOME OVERLAP (both use border-weight)
- Score: 4.5/5 different ← PASSED (exceeds 3/5 threshold)
- Verdict: Same family (geological) but different species (metamorphism vs stratigraphy) ← ACCEPTABLE

**The controversy:** Report says Variant C failed R6 because final design was 85% similar to OD-004. Agent log shows gate was completed and passed. This is the "GAP-001: Anti-gravity R6 scoring disputed" issue.

---

### "Perceptual Auditing"
**What it is:** Asking subjective questions about how a design FEELS, not just whether it follows rules.

**Examples of perceptual questions:**
- PA-01: Does any element dominate the upper fold and create anxiety?
- PA-05: Would you put your name on this? (The "ship it" question)
- PA-10: Does the page feel top-heavy? (squint test for balance)
- PA-18: Does any element break the warm neutral palette temperature?

**Why it matters:** You can follow all the technical rules and still create something that feels bad. Perceptual audit catches subjective problems that programmatic checks miss.

**Phase D results:**
- Track 1: Failed perceptual (pure black code blocks felt alien)
- Variant A: Failed perceptual (massive black callout box dominated page, created anxiety)
- Variant B: Passed perceptual (clean lab framing, balanced)
- Variant C: Passed perceptual (elegant geological zones)
- Variant D: Passed perceptual (exceptional layering, judges loved it)

---

### "Container Width" (The Primary Failure Mode)
**What it is:** The maximum width of the main content area at different screen sizes.

**The problem:** 4 out of 5 pages got this wrong. This was THE most common failure.

**The sweet spot:**
- Desktop (1440px viewport): 940-960px container width
- Too wide (>1000px): Text lines are too long (>80 CPL), hard to read
- Too narrow (<940px): Wastes horizontal space, creates awkward layout

**Why it's hard:**
- Track 1 + Variant A: Made container too wide → excessive CPL (112-132 characters per line)
- Variant C + D: Made container too narrow (~650-750px) → wasted space
- Only Variant B hit the sweet spot (~940px)

**CPL = Characters Per Line:** How many letters/spaces fit on one line of text. Optimal: 45-80 characters. Beyond that, eye tracking gets fatigued.

**Why metaphors affect width:**
- Variant D used a "geological core sample" metaphor → narrow vertical container made sense for the metaphor but violated readability guardrails
- This shows metaphor-driven design can conflict with usability rules — you need guardrails to catch this

---

### "Mechanisms"
**What they are:** Specific design techniques for encoding meaning visually.

**Examples:**

**Border-Weight Encoding:**
- Technique: Use different border thicknesses to represent intensity/importance
- OD-004 example: 4px = established fact, 3px = probable, 2px = speculative, 1px = open question
- Variant C example: 4px = diagenetic zone, 3px = low-grade metamorphic, 1px = medium-grade

**Spacing Compression:**
- Technique: Reduce vertical spacing between related items to show they belong together
- Example: 8px between related bullets, 32px between different sections

**Background Warmth Gradient:**
- Technique: Use subtle background color shifts to show progression
- Variant C example: #FEF9F5 (cool) → #FAF5ED (warmer) → #F0EBE3 (warmest) to represent temperature zones

**Why they matter:** Mechanisms are the vocabulary of compositional design. Without them, you can't encode complex relationships visually.

**Phase D target:** Use 8+ mechanisms per page. Variants A/B only achieved 6 because prose-only content limited options (no tables/code blocks to apply mechanisms to).

---

### "Prose-Only Content" (Major Test Limitation)
**What it means:** The test content was 85% narrative text with almost no code blocks, tables, or diagrams.

**Why this was a problem:**
- Many components require specific content types to test:
  - Code blocks → need actual code examples
  - Tables → need data to compare
  - Decision matrices → need choices to evaluate
  - File trees → need directory structures
- Without these content types, 5 out of 9 component families couldn't be tested
- This limited mechanism count to 6 instead of target 8

**Phase D coverage:**
- Tested: 41% of component inventory (11 out of 27 components)
- Untested: 59% of components (all the ones that need code/data/structure)

**Recommendation for Phase D-V2:** Use mixed content (50% prose, 25% code, 15% data, 10% structure) to test more components.

---

### "Library Utilization"
**What it means:** What percentage of the final page was built using pre-made library components vs custom code.

**Results:**
- Track 1: 79% library utilization (used 10 component families from library)
- Variant A: 0% library utilization (skill-only, created everything custom)
- Variant B: 0% library utilization (weak permission had no effect)
- Variant C: 47% library utilization (used library callouts within custom zones)
- Variant D: 68% library utilization (intentionally copied library pattern)

**The Hypothesis Test:**
- H1: Library-first creates gravitational pull → CONFIRMED (Variant D = 68% utilization, 0/5 novelty)
- H3: Weak permission enables balanced use (20-40%) → FAILED (Variant B = 0% utilization, same as skill-only)

**Why weak permission failed:** Saying "library is available but not required" is too subtle. Builders treated it the same as "forbidden" — no behavioral difference.

---

## What Phase D Proved

### VALIDATED ✅

1. **Library sufficiency:** Track 1 demonstrated 79% utilization across 10 component families — library components ARE usable
2. **Skill effectiveness:** Variants A/B created competent layouts without library (proves creative process works)
3. **Token compliance:** All Track 2 variants achieved 97-100% compliance with design tokens (colors, fonts, spacing)
4. **Anti-gravity R1+R5:** Phase-gated access and sequential phases prevented early library exposure (verified for Phases 0-1)
5. **Perceptual quality:** 4/5 pages passed perceptual audit — judges said they would ship them

### FAILED ❌

1. **Container width control:** 4/5 pages violated width guidelines (primary failure mode)
2. **Anti-gravity R6:** Variant C converged to geological domain (85% similar to OD-004) despite gate completion
3. **Weak permission:** Had zero measurable effect on builder behavior
4. **Track 1 always-load protocol:** Builder didn't read prohibitions first, caused 5 soul violations

### DISPUTED / UNKNOWN ⚠️

1. **Phase 3.5 gate effectiveness:** Agent log shows gate was completed and passed (4.5/5 divergence), but final design still converged (85% similar). Either the gate passed incorrectly OR same-family convergence is acceptable.
2. **Component coverage:** Only 41% tested due to prose-only content — need Phase D-V2 with mixed content

---

## Overall Verdict: CONDITIONAL PASS

**Translation:** The tools work well enough to proceed, but with important caveats.

**Proceed because:**
- Library components ARE usable (Track 1 proved this)
- Creative process produces quality (Track 2 variants passed perceptual audit)
- Soul constraints survived tension resolution (zero violations across Track 2)

**Proceed WITH caveats:**
- Fix container width guidance (4/5 pages failed this)
- Strengthen anti-gravity enforcement OR accept same-family convergence
- Test with mixed content before Phase E migration
- Enforce always-load protocol for Track 1

**Block if:** Phase 3.5 gate is fundamentally broken (would need full Variant C log audit to determine).

---

## Next Steps (Recommended)

1. **Read full Variant C log** (lines 200-80,000) to verify Phase 3.5 gate was actually present
2. **Fix GAP-001 (anti-gravity):** Make Phase 3.5 gate BLOCKING (regenerate required if <3/5 divergence)
3. **Fix GAP-002 (content):** Create mixed content for Phase D-V2 (code + data + structure, not just prose)
4. **Fix GAP-004 (bridging docs):** Add examples for using library components within custom metaphors
5. **Run Phase D-V2** with fixes, test stronger weak permission + low-confidence components
6. **Proceed to Phase E** only after D-V2 validates fixes

---

## Construction Consciousness Note

This entire validation operated within the **Identity + Enablement lens** — a specific design philosophy that values:
- Sharp edges (border-radius: 0)
- Warm editorial palette
- Compositional flexibility through metaphor

**This does NOT prove objective design correctness.** It proves tool fitness for THIS lens, THIS content type (fortress-type technical docs), and THIS viewport range (1440px + 768px).

Different lens → different rules → different validation criteria.

Use Phase D data for SIMILAR content (dense docs, prose-dominant, desktop viewports). Do NOT extrapolate to DISSIMILAR content (marketing pages, mobile-first, visual-dominant).

The epistemological boundary matters.

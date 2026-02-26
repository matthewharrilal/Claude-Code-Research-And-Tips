# Evaluation Research — How We Scored the Pages (Plain English)

**Research completed:** 2026-02-14
**Purpose:** Explain the evaluation system, metrics, and findings in simple terms

---

## Overview: What We Were Testing

The Phase D experiment asked: **If you give an AI agent examples to learn from, does that help or hurt creativity?**

We tested 5 different approaches by having agents build the same webpage with different levels of access to a library of 15 example designs.

---

## Who Evaluated the Pages

The pages were scored by **4 different evaluators** working in parallel:

1. **Programmatic Auditor** (robot evaluator) — checked 19 automated rules on all 5 pages
2. **Visual Judge A** (human-like evaluator, familiar with design system) — answered 23 subjective quality questions
3. **Visual Judge B** (human-like evaluator, fresh perspective) — answered same 23 questions with zero background knowledge
4. **Integration Auditor** — combined all findings into a final verdict

---

## The Scoring Metrics (What We Measured)

### Metric 1: CPL (Characters Per Line)

**What it means:** How many characters of text fit on one line before wrapping to the next.

**Why it matters:** Lines that are too wide hurt readability. Your eyes get tired tracking across super-long lines and have trouble finding the start of the next line.

**The rule:** Text should be **45-80 characters per line** for comfortable reading.

**What we found:**
- Page A (Assembly): **112-132 CPL** — way too wide ❌
- Page B (Skill-Only): **96 CPL** — still too wide ❌
- Page E (Weak Permission): **~80-85 CPL** — borderline acceptable ✓
- Pages C & D: Used narrower containers, so CPL was fine ✓

**The fix:** Reduce container width OR increase font size to bring lines into the 45-80 range.

---

### Metric 2: PA Score (Perceptual Audit Score)

**What it means:** A visual quality checklist with 48 questions like "Does this feel like one designer made it, or three?" and "Is any text uncomfortable to read?"

The questions are split into two tiers:
- **Tier 1 (5 questions):** Mandatory — these are deal-breakers
- **Tier 2 (15 questions):** Standard — these measure polish and flow

**Scoring:** Each question is PASS or FAIL. Total score out of 20 points (5 from Tier 1 + 15 from Tier 2).

**Example questions:**
- "What's the first thing that bothers you?" (Tier 1)
- "Would you put your name on this?" (Tier 1)
- "If you squint, does the layout look balanced?" (Tier 2)
- "Do all grays/neutrals feel like the same family?" (Tier 2)

**What we found:**
- **Variant B (Weak Permission): 19/20** — best score
- **Variant C (Anti-Gravity): 19/20** — tied for best
- **Variant A (Skill-Only): 13/20** — flawed (black box issues)
- **Variant D (Library-First): 13/20** — flawed (heavy black header)
- **Track 1 (Assembly): 11/20** — multiple failures

**Key insight:** The two highest-scoring pages were built by agents who either had optional library access (Variant B) or had enforced creativity rules (Variant C). The library-first copying approach (Variant D) scored lowest despite being 2x faster.

---

### Metric 3: Mechanism Count

**What it means:** Design patterns and techniques the page uses to organize information.

Think of mechanisms as "compositional tools" — ways to show relationships, create hierarchy, or guide the reader's eye.

**Examples of mechanisms:**
- **2-Zone DNA:** Every section has a "label" zone and a "content" zone
- **Border-weight encoding:** Thicker borders = more important content
- **Spacing compression:** Padding gets tighter as content gets deeper (80px → 48px → 32px)
- **Progressive disclosure:** Start with overview, reveal details on demand

The library has **18 mechanisms** total. Track 2 pages should use at least **8 mechanisms** to demonstrate compositional flexibility.

**What we found:**
- **Variant D (Library-First): 8 mechanisms** — target met ✓
- **Variant C (Anti-Gravity): 7 mechanisms** — close ✓
- **Variant A (Skill-Only): 6 mechanisms** — below target ❌
- **Variant B (Weak Permission): 6 mechanisms** — below target ❌

**The problem:** All Track 2 pages were built with **prose-only content** (no code blocks, no tables, no diagrams). This makes 4-5 mechanisms impossible to use.

For example, you can't demonstrate the "code block highlighting" mechanism if your content has no code. You can't show the "data table" mechanism if you have no tabular data.

**Verdict:** The low mechanism counts are a **content problem, not a creativity problem**. Next round needs mixed content (50% prose, 50% code/tables/diagrams).

---

### Metric 4: Novelty Score (0-5 Scale)

**What it means:** How original is the design metaphor compared to the library examples?

**Scoring rubric:**
- **0** = Exact library match (0-1 dimensions different)
- **1** = Same domain, minor variation (geology vs geology)
- **2** = Same domain, different structure
- **3** = Different domain, some overlap
- **4** = Different domain, minimal overlap
- **5** = Completely novel domain

**Dimensions we check:**
1. **Domain** — What world does the metaphor come from? (geology, architecture, laboratory, etc.)
2. **Isomorphisms** — What structural mappings does it use? (bedrock=certainty, blueprint=multi-view, etc.)
3. **Architecture** — How many layers/zones/sections?
4. **Vocabulary** — What specific terms appear? (stratum, isograd, drawing number, etc.)
5. **Mechanisms** — What techniques does it use?

**What we found:**
- **Variant B (Weak Permission): 4/5** — Laboratory/scientific measurement domain (completely fresh)
- **Variant A (Skill-Only): 3/5** — Architectural blueprint domain (different from library)
- **Variant C (Anti-Gravity): 1/5** — Geology domain (same family as library example OD-004)
- **Variant D (Library-First): 0/5** — Exact copy of OD-004 (intentional)

**The surprise:** Variant C was supposed to be the most creative (strict rules preventing library access). But it converged to the same **geological domain** as library example OD-004, even though the agent never directly read that example.

**Why did this happen?** Pattern "leakage" — other required documents casually mentioned geological patterns from OD-004, which primed the agent's thinking.

---

### Metric 5: Token Compliance

**What it means:** Does the page use CSS values from the design system's defined list?

The design system has **65 tokens** (pre-approved values) for things like:
- **Colors:** `--color-primary: #E83025` (warm red), `--color-background: #FEF9F5` (cream)
- **Spacing:** `--space-4: 16px`, `--space-8: 32px`, `--space-10: 40px`
- **Typography:** `--text-base: 1rem` (16px), `--text-lg: 1.25rem` (20px)

**The rule:** ALL colors, spacing values, and font sizes should come from the token list. No inventing random values.

**What we found:**
- **Track 1 (Assembly):** Used `#808080` gray (not in palette), `2px` padding (should be `4px` multiples) ❌
- **Variants B, C, D, E:** 97-100% token compliance ✓

**Verdict:** Assembly approach failed token compliance because the builder didn't read the rules first. Creative approaches all respected the token system.

---

## The Four Hypotheses We Tested

### H1: Library constrains novelty (A >> D)

**Prediction:** Skill-only (Variant A) should produce MUCH HIGHER novelty than library-first (Variant D).

**Results:**
- Variant A novelty: **3/5**
- Variant D novelty: **0/5**
- Delta: **+3 points**

**Verdict: ✅ CONFIRMED**

Library-first copying produces zero novelty (by design). Skill-only produces moderate novelty.

---

### H2: Anti-gravity preserves novelty (C >= A)

**Prediction:** Anti-gravity enforcement (Variant C) should have novelty >= skill-only (Variant A).

**Results:**
- Variant C novelty: **1/5**
- Variant A novelty: **3/5**
- Delta: **-2 points**

**Verdict: ❌ REJECTED**

The anti-gravity mechanisms FAILED to prevent convergence. Variant C (strict rules) converged to geology domain, producing LOWER novelty than Variant A (no rules).

**Why?** Even without direct library access, the agent absorbed patterns through indirect references in other documents.

---

### H3: Anti-gravity improves quality (C PA > A PA)

**Prediction:** Anti-gravity (Variant C) should have HIGHER visual quality than skill-only (Variant A).

**Results:**
- Variant C PA score: **19/20**
- Variant A PA score: **13/20**
- Delta: **+6 points**

**Verdict: ✅ CONFIRMED**

Anti-gravity enforcement produced significantly better visual quality, even though it didn't preserve novelty.

**Key insight:** Quality and novelty are INDEPENDENT. You can have high-quality derivative work (Variant C) or low-quality original work (Variant A).

---

### H4: Weak permission insufficient (C > B)

**Prediction:** Anti-gravity (Variant C) should have HIGHER novelty than weak permission (Variant B).

**Results:**
- Variant C novelty: **1/5**
- Variant B novelty: **4/5**
- Delta: **-3 points**

**Verdict: ❌ REJECTED**

Weak permission ("library available but not required") produced the HIGHEST novelty of all creative variants.

**The paradox:** Soft framing ("you can use it if you want") produced MORE creativity than hard enforcement ("you absolutely cannot look").

---

## The Anti-Gravity Paradox

**What we expected:** Strict rules preventing library access would force maximum creativity.

**What happened:**
- Variant C (anti-gravity) scored **1/5 novelty** (lowest among creative variants)
- Variant B (weak permission) scored **4/5 novelty** (highest)

**The pattern:**
- When you **prohibit** something, the agent feels pressure to eventually consult it
- When you make it **optional**, the agent feels free to skip it entirely

**Real-world analogy:**
- Tell a teenager "you absolutely cannot read that book" → they sneak it
- Tell a teenager "you can read it if you want, your choice" → they ignore it

**The lesson:** **Autonomy beats enforcement** for creativity.

---

## Cross-Variant Findings

### Finding 1: Container width is THE critical variable

**The problem:** 4 out of 5 pages failed the 940px sweet spot.

**Two failure modes:**
1. **Too wide (Pages A, B):** 1000-1052px containers → 96-132 characters per line → eyestrain
2. **Too narrow (Pages C, D):** 650-750px containers → wastes horizontal space → cramped feel

**The winner:** Page E (Weak Permission) hit **~940px** perfectly.

**The fix:** Guidance needs to be clearer: "Container width MUST be 940-960px at 1440px viewport (65-67% of screen width)."

---

### Finding 2: Pure black breaks soft color schemes

**Who failed:** Variants A (Skill-Only) and D (Library-First) both used pure black backgrounds.

**Evaluator feedback:**
- "The black box feels alien to the warm palette"
- "Looks like an error dialog pasted onto an otherwise calm page"
- "Oppressive and crushing"

**Who succeeded:** Variants B (Weak Permission) and C (Anti-Gravity) used warm grays instead.

**The lesson:** When building a warm, soft palette (cream, tan, warm gray), harsh black stands out as a visual error.

---

### Finding 3: Speed vs. quality trade-off

**Build times:**
- Variant D (library-first): **37 minutes** → 13/20 quality
- Variant C (anti-gravity): **78 minutes** → 19/20 quality
- Variant B (weak permission): **86 minutes** → 19/20 quality
- Variant A (skill-only): **117 minutes** → 13/20 quality

**The pattern:** Library-first copying is **2x faster** but produces **30% lower quality** (13 vs 19 points).

**Trade-off confirmed:** You can have it fast (copy from library) or good (derive from scratch), but not both.

---

### Finding 4: Pattern leakage is unavoidable

**The case:** Variant C (anti-gravity) was PROHIBITED from reading library examples during Phases 0-3. But they still converged to the geological domain (same as library example OD-004).

**How?** Indirect exposure through other required documents:
- `prohibitions.md` mentions "OD-004 uses 2px borders for confidence encoding" (3 references)
- `mechanism-catalog.md` shows "OD-004 geological strata with 4px/3px/2px border gradient" (8 references)

**The result:** Even "blind" agents absorb patterns through casual mentions.

**The lesson:** You cannot fully prevent convergence. Even without direct examples, agents pick up vocabulary and structural patterns from related documents.

---

## What the Metrics Actually Mean

### Programmatic Checks (19 binary tests)

These are YES/NO checks that a computer can verify automatically:

**Soul constraints (6 checks):**
- Border-radius = 0 on all elements (sharp corners everywhere)
- Box-shadow = none (flat surfaces, no shadows)
- No pure white (#FFFFFF) or pure black (#000000) in content areas
- Fonts match trinity (Instrument Serif for headings, Inter for body, JetBrains Mono for code)
- No 2px borders (allowed: 0, 1px, 3px, 4px)

**Guardrails (8 checks):**
- Container width ≥940px at desktop, ≥499px at mobile
- Padding ≥32px per side
- Label-to-heading gap ≥16px
- Compression ratio ≥40% (padding gets tighter as you go deeper)
- Characters per line: 45-80
- Line-height ≥1.5 on body text
- Section breathing ≥48px (space between major sections)

**Tokens (3 checks):**
- All colors from defined palette
- All spacing values are multiples of 4px
- Fonts match trinity (redundant check for font loading)

---

### Visual Judges (23 subjective questions)

These require human-like judgment:

**Tier 1 questions (5 mandatory):**
1. What's the first thing that bothers you?
2. Is any text uncomfortable to read? Point to the worst spot.
3. Does this feel like one designer made it, or three?
4. Where does your eye go first? Is that where it SHOULD go?
5. Would you put your name on this? What would you fix first?

**Tier 2 questions (15 standard):**
- Readability: word stacking, paragraph flow, squinting required
- Balance: dead space, weight distribution, margin confidence
- Flow: section transitions, visual ending, pacing
- Grid: column breathing room, left-edge alignment
- Consistency: repeated elements match, visual rhythm
- Color: neutrals feel related, no foreign elements
- Personality: does it match intent?

---

## The Scoring Discrepancy (Important!)

**The problem:** One evaluator almost invalidated the entire experiment.

**What happened:** The report-writer was checking whether Variant C completed a mandatory "divergence gate" (a checkpoint where the agent proves their design is different from library examples).

The logs were **80,000 lines long**.

**The evaluator only read the first 200 lines.**

They concluded: "Gate not found. Variant C FAILED."

**But the gate WAS there** — at line 1,233. The agent had written extensive analysis proving 4.5/5 divergence dimensions, they just buried it deep in the logs.

**The lesson:** When evaluating AI work, you can't just skim the beginning. Important evidence might be anywhere in massive output files.

**Resolution:** The team lead manually verified the full log and found the gate. Variant C was reclassified from "FAIL — gate missing" to "DISPUTED — gate present but convergence questionable."

---

## The Three Critical Gaps

These are the biggest problems discovered during evaluation:

### GAP-001: Anti-Gravity R6 Enforcement Failure

**What it means:** The rule that says "if your metaphor matches the library too closely, you must justify it or start over" didn't block Variant C from converging to geology.

**Severity:** CRITICAL

**What went wrong:** Either the divergence gate was (a) not enforced, (b) not blocking (just advisory), or (c) passed incorrectly.

**The fix:** Make the gate BLOCKING — if overlap >40% and <3/5 dimensions different, agent MUST regenerate, no "justify convergence" option.

---

### GAP-002: Prose-Only Content Limits Component Testing

**What it means:** The essay we used was 85% prose, with no code blocks, no tables, no diagrams. This made 5 out of 9 component families impossible to test.

**Severity:** CRITICAL

**Example:** You can't demonstrate the "code block" component if your content has no code. You can't show the "data table" component if you have no tabular data.

**The fix:** Phase D Round 2 needs **mixed content** (50% prose, 50% code/tables/diagrams) so we can properly test all design patterns.

---

### GAP-003: Mechanism Count Ceiling for Prose Content

**What it means:** The 18 mechanisms include 4 that require non-prose content (code blocks, tables, file trees, decision matrices). Prose-only content has an effective ceiling of ~14 mechanisms.

**Severity:** CRITICAL

**What we found:** Variants A and B scored 6/18 mechanisms (33%). But if we count only prose-compatible mechanisms, they scored 6/14 (43%).

**The fix:** Either (a) use mixed content in Round 2, or (b) adjust targets: prose-only ≥6 mechanisms, mixed content ≥8 mechanisms.

---

## Bottom Line: What This All Means

### What Worked

1. **Weak permission approach (Variant B):** Highest novelty (4/5), tied-best quality (19/20), zero soul violations
2. **Anti-gravity enforcement (Variant C):** Tied-best quality (19/20), but novelty failed (1/5)
3. **Two judges (A + B):** Cross-validation caught issues one judge alone would miss

### What Failed

1. **Library-first copying (Variant D):** Fast (37 min) but low quality (13/20) and zero novelty
2. **Pure prohibition (Variant C):** Didn't prevent convergence despite strict enforcement
3. **Assembly without rules (Track 1):** 5 critical violations from skipping the instructions
4. **Prose-only content:** Limited mechanism testing to 22-44% coverage

### The Paradox

**Soft permission ("library available but not required") produced MORE creativity than strict prohibition ("you must not look").**

This suggests that **autonomy beats enforcement** for AI creativity.

### What Needs Fixing Before Round 2

1. **Container width guidance:** Make 940px floor clearer
2. **Content selection:** Use mixed content (prose + code + tables + diagrams)
3. **Always-load enforcement:** Make "read the rules first" mandatory for assembly builds
4. **Divergence gate:** Make it BLOCKING, not advisory

---

**END EVALUATION RESEARCH**

*All findings translated from technical jargon (CPL, PA score, mechanism count, token compliance, novelty scoring) into plain English for non-technical audiences.*

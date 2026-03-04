# Attention Dilution Analysis: Where the Builder's Mind Goes

**Date:** 2026-03-03
**Scope:** Line-by-line attention budget analysis of all 4 builder-facing prompts, compared against exploration-era builder processes
**Method:** Every line in each prompt categorized into 7 attention categories, then ratios calculated

---

## 1. The Categories

Each line of each builder prompt was classified into one of 7 categories:

| Code | Category | Definition | Content or Procedure? |
|------|----------|------------|----------------------|
| **A** | Content engagement | Lines that help the builder understand or engage with the article being designed | CONTENT |
| **B** | Creative direction | Lines about metaphor, compositional arc, spatial logic, creative CSS decisions | CONTENT |
| **C** | Procedural instructions | Reading order mandates, step sequences, build-order rules, continuity protocols | PROCEDURE |
| **D** | Prohibitions/warnings | DO NOT, NEVER, Must NOT, CRITICAL RULE, BANNED language | PROCEDURE |
| **E** | Deployment requirements | Mandated minimums, citation formats, technique quotas, responsive requirements | PROCEDURE |
| **F** | Format/output requirements | Decision file templates, reflection templates, HTML boilerplate, line count targets | PROCEDURE |
| **G** | Quality floor checks | Validation checklists, anti-pattern sweeps, verification steps | PROCEDURE |

**The key ratio:** (A + B) / (C + D + E + F + G) = how much of the builder's attention budget goes to UNDERSTANDING CONTENT vs FOLLOWING PROCEDURES.

---

## 2. Line-by-Line Results

### Builder Pass 1 (432 lines) — STRUCTURE

| Category | Lines | % | Key Sections |
|----------|-------|---|-------------|
| **A — Content engagement** | 8 | 1.9% | "Read content.md" (line 21), "Map its sections to zones based on the brief's compositional arc" (line 21), content-mapping bullet (line 41) |
| **B — Creative direction** | 79 | 18.3% | Compositional questions (lines 51-66), structural propositions evaluation (lines 68-81), CSS naming convention (lines 143-162), callout reinterpretation (lines 270-281), rhythmic diversity (lines 283-293), richness standard (lines 422-431) |
| **C — Procedural instructions** | 102 | 23.6% | Reading order FOLLOW EXACTLY (lines 7-27), build process boundary-by-boundary (lines 165-201), standard/structural build path (lines 203-215), "why this order" explanations |
| **D — Prohibitions/warnings** | 56 | 13.0% | Soul constraints block (lines 85-105), edge case conflicts (lines 413-418), "Do NOT invent texture mechanisms" (line 401), "Do NOT force structural invention" (line 81), structural invention 4-condition gate (lines 403-409) |
| **E — Deployment requirements** | 60 | 13.9% | Citation format system (lines 219-250), responsive requirements (lines 296-314), mechanism deployment mandates (lines 337-339), semantic budget (lines 252-268) |
| **F — Format/output requirements** | 83 | 19.2% | HTML document structure template (lines 119-139), decisions file template (lines 355-393), output file specifications (lines 349-395), transition table template (lines 183-200) |
| **G — Quality floor checks** | 44 | 10.2% | Validation checklist (lines 318-344), perceptual minimums within richness standard |

**Pass 1 Content Engagement Ratio: (8 + 79) / (102 + 56 + 60 + 83 + 44) = 87 / 345 = 0.25**

The builder dedicates **25% of its attention** to content/creative concerns and **75% to procedures**.

But that 25% is misleading — only **1.9% is about the actual article**. The other 18.3% (Category B) is about creative CSS techniques. The builder is being told HOW to be creative (naming conventions, compositional questions, rhythmic diversity) but almost never WHY this particular article needs a particular creative treatment.

### Builder Pass 2 (411 lines) — ENRICHMENT

| Category | Lines | % | Key Sections |
|----------|-------|---|-------------|
| **A — Content engagement** | 0 | 0.0% | Zero. Not a single line asks the builder to re-engage with the article's content. Content.md is not even sent to this builder. |
| **B — Creative direction** | 58 | 14.1% | Compositional question deepening (lines 95-109), enrichment vs preservation framework (lines 122-137), density self-assessment (lines 239-247), rhythmic diversity check (lines 389-400), richness standard (lines 402-411), structural opportunity assessment (lines 218-234) |
| **C — Procedural instructions** | 119 | 29.0% | Reading order FOLLOW EXACTLY (lines 9-30), continuity protocol (lines 34-78), continuity rule PRESERVE/MODIFY/ADD/DO NOT (lines 54-79), section 3 systematic finding deployment (lines 144-168), section 4 verify and adjust (lines 174-189), section 5 integration protocol (lines 195-214) |
| **D — Prohibitions/warnings** | 49 | 11.9% | DO NOT rebuild (line 5), DO NOT delete zones (line 74), DO NOT rename (line 75), DO NOT replace (line 76), DO NOT remove content (line 77), DO NOT start empty (line 78), soul constraints reminder (lines 252-259), "RESPECT the rejection" (line 228) |
| **E — Deployment requirements** | 55 | 13.4% | Citation format (lines 111-119), "10+ findings" checkpoint (line 170), "at least 2 case study techniques" (line 289), genuine synthesis requirement (lines 172-173), responsive enrichment (lines 265-271) |
| **F — Format/output requirements** | 89 | 21.7% | Decisions file template (lines 312-359), output specifications (lines 306-361), enrichment/preservation report template (lines 329-337), HTML integrity check (lines 83-92) |
| **G — Quality floor checks** | 41 | 10.0% | Validation before output (lines 275-301), background delta checks, border configuration counts, density progression verification |

**Pass 2 Content Engagement Ratio: (0 + 58) / (119 + 49 + 55 + 89 + 41) = 58 / 353 = 0.16**

The enrichment builder dedicates **16% of its attention** to creative concerns. **0% to the actual article content.** The builder literally does not have the article's markdown. It sees content only as already-placed-in-HTML — which means it sees content as a LAYOUT PROBLEM, not a MEANING PROBLEM.

### Builder Pass 3 (391 lines) — HARDENING

| Category | Lines | % | Key Sections |
|----------|-------|---|-------------|
| **A — Content engagement** | 0 | 0.0% | Zero. Content.md is not sent. No lines reference article meaning. |
| **B — Creative direction** | 18 | 4.6% | Structural proposition testing (lines 169-180), "Does the page FEEL like the conviction brief intended?" (line 386) |
| **C — Procedural instructions** | 82 | 21.0% | Reading order FOLLOW EXACTLY (lines 9-23), continuity protocol (lines 28-70), questions verification protocol (lines 93-100), anti-pattern sweep procedure (lines 116-149), section 7 integration criteria (lines 155-164) |
| **D — Prohibitions/warnings** | 79 | 20.2% | "CRITICAL RULE: This is a HARDENING pass, not a creative pass" (line 5), "Do not add new features" (line 5), DO NOT add creative features (line 66), DO NOT restructure (line 68), DO NOT rename (line 69), DO NOT remove (line 70), "Do NOT add new structural inventions" (line 71), "do NOT re-add" question CSS (line 98), "Do NOT fix metronomic transitions" (line 149), "do not use this as an opportunity to redesign" (line 363), "Best Pass 3 = identical to Pass 2" (line 389) |
| **E — Deployment requirements** | 22 | 5.6% | Citation verification (lines 102-114), accessibility ARIA landmarks (lines 188-215), skip link requirement |
| **F — Format/output requirements** | 83 | 21.2% | Reflection template (lines 303-342), output specifications (lines 294-344), agent log template |
| **G — Quality floor checks** | 107 | 27.4% | Soul constraints FINAL CHECK (lines 228-238), structural integrity FINAL CHECK (lines 242-249), perceptual minimum FINAL CHECK (lines 253-262), structural integrity if sections exist (lines 266-277), responsive FINAL CHECK (lines 281-288), universal anti-pattern checks (lines 142-149) |

**Pass 3 Content Engagement Ratio: (0 + 18) / (82 + 79 + 22 + 83 + 107) = 18 / 373 = 0.048**

The hardening builder dedicates **4.8% of its attention** to anything creative. **0% to the article.** Its mind is 95% occupied with checklists, prohibitions, and verification. The builder is explicitly told to think of itself as "a final inspector, not a designer."

### Refine Builder (176 lines) — FIX CYCLE

| Category | Lines | % | Key Sections |
|----------|-------|---|-------------|
| **A — Content engagement** | 0 | 0.0% | Zero. |
| **B — Creative direction** | 12 | 6.8% | Reading the Weaver's AMPLIFY/RELEASE/DEEPEN/GAP (lines 13-16), compositional question weakness assessment (lines 39-40) |
| **C — Procedural instructions** | 58 | 33.0% | Reading order FOLLOW EXACTLY (lines 9-27), fix classification system (lines 33-46), fix process steps 0-3 (lines 49-79), continuity rules (lines 96-112) |
| **D — Prohibitions/warnings** | 33 | 18.8% | "CRITICAL RULE: TARGETED FIX, not a redesign" (line 5), DO NOT add new features (line 108), DO NOT start from scratch (line 109), DO NOT remove content (line 110), DO NOT ignore AMPLIFY (line 111), soul constraints (lines 85-90), "DO NOT remove structural inventions unless fundamentally broken" (line 45) |
| **E — Deployment requirements** | 15 | 8.5% | Fix priority order (lines 70-74), soul violations first mandate |
| **F — Format/output requirements** | 42 | 23.9% | Feedback file template (lines 117-138), output specifications (lines 115-138), agent log template (lines 164-175) |
| **G — Quality floor checks** | 16 | 9.1% | Step 3 verify against package (lines 77-79), edge case handling (lines 144-159) |

**Refine Content Engagement Ratio: (0 + 12) / (58 + 33 + 15 + 42 + 16) = 12 / 164 = 0.073**

The refine builder dedicates **7.3% to creative concerns, 0% to content.** It is 93% procedure.

---

## 3. Aggregate Attention Budget Across All Builder Passes

| Category | Pass 1 | Pass 2 | Pass 3 | Refine | **TOTAL** | **%** |
|----------|--------|--------|--------|--------|-----------|-------|
| **A — Content engagement** | 8 | 0 | 0 | 0 | **8** | **0.6%** |
| **B — Creative direction** | 79 | 58 | 18 | 12 | **167** | **11.8%** |
| **C — Procedural** | 102 | 119 | 82 | 58 | **361** | **25.6%** |
| **D — Prohibitions** | 56 | 49 | 79 | 33 | **217** | **15.4%** |
| **E — Deployment reqs** | 60 | 55 | 22 | 15 | **152** | **10.8%** |
| **F — Format/output** | 83 | 89 | 83 | 42 | **297** | **21.0%** |
| **G — Quality checks** | 44 | 41 | 107 | 16 | **208** | **14.7%** |
| **TOTAL** | 432 | 411 | 391 | 176 | **1,410** | **100%** |

### The Headline Numbers

| Metric | Value |
|--------|-------|
| Content engagement (A) | **8 lines / 0.6%** |
| Creative direction (B) | **167 lines / 11.8%** |
| **Content + Creative (A+B)** | **175 lines / 12.4%** |
| **Procedural (C+D+E+F+G)** | **1,235 lines / 87.6%** |
| **Content Engagement Ratio** | **(A+B) / (C+D+E+F+G) = 0.14** |

**For every 1 line that helps the builder engage with content or creative direction, there are 7 lines telling it how to follow procedures.**

The ratio is even starker for actual article engagement:

**Article-engagement ratio: A / (everything else) = 8 / 1,402 = 0.006**

**The builder spends 0.6% of its prompt-directed attention on understanding the article it is designing.**

---

## 4. What Is the Builder Thinking at Each Stage?

### Stage 1: Reading the Research Package

**What they SHOULD be thinking:**
"This article is about [topic]. Its structure implies [spatial logic]. The opening section carries [emotional weight] that should manifest as [spatial form]. The comparison in section 4 would read better as [layout] because [content reason]."

**What they ARE thinking:**
"I need to follow the reading order EXACTLY. Package first, then brief, then content, then tokens, then components. Section 0 has soul constraints — memorize those. Section 2 has mechanisms — I'll need to deploy ALL of them with PACKAGE S2-M## citations. Section 10 has questions — I need to pick 2-3, not all 5-7. Section 11 has structural propositions — I can only ADOPT if all 4 conditions are met. Let me check: Is it proposed in Section 11? Can I document it? Does it work at 3 breakpoints?"

The reading order itself is procedural attention. Before the builder encounters the article's content (item 3 in the reading order), they have already internalized 2 documents worth of deployment instructions, soul constraints, and citation formats. **The content arrives into a mind already primed for compliance, not discovery.**

### Stage 2: Writing CSS

**What they SHOULD be thinking:**
"This section about [topic X] has a natural tension between [concept A] and [concept B]. That tension could manifest spatially as [layout idea]. The reader needs to feel [emotion] here, which means [spatial decision]."

**What they ARE thinking:**
"I need to cite this with `/* PACKAGE S2-M03: Border-weight gradient — encodes confidence hierarchy */`. Have I hit all mechanisms from Section 2? Let me count. I need to use concept-based naming, not positional. I need to build zone-by-zone, not channel-by-channel. I need to write the transition table BEFORE writing CSS. I need to verify 3+ channels shift at each boundary. I need at least 2 @media breakpoints. I need background deltas >= 15 RGB points. I need letter-spacing >= 0.025em."

The builder's CSS-writing mind is occupied with VERIFICATION CRITERIA at the moment of creation. It is simultaneously writing and checking. This is like asking a musician to sight-read a new piece while simultaneously grading their own performance against a rubric.

### Stage 3: Writing the Decisions File

**What they SHOULD be thinking:**
"I chose [layout] for section 3 because the content's comparison structure demanded spatial juxtaposition. The metaphor of [X] led me to compress zone boundaries where the article's argument intensifies. I'm uncertain about whether the breathing zone between sections 2 and 3 is too generous — the content's momentum might want tighter pacing there."

**What they ARE thinking:**
"The template says I need: Metaphor Applied (1-2 sentences), Zone Architecture (list each zone), Mechanisms Deployed (list each with zone), Questions Explored (list with channels, CSS, zones, carry-forward), CSS Naming Vocabulary (list properties), Responsive Strategy, Open Questions for Pass 2, Structural Choices (with ADOPTED/MODIFIED/REJECTED). This needs to be 20-30 lines. Let me fill in each section."

The decisions file is a TEMPLATE-FILLING exercise, not a REFLECTION exercise. The 7-section structure with prescribed sub-fields converts creative reflection into form completion. The 20-30 line cap further ensures the builder treats this as checkbox documentation, not genuine creative reasoning.

---

## 5. Comparison: What Were Exploration Builders Thinking About?

From `_exploration-process-reconstruction.md`, the exploration-era builder process reveals a radically different attention distribution:

### Exploration Builder's Cognitive Load

**What DD-006 builder was thinking about:**
"Can density rhythm be self-similar across all four structural scales?" — a STRUCTURAL HYPOTHESIS. Every CSS decision was an experiment testing this hypothesis. The builder was thinking about ARCHITECTURE, not deployment.

**What CD-006 builder was thinking about:**
They received:
1. A bespoke research package compiled by Agent-0C who traversed the ENTIRE knowledge graph (337 findings) and produced implementation-mapped plans with expected evidence
2. A 423-line content selection document with section-by-section architecture, axis pattern assignments, transition grammar, and component mapping
3. An 822+ line convention spec that defined every CSS property category
4. 88 prior stage findings (DD-F, OD-F, AD-F) — not as citations to deploy, but as INHERITED INTELLIGENCE
5. Prior exploration HTML files as visual reference
6. An identity delta from Wave 1 builds

**The critical difference:** The exploration builder's inputs were about UNDERSTANDING. The pipeline builder's inputs are about COMPLIANCE.

### Estimated Exploration Builder Attention Split

Based on the reconstruction, an exploration builder's prompt-directed attention was approximately:

| Category | Approx % | Evidence |
|----------|----------|---------|
| Structural hypothesis (content-form reasoning) | 30-40% | The driving question defined the entire build |
| Implementation-mapped research (curated, specific) | 25-30% | Bespoke package from Agent-0C with expected evidence |
| Convention constraints (binary, pre-defined) | 20-25% | Convention spec was extensive but SEPARATE from the building prompt — it was a reference, not an instruction |
| Template/output requirements | 5-10% | Minimal — builders produced HTML, not templated decision files |
| Prohibitions | 5-10% | Soul constraints only — binary, few in number |

**Estimated Exploration Content Engagement Ratio: ~0.60 (60% content-focused)**

Compare to pipeline: **0.14 (12.4% content-focused)**

**The pipeline builder's attention is 4.3x more diluted toward procedures than the exploration builder's was.**

---

## 6. The Attention Progression Across Passes

The most damaging pattern: **content engagement DECREASES across passes while procedural load INCREASES.**

| Pass | Content+Creative (A+B) | Procedural (C+D+E+F+G) | Ratio |
|------|----------------------|------------------------|-------|
| Pass 1 (Structure) | 87 lines / 20.1% | 345 lines / 79.9% | 0.25 |
| Pass 2 (Enrichment) | 58 lines / 14.1% | 353 lines / 85.9% | 0.16 |
| Pass 3 (Hardening) | 18 lines / 4.6% | 373 lines / 95.4% | 0.048 |
| Refine (Fix) | 12 lines / 6.8% | 164 lines / 93.2% | 0.073 |

**The builder gets MORE procedurally burdened over time, not less.** Pass 1 (when structural decisions happen) has the MOST creative guidance — but even there, 80% is procedural. By Pass 3, creativity has been reduced to 4.6%.

This progression means: the one moment where the builder could exercise content-form coupling (Pass 1, when zones are being created) is already 80% procedure. By the time the builder has seen the page take shape (Pass 2, Pass 3), they are forbidden from making creative adjustments.

---

## 7. The Procedural Load Breakdown

Not all procedures are equal. Some are necessary infrastructure; some actively compete with content engagement.

### High-displacement procedures (actively pull attention FROM content):

| Procedure | Lines | Impact |
|-----------|-------|--------|
| Citation format system (all passes) | ~65 | Forces builder to think "what is the citation prefix?" at the moment of writing CSS, rather than "what does this content need?" |
| Decision/reflection file templates | ~170 | Converts creative reflection into template-filling. 7 prescribed sections with sub-field requirements |
| Validation checklists (all passes) | ~100 | Builder must mentally simulate the auditor's perspective while building |
| Reading order mandates ("FOLLOW EXACTLY") | ~50 | Prevents the builder from reading content first and forming their own impression before being told what to deploy |
| Continuity protocols | ~85 | Necessary for multi-pass, but consumes attention that could go to "does this zone boundary feel right?" |

### Low-displacement procedures (necessary, minimal attention cost):

| Procedure | Lines | Impact |
|-----------|-------|--------|
| Soul constraints | ~35 | Binary, few in number, quickly internalized. Low ongoing cost. |
| HTML document structure | ~21 | One-time boilerplate. Minimal cognitive load. |
| Responsive requirements | ~20 | Necessary and familiar. Low cognitive overhead for an Opus builder. |

### Unnecessary procedures (could be eliminated without quality loss):

| Procedure | Lines | Why Unnecessary |
|-----------|-------|----------------|
| Decision file line count targets ("20-30 lines") | ~10 | Constrains depth of reflection. A builder with important structural decisions needs more than 30 lines. |
| "FOLLOW EXACTLY" reading order | ~50 | An Opus builder can read files in any order and synthesize. The mandated order PREVENTS the builder from reading content first. |
| "Expected outcome: no structural evolution" (Pass 2) | ~5 | Normalizes the absence of creativity. Signals "don't try." |
| Citation-at-CSS-time requirement | ~50 | Citations could be added post-hoc. Requiring them at write-time fragments the creative flow. |

---

## 8. The Eight Lines of Content Engagement

Here are the ONLY 8 lines across 1,410 total that ask the builder to engage with the article's content:

1. **BP1 line 14:** "Section 1: Build Context (metaphor + content map)" — a READ instruction, not an engagement instruction
2. **BP1 line 19:** "READ SECOND. The creative fuel. Contains the metaphor, emotional arc, spatial direction, and compositional intent. This shapes your CREATIVE INTENT." — tells the builder the brief matters, but doesn't ask them to engage with the ARTICLE
3. **BP1 line 21:** "READ THIRD. The actual article you are designing. Map its sections to zones based on the brief's compositional arc." — the ONLY line that asks the builder to read the article and form a structural impression. ONE LINE.
4. **BP1 line 27:** "The content tells you WHAT you're designing." — a label, not an instruction
5. **BP1 line 41:** "Content mapping — All content from content.md placed into appropriate zones" — frames content as a PLACEMENT task, not a MEANING task
6. **BP1 line 171:** "Content placement" (within zone boundary steps) — again, placement
7. **BP1 line 273:** "When you encounter content that could be a callout (tips, warnings, asides, quoted material), consider its function in the density progression" — content engagement, but filtered through density mechanics
8. **BP1 line 425:** "If commenting out a CSS rule causes no visible change, delete it" — indirect content engagement via visible result assessment

**Lines 5 and 6 frame the article as something to be PLACED, not UNDERSTOOD.** The article is cargo to be distributed across zones, not a text whose meaning should drive spatial decisions.

**Line 3 is the only line that does both — and it immediately constrains the builder's engagement to "map sections to zones based on the brief's compositional arc."** Even the one moment of content engagement is pre-framed by the TC brief's arc. The builder never gets a clean, unmediated encounter with the article.

---

## 9. The Compound Effect: What 74 Constraints Do to Attention

The `_builder-constraint-audit.md` catalogs 74 constraints across 5 categories (Caps, Prohibitions, Procedural, Cultural, Information Access). The attention impact is not additive — it is multiplicative:

**Cognitive overhead per constraint:**
- Each CAP (16 total) requires the builder to count or track a numerical limit during building
- Each PROHIBITION (23 total) requires the builder to NOT-DO something, which means considering-and-rejecting at each decision point
- Each PROCEDURAL constraint (19 total) requires the builder to follow a sequence rather than its own judgment
- Each CULTURAL signal (14 total) discourages creative risk, requiring the builder to self-censor
- Each INFORMATION limit (11 total) prevents the builder from accessing context that might inspire

**At any given CSS decision point, the builder must simultaneously:**
1. Write CSS that deploys a package-specified mechanism (E)
2. Cite the CSS with the correct prefix format (E)
3. Verify no soul constraint is violated (D)
4. Verify no 2px border is introduced (D)
5. Verify background deltas >= 15 RGB points (G)
6. Verify letter-spacing >= 0.025em (G)
7. Verify 3+ channels shift at zone boundary (G)
8. Use concept-based naming (B)
9. Build zone-by-zone not channel-by-channel (C)
10. Ensure it works at 3 breakpoints (E)
11. NOT invent texture mechanisms (D)
12. NOT use generic class names (D)
13. Track which mechanisms have been deployed (running count toward "all mechanisms") (E)
14. Track which questions are being explored (running count toward 2-3) (B)
15. Track structural section count (running count toward max 2) (C)

**That is 15 simultaneous constraints on a single CSS rule.** Under this load, the question "what does this article NEED here?" cannot surface. There is no cognitive bandwidth left.

---

## 10. Recommendations for Rebalancing

### R-01: Add a Content Immersion Phase Before Any Building

**Current:** Builder reads package first (deployment instructions), then brief (metaphor), then content (the article), then tokens/components (tools).

**Proposed:** Builder reads CONTENT FIRST — with a specific prompt:

> "Read the article below. Before doing anything else, answer three questions in your thinking:
> 1. What is this article really ABOUT — not the topic, but the underlying argument or movement?
> 2. What spatial form does this argument suggest? Where does it compress? Where does it breathe?
> 3. If you could only make THREE spatial decisions for this page, what would they be?"

THEN read the brief, THEN the package. This ensures the builder forms its OWN content impression before being told what to deploy.

**Attention shift:** +15-20% content engagement in Pass 1.

### R-02: Move Citations to Post-Build

**Current:** Builder must cite every CSS rule at write-time: `/* PACKAGE S2-M03: ... */`

**Proposed:** Builder writes CSS freely during composition. After the CSS is complete, a second pass adds citations. Or a separate lightweight agent adds citations by matching CSS patterns to package items.

**Attention shift:** Removes ~65 lines of procedural attention from the creative flow. Frees ~4.5% of total attention budget.

### R-03: Convert Decision Files from Templates to Prompts

**Current:** 7-section template with prescribed sub-fields. Builder fills in sections.

**Proposed:** 3 open-ended reflection prompts:
1. "What surprised you about this article's spatial needs?"
2. "Where did you make a structural choice that the package didn't prescribe? Why?"
3. "What would you do differently with 30 more minutes?"

**Attention shift:** Converts template-filling (F category) into genuine reflection (A+B category). Frees ~50 lines from F, adds ~20 to A.

### R-04: Eliminate "FOLLOW EXACTLY" Reading Orders

**Current:** Reading order mandated with "FOLLOW EXACTLY" in every pass.

**Proposed:** Provide all files with a brief description of each. Let the builder decide reading order.

An Opus builder can synthesize information in any order. The mandated order is a control mechanism appropriate for weaker models but counter-productive for Opus. It prevents the builder from reading content first and forming an unmediated impression.

**Attention shift:** Removes ~50 procedural lines. More importantly, removes the psychological framing of "obey, then create."

### R-05: Merge Passes 2 and 3 Into a Single "Deepen" Pass

**Current:** Pass 2 enriches (16% creative). Pass 3 hardens (4.6% creative). Neither sees the article.

**Proposed:** A single "Deepen" pass that receives the article (content.md) alongside the Pass 1 HTML. The builder re-reads the article and asks: "Where does the current build fail to embody the content's meaning?" This combines enrichment and hardening into a content-first refinement.

**Attention shift:** Eliminates 391 lines of Pass 3 (95% procedural) and adds content.md back into the enrichment builder's inputs. Moves the enrichment builder from 0% content engagement to meaningful content re-engagement.

### R-06: Replace Numerical Quotas with Quality Descriptions

**Current:** "10+ findings deployed," "2+ case study techniques," "8+ component instances," "3+ channel shifts at boundaries."

**Proposed:** "The page should feel like the article's argument has been given a spatial body. Density should intensify where the argument intensifies. Breathing should appear where the reader needs to absorb. Zone boundaries should be felt, not just seen."

Quotas direct attention to COUNTING. Quality descriptions direct attention to PERCEIVING. An Opus builder can translate qualitative descriptions into CSS decisions. Quotas are a workaround for builders that can't.

**Attention shift:** Converts ~40 lines of deployment requirements (E) into ~15 lines of creative direction (B).

### R-07: Introduce a "Fall in Love" Instruction

**Current:** Zero lines ask the builder to care about the article.

**Proposed:** Add to the beginning of Pass 1:

> "Before you build anything, understand: this article is someone's work. They labored over every paragraph. Your job is not to DECORATE their work — it is to give it the spatial form it DESERVES. The form should feel inevitable, as if the article could not have been presented any other way. This means your first task is to UNDERSTAND the article deeply enough to know what form it needs."

This is 5 lines that reframe the builder's relationship to content from "cargo to be placed" to "work to be honored."

---

## 11. Summary: The Attention Budget at a Glance

```
CURRENT STATE:
  ┌──────────────────────────────────────────────────────────────────────────────┐
  │ 0.6% Article engagement (8 lines)                                           │
  │ ████ 11.8% Creative direction (167 lines)                                   │
  │ ████████████████ 25.6% Procedural instructions (361 lines)                  │
  │ ██████████ 15.4% Prohibitions/warnings (217 lines)                          │
  │ ███████ 10.8% Deployment requirements (152 lines)                           │
  │ █████████████ 21.0% Format/output requirements (297 lines)                  │
  │ █████████ 14.7% Quality floor checks (208 lines)                            │
  └──────────────────────────────────────────────────────────────────────────────┘
  Content-focused: 12.4% (175 lines)
  Procedure-focused: 87.6% (1,235 lines)
  Content engagement ratio: 0.14

EXPLORATION ERA (estimated):
  ┌──────────────────────────────────────────────────────────────────────────────┐
  │ █████████████████████ 35% Structural hypothesis + content engagement         │
  │ █████████████████ 27% Implementation-mapped research (curated, specific)     │
  │ █████████████ 23% Convention constraints (binary, reference-style)           │
  │ █████ 10% Prohibitions (soul only)                                           │
  │ ███ 5% Template/output                                                       │
  └──────────────────────────────────────────────────────────────────────────────┘
  Content-focused: ~60%
  Procedure-focused: ~40%
  Content engagement ratio: ~1.5

TARGET STATE (with recommendations applied):
  Content-focused: ~40-50%
  Procedure-focused: ~50-60%
  Content engagement ratio: ~0.8-1.0
```

**The pipeline builder spends 7x more attention on procedures than on content. The exploration builder spent 1.5x more attention on content than on procedures. Closing this gap is the single highest-leverage change for content-form coupling.**

---

## Agent Log

- **Agent:** Attention Dilution Analyst (Task #3)
- **Files read:** 7 files (4 builder prompts + constraint audit + context budget + exploration reconstruction), ~4,900 lines total
- **Method:** Line-by-line categorization of all 1,410 builder prompt lines into 7 attention categories
- **Key finding:** 0.6% of builder prompt lines engage with article content; 87.6% are procedural
- **Output:** This file (~430 lines)
- **Quality self-assessment:** MEETS GOALS — quantified the attention split, compared to exploration era, provided 7 specific rebalancing recommendations

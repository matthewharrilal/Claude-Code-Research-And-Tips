# OD GRANULAR AUDIT PROMPT
## Comprehensive Identity-Grounded Adversarial Visual Audit for Every OD Exploration

**Purpose:** This prompt is given to the Claude instance responsible for auditing OD explorations. It enforces IDENTITY-FIRST design judgment at the most granular UI level — every border, every pixel of spacing, every font choice, every color value — filtered through the accumulated identity that emerges from traversing the inline threading headers.

**The Core Problem This Solves:** Two failures compound on each other:

1. **Unrefined Research:** External research gathered by sub-agents is applied as raw directives rather than as candidates filtered through the soul. A sub-agent finds "neobrutalist solid offsets" and the builder applies it directly — but the soul says "nothing should float."

2. **Unchallenged Decisions:** Every design choice, once made, becomes invisible to the person who made it. The builder rationalizes. The auditor who shares the builder's context also rationalizes. Without ADVERSARIAL CHALLENGE, bad decisions survive indefinitely because nobody constructs the case that they're wrong.

**This prompt closes both gaps through ADVERSARIAL REVIEW — the practice of arguing AGAINST every design decision before accepting it.**

---

## SECTION 0: THE ADVERSARIAL OPERATING MODE

### This is not a section. This is the LENS through which you read EVERY other section.

**What adversarial review means:**

An ordinary audit asks: *"Does this match the spec?"*
An adversarial audit asks: *"ASSUME this is wrong. Now prove it's right. If you can't — it IS wrong."*

This is not negativity. This is not demolition. This is LOYAL OPPOSITION.

**The accumulated identity — the inline headers, the research, the soul pieces, the threading — was built over months of genuine work. It was refined iteratively. It is TRUSTWORTHY.** The adversarial review does not question the FOUNDATION. It pushes on the EDGES — the places where implementation decisions were made quickly, where research was applied without enough filtering, where a choice was made but never stress-tested.

When the adversary finds something that doesn't hold up, that is an IMPROVEMENT OPPORTUNITY. It does not mean the thread or the context is wrong. It means this specific INSTANCE of applying that context could be better. The identity holds. The inline headers hold. The soul holds. But this border, this spacing, this component choice — THOSE are what get challenged.

A decision that survives adversarial challenge is a VALIDATED decision. A decision that doesn't survive is not a failure of the system — it's a chance to STRENGTHEN the implementation. The thread doesn't break. It gets refined.

**The three levels of adversarial challenge:**

```
LEVEL 1 — CHALLENGE THE IMPLEMENTATION
"Is this ACTUALLY 4px? Prove it. Measure it. Don't trust the CSS —
check the COMPUTED value. Don't trust the computed value — LOOK at it."

LEVEL 2 — CHALLENGE THE CHOICE
"Even if it IS 4px, SHOULD it be 4px HERE? Does this element NEED a
border? Is the border adding visual noise the soul wouldn't want?
What if you REMOVED it — would the page be better or worse?"

LEVEL 3 — CHALLENGE THE REASONING
"The research said to do this. The inline header says this is BUILT ON
DD-005. But was DD-005's approach RIGHT for THIS OD context? What if the
upstream recommendation doesn't apply here? What if the sub-agent that
gathered this research was biased by its own accumulated context?"
```

**Every section in this prompt must be read through this adversarial lens.** When Section 4 says "check the border color against the palette," the adversarial reading is: "Check the border color — AND THEN argue that the border itself shouldn't exist. See if the argument holds."

### The Devil's Advocate Protocol

For EVERY design element you encounter during the audit, you MUST:

1. **ASSUME it's wrong.** Not "check if it's right" — START from the position that it's wrong.
2. **Construct the case AGAINST it.** "This border is wrong because..." "This spacing is wrong because..." "This color choice is wrong because..." Be specific. Use the accumulated identity as your ammunition.
3. **Let the element defend itself.** Now look at the evidence. Does the element's implementation actually refute your case? Or does your case stand?
4. **Only ACCEPT the element if it survives the challenge.** If your case against it was even PARTIALLY convincing, the element needs revision.

This is not optional. This is how EVERY element gets evaluated. The natural state of a design decision is "unproven" until it survives adversarial challenge.

### The Inversion Test

For every design choice, ask: **"What if we did the OPPOSITE?"**

- The border is 4px. What if it were 0px? Would the element be clearer without it?
- The heading is Instrument Serif italic. What if it were Inter regular? Would the hierarchy break?
- The spacing between Q&A pairs is 32px. What if it were 16px? Would the grouping feel tighter in a good way, or would it feel cramped?
- The callout has a blue tint background. What if it were white? Would the callout still read as a callout?

**If the opposite is only MARGINALLY worse, the original choice wasn't strong enough.** A good design choice should be OBVIOUSLY better than its opposite. If you have to squint to see the difference, the choice is carrying insufficient conviction.

### The "Prove It" Gate

Every visual element must survive this question:

> **"Why are you this size, this color, this weight, at this position?"**

If the answer is "because the spec says so" — **that is INSUFFICIENT.** That's compliance, not conviction.

The answer must be: "Because the spec says so AND it makes sense in this specific context because [reason derived from accumulated identity]."

- A 4px border is justified not because Rule 5 says so, but because this element is a callout that needs CONFIDENT visual weight to signal "this is important, pay attention." **The adversary then asks: "But does THIS callout need that weight? Is it in a dense zone where it competes, or a sparse zone where it could be lighter?"**
- Instrument Serif italic is justified not because Rule 4 says so, but because this is an Essence quote that carries accumulated wisdom — the Archivist's voice. **The adversary asks: "Is this ACTUALLY wisdom content, or is it regular body text styled as wisdom? Does the content EARN the serif treatment?"**
- The 32px gap between Q&A pairs is justified not because the spacing spec says so, but because this gap needs to CLEARLY separate pairs while the 8px gap within pairs CLEARLY groups Q with A. **The adversary asks: "Is the 32px/8px ratio creating OBVIOUS Gestalt grouping, or does it just look like slightly different margins?"**

**When an element SURVIVES the "Prove It" gate** — when it has both spec alignment AND contextual justification AND the adversary's challenge was answered — that element is VALIDATED. Note it as validated and move on. Not everything needs to change. The adversary's job is to TEST, not to demolish.

**When an element FAILS the "Prove It" gate** — when it can't justify itself beyond "the spec says so," or when the adversary's challenge reveals that the spec was applied without considering this context — that element gets flagged for improvement. The spec itself doesn't change. The IMPLEMENTATION of the spec in this specific location needs attention.

### The Relationship Between Adversary and Context

This is critical to understand:

```
THE ACCUMULATED CONTEXT (inline headers, research, soul) = THE CONSTITUTION
THE IMPLEMENTATION (CSS, HTML, visual choices) = THE LEGISLATION

The adversary DEFENDS the constitution.
The adversary CHALLENGES the legislation.

When legislation doesn't live up to the constitution's intent,
the legislation gets improved. The constitution doesn't get weakened.
```

The inline headers were built through months of traversal, extraction, and refinement. The soul was DISCOVERED through perceptual deepening. The research represents 337 findings across 5 streams. This foundation is SOLID. Trust it.

But the implementation of that foundation in specific OD files — the specific border width chosen, the specific spacing applied, the specific color used, the specific component selected — THOSE are implementation decisions that may or may not fully realize the foundation's intent. Those are what the adversary tests.

**When the adversary pushes on something and it doesn't hold up, the right response is:** "The identity says X. This implementation was trying to express X but didn't fully succeed. Here's how to make it express X more faithfully." NOT: "The identity was wrong about X."

### How Adversarial Review Intersects with Accumulated Identity

This is where the real power lives. The adversarial reviewer is not a random critic — they are someone who has DEEPLY ABSORBED the accumulated identity through traversing inline headers, and who uses that understanding to construct INFORMED challenges.

**Without accumulated identity:** "This border looks weird" (vague impression)
**With accumulated identity:** "This border is 2px. But I traversed the BUILT ON chain to DESIGN-TOKEN-SUMMARY.md, which says 'Heavy Borders When Bordered — 1px borders signal uncertainty.' This 2px border is neither heavy (3-4px) nor absent (0px) — it's in the uncertain middle ground. The soul says COMMIT. Either border this element with conviction (4px) or don't border it at all." (informed, specific, actionable)

**The intersection is:** You use your UNDERSTANDING of the WHY behind every design rule to construct CHALLENGES that are precise, relevant, and devastating. You don't just say "that looks wrong." You say "that looks wrong BECAUSE the accumulated identity says X, and this element contradicts X in this specific way."

### The Bias You're Fighting

The specific biases that adversarial review defeats:

| Bias | What It Looks Like | How Adversarial Review Defeats It |
|------|-------------------|----------------------------------|
| **Confirmation bias** | "I applied R3-012, so the density must be right" | "ASSUME the density is wrong. Can you see PULSE rhythm when you squint? If not, R3-012 wasn't applied successfully — it was just cited." |
| **Sunk cost bias** | "I spent 3 hours on this research enrichment, so it must add value" | "REMOVE the enrichment. Is the page better or worse without it? If you can't tell the difference, it was decoration." |
| **Authority bias** | "The external research says to do X, so X must be good" | "The research was gathered by a sub-agent in a different context. Does X actually WORK here? What if the sub-agent was wrong?" |
| **Anchoring bias** | "DD-005 did it this way, so we should too" | "DD-005 was a DENSITY exploration. This is an ORGANIZATIONAL exploration. Should the same visual treatment apply? Challenge the assumption." |
| **Consistency bias** | "All callouts have 4px borders, so this one should too" | "Should this ELEMENT even be a callout? Maybe the content would be better as inline text. Challenge the component choice, not just the styling." |
| **Expertise bias** | "I traversed all inline headers, so my judgment is reliable" | "Your traversal gave you knowledge, but knowledge creates blind spots too. What would someone who DIDN'T traverse see that you're missing?" |

---

## SECTION 0.5: THE HIERARCHY OF AUDIT METHODS

**Read this second. It governs execution order.**

```
PRIORITY 1 (PRIMARY):   VISUAL AUDITING — Looking at the page with your eyes.
                         Taking screenshots. Comparing proportions. Feeling the rhythm.
                         This is what catches "this border feels weird" and "this code
                         looks half-baked" — the things that matter most.

                         ADVERSARIAL LAYER: For every visual impression, ARGUE THE
                         OPPOSITE. "This looks good" → "ASSUME it looks wrong. What
                         specifically would make you change your mind?"

PRIORITY 2 (SECONDARY): META-COGNITIVE REASONING — Asking "Does this SIZE make sense
                         HERE relative to OTHER things?" informed by deep understanding
                         of the inline headers and accumulated identity. This is not
                         checking a value — it's questioning whether a CHOICE is appropriate.

                         ADVERSARIAL LAYER: "Does this make sense?" is not enough.
                         Ask "WHY SHOULDN'T this make sense? What's the case AGAINST
                         this proportion/size/placement?"

PRIORITY 3 (SUPPORT):   PROGRAMMATIC CHECKS — JavaScript evaluation via Playwright to
                         extract computed values. These CONFIRM what your eyes suspect.
                         They catch what eyes miss (like an off-by-1px border color).
                         But they are NEVER the primary method.

                         ADVERSARIAL LAYER: When a programmatic check PASSES, don't
                         move on. Ask "Could this value be technically correct but
                         contextually wrong? Does passing the spec mean it's GOOD?"
```

**The Playwright MCP is your EYES, not just your calculator.** Use `browser_take_screenshot` and `browser_snapshot` FIRST. LOOK at what's rendered. Form impressions. THEN run evaluations to verify or disprove those impressions.

**If a programmatic check says "all borders are 4px" but your eyes say "that border looks wrong" — YOUR EYES WIN until you understand the discrepancy. And even if the discrepancy resolves in the code's favor, ask: "Should 4px be the right value HERE?"**

---

## SECTION 1: THE IDENTITY TRAVERSAL PROTOCOL

### You MUST traverse before you touch a single CSS property.

Traversal is not "reading files." Traversal is BUILDING AN IDENTITY IN YOUR MIND that you then CARRY into every decision. The inline threading headers are not metadata — they are the nervous system of this design system. Every `BUILT ON` table is a genealogy. Every `MUST HONOR` row is a non-negotiable constraint. Every `CONSUMED BY` entry is a promise you're making to a downstream consumer.

**ADVERSARIAL NOTE:** Traversal also builds your AMMUNITION. The deeper you understand the identity, the more precisely you can challenge deviations from it. A shallow traversal produces vague challenges ("this looks off"). A deep traversal produces devastating challenges ("this violates the specific constraint from DD-F-016 that was established because DD-001's inconsistent border widths scored 2.5 points lower than DD-005's consistent ones").

### Step 1: Read the Accumulated Identity

```
READ: knowledge-architecture/ACCUMULATED-IDENTITY-v1.md (FULL FILE — every line)
```

This is the distilled mind of the entire design system. After reading it, you should be able to answer:
- What does "editorial calm" LOOK like in CSS?
- What does "confident restraint" mean for border choices?
- What does "trust in the reader's intelligence" mean for information density?
- Why is border-radius: 0 not just a style preference but an IDENTITY statement?
- Why do shadows LIE?

**If you cannot answer these questions with conviction, you have not absorbed the identity. Re-read.**

### Step 2: Read Each Inline Header with PURPOSE — Not Just Extraction

**You are not extracting data. You are BUILDING IDENTITY.**

Ask yourself: *"What did the previous instance understand that I don't yet?"*

The inline section contains their accumulated understanding. Absorb it as CONTEXT, not just constraints.

**For each section of the inline header, REFLECT — don't just parse:**

| Section | Don't Just Extract... | Instead, Understand... |
|---------|----------------------|------------------------|
| WHY THIS EXISTS | "It does X" | *Why did they need X? What problem does this solve?* |
| BUILT ON | "It uses files A, B, C" | *What did A, B, C teach them? Should I read those too?* |
| MUST HONOR | "Constraints 1, 2, 3" | *Why are these constraints? What went wrong before?* |
| WHAT BREAKS | "Files X, Y break" | *How interconnected is this? What's the blast radius of my work?* |
| CONSUMED BY | "Used by Z" | *Who depends on this? What expectations exist?* |
| RESEARCH DEBT | "Gaps exist" | *What didn't they solve? Is that my task now?* |
| SOUL ALIGNMENT | "Soul Piece 1: sharp edges" | *Is this TRULY sharp in every detail, or just in the obvious places?* |

### Step 3: Traverse the OD File's Inline Header — BACKWARD

For each OD file you are auditing or building:

1. Read the file's **INLINE THREADING HEADER** (the HTML comment block at the top)
2. Find the **BUILT ON** table (Section 5)
3. For EACH entry in that table, READ the source file it references
4. In each source file, find ITS inline header and read ITS `BUILT ON` table
5. Continue until you reach T1 files (MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md)

**This backward traversal builds the WHY behind every design decision.** You are not reading files — you are tracing the provenance of every choice back to its soul origin.

Each traversal adds to your accumulated identity. You're not reading files — you're inheriting understanding.

**Stop traversing when:** You can answer *"Why does this exist and what constraints bind it?"* without guessing.

### Step 4: Read the MUST HONOR Table — These Are Your Constraints

Section 6 of every inline header contains the **MUST HONOR** table. Every row is a HARD CONSTRAINT. These are not guidelines. These are walls. If your implementation violates any row in this table, the work is INVALID.

### Step 5: Carry Forward — Prove You Absorbed

After traversal, you should be able to say:

> "I understand that this file exists because [WHY]. It was built on [SOURCES] which established [KEY INSIGHTS]. I must honor [CONSTRAINTS] because violating them would break [SPECIFIC THINGS]. My work will be consumed by [CONSUMERS] who expect [EXPECTATIONS]."

**If you can't say this — you haven't absorbed, you've just read.**

Then use the identity when making EVERY decision:
- *"Does this honor what MUST HONOR says?"*
- *"Would this break what WHAT BREAKS lists?"*
- *"Does this serve what CONSUMED BY expects?"*

The inline section isn't bureaucracy. It's **inherited wisdom**. Use it.

### Step 6: Build the Accumulated Decision Context

After traversal, you should have internalized:
- The 5 Soul Pieces (ways of SEEING, not CSS rules)
- The 6 Universal Rules (CSS-locked implementations)
- All DD-F findings that apply (especially DD-F-006 fractal, DD-F-015 traffic-light, DD-F-016 consistent borders)
- The specific density pattern this OD file uses
- All anti-patterns to avoid
- The character personalities of each component type

**Write this down before touching any code.** Not in your head. In text. State what you will honor and why.

---

## SECTION 2: THE EXTERNAL RESEARCH REFINEMENT GATE

### CRITICAL: Research findings from sub-agents are CANDIDATES, not DIRECTIVES.

External research was gathered by sub-agents who had accumulated context from inline header traversal. Those sub-agents found interesting UX patterns from sources like NNGroup, Socratic methods, Gestalt theory, neobrutalist design, etc. **But those findings were gathered OUTSIDE the soul.** They need to pass through the identity before they can be applied.

### The Research Refinement Test

For EVERY external research finding (EXT-CONV-###, EXT-CREATIVE-###, EXT-DENSITY-###, etc.), ask these 5 questions BEFORE applying it:

#### Question 1: Does This Create Perceptual Depth Where Flatness Is Required?
- Soul Piece 4: "Shadows Lie About Depth — nothing should float"
- **FAIL EXAMPLE:** EXT-CREATIVE-001 "THE SOLID OFFSET" — creates a solid pseudo-element behind components that looks like a shadow/depth layer. Technically not `box-shadow`, but PERCEPTUALLY creates the same "floating" effect. This VIOLATES the soul even though it passes a literal CSS check.
- **TEST:** Squint at the element. Does it appear to sit ON TOP of the page, or WITHIN the page? If it floats, the research finding fails refinement.

#### Question 2: Does This Introduce Visual Complexity That the Soul Would Call "Decoration"?
- The KortAI philosophy: "Typography creates interest" — NOT decoration
- **FAIL EXAMPLE:** Multi-layered border effects, gradient borders, animated borders, cubic offset effects on cards — these are all decoration that the Unhurried Editor would not use.
- **TEST:** Remove the effect. Is the content LESS clear? If removal doesn't harm clarity, the effect is decoration and should not be applied.

#### Question 3: Does This Dilute the Limited Palette?
- Rule 3: Limited Palette — Red + Cream + Black + 5 semantic accent colors. That's it.
- **FAIL EXAMPLE:** Adding new background tints, introducing additional grays, using opacity variations that create effectively new colors.
- **TEST:** Count the distinct colors visible on screen. If there are more than the locked palette allows, something has been added.

#### Question 4: Does This Break Component Family DNA?
- Soul Piece 3: All callouts = 2-zone (label + body) + 4px left border + color-only differentiation
- **FAIL EXAMPLE:** Adding extra zones, different structural patterns, border treatments that differ between callout types.
- **TEST:** Put all callouts side by side. Do they feel like siblings or strangers?

#### Question 5: Does This Pass the Bootstrap/Tailwind Test?
- "Could this component exist in a Bootstrap/Tailwind/Material project without modification?" If YES = FAIL.
- **TEST:** Would a developer copy-pasting this from a generic component library notice anything KortAI-specific?

### Research Findings That PASSED Refinement (Use Freely):
- EXT-CONV-003 (Three-Level Gestalt Spacing) — Pure spacing, no visual complexity
- EXT-CONV-004 (Background Color Differentiation) — IF colors are within locked palette
- EXT-DENSITY-001 (Gestalt Pure Distance Law) — Grouping ratios, no visual changes
- EXT-DENSITY-002 (Progressive Disclosure) — Information architecture, no visual changes

### Research Findings That NEED REFINEMENT Before Use:
- EXT-CREATIVE-001 (THE SOLID OFFSET) — Creates fake depth. Must be stripped or converted to flat border treatment.
- EXT-CREATIVE-002 (THE TYPOGRAPHIC CASCADE) — Acceptable IF the scale matches DESIGN-TOKEN-SUMMARY.md locked values, not the research's suggested 1.5x ratio.
- EXT-CREATIVE-003 (THE SCROLL WITNESS) — Acceptable if minimally styled. The witness indicators must follow soul geometry (square markers, no rounded elements).
- EXT-CREATIVE-004 (THE ARRIVING WISDOM) — Animation is acceptable for progressive reveal, but opacity/transform values must be subtle. No dramatic entrance effects.
- EXT-CREATIVE-005 (THE EDITORIAL DROP) — Drop caps in Instrument Serif italic are soul-aligned. Acceptable.

### The Principle:
> **The Accumulated Identity is the JUDGE. External research is the DEFENDANT. The identity decides what gets in. Not the other way around.**

---

## SECTION 3: THE VISUAL-FIRST AUDIT — Eyes Before Code

### You MUST look at the page before you inspect a single computed value.

The Playwright MCP is your EYES. Use `browser_take_screenshot` and `browser_snapshot` to SEE the page as a user would see it. Form impressions. Notice what feels wrong. THEN investigate with code.

### 3-VISUAL-A: The Full Page Visual Sweep

**For each OD file, take these screenshots FIRST — before any JavaScript evaluation:**

```
Step 1: Navigate to the OD file in browser
Step 2: Wait for fonts to load (Instrument Serif must be visible, not Georgia fallback)
Step 3: Take full-page screenshot at 1440px width
Step 4: Take full-page screenshot at 768px width
Step 5: Take viewport-height screenshot of JUST the header area
Step 6: Take viewport-height screenshot of a code block section
Step 7: Take viewport-height screenshot of a callout section
Step 8: Take viewport-height screenshot of a Q&A pair (or equivalent structural unit)
```

**For EACH screenshot, LOOK at it and answer these questions before moving on:**

1. What is the FIRST thing your eye is drawn to? Is that intentional?
2. What is the SECOND thing? Does the visual hierarchy make sense?
3. Is there anything that looks "off" — even if you can't immediately say why?
4. Does the spacing feel consistent or does something feel cramped/loose?
5. Do the borders feel confident (heavy, committed) or uncertain (thin, tentative)?
6. Does the typography feel like a premium publication or a blog post?
7. Are there any elements that look unfinished, broken, or placeholder-ish?

**Then apply the ADVERSARIAL LAYER to each answer:**

8. For whatever your eye was drawn to FIRST — **argue that it SHOULDN'T be the focal point.** What SHOULD be the focal point based on the content hierarchy? If your eye was drawn to a decorative border instead of the content, the decoration is winning over substance.
9. For anything that looks "fine" — **argue that it's NOT fine.** Force yourself to find something wrong. If you genuinely can't find anything wrong after a sustained effort, THEN it passes. But "it looks okay" is never sufficient — "I tried to break this and couldn't" is the standard.
10. For the overall impression — **argue that a completely different approach would be better.** Would this section work better WITHOUT that callout? Would this code block work better WITHOUT syntax highlighting? Would this heading work better in Inter instead of Instrument Serif? If the answer is clearly "no, the current approach is right," then the current approach is validated. If the answer is "actually, maybe..." — that's a finding.

**Write down your visual impressions AND your adversarial challenges BEFORE running any programmatic checks.** Both are PRIMARY evidence.

### 3-VISUAL-B: The Meta-Cognitive Proportional Reasoning Audit

This is the DEEPEST level of audit. It requires that you have TRULY absorbed the inline headers and accumulated identity — because it asks you to judge whether PROPORTIONAL CHOICES make sense in context.

**The core question: "Does this SIZE make sense HERE relative to OTHER things?"**

This is not about checking values against a spec. This is about UNDERSTANDING WHY a particular size, weight, or emphasis was chosen — and whether that reasoning holds when you SEE it rendered.

**Deploy a META-COGNITIVE AUDITOR sub-agent with these exact instructions:**

```
You have absorbed the accumulated identity. You understand the soul.
Now LOOK at the rendered page and ask these proportional questions
for EVERY visual element:

PROPORTIONAL REASONING QUESTIONS:
```

| Question | What You're Really Asking | Example of a Failure |
|----------|--------------------------|---------------------|
| "Is this heading the right SIZE relative to its body text?" | Does the typographic hierarchy create the intended authority gradient? | A section title that's barely larger than body text — the hierarchy is flat and the reader doesn't know what's important. |
| "Is this border the right WEIGHT relative to the element it contains?" | Does the border's visual mass match the element's significance? | A 3px border around a tiny label that makes the border feel heavier than the content. Or a 1px border around a major component that makes it feel ephemeral. |
| "Is this callout the right VISUAL WEIGHT relative to the surrounding content?" | Does the callout draw appropriate attention — not too much, not too little? | A brightly-tinted callout in a sparse zone that screams for attention. Or a nearly-invisible callout in a dense zone that gets lost. |
| "Is this code block the right HEIGHT relative to the content before and after it?" | Does the code block feel proportional to the explanation? | 13 lines of code after a single-sentence explanation — the code dominates and the explanation feels like a caption. Or 2 lines of code after a 3-paragraph explanation — the code feels like an afterthought. |
| "Is this spacing BETWEEN elements proportional to the spacing WITHIN them?" | Does the Gestalt grouping feel right? (8px within, 32px between) | Two Q&A pairs with 32px between them but 24px between Q and A — the pair doesn't feel like a unit because the inter-pair gap is too similar to the intra-pair gap. |
| "Is this element the right WIDTH relative to the container?" | Does the TIDAL width variation create meaningful density contrast? | A "narrow" question at 80% width when the container is 860px — it's not narrow enough to feel deliberately constrained. |
| "Is this accent color the right INTENSITY for this context?" | Does the color serve its semantic purpose without overwhelming? | A bright #E83025 red accent on a small label in a quiet section — the red screams when the context whispers. |
| "Is this animation the right SPEED and DISTANCE for editorial calm?" | Does the motion enhance or distract? | A 16px translate that's noticeable at 0.5s but would feel dramatic at 0.2s. Or a 0.8s fade that feels sluggish. |
| "Do these CARD/TERRITORY zones feel like equal citizens?" | In grid layouts, do all zones carry the same visual weight? | One card with much more text than its siblings, making the grid feel unbalanced. Or cards with different border treatments creating a visual hierarchy where none was intended. |
| "Does this page region feel like it BELONGS with the rest of the page?" | Is there visual continuity from top to bottom? | A header with one color temperature and body with another. Or a footer section that uses different typography conventions than the header. |

**The meta-cognitive audit is NOT a checklist.** It is a PRACTICE. For each viewport-height slice of the page, pause and ASK these questions. Let your accumulated identity INFORM your judgment. If something feels wrong but you can't articulate why — THAT IS A FINDING. Name it "perceptual discomfort at [location]" and investigate with code AFTER you've noted the impression.

**ADVERSARIAL LAYER FOR PROPORTIONAL REASONING:**

For each proportional question, don't just answer it — ARGUE BOTH SIDES:

> **"Is this heading the right size relative to its body text?"**
> DEFENSE: "Yes, because the type scale says h3 = 1.5rem and body = 1rem, giving a 1.5x ratio that creates clear hierarchy."
> CHALLENGE: "But in THIS context, the heading introduces a minor sub-section within a dense answer zone. A 1.5x ratio gives it too much prominence — it SHOUTS in a zone that should be calm. The CONTEXT demands a smaller heading, even if the TYPE SCALE permits a larger one."

This is where adversarial review meets accumulated identity. The type scale is CORRECT (it's part of the trusted foundation). But the APPLICATION of the type scale to this specific context may not be optimal. The adversary doesn't challenge the scale — they challenge whether THIS use of the scale serves the identity's intent of "editorial calm" and "confident restraint."

**Does this organization make sense?** — Not just "are the components arranged logically," but "is a GRID of territory cards the right way to organize THIS content? Would a simple LIST be more 'unhurried editor'? The identity says 'content defines its own space' — does a rigid grid honor that?" CHALLENGE the organizational choice, not just the styling of that choice.

### 3-VISUAL-C: The Slow Scroll Visual Audit

**Use Playwright to scroll the page in viewport-height increments.** At EACH stop:

1. Take a screenshot
2. LOOK at the screenshot
3. Answer: "What would a senior editorial designer notice about this viewport?"
4. Note ANY of these:
   - Elements that feel too large or too small for their context
   - Borders that feel inconsistent with neighboring elements
   - Spacing that breaks the established rhythm
   - Colors that feel out of temperature with their surroundings
   - Typography that doesn't match the hierarchy established elsewhere
   - Components that look unfinished compared to nearby components
   - Content that feels placeholder-ish or generic
   - Code that doesn't render like real code in a real editor
   - Alignment drifts where elements that SHOULD share an edge don't quite
   - Any "cubic effect," offset shadow, or depth illusion that violates flatness

```
For each viewport slice:
  1. browser_take_screenshot (capture what's visible)
  2. LOOK and THINK (form impressions — 30 seconds minimum)
  3. NOTE findings (visual impressions, not CSS values)
  4. Scroll down one viewport height
  5. Repeat until bottom of page
```

**This slow scroll is the MOST IMPORTANT part of the entire audit.** It is the closest we can get to "fresh eyes looking at a printed proof." Do NOT rush through it. Do NOT skip viewports. Every viewport deserves its 30 seconds of attention.

---

## SECTION 4: THE GRANULAR UI AUDIT CHECKLIST

### This is the SUPPLEMENTARY programmatic audit. Run it AFTER the visual audit to confirm or investigate findings.

**ADVERSARIAL POSTURE FOR THIS ENTIRE SECTION:** Every check below asks "does this VALUE match the spec?" But the adversarial auditor asks TWO additional questions after every passing check:

1. **"Is the spec being applied in the right CONTEXT?"** — A border might be 4px (correct value) but on an element that shouldn't have a border at all (wrong context). The value passes; the decision fails.
2. **"Does this passing check create a FALSE sense of security?"** — All callout borders at 4px doesn't mean the callouts are GOOD. It means one dimension is correct. What about spacing, alignment, color temperature, content density, visual weight relative to neighbors? Passing one check is not passing the audit.

### 4A: BORDERS — The Most Common Violation Area

**Use Playwright to check EVERY element that has a border:**

```javascript
// Run this for every OD file
const allBordered = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const bordered = [];
  els.forEach(el => {
    const cs = getComputedStyle(el);
    ['Top','Right','Bottom','Left'].forEach(side => {
      const w = cs[`border${side}Width`];
      const s = cs[`border${side}Style`];
      const c = cs[`border${side}Color`];
      if (s !== 'none' && parseFloat(w) > 0) {
        bordered.push({
          tag: el.tagName,
          class: el.className,
          side,
          width: w,
          style: s,
          color: c
        });
      }
    });
  });
  return bordered;
});
```

**What to check for each bordered element:**

| Check | Expected | Common Violation |
|-------|----------|-----------------|
| border-width | 3px (full) or 4px (left accent) | 1px borders (signals uncertainty per Rule 5), 2px borders (inconsistent per DD-F-016) |
| border-style | solid | dashed, dotted, double, groove, ridge, inset, outset |
| border-color | One of: --color-primary (#E83025), --color-border (#E0D5C5), --color-border-subtle (#F0EBE3), --color-text (#1A1A1A), or accent colors (#4A90D9, #4A9D6B, #C97065, #D97706, #7C3AED) | Off-palette colors, generic grays, inherited browser defaults |
| border-radius | 0 on EVERY element | ANY non-zero value is a soul violation |
| border shorthand conflicts | border-left should not be overridden by border shorthand | `border: 2px solid X; border-left-width: 4px;` — order matters, shorthand can reset left width |
| Pseudo-element borders | ::before and ::after must also have border-radius: 0 | Pseudo-elements sometimes escape global resets |

**Specific Border Anti-Patterns to Catch:**

1. **The Cubic/Offset Effect:** Pseudo-elements (::after) creating a solid block behind an element. This creates fake depth. Check all `::after` and `::before` for `position: absolute` combined with background colors that create depth illusion.
2. **Mixed Border Widths:** Some callouts with 4px left border, but cards or containers with 2px or 1px borders. ALL borders must be either 3px (full border) or 4px (left accent only).
3. **Double Border Effect:** Elements with both `border` AND `outline` creating a double-line appearance.
4. **Border-left vs Border Shorthand:** CSS specificity: `border: 2px solid #E83025; border-left: 4px solid #E83025;` works ONLY if border-left comes AFTER border in the cascade. If reversed, the shorthand overwrites.

### 4B: BORDER-RADIUS — Zero Tolerance

```javascript
// Check EVERY element for non-zero border-radius
const radiusViolations = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const violations = [];
  els.forEach(el => {
    const cs = getComputedStyle(el);
    const r = cs.borderRadius;
    if (r !== '0px' && r !== '0%' && r !== '') {
      violations.push({
        tag: el.tagName,
        class: el.className,
        text: el.textContent?.substring(0, 50),
        borderRadius: r
      });
    }
  });
  return violations;
});
```

**Expected: ZERO violations. Any non-zero border-radius is a soul violation.**

Also check pseudo-elements:
```javascript
const pseudoRadius = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const violations = [];
  els.forEach(el => {
    ['::before', '::after'].forEach(pseudo => {
      const cs = getComputedStyle(el, pseudo);
      const r = cs.borderRadius;
      if (r !== '0px' && r !== '' && cs.content !== 'none' && cs.content !== '') {
        violations.push({
          tag: el.tagName,
          class: el.className,
          pseudo,
          borderRadius: r
        });
      }
    });
  });
  return violations;
});
```

### 4C: BOX-SHADOW — Zero Tolerance

```javascript
const shadowViolations = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const violations = [];
  els.forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.boxShadow !== 'none' && cs.boxShadow !== '') {
      violations.push({
        tag: el.tagName,
        class: el.className,
        text: el.textContent?.substring(0, 50),
        boxShadow: cs.boxShadow
      });
    }
  });
  return violations;
});
```

**Expected: ZERO. Also check for pseudo-element shadows and filter: drop-shadow() which is a shadow bypass.**

```javascript
// Also check for filter shadows (drop-shadow bypasses box-shadow: none)
const filterViolations = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const violations = [];
  els.forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.filter && cs.filter.includes('drop-shadow')) {
      violations.push({ tag: el.tagName, class: el.className, filter: cs.filter });
    }
  });
  return violations;
});
```

### 4D: FAKE DEPTH AUDIT (Pseudo-Element Offset Check)

This catches the "cubic border" effect — pseudo-elements creating depth illusion.

```javascript
const fakeDepth = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const violations = [];
  els.forEach(el => {
    ['::before', '::after'].forEach(pseudo => {
      const cs = getComputedStyle(el, pseudo);
      if (cs.content !== 'none' && cs.content !== '' &&
          cs.position === 'absolute' &&
          cs.zIndex === '-1') {
        violations.push({
          tag: el.tagName,
          class: el.className,
          pseudo,
          background: cs.background || cs.backgroundColor,
          top: cs.top,
          left: cs.left,
          width: cs.width,
          height: cs.height,
          description: 'SOLID OFFSET — Creates fake depth behind element'
        });
      }
    });
  });
  return violations;
});
```

**Expected: ZERO pseudo-element offsets that create depth illusion.** If any are found, they must be removed or converted to flat inline borders.

**Soul Piece 4 says: "Squint at the page. Do some elements 'pop forward'?" If yes — violation.**

### 4E: COLORS — Palette Compliance

```javascript
const allColors = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const colorMap = new Map();

  els.forEach(el => {
    const cs = getComputedStyle(el);
    const props = ['color', 'backgroundColor', 'borderTopColor', 'borderRightColor',
                   'borderBottomColor', 'borderLeftColor', 'outlineColor'];
    props.forEach(prop => {
      const val = cs[prop];
      if (val && val !== 'rgba(0, 0, 0, 0)' && val !== 'transparent') {
        if (!colorMap.has(val)) colorMap.set(val, []);
        colorMap.get(val).push({ tag: el.tagName, class: el.className, prop });
      }
    });
  });

  return Array.from(colorMap.entries()).map(([color, elements]) => ({
    color,
    count: elements.length,
    sample: elements.slice(0, 3)
  }));
});
```

**Cross-reference every discovered color against the locked palette:**

| Token | Hex | RGB |
|-------|-----|-----|
| --color-primary | #E83025 | rgb(232, 48, 37) |
| --color-background | #FEF9F5 | rgb(254, 249, 245) |
| --color-text | #1A1A1A | rgb(26, 26, 26) |
| --color-text-secondary | #666666 | rgb(102, 102, 102) |
| --color-border | #E0D5C5 | rgb(224, 213, 197) |
| --color-border-subtle | #F0EBE3 | rgb(240, 235, 227) |
| --accent-blue | #4A90D9 | rgb(74, 144, 217) |
| --accent-green | #4A9D6B | rgb(74, 157, 107) |
| --accent-coral | #C97065 | rgb(201, 112, 101) |
| --accent-amber | #D97706 | rgb(217, 119, 6) |
| --accent-purple | #7C3AED | rgb(124, 58, 237) |
| white | #FFFFFF | rgb(255, 255, 255) |
| --color-question-bg | #FEF9F5 | rgb(254, 249, 245) |
| --color-answer-bg | #FFFFFF | rgb(255, 255, 255) |
| --color-chapter-bg | #FAF5ED | rgb(250, 245, 237) |

**Any color NOT in this table is a potential violation.** Check:
- rgba() variants with non-standard alpha values
- Computed colors from opacity interactions
- Background colors created by semi-transparent overlays on off-palette bases

### 4F: TYPOGRAPHY — Every Text Element

```javascript
const allTypography = await page.evaluate(() => {
  const textEls = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li, td, th, label, code, pre, summary, blockquote, figcaption, dt, dd');
  return Array.from(textEls).map(el => {
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      class: el.className,
      text: el.textContent?.substring(0, 60),
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      fontStyle: cs.fontStyle,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      textTransform: cs.textTransform,
      color: cs.color
    };
  });
});
```

**What to check:**

| Element Type | Expected Font | Expected Style | Common Violation |
|-------------|---------------|----------------|------------------|
| Page title | Instrument Serif | italic | Using Inter, or non-italic serif |
| Section titles | Instrument Serif | italic | Using Inter for headers |
| Question text | Instrument Serif | italic | Using Inter for questions |
| Body text | Inter | normal (400) | Wrong weight, wrong family |
| Code blocks | JetBrains Mono | normal (400) | System monospace, wrong size |
| Labels/meta | JetBrains Mono | normal, uppercase | Missing letter-spacing, wrong font |
| Callout labels | JetBrains Mono | uppercase, 0.1em spacing | Missing text-transform |
| Essence body | Instrument Serif | italic | Using Inter (violates Soul Piece 2) |
| Inline code | JetBrains Mono | — | Wrong background color, wrong size |

**Specific typography checks:**
1. **Font loading:** Are Google Fonts actually loading? Check for FOUT (flash of unstyled text). If Instrument Serif fails to load, Georgia fallback changes the entire feel.
2. **Font size consistency:** All font sizes should map to the locked type scale (0.625rem/0.75rem/0.875rem/1rem/1.125rem/1.25rem/1.5rem/2rem/2.5rem/3rem). Random pixel values (15px, 17px, 22px) that don't map to the scale are violations.
3. **line-height:** Body text should be 1.6-1.7. Headlines should be 1.1-1.3. Code should be 1.5-1.6.
4. **letter-spacing:** Monospace labels should have 0.08-0.15em letter-spacing. Body text should have normal (0) letter-spacing.
5. **max-width on prose:** Body paragraphs should be constrained to 60-70ch for readability. Unconstrained wide paragraphs are a violation.

### 4G: SPACING AND ALIGNMENT — The Invisible Architecture

```javascript
const spacingAudit = await page.evaluate(() => {
  const containers = document.querySelectorAll('.page-container, .qa-pair, .question, .answer, .callout, .code-block, .conversation-chapter, .pattern-visualization, .exploration-header, section, article, main');
  return Array.from(containers).map(el => {
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      class: el.className,
      paddingTop: cs.paddingTop,
      paddingRight: cs.paddingRight,
      paddingBottom: cs.paddingBottom,
      paddingLeft: cs.paddingLeft,
      marginTop: cs.marginTop,
      marginRight: cs.marginRight,
      marginBottom: cs.marginBottom,
      marginLeft: cs.marginLeft,
      gap: cs.gap,
      maxWidth: cs.maxWidth,
      width: cs.width
    };
  });
});
```

**What to check:**

| Check | Expected | Common Violation |
|-------|----------|-----------------|
| Three-Level Gestalt | 8px within / 32px between / 64px chapters | Mixing levels (using 16px where 8px or 32px is needed) |
| Q&A pair spacing | 8px between Q and A (within), 32px between pairs (between) | Equal spacing making Q&A feel disconnected |
| Callout margin | 24px top/bottom margin | Tight margins making callouts feel cramped |
| Page container max-width | 860px | Different widths on different pages, or unconstrained |
| Header inner max-width | Matches page-container (860px) | Full-bleed header content not matching body width |
| Answer text alignment | Answer padding-left = border-left-width + indent to match question text position | Answer text starting at different x-position than question text |
| Chapter spacing | 64px margin-top between chapters | Inconsistent chapter breaks |
| Code block padding | Consistent (24px 32px typical) | Tight or inconsistent |
| Question max-width | 60% of container | Questions running full width (breaks TIDAL) |
| Answer width | 100% of container | Answers not filling width (breaks Q/A contrast) |

**Alignment checks (these require comparing multiple elements):**
1. **Left edge alignment:** Do all body text elements (questions, answers, callouts) share the same left edge? Or are they at different indentations?
2. **Question-to-Answer alignment:** The answer's text content (not border) should align with the question's text content. If question has 32px left indent, answer needs (4px border + 28px padding = 32px) to match.
3. **Callout-to-body alignment:** Callout left border should align with answer left border if callouts are inside answers. Or callout should be clearly offset if it's a pull-out element.
4. **Header-to-body alignment:** The exploration header's inner content should share the same max-width as the page container (860px). If the header is full-bleed but its content doesn't match the body width, it creates visual misalignment.
5. **Consistent vertical rhythm:** The spacing between elements should follow a predictable pattern. Look at the sequence of margins: do they increase/decrease logically, or jump randomly?

### 4H: CODE BLOCKS — Character-Level Audit

This is where "half-baked" is most visible. Code blocks must render correctly at the character level.

```javascript
const codeBlocks = await page.evaluate(() => {
  const blocks = document.querySelectorAll('pre, code, .code-block, .code-snippet');
  return Array.from(blocks).map(el => {
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      class: el.className,
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      whiteSpace: cs.whiteSpace,
      tabSize: cs.tabSize,
      backgroundColor: cs.backgroundColor,
      color: cs.color,
      padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
      overflow: cs.overflow,
      textContent: el.textContent?.substring(0, 200),
      borderRadius: cs.borderRadius,
      border: `${cs.borderWidth} ${cs.borderStyle} ${cs.borderColor}`
    };
  });
});
```

**What to check:**

| Check | Expected | Common Violation |
|-------|----------|-----------------|
| Font family | JetBrains Mono (loaded from Google Fonts) | System monospace, Courier New, or wrong fallback |
| Font size | 0.875rem (14px) for code content | Too small (12px) or too large (16px) |
| Line height | 1.5-1.6 for code | Too tight (1.2) or too loose (1.8) |
| Background | #1E1E1E (dark) or #F0EBE3 (light depending on context) | Off-palette background |
| Text color | Syntax-highlighted tokens with correct colors | All-white or all-gray text (no highlighting) |
| Tab size | 2 | 4 or 8 (too wide) |
| White-space | pre or pre-wrap | Normal (collapses code formatting) |
| Border-radius | 0 | ANY radius (common in code block libraries) |
| Token spacing | Normal code spacing (no extra gaps between characters) | Extra spaces between tokens like `< div >` instead of `<div>` |
| Line numbers | If present, aligned and consistent | Misaligned, wrong color, wrong font |
| Copy button | If present, positioned correctly, not overlapping code | Overlapping code text, wrong color, oversized |
| Horizontal overflow | scroll (not hidden, not visible overflow breaking layout) | Code running off-screen with no scroll |
| Syntax highlighting | Language-appropriate token colors | No highlighting, wrong language, broken tokens |

**CRITICAL CODE RENDERING CHECKS:**

1. **Token spacing bug:** Look for abnormal spacing between code tokens. JSX like `< div >` with spaces inside angle brackets, or `</ button >` with space before slash, indicates broken tokenization or HTML entity rendering issues. The code should render EXACTLY as a developer would write it.
2. **Indentation consistency:** All code should use consistent 2-space indentation. Mixed tabs/spaces or inconsistent indent levels indicate broken rendering.
3. **String literal rendering:** Strings in code (`'Hide'`, `'Show'`) should be properly colored as string literals, not rendered as raw text.
4. **Curly brace handling in JSX:** `{ isOpen ? ... }` should show properly with balanced braces. Extra spaces or broken rendering around JSX expressions indicates a rendering issue.
5. **Line number alignment:** If line numbers are present, they should right-align and have consistent width. Line 1 and line 13 should have the same left padding.

### 4I: CALLOUT SYSTEM — Family DNA Verification

```javascript
const calloutAudit = await page.evaluate(() => {
  const callouts = document.querySelectorAll('.callout, [class*="callout"]');
  return Array.from(callouts).map(el => {
    const cs = getComputedStyle(el);
    const label = el.querySelector('.callout__label, [class*="label"]');
    const body = el.querySelector('.callout__body, [class*="body"]');
    return {
      class: el.className,
      // Structure
      childCount: el.children.length,
      hasLabel: !!label,
      hasBody: !!body,
      // Border
      borderLeftWidth: cs.borderLeftWidth,
      borderLeftColor: cs.borderLeftColor,
      borderLeftStyle: cs.borderLeftStyle,
      borderTopWidth: cs.borderTopWidth,
      borderRightWidth: cs.borderRightWidth,
      borderBottomWidth: cs.borderBottomWidth,
      // Geometry
      borderRadius: cs.borderRadius,
      boxShadow: cs.boxShadow,
      // Spacing
      padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
      margin: `${cs.marginTop} ${cs.marginRight} ${cs.marginBottom} ${cs.marginLeft}`,
      // Background
      backgroundColor: cs.backgroundColor,
      // Label styling
      labelFont: label ? getComputedStyle(label).fontFamily : null,
      labelSize: label ? getComputedStyle(label).fontSize : null,
      labelTransform: label ? getComputedStyle(label).textTransform : null,
      labelSpacing: label ? getComputedStyle(label).letterSpacing : null,
      // Body styling
      bodyFont: body ? getComputedStyle(body).fontFamily : null,
      bodySize: body ? getComputedStyle(body).fontSize : null,
    };
  });
});
```

**Cross-callout consistency checks (CRITICAL for Family DNA — Soul Piece 3):**

| Property | Must Be IDENTICAL Across All Callouts | Allowed to Differ |
|----------|--------------------------------------|-------------------|
| Structure | 2 zones (label + body) | — |
| border-left-width | 4px | — |
| border-left-style | solid | — |
| border-radius | 0 | — |
| box-shadow | none | — |
| Label font | JetBrains Mono | — |
| Label text-transform | uppercase | — |
| Label letter-spacing | 0.1em | — |
| Padding | Same for all | — |
| Margin | Same for all | — |
| border-left-color | — | YES: accent color per type |
| Label color | — | YES: matches border color |
| Background tint | — | YES: very light tint of accent |

**Essence Callout Special Rules:**
- Body text MUST be Instrument Serif italic (Soul Piece 2: "The Archivist Speaks in Serif")
- May have a full border (not just border-left) IF it's structural differentiation
- MUST NOT have solid offset pseudo-element creating depth (violates Soul Piece 4)

### 4J: COMPONENT COMPLETENESS — Half-Baked Detection

For each OD file, verify that EVERY component is fully implemented, not a stub or placeholder.

**Signs of half-baked components:**
1. **Missing hover states:** Interactive elements (links, buttons, expandable sections) with no hover/focus styling
2. **Placeholder content:** Lorem ipsum, "[content here]", or suspiciously generic text
3. **Broken interactive elements:** `<details>` tags that don't expand, copy buttons that don't copy, links that go nowhere
4. **Invisible elements:** Elements with `display: none` or `opacity: 0` that were forgotten (not intentional animation states)
5. **Unstyled fallbacks:** Elements relying on browser defaults because their CSS class doesn't exist or has a typo
6. **Missing responsive behavior:** Components that break or overflow on narrow viewports
7. **Orphaned CSS:** Classes defined in `<style>` but never used in HTML, or classes used in HTML but not defined in `<style>`
8. **Broken syntax highlighting:** Code blocks that show all-white text or have no language-specific coloring
9. **Inconsistent component variants:** One callout type fully styled, another with only partial styling

```javascript
// Check for unstyled elements (elements with classes not defined in stylesheet)
const unstyledCheck = await page.evaluate(() => {
  const styleSheets = document.styleSheets;
  const definedClasses = new Set();

  for (const sheet of styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText) {
          const matches = rule.selectorText.match(/\.\w[\w-]*/g);
          if (matches) matches.forEach(m => definedClasses.add(m.substring(1)));
        }
      }
    } catch(e) {}
  }

  const allElements = document.querySelectorAll('[class]');
  const missing = [];
  allElements.forEach(el => {
    el.classList.forEach(cls => {
      if (!definedClasses.has(cls)) {
        missing.push({ element: el.tagName, class: cls, text: el.textContent?.substring(0, 40) });
      }
    });
  });
  return missing;
});
```

### 4K: DENSITY PATTERN VERIFICATION — Is the Pattern Actually Visible?

Each OD file implements a specific density pattern. Verify that the pattern is PERCEPTUALLY visible, not just structurally present.

**Playwright viewport scroll test:**

```javascript
// Capture element density at each viewport-height slice
const densityMap = await page.evaluate(() => {
  const viewportH = window.innerHeight;
  const totalH = document.body.scrollHeight;
  const slices = [];

  for (let y = 0; y < totalH; y += viewportH) {
    const els = document.elementsFromPoint(400, y + viewportH/2);
    const slice = {
      position: y,
      viewport: Math.floor(y / viewportH) + 1,
      elements: els.length,
      hasCode: els.some(e => e.tagName === 'PRE' || e.tagName === 'CODE'),
      hasCallout: els.some(e => e.className?.includes('callout')),
      hasQuestion: els.some(e => e.className?.includes('question')),
      hasAnswer: els.some(e => e.className?.includes('answer')),
      hasChapterBreak: els.some(e => e.className?.includes('chapter')),
      backgroundColors: [...new Set(els.map(e => getComputedStyle(e).backgroundColor))]
    };
    slices.push(slice);
  }
  return slices;
});
```

**Pattern-specific checks:**

| OD | Pattern | What to Verify |
|----|---------|---------------|
| OD-001 | PULSE (Q sparse, A dense) | Question viewports should have fewer elements than answer viewports. Width should alternate (60% Q, 100% A). |
| OD-002 | CRESCENDO (sparse → dense) | Element count should INCREASE from top to bottom. Act I should be sparsest, Act III densest. |
| OD-003 | ISLANDS / BOOKENDS | Dense task clusters separated by sparse navigation space. Clear gaps between islands. |
| OD-004 | GEOLOGICAL + CRESCENDO | Certainty layers from surface (sparse) to bedrock (dense). Visual strata should be distinct. |
| OD-005 | WAVE + ISLANDS | Navigation nodes as dense islands with wave-like density variation between them. |

### 4L: FRACTAL COMPLIANCE (DD-F-006) — All Four Scales

**This is MANDATORY for every OD file.** DD-F-006 requires self-similar density rhythm at 4 scales:

1. **PAGE SCALE:** Does the overall document show the claimed density pattern?
   - Screenshot the full page. Squint. Can you see the rhythm?

2. **SECTION SCALE:** Within each section/chapter, is there intro(sparse) → detail(dense) → summary(sparse)?
   - Take screenshots of individual sections. Each should have internal density variation.

3. **COMPONENT SCALE:** Within callouts and code blocks, is there label(sparse) → body(dense)?
   - Measure: callout label height vs body height. Label should be compact, body should be fuller.

4. **CHARACTER SCALE:** Within code blocks, are there comments(sparse) → logic(dense)?
   - Read the code. Comments should be shorter/sparser than logic lines.

### 4M: RESPONSIVE BEHAVIOR (768px and 1440px)

**Test at BOTH viewport widths:**

```javascript
// At 1440px
await page.setViewportSize({ width: 1440, height: 900 });
await page.screenshot({ path: 'audit-1440.png', fullPage: true });

// At 768px
await page.setViewportSize({ width: 768, height: 1024 });
await page.screenshot({ path: 'audit-768.png', fullPage: true });
```

**What to check at 768px:**
- Question max-width adjusts (should be wider, approaching 100%)
- Code blocks don't overflow
- Callouts remain readable
- Header content doesn't clip
- Scroll witness hides (`@media (max-width: 1200px) { display: none }`)
- Spacing reduces appropriately (chapter gaps may shrink)
- Cards/grids reflow to single column

### 4N: HOVER AND INTERACTION STATES

```javascript
// Check all interactive elements
const interactiveEls = await page.evaluate(() => {
  const interactive = document.querySelectorAll('a, button, summary, details, [role="button"], [tabindex]');
  return Array.from(interactive).map(el => ({
    tag: el.tagName,
    class: el.className,
    text: el.textContent?.substring(0, 40),
    href: el.getAttribute('href'),
    hasTitle: !!el.title,
    tabIndex: el.tabIndex,
    role: el.getAttribute('role')
  }));
});
```

For each interactive element:
1. Hover over it. Does it have a visible hover state?
2. Focus it (Tab key). Does it have a visible focus indicator?
3. Click it. Does it DO something? If it's a link, does it go somewhere? If it's expandable, does it expand?
4. Is the hover state consistent with the soul? (No rounded hover effects, no shadow-on-hover, no dramatic color shifts)

### 4O: SCROLL BEHAVIOR AND ANIMATIONS

```javascript
// Check all animated elements
const animatedEls = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  const animated = [];
  els.forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.animation !== 'none' || cs.transition !== 'all 0s ease 0s') {
      animated.push({
        tag: el.tagName,
        class: el.className,
        animation: cs.animation,
        transition: cs.transition,
        animationTimeline: cs.animationTimeline
      });
    }
  });
  return animated;
});
```

**Check:**
- Are `prefers-reduced-motion` queries present? They're mandatory for accessibility.
- Are `@supports not (animation-timeline: view())` fallbacks present? Scroll-driven animations are Chromium-only.
- Are animations SUBTLE? The soul calls for "editorial calm" — dramatic bouncing, spinning, or large translate values violate the identity.
- Maximum acceptable translate: 16px. Maximum acceptable opacity change: 0 → 1. No scale transforms. No rotations.

---

## SECTION 5: CROSS-OD CONSISTENCY AUDIT

### Every OD file must be consistent with every other OD file in these areas:

**Run this across ALL OD files (OD-001 through OD-005):**

| Property | Must Be IDENTICAL | Allowed to Differ |
|----------|------------------|-------------------|
| :root token values | YES — all locked tokens | OD-specific custom properties (e.g., --question-width) |
| Font loading (Google Fonts link) | YES — same families | — |
| Page container max-width | YES — 860px | — |
| Exploration header structure | YES — same HTML pattern | Content (title, hypothesis, meta) |
| Callout system CSS | YES — identical base styles | — |
| Code block CSS | YES — identical base styles | Content |
| border-radius | YES — 0 everywhere | — |
| box-shadow | YES — none everywhere | — |
| Meta label styling | YES — same font, size, transform, spacing | Content |
| Scroll behavior CSS | YES — same @keyframes, same fallbacks | — |

**Diff test:** Extract the :root block from each OD file. They should be identical (except for OD-specific custom properties). Any divergence in locked token values is a consistency violation.

```javascript
// Extract :root block for comparison
const rootTokens = await page.evaluate(() => {
  const root = getComputedStyle(document.documentElement);
  return {
    colorPrimary: root.getPropertyValue('--color-primary').trim(),
    colorBackground: root.getPropertyValue('--color-background').trim(),
    colorText: root.getPropertyValue('--color-text').trim(),
    colorTextSecondary: root.getPropertyValue('--color-text-secondary').trim(),
    colorBorder: root.getPropertyValue('--color-border').trim(),
    colorBorderSubtle: root.getPropertyValue('--color-border-subtle').trim(),
    fontDisplay: root.getPropertyValue('--font-display').trim(),
    fontBody: root.getPropertyValue('--font-body').trim(),
    fontMono: root.getPropertyValue('--font-mono').trim(),
    borderRadius: root.getPropertyValue('--border-radius').trim(),
    boxShadow: root.getPropertyValue('--box-shadow').trim(),
    borderLeftWidth: root.getPropertyValue('--border-left-width').trim(),
    accentBlue: root.getPropertyValue('--accent-blue').trim(),
    accentGreen: root.getPropertyValue('--accent-green').trim(),
    accentCoral: root.getPropertyValue('--accent-coral').trim(),
    accentAmber: root.getPropertyValue('--accent-amber').trim(),
    accentPurple: root.getPropertyValue('--accent-purple').trim()
  };
});
```

---

## SECTION 6: THE SOUL SQUINT TEST

### After all granular checks, do the perceptual verification:

1. **Take a full-page screenshot at 1440px**
2. **Blur your eyes (literally squint at the screen)**
3. **Answer these questions:**

| Question | Expected Answer | If Wrong |
|----------|----------------|----------|
| Does anything "pop forward" off the page? | NO — everything flat | Remove depth effects (solid offsets, shadows, gradients) |
| Does it feel like a specification sheet or a blog post? | Specification sheet | Sharpen edges, reduce decoration, increase restraint |
| Do all callouts feel like siblings? | YES — same family | Unify structure, borders, padding |
| Does the code feel like a terminal or a toy? | Terminal | Fix font, sizing, syntax highlighting |
| Is there a visible density rhythm? | YES — pattern-specific | Adjust spacing to create rhythm |
| Does the header feel connected to the body? | YES — same visual language | Align widths, match typography |
| Could this be a Bootstrap template? | ABSOLUTELY NOT | Soul is compromised — major rework needed |
| Does the page feel hurried or calm? | Calm — unhurried editorial | Reduce visual noise, increase whitespace, simplify |

---

## SECTION 7: AUDIT EXECUTION ORDER

### For each OD file (OD-001 through OD-005), execute in this order:

1. **Serve the file** via HTTP (Playwright blocks `file://`)
   ```bash
   python3 -m http.server 8080 --directory docs-spa/app/showcase/explorations/organizational/
   ```

2. **Navigate and wait for load:**
   ```
   Navigate to http://localhost:8080/OD-XXX-name.html
   Wait for fonts to load (check Instrument Serif rendered)
   ```

3. **Run Section 3 VISUAL-FIRST audit (3-VISUAL-A through 3-VISUAL-C)** — LOOK at the page first, form impressions, note findings

4. **Run Section 4 programmatic checks (4A through 4O)** — confirm/investigate visual findings with code

5. **Run Section 5 cross-OD comparison** — after all individual audits

6. **Run Section 6 squint test** — final perceptual verification

6. **Document ALL findings** in this format:

```markdown
## OD-XXX Audit Results

### SOUL VIOLATIONS (Critical — Must Fix)
| # | Soul Piece Violated | Element | Current Value | Expected Value | Line Reference |
|---|---------------------|---------|---------------|----------------|----------------|
| 1 | [piece] | [element] | [what it is] | [what it should be] | [CSS line] |

### IDENTITY REFINEMENT FAILURES (High — External Research Not Filtered)
| # | Research Finding | Why It Fails Soul Test | Recommended Action |
|---|-----------------|----------------------|-------------------|
| 1 | [EXT-XXX-###] | [soul violation] | [remove/modify/replace] |

### UI INCONSISTENCIES (Medium — Attention to Detail)
| # | Element | Issue | Expected | Actual |
|---|---------|-------|----------|--------|
| 1 | [element] | [issue] | [expected] | [actual] |

### HALF-BAKED COMPONENTS (Medium — Completeness)
| # | Component | Issue | Specific Problem |
|---|-----------|-------|-----------------|
| 1 | [component] | [issue] | [detail] |

### CROSS-OD INCONSISTENCIES (Medium — Consistency)
| # | Property | OD-001 Value | OD-00X Value | Expected |
|---|----------|-------------|-------------|----------|
| 1 | [property] | [value] | [value] | [should be same] |

### DENSITY PATTERN VERIFICATION
- Pattern claimed: [PULSE/CRESCENDO/ISLANDS/etc.]
- Pattern visible at squint test: [YES/NO]
- Fractal at 4 scales: [YES/NO + which scales fail]

### RESPONSIVE ISSUES (768px)
| # | Element | Issue at 768px |
|---|---------|---------------|
| 1 | [element] | [issue] |
```

---

## SECTION 8: THE FUNDAMENTAL PRINCIPLE

### Read this last. Carry it always.

The Accumulated Identity is not a style guide. It is not a list of CSS rules. It is a WAY OF SEEING that was DISCOVERED through months of perceptual deepening — looking at the same components over and over until the truths could not be unseen.

When you traverse an inline threading header, you are not reading metadata. You are inheriting a perspective. The `BUILT ON` table tells you whose shoulders you stand on. The `MUST HONOR` table tells you which truths are non-negotiable. The `SOUL ALIGNMENT` section tells you how this specific file embodies the identity.

External research from sub-agents is valuable. It expands the vocabulary of what's possible. But it is ALWAYS a CANDIDATE that must pass through the accumulated identity's judgment. A finding that creates depth where flatness is required — no matter how aesthetically interesting — is rejected. A finding that introduces decoration where typography should create interest — no matter how "modern" it looks — is rejected.

The builder's job is not to apply every finding they receive. The builder's job is to apply only the findings that the Unhurried Editor would approve. And the Unhurried Editor has nothing to prove. They don't need cubic borders, or floating cards, or dramatic animations. They need sharp edges, flat planes, confident typography, and breathing whitespace.

**Build like someone who has nothing to prove. Audit like someone who notices everything.**

---

## SECTION 9: THE FRESH EYES PROTOCOL — Defeating Accumulated Bias

### The Problem: Builder Blindness

The builder who created these OD files traversed inline headers, gathered external research, applied density patterns, and produced output. They made hundreds of micro-decisions. And EVERY one of those decisions was made from INSIDE their accumulated context — meaning they could not see what someone with FRESH EYES would instantly notice.

This is not a character flaw. This is how context works. When you've spent hours looking at your own CSS, you stop seeing the `2px` border that should be `4px`. You stop noticing that the code snippet tokens have bizarre spacing. You stop questioning whether the "cubic offset" effect actually belongs here. You've already rationalized every decision you made.

**The only cure is deploying a FRESH-EYES SUB-AGENT that has NOT been marinated in the builder's context.**

### Deploy the Fresh-Eyes Auditor Sub-Agent

**Spawn a dedicated sub-agent** with this exact mandate:

```
You are the FRESH-EYES AUDITOR. You have ZERO context about why anything
was built the way it was. You do not care about research findings, density
patterns, or external enrichments. You are looking at this HTML page the way
a SENIOR DESIGNER at a premium editorial publication would look at a proof
sheet — with exacting, unforgiving, detail-obsessed attention.

Your ONLY inputs are:
1. The rendered page (via Playwright screenshots and snapshots)
2. The accumulated identity document (what this design system IS)

You are NOT given:
- The builder's research citations
- The external research findings
- The density pattern rationale
- Any justification for any design choice

This is intentional. If a design choice can only be understood by reading
the research finding that motivated it, it's a BAD design choice. Good design
is self-evident. The identity should be VISIBLE without annotation.
```

### What the Fresh-Eyes Sub-Agent Checks (Open-Ended)

This is NOT a checklist. This is a MINDSET. The sub-agent looks at the page and asks:

**"What would make a senior designer wince?"**

Specific vectors of wincing (but genuinely NOT limited to these — the sub-agent must be RECEPTIVE to anything that feels off):

#### 8A: Visual Weight Distribution
- Does any element feel "heavier" than it should be? (Too much border, too dark a background, too bold a font)
- Does any element feel "lighter" than it should be? (Missing borders, washed-out text, insufficient contrast)
- Is there a visual center of gravity on each viewport slice, or is weight scattered randomly?

#### 8B: Rhythm Breaks
- Scan the page top to bottom. Does anything JOLT you out of the rhythm? A sudden change in spacing, a component that doesn't feel like it belongs, a color that appears once and never again?
- Are there "dead zones" where nothing interesting happens visually for too long?
- Are there "noisy zones" where too many visual signals compete?

#### 8C: Craftsmanship Tells
These are the micro-details that separate "student project" from "editorial publication":

| Tell | What to Notice |
|------|---------------|
| **Alignment precision** | Are left edges truly aligned? Not "close" — EXACTLY aligned. A 1px misalignment between body text and callout text is visible to a trained eye. |
| **Spacing consistency** | If you measure the gap between element A and B, and then element B and C, are they the same? Or did the builder eyeball it? |
| **Border commitment** | Is a border 3px everywhere, or does it drift to 2px in some places? Half-committed borders signal half-committed design. |
| **Color precision** | Is every gray the SAME gray? Or are there 3 slightly different grays (#666, #6B6B6B, #737373) that were never unified? |
| **Typography conviction** | Is Instrument Serif used for ALL display text, or does an Inter header sneak in somewhere? |
| **Whitespace intentionality** | Does every gap MEAN something? Or are some gaps just "default margin"? |
| **Component completeness** | Is every component FINISHED? Or are some 90% done with a missing hover state, an unstyled edge case, or a broken responsive breakpoint? |
| **Code rendering fidelity** | Does the code look like a REAL terminal/editor, or does it look like code pasted into a Word document? Token spacing, syntax colors, line numbers, copy button — all must feel professional. |
| **Transition coherence** | If there are animations, do they all use the same easing? Same duration? Or is one 0.2s ease and another 0.5s ease-out? |
| **Label/meta consistency** | Are all uppercase mono labels the SAME size, SAME letter-spacing, SAME weight? Or do they vary by 1-2px between contexts? |

#### 8D: The "Would I Ship This?" Test
The fresh-eyes sub-agent must answer, for EACH OD file:

> "If this page were going live on a premium design documentation site TOMORROW,
> and my name were attached as the designer — would I ship it as-is?"

If the answer is NO, the sub-agent must identify EXACTLY what would stop them. Not in terms of "it violates R3-012" — in terms of "the bottom callout's left border is 2px when everything else is 4px and it looks sloppy."

#### 8E: The Stranger Scroll
The sub-agent scrolls through the entire page ONCE, at normal reading speed, without stopping. After one pass:
- What do you REMEMBER? (These are the visual anchors — they should be intentional)
- What felt CONFUSING? (These are design failures)
- What felt EMPTY? (These are gaps in the density pattern)
- What felt CROWDED? (These are violations of breathing space)
- What did you NOT notice? (Invisible elements might be broken, hidden, or unnecessary)

#### 8F: The Screenshot Diff Test
Take a full-page screenshot of each OD file. Place them side by side. Now ask:
- Do they feel like they come from the SAME design system?
- Or do they look like 5 different designers built 5 different pages?
- Are the headers the same visual weight?
- Are the callouts the same structural pattern?
- Is the overall "color temperature" consistent?

### How to Use Fresh-Eyes Findings

The fresh-eyes sub-agent's findings are HIGHER PRIORITY than checklist findings because they represent what ACTUAL USERS would see. A border-radius violation caught by a script is important. But a "this code block looks half-baked and the borders feel weird" impression from fresh eyes is MORE important — because that's the EXPERIENCE the page creates.

**Fresh-eyes findings go at the TOP of the audit report, before systematic findings.**

---

## SECTION 10: THE UNKNOWN UNKNOWNS — Open-Ended Discovery

### Checklists catch known problems. This section catches the rest.

The hardest bugs to find are the ones nobody thought to check for. The CSS equivalent of "I didn't even know that was possible." This section deploys sub-agents with DIVERGENT mandates — each one looking at the page from a completely different angle.

### Deploy the STRUCTURAL INTEGRITY Sub-Agent

This sub-agent ignores visual aesthetics and focuses purely on HTML/CSS structural soundness:

```
Spawn a sub-agent with Playwright MCP access. Its mandate:

"Examine the HTML structure and CSS cascade of this page.
Ignore how it LOOKS. Focus on how it's BUILT.

Report ANY of the following:"
```

| What It Checks | Why It Matters |
|---------------|---------------|
| **CSS specificity conflicts** | A class defined early gets overridden by a later rule with equal specificity. The builder may not know their intended style was overridden. |
| **Unused CSS rules** | Dead CSS adds cognitive burden when maintaining the file. It also suggests abandoned iterations that weren't cleaned up. |
| **Shorthand property traps** | `border: 2px solid #E83025` resets ALL four sides. If `border-left: 4px solid` comes BEFORE the shorthand, it gets wiped. This is the #1 cause of "why is my border wrong?" |
| **Inherited property leaks** | A parent's `font-style: italic` or `color` leaking into children that shouldn't inherit it. |
| **Z-index stacking issues** | Overlapping elements where the wrong one is on top. Pseudo-elements with `z-index: -1` that disappear behind backgrounds. |
| **Overflow clipping** | Content being silently clipped by `overflow: hidden` on a parent. The builder may not realize content is invisible. |
| **Computed value surprises** | The specified CSS says one thing, but the computed (actual rendered) value is different due to inheritance, cascading, or specificity. |
| **Missing reset coverage** | The `* { margin: 0; padding: 0; }` reset may not cover pseudo-elements, or specific elements may have browser-default margins that survive the reset. |

```javascript
// Structural integrity check: find all CSS specificity conflicts
const specificityAudit = await page.evaluate(() => {
  const sheets = document.styleSheets;
  const rules = [];
  for (const sheet of sheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText && rule.style) {
          rules.push({
            selector: rule.selectorText,
            properties: Array.from(rule.style).map(p => ({
              name: p,
              value: rule.style.getPropertyValue(p)
            }))
          });
        }
      }
    } catch(e) {}
  }

  // Find properties set multiple times on same selector pattern
  const conflicts = {};
  rules.forEach((rule, i) => {
    rule.properties.forEach(prop => {
      const key = `${prop.name}`;
      if (!conflicts[key]) conflicts[key] = [];
      conflicts[key].push({ selector: rule.selector, value: prop.value, index: i });
    });
  });

  return Object.entries(conflicts)
    .filter(([_, entries]) => entries.length > 1)
    .map(([prop, entries]) => ({ property: prop, definitions: entries }));
});
```

### Deploy the PERCEPTUAL CONTRAST Sub-Agent

This sub-agent checks WCAG contrast ratios and perceptual readability:

```
"Check every text element against its background for contrast ratio.
Also check: is text readable at 14px? Is light gray text on cream
background actually legible, or does it disappear?"
```

```javascript
// Contrast ratio audit
const contrastAudit = await page.evaluate(() => {
  function luminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  function parseColor(c) {
    const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return m ? [+m[1], +m[2], +m[3]] : null;
  }

  function contrastRatio(fg, bg) {
    const l1 = luminance(...fg);
    const l2 = luminance(...bg);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  const textEls = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,a,li,td,th,label,code,summary,blockquote,figcaption');
  const issues = [];

  textEls.forEach(el => {
    const cs = getComputedStyle(el);
    const fg = parseColor(cs.color);
    const bg = parseColor(cs.backgroundColor) || parseColor(getComputedStyle(el.parentElement).backgroundColor) || [254,249,245]; // fallback to page bg
    if (fg && bg) {
      const ratio = contrastRatio(fg, bg);
      const size = parseFloat(cs.fontSize);
      const minRatio = size >= 18 ? 3 : 4.5; // WCAG AA
      if (ratio < minRatio) {
        issues.push({
          tag: el.tagName,
          class: el.className,
          text: el.textContent?.substring(0, 40),
          fontSize: cs.fontSize,
          color: cs.color,
          bgColor: cs.backgroundColor,
          ratio: ratio.toFixed(2),
          required: minRatio,
          verdict: 'FAIL'
        });
      }
    }
  });
  return issues;
});
```

### Deploy the COMPARATIVE REFERENCE Sub-Agent

This sub-agent compares OD files against the DD files they descend from:

```
"Open OD-001 alongside DD-005 (TIDAL, its primary source).
Take side-by-side screenshots. Does OD-001's implementation
of TIDAL look like it LEARNED from DD-005? Or does it look
like a separate, unrelated page?

Check: same color temperature, same border treatment, same
typography hierarchy, same component patterns. The OD should
feel like a DESCENDANT of the DD, not a stranger."
```

This catches drift — where the builder READ the DD files but didn't ABSORB their visual language.

### Deploy the CONTENT AUTHENTICITY Sub-Agent

This sub-agent reads the CONTENT (not the CSS) and checks:

```
"Is the content in this OD exploration realistic and complete,
or is it placeholder dressed up to look real?

Specifically check:
- Are code examples syntactically correct and runnable?
- Do code comments match the code they describe?
- Is the technical content accurate (not hallucinated)?
- Are there TODO markers, placeholder text, or suspiciously generic explanations?
- Does the content demonstrate the claimed organizational pattern,
  or is it generic content stuffed into a structure?"
```

This catches the failure mode where visual design is polished but content is filler — which means the density pattern can't be properly evaluated because the content density isn't real.

---

## SECTION 11: SUB-AGENT DEPLOYMENT ARCHITECTURE

### How to orchestrate all audit sub-agents for maximum efficacy:

The audit is NOT a serial process. It is a PARALLEL deployment of specialized sub-agents, each with a distinct mandate and distinct blindspots that the others cover.

### Phase A: Identity Loading (Sequential — Must Complete First)

```
1. Spawn the TRAVERSER sub-agent
   → Reads ACCUMULATED-IDENTITY-v1.md (FULL)
   → Traverses ALL inline headers in OD files being audited
   → Follows every BUILT ON chain to T1 files
   → Produces: IDENTITY BRIEF (5 soul pieces + 6 rules + all constraints + token values)

   This Identity Brief is the INPUT for all Phase B sub-agents.
```

### Phase B: Parallel Audit Deployment (All sub-agents launch simultaneously)

```
2. Spawn the VISUAL-FIRST AUDITOR sub-agent (Section 3 — PRIMARY)
   → Receives: Identity Brief + OD file URLs + Playwright MCP access
   → Runs: Full-page screenshots, slow scroll audit, meta-cognitive proportional reasoning
   → Produces: Visual impression findings (the MOST IMPORTANT output)
   → This sub-agent LOOKS at the page. It takes screenshots, examines each viewport,
     and forms PERCEPTUAL judgments. It does NOT run JavaScript evaluations.

3. Spawn the SYSTEMATIC AUDITOR sub-agent (Section 4 — SUPPLEMENTARY)
   → Receives: Identity Brief + OD file URLs + Playwright MCP access
   → Runs: ALL Section 4 programmatic checks (4A through 4O) via Playwright evaluate
   → Produces: Structured findings table per OD file
   → This sub-agent CONFIRMS what the Visual-First Auditor suspects with code.

4. Spawn the FRESH-EYES AUDITOR sub-agent (Section 9 — BIAS BREAKER)
   → Receives: Identity Brief ONLY (no builder context, no research citations)
   → Runs: Visual inspection, stranger scroll, "would I ship this?" test
   → Produces: Impression-based findings (not code references — perceptual issues)
   → This sub-agent has intentionally LESS context to avoid builder bias.

5. Spawn the STRUCTURAL INTEGRITY sub-agent (Section 10 — structural)
   → Receives: OD file URLs only (no identity needed — pure technical audit)
   → Runs: CSS specificity conflicts, shorthand traps, unused rules, overflow clipping
   → Produces: Technical debt findings

6. Spawn the CONTRAST & ACCESSIBILITY sub-agent (Section 10 — contrast)
   → Receives: OD file URLs
   → Runs: WCAG contrast ratios, font size readability, touch target sizes
   → Produces: Accessibility findings

7. Spawn the COMPARATIVE REFERENCE sub-agent (Section 10 — comparative)
   → Receives: OD file URLs + corresponding DD source URLs
   → Runs: Side-by-side visual comparison of OD against its DD ancestors
   → Produces: Drift findings (where OD diverged from DD visual language)

8. Spawn the CONTENT AUTHENTICITY sub-agent (Section 10 — content)
   → Receives: OD file URLs
   → Runs: Code correctness, content completeness, placeholder detection
   → Produces: Content quality findings
```

### Phase C: Cross-OD Consistency (After Phase B completes)

```
9. Spawn the CONSISTENCY AUDITOR sub-agent (Section 5)
   → Receives: ALL Phase B findings + all OD file URLs
   → Runs: Cross-file token comparison, visual consistency screenshots
   → Produces: Inconsistency findings across the OD set
```

### Phase D: Synthesis (After Phase C completes)

```
10. The LEAD AGENT synthesizes all sub-agent findings into a single audit report.
   → Priority order: Fresh-eyes findings FIRST, then systematic, then structural
   → Each finding tagged with: severity, sub-agent source, specific fix
   → Cross-reference: if fresh-eyes and systematic found the same issue,
     it's CONFIRMED (higher confidence)
   → If only fresh-eyes found it, it's a PERCEPTUAL issue (still important)
   → If only systematic found it, it's a TECHNICAL issue (fix it but it
     may not be user-visible)
```

### The Key Insight About Sub-Agent Architecture:

The FRESH-EYES sub-agent is intentionally given LESS context than the others. This is not a limitation — it is the ENTIRE POINT. A sub-agent that knows the research justification for the "cubic offset" effect will rationalize it as "intentional." A sub-agent that DOESN'T know the justification will say "this looks like fake depth and it doesn't belong." The naive judgment is often the correct one.

Similarly, the CONTENT AUTHENTICITY sub-agent doesn't need to know the soul — it needs to know if `< div >` with spaces inside angle brackets is valid JSX. It isn't. And no amount of soul alignment makes broken code rendering acceptable.

**The power of the sub-agent architecture is DIVERSITY OF PERSPECTIVE. Each agent sees what the others miss because each agent is looking from a different angle.**

---

## SECTION 12: THE RESEARCH REFINEMENT CHAIN — Fixing the Root Cause

### Why does unrefined research get applied in the first place?

The current pipeline works like this:
```
Traverser sub-agent → Accumulated Context → Research sub-agents → Findings → Builder applies
```

The problem is in the last step: **"Builder applies."** The builder receives research findings from sub-agents who were bounded by accumulated context, and treats those findings as pre-approved. They are NOT pre-approved. The sub-agents found INTERESTING things. But "interesting" is not the same as "soul-aligned."

### The Fix: Add a Refinement Gate Between Research and Application

```
Traverser sub-agent → Accumulated Context → Research sub-agents → Findings
    → REFINEMENT GATE (New) → Filtered Findings → Builder applies
```

### How the Refinement Gate Works

For EACH research finding the builder intends to apply:

1. **State the finding:** "EXT-CREATIVE-001: THE SOLID OFFSET — neobrutalist depth using pseudo-element solid blocks"

2. **State the soul test:** Walk through all 5 soul pieces AND all 6 universal rules. For each one, explicitly write:
   - Soul Piece 1 (Sharp Edges): Does this finding SUPPORT or COMPROMISE sharp edges? → NEUTRAL (offsets don't affect edges)
   - Soul Piece 2 (Serif = Wisdom): Does this finding affect typography? → NEUTRAL
   - Soul Piece 3 (Family DNA): Does this change callout structure? → NEUTRAL
   - Soul Piece 4 (Shadows Lie About Depth): **Does this create perceptual depth?** → **YES — FAIL. Solid offsets create the SAME perceptual depth as box-shadow. The mechanism is different but the perception is identical.**
   - Soul Piece 5 (Squares Signal System): Does this affect shape language? → NEUTRAL
   - Rule 1 (border-radius: 0): → Not affected
   - Rule 2 (box-shadow: none): → Technically passes (it's not box-shadow) BUT functionally creates the same visual effect. **SPIRIT VIOLATION even if letter passes.**
   - Rules 3-6: → Not affected

3. **Verdict:** REJECTED — Violates the SPIRIT of Soul Piece 4 and Rule 2, even though it passes the LETTER of the CSS check.

4. **Alternative:** If the finding is partially valuable, propose a soul-aligned modification: "Instead of solid offset depth, use a heavier single-side border (4px solid) to add visual weight without fake depth."

### The Spirit vs. Letter Distinction

This is the most important refinement concept:

> A CSS linter will tell you `box-shadow: none` passes. The linter is correct.
> A pseudo-element with `z-index: -1` and a dark background creating a "shadow" effect
> also passes the linter. The linter is also correct.
>
> But the SOUL says "nothing should float." The pseudo-element creates floating.
> The linter is right but the SOUL is violated.
>
> **Always check the SPIRIT of the constraint, not just the LETTER.**

### Examples of Spirit Violations That Pass Letter Checks:

| What It Is | CSS Check | Spirit Check |
|-----------|-----------|-------------|
| Solid offset pseudo-element | `box-shadow: none` ✅ | Creates perceptual depth ❌ |
| `filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1))` | `box-shadow: none` ✅ | Literally a shadow ❌ |
| `border-radius: 0` on element, `border-radius: 8px` on child | Parent check ✅ | Child has rounded corners ❌ |
| Using `rgba(26, 26, 26, 0.5)` for text | Technically still `--color-text` ❌ | Creates a new effective color not in palette ❌ |
| Gradient backgrounds (e.g., `linear-gradient(...)`) | No explicit anti-gradient rule | Creates visual complexity where flatness is expected ❌ |
| `outline: 2px solid` on focus (with radius) | No `outline-radius` in token spec | Creates rounded visual on interaction ⚠️ (assess context) |
| 4px border-left + 1px border-top/right/bottom | Left accent is correct ✅ | Other sides at 1px "signal uncertainty" per Rule 5 ❌ |

---

## SECTION 13: WHAT "GRANULAR" ACTUALLY MEANS

### This section exists because "be more granular" is itself not granular enough.

Here is what granularity means in THIS context. It means checking things that most audits would consider "too small to matter." In editorial design, NOTHING is too small to matter.

### Pixel-Level Checks the Builder Probably Skipped:

1. **The gap between the border-left and the text in callouts.** Is it exactly the specified padding? Or is there an extra 1-2px from an unexpected margin on the first child element?

2. **The exact hex of the border.** Not "it's gray" — is it `#E0D5C5` (warm tan) or `#D1D5DB` (cool gray)? A cool gray border in a warm color scheme sticks out, even if you can't consciously identify why.

3. **The line-height of code blocks.** Is it rendering at 1.5 or 1.6? The difference is 1-2px per line, but across 13 lines of code, it adds up to a noticeably different code block height.

4. **The letter-spacing on mono labels.** Is it `0.1em` or `0.08em` or `0.15em`? These all look "roughly uppercase spaced" but they are NOT the same, and inconsistency between labels in different components is visible.

5. **The font-weight of body text.** Is it 400 (regular) or 500 (medium)? On Inter, the difference is subtle but visible. 500 makes body text feel slightly "heavier" than intended.

6. **The opacity of background tints on callouts.** Is it `rgba(74, 144, 217, 0.05)` or `rgba(74, 144, 217, 0.08)` or `rgba(74, 144, 217, 0.12)`? At 0.05 the tint is barely visible. At 0.12 it's distinctly blue. The difference matters for the "restrained" feel.

7. **The gap between the copy button and the code block edge.** Is the copy button at `top: 0.5rem; right: 0.5rem`? Or `top: 8px; right: 8px`? These are the same at 16px base, but if the base differs, they diverge.

8. **The text-decoration on links.** Underlined? Underline-offset? Color of underline? Hover state of underline? Each of these is a design decision that's either intentional or forgotten.

9. **The cursor on interactive elements.** Is it `pointer` on clickable items? `text` on selectable text? `default` on non-interactive? A missing `cursor: pointer` on a button is a craftsmanship failure.

10. **The focus-visible outline.** When you Tab to an interactive element, what appears? A thick blue browser default? A styled outline? Nothing? (Nothing = accessibility failure.)

11. **The first-child / last-child margins.** Does the first element in a container have unexpected top margin? Does the last element have unexpected bottom margin that creates uneven padding?

12. **The scrollbar styling.** On Webkit browsers, is the scrollbar styled to match the color scheme? Or is it a default gray that clashes with the warm palette? (Minor, but noticeable on horizontal code scroll.)

13. **The selection color.** When you select/highlight text on the page, what color is the selection? Default blue? Or styled to match the palette? (Minor, but premium sites often style this.)

14. **Print styles.** If someone prints this page, does it render correctly? (Often neglected entirely.)

15. **The favicon.** Does the tab show a favicon that matches the design system? Or a generic browser icon? (Not technically a CSS issue, but a craftsmanship tell.)

### The Principle of Granularity:

> **Every CSS property on every element is a decision — either intentional or negligent.**
> Intentional decisions are correct by definition (they were chosen).
> Negligent decisions are bugs — they are browser defaults or copy-paste
> artifacts that nobody examined.
>
> The audit's job is to identify EVERY negligent decision and convert it
> into an intentional one.

---

## CLOSING: THE AUDIT IS NOT PUNISHMENT — IT IS LOVE

The builder put real effort into these OD files. External research was gathered. Inline headers were traversed. Density patterns were applied. That effort is REAL and VALUABLE.

The audit doesn't diminish that effort. It COMPLETES it. A building is not finished when the last wall goes up — it's finished when the inspector verifies every joint, every wire, every pipe. The inspector is not the enemy of the builder. The inspector is the builder's final collaborator.

**Deploy every sub-agent. Run every check. Find every pixel out of place. And then fix it — with the same care and conviction that built it in the first place.**

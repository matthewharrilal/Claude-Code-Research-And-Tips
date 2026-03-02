# Handoff Tissue Accumulation Protocol

## The Problem This Solves

172,800 lines of creative corpus cannot fit in one context window (~50K line capacity). The relay chain distributes this corpus across N processing windows, each of which deeply engages with a raw slice. But each window produces creative understanding that must flow forward -- and if we EXTRACT or COMPRESS that understanding into rules, we reproduce the old pipeline's category error.

The accumulation protocol answers: how does the creative processing state from Window 1 combine with the creative processing state from Window 2 to produce something the builder in Window N+1 can FEEL, not merely reference?

---

## 1. The Accumulation Mechanism

### Why Every Option Has a Failure Mode

- **Option A (all previous tissue):** Windows 1-8 produce ~200-400 lines each. By Window 15, the accumulated tissue is ~4,000-6,000 lines -- competing with the raw corpus slice for context space. The tissue displaces the very material it was derived from. Early windows' tissue gets the least attention (recency bias in transformer attention).

- **Option B (only previous window's tissue):** Window 5 knows what Window 4 thought but has no memory of Windows 1-3. If Window 1 discovered a structural tension that Window 4 did not engage with, it is permanently lost. The chain becomes a game of telephone.

- **Option C (rolling conviction brief):** Each window updates a shared document. This IS extraction -- each window must READ what came before, JUDGE what to keep, and COMPRESS their own contribution into what's already there. The document converges toward consensus, which kills the minority insights that are often the most valuable.

- **Option D (rolling brief + recent full tissue):** Better than A-C, but the rolling brief still has the compression problem, and "2-3 most recent" is arbitrary.

### Option E: The Sedimentary Model

None of A-D works because they treat accumulation as information management. The real question is not "how do we carry forward what was learned?" but "how do we carry forward what was FELT?"

**The insight:** Creative processing produces two kinds of output:

1. **Conviction** -- what the window became certain about. This is stable across the chain. "This corpus is obsessed with the gap between restraint and expression." Once felt, conviction doesn't need updating. It needs AMPLIFYING -- later windows that encounter the same pattern reinforce it; windows that encounter counter-evidence create productive tension.

2. **Discovery** -- what surprised the window. This is unique to each window's slice. "The OD explorations treat whitespace as architecture, not absence -- the negative space IS the structure." This cannot be compressed without losing the specificity that makes it valuable.

**The sedimentary model separates these two channels:**

```
CONVICTION LAYER (cumulative, ~20-40 lines, grows slowly)
  Grows by accretion. Each window adds 2-5 sentences of conviction.
  Previous conviction is INHERITED, not summarized.
  New conviction is ADDED, not merged.
  The layer is append-only. Nothing is deleted or rewritten.
  If a window CONTRADICTS previous conviction, it adds the contradiction
  as tension, not as correction.

  By Window 15, this layer is ~150-300 lines of stacked conviction.
  It reads like a geological record of creative understanding.

DISCOVERY LOG (append-only, ~30-60 lines per window)
  Each window's unique surprises, recorded in the voice of that window.
  Not summarized, not compressed, not curated.
  The log grows linearly. By Window 15: ~600-900 lines.

  The builder reads discoveries as ATMOSPHERE -- the accumulation of
  many processing states creating a richer sense of the corpus than
  any single window could produce.
```

### The Math

Assume 15 relay windows processing ~97,800 actionable lines (~6,500 lines per window).

| Component | Per Window | After 15 Windows | Token Cost |
|-----------|-----------|-------------------|------------|
| Conviction layer | +3-5 sentences (~20-40 lines added) | ~150-300 lines total | ~750-1,500 |
| Discovery log | ~30-60 lines | ~450-900 lines total | ~2,250-4,500 |
| **Total accumulated tissue** | | **~600-1,200 lines** | **~3,000-6,000** |

At ~3,000-6,000 tokens, the accumulated tissue consumes 2-4% of a 150K token budget. This is negligible. The relay window still has ~140K tokens for its raw corpus slice + fixed overhead. **Accumulation does not displace the raw material.**

### Why Append-Only Is Not Extraction

The critical distinction: each window writes IN ITS OWN VOICE about ITS OWN EXPERIENCE. It does not read previous discoveries and judge them. It does not curate. It does not edit. The conviction layer inherits everything that came before and adds to it. The discovery log is a journal, not a report.

This avoids the compression trap because no window is ever asked "summarize what you learned." Each window is asked "what did this material make you feel, and what surprised you?" The accumulation happens by stacking, not by compression.

---

## 2. The Creative Framing Format

### What a Relay Window's Output Looks Like

Each relay window produces a **CREATIVE PROCESSING RECORD** -- not a summary, not an extraction, not a digest. A record of what it was like to deeply engage with this slice of the corpus.

```markdown
# Window [N] Creative Processing Record
## Corpus Slice: [which files were loaded]

---

### WHAT THIS MATERIAL TAUGHT ME

[2-5 paragraphs of philosophical reflection. Not what the files contain --
what ENGAGING with them revealed about the design system's nature.
Written as first-person creative prose.]

Example (from hypothetical Window processing OD explorations):

  "The organizational domain explorations taught me that this design system
  thinks in CONTAINERS before it thinks in content. Every exploration begins
  with the question 'what is the SHAPE of the space?' before asking 'what
  goes in it?' This is architectural thinking -- the blueprint precedes the
  furniture. And the most successful explorations are the ones where the
  container's shape ARGUES with the content's nature. OD-006 wants to flow
  freely but the container forces it into columns; the tension between
  flow and structure is where the visual interest lives.

  I was struck by how consistently the explorations treat whitespace as
  structure, not absence. In OD-004, the gap between sections is not
  'empty' -- it is a deliberate architectural element that carries the
  same intentionality as the text it separates. The system does not
  'add whitespace.' It builds with silence the way a musician builds
  with rests."

---

### WHAT SURPRISED ME

[3-7 specific discoveries, each 2-4 sentences. These are moments where
the material contradicted expectations or revealed something the window
did not anticipate. Specificity is mandatory -- name the file, name the
moment, name the surprise.]

Example:

  "DD-003-islands.html contradicted my assumption that density must be
  uniform within a zone. The 'islands' approach creates pockets of high
  density floating in low-density space, and the CONTRAST between
  pocket and surround generates more perceptual richness than either
  uniform-dense or uniform-sparse. The mechanism is not density itself
  but density JUXTAPOSITION."

---

### WHAT I REJECTED

[1-3 patterns or interpretations the window considered and decided against.
This carries dead-end information forward so future windows don't
repeat the exploration.]

Example:

  "I initially read the DD explorations as a progression from simple to
  complex. They are not. DD-001 through DD-006 are PARALLEL experiments,
  not sequential discoveries. Reading them as a progression would impose
  a narrative that flattens their independence. Each one is a complete
  thought, not a step toward a conclusion."

---

### WHAT IS UNRESOLVED

[1-3 tensions or questions the window could not resolve from its slice alone.
These are creative invitations for later windows that may encounter
complementary material.]

Example:

  "The density explorations demonstrate mastery of WITHIN-ZONE texture
  but say almost nothing about BETWEEN-ZONE transitions. The moment of
  shift from one density register to another is the most compositionally
  demanding moment in a page, and these explorations skip past it. Is
  this because transitions are theorized elsewhere in the corpus, or
  because the system hasn't solved them?"

---

### CONVICTION ADDITION
[2-5 sentences added to the growing conviction layer. These are
STATEMENTS OF BELIEF about the design system, derived from this
window's deep engagement with its slice. Written as declarative prose.]

Example:

  "The design system's power is not in its individual mechanisms but in
  the TENSION between mechanisms. Dense/sparse is not a mechanism -- it
  is a relationship. Border-weight is not a mechanism -- it is a signal
  whose meaning depends on what LACKS a border. The system composes by
  creating CONTRASTS, not by deploying features."
```

### Template Properties

| Property | Requirement | Rationale |
|----------|-------------|-----------|
| Total length | 200-400 lines | Small enough to chain; rich enough to carry processing state |
| Voice | First person singular | "I was struck by..." not "The analysis reveals..." |
| Tense | Past tense for processing, present for conviction | Distinguishes experience from belief |
| Specificity | File names, mechanism names, CSS patterns | Prevents drift toward vague philosophy |
| Framing | Philosophical ("this taught me that...") | Not procedural ("the builder must...") |
| Format | Prose paragraphs, not bullet lists | Bullet lists compress; prose carries texture |

### What This Format Does NOT Contain

- No rules. No "the builder should..."
- No mechanism inventories or technique lists
- No quantitative assessments ("7 explorations at quality 3.5/5")
- No cross-references to the handoff protocol or pipeline architecture
- No meta-commentary about the relay chain itself
- No checklist items or actionable recommendations

The format carries CONVICTION and DISCOVERY. It is a record of creative engagement, not a product specification.

---

## 3. The Convergence Protocol

### How Accumulated Tissue Becomes Builder Input

The final relay window does NOT produce a "master summary." It produces its own Creative Processing Record, same as every other window. The builder receives:

```
BUILDER'S CREATIVE INPUT (ordered by reading sequence):

1. THE CONVICTION BRIEF (from TC derivation -- Window 1 of build pipeline)
   ~80-120 lines. The metaphor, the world, the arc. Read first.

2. THE CONVICTION LAYER (accumulated across all relay windows)
   ~150-300 lines. Stacked beliefs about the corpus's nature.
   Read second, as ATMOSPHERE. Not instructions -- philosophy.

3. THE DISCOVERY LOG (accumulated across all relay windows)
   ~450-900 lines. Every surprise, every tension, every dead end.
   Read third, as TEXTURE. The builder absorbs this; it shapes
   how they interpret the conviction brief and reference files.

4. REFERENCE FILES (mechanism catalog, components, tokens)
   ~1,700 lines. The building vocabulary.

5. CONTENT MARKDOWN
   ~500-5,000 lines. What the page is about.

6. RAW CORPUS SLICE (the final 2-3 relay windows' input files)
   Budget-permitting. The most recent raw material, not digested.
```

### Why This Ordering Works

The conviction brief tells the builder WHERE to go (specific metaphor for THIS content). The conviction layer tells the builder what the corpus BELIEVES (system-wide philosophy from processing 97,800 lines). The discovery log tells the builder what the corpus HIDES (surprises, tensions, unresolved questions). The reference files give the builder TOOLS. The content gives them MATERIAL.

The builder reads philosophy before tools. Direction before vocabulary. Belief before specification. This sequences conviction before compliance, matching the ideology's core principle.

### The Convergence Question: Does It Need a Weaver?

Consider whether a dedicated "convergence window" should read ALL accumulated tissue and produce a synthesis. This is tempting but dangerous -- it reintroduces the extraction pattern. A convergence window that reads 15 processing records and produces a 200-line synthesis is doing exactly what the old pipeline did: compressing creative processing state into a description of that state.

**Decision: No convergence window.** The accumulated tissue IS the convergence. The conviction layer grows by accretion -- each window's beliefs layered on top of previous beliefs. The discovery log is a raw journal of surprises. These documents converge NATURALLY through accumulation, not through editorial synthesis.

The builder is the convergence. They read the accumulated tissue and form their OWN understanding. This is the same principle as the TC-to-builder handoff: the conviction brief carries direction, the builder interprets it creatively. The accumulated tissue carries the corpus's creative intelligence, the builder absorbs it atmospherically.

### Exception: If the Conviction Layer Contradicts Itself

If Window 3 says "this system thinks in containers first" and Window 11 says "the CD explorations show the system thinks in TRANSITIONS first, not containers," that contradiction is valuable. It represents a genuine tension in the corpus. The builder who reads both statements and holds the tension produces richer work than one who receives a resolved "the system thinks in both containers and transitions."

Contradictions in the conviction layer are features, not bugs. They are the corpus ARGUING with itself. The builder's job is to navigate the argument, not to resolve it before building.

---

## 4. The Sliding Window Approach: Option E in Detail

### What Each Relay Window Receives

```
RELAY WINDOW N RECEIVES:

1. CONVICTION LAYER (from Windows 1 through N-1)
   ~20-40 lines per previous window = ~(N-1) * 30 lines
   Read as inherited belief. The window INHERITS this; it does
   not evaluate or curate it.

2. DISCOVERY LOG (from Windows 1 through N-1)
   ~30-60 lines per previous window = ~(N-1) * 45 lines
   Read as context. The window may encounter material that
   EXPLAINS a previous window's surprise or DEEPENS it.

3. RAW CORPUS SLICE (this window's assigned files)
   ~6,500 lines of raw explorations, research, or case studies.
   This is the PRIMARY input. The window spends 80%+ of its
   processing engaging with this material.

4. RELAY WINDOW PROMPT (~40-60 lines)
   The framing instructions (see Section 5).
```

### Budget Analysis Per Relay Window

```
Budget:                    150,000 tokens (conservative)
Fixed overhead:              9,500 tokens
Relay prompt:                1,500 tokens
Conviction layer (Window 8): ~1,200 tokens (7 windows * ~170 tokens)
Discovery log (Window 8):    ~2,700 tokens (7 windows * ~385 tokens)
Raw corpus slice:           ~25,000 tokens (~6,500 lines * ~3.8 tokens/line)
                           ─────────────
USED (at Window 8):         ~39,900 tokens (27%)
REMAINING:                 ~110,100 tokens (73%)
```

Even at Window 15, accumulated tissue is ~6,000 tokens. The window still has >100K tokens of headroom. The sliding window approach does not create pressure -- the corpus slices are the constraint, not the accumulated tissue.

### Why Full Accumulation Works (Option E vs Option D)

Option D proposed carrying a "rolling brief" (compression risk) plus recent full tissue. Option E carries EVERYTHING uncompressed because the math allows it. At ~6,000 tokens for 15 windows of accumulation, there is no need to compress. The entire relay chain's creative output fits comfortably alongside each window's raw slice.

This is the key architectural insight: **the accumulated tissue is CHEAP relative to the context budget.** The expensive thing is the raw corpus slice (~25K tokens). The tissue is a fraction of that. We can afford to be maximally generous with accumulation because it does not compete with the raw material for space.

---

## 5. The Framing Instructions

### What Each Relay Window Receives as Its Prompt

```markdown
## YOUR ROLE

You are one window in a relay chain processing the creative corpus of a
design system. Your job is not to analyze, not to extract, not to summarize.
Your job is to ENGAGE DEEPLY with the raw material in your context and
produce a creative processing record that carries your experience forward.

## THE INHERITED BELIEF

Below is the CONVICTION LAYER -- what previous windows in this chain
came to believe about the corpus through their own deep engagement.
Read this as inherited philosophy. You may find your slice confirms
these beliefs, contradicts them, or reveals dimensions they did not
consider. All three responses are valuable. Do not feel obligated
to agree with previous windows. Do not feel obligated to disagree.
Engage with YOUR material and let YOUR convictions emerge.

[CONVICTION LAYER HERE]

## THE DISCOVERY TRAIL

Below is the DISCOVERY LOG -- what surprised previous windows. Read
this as atmosphere. Some of these surprises may connect to patterns
in your slice. Some may not. Do not force connections. If a genuine
connection emerges, name it. If not, focus on your own material.

[DISCOVERY LOG HERE]

## YOUR MATERIAL

The files below are your primary engagement. Read them deeply. Read
them as a CREATOR, not as an analyst. Notice what moves you, what
confuses you, what contradicts what you expected. Notice the moments
where the material teaches you something about what this design system
IS -- not what it does, but what it believes.

You are not extracting lessons. You are not building a reference
document. You are spending time with raw creative work and letting
it shape your understanding. The record you produce is not a report
on that understanding -- it is a TRACE of your creative engagement.

[RAW CORPUS FILES HERE]

## YOUR OUTPUT

Produce a Creative Processing Record with five sections:

### WHAT THIS MATERIAL TAUGHT ME
2-5 paragraphs of philosophical reflection. Written in first person.
Not what the files contain -- what ENGAGING with them revealed.
Use present tense for beliefs ("this system IS...") and past tense
for your experience ("I was struck by...").

### WHAT SURPRISED ME
3-7 specific discoveries. Name the file. Name the moment. Name the
surprise. 2-4 sentences each. Specificity is mandatory.

### WHAT I REJECTED
1-3 interpretations you considered and decided against. These protect
future windows from dead ends.

### WHAT IS UNRESOLVED
1-3 tensions or questions your slice alone could not answer. These are
creative invitations for later windows.

### CONVICTION ADDITION
2-5 sentences of belief about the design system, derived from your
engagement. Written as declarative prose. These will be APPENDED to
the conviction layer for the next window.

Total length: 200-400 lines. Voice: first person singular, philosophical.
This is a creative document, not a technical report.
```

### What This Prompt Does NOT Say

- It does not say "analyze" or "evaluate" or "assess" -- these words trigger extraction mode
- It does not say "for the builder" or "the builder will need" -- this causes the window to pre-optimize for a consumer rather than engaging authentically
- It does not reference gates, PA questions, mechanisms by number, or any pipeline infrastructure
- It does not ask the window to compare its slice with previous slices -- comparison triggers curation
- It does not say "comprehensive" or "thorough" or "complete" -- these words trigger coverage anxiety, which produces shallow breadth instead of selective depth

### What This Prompt DOES Say

- "Engage deeply" -- depth over breadth
- "Read them as a CREATOR" -- generative mode, not analytical mode
- "What moves you" -- emotional engagement, not intellectual cataloging
- "Letting it shape your understanding" -- passive reception before active production
- "A TRACE of your creative engagement" -- trace, not summary; engagement, not analysis

---

## 6. Quality Gates for Handoff Tissue

### The 7 Evaluation Lenses Applied

Each Creative Processing Record is evaluated against the 7 lenses. A record that fails on 2+ lenses is a degraded handoff -- it carries information but not creative processing state.

| Lens | PASS Indicator | FAIL Indicator |
|------|---------------|----------------|
| **1. Conviction vs Constraint** | "This corpus taught me that restraint IS the design system's creative engine" | "The builder should use no more than 3 mechanism types per zone" |
| **2. Content Understanding Depth** | Names specific files, quotes specific CSS patterns, identifies specific tensions | Generic statements that could apply to any design system |
| **3. Creative Framing Quality** | Uses metaphor, draws unexpected connections, reframes assumptions | Lists features, catalogs techniques, inventories mechanisms |
| **4. Evocativeness** | Reading the record makes you want to BUILD something | Reading the record makes you want to CHECK a list |
| **5. Philosophical vs Procedural** | "By treating borders as semantic signals rather than decorative elements, the system creates hierarchy without ever raising its voice" | "Borders should be used for semantic differentiation, not decoration" |
| **6. Multi-Window Suitability** | Self-contained enough to be understood without reading the original files; specific enough to not be generic | Either requires the original files to parse OR so abstract it could describe any system |
| **7. Honest Creative Autonomy** | Window's own voice is distinct; it DISAGREES with previous conviction where its material warrants | Parrots previous conviction; adds nothing the previous windows didn't already say |

### What a FAILED Record Looks Like

```markdown
### WHAT THIS MATERIAL TAUGHT ME
The DD explorations demonstrate 6 density mechanisms: pulse, islands,
compression, alternation, gradient, and void. Each produces distinct
perceptual effects when applied to content zones. The most effective
explorations use 3-4 mechanisms in combination.

### WHAT SURPRISED ME
- DD-003 uses island density (notable for isolation patterns)
- DD-005 uses gradient density (smooth transitions)
- DD-006 uses void density (extreme contrast)
```

**Why this fails:**
- Lens 1: CONSTRAINT (inventories mechanisms instead of expressing conviction)
- Lens 3: FAIL (lists features, no creative reframing)
- Lens 4: FAIL (reading this does not make you want to build anything)
- Lens 5: PROCEDURAL (describes what things ARE, not what they MEAN)
- Lens 7: FAIL (no voice, no disagreement, no personality)

### What a SUCCESSFUL Record Looks Like

```markdown
### WHAT THIS MATERIAL TAUGHT ME
The density explorations are not about density at all. They are about
ATTENTION -- how the design system controls where the reader's eye goes
and how long it stays there. DD-003's "islands" work not because they are
dense, but because the sparse surround makes the eye HUNGRY for content.
The island is a reward. The surrounding space is the anticipation.

This reframes everything I inherited from the conviction layer about
"containers before content." The containers are not neutral vessels. They
are attention machines. A wide container with sparse content says "this
matters enough to give it room." A narrow container with dense content
says "this is utilitarian -- consume and move on." The container IS the
editorial voice.

### WHAT SURPRISED ME
DD-006's void exploration does something I did not expect: it uses
ABSENCE as a mechanism. There is a section break that is just...
empty. No rule, no gradient, no subtle background shift. Just 120px
of nothing. And it WORKS -- it creates a breath between dense sections
that no amount of padding or border could achieve. The absence is not
a gap. It is a statement: "what came before and what comes after are
different conversations." I have never seen negative space used this
assertively in a design system context.
```

**Why this succeeds:**
- Lens 1: CONVICTION (reframes density as attention, not mechanism inventory)
- Lens 3: PASS (creative reframing -- "islands as reward, space as anticipation")
- Lens 4: PASS (reading this makes you want to try void sections and attention containers)
- Lens 5: PHILOSOPHICAL ("the container IS the editorial voice")
- Lens 7: PASS (explicitly engages with and reframes previous conviction)

### Automated Detection Heuristic

While full quality assessment requires reading, a quick heuristic can flag likely failures:

| Signal | Indicates |
|--------|----------|
| Bullet lists > 5 items | Inventory mode, not reflection mode |
| Numbers/quantities in "TAUGHT ME" section | Mechanism counting, not meaning-making |
| Passive voice throughout | Report mode, not engagement mode |
| "The builder should" appears anywhere | Constraint framing leaked in |
| No file names in "SURPRISED ME" | Vague, not specific |
| "CONVICTION ADDITION" repeats earlier conviction verbatim | No original thought |
| Total length < 150 lines | Shallow engagement |
| No first person pronouns in first 3 paragraphs | Academic distance, not creative intimacy |

---

## 7. The Complete Accumulation Architecture

### Flow Diagram

```
RAW CORPUS (~97,800 lines)
  |
  ├── Slice 1 (~6,500 lines) ──→ [Relay Window 1]
  |                                    |
  |                                    ├── Creative Processing Record 1
  |                                    └── Conviction Addition 1
  |                                              |
  |                                    ┌─────────┘
  |                                    ▼
  |                              CONVICTION LAYER: [Addition 1]
  |                              DISCOVERY LOG: [Record 1 discoveries]
  |                                    |
  ├── Slice 2 (~6,500 lines) ──→ [Relay Window 2]
  |                                    |  (receives: Layer + Log + Slice 2)
  |                                    |
  |                                    ├── Creative Processing Record 2
  |                                    └── Conviction Addition 2
  |                                              |
  |                                    ┌─────────┘
  |                                    ▼
  |                              CONVICTION LAYER: [Addition 1 + Addition 2]
  |                              DISCOVERY LOG: [Records 1-2 discoveries]
  |                                    |
  ├── Slice 3... ──→ [Relay Window 3]
  |                        ...
  |                                    |
  └── Slice N... ──→ [Relay Window N]
                           |  (receives: Layer + Log + Slice N)
                           |
                           ├── Creative Processing Record N
                           └── Conviction Addition N
                                         |
                               ┌─────────┘
                               ▼
                         CONVICTION LAYER: [All N additions]
                         DISCOVERY LOG: [All N records' discoveries]
                                |
                                ▼
                    ┌──────────────────────────────┐
                    │  TC DERIVATION (Window 1)    │
                    │  Receives: Conviction Layer  │
                    │  + Discovery Log             │
                    │  + Content + TC Skill        │
                    │  Produces: Conviction Brief  │
                    └──────────────────────────────┘
                                |
                                ▼
                    ┌──────────────────────────────┐
                    │  BUILDER (Window 2)          │
                    │  Receives: Conviction Brief  │
                    │  + Conviction Layer           │
                    │  + Discovery Log             │
                    │  + Reference Files           │
                    │  + Content + Raw Slices      │
                    │  Produces: HTML Artifact     │
                    └──────────────────────────────┘
                                |
                                ▼
                         [Evaluate → Refine]
```

### Accumulation Implementation

The conviction layer and discovery log are plain text files managed by the orchestrator:

```
{output_dir}/_relay/conviction-layer.md
{output_dir}/_relay/discovery-log.md
{output_dir}/_relay/record-01.md
{output_dir}/_relay/record-02.md
...
{output_dir}/_relay/record-N.md
```

After each relay window completes:

1. Orchestrator reads the window's Creative Processing Record
2. Extracts the CONVICTION ADDITION section and APPENDS it to `conviction-layer.md` with a window identifier
3. Extracts the WHAT SURPRISED ME section and APPENDS it to `discovery-log.md` with a window identifier
4. Saves the full record as `record-{N}.md` for archival

The conviction layer grows like geological strata:

```markdown
# Conviction Layer

## Window 1 (Research R1-R3)
The design system's power is not in its individual mechanisms but in
the TENSION between mechanisms. Dense/sparse is not a mechanism -- it
is a relationship. The system composes by creating CONTRASTS, not by
deploying features.

## Window 2 (Research R4-R5 + Synthesis)
The axis questioning methodology is not analysis -- it is a way of
LISTENING to content. Each axis reveals a different need the content
has but cannot articulate. The 14 axes together create a portrait of
the content's desire, stated in the language of perception.

## Window 3 (DD Explorations)
Density is attention, not information packing. The design system
controls where the reader's eye goes by controlling what the eye is
hungry for. Containers are not neutral -- they are editorial voices.
A wide container says "this matters." A compressed container says
"consume and move on."

...
```

Each addition is ~30-50 words. By Window 15, the layer is ~450-750 words (~150-250 lines with headers). This is a document the builder can read in 3-5 minutes and ABSORB as atmosphere.

### What the Builder Actually Experiences

The builder in Window 2 (build pipeline, not relay chain) opens their context and reads:

1. **Conviction brief** (120 lines): "This page is a frontier garrison. The content argues for ugly pragmatism but its architecture IS elegant. Navigate this tension by..."

2. **Conviction layer** (150-250 lines): "The system composes by creating contrasts... Density is attention... Whitespace is architecture... The metaphor must be STRUCTURAL, not announced... Multi-coherence is the system's signature move..."

3. **Discovery log** (450-900 lines): "DD-006 uses absence as a mechanism... OD-004 treats transitions as composition, not plumbing... CD-003 proves that 3 simultaneous channel shifts at a boundary create felt spatial shift... The case studies show that the best pages have a moment of SURPRISE at 60-70% scroll depth..."

The builder absorbs 15 windows' worth of creative engagement -- not as rules, not as a checklist, but as the accumulated VOICE of 15 instances that each spent their full context deeply processing raw material. The builder does not follow instructions from this tissue. The builder is SHAPED by it, the way a musician is shaped by listening to recordings before performing.

This is the ideology's core insight made architectural: "generative quality scales with raw material in context." The conviction layer and discovery log ARE raw material -- they are the creative output of 15 processing acts, preserved in their original philosophical voice, accumulated without compression.

---

## 8. Edge Cases and Failure Modes

### Conviction Drift
If early windows process research (theoretical) and later windows process explorations (concrete), the conviction may drift from abstract to specific. This is not a bug -- it IS how understanding works. The builder reads the full spectrum, from theory to practice.

### Echo Chamber
If all 15 windows agree on everything, the conviction layer becomes a manifesto rather than a living debate. **Mitigation:** Slice assignment should interleave different corpus types (research, DD, OD, AD, CD, case studies) rather than grouping by type. This forces windows to encounter different perspectives.

### Declining Quality at Scale
Window 15 reads ~1,200 lines of accumulated tissue before engaging with its ~6,500-line slice. The tissue may anchor the window's thinking, causing it to CONFIRM previous beliefs rather than engage freshly. **Mitigation:** The prompt says "Do not feel obligated to agree... Let YOUR convictions emerge." But prompting is weak protection against anchoring. A stronger mitigation: the DISCOVERY LOG from previous windows is loaded AFTER the raw corpus slice in the prompt, not before. The window reads its raw material first, forms initial impressions, THEN reads what previous windows discovered. This preserves fresh-eyes for the raw material while still providing the accumulated context.

### Relay Chain Length
15 windows is an estimate based on ~97,800 lines / ~6,500 lines per slice. The actual number depends on which corpus files are included, how they're grouped, and whether some files are excluded as low-value. The accumulation protocol works for any chain length because the math remains favorable -- even 30 windows would produce only ~12,000 tokens of accumulated tissue (8% of budget).

---

## 9. Relationship to the Existing Handoff Protocol

The relay chain is a PREPROCESSING STAGE that runs BEFORE the 4-window build pipeline. It does not replace the existing handoff protocol (conviction brief, reflection, Weaver synthesis). It FEEDS INTO it.

```
RELAY CHAIN (preprocessing)     BUILD PIPELINE (production)
  Relay Window 1                  W1: TC Derive
  Relay Window 2                  W2: Build
  ...                             W3: Evaluate
  Relay Window N                  W4: Refine
       |                              |
       ▼                              ▼
  Conviction Layer ──────────→ TC Derivation input
  Discovery Log ─────────────→ Builder's atmospheric context
```

The conviction layer enriches TC derivation (the TC agent reads corpus-wide philosophy alongside content-specific tension). The discovery log enriches the builder (the builder reads 15 windows' surprises alongside the conviction brief and reference files).

Neither document replaces the conviction brief. The brief is specific to THIS content and THIS metaphor. The conviction layer is about the CORPUS AS A WHOLE. They serve different functions and coexist without conflict.

---

## 10. Summary: The Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Accumulation model | Option E: Sedimentary (append-only, two channels) | Avoids compression; math allows full accumulation |
| Per-window output size | 200-400 lines | Rich enough to carry conviction; small enough to chain |
| Conviction layer format | Append-only, ~30-50 words per window | Grows slowly; reads as stacked belief |
| Discovery log format | Append-only, ~30-60 lines per window | Preserves specificity; no curation |
| Convergence mechanism | None (the builder IS the convergence) | Any editorial synthesis reintroduces extraction |
| Sliding window content | Full accumulation (all previous tissue) | Budget allows it (~4% of context at Window 15) |
| Prompt framing | "Engage deeply" / "as a CREATOR" / "what moved you" | Triggers generative mode, not analytical mode |
| Quality gates | 7 evaluation lenses with pass/fail indicators | Detects extraction/compression regression |
| Reading order for relay windows | Raw material FIRST, then previous discoveries | Preserves fresh-eyes for raw material |
| Contradictions in conviction | Preserved as tension, not resolved | Contradictions are the most valuable signals |

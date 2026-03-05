# Design Spec: Merged Output Format + Reflection Protocol + Exploration Recommendation

**Author:** format-designer (Task #3)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## Design 1: The Merged Output Format — "Conviction Brief" (~80-120 lines)

### Philosophy

The current TC skill outputs a "TC brief" (8 sections, ~80-120 lines) that is fundamentally a COMPLIANCE DOCUMENT: zone architecture tables, mechanism inventories, boundary-keyed CSS tables, perception check lines, detection expectations. The pipeline's brief template adds 4 tiers with further compliance framing (soul constraints as rules, perception as thresholds, dispositions as checklists).

The merged format carries the TC skill's questioning depth (14 axes, Opposition Principle, tension derivation, metaphor collapse) but outputs in a CONVICTION format: the brief should make the builder want to create THIS page, not verify they haven't violated THIS checklist.

### The Test

**Could this brief produce a DIFFERENT page?** If yes, it is too generic.
**Could this brief be satisfied by a flat page?** If yes, it has no conviction.
**Does this brief describe what the page IS, or what the page MUST NOT BE?** If the latter, it is a guardrail document, not a creative brief.

### Format: 6 Sections (~100 lines total)

---

#### Section 1: WORLD-DESCRIPTION (~12 lines)

**What it replaces:** TC Brief Section 1 (Structural Metaphor) + Pipeline Tier 1 (Identity as prohibition list)

**Frame:** Identity as the world the builder inhabits, not rules the builder obeys. The world-description INCLUDES the metaphor — the metaphor is not a separate technical decision but part of how this world works.

**Content:**
- 2-3 lines: The world this page lives in (sharp edges, warm surfaces, flat light — stated as physics, not prohibition)
- 3-4 lines: The metaphor as natural law of this world ("In this world, knowledge compresses under pressure. The deeper you go, the denser and darker the material. Surface observations are loose and warm; foundational certainties are tight and cool.")
- 2-3 lines: The content's specific gravity in this world ("This content has three density registers: the author's voice (loose, conversational), the technical substance (compressed, precise), and the provocative claim (erupting, sharp)")
- 1-2 lines: The BECAUSE statement — why THIS metaphor for THIS content, stated as inevitability ("The content literally describes geological time — the metaphor is not imposed but recognized")

**What is NOT here:**
- No SC-01 through SC-10 constraint lists
- No "MUST NOT" language
- No perception thresholds
- No compliance verification checkboxes

**Example:**

```
Every surface is sharp and flat. Light falls directly. The palette is warm —
cream grounds, near-black anchors, a single red accent.

This page descends through geological strata. Knowledge compresses with depth:
surface observations sit loose in generous space; foundational certainties pack
tight under accumulated weight. The descent is visible — backgrounds darken,
borders thicken, spacing tightens. A reader scrolling down is drilling.

This content carries three registers: Yegge's conversational voice (loose, wide,
inviting), the Gas Town technical architecture (compressed, structural, precise),
and the provocative thesis about institutional failure (erupting through the
stratigraphy like an igneous intrusion — sharp, hot, disrupting the layers).

The content literally describes layers of organizational dysfunction settling
over time. The metaphor is not imposed — it is the content's own structure
made visible.
```

---

#### Section 2: CALIBRATION (~10 lines)

**What it replaces:** Pipeline Tier 2 (Perception Physics as natural laws) + TC Brief Phase 4.0 guardrails

**Frame:** Calibration ranges for THIS page, not universal floors. State the RANGE the builder has, anchored to this metaphor's needs. Embed the physics as consequences, not rules.

**Content:**
- Background arc: the specific hex progression for this page's zones, stated as the world's color temperature gradient (not as a compliance table)
- Spatial arc: the specific padding progression, stated as compression behavior (not as min/max values)
- Type arc: the specific typography shifts, stated as voice changes (not as font-size deltas)
- 1-2 lines on the RANGE available ("The surface zone breathes at 64-80px padding. The bedrock zone compresses to 32-40px. Between these poles, you have the full gradient.")

**What is NOT here:**
- No ">= 15 RGB" threshold language
- No "<= 120px stacked gap" compliance checks
- No "PERCEPTION CHECK: YES/NO" inline verification
- No boundary-keyed CSS tables with exact hex pairs

**The physics are EMBEDDED in the calibration ranges themselves** — if the range specifies backgrounds that differ by 25 RGB, the 15 RGB floor is satisfied without being stated. The builder works with creative ranges, not compliance floors.

**Example:**

```
The descent runs warm-to-cool:
  Surface: #FEF9F5 (loose, airy, Yegge's conversational register)
  Mid-stratum: #F5F0E8 (compressed, the architecture emerging)
  Deep stratum: #EDE6DA (dense, structural certainty)
  Bedrock: #1A1A1A inverted (the foundational claim, white text on near-black)

Padding compresses with depth: 72px at surface, 48px mid-stratum, 32px deep.
The bedrock is the tightest zone — minimum 32px but maximum density.

Typography shifts from loose (Inter 18px/1.8, generous letter-spacing) to tight
(Inter 16px/1.6, minimal spacing). The author's voice (Instrument Serif italic)
erupts at the igneous intrusion — a deliberate break from the descent's rhythm.
```

---

#### Section 3: OPPOSITION MAP (~15 lines)

**What it replaces:** TC Brief Section 3 (Content Tensions as axis/pole pairs) + TC Brief Section 4 (Selected Mechanisms as inventory lists)

**Frame:** Where the content's needs FIGHT the world's personality. These opposition points are the richest creative territory — the places where the builder has the most to discover. The Opposition Principle's output is not a list of tensions to "resolve" but a map of where creative energy concentrates.

**Content:**
- For each genuine tension (typically 3-5): state the opposition as a CREATIVE INVITATION, not a problem to solve
  - "The content wants warmth and invitation. The world is austere. The opposition lives in the opening zone — how does austerity invite?"
  - "The content's structure is conversational (loose, digressive, surprising). The world's structure is editorial (precise, hierarchical, decisive). The fight is richest in the mid-sections where Yegge's digressions need both freedom AND containment."
- For each opposition: name what EMERGES from the fight (not what CSS resolves it)
  - "From the warmth/austerity fight: a containment that feels protective rather than restrictive. Borders that hold the conversational register without boxing it."
- The DOMINANT opposition: the one that shaped the metaphor most deeply
- The UNRESOLVED opposition: the one where both poles are equally valid and the builder gets to choose

**What is NOT here:**
- No mechanism inventory (#1 Border-Weight + #7 Zone Backgrounds + ...)
- No per-category minimums (S:1+ H:1+ C:1+ D:1+ N:1+)
- No "REJECTED: #16 Drop Cap (reason: ...)" lists
- No reinforcing pair specifications

The mechanisms are IMPLICIT in the opposition map. If the brief describes "containment that feels protective" and "borders that hold without boxing," the builder will reach for border-weight gradient and zone backgrounds naturally. Naming the mechanisms by catalog number converts creative direction into checklist compliance.

**Example:**

```
OPPOSITION 1 (DOMINANT — shaped the metaphor):
The content describes institutional failure with empathy. The world is decisive,
opinionated. The fight: how does an opinionated design system hold content about
systemic compassion? The answer lives in the bedrock zone — the foundational
claim is delivered with the world's full authority (4px borders, dark background,
compressed typography), but the CONTENT inside that authority is about human
failure, not technical correctness. The container is confident; the content
is tender.

OPPOSITION 2 (CREATIVE TERRITORY):
Yegge writes in digressions — ideas that spiral, double back, surprise.
The world's grammar is hierarchical, sequential, decisive. The fight is richest
in the mid-stratum where 3-4 sections of varying density need to feel like
exploration WITHOUT losing the descent arc. The builder's opportunity: use layout
shifts (single-column to 2-column grid and back) to give the digressions room
to breathe without breaking the vertical metaphor.

OPPOSITION 3 (UNRESOLVED — builder's choice):
The provocative thesis wants to ERUPT. The world wants measured authority.
Does the igneous intrusion arrive as a full dark-mode inversion? As a
pull-quote that breaks the column? As a spacing rupture? The builder decides.
The brief provides the energy, not the resolution.
```

---

#### Section 4: COMPOSITIONAL ARC (~20 lines)

**What it replaces:** TC Brief Section 2 (Zone Architecture) + Section 5 (CSS Directions) + Section 6 (Build Recipe)

**Frame:** The page's compositional arc as a JOURNEY the builder takes the reader through — not as zones with density labels and pacing tags, but as an experiential narrative with creative waypoints.

**Content:**
- The arc described as what the reader EXPERIENCES, not what the CSS SPECIFIES
  - "The page opens wide and warm — an invitation. The reader settles in..."
  - "At the mid-point, the content compresses. Two ideas need to live side by side..."
  - "The bedrock arrives as a shift in gravity — everything tightens, darkens..."
- For each major transition (typically 3-4): the FEELING of the transition, not the CSS of the transition
  - "The shift from surface to mid-stratum should feel like stepping from a porch into a hallway — the space narrows, the light changes, but you're still in the same building"
- The CLIMAX: where the page reaches maximum intensity and why
- The RESOLUTION: how the page releases tension (earned closure, not just "footer")
- Creative waypoints: 3-5 specific moments where the builder should invest compositional energy
  - "The igneous intrusion at ~65% scroll: this is the page's dramatic peak"
  - "The first section boundary: the reader's first experience of the descent"
  - "The quiet zone before bedrock: the breath before the final compression"

**What is NOT here:**
- No zone ID tables (Z1 | Surface | sparse | NARRATIVE)
- No pacing tags (DENSE | BREATHING | TRANSITIONAL)
- No layout topology specifications (single-column | 2-column grid | bento)
- No sequenced build steps (1. Set container... 2. Set zone background...)
- No PERCEPTION CHECK lines
- No approved verb tiers (Find/Delete/Replace/Add/Set)

**Example:**

```
The page opens in Yegge's voice — wide, warm, conversational. The surface zone
is generous: big type, ample margins, the reader invited to settle in. The
content here is storytelling, and the space should feel like sitting across
from someone who has a story to tell.

First descent: the conversational register compresses as technical architecture
emerges. The transition should feel gradual — not a wall but a gradient.
Backgrounds cool by a shade, spacing tightens by a step, the first structural
borders appear. The reader is still reading Yegge, but the room has changed.

Mid-stratum: the content splits. Gas Town's architecture wants parallel
presentation (what it is / what it does / what it costs). This is the zone
for a grid layout — 2 columns that let the reader compare without scrolling.
The digressions here need containment (bordered callouts? inset quotes?) but
not suppression.

The igneous intrusion arrives at ~65%. Yegge's provocative thesis erupts through
the careful stratigraphy. This is the page's dramatic peak — a full register
break. Whatever the builder chooses (dark inversion, scale break, spacing
rupture), it must feel SURPRISING. The established rhythm breaks on purpose.

Bedrock: the foundational claim, compressed and authoritative. Dense typography,
structural borders, the world's full editorial voice. The content here is the
takeaway — the thing the reader carries away. Short, certain, heavy.

Resolution: the page releases with the footer's familiar signature. The descent
is complete. The reader surfaces.
```

---

#### Section 5: CREATIVE CONDITIONS (~10 lines)

**What it replaces:** Pipeline Tier 4 (Dispositions D-01 through D-09 as experimental checklists) + TC Brief Section 8 (Builder Anchors as non-negotiable constraints)

**Frame:** Experimental invitations — things the builder COULD try, not things the builder MUST verify. The conditions acknowledge 80% creative authority as genuine permission, not a number cited before a list of constraints.

**Content:**
- 3-5 creative invitations specific to THIS content's opportunities
  - "The digressions want room. Try giving them asymmetric margins — indented left, full right — so they feel like marginalia without being sidelined."
  - "The conversational register is Yegge's signature. Consider whether one section deserves his voice in Instrument Serif italic — an editorial aside within the editorial."
  - "The grid zone in the mid-stratum could be a bento grid (varied cell sizes) or a strict 2-column. The content's symmetry suggests strict columns, but the CONTENT of those columns is asymmetric (short technical spec vs. long narrative). Let the asymmetry show."
- 1-2 experimental questions the builder can explore
  - "What happens if the igneous intrusion is NOT dark-mode? What if it's the WARMEST zone instead — a red-accented eruption through cool strata?"
  - "The footer usually mirrors the header. What if this page's footer mirrors the SURFACE instead — a return to warmth after the bedrock's compression?"

**What is NOT here:**
- No D-01 through D-09 disposition numbers
- No [EXPERIMENTAL] tags
- No "MUST include at least ONE specific CSS property:value pair"
- No hover behavior vocabulary mandates
- No "builder MUST NOT violate" anchor constraints

**Example:**

```
Try: letting Yegge's digressions sit in inset blocks with asymmetric margins.
Not callouts (too formal), not blockquotes (too generic) — something that feels
like a sidebar in a magazine article. The left margin indents 48px; the right
margin stays full width. The voice changes (lighter text color? serif italic?)
but the container doesn't box it.

Try: a pull-quote of the core thesis at the igneous intrusion. Scale break:
28-32px Instrument Serif italic, the only moment the display font appears in
body content. The rupture is typographic, not chromatic.

Explore: does the bedrock need a full dark inversion, or can the same weight
be achieved with a 4px left border + heavy typography on the warm background?
The dark inversion is proven (CD-006) but expected. The border approach is
untested — higher risk, potentially higher reward.

Question: The quiet zone (the section just before bedrock) — how quiet? The
pipeline's evidence says 2-3 mechanisms, single-column, breathing room. But
this content's quiet moment is Yegge reflecting on why institutions fail. The
reflection is emotionally dense even though it's structurally sparse. Can the
builder let emotional density carry a visually sparse zone?
```

---

#### Section 6: THE CONTENT ITSELF (~15 lines, compressed)

**What it replaces:** Pipeline Content Map Appendix

**Frame:** A compressed map of the content's structure, register shifts, and emotional beats — the raw material the builder works with. This is REFERENCE, not direction.

**Content:**
- Content outline (section titles or descriptions, 1 line each)
- Register annotations (NARRATIVE / REFERENCE / CODE / PROVOCATIVE per section)
- Emotional arc annotations (where the content's own energy peaks and troughs)
- Word count per section (for height estimation)
- Any structural features (lists, code blocks, tables, Q&A pairs) the builder needs to accommodate

**Example:**

```
CONTENT MAP (Gas Town by Steve Yegge, ~4,200 words):

1. Opening anecdote: Jeff Bezos discovers a problem (320 words, NARRATIVE, warm)
2. Gas Town thesis stated: organizations accumulate dysfunction (280 words, PROVOCATIVE, sharp)
3. Three failure modes described: [a] technical debt [b] process debt [c] cultural debt
   (1,100 words total, REFERENCE with embedded NARRATIVE, dense)
4. The compression analogy: how dysfunction compresses under organizational pressure
   (450 words, NARRATIVE → PROVOCATIVE, the igneous moment)
5. Counter-examples: organizations that avoided Gas Town (600 words, REFERENCE, measured)
6. The uncomfortable implication: most organizations ARE Gas Town (400 words, PROVOCATIVE, the bedrock claim)
7. Closing: Yegge's personal reflection (350 words, NARRATIVE, quiet/earned)

Structural features: no code blocks, no tables, 2 embedded lists, 1 extended metaphor
```

---

### What This Format REMOVES from the Current TC Brief

| Removed | Why |
|---------|-----|
| Mechanism inventory with catalog numbers | Converts creative direction to checklist |
| Boundary-keyed CSS tables (hex-to-hex) | Pre-computes what the builder should discover |
| PERCEPTION CHECK inline verification | Compliance framing mid-creative-flow |
| Per-category minimums (S:1+ H:1+...) | Counting mechanisms, not composing |
| Rejected mechanism lists | Tells builder what NOT to do (prohibition, not invitation) |
| Reinforcing pair specifications | Pre-computes compositional relationships |
| Approved verb tiers | Process prescription |
| Build recipe with sequenced steps | Recipe-following, not creative response |
| Detection expectations | Audit-oriented, not creation-oriented |

### What This Format PRESERVES from the TC Skill

| Preserved | How |
|-----------|-----|
| 14-axis questioning depth | Drives the Opposition Map (Section 3) |
| Tension derivation | Opposition Map IS tensions — stated as creative invitations |
| Metaphor as structural bridge | World-Description embeds metaphor as natural law |
| Perceptual risk assessment | Calibration ranges EMBED safe zones without naming floors |
| Content-specificity (BECAUSE test, SUBSTITUTION test) | World-Description includes BECAUSE; content map provides substitution-resistance |
| Phase-gated library access | Still enforced — the format doesn't change the TC pipeline's process |

### How Guardrails Survive Without Explicit Statement

The brief does not state "container width 940-960px" or ">= 15 RGB delta." But:

1. The CALIBRATION section specifies hex values that inherently satisfy RGB thresholds
2. The pipeline's GATE RUNNER still runs after the build — every guardrail is verified programmatically
3. The builder's CONVENTIONS BRIEF (a separate, shorter document) contains the mechanical constraints
4. The conviction brief is what the builder reads FIRST — it establishes creative direction. The conventions brief (read second) contains mechanical floors. The separation ensures creative intent is established before compliance is introduced.

**The conviction brief does not replace the gate runner. It replaces the brief-as-checklist.**

---

## Design 2: The 6-Dimension Reflection Protocol

### Philosophy

When a builder finishes creating in one context window, the artifact is the page. But the artifact alone does not carry the builder's creative state — what they were trying to achieve, what they rejected, what surprised them, what energy was suppressed. The current pipeline's "conviction statement" is a 1-2 line intent declaration. The current IMPROVE builder receives "artistic impressions" from the Weaver (an auditor, not the creator).

The reflection protocol captures the builder's creative state AS the builder — not as filtered through an auditor's lens. This reflection is the TISSUE that connects context windows. It makes the next builder instance want to CREATE, not comply.

### The 6 Dimensions

Each dimension is written by the builder immediately after completing the artifact, BEFORE any audit. The reflection captures creative state at the moment of completion, not post-audit rationalization.

---

#### (a) CONVICTION — What I was trying to achieve

Not what I built (the artifact shows that). Not what the brief asked for (the brief shows that). What I was AIMING AT — the feeling I wanted the reader to have, the compositional idea I was pursuing.

**Prompt for the builder:**
"Describe the page you were trying to make. Not the page you made — the page in your head. Where does the finished artifact match that vision? Where does it fall short?"

**Example:**
"I wanted the descent to feel inevitable — like the reader doesn't notice they're going deeper until the bedrock arrives and they realize how far they've come. The surface zone achieves this (the warmth invites without announcing structure). The mid-stratum partially achieves it (the grid zone is functional but the transition into it is too abrupt — it feels like a layout change, not a deepening). The bedrock achieves it fully (the dark inversion feels earned)."

**Length:** 3-5 sentences.

---

#### (b) ALTERNATIVES — What I rejected and why

Creative paths not taken. Every composition involves choices, and the unchosen paths carry creative energy. The next builder can explore these — they are not failures but DEFERRED possibilities.

**Prompt for the builder:**
"Name 2-3 things you considered doing but didn't. For each: what stopped you? Was it a constraint, a judgment call, or a time/context limit?"

**Example:**
"I considered making the igneous intrusion a WARM eruption (red-accented on cream) instead of a dark inversion. Rejected because the warm palette doesn't have enough contrast for a true rupture — the warmest red on cream looks decorative, not eruptive. But the idea of a WARM disruption (instead of always dark = dramatic) is worth exploring.

I wanted to use Instrument Serif for one body paragraph — Yegge's personal reflection in section 7. Rejected because the brief's world-description uses serif for headings only. But the conversational register genuinely wants a different voice, and the prohibition feels wrong for THIS content. Next builder: try it."

**Length:** 3-6 sentences.

---

#### (c) SURPRISES — What the material suggested

Moments where the content's structure or the CSS revealed something unexpected. These are the highest-value creative signals — they represent emergent possibilities the brief didn't predict.

**Prompt for the builder:**
"Was there a moment where you wrote CSS and something unexpected happened — a visual relationship you didn't plan, a rhythm that emerged from content length, a color combination that worked better than expected?"

**Example:**
"The three failure modes (section 3) naturally produced a 3-column grid when I set them up as parallel descriptions. But the third column (cultural debt) is twice as long as the other two. Instead of equalizing them, I let the asymmetry show — the long column creates a visual argument that cultural debt is the heaviest. This wasn't planned but it serves the content's thesis."

**Length:** 2-4 sentences.

---

#### (d) IMPULSES — What I wanted to do but couldn't

Creative energy that was suppressed by constraints, time, or context. Not complaints about the system — genuine creative directions that the current build couldn't accommodate. These are seeds for the next window.

**Prompt for the builder:**
"What did you want to try that the constraints or context wouldn't allow? Not 'I wish I could use gradients' (that's a system limitation) but 'I wanted X effect and couldn't find a way within the vocabulary.'"

**Example:**
"I wanted the quiet zone (section 7, Yegge's reflection) to feel like a CLEARING — not just less dense but genuinely open, like the stratigraphy has been cut away and you can see sky. The vocabulary doesn't have a mechanism for this — zone backgrounds go warm-to-cool, not warm-to-open. I used extra padding and a lighter background, but it feels like 'sparse section' not 'clearing.' The concept of vertical ABSENCE within a descent metaphor is unexplored territory."

**Length:** 2-4 sentences.

---

#### (e) EXPERIENCE — What this feels like

Not a score. Not a PA-05 prediction. A qualitative, experiential description of what scrolling through this page feels like. The builder's honest first-person account.

**Prompt for the builder:**
"Scroll through your page slowly. Describe what you experience. Don't evaluate — describe. Where do you feel pulled forward? Where do you slow down? Where do you feel satisfied? Where does something feel off?"

**Example:**
"The opening is warm and inviting — you settle in. The first descent is smooth; by section 3 you're in the architecture and the grid gives you something to examine. The igneous intrusion (section 4) hits hard — the dark inversion is the right choice, the pull-quote breaks the rhythm effectively. But the recovery from the intrusion to section 5 is too fast — the counter-examples arrive before the disruption has settled. The bedrock (section 6) is satisfying: compressed, authoritative, brief. The closing feels slightly detached — the reflection should feel more connected to the descent. Overall: the page has a strong spine but the transitions between mid-sections need more graduation."

**Length:** 4-6 sentences.

---

#### (f) UNRESOLVED — Aesthetic tensions still alive

Roads not taken that remain valid. Places where two good ideas competed and neither won definitively. These are opportunities for the next builder, not problems.

**Prompt for the builder:**
"Name 1-2 aesthetic tensions you couldn't fully resolve. Not bugs or mistakes — genuine competing compositional ideas where both options are valid."

**Example:**
"The grid zone works structurally but fights the descent metaphor. Grids are horizontal; descent is vertical. The tension is real: the content genuinely needs parallel presentation, and the metaphor genuinely needs vertical flow. I chose the grid (content wins) but the metaphor's vertical coherence is weaker in that zone. A better builder might find a way to make the grid FEEL like descent — maybe the cells darken left-to-right, echoing the top-to-bottom gradient? Or maybe the grid is the right choice and the metaphor should accommodate horizontal moments.

The quiet zone wants to be both sparse (structurally) and dense (emotionally). I made it sparse. But Yegge's reflection in section 7 is the most emotionally concentrated writing in the piece. Sparse CSS on dense emotion creates a mismatch I couldn't resolve."

**Length:** 3-5 sentences.

---

### Reflection Protocol Rules

1. **Written BEFORE audit.** The reflection captures creative state at completion, not post-audit rationalization. If the PA reveals issues, those are SEPARATE findings — the reflection is the builder's honest account of their creative experience.

2. **Written BY the builder, not BY auditors.** The Weaver's artistic impressions are valuable but they are an OBSERVER's account. The reflection is the CREATOR's account. Both travel to the next window; they are not redundant.

3. **Written as DIRECTION, not as FINDINGS.** Each dimension points the next builder toward creative opportunity, not toward compliance. "The quiet zone wants to feel like a clearing" is direction. "The quiet zone has insufficient mechanism density" is a finding.

4. **Total length: 20-35 sentences across all 6 dimensions.** This is a creative handoff, not a report. If the reflection exceeds 40 sentences, the builder is analyzing instead of reflecting.

5. **The reflection travels WITH the artifact.** When the next builder receives files, they receive: the HTML artifact, the conviction brief, AND the reflection. The reflection is first-party creative context that no audit can replace.

### How the Reflection Connects Windows

**Current pipeline (without reflection):**
Window 1 builder creates → PA audits → Weaver produces diagnostic + artistic impression → Window 2 IMPROVE builder receives artifact + artistic impression (a third-party account of what the page FEELS like)

**Updated pipeline (with reflection):**
Window 1 builder creates → builder writes reflection → PA audits → Weaver produces diagnostic + artistic impression → Window 2 IMPROVE builder receives artifact + reflection (first-party) + artistic impression (third-party)

The IMPROVE builder now has:
- What the original builder was TRYING to achieve (conviction)
- What creative paths are AVAILABLE (alternatives + impulses)
- What emergent possibilities EXIST (surprises)
- What the page FEELS like from the creator's perspective (experience)
- Where genuine aesthetic TENSIONS remain (unresolved)

This is radically richer than "artistic impression from auditors." The auditors see the surface; the builder knows the intent.

---

## Design 3: Exploration Recommendation

### Philosophy

The TC skill currently prohibits exploration access during Phases 0-3 (anti-gravity R1). After metaphor commitment (Phase 3.5), the builder may consult the mechanism catalog and optionally 2-3 case studies for divergence verification.

The question: when the builder gets context window space for explorations, WHICH explorations most productively serve THIS content?

The answer is NOT "best explorations" (compliance judgment — which scored highest?) but "most generative for this content" (creative judgment — which explorations most productively FIGHT with this content's needs?).

### The Generative Opposition Principle for Exploration Selection

The Opposition Principle already governs axis selection (Phase 1): axes that OPPOSE the system's personality produce the richest tension. Apply the same principle to exploration selection: explorations whose compositional strategies most productively FIGHT with this content's needs produce the richest creative learning.

**Anti-pattern:** "This content has geological structure, so load the geological exploration (OD-004)." This is pattern-matching, not generative opposition.

**Pattern:** "This content has geological structure. Load explorations that solve geological structure DIFFERENTLY (fractal instead of linear descent, bento instead of stacked layers) and explorations that solve NON-geological structure in ways that challenge geological assumptions."

### The Selection Algorithm

The TC skill produces 3 outputs that inform exploration selection:

1. **The committed metaphor** (from Phase 3.5) — identifies the metaphor FAMILY
2. **The opposition map** (from Phase 2/3) — identifies the content's dominant tensions
3. **The zone architecture** (from Phase 3.5Z) — identifies the content's structural shape

**Step 1: EXCLUDE the matching exploration.**
If the metaphor is geological, EXCLUDE the geological exploration (OD-004). The builder already has the metaphor — loading the matching exploration encourages copying, not creating.

**Step 2: Select by GENERATIVE OPPOSITION (2-3 explorations).**
For each of the content's top 3 tensions, ask: "Which exploration solved a SIMILAR tension with a RADICALLY DIFFERENT approach?"

| Content Tension | Similar Tension In... | Different Approach |
|----------------|----------------------|-------------------|
| Depth/descent | OD-004 (geological) | DD-006 (fractal) — same depth, but self-similar rather than linear |
| Conversational/formal | OD-001 (conversational) | CD-005 (multi-axis transition) — same register shift, but structural rather than tonal |
| Eruption/disruption | (none directly) | DD-003 (islands) — isolation as the inverse of eruption |

The explorations that FIGHT with the content's approach teach the builder what ELSE is possible without directing them to copy.

**Step 3: Select by STRUCTURAL COMPLEMENT (1-2 explorations).**
Look at the zone architecture's structural shape and load explorations with COMPLEMENTARY shapes:

| Content Structure | Complement | Why |
|------------------|------------|-----|
| Linear descent (stacked zones) | Bento/grid (DD-003, CD-006) | Shows how non-linear structures handle depth |
| Hub-spoke | Linear descent (OD-004) | Shows how sequential structures handle centrality |
| Parallel columns | Spiral/choreography (AD explorations) | Shows how non-parallel structures handle comparison |

**Step 4: Budget check.**
Total context budget for explorations: ~15,000-20,000 lines (leaving room for research files, conviction brief, content, and creative task). Select 3-4 explorations maximum.

Preference order:
1. 2 Generative Opposition explorations (the most creatively productive)
2. 1 Structural Complement exploration (the most structurally informative)
3. 1 Wild Card (an exploration from a DIFFERENT dimension entirely — if content is density-focused, load an axis exploration)

### The Recommendation Format

The TC skill outputs the exploration recommendation as part of the conviction brief (appended after Section 6, or delivered as a separate file for the orchestrator).

```
EXPLORATION LOADING (for builder context window):

LOAD: DD-006 (Fractal) — 2,847 lines
  WHY: Your metaphor is linear descent. Fractal shows how self-similarity
  achieves depth without linearity. The fractal's recursive rhythm will
  challenge your vertical stacking — can your descent have internal echoes?

LOAD: CD-005 (Multi-Axis Transition) — 1,920 lines
  WHY: Your content shifts register (conversational → technical → provocative).
  CD-005 solved register shifts through structural transitions. The bridge
  component vocabulary may help where your content changes voice.

LOAD: DD-003 (Islands) — 1,580 lines
  WHY: Structural complement. Your architecture is connected (zones flow
  into each other). Islands shows how isolation creates emphasis. The
  eruption moment (section 4) might benefit from island-style isolation
  rather than inline disruption.

SKIP: OD-004 (Confidence/Geological) — your metaphor is geological. Loading
  OD-004 risks pattern-matching. You already have the geological vocabulary
  from the TC pipeline's metaphor derivation.

Total exploration load: ~6,347 lines (~13% of context window)
```

### What This Avoids

1. **"Crown jewel" trap:** CD-006 is the highest-scoring exploration (39/40) but loading it for every build encourages convergence toward one compositional strategy. The recommendation is content-specific, not quality-ranked.

2. **Exploration overload:** Loading all 24 explorations (~41,000 lines) fills 80%+ of context. The recommendation loads 3-4 (~6,000-8,000 lines), leaving 75%+ of context for creative work.

3. **Pattern-matching:** Excluding the matching exploration and selecting by OPPOSITION rather than SIMILARITY actively fights the tendency to copy.

4. **Density-pattern matching:** The recommendation does NOT match density patterns (PULSE, CRESCENDO, etc.) to content — this would pre-determine the compositional approach. Instead, it selects explorations whose approaches CHALLENGE the content's natural density pattern.

### Integration with Anti-Gravity Rules

The exploration recommendation STRENGTHENS anti-gravity:
- R1 (Phase-gated access) is unchanged — explorations are still prohibited during Phases 0-3
- R6 (Divergence mandate) is strengthened — the excluded matching exploration means the builder's first instinct can't be reinforced by the most similar case study
- The OPPOSITION selection principle means loaded explorations actively push against pattern-matching

---

## Summary: How the Three Designs Work Together

1. **The Conviction Brief** (Design 1) establishes creative direction through world-description, calibration, opposition, arc, and invitation — the builder reads this FIRST and wants to create.

2. **The Exploration Recommendation** (Design 3) loads the builder's context window with generatively opposing case studies — the builder has creative material that CHALLENGES their metaphor rather than confirming it.

3. **The Reflection Protocol** (Design 2) captures the builder's creative state at completion — the next builder receives first-party creative tissue alongside the artifact and third-party audit impressions.

The flow: **Conviction → Creation (with opposing explorations) → Reflection → [Audit] → Next Window receives Artifact + Reflection + Audit**

Each design embodies the generative frame: inhabitation (conviction brief makes you inhabit the world), creation (opposing explorations challenge your compositional instincts), reflection (the 6 dimensions capture creative state, not compliance state).

---

**END OF DESIGN SPEC**

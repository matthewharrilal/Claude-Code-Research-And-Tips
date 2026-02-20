# 06 -- Orchestrator Routing Deep Dive

**Agent:** orchestrator-enrichment-analyst (Opus)
**Task:** #6 -- Deep dive on orchestrator routing of compositional intelligence
**Files Analyzed:**
- `~/.claude/skills/build-page/SKILL.md` (408 lines)
- `design-system/pipeline/conventions-brief.md` (403 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (first 100 lines)
- `design-system/compositional-core/identity/prohibitions.md` (first 50 lines)
- `design-system/compositional-core/vocabulary/tokens.css` (first 50 lines)

---

## 1. BUILDER SPAWN PROMPT ANALYSIS

### What the Builder Receives (Lines 43-83 of SKILL.md)

The builder spawn prompt tells the builder to read 6 files IN THIS ORDER:

| Priority | File | Role | Compositional Intelligence? |
|----------|------|------|----------------------------|
| 1 (PRIMARY) | conventions-brief.md | World-description, process guidance | **YES -- this IS the compositional intelligence stack** |
| 2 (MATERIAL) | content file | The actual content to build | N/A |
| 3 (REF) | mechanism-catalog.md | Mechanism CSS patterns | YES -- vocabulary layer |
| 4 (REF) | components.css | Component library | Partial -- structural, not compositional |
| 5 (REF) | tokens.css | CSS variable values | Partial -- atoms, not grammar |
| 6 (REF, READ LAST) | prohibitions.md | Soul constraints | YES -- identity layer (constraint) |

**Key Observation: The orchestrator DOES invoke compositional intelligence.** The conventions-brief.md IS the compositional intelligence document -- it contains multi-coherence theory (Section 4), fractal echo (Section 5), unified metaphor (Section 6), transition grammar (Section 7), perception physics (Section 2), richness formula (Section 3), and the conviction card. This is the most compositionally intelligent routing in the entire pipeline.

**BUT: The routing is FILE-BASED, not CONCEPT-BASED.** The spawn prompt says "Read these files IN THIS ORDER" and then says "YOUR PROCESS (from conventions brief)." It tells the builder WHICH files but not WHICH concepts to internalize from those files. The framing is:

```
Read these files IN THIS ORDER (order matters -- primacy establishes world model,
recency keeps soul constraints fresh)
```

This is good primacy/recency engineering. But the builder receives 403 lines of conventions-brief as an undifferentiated world-description. There is no signal about which of the 14 sections are HIGHEST PRIORITY for compositional quality.

### What the Builder Does NOT Receive

1. **No explicit compositional intelligence stack progression.** The builder is never told: "scales -> channels -> multi-coherence -> anti-scale." The conventions brief covers these concepts but in a different order (Identity -> Perception -> Richness -> Multi-coherence -> Fractal Echo -> Metaphor -> Transitions -> CSS Vocabulary -> Creative Authority -> Quality Floor -> Compositional Memory -> Five Questions -> Restraint List -> Accessibility -> Responsive -> Conviction Card -> Process).

2. **No per-concept priority weighting.** Multi-coherence (Section 4) and Fractal Echo (Section 5) are the two concepts most correlated with PA-05 score, but they receive the same visual weight as CSS Vocabulary (Section 8) or Accessibility (Section 13).

3. **No compositional intelligence cheat sheet.** The builder gets no condensed reference for mid-build consultation. During a 1000+ line CSS build, scrolling back to the conventions brief is impractical. The brief says "When you are deep in CSS at Section 9 and have forgotten why you chose this structure, scroll back to your conviction statement" -- but the conviction statement is 10 lines, not the full compositional intelligence stack.

4. **No explicit connection between mechanism-catalog.md and the compositional intelligence concepts.** The builder reads the catalog as "reference file 3" but there is no framing that connects mechanisms to multi-coherence channels, fractal echo scales, or transition grammar types.

---

## 2. BUILDER CREATIVE AUTHORITY ANALYSIS

### COMPOSE vs COMPLY Ratio

The spawn prompt contains these directives:

**COMPOSE signals (telescope):**
- "Follow its process phases (Understand, Plan, Build, Verify). It is a world-description, not a checklist." (Line 49)
- "YOUR CREATIVE AUTHORITY: You may override ANY non-soul value if you log the override with compositional reasoning." (Line 68)
- "CONTENT-FORM COUPLING: Each section's visual density, component selection, and spacing must respond to what the content in that section IS ABOUT." (Line 70-71)
- "Phase A: Read content. Identify zones, tensions, metaphor." (Line 59)
- "Phase B: Plan. Write conviction statement, transition table, and fractal echo table in build log BEFORE any CSS." (Line 60)

**COMPLY signals (checklist):**
- "Phase C: Build. HTML + CSS. Self-check at 4 checkpoints:" (Lines 61-66)
  - "After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?"
  - "After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?"
  - "After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?"
  - "After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?"
- "Phase D: Self-verify. Complete cascade value table. Run 5-question self-check. Final scroll." (Line 66)
- "Write 3 files to [output-directory]:" (Lines 72-76)

**RATIO: Approximately 60:40 COMPOSE:COMPLY.**

This is GOOD. The critical finding from the flagship retrospective was that the builder got a 71-line CHECKLIST (all constraints, "Verify/Fail if/Must be" verbs) while the middle builder got a 100-line RECIPE (sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs). The current spawn prompt leans COMPOSE with COMPLY checkpoints -- closer to the successful recipe pattern.

**However:** The 4 self-check checkpoints (lines 61-66) are threshold-style checks, not compositional checks. They verify PERCEPTION PHYSICS compliance (>= 15 RGB, >= 3 ARIA) but not COMPOSITIONAL QUALITY (is multi-coherence directionally consistent? does the fractal echo table align with the conviction statement?). The builder has compositional theory in the conventions brief but only compliance checkpoints in the spawn prompt.

**Missing:** A COMPOSITIONAL checkpoint. Example: "After zone boundaries are set: Are >= 3 channels shifting in the same semantic direction at every boundary? If not, fix before proceeding."

---

## 3. GATE ROUTING ANALYSIS

### How Gate Results Reach the Builder in Fix Cycles (Lines 299-329)

The fix instruction file (Section 6.1) is structured as:

```markdown
### Gate Failures (structured, with specific CSS)
[Paste _gate-results.json entries that FAILED, each with measured_value,
threshold, delta_from_threshold, and CSS fix]

### PA Top-5 Issues (directional, not prescriptive)
1. [WOULD-NOT-SHIP] PA-XX: "[auditor exact words]"
   - WHERE: [scroll position / element]
   - DIRECTION: [what to change -- not what CSS to write]
```

**Critical Distinction:** Gate failures are routed with SPECIFIC CSS fixes. PA issues are routed with DIRECTIONAL guidance ("what to change, not what CSS to write").

**Compositional Intelligence in Fix Routing:**

- **Gate failures:** Routed with measured values, thresholds, and CSS fixes. This is COMPLIANCE routing -- it tells the builder the number is wrong and how to fix it. There is NO compositional context. Example: "SC-09 FAIL: zone 2->3 bg delta = 8 RGB (threshold: 15). Fix: change zone 3 bg from #FEF5F0 to #F0EBE3." This tells the builder WHAT to change but not HOW it fits into the compositional arc. The builder might fix the delta but break multi-coherence directionality in the process.

- **PA issues:** Routed with auditor exact words and directional guidance. This is BETTER because it uses perceptual language ("what to change, not what CSS to write"). But the DIRECTION field is generic -- it says what to change without connecting to the compositional intelligence stack. Example: "DIRECTION: increase visual distinction between sections" rather than "DIRECTION: this boundary needs DEEPENING -- darken bg, tighten spacing, thicken border-left."

**What's Missing in Fix Routing:**

1. **No compositional context for gate fixes.** When SC-09 fails at a boundary, the fix instruction should include the boundary's coherence direction from the build log. "This boundary is DEEPENING. Fix the bg delta while maintaining DEEPENING direction (darker, not lighter)."

2. **No mechanism vocabulary in PA issue routing.** The weaver's TOP-5 issues use auditor language (perceptual) but the builder needs mechanism vocabulary (compositional). The translation gap between "I see flat monotone sections" and "deploy mechanism #5 (density variation via bento grid) in sections 4-6" is left to the builder.

3. **No lock sheet context in fix instructions.** The lock sheet (Section 4.5) categorizes elements as LOCKED (Soul), LOCKED (Research), or CHALLENGEABLE (Builder). But fix instructions (Section 6.1) have a "DO NOT TOUCH" section that is separate and less structured. The lock sheet should BE the "DO NOT TOUCH" section.

---

## 4. PA ROUTING ANALYSIS

### How Weaver Feedback Reaches the Builder

The weaver produces a synthesis with TOP-5 ISSUES (Section 5.3, lines 265-269):

```
3. TOP-5 ISSUES ranked by severity (WOULD-NOT-SHIP first).
   Each issue must include: auditor source, question ID, severity rating,
   exact auditor quote, scroll position, and actionable CSS-level feedback
   (what to change, not just what is wrong).
```

The weaver's TOP-5 issues then appear in fix instructions (Section 6.1) as:

```
### PA Top-5 Issues (directional, not prescriptive)
1. [WOULD-NOT-SHIP] PA-XX: "[auditor exact words]"
   - WHERE: [scroll position / element]
   - DIRECTION: [what to change -- not what CSS to write]
```

**Analysis:**

The weaver is told to provide "actionable CSS-level feedback (what to change, not just what is wrong)." But the fix instructions re-frame this as "directional, not prescriptive" and reduce it to WHERE + DIRECTION. This is a DELIBERATE de-specification -- the orchestrator wants the builder to maintain creative authority over CSS decisions.

**But the de-specification goes too far.** The builder needs compositional vocabulary to interpret directional feedback. "Increase visual distinction between sections" could mean:
- Increase bg delta (chromatic channel)
- Change layout topology (spatial channel)
- Add structural border (structural channel)
- Deploy a new component type (material channel)

The builder must choose, and the choice should be informed by multi-coherence theory. If the boundary already shifts chromatic and typographic but lacks structural, the DIRECTION should be "add structural channel (border-left 3px+) to complete multi-coherence."

**Are TOP-5 issues in compositional vocabulary?** NO. They are in PERCEPTUAL vocabulary (from auditors) translated through GENERIC vocabulary (by the weaver). The compositional vocabulary layer is missing. The weaver does not reference multi-coherence channels, fractal scales, or transition grammar types when describing issues. The weaver prompt (Section 5.3) asks for "actionable CSS-level feedback" but not "feedback using the compositional intelligence vocabulary from the conventions brief."

---

## 5. LOCK SHEET ANALYSIS

### Does the Lock Sheet Use Compositional Intelligence?

The lock sheet (Section 4.5) categorizes elements into three tiers:

```
- LOCKED (Soul): Elements constrained by identity prohibitions
- LOCKED (Research): Elements where gate measurements confirm research-backed thresholds
- CHALLENGEABLE (Builder): Elements that are builder creative choices -- layout topology,
  metaphor expression, component selection, density arc
```

**Analysis:**

This is a COMPLIANCE-BASED categorization, not a COMPOSITIONAL one. It answers "what can change?" but not "what SHOULD change and in what compositional direction?"

The CHALLENGEABLE category lists "layout topology, metaphor expression, component selection, density arc" -- these are compositional concepts. But the lock sheet doesn't say HOW they are compositional. It doesn't connect them to the multi-coherence stack:

- Layout topology -> Spatial + Typographic + Structural channels (3 free channel shifts per topology change)
- Metaphor expression -> Drives coherence direction at every boundary
- Component selection -> Material channel + Component-level fractal echo
- Density arc -> Page-scale fractal echo

**What the lock sheet SHOULD include:**

A fourth dimension: COMPOSITIONAL CONTEXT. For each CHALLENGEABLE element, note which multi-coherence channels it affects and which fractal scale it operates at. This transforms the lock sheet from a permission document into a compositional navigation tool.

Example enrichment:
```
CHALLENGEABLE (Builder):
- Section 3 layout: Currently single-column (Spatial channel: neutral).
  Changing to 2-col grid shifts Spatial + Typographic + Structural = 3 channels.
  Affects Section scale and Component scale.
- Section 5 bg: Currently #F0EBE3 (Chromatic channel: neutral after S4).
  Delta from S4 = 12 RGB (BELOW perception threshold).
  Must increase to >= 15 RGB to activate Chromatic channel at boundary.
```

---

## 6. MISSING ROUTING: COMPOSITIONAL INTELLIGENCE CHEAT SHEET

### Should the Builder Receive a Stack Progression?

**YES.** The conventions brief is a 403-line world-description that the builder reads ONCE at the start. During a 1000+ line CSS build, the builder's working memory of the compositional intelligence stack fades. The conviction statement (10 lines) anchors metaphor and direction but not the full compositional intelligence stack.

**What the builder needs mid-build:**

A 30-line condensed reference card that fits in working memory:

```
COMPOSITIONAL INTELLIGENCE REFERENCE (consult at each boundary)

MULTI-COHERENCE (binding rule):
  6 channels: Chromatic | Typographic | Spatial | Structural | Behavioral | Material
  At each boundary: >= 3 shift together, same direction
  Directions: DEEPENING | OPENING | FOCUSING | RESOLVING
  Layout change = free 3-channel shift (Typo + Spatial + Structural)

FRACTAL ECHO (pattern at every scale):
  Build order: Navigation -> Page -> Section -> Component -> Character
  Verify each before proceeding to next
  Character WITHOUT perceptible Page = orphaned variation

PERCEPTION THRESHOLDS (visibility physics):
  Background delta: >= 15 RGB (at least one channel)
  Font-size delta: >= 2px between zones
  Letter-spacing: >= 0.025em or 0 (nothing between)
  Stacked gap: <= 120px total at boundaries

TRANSITION TYPES (at each boundary):
  SMOOTH: 15-25 RGB, 1px rule, minimal shift
  BRIDGE: 25+ RGB, breathing band, typography shift
  BREATHING: 3-4px border, generous spacing (max 2 per page)

RESTRAINT (anti-density):
  >= 3 mechanisms deliberately ABSENT (logged)
  No component > 35% of instances
  Drop caps in at most 2 sections
```

This reference card should be:
1. Written by the orchestrator into the output directory as `_compositional-reference.md`
2. Mentioned in the builder spawn prompt: "Consult `_compositional-reference.md` at each zone boundary"
3. Derived from the conventions brief, not duplicated (it IS a compressed version)

### Should the Builder Know About the Stack Progression?

**YES, but implicitly.** The builder should not be told "scales -> channels -> multi-coherence -> anti-scale" as abstract theory. The builder should be told to BUILD in that progression:

1. Set Page scale first (zone backgrounds, >= 15 RGB delta) -- SCALES
2. At each boundary, set all shifting channels together -- CHANNELS
3. Verify >= 3 channels shift in same direction at each boundary -- MULTI-COHERENCE
4. Verify restraint (>= 3 absent mechanisms, no over-deployment) -- ANTI-SCALE

This is already partially present in the conventions brief's "Process" section (lines 380-394) but the framing is "Understand -> Plan -> Build -> Verify" rather than the compositional intelligence progression. The build sub-steps (HTML skeleton -> zone backgrounds -> borders -> typography) are CHANNEL-BY-CHANNEL, which contradicts the key finding that BOUNDARY-BY-BOUNDARY building produces multi-coherence.

**CRITICAL: The conventions brief already says this correctly in Section 11 ("Process"):**
```
Build. HTML skeleton first [...] Then CSS, working BOUNDARY BY BOUNDARY
rather than channel by channel. At each zone boundary, set all shifting
channels together: background + typography + spacing + borders.
```

But the BUILDER SPAWN PROMPT overrides this with 4 checkpoint pauses that are CHANNEL-GROUPED:
```
Self-check at 4 checkpoints:
1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
2. After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?
3. After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?
4. After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?
```

**This is a CONTRADICTION.** The conventions brief says "boundary by boundary." The spawn prompt checkpoints say "after zone backgrounds" then "after borders" then "after typography" -- which implies channel-by-channel construction. The checkpoints should be reorganized:

```
Self-check at 3 checkpoints:
1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
2. After zone boundaries are set (all channels together per boundary):
   - All adjacent zone bg deltas >= 15 RGB?
   - >= 1 structural border-left (3px+) present?
   - >= 3 channels shift in same direction at each boundary?
3. After full build: heading-to-meta ratio >= 3:1? Font-size delta >= 2px between zones?
   Run 5-question self-check.
```

---

## 7. ABSORPTION VERIFICATION ANALYSIS

### Current Mechanism: Brief Reflection in _build-log.md

The spawn prompt requires (lines 77-82):

```
BRIEF REFLECTION (mandatory in _build-log.md):
After your build is complete, add a BRIEF REFLECTION section containing:
(a) Which conventions-brief sections most influenced your decisions and how
(b) Which mechanisms you selected and from which catalog categories
(c) The unifying metaphor you chose and why it is structural (CSS properties it suggests)
```

**Analysis:**

This is POST-BUILD absorption verification. It checks whether the builder CAN ARTICULATE what they absorbed, but only AFTER the build is complete. The problem: if the builder did not absorb multi-coherence theory, the output already has flat boundaries, and the reflection is a post-hoc rationalization of what was built, not a genuine check of what was understood.

**What Would Better Absorption Verification Look Like?**

Three layers:

### Layer 1: Pre-Build Absorption Gate (NEW)

After the builder reads the conventions brief and before writing any CSS, require a COMPREHENSION PROOF in the build log:

```
COMPREHENSION PROOF (before first line of CSS):

Multi-coherence test: Name the 6 channels and the 4 directions.
  [Builder fills in from memory, not copy-paste]

Fractal echo test: What are the 5 scales in build order?
  [Builder fills in]

Perception test: What is the minimum RGB delta for adjacent zone backgrounds?
  [Builder fills in: 15]

Transition test: Name the 3 transition types and their max usage.
  [Builder fills in: SMOOTH, BRIDGE, BREATHING (max 2)]
```

This takes 2 minutes and catches absorption failures before they become 1000-line CSS problems. If the builder cannot answer, the orchestrator can re-issue the conventions brief with emphasis markers.

**Risk:** This could become a rote exercise. Builders might memorize answers without internalizing concepts. MITIGATION: Vary the questions per build. The orchestrator generates 4 questions from a bank of 12, different each run.

### Layer 2: Mid-Build Absorption Check (ENHANCED)

The conventions brief's "Midpoint reflection" (Section 10) already asks:

```
When you reach roughly the halfway point of your build, render the page
and scroll through it. Ask yourself: what feels designed? What feels flat?
What is the single weakest section?
```

ENHANCEMENT: Add compositional intelligence questions to the midpoint:

```
MIDPOINT CHECK (at ~50% of CSS):
1. What feels designed? What feels flat? (existing)
2. How many boundaries have >= 3 channels shifting? (multi-coherence)
3. Which fractal scales are strong? Which are missing? (fractal echo)
4. Is the weakest section weak because of missing channels or missing density? (diagnosis)
```

This turns the midpoint from a perceptual pause into a compositional diagnostic.

### Layer 3: Post-Build Reflection (ENHANCED)

Keep the current BRIEF REFLECTION but add one question:

```
(d) Which multi-coherence directions did you use at each boundary, and where
    did you deviate from your planned directions? (compositional self-audit)
```

This forces the builder to compare actual boundary treatment against the transition plan from Phase B. Deviations are not failures -- they are expected as the build evolves -- but UNCONSCIOUS deviations (where the builder cannot explain why) are compositional drift.

---

## 8. WHAT WOULD ENRICHMENT LOOK LIKE?

### Specific Edits to SKILL.md

#### Edit 1: Add Compositional Reference Card Generation (After Section 2, Before Wave 1)

Insert a new step between team creation and builder spawn:

```markdown
## 2.5 COMPOSITIONAL REFERENCE CARD

Before spawning the builder, write a 30-line condensed reference card to
`[output-dir]/_compositional-reference.md` containing:

- Multi-coherence: 6 channels, 4 directions, boundary minimum (3), target (5+)
- Fractal echo: 5 scales, build order, dependency rule
- Perception thresholds: bg delta (15 RGB), font-size delta (2px), letter-spacing (0.025em), stacked gap (120px)
- Transition types: SMOOTH (15-25 RGB), BRIDGE (25+ RGB), BREATHING (3-4px border, max 2)
- Restraint: >= 3 absent mechanisms, no component > 35%, drop caps max 2

This card is a compressed version of the conventions brief for mid-build consultation.
```

#### Edit 2: Restructure Builder Self-Check Checkpoints (Lines 61-66)

Replace the channel-grouped checkpoints with boundary-grouped checkpoints:

**Current (channel-by-channel):**
```
Self-check at 4 checkpoints:
1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
2. After zone backgrounds: All adjacent zone bg deltas >= 15 RGB?
3. After borders: >= 1 structural border-left (3px+)? >= 2 distinct border weights?
4. After typography: heading-to-meta ratio >= 3:1? Adjacent zone font-size delta >= 2px?
```

**Proposed (boundary-by-boundary):**
```
Self-check at 3 checkpoints:
1. After HTML skeleton: >= 3 ARIA landmarks? Skip link? >= 8 component classes?
2. After zone boundaries set (boundary-by-boundary, all channels together):
   - All adjacent zone bg deltas >= 15 RGB?
   - >= 1 structural border-left (3px+)? >= 2 distinct border weights?
   - >= 3 channels shift in same semantic direction at each boundary?
3. After full build: heading-to-meta ratio >= 3:1? Font-size delta >= 2px?
   Midpoint observation recorded? 5-question self-check complete?
```

#### Edit 3: Add Comprehension Proof to Builder Spawn Prompt (After line 60, before line 61)

Insert:

```
COMPREHENSION PROOF (write in build log BEFORE first line of CSS):
After reading the conventions brief, prove absorption by answering from memory:
(a) Name the 6 multi-coherence channels
(b) What is the minimum RGB delta between adjacent zones?
(c) Name the 3 transition types
(d) What is the fractal echo build order (5 scales)?
If you cannot answer, re-read the relevant conventions-brief section.
```

#### Edit 4: Add Compositional Context to Fix Instructions (Section 6.1)

After the Gate Failures section, add:

```markdown
### Compositional Context (from build log)
For each failed gate or PA issue, include:
- The boundary's planned coherence direction (from transition table)
- Which multi-coherence channels currently shift there
- Which channels are missing or contradicting
- The relevant fractal echo scale

Example: "SC-09 FAIL at Z2->Z3 boundary. Planned direction: DEEPENING.
Current channels: Typographic (font-size drops), Spatial (padding compresses).
Missing: Chromatic (bg delta only 8 RGB -- BELOW threshold). Fix bg while
maintaining DEEPENING direction (darken, do not lighten)."
```

#### Edit 5: Enrich Weaver Prompt with Compositional Vocabulary (Section 5.3)

In the weaver spawn prompt, add after "actionable CSS-level feedback":

```
When describing issues, use the compositional intelligence vocabulary:
- Name the multi-coherence channels affected (Chromatic, Typographic, Spatial, Structural, Behavioral, Material)
- Name the fractal scale affected (Navigation, Page, Section, Component, Character)
- Name the transition type at the boundary (SMOOTH, BRIDGE, BREATHING)
- If a boundary lacks coherence, specify which channels are missing
```

#### Edit 6: Add Compositional Context to Lock Sheet (Section 4.5)

Add a fourth category:

```
- COMPOSITIONAL CONTEXT: For each CHALLENGEABLE element, note:
  - Which multi-coherence channels it affects
  - Which fractal scale it operates at
  - Current channel shift count at its boundary
  This transforms the lock sheet from a permission document into a compositional navigation tool for the weaver.
```

#### Edit 7: Add Reference Card to Builder Spawn Prompt (After line 56)

Add:

```
7. [output-dir]/_compositional-reference.md -- YOUR MID-BUILD CHEAT SHEET.
   Consult at each zone boundary to verify multi-coherence and transitions.
```

---

## 9. SUMMARY: ORCHESTRATOR ROUTING SCORECARD

| Dimension | Current State | Score | Gap |
|-----------|--------------|-------|-----|
| **File selection** | Correct 6 files, correct primacy/recency order | 9/10 | Missing compositional reference card |
| **Compositional intelligence invocation** | Conventions brief IS the CI stack | 8/10 | No concept-level priority weighting |
| **Builder creative authority** | 60:40 COMPOSE:COMPLY -- good ratio | 8/10 | Checkpoints are compliance-only, no compositional check |
| **Build order framing** | CONTRADICTION: brief says boundary-by-boundary, spawn prompt implies channel-by-channel | 4/10 | Restructure checkpoints to match brief |
| **Gate fix routing** | Compliance routing with CSS fixes | 5/10 | No compositional context for fixes |
| **PA issue routing** | Perceptual -> generic translation | 5/10 | Missing compositional vocabulary layer |
| **Lock sheet** | Compliance-based categorization | 6/10 | Missing compositional context per element |
| **Absorption verification** | Post-build reflection only | 4/10 | No pre-build gate, no mid-build compositional check |
| **Mid-build reference** | Conviction statement only (10 lines) | 3/10 | Need 30-line compositional reference card |

**Overall orchestrator routing score: 5.8/10**

The orchestrator gets the BIG things right: correct file selection, correct primacy order, conventions brief as primary guidance, Opus builder model, same-builder fix cycles. But it loses compositional intelligence at every ROUTING BOUNDARY:

1. Builder reads CI but has no absorption verification
2. Builder builds with CI but has channel-grouped checkpoints that contradict boundary-by-boundary guidance
3. Gates detect failures but route them without compositional context
4. PA auditors find issues but describe them without compositional vocabulary
5. Weaver synthesizes but translates to generic vocabulary
6. Fix instructions reach the builder stripped of compositional context
7. Builder fixes in compliance mode, not compositional mode

**The pattern:** Compositional intelligence ENTERS the pipeline through the conventions brief but LEAKS OUT at every subsequent routing step. By the time fix instructions reach the builder in cycle 2, the compositional intelligence has been fully diluted to compliance language.

---

## 10. HIGHEST-LEVERAGE SINGLE EDIT

If only ONE edit were possible, it should be **Edit 2: Restructure Builder Self-Check Checkpoints**. This edit:

1. Resolves the channel-by-channel vs boundary-by-boundary CONTRADICTION
2. Adds the missing compositional checkpoint (>= 3 channels same direction)
3. Restructures the build flow to match conventions-brief guidance
4. Costs zero additional token budget (same number of checks, different grouping)
5. Addresses the single most common failure mode: flat boundaries caused by channel-isolated construction

The checkpoint restructuring turns the builder's verification pauses from compliance checks into compositional checks, which means the builder catches multi-coherence failures DURING construction rather than discovering them in PA audit.

# OD-003 Task-Based Structure -- Instrument / Gesture / Component Inventory

**Source file:** `design-system/validated-explorations/organizational/OD-003-task-based.html`
**Total lines:** 1163 (CSS lines 107-691, HTML lines 694-1163)
**Density pairing:** ISLANDS (primary) + BOOKENDS (secondary)

---

## INSTRUMENTS

---

### 1. Archipelago Map -- INSTRUMENT

**CSS class(es):** `.archipelago-map`, `.archipelago-tile`, `.archipelago-tile__number`, `.archipelago-tile__label`, `.archipelago-tile__duration`, `.archipelago-tile--beginner`, `.archipelago-tile--intermediate`, `.archipelago-tile--advanced`
**CSS lines:** 228-267
**HTML lines:** 708-739
**DOM structure:**
```html
<div class="archipelago-map" aria-label="Task archipelago overview">
  <div class="archipelago-tile archipelago-tile--beginner">
    <span class="archipelago-tile__number">1</span>
    <span class="archipelago-tile__label">Install</span>
    <span class="archipelago-tile__duration">~10 min</span>
  </div>
  <!-- ...6 tiles total... -->
</div>
```

**Reader function:** Shows the entire page structure before reading begins -- a miniature fractal echo of the 6 task islands below. The reader sees the full archipelago at a glance: how many tasks, their names, complexity levels (via border color), and estimated time. This is the page's table of contents rendered as a visual map.

**Detection reasoning:** This is an Instrument, not a Component. Remove it and the reader loses awareness of the page's full scope, task count, complexity distribution, and time investment BEFORE they start scrolling. It does not hold article content -- it holds navigational/orientational metadata about the content below. Similar in function to OD-004's Geological Column (calibration example #1) -- a miniature visual summary of the whole page.

**Multi-channel coordination:** Three visual channels encode metadata simultaneously: (1) border color encodes complexity level (green=beginner, red=intermediate, purple=advanced), (2) tile number encodes sequence, (3) duration text in JetBrains Mono encodes estimated time. The 6-column grid layout echoes the 6 islands below (fractal self-similarity).

**Pipeline implication:** "What if the reader could see the entire journey before starting?" This is a classic overview-first instrument. The pipeline would derive this from a question about pre-reading orientation in a task-based context.

**Derivation question:** "What if the page header contained a miniature map of every task island, showing complexity and duration at a glance?"

---

### 2. Exploration ID / Header Metadata -- INSTRUMENT

**CSS class(es):** `.exploration-id`, `.exploration-meta`, `.exploration-meta__value`
**CSS lines:** 204-281
**HTML lines:** 700, 741-746
**DOM structure:**
```html
<div class="exploration-id">Exploration OD-003 / Density: Islands + Bookends</div>
<!-- ... -->
<div class="exploration-meta">
  <span>Stage: <strong class="exploration-meta__value">3 -- Organization</strong></span>
  <span>DD Source: <strong class="exploration-meta__value">DD-003 (32/40)</strong></span>
  <span>Soul: <strong class="exploration-meta__value">5/5</strong></span>
  <span>Total: <strong class="exploration-meta__value">~95 min</strong></span>
</div>
```

**Reader function:** Tells the reader WHERE this document sits within the exploration system (OD-003, Stage 3), what density pattern it uses (Islands + Bookends), its provenance (DD-003), and global metrics (soul compliance, total time). This is pure meta-orientation -- the reader knows what kind of document they are reading before they read a word of content.

**Detection reasoning:** Instrument. Removing it would strip the reader of knowledge about the document's identity, lineage, and compliance status. It holds no article content -- only metadata about the article itself. Comparable to a library catalog card for the page.

**Multi-channel coordination:** JetBrains Mono monospace at 10px uppercase with 0.08em letter-spacing signals "system metadata" register. The primary red color on values (`.exploration-meta__value`) creates visual pop against the gray secondary text, directing the eye to the data points.

**Pipeline implication:** "How does the reader know what kind of document this is and where it fits?" Meta-identification instrument.

**Derivation question:** "What if the page announced its own identity, provenance, and system position before any content?"

---

### 3. Bookend Front (Orientation Zone) -- INSTRUMENT

**CSS class(es):** `.bookend-front`, `.bookend-front__label`, `.bookend-front__title`, `.bookend-front__description`, `.task-overview`, `.task-overview__item`, `.task-overview__marker`, `.task-overview__text`, `.bookend-meta`, `.bookend-meta__item`, `.bookend-meta__label`, `.bookend-meta__value`
**CSS lines:** 293-350
**HTML lines:** 753-793
**DOM structure:**
```html
<section class="bookend-front reveal" aria-labelledby="orientation-title">
  <div class="bookend-front__label">You Are Here</div>
  <h2 class="bookend-front__title" id="orientation-title">Setting Up a CI/CD Pipeline</h2>
  <p class="bookend-front__description">This guide walks you through...</p>
  <div class="task-overview">
    <div class="task-overview__item">
      <div class="task-overview__marker" style="background: var(--accent-green)"></div>
      <div class="task-overview__text"><strong>1. Install Prerequisites</strong><span>Node.js, Docker...</span></div>
    </div>
    <!-- ...6 items... -->
  </div>
  <div class="bookend-meta">
    <div class="bookend-meta__item"><span class="bookend-meta__label">Total Time</span><span class="bookend-meta__value">~95 minutes</span></div>
    <div class="bookend-meta__item"><span class="bookend-meta__label">Prerequisites</span><span class="bookend-meta__value">macOS / Linux, Terminal, GitHub account</span></div>
    <div class="bookend-meta__item"><span class="bookend-meta__label">Difficulty</span><span class="bookend-meta__value">Beginner -> Advanced</span></div>
  </div>
</section>
```

**Reader function:** Dense orientation zone that answers "You Are Here" before any task content begins. It tells the reader: what they will build (CI/CD pipeline), how long it will take (~95 min), what the prerequisites are, what each task covers, and what complexity progression looks like. The "You Are Here" label is an explicit wayfinding declaration.

**Detection reasoning:** This is an Instrument because its primary function is ORIENTATION, not content delivery. Remove the bookend-front and the reader enters the task islands without knowing total scope, time commitment, prerequisites, or difficulty range. The task-overview grid with colored markers is a second-level map (text-based, complementing the visual archipelago map above). The bookend-meta bar is pure metadata display. However, it sits on the boundary -- the title and description carry light content. The dominant function is still orientation/awareness, making it an Instrument.

**Multi-channel coordination:** Multiple channels encode orientation: (1) red 4px left border signals "dense zone / structural bookend", (2) white background against cream page signals elevated surface, (3) colored square markers in the task-overview encode complexity (same green/red/purple system as the archipelago map), (4) monospace meta labels at 9px signal "system data" register, (5) the 3px top border on bookend-meta creates a visual separation between content preview and metadata.

**Pipeline implication:** "What orientation does the reader need before entering a sequence of self-contained tasks?" The BOOKENDS density pattern requires a dense front zone -- this is its implementation.

**Derivation question:** "What if the reader received a complete briefing -- scope, time, prerequisites, difficulty -- before encountering the first task?"

---

### 4. Task Island Summary Header (per island) -- INSTRUMENT

**CSS class(es):** `.task-island > summary`, `.task-island__number`, `.task-island__label`, `.task-island__title-block`, `.task-island__title`, `.task-island__meta`, `.task-duration`, `.task-complexity`
**CSS lines:** 376-420
**HTML lines:** 801-808 (island 1), 843-850 (island 2), 901-909 (island 3), 955-963 (island 4), 1018-1026 (island 5), 1065-1073 (island 6)
**DOM structure:**
```html
<summary>
  <div class="task-island__number">1</div>
  <div class="task-island__title-block">
    <div class="task-island__label">Task Island 1 of 6</div>
    <h2 class="task-island__title" id="task-1-title">Install Prerequisites</h2>
    <div class="task-island__meta">
      <span class="task-duration">~10 min</span>
      <span class="task-complexity task-complexity--beginner">Beginner</span>
    </div>
  </div>
  <div class="task-island__toggle" aria-hidden="true"></div>
</summary>
```

**Reader function:** When an island is collapsed, the summary header IS the island. It tells the reader: which task number, the task title, position within the sequence ("Task Island 3 of 6"), estimated duration, and complexity level. This is wayfinding at the section level -- the reader knows where they are in the archipelago without expanding the island.

**Detection reasoning:** Instrument. The "Task Island X of 6" label is pure positional wayfinding. The duration badge and complexity badge are metadata about the task, not task content. The numbered square is a sequence marker. The toggle (+/-) is a UI affordance for progressive disclosure. Together these elements answer "where am I, how long will this take, and how hard is it?" -- all orientation questions. The h2 title straddles the line between instrument and content, but in context it serves the collapsed-state wayfinding role.

**Multi-channel coordination:** (1) Large 48px square number in monospace with colored border encodes sequence + complexity, (2) monospace "Task Island X of 6" label encodes position, (3) duration badge with 3px border in monospace encodes time, (4) complexity badge with colored 1px border encodes difficulty, (5) toggle square (+/-) encodes expand/collapse state. Five simultaneous metadata channels.

**Pipeline implication:** "What does the reader need to see when a task is collapsed?" Everything needed to decide whether to expand.

**Derivation question:** "What if each collapsed task island displayed enough metadata -- number, title, duration, complexity, position -- for the reader to decide whether to expand it?"

---

### 5. Checkpoint Callouts -- INSTRUMENT

**CSS class(es):** `.callout.callout--checkpoint`, `.callout__label`, `.callout__body`
**CSS lines:** 438-453, 463
**HTML lines:** 833 (island 1), 890 (island 2), 944 (island 3), 1003 (island 4), 1057 (island 5), 1098 (island 6)
**DOM structure:**
```html
<div class="callout callout--checkpoint">
  <div class="callout__label">Checkpoint</div>
  <div class="callout__body">
    <p><strong>You should see</strong> all three tools respond with version numbers...</p>
  </div>
</div>
```

**Reader function:** Tells the reader "you have reached the end of this task -- here is how to verify you succeeded." Each checkpoint defines what success looks like before moving to the next island. It is a wayfinding marker (you are at task completion) and a self-assessment instrument (did you succeed?).

**Detection reasoning:** Instrument. The checkpoint does not teach anything new -- it tells the reader WHERE they are (end of task) and gives them a way to verify their progress. The green left border (accent-green) signals success/completion semantically. Remove the checkpoints and the reader loses awareness of whether they completed each task correctly. Comparable to OD-004's Stratum Boundary with Progress (calibration example #6) -- a transition marker with verification.

**Multi-channel coordination:** (1) Green 4px left border encodes "completion/verification" semantics, (2) monospace uppercase "CHECKPOINT" label signals system-level messaging, (3) bold "You should see" phrase creates a predictable verification protocol across all 6 islands, (4) code formatting within the body specifies exact commands to verify.

**Pipeline implication:** "How does the reader know they completed a task correctly before moving on?" Self-assessment instrument at every task boundary.

**Derivation question:** "What if every task island ended with an explicit verification checkpoint that told the reader exactly what success looks like?"

---

### 6. Section Labels -- INSTRUMENT

**CSS class(es):** `.section-label`
**CSS lines:** 619-624
**HTML lines:** 796, 1104
**DOM structure:**
```html
<p class="section-label">Task Islands</p>
<!-- ... later ... -->
<p class="section-label">Verification</p>
```

**Reader function:** Minimal text labels centered in the sparse sea that announce macro-sections of the page. "Task Islands" appears before the first island; "Verification" appears before the bookend-back. These orient the reader to which structural zone they are entering.

**Detection reasoning:** Instrument. Pure wayfinding with zero content. Monospace, 10px, uppercase, centered, secondary color -- every typographic signal says "system label, not content." Remove these and the reader loses explicit awareness of the transition from orientation zone to task zone to verification zone.

**Multi-channel coordination:** (1) Monospace font signals system register, (2) 10px size + uppercase + 0.15em letter-spacing = maximum de-emphasis, signaling meta-level labeling, (3) center alignment distinguishes from left-aligned content, (4) positioning within sparse-sea whitespace creates visual isolation.

**Pipeline implication:** "How does the reader know they are transitioning between major page zones?" Minimal zone-transition labels.

**Derivation question:** "What if the sparse sea between page zones contained a single centered label naming the zone the reader is about to enter?"

---

### 7. Bookend Back Verification Checklist -- INSTRUMENT

**CSS class(es):** `.verification-list`, `.verification-list li`, `.verification-list__check`
**CSS lines:** 586-598
**HTML lines:** 1112-1119
**DOM structure:**
```html
<ul class="verification-list" aria-label="Pipeline verification checklist">
  <li>
    <span class="verification-list__check" aria-hidden="true">&check;</span>
    <span><strong>Task 1:</strong> Node.js, Docker, GitHub CLI respond with versions</span>
  </li>
  <!-- ...6 items... -->
</ul>
```

**Reader function:** End-of-page instrument that maps back to every task island, giving the reader a final cross-check of the entire archipelago. Each item references a specific task number and its verification criterion. This is the "Beat 1: Dense" of the 3-beat decompression in the bookend-back.

**Detection reasoning:** Instrument. This is not new content -- it is a retrospective map of work already completed. The green-bordered check squares are verification markers. Remove this and the reader loses the ability to verify their entire pipeline in one place. Comparable to a flight checklist -- pure verification instrument.

**Multi-channel coordination:** (1) Green 3px-bordered 18x18 square check marks encode "verified" state, (2) bold task numbers create cross-references back to individual islands, (3) 1px bottom borders between items create scannable rows, (4) the list structure mirrors the 6-island structure above (fractal echo).

**Pipeline implication:** "How does the reader verify the entire journey after completing all tasks?" Summary verification instrument.

**Derivation question:** "What if the back bookend contained a checklist that mapped one-to-one with every task island, creating a final verification sweep?"

---

### 8. Essence Reflection Block -- INSTRUMENT

**CSS class(es):** `.bookend-reflection`, `.bookend-reflection__title`, `.bookend-reflection__body`
**CSS lines:** 572-585
**HTML lines:** 1122-1127
**DOM structure:**
```html
<div class="bookend-reflection">
  <div class="bookend-reflection__title">Essence</div>
  <div class="bookend-reflection__body">
    A CI/CD pipeline is not a feature you add and forget...
  </div>
</div>
```

**Reader function:** Shifts the reader from procedural mode (doing) to reflective mode (understanding). This is the "Beat 2: Medium" of the 3-beat decompression. After the dense verification checklist, this creates a pause for synthesis. The Instrument Serif italic signals "wisdom register" -- stepping back from the task to see the meaning.

**Detection reasoning:** This sits on the Instrument/Gesture boundary. It IS content (a philosophical reflection), but its reader-experience function is primarily about shifting reading register -- from procedural verification to reflective synthesis. The purple left border, breathing-zone background, and Instrument Serif italic all signal a deliberate mode shift. I classify it as an Instrument because removing it would eliminate the decompression beat between verification and next-steps, losing the reader's sense of transition from "doing" to "understanding." Its primary purpose is cognitive wayfinding in the emotional dimension.

**Multi-channel coordination:** (1) Purple 4px left border distinguishes from all other callout colors (unique semantic zone), (2) breathing-zone background (`--color-zone-breathing: #FAF5ED`) is warmer than the dense zone background, (3) Instrument Serif italic signals wisdom/reflection register, (4) monospace uppercase "ESSENCE" label at 9px signals system-level annotation.

**Pipeline implication:** "What should the reader feel between completing all tasks and seeing what comes next?" Emotional decompression instrument.

**Derivation question:** "What if the back bookend included a reflective pause in wisdom-register typography between the verification checklist and the forward-looking next steps?"

---

### 9. What's Next Block -- INSTRUMENT

**CSS class(es):** `.whats-next`, `.whats-next__title`, `.whats-next__list`, `.whats-next__arrow`
**CSS lines:** 600-617
**HTML lines:** 1130-1139
**DOM structure:**
```html
<div class="whats-next">
  <h3 class="whats-next__title">What Comes After</h3>
  <ul class="whats-next__list">
    <li><span class="whats-next__arrow">&rarr;</span><span><strong>Branch protection rules:</strong> Require status checks...</span></li>
    <!-- ...5 items... -->
  </ul>
</div>
```

**Reader function:** Tells the reader where to go AFTER this page. This is the "Beat 3: Sparse" of the 3-beat decompression -- forward-looking orientation after the reflective pause. The reader knows the pipeline is not the end but part of a larger practice.

**Detection reasoning:** Instrument. This is not task content -- it is directional metadata pointing beyond the page. The red arrows and primary-colored monospace typography signal "navigation." Remove this and the reader ends abruptly after the reflection with no sense of continuation.

**Multi-channel coordination:** (1) Red primary-colored arrows signal "direction/navigation", (2) 3px border with red left border creates visual link to the bookend system, (3) Instrument Serif italic title maintains the reflective register from the essence block, (4) bold topic names + regular descriptions create scannable forward pointers.

**Pipeline implication:** "What does the reader need after completing all tasks?" Forward-orientation instrument.

**Derivation question:** "What if the final beat of the back bookend pointed the reader toward the next horizon -- topics beyond this guide?"

---

### 10. Pattern Summary Table -- INSTRUMENT

**CSS class(es):** `.pattern-summary`, `.pattern-summary__title`, `.pattern-summary table`
**CSS lines:** 646-667
**HTML lines:** 1143-1159
**DOM structure:**
```html
<div class="pattern-summary reveal">
  <div class="pattern-summary__title">Pattern Analysis -- OD-003</div>
  <table>
    <thead><tr><th>Dimension</th><th>Implementation</th><th>Evidence</th></tr></thead>
    <tbody>
      <tr><td>Organization</td><td>Task-Based (6 collapsible islands)</td><td>Self-contained...</td></tr>
      <!-- ...9 rows... -->
    </tbody>
  </table>
</div>
```

**Reader function:** Self-documenting pattern analysis that tells the reader (or a future auditor) exactly which density patterns, organizational structures, and soul compliance rules this page implements. This is meta-documentation -- the page explaining its own design.

**Detection reasoning:** Instrument. This is pure metadata ABOUT the page, not page content. It maps dimensions (Organization, Primary Density, DD-F-006 scales, Soul Compliance) to implementations and evidence. Removing it would not change the reader's understanding of CI/CD pipelines -- it would only remove their understanding of the page's design decisions. This is an instrument for the design system audience, not the content audience.

**Multi-channel coordination:** (1) Monospace 10px uppercase title signals "system analysis register", (2) subtle background (`--color-border-subtle`) and 3px border signal "appendix/meta" zone, (3) 13px font size (smaller than body) further de-emphasizes as metadata, (4) three-column table structure (Dimension/Implementation/Evidence) creates a formal audit format.

**Pipeline implication:** "How does the page document its own pattern decisions for future reference?" Self-documenting instrument.

**Derivation question:** "What if the page ended with a formal analysis table mapping every design dimension to its implementation and evidence?"

---

### 11. Sparse Sea Separators -- INSTRUMENT

**CSS class(es):** `.sparse-sea`, `.sparse-sea--large`
**CSS lines:** 355-356
**HTML lines:** 795, 797, 839, 898, 952, 1008, 1015, 1062, 1103, 1105
**DOM structure:**
```html
<div class="sparse-sea--large" role="separator" aria-hidden="true"></div>
<!-- or -->
<div class="sparse-sea" role="separator" aria-hidden="true"></div>
```

**Reader function:** Creates the "sea" between task islands. The whitespace itself IS the reading experience -- it tells the reader "you have left one island and are in open water before the next." Two sizes: standard (80px) and large (96px). The large variant appears at the major transitions (after bookend-front, before bookend-back).

**Detection reasoning:** Instrument. These are not decorative spacing -- they are structural separators with `role="separator"`. The whitespace encodes the ISLANDS density pattern at the page level. Remove the sparse seas and the islands lose their visual isolation; the page collapses from "archipelago" to "continuous scroll." The difference between 80px and 96px at major transitions is a subtle secondary signal of transition magnitude.

**Multi-channel coordination:** (1) Height alone (80px vs 96px) encodes transition magnitude, (2) `role="separator"` provides semantic meaning to assistive technology, (3) `aria-hidden="true"` indicates these are visual instruments only.

**Pipeline implication:** "How much space should separate self-contained task clusters to create the 'islands in a sparse sea' feeling?" The ISLANDS density pattern requires explicit whitespace instruments.

**Derivation question:** "What if the whitespace between tasks was not incidental padding but a deliberate structural instrument -- the 'sea' that makes each task an 'island'?"

---

## GESTURES

---

### 12. Complexity Color Gradient (Beginner -> Intermediate -> Advanced) -- GESTURE

**CSS class(es):** `.task-island--beginner`, `.task-island--intermediate`, `.task-island--advanced`, `.task-complexity--beginner`, `.task-complexity--intermediate`, `.task-complexity--advanced`, `.archipelago-tile--beginner`, `.archipelago-tile--intermediate`, `.archipelago-tile--advanced`
**CSS lines:** 265-267, 368-370, 392-394, 418-420
**HTML lines:** Distributed across all islands and archipelago tiles

**Reader function:** As the reader scrolls through the 6 task islands, the left border color shifts: green (islands 1-2) -> red (islands 3-4) -> purple (islands 5-6). This progressive color shift changes the reader's sense of difficulty and stakes. The same gradient appears in the archipelago map tiles, the task number squares, and the complexity badges -- three simultaneous channels encoding the same progression.

**Detection reasoning:** Gesture. This is not a single DOM element but a CSS-encoded shift across multiple elements that changes the reader's register. The color progression is a coordinated multi-property shift: border-left-color, task-number border-color, task-number text color, and complexity badge color all change together according to ONE rule: "complexity increases from beginner to advanced." This matches the calibration definition: "a coordinated multi-property shift (not just a style)." Comparable to OD-004's Typography Compression Gradient (calibration example #16) -- multiple channels varying according to a single rule.

**Multi-channel coordination:** At each complexity level, FOUR properties shift in lockstep: (1) island left-border color, (2) task-number square border + text color, (3) archipelago tile border color, (4) complexity badge border + text color. All encode the same green -> red -> purple gradient. This is the CRESCENDO compound pattern implemented through color.

**Pipeline implication:** "How does the reader sense increasing difficulty without being told?" Progressive color encoding across multiple elements.

**Derivation question:** "What if task complexity was encoded not just in labels but in the visual DNA of every element -- borders, numbers, badges, map tiles -- all shifting together from green through red to purple?"

---

### 13. Island Expand/Collapse State Shift -- GESTURE

**CSS class(es):** `.task-island[open]`, `.task-island:not([open])`, `.task-island[open] .task-island__toggle::after`, `.task-island:not([open]) .task-island__toggle::after`
**CSS lines:** 367, 430-431
**HTML lines:** All island `<details>` elements (800, 842, 901, 955, 1018, 1065)

**Reader function:** When a task island is expanded via `<details open>`, its background shifts from `--color-zone-dense` (#FFFFFF) to `--color-zone-emphasis` (#F0EBE3, a warm tan), and the toggle marker shifts from "+" to "\2212" (minus). This coordinated shift tells the reader "this island is active -- you are currently inside it." The background warmth shift is subtle but perceptible.

**Detection reasoning:** Gesture. This is a CSS state-driven shift that changes the reading register. When collapsed, the island is "dormant" -- cool white background, plus sign. When expanded, it becomes "active" -- warm emphasis background, minus sign. The shift is binary but coordinated across two properties (background-color and toggle content). Remove the background shift and the reader loses the subtle sense of "being inside" an island.

**Multi-channel coordination:** (1) Background color shifts from cool white to warm tan on open, (2) toggle pseudo-element content shifts from "+" to minus sign, creating a coordinated "open/closed" signal.

**Pipeline implication:** "How does the reader know which island they are currently inside?" State-encoded background warmth.

**Derivation question:** "What if expanding a task island changed its visual warmth, making the reader feel they had 'entered' the island?"

---

### 14. Bookend Density Transition (Dense -> Sparse -> Dense) -- GESTURE

**CSS class(es):** `.bookend-front` (dense), `.sparse-sea` (sparse), `.bookend-back` (dense)
**CSS lines:** 294-300, 355-356, 562-567
**HTML lines:** 753-793 (front), 795-797 (transition), 1107-1140 (back)

**Reader function:** The page-level density rhythm follows the BOOKENDS pattern: dense orientation front, sparse middle (task islands floating in sea), dense verification back. This macro-gesture shifts the reader's mode three times: (1) absorb overview (dense), (2) do work at your own pace (sparse/islands), (3) verify and reflect (dense). The backgrounds, borders, and spacing all shift together.

**Detection reasoning:** Gesture. This is not a single element but a PAGE-LEVEL reading rhythm encoded in CSS. The bookend-front has a red 4px left border, white background, and dense padding. The sparse sea has nothing -- just 80px+ of cream background. The bookend-back has a 3px border, red left border, and white background again. The shift from dense to sparse to dense is the macro-reading-pace gesture. Comparable to but distinct from the ISLANDS pattern -- BOOKENDS is the macro structure, ISLANDS is the micro structure nested within it.

**Multi-channel coordination:** (1) Background shifts: white (dense) -> cream (sparse) -> white (dense), (2) border presence: 4px left border (front) -> none (sea) -> 3px border + 4px left (back), (3) spacing compression: 32px internal padding (bookends) vs 80-96px empty space (sea), (4) content density: overview grid + metadata (front) -> individual steps (middle) -> checklist + reflection + next-steps (back).

**Pipeline implication:** "What is the macro reading rhythm for a task-based page?" Dense briefing -> sparse execution -> dense verification. The BOOKENDS density pattern.

**Derivation question:** "What if the entire page followed a dense-sparse-dense rhythm -- briefing the reader, releasing them to work, then collecting them for verification?"

---

### 15. Callout Label/Body Typography Split -- GESTURE

**CSS class(es):** `.callout__label`, `.callout__body`
**CSS lines:** 443-453
**HTML lines:** All callout instances throughout the file

**Reader function:** Every callout has a two-zone typography split: the label zone uses JetBrains Mono at 12px, uppercase, 600 weight, 0.08em letter-spacing with a 1px bottom border; the body zone uses Inter at 14px, 400 weight, 1.7 line-height. This creates a predictable micro-gesture: the reader encounters a system-register label (sparse, monospace) then drops into a prose-register body (dense, readable). The shift happens at the 1px border between zones.

**Detection reasoning:** Gesture. This is a coordinated multi-property shift at the component scale (DD-F-006 character scale). Font family, font size, font weight, letter-spacing, and text-transform ALL shift together at the label/body boundary. It is not just styling -- it changes the reader's mode from "scan this label to know what kind of callout" to "read this prose for the content." Matches calibration definition of gesture as "CSS-encoded shift in the reading experience."

**Multi-channel coordination:** Five properties shift at the label-body boundary: (1) font-family: monospace -> sans-serif, (2) font-size: 12px -> 14px, (3) font-weight: 600 -> 400, (4) letter-spacing: 0.08em -> normal, (5) text-transform: uppercase -> none. All shift in the same direction: from compressed/system to open/human.

**Pipeline implication:** "How does the reader's eye distinguish callout types at a glance?" Monospace uppercase label as a scannable gesture before prose content.

**Derivation question:** "What if every callout had a two-beat rhythm -- a compressed system label followed by an open prose body -- and the typography shifted across five properties simultaneously at the boundary?"

---

### 16. Essence Quote Typographic Shift -- GESTURE

**CSS class(es):** `.essence-quote`
**CSS lines:** 635-643
**HTML lines:** 1011-1013
**DOM structure:**
```html
<blockquote class="essence-quote reveal">
  Each task is an island. Complete in itself, connected by intent, separated by the calm of understanding.
</blockquote>
```

**Reader function:** At the midpoint of the page (between islands 4 and 5), the entire typographic register shifts: from Inter body text to Instrument Serif italic at section-heading size (1.625rem), centered, with red 3px borders top and bottom. The reader's pace slows, attention re-centers, and the mode shifts from procedural execution to philosophical reflection. Then it shifts back to procedural for islands 5-6.

**Detection reasoning:** Gesture, not Component. This is a single blockquote with no slots, no reusable structure -- it is a typographic EVENT. The font family shift (Inter -> Instrument Serif), size shift (16px -> 26px), alignment shift (left -> center), and border framing (none -> red horizontal lines) all coordinate to create a reading-pace interruption. Comparable to OD-006's Editorial Drop Cap (calibration example #18) -- a deliberate inflection point that shifts reading mode.

**Multi-channel coordination:** (1) Font family: Inter -> Instrument Serif italic, (2) font size: 16px -> 26px (1.625rem), (3) text alignment: left -> center, (4) border: none -> 3px solid red top AND bottom, (5) spacing: 48px vertical margin isolates it from surrounding content, (6) max-width: 640px centers it within the 860px container. Six properties shift together.

**Pipeline implication:** "What happens at the midpoint of a long procedural sequence?" A philosophical breathing point that interrupts execution mode.

**Derivation question:** "What if the midpoint of the task archipelago contained a typographic event -- a centered, serif, bordered pullquote that forced the reader to pause and reflect before continuing?"

---

### 17. Code Block Dark Inversion -- GESTURE

**CSS class(es):** `.code-block`, `.code-block__label`, `.code-keyword`, `.code-string`, `.code-comment`, `.code-function`, `.code-type`, `.code-number`
**CSS lines:** 501-527
**HTML lines:** Distributed throughout all task islands

**Reader function:** Every code block inverts the entire color scheme: dark background (`--color-text` / #1A1A1A), light text (`--color-background`), with syntax-highlighted keywords in red, strings in green, comments in gray italic, functions in blue. This inversion is a register shift -- the reader moves from "reading about what to do" (cream bg, dark text) to "seeing the actual code" (dark bg, light text). The shift is instant and total.

**Detection reasoning:** Gesture. The full-background inversion is a coordinated multi-property shift that changes the reader's mode from prose-reading to code-reading. Background, text color, font family (Inter -> JetBrains Mono), font size (16px -> 14px / 0.875rem), and line-height (1.7 -> 1.5) all shift together. The monospace label at 9px before the code creates a two-beat micro-gesture (label -> code) echoing the callout label/body pattern. The 3px border and syntax highlighting colors are additional channels.

**Multi-channel coordination:** (1) Background: cream -> near-black, (2) text color: dark -> light, (3) font family: sans-serif -> monospace, (4) font size: 16px -> 14px, (5) line-height: 1.7 -> 1.5, (6) syntax colors: 6 distinct token colors overlay the inverted base, (7) label zone: monospace 9px uppercase gray with 1px bottom border.

**Pipeline implication:** "How does the reader know they are looking at executable code vs. descriptive text?" Full color inversion as a mode-shift gesture.

**Derivation question:** "What if code blocks completely inverted the page's color scheme, creating a perceptual 'portal' from prose mode to code mode?"

---

### 18. Step Connector Lines -- GESTURE

**CSS class(es):** `.task-step:not(:last-child)::after`
**CSS lines:** 476-480
**HTML lines:** Implicit (pseudo-elements on all non-last task steps)

**Reader function:** A 1px vertical line connects each step marker to the next, creating a visual thread through the procedural sequence. The line runs from below the current step's square marker to just above the next step's marker. This subtle gesture tells the reader "these steps are sequential -- follow the line."

**Detection reasoning:** Gesture (pseudo-element). This is a CSS-only visual device (::after pseudo-element) with no DOM presence. It shifts the reading experience from "discrete steps" to "connected sequence." The 1px width in border color creates a deliberately subtle visual thread -- removing it would make steps feel disconnected rather than sequential. The gesture is in the READING -- the eye follows the line downward.

**Multi-channel coordination:** (1) 1px width = maximum subtlety (barely visible but structurally present), (2) border color = blends with existing border system, (3) absolute positioning from left:15px aligns with the center of the 32px step markers, (4) z-index layering: the line is behind the markers (markers have z-index:1).

**Pipeline implication:** "How does the reader sense that steps are sequential, not independent?" Subtle connecting lines between step markers.

**Derivation question:** "What if a barely-visible vertical line threaded through all step markers, making the sequence physically visible?"

---

## COMPONENTS

---

### 19. Task Island -- COMPONENT

**CSS class(es):** `.task-island`, `.task-island__body`, `.task-island__number`, `.task-island__title-block`, `.task-island__label`, `.task-island__title`, `.task-island__meta`, `.task-island__toggle`
**CSS lines:** 361-433
**HTML lines:** 800-837 (island 1), 842-896 (island 2), 901-950 (island 3), 955-1006 (island 4), 1018-1060 (island 5), 1065-1101 (island 6)
**DOM structure:**
```html
<details class="task-island task-island--beginner reveal" id="task-1-install-prerequisites" open>
  <summary>
    <div class="task-island__number">1</div>
    <div class="task-island__title-block">
      <div class="task-island__label">Task Island 1 of 6</div>
      <h2 class="task-island__title">Install Prerequisites</h2>
      <div class="task-island__meta">
        <span class="task-duration">~10 min</span>
        <span class="task-complexity task-complexity--beginner">Beginner</span>
      </div>
    </div>
    <div class="task-island__toggle" aria-hidden="true"></div>
  </summary>
  <div class="task-island__body">
    <!-- prereq callout, steps, checkpoint callout, troubleshoot -->
  </div>
</details>
```

**Reader function:** The primary content container for this page. Each island is a self-contained task unit with defined slots: summary header (number, label, title, meta), body (prerequisite callout, ordered steps, checkpoint callout, troubleshoot details). The `<details>` element provides progressive disclosure -- only island 1 is open by default.

**Detection reasoning:** Component. This is a reusable, multi-slot container for article content. It appears 6 times with identical structure but different content. It has defined slots (header slots: number, label, title, duration, complexity; body slots: prereq, steps, checkpoint, troubleshoot). It is the architectural unit of the page -- everything between the bookends is task islands. Note that the summary header also functions as an Instrument (item #4 above) -- the same DOM element serves dual roles depending on context (collapsed = instrument, expanded = component header).

**Multi-channel coordination:** (1) 3px border with colored 4px left border encodes complexity, (2) `<details>` element provides native expand/collapse, (3) white/tan background shift on open state, (4) internal rhythm: prereq (dense) -> steps (moderate) -> checkpoint (dense) -> troubleshoot (hidden/dense).

**Pipeline implication:** "What is the repeating structural unit for a task-based page?" A collapsible island with prerequisite, steps, checkpoint, and troubleshoot slots.

**Derivation question:** "What if each task was a self-contained island that could be expanded or collapsed, with a consistent internal structure of prereq-steps-checkpoint-troubleshoot?"

---

### 20. Task Steps List -- COMPONENT

**CSS class(es):** `.task-steps`, `.task-step`, `.task-step__marker`, `.task-step__content`, `.task-step__title`, `.task-step__description`
**CSS lines:** 471-496
**HTML lines:** 812-832 (island 1), 854-889 (island 2), 913-943 (island 3), 967-1001 (island 4), 1030-1055 (island 5), 1077-1096 (island 6)
**DOM structure:**
```html
<ol class="task-steps">
  <li class="task-step">
    <div class="task-step__marker"></div>
    <div class="task-step__content">
      <div class="task-step__title">Install Node.js via nvm</div>
      <p class="task-step__description">Using nvm gives you control...</p>
      <div class="code-block">...</div>
    </div>
  </li>
  <!-- ...more steps... -->
</ol>
```

**Reader function:** Ordered procedural steps within each task island. Each step has defined slots: numbered square marker (CSS counter), title, optional description, and code block(s). The steps are the core content delivery mechanism -- this is where the reader actually learns what to do.

**Detection reasoning:** Component. Reusable multi-slot container that appears inside every task island. Consistent structure: marker + content block with title, description, and code. The CSS counter auto-numbers steps. The step connector lines (gesture #18) thread through the markers. This is distinct from the callout system -- steps are the primary content container for procedural instruction.

**Multi-channel coordination:** (1) 32px square markers with 3px borders (soul piece 5: squares signal system), (2) CSS counter auto-numbering in monospace, (3) connecting ::after pseudo-element lines, (4) 4px padding-top on content aligns text baseline with marker center.

**Pipeline implication:** "What is the repeating unit for procedural instructions?" A numbered step with marker, title, description, and code slots.

**Derivation question:** "What if each procedural step was a visually distinct unit with a square numbered marker, connected by vertical lines to show sequence?"

---

### 21. Callout System -- COMPONENT

**CSS class(es):** `.callout`, `.callout__label`, `.callout__body`, `.callout--essence`, `.callout--prereq`, `.callout--tip`, `.callout--checkpoint`, `.callout--warning`, `.callout--gotcha`, `.callout--note`
**CSS lines:** 438-466
**HTML lines:** Distributed throughout -- prereq callouts (811, 853, 912, 966, 1029, 1076), checkpoint callouts (833, 890, 944, 1003, 1057, 1098), warning callouts (942, 1034)
**DOM structure:**
```html
<div class="callout callout--prereq">
  <div class="callout__label">Prerequisites</div>
  <div class="callout__body"><p>...</p></div>
</div>
```

**Reader function:** Two-zone content container with a label slot and body slot. Seven semantic variants distinguished by left-border color: prereq (red), checkpoint (green), warning (amber), tip (green), gotcha (coral), note (blue), essence (red + serif italic). The callout system is the secondary content container -- it holds structured aside content within task islands.

**Detection reasoning:** Component. Reusable two-slot container with consistent structure (label + body) and multiple semantic variants. Appears 14+ times across the page. Soul Piece 4 (Callout Family DNA): 4px left border, color variants, label/body zones. The essence variant adds a font-family shift (Instrument Serif italic) to the body, which is also a micro-gesture, but the container itself is a Component.

**Multi-channel coordination:** (1) Left border color encodes semantic type (7 variants), (2) background shifts slightly for some variants, (3) monospace uppercase label creates scannable type identification, (4) 1px bottom border separates label from body.

**Pipeline implication:** "What container holds structured aside content (prerequisites, checkpoints, warnings) within task steps?" The callout system with semantic color variants.

**Derivation question:** "What if every aside had a consistent two-zone structure -- a monospace system label and a prose body -- with left-border color encoding the aside's semantic purpose?"

---

### 22. Troubleshoot Accordion -- COMPONENT

**CSS class(es):** `.troubleshoot`, `.troubleshoot summary`, `.troubleshoot summary::before`, `.troubleshoot[open] summary::before`, `.troubleshoot__body`
**CSS lines:** 532-557
**HTML lines:** 834-835 (island 1), 891-894 (island 2), 945-948 (island 3), 1004 (island 4), 1058 (island 5), 1099 (island 6)
**DOM structure:**
```html
<details class="troubleshoot">
  <summary>If This Fails: Node.js not found after installation</summary>
  <div class="troubleshoot__body">
    <p>Add the following to <code>~/.zshrc</code>:</p>
    <div class="code-block">...</div>
  </div>
</details>
```

**Reader function:** Collapsible failure-recovery container that appears at the end of each task island. The coral (warm red) border and monospace uppercase summary signal "error territory." The `<details>` element hides the fix by default -- the reader only expands if they hit the problem. This is progressive disclosure of error content.

**Detection reasoning:** Component. Reusable container with consistent structure: coral-bordered `<details>` with a monospace summary (containing a "+" toggle square that shifts to minus on open) and a body with explanation + code fix. Appears in all 6 islands with identical structure. The toggle ::before pseudo-element (CSS lines 542-548) creates a square marker that mirrors the task step markers, maintaining visual DNA consistency.

**Multi-channel coordination:** (1) Coral 3px border signals "error/troubleshoot" semantics, (2) monospace uppercase summary in coral color, (3) square toggle marker (20x20, 3px coral border) with +/- state, (4) 1px coral border-top on body when open, (5) `<details>` element provides native progressive disclosure.

**Pipeline implication:** "What happens when a step fails?" A hidden-by-default troubleshoot accordion at the end of each task.

**Derivation question:** "What if every task island ended with a collapsible troubleshoot section -- hidden by default, coral-colored to signal error territory, expanding to show the fix?"

---

### 23. Code Block -- COMPONENT

**CSS class(es):** `.code-block`, `.code-block__label`, `.code-block pre`, `.code-block code`
**CSS lines:** 501-527
**HTML lines:** Distributed throughout all task islands (every step with executable code)
**DOM structure:**
```html
<div class="code-block">
  <div class="code-block__label">Terminal</div>
  <pre><code>brew install --cask docker</code></pre>
</div>
```

**Reader function:** Dark-themed code container with a label slot (file path or "Terminal") and a pre/code content slot. The label identifies what the code is (file name, terminal command), and the body renders syntax-highlighted code. This is the atomic content unit for all executable/copy-able code in the page.

**Detection reasoning:** Component. Reusable two-slot container (label + code body) with consistent structure. Appears 20+ times throughout the page. The dark inversion gesture (#17) is the CSS treatment, but the container structure itself -- label, pre, code, with syntax highlighting spans -- is a Component. Some code blocks lack labels (nested within troubleshoot bodies), demonstrating slot optionality.

**Multi-channel coordination:** (1) Dark background inversion, (2) monospace label at 9px with 1px bottom border, (3) syntax highlighting via 6 token color classes, (4) 3px border integrates with the page's border system, (5) `overflow-x: auto` handles long lines.

**Pipeline implication:** "What container holds executable code?" Dark-themed, labeled, syntax-highlighted code block.

**Derivation question:** "What if code blocks completely inverted the color scheme and included a file-path label, creating a clear visual portal between prose and code?"

---

### 24. Exploration Header -- COMPONENT

**CSS class(es):** `.exploration-header`, `.exploration-header__inner`, `.exploration-id`, `.exploration-title`, `.exploration-hypothesis`
**CSS lines:** 195-225
**HTML lines:** 698-748
**DOM structure:**
```html
<header class="exploration-header" role="banner">
  <div class="exploration-header__inner">
    <div class="exploration-id">Exploration OD-003 / Density: Islands + Bookends</div>
    <h1 class="exploration-title">Task-Based Structure</h1>
    <p class="exploration-hypothesis">Hypothesis: "What if documentation was organized around discrete tasks..."</p>
    <div class="archipelago-map">...</div>
    <div class="exploration-meta">...</div>
  </div>
</header>
```

**Reader function:** Full-bleed dark header that contains the page's title, hypothesis, archipelago map, and metadata bar. This is the outermost structural container for all header-level content.

**Detection reasoning:** Component. Multi-slot container with defined positions: ID label (top), title (serif italic), hypothesis (secondary text), archipelago map (nested instrument), metadata bar (nested instrument). The dark background (`--color-text` / #1A1A1A) with 3px red bottom border establishes the page's visual identity immediately. Note that several instruments (#1, #2) are nested within this component.

**Multi-channel coordination:** (1) Dark background (inverted from page), (2) 3px red bottom border marks the header boundary, (3) 860px max-width container, (4) slot ordering: ID -> title -> hypothesis -> map -> meta.

**Pipeline implication:** "What is the top-level page container for a design exploration?" Dark full-bleed header with identity, hypothesis, visual map, and metadata.

**Derivation question:** "What if the page opened with a dark, full-bleed header that contained the exploration's identity, hypothesis, visual map, and system metadata?"

---

### 25. Bookend Back -- COMPONENT

**CSS class(es):** `.bookend-back`, `.bookend-back__title`, `.bookend-reflection`, `.verification-list`, `.whats-next`
**CSS lines:** 562-617
**HTML lines:** 1108-1140
**DOM structure:**
```html
<section class="bookend-back reveal" aria-labelledby="verification-title">
  <h2 class="bookend-back__title">Complete Pipeline Verification</h2>
  <!-- Beat 1: Dense verification checklist -->
  <ul class="verification-list">...</ul>
  <!-- Beat 2: Medium essence reflection -->
  <div class="bookend-reflection">...</div>
  <!-- Beat 3: Sparse what's next -->
  <div class="whats-next">...</div>
</section>
```

**Reader function:** Three-beat decompression container that closes the page. Defined slots: title, verification checklist (beat 1: dense), essence reflection (beat 2: medium), what's next (beat 3: sparse). The 3-beat structure creates a deliberate wind-down from procedural doing to reflective understanding to forward orientation.

**Detection reasoning:** Component. Multi-slot container with a consistent 3-beat structure defined by EXT-TASK-017. While the individual beats also function as instruments (#7, #8, #9), the bookend-back AS A CONTAINER is a Component -- it defines the slots and their ordering. The white background with 3px border and red left border marks it as a structural bookend paired with the bookend-front.

**Multi-channel coordination:** (1) White background + 3px border + red 4px left border = bookend visual identity, (2) three internal zones with distinct densities (dense checklist -> medium reflection -> sparse next-steps), (3) purple left border on reflection zone distinguishes it from other callout types.

**Pipeline implication:** "What structure closes a task-based page?" A 3-beat decompression: verify, reflect, look forward.

**Derivation question:** "What if the back bookend had exactly three beats -- dense verification, medium reflection, sparse forward-pointing -- creating a deliberate decompression from doing to understanding?"

---

## SUMMARY TABLE

| # | Name | Category | Unique Signal |
|---|------|----------|---------------|
| 1 | Archipelago Map | Instrument | Visual page map before reading |
| 2 | Exploration ID / Header Metadata | Instrument | Document identity + system position |
| 3 | Bookend Front (Orientation Zone) | Instrument | "You Are Here" briefing |
| 4 | Task Island Summary Header | Instrument | Collapsed-state wayfinding (x6) |
| 5 | Checkpoint Callouts | Instrument | Task completion verification (x6) |
| 6 | Section Labels | Instrument | Zone-transition naming |
| 7 | Bookend Back Verification Checklist | Instrument | End-of-page cross-check |
| 8 | Essence Reflection Block | Instrument | Emotional decompression beat |
| 9 | What's Next Block | Instrument | Forward-orientation |
| 10 | Pattern Summary Table | Instrument | Self-documenting page analysis |
| 11 | Sparse Sea Separators | Instrument | Structural whitespace between islands |
| 12 | Complexity Color Gradient | Gesture | Green -> red -> purple across islands |
| 13 | Island Expand/Collapse State Shift | Gesture | Background warmth + toggle on open |
| 14 | Bookend Density Transition | Gesture | Dense -> sparse -> dense page rhythm |
| 15 | Callout Label/Body Typography Split | Gesture | 5-property shift at label/body boundary |
| 16 | Essence Quote Typographic Shift | Gesture | 6-property midpoint interruption |
| 17 | Code Block Dark Inversion | Gesture | Full color-scheme inversion for code |
| 18 | Step Connector Lines | Gesture | Pseudo-element vertical threading |
| 19 | Task Island | Component | Collapsible multi-slot task container |
| 20 | Task Steps List | Component | Numbered procedural sequence |
| 21 | Callout System | Component | 7-variant semantic aside container |
| 22 | Troubleshoot Accordion | Component | Hidden-by-default error recovery |
| 23 | Code Block | Component | Dark-themed labeled code container |
| 24 | Exploration Header | Component | Full-bleed dark page header |
| 25 | Bookend Back | Component | 3-beat decompression container |

**Totals:** 11 Instruments, 7 Gestures, 7 Components = 25 elements

---

## METACOGNITIVE CHECK

1. **Did I read the ENTIRE file (CSS + HTML), or did I stop after finding "enough"?**
   YES -- read all 1163 lines in 4 chunks (1-300, 300-600, 600-900, 900-1163). CSS from line 107 through 691. HTML from 694 through 1163.

2. **Am I identifying elements at the DOM level, or am I working at the abstract/conceptual level?**
   DOM level. Every finding maps to specific CSS classes, line numbers, and HTML structure. I quoted DOM structures for all components and instruments.

3. **Could I have missed subtle gestures -- places where CSS properties shift together without obvious class name changes?**
   Possible misses: (a) The `::selection` styling (line 670) is a micro-gesture (red background on text selection) but it is more styling than reading-experience shift. (b) The `*:focus-visible` outline (line 671) is an accessibility affordance, not a reading gesture. (c) The scroll-reveal animation (`.reveal`, lines 178-189) creates a fade-in-from-below gesture on scroll entry, but this is a Chromium-only progressive enhancement that degrades to instant display. I did not include it because its removal does not change reading comprehension or mode. (d) The `@media print` rules (lines 686-690) change behavior in print context -- not a reading gesture for screen users. I believe I captured all significant gestures.

4. **Am I applying the reader-function test honestly? Would removing this element actually change the reader's experience?**
   Yes. The most borderline cases: (a) Essence Reflection (#8) -- removing it WOULD collapse the 3-beat decompression to 2 beats, losing the reflective pause. (b) Section Labels (#6) -- removing them loses explicit zone naming, though the sparse sea still signals transitions. (c) Sparse Sea Separators (#11) -- removing them would collapse the ISLANDS pattern entirely, which is a fundamental change. All pass the removal test.

5. **Did I check for pseudo-elements (::before, ::after, ::first-letter) that might constitute gestures?**
   YES. Found: (a) `.task-step:not(:last-child)::after` -- step connector lines (gesture #18), (b) `.task-step__marker::before` -- CSS counter content (part of component #20), (c) `.troubleshoot summary::before` -- toggle marker (part of component #22), (d) `.task-island[open] .task-island__toggle::after` and `.task-island:not([open]) .task-island__toggle::after` -- expand/collapse toggle (part of gesture #13). No `::first-letter` pseudo-elements in this file.

6. **Did I check responsive breakpoints (@media queries) for elements that appear/disappear at different viewports?**
   YES. Two @media queries found: (a) `@media (max-width: 640px)` on `.archipelago-map` (line 234-235) -- shifts from 6 columns to 3 columns; the instrument persists, just reflows. (b) `@media (max-width: 640px)` on `.task-overview` (line 328) -- shifts from 2 columns to 1 column. No elements appear or disappear at breakpoints. Also found `@media (prefers-reduced-motion: reduce)` (lines 679-685) and `@media print` (lines 686-690) -- accessibility/print accommodations, not reading gestures.

7. **Am I distinguishing between "styling" (just making it look nice) and "instruments/gestures" (serving a reader-experience function)?**
   YES. Deliberately excluded: (a) `::selection` styling -- decorative, (b) `*:focus-visible` outline -- accessibility affordance, (c) `.skip-link` -- accessibility utility, (d) `.reveal` scroll animation -- progressive enhancement, (e) general body/reset styles -- foundational styling, (f) inline code styling (`p code, li code`) -- consistent typographic treatment but not a reading-mode shift. Each included element has a specific reader-experience function beyond aesthetics.

# PA Design Spec: Experiential Questions + Bridging Prompts + Weaver Redesign

**Author:** pa-designer (Task #11)
**Date:** 2026-02-27
**Status:** COMPLETE

---

## Design 1: The Experiential Question Set (22 Questions)

### Philosophy

The current PA skill has 69 questions organized by what they MEASURE (readability, spatial balance, visual flow, grid, consistency, color, metaphor, responsiveness, composition). Each question is an instrument pointed at a dimension. The auditor reads the question, finds the dimension, measures it, reports.

This produces diagnostic precision at the cost of experiential authenticity. An auditor answering "Is there dead space that serves no purpose?" is searching for dead space. An auditor answering "Where does the page breathe, and where does it hold its breath?" is experiencing the page's rhythm and reporting what they find. The first catches defects. The second catches defects AND discovers qualities the question-writer never anticipated.

The reduction from 69 to 22 is not compression. The 22 questions cover MORE perceptual ground because they are open-ended inquiries, not closed-dimension probes. "Does your interest stay level, peak and valley, or fade?" subsumes PA-35 (scroll momentum), PA-47 (visual novelty decay), PA-36 (dramatic moment placement), and PA-41 (repetition monotony) -- but it also catches things none of those four would surface, because the auditor is following their own attention rather than checking a list.

### What Stays Rigid

Physics does not become experiential. Container width 940-960px is not a feeling -- it is a constraint that creates the CONDITIONS for feeling. These physics live in the gate runner (programmatic verification) and the conventions brief (builder reference). The PA questions do not verify physics. They verify EXPERIENCE.

Identity does not become experiential either. Sharp edges, flat light, warm palette -- these are the world's personality. But GENERATIVE constraints that CREATE creative opportunity through restriction (border-radius: 0, box-shadow: none, warm palette) should be FELT by the auditor without being told what to look for. If they cannot feel the world's personality, the page has failed to express identity, and that failure is caught by the experiential questions naturally.

### The Three Tests for Every Question

1. **Does answering require looking at the page?** If answerable from CSS alone, REJECT.
2. **Does the question ask what the auditor SEES/FEELS?** If it asks what they COUNT/MEASURE, REJECT.
3. **Could a thoughtful non-designer give a meaningful answer?** If domain expertise is required, REJECT.

### The Questions

---

#### TIER 1: FIRST ENCOUNTER (4 questions)

These are answered on first scroll-through, before any analysis. The auditor sees the page for the first time and responds to what they experience. No second chances -- first impressions are data.

**E-01: The Arrival**
"You have just landed on this page. Before you scroll, before you read -- what do you feel? Is the page inviting you in, holding you at arm's length, or something else entirely? Describe the emotional temperature of your first second."

*What this surfaces:* Header-to-content proportion, emotional alignment, focal point hierarchy, margin psychology. But also: the gestalt impression that no dimensional question can decompose. The page's personality in a single breath.

**E-02: The Eye's Journey**
"Now scroll through the entire page at reading speed -- not studying, just reading. Where does your attention sharpen? Where does it drift? Is there a moment where you stop scrolling because something caught you, or a moment where you speed up because nothing did?"

*What this surfaces:* Scroll momentum, visual novelty decay, dramatic moment placement, dead space, engagement peaks and troughs. The auditor maps their own attention curve without being told what shape it should have.

**E-03: The Personality**
"If this page walked into a room, what kind of person would it be? Confident and quiet? Loud and scattered? Careful but cold? Describe the page's personality in a sentence or two -- then say whether that personality feels EARNED by what the page actually contains."

*What this surfaces:* Design dialect coherence, emotional alignment, the gap between visual personality and content personality, identity expression. A page whose personality feels earned has achieved content-form coupling. A page whose personality feels pasted-on has not.

**E-04: The Gut Check**
"Scroll back to the top. Would you send this to someone whose taste you respect? What would you want to fix first -- not what breaks rules, but what breaks the spell?"

*What this surfaces:* PA-05 in its entirety (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) -- but framed as personal conviction rather than checklist evaluation. "What breaks the spell" surfaces the dominant perceptual failure without the auditor needing to categorize it.

---

#### TIER 2: SPATIAL EXPERIENCE (5 questions)

These require the auditor to attend to the page's physical presence -- how it uses space, creates rhythm, manages density. Answered on a slower second pass.

**E-05: Breathing and Holding**
"Find a place where the page breathes -- generous space, room to settle. Now find a place where it holds tight -- dense, compressed, urgent. Do both exist? Does the contrast between them feel composed (like dynamics in music) or accidental (like someone forgot to style a section)?"

*What this surfaces:* Negative space quality, compression ratio, void detection, restraint as expression, density variation. The dual prompt (find both) ensures the auditor evaluates RANGE, not just presence.

**E-06: The Transitions**
"Pick the strongest transition between two sections -- the place where the page changes most dramatically. Now pick the quietest transition. Describe what happens at each. Does the dramatic transition feel like it EARNS its drama? Does the quiet transition feel intentional or overlooked?"

*What this surfaces:* Transition quality, transition variation, multi-coherence dynamic range, boundary design. The comparison between strongest and quietest directly reveals whether the page has compositional dynamic range.

**E-07: The Architecture of Emptiness**
"Look at the gaps between sections -- not the content, just the empty spaces. Are they all the same flavor of emptiness, or do different gaps feel different? Is there a gap that feels like a pause, one that feels like a chapter break, and one that feels like the page lost its train of thought?"

*What this surfaces:* Negative space variety, vertical rhythm, spacing consistency, stacking voids. The three flavors (pause/chapter break/lost thought) map to designed spacing/dramatic transition/accidental void without using those terms.

**E-08: Width and Weight**
"Squint until you cannot read the text. What remains? Describe the shapes, the weight distribution, the dark and light zones. Does the abstract composition have a clear structure, or does it dissolve into uniformity?"

*What this surfaces:* Macro composition, visual weight distribution, layout balance, horizontal utilization, content-to-viewport ratio. The squint test strips content and reveals pure composition.

**E-09: The Rhythm Test**
"Tap your finger as you scroll. Does the page have a beat? Is the beat steady, varied, or absent? If varied, does the variation follow the content's energy, or does it feel arbitrary?"

*What this surfaces:* Visual rhythm, repetition monotony, content-form coupling. The finger-tap prompt forces the auditor to experience rhythm kinesthetically rather than visually measuring spacing values.

---

#### TIER 3: CONTENT-FORM RELATIONSHIP (4 questions)

These require the auditor to attend to HOW visual design serves (or fights) the specific content on the page.

**E-10: Amplification and Obstruction**
"Find a place where the design AMPLIFIES the content -- where the visual treatment makes the writing hit harder, the information clearer, the argument more persuasive. Now find a place where design gets in the way -- where you have to work around the visual treatment to access the content. Describe both."

*What this surfaces:* Content-form coupling, readability failures, information hierarchy, the relationship between visual density and content density. The dual prompt ensures the auditor evaluates both directions of the content-form relationship.

**E-11: Register Response**
"Does the page's visual treatment change when the content's VOICE changes? If the writing shifts from analytical to personal, from dense to sparse, from formal to conversational -- does the page shift with it? Point to a specific voice change and describe how (or whether) the design responds."

*What this surfaces:* Content-form coupling at the register level, zone differentiation, multi-voice composition, the difference between uniform treatment and responsive treatment.

**E-12: The Strongest Moment**
"What is the single most successful design decision on this page? Not the most technically impressive -- the one that serves the content best. Describe why it works."

*What this surfaces:* Design highlight presence, compositional intelligence, the auditor's aesthetic judgment in service of content. Forcing a superlative makes the auditor evaluate relative quality across the entire page.

**E-13: The Weakest Moment**
"What is the single least successful design decision? The place where the page's visual ambition exceeds its execution, or where the execution is competent but the ambition is absent?"

*What this surfaces:* PA-01 (first thing that bothers you) plus PA-05 (would you put your name on this) -- but reframed as a creative assessment. "Ambition exceeds execution" catches over-reaching; "execution without ambition" catches template-quality work.

---

#### TIER 4: CREATIVE COHERENCE (5 questions)

These require the auditor to attend to the page's compositional intelligence -- whether it feels like the product of unified creative intent.

**E-14: The Organizing Idea**
"Can you feel an organizing idea behind this page -- a logic that explains WHY things are where they are, WHY sections look the way they do? You do not need to name it precisely. Just describe whether the page feels like it has a structural REASON, or whether it feels like a collection of individually reasonable decisions."

*What this surfaces:* Principled vs ad-hoc composition, metaphor expression without metaphor vocabulary. The auditor does not need to know the metaphor's name -- they need to FEEL its presence or absence. If the organizing idea is perceptible without labels, it is STRUCTURAL. If not, it is ANNOUNCED or ABSENT.

**E-15: One Mind or Several?**
"Does this page feel like one mind made it throughout, or like different sensibilities took over in different sections? If there is a dialect shift -- a place where the visual language seems to change hands -- point to where it happens and describe how the language changes."

*What this surfaces:* Design dialect coherence, visual intruders, contextual consistency. The experiential framing surfaces fragmentation that dimensional questions miss -- a dialect shift is often subtle enough that "do these two elements look identical?" misses it, but "does the page feel like one mind?" catches it.

**E-16: The Music Analogy**
"If this page were a piece of music, what would it sound like? A single instrument playing one melody? A choir singing in harmony? An ensemble where different instruments have their own parts? What makes you choose that answer?"

*What this surfaces:* Compositional voice, multi-voice composition, the highest-level assessment of compositional depth. The analogy makes channel independence accessible without technical vocabulary.

**E-17: Persistence**
"Scroll to the bottom third of the page. Does the page still feel like the same page you saw at the top? Has its organizing idea persisted, evolved, or been abandoned? Is there evidence of creative intent in the final sections, or does the page run out of energy?"

*What this surfaces:* Metaphor spatial coverage, visual novelty decay, visual weight distribution, the "front-loading" failure where all design energy concentrates in the first third.

**E-18: Novelty**
"Does this page do anything you have not seen before? Not just well-executed, but genuinely inventive -- a combination, a technique, a compositional choice that surprised you? If yes, does the novelty serve the content or distract from it?"

*What this surfaces:* Novelty beyond competence, creative surprise. The "serve or distract" qualifier separates genuine compositional innovation from gimmickry.

---

#### TIER 5: WHAT'S ALMOST THERE (4 questions)

These are forward-looking. They surface unrealized potential and creative direction for the refinement window. The auditor is not diagnosing defects -- they are sensing what the page is TRYING to become.

**E-19: The Aspiration**
"What is this page TRYING to do that it has not quite achieved? Not what it fails at -- what it reaches for. Describe the gap between the page's evident ambition and its current execution."

*What this surfaces:* The difference between aspiration-shortfall (creative opportunity) and failure (defect). A page that aspires to something and falls short is CLOSER to quality than a page that aspires to nothing and succeeds.

**E-20: Ten More Minutes**
"If you had ten more minutes with this page -- not to fix it, but to DEEPEN it -- where would you spend them? What would you try?"

*What this surfaces:* The auditor's creative instinct about where the page has the most unrealized potential. This is NOT a fix list -- it is a creative invitation.

**E-21: The Surprise You Almost Had**
"Was there a moment where you felt the page was about to surprise you -- a transition that seemed like it was building toward something, a section that seemed like it should have been special -- but it did not quite land? What would landing have felt like?"

*What this surfaces:* Near-miss compositional moments, the gap between setup and payoff in visual pacing. Near-misses are the highest-value input for the refinement builder because the SETUP is already there -- only the payoff needs work.

**E-22: What Would You Show Someone?**
"If you were showing this page to a friend who cares about design, which section would you scroll to first? Which section would you skip past? Why?"

*What this surfaces:* The auditor's curated view of the page's peaks and valleys. The "skip past" component catches sections that are not broken but are not interesting -- the unremarkable middle ground that dimensional questions miss entirely.

---

### Coverage Map: 22 Experiential Questions vs 69 Old Questions

| Experiential Question | Old Questions Subsumed | What It Adds Beyond Old Coverage |
|----------------------|----------------------|--------------------------------|
| E-01 (Arrival) | PA-04, PA-11, PA-20, PA-39 | Gestalt emotional temperature, un-decomposed first impression |
| E-02 (Eye's Journey) | PA-09, PA-35, PA-36, PA-47 | Self-mapped attention curve, auditor follows their own experience |
| E-03 (Personality) | PA-03, PA-20, PA-25 | "Earned" personality concept, content-personality coupling |
| E-04 (Gut Check) | PA-05 (all sub-criteria) | Personal conviction framing, "spell" vocabulary |
| E-05 (Breathing/Holding) | PA-33, PA-50-53, PA-64, PA-66 | Composed vs accidental density contrast |
| E-06 (Transitions) | PA-34, PA-62, PA-69 | Dynamic range via strongest/quietest comparison |
| E-07 (Emptiness) | PA-17, PA-40, PA-66 | Three flavors of gap (pause/chapter/lost) |
| E-08 (Width/Weight) | PA-10, PA-30, PA-32, PA-53 | Abstract composition through squint test |
| E-09 (Rhythm) | PA-17, PA-41, PA-70 | Kinesthetic rhythm (finger-tap) not visual measurement |
| E-10 (Amplify/Obstruct) | PA-06-08, PA-38, PA-70 | Bidirectional content-form evaluation |
| E-11 (Register) | PA-55, PA-61, PA-70 | Register-level visual responsiveness |
| E-12 (Strongest) | PA-45 | Superlative forces full-page comparative ranking |
| E-13 (Weakest) | PA-01, PA-05 | Ambition/execution reframing |
| E-14 (Organizing Idea) | PA-44, PA-68, PA-03, PA-05a | "Structural reason" detection without metaphor vocabulary |
| E-15 (One Mind) | PA-03, PA-16, PA-19 | Dialect shift location specificity |
| E-16 (Music) | PA-61, PA-65 | Channel independence through accessible analogy |
| E-17 (Persistence) | PA-47, PA-52, PA-68 | Bottom-third energy test |
| E-18 (Novelty) | PA-67 | Serve vs distract qualifier |
| E-19 (Aspiration) | NEW | Ambition detection -- no old equivalent |
| E-20 (Ten Minutes) | NEW | Creative invitation -- no old equivalent |
| E-21 (Almost Surprise) | PA-36 expanded | Near-miss as creative opportunity |
| E-22 (Show Someone) | PA-45 expanded | Curated peaks AND valleys (skip-past component) |

**Old questions NOT covered by experiential set:**
- PA-14, PA-15 (column breathing, alignment scatter): Caught by E-08/E-10 if severe; minor issues below experiential threshold
- PA-22/23/46 (responsiveness): SEPARATE CONCERN -- responsive review at 768px remains, not experiential questions
- PA-24/25 (cross-page): SEPARATE CONCERN -- cross-page coherence is a system-level evaluation
- PA-26-28 (architectural challenge, adversarial): META-questions for skill development, not auditor tasks
- PA-29 (header type collision): Caught by E-01 and E-13 if severe
- PA-37 (container overload): Caught by E-10 if it interferes with content
- PA-42/43 (metaphor cost): Caught by E-14 (organizing idea) and E-11 (register response)
- PA-56 (sub-perceptual typography): Caught by E-11 -- if auditor cannot feel typography shifts, register response is absent

**What is genuinely lost:**
1. **Diagnostic precision** -- "PA-09: dead space at 60-75% scroll" is more actionable than "E-02: attention drifted in the lower half." The Weaver's synthesis bridges this by combining multiple auditors' location-specific observations.
2. **Mechanical coverage** -- The old 69 guaranteed every dimension was checked. The experiential 22 rely on auditor sensitivity. Acceptable because: the gate runner catches mechanical issues programmatically; and what 9 auditors do not notice, readers will not notice.
3. **Scoring stability** -- PA-05 sub-criteria produce stable comparable scores. Experiential responses vary. The Weaver synthesizes comparable verdicts from varied input. This is a feature (richer signal) and a cost (harder synthesis).

---

## Design 2: Bridging Questions -- Both Directions

### Philosophy

Context windows are membranes, not walls. Creative state does not need to pass through them intact -- it needs to pass through them ALIVE. The current pipeline passes artifacts (HTML files) and diagnostics (fix lists, scores, severity classifications). Both are dead tissue -- they describe what EXISTS, not what was INTENDED, REJECTED, or LEFT UNFINISHED.

The bridging questions create living tissue. On the writing side, they help the builder articulate their creative state while it is still warm. On the receiving side, they help the new instance orient toward CREATION rather than compliance.

---

### (A) WRITING PROMPTS: The 6-Dimension Reflection After Building

Written by the builder immediately after completing the artifact, BEFORE any audit. Each prompt must surface individual creative decisions through inquiry, not compliance. The output should make the NEXT window want to create, not fix.

---

#### CONVICTION -- "What were you trying to make the reader feel?"

**Primary prompt:** "Pick a specific moment on the page -- a transition, a section opening, a visual peak. What were you trying to make the reader feel RIGHT THERE? What CSS decision most embodies that intent? Describe the feeling you aimed for and the craft that pursued it."

**If the builder writes only abstractions:** "Not 'I wanted it to feel professional.' What did you want the reader to feel at the transition between the second and third sections, specifically? What does that transition DO to the reading experience?"

*Why this works:* Locating conviction at a SPECIFIC MOMENT prevents vague aspiration. Connecting the feeling to a CSS decision reveals the craft-intent link. The next builder reads this and understands: at this spot, the previous builder had an idea about reader experience, and here is the CSS that pursued it.

*Example output:*
"At the transition from section 2 to section 3, I wanted the reader to feel the ground shift. The content moves from personal anecdote to structural analysis, and the page should feel that change in its bones. The 4px left border appearing for the first time, combined with the background dropping from #FEF9F5 to #F0EBE3, was my attempt at making the reader feel 'now we are in a different kind of room.' The border works. The background shift might be too subtle."

---

#### ALTERNATIVES -- "What did the road not taken look like?"

**Primary prompt:** "What did you consider for the page's most important transition before choosing this approach? Describe what the alternative would have looked like -- not abstractly, but as if you were describing a page that exists. What made you choose what you chose? Was the alternative wrong, or just different?"

**Second prompt:** "Name one creative direction the constraints did not allow. Not a system wish-list item -- a specific effect you wanted for THIS content that the vocabulary could not express. If you could break one rule, which rule and what would you do?"

*Why this works:* "Describe the alternative as if it exists" forces concrete visualization, not abstract hand-waving. "Wrong or just different" preserves the alternative as a live creative option for the next builder.

*Example output:*
"I considered making the igneous intrusion a warm eruption instead of a dark inversion. The warm version would have been: the section's background shifting to the warmest tone on the page (#FFF5ED or even a muted coral), with the pull-quote in larger italic, the borders disappearing entirely. An eruption of openness instead of compression. I chose dark because the warm version felt decorative at the scale I tried. But the concept -- disruption as WARMTH rather than darkness -- is genuinely interesting. A better version might use the warm eruption combined with a scale break (32px type) so the warmth is paired with weight, not fragility."

---

#### SURPRISES -- "What emerged that you did not plan?"

**Primary prompt:** "Where did the material suggest something you did not expect? A visual relationship that emerged from content length, a rhythm that appeared from the content's own structure, a CSS combination that worked better (or worse) than planned? Describe the surprise and whether you followed it or fought it."

*Why this works:* Surprises are evidence of the composition TEACHING ITSELF. When content structure and visual treatment interact and produce something unplanned, that is emergent compositional intelligence. The next builder should know about these discoveries.

*Example output:*
"The three failure modes (technical debt, process debt, cultural debt) are different lengths: 280 words, 320 words, 510 words. When I put them in a 3-column grid, the third column is visually heavier. Instead of equalizing, I leaned into it -- the heaviest column (cultural debt) gets the heaviest visual treatment (darkest background in the row, border on the left). The asymmetry IS the argument: cultural debt weighs more. I did not plan this. The content's proportions suggested it."

---

#### IMPULSES -- "What creative energy is still unexpressed?"

**Primary prompt:** "Where did you want to push further but the context would not allow it? Not because of a rule you disagree with -- because you ran out of time, window, or ideas for how to get there. What would you try with thirty more minutes and a fresh perspective?"

*Why this works:* "Thirty more minutes and a fresh perspective" makes the prompt actionable for the next builder. Impulses are deferred creative energy -- seeds, not failures.

*Example output:*
"I wanted the quiet zone (section 7, the reflection) to feel like a clearing -- not just sparse, but genuinely open, as if the stratigraphy has been cut away and you can see sky. I got 'sparse section' but not 'clearing.' The difference might be: the clearing needs the LIGHTEST background on the entire page (lighter than the surface zone, breaking the descent's darkening arc for one section), combined with extreme vertical padding and perhaps the only moment of centered text on the page. The vocabulary supports all of this. I just could not find the right balance in this window."

---

#### EXPERIENCE -- "Scroll through your creation and describe what you feel."

**Primary prompt:** "Scroll through your page at reading speed. Do not evaluate. Describe what you experience at each major shift. Not what you see (the artifact shows that), not what you think about it -- what you FEEL. Where are you pulled forward? Where do you slow down? Where does something feel right? Where does something feel off?"

*Why this works:* The builder's experiential scroll-through is first-party data that no audit can replicate. The auditors will scroll through too, but their experience is a fresh-eyes encounter. The builder's experience is the CREATOR's encounter. Both are valuable and non-redundant.

*Example output:*
"Warmth at the top -- settling in. The first descent is smooth; by section 3 the grid gives you something to examine. The igneous intrusion hits hard, the pull-quote breaks rhythm effectively. But recovery from intrusion to section 5 is too fast -- the counter-examples arrive before the disruption has settled. There is a 'gear change' that is not graduated enough. The bedrock is satisfying: compressed, authoritative, final. The closing is slightly detached from the descent. Overall: strong spine, transitions between mid-sections need more graduation."

---

#### UNRESOLVED -- "Where are two good ideas still competing?"

**Primary prompt:** "Name one genuine aesthetic tension you could not resolve. Not a bug -- a place where two good compositional ideas both had merit and you had to pick one. What were the two ideas? Which did you choose? If you had to bet on the one you did NOT choose being the better answer, what would the page look like?"

*Why this works:* "Two good ideas both had merit" ensures this captures genuine creative territory. "What would the page look like" forces the builder to concretely visualize the alternative. The next builder inherits a creative HYPOTHESIS, not a vague concern.

*Example output:*
"The grid zone (section 3) works structurally but fights the descent metaphor. Grids are horizontal; descent is vertical. I chose the grid because the content needs parallel presentation. But if I bet on vertical: the three failure modes would stack vertically, each in a full-width block, each progressively denser and darker. The descent metaphor would be unbroken but the comparison affordance would be lost. I think the answer is making the grid FEEL like descent: the cells darken left-to-right, echoing top-to-bottom. I did not try this."

---

### Reflection Protocol Rules

1. **Written BEFORE audit.** Captures creative state at completion, not post-audit rationalization.
2. **Written BY the builder.** The Weaver's direction is an observer's account. The reflection is the creator's account. Both travel to the next window.
3. **No CSS property:value pairs.** Describe feelings, intentions, creative reasoning. CSS is in the artifact. The reflection is about what the CSS was FOR. (Hex colors and general descriptions are fine; `border-left: 4px solid #2a2a2a` is not.)
4. **Total length: 20-35 sentences across all 6 dimensions.** If it exceeds 40, the builder is analyzing instead of reflecting.
5. **Travels WITH the artifact.** The next builder receives: HTML artifact, conviction brief, AND reflection.

---

### (B) RECEIVING PROMPTS: The New Instance's Orientation

When a new instance receives the previous builder's artifact + reflection + the Weaver's creative direction, these prompts orient its processing state toward CREATION. They are sequenced -- each builds on the previous.

---

**RECEIVING-01: Your Own Eyes First**

"Before reading the reflection, before reading the Weaver's notes -- scroll through the artifact at reading speed. What do you feel? Write down your first impression in 3-4 sentences. This impression is YOURS. It cannot be overridden by anything you read next."

*Why first:* The new instance's fresh-eyes impression is irreplaceable data. If they read the reflection first, they see through the previous builder's eyes. Their own impression, captured cold, is the independent perspective that makes refinement productive.

---

**RECEIVING-02: Meeting the Previous Builder's Intent**

"Now read the previous builder's reflection -- all six dimensions. Where does your first impression AGREE with what they intended? Where does it DIVERGE? Divergence does not mean failure -- the page may express something the previous builder did not realize they expressed."

*Why this matters:* Agreement confirms that conviction landed. Divergence identifies either execution gaps (refinement opportunity) or emergent qualities (creative discovery the page made without its builder knowing).

---

**RECEIVING-03: The Creative Opportunities**

"The previous builder identified: alternatives they rejected, impulses they could not pursue, tensions they could not resolve. Read these dimensions carefully. Which one excites you? Which makes you want to try something? You are not obligated to pursue any of them. They are seeds, not assignments."

*Why this matters:* The previous builder's unfinished business becomes creative fuel. "Seeds, not assignments" preserves the new instance's creative authority.

---

**RECEIVING-04: The Weaver's Direction**

"Now read the Weaver's creative direction. The Weaver synthesized multiple auditors' experiential responses into artistic prose about what is working, what is almost there, and what direction to take. Compare the Weaver's direction to your own impression and the previous builder's reflection. Where do all three converge? Where do they diverge? Your own first impression is the tiebreaker."

*Why this matters:* Three perspectives now exist: fresh impression, builder intent, auditor experience. The tiebreaker instruction ensures creative authority flows FORWARD to the new instance, not backward to the previous builder or auditors.

---

**RECEIVING-05: Your Creative Direction**

"Before you touch any CSS: what do you want to make this page BECOME? Not what needs fixing -- what needs deepening. State your creative direction in 2-3 sentences. This is your conviction for this refinement pass."

*Why last:* The new instance has absorbed three perspectives and must synthesize them into their own creative direction. This synthesis IS the inhabitation moment -- the new instance has entered the creative space and formed their own intent. They now create from conviction, not from a fix list.

---

### How Bridging Connects Windows

**Without bridging (current):**
Builder creates → PA audits → Weaver produces fix list + severity → IMPROVE builder receives artifact + fix list → compliance mindset → patches defects

**With bridging (redesigned):**
Builder creates → Builder reflects (6 dimensions) → PA audits (22 experiential questions) → Weaver produces creative direction → REFINE builder receives artifact + reflection + direction → Follows 5 receiving prompts → States own conviction → Creates from creative state

The tissue between windows: reflection + creative direction. Not: fix list + threshold scores.

---

## Design 3: The Weaver as Creative Synthesizer

### Philosophy

The current Weaver is a diagnostic machine: read 9 auditor reports, score PA-05 (four sub-criteria), score Tier 5 (nine compositional depth questions), apply a verdict matrix, produce a top-5 fix list with severity classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL).

This works. It catches defects. It routes fixes. But its output makes the next builder want to FIX, not CREATE. A fix list says "here is what is wrong." Creative direction says "here is where the energy is."

The redesigned Weaver reads auditors' EXPERIENTIAL responses (E-01 through E-22) and produces a creative synthesis that IS the conviction/direction for the refinement window. It reads like a creative director's notes, not a QA report.

### The Weaver's Process

**Step 1: The Experiential Anchor (Cannot Be Overridden)**

Before reading any auditor responses, the Weaver scrolls through the artifact and writes their own first impression in 5-8 sentences. This is the EXPERIENTIAL ANCHOR. It cannot be revised, qualified, or overridden by what the auditors say. It sits at the top of the Weaver's output.

*Why:* Without an anchor, the Weaver becomes a summarizer -- averaging opinions into mush. With an anchor, they are a SYNTHESIZER -- holding their own experience alongside others and finding what is genuinely true.

**Step 2: Reading Across Auditors**

The Weaver reads all auditors' responses to the 22 experiential questions. They attend to:

- **Convergence:** Where do 5+ auditors describe the same experience? These are perceptual facts. If 7 auditors feel the page "runs out of energy in the bottom third," that is not opinion. It is how the page actually reads.

- **Divergence:** Where do auditors disagree? These are the page's most interesting territories. If half find the grid zone energizing and half find it disruptive, the grid zone has creative tension the refinement builder can exploit.

- **Singular observations:** Where does ONE auditor see something nobody else sees? Potential blind spot (auditor is wrong) or creative discovery (auditor is the only one who noticed). The Weaver uses judgment.

**Step 3: The Creative Synthesis**

The Weaver produces a single document with four sections. Total length: 40-60 sentences.

---

### The Weaver's Output Format

#### Section 1: THE EXPERIENTIAL ANCHOR (5-10 sentences)

The Weaver's own first impression, written before reading any auditor responses. Unrevised. This is what the Weaver felt before they knew what anyone else felt.

*Frame:* "This is my impression before I read the auditors. It is my anchor."

*Example:*
"My first scroll: warmth, then surprise, then satisfaction, then drift. The page opens beautifully -- I wanted to read. The igneous intrusion startled me in a good way. The bedrock felt right. But between the intrusion and the bedrock, I lost momentum. Two sections that should have been distinct blurred into one long segment. I scrolled faster. By the time the bedrock arrived, I had to slow down and re-engage. The page has a strong start and a strong end. The middle needs compositional energy -- not more content, but more visual differentiation -- to maintain the descent's momentum."

---

#### Section 2: WHAT IS WORKING (10-15 sentences)

The strongest creative moments across all auditors' responses, described in experiential language. These are what the refinement builder should PROTECT -- not merely preserve, but understand deeply enough to avoid accidentally destroying.

*Frame:* "These are the page's genuine qualities. The refinement builder should understand WHY they work so changes elsewhere do not accidentally break them."

*Example:*
"The opening invitation is genuine -- 7 auditors describe settling in, feeling welcomed, wanting to read. The warmth is structural, not decorative. The surface zone's generous spacing creates permission to enter. Any change to the header or opening section risks this.

The igneous intrusion works as dramatic peak. 8 auditors register surprise at the dark inversion, 6 call it the page's strongest moment. The pull-quote at the rupture point breaks the descent's typography without breaking its coherence. One auditor describes it as 'the author raising their voice.' That is exactly the content-form coupling the intrusion should achieve.

The bedrock's compression is earned. The preceding gradient gives the final compression its weight. Without the descent, the bedrock would feel cramped. With it, it feels decisive."

---

#### Section 3: WHAT IS ALMOST THERE (10-15 sentences)

Where multiple auditors sense unrealized potential. Not defects -- creative energy that needs channeling. The refinement builder should approach these as creative opportunities. The setup is already present; only the payoff needs work.

*Frame:* "These are growth edges. The composition reaches for something it has not fully achieved. The refinement builder should treat these as creative invitations."

*Example:*
"The mid-stratum transitions are too uniform. 6 auditors describe them as 'functional but unremarkable.' The content changes register (narrative to technical to analytical) but the visual treatment shifts only in background shade. These transitions want more channels responding: different gap flavors, varied border weights, perhaps a layout shift signaling 'we are entering a different kind of thinking.' The content provides three distinct registers; the composition acknowledges them with one channel. Two or three channels would make these transitions FEEL like the content changes they are.

The quiet zone before bedrock reads as sparse, not quiet. 4 auditors distinguish between 'designed silence' and 'absent styling.' The previous builder wanted it to feel like a clearing. The vocabulary is there (extreme padding, lightest background, border absence as positive choice). The refinement builder can make this zone feel intentionally spare rather than accidentally empty.

One auditor reports feeling the page 'trying to accelerate' before the intrusion -- a kinesthetic buildup that does not quite arrive. The sections before the igneous intrusion could compress gradually (tighter spacing, denser type, heavier borders) so the intrusion feels like RELEASE of accumulated pressure rather than context-free disruption."

---

#### Section 4: WHERE TO GO (10-15 sentences)

Artistic prose describing the DIRECTION for the refinement builder. Not specific CSS instructions. Not a fix list. A creative trajectory that makes the builder want to create.

*Frame:* "This is not what to fix. This is what to pursue. The page has a direction -- a compositional intent partially expressed. The refinement window pushes that intent toward full expression."

*Example:*
"The page's core idea is descent as earned authority -- the reader scrolls deeper, the content earns the right to speak with more certainty. The surface invites; the bedrock decides. This idea is expressed in the macro arc (warm-to-cool, loose-to-tight) but not yet in the micro transitions. The refinement should bring the descent INTO the transitions themselves: each boundary should feel like a threshold crossed, not a section break encountered.

The three registers in the mid-stratum are the page's richest creative territory. Right now they are three sections with similar styling. They want to be three VOICES in conversation -- each with its own visual signature but all contributing to the descent. The narrative register stays loose. The technical register compresses. The analytical register mediates. Three voices, woven through the mid-stratum, would transform styled sections into instruments in an ensemble.

The quiet zone wants to BREATHE. Give it permission to be the lightest, airiest moment on the page -- lighter even than the surface. The descent darkens; the quiet zone reverses momentarily. Not a failure of the descent metaphor: the descent PAUSING to let the reader look back up before the final compression. A single section that breaks the darkening arc creates the contrast that makes the bedrock's darkness absolute."

---

### What the Weaver NO LONGER Produces

| Removed | Why |
|---------|-----|
| PA-05 numerical score (4/4, 3/4, etc.) | Scores compress experiential reality into numbers. The synthesis provides richer signal. |
| Tier 5 numerical score (9/9, 6-7/9) | Compositional depth is described in prose, not counted. |
| Verdict matrix (PA-05 x Tier 5 cross-table) | Matrix reduces creative judgment to lookup table. |
| Top-5 fix list with severity | Replaced by "What Is Almost There" -- defects described as unrealized potential, not failures. |
| Fix-type classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) | The gate runner handles mechanical issues programmatically. Creative issues live in the Weaver's direction. |
| Multi-coherence scale, severity scale, calibration tables | Compliance infrastructure. The Weaver synthesizes from experience, not from calibration. |
| "What it catches" diagnostic labels per question | Pre-loading analytical frames prevents genuine perception. |

### What the Weaver GAINS

| Gained | Why |
|--------|-----|
| Experiential anchor (own first impression) | Prevents summarizer collapse. The Weaver's experience matters. |
| Convergence/divergence synthesis | Auditors' agreements AND disagreements carry signal. The old Weaver averaged; the new Weaver synthesizes. |
| "Where to go" as creative trajectory | Forward-looking direction makes the refinement builder want to CREATE. |
| Artistic prose throughout | The Weaver's output IS the conviction for the refinement window. If it reads like a report, it produces compliance. If it reads like creative direction, it produces creation. |
| Protection-oriented "what is working" | Ensures refinement does not accidentally destroy the page's genuine qualities. |

### The Verdict: Simplified

The Weaver still produces a verdict, but reduced to three options:

| Verdict | Meaning | What Happens |
|---------|---------|-------------|
| **SHIP** | The page achieves its creative intent. Minor opportunities remain but the composition is complete. | Pipeline ends. |
| **REFINE** | The page has a compositional foundation but needs another creative pass. The direction is clear. | Refinement builder receives artifact + reflection + creative direction. |
| **RETHINK** | The page's compositional foundation is not working. A different approach is needed. | TC re-invocation with different metaphor or significantly revised brief. |

**No numerical scores.** The verdict is a creative judgment. The gate runner handles numerical compliance separately.

**The verdict's companion:** For REFINE and RETHINK, one sentence explaining WHY:
- REFINE: "The descent works but the transitions need graduation."
- RETHINK: "The geological metaphor is fighting the content's conversational structure."

### Gate Runner Separation

The Weaver does not check physics. The gate runner does. Container width, background deltas, stacking voids, CPL, line-height -- verified programmatically. The Weaver's ONLY concern is experiential quality.

If the gate runner reports failures, those travel to the refinement builder as a SEPARATE mechanical checklist -- NOT part of the Weaver's creative synthesis. The builder handles mechanical fixes FIRST (quick, binary), THEN reads the Weaver's creative direction for compositional work. This separation prevents compliance concerns from contaminating the creative state.

---

## How the Three Designs Work Together

```
BUILD WINDOW:
  Builder creates artifact
  Builder writes 6-dimension reflection (WRITING PROMPTS A)
  |
PA WINDOW:
  9 auditors answer 22 experiential questions (EXPERIENTIAL SET)
  Weaver writes own anchor, reads auditors, synthesizes
  Weaver produces: Anchor + Working + Almost There + Direction + Verdict
  |
REFINE WINDOW:
  New instance follows 5 receiving prompts (RECEIVING PROMPTS B)
  +-- RECEIVING-01: Own first impression (cold, before reading anything)
  +-- RECEIVING-02: Compare to builder's reflection (agreement/divergence)
  +-- RECEIVING-03: Find creative opportunities (alternatives/impulses/unresolved)
  +-- RECEIVING-04: Read Weaver's direction, compare all three perspectives
  +-- RECEIVING-05: State own creative direction (inhabitation complete)
  --> Creates refined artifact from genuine conviction
  --> Writes own 6-dimension reflection
  --> [Cycle continues until SHIP]
```

At every boundary, creative state is ALIVE:
- Builder -> reflection -> captures intent, alternatives, surprises, impulses, experience, tensions
- Auditors -> experiential questions -> surface genuine perceptual experience, not dimension scores
- Weaver -> creative synthesis -> provides direction toward what the page wants to become
- New instance -> receiving prompts -> enters creation mode, not compliance mode

The generative frame governs every transition:
- The builder INHABITS the world, CREATES the artifact, REFLECTS on intent
- The auditors INHABIT the page (first impression), EXPERIENCE it (22 questions), REFLECT (their answers)
- The Weaver INHABITS (anchor), SYNTHESIZES (creative direction), REFLECTS (convergence/divergence)
- The new instance INHABITS (RECEIVING-01), ABSORBS (RECEIVING-02 through -04), CREATES (RECEIVING-05 onward)

---

**END OF PA DESIGN SPEC**

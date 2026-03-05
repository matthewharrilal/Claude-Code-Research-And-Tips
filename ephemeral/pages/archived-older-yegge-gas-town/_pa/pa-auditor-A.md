# Perceptual Audit Report -- Auditor A

**Page:** Steve Yegge and Gas Town
**Date:** 2026-02-20
**Screenshots reviewed:** 20/20 (all viewports: 1440px, 1024px, 768px)
**Auditor context:** Zero knowledge of build process, tools, or intent.

---

## PA-01: What's the first thing that bothers you?

**Answer:** YES (something bothers me)
**Severity:** CONDITIONAL

**What I see:** The massive empty void after the footer. At 1440px, the dark footer block (containing source material, closing quote, and provenance) ends roughly 10-15% down the final screenshot, and then the remaining 85%+ of that captured area is pure empty warm cream -- nothing there at all. At 768px, the same pattern repeats: the dark footer ends and then there is a vast empty plain of off-white that extends for what looks like several full viewport heights of nothing.

This is the single most immediately jarring thing. Before I even begin analyzing typography or spatial rhythm, my scroll just... falls off a cliff into emptiness. It feels like the page was supposed to end at the footer but someone left the body height unconstrained. The footer itself is not a footer in the conventional sense -- it sits left-aligned, does not span the full width, and then drops into an abyss.

Secondary bother: The content column at 1440px feels noticeably narrow relative to the viewport. There is a LOT of warm cream on the right side of the page. The content appears to sit in roughly the left 55-60% of the viewport, leaving 40%+ as dead margin on the right. This is not a centered layout with balanced margins -- it reads as left-justified with excessive right-side emptiness.

---

## PA-04: Where does your eye go first? Is that where it SHOULD go?

**Answer:** YES (eye goes where it should)
**Severity:** WOULD-SHIP

**What I see:** At 1440px cold look, my eye goes immediately to the title "Steve Yegge and Gas Town" set in a large white italic serif against the dark header band. This is correct. The title is the largest, highest-contrast element on the first viewport. The warm red/coral small-caps label "KORTAI DEEP EXTRACTION -- LEVEL 7" above it provides a small secondary focal point that the eye reaches second.

The stat bar (Complexity: Level 7, Roles: 8 Specialized, Memory: Beads (225K Go), Daily Cost: $50-200, Wave: 6 (Agent Fleets)) in the lower portion of the dark header creates a natural third read -- a horizontal row of key-value pairs that the eye scans left to right.

Below the header, the section label "SECTION 01 -- THE ARCHITECT" and the italic serif heading "Who is Steve Yegge?" are the next clear read targets. The drop cap "S" at the start of the body text provides a small flourish that guides the eye into the paragraph.

At 768px cold look, the same hierarchy holds. The title is still dominant, the stat bar is still readable (though slightly compressed), and the eye flows downward into the content. The hierarchy is well-preserved across breakpoints.

One note: the subtitle text ("The agent factory architect building team-scale productivity for solo developers. From the world's biggest ant to an ant colony.") is noticeably low-contrast -- light gray on dark charcoal. It is legible but you have to look for it. This is a deliberate subordination choice that works.

---

## PA-05: Would you put your name on this? What would you fix first?

**Answer:** PARTIALLY
**Severity:** CONDITIONAL

### Overall Assessment

This page is solidly competent. It has a clear voice, a considered typographic hierarchy, and a genuine compositional structure with zone-to-zone transitions. I would not be embarrassed by it, but I would not show it off unprompted either. There are specific fixable issues preventing it from reaching "proud to sign" territory.

**What I would fix first:** The catastrophic empty void after the footer. This is a layout bug, not a design choice.

**What I would fix second:** The right-side dead space at 1440px. The content column is too narrow for the viewport, creating a lopsided feel.

**What I would fix third:** The role cards in Zone 2 at 1440px. They sit in a 2-column grid that only occupies the left portion of the available width, with one orphan card ("Crew") sitting alone on the left of the final row. The "Overseer (You)" card below that shifts to a different visual treatment (wider, different background shade). The inconsistency in card sizing and the orphan are noticeable.

### Sub-criteria evaluation:

#### 1. DESIGNED: Does this feel like intentional composition, or assembled components?
**Score: 3/4 -- COMPOSED**

This feels designed, not assembled. Evidence:

- The dark header band with stat bar is a confident opening move. It sets a specific register (technical document with personality) and the italic serif title against the dark ground is a clear aesthetic choice.
- Section transitions are handled with variety. Zone 1 to Zone 2 uses a warm tan transitional strip with italic text ("From the developer who never reads code...") before shifting into a slightly darker background for the factory floor section. Zone 3 to Zone 4 uses another transitional moment before the "Operating Principles" section gains a distinctive left red/coral border.
- The alternation between light cream sections and dark code blocks creates genuine rhythm.
- Callout boxes (ESSENCE, CORE INSIGHT, WARNING, CHALLENGE, TIP, KEY INSIGHT, PREREQUISITES) each have a left-border accent with a colored label, creating a consistent but varied annotation system.
- Drop caps on section-opening paragraphs are a thoughtful typographic gesture.
- The "6 Waves" table and "Memory Model Architecture" table use clean, well-spaced layouts.

What prevents 4/4: The right-side dead space at 1440px undermines spatial confidence. The orphan role card breaks the grid rhythm. The post-footer void is a layout failure. The page reads as "a designer made choices" but also "didn't do a final spatial pass."

#### 2. COHERENT: Does this feel like one designer made it?
**Score: 3.5/4 -- YES, with minor exceptions**

The page maintains a remarkably consistent voice throughout. Evidence:

- Typography is coherent: italic serif for headings, monospaced small-caps for section labels, a readable body serif/sans throughout.
- The color palette is restrained and consistent: warm cream backgrounds, dark charcoal code blocks, coral/red accents for labels and warnings, amber/gold for the border on "ESSENCE" callouts.
- The callout box system (left border + colored label + content) is used uniformly for multiple callout types.
- Tables share a consistent style: light header row with small-caps labels, clean row separators, no heavy borders.
- The stat boxes in Zone 1 (Lines Coded: ~1M, Lines Read: ~0, Beads Size: 225K Go, Annual Spend: ~$80K) use a uniform card treatment with borders.

Minor incoherence: The role cards in Zone 2 use a slightly different warm background with rounded corners and visible borders, while the stat cards in Zone 1 use a different card style (thinner borders, different spacing). The "Overseer (You)" card has yet another treatment (appears wider and with a different background shade). These feel like three related but not identical card dialects. A single designer would likely have unified these.

The failure mode cards in Zone 4 (the troubleshooting section -- "Agent stop making error," "Conflicting commits," etc.) use a two-column grid with a header label and description that is yet another card variant.

#### 3. PROPORTIONATE: Does the spatial balance feel considered?

##### 3a. Horizontal: Content fills 65-80% of viewport? Margins confident, not wasteful?
**Score: 2/4 -- PARTIALLY**

At 1440px, the content column appears to fill roughly 55-60% of the viewport width. This is below the 65-80% target. The left margin is moderate but the right margin is excessive -- the page has a left-leaning asymmetry that reads as "narrow column floating in too-wide a page" rather than "confident asymmetric layout." There is no right-rail content, no sidebar, no pull quotes in the margin -- the right side is just empty.

At 1024px, the proportions improve significantly. The content fills approximately 70-75% of the viewport, which is in the target range. The margins feel balanced.

At 768px, the content fills approximately 80-85% of the viewport, which is appropriate for that breakpoint. The responsive adaptation is well-handled.

The horizontal problem is specifically a 1440px issue.

##### 3b. Vertical: Every third of page has at least one designed moment?
**Score: 3.5/4 -- YES**

Scanning the full page at 1440px in thirds:

- **Top third:** Header band with stat bar (strong designed moment), drop cap opening paragraph, career table, ESSENCE callout with gold border, stat cards (Lines Coded ~1M, Lines Read ~0).
- **Middle third:** The 8-role architecture section with 8 role cards in a grid, the ASCII communication flow diagram on dark background, the memory system section with CHALLENGE callout, "Why Git as Database?" KEY INSIGHT box, Beads commands on dark background, memory model table.
- **Bottom third:** The 6 Waves evolution table, WARNING callout, the operating principles section with its distinctive red left border, code blocks for startup and daily workflow, failure mode cards, token cost table, comparison tables, "The Full Spectrum" comparison table, closing ESSENCE callout, Sources section, dark footer.

Every third has multiple designed moments. The rhythm is strong. The transitions between zones (warm tan interstitial strips with italic text) are particularly effective at marking territory changes.

##### 3c. Breathing: Negative space purposeful or abandoned?
**Score: 2.5/4 -- MIXED**

The breathing within the content column is generally good. Sections have generous top padding. The space between the header and the first section label feels deliberate. The callout boxes have comfortable internal padding.

However, the negative space on the right side of the page at 1440px feels abandoned, not purposeful. There is no compositional reason for it. And the post-footer void is definitively abandoned space.

The space between the role cards and between sections in Zones 4-5 feels comfortable -- not too tight, not too loose. The transitional italic text strips ("From the developer who never reads code...") provide a nice breathing pause between zones.

#### 4. POLISHED: Execution quality high? Footer present? Transitions typed?
**Score: 2.5/4 -- PARTIALLY**

**Footer:** Present but problematic. There is a dark footer block containing Source Material, Closing quote ("Build a colony of coding agents, not the world's largest ant"), and Provenance information. However, it does not span the full page width -- it appears to match the content column width, sitting left-aligned with that same excessive right margin. And the void after it is a polish failure.

**Transitions:** The zone-to-zone transitions are well-handled. The warm tan interstitial strips are a good device. The shift from light backgrounds to the red-bordered "Operating Principles" section is effective. The alternation between light content zones and dark code block zones creates a clear rhythm.

**Typography:** Generally well-executed. The italic serif headings have good scale differentiation. The small-caps section labels are crisp. Body text has comfortable line height. Drop caps are a nice touch.

**Detail issues:**
- The orphan "Crew" card in the role grid (sitting alone in a row that could fit two cards) is a polish gap.
- The "Overseer (You)" card has different proportions than the other role cards.
- At 768px, the role cards stack to single-column nicely, but the comparison tables in Zone 5 ("The Full Spectrum") become harder to read as the columns compress.
- The navigation bar visible at 768px cold look shows text labels ("Overview," "Architecture," "Build It," "Decide," "Appendices") that are quite small but functional.

### PA-05 Summary Score: 2.75/4 -- COMPOSED but spatially flawed

---

## PA-18: Do all the grays/neutrals feel like the same family?

**Answer:** YES
**Severity:** WOULD-SHIP

**What I see:** The neutral palette is cohesive throughout. I can identify a consistent family:

1. **Dark charcoal/near-black:** Used for the header band, code blocks, and footer. These all share the same dark tone -- not pure black, but a warm dark gray-brown that feels related to the cream palette.

2. **Warm cream/off-white:** The primary background color. This is consistent across all light sections -- Zone 1, Zone 3, Zone 5 all share the same warm cream.

3. **Slightly warmer tan:** Used for the transitional strips between zones and for the callout box backgrounds (ESSENCE, CORE INSIGHT, WARNING, etc.). This is perceptibly different from the main cream -- slightly darker, slightly warmer -- and reads as a deliberate shift.

4. **Medium warm gray:** Used for the table header labels (COMPANY, ROLE, RELEVANCE) and for secondary text like the "Model: Opus (complex coordination)" notes under role cards. This sits comfortably between the dark body text and the lighter backgrounds.

5. **Body text:** A soft dark gray, not pure black, that is comfortable against the cream backgrounds.

All of these feel like they come from the same warm-toned family. There are no cool grays intruding. The code blocks use a warm charcoal that relates to the header, not a cool blue-gray that would feel foreign. The table borders and divider lines use a warm tan that matches the palette.

The only slight tension I notice is that some of the small-caps labels (SECTION 01 -- THE ARCHITECT) appear in a slightly cooler gray than the body text, but this is very subtle and may just be the smaller size creating a perception of lighter weight.

---

## PA-19: Is there any element that feels like it's from a different website?

**Answer:** PARTIALLY
**Severity:** CONDITIONAL

**What I see:** Most elements feel cohesive. The page has a strong identity -- warm, technical, editorial. However, two elements create mild friction:

1. **The ASCII communication flow diagram** (in the dark code block in Zone 2): This is a monospaced ASCII art diagram showing the flow from Overseer to Mayor to Refinery to Polecats/Witness to Dogs to Complete. While I appreciate the commitment to showing architecture with text (fitting for a developer-focused page), the ASCII art style feels more "terminal screenshot" than "designed diagram." A page this typographically refined could have presented this as a cleaner structured list or a more deliberately styled text diagram. It reads as "pasted from a README" rather than "designed for this page."

2. **The "Don't Use Gas Town When" red callout:** In Zone 5, there are two callout boxes -- "Use Gas Town When" and "Don't Use Gas Town When." The "Don't Use" box has a reddish/coral background tint and a "DON'T USE GAS TOWN WHEN" label in red. The red background tint feels slightly more aggressive/digital than the rest of the page's warm palette. The "Use Gas Town When" box above it uses the standard warm treatment. The contrast between these two feels like the red was pulled from a UI alert pattern rather than from this page's editorial voice.

Neither of these is severe. The ASCII diagram actually fits the content's developer audience. The red callout is a reasonable semantic choice (danger/warning). But in the context of this particular page's warm, considered aesthetic, both create small moments of "wait, that's different."

---

## PA-20: Describe this page's personality in three words. Does it match intent?

**Answer:** YES
**Severity:** WOULD-SHIP

**Three words: Authoritative. Warm. Technical.**

**Authoritative:** The page speaks with the confidence of someone who has used the system extensively and is documenting it for practitioners. The section structure (The Architect, The Factory Floor, The Memory Layer, The Evolution, The Operating Principles, The Workshop, Troubleshooting, The Decision) reads like a comprehensive reference guide. The stat bar in the header (Complexity: Level 7, Roles: 8 Specialized) immediately establishes a classification framework. The comparison tables ("Gas Town vs Ralph Wiggum," "Gas Town vs CC Mirror," "The Full Spectrum") position Gas Town within a competitive landscape with confidence.

**Warm:** The cream background, the italic serif headings, the drop caps, the editorial voice of the callout boxes ("Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks"), the transitional passages in italic -- all of this creates warmth. This is not a cold technical spec. It is a technical document written by someone with opinions and literary sensibility.

**Technical:** The code blocks, the ASCII diagrams, the terminal commands, the architectural specifics (memory model layers, Beads commands, Go installation), the precise cost breakdowns -- this is genuinely technical content for a technical audience.

**Does it match intent?** The page appears to be a deep extraction/analysis document about Steve Yegge's Gas Town system. The personality matches: it needs to be authoritative enough to serve as reference, warm enough to reflect Yegge's own writing voice (which is famously opinionated and colorful), and technical enough to be useful to the Stage 7+ developers who would actually use Gas Town. The three words align with the content's needs.

---

## PA-45: Is there a single moment on this page that you would show someone as an example of good design?

**Answer:** YES
**Severity:** WOULD-SHIP

**The moment: The header-to-Zone-1 transition sequence.**

Specifically, I would show the sequence from the top of the page through the first section:

1. The dark header band with the coral small-caps classification label, the large italic serif title, the muted subtitle, and the five-column stat bar -- this is a confident, information-dense opening that immediately tells you what this document is and where it sits in a larger system.

2. The generous whitespace below the header before "SECTION 01 -- THE ARCHITECT" appears in monospaced small-caps with a full-width thin rule above it.

3. The italic serif "Who is Steve Yegge?" heading, followed by the decorative drop cap "S" leading into the body text.

4. The career table (Company, Role, Relevance) with its clean, minimal styling.

5. The ESSENCE callout with its amber/gold left border and italic serif quote: "Work becomes fluid, an uncountable that you sling around freely, like slopping shiny fish into wooden barrels at the docks."

This sequence demonstrates:
- Clear visual hierarchy (title > section label > heading > body > table > callout)
- Multiple typographic registers working together (italic serif, monospaced small-caps, body text, decorative drop cap)
- Effective use of contrast (dark header against cream body)
- Purposeful whitespace (the breathing room between header and first section)
- A callout component that elevates a key quote without being garish

If I were showing someone "this is how you open a long technical document," this sequence would serve as a good example.

**Runner-up:** The Zone 4 "Operating Principles" section with its distinctive red/coral left border running the full height of the section. This is an effective use of a border-as-zone-marker that creates a visual shift from the preceding zones without needing a full background color change.

---

## PA-65 (Tier 5): If this page were a piece of music, would it be: (a) a single instrument playing one melody, (b) a choir singing in unison, (c) an ensemble with different parts?

**Answer:** YES -- (c) an ensemble with different parts
**Severity:** WOULD-SHIP

**The instruments I can name:**

1. **The editorial voice (strings/cello):** The body text, the transitional italic passages ("From the developer who never reads code to the system that writes it"), the ESSENCE callouts with their literary quotes. This is the warm, narrative thread that carries the reader through the document. It provides continuity and emotional texture.

2. **The structural framework (percussion/bass):** The section labels in monospaced small-caps ("SECTION 01 -- THE ARCHITECT," "SECTION 02 -- THE FACTORY FLOOR"), the thin horizontal rules between sections, the numbered section progression, the header stat bar. This is the rhythmic scaffolding that organizes the document and tells you where you are. It never draws attention to itself but would be missed if absent.

3. **The data/reference layer (woodwinds/clarinet):** The tables (career table, 6 Waves evolution, memory model architecture, token cost table, comparison tables), the stat cards (Lines Coded: ~1M), the prerequisite lists, the Beads commands. This is precise, structured information that provides the specific details a practitioner needs. It plays counterpoint to the editorial voice -- where the editorial voice is flowing and discursive, this layer is clipped and tabular.

4. **The code/terminal register (brass/trumpet):** The dark code blocks with terminal commands, the ASCII communication flow diagram, the `gt nudge` inline code snippets. These punctuate the document with a completely different visual register -- dark backgrounds, monospaced type, syntax highlighting. They create the strongest visual contrast on the page and function as the "loud" moments in the composition.

5. **The annotation system (harp/pizzicato):** The callout boxes (ESSENCE, CORE INSIGHT, WARNING, CHALLENGE, TIP, KEY INSIGHT, PREREQUISITES) with their colored left borders and label typography. These are brief interjections that comment on the main text, pulling out key ideas or flagging important caveats. They play a supporting role -- ornamenting the main melodic lines without dominating.

These five instruments play genuinely independent parts. The editorial voice carries narrative; the structural framework provides rhythm; the data layer provides precision; the code blocks provide contrast; the annotations provide commentary. They interweave rather than merely alternating.

---

## PA-67 (Tier 5): Does the page feel like it is doing something you have not seen before -- not just well-executed, but inventive?

**Answer:** PARTIALLY
**Severity:** CONDITIONAL

**What I see that approaches novelty:**

The **transitional interstitial passages** between zones are the most distinctive element. These are strips of slightly warmer/darker background with italic text that serve as narrative bridges: "From the developer who never reads code to the system that writes it. The architecture below is what makes team-scale throughput possible for a single human." and "From the theory of waves and memory to the operating principles that make the factory run. What follows is the machinery itself."

These are not section headers. They are not callouts. They are brief editorial passages that contextualize what is about to come by connecting it to what just happened. This device is unusual in technical documentation. Most technical docs either have hard section breaks or just flow continuously. The deliberate use of narrative transitions with a visual shift (background change + italic type) creates a reading experience that has more in common with long-form journalism than with typical dev docs or product pages. It is a structural device that serves both navigational and emotional purposes.

**Why PARTIALLY and not YES:** While the transitional passages are distinctive, the individual components of the page are all familiar patterns executed well: hero header with stats, card grids, tables, code blocks, callout boxes, comparison matrices. The vocabulary is standard; the composition is above-average but not unprecedented. The page's strength is in how reliably it executes across a very long document (this is a genuinely long page with substantial content), not in introducing new visual ideas.

The page does not have a pervading visual metaphor (like a factory floor, despite the content being about one). The "Gas Town" concept is not rendered visually -- it is described textually. A truly inventive version of this page might have found ways to make the architectural metaphor (factory, rigs, workers) visible in the layout structure itself. As it stands, the page is a well-composed editorial layout that tells you about a factory rather than making you feel like you are inside one.

**Specific novel element (partial credit):** The combination of the stat bar in the header (Complexity/Roles/Memory/Daily Cost/Wave) with the section-numbering system and the interstitial transitions creates a document that feels like a "deep extraction" -- a term used in the header classification. The page successfully creates its own document genre: not a blog post, not API docs, not a landing page, but a structured analytical extraction with editorial personality. That genre-creation is mildly inventive, even if the individual building blocks are familiar.

---

## Summary Scorecard

| Question | Answer | Severity |
|----------|--------|----------|
| PA-01 (First bother) | YES -- post-footer void + right-side dead space | CONDITIONAL |
| PA-04 (Eye goes first) | YES -- title in header, correct | WOULD-SHIP |
| PA-05 (Put name on it) | PARTIALLY -- 2.75/4 | CONDITIONAL |
| PA-18 (Gray family) | YES -- warm neutrals cohesive | WOULD-SHIP |
| PA-19 (Different website) | PARTIALLY -- ASCII diagram + red callout minor friction | CONDITIONAL |
| PA-20 (Personality) | YES -- Authoritative, Warm, Technical -- matches intent | WOULD-SHIP |
| PA-45 (Show someone) | YES -- header-to-Zone-1 transition sequence | WOULD-SHIP |
| PA-65 Tier 5 (Musical ensemble) | YES -- 5 instruments named (editorial, structural, data, code, annotation) | WOULD-SHIP |
| PA-67 Tier 5 (Inventive) | PARTIALLY -- interstitial transitions distinctive; overall vocabulary familiar | CONDITIONAL |

## Overall Verdict: CONDITIONAL -- SHIP WITH FIXES

**BLOCKING issues (must fix):**
1. Post-footer void: The massive empty space after the footer is a layout bug that makes the page feel broken. Remove it.
2. Horizontal proportion at 1440px: Content column is too narrow for the viewport. Either widen the content column to fill 65-75% of viewport, or add a meaningful right-rail element (sidebar nav, pull quotes, margin notes) to justify the asymmetry.

**SIGNIFICANT issues (should fix):**
3. Orphan "Crew" role card sitting alone in its row. Either restructure the grid to avoid the orphan or give it a full-width treatment like the "Overseer (You)" card intentionally has.
4. The footer block should either span the full page width (matching the header) or be explicitly styled as a contained element with clear termination.

**MINOR issues (nice to fix):**
5. The ASCII communication flow diagram could be more deliberately styled to match the page's typographic refinement.
6. The red background tint on the "Don't Use Gas Town When" callout is slightly hot relative to the rest of the warm palette.

**What works well and should not be changed:**
- The header design and stat bar
- The typographic hierarchy (section labels, italic serif headings, drop caps, body text)
- The callout/annotation system with colored left borders
- The zone-to-zone transitional passages
- The warm neutral color palette
- The responsive adaptation from 1440px to 768px (proportions actually improve at narrower viewports)
- The overall editorial voice and document structure

This page is a competent, coherent, above-average editorial technical document. It is not a showcase piece -- it lacks the spatial confidence and visual invention that would elevate it to that tier -- but it successfully serves its purpose as a deep extraction document with personality. The fixes needed are mostly structural/spatial rather than aesthetic, which is the easier category to remediate.

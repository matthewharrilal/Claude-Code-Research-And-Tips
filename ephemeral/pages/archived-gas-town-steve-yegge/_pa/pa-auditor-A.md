# Perceptual Audit Report -- Auditor A (Impression + Emotion)

**Page:** Gas Town -- Steve Yegge
**Auditor Role:** A -- Impression + Emotion
**Assigned Questions:** PA-01, PA-03, PA-04, PA-05, PA-18, PA-19, PA-20, PA-45, PA-65, PA-67
**Viewports Reviewed:** 1440px (11 screenshots: cold + 10 scroll), 1024px (cold), 768px (cold)

---

## COLD LOOK PROTOCOL (1440px)

```
COLD LOOK (1440px):
Gut reaction: This feels like a confident, editorial long-form article -- serious, grounded, and purposeful.
Worst thing:  The vertical gap between the dark header and the first zone label feels like wasted opportunity -- warm cream with nothing in it for roughly a quarter of the viewport.
Best thing:   The dark header with red accent type and the metadata row is instantly compelling -- it announces authority and editorial tone without trying too hard.
Ship verdict: YES WITH RESERVATIONS
```

---

## COLD LOOK PROTOCOL (1024px)

```
COLD LOOK (1024px):
Gut reaction: Adapts cleanly -- the header feels proportionate, the zone label and drop cap arrive at a natural scroll point.
Worst thing:  Same header-to-content gap issue as 1440px, possibly more noticeable at this width since less horizontal distraction.
Best thing:   The metadata row stays in a single horizontal line, maintaining the editorial data-card feel.
Ship verdict: YES WITH RESERVATIONS
```

---

## COLD LOOK PROTOCOL (768px)

```
COLD LOOK (768px):
Gut reaction: The metadata stacks vertically into a clean list, which feels deliberate and well-adapted, not squeezed.
Worst thing:  The header block takes up roughly half the first viewport now, making it feel like a lobby rather than a doorway.
Best thing:   Typography still feels confident at this width -- the drop cap works, the body text has comfortable reading width.
Ship verdict: YES WITH RESERVATIONS
```

---

## QUESTION RESPONSES

### PA-01: What is the first thing that bothers you?

**Answer:** PARTIALLY (minor issue)

**Visual evidence:** The transition from the dark header block to the first body content section ("ZONE 1 / SITUATION BRIEF") has a patch of warm cream that feels like an empty vestibule. It is not catastrophic -- roughly 20-25% of one viewport at 1440 -- but it creates a momentary "where did the page go?" sensation after the strong header. Your eye leaves the dark block's red stripe at the bottom and then has to wait for the next visual anchor. The gap is not void-level, but it is the single thing that breaks the otherwise strong first impression.

**Severity:** LOOKS-WRONG

---

### PA-03: Does this feel like one designer made it, or three?

**Answer:** YES -- one designer

**Visual evidence:** The visual dialect is remarkably consistent throughout the full scroll. Every zone transition uses the same pattern: a small-caps zone label in muted warm gray, a thin horizontal rule, then a large italic serif heading. This cadence repeats four times (Zone 1 through Zone 4) and never wavers. The callout blocks share a consistent language: a colored left-edge bar, a small-caps label in accent color, and body text on a slightly shifted background. The dark header and dark footer bookend the page with the same near-black tone. The red accent appears exactly three times with precise purpose: the header breadcrumb, the "HUMAN -- BOSS" card's border, and the "ACTIONABILITY" callout at the end. The code blocks share the same dark treatment. The tables share the same typography hierarchy (small-caps headers, thin dividers). There is zero visual dialect drift from top to bottom. This reads as a single hand working with a disciplined vocabulary.

**Severity:** WOULD-SHIP

---

### PA-04: Where does your eye go first? Is that where it SHOULD go?

**Answer:** YES

**Visual evidence:** At the cold look, my eye goes immediately to "Gas Town" in large italic serif on the dark header. This is correct -- it is the title and the single most important anchor on the page. The hierarchy below it is clean: subtitle in lighter weight, then the metadata row. The red breadcrumb ("KORTAI / ORCHESTRATION / 009") is noticeable but does not compete because it is smaller and positioned above the title as a category marker, not a competing focal point. There is no fight for attention in the first viewport. Everything is subordinate to the title.

On scroll, the large italic section headings ("The Dispatch," "The 8 Stages of Dev Evolution," "Key Concepts & Intel," "Community & Deployment") correctly become the primary focal points of their respective zones. The worker-role card grid is the single strongest visual event mid-page, and it correctly attracts the eye as the densest information cluster.

**Severity:** WOULD-SHIP

---

### PA-05: Would you put your name on this? What would you fix first?

**Sub-criteria evaluation:**

#### 1. DESIGNED (intentional composition or assembled components?): **3.5 / 4**

This feels like intentional composition, not template assembly. The evidence:
- The worker-role card grid uses a deliberate 2+3+3 layout (Mayor gets a wider card than Deacon, the bottom row has three equal cards) that expresses hierarchy through physical size, not just labeling. The "Overseer (You)" card uses a red border -- the ONLY card with a red border -- to signal that the human is different from the AI roles. This is a designed choice.
- The drop cap in Zone 1 is an editorial flourish that signals "this is a dispatch, a document with authorial voice."
- The dark blockquote boxes use a red left-edge marker that echoes the header's red stripe, tying the quote treatment to the page identity.
- The zone transition pattern (label, rule, italic heading) creates a military briefing cadence that matches the content's "dispatch" and "field intelligence" language.
- The numbered list in Zone 4 ("Free Upgrades Coming") uses red numerals that echo the accent without overwhelming.

What prevents a 4: The middle sections (Zone 3, particularly "Beads Integration" and "MCP Agent Mail") feel slightly more text-heavy and less visually composed than Zones 1-2. The visual richness does not sustain its peak intensity throughout.

#### 2. COHERENT (one designer or vocabulary from multiple systems?): **4 / 4**

Outstanding coherence. As described in PA-03, the visual vocabulary is unified and disciplined. The serif italic headings, the small-caps zone labels, the callout system with colored edge bars, the table styling, the code block treatment, the card grid -- all feel like the same visual language applied to different content types. No element feels borrowed from a different system.

#### 3. PROPORTIONATE: **3 / 4**

**3a. Horizontal Proportion:** PASS. The content uses a comfortable amount of the viewport at 1440. It does not feel like a narrow strip, nor does it crash into edges. The card grid extends wider than the text columns, which creates a natural breathing pattern between dense text zones and wider layout zones.

**3b. Vertical Proportion:** PARTIALLY. The top third (header + Zone 1) has strong visual weight with the dark header, the drop cap, and the dark blockquote. The middle third (table + code block + card grid) is the richest section with the most component variety. The bottom third (Zone 3 text sections + Zone 4 community extensions + code block + footer) maintains interest but trails off slightly. The Zone 3 subsections ("Beads Integration," "MCP Agent Mail," "Why Go?") are somewhat monotone in their visual rhythm -- text, then callout, text, then callout. The footer brings back the dark treatment and closes well.

**3c. Breathing Proportion:** PASS. The breathing between sections feels considered. The gap between the header and Zone 1 is slightly generous (noted in PA-01) but not abandoned. The gaps between zone transitions feel like chapter breaks. The gap between the card grid and Zone 3 is a meaningful breath. The callout blocks introduce gentle breathing rhythm within text-heavy zones.

PA-05c verdict: PARTIALLY (3b is the weak dimension -- vertical weight distribution is good but not exceptional, with slight monotony in the bottom-middle area).

#### 4. POLISHED: **3.5 / 4**

The page has a footer (the dark block with "END DISPATCH / 009," links, and tags). No stray artifacts visible. The tables are clean, the code blocks have syntax coloring, the cards align properly. The callout labels use a consistent system of color-coded accent bars (dark red for quote attribution in Zone 1, purple/blue for "DOCTRINE" in Zone 3, green for "ADVANTAGE," amber/orange for "THREAT ASSESSMENT" and "CAUTION," red for "ACTIONABILITY"). The tag row at the bottom of the footer is a nice touch.

What prevents a 4: The gap flagged in PA-01 is a minor polish issue. Also, the community extension cards in Zone 4 (GTGUI, Roughneck, Station) use a blue left bar, which is fine, but they feel slightly repetitive -- three vertically stacked cards of identical structure with no variation. This is a very minor complaint.

**PA-05 Score: (3.5 + 4 + 3 + 3.5) / 4 = 3.5 / 4**

**PA-05 Verdict:** YES WITH RESERVATIONS (the 3.0 on PROPORTIONATE is the reservation -- vertical weight distribution could be strengthened in the middle-bottom area)

**What I would fix first:** Tighten the gap between the header block and Zone 1 content. This is the single highest-impact fix -- it would make the cold look transition from "good" to "excellent."

**Severity:** WOULD-SHIP (with the noted reservation)

---

### PA-18: Do all the grays and neutrals feel like the same family?

**Answer:** YES

**Visual evidence:** The warm cream background is consistent throughout all light sections. The dark sections (header, blockquote boxes, code blocks, footer) all use the same very dark near-black tone. The zone labels and thin divider lines share a consistent warm gray. The metadata labels in the header ("AUTHOR," "DATE," "STAGE REQ," "ENGAGEMENT") use the same muted warm tone as the zone labels in the body. The card backgrounds in the worker-role grid are a slightly warmer off-white against the slightly cooler cream of the main background -- a subtle but consistent family relationship. The table divider lines match the zone divider lines. Nothing feels cold, nothing feels blue-shifted. The entire neutral palette is warm.

**Severity:** WOULD-SHIP

---

### PA-19: Is there any element that feels like it's from a different website?

**Answer:** NO -- no visual intruders detected

**Visual evidence:** Every element on the page speaks the same visual language. The code blocks, while darker, match the header and footer's dark treatment and feel like they belong to the same system. The card grid with its sharp edges and thin borders feels native to the page's angular, editorial identity. The callout blocks with their colored side bars are consistent with each other and with the page's use of color as an accent rather than a fill. The tags at the bottom of the footer use outlined boxes with the same sharp corners as everything else. The inline code snippets (visible in the "Architecture" section where `~/.gt` and `gt` appear) use a subtle background tint that does not break the flow. Nothing looks borrowed, nothing looks like a widget from another system.

**Severity:** WOULD-SHIP

---

### PA-20: Describe this page's personality in three words. Does it match intent?

**Answer:** YES

**Three words:** Authoritative, direct, operational

**Visual evidence:** The page is about a veteran engineer's bold, opinionated tool for orchestrating AI agents. The personality of the design matches perfectly:
- **Authoritative:** The dark header, the serif italic headings, the "dispatch" framing, the military-style zone labels ("FIELD INTELLIGENCE," "OPERATIONAL READINESS") -- all project confidence and experience.
- **Direct:** No decorative flourishes, no gradients, no playful elements. Sharp corners everywhere. The content hits immediately in the first paragraph. The callout boxes are labeled with blunt, functional terms ("DOCTRINE," "THREAT ASSESSMENT," "CAUTION").
- **Operational:** The 8-stage table, the code blocks with actual install commands, the worker-role hierarchy, the deployment orders -- the page feels like a briefing document that expects you to ACT on it, not just read it.

The personality matches the content's intent: Steve Yegge is issuing a dispatch about his factory for coding agents, and the visual treatment makes you feel like you are receiving a field briefing.

**Severity:** WOULD-SHIP

---

### PA-45: Is there a single moment on this page that you would show someone as an example of good design? Can you point to it?

**Answer:** YES

**Visual evidence:** The worker-role card grid (screenshots 03 and 04, approximately mid-scroll). This is a standout design moment for several reasons:

1. **Hierarchical layout through physical proportion:** The Mayor card is wider than the Deacon card on the first row (roughly 2:1 ratio), visually encoding that the Mayor has broader authority. Ranks 3-5 are three equal cards in a row. Ranks 6-7 plus the human "Overseer" form the third row.

2. **The red-bordered "Overseer (You)" card:** This single card breaks the pattern of gray-bordered cards with a red border and a red "HUMAN -- BOSS" label. The red makes it immediately visible as different -- this is not another AI role, this is YOU. The red matches the page's accent color, tying it to the header's identity.

3. **Background differentiation:** The cards sit on a slightly lighter background than the main cream, with visible borders creating containment. The overall effect is a visual map of an organizational structure that you can grasp in seconds.

I would absolutely show this card grid to someone as an example of using layout, proportion, and accent color to communicate hierarchy.

**Severity:** WOULD-SHIP

---

### PA-65: Compositional Voice (Music Analogy)

**Answer:** PARTIALLY -- (b) a choir singing in unison, with moments that approach (c) ensemble

**Visual evidence:** The page has strong consistency -- the zone labels, section headings, callout blocks, and body text all follow a clear cadence. This is fundamentally a choir: every section follows the same structural rhythm, and the visual properties (background tone, typography weight, spacing) shift together at zone boundaries rather than independently.

However, there are moments where independent voices emerge:
- The **color accent system** has its own rhythm independent of the zone structure. Red appears in the header, on the Overseer card, and on the Actionability callout -- these are not zone-aligned, they follow a thematic logic (identity/authority/warning).
- The **callout system** shifts its left-bar color independently of zone changes: dark/red for quotes in Zone 1, purple/blue for doctrine in Zone 3, green for advantages, amber/orange for threats, red for actionability in Zone 4. This color progression creates its own narrative arc separate from the zone rhythm.
- The **component density** varies: Zone 1 is text-heavy with a single blockquote, Zone 2 introduces the table and the card grid (densest section), Zone 3 returns to text with multiple callouts, Zone 4 has the community cards and code block.

These are proto-ensemble qualities, but they do not fully achieve independence. The dominant experience is still unified cadence rather than counterpoint. The callout color system is the closest thing to a second "instrument," but it operates within the same structural beats rather than creating its own rhythm.

**Scoring:** NO -- I select (b) choir in unison. The page is exceptionally coherent but the visual properties shift together rather than independently. The callout color progression is notable but does not constitute a fully independent rhythmic voice.

---

### PA-67: Novelty Beyond Competence

**Answer:** PARTIALLY

**Visual evidence:** The page is well-executed and feels professional, but most of what I see is familiar editorial design language: dark header, serif headings, drop caps, callout boxes, card grids, code blocks. These are all competent applications of known patterns.

The closest thing to novelty is the **worker-role card grid with hierarchical sizing and the single red-bordered "Overseer (You)" card**. The idea of using card physical size to express organizational rank, combined with a single accent-color card to signal "this one is you" -- that combination feels considered in a way that goes beyond template execution. It turns a list of roles into a visual map.

The **callout color system** (dark red, purple/blue, green, amber/orange, red) encoding different information types (quote, doctrine, advantage, threat, actionability) is also thoughtful, though not exactly novel -- it is a well-known pattern (colored labels for category differentiation).

The **"dispatch" framing** with military zone labels is a nice content-form coupling that feels fresh for a tech article, but this is more a content decision than a visual design novelty.

**Scoring:** NO -- The page is well-executed and confident, but I cannot point to a specific visual technique that makes me think "I have not seen this before." The card grid hierarchy is the closest thing, but sized cards expressing hierarchy is a known technique. The execution is excellent; the novelty is not strong enough to earn a YES.

---

## SUMMARY

### Scores

| Question | Answer | Severity |
|----------|--------|----------|
| PA-01 | PARTIALLY (gap between header and Zone 1) | LOOKS-WRONG |
| PA-03 | YES (one designer, unified vocabulary) | WOULD-SHIP |
| PA-04 | YES (eye goes to title first, correct hierarchy) | WOULD-SHIP |
| PA-05 | 3.5/4 (DESIGNED 3.5, COHERENT 4, PROPORTIONATE 3, POLISHED 3.5) | WOULD-SHIP |
| PA-18 | YES (all neutrals in warm family) | WOULD-SHIP |
| PA-19 | NO intruders (everything belongs) | WOULD-SHIP |
| PA-20 | YES (authoritative, direct, operational -- matches content) | WOULD-SHIP |
| PA-45 | YES (worker-role card grid is showcase-worthy) | WOULD-SHIP |
| PA-65 | NO -- choir in unison, not ensemble | N/A (Tier 5) |
| PA-67 | NO -- well-executed but familiar | N/A (Tier 5) |

### Tier 5 Results (my assigned questions)

| Question | Score | Evidence Summary |
|----------|-------|------------------|
| PA-65 | NO | Choir in unison. Properties shift together at zone boundaries. Callout color system is closest to independent voice but operates within same structural beats. |
| PA-67 | NO | Well-executed but not inventive. Card grid hierarchy is closest to novelty but uses known techniques. |

### Top Issues

1. **Header-to-Zone 1 gap** (LOOKS-WRONG): The warm cream gap between the header block's red stripe and the Zone 1 label is slightly too generous, creating a momentary sense of emptiness on first impression.

2. **Middle-section visual monotony** (COULD-BE-BETTER): Zone 3 subsections ("Beads Integration," "MCP Agent Mail," "Why Go?") follow a repeating text-then-callout pattern without enough visual variation to sustain peak interest.

3. **Community extension cards** (COULD-BE-BETTER): Three identical-structure cards stacked vertically in Zone 4 without variation feels slightly monotone.

### Overall Verdict

**YES WITH RESERVATIONS**

This is a confident, editorially strong page with excellent coherence and a clear visual identity. The content is well-served by the "field dispatch" visual metaphor. The worker-role card grid is genuinely good design. The main reservation is that it operates at a "very competent choir" level rather than an "ensemble with independent voices" level -- the visual vocabulary is rich but deployed uniformly. The header gap and mid-page monotony are minor fixable issues.

PA-05 at 3.5/4 means this crosses the designed threshold comfortably. The page would ship.

# Auditor B: Readability + Typography

## 0. Experiential Pass

**Desktop (1440px):** The page opens with a commanding dark header — the large italic serif title "Steve Yegge and Gas Town" is the first thing I see, clearly dominant. Below, the two-column TOC scans easily. Moving down, the perimeter zone has a warm tan feel. The Complexity Ladder's red active rung leaps out. Section 02 (the clearing zone) noticeably lightens — the pull quotes breathe. Then the page dramatically darkens into the floor zone for Section 03, where station cards pack densely in 3-column and 2-column grids with dark header bars. The code blocks inside these stations shrink noticeably — this is where I first feel typographic discomfort. The vault zone lightens for the memory system. The observatory returns to the lightest background for principles. The console zone feels code-heavy but organized. Troubleshooting failure cards echo the station card rhythm. Comparison tables are dense but structured. The closing tag cloud, metadata block, and centered closing quote provide a gentle exhale.

**Tablet (768px):** Multi-column layouts collapse to single columns. Station cards stack vertically, gaining width. The hierarchy diagram roles stack cleanly. Code blocks inside components remain small. The TOC becomes single-column. The paradigm shifts and status grids go full-width. Overall, the responsive restructuring works without visible breakage.

**Mobile (375px):** The page is aggressively compressed. The header title scales down but remains legible. Station cards are narrow — the dark headers with small role numbers and names get tight. Code blocks appear as dark rectangles with notably small text; horizontal scrolling is implied. The reference card code blocks near the bottom of the page show the smallest text on the entire page. The ladder tag ("← You are learning this") disappears. The spectrum diagram loses its left-to-right metaphor entirely when stacked vertically.

---

## Question Responses

### PA-02: "Is any text uncomfortable to read? Point to the worst spot."

**Assessment:** YES — uncomfortable text exists in multiple locations.

**Evidence:**

1. **Station-interior code blocks (desktop, 1440px, Section 03):** Inside each of the 8 station cards, the code blocks use visibly smaller text than surrounding body content. Looking at the station cards in the three-column grid (Town Level roles: Mayor, Deacon, Dogs), the command text inside the dark code rectangles is noticeably tighter and smaller than the list items above them. The characters blend together at the reduced size, especially the inline comments on the right side of commands. [desktop/section-03-stations]

2. **Reference card code blocks (mobile, 375px, Appendix):** Near the bottom of the mobile screenshot, the reference grid code blocks shrink to the smallest text visible anywhere on the page. The "Role Management" reference card shows a dark block where the command text appears as barely-distinguishable light marks. I can make out structural shapes of the code but individual characters become a strain. [mobile/appendix-ref-cards]

3. **Header provenance (all viewports, header):** The two lines at the very bottom of the dark header ("Contributed to: D-FINAL-mental-models.md" and "Last enhanced: 2026-01-18") appear in tiny gray text against the near-black background. These lines are visually receding — I can discern they exist but the actual text content requires deliberate effort to read. [desktop/header-provenance, mobile/header-provenance]

**Worst spot:** The reference card code blocks on mobile — smallest rendered text on the page, inside compressed dark containers.

**Severity:** SIGNIFICANT

---

### PA-08: "Is there any text you have to lean in or squint to read?"

**Assessment:** YES — several squint-level text instances.

**Evidence:**

1. **Station code blocks (desktop, Section 03):** The commands inside station card code blocks (Mayor, Deacon, Dogs, Refinery, Polecat, Witness, Crew) render at a noticeably smaller size than body text. The gray comment text on the right side of each command line is particularly strained — lighter colored text at a smaller size against the dark background. Looking at the Polecat station specifically, the four-line command block has comment annotations that dissolve into the dark background at casual reading distance. [desktop/section-03-polecat-station]

2. **Model badges (desktop and tablet, Section 03):** Each station card has a small bordered badge ("Opus 4.5", "Haiku", "Sonnet") that appears tiny — a bordered rectangle with very small text, followed by a description line in small gray text. On the desktop screenshot, I can make out "OPUS 4.5" but the accompanying description text ("Complex coordination requires top-tier reasoning") is noticeably smaller than body text. [desktop/section-03-model-badges]

3. **Failure card code blocks (all viewports, Section 09):** The troubleshooting section's failure cards contain recovery command blocks that use the same compressed code sizing as station cards. In the Runaway Crew failure card, the recovery commands are small against the dark background. [desktop/section-09-failure-cards]

4. **Reference card code blocks (mobile, Appendix):** The most extreme case — on the mobile viewport, these blocks display the smallest text anywhere on the page. Looking at the bottom section of the mobile screenshot, the dark code rectangles in the reference grid contain text that I cannot confidently read character-by-character from the screenshot pixels alone. [mobile/appendix-ref-cards]

5. **Header provenance lines (all viewports):** Tiny gray mono text against dark header background. I can perceive that text exists but reading the actual content requires deliberate effort. [all viewports/header-bottom]

**Severity:** SIGNIFICANT (station/failure code blocks and model badges affect substantial portions of the page; ref-card mobile text is the most extreme)

---

### PA-29: "In the header area (first viewport), count how many different text styles you see. Are more than three fighting for attention?"

**Assessment:** NO — styles are well-differentiated and hierarchical; they do not fight.

**Evidence:**

At 1440x900, the first viewport shows the dark header and the beginning of the TOC. I count the following distinct text styles in the header area:

1. **Badge** — small text inside a red-bordered rectangle ("Level 7"), uppercase, monospaced
2. **Category labels** — small uppercase monospaced gray text ("Complexity Ladder · Complete Extraction")
3. **Page title** — the largest text visible: italic serif in cream/white ("Steve Yegge and Gas Town")
4. **Epigraph** — medium-weight sans-serif in white, noticeably smaller than the title but larger than everything else
5. **Provenance** — two lines of tiny gray monospaced text at the bottom of the header

If the TOC is partially visible (it likely enters the bottom of the first 900px):
6. **TOC heading** — medium italic serif ("Contents")
7. **TOC number** — small gray monospaced ("00", "01", etc.)
8. **TOC link text** — standard body-sized sans-serif

That totals 5 styles in the header proper, and up to 8 including the TOC.

**However**, these styles are not fighting. Looking at the header in the desktop screenshot, my eye is immediately drawn to the page title — it dominates the space and is the clear first read. The epigraph provides a natural second reading point. The badge is a small accent that adds specificity without competing. The category labels and provenance are clearly background-level — they provide context without demanding attention. The visual hierarchy is strong: Title → Epigraph → Badge → Meta/Provenance. No crowding or competition is visible. [desktop/header-first-viewport]

**Severity:** NONE

---

### PA-55: "Look at 3 adjacent sections. Can you describe how they DIFFER v
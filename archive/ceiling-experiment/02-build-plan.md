# Build Plan: SYSTEM Remote Mac Control — Secure Facility Metaphor

**Agent:** PLANNER (Ceiling Tier)
**Date:** 2026-02-16
**Metaphor:** SECURE FACILITY / CONTROLLED-ACCESS BUILDING
**Content:** 004-system-remote-mac.md (~1300 lines, ~6500 words, MIXED)
**Tier:** CEILING (Addition Test = NO; "safety in the presence of danger" cannot be assembled from components)

---

## CONVICTION STATEMENT

The difference between this build plan and a Middle plan is not more mechanisms. It is that every mechanism is DEMANDED by the facility metaphor, not just compatible with it. The facility has four trust zones. Zones have graduated density. Zone boundaries are checkpoints. Checkpoints encode authorization through visual weight. These are not design decisions -- they are structural consequences of choosing "controlled-access facility" as the organizing metaphor. Remove the facility and the zone backgrounds, the border-weight progression, the checkpoint dividers, and the density gradient all lose their semantic anchor simultaneously.

---

## 1. SECTION MAP

| # | Content Section | Facility Zone | Zone ID | Visual Treatment Summary |
|---|----------------|---------------|---------|--------------------------|
| 0 | Header (title, subtitle, meta) | ROOF / FACILITY SIGN | Z-ROOF | Dark header (#1A1A1A), 3px primary border-bottom. The building's identifying sign. |
| 1 | "You Are Here" + "What This Is" + "Key Features" | EXTERIOR / APPROACH | Z-EXT | Lightest zone: `--color-background` (#FEF9F5). Widest padding (64px). 1px borders only. Open, sparse, the public face. |
| 2 | "Brain/Tunnel/Body Architecture" + "Why This Architecture Matters" | LOBBY / RECEPTION | Z-LOBBY | Subtle deepening: `--color-zone-sparse` (#FEF9F5) to `--color-zone-breathing` (#FAF5ED). 3px structural borders emerge. Architecture diagram = lobby centerpiece. Medium padding (48px). |
| 3a | "Architecture Deep Dive" (Brain, Bridge, Body) | SECURED WING -- Room A | Z-SEC-A | `--color-zone-dense` (#FFFFFF). 4px accent borders on component sub-sections. Code blocks prominent. Padding 32px. Each component (Brain, Bridge, Body) is a distinct "room." |
| 3b | "Installation and Setup" + "Configuration" | SECURED WING -- Room B | Z-SEC-B | Same zone background. Sequential procedural layout. Step-by-step with numbered items. Configuration as tabular "wing directory." Padding 32px. |
| 3c | "Security Considerations" | SECURED WING -- Room C (Vault Antechamber) | Z-SEC-C | HEAVIEST treatment in Secured Wing. Threat tables with 3px header borders. "What SYSTEM Does NOT Protect Against" gets special callout (honesty = trust). Padding 24px (densest in wing). |
| 4a | "Integration Patterns" (Ralph, Gas Town, CC-Mirror, Combinations) | OPERATIONS CENTER -- Main Floor | Z-OPS-A | Deepest warm background: `--color-zone-breathing` (#FAF5ED). 4px borders + primary accent. Each integration = distinct workstation. Combination matrix = operations dashboard. Padding 24px. |
| 4b | "Mental Models" (4 models) | OPERATIONS CENTER -- Strategy Room | Z-OPS-B | Same zone. Slightly more contemplative spacing (32px). Diagrams featured. Marginally lighter treatment than main floor. |
| 4c | "Checkpoints" + "Troubleshooting" | FACILITY-WIDE ACCESS | Z-ALL | Consistent repeating pattern regardless of zone: checkpoint blocks with left green accent (#4A9D6B). Troubleshooting uses collapsible accordion. These are the building's emergency protocols -- accessible from anywhere. |
| 5 | Footer | FOUNDATION / GROUND FLOOR | Z-FOUND | Dark footer (#1A1A1A), 3px primary border-top. Mirrors header. Contains: page title echo, zone summary, provenance line, "built with KortAI design system" attribution. |

---

## 2. MECHANISM TABLE

### Deployed Mechanisms (14 total)

| # | Mechanism | Cat | How the Metaphor DEMANDS It | Page Location | CSS Approach |
|---|-----------|-----|----------------------------|---------------|-------------|
| 1 | Border-Weight Gradient | H | A secure facility has graduated authorization levels. Exterior fences are low (1px -- permeable, public). Lobby walls are structural (3px -- you're inside, but not cleared). Secured wing barriers are maximum security (4px -- authorized access only). The BUILDING demands that border weight encode clearance level, not merely hierarchy. Three distinct weights (1px/3px/4px) map to three authorization thresholds. | Z-EXT: 1px borders. Z-LOBBY: 3px structural borders. Z-SEC: 4px accent borders. Z-OPS: 4px + primary accent color. | Progressive mode: 1px (Z-EXT) -> 3px (Z-LOBBY) -> 4px (Z-SEC/Z-OPS). Left borders on callouts maintain 4px per soul. |
| 4 | Spacing Compression | H | Deeper into a facility, spaces get tighter. The exterior is open lawn. The lobby has room to stand. The secured corridor is narrow. The vault is compact. This is physical architecture: controlled-access buildings literally compress space as security increases. Padding MUST decrease inward because the building does. | Z-EXT: 64px. Z-LOBBY: 48px. Z-SEC: 32px (rooms), 24px (vault antechamber). Z-OPS: 24px (main), 32px (strategy room). | `padding: var(--space-16)` (Z-EXT) -> `var(--space-12)` (Z-LOBBY) -> `var(--space-8)` (Z-SEC) -> `var(--space-6)` (Z-OPS dense). Compression ratio: 24/64 = 37.5% -- just under 40% floor. |
| 5 | Dense/Sparse Alternation | S | Facilities alternate between open spaces (lobbies, atriums, corridors) and dense spaces (server rooms, vaults, equipment bays). This is NOT uniform compression -- it is architectural breathing. Even within the Operations Center, there are dense workstations and open strategy rooms. | Macro: Z-EXT sparse -> Z-LOBBY moderate -> Z-SEC dense -> Z-OPS dense/moderate alternation. Micro: within Z-SEC, installation (moderate) vs security (dense). | Section padding alternates: 64px/48px/32px/24px/32px. Within Z-OPS: 24px (main) / 32px (strategy). Alternation prevents monotonic compression. |
| 7 | Zone Background Differentiation | D | Each trust zone in the facility has a different lighting/ambiance. The exterior is sunlit (warm cream). The lobby has interior lighting (slightly deeper). The secured wing is cooler (white, clinical). The operations center returns to warm (earth-toned, controlled). Zone backgrounds encode WHERE YOU ARE in the facility. | Z-EXT: `#FEF9F5`. Z-LOBBY: `#FEF9F5` -> `#FAF5ED` gradient (entering building). Z-SEC: `#FFFFFF` (clinical secured space). Z-OPS: `#FAF5ED` (warm operations). | Custom zone tokens: `--zone-ext: #FEF9F5`, `--zone-lobby: #FAF5ED`, `--zone-sec: #FFFFFF`, `--zone-ops: #FAF5ED`. Backgrounds applied to section wrappers. |
| 2 | 2-Zone Component DNA | C | Facility signage and control panels follow a universal pattern: a label plate (department name, room number) above a content panel (instructions, controls). Every callout, info box, and feature card in the content maps to this facility signage pattern. The 2-zone structure IS how buildings communicate. | All callouts (info, tip, gotcha, essence), feature cards, checkpoint verification blocks. | `.callout__label` (sparse: uppercase, mono, 12px, 0.1em tracking) + `.callout__body` (dense: body font, 16px, 1.7 line-height). 4px left accent border per soul. |
| 9 | Confidence/Priority Encoding via Color | C | Different facility zones use different color coding for their signage. Information signs are blue. Safety exits are green. Hazard warnings are red. Challenge/advanced areas are purple. This color-coding is universal in controlled-access buildings. | Info callouts: `--accent-blue`. Tip callouts: `--accent-green`. Gotcha/security callouts: `--accent-coral` or `--color-primary`. Essence callouts: `--accent-amber`. Challenge callouts: `--accent-purple`. | Standard 5-color semantic palette. Security section uses `--color-primary` (#E83025) for maximum alert authority. |
| 10 | Border-Left Semantic Signal | C | The 4px left border is the facility's universal "attention strip." Every sign, panel, and notice board in a real facility uses a colored edge strip to signal category. | All callout components. Feature highlights. Checkpoint verification blocks. | `border-left: 4px solid var(--accent-color)`. Never 2px. Never 3px for callouts (3px reserved for structural zone borders). |
| 13 | Dark Header + 3px Primary Border | N | The header is the facility's identifying sign -- the placard above the entrance visible from the street. Dark background (authoritative, institutional). 3px red border = the building's brand stripe. Every secure building has an exterior sign. This is not optional. | Top of page. Full-bleed dark header. | `background: var(--color-text)`. `color: var(--color-background)`. `border-bottom: 3px solid var(--color-primary)`. Inner max-width: 960px. |
| 14 | Footer Mirror | N | The footer is the building's foundation/ground floor. It mirrors the roof (header). This symmetry is structural: every building has a top (roof/sign) and a bottom (foundation/entrance). The Middle experiment's #1 defect was a missing footer -- the building had a roof but no ground floor. | Bottom of page. Full-bleed dark footer. | `background: var(--color-text)`. `border-top: 3px solid var(--color-primary)`. Contains: title echo, zone count, provenance, attribution. |
| 17 | Code Block (Dark Background) | C | Code blocks are the facility's EQUIPMENT -- the control panels, server racks, and terminal screens in the secured wing and operations center. They use dark backgrounds because real facility equipment uses dark screens (monitors, terminals). | Z-SEC (prominent -- these are the wing's working tools). Z-OPS (integration code). Some in Z-LOBBY (architecture diagrams). | `background: var(--color-text)`. `border: 3px solid var(--color-border)`. 7 syntax highlighting tokens. `padding: 24px 32px`. |
| 18 | Data Table (Mono Headers) | N | Tables are the facility's DIRECTORIES -- room directories, equipment inventories, personnel lists, threat registers. They use mono headers because facility directories use standardized labeling (all caps, fixed-width, institutional). | Feature tables (Z-EXT). Endpoint tables (Z-SEC-B). Threat/mitigation tables (Z-SEC-C). Combination matrix (Z-OPS-A). | `th`: mono, uppercase, 0.1em tracking, 3px bottom border. `td`: 1px bottom border. No vertical borders (open grid). |
| 11 | Typographic Scale Jumping | H | The facility has a signage hierarchy: building name (huge), wing labels (large), room numbers (medium), equipment labels (small), serial numbers (tiny). This typographic cascade maps to `--type-page` through `--type-meta`. The building DEMANDS a clear sign hierarchy. | H1 at 2.5rem (building name). H2 at 1.625rem (wing/zone labels). H3 at 1.375rem italic (room labels). Body at 1rem. Meta labels at 0.75rem. | `--type-page: 2.5rem`. `--type-section: 1.625rem`. `--type-subsection: 1.375rem`. `--type-body: 1rem`. `--type-meta: 0.75rem`. ~1.5x ratio maintained. |
| 12 | Progressive Disclosure | N | The facility reveals deeper zones only as you gain authorization. You cannot see into the vault from the lobby. The content parallels this: architecture overview before deep dive, feature list before installation details, mental models before troubleshooting. The reading sequence IS the authorization sequence. | Page-level: content builds from exterior to operations center. Section-level: Z-SEC has 3 rooms revealed in sequence. Z-OPS has workstations + strategy room + facility-wide utilities. | DOM order enforces progressive revelation. Collapsible troubleshooting section. Potential: collapsible sub-sections within integration patterns. |
| 3 | Solid Offset Depth | D | The facility's FEATURED elements -- the main architecture diagram (the lobby's floor plan), the combination matrix (the operations dashboard) -- need physical presence. In a building, featured artifacts (maps, dashboards, critical signage) have raised mounting or backboard shadow. Solid offset creates this without violating box-shadow: none. | Architecture diagram (Z-LOBBY centerpiece). Combination matrix (Z-OPS dashboard). Capability ladder (Z-OPS). | `::after` pseudo-element: `top: 4px; left: 4px; background: var(--color-text); z-index: -1`. Applied to 2-3 featured elements maximum. |

### Category Coverage

| Category | Mechanisms | Count |
|----------|-----------|-------|
| **Spatial (S)** | #5 Dense/Sparse Alternation | 1 |
| **Hierarchy (H)** | #1 Border-Weight Gradient, #4 Spacing Compression, #11 Typographic Scale | 3 |
| **Component (C)** | #2 2-Zone DNA, #9 Confidence Color, #10 Border-Left Signal, #17 Code Block | 4 |
| **Depth/Emphasis (D)** | #7 Zone Backgrounds, #3 Solid Offset | 2 |
| **Structure/Nav (N)** | #13 Dark Header, #14 Footer Mirror, #18 Data Table, #12 Progressive Disclosure | 4 |
| **TOTAL** | | **14** |

All 5 categories covered. Per-category minimum exceeded.

### Mechanisms Considered But Rejected

| # | Mechanism | Why Rejected |
|---|-----------|-------------|
| 6 | Width Variation (Channel/Pool) | The facility metaphor does not demand horizontal width changes within zones. Rooms have consistent widths. Width variation would serve content needs (Q&A format) but NOT metaphor needs, making it a Middle-tier addition, not Ceiling. |
| 8 | Scroll Witness / Sticky TOC | The facility COULD have a floor directory sidebar, but this content's length (~1300 lines) and zone structure (4 clear zones) make a sticky TOC functional overhead without metaphor demand. The zone background shifts already communicate position. If content were longer, the facility's "wing directory" would demand this. |
| 15 | Bento Grid | The facility has rooms, not a grid dashboard. Integration patterns are sequential workstations, not a bento grid. Forcing a grid would break the corridor/room spatial metaphor. The combination matrix IS tabular (mechanism #18), not grid-based. |
| 16 | Drop Cap | Buildings don't have drop caps. This is an editorial/manuscript mechanism without facility resonance. Including it would be decorative, not metaphor-demanded. |

---

## 3. REINFORCING PAIRS

### Pair 1: Border-Weight (#1) + Zone Backgrounds (#7) = AUTHORIZATION LEVEL

**Shared semantic dimension:** How deep into the facility you are / what authorization level you have reached.

**CSS channels:**
- Border-weight: 1px (exterior, permeable) -> 3px (lobby, structural) -> 4px (secured, maximum)
- Zone background: #FEF9F5 (exterior, open sunlight) -> #FAF5ED (lobby, interior light) -> #FFFFFF (secured, clinical) -> #FAF5ED (operations, warm controlled)

**Where visible:** At EVERY zone transition. When the reader scrolls from Z-EXT to Z-LOBBY, BOTH the border weight increases (1px -> 3px) AND the background shifts (#FEF9F5 -> #FAF5ED). The two channels say "deeper" simultaneously through different properties.

**Why this is Ceiling, not Middle:** In Middle, border-weight would encode "hierarchy" and zone backgrounds would encode "section breaks" -- two independent content features. Here, both encode the SAME thing (authorization depth) through different CSS channels, creating a reinforcing perception of "I have moved deeper into the facility."

---

### Pair 2: Spacing Compression (#4) + Dense/Sparse Alternation (#5) = ZONE DENSITY GRADIENT

**Shared semantic dimension:** How controlled/compressed the space is within each zone. Exterior = open lawn (spacious). Operations center = compact command room (tight).

**CSS channels:**
- Spacing compression: 64px (exterior) -> 48px (lobby) -> 32px (secured) -> 24px (operations)
- Dense/sparse alternation: sparse (Z-EXT) -> moderate (Z-LOBBY) -> dense (Z-SEC) -> dense-moderate oscillation (Z-OPS)

**Where visible:** The reader FEELS the compression as they scroll. Padding decreases AND section density increases simultaneously. The exterior sections have generous breathing room; the operations center packs information tightly. This parallels real architecture: public lobbies are spacious, command centers are dense.

**Why this is Ceiling, not Middle:** In Middle, spacing compression would encode "content complexity" and alternation would encode "reading rhythm" -- independent concerns. Here, both encode "facility zone density" -- the same semantic through two complementary rhythm channels.

---

### Pair 3 (Bonus): Border-Weight (#1) + Spacing Compression (#4) = SECURITY PERIMETER TIGHTNESS

**Shared semantic dimension:** How secure/restricted the current zone is.

**CSS channels:**
- Border-weight: thicker borders = more restricted zone
- Spacing: tighter padding = more controlled space

**Where visible:** The secured wing (Z-SEC) has BOTH the heaviest borders (4px) AND the tightest padding (32px/24px). The exterior has the lightest borders (1px) AND the most generous padding (64px). Both channels compress together.

---

## 4. TRANSITION TABLE

| Boundary | Between Zones | Type | Treatment | Why This Type |
|----------|---------------|------|-----------|---------------|
| T1 | Z-EXT -> Z-LOBBY | **BRIDGE** | 64px gap + breathing zone background shift (#FEF9F5 -> #FAF5ED) + "Entering the Architecture" contextual text | You are crossing the building threshold. Not a continuation (SMOOTH) but not a major axis shift (BREATHING). The reader needs orientation: "you're now inside." |
| T2 | Z-LOBBY -> Z-SEC-A | **BREATHING** | 80px gap + 3px structural border (full-width, `--color-border`) + background shift to #FFFFFF | The Security Desk. This is the HEAVIEST transition on the page -- passing from semi-trusted to trusted space. The 3px border IS the security checkpoint. |
| T3 | Z-SEC-A -> Z-SEC-B | **SMOOTH** | 48px gap + 1px separator | Moving between rooms within the same wing. The secured wing is one zone; rooms within it shift smoothly without ceremony. |
| T4 | Z-SEC-B -> Z-SEC-C | **SMOOTH** | 48px gap + 1px separator + subtle padding compression (32px -> 24px) | Approaching the vault antechamber within the same wing. Smooth transition but the spacing tightens, signaling increased density. |
| T5 | Z-SEC-C -> Z-OPS-A | **BREATHING** | 80px gap + 3px structural border + primary accent color stripe (4px `--color-primary`) + background shift (#FFFFFF -> #FAF5ED) | The Vault Door. Second-heaviest transition. Passing from trusted space to the COMMAND CENTER. Triple signal: space, border, color. |
| T6 | Z-OPS-A -> Z-OPS-B | **SMOOTH** | 48px gap + 1px separator | Moving from main operations floor to strategy room. Same zone, different function. |
| T7 | Z-OPS-B -> Z-ALL | **BRIDGE** | 64px gap + breathing zone with contextual text: "Verification & Emergency Protocols" + background: `--color-zone-breathing` | Shifting from zone-specific content to facility-wide utilities. A bridge because checkpoints/troubleshooting apply to ALL zones, not just operations. |

**Transition type count:** SMOOTH: 3, BRIDGE: 2, BREATHING: 2 = **3 distinct types** (PASS -- minimum 3 required)

**No two adjacent boundaries use identical treatment:**
- T1 BRIDGE / T2 BREATHING / T3 SMOOTH / T4 SMOOTH with compression / T5 BREATHING / T6 SMOOTH / T7 BRIDGE
- T3 and T4 are both SMOOTH but T4 adds spacing compression, differentiating them.

---

## 5. 4-SCALE FRACTAL TABLE

| Scale | Pattern | CSS Evidence |
|-------|---------|-------------|
| **Navigation** | Header is the building's ROOF SIGN: dark (#1A1A1A) with red brand stripe (3px `--color-primary`). The building is identifiable before you enter. TOC (if present) or zone indicators echo zone progression through background color micro-swatches. | `header { background: var(--color-text); border-bottom: 3px solid var(--color-primary); }`. Navigation links in cream on dark = facility wayfinding. |
| **Page** | The page IS the facility floorplan: exterior (sparse/light) -> lobby (moderate/warm) -> secured wing (dense/clinical) -> operations center (dense/warm). The scroll IS the authorization journey. Four zones, graduated density, checkpoint dividers at zone boundaries. | Zone sections use `.zone-ext`, `.zone-lobby`, `.zone-sec`, `.zone-ops` with distinct backgrounds. Padding compresses: 64px -> 48px -> 32px -> 24px. Border-weight escalates: 1px -> 3px -> 4px. |
| **Section** | Within each zone, sections echo the facility's room structure: title (room sign, serif display), meta label (room number, mono uppercase), content body (room contents, body font). Each section is a self-contained room with its own border treatment matching its zone's authorization level. | Each section: `.section-label` (mono, uppercase, 12px) + `h2/h3` (display serif, zone-appropriate size) + `.section-body` (inter, 1rem, 1.7 line-height). Border-left matches zone weight. |
| **Component** | Individual components (callouts, code blocks, tables) echo the facility's equipment pattern: label plate (sparse zone 1) + content panel (dense zone 2). Even within a code block, comment lines (sparse) alternate with logic lines (dense). | `.callout__label` (12px, mono, uppercase = equipment label plate) + `.callout__body` (16px, inter = equipment content display). Code blocks: `--syntax-comment: #666` (muted = notes on equipment) vs `--syntax-keyword: #E83025` (highlighted = active controls). |

**Fractal coherence test:** At every zoom level, the pattern is GRADUATED CONTAINMENT. Bird's eye: 4 zones with increasing visual weight. Page scroll: sections compress and darken. Individual section: room sign above room contents. Single callout: label plate above content panel. The same "controlled access" pattern repeats at 4 scales.

---

## 6. DESIGNED MOMENTS (5)

### DM-1: The Architecture Diagram (Lobby Centerpiece)

- **WHERE:** Z-LOBBY, "Brain/Tunnel/Body Architecture" section, the ASCII diagram
- **WHICH MECHANISMS:** #3 Solid Offset + #7 Zone Background + #17 Code Block
- **WHAT THE READER SEES:** The architecture diagram is mounted on a backboard (solid offset creating a raised, prominent artifact). It sits on the lobby's warm breathing background (#FAF5ED), making the dark code block (the "building blueprint") the undeniable focal point. The offset creates physical presence -- this is not just code, it is the lobby's MAP.
- **WHY THE METAPHOR DEMANDS THIS:** Every secure facility has a floor plan posted in the lobby. This is THE thing you look at before going deeper. It must command attention. The solid offset says "this is mounted, featured, important" without violating box-shadow: none.

### DM-2: The Security Checkpoint (Z-LOBBY -> Z-SEC Transition)

- **WHERE:** Boundary between Z-LOBBY and Z-SEC (T2 transition)
- **WHICH MECHANISMS:** #1 Border-Weight (3px structural) + #7 Zone Background shift (#FAF5ED -> #FFFFFF) + #4 Spacing Compression (48px -> 32px)
- **WHAT THE READER SEES:** A full-width 3px structural border, followed by a noticeable background color shift to clinical white, and immediately tighter spacing. Three channels change simultaneously. The reader FEELS passage through a threshold -- they have been "verified."
- **WHY THE METAPHOR DEMANDS THIS:** This is the Security Desk. In a real facility, passing the security desk is an EVENT: the lighting changes (fluorescent corridors), the spacing changes (narrower), the walls change (heavier materials). All three channels must shift together because that is what real security thresholds do.

### DM-3: The Threat Register (Security Section Feature)

- **WHERE:** Z-SEC-C, "Security Considerations" section, threat/mitigation table + "What SYSTEM Does NOT Protect Against" subsection
- **WHICH MECHANISMS:** #18 Data Table + #1 Border-Weight (heaviest in wing: 4px + primary accent) + #10 Border-Left Signal (red accent on gotcha callout)
- **WHAT THE READER SEES:** The threat table has the heaviest table headers (3px, mono, uppercase) in the entire page. The "What SYSTEM Does NOT Protect Against" subsection uses a red-bordered gotcha callout (4px `--color-primary` left border). This is the DENSEST, HEAVIEST section in the secured wing.
- **WHY THE METAPHOR DEMANDS THIS:** This is the security office -- the room where trust decisions are made. In a real facility, the security office has the heaviest signage, the most warnings, the most documentation. Honest disclosure of what ISN'T protected builds more trust than overclaiming. The heavy visual treatment says "we take this seriously."

### DM-4: The Operations Dashboard (Combination Matrix)

- **WHERE:** Z-OPS-A, "Integration Patterns" section, the combination matrix table
- **WHICH MECHANISMS:** #3 Solid Offset + #18 Data Table + #7 Zone Background (warm #FAF5ED)
- **WHAT THE READER SEES:** The combination matrix sits on a warm background with solid offset mounting, using heavy table headers. It is the Operations Center's DASHBOARD -- the master view of all integration possibilities. The solid offset creates command-center gravitas.
- **WHY THE METAPHOR DEMANDS THIS:** The operations center's purpose is COMMAND AND CONTROL. The combination matrix shows all possible integrations. In a real command center, the main display is the most prominent artifact. The solid offset + warm background says "this is the mission-critical display."

### DM-5: The Vault Door (Z-SEC -> Z-OPS Transition)

- **WHERE:** Boundary between Z-SEC-C and Z-OPS-A (T5 transition)
- **WHICH MECHANISMS:** #1 Border-Weight (4px primary accent) + #7 Zone Background shift (#FFFFFF -> #FAF5ED) + #4 Spacing Compression (24px maintained)
- **WHAT THE READER SEES:** A 4px primary-red accent stripe (full-width), followed by a shift from clinical white back to warm earth-tone. This is the only transition with a PRIMARY RED stripe -- it says "this is the highest-authorization threshold." The reader has entered the command center.
- **WHY THE METAPHOR DEMANDS THIS:** The vault door is the most dramatic boundary in any facility. It IS the point of maximum authorization. The red stripe (primary brand color) = maximum emphasis. The warm return (#FAF5ED) after the clinical secured wing (#FFFFFF) signals that the operations center is WHERE THE WORK HAPPENS -- warm, human, purposeful.

---

## 7. BUILDER BLOCKS

### Zone Background Variables

```css
:root {
  /* Facility Zone Backgrounds */
  --zone-ext: var(--color-background);      /* #FEF9F5 - exterior sunlight */
  --zone-lobby: var(--color-zone-breathing); /* #FAF5ED - interior warm light */
  --zone-sec: var(--color-zone-dense);       /* #FFFFFF - clinical secured */
  --zone-ops: var(--color-zone-breathing);   /* #FAF5ED - warm operations */
  --zone-all: var(--color-zone-sparse);      /* #FEF9F5 - facility-wide */
}

.zone-ext   { background: var(--zone-ext); }
.zone-lobby { background: var(--zone-lobby); }
.zone-sec   { background: var(--zone-sec); }
.zone-ops   { background: var(--zone-ops); }
.zone-all   { background: var(--zone-all); }
```

### Border-Weight Progression

```css
/* Zone authorization encoding via border weight */
.zone-ext .section-border    { border-left: 1px solid var(--color-border); }
.zone-lobby .section-border  { border-left: 3px solid var(--color-border); }
.zone-sec .section-border    { border-left: 4px solid var(--color-text); }
.zone-ops .section-border    { border-left: 4px solid var(--color-primary); }
```

### Spacing Scale Per Zone

```css
/* Zone padding -- compression encodes security depth */
.zone-ext   { padding: var(--space-16) var(--space-8); }  /* 64px 32px */
.zone-lobby { padding: var(--space-12) var(--space-8); }  /* 48px 32px */
.zone-sec   { padding: var(--space-8) var(--space-6); }   /* 32px 24px */
.zone-ops   { padding: var(--space-6) var(--space-6); }   /* 24px 24px */

/* Vault antechamber (Z-SEC-C) -- densest in secured wing */
.zone-sec-vault { padding: var(--space-6) var(--space-6); }  /* 24px 24px */
```

### Checkpoint Divider Treatments

```css
/* T2: Security Desk (BREATHING -- heaviest checkpoint) */
.checkpoint-security-desk {
  margin: var(--space-20) 0;  /* 80px */
  border-top: 3px solid var(--color-border);
  padding-top: var(--space-8);
}

/* T5: Vault Door (BREATHING -- primary accent stripe) */
.checkpoint-vault-door {
  margin: var(--space-20) 0;  /* 80px */
  border-top: 4px solid var(--color-primary);
  padding-top: var(--space-8);
}

/* T1, T7: Entry/Utility bridges */
.checkpoint-bridge {
  margin: var(--space-16) 0;  /* 64px */
  background: var(--color-zone-breathing);
  padding: var(--space-8);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

/* T3, T4, T6: Room transitions (SMOOTH) */
.checkpoint-smooth {
  margin: var(--space-12) 0;  /* 48px */
  border-top: 1px solid var(--color-border);
}
```

### Heading Spacing (1.5:1 Ratio Enforced)

```css
h2 {
  font-family: var(--font-display);
  font-size: var(--type-section);  /* 1.625rem */
  font-weight: 400;
  margin-top: var(--space-12);     /* 48px */
  margin-bottom: var(--space-6);   /* 24px */
  /* Ratio: 48/24 = 2.0 >= 1.5 PASS */
}

h3 {
  font-family: var(--font-display);
  font-size: var(--type-subsection);  /* 1.375rem */
  font-style: italic;  /* MANDATORY per prohibitions.md #17 */
  font-weight: 400;
  margin-top: var(--space-8);      /* 32px */
  margin-bottom: var(--space-4);   /* 16px */
  /* Ratio: 32/16 = 2.0 >= 1.5 PASS */
}
```

### Container Width

```css
.page-container {
  max-width: 960px;  /* NON-NEGOTIABLE: 940-960px */
  margin: 0 auto;
  padding: 0 var(--space-8);  /* 32px each side */
  /* Content width: 960 - 64 = 896px */
  /* CPL at 18px body: 896/18/0.6 = 82.9 -- slightly high */
  /* ADJUST: increase to 40px padding each side */
}

/* REVISED for CPL compliance: */
.page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-10);  /* 40px each side */
  /* Content width: 960 - 80 = 880px */
  /* CPL at 18px body: 880/18/0.6 = 81.5 -- borderline */
  /* CPL at 16px body: 880/16/0.6 = 91.7 -- too high */
  /* SOLUTION: Use 18px body font + 48px padding */
}

/* FINAL: */
.page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-12);  /* 48px each side */
  /* Content width: 960 - 96 = 864px */
  /* CPL at 18px body: 864/18/0.6 = 80.0 -- exact boundary PASS */
}

body {
  font-size: 18px;  /* Upgraded from 16px for CPL compliance */
  line-height: 1.7;
}
```

### Featured Element (Solid Offset)

```css
.featured-artifact {
  position: relative;
}

.featured-artifact::after {
  content: '';
  position: absolute;
  top: var(--offset-y);   /* 4px */
  left: var(--offset-x);  /* 4px */
  width: 100%;
  height: 100%;
  background: var(--offset-color);  /* #1A1A1A */
  z-index: -1;
}
```

---

## 8. STRUCTURAL OBLIGATION TABLE

| Content Section | Zone | Structural Obligation | CSS/Layout Consequence |
|----------------|------|----------------------|----------------------|
| Header | Z-ROOF | MUST identify the facility before entry. Building sign visible from the street. | Dark background. 3px primary border-bottom. Title in display serif (Instrument Serif). Subtitle in body sans (Inter). Full-bleed. |
| "You Are Here" + "What This Is" + Key Features | Z-EXT | MUST be the most OPEN, LEAST DENSE zone. Public face of the facility. No heavy borders. Maximum breathing room. The reader hasn't entered yet. | `background: #FEF9F5`. Padding: 64px vertical. Only 1px borders. Feature table: open grid, no vertical bars. Drop-cap on opening paragraph -- NO, rejected (not metaphor-demanded). Instead, open serif heading. |
| "Brain/Tunnel/Body" + "Why This Architecture Matters" | Z-LOBBY | MUST introduce the facility's security logic. The reader is learning the building layout. Architecture diagram is the lobby centerpiece. 3px structural borders emerge -- you're INSIDE now. | `background: #FAF5ED`. Padding: 48px vertical. 3px borders on structural containers. ASCII diagram gets solid-offset treatment (featured artifact). Medium density. |
| "Architecture Deep Dive" (Brain, Bridge, Body) | Z-SEC-A | MUST feel like entering specific ROOMS. Each component is a room. 4px accent borders. Code blocks are the room's equipment. | `background: #FFFFFF`. Padding: 32px. Each component sub-section gets 4px left border. Heavy code block presence. Component-per-room layout. |
| "Installation and Setup" + "Configuration" | Z-SEC-B | MUST feel like the facility's OPERATIONS MANUAL. Sequential. Precise. Checkpoint verification at each step. | `background: #FFFFFF`. Padding: 32px. Numbered steps. Code blocks for commands. Configuration as tabular wing directory (data table). |
| "Security Considerations" | Z-SEC-C | MUST be the HEAVIEST section in the Secured Wing. This is the security office. Threat tables = risk register. "What SYSTEM Does NOT Protect Against" = honest disclosure (builds trust). | `background: #FFFFFF`. Padding: 24px (densest in wing). Heaviest table treatments. Red-accent gotcha callout for "Does NOT Protect Against." Maximum border weight within the wing. |
| "Integration Patterns" | Z-OPS-A | MUST feel like the COMMAND CENTER. Each integration is a workstation. Densest treatment. Combination matrix is the operations dashboard (solid offset). | `background: #FAF5ED`. Padding: 24px. 4px + primary accent borders. Solid offset on combination matrix. Each integration pattern as a distinct bordered sub-zone. |
| "Mental Models" | Z-OPS-B | MUST feel like the strategy room. Abstract, contemplative. Slightly more spacious than the main operations floor. Diagrams are strategy displays. | `background: #FAF5ED`. Padding: 32px. Featured diagrams. Breathing room for abstract concepts. |
| "Checkpoints" + "Troubleshooting" | Z-ALL | MUST be accessible from ANY zone. Not locked behind authorization. Checkpoints = verification stations. Troubleshooting = emergency protocols. Consistent visual pattern regardless of surrounding zone. | `background: #FEF9F5`. Green accent (#4A9D6B) on checkpoint blocks. Collapsible accordion for troubleshooting. Each checkpoint is self-contained verification block. |
| Footer | Z-FOUND | MUST mirror the header. Building's foundation. Contains: page title echo, zone summary ("4 trust zones, 14 mechanisms"), provenance. EXPLICITLY specified because the Middle experiment's missing footer was the #1 defect. | Dark background (#1A1A1A). 3px primary border-top. Inner padding: 48px 32px. Content: title, zone summary, build attribution. Full-bleed. |

---

## 9. LANDMARK LIST

### Header
- **Element:** `<header>` (full-bleed)
- **Content:** Page title "SYSTEM: Remote Mac Control", subtitle "Brain/Tunnel/Body Architecture for AI-Powered Mac Orchestration", meta line (version, date, stars)
- **Visual:** Dark background, cream text, 3px red bottom border
- **CSS:** `background: var(--color-text); color: var(--color-background); border-bottom: 3px solid var(--color-primary); padding: var(--space-16) var(--space-8);`

### Section: You Are Here (Z-EXT)
- **Element:** `.zone-ext > .section`
- **Content:** Context orientation box, "What This Is" description, "Key Features" table

### Section: Architecture Overview (Z-LOBBY)
- **Element:** `.zone-lobby > .section`
- **Content:** Brain/Tunnel/Body ASCII diagram (featured artifact), architectural explanation, "Why This Architecture Matters"

### Section: Architecture Deep Dive (Z-SEC-A)
- **Element:** `.zone-sec > .section-room`
- **Content:** Brain details, Bridge details, Body/Tools details -- each as a separate sub-section

### Section: Installation & Setup (Z-SEC-B)
- **Element:** `.zone-sec > .section-room`
- **Content:** Desktop app setup, CLI setup, manual component setup, configuration tables

### Section: Security (Z-SEC-C)
- **Element:** `.zone-sec > .section-room.vault-antechamber`
- **Content:** Security layers, threat model, hardening recommendations, "What SYSTEM Does NOT Protect Against"

### Section: Integration Patterns (Z-OPS-A)
- **Element:** `.zone-ops > .section`
- **Content:** Ralph integration, Gas Town integration, CC-Mirror integration, Combination matrix (featured artifact)

### Section: Mental Models (Z-OPS-B)
- **Element:** `.zone-ops > .section`
- **Content:** 4 mental models (The Butler, The Tunnel, The Fleet, The Factory)

### Section: Checkpoints & Troubleshooting (Z-ALL)
- **Element:** `.zone-all > .section`
- **Content:** 5 checkpoint verification blocks, collapsible troubleshooting accordion

### Footer
- **Element:** `<footer>` (full-bleed)
- **Content:**
  - Page title echo: "SYSTEM: Remote Mac Control"
  - Zone summary: "4 trust zones | 14 mechanisms | Ceiling tier"
  - Provenance: "Built with KortAI Design System"
  - Date/version meta
- **Visual:** Dark background (#1A1A1A), cream text, 3px red top border
- **CSS:** `background: var(--color-text); color: var(--color-background); border-top: 3px solid var(--color-primary); padding: var(--space-12) var(--space-8);`

---

## 10. PURPOSE-BUILT COMPOSITE COMPONENTS (3)

### Component 1: Trust Zone Indicator

**What it is:** A subtle zone label that appears at the start of each major zone section, identifying which facility zone the reader has entered.

**Why the facility demands it:** Real buildings have zone signage: "AUTHORIZED PERSONNEL ONLY", "VISITOR AREA", "OPERATIONS CENTER." The content needs position awareness without being heavy-handed.

**HTML/CSS:**
```html
<div class="zone-indicator">
  <span class="zone-indicator__level">ZONE 2 OF 4</span>
  <span class="zone-indicator__name">SECURED WING</span>
</div>
```

```css
.zone-indicator {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);  /* 16px */
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-8);  /* 32px */
}

.zone-indicator__level {
  font-family: var(--font-mono);
  font-size: var(--type-meta);  /* 0.75rem */
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-text-secondary);
}

.zone-indicator__name {
  font-family: var(--font-display);
  font-size: var(--type-subsection);  /* 1.375rem */
  font-style: italic;
  color: var(--color-text);
}
```

**Tier test:** Removing the facility context makes "ZONE 2 OF 4" arbitrary. This is a Tier 3 component.

**Builder Warning:** These should be SUBTLE -- facility zone signage, not screaming banners. Use `--color-text-secondary` for the level number, not primary red. The zone name uses the standard h3 italic treatment to stay within the typographic system.

---

### Component 2: Checkpoint Verification Block

**What it is:** A self-contained verification station used in the "Checkpoints" section. Each checkpoint has a name, a command to run, an expected output, and a pass/fail indicator.

**Why the facility demands it:** Secure facilities have verification stations at critical junctures (badge scanners, biometric readers, authentication terminals). The content's "Checkpoints" section literally IS a series of verification stations. This component gives each checkpoint a consistent, recognizable treatment.

**HTML/CSS:**
```html
<div class="verification-station">
  <div class="verification-station__header">
    <span class="verification-station__number">CHECK 03</span>
    <span class="verification-station__name">Execution Verification</span>
  </div>
  <div class="verification-station__command">
    <pre><code>curl -X POST http://localhost:3000/execute ...</code></pre>
  </div>
  <div class="verification-station__expected">
    Expected: <code>{"status": "ok", "result": "..."}</code>
  </div>
</div>
```

```css
.verification-station {
  border-left: 4px solid var(--accent-green);
  padding: var(--space-6);  /* 24px */
  margin: var(--space-8) 0;  /* 32px */
  background: var(--bg-tip);  /* #F5FAF5 */
}

.verification-station__header {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.verification-station__number {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-green);
  font-weight: 600;
}

.verification-station__name {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
}

.verification-station__command pre {
  margin-top: var(--space-4);
  /* Inherits standard code block treatment */
}

.verification-station__expected {
  font-family: var(--font-body);
  font-size: var(--type-body);
  color: var(--color-text-secondary);
  margin-top: var(--space-3);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-subtle);
}
```

**Tier test:** "Verification station" is facility-specific. Outside the metaphor, this is just a "test block." Tier 3.

---

### Component 3: Integration Workstation

**What it is:** A contained sub-zone for each integration pattern (Ralph, Gas Town, CC-Mirror). Each workstation has: a title bar, an architecture diagram, a configuration block, and a "when to use" summary.

**Why the facility demands it:** In an operations center, each workstation is a dedicated console for a specific function. Integration patterns ARE the workstations. Each needs its own visual container to communicate "this is one station among several."

**HTML/CSS:**
```html
<div class="workstation">
  <div class="workstation__titlebar">
    <span class="workstation__id">WS-01</span>
    <span class="workstation__name">Ralph Integration</span>
  </div>
  <div class="workstation__body">
    <!-- Architecture diagram, configuration, usage summary -->
  </div>
</div>
```

```css
.workstation {
  border: 3px solid var(--color-border);
  margin: var(--space-8) 0;  /* 32px */
}

.workstation__titlebar {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-zone-breathing);
}

.workstation__id {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
}

.workstation__name {
  font-family: var(--font-display);
  font-size: var(--type-subsection);
  font-style: italic;
}

.workstation__body {
  padding: var(--space-6);  /* 24px */
}
```

**Tier test:** "Workstation" is facility-specific. Without the operations center context, this is just a "card." Tier 3.

---

## 11. TOKEN COMPLIANCE STRATEGY

**Target:** >= 80% `var()` usage

### Token Mapping Per Zone

| Zone | Background | Text | Border | Padding | Font |
|------|-----------|------|--------|---------|------|
| Z-ROOF | `var(--color-text)` | `var(--color-background)` | `var(--color-primary)` 3px | `var(--space-16) var(--space-8)` | `var(--font-display)`, `var(--font-body)` |
| Z-EXT | `var(--color-background)` | `var(--color-text)` | `var(--color-border)` 1px | `var(--space-16) var(--space-12)` | `var(--font-display)`, `var(--font-body)` |
| Z-LOBBY | `var(--color-zone-breathing)` | `var(--color-text)` | `var(--color-border)` 3px | `var(--space-12) var(--space-12)` | `var(--font-display)`, `var(--font-body)` |
| Z-SEC | `var(--color-zone-dense)` | `var(--color-text)` | `var(--color-text)` 4px | `var(--space-8) var(--space-6)` | All 3 fonts |
| Z-OPS | `var(--color-zone-breathing)` | `var(--color-text)` | `var(--color-primary)` 4px | `var(--space-6) var(--space-6)` | All 3 fonts |
| Z-FOUND | `var(--color-text)` | `var(--color-background)` | `var(--color-primary)` 3px | `var(--space-12) var(--space-8)` | `var(--font-body)`, `var(--font-mono)` |

### Approved Raw Value Exceptions

| Raw Value | Where | Why Not a Token |
|-----------|-------|----------------|
| `1px` border-width | Separator borders, table cells | Token is `--border-micro: 1px` -- USE TOKEN where possible |
| `3px` border-width | Structural borders, header/footer | Token is `--border-accent: 3px` -- USE TOKEN |
| `4px` border-width | Accent borders, callouts | Token is `--border-structural: 4px` -- USE TOKEN |
| `0.1em` letter-spacing | Mono labels | No token exists; sub-pixel typographic value |
| `0.15em` letter-spacing | Zone indicator | No token exists; typographic micro-value |
| `0.6` (CPL divisor) | Calculation only | Not a CSS property |
| `1.7` line-height | Body text | Unitless line-height (best practice) |
| `1.5` line-height | Code blocks | Unitless line-height |
| `0.8` line-height | Drop cap (if used) | N/A -- drop cap rejected |
| `z-index: -1` | Solid offset pseudo-element | Stacking context, not design token |
| `100%` width/height | Solid offset | Layout value |
| `calc()` expressions | CPL verification, responsive | Computed values |

**Estimated token compliance:** ~85-90% `var()` usage. All colors, backgrounds, fonts, spacing values, and border widths use tokens. Raw values limited to letter-spacing, line-height, z-index, and percentage layouts.

---

## PACING ASSESSMENT

```
PACING RISK: LOW
Section count: 10 (within 7-10 range -- mild monotony risk mitigated by zone differentiation)
Breathing model: CHANGING STATE (zone backgrounds shift, borders change weight, spacing compresses)
Element uniformity: VARIED (exterior sparse, lobby moderate, secured dense, operations mixed)
Dramatic moment: YES at ~70% (Security section = heaviest, Operations Center = climax)
Risky transitions: NONE -- all transitions use state-change model, not empty space
MITIGATION: Zone background shifts + border weight progression prevent monotony
```

---

## CPL VERIFICATION

```
Container: 960px
Horizontal padding: 48px each side (var(--space-12))
Content width: 960 - 96 = 864px
Body font-size: 18px
CPL = 864 / 18 / 0.6 = 80.0 characters

VERDICT: PASS (at exact boundary; 80 is the maximum per WCAG)
```

**Builder note:** If 18px body font feels large, the builder may use 17px for marginal CPL improvement: 864/17/0.6 = 84.7 -- FAIL. Stay at 18px. Alternatively, increase padding to 56px: (960 - 112) / 18 / 0.6 = 78.5 -- comfortable PASS with some content width sacrifice.

**Recommended final values:** 960px container, 48px horizontal padding, 18px body font, CPL = 80.

---

## SOUL COMPLIANCE CHECKLIST

| Rule | Compliance | Implementation |
|------|-----------|----------------|
| border-radius: 0 | ENFORCED | `* { border-radius: 0; }` in reset. No exceptions. |
| box-shadow: none | ENFORCED | Never used. Solid offset for depth instead. |
| No drop-shadow | ENFORCED | No `filter: drop-shadow()` anywhere. |
| opacity: 1 | ENFORCED | No semi-transparent backgrounds. All backgrounds solid. |
| No gradients | ENFORCED | Zone backgrounds are flat solid colors. |
| No #000/#FFF | ENFORCED | Dark: `#1A1A1A`. Light: `#FEF9F5`. Dense zone: `#FFFFFF` -- NOTE: `#FFFFFF` is allowed as `--color-zone-dense` per tokens.css line 53. |
| Instrument Serif display only | ENFORCED | Headings (h1, h2, h3) only. Body uses Inter. Code uses JetBrains Mono. |
| All h3 italic | ENFORCED | `h3 { font-style: italic; }` -- no exceptions. |
| No 2px borders | ENFORCED | Border progression: 1px/3px/4px. 2px skipped entirely. |
| No vertical table borders | ENFORCED | Open grid tables. Horizontal rules only. |
| Warm palette only | ENFORCED | All colors from tokens.css. No cool grays. |
| 940-960px container | ENFORCED | `max-width: 960px`. Non-negotiable. |

**Soul score target: 8/8** (all absolute prohibitions honored).

---

## 3-QUESTION TEST SAMPLE (Semantic Value Verification)

### Sample 1: Zone Padding Variation

**Q1: WHAT varies?** Padding: 64px (Z-EXT) -> 48px (Z-LOBBY) -> 32px (Z-SEC) -> 24px (Z-OPS)

**Q2: WHY does it vary?** The facility metaphor demands spatial compression as authorization deepens. Public spaces are open; secure spaces are compact. This is how real controlled-access buildings work: lobbies have high ceilings and open floor plans; vaults have tight clearances.

**Q3: WHY THESE SPECIFIC VALUES?** 64px -> 48px -> 32px -> 24px follows a ratio: 64:48:32:24 = 8:6:4:3. The ratios are roughly 75% -> 67% -> 75% per step. NOT linear (that would be arbitrary). The larger initial drop (64->48) represents the biggest perceptual shift (entering the building). The final steps (32->24) are subtle (moving between rooms within a zone). Compression ratio: 24/64 = 37.5%, just under the 40% floor.

**VERDICT: SEMANTIC** -- values are justified by facility architecture, not aesthetics.

### Sample 2: Border-Weight Zone Encoding

**Q1: WHAT varies?** Border-left width: 1px (Z-EXT) -> 3px (Z-LOBBY) -> 4px (Z-SEC/Z-OPS)

**Q2: WHY does it vary?** Each border weight encodes a distinct authorization level. 1px = public (permeable fence, minimal barrier). 3px = structural (lobby walls, real boundary but not maximum security). 4px = maximum security (vault walls, heaviest barrier).

**Q3: WHY THESE SPECIFIC VALUES?** 1px/3px/4px are the ONLY three border weights in the KortAI system (2px is prohibited by anti-pattern OD-F-AP-001). Within this constraint, the mapping is: minimum (1px) = minimum authorization, structural (3px) = structural authorization, maximum (4px) = maximum authorization. The vocabulary IS the metaphor here -- the three available weights map exactly to three authorization levels.

**VERDICT: SEMANTIC** -- values constrained by system vocabulary AND justified by facility zone structure.

---

**END BUILD PLAN**

**Status:** Complete. Ready for Phase 5 (HTML/CSS Build).
**Mechanism count:** 14 (within Ceiling natural landing: 12-15)
**Reinforcing pairs:** 3 (exceeds minimum 2)
**Transition types:** 3 (SMOOTH, BRIDGE, BREATHING -- meets minimum)
**Fractal scales:** 4 (Navigation, Page, Section, Component)
**Designed moments:** 5
**Purpose-built components:** 3 (Tier 3)
**Soul compliance:** 8/8 planned
**Token compliance target:** 85-90%
**CPL:** 80 (boundary PASS)
**Container:** 960px (compliant)
**Footer:** EXPLICITLY specified (Middle experiment #1 defect addressed)

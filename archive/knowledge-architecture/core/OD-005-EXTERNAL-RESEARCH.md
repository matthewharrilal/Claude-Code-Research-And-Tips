# OD-005 External Research Report
## Spatial/Map-Based Documentation Organization Practices

**Research Agent:** UX/UI External Practices Scan
**Date:** 2026-02-07
**Purpose:** Feed OD-005 build with external practices for spatial/map-based documentation organization using WAVE (primary) + ISLANDS (secondary) density patterns
**Target Findings:** R1-003, R1-004, R1-005, R1-013 + DD-F-006 FRACTAL, DD-F-003 ISLANDS, DD-F-010 (mandatory)

---

## EXECUTIVE SUMMARY

12 resources surveyed across 12 research dimensions. The external landscape strongly validates spatial/map-based documentation as a mature design pattern with deep roots in urban planning theory (Kevin Lynch, 1960), cognitive science (Edward Tolman's cognitive maps), and modern web architecture (CSS Grid named areas, SVG interactive maps, ARIA landmark regions). Key synthesis: the field converges on a **five-element wayfinding model** (paths, edges, districts, nodes, landmarks) applied to digital spaces, with **hub-spoke navigation** as the dominant structural pattern, **CSS Grid named areas** as the implementation backbone, and **progressive spatial collapse** (map-to-list on mobile) as the responsive strategy. OD-005 can draw from all of these while adding the unique KortAI constraint: WAVE density rhythm (sparse hubs, dense spokes) with ISLANDS density clustering at navigation nodes, fractal self-similarity at 4 scales, and soul-piece compliance (sharp edges, no shadows, serif wisdom headers).

---

## RESOURCE 1: Kevin Lynch — The Image of the City (Five Elements of Wayfinding)

**URL:** [The Image of the City — Wikipedia](https://en.wikipedia.org/wiki/The_Image_of_the_City) + [IAC: Making Sense of a Place](https://www.theiaconference.com/sessions/making-sense-of-a-place-lessons-from-kevin-lynchs-the-image-of-the-city-and-urban-design/) + [Kevin Lynch's 5 Elements — ArchitectureCourses.org](https://www.architecturecourses.org/design/kevin-lynchs-5-elements-city-guide-urban-design)
**Type:** Foundational urban planning theory (1960), applied to digital information architecture

### Key UX/UI Practice

Kevin Lynch identified five elements that constitute a person's mental map of navigable space. These elements, originally applied to cities, translate directly to documentation architecture:

| Element | Urban Definition | Digital Documentation Equivalent |
|---------|-----------------|--------------------------------|
| **Paths** | Channels along which people move (streets, walkways) | Navigation flows, breadcrumb trails, user journeys through docs |
| **Edges** | Boundaries that close one region from another or join them | Section dividers, content type boundaries, visual separators |
| **Districts** | Medium-to-large areas with common characteristics | Content categories, topic clusters, thematic sections |
| **Nodes** | Central decision points, intersections, hubs | Hub pages, landing pages, overview/index pages |
| **Landmarks** | Easily identifiable reference points for orientation | Logo, persistent navigation, distinctive visual elements |

Lynch coined two critical terms:
- **Imageability:** The quality of a space that makes it form a strong mental image — a space with high imageability is easy to remember and navigate
- **Wayfinding:** The process by which people orient themselves and navigate through space

### Mapping to WAVE + ISLANDS Density Patterns

| Lynch Element | WAVE Application | ISLANDS Application |
|---------------|-----------------|---------------------|
| Paths | WAVE crests follow the primary navigation paths — density rises and falls as users traverse paths | Paths BETWEEN islands are low-density connectors |
| Edges | WAVE troughs mark edges between content districts | Island boundaries are sharp edges (border-radius: 0) |
| Districts | Each WAVE cycle corresponds to a content district | Each ISLAND is a self-contained district |
| Nodes | WAVE peaks concentrate at nodes (hub pages) | Each NODE is an ISLAND — a dense content cluster |
| Landmarks | Landmarks persist across WAVE cycles (persistent nav) | The hub island is the primary landmark |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges (border-radius: 0) | Lynch's edges are boundaries — sharp edges in CSS reinforce district boundaries |
| No Shadows (box-shadow: none) | Physical wayfinding relies on clear boundaries, not atmospheric effects. No shadows = crisp legibility |
| Serif = Wisdom (Instrument Serif) | Landmark labels and district names use serif typography — these are the "wise" orientation markers |
| Callout Family DNA (4px left border) | Callouts serve as Lynch's landmarks — recognizable, persistent orientation elements |
| Squares Signal System | Square badges mark node types (hub vs spoke vs landmark) — system-level classification |

### New Techniques for OD-005

- **Five-element audit:** Every page in the spatial documentation should include all five Lynch elements. Missing any element degrades wayfinding. OD-005 must provide: clear paths (navigation), visible edges (section boundaries), recognizable districts (content clusters), functional nodes (hub pages), and persistent landmarks (logo, nav bar).
- **Imageability score:** Rate each documentation section on imageability — can a user describe its position after a single visit? High-imageability sections have distinctive visual identity (unique color accent, icon, or layout).
- **Path legibility:** Navigation paths must be "legible" — the user should be able to see the entire path from their current position to any destination. This means breadcrumbs + visible hub connections at all times.

### Implementation Sketch

```css
/* Lynch's Five Elements as CSS architecture */

/* PATHS: Navigation flow lines */
.nav-path {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 2px solid var(--border-primary);
  padding: 0.75rem 0;
  font-family: var(--font-sans);
}

/* EDGES: District boundaries */
.district-edge {
  border-top: 4px solid var(--border-primary);
  margin: 3rem 0;
  /* Sharp edge — border-radius: 0 enforced */
}

/* DISTRICTS: Content regions */
.content-district {
  padding: 2rem;
  border: 1px solid var(--border-subtle);
  border-radius: 0; /* Soul: Sharp Edges */
  box-shadow: none; /* Soul: No Shadows */
}

/* NODES: Hub intersection points */
.hub-node {
  text-align: center;
  padding: 2rem;
  border: 2px solid var(--border-primary);
  border-radius: 0;
  font-family: var(--font-serif); /* Soul: Serif = Wisdom */
}

/* LANDMARKS: Persistent orientation markers */
.landmark {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--surface-primary);
  border-bottom: 4px solid var(--accent-primary);
}
```

---

## RESOURCE 2: NN/G — Hub-and-Spoke Navigation Model

**URL:** [Customer-Service Information: Hub-and-Spoke Model — NN/G](https://www.nngroup.com/articles/customer-service-model/) + [Information Architecture: 3 Key Models — NN/G](https://www.nngroup.com/videos/information-architecture-models/)
**Type:** Canonical UX research (primary source)

### Key UX/UI Practice

The hub-and-spoke model organizes information with a central hub page surrounded by specialized spoke pages. Key principles from NN/G research:

1. **Hub as catch-all:** The hub page aggregates links to ALL topics. Users who are unsure where to go should reliably find a path from the hub.
2. **Spoke pages link BACK to hub:** Every spoke page must include body-content links back to the hub — not just global navigation. Users must always be able to return.
3. **Bidirectional linking:** All hub pages link to each other. If multiple hubs exist (e.g., Overview, FAQ, Contact), they cross-reference.
4. **Naming matters:** "Customer Service" and "Customer Assistance" performed well in usability testing. Avoid ambiguous labels like "Help" or "Support Center."
5. **Spoke depth = 1 level below hub:** Spokes should sit exactly one level below their hub in the hierarchy. Deeper nesting requires sub-hubs.

Hub page design best practices:
- Expose direct spoke links in global navigation for quick access
- Maintain hub pathways as primary navigation strategy
- Include cross-links to secondary hub pages within the page body
- Use clear, descriptive labels with strong "information scent"

### Mapping to WAVE + ISLANDS Density Patterns

| Hub-Spoke Concept | WAVE Application | ISLANDS Application |
|-------------------|-----------------|---------------------|
| Hub page | WAVE trough — sparse, overview-oriented, generous whitespace | Hub is the LARGEST island, lowest density |
| Spoke pages | WAVE crest — dense, detail-oriented, content-rich | Each spoke is a smaller, denser island |
| Hub-to-spoke transition | WAVE rises from hub (sparse) to spoke (dense) | User "travels" from hub island to spoke island |
| Spoke-to-hub return | WAVE falls back to hub density level | Return path is the "water" between islands |
| Multiple hubs | Multiple WAVE systems intersecting | Multiple large islands in an archipelago |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Hub and spoke cards have 0 border-radius — architectural precision |
| No Shadows | Hub cards distinguished by border weight, not elevation shadows |
| Serif = Wisdom | Hub page titles use Instrument Serif — the hub is the "wisdom center" |
| Callout DNA | Spoke links use 4px left-border callout pattern — each spoke is a callout-style card |
| Squares | Hub type indicators use square badges: [HUB], [SPOKE], [SUB-HUB] |

### New Techniques for OD-005

- **Hub-in-viewport (R1-003):** The hub must be fully visible in the initial viewport. No scrolling required to see the central navigation node. Spokes appear on scroll or via link navigation.
- **Three-column hub layout (R1-004):** Hub in center column, navigation spokes on left and right columns. This creates the spatial sensation of a central hub with radiating connections.
- **Bidirectional spoke links:** Every spoke page must include an explicit "Return to Hub" link in its body content, not just breadcrumbs. This is the "water path" back to the hub island.
- **Hub inventory header:** The hub page begins with a content inventory: "This system contains 6 components, 3 patterns, and 2 guides." Immediate spatial orientation.

### Implementation Sketch

```css
/* Hub-spoke layout with Three-Column Doctrine */
.hub-spoke-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "left-spokes hub right-spokes"
    "left-spokes hub right-spokes";
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hub-center {
  grid-area: hub;
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  padding: 2rem;
  text-align: center;
  font-family: var(--font-serif);
}

.spoke-column-left {
  grid-area: left-spokes;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spoke-column-right {
  grid-area: right-spokes;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spoke-card {
  border-left: 4px solid var(--accent-primary);
  border-radius: 0;
  box-shadow: none;
  padding: 1rem 1rem 1rem 1.5rem;
}

/* R1-005: Responsive collapse — map to list on mobile */
@media (max-width: 768px) {
  .hub-spoke-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "hub"
      "left-spokes"
      "right-spokes";
  }
}
```

---

## RESOURCE 3: NN/G — Cognitive Maps, Mind Maps, and Concept Maps

**URL:** [Cognitive Maps, Mind Maps, and Concept Maps — NN/G](https://www.nngroup.com/articles/cognitive-mind-concept/) + [Cognitive Maps in UX — IxDF](https://www.interaction-design.org/literature/article/cognitive-maps-ux)
**Type:** Foundational UX research + design methodology

### Key UX/UI Practice

Three distinct mapping types serve different purposes in documentation architecture:

| Map Type | Structure | Best For |
|----------|-----------|----------|
| **Cognitive Maps** | Free-form, no restrictions | Externalizing knowledge, identifying hidden patterns |
| **Mind Maps** | Single center, hierarchical tree, one parent per node | Organizing single topics systematically |
| **Concept Maps** | Multiple parents allowed, labeled connections between nodes | Exploring interconnected relationships, revealing systemic causes |

Key distinctions for OD-005:
- **Mind maps** are hub-spoke by nature — single center radiating outward. This matches OD-005's primary architecture.
- **Concept maps** allow cross-connections between spokes. This matches the need for related content to link laterally, not just back to the hub.
- **Cognitive maps** reveal how users ACTUALLY think about the space, not how designers organize it. User research should validate the spatial model.

Cognitive mapping in UX reveals "hidden patterns and connections you might not have noticed otherwise" through visual representation of relationships between different ideas. Users construct mental models by connecting related ideas and concepts.

### Mapping to WAVE + ISLANDS Density Patterns

| Map Concept | WAVE Application | ISLANDS Application |
|-------------|-----------------|---------------------|
| Mind map center | WAVE origin point — where the rhythm begins | The hub island, largest and most prominent |
| Mind map branches | WAVE propagation — crests at each branch node | Branch nodes are islands connected by paths |
| Concept map cross-links | WAVE interference — where two wave systems meet | Bridges between islands (lateral navigation) |
| Cognitive map clusters | WAVE harmonics — natural clustering of related concepts | Natural island groupings (archipelagos) |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Map nodes are squares, not circles — departure from traditional mind maps |
| No Shadows | Node prominence through border weight and fill, not elevation |
| Serif = Wisdom | Hub node labels use serif — the "root of knowledge" |
| Callout DNA | Each node is a mini-callout — 4px left border signals "this is a navigable concept" |
| Squares | All map nodes are squares, reinforcing the system signal |

### New Techniques for OD-005

- **Hybrid mind-concept map:** OD-005 should use a mind map structure (single hub) with concept map cross-links (lateral spoke-to-spoke connections). This gives users both hierarchical clarity and relational richness.
- **Square nodes, not circles:** Traditional mind maps use circles. KortAI's square signal system means all map nodes are squares. This is a deliberate visual distinction that communicates "this is a system, not a brainstorm."
- **Labeled connections:** Every link between nodes carries a label: "depends on," "extends," "contrasts with." This transforms navigation from "go here" to "understand this relationship."
- **User-validated spatial model:** The spatial arrangement should be tested with users. Show them the map and ask: "Where would you find [topic]?" If they can't point to it, the spatial model needs revision.

### Implementation Sketch

```css
/* Hybrid mind-concept map nodes */
.map-node {
  display: inline-block;
  border: 2px solid var(--border-primary);
  border-radius: 0; /* Soul: Sharp Edges — squares, not circles */
  box-shadow: none;
  padding: 1rem 1.5rem;
  font-family: var(--font-sans);
  position: relative;
  cursor: pointer;
  transition: border-color 0.2s;
}

.map-node:hover {
  border-color: var(--accent-primary);
}

.map-node--hub {
  font-family: var(--font-serif); /* Soul: Serif = Wisdom */
  font-size: 1.25rem;
  border-width: 3px;
  padding: 1.5rem 2rem;
}

.map-node--spoke {
  font-size: 0.875rem;
  border-left: 4px solid var(--accent-primary); /* Soul: Callout DNA */
}

/* Connection labels between nodes */
.connection-label {
  font-size: 0.75rem;
  font-style: italic;
  color: var(--text-secondary);
  position: absolute;
  white-space: nowrap;
}
```

---

## RESOURCE 4: roadmap.sh — Interactive Visual Learning Paths

**URL:** [roadmap.sh](https://roadmap.sh/) + [About roadmap.sh](https://roadmap.sh/about) + [How roadmap.sh Revolutionizes Developer Learning Paths](https://ones.com/blog/roadmap-sh-revolutionizes-developer-learning-paths/)
**Type:** Implementation reference (interactive spatial documentation)

### Key UX/UI Practice

roadmap.sh is the most successful implementation of spatial documentation navigation in the developer ecosystem (6th most-starred GitHub project). Key design patterns:

1. **Flowchart-style roadmaps:** Content organized as interconnected nodes in a visual flow, not a traditional sidebar. Users see the ENTIRE learning landscape at once.
2. **Clickable nodes:** Each node in the roadmap is clickable, revealing resources and details. The map is the navigation — there is no separate sidebar.
3. **Progress tracking:** Users can mark nodes as complete, creating a personal "you are here" overlay on the spatial map.
4. **Role-based and skill-based paths:** Multiple spatial arrangements for the same underlying content, organized by role (Frontend, Backend) or skill (React, TypeScript).
5. **Hierarchical depth:** Nodes expand to reveal sub-topics, creating fractal depth — a map within a map.

Built with Astro and Tailwind, deployed to GitHub Pages — demonstrating that spatial documentation does not require complex JavaScript frameworks.

### Mapping to WAVE + ISLANDS Density Patterns

| roadmap.sh Pattern | WAVE Application | ISLANDS Application |
|--------------------|-----------------|---------------------|
| Top-level roadmap view | WAVE overview — low density, all nodes visible at a glance | The archipelago overview — all islands visible |
| Expanded node with resources | WAVE crest — high density when focused on specific node | Zooming into a single island — dense content |
| Progress markers | WAVE phase markers — "you are at this crest" | Islands you have "visited" vs "unvisited" |
| Sub-topic expansion | Fractal WAVE — nested density cycle within a node | Islands within islands (DD-F-006 FRACTAL) |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Roadmap nodes as sharp-edged rectangles, not rounded pills |
| No Shadows | Node hierarchy through border weight and background fill |
| Serif = Wisdom | Section headers ("Frontend," "Backend") use serif as category-level wisdom |
| Callout DNA | Expanded resource lists use callout pattern — 4px left border per resource |
| Squares | Node type indicators (required / optional / recommended) as square badges |

### New Techniques for OD-005

- **Map-IS-navigation:** The spatial map is not supplementary to navigation — it IS the navigation. OD-005 should make the spatial map the primary way users move through content, with sidebar/breadcrumbs as secondary.
- **Progress overlay:** Allow users to track which system components they have explored, creating a personal "coverage map" of their understanding.
- **Fractal node expansion (DD-F-006):** Each node in the map can expand to reveal a sub-map. The overview hub expands to show section hubs, which expand to show detail spokes. This is fractal self-similarity in navigation.
- **Multiple path views:** The same underlying content can be arranged in different spatial configurations for different user roles. A developer sees components organized by technical stack. An architect sees them organized by system layer.

### Implementation Sketch

```css
/* Roadmap-style spatial navigation */
.spatial-map {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.map-node-interactive {
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  padding: 1rem;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  position: relative;
}

.map-node-interactive[data-visited="true"] {
  background: var(--surface-visited);
  border-color: var(--accent-success);
}

.map-node-interactive[data-visited="true"]::after {
  content: "";
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  background: var(--accent-success);
  /* Square indicator — Soul: Squares Signal System */
}

/* Fractal sub-map (expanded node) */
.sub-map {
  display: none;
  margin-top: 1rem;
  padding-left: 1rem;
  border-left: 4px solid var(--accent-primary); /* Soul: Callout DNA */
}

.map-node-interactive[data-expanded="true"] .sub-map {
  display: block;
}
```

---

## RESOURCE 5: NN/G — "You Are Here" Navigation & Local Navigation

**URL:** [Navigation: You Are Here — NN/G](https://www.nngroup.com/articles/navigation-you-are-here/) + [Local Navigation Is a Valuable Orientation and Wayfinding Aid — NN/G](https://www.nngroup.com/articles/local-navigation/)
**Type:** Canonical UX research (primary source)

### Key UX/UI Practice

"You Are Here" indicators are the single most important wayfinding element. NN/G identifies eight mechanisms for communicating current position:

1. **Logo and branding** — Establishes ownership, top-left corner
2. **Navigation changes** — Selected items become visually prominent (highlighting, spatial offset)
3. **Headings** — Multiple heading levels expose hierarchical context
4. **Page titles** — Appear in tabs, search results, bookmarks
5. **URLs** — Human-readable addresses aid recognition and recall
6. **Breadcrumbs** — Expose information hierarchy as interactive path
7. **Contextual cues** — Dates, tags, icons place content in context
8. **Step indicators** — For sequential processes, show full sequence and current position

Anti-patterns identified:
- **Overly subtle indicators:** "People easily overlook subtle changes" — position indicators must be OBVIOUS
- **Deep structure confusion:** Navigation bar changes become ineffective in deeply nested sections; breadcrumbs become essential
- **Dead-end pages:** Every page must have navigation recovery options

Local navigation reveals "sibling pages within the current category, and children or nieces and nephews of the current page." It supports:
- **Exploration:** Browsing multiple related pages within a category
- **Comparison:** Moving between similar pages to evaluate options
- **Spatial awareness:** Understanding the immediate neighborhood in the information space

### Mapping to WAVE + ISLANDS Density Patterns

| Wayfinding Concept | WAVE Application | ISLANDS Application |
|--------------------|-----------------|---------------------|
| Current position indicator | WAVE position marker — "you are at this crest/trough" | Highlighted current island in the archipelago |
| Local navigation (siblings) | Adjacent WAVE crests visible from current position | Neighboring islands visible from current island |
| Breadcrumb trail | WAVE history — the path of crests and troughs traversed | Island-hopping route shown as a chain |
| Step indicator | WAVE cycle count — "you are in cycle 3 of 7" | Number of islands explored / total islands |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Current page indicator uses a sharp-edged highlight bar, not a rounded pill |
| No Shadows | Active state distinguished by border/fill change, not shadow elevation |
| Serif = Wisdom | Breadcrumb hub/category labels use serif — structural wisdom markers |
| Callout DNA | Active page in local nav gets 4px left border — callout-style "you are here" |
| Squares | Position badges are squares: [3/7] in square containers |

### New Techniques for OD-005

- **Spatial "you are here" overlay:** When viewing any spoke page, the hub-spoke map shows the user's current position highlighted. This is a mini-map in the corner showing the full spatial layout with the current node emphasized.
- **Eight-mechanism redundancy:** OD-005 should implement ALL eight position-indicating mechanisms. Users should never wonder where they are.
- **Local navigation = neighboring islands:** When on a spoke page, show siblings (other spokes) as adjacent navigation cards. This creates the sensation of neighboring islands visible from the current position.
- **Anti-pattern: no dead ends.** Every page in the spatial map must have at least 3 navigation options: back to hub, next spoke, previous spoke.

### Implementation Sketch

```css
/* "You Are Here" spatial position indicator */
.position-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-left: 4px solid var(--accent-primary); /* Soul: Callout DNA */
  border-radius: 0;
  background: var(--surface-subtle);
  font-family: var(--font-serif); /* Soul: Serif = Wisdom */
  margin-bottom: 2rem;
}

/* Mini-map spatial overview */
.mini-map {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 200px;
  padding: 1rem;
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  background: var(--surface-primary);
  z-index: 100;
}

.mini-map-node {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid var(--border-primary);
  border-radius: 0; /* Soul: Squares Signal System */
  margin: 2px;
}

.mini-map-node--current {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
}

.mini-map-node--visited {
  background: var(--surface-visited);
}

/* Local navigation: neighboring spokes */
.sibling-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 4px solid var(--border-primary);
}

.sibling-nav-card {
  flex: 1;
  border: 1px solid var(--border-subtle);
  border-radius: 0;
  box-shadow: none;
  padding: 1rem;
}
```

---

## RESOURCE 6: CSS Grid Named Areas & SVG Interactive Maps

**URL:** [CSS Grid Areas — Ahmad Shadeed](https://ishadeed.com/article/css-grid-area/) + [How to Make a Clickable SVG Map — freeCodeCamp](https://www.freecodecamp.org/news/how-to-make-clickable-svg-map-html-css/) + [CSS Grid Layout Guide — CSS-Tricks](https://css-tricks.com/css-grid-layout-guide/)
**Type:** Implementation techniques (CSS/SVG)

### Key UX/UI Practice

Two complementary techniques for creating navigable spatial layouts:

**CSS Grid Named Areas** create layouts that visually map to their structure directly in CSS:

```css
grid-template-areas:
  "header header header"
  "nav    main   aside"
  "footer footer footer";
```

Key advantages:
- Layout structure is readable as ASCII art in the CSS itself
- Responsive collapse requires only redefining `grid-template-areas` — no child CSS changes needed
- Named areas must form rectangular shapes — enforces clean spatial boundaries
- All cells must be assigned or marked empty with dots (`.`) — enforces spatial completeness

**SVG Interactive Maps** achieve hover-and-click interactivity with pure CSS:

```css
path:hover {
  fill: purple;
  stroke: red;
  stroke-width: 3px;
  transition: fill 0.4s;
}
```

SVG `<path>` elements wrapped in `<a>` tags create clickable regions. `xlink:title` provides hover labels. No JavaScript required for basic interaction.

### Mapping to WAVE + ISLANDS Density Patterns

| CSS/SVG Technique | WAVE Application | ISLANDS Application |
|-------------------|-----------------|---------------------|
| Grid named areas | WAVE topology defined visually in CSS — the "map" of the density layout | Island positions defined as grid areas |
| Grid-template-areas responsive collapse | WAVE transforms from 2D spatial to 1D linear on mobile | Islands stack vertically on mobile |
| SVG path regions | WAVE visualization — each path is a density zone | Each SVG region is an island shape |
| SVG hover/click | WAVE interaction — hovering reveals density crest | Island focus — hovering brings island content forward |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | SVG paths with `stroke-linejoin: miter` (sharp corners, not rounded) |
| No Shadows | SVG regions distinguished by fill color and stroke weight, no drop-shadow filters |
| Serif = Wisdom | SVG text labels for hub nodes use serif font-face |
| Callout DNA | Highlighted SVG regions get a stroke treatment equivalent to 4px left border |
| Squares | SVG node markers as `<rect>` elements, not `<circle>` |

### New Techniques for OD-005

- **Grid-as-map:** Use CSS Grid named areas to create a spatial map where each grid area is a documentation section. The CSS itself reads as a map:
  ```css
  grid-template-areas:
    ".       input    .      "
    "config  hub      output "
    ".       pipeline .      ";
  ```
- **SVG system diagram:** Create an SVG diagram of the system architecture where each component is a clickable region. Pure CSS hover effects provide interactivity without JavaScript.
- **Responsive map-to-list (R1-005):** On mobile, the grid collapses to single-column with `grid-template-areas: "hub" "input" "config" "pipeline" "output";` — the spatial map becomes a linear list.
- **Empty cell breathing space:** Use dots (`.`) in grid-template-areas to create intentional whitespace around the hub node, reinforcing its central position.

### Implementation Sketch

```css
/* System architecture as CSS Grid map */
.system-map {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    ".        input     .       "
    "config   hub       output  "
    ".        pipeline  .       ";
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.map-area-hub      { grid-area: hub; }
.map-area-input    { grid-area: input; }
.map-area-config   { grid-area: config; }
.map-area-output   { grid-area: output; }
.map-area-pipeline { grid-area: pipeline; }

/* Each area is an island */
.map-area {
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.map-area:hover {
  border-color: var(--accent-primary);
}

.map-area-hub {
  border-width: 3px;
  font-family: var(--font-serif);
}

/* SVG connection lines between areas */
.connection-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.connection-line {
  stroke: var(--border-subtle);
  stroke-width: 2px;
  fill: none;
  stroke-dasharray: 8 4; /* Dashed lines for non-primary connections */
}

/* R1-005: Mobile collapse to list */
@media (max-width: 768px) {
  .system-map {
    grid-template-columns: 1fr;
    grid-template-areas:
      "hub"
      "input"
      "config"
      "pipeline"
      "output";
  }

  .connection-overlay {
    display: none; /* Hide spatial connections on mobile */
  }
}
```

---

## RESOURCE 7: UX Wayfinding Crash Course & Breadcrumb Patterns

**URL:** [UX Crash Course: Wayfinding — Progress](https://www.progress.com/blogs/ux-crash-course-wayfinding) + [Breadcrumbs: 11 Design Guidelines — NN/G](https://www.nngroup.com/articles/breadcrumbs/) + [Breadcrumb Pattern — W3C WAI ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
**Type:** UX methodology + canonical design guidelines + accessibility standard

### Key UX/UI Practice

Digital wayfinding requires users to always understand four things:
1. **Current location** — Where am I? (communicable to others)
2. **Available destinations** — Where can I go from here?
3. **Routes** — How do I get to other areas?
4. **Return paths** — How do I get back to where I started?

Wayfinding supports "safe exploration" — users can experiment knowing return routes are clear. This psychological safety accelerates learning.

NN/G's 11 breadcrumb guidelines:
1. Supplementary navigation — augments, does not replace main nav
2. Show hierarchy, not history — display site structure, not session path
3. Single path for polyhierarchies — one canonical path when pages have multiple parents
4. Include current page as last item
5. Current page should NOT be a link
6. Only actual pages — each node must be a real, visitable page
7. Skip for flat sites — unnecessary for 1-2 level hierarchies
8. Start with homepage
9. No multi-line wrapping on mobile
10. Adequate tap targets (minimum 1cm x 1cm)
11. Consider truncation on mobile — show only final levels

Breadcrumb types:
- **Location/hierarchical:** Shows position in site hierarchy (Home > Section > Page)
- **Attribute:** Shows applied filters (Products > Brand: Apple > Price: $500-$1000)

### Mapping to WAVE + ISLANDS Density Patterns

| Wayfinding Concept | WAVE Application | ISLANDS Application |
|--------------------|-----------------|---------------------|
| Current location | Current WAVE position marker | Current island highlighted |
| Available destinations | Adjacent WAVE crests visible | Neighboring islands listed |
| Routes | WAVE path (the spatial trajectory) | Bridges/paths between islands |
| Return paths | WAVE can be traversed in reverse | Return bridge to hub island always visible |
| Breadcrumb trail | WAVE traversal history | Island-hopping route: Hub > Section > Detail |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Breadcrumb separators as sharp angle brackets `>`, not rounded chevrons |
| No Shadows | Breadcrumb container has no shadow — pure border-bottom separator |
| Serif = Wisdom | Hub/category names in breadcrumbs use serif — these are the structural wisdom markers |
| Callout DNA | The breadcrumb bar itself is a callout — 4px bottom border, 2-zone (path + current) |
| Squares | Position count badges [3/7] in square containers |

### New Techniques for OD-005

- **Spatial breadcrumbs:** Instead of flat text breadcrumbs, show a miniature version of the spatial map with the current path highlighted. The breadcrumb IS a map view.
- **Four-question check:** Every page in OD-005 must answer all four wayfinding questions. If any is missing, the page fails the wayfinding audit.
- **Safe exploration guarantee:** Include an explicit "Return to Overview" button on every page. Users must feel safe clicking into any spoke without fear of getting lost.
- **Hierarchical breadcrumbs only:** Use location breadcrumbs (hierarchy), not history breadcrumbs. The spatial structure is the organizing principle, not the user's session path.

### Implementation Sketch

```css
/* Spatial breadcrumb with mini-map */
.spatial-breadcrumb {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-bottom: 4px solid var(--border-primary); /* Soul: Callout DNA variant */
  border-radius: 0;
  margin-bottom: 2rem;
}

.breadcrumb-path {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
}

.breadcrumb-separator {
  color: var(--text-secondary);
  font-weight: bold;
  /* Sharp angle bracket, not rounded chevron */
}

.breadcrumb-current {
  font-family: var(--font-serif); /* Soul: Serif = Wisdom */
  font-weight: 600;
  color: var(--text-primary);
  /* NOT a link — NN/G guideline #5 */
}

.breadcrumb-link {
  color: var(--accent-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.breadcrumb-link:hover {
  border-bottom-color: var(--accent-primary);
}

/* Position counter */
.position-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  border: 1px solid var(--border-primary);
  border-radius: 0; /* Soul: Squares Signal System */
  font-size: 0.75rem;
  font-weight: 600;
}
```

---

## RESOURCE 8: Concept Maps & Knowledge Graph Visualization

**URL:** [Concept Maps — Wikipedia](https://en.wikipedia.org/wiki/Concept_map) + [Concept Maps — UNC Learning Center](https://learningcenter.unc.edu/tips-and-tools/using-concept-maps/) + [How Concept Map Complexity Influences Learning — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8788906/)
**Type:** Educational research + cognitive science

### Key UX/UI Practice

Concept maps are diagrams depicting relationships between concepts, using boxes/circles connected by labeled arrows in a (typically) hierarchical structure. Developed by Joseph Novak at Cornell in the 1970s.

Research findings on concept map effectiveness for learning:

1. **Chunking through hierarchy:** Starting with higher-level concepts helps chunk information based on meaningful connections, making details more significant and easier to remember.
2. **Labeled relationships:** Arrows between nodes carry labels ("causes," "requires," "such as," "contributes to") that make connections explicit, not just implied.
3. **Cross-links reveal complexity:** Links between different concept branches reveal unexpected relationships and promote deeper understanding.
4. **Complexity tradeoffs:** Research from PMC shows that concept map complexity (number of nodes, connections, hierarchical depth) has a non-linear relationship with cognitive load. Too simple = not helpful; too complex = overwhelming. The sweet spot is 7-15 nodes with 2-3 hierarchy levels.

Key structural principles:
- **Focus question:** Every concept map starts with a specific question it answers
- **Parking lot:** List concepts before connecting them — spatial arrangement comes AFTER content identification
- **Hierarchical layout:** Most general/inclusive concepts at top, most specific at bottom
- **Cross-links:** Connections between different concept branches are the most valuable (and most often missed)

### Mapping to WAVE + ISLANDS Density Patterns

| Concept Map Element | WAVE Application | ISLANDS Application |
|---------------------|-----------------|---------------------|
| Focus question | WAVE origin — the question that launches the density cycle | The focus question IS the hub island |
| Hierarchical levels | WAVE depth — each level is a density layer | Hierarchical island tiers (hub, section, detail) |
| Cross-links | WAVE interference patterns — where density waves from different branches interact | Bridges between non-adjacent islands |
| Complexity sweet spot (7-15 nodes) | WAVE frequency limit — too many crests overwhelms | 7-15 islands is the archipelago size limit |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Concept nodes are sharp-edged rectangles, departing from traditional rounded shapes |
| No Shadows | Hierarchy communicated through position and size, not shadow depth |
| Serif = Wisdom | The focus question and top-level concepts use serif — these are the "wisdom anchors" |
| Callout DNA | Each concept node follows callout structure: 4px left border + content area |
| Squares | Node type indicators as square badges marking hierarchy level |

### New Techniques for OD-005

- **7-15 node limit:** OD-005's system map should contain 7-15 nodes maximum at any single view level. More than 15 nodes at one level overwhelms cognitive capacity. Use fractal depth (DD-F-006) instead of breadth.
- **Labeled connections are mandatory:** Every connection between nodes must carry a relationship label. "API Gateway -> Auth Service" should be "API Gateway --authenticates via--> Auth Service."
- **Focus question at hub:** The hub page answers ONE focus question: "What does this system do?" Every spoke answers a sub-question.
- **Cross-link discovery:** The most valuable learning happens when users discover lateral connections between branches. OD-005 should highlight cross-links visually (e.g., dashed lines or different color) to draw attention to these insights.

### Implementation Sketch

```css
/* Concept map with labeled connections */
.concept-map {
  position: relative;
  min-height: 600px;
  padding: 2rem;
}

.concept-node {
  position: absolute;
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  padding: 0.75rem 1rem;
  background: var(--surface-primary);
  z-index: 2;
}

.concept-node--level-0 {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  border-width: 3px;
}

.concept-node--level-1 {
  font-size: 0.9375rem;
  border-left: 4px solid var(--accent-primary);
}

.concept-node--level-2 {
  font-size: 0.8125rem;
  border-left: 4px solid var(--accent-secondary);
}

/* Connection labels */
.concept-link-label {
  position: absolute;
  font-size: 0.6875rem;
  font-style: italic;
  color: var(--text-tertiary);
  background: var(--surface-primary);
  padding: 0 0.25rem;
  z-index: 3;
  white-space: nowrap;
}

/* Cross-link (lateral connection) — visually distinct */
.concept-cross-link {
  stroke: var(--accent-secondary);
  stroke-dasharray: 6 3;
  stroke-width: 1.5px;
}
```

---

## RESOURCE 9: System Architecture Documentation Best Practices

**URL:** [System Architecture Documentation Best Practices — freeCodeCamp](https://www.freecodecamp.org/news/system-architecture-documentation-best-practices-and-tools/) + [Web Style Guide: Presenting Information Architecture](https://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)
**Type:** Documentation methodology + information architecture guide

### Key UX/UI Practice

System architecture documentation requires a multi-perspective, diagram-first approach:

**Three diagram types (ordered by abstraction):**
1. **System Context Diagram** — Shows external dependencies and user touchpoints (highest abstraction)
2. **Container Diagram** — Illustrates main system boundaries and service connections (medium abstraction)
3. **Component Diagram** — Details internal structure and interactions (lowest abstraction)

This three-level hierarchy IS the fractal depth model (DD-F-006): the same system is described at three scales with increasing detail.

**Key documentation principles:**
- **Diagrams first, text second:** "Diagrams help: UX sees user impact. Frontend knows which services to hook up. Backend sees infrastructure and interactions."
- **Translate technical to outcomes:** Connect infrastructure choices to user-facing benefits
- **Consistent naming:** Same component name across all diagrams and text
- **Living documentation:** "A living doc people actually read is better than a 'perfect' one no one opens."
- **Clear data flow arrows:** Direction matters. Label synchronous vs asynchronous flows.

**Site diagram visualization principles (Web Style Guide):**
- Print large diagrams for team annotation — physical collaboration with spatial layouts
- Use Jesse James Garrett's visual vocabulary as standard notation
- Dual-purpose diagrams: conceptual (for stakeholders) and technical (for developers)
- Alignment between information hierarchy and file organization

### Mapping to WAVE + ISLANDS Density Patterns

| Documentation Pattern | WAVE Application | ISLANDS Application |
|-----------------------|-----------------|---------------------|
| Context diagram (high-level) | WAVE overview — lowest density, broadest scope | The full archipelago from satellite view |
| Container diagram (mid-level) | WAVE standard view — medium density, system boundaries | Individual island groups visible |
| Component diagram (detail) | WAVE close-up — highest density, internal structure | Single island terrain detail |
| Three-level zoom | WAVE frequency scaling — same wave at 3 magnifications | DD-F-006 FRACTAL: archipelago > island > terrain |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Architecture diagram components are sharp-edged boxes |
| No Shadows | Component relationships shown through arrows and borders, not shadows |
| Serif = Wisdom | System names and layer labels use serif — architectural wisdom |
| Callout DNA | Component detail boxes follow callout structure |
| Squares | Component type badges (service, database, API) as square markers |

### New Techniques for OD-005

- **Three-level zoom architecture:** OD-005 should present the system at three zoom levels: Context (full system in one viewport), Container (major subsystems), Component (individual parts). Navigation between levels IS the spatial journey.
- **Diagram-first methodology:** Every section of OD-005 starts with a visual diagram, then provides text explanation. The diagram is the spatial anchor; text provides depth.
- **Data flow direction:** All arrows in the system map show clear direction — inputs on left, outputs on right, processing in center. This spatial convention communicates system flow without words.
- **Do/Don't comparison (R1-013):** Show good and bad architecture patterns side by side. Use spatial positioning to communicate: good patterns on left (or above), bad patterns on right (or below).

### Implementation Sketch

```css
/* Three-level zoom navigation */
.zoom-controls {
  display: flex;
  gap: 0;
  margin-bottom: 2rem;
}

.zoom-level {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  background: var(--surface-primary);
  transition: background-color 0.2s;
}

.zoom-level + .zoom-level {
  border-left: none; /* Connected button group */
}

.zoom-level--active {
  background: var(--accent-primary);
  color: var(--surface-primary);
  font-weight: 600;
}

/* Do/Don't comparison grid (R1-013) */
.do-dont-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.do-panel {
  border-left: 4px solid var(--accent-success);
  padding: 1.5rem;
  border-radius: 0;
}

.do-panel::before {
  content: "DO";
  display: block;
  font-family: var(--font-serif);
  font-weight: 700;
  color: var(--accent-success);
  margin-bottom: 1rem;
}

.dont-panel {
  border-left: 4px solid var(--accent-danger);
  padding: 1.5rem;
  border-radius: 0;
}

.dont-panel::before {
  content: "DON'T";
  display: block;
  font-family: var(--font-serif);
  font-weight: 700;
  color: var(--accent-danger);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .do-dont-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## RESOURCE 10: React Flow & D3 Force Layout for Node-Graph Visualization

**URL:** [React Flow: Layouting Overview](https://reactflow.dev/learn/layouting/layouting) + [React Flow: Force Layout Example](https://reactflow.dev/examples/layout/force-layout) + [D3-Force — Observable](https://d3js.org/d3-force)
**Type:** Implementation reference (JavaScript visualization libraries)

### Key UX/UI Practice

React Flow and D3-Force provide two paradigms for node-graph visualization:

**React Flow:**
- Nodes created directly on the HTML DOM (not Canvas) — enabling standard CSS styling, accessibility, and interaction
- Customizable node and edge components
- Built-in zooming, panning, drag-and-drop
- Integrates with external layout algorithms (Dagre, ELK, D3-Force)

**D3-Force simulation:**
- Physics-based positioning — nodes attract/repel based on configurable forces
- Key forces: `forceManyBody()` (attraction/repulsion), `forceCenter()` (centering), `forceCollide()` (collision avoidance), `forceLink()` (edge distance)
- Custom forces can account for rectangular nodes (not just circles)
- Iterative simulation — positions update over multiple ticks

**Layout algorithm comparison:**

| Algorithm | Best For | Configuration | Sub-flow Support |
|-----------|----------|---------------|-----------------|
| Dagre | Tree layouts | Minimal | Yes |
| D3-Hierarchy | Single-root trees | Low | No |
| D3-Force | Organic/network layouts | Medium | No |
| ELK | Complex layouts with edge routing | High | Yes |

### Mapping to WAVE + ISLANDS Density Patterns

| Visualization Concept | WAVE Application | ISLANDS Application |
|-----------------------|-----------------|---------------------|
| Force-directed layout | WAVE as physical simulation — density forces push/pull nodes | Islands self-organize by relationship strength |
| Zooming/panning | WAVE zoom — the density pattern at different magnifications | Archipelago zoom: overview <-> island detail |
| Node clusters | WAVE harmonics — nodes cluster at resonance points | Natural island groupings emerge from force simulation |
| Edge routing | WAVE paths — the routes between density peaks | Navigation paths between islands |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | React Flow nodes styled with border-radius: 0 — sharp rectangles |
| No Shadows | Node depth through border weight, not box-shadow |
| Serif = Wisdom | Hub/root node labels in serif |
| Callout DNA | Leaf nodes use callout-style 4px left border |
| Squares | All nodes are rectangular/square — no circles in the graph |

### New Techniques for OD-005

- **CSS-only alternative to React Flow:** For the static documentation use case, a CSS Grid-based map can replicate much of React Flow's visual effect without the JavaScript dependency. Use SVG `<line>` elements for connections.
- **Force-layout principles without D3:** Even without D3, the principle of "related things close together, unrelated things far apart" should guide spatial positioning. Manually apply this principle when placing grid areas.
- **Dagre-style tree for hub-spoke:** The Dagre algorithm produces clean tree layouts ideal for hub-spoke documentation. Even without using the library, the layout principle (root at center/top, children evenly spaced below) should guide OD-005's structure.
- **Zooming as navigation:** The concept of zooming (context > container > component) should be the primary navigation paradigm. Users zoom IN to see detail, zoom OUT to see context.

### Implementation Sketch

```css
/* React Flow-inspired node graph in pure CSS/SVG */
.node-graph {
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
}

.graph-node {
  position: absolute;
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  background: var(--surface-primary);
  padding: 0.75rem 1rem;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
}

.graph-node:hover {
  border-color: var(--accent-primary);
  z-index: 3;
}

.graph-node--root {
  font-family: var(--font-serif);
  border-width: 3px;
  font-size: 1.125rem;
  /* Centered position */
  left: 50%;
  top: 2rem;
  transform: translateX(-50%);
}

.graph-node--child {
  font-size: 0.875rem;
  border-left: 4px solid var(--accent-primary);
}

/* SVG connection lines */
.graph-connections {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.graph-edge {
  stroke: var(--border-subtle);
  stroke-width: 2px;
  fill: none;
}

.graph-edge--primary {
  stroke: var(--border-primary);
  stroke-width: 2px;
}

.graph-edge--cross-link {
  stroke: var(--accent-secondary);
  stroke-dasharray: 6 3;
  stroke-width: 1.5px;
}
```

---

## RESOURCE 11: Responsive Spatial Layouts — Mobile Collapse Patterns

**URL:** [CSS Grid Layout Guide — CSS-Tricks](https://css-tricks.com/css-grid-layout-guide/) + [Responsive CSS Grid — Medium/CodeToDeploy](https://medium.com/codetodeploy/css-grid-responsive-design-the-mobile-first-approach-that-actually-works-194bdab9bc52) + [Realizing Common Grid Layouts — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
**Type:** Implementation patterns (CSS responsive design)

### Key UX/UI Practice

Spatial layouts must degrade gracefully to linear layouts on mobile. Three patterns emerge:

**1. Media Query Collapse:**
```css
/* Desktop: spatial map */
.layout {
  grid-template-areas:
    "nav main aside"
    "nav main aside";
}

/* Mobile: linear list */
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "main"
      "nav"
      "aside";
  }
}
```
Key principle: Only the parent container's `grid-template-areas` changes. No child CSS modifications needed.

**2. Auto-Responsive (No Media Queries):**
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```
Uses `auto-fit` + `minmax()` to automatically adjust column count based on available space. Cards flow naturally without breakpoints.

**3. Mobile-First Progressive Enhancement:**
Start with single-column mobile layout, add grid complexity at larger breakpoints:
```css
/* Mobile first: single column */
.layout { display: block; }

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop: spatial map */
@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "left hub right";
  }
}
```

### Mapping to WAVE + ISLANDS Density Patterns

| Responsive Pattern | WAVE Application | ISLANDS Application |
|--------------------|-----------------|---------------------|
| Spatial to linear collapse | WAVE flattens to single dimension on mobile | Islands stack vertically — archipelago becomes a coastline |
| Auto-fit grid | WAVE frequency adapts to viewport width | Island count per row adjusts automatically |
| Mobile-first | WAVE starts as 1D, gains 2D at wider viewports | Islands exist as a list first, become a map on desktop |
| Named area reflow | WAVE topology can be redefined per breakpoint | Island positions can be rearranged per viewport |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Grid items maintain sharp edges at all breakpoints |
| No Shadows | No shadow-based depth cues that break on mobile reflow |
| Serif = Wisdom | Serif headings remain serif at all sizes — responsive font-size, not font-family |
| Callout DNA | 4px left border maintained at all breakpoints — never collapses |
| Squares | Square badges scale down but never become circles |

### New Techniques for OD-005

- **Three-breakpoint spatial model (R1-005):** Desktop: full spatial map (3-column hub-spoke). Tablet: simplified 2-column layout. Mobile: single-column list with hub as first item. This is the R1-005 responsive collapse applied to spatial documentation.
- **Hub-first mobile ordering:** On mobile, the hub (overview) card must appear FIRST in the list. CSS Grid `order` property or `grid-template-areas` reordering ensures this regardless of DOM order.
- **Connection lines hidden on mobile:** SVG connection overlays are hidden on mobile with `display: none`. The linear list order IS the connection logic on small screens.
- **Card minimum width:** Use `minmax(280px, 1fr)` to ensure spoke cards never get narrower than readable width, triggering natural reflow.

### Implementation Sketch

```css
/* Three-breakpoint spatial model */
.spatial-doc {
  /* Mobile first: linear list */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.spatial-doc .hub-card {
  order: -1; /* Hub always first on mobile */
  border: 2px solid var(--border-primary);
  border-radius: 0;
  box-shadow: none;
  padding: 1.5rem;
  font-family: var(--font-serif);
}

.spatial-doc .spoke-card {
  border-left: 4px solid var(--accent-primary);
  border-radius: 0;
  box-shadow: none;
  padding: 1rem 1rem 1rem 1.5rem;
}

/* Tablet: 2-column grid */
@media (min-width: 768px) {
  .spatial-doc {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .spatial-doc .hub-card {
    grid-column: 1 / -1; /* Hub spans full width */
  }
}

/* Desktop: full spatial map */
@media (min-width: 1024px) {
  .spatial-doc {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas:
      ".     hub    .    "
      "left  hub    right"
      "left  bottom right";
    gap: 2rem;
    padding: 2rem;
  }

  .spatial-doc .hub-card {
    grid-area: hub;
    grid-column: auto; /* Reset span */
  }
}
```

---

## RESOURCE 12: ARIA Landmarks & Accessibility in Spatial Layouts

**URL:** [Landmark Regions — W3C WAI ARIA APG](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) + [ARIA: navigation role — MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role) + [General Principles: ARIA Landmarks Example — W3C](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/general-principles.html)
**Type:** Accessibility standard (W3C WAI)

### Key UX/UI Practice

ARIA landmark regions make spatial layouts accessible by programmatically representing the visual structure that sighted users perceive through layout and spacing. Three fundamental steps:

1. **Identify logical structure:** Break pages into perceivable content areas that designers show through visual alignment
2. **Assign appropriate roles:** Use semantic HTML elements that map to ARIA roles automatically
3. **Label areas meaningfully:** When landmarks repeat, use `aria-labelledby` or `aria-label`

HTML5 elements that create landmarks automatically:

| HTML Element | ARIA Role | Use Case |
|-------------|-----------|----------|
| `<header>` (in body) | banner | Site-level header/branding |
| `<nav>` | navigation | Navigation sections |
| `<main>` | main | Primary content area |
| `<aside>` | complementary | Secondary/supporting content |
| `<footer>` (in body) | contentinfo | Site-level footer |
| `<section>` (with name) | region | Named content region |
| `<search>` | search | Search functionality |

Critical guideline: **Include ALL perceivable content in landmarks.** Screen reader users who navigate by landmarks will miss any content outside landmark regions.

Naming convention: "Do not use the landmark role as part of the label." A `<nav aria-label="Site Navigation">` will be announced as "Site Navigation Navigation" — use `aria-label="Site"` instead.

### Mapping to WAVE + ISLANDS Density Patterns

| Accessibility Concept | WAVE Application | ISLANDS Application |
|-----------------------|-----------------|---------------------|
| Landmark regions | Each WAVE zone (hub, spoke, connector) is a landmark | Each island is a named landmark region |
| Skip links | Skip to specific WAVE position (e.g., "Skip to main content") | "Jump to island" — direct navigation between islands |
| Landmark navigation | Screen reader users traverse WAVE by landmark | Screen reader users jump between islands |
| Labeled regions | Each WAVE zone has an accessible name | Each island has a descriptive `aria-label` |

### Soul Piece Integration

| Soul Piece | Application |
|-----------|-------------|
| Sharp Edges | Accessibility is structural — sharp edges reinforce clear boundaries for ALL users |
| No Shadows | Shadows are purely visual — no accessibility benefit. Borders + landmarks are the accessible alternative |
| Serif = Wisdom | Headings referenced by `aria-labelledby` use serif — wisdom markers serve double duty as accessibility anchors |
| Callout DNA | Callouts get `role="note"` — accessible annotation pattern |
| Squares | Visual square badges get `aria-label` describing their content — not just visual decoration |

### New Techniques for OD-005

- **Every spatial zone is a landmark:** The hub is `<main>`, spokes are `<section aria-label="[Spoke Name]">`, navigation is `<nav aria-label="System Map">`, surrounding content is `<aside>`. ALL content lives in landmarks.
- **Skip links for spatial navigation:** Include a "Skip to" menu that lets keyboard users jump directly to any spoke without traversing the entire map. This is the keyboard equivalent of clicking a node.
- **No visual-only information:** Any information communicated through spatial position (e.g., "these components are close because they are related") must ALSO be communicated through text labels or ARIA relationships.
- **Landmark labeling:** Each `<section>` in the map gets a descriptive `aria-label` derived from its heading, not from its visual position. "Authentication Service" not "Left sidebar, third item."

### Implementation Sketch

```html
<!-- Accessible spatial map structure -->
<header role="banner">
  <h1>System Architecture</h1>

  <!-- Skip links for spatial navigation -->
  <nav aria-label="Quick Navigation">
    <ul class="skip-links">
      <li><a href="#hub">Skip to Overview Hub</a></li>
      <li><a href="#auth">Skip to Authentication</a></li>
      <li><a href="#api">Skip to API Gateway</a></li>
      <li><a href="#data">Skip to Data Layer</a></li>
    </ul>
  </nav>
</header>

<nav aria-label="System Map">
  <!-- Spatial map navigation — landmark region -->
  <div class="system-map" role="img" aria-label="System architecture showing 5 interconnected components">
    <!-- Mini-map or overview diagram -->
  </div>
</nav>

<main id="hub">
  <h2>System Overview</h2>
  <!-- Hub content -->
</main>

<section id="auth" aria-label="Authentication Service">
  <h2>Authentication Service</h2>
  <!-- Spoke content -->
</section>

<section id="api" aria-label="API Gateway">
  <h2>API Gateway</h2>
  <!-- Spoke content -->
</section>

<section id="data" aria-label="Data Layer">
  <h2>Data Layer</h2>
  <!-- Spoke content -->
</section>

<footer role="contentinfo">
  <!-- Return to hub link, breadcrumbs -->
  <nav aria-label="Breadcrumb">
    <ol>
      <li><a href="#hub">Overview</a></li>
      <li aria-current="page">Current Section</li>
    </ol>
  </nav>
</footer>
```

```css
/* Skip links — visible on keyboard focus */
.skip-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.5rem;
}

.skip-links a {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 0.5rem 1rem;
  background: var(--accent-primary);
  color: var(--surface-primary);
  border-radius: 0;
  text-decoration: none;
  font-weight: 600;
}

.skip-links a:focus {
  position: static;
  left: auto;
}

/* Landmark-aware spatial sections */
section[aria-label] {
  border: 1px solid var(--border-subtle);
  border-radius: 0;
  box-shadow: none;
  padding: 2rem;
  scroll-margin-top: 5rem; /* Offset for fixed header when using skip links */
}
```

---

## CROSS-RESOURCE SYNTHESIS

### Convergence Points (All or Most Resources Agree)

1. **Hub-spoke is the dominant spatial documentation pattern.** Every resource examining documentation architecture converges on a central overview page (hub) with specialized detail pages (spokes). This is Lynch's "nodes," NN/G's "hub-and-spoke model," and concept mapping's "root node" — all describing the same spatial structure.

2. **Spatial position communicates relationship.** Closer items are more related. The hub's center position signals its primacy. Left/right symmetry signals equal importance. Top-down signals hierarchy. This spatial vocabulary is universal across urban planning, UX, and cognitive science.

3. **Responsive collapse must preserve hierarchy.** When spatial maps collapse to linear lists on mobile (R1-005), the hub must appear first, followed by spokes in priority order. Spatial relationships become sequence relationships. Connection lines disappear, replaced by proximity.

4. **Every spatial zone needs a name.** ARIA landmarks, Lynch's "imageability," and concept map labels all converge: unnamed zones are invisible zones. Every region in the map must have a descriptive label accessible through both visual and programmatic means.

5. **7-15 nodes is the complexity sweet spot.** Concept map research, cognitive load theory, and practical UX patterns all suggest that a single view level should contain no more than 15 interactive nodes. More complexity should be pushed to deeper zoom levels (fractal depth).

6. **"You are here" is non-negotiable.** Every wayfinding resource — from Lynch's landmarks to NN/G's eight mechanisms to ARIA landmark navigation — insists that users must always know their current position. OD-005 must implement multiple redundant position indicators.

### Divergence Points (Resources Disagree)

1. **Map as primary vs supplementary navigation:** roadmap.sh makes the map THE navigation (no sidebar). NN/G's breadcrumb guidelines treat spatial indicators as supplementary. OD-005 should use the map as PRIMARY navigation on desktop with breadcrumbs as supplementary, collapsing to breadcrumb-primary on mobile.

2. **CSS-only vs JavaScript interactivity:** SVG/CSS approaches provide hover and click without JavaScript. React Flow/D3 provide richer interactions (zoom, pan, drag). OD-005 should start CSS-only and add JavaScript enhancement progressively.

3. **Force-directed vs fixed positioning:** D3-Force organically positions nodes. CSS Grid fixes positions explicitly. For documentation (where position communicates meaning), FIXED positioning via CSS Grid is superior — positions should be intentional, not emergent.

### Novel Synthesis for OD-005

Combining these external practices with the KortAI constraint system produces a unique model:

**THE SPATIAL WAYFINDING MODEL (OD-005)**

```
                    ┌──────────────────────────────────────────────────┐
                    │  LANDMARK BAR (persistent)                      │
                    │  Logo | System Map | You Are Here: [Hub]        │
                    │  Skip to: [Auth] [API] [Data] [Pipeline]        │
                    ├──────────────────────────────────────────────────┤
                    │                                                  │
                    │        ┌─────────┐                              │
                    │        │  INPUT  │                              │
                    │        └────┬────┘                              │
                    │             │                                    │
                    │   ┌─────┐  │  ┌──────┐                         │
                    │   │CONF │──┼──│ HUB  │──┐                      │
                    │   └─────┘  │  │      │  │                      │
                    │             │  └──┬───┘  │                      │
                    │             │     │      │                      │
                    │        ┌────┴────┐│  ┌───┴────┐                │
                    │        │PIPELINE ││  │ OUTPUT │                │
                    │        └─────────┘│  └────────┘                │
                    │                    │                              │
                    │  ■ = Hub (Serif heading, 3px border)            │
                    │  □ = Spoke (Callout DNA, 4px left border)      │
                    │  ─ = Connection (labeled relationship)          │
                    │  ┈ = Cross-link (dashed, secondary)            │
                    │                                                  │
                    │  DENSITY: Hub=WAVE trough (sparse overview)     │
                    │           Spokes=WAVE crest (dense detail)      │
                    │           Connections=ISLANDS (labeled paths)    │
                    │                                                  │
                    │  FRACTAL: Click any spoke to reveal sub-map    │
                    │           Hub → Section Hub → Detail Spokes     │
                    │                                                  │
                    └──────────────────────────────────────────────────┘

                    MOBILE COLLAPSE (R1-005):
                    ┌──────────────┐
                    │ ■ HUB        │
                    │ □ INPUT      │
                    │ □ CONFIG     │
                    │ □ PIPELINE   │
                    │ □ OUTPUT     │
                    └──────────────┘
```

---

## DD PATTERN MAPPING TABLE

| Resource | DD-F-006 FRACTAL | DD-F-003 ISLANDS | DD-F-010 Spatial Density | Other DD Patterns |
|----------|-----------------|------------------|--------------------------|-------------------|
| R1: Lynch Five Elements | Districts contain sub-districts fractally | Nodes are islands, districts are archipelagos | Spatial position communicates density | WAVE: Paths as wave propagation |
| R2: NN/G Hub-Spoke | Hub > Sub-hub > Spoke hierarchy | Hub and spokes as distinct islands | Hub sparse, spokes dense | — |
| R3: Cognitive/Concept Maps | Hierarchical levels repeat fractally | Concept clusters as islands | Node density varies by hierarchy level | WAVE: Cross-links as wave interference |
| R4: roadmap.sh | Expandable sub-maps within nodes | Each topic cluster is an island | Detail density on node expansion | CRESCENDO: Progressive depth revelation |
| R5: You Are Here / Local Nav | Position indicators at every fractal level | Current island highlighted | Density of position cues varies by depth | — |
| R6: CSS Grid / SVG Maps | Grid areas nest fractally via subgrids | Named grid areas as islands | Empty cells create breathing space | BREATHING: Dot cells as whitespace |
| R7: Breadcrumbs / Wayfinding | Breadcrumbs show all fractal levels | Breadcrumb nodes as island markers | Breadcrumb density proportional to depth | — |
| R8: Concept Map Research | 2-3 hierarchy levels optimal | 7-15 nodes per island | Cross-links create density hotspots | — |
| R9: Architecture Docs | Context > Container > Component zoom | Three diagram types as three island scales | Diagram density increases with zoom | GEOLOGICAL: Abstraction layers |
| R10: React Flow / D3 | Zoom levels as fractal scales | Node clusters as islands | Force simulation creates density variation | — |
| R11: Responsive Collapse | Fractal structure preserved in collapse order | Islands stack vertically on mobile | Mobile density is linear, not spatial | — |
| R12: ARIA Landmarks | Landmarks at every fractal level | Each landmark is a named island | Screen reader navigation follows density | — |

---

## R1 FINDING APPLICATION MAP

| R1 Finding | How OD-005 Applies It | Evidence from External Research |
|-----------|----------------------|--------------------------------|
| **R1-003: Hub visible in initial viewport** | Hub node (system overview) occupies center of initial viewport with no scrolling required. Spoke nodes visible at edges or accessible via labeled connections. | NN/G hub-and-spoke: hub is the catch-all first visible element. Lynch: nodes are the orientation foundation. |
| **R1-004: Hub in center, spokes on sides (Three-Column Doctrine)** | CSS Grid 3-column layout: left spokes | hub center | right spokes. Grid-template-areas creates this visually in CSS. | CSS Grid named areas naturally support 3-column layouts. NN/G: hub should link bidirectionally to all spokes. |
| **R1-005: Responsive Collapse — map to list on mobile** | Desktop: spatial 3-column map. Tablet: 2-column simplified map. Mobile: single-column list with hub first. Connection lines hidden on mobile. | MDN/CSS-Tricks: grid-template-areas reflow requires only parent CSS change. Mobile-first approach: start linear, add spatial at larger viewports. |
| **R1-013: Do/Don't Grid** | Good navigation patterns (labeled connections, clear hierarchy, hub visibility) vs bad patterns (dead ends, missing breadcrumbs, circular navigation) shown in side-by-side spatial comparison. | NN/G: anti-patterns include dead-end pages, overly subtle indicators. System architecture docs: clear direction arrows vs ambiguous connections. |

---

## OD-005 IMPLEMENTATION PRIORITIES

### Tier 1: Must Implement (Validated by 4+ Resources)

- [ ] Hub-spoke spatial layout with CSS Grid named areas (R1-003, R1-004)
- [ ] Hub visible in initial viewport, centered, with 3px border and serif heading
- [ ] Spoke cards with 4px left-border callout DNA pattern
- [ ] "You Are Here" position indicator using multiple mechanisms (heading, breadcrumb, visual highlight)
- [ ] Responsive collapse: 3-column map -> 2-column grid -> 1-column list (R1-005)
- [ ] All content within ARIA landmark regions, labeled with `aria-label`
- [ ] Skip links for keyboard/screen-reader spatial navigation
- [ ] 7-15 nodes maximum at any single view level
- [ ] Labeled connections between all nodes (relationship descriptions)
- [ ] Breadcrumbs showing hierarchical position (location type, not history)
- [ ] Fractal self-similarity: hub page -> section hubs -> detail spokes (DD-F-006)
- [ ] Sharp edges everywhere: border-radius: 0 on all nodes, cards, containers
- [ ] No shadows anywhere: box-shadow: none on all elements

### Tier 2: Should Implement (Validated by 2-3 Resources)

- [ ] Mini-map position overview (fixed corner widget showing current position in full map)
- [ ] Do/Don't comparison grid for navigation patterns (R1-013)
- [ ] Three-level zoom navigation (Context -> Container -> Component)
- [ ] Hub inventory header: "This system contains X components, Y patterns, Z guides"
- [ ] SVG connection lines between grid areas (CSS-only hover interactions)
- [ ] Return-to-hub link in body content of every spoke page (not just nav)
- [ ] Sibling navigation (previous/next spoke) at bottom of each spoke page
- [ ] URL-addressable spatial zones (#hub, #auth, #api, etc.)
- [ ] Progress tracking: which nodes the user has visited
- [ ] Square node type badges: [HUB], [SPOKE], [SUB-HUB]

### Tier 3: Could Implement (Novel Synthesis or Single-Source Validation)

- [ ] Force-layout-inspired organic positioning for secondary connections
- [ ] Multiple path views: same content arranged by role (developer vs architect)
- [ ] Concept map cross-links between non-adjacent spokes (dashed lines)
- [ ] User-validated spatial model (card sorting test to verify positions)
- [ ] Imageability scoring per section (how memorable is each zone?)
- [ ] Data flow direction arrows (inputs left, processing center, outputs right)
- [ ] Expandable sub-maps within nodes (click to reveal inner structure)
- [ ] Connection labels as hover tooltips on SVG lines

---

## IMPLEMENTATION CHECKLIST FOR OD-005 BUILD

### Structure (Before Coding)

- [ ] Define the focus question: "What does this system do?"
- [ ] List all components (aim for 7-15 at top level)
- [ ] Map relationships: "Component A --[relationship]--> Component B"
- [ ] Identify the hub (system overview)
- [ ] Identify spoke categories (e.g., Input, Processing, Output, Config)
- [ ] Determine fractal depth: how many zoom levels? (Aim for 3: Context, Container, Component)
- [ ] Map mobile collapse order: which nodes appear first in linear list?

### Layout (CSS Grid Foundation)

- [ ] Create 3-column CSS Grid with named areas
- [ ] Place hub in center area
- [ ] Place spokes in left/right areas
- [ ] Add empty cell (`.`) breathing space around hub
- [ ] Define tablet breakpoint (768px): 2-column collapse
- [ ] Define mobile breakpoint (480px): 1-column collapse with hub first
- [ ] Test that hub is fully visible in initial viewport at 1440px

### Connections (SVG/CSS Lines)

- [ ] Add SVG overlay for connection lines between grid areas
- [ ] Label each connection line with relationship text
- [ ] Style primary connections as solid, cross-links as dashed
- [ ] Hide connection overlay on mobile
- [ ] Ensure connection lines do not interfere with click targets

### Soul Compliance

- [ ] Audit: border-radius: 0 on every element
- [ ] Audit: box-shadow: none on every element
- [ ] Hub heading uses Instrument Serif (font-serif)
- [ ] Spoke cards use 4px left border (callout DNA)
- [ ] Type badges are squares, not circles or pills
- [ ] Colors from KortAI token system only

### Wayfinding

- [ ] Implement "You Are Here" breadcrumb with hub in serif
- [ ] Add skip links for keyboard navigation
- [ ] Include return-to-hub link in body of every spoke
- [ ] Add sibling navigation (prev/next spoke) at page bottom
- [ ] Test: can a user describe their position after one page visit?
- [ ] Test: are there any dead-end pages with no exit navigation?

### Accessibility

- [ ] All content within ARIA landmark regions
- [ ] Every `<section>` has `aria-label` (not duplicating role name)
- [ ] Breadcrumb uses `<nav aria-label="Breadcrumb">` with `<ol>`
- [ ] Skip links visible on keyboard focus
- [ ] Tab order follows logical reading order, not spatial position
- [ ] SVG map has `role="img"` with descriptive `aria-label`
- [ ] Connection line information available as text (not visual-only)

### Density Patterns

- [ ] Hub zone: WAVE trough — sparse overview, generous whitespace, max 3 sentences
- [ ] Spoke zones: WAVE crest — dense detail, compact padding, full content
- [ ] Navigation paths: ISLANDS — labeled connection nodes as dense information clusters
- [ ] Fractal: each zoom level repeats the sparse-hub/dense-spoke pattern
- [ ] Transition edges: clear visual boundary between hub and spoke density zones

---

## SOURCES

1. [The Image of the City — Wikipedia](https://en.wikipedia.org/wiki/The_Image_of_the_City)
2. [Customer-Service Information: Hub-and-Spoke Model — NN/G](https://www.nngroup.com/articles/customer-service-model/)
3. [Cognitive Maps, Mind Maps, and Concept Maps — NN/G](https://www.nngroup.com/articles/cognitive-mind-concept/)
4. [roadmap.sh — Developer Roadmaps](https://roadmap.sh/)
5. [Navigation: You Are Here — NN/G](https://www.nngroup.com/articles/navigation-you-are-here/)
6. [CSS Grid Areas — Ahmad Shadeed](https://ishadeed.com/article/css-grid-area/)
7. [UX Crash Course: Wayfinding — Progress](https://www.progress.com/blogs/ux-crash-course-wayfinding)
8. [Concept Maps — Wikipedia](https://en.wikipedia.org/wiki/Concept_map)
9. [System Architecture Documentation — freeCodeCamp](https://www.freecodecamp.org/news/system-architecture-documentation-best-practices-and-tools/)
10. [React Flow: Layouting Overview](https://reactflow.dev/learn/layouting/layouting)
11. [CSS Grid Layout Guide — CSS-Tricks](https://css-tricks.com/css-grid-layout-guide/)
12. [Landmark Regions — W3C WAI ARIA APG](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)

### Supplementary Sources Referenced

- [Making Sense of a Place: Kevin Lynch — IAC](https://www.theiaconference.com/sessions/making-sense-of-a-place-lessons-from-kevin-lynchs-the-image-of-the-city-and-urban-design/)
- [Kevin Lynch's 5 Elements — ArchitectureCourses.org](https://www.architecturecourses.org/design/kevin-lynchs-5-elements-city-guide-urban-design)
- [Cognitive Maps in UX — IxDF](https://www.interaction-design.org/literature/article/cognitive-maps-ux)
- [How roadmap.sh Revolutionizes Developer Learning — Ones.com](https://ones.com/blog/roadmap-sh-revolutionizes-developer-learning-paths/)
- [Local Navigation — NN/G](https://www.nngroup.com/articles/local-navigation/)
- [How to Make a Clickable SVG Map — freeCodeCamp](https://www.freecodecamp.org/news/how-to-make-clickable-svg-map-html-css/)
- [Breadcrumbs: 11 Design Guidelines — NN/G](https://www.nngroup.com/articles/breadcrumbs/)
- [Breadcrumb Pattern — W3C WAI ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)
- [Concept Map Complexity and Learning — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8788906/)
- [Concept Maps — UNC Learning Center](https://learningcenter.unc.edu/tips-and-tools/using-concept-maps/)
- [Information Architecture Models — NN/G](https://www.nngroup.com/videos/information-architecture-models/)
- [Web Style Guide: Presenting IA](https://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)
- [Responsive CSS Grid Mobile-First — Medium](https://medium.com/codetodeploy/css-grid-responsive-design-the-mobile-first-approach-that-actually-works-194bdab9bc52)
- [Common Grid Layouts — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
- [CSS Flowcharts Collection — DevSnap](https://devsnap.me/css-flowcharts)
- [ARIA: navigation role — MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [D3-Force — Observable](https://d3js.org/d3-force)
- [React Flow Force Layout Example](https://reactflow.dev/examples/layout/force-layout)
- [AWS Reference Architecture Diagrams](https://aws.amazon.com/architecture/reference-architecture-diagrams/)
- [SVG Map Rollovers — CSS-Tricks](https://css-tricks.com/svg-map-rollovers/)

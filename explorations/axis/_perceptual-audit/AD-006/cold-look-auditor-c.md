# Cold Look -- Auditor C (Spatial + Grid)

## 1440px Cold Look

- **Gut reaction:** Stately and serious. The dark header band with an oversized serif title feels authoritative -- like opening a well-designed academic journal. The warm cream body creates a clear stage. The transition from dark hero to light body is clean and confident.
- **Worst thing:** Massive dead zones between sections. At multiple scroll positions, the ENTIRE viewport is blank warm cream -- no content, no borders, no visual anchors. The reader scrolls through nothingness for full screen-heights between content zones. The Z-Pattern layout in Section 1 also feels lopsided, with weight pulling left and air leaking right.
- **Best thing:** The section label system ("SECTION 01 -- Z-PATTERN OVERVIEW") and the serif headings provide excellent wayfinding. The header band is commanding. The F-Pattern section (Section 2) with its tables and single-column flow reads cleanly.
- **Ship verdict:** YES WITH RESERVATIONS

## 768px Cold Look

- **Gut reaction:** The page is largely invisible. At scroll position 0, the viewport shows blank cream with barely a fragment of vertical text visible. Content appears crushed or displaced. The bento grid text collapses to single-character-per-line vertical stacking. The experience is broken.
- **Worst thing:** Multiple viewport-height regions of pure emptiness. Content that exists in the DOM is not rendering visibly in the viewport at expected positions. The bento cards crush their content to unreadable vertical character columns.
- **Best thing:** The accessibility tree confirms all content is present and semantically correct. The DOM structure is robust even when visual rendering fails.
- **Ship verdict:** NO (layout breakage across multiple sections)

## 1024px Cold Look

- **Gut reaction:** Similar to 1440 but tighter. The hero scales down. Single-column sections (F-Pattern) read cleanly. Multi-column sections (Spiral strata, Choreography spokes) show similar dead-space voids as the larger viewport.
- **Worst thing:** The inter-section dead zones persist. The stratum cards in Section 4 are visible but the bottom two-thirds of the section is empty cream.
- **Best thing:** The F-Pattern analytical sections maintain their readability.
- **Ship verdict:** YES WITH RESERVATIONS

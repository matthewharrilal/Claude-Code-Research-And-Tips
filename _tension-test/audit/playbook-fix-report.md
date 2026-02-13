# Playbook Fix Report

**Agent:** fixer-playbook
**Files Fixed:** 5/5
**Soul Violations Introduced:** 0

---

## File 1: metaphor-1-apprenticeship-workshop.html
**Fix:** HIGH -- Break principle card grid monotony

**Changes:**
- Split the 8-card tool-wall-grid into two groups of 4
- First 4 cards (Principles 01-04) reclassed as `.tool-card-heavy` with:
  - 4px red left border (`var(--color-primary)`)
  - Larger heading text (`1.25rem` vs `1.125rem`)
  - Slightly more padding (`28px` vs `24px`)
  - Red principle number labels instead of gray
- Added `.tool-wall-divider` between the two groups -- a labeled breathing zone ("Applied Practices") with `var(--color-medium)` background
- Second 4 cards (Principles 05-08) remain as lighter `.tool-card` style
- Visual hierarchy now communicates that first 4 are foundational, last 4 are applied

**Soul compliance:** border-radius: 0 (none added), box-shadow: none, border widths: 1px and 4px only

---

## File 2: metaphor-2-construction-site.html
**Fix:** MEDIUM -- Lighten dark sections

**Changes:**
- `.load-bearing-section` background changed from `var(--color-dark)` (#1A1A1A) to `#2A2A2A`
- `.load-bearing-section` padding reduced from `64px 40px` to `48px 40px`
- `.load-bearing-wall` padding reduced from `24px 24px 24px 32px` to `16px 20px 16px 28px`
- `.load-bearing-wall` margin-bottom reduced from `32px` to `16px`
- `.iron-law-block` padding reduced from `24px` to `20px`, margin from `32px 0` to `16px 0`
- Mobile responsive padding for load-bearing-section reduced from `48px 24px` to `32px 24px`
- Iron Law callout retains its dramatic 3px red border -- still prominent

**Soul compliance:** All borders remain at 1px, 3px, or 4px. No border-radius, no box-shadow.

---

## File 3: metaphor-3-geological-stratigraphy.html
**Fix:** HIGH -- Fix formation grid readability

**Changes:**
- `.formation-block` padding increased from `20px` to `28px` (+8px breathing room)
- `.formation-block p` font-size increased from `0.875rem` to `0.9375rem` (+1px equivalent)
- `.formation-block p` line-height increased from `1.5` to `1.6`
- All 8 formation description colors brightened from `#888` to `#B0B0B0` (significant contrast improvement)
- All 8 formation ID labels brightened from `#888` to `#999`
- The compression metaphor is maintained -- text is still compact relative to the rest of the page, but now actually readable

**Soul compliance:** No border-radius, no box-shadow, no filter changes. All existing borders untouched.

---

## File 4: metaphor-4-elevation-map.html
**Fix:** MEDIUM -- Change 4-column to 3-column grid

**Changes:**
- `.topo-grid` grid-template-columns changed from `repeat(4, 1fr)` to `repeat(3, 1fr)`
- `.topo-cell` padding increased from `16px` to `20px` (more room per cell)
- `.topo-cell-desc` font-size increased from `0.75rem` to `0.8125rem`
- `.topo-cell-desc` line-height increased from `1.4` to `1.5`
- Border removal selectors updated: `:nth-child(4n)` to `:nth-child(3n)`, `:nth-last-child(-n+4)` to `:nth-last-child(-n+2)`
- Responsive (768px) now goes to single column (`1fr`) instead of 2-column, with all right borders removed
- 8 principles now flow as 3+3+2 rows instead of 4+4 -- last row has 2 cells spanning naturally

**Soul compliance:** No border-radius, no box-shadow. Border widths remain 1px.

---

## File 5: metaphor-5-curriculum-syllabus.html
**Fix:** MEDIUM -- Break repetitive semester pattern

**Changes:**
- Added `.arc-container` CSS: 3px left border, 24px left padding -- creates a visible "track" for each arc
- Added `.semester-inset` CSS: additional 32px left margin + 1px left border for alternating visual rhythm
- Added `.midterm-break` CSS: dark background, centered text, red label -- a dramatic visual checkpoint
- Semesters 0-3 wrapped in "Arc I -- Fundamentals" container
  - Semesters 0 and 2 (even) use `.semester-inset` for visual alternation
  - Semesters 1 and 3 (odd) remain full-width within the arc
- Added midterm assessment break between Arcs I and II -- dark strip with italic message about the shift from individual to organizational scale
- Semesters 4-7 wrapped in "Arc II -- Advanced Operations" container with red left border
  - Semesters 5 and 7 (odd in this arc) use `.semester-inset` for alternation
  - Semesters 4 and 6 remain full-width
- Advanced semesters split into individual blocks (4, 5, 6, 7) instead of grouped pairs (4-5, 6-7) -- each semester now has its own heading and description
- Responsive: `.midterm-break` and `.semester-inset` adjust padding/margin for mobile

**Soul compliance:** border-radius: 0 throughout. box-shadow: none. Border widths: 1px and 3px only.

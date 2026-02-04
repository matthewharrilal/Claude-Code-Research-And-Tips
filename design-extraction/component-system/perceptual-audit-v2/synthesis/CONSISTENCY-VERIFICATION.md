# CONSISTENCY VERIFICATION
## KortAI Component Verification Checklists

**Version:** 1.0
**Date:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:** Phase 4 Tracking + Checkpoints

═══════════════════════════════════════════════════════════════════════════════
## UNIVERSAL VERIFICATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

Apply to EVERY component:

| # | Check | Verification Method | Pass Criteria |
|---|-------|---------------------|---------------|
| 1 | `border-radius: 0` | Inspect element | All corners 0px |
| 2 | `box-shadow: none` | Inspect element | No shadow present |
| 3 | Background appropriate | Visual inspection | Transparent, cream, or dark slate |
| 4 | Only allowed accents | Color audit | Red, blue, green, amber, purple only |
| 5 | Display text uses serif | Font inspection | Instrument Serif on headlines/labels |
| 6 | Body text uses sans | Font inspection | Inter on paragraphs |
| 7 | Code uses mono | Font inspection | JetBrains Mono on code |
| 8 | Borders 2px+ when present | Inspection | No 1px timid borders |
| 9 | No icons for meaning | Visual inspection | Typography carries all meaning |
| 10 | Whitespace generous | Measurement | Padding 20px+, line-height 1.6+ |

═══════════════════════════════════════════════════════════════════════════════
## COMPONENT-SPECIFIC CHECKLISTS
═══════════════════════════════════════════════════════════════════════════════

### Code Snippet — The Precise Transcriptionist

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Dark background | #1E1E1E or similar dark slate |
| 2 | Left border accent | None (color mass defines boundary) |
| 3 | No header bar/window chrome | No traffic light dots |
| 4 | No visible line numbers | Optional, ghosted if present |
| 5 | Syntax highlighting 2-3 colors | Not rainbow |
| 6 | Copy button hover-reveal | Not always visible |
| 7 | Sharp corners | border-radius: 0 |
| 8 | Flat design | box-shadow: none |

---

### Info Callout — The Senior Concierge

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Left border 4px blue | #4A90D9 |
| 2 | Background light blue tint | #F5F8FA or transparent |
| 3 | Label uppercase | 10-11px, medium weight |
| 4 | Body sans-serif | Inter |
| 5 | No info icon | Typography only |
| 6 | Asymmetric padding | 24px top, 28px bottom |
| 7 | Sharp corners | border-radius: 0 |

---

### Tip Callout — The Seasoned Colleague

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Left border 4px green | #4A9D6B |
| 2 | Background light green tint | #F5FAF5 or transparent |
| 3 | Structural DNA matches Info | Same spacing, same structure |
| 4 | No lightbulb icon | Typography only |
| 5 | Sharp corners | border-radius: 0 |

---

### Gotcha Callout — The Vigilant Sentinel

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Left border 4px red/coral | #E83025 or #C97065 |
| 2 | Background pink tint (optional) | #FEF6F5 or transparent |
| 3 | Structural DNA matches Info | Same spacing pattern |
| 4 | No warning triangle | Typography only |
| 5 | Not yellow background | Never #fff3cd |
| 6 | Sharp corners | border-radius: 0 |

---

### Essence Callout — The Archivist of Axioms

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Left border 4px amber | #D97706 or red |
| 2 | Background warm amber tint | #FEF9F0 |
| 3 | **Body font SERIF ITALIC** | Instrument Serif italic ★ UNIQUE |
| 4 | Optional attribution | Em-dash + source name |
| 5 | No decorative quote marks | Typography only |
| 6 | Sharp corners | border-radius: 0 |

---

### Challenge Callout — The Spirited Catalyst

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Left border 4px purple | #7C3AED |
| 2 | Background light purple tint | #F5F0FF or transparent |
| 3 | Structural DNA matches Info | Same spacing pattern |
| 4 | No danger indicators | Purple invites, not warns |
| 5 | Sharp corners | border-radius: 0 |

---

### File Tree — The Methodical Surveyor

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Monospace font | JetBrains Mono |
| 2 | Warm background | #FEFCF3 (cream) |
| 3 | Left border accent | 4px red |
| 4 | Blue folder names | #4A90D9 landmarks |
| 5 | Gray comments | Annotations recede |
| 6 | Line height 1.4-1.5 | Dense but readable |
| 7 | No dark terminal bg | Not #1e1e1e |
| 8 | Sharp corners | border-radius: 0 |

---

### Decision Matrix — The Impartial Cartographer

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Left border 4px red | #E83025 |
| 2 | Width auto (content-driven) | Not forced 100% |
| 3 | No header background | Transparent headers |
| 4 | Bottom borders only | No vertical lines |
| 5 | No zebra striping | Uniform background |
| 6 | No hover row highlight | Content, not app |
| 7 | No ✓/✗ icons | Typography only |
| 8 | Sharp corners | border-radius: 0 |

---

### Core Abstraction — The Sagacious Mentor

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Frame 1px border all sides | Bounded unit |
| 2 | Philosophy above code | Stacked layout |
| 3 | Philosophy serif italic | Instrument Serif |
| 4 | Code section dark bg | #1E1E1E |
| 5 | Red labels | #E83025 |
| 6 | Sharp corners | border-radius: 0 |

---

### Task Component — The Diligent Scribe

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Tasks touch (0px gap) | Workflow continuity |
| 2 | Checkbox sharp square | border-radius: 0 |
| 3 | Completed = strikethrough | Not removed |
| 4 | Checkbox red when checked | #E83025 fill |
| 5 | No gamification colors | No green/confetti |
| 6 | Header underline red | Section marker |

---

### Reasoning Component — The Deliberative Counselor

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Frame 1px border all sides | Bounded analysis |
| 2 | Two columns only | Binary comparison |
| 3 | Equal column heights | No visual bias |
| 4 | Subtle column divider | 1px, barely visible |
| 5 | Summary amber background | #FEF9F0 |
| 6 | No color-coded columns | Equal weight |
| 7 | Title serif italic | Frames the question |
| 8 | Sharp corners | border-radius: 0 |

═══════════════════════════════════════════════════════════════════════════════
## 55-PAIR CONSISTENCY MATRIX
═══════════════════════════════════════════════════════════════════════════════

### Matrix Overview

All 11 components create 55 unique pairs (11 × 10 ÷ 2).

### Key Consistency Checks

| Category | Check | Pass Criteria |
|----------|-------|---------------|
| **Gap** | Component-to-component gap | 24px universal |
| **Visual Language** | Border radius consistent | All 0px |
| **Visual Language** | Shadow consistent | All none |
| **Color** | Accent colors from palette | Only allowed colors |
| **Typography** | Font hierarchy consistent | Serif/Sans/Mono pattern |
| **Density** | No HIGH+HIGH without break | Breathing point between |

### High-Priority Pairs

| Pair | Specific Check |
|------|----------------|
| Code + Callout | 24px gap, distinct zones |
| Callout + Callout | 24px gap (NOT touching like tasks) |
| Matrix + Matrix | Prose break between |
| Core Abstraction + Reasoning | Both framed, distinguish frame style |
| File Tree + Code | Different backgrounds (cream vs dark) |

### Coexistence Golden Rules

1. **24px gap** between ALL component pairs
2. **Prose break** between same-type components
3. **Breathing point** after every 3-4 dense components
4. **Never** HIGH density followed by HIGH density without break

═══════════════════════════════════════════════════════════════════════════════
## PAGE-LEVEL VERIFICATION
═══════════════════════════════════════════════════════════════════════════════

### Documentation Page Checklist

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Density rhythm present | LOW → HIGH → LOW pattern |
| 2 | No more than 3 same-type in sequence | Variety maintains interest |
| 3 | Breathing points every 3-4 dense components | Reader rest |
| 4 | All components 24px apart | Consistent spacing |
| 5 | Prose provides context | Components not floating |

### Tutorial Page Checklist

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Checkpoints present | Reader can verify progress |
| 2 | Mix of prose and components | Show don't just tell |
| 3 | Callouts provide guidance | Tips, Gotchas, Info |
| 4 | Code blocks have context | Not just dumped |
| 5 | Challenge prompts for practice | Active learning |

### Reference Page Checklist

| # | Check | Pass Criteria |
|---|-------|---------------|
| 1 | Organized by semantic category | Clear structure |
| 2 | Decision Matrix for choices | When to use what |
| 3 | File Tree for structure | Map the territory |
| 4 | Quick-scan friendly | Headers, spacing |

═══════════════════════════════════════════════════════════════════════════════
## ACCESSIBILITY VERIFICATION
═══════════════════════════════════════════════════════════════════════════════

### WCAG AA Compliance

| Check | Requirement | Method |
|-------|-------------|--------|
| Color contrast (body) | 4.5:1 minimum | Contrast checker |
| Color contrast (large) | 3:1 minimum | Contrast checker |
| Focus visible | 2px outline | Tab through page |
| ARIA labels | Present on interactive | Inspect markup |
| Screen reader | Logical flow | VoiceOver/NVDA test |

### Known Blindspots (from Phase 4-ALPHA)

| Issue | Component | Priority |
|-------|-----------|----------|
| Missing focus states | All interactive | Critical |
| Missing ARIA labels | Most components | Critical |
| ASCII tree not screen-reader friendly | File Tree | High |
| Keyboard navigation untested | All | High |
| Mobile breakpoints undefined | All | High |
| Touch targets may be small | Task checkboxes | Medium |

═══════════════════════════════════════════════════════════════════════════════
## AUTOMATED VERIFICATION
═══════════════════════════════════════════════════════════════════════════════

### Playwright Test Pattern

```typescript
test('component has no banned properties', async ({ page }) => {
  const element = page.locator('.component');
  const styles = await element.evaluate(el => getComputedStyle(el));

  // Core checks
  expect(styles.borderRadius).toBe('0px');
  expect(styles.boxShadow).toBe('none');

  // No traffic light colors
  expect(styles.color).not.toContain('#28a745');
  expect(styles.color).not.toContain('#dc3545');
  expect(styles.backgroundColor).not.toContain('#fff3cd');
});
```

### CSS Audit Script

```bash
#!/bin/bash
# Search for banned properties in CSS files

echo "Checking for banned properties..."

# Rounded corners
grep -rn "border-radius:" --include="*.css" | grep -v ": 0"

# Shadows
grep -rn "box-shadow:" --include="*.css" | grep -v ": none"

# Bootstrap colors
grep -rn "#28a745\|#dc3545\|#ffc107\|#007bff" --include="*.css"

echo "Audit complete."
```

═══════════════════════════════════════════════════════════════════════════════
## VERIFICATION WORKFLOW
═══════════════════════════════════════════════════════════════════════════════

### Pre-Implementation

1. Review component-specific checklist
2. Identify all banned properties
3. Confirm editorial alternative approach

### During Implementation

1. Apply universal rules (6 rules)
2. Follow component-specific checklist
3. Test coexistence with adjacent components

### Post-Implementation

1. Run automated CSS audit
2. Visual inspection against checklist
3. Playwright test for computed styles
4. Accessibility audit
5. Page composition review

### Final Soul Test

Ask these questions:

1. "Could this appear in a magazine?" → If yes, PASS
2. "Could this be Bootstrap?" → If yes, FAIL
3. "Does every choice serve hierarchy?" → If yes, PASS
4. "Is there decoration without purpose?" → If yes, FAIL

═══════════════════════════════════════════════════════════════════════════════
## DOCUMENT METADATA
═══════════════════════════════════════════════════════════════════════════════

**Created:** 2026-02-04
**Phase:** 4A-E Synthesis
**Sources:**
- Phase 4-ALPHA re-audit findings
- Phase 4-BETA coexistence testing
- Phase 4-GAMMA page composition
- Phase 4-DELTA cross-component verification

**Purpose:** Verification checklists for KortAI component consistency

# Comprehensive Design Audit Framework

**Version:** 1.0
**Created:** 2026-01-26
**Purpose:** Maximum-efficacy UX/UI audit framework for docs-spa

---

## Table of Contents

1. [Philosophy](#philosophy)
2. [Question Categories (1-30)](#question-categories)
3. [Complete Question List (220 Questions)](#complete-question-list)
4. [Scope Guardrails](#scope-guardrails)
5. [Structured Evidence Format](#structured-evidence-format)
6. [Playwright MCP Integration](#playwright-mcp-integration)
7. [Execution Architecture](#execution-architecture)
8. [Parallelization Strategy](#parallelization-strategy)
9. [Output Structure](#output-structure)

---

## Philosophy

### Core Principle
**Design improves presentation, NOT content.**

This framework enforces rigorous, granular design auditing while protecting content integrity. Every question forces concentrated attention rather than surface-level scanning.

### The Senior Staff Designer Mindset
Every audit should be conducted as if a senior staff designer at Linear, Stripe, or Vercel were reviewing the work. The question is never "is this broken?" but "is this world-class?"

### Content Preservation Mandate
```
You may ONLY make changes that fall into these categories:

✅ ALLOWED (no approval needed):
- CSS property changes (colors, sizes, spacing, shadows, borders)
- Adding CSS classes to existing elements
- Adding wrapper elements for styling
- Restructuring HTML IF AND ONLY IF every word of content is preserved

🚫 PROHIBITED (without explicit user approval):
- Removing any text content
- Summarizing or "simplifying" content
- Rewording for "clarity"
- Deleting any element that contains content
- Making content "more digestible" by reducing it

If a question suggests content should change, LOG THE FINDING but DO NOT CHANGE IT.
```

---

## Question Categories

| # | Category | Focus Area | Questions |
|---|----------|------------|-----------|
| 1 | Information Architecture | Content structure | 1-6 |
| 2 | Visual Hierarchy | Importance & prominence | 7-12 |
| 3 | Typography | Text styling | 13-20 |
| 4 | Spacing & Rhythm | Whitespace | 21-27 |
| 5 | Color & Contrast | Color usage | 28-33 |
| 6 | Components | Component selection | 34-38 |
| 7 | Interactions & Micro-interactions | User actions | 39-45 |
| 8 | Animation & Motion | Movement | 46-50 |
| 9 | Consistency | Cross-app coherence | 51-54 |
| 10 | The Linear Designer Test | Professional scrutiny | 55-60 |
| 11 | Micro-Interactions Deep Dive | Interaction polish | 61-70 |
| 12 | Border & Surface Details | Visual details | 71-78 |
| 13 | Polish & Refinement | Final touches | 79-88 |
| 14 | Consistency Audit | Systematic consistency | 87-94 |
| 15 | Visual Design Critique | Portfolio-quality review | 95-102 |
| 16 | Cognitive Load & Mental Model | Ease of understanding | 103-110 |
| 17 | Information Density | Content balance | 111-117 |
| 18 | Accessibility (WCAG) | Universal access | 118-128 |
| 19 | States & Edge Cases | All states handled | 129-137 |
| 20 | Responsive Behavior | All screen sizes | 138-145 |
| 21 | Emotional Design | User feelings | 146-152 |
| 22 | Content Design | Words & labels | 153-160 |
| 23 | Grid & Alignment | Pixel precision | 161-168 |
| 24 | Visual Rhythm & Repetition | Patterns | 169-174 |
| 25 | Scale & Proportion | Size relationships | 175-180 |
| 26 | Color System Deep Dive | Advanced color | 181-187 |
| 27 | Typography Deep Dive | Advanced typography | 188-196 |
| 28 | Motion & Animation Deep Dive | Advanced motion | 197-203 |
| 29 | Comparative Analysis | Industry comparison | 204-209 |
| 30 | The Obsessive Detail Audit | Perfectionist review | 210-220 |

---

## Complete Question List

### Category 1: Information Architecture
*Is the content structured correctly for what it's trying to communicate?*

1. What type of information is this? (reference, tutorial, comparison, list, hierarchy, process)
2. What's the best HTML semantic structure for this? (table, definition list, ordered list, cards, accordion)
3. Is the current structure the OPTIMAL choice, or just "okay"?
4. If I explained this to someone verbally, how would I organize it?
5. Does the structure make relationships between items clear?
6. Could someone scan this and understand it in 5 seconds?

### Category 2: Visual Hierarchy
*Are the most important things most prominent?*

7. What's the single most important thing on this section?
8. Does the visual weight match the importance?
9. What should the eye go to first? Does it?
10. Is there a clear reading flow?
11. Are secondary elements appropriately subordinated?
12. Would a first-time visitor know where to look?

### Category 3: Typography
*Is every text element deliberately chosen?*

13. Is the font size appropriate for this content type?
14. Is the font weight conveying the right emphasis?
15. Is the line height comfortable for reading?
16. Is the letter spacing (tracking) appropriate?
17. Are headings establishing clear hierarchy (h1 > h2 > h3)?
18. Is body text readable at this size?
19. Are code/monospace sections clearly differentiated?
20. Is there too much or too little contrast in weights?

### Category 4: Spacing & Rhythm
*Does the whitespace feel intentional?*

21. Is there enough breathing room around this element?
22. Is the spacing between items consistent?
23. Does the vertical rhythm feel natural?
24. Are related items grouped visually?
25. Is there enough separation between unrelated sections?
26. Does the padding inside containers feel balanced?
27. Are margins consistent with the design system (4px base)?

### Category 5: Color & Contrast
*Is color used purposefully?*

28. Are colors from the design system palette?
29. Is there sufficient contrast for readability?
30. Are accent colors used consistently for the same purposes?
31. Are status colors (success/warning/error) used correctly?
32. Is there too much color? Too little?
33. Does the color support the hierarchy?

### Category 6: Components
*Is the right component being used?*

34. Should this be a card? A list item? A table row?
35. Does this component exist in the design system?
36. Is this component styled consistently with the same component elsewhere?
37. Are all required parts of the component present?
38. Is the component too complex? Too simple?

### Category 7: Interactions & Micro-interactions
*How should this respond to user actions?*

39. Does this need a hover state?
40. If hoverable, is the hover state clear and purposeful?
41. Should clicking this do something?
42. Are interactive elements obviously interactive?
43. Should there be a focus state for keyboard navigation?
44. Would a subtle animation improve the experience?
45. Is there feedback when actions complete (like copy button)?

### Category 8: Animation & Motion
*Should things move?*

46. Would an entrance animation add polish?
47. Would transitions between states feel better?
48. Is there unnecessary animation that could be removed?
49. Does motion convey meaning (expand, slide, fade)?
50. Is the animation duration appropriate (not too slow, not jarring)?

### Category 9: Consistency
*Does this match the rest of the application?*

51. Does this look like it belongs in this app?
52. Are similar patterns solved the same way on other pages?
53. Does this match the component used on page X?
54. Are there inconsistencies that create cognitive load?

### Category 10: The Linear Designer Test
*Would this survive professional scrutiny?*

55. What would a senior designer at Linear change immediately?
56. What would they praise?
57. What would make them wince?
58. Is this "good enough" or "actually good"?
59. Would this be embarrassing to show in a design review?
60. What's the gap between this and world-class?

### Category 11: Micro-Interactions Deep Dive
*Every interaction should feel intentional and delightful*

61. Does clicking this button have visual feedback (scale, color shift, ripple)?
62. Is there a loading state when async actions happen?
63. Do form fields have focus rings that feel polished?
64. When hovering over cards, is there a subtle lift/shadow shift?
65. Do tooltips/popovers animate in smoothly or pop harshly?
66. Is there a success animation when copy completes?
67. Do expandable sections animate open or snap?
68. Are there skeleton loaders for content that takes time to load?
69. Do buttons have disabled states that are visually clear?
70. Is there haptic-like feedback (visual pulse, color flash) on key actions?

### Category 12: Border & Surface Details
*The details that separate amateur from professional*

71. Is this border the right thickness? (1px vs 2px matters)
72. Is the border color too harsh or appropriately subtle?
73. Should this have a border at all, or just a shadow?
74. Are border-radius values consistent? (4px, 8px, 12px - not random)
75. Do nested elements have appropriate radius reduction?
76. Is the shadow depth appropriate for this element's elevation?
77. Are shadows using the design system values?
78. Does this surface feel like it's at the right z-level?

### Category 13: Polish & Refinement
*The 5% that makes 50% difference*

79. Does this feel finished or "good enough"?
80. Are all edges clean and intentional?
81. Is there visual noise that could be removed?
82. Are icons consistent in style, weight, and size?
83. Are empty states handled gracefully?
84. Is there appropriate truncation for overflow text?
85. Are numbers/data formatted nicely? (1,234 not 1234)
86. Are dates/times in human-readable format?

### Category 14: Consistency Audit
*One design language across the entire application*

87. Does this element use the exact same spacing as similar elements on other pages?
88. Are font sizes here matching the same content type elsewhere?
89. Is this card identical to cards on page X, Y, Z?
90. Are hover states consistent across all similar components?
91. Is the color palette usage identical across pages?
92. Do all code blocks look exactly the same?
93. Are all section headers styled identically?
94. Is there any one-off styling that should be systematized?

### Category 15: Visual Design Critique
*If this were in a portfolio review*

95. Is the visual weight distribution balanced?
96. Is there a clear focal point?
97. Does the layout use grid alignment?
98. Are elements aligned to a baseline grid?
99. Is negative space used purposefully?
100. Would this look good in a Dribbble shot?
101. What would immediately get flagged in a design crit?
102. Is this solving the user's problem in the most elegant way?

### Category 16: Cognitive Load & Mental Model
*Is this easy to understand and use?*

103. How many distinct things is the user being asked to process here?
104. Could this be simplified without losing meaning?
105. Is the mental model this creates accurate to the underlying system?
106. Are there redundant elements that add cognitive overhead?
107. Would a first-time user be confused by anything here?
108. Is the terminology consistent with user expectations?
109. Are there hidden features that should be more discoverable?
110. Does the layout match common patterns users expect?

### Category 17: Information Density
*Right amount of content per viewport*

111. Is this section too sparse? (wasted space, feels empty)
112. Is this section too dense? (overwhelming, needs to breathe)
113. Could this content be split across multiple sections?
114. Should more be shown at once for power users?
115. Is there a good balance of text vs. visual elements?
116. Are there walls of text that need breaking up?
117. Could images/diagrams replace text anywhere?

### Category 18: Accessibility (WCAG)
*Usable by everyone*

118. Does color contrast meet WCAG AA (4.5:1 for text)?
119. Does color contrast meet WCAG AAA (7:1) for critical info?
120. Is information conveyed by color alone? (bad - needs secondary indicator)
121. Are all interactive elements keyboard accessible?
122. Is there a visible focus indicator?
123. Would a screen reader announce this correctly?
124. Are images/icons decorative or do they need alt text?
125. Is text resizable without breaking layout?
126. Are touch targets at least 44x44px?
127. Is motion respecting prefers-reduced-motion?
128. Are there flashing elements that could trigger seizures?

### Category 19: States & Edge Cases
*Every possible state handled*

129. What does this look like empty? (no data)
130. What does this look like loading?
131. What does this look like with an error?
132. What does this look like with too much content? (overflow)
133. What does this look like with minimal content?
134. What does this look like with very long text strings?
135. What does this look like with special characters/unicode?
136. What happens if the image fails to load?
137. What happens if the user is offline?

### Category 20: Responsive Behavior
*Works at every screen size*

138. Does this work at 320px width (small mobile)?
139. Does this work at 768px (tablet)?
140. Does this work at 1024px (small desktop)?
141. Does this work at 1920px+ (large monitor)?
142. Do elements reflow correctly or break awkwardly?
143. Is text still readable at mobile sizes?
144. Are touch targets large enough on mobile?
145. Should anything be hidden/shown at different breakpoints?

### Category 21: Emotional Design
*How does this make users feel?*

146. Does this feel welcoming or intimidating?
147. Does this inspire confidence and trust?
148. Is there anything that could create anxiety?
149. Are there moments of delight?
150. Does the visual design match the emotional tone of the content?
151. Would a user feel accomplished after using this?
152. Is there anything frustrating or annoying?

### Category 22: Content Design
*Words matter as much as visuals*

153. Is the heading text clear and descriptive?
154. Are labels self-explanatory without context?
155. Is button text actionable? (verb-focused)
156. Are error messages helpful and specific?
157. Is there unnecessary jargon?
158. Could a non-expert understand this?
159. Are instructions concise?
160. Is placeholder text helpful or just taking space?

### Category 23: Grid & Alignment (Pixel-Level)
*Mathematical precision*

161. Are elements aligned to the baseline grid?
162. Are elements aligned to the column grid?
163. Is left-edge alignment consistent?
164. Is there optical misalignment that needs manual adjustment?
165. Are nested elements properly indented?
166. Is vertical alignment within rows correct? (baseline vs. center)
167. Are spacing values from the 4px base system?
168. Is there any accidental 1-2px misalignment?

### Category 24: Visual Rhythm & Repetition
*Patterns that create harmony*

169. Is there a consistent rhythm of elements?
170. Do similar components have identical spacing?
171. Is the pattern of [heading → content → code block] consistent?
172. Are dividers used consistently?
173. Is the vertical cadence predictable?
174. Does the eye flow smoothly or get stuck?

### Category 25: Scale & Proportion
*Relationships between elements*

175. Is the heading-to-body text ratio appropriate?
176. Is the icon-to-text ratio balanced?
177. Are card sizes proportional to their content?
178. Is the sidebar width proportional to the main content?
179. Are nested elements scaled appropriately?
180. Does anything feel too big or too small for its context?

### Category 26: Color System Deep Dive
*Beyond basic palette*

181. Is the primary accent color used for the right purposes?
182. Are semantic colors (success/warning/error) used only for their meaning?
183. Is there a clear visual distinction between clickable and non-clickable?
184. Are text colors meeting contrast requirements against their backgrounds?
185. Is the background gradient/texture appropriate or distracting?
186. Are dark sections (code blocks) transitioning smoothly to light sections?
187. Is there color banding or weird gradients?

### Category 27: Typography Deep Dive
*Every text decision*

188. Is the font family correct for this content type?
189. Is the font variant (regular, medium, semibold) appropriate?
190. Is the font size optimal for readability at this width?
191. Is the line length (measure) comfortable? (45-75 characters ideal)
192. Is the line height (leading) appropriate for this font size?
193. Is letter spacing (tracking) adjusted for headings?
194. Is word spacing natural?
195. Are there widows/orphans that need fixing?
196. Is hyphenation appropriate or breaking words badly?

### Category 28: Motion & Animation Deep Dive
*Every movement intentional*

197. Does the animation have appropriate easing? (ease-out for exits, ease-in-out for movements)
198. Is the duration right? (100-300ms for micro, 300-500ms for larger)
199. Does the animation convey meaning or is it decorative?
200. Would removing this animation hurt the experience?
201. Is there staggered animation for lists?
202. Do animations respect user motion preferences?
203. Is there any jarring or jerky motion?

### Category 29: Comparative Analysis
*How does this stack up?*

204. How does this compare to the same component on Stripe's docs?
205. How does this compare to Linear's implementation?
206. How does this compare to Vercel's docs?
207. What would Apple's Human Interface Guidelines say about this?
208. What would Material Design guidelines say?
209. Is this best-in-class or merely acceptable?

### Category 30: The Obsessive Detail Audit
*Things only perfectionists notice*

210. Is every border radius exactly right?
211. Is every shadow consistent with the elevation system?
212. Are all icons the same stroke width?
213. Are all icons from the same icon set?
214. Is the favicon/title bar correct?
215. Are scrollbar styles intentional?
216. Is text selection highlighting styled?
217. Is the caret/cursor styled appropriately?
218. Are tooltips consistent in style and behavior?
219. Is the loading spinner/skeleton consistent?
220. Are empty state illustrations consistent in style?

---

## Scope Guardrails

### Scope Definitions

| Scope | What Can Change | Requires Approval |
|-------|-----------------|-------------------|
| **VISUAL ONLY** | CSS, colors, spacing, animations | No |
| **STRUCTURE** | HTML structure, component type | No (if content preserved) |
| **CONTENT** | Actual words, information removal | **YES - ALWAYS** |

### Questions by Scope

**VISUAL ONLY Questions** (Safe to action autonomously):
- All Typography questions (13-20, 188-196)
- All Spacing questions (21-27, 161-174)
- All Color questions (28-33, 181-187)
- All Border/Shadow questions (71-78, 210-211)
- All Animation questions (46-50, 197-203)
- All Micro-interaction questions (61-70)

**STRUCTURE Questions** (Safe if content preserved):
- Information Architecture (1-6)
- Component selection (34-38)
- ⚠️ RULE: Every word of content must be preserved when restructuring

**CONTENT Questions** (REQUIRE APPROVAL - Observation only):
- Cognitive Load (103-110) - FLAG findings, don't simplify
- Content Design (153-160) - FLAG findings, don't reword

---

## Structured Evidence Format

Every answer must include these five fields:

```
Q: [Question being answered]
A:
  MEASUREMENT: [Actual values observed - numbers, pixels, colors]
  FINDING: [PASS | FAIL | NEEDS IMPROVEMENT] + reasoning
  EVIDENCE: [Screenshot reference or code line number]
  ACTION: [Specific fix if needed, or "None required"]
  SEVERITY: [Critical | High | Medium | Low]
  SCOPE: [VISUAL_ONLY | STRUCTURE | CONTENT]
```

### Example

```
Q: Is the spacing consistent? (Question 22)
A:
  MEASUREMENT: Top margin is 24px, bottom margin is 32px
  FINDING: FAIL - Inconsistent spacing violates 4px base system
  EVIDENCE: screenshot-2026-01-26-level-card.png, globals.css line 1446
  ACTION: Change margin-bottom from 32px to 24px in .level-card
  SEVERITY: Medium
  SCOPE: VISUAL_ONLY
```

### Why This Matters

This format prevents:
- "Looks fine" non-answers
- Skimming without actual inspection
- Missing specific actionable fixes
- Unclear severity for prioritization

---

## Playwright MCP Integration

### The Verification Loop

```
┌─────────────────────────────────────────────────────────┐
│                    AUDIT LOOP                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. INSPECT (Playwright MCP)                            │
│     - browser_snapshot → Get accessibility tree         │
│     - browser_take_screenshot → Capture visual state    │
│     - browser_evaluate → Measure actual CSS values      │
│                                                         │
│  2. EVALUATE (Against questions)                        │
│     - Answer each question with structured evidence     │
│     - Identify specific issues with line numbers        │
│                                                         │
│  3. FIX (Edit CSS/HTML)                                 │
│     - Make targeted changes                             │
│     - Document what was changed                         │
│                                                         │
│  4. VERIFY (Playwright MCP again)                       │
│     - Take new screenshot                               │
│     - Compare before/after                              │
│     - Confirm fix worked                                │
│                                                         │
│  5. ITERATE until questions pass                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Playwright Commands Reference

**Navigate:**
```javascript
browser_navigate({ url: "http://localhost:3000/synthesis/complexity-ladder" })
```

**Capture Accessibility Tree:**
```javascript
browser_snapshot({})
```

**Take Screenshot:**
```javascript
browser_take_screenshot({ type: "png", fullPage: true, filename: "audit-page-1.png" })
```

**Measure CSS Values:**
```javascript
browser_evaluate({
  function: `() => {
    const el = document.querySelector('.level-card');
    const styles = getComputedStyle(el);
    return {
      padding: styles.padding,
      margin: styles.margin,
      fontSize: styles.fontSize,
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      border: styles.border,
      borderRadius: styles.borderRadius,
      boxShadow: styles.boxShadow
    };
  }`
})
```

**Measure Dimensions:**
```javascript
browser_evaluate({
  function: `() => {
    const el = document.querySelector('.essence-box');
    const rect = el.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      left: rect.left
    };
  }`
})
```

**Check Contrast:**
```javascript
browser_evaluate({
  function: `() => {
    const el = document.querySelector('.principle-content');
    const styles = getComputedStyle(el);
    return {
      textColor: styles.color,
      backgroundColor: styles.backgroundColor
      // Calculate contrast ratio from these values
    };
  }`
})
```

---

## Execution Architecture

### Phase Overview

| Phase | Focus | Estimated Time |
|-------|-------|----------------|
| A | Cataloging (inventory all components) | 2-3 hours |
| B | Component-Level Audit | 4-6 hours |
| C | Page-Level Audit | 6-10 hours |
| D | Cross-Page Consistency | 2-3 hours |
| E | Polish Pass | 3-4 hours |

### Phase A: Cataloging

Before auditing, inventory what exists:
1. List all unique component types across 75 pages
2. Count instances of each component
3. Identify which questions apply to which components

### Phase B: Component-Level Audit

Fix each component type ONCE:
1. Find canonical example of component
2. Apply all relevant questions (50-80 per type)
3. Fix CSS for that component type
4. Fix propagates to all instances

### Phase C: Page-Level Audit

After components fixed, audit pages:
1. Spacing between sections
2. Visual hierarchy within page
3. Information architecture
4. Page-specific issues

### Phase D: Cross-Page Consistency

Compare same component across pages:
1. Is `.level-card` on page A identical to page B?
2. Are all code blocks consistent?
3. Are all section headers identical?

### Phase E: Polish Pass

Final sweep:
1. Micro-interactions
2. Animation refinement
3. Edge cases
4. Obsessive detail questions (210-220)

---

## Parallelization Strategy

### Agent Architecture

```
ORCHESTRATOR
│
├── Page Batch 1 (Pages 1-15)
│   ├── Page 1 Agent
│   │   ├── Left Nav Audit
│   │   ├── Main Content Audit (Section by Section)
│   │   └── Activity Zone Audit
│   ├── Page 2 Agent
│   └── ... (Pages 3-15)
│
├── Page Batch 2 (Pages 16-30)
├── Page Batch 3 (Pages 31-45)
├── Page Batch 4 (Pages 46-60)
└── Page Batch 5 (Pages 61-75)
```

### Parallelization Limits

**Maximum useful parallelism:** 5-10 agents

More creates:
- File conflict issues (multiple agents editing globals.css)
- Context fragmentation
- Coordination overhead

### Recommended Workflow

1. Run 5 page agents in parallel
2. Each completes, reports findings
3. Orchestrator batches CSS fixes (one agent edits CSS)
4. Next batch of 5 pages

---

## Output Structure

### Per-Finding Format

```json
{
  "page": "complexity-ladder",
  "panel": "main-content",
  "section": "Level Cards",
  "component": ".level-card",
  "question_id": 74,
  "question": "Are border-radius values consistent?",
  "measurement": "level-card has 12px, but principle-box has 8px",
  "finding": "FAIL",
  "evidence": {
    "screenshot": "screenshot-abc123.png",
    "code_reference": "globals.css:1446"
  },
  "action": "Standardize to 12px in globals.css line 1446",
  "severity": "Medium",
  "scope": "VISUAL_ONLY"
}
```

### Aggregation Views

**By Severity:**
- Critical: Must fix before deploy
- High: Should fix soon
- Medium: Fix when possible
- Low: Nice to have

**By Component Type:**
- All findings for `.level-card` across all pages
- All findings for `.code-block` across all pages

**By Page:**
- All findings for `complexity-ladder` page
- All findings for `mastery-ralph` page

**By Category:**
- All Typography findings
- All Spacing findings

---

## Execution Coverage

### Scope Calculation

| Element Type | Count | Questions Per | Total Instances |
|--------------|-------|---------------|-----------------|
| Pages | 75 | 20 page-level | 1,500 |
| Sections | ~375 | 40 section-level | 15,000 |
| Components | ~1,500 | 30 component-level | 45,000 |
| Left Nav Items | ~75 | 15 item-level | 1,125 |
| Activity Cards | ~300 | 25 card-level | 7,500 |

**Total question instances: ~70,000**

### Coverage Mandate

Every audit must cover:
- Every component
- Every section
- Every page
- Every panel (Left Nav, Main Content, Activity Zone)

No skipping. No "looks fine" without evidence.

---

## Design System Reference

### Spacing Scale (4px base)

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

### Border Radius Scale

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
```

### Shadow Scale

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04);
```

### Color Palette

```css
--color-text-primary: #0f0f10;
--color-text-secondary: #27272a;
--color-text-muted: #52525b;
--color-accent: #0D9373;
--color-bg-base: #ffffff;
--color-bg-subtle: #fafafa;
--color-bg-muted: #f4f4f5;
--color-border: #e4e4e7;
```

---

## Quick Reference Card

### Before Starting Any Audit

1. Open Playwright (`browser_navigate`)
2. Take baseline screenshot
3. Get accessibility snapshot
4. Identify all components on page

### For Each Component

1. Measure actual CSS values
2. Answer all applicable questions
3. Use structured evidence format
4. Identify severity and scope
5. If VISUAL_ONLY: fix immediately
6. If CONTENT: log only, don't change

### After Making Changes

1. Save CSS file
2. Wait for hot reload
3. Take new screenshot
4. Verify fix worked
5. Move to next component

### End of Page

1. Review all findings
2. Ensure all questions answered
3. Log page as complete
4. Move to next page

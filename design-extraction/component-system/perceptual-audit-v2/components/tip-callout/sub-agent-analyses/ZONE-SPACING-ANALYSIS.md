# Zone Analysis: Spacing
## Component: Tip Callout

---

## Step 1: Spacing Audit

### External Margins
| Edge | Observed Value | Notes |
|------|----------------|-------|
| Top | ~32-40px | Generous separation from preceding content/labels |
| Bottom | ~32-40px | Consistent with top, creates breathing room |
| Left | 0px (flush with content column) | Callout extends to left edge of content area |
| Right | 0px (flush with content column) | Callout fills available width |

### Internal Padding
| Edge | Observed Value | Notes |
|------|----------------|-------|
| Top | ~20-24px | Comfortable space above label |
| Bottom | ~20-24px | Symmetric with top |
| Left | ~24-28px | Accounts for border accent + content inset |
| Right | ~24-28px | Symmetric internal padding |

### Label-to-Content Gap
| Measurement | Value | Notes |
|-------------|-------|-------|
| Label ("TIP" / "PRO TIP") to first paragraph | ~12-16px | Tight but readable, creates strong visual connection |
| Label font size | ~11-12px (all caps, letter-spaced) | Small, unobtrusive, functional |

### Paragraph Spacing
| Measurement | Value | Notes |
|-------------|-------|-------|
| Inter-paragraph gap (multi-paragraph variant) | ~16-20px | Noticeable but not excessive |
| Line-height within paragraphs | ~1.5-1.6 | Comfortable reading rhythm |

### Border Accent
| Element | Value | Notes |
|---------|-------|-------|
| Left border width | ~4px | Thick enough to be intentional, not decorative noise |
| Border color | Sage green (#6b9b7a or similar) | Warm, approachable, not alarming |

---

## Step 2: Rhythm Assessment

**Rating: 4/5**

**Analysis:**
The spacing demonstrates intentional asymmetry in several ways:

1. **Vertical vs Horizontal Balance**: Internal padding appears slightly more generous horizontally than vertically, creating a "wide but compact" feeling that suits the informational nature of tips.

2. **Label-Content Relationship**: The tight 12-16px gap between the label and content creates a strong parent-child relationship. The label is clearly "attached to" its content rather than floating.

3. **External Breathing Room**: The generous external margins (~32-40px) contrast with the tighter internal structure. This "loose outside, snug inside" pattern creates visual containment without claustrophobia.

4. **Multi-Paragraph Handling**: The ~16-20px paragraph gap is slightly smaller than the label-to-content gap would suggest, which keeps multi-paragraph tips feeling unified rather than fragmented.

**Deduction for perfection**: The spacing rhythm is good but not exceptional. The vertical padding top/bottom appears too symmetric—truly editorial spacing would likely have slightly more top padding to account for the visual weight of the label, or slightly more bottom to give the final line room to breathe.

---

## Step 3: KortAI Alignment

> "Each piece has room to be considered without feeling isolated"

**Assessment: ALIGNED (Strong)**

| Principle | Evidence |
|-----------|----------|
| "Room to be considered" | The internal padding (20-24px) gives content breathing room without feeling sparse. Text is not cramped against the border accent. |
| "Without feeling isolated" | The colored background (#f0f9f4 mint/sage tint) creates visual grouping. The left border accent provides an "anchor" that connects the callout to its context. |
| Content grouping | The tight label-to-content gap (12-16px) ensures the label and content read as a unit. They're considered together, not separately. |
| Contextual placement | When shown "in context" (bottom of screenshot), the callout sits comfortably between prose paragraphs with ~32-40px margins, neither crowding nor orphaning itself. |

**Subtle Success**: The background color creates a "contained zone" that groups all elements together, while the generous external margins create separation from surrounding content. This achieves the KortAI principle beautifully—each piece (label, content) has room within the callout, and the callout itself has room within the page without feeling disconnected.

---

## Step 4: Score

### Spacing Score: 4.0 / 5

| Criterion | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| External margin consistency | 4.5/5 | 20% | 0.90 |
| Internal padding comfort | 4.0/5 | 25% | 1.00 |
| Label-content relationship | 4.5/5 | 20% | 0.90 |
| Multi-paragraph handling | 3.5/5 | 15% | 0.53 |
| Asymmetric intentionality | 3.5/5 | 10% | 0.35 |
| KortAI alignment | 4.5/5 | 10% | 0.45 |
| **TOTAL** | | 100% | **4.13/5** |

**Rounded Score: 4/5**

**Justification**:
- Strong external margins create clear separation
- Internal padding is comfortable and consistent
- Label-content gap feels intentional and functional
- Multi-paragraph variant could use slightly more sophisticated spacing progression
- Symmetry is a bit too perfect—could benefit from slight vertical asymmetry for editorial flair

---

## Step 5: Perceptual Truth

> **"Tip Callout spacing feels like a well-organized sticky note: compact enough to scan quickly, generous enough not to feel cramped, and anchored firmly to its place on the page."**

---

## Additional Observations

### What Works Well
1. **The left border accent** (4px) creates visual anchoring without consuming space
2. **Background color** provides grouping without harsh borders
3. **External margins** prevent tips from feeling like interruptions
4. **Consistent internal padding** creates predictable reading experience across variants

### Opportunities for Refinement
1. Consider 2-4px more top padding than bottom to account for label's visual weight
2. Multi-paragraph variants could use slightly progressive spacing (first paragraph tighter, subsequent slightly looser)
3. The "in context" placement shows good rhythm, but explicit margin tokens would ensure consistency across implementations

### Variant Consistency
| Variant | Spacing Consistency |
|---------|---------------------|
| Default (TIP) | Baseline - consistent |
| Pro Tip | Identical spacing - good |
| Multi-paragraph | Internal spacing handled well |
| In Context | External margins appropriate |

---

*Analysis completed: 2026-02-04*
*Analyst: Spacing Zone Sub-Agent*

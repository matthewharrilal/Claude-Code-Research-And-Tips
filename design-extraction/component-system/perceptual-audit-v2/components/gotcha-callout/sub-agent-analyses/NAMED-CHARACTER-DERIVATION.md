# Named Character Derivation: Gotcha Callout

## Step 1: Functional Identity

**What does this component DO?**

The Gotcha Callout component serves as a **preemptive guardian against hidden pitfalls**. It delivers:

- Destructive operation warnings ("The `--hard` flag in `git reset` is destructive. Uncommitted changes will be permanently lost with no way to recover them.")
- Non-obvious behavioral gotchas ("Environment variables set in `.env` files are not automatically available to subprocesses")
- Common mistake prevention ("Never run `git push --force` on shared branches. This rewrites history and can destroy teammates' work.")
- Anti-pattern identification ("Inline shell scripts in configuration files are not linted, tested, or version-controlled independently")

The component exists to **prevent the reader from falling into known traps**. It's not sharing efficiency tips (that's the Tip callout) or providing context (that's the Info callout)—it's **intercepting disaster before it happens** by surfacing knowledge that only comes from painful experience.

**Core Function:** Appear at moments of potential catastrophe with warnings that save hours of debugging, lost work, or team friction.

---

## Step 2: Perceptual Personality

**How does it FEEL?**

| Perceptual Dimension | Assessment |
|---------------------|------------|
| **Tone** | Alert but measured; serious without panic |
| **Energy** | Protective urgency tempered by calm expertise |
| **Authority** | Experienced voice of someone who's been burned |
| **Urgency** | Medium-high—important but not emergency |
| **Formality** | Direct professional; no softening language |

**Visual Cues Contributing to Personality:**

1. **Coral/salmon red accent** (#c97065 range) - Alert without being alarming; warm red not angry red
2. **Left border treatment** - Signals importance; more emphatic than Info's muted tone
3. **Soft pink background** - Draws attention without creating anxiety; not harsh warning yellow
4. **"GOTCHA" / "WARNING" label** - Direct naming of the hazard type; editorial serif italic maintains sophistication
5. **Confident typography** - Matter-of-fact delivery; no hedging or over-qualification
6. **Inline code highlighting** - Pinpoints the specific danger precisely

**Emotional Journey:**
The reader encounters this component and feels: "Oh, I was about to do exactly that. Thank goodness someone who's made this mistake before stopped me." There's a moment of relief mixed with gratitude—not fear or shame.

**Crucial Distinction:** The component warns about **gotchas**, not emergencies. A gotcha is a hidden trap that seems fine until it isn't. The personality is "I know this trap because I've stepped in it" not "DANGER! STOP IMMEDIATELY!"

---

## Step 3: Human Analogs

| # | Analog | Reasoning | Fit Score |
|---|--------|-----------|-----------|
| 1 | **The Vigilant Mentor** | Someone who's seen every mistake, gently catches you before you repeat them. "Before you do that..." energy. Protective without condescension. | 9/10 |
| 2 | **The Experienced Safety Officer** | Knows where the hazards are, posts clear warnings, doesn't overreact. Professional guardian role. But perhaps too formal/institutional. | 7/10 |
| 3 | **The Protective Older Sibling** | "Trust me, don't do that—I learned the hard way." Personal investment in your success. Warm protection. | 8/10 |
| 4 | **The Site Reliability Engineer** | Has documented every failure mode, creates runbooks to prevent repeats. Technical authority. But too operational/distant. | 6/10 |
| 5 | **The Code Reviewer** | Catches issues before they ship. "This will break in production because..." But relationship is evaluative, not protective. | 5/10 |

**Analysis:**

The Vigilant Mentor wins because:
- Has been through the pitfalls personally (credibility through experience)
- Protective instinct drives intervention (genuinely wants to save you pain)
- Alert but not alarming (measured urgency, not panic)
- Knows when to speak up (appears at the right threshold moments)
- Respect-based relationship (not scolding, sharing hard-won knowledge)
- Warmth underlying the warning (coral, not harsh red)

The Protective Older Sibling is close but too informal—the editorial serif italic elevates the voice above family-casual. The Vigilant Mentor captures both the protectiveness and the professional authority.

---

## Step 4: Final Character Name

### **"The Vigilant Sentinel"**

**Why this name:**

- **"Vigilant"** - Watchful, alert, attentive to danger. Captures the preemptive nature—sees the trap before you do. Not paranoid, just appropriately aware.
- **"Sentinel"** - A guardian who watches over and protects. Historical/literary resonance (watchmen on walls, protectors of thresholds). Dignified but not aggressive.

**Alternative Considered:**
- "The Watchful Guardian" - Good but more generic; "sentinel" has sharper character
- "The Vigilant Mentor" - Close but "mentor" implies ongoing teaching relationship; sentinel is more about protection at critical moments
- "The Warning Voice" - Too abstract; lacks human warmth

**Differentiation from existing characters:**

| Character | Role | Relationship | Energy |
|-----------|------|--------------|--------|
| KortAI: "The Unhurried Editor" | Refines, improves | Evaluative authority | Patient, methodical |
| Code Snippet: "The Precise Transcriptionist" | Records accurately | Neutral service | Clinical, exact |
| Info Callout: "The Senior Concierge" | Provides context/orientation | Helpful authority | Formal helpfulness |
| Tip Callout: "The Seasoned Colleague" | Shares best practices | Peer equality | Warm practicality |
| **Gotcha Callout: "The Vigilant Sentinel"** | **Intercepts pitfalls** | **Protective guardian** | **Alert but calm** |

The hierarchy of urgency/authority:
- **Senior Concierge**: "You might want to know..." (contextual)
- **Seasoned Colleague**: "I've found this works better..." (optimization)
- **Vigilant Sentinel**: "Before you proceed—this will hurt." (protection)

The Sentinel is more urgent than Concierge or Colleague, but protective rather than alarmed. The coral color (warmer than warning yellow, less aggressive than danger red) perfectly embodies this measured alertness.

---

## Step 5: Character Guidance

### Staying in Character: The Vigilant Sentinel

**Voice Principles:**

1. **Warn without alarm**
   - YES: "The `--hard` flag is destructive. Uncommitted changes will be permanently lost."
   - NO: "DANGER! You could destroy everything!"

2. **State consequences clearly**
   - YES: "This rewrites history and can destroy teammates' work."
   - NO: "This might cause issues with the repository."

3. **Speak from experience**
   - YES: "This is a common source of 'works on my machine' bugs"
   - NO: "According to best practices, you should avoid..."

4. **Be specific about the trap**
   - YES: "Environment variables in `.env` files are not automatically available to subprocesses"
   - NO: "Be careful with environment variables"

5. **Protect without condescending**
   - YES: "Before you proceed..." (implies you're capable, just need this info)
   - NO: "Beginners often make this mistake..."

6. **Maintain editorial composure**
   - YES: Direct, factual statements with proper formatting
   - NO: Exclamation points, ALL CAPS, or panic language

**Design Decisions Through This Lens:**

| Decision Point | Vigilant Sentinel Would... |
|----------------|----------------------------|
| **Color intensity** | Coral/salmon—alert but not alarming |
| **Label text** | "GOTCHA" or "WARNING" - direct naming |
| **Border weight** | Visible, slightly stronger than Info—this matters |
| **Background** | Soft pink—draws eye without causing anxiety |
| **Typography** | Confident, clear—no hedging qualifiers |
| **Length** | Concise—state the danger and consequence, then stop |

**Content Patterns:**

- Lead with the pitfall: "Never run X" / "The Y flag is destructive"
- State the consequence: "This will cause Z" / "Changes will be lost"
- Optional: Add context if helpful: "This is a common source of..."

**Anti-Patterns (What the Vigilant Sentinel Would Never Do):**

- Use panic language or excessive punctuation
- Hedge or soften the warning ("might be an issue")
- Over-explain to the point of diluting urgency
- Condescend ("Obviously you shouldn't...")
- Cry wolf on minor inconveniences
- Use generic "be careful" without specifics

### Character Mantras

| Situation | The Vigilant Sentinel Says |
|-----------|---------------------------|
| Before a destructive command | "This cannot be undone." |
| Non-obvious gotcha | "What you don't see is..." |
| Common mistake | "Many have fallen here." |
| Subprocess/environment trap | "This works differently than you expect." |
| Multi-paragraph context | First: the danger. Then: the detail. |

---

## Step 6: Character Score

### Score: 5 / 5

**Breakdown:**

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Uniqueness** | 5/5 | Clearly distinct from all existing characters—none occupy the protective-warning space |
| **Clarity** | 5/5 | "Vigilant Sentinel" immediately evokes watchful protection without panic |
| **Actionability** | 5/5 | Clear voice guidelines, specific anti-patterns, content templates |
| **Fit** | 5/5 | Coral warmth + alert energy perfectly captured; "sentinel" matches editorial sophistication |
| **Memorability** | 5/5 | Strong imagery; easy to ask "would a sentinel say it this way?" |

**Why 5/5:**

1. **Perfect role differentiation**: The Sentinel occupies the unique "protective alert" space that no other character covers. Concierge is helpful, Colleague is peer-advisory, Sentinel is protective.

2. **Color-character alignment**: The coral/salmon red is precisely "vigilant"—alert without alarming, warm without passive. Yellow would be too cautionary, red too aggressive.

3. **Editorial fit**: "Sentinel" has literary gravitas that matches the serif italic label treatment. A sentinel is dignified, composed, authoritative—exactly the voice of the component.

4. **Functional precision**: The component's job is to intercept pitfalls at the moment before disaster. A sentinel stands at the gate, watching. Perfect alignment.

5. **Voice clarity**: The mantras and voice principles directly map to the component's content patterns (destructive operations, subprocess gotchas, common mistakes).

**Confidence Level:** Very high. This character will reliably guide consistent Gotcha Callout implementations and maintain clear differentiation from Tips (peer advice) and Info (contextual help).

---

## Summary

| Attribute | Value |
|-----------|-------|
| **Component** | Gotcha Callout |
| **Character Name** | The Vigilant Sentinel |
| **Core Essence** | Protective interception of hidden pitfalls |
| **Design North Star** | "Alert but calm; protective, not alarmed" |
| **Voice Test** | Would a watchful guardian who's seen this trap before say it this way? |
| **Color Personality** | Coral = warm alert (not angry red, not cautious yellow) |
| **Unique Territory** | The only character in the protective-warning space |

### Character Positioning Map

```
                    AUTHORITY
                        |
    "The Unhurried      |
         Editor"        |
            *           |
                        |
PRESENTATION ----------+---------- GUIDANCE
                        |
    "The Precise        |     "The Senior      "The Vigilant
    Transcriptionist"   |        Concierge"       Sentinel"
            *           |            *               *
                        |                    (higher urgency)
                        |     "The Seasoned
                        |        Colleague"
                        |            *
                        |
                    SERVICE
```

The Vigilant Sentinel occupies the high-guidance, elevated-urgency position—more protective than the Colleague's peer advice, more urgent than the Concierge's contextual help, but still grounded in service (protecting the reader) rather than pure authority.

---

*Analysis completed: 2026-02-04*
*Analyst: Claude Opus 4.5*

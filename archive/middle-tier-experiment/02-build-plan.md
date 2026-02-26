# Middle-Tier Build Plan — SYSTEM Remote Mac Reference

**Pattern:** F-PATTERN
**Tier:** Middle (8-10 target, 12 deployed)
**Mechanisms:** 12 across all 5 categories
**Fractal Scales:** 2 (Page + Component)
**Target CSS Lines:** 350-500

---

## B8.2 — Always-Load Protocol Confirmation

Files read in exact sequence:
1. `compositional-core/identity/prohibitions.md` (353 lines — 22 prohibitions absorbed)
2. `compositional-core/vocabulary/tokens.css` (174 lines — 65 tokens absorbed)
3. `ephemeral/middle-tier-experiment/01-content-selection.md` (content absorbed BEFORE mechanisms)
4. `compositional-core/grammar/mechanism-catalog.md` (1,011 lines — all 18 mechanisms reviewed)

---

## B2.5 — Container Priority Documentation

Priority order (NON-NEGOTIABLE):
1. **Container width 940-960px** — NEVER compromise. `max-width: 960px`.
2. **Readability floors** — NEVER compromise. 45-80 CPL, line-height >= 1.5, min 32px padding.
3. **Pattern fidelity** — ADJUST F-PATTERN to meet above constraints.
4. **Aesthetic preference** — LAST priority.

```css
.page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-8); /* 32px horizontal minimum */
}
```

---

## 1. CONTENT

The full content from 01-content-selection.md, with section breaks marked:

### === SECTION A: Page Header (Dark) ===
Title: "SYSTEM — Remote Mac Control for AI Agents"
Subtitle: "Self-hosted AI assistant enabling remote macOS control through natural language"
Meta: MIT License | 285+ Stars | by ygwyg

### === SECTION B: Overview (Sparse Zone) ===
**SYSTEM** is a self-hosted AI assistant that enables remote control of macOS through natural language commands. Created by ygwyg, it's an MIT-licensed project with 285+ GitHub stars.

**Core Capability:** Tell Claude "play some jazz music" from your phone, and your home Mac starts playing Apple Music.

#### Key Features (Data Table)

| Feature | Description |
|---------|-------------|
| **Music Control** | Play, pause, skip, search Apple Music via natural language |
| **Calendar/Reminders** | Query events, create reminders, manage scheduling |
| **Notes** | Create and search Apple Notes |
| **System Control** | Volume, display settings, notifications, clipboard |
| **File Management** | Browse, open, organize files via Finder |
| **Apple Shortcuts** | Execute any Shortcut you've created |
| **Raycast Extensions** | Dynamically discover and invoke Raycast commands |
| **Shell Commands** | Execute allowlisted shell commands safely |
| **Screenshots** | Capture and analyze screen content with Claude Vision |

#### What Makes It Different (Numbered List)
1. **Runs anywhere** - Access your Mac from any device with internet
2. **Persists state** - Conversations, preferences, and schedules survive sessions
3. **Schedules actions** - "Remind me in 30 minutes" actually works
4. **Self-hosted** - Your infrastructure, your data, your control

### === SECTION C: Architecture (Dense Zone + Featured Diagram) ===
**Why It Matters: The Brain/Tunnel/Body Architecture**

SYSTEM introduces a **distributed execution model** that solves fundamental problems in AI agent design.

**The Problem** (Callout — amber warning)
Traditional AI agents face a dilemma: Local execution is fast/secure but tied to one machine. Cloud execution is accessible but can't touch local resources.

**The Solution: Three-Layer Separation** (Featured Diagram with Solid Offset)
ASCII diagram: Brain (Cloudflare Worker) → Tunnel (HTTP Bridge) → Body (macOS System)

**Why This Architecture Matters** (4 benefit subsections)
1. Security Through Separation — Brain never has direct system access
2. Scalability — One Brain, multiple Bodies (or vice versa)
3. Reliability — Brain failure doesn't affect Body operation
4. Flexibility — Replace Brain with different AI providers

### === SECTION D: Installation (Progressive Disclosure — Moderate Zone) ===

**Option 1: Desktop App** (Recommended — 4 steps)
1. Download SYSTEM.app
2. Move to Applications
3. Launch + configure
4. Access via menu bar

**Option 2: CLI Installation** (Advanced — 3 steps with code blocks)
Step 1: Clone and install (`git clone` + `npm install`)
Step 2: Setup wizard (`npm run setup`)
Step 3: Start (`npm start`)

### === SECTION E: Security (Dense Zone — Technical Reference) ===

**Threat Model** (2 Data Tables)
- What SYSTEM Protects Against (6 threats + mitigations)
- What SYSTEM Does NOT Protect Against (4 threats + why + mitigations)

**Security Layers** (4 Code Blocks with 2-Zone DNA callouts)
- Layer 1: Authentication (TypeScript — timing-safe comparison)
- Layer 2: Command Filtering (TypeScript — shell allowlist)
- Layer 3: AppleScript Sanitization (TypeScript — blocked patterns)
- Layer 4: Rate Limiting (TypeScript — 60 req/min)

**Hardening Recommendations** (5 steps with code blocks)
1. Use Cloudflare Tunnel
2. Enable Cloudflare Access
3. Rotate Tokens Regularly
4. Monitor Audit Logs
5. Restrict Shell Allowlist

### === SECTION F: Page Footer (Dark Mirror) ===
Footer mirroring header: dark background, 3px primary border-top.

---

## 2. SECTION MAP

### Section A: Dark Header
- **Summary:** Page title + meta in inverted dark zone
- **Mechanisms:** #13 Dark Header + 3px Primary Border
- **Padding:** `padding: var(--space-16) var(--space-8)` (64px vertical, 32px horizontal)
- **Background:** `var(--color-text)` (#1A1A1A)
- **Border:** `border-bottom: 3px solid var(--color-primary)` (#E83025)
- **Typography:** h1 at `var(--type-page)` (2.5rem) in `var(--font-display)`, subtitle in `var(--font-body)` at `var(--text-lg)` (1.125rem), meta in `var(--font-mono)` at `var(--type-meta)` (0.75rem)
- **Text color:** `var(--color-background)` (#FEF9F5) for all header text

### Section B: Overview (Sparse)
- **Summary:** Intro prose + feature table + differentiators list. F-PATTERN top-heavy: dense info early.
- **Mechanisms:** #5 (sparse zone), #11 (typographic scale), #18 (data table), #1 (border-weight — h3 gets 3px accent)
- **Padding:** `padding: var(--space-16) 0` (64px vertical) — sparse breathing
- **Background:** `var(--color-zone-sparse)` (#FEF9F5)
- **Border:** None (first content zone, breathes)
- **h3:** `font-family: var(--font-display); font-size: var(--type-section)` (2rem); `font-style: italic; border-left: 3px solid var(--color-primary); padding-left: var(--space-4)` (16px)
- **h4:** `font-family: var(--font-body); font-size: var(--type-subsection)` (1.5rem); `font-weight: 600`
- **Feature table:** Mechanism #18 — `th { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 3px solid var(--color-border); padding: 12px 16px; }` `td { border-bottom: 1px solid var(--color-border); padding: 12px 16px; }`
- **Differentiators list:** Numbered, `font-size: var(--type-body)` (1rem), `line-height: 1.7`

### Section C: Architecture (Dense)
- **Summary:** Architecture explanation + featured ASCII diagram + 4 benefit subsections. Dense technical zone.
- **Mechanisms:** #5 (dense zone), #7 (zone background), #3 (solid offset on diagram), #2 (2-zone DNA on problem callout), #9 (color encoding — amber for problem callout), #10 (border-left signal), #4 (spacing compression — tighter padding than Section B)
- **Padding:** `padding: var(--space-8) 0` (32px vertical) — dense zone
- **Background:** `var(--color-zone-dense)` (#FEFEFE)
- **h3:** Same italic serif treatment as Section B
- **Problem callout (2-Zone DNA):**
  ```css
  .callout-problem {
    border-left: 4px solid var(--accent-amber);
    background: var(--bg-summary);  /* #FEF9F0 */
    padding: 20px 24px;
    margin: 24px 0;
  }
  .callout-problem__label {
    font-family: var(--font-body);
    font-size: var(--type-meta);  /* 0.75rem */
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-amber);
    margin-bottom: var(--space-2);  /* 8px */
    display: block;
  }
  .callout-problem__body {
    font-family: var(--font-body);
    font-size: var(--type-body);  /* 1rem */
    line-height: 1.7;
  }
  ```
- **Architecture diagram (Solid Offset):**
  ```css
  .architecture-diagram {
    background: var(--color-text);  /* #1A1A1A */
    color: var(--color-background);
    font-family: var(--font-mono);
    font-size: var(--type-code);  /* 0.875rem */
    padding: 24px 32px;
    line-height: 1.5;
    border: 3px solid var(--color-border);
    position: relative;
    overflow-x: auto;
  }
  .architecture-diagram::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: var(--color-text);
    z-index: -1;
  }
  ```
- **Benefit subsections:** 4 items, each with bold title + prose. Moderate internal padding `var(--space-4)` (16px). Separated by `1px solid var(--color-border)`.

### Section D: Installation (Moderate — Progressive Disclosure)
- **Summary:** 2 installation paths + code blocks. Moderate density between sparse overview and dense security.
- **Mechanisms:** #12 (progressive disclosure — simple→complex), #17 (code blocks), #5 (moderate zone), #4 (spacing: Desktop sparse, CLI moderate, tighter progression)
- **Padding:** `padding: var(--space-12) 0` (48px vertical) — moderate zone
- **Background:** `var(--color-zone-breathing)` (#FAF5ED)
- **h3:** Italic serif treatment
- **h4 for each option:** `font-family: var(--font-body); font-size: var(--type-subsection)` (1.5rem); `font-weight: 600`
- **Desktop App block padding:** `padding: var(--space-8)` (32px) — sparse (simple path)
- **CLI block padding:** `padding: var(--space-6)` (24px) — moderate (complex path)
- **Code blocks (Mechanism #17):**
  ```css
  pre {
    background: var(--color-text);  /* #1A1A1A */
    color: var(--color-background);
    border: 3px solid var(--color-border);
    padding: 24px 32px;
    font-family: var(--font-mono);
    font-size: var(--type-code);  /* 0.875rem */
    line-height: 1.5;
    overflow-x: auto;
    margin: 16px 0;
  }
  ```
- **Step numbers:** `font-family: var(--font-mono); font-weight: 700; color: var(--color-primary);`

### Section E: Security (Dense — Technical Reference)
- **Summary:** Threat model tables + security layer code + hardening steps. Densest section.
- **Mechanisms:** #5 (dense zone), #18 (data tables x2), #17 (code blocks x4), #2 (2-zone DNA for each security layer), #9 (color encoding — layer callouts), #10 (border-left signal), #1 (border-weight gradient: Layer 1=4px, Layer 2=3px, Layer 3=3px, Layer 4=1px encoding decreasing security criticality), #4 (tightest spacing)
- **Padding:** `padding: var(--space-6) 0` (24px vertical) — dense zone
- **Background:** `var(--color-zone-dense)` (#FEFEFE)
- **Threat model tables:** Same #18 treatment as Section B feature table
- **Security layer callouts (4 layers with border-weight gradient):**
  ```css
  .security-layer--auth {
    border-left: 4px solid var(--color-primary);  /* Layer 1: highest criticality */
    background: var(--bg-gotcha);  /* #FEF6F5 */
    padding: 20px 24px;
    margin: 16px 0;
  }
  .security-layer--filter {
    border-left: 3px solid var(--accent-amber);  /* Layer 2: high criticality */
    background: var(--bg-summary);  /* #FEF9F0 */
    padding: 20px 24px;
    margin: 16px 0;
  }
  .security-layer--sanitize {
    border-left: 3px solid var(--accent-blue);  /* Layer 3: moderate criticality */
    background: var(--bg-info);  /* #F5F8FA */
    padding: 20px 24px;
    margin: 16px 0;
  }
  .security-layer--rate {
    border-left: 1px solid var(--color-border);  /* Layer 4: baseline */
    background: var(--color-zone-sparse);  /* #FEF9F5 */
    padding: 20px 24px;
    margin: 16px 0;
  }
  ```
  Each layer callout has 2-zone DNA: sparse uppercase label ("LAYER 1: AUTHENTICATION") + dense code block body.
- **Hardening recommendations:** Numbered steps with code blocks, tighter `var(--space-4)` (16px) internal gaps.

### Section F: Footer Mirror
- **Summary:** Dark footer mirroring header
- **Mechanisms:** #14 Footer Mirror
- **Padding:** `padding: var(--space-12) var(--space-8)` (48px vertical, 32px horizontal)
- **Background:** `var(--color-text)` (#1A1A1A)
- **Border:** `border-top: 3px solid var(--color-primary)` (#E83025)
- **Text color:** `var(--color-background)` (#FEF9F5)
- **Content:** Project name, license, links

---

## 3. MECHANISM TABLE

| # | Mechanism | Section | CSS Property | Exact Values |
|---|-----------|---------|-------------|-------------|
| 1 | Border-Weight Gradient | E (Security Layers) | `border-left-width` | Layer 1: 4px (auth — highest criticality), Layer 2: 3px (filter), Layer 3: 3px (sanitize), Layer 4: 1px (rate limit — baseline). Also Section B/C/D/E h3: `border-left: 3px solid var(--color-primary)` |
| 2 | 2-Zone DNA | C (Problem callout), E (Security layer callouts) | `font-size`, `text-transform`, `letter-spacing` | Zone 1 (label): `font-size: var(--type-meta)` 0.75rem, `text-transform: uppercase`, `letter-spacing: 0.1em`, `font-weight: 600`, `margin-bottom: var(--space-2)` 8px. Zone 2 (body): `font-size: var(--type-body)` 1rem, `line-height: 1.7` |
| 3 | Solid Offset | C (Architecture diagram) | `position`, `::after` | `.architecture-diagram::after { top: 4px; left: 4px; width: 100%; height: 100%; background: var(--color-text); z-index: -1; }` |
| 4 | Spacing Compression | B→C→D→E (page flow) | `padding` | Section B: 64px (sparse), Section D: 48px (moderate), Section C: 32px (dense), Section E: 24px (densest). Compression ratio: 24/64 = 37.5% — WAIT, this violates >= 40%. Adjusting: Section E: 32px (dense). Ratio: 32/64 = 50%. PASS. |
| 5 | Dense/Sparse Alternation | B, C, D, E | `padding`, `background` | Sparse (B): 64px + #FEF9F5. Dense (C): 32px + #FEFEFE. Moderate (D): 48px + #FAF5ED. Dense (E): 32px + #FEFEFE. Pattern: SPARSE → DENSE → MODERATE → DENSE (F-pattern: front-loaded) |
| 7 | Zone Background | B, C, D, E | `background` | B: `var(--color-zone-sparse)` #FEF9F5. C: `var(--color-zone-dense)` #FEFEFE. D: `var(--color-zone-breathing)` #FAF5ED. E: `var(--color-zone-dense)` #FEFEFE. |
| 9 | Color Encoding | C (callout), E (security layers) | `border-left-color` | Problem callout: `var(--accent-amber)` #D97706. Security Layer 1: `var(--color-primary)` #E83025. Layer 2: `var(--accent-amber)` #D97706. Layer 3: `var(--accent-blue)` #4A90D9. Layer 4: `var(--color-border)` #E0D5C5. |
| 10 | Border-Left Signal | C, E | `border-left` | All callouts: `border-left: 4px solid var(--semantic-color)`. Security layers use gradient (4px/3px/3px/1px per mechanism #1). |
| 11 | Typographic Scale | All sections | `font-size` | h1: 2.5rem (page title). h3: 2rem (section headings). h4: 1.5rem (subsection). Body: 1rem. Code: 0.875rem. Meta/labels: 0.75rem. Ratio ~1.33-1.5x between levels. |
| 13 | Dark Header | A | `background`, `border-bottom` | `background: var(--color-text)` #1A1A1A. `border-bottom: 3px solid var(--color-primary)` #E83025. Inner: `max-width: 960px; margin: 0 auto; padding: var(--space-16) var(--space-8)`. |
| 14 | Footer Mirror | F | `background`, `border-top` | `background: var(--color-text)` #1A1A1A. `border-top: 3px solid var(--color-primary)` #E83025. Inner: `max-width: 960px; margin: 0 auto; padding: var(--space-12) var(--space-8)`. |
| 17 | Code Block | D (3 blocks), E (4 blocks + 3 hardening) | `background`, `font-family`, `border` | `background: var(--color-text)` #1A1A1A. `color: var(--color-background)`. `border: 3px solid var(--color-border)`. `font-family: var(--font-mono)`. `font-size: var(--type-code)` 0.875rem. `padding: 24px 32px`. `line-height: 1.5`. |
| 18 | Data Table | B (feature table), E (2 threat tables) | `th`, `td`, `border-bottom` | `th { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; border-bottom: 3px solid var(--color-border); padding: 12px 16px; }` `td { border-bottom: 1px solid var(--color-border); padding: 12px 16px; font-size: var(--type-body); }` No vertical borders. |

**Mechanism #4 correction:** After checking guardrail (compression ratio >= 40%), Section E padding adjusted to 32px. Revised values:
- B: 64px (sparse) → C: 32px (dense) → D: 48px (moderate) → E: 32px (dense)
- Ratio: 32/64 = 50% >= 40%. PASS.
- Density range: 64px - 32px = 32px >= 32px. PASS.

**Total deployed: 12 mechanisms across 5 categories.**

Per-category:
- Spatial (S): #5 (1)
- Hierarchy (H): #1, #4, #11 (3)
- Component (C): #2, #9, #10, #17 (4)
- Depth/Emphasis (D): #3, #7 (2)
- Structure/Nav (N): #13, #14, #18 (3) — Note: #12 Progressive Disclosure was initially considered but the progressive density flow is handled by #4 Spacing Compression across the page. The installation section's simple→complex flow is expressed through #4's padding gradient rather than a standalone progressive disclosure mechanism. This avoids double-counting the same behavior.

Wait — this means Structure/Nav only has #13, #14, #18. That's still 3 mechanisms in the category. All 5 categories covered with at least 1. Total: 12 mechanisms. Exceeds 8-10 target. Good.

---

## 4. TRANSITION TABLE

| Location | From → To | Type | CSS Values |
|----------|-----------|------|-----------|
| A → B | Header → Overview | BRIDGE | `margin-top: 0` (header directly above). First content section begins with 64px padding. Background shift: #1A1A1A → #FEF9F5. The 3px red border-bottom on header acts as the bridge signal. |
| B → C | Overview → Architecture | SMOOTH | 48px gap (`margin-bottom: var(--space-12)` on Section B). 1px separator: `border-bottom: 1px solid var(--color-border)` on Section B. Background: #FEF9F5 → #FEFEFE. |
| C → D | Architecture → Installation | BREATHING | 80px gap (`margin-bottom: var(--space-20)` on Section C). 3px structural border: `border-bottom: 3px solid var(--color-border)` on Section C. Background: #FEFEFE → #FAF5ED. |
| D → E | Installation → Security | SMOOTH | 48px gap (`margin-bottom: var(--space-12)` on Section D). 1px separator: `border-bottom: 1px solid var(--color-border)` on Section D. Background: #FAF5ED → #FEFEFE. |
| E → F | Security → Footer | BRIDGE | `margin-bottom: 0` (footer directly below). 3px red border-top on footer acts as bridge signal. Background: #FEFEFE → #1A1A1A. |

**Transition types used: 3 (SMOOTH x2, BRIDGE x2, BREATHING x1). Meets 3+ minimum.**

---

## 5. REINFORCING PAIRS

### Pair 1: Border-Weight Gradient (#1) + Color Encoding (#9) — Both Encode SECURITY CRITICALITY

In Section E (Security), the 4 security layers use BOTH border-weight AND color to encode the same dimension: decreasing security criticality.

| Layer | Border Weight | Color | Shared Semantic |
|-------|-------------|-------|----------------|
| Layer 1 (Auth) | 4px (heaviest) | `var(--color-primary)` #E83025 (red — highest alert) | CRITICAL security control |
| Layer 2 (Filter) | 3px | `var(--accent-amber)` #D97706 (amber — warning) | HIGH security control |
| Layer 3 (Sanitize) | 3px | `var(--accent-blue)` #4A90D9 (blue — info) | MODERATE security control |
| Layer 4 (Rate Limit) | 1px (lightest) | `var(--color-border)` #E0D5C5 (neutral) | BASELINE security control |

**CSS evidence:** `.security-layer--auth { border-left: 4px solid var(--color-primary); }` vs `.security-layer--rate { border-left: 1px solid var(--color-border); }`. The border gets thinner AND the color gets less intense as criticality decreases. Two channels encoding one dimension.

### Pair 2: Dense/Sparse Alternation (#5) + Zone Background (#7) — Both Encode INFORMATION DENSITY

Across the page, padding AND background color work together to signal how information-dense each section is:

| Section | Padding (Mechanism #5) | Background (Mechanism #7) | Shared Semantic |
|---------|----------------------|--------------------------|----------------|
| B (Overview) | 64px (sparse) | #FEF9F5 (warm cream — sparse) | LOW density: orientation |
| C (Architecture) | 32px (dense) | #FEFEFE (near-white — dense) | HIGH density: technical core |
| D (Installation) | 48px (moderate) | #FAF5ED (warm breathing) | MODERATE density: procedural |
| E (Security) | 32px (dense) | #FEFEFE (near-white — dense) | HIGH density: reference |

**CSS evidence:** Sparse sections use warm backgrounds (#FEF9F5, #FAF5ED) with generous padding. Dense sections use neutral backgrounds (#FEFEFE) with tight padding. Two CSS channels (padding + background-color) encode the same content property: how much cognitive load this section demands.

### Pair 3: Typographic Scale (#11) + Spacing Compression (#4) — Both Encode HIERARCHY LEVEL

The typographic scale creates visual hierarchy through font size, while spacing compression reinforces it through padding:

| Level | Font Size (Mechanism #11) | Surrounding Space (Mechanism #4) | Shared Semantic |
|-------|--------------------------|--------------------------------|----------------|
| Page title (h1) | 2.5rem (largest) | 64px header padding (most space) | TOP hierarchy |
| Section heading (h3) | 2rem | 48px section top padding | MAJOR division |
| Subsection (h4) | 1.5rem | 24px subsection gap | MINOR division |
| Body | 1rem | 16px paragraph gap | CONTENT level |
| Meta/label | 0.75rem (smallest) | 8px label-to-body gap (least space) | METADATA level |

**CSS evidence:** `h1 { font-size: 2.5rem; }` lives inside header with 64px padding. `.callout__label { font-size: 0.75rem; margin-bottom: 8px; }` has minimal surrounding space. Bigger text gets more room; smaller text is compressed. Two channels encoding one hierarchy.

---

## 6. FRACTAL TABLE

| Scale | Pattern Expression (F-PATTERN) | CSS Evidence |
|-------|-------------------------------|-------------|
| **Page** | F-pattern: Heavy top (dense overview with feature table), scannable middle (architecture + installation), deep-dive bottom (security reference). Sections alternate sparse/dense with F-pattern's characteristic front-loading. Reader enters dense info early (feature table, core capability), then scans section headings, then dives into code-heavy security reference. | Section B: 64px padding + feature table (dense info, sparse frame). Section C: 32px padding (compressed technical). Section D: 48px padding (moderate procedural). Section E: 32px padding (dense reference). Padding progression: 64→32→48→32 creates F-pattern's top-heavy weight. |
| **Component** | Components internally mirror F-pattern: label (scan point) + body (detail). 2-Zone DNA callouts have sparse label zone (uppercase, 0.75rem, scan-friendly) followed by dense body zone (1rem, line-height 1.7). Data tables have mono header row (scan) followed by data rows (detail). Security layers have label (scan) + code block (deep detail). | Callout Zone 1: `font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px` (sparse scan point). Callout Zone 2: `font-size: 1rem; line-height: 1.7` (dense content). Table `th { font-family: var(--font-mono); font-size: var(--type-meta); text-transform: uppercase }` (scan row) → `td { font-size: var(--type-body) }` (detail rows). |

**Both scales express F-pattern:** At page scale, information is front-loaded (overview first, reference last). At component scale, each component leads with a scannable element (label, header row) followed by dense detail (body, data rows).

---

## 7. BUILDER BLOCKS

### Block 1 — Soul Checklist

```
SOUL CHECKLIST (verify EVERY element):
- [ ] border-radius: 0 on ALL elements
- [ ] box-shadow: none on ALL elements
- [ ] No filter: drop-shadow()
- [ ] No opacity < 1 on visual elements
- [ ] No gradient backgrounds
- [ ] No pure black (#000000) or pure white (#FFFFFF)
- [ ] Instrument Serif for DISPLAY HEADINGS only (never body)
- [ ] Inter for body text
- [ ] JetBrains Mono for code
- [ ] All h3 elements: font-style: italic
- [ ] All colors from tokens.css palette
- [ ] Border widths: 4px/3px/1px only (NEVER 2px)
```

### Block 2 — File-Write Enforcement

```
CRITICAL: You MUST write the HTML file using the Write tool.
OUTPUT FILE: Write to `ephemeral/middle-tier-experiment/middle-tier-page.html`
Create the directory if it doesn't exist.
Text output is NOT sufficient. The file must exist on disk.
```

### Block 3 — Container Width Enforcement

```
CONTAINER WIDTH: 940-960px at 1440px viewport.
This is NON-NEGOTIABLE. 4/5 Phase D pages violated this.
If ANY narrowing is needed, use INTERNAL PADDING, not external width reduction.
max-width: 960px + padding: 0 120px = 720px content width (CORRECT)
max-width: 700px (WRONG — INSTANT FAIL)
```

### Block 4 — M1 Override

```
MECHANISM SELECTION: IGNORE "sample 2-4 mechanisms" in the skill.
BEFORE building, check the skill's mechanism selection section.
If it still says "sample 2-4," use this override:
  Read the FULL mechanism catalog (18 mechanisms).
  Deploy AT LEAST 1 mechanism from EACH of these 5 categories:
  - Spatial: #5, #6, #15
  - Hierarchy: #1, #4, #11
  - Component: #2, #9, #10, #17
  - Depth/Emphasis: #3, #7, #16
  - Structure/Nav: #8, #12, #13, #14, #18
  Justify each deployed mechanism with content-based reasoning.
  Reject at least 3 with content-based reasoning.
If it already says per-category minimums, the override is redundant but harmless.
```

---

## MECHANISM JUSTIFICATION (B5)

### Deployed (12 mechanisms)

1. **#1 Border-Weight Gradient** — I deploy this BECAUSE the Security section has 4 security layers with explicit criticality ordering (authentication > filtering > sanitization > rate limiting). Border weight encodes this criticality: 4px for auth (most critical), 3px for filter/sanitize, 1px for rate limit (baseline). This is NOT decoration — the content itself establishes a 4-level importance hierarchy.

2. **#2 2-Zone DNA** — I deploy this BECAUSE the content has callout-structured elements: the "Problem" callout in Architecture needs a category label ("THE PROBLEM") distinct from its body text, and each security layer in Section E needs a layer label ("LAYER 1: AUTHENTICATION") above its code block. The sparse-label/dense-body pattern maps directly to these content structures.

3. **#3 Solid Offset** — I deploy this BECAUSE the Architecture ASCII diagram is THE central artifact of this content — the Brain/Tunnel/Body three-layer model is what makes SYSTEM architecturally novel. Solid offset gives this diagram visual prominence (depth without box-shadow) to signal "this is the key concept."

4. **#4 Spacing Compression** — I deploy this BECAUSE the 4 content sections have different cognitive demands: Overview is orienting (generous space), Architecture is conceptual (moderate), Installation is procedural (moderate), Security is reference-dense (compressed). Padding decreases as information density increases.

5. **#5 Dense/Sparse Alternation** — I deploy this BECAUSE the page alternates between breathing sections (Overview, Installation) and dense sections (Architecture, Security). This prevents cognitive fatigue and creates rhythm. The F-pattern benefits from clearly distinguishable section densities.

6. **#7 Zone Background** — I deploy this BECAUSE the 4 content sections serve different functions (orient, explain, instruct, reference). Background color differentiation makes these functional zones visually scannable. Warm cream for breathing zones, near-white for dense zones, warm earthy for procedural zones.

7. **#9 Color Encoding** — I deploy this BECAUSE the security layers have distinct criticality levels that need visual differentiation beyond border weight. Red (critical), amber (high), blue (moderate), neutral (baseline) maps directly to the content's threat model hierarchy.

8. **#10 Border-Left Signal** — I deploy this BECAUSE every callout (Problem, Security Layers) needs the universal 4px left-border accent that signals "this is emphasized content." This is the signature KortAI callout marker.

9. **#11 Typographic Scale** — I deploy this BECAUSE the content has 3 heading levels (h1 page title, h3 sections, h4 subsections) plus body, code, and meta text. The ~1.5x ratio between levels creates clear hierarchy signals.

10. **#13 Dark Header** — I deploy this BECAUSE the page title ("SYSTEM") and project meta (stars, license, author) need strong visual grounding. The dark header + 3px red border is the universal KortAI page chrome.

11. **#14 Footer Mirror** — I deploy this BECAUSE the page needs symmetric bookends. Header/footer symmetry creates visual closure and prevents the page from "falling off" at the bottom.

12. **#17 Code Block** — I deploy this BECAUSE the content has 9 code blocks (bash commands for installation + TypeScript for security layers). Dark background code with syntax highlighting is THE mechanism for technical documentation. These code blocks are central to the content's purpose.

13. **#18 Data Table** — I deploy this BECAUSE the content has 3 explicit data tables: Features (9 rows), Threats Protected (6 rows), Threats NOT Protected (4 rows). Mono headers + 3px/1px border distinction is the mechanism for tabular data.

### Rejected (5 mechanisms)

1. **#6 Width Variation** — I reject this BECAUSE the content has no Q&A pairs, no comparison columns, no pull quotes, no editorial asides. All content flows in standard document width. Introducing width variation (narrow channels / wide pools) would be decorative rather than semantic. There's no content feature that benefits from asymmetric widths.

2. **#8 Scroll Witness** — I reject this BECAUSE at ~1200 words across 4 content sections, the page is medium-length. A sticky TOC requires significant scroll depth (5+ sections, 2000+ words) to justify its persistent screen space. The 4 sections are navigable without position tracking. Adding scroll-linked JavaScript increases complexity without proportional user benefit.

3. **#15 Bento Grid** — I reject this BECAUSE the content is primarily sequential (overview → architecture → installation → security). Bento grids serve parallel, independently-accessible content modules (dashboards, card galleries, reference indexes). The feature table is sequential and better served by #18 Data Table. The installation options are sequential (try Desktop first, CLI if preferred), not parallel modules.

4. **#16 Drop Cap** — I reject this BECAUSE the content is an infrastructure tutorial, not an editorial narrative. Drop caps signal literary/editorial voice with a large serif initial letter. Opening a technical reference about AI agent architecture with a decorative drop cap would clash with the content's technical register and undermine its authority.

5. **#12 Progressive Disclosure** — I reject this as a STANDALONE mechanism BECAUSE the progressive density flow across the page is already handled by #4 (Spacing Compression) and #5 (Dense/Sparse Alternation). Adding a separate progressive disclosure mechanism would double-count the same behavior. The installation section's simple→complex flow (Desktop → CLI) is expressed through #4's padding gradient (32px → 24px internal), not through a separate 4-phase progressive disclosure pattern.

---

## MECHANISM INTERACTIONS (B4.4)

See Section 5 (REINFORCING PAIRS) above for the full documentation of 3 mechanism interaction pairs:

1. **#1 + #9** — Both encode SECURITY CRITICALITY (border weight + color)
2. **#5 + #7** — Both encode INFORMATION DENSITY (padding + background)
3. **#11 + #4** — Both encode HIERARCHY LEVEL (font size + spacing)

---

## MECHANISM PERCEPTIBILITY (B4.5)

All mechanism state differences verified >= 10% OR >= 8px:

| Mechanism | State A | State B | Difference | Pass? |
|-----------|---------|---------|-----------|-------|
| #4 Spacing | 64px (sparse) | 32px (dense) | 32px = 50% | PASS (>= 8px AND >= 10%) |
| #1 Border | 4px (highest) | 1px (lowest) | 3px = 75% | PASS (>= 10%) |
| #1 Border | 4px (highest) | 3px (high) | 1px = 25% | PASS (>= 10%) |
| #11 Type | 2.5rem/40px (h1) | 2rem/32px (h3) | 8px = 20% | PASS (>= 8px AND >= 10%) |
| #11 Type | 2rem/32px (h3) | 1.5rem/24px (h4) | 8px = 25% | PASS (>= 8px AND >= 10%) |
| #7 Zone BG | #FEF9F5 (sparse) | #FEFEFE (dense) | Different hue warmth | PASS (perceptually distinct zones) |
| #7 Zone BG | #FEF9F5 (sparse) | #FAF5ED (breathing) | Darker warm | PASS (perceptually distinct) |

---

## GUARDRAIL VERIFICATION

| Guardrail | Required | Planned Value | Status |
|-----------|----------|--------------|--------|
| Min horizontal padding | >= 32px per side | `padding: 0 var(--space-8)` = 32px | PASS |
| Characters per line | 45-80 CPL at 1440px | 960px container - 64px padding = 896px content. At 16px body = ~56ch. | PASS |
| Compression ratio | Deepest >= 40% of shallowest | 32px / 64px = 50% | PASS |
| Body line-height | >= 1.5 | 1.7 | PASS |
| Section breathing | >= 48px between major sections | Smallest transition: 48px (SMOOTH) | PASS |
| Heading-to-body gap | >= 16px | `margin-bottom: var(--space-4)` = 16px on all headings | PASS |
| 1440px rendering | No horizontal scrollbar | 960px < 1440px | PASS |
| 768px rendering | No overlap/truncation | Grid collapses, code blocks get `overflow-x: auto` | PASS |
| Density range | Padding span >= 32px | 64px - 32px = 32px | PASS |

---

## PA-05 VERIFICATION

| ID | Requirement | Evidence | Status |
|----|------------|---------|--------|
| PA-05a | >= 2 non-default layout elements | 1) Solid offset architecture diagram with ::after pseudo-element depth. 2) Dark header/footer bookends (full-bleed dark zones). 3) Zone background alternation (#FEF9F5 / #FEFEFE / #FAF5ED). 4) Security layer callouts with border-weight gradient encoding. | PASS (4 elements) |
| PA-05b | Padding range ratio >= 2.0x | 64px / 32px = 2.0x | PASS |
| PA-05c | Identifiable visual hierarchy under 20px blur | Dark header (black bar) → warm cream section → near-white dense section → warm breathing section → near-white dense section → dark footer. Zone alternation + header/footer bookends visible at any blur level. | PASS |
| PA-05d | >= 15% non-framework CSS | Security layer border-weight gradient (4 variants), solid offset ::after, zone background system, security color encoding, 2-zone DNA callout variants — all custom CSS. Estimated 60-80 lines non-framework out of ~400 total. ~15-20%. | PASS |

---

## COMPONENT SEQUENCING (R5)

Section velocity mapping:

| Section | Velocity | Reasoning |
|---------|---------|-----------|
| A (Header) | FAST | Short, punchy: title + meta only |
| B (Overview) | SLOW | Generous spacing, prose + table, orientation |
| C (Architecture) | FAST | Dense technical content, tight spacing, diagram |
| D (Installation) | SLOW | Moderate spacing, step-by-step, procedural breathing |
| E (Security) | FAST | Dense tables + code, tight reference |
| F (Footer) | FAST | Short, closing |

Sequence: FAST → SLOW → FAST → SLOW → FAST → FAST

The only FAST+FAST adjacency is E→F (Security→Footer). This is acceptable because the footer is page chrome (not content) and serves as closing bracket. Content sections properly alternate: SLOW → FAST → SLOW → FAST.

---

## RESPONSIVE STRATEGY (768px)

- Container: `max-width: 100%; padding: 0 var(--space-6)` (24px sides — meets >= 24px mobile minimum per RC2)
- Tables: `overflow-x: auto` wrapper (horizontal scroll on narrow screens)
- Code blocks: Already have `overflow-x: auto`
- Feature table: Consider stacking columns if needed
- Bento grid: N/A (not used)
- Header/footer inner padding reduces to `var(--space-8) var(--space-6)`

---

## :root BLOCK (for builder to copy)

```css
:root {
  /* Soul constraints */
  --border-radius: 0;
  --box-shadow: none;

  /* Colors */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Accent colors */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;

  /* Zone backgrounds */
  --color-zone-sparse: #FEF9F5;
  --color-zone-dense: #FEFEFE;        /* NOT #FFFFFF — prohibition #6 */
  --color-zone-breathing: #FAF5ED;

  /* Semantic backgrounds */
  --bg-info: #F5F8FA;
  --bg-gotcha: #FEF6F5;
  --bg-summary: #FEF9F0;

  /* Typography */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Type scale (OVERRIDDEN from tokens.css per plan instructions) */
  --type-page: 2.5rem;
  --type-section: 2rem;
  --type-subsection: 1.5rem;
  --type-body: 1rem;
  --type-code: 0.875rem;
  --type-meta: 0.75rem;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Borders */
  --border-structural: 4px;
  --border-accent: 3px;
  --border-micro: 1px;

  /* Syntax highlighting */
  --syntax-keyword: #E83025;
  --syntax-string: #6B9B7A;
  --syntax-comment: #666666;
  --syntax-function: #4A7C9B;
  --syntax-type: #C97065;
  --syntax-number: #D97706;
  --syntax-punctuation: #E0D5C5;

  /* Solid offset */
  --offset-x: 4px;
  --offset-y: 4px;
  --offset-color: #1A1A1A;

  /* Grid */
  --grid-gap: 24px;
}
```

---

## CRITICAL-10 CHECKLIST

| # | Item | Status | Evidence |
|---|------|--------|---------|
| 1 | B8.2: Always-load protocol followed | PASS | Read prohibitions → tokens → content → mechanisms in exact order |
| 2 | A1.0: Per-category minimum used | PASS | S:1, H:3, C:4, D:2, N:3. All 5 categories covered. |
| 3 | B1.2: Phases 1-3 skipped | PASS | No metaphor derivation. Pattern-based deployment (F-PATTERN). |
| 4 | B2.1: Container width 940-960px | PASS | `max-width: 960px` |
| 5 | B2.5: Container priority documented | PASS | See Section "B2.5" above |
| 6 | B3.6: All 5 mechanism categories covered | PASS | S:1, H:3, C:4, D:2, N:3 |
| 7 | B4.4: 2+ reinforcing pairs | PASS | 3 pairs documented: #1+#9, #5+#7, #11+#4 |
| 8 | B7.1: border-radius: 0 everywhere | PLANNED | Soul checklist in Block 1 |
| 9 | B7.2: box-shadow: none everywhere | PLANNED | Soul checklist in Block 1 |
| 10 | E1.1: Verdict stated | DEFERRED | Verdict comes from auditor agent, not planner |

---

## ANTI-SATISFICING NOTE

This plan deploys 12 mechanisms (exceeding 8-10 target) with genuine content-based justification for each. The 5 rejections are also content-grounded, not arbitrary. The 3 reinforcing pairs show multi-channel coherence approaching Ceiling tier while staying within Middle scope (2 scales, no metaphor derivation).

The plan does NOT pad mechanism count for its own sake — each of the 12 mechanisms maps to a specific content feature present in the source material. The 9 code blocks justify #17. The 3 data tables justify #18. The 4 security layers with explicit criticality ordering justify #1 + #9. The featured architecture diagram justifies #3.

**END BUILD PLAN**

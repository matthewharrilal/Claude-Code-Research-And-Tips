# UI Design Workflows with AI

This document synthesizes UI design patterns, workflows, and best practices for AI-assisted interface design.

---

## Quick Start

### The Frontend-Design Skill

Claude Code includes a built-in `frontend-design` workflow skill that automatically loads when detecting frontend work. It provides guidance on:
- Bold design choices that avoid the "AI aesthetic"
- Typography systems and animation patterns
- Breaking AI smell (see checklist below)
- Production-grade component architecture

**The skill loads automatically** when you're working on UI/UX tasks. No manual invocation needed.

### Recommended MCP Stack (Copy-Paste Ready)

Add to your `~/.claude/mcp_servers.json`:

```json
{
  "mcpServers": {
    "figma": { "url": "https://mcp.figma.com/mcp" },
    "shadcn": { "command": "npx", "args": ["-y", "@shadcn/mcp@latest"] },
    "storybook": { "command": "npx", "args": ["-y", "storybook-mcp@latest"] },
    "motion": { "command": "npx", "args": ["-y", "@motion/mcp"] },
    "playwright": { "command": "npx", "args": ["-y", "@playwright/mcp@latest"] },
    "svgmaker": { "command": "npx", "args": ["-y", "@genwave/svgmaker-mcp"] }
  }
}
```

### The 90/10 Rule

> AI handles 90% of the foundation work; humans apply the critical 10% for uniqueness, brand alignment, and intentionality.

### Breaking AI Smell (Quick Checklist)

| AI Default | Fix |
|------------|-----|
| Purple gradients | Choose intentional brand colors |
| Bold fonts everywhere | Use semibold/medium/light weights |
| Default letter spacing | Tighten, especially for titles |
| Inter font | Use Geist, Manrope, or brand fonts |
| Rounded corners | Specify "squareish" or "zero radius" |
| Same Unsplash images | Use Midjourney for unique assets |

---

## Core Principles

### Context is King
> "AI needs context, and context is code"

- Generic prompts produce generic results
- Provide full code references, not just images
- Include component code (1000+ lines) for consistent output
- A picture is worth a thousand words when prompting

### Design Before Code
> "It's always better to have a design ready before going to your coding agent so you don't have to ask over and over again to make changes."

Build complete UI/UX systems BEFORE coding business logic.

### Planning Prevents Confusion
> "Good planning is the only way to get results. If you're confused, your AI agent will be confused too."

---

## The PAGES Framework

A 5-step system for building high-converting websites:

### P - Purpose
- Define the specific job/destination for the website
- Use AI agents (Firecrawl MCP) to analyze competitor websites for:
  - Positioning and messaging
  - CTAs and conversion patterns
  - Color palettes and visual vibes
  - Brand identity elements

### A - Anchor (Hero Section)
- The hero is like an "empty shop on Bond Street" - users decide in seconds
- Goal: Capture, enchant, deliver core message
- Invest heavily in scroll-stopping animations

### G - Guide (Copy & User Journey)
> "If you tell someone to do more than one thing at a time, they end up doing zero"

- One frame, one message leading to desired action
- Copy philosophy: "Sell Maui, not the flight to Maui"

### E - Elevate (UI Sniping)
- Take design from 8/10 to 10/10 using external component libraries
- Find beautiful code components and integrate them precisely
- Focus on specific elements: buttons, animations, text effects

### S - Ship (Deploy)
- Push to GitHub for version control
- Deploy via Vercel for live hosting
- Test mobile optimization before considering complete

---

## The Master Workflow

```
[1. Competitive Research]
    │
    ├─→ Firecrawl MCP to analyze competitors
    ├─→ Extract: positioning, CTAs, colors, vibes
    └─→ Mobin, Dribbble, Lapa Ninja for inspiration
    │
    ▼
[2. Planning & Specification]
    │
    ├─→ Generate PRD with features + user stories (ChatGPT)
    ├─→ Define page architecture per screen
    ├─→ Create design system (colors, fonts, tokens)
    └─→ Define ALL screen states (empty, error, loading, full)
    │
    ▼
[3. Hero Animation Creation]
    │
    ├─→ Generate start/end keyframes (Google Whisk)
    ├─→ Create transition (Google Flow)
    ├─→ Convert to WEBP for scroll-mapping
    └─→ Extract frames for scroll animation
    │
    ▼
[4. AI Generation]
    │
    ├─→ Feed reference images + XML-structured prompt
    ├─→ Start with HERO section first
    ├─→ Use @mentions to compose multiple components
    └─→ Specify: icon library, colors, style reference
    │
    ▼
[5. Manual Refinement]
    │
    ├─→ Reduce font weight (bold → semibold/medium)
    ├─→ Tighten letter spacing
    ├─→ Replace purple gradients with intentional colors
    ├─→ Swap placeholder images (Midjourney > Unsplash)
    └─→ Add premium backgrounds (Spline, video, gradients)
    │
    ▼
[6. UI Sniping]
    │
    ├─→ Browse Magic UI, 21st.dev, Codepen
    ├─→ Copy component code or AI-agent prompts
    └─→ Replace existing elements with polished versions
    │
    ▼
[7. Export & Deploy]
    │
    ├─→ Test responsive (desktop, tablet, mobile)
    ├─→ Convert HTML → React (V0, Cursor, Warp Code)
    └─→ Deploy to Vercel with GitHub
```

---

## MCP Server Reference

### Design Tool MCPs

| Server | Capabilities |
|--------|-------------|
| **Figma MCP (Official)** | Extract tokens, layer hierarchy, generate framework-specific code |
| **Sketch MCP (Built-in)** | AI agents issue requests, find inconsistencies, modify data |
| **Adobe Suite MCP** | Bridge Photoshop, Premiere Pro, InDesign via WebSocket |
| **Penpot MCP (Beta)** | Open-source design tool, natural language communication |

### Component Library MCPs

| Server | Features |
|--------|----------|
| **shadcn MCP (Official)** | Browse all components, search registries, install via natural language |
| **Storybook MCP** | Auto-generates stories, visual verification, docs and tests |
| **Tailwind MCP** | CSS-to-utility conversion, color palette generation |
| **Flowbite MCP** | UI generation with Flowbite + Tailwind |
| **daisyUI Blueprint** | Official code generator MCP |

### Animation MCPs

| Server | Features |
|--------|----------|
| **Motion.dev MCP** | Full documentation as queryable resources, multi-framework support |
| **GSAP MCP** | Timeline creation, tweens, ScrollTrigger, all plugins |

### Asset Generation MCPs

| Server | Features |
|--------|----------|
| **SVGMaker MCP** | AI-powered SVG from text descriptions, image-to-SVG |
| **Icons8 MCP** | 368,865+ icons across 116 design styles |
| **Replicate Flux MCP** | High-quality image generation, Recraft V3 SVG model |
| **Superdesign MCP** | UI designs, wireframes, logos, interactive HTML gallery |

### Browser Testing MCPs

| Server | Features |
|--------|----------|
| **Playwright MCP (Microsoft)** | Accessibility tree (LLM-friendly), no vision models needed |
| **Puppeteer MCP** | Browser automation, screenshots, JS execution |

### Configuration Example

```json
{
  "mcpServers": {
    "figma": { "url": "https://mcp.figma.com/mcp" },
    "shadcn": { "command": "npx", "args": ["-y", "@shadcn/mcp@latest"] },
    "storybook": { "command": "npx", "args": ["-y", "storybook-mcp@latest"] },
    "motion": { "command": "npx", "args": ["-y", "@motion/mcp"] },
    "playwright": { "command": "npx", "args": ["-y", "@playwright/mcp@latest"] },
    "svgmaker": { "command": "npx", "args": ["-y", "@genwave/svgmaker-mcp"] }
  }
}
```

### MCP Stacking Patterns

**Figma + shadcn**: AI knows WHAT to build AND HOW (pulls design + component library context)

**Figma + Motion.dev**: Design with animation documentation for scroll-driven implementations

**Playwright + Storybook**: Visual testing with accessibility tree analysis

### MCP Best Practices

- **STDIO Logging Pitfall:** Never write to stdout - corrupts JSON-RPC messages
- **Tool Naming:** Use snake_case, avoid spaces/dots/brackets
- **Security:** OAuth 2.1 mandatory for HTTP transports, store credentials in platform keyrings
- **Error Handling:** Help the agent understand what to do next, not just what went wrong
- **Configuration Rules:** Images/icons should ALWAYS be used as image assets; long screens need to be scrollable; cards should be horizontally scrollable

---

## Component Libraries

### Tiered Library Selection

| Tier | Libraries | Best For |
|------|-----------|----------|
| **Creative Effects** | Magic UI, Aceternity UI | Shimmer, aurora, rainbow buttons, animated components |
| **Apple Aesthetic** | Hero UI | Premium, minimal, Apple-style interfaces |
| **Standard Accessible** | shadcn, Radix UI, Ark UI | Production apps requiring accessibility |
| **AI-Optimized** | 21st.dev | Claude Code integration, pre-structured prompts |
| **Tailwind Native** | Catalyst, Headless UI | Tailwind CSS projects |

### Headless Libraries (AI-Friendly)

Headless libraries work better with AI because they impose no visual opinions:

| Library | Key Feature |
|---------|-------------|
| **Radix UI** | Most customization, no styles imposed |
| **Ark UI** | 45+ accessible components, multi-framework |
| **Base UI (MUI)** | Unstyled, accessible React components |
| **Headless UI (Tailwind)** | Designed for Tailwind CSS integration |
| **Catalyst** | Tailwind CSS team's application UI kit |

### The UI Sniping Workflow

1. Browse Magic UI, 21st.dev, Codepen, Aceternity UI
2. Find desired component (button, animation, text effect)
3. Copy component code or AI-agent prompt
4. Instruct AI builder to replace existing element
5. Test visual integration

### 21st.dev AI-Agent Prompts

Pre-structured prompts that include:
- Project requirements (shadcn, TypeScript)
- Component code with directory paths
- Dependency code and installation paths
- npm packages to install
- Implementation guide for AI agents

**Claude adapts contextually** - it omits irrelevant elements and customizes based on project context.

---

## AI Design Tools

### Tier 1: Full-Stack AI Design Platforms

| Tool | Description | Key Differentiator |
|------|-------------|-------------------|
| **Emergent** | Full-stack "vibe coding" platform | Multi-agent architecture, generates UI + backend + deployment |
| **Google Stitch** | Google Labs tool (acquired Galileo AI) | Free tier with Gemini 2.5 Flash (350 gen/month), HTML/CSS + Figma export |
| **v0 by Vercel** | Agent-like UI generator using Claude | Design Mode for no-credit visual tweaks, shadcn outputs |
| **Figma Make** | Figma's native prompt-to-app tool | Integrates design libraries, Supabase backend, interactive prototypes |

### Tier 2: Specialized Design-to-Code

| Tool | Description | Best For |
|------|-------------|----------|
| **Codia AI** | Computer vision AI with 99% pixel accuracy | 8-platform output (React, Vue, Flutter, iOS, Android) |
| **Builder.io** | Figma-to-code with trainable code style | Teams wanting AI to match their coding conventions |
| **Anima + Bolt** | Figma-to-production code via AI agents | "Best tool by far right now" per community reviews |

### Tier 3: AI Image/Video Generation

| Tool | Purpose |
|------|---------|
| **Google Whisk** | Keyframe generation (subject/scene/style) |
| **Google Flow** | Frame-to-video transitions |
| **Midjourney** | Unique images, video start/end frames |
| **Ideogram 3** | Typography-aware logos |
| **Runway** | Gen-3 Alpha, Act-One motion capture |
| **HeyGen AI** | Hyper-realistic AI avatars with perfect lip sync |
| **Jitter** | Figma-integrated animation (300K+ designers) |
| **Cascadeur** | AI-assisted keyframe animation with physics tools |

### Model Selection Strategy

| Task | Recommended Model | Notes |
|------|-------------------|-------|
| Initial creative generation | **GPT-5** | 4x more tokens, less purple |
| Vision/image-to-code | **GPT-5** | Best visual understanding |
| Complex reasoning | **Claude 4/4.5** | Smarter decisions |
| Stability/bug fixes | **Claude 4** | More robust output |
| Animations | **Gemini 3** | Excellent motion design |
| Making responsive | **Claude 4** | Consistent structure |
| Consistency with reference | **o3** | Best vision following |

**Strategy:** Start with GPT-5 for creativity → Switch to Claude for refinement

---

## Techniques

### Hero Animation Pipeline

The standout technique for scroll-stopping hero sections:

**Step 1: Generate Keyframes (Google Whisk)**
```
Start Frame Prompt:
- High quality, 8K resolution
- Professional feel
- Dark/black background (critical for website integration)
- Include product/brand elements

End Frame Prompt:
- "Cinematic end frame that reveals the inner world"
- Deconstructed/exploded view
- Maintains visual consistency
```

**Step 2: Create Animation (Google Flow)**
```
"Beautiful, visually consistent animation from one frame to the other.
Showcase all beautiful ingredients. Visually engaging explosive transition.
Smooth and professional. Professional level studio quality."
```
- Use labs.google/flow
- Select "frame to video" option
- VO3.1 quality setting for best results
- ~9 videos/month on free tier (20 credits per video)

**Step 3: Convert to Web Format**
- **Convert MP4 → WEBP** (using ezgif.com)
- WEBP is treated as image, not video
- No media player wrapper needed
- Direct scroll-position mapping
- Extract frames for Apple-style scroll animations

**Step 4: Implement with Claude**
- Place WEBP in `/public` directory (Next.js)
- Frames play as user scrolls
- Can have multiple segments (start → frame2 → frame3 → end)

### XML-Structured Prompting for Claude

Claude models are optimized for XML, allowing structured intent parsing:

```xml
<context>
  What you want to build, asset locations, animation behavior goals
</context>

<requirements>
  All functional requirements
</requirements>

<animation_behavior>
  How animations should behave (scroll-triggered, hover, etc.)
</animation_behavior>

<implementation_details>
  Technical constraints (Next.js, Tailwind, etc.)
</implementation_details>

<constraints>
  Limitations and boundaries
</constraints>

<output>
  Expected deliverable format
</output>
```

### Figma Make 4-Step Planning

For Figma Make users, this prevents "completely broken" outputs:

**Step 0:** Paste Standard Instructions First - Best practices prompts that enforce good code writing

**Step 1:** Complete App Overview - Brainstorm with ChatGPT: target audience, core features, app purpose

**Step 2:** Define Page Architecture - Each page needs its own defined structure

**Step 3:** Create Complete Design System - Generate specs: colors, fonts, overall style

**Step 4:** Combine Into One Big Prompt - Use placeholders for outputs from Steps 1, 2, 3

### Animation Patterns

**Scroll-Driven (GSAP + ScrollTrigger)**
- Animation progress tied to scroll position
- Forward/backward based on scroll direction
- Best for: landing pages, storytelling

**Keyframe-Bridge Method**
Instead of generating full animation:
1. Generate start/end frames with high consistency
2. Use separate tool (Flow) to interpolate
3. Overcomes AI's struggle with temporal consistency

**WEBP Scroll Animation**
- Convert video to WEBP
- Treat as image, not video
- Direct scroll-position mapping
- No media player complexity

**Micro-Interactions (Motion.dev)**
- UI state transitions
- Hover effects, expand/collapse
- Uses motion components with start/end states
- Library handles transitional logic automatically

**Self-Playing Demos**
- Simulated cursor movements
- Automated UI interactions
- Use `useRef` for dynamic coordinates (not hardcoded)

### Background Techniques

**Black Background Strategy**
Using black backgrounds in generated hero images ensures seamless blending with dark-themed websites - eliminates visible edges/transitions.

**Alpha Masking**
- Two-way slider for left/right fade
- Angle adjustment for directional masking
- Works across mobile/tablet/desktop

**Video Backgrounds**
1. Export image from design
2. Upload to Midjourney as start/end frame
3. Generate motion video
4. Apply blending mode (soft light)
5. Set `position: absolute/fixed`
6. Set `pointer-events: none`

### State-Based Design

Every screen must be designed in multiple states:

| State | Description | Design Considerations |
|-------|-------------|----------------------|
| **Zero/Empty** | First launch, no data | Onboarding cues, helpful prompts |
| **Loading** | Fetching data | Skeletons, spinners, progress |
| **Partial** | Some data available | Progressive disclosure |
| **Full** | Complete data | Information hierarchy |
| **Error** | Something failed | Clear messaging, recovery actions |
| **Active/Focused** | User interacting | Highlight, feedback signals |

### Wireframe-to-UI Workflow

Direct path from sketch to polished mockup:

1. Create rough wireframes/sketches
2. Input to AI (Google Stitch, Nano Banana) as reference
3. Specify style direction
4. Model generates polished UI mockups

> "If you're a UI designer, you can provide wireframes and ask it to generate the exact UI."

### Search-Grounded Generation

Novel technique for accurate visuals:
1. Ask the model to search what you want to generate
2. Results in dramatically improved accuracy
3. Replicates real-world references exactly

This grounds the output in real-world visual references.

### Visual Annotation with Drawbridge

When text descriptions fail for UI fixes:
- Claude Code integration available
- Precise section selection
- Easier for non-technical users to convey issues
- Visual annotation > written feedback for spatial/aesthetic problems

---

## Landing Pages & Documentation

### The StoryBrand Framework (Donald Miller)

Position your customer as the hero:
1. **A Character** (the customer) has a desire
2. **Has a Problem** preventing achievement
3. **Meets a Guide** (your brand) with empathy and authority
4. **Gets a Plan** that's simple and clear
5. **Is Called to Action** with direct CTA
6. **Avoids Failure** (stakes)
7. **Achieves Success** (transformation)

**Result:** Amy Porterfield reported 60% conversion on cold ads audience after rewriting with StoryBrand.

### Optimal Landing Page Section Order

1. **Hero Section** - Headline, subhead, visual, primary CTA
2. **Social Proof Bar** - Client logos, trust badges
3. **Problem Statement** - Call out the pain point
4. **Solution/Features** - Your offer as the fix (often bento grid)
5. **Interactive Demo** - Embedded product preview
6. **Detailed Features** - Deeper breakdown with visuals
7. **Testimonials** - Customer stories and results
8. **Pricing** - 2-4 tier comparison (if applicable)
9. **FAQ** - Common objections addressed
10. **Final CTA** - Bold, benefit-driven repeat
11. **Footer** - Minimal: legal links, contact

### Hero Section Patterns (2026)

**Visual Design:**
- Large, expressive typography (oversized text, minimal content)
- Vibrant gradients (radial/linear blends across full-screen)
- Dark themes with high contrast
- Product-led storytelling (actual interface, real workflows)

**Animation vs Static:**
- Purposeful micro-animation, not decorative noise
- Interactive demos over passive video
- 60-second demos showing real screens/workflows

**Above-the-Fold Rule:**
> Design for no-scroll. The opening screen must contain: summary of offer, clear value proposition, single primary CTA, hint of what comes next.

### Social Proof Patterns

**Testimonials:**
- Card layouts with headshot, name, title, quote
- Bento grid testimonials (modern asymmetric)
- Large type pull-quotes as visual anchors
- Pictures alongside testimonials significantly increase credibility

**Logo Walls:**
- Grid layout for clean, professional look
- Infinite loop carousels for dynamic presentation
- Isotope filtering by category

**Trust Signals:**
- Security badges (SOC 2, ISO, GDPR)
- Customer counts ("Trusted by 10,000+ companies")
- Star ratings from review platforms
- Media mentions ("As seen in")

### Bento Grid Best Practices

**2026 Evolution - "Active Grids":**

| Feature | 2024 | 2026 |
|---------|------|------|
| Hover Behavior | Color change | Expands, plays video, reveals data |
| Grid Cells | Static icons | Looping lightweight videos |
| Aspect Ratios | Perfect squares | Variable ratios, "tall cards" |
| Personalization | None | Drag-and-drop user rearrangement |

**Rule:** Only one or two cards should demand attention at any time.

### CTA Optimization

**Button Design:**
- High-contrast colors that clearly stand out
- 2-4 words maximum
- First-person verbs: "Secure My Spot" beats "Learn More"
- Benefit-driven: "Get 3 Free Templates" over "Download"
- Time-sensitive language: 35% higher CTR

**Placement:**
- Above the fold outperforms below by 304%
- Clutter-free design with white space around button
- Single prominent CTA (avoid competing buttons)
- 83% trust businesses more with reviews near CTAs

**2026 Rule:** 1 page = 1 promise = 1 CTA

### Conversion Statistics

- Median landing page conversion: **6.6%** across all industries
- Landing pages convert **160% higher** than standard signup forms
- Single-offer pages generate **266% more leads** than multi-offer

### Documentation Site Design

**The Stripe Gold Standard:**
- **Three-Column Layout**: Left nav, center prose, right for live executable code
- **Interactive Code Samples**: Include user's actual API test key - copy-paste works immediately
- **Application-Like Feel**: Checklists, collapsible sections, personalized content
- **Markdoc**: Open-source system extending Markdown with React components

**Key UX Features for Docs:**
1. **Powerful Search**: Semantic understanding, quick discovery
2. **Actionable Analytics**: Insights into user patterns to identify gaps
3. **Self-Service Focus**: Reduce support tickets through comprehensive content
4. **Versioning Support**: Handle multiple API/product versions
5. **AI Enhancement**: RAG-powered chatbots, MCP servers for real-time updates

**Navigation Patterns:**
- **Product-Scoped Sidebars**: Navigation shows links specific to selected product
- **80/20 Rule**: Most popular topics prominent on entry points
- **Keyboard Shortcuts**: `Cmd/Ctrl+K` for quick search is standard
- **ARIA Landmarks**: Proper `<main>`, `<nav>` regions for accessibility

**Top Docs Designs to Study:**

| Site | Strength |
|------|----------|
| **Stripe** | Three-column layout, executable code, Markdoc |
| **Adobe Spectrum** | Foundations, Content Design, multi-framework components |
| **Atlassian** | Multi-product brand support, unified design system |
| **Pinterest Gestalt** | Mature system, function before form |

---

## Frontier (2026+)

### Spatial UI & Emerging Paradigms

**The Dimensional Shift:**
Spatial computing market projected to reach **$280.5 billion by 2028** (23.4% CAGR).

**Key Changes:**
- UI elements exist in 3D space with depth, lighting, physical presence
- Interaction through gestures, voice, movement - not just touch
- "Tactile UI" combining glassmorphism with "squishy" elements

**Apple Vision Pro Design Tools:**
- **Reality Composer Pro**: Import, compose, preview 3D assets using USD format
- **RealityKit + SwiftUI + ARKit**: Familiar frameworks for spatial development
- **Onshape**: Send CAD to Vision Pro, manipulate with hand gestures

**3D UI Generation Tools:**

| Tool | Capability |
|------|------------|
| **Tripo** | Text/image to 3D model generation |
| **SpAItial** | Spatial foundation models understanding space-time physics |
| **Nvidia Omniverse** | Industrial 3D simulation with AI-generated assets |

### Generative UI (Production-Ready)

| Use Case | Recommended Framework |
|----------|----------------------|
| Most React projects | CopilotKit or assistant-ui |
| Cross-platform needs | Google A2UI (declarative JSON) |
| Rapid prototyping | Thesys/Crayon |

**Key Insight:** UX stops being a collection of screens and becomes a **living system** that interprets context, intent, and emotion.

### Delegative UI (Beyond Chatbots)

> "AI will evolve from passive tools (chat UI that waits for a prompt) to active Agentic Systems (software that plans, executes, and iterates autonomously). This is a shift from Conversational UI to Delegative UI—assigning an AI a goal."

### Design Tokens Evolution

**The DTCG Standard (Now Stable):**
The W3C Design Tokens Community Group released stable specification (2025.10):
- Uses JSON as interchange format (`application/design-tokens+json`)
- Supported by 10+ tools: Figma, Sketch, Penpot, Supernova, Tokens Studio, Style Dictionary
- Backed by Salesforce, Google, Microsoft, Amazon, Adobe

**AI-Powered Token Management:**
- AI automates token creation, predicts patterns, enforces uniformity - cutting manual work by 50%
- Claude Code can sync design tokens from Figma variables to JSON files
- Automated continuous delivery: token updates trigger PRs, update Storybook, notify Slack

### Creative/Experimental UI

**Leading Creative Agencies:**

| Agency | Specialty |
|--------|-----------|
| **Clay (clay.global)** | Branding-led digital experiences, motion design |
| **MetaLab** | Product thinking for startups (Midjourney, Calvin Klein) |
| **Fuselab Creative** | Emerging trends, UX for retention and conversion |

**Key 2026 Trends:**
1. **Adaptive & Generative UI**: Same product, radically different layouts per user
2. **Agentic Design**: "Are we designing screens or intelligence that acts for users?"
3. **Spatial & Depth-Driven**: Layered UI with subtle 3D-like depth
4. **Motion UI**: Animation clarifies navigation, softens transitions, highlights interactions
5. **Multimodal Experiences**: Voice, gesture, gaze, haptics converging
6. **Experimental Typography**: Intentionally bending, warping traditional letterforms

**Scrollytelling Techniques:**

| Technique | Description |
|-----------|-------------|
| **Parallax Effects** | Background and foreground move at different speeds |
| **Reveal Animations** | Content fades in as user scrolls |
| **Sticky Scrolling** | Elements remain fixed while content scrolls past |
| **Snap Scrolling** | Page "snaps" to sections |
| **Horizontal Scroll** | Combined vertical/horizontal creates anticipation |

**Tools:** GSAP + ScrollTrigger, Locomotive Scroll, Lenis

### Physics-Based UI Patterns

- **Physics-driven movement**: Buttons expand softly before releasing, cards fold into place
- **Micro-delays and progressive reveals**: Create tactile, alive-feeling interactions
- **Cause-and-effect reinforcement**: Reduces cognitive load, supports accessibility

**Tools:** Renature Library, Flutter physics simulations, Unreal Engine PhysicalAnimation

### The New Design Mandate (2026)

1. **Think Dimensionally**: 360-degree canvases, depth, and physical space are design primitives
2. **Design Systems, Not Screens**: Build adaptive frameworks that generate appropriate interfaces dynamically
3. **Embrace Multimodality**: No single input paradigm dominates - design for seamless mode switching
4. **Make Motion Meaningful**: Physics-based interactions reduce cognitive load
5. **Maintain Transparency**: AI-driven personalization requires visible reasoning and user control

### 2026 Predictions (Jakob Nielsen)

- AI-created UI design will surpass human-created by late 2026
- By end of 2026, AI will perform tasks that take humans 39 hours (full work week)
- AI-powered design tools sector projected to reach **$14.92 billion by 2029**

---

## Reference

### Font Recommendations

| Use Case | Recommended Fonts |
|----------|-------------------|
| **Modern/Tech** | Geist, Space Grotesk, Geist Mono |
| **Clean/Minimal** | Manrope, Jakarta, Instrument |
| **Editorial/Premium** | Playfair (serif) |
| **Friendly/Rounded** | Nunito, Quicksand |
| **Data/Coding** | Space Grotesk, Geist Mono |

**Avoid:** Inter as primary (AI's default fallback)

### Quality Checklist

Before exporting to code:

- [ ] No purple gradients (unless intentional)
- [ ] Font weights reduced (semibold/medium, not bold)
- [ ] Letter spacing tightened
- [ ] Consistent typography (one font family)
- [ ] Premium images (Midjourney > Unsplash)
- [ ] Proper icon set (Lucide recommended)
- [ ] All screen states designed
- [ ] Responsive tested (desktop, tablet, mobile)
- [ ] Animations added where appropriate
- [ ] Backgrounds don't compete with content
- [ ] Hero animation scroll-mapped

### Quick Reference Prompts

**Competitive Research (Firecrawl):**
```
"Do competitive research on [product category]. Find top 5 brands.
Break down: positioning, CTAs, vibes, colors, logos, color palette,
overall feel - anything useful for constructing my own brand."
```

**Generate with References:**
```
"Adapt [screenshot] for [product]. Change text, names, numbers.
Use [color palette], [icon library], make responsive."
```

**Google Flow Animation:**
```
"Beautiful, visually consistent animation from one frame to the other.
Showcase all beautiful ingredients. Visually engaging explosive transition.
Smooth and professional. Professional level studio quality."
```

**Add Sections:**
```
"Add a [testimonials/pricing/features] section that matches
the existing design language."
```

**Fix Common Issues:**
```
"Change to semibold font weight"
"Tighten letter spacing on titles"
"Remove purple, use [color] accent instead"
"Make responsive for mobile"
"Change to pill-shaped buttons"
```

**Meta-Prompt for Landing Pages (Claude):**
```
Create a landing page for [product name], which is [description].

Target audience: [demographics, pain points]
USP: [unique selling proposition]
Tone: [professional/playful/urgent]
Competitors: [1-4 for context]

Structure:
1. Hero with [animation/static/video] background
2. Social proof section with [logos/testimonials]
3. Features in [bento grid/traditional layout]
4. Pricing [2-4 tiers]
5. FAQ addressing [common objections]
6. Final CTA

Constraints:
- No purple gradients
- Use [Geist/Manrope] font
- Mobile-first responsive
- Lucide icons
```

### Utility Tools

| Tool | Purpose |
|------|---------|
| **ezgif.com** | Video to frame conversion |
| **coolors.co** | Color palette generation |
| **Drawbridge** | Visual UI annotation for Claude Code |
| **Go Fullpage** | Browser extension for full-page screenshots |

### Export/Deploy

| Tool | Purpose |
|------|---------|
| **V0** | HTML to React conversion |
| **Warp Code** | AI coding agent with auto mode |
| **Cursor** | React/Tailwind development |
| **Vercel** | Production hosting + GitHub integration |

### Thought Leaders

**Twitter/X Accounts:**

| Name | Handle | Focus |
|------|--------|-------|
| Paul Boag | @boagworld | UX leadership, conversion optimization |
| Jeff Veen | @veen | Design leadership (ex-Google, Adobe) |
| Kim Goodwin | @kimgoodwin | Design strategy |
| Rowan Cheung | @rowancheung | AI developments (The Rundown AI) |

**Writers/Researchers:**

| Name | Platform | Key Contributions |
|------|----------|-------------------|
| **Jakob Nielsen** | Substack | "18 Predictions for 2026", Generative UI analysis |
| **Punit Chawla** | Medium/Prototypr | UX/UI trends, "Why Designers Are Leaving Figma" |
| **Srivats Mutalik** | Medium | Daily AI workflow documentation |

**YouTube Channels:**

| Channel | Subscribers | Focus |
|---------|-------------|-------|
| **The AI Grid** | 374K | AI tool demonstrations |
| **BlackMixture** | 283K | AI + creativity |
| **NoCode MBA** | 33.8K | AI-powered app building |
| **Alex Finn** | 47.5K | Building with ChatGPT, Cursor, Claude |

### The 10 Commandments

1. **Research competitors first** - Firecrawl MCP extracts positioning, CTAs, colors
2. **Plan before prompting** - Overview → Architecture → Design System → Combined Prompt
3. **Collect inspiration visually** - Screenshots > text descriptions
4. **Start with hero section** - Everything else inherits consistency
5. **Use keyframe-bridge for animations** - Start/end frames → Flow interpolation → WEBP
6. **Specify what you DON'T want** - "No purple", "no rounded corners"
7. **Use different models for different phases** - Create with GPT-5, fix with Claude
8. **Stack MCPs for context** - Figma + shadcn + Motion.dev = enhanced output
9. **Polish before export** - Problems amplify in code
10. **The 90/10 rule** - AI does volume, humans add soul

---

## Sources

### Videos Analyzed

| Video ID | Topic | Duration | Key Focus |
|----------|-------|----------|-----------|
| `UR09nuSxGio` | PAGES Framework + Anti-Gravity | 32:29 | Frame-to-animation pipeline, competitive research, UI Sniping |
| `VGYsHicpp34` | AI Tools Design Series | 5:05 | Google Stitch, shadcn presets, Drawbridge annotations |
| `XP6TJRbOdGo` | Multi-Tool Landing Pages | 9:37 | Keyframe-bridge method, XML prompting, 21st.dev |
| `OWdlgdQSR60` | Nano Banana Image Generation | 5:31 | Wireframe-to-UI, search grounding, entity locking |
| `_-FEgdQ_L4I` | Figma Make Workflows | 9:56 | 4-step planning, MCP stacking, production pipeline |
| `b-kTkak2FKs` | Gemini 3 + Aura Workflow | 37:13 | Inspiration-first design, section-by-section building |
| `7MEsUtvEbyU` | Advanced Aura Composition | 54:53 | Component composition, "context is code" philosophy |
| `lgqnMzOu2Lw` | GPT-5 + Aura Polish | 58:10 | Three-technique approach, avoiding AI defaults |
| `dXdxVi6Qz6k` | AI Design Customization | 28:44 | Breaking "AI smell", font/color refinement |
| `iVWt28DTkIc` | 4-Step Design System | 12:45 | PRD-first workflow, state-based design |
| `oL6bLQOXwAY` | Animation Workflows | 18:55 | GSAP, scroll-driven animations, micro-interactions |
| `61Z2jLH4yGU` | AI Design Tools Overview | 7:15 | Design OS, competitor analysis, Figma integration |

### Further Reading

**Frontier Tools & Trends:**
- [Emergent - Best AI Tools for UI Design](https://emergent.sh/learn/best-ai-tools-for-ui-design)
- [Jakob Nielsen - 18 Predictions for 2026](https://jakobnielsenphd.substack.com/p/2026-predictions)
- [Supernova - Future of Enterprise Design Systems](https://www.supernova.io/blog/the-future-of-enterprise-design-systems-2026-trends-and-tools-for-success)

**Design Systems & Tokens:**
- [Figma - Design Systems And AI: Why MCP Servers Are The Unlock](https://www.figma.com/blog/design-systems-ai-mcp/)
- [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [Tokens Studio](https://tokens.studio/)

**Landing Pages:**
- [SaaSFrame - 10 Landing Page Trends for 2026](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples)
- [Unbounce - The Anatomy of a Landing Page](https://unbounce.com/landing-page-articles/the-anatomy-of-a-landing-page/)
- [StoryBrand Framework](https://storybrand.com/)

**MCP Ecosystem:**
- [MCP Market - Design Tools](https://mcpmarket.com/categories/design-tools)
- [shadcn MCP Documentation](https://ui.shadcn.com/docs/mcp)
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)

**Creative UI:**
- [Awwwards - Sites of the Day](https://www.awwwards.com/websites/sites_of_the_day/)
- [Fuselab Creative - UI/UX Trends 2026](https://fuselabcreative.com/ui-ux-design-trends-2026-modern-ui-trends-ux-trends-guide/)

**Documentation Design:**
- [Stripe - How We Build Interactive Docs with Markdoc](https://stripe.com/blog/markdoc)
- [Backlight - Best Design System Documentation Sites](https://backlight.dev/mastery/the-best-design-system-documentation-sites)

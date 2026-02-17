# Metaphor Derivation: SYSTEM Remote Mac Control (004-system-remote-mac.md)

**Agent:** METAPHOR-AGENT (Ceiling Tier)
**Date:** 2026-02-16
**Lens:** I am using an Identity + Tension hybrid lens. I am CONSTRUCTING an interpretation of this content through deliberate questioning, not discovering a pre-existing truth. Multiple valid metaphors exist; this is ONE path.

---

## Content Assessment (Phase 0)

**Content type:** MIXED (~45% prose, ~40% code/tables/diagrams, ~15% mental models)
- Substantial prose framing (architecture rationale, mental models, integration patterns)
- Heavy code blocks (TypeScript, bash, JSON configuration)
- Multiple ASCII diagrams (Brain/Tunnel/Body, Trust Boundaries, Gas Town)
- Several data tables (features, endpoints, threats, combinations)

**Route:** HYBRID path. Pipeline runs on the narrative/conceptual arc; code/data sections receive design system defaults within the metaphor structure.

**Scope:** LONG (~1300 lines, ~6500 words). Content segments into:
1. ORIENTATION ("You Are Here" + "What This Is") -- NARRATIVE
2. ARCHITECTURE ("Brain/Tunnel/Body", deep dive) -- MIXED (prose + diagrams + code)
3. SETUP ("Installation and Setup", "Configuration") -- REFERENCE/CODE
4. SECURITY ("Security Considerations", threat model) -- MIXED (prose + code + tables)
5. INTEGRATION ("Integration Patterns" with Ralph/Gas Town/CC-Mirror) -- MIXED (prose + diagrams + code)
6. MENTAL MODELS (4 models) -- NARRATIVE/DIAGRAMMATIC
7. VERIFICATION ("Checkpoints", "Troubleshooting") -- REFERENCE

**Tier:** CEILING. The Addition Test = NO. This content has genuine structural tension: the reader needs to FEEL safe about granting powerful system access to an AI, while simultaneously understanding the power of that access. You cannot resolve "safety in the presence of danger" by assembling components. The content is architecturally novel (Brain/Tunnel/Body is a new pattern, not a standard tutorial) and philosophically loaded (trust, autonomy, control).

**Section classification:**
- Sections 1, 5 (partial), 6: NARRATIVE (pipeline-eligible)
- Sections 2, 4: MIXED (pipeline + design system defaults)
- Sections 3, 7: REFERENCE (design system defaults within metaphor frame)

---

## Phase 1: Multi-Axis Questioning

### AXIS: FEEL
**Question:** "What does the reader need to FEEL while navigating this content?"

**Needs:**
- **Controlled power:** The reader is learning to give an AI control over their physical computer. They need to feel that this power is harnessed, not unleashed. The emotional arc is "this is exciting AND safe."
- **Graduated trust:** The content presents increasingly powerful capabilities (music control -> shell commands -> multi-Mac orchestration -> autonomous factory). The reader needs to feel trust building at each level, not dumped all at once.
- **Containment with permeability:** The three-layer architecture (Brain/Tunnel/Body) exists to contain AI actions. But the whole point is that actions DO flow through. The reader needs to feel the containment is real while the permeability is useful.
- **Competence, not intimidation:** This is infrastructure documentation -- dense, technical. The reader needs to feel capable of setting this up, not overwhelmed by its complexity.

**Structural Properties:** Graduated containment, permeable boundaries, layered access, progressive disclosure of power
**Richness:** HIGH -- "controlled power" opposes KortAI's austerity (which reads as unyielding, not safety-granting)

---

### AXIS: UNDERSTAND
**Question:** "What does the reader need to UNDERSTAND about the relationships in this content?"

**Needs:**
- **Three-layer separation is load-bearing, not decorative:** Brain/Tunnel/Body isn't just an architectural diagram -- it's the security model. Each layer's existence protects the others. The reader must understand that removing any layer collapses the whole.
- **Trust flows downward, capability flows upward:** The Brain decides, the Tunnel validates, the Body executes. Trust descends (each layer trusts the one above less); capability ascends (each layer has more system access than the one above). This is a counter-flow.
- **Composition enables scale:** One Brain -> many Bodies. Many Brains -> one Body. The architecture isn't just separation -- it's the basis for combinatorial scaling (Ralph, Gas Town, CC-Mirror integrations).
- **Each security layer does something different:** Authentication != filtering != rate-limiting != allowlisting. The reader must understand four distinct security operations, not blur them into "it's secure."

**Structural Properties:** Hierarchical layering, directional flow (bidirectional: trust down, capability up), compositional multiplication, functional differentiation within layers
**Richness:** HIGH -- bidirectional flow creates genuine structural complexity; KortAI's flat/angular vocabulary must express directionality

---

### AXIS: DO
**Question:** "What does the reader need to DO with this content after reading?"

**Needs:**
- **Install and configure a 3-component system** (Bridge, Agent, permissions)
- **Make security decisions** (what to allowlist, how to harden)
- **Choose integration patterns** (Ralph, Gas Town, CC-Mirror, combinations)
- **Verify each checkpoint** (health, auth, execution, deployment, end-to-end)
- **Troubleshoot failures** across multiple layers

**Structural Properties:** Sequential steps with branching decisions, checkpoint verification, multi-path troubleshooting
**Richness:** MEDIUM -- KortAI handles procedural content well; DO aligns with system's decisiveness

---

### AXIS: BECOME
**Question:** "What does the reader need to BECOME after absorbing this content?"

**Needs:**
- **An architect of trust boundaries:** Not just "I set this up" but "I understand WHY each layer exists and can make security decisions." The reader should become someone who thinks in trust zones.
- **A distributed systems thinker:** The integration patterns (Ralph + Gas Town + CC-Mirror) require thinking about multi-machine coordination. The reader should shift from single-machine mindset to distributed.
- **A capability-ladder climber:** The content presents 5 capability levels (Claude alone -> Claude + local MCP -> Claude + SYSTEM -> multiple Macs -> full factory). The reader should understand their position on this ladder and what moving up costs/gains.

**Structural Properties:** Identity transformation through layered understanding, positional awareness on a progression, mental model acquisition
**Richness:** HIGH -- "becoming a trust-boundary thinker" opposes KortAI's verdict-drive (system wants to TELL you the answer; this content needs you to INTERNALIZE a framework)

---

### AXIS: NAVIGATE (Extended)
**Question:** "How does the reader need to move THROUGH this content?"

**Needs:**
- **Non-linear reference after linear learning:** First read is sequential (understand architecture -> set up -> configure -> verify). Subsequent reads are random-access (jump to troubleshooting, jump to integration pattern).
- **Layer-specific diving:** Reader may need to go deep on Brain OR Tunnel OR Body, not always all three. Navigation should support layer-specific exploration.
- **Integration pattern selection:** The combination matrix (Ralph, Gas Town, CC-Mirror) is a decision tree. Reader needs to find THEIR integration path quickly.

**Structural Properties:** Linear primary path with lateral entry points, depth-on-demand per layer, decision-tree navigation
**Richness:** MEDIUM -- complex topology vs hierarchical system

---

### AXIS: TRUST (Extended)
**Question:** "What does the reader need to believe about this content's AUTHORITY?"

**Needs:**
- **That the security model is real, not theater:** This content grants AI access to your computer. The security claims need to feel substantiated, not hand-waved. Code examples (constant-time comparison, pattern blocking, allowlisting) serve as proof-of-work.
- **That the architecture is production-worthy:** 285+ stars, MIT license, active development -- but the reader needs to trust this for their own machine.
- **That the author understands the risks:** The "What SYSTEM Does NOT Protect Against" section is critical. Showing what ISN'T protected builds more trust than overclaiming.

**Structural Properties:** Evidence-backed claims, honest limitation disclosure, proof-of-concept code
**Richness:** MEDIUM -- trust aligns with KortAI's authority personality (both want to be authoritative). But the HONESTY about limitations creates some opposition.

---

### AXIS: EVALUATE (Extended)
**Question:** "What does the reader need to JUDGE about what's presented?"

**Needs:**
- **Installation path selection:** Desktop app vs CLI vs manual component setup. Three paths with different tradeoffs.
- **Integration pattern selection:** Which combination (Ralph, Gas Town, CC-Mirror, multiple) fits their needs?
- **Security risk acceptance:** What threats does this mitigate? What threats remain? Is the residual risk acceptable?

**Structural Properties:** Multi-criteria comparison, risk/benefit assessment, path selection
**Richness:** LOW -- evaluation aligns with KortAI's decisive personality

---

### AXIS: ORIENT (Extended)
**Question:** "What does the reader need to know about WHERE THIS FITS before engaging?"

**Needs:**
- **This is infrastructure, not application:** SYSTEM is a foundation layer that other patterns (Ralph, Gas Town) build on. The reader needs to understand this is a building block, not a finished product.
- **Capability ladder positioning:** Where does SYSTEM sit relative to local Claude Code, MCP, etc.?
- **The Brain/Tunnel/Body pattern is reusable:** This isn't just about SYSTEM -- it's a distributed agent architecture pattern applicable beyond this specific tool.

**Structural Properties:** Hierarchical positioning, category membership, pattern abstraction
**Richness:** LOW YIELD -- orientation aligns with KortAI's positioning personality

---

### AXIS: RECONCILE (Extended)
**Question:** "What does the reader need to RECONCILE between this content and what they already believe?"

**Needs:**
- **"Giving AI access to my computer is dangerous" vs "This makes it safe and useful":** The reader's default assumption is that remote AI control is risky. This content must reconcile that fear with the layered security model.
- **"Remote = slow and unreliable" vs "Remote = flexible and persistent":** The traditional remote desktop mental model (laggy, frustrating) must be replaced with the SYSTEM paradigm (AI decides autonomously, schedules future actions).
- **"One machine = my machine" vs "Many machines = my fleet":** Single-machine thinking must expand to multi-Mac orchestration thinking.

**Structural Properties:** Belief inversion, paradigm replacement, mental model expansion
**Richness:** HIGH -- reconciliation DIRECTLY opposes KortAI's verdict-drive. The system wants to ASSERT; this content needs the reader to INTERNALLY TRANSFORM their beliefs. You cannot verdictively declare "this is safe" -- the reader must reconcile safety for themselves.

---

### AXIS: SEE (Structural Trigger -- DEPLOYED)
**Signal:** Multiple system architecture diagrams, state machines, trust boundary diagrams, capability expansion levels

**Needs:**
- **Three-layer separation must be SPATIALLY visible**, not just described
- **Trust boundary zones must feel like zones**, not just labeled boxes
- **The capability ladder must feel progressive**, each level visibly encompassing the previous

**Structural Properties:** Spatial zoning, nested containment, progressive encompassment
**Richness:** MEDIUM -- spatial needs vs linear scroll

---

### AXIS: DISCOVER (Structural Trigger -- DEPLOYED)
**Signal:** Progressive capability revelation (Level 0 -> Level 4), integration patterns that compound

**Needs:**
- **Progressive power revelation:** Each integration section should feel like unlocking a new capability level
- **Compounding insight:** Ralph alone is useful. Gas Town alone is useful. Ralph + Gas Town + CC-Mirror is transformatively powerful. The compound insight should feel earned, not just listed.

**Structural Properties:** Delayed payoff, progressive revelation, combinatorial insight
**Richness:** MEDIUM -- progressive revelation opposes explicit labeling

---

### Phase 1 Summary Table

| Axis | Richness | Key Structural Properties | Opposition to KortAI |
|------|----------|---------------------------|---------------------|
| **FEEL** | HIGH | Graduated containment, permeable boundaries, layered access | Controlled power vs austere verdict |
| **UNDERSTAND** | HIGH | Bidirectional flow, compositional multiplication, functional differentiation | Directional complexity vs flat hierarchy |
| **DO** | MEDIUM | Sequential with branching, checkpoint verification | Aligns with system |
| **BECOME** | HIGH | Identity transformation, positional awareness, mental model acquisition | Internalization vs assertion |
| **NAVIGATE** | MEDIUM | Linear + lateral, depth-on-demand, decision-tree | Complex topology vs hierarchical |
| **TRUST** | MEDIUM | Evidence-backed, honest limitations | Partially aligns |
| **EVALUATE** | LOW | Multi-criteria comparison | Aligns with decisive system |
| **ORIENT** | LOW YIELD | Hierarchical positioning | Aligns with system |
| **RECONCILE** | HIGH | Belief inversion, paradigm replacement | Reconciliation vs verdict-drive |
| **SEE** | MEDIUM | Spatial zoning, nested containment, progressive encompassment | Spatial vs linear |
| **DISCOVER** | MEDIUM | Progressive revelation, combinatorial insight | Withholding vs directness |

**Highest-yield axes:** FEEL, UNDERSTAND, BECOME, RECONCILE
**Compound pair detected:** RECONCILE + FEEL -- "Transform what you believe about AI control AND feel safe doing it" -- double transformation with emotional dimension.
**Second compound pair:** UNDERSTAND + SEE -- "Grasp the layered architecture AND perceive it spatially" -- cognitive + visual reinforcement.

---

## Phase 2: Tension Derivation

### Tension Candidate 1: FEEL + RECONCILE (Compound)

**Side A (Reader Needs):**
- Controlled power -- excitement constrained by safety
- Graduated trust -- belief building incrementally
- Paradigm shift -- "AI access = dangerous" must become "AI access = managed"
- Emotional arc from caution to confidence

**Side B (KortAI Constraints):**
- 75% austere, 95% angular, 85% serious, 80% rigid
- Flat surfaces (no depth illusion) -- how do you show layers of trust with no depth?
- Decisive edges -- how do you show permeability with nothing but hard lines?
- Sparse (70%) -- how do you show graduated density with minimal ornamentation?

**Genuine opposition:**
- Reader needs GRADUATED WARMTH (building trust); system provides UNIFORM AUSTERITY
- Reader needs PERMEABLE BOUNDARIES (trust flows through layers); system provides ABSOLUTE BOUNDARIES (border-radius: 0, hard edges)
- Reader needs EMOTIONAL PROGRESSION (fear -> understanding -> confidence); system provides STATIC AUTHORITY

**Addition Test:** Can existing components produce "graduated trust through permeable boundaries"? NO. No component expresses "this edge is hard but permeable." The concept of a hard boundary you can pass through if authorized requires metaphor.

**BECAUSE Test:** The reader needs graduated trust BECAUSE the content progressively reveals more powerful (and more dangerous) capabilities, from music control to shell commands to autonomous multi-Mac orchestration. The reader needs permeable boundaries BECAUSE the entire architecture is about controlled flow-through: commands pass through layers that validate but don't block.

**Richness Formula:**
- Opposition Depth: 3 (warmth vs austerity + permeability vs rigidity + progression vs stasis)
- Structural Overlap: 3 (layering, ordering, containment are shared by both sides)
- Metaphor Space Width: 3 (multiple domain candidates: architectural, fortress, checkpoint)
- **RICHNESS = 3 x 3 x 3 = 27**

---

### Tension Candidate 2: UNDERSTAND + SEE (Compound)

**Side A (Reader Needs):**
- Bidirectional flow (trust down, capability up)
- Compositional multiplication (1 Brain -> many Bodies)
- Functional differentiation within layers (auth != filtering != rate-limiting)
- Spatial zoning of trust boundaries

**Side B (KortAI Constraints):**
- Linear scroll (inherent to web pages)
- Flat (no depth illusion for layers)
- Angular (no rounded containers for zones)
- Sparse (limited visual vocabulary for differentiation)

**Genuine opposition:**
- Reader needs DIRECTIONAL FLOW; system is STATIC (flat, no movement)
- Reader needs ZONE DIFFERENTIATION; system provides LIMITED PALETTE (warm cream + near-black + one accent)
- Reader needs SPATIAL ARCHITECTURE; system is LINEAR

**Addition Test:** Can existing components produce "bidirectional flow through differentiated zones"? PARTIAL. Tables can show layers. But the COUNTER-FLOW (trust going one way, capability going the other) and the MULTIPLICATION (1-to-many, many-to-1) cannot be expressed through component assembly.

**BECAUSE Test:** The reader needs bidirectional flow BECAUSE the architecture literally works that way -- commands flow down, results flow up, trust attenuates downward, capability concentrates downward. The reader needs spatial zones BECAUSE the trust boundary diagram is the content's central conceptual artifact.

**Richness Formula:**
- Opposition Depth: 2 (flow vs static + zone vs linear)
- Structural Overlap: 3 (layering, ordering, containment shared)
- Metaphor Space Width: 2 (architectural, cartographic)
- **RICHNESS = 2 x 3 x 2 = 12**

---

### Tension Candidate 3: BECOME + DISCOVER

**Side A (Reader Needs):**
- Identity transformation (become a trust-boundary thinker)
- Progressive power revelation (Level 0 -> Level 4)
- Combinatorial insight (compound integrations)

**Side B (KortAI Constraints):**
- Decisive/assertive (tells you, doesn't transform you)
- Explicit (labels everything upfront)
- Hierarchical (ranks, doesn't unlock)

**Genuine opposition:**
- Reader needs INTERNALIZATION; system provides EXTERNALIZATION
- Reader needs PROGRESSIVE DISCOVERY; system provides UPFRONT DECLARATION

**Addition Test:** Can existing components produce "progressive identity transformation through combinatorial discovery"? NO. No component expresses "becoming."

**BECAUSE Test:** The reader needs to become a trust-boundary thinker BECAUSE the content presents 4 trust zones and 5 capability levels -- understanding these AS A FRAMEWORK (not just facts) is what makes the reader capable of making their own security decisions.

**Richness Formula:**
- Opposition Depth: 2 (internalization vs externalization + discovery vs declaration)
- Structural Overlap: 2 (ordering, progression shared)
- Metaphor Space Width: 2 (initiation/apprenticeship, unlock/level)
- **RICHNESS = 2 x 2 x 2 = 8**

---

### Tension Selection

| Tension | Richness | Genuine? | BECAUSE? | Bridgeable? |
|---------|----------|----------|----------|-------------|
| **FEEL + RECONCILE** (controlled power through graduated trust) | **27** | YES | YES | YES (overlap 3) |
| UNDERSTAND + SEE (bidirectional flow through zones) | 12 | YES | YES | YES (overlap 3) |
| BECOME + DISCOVER (transformation through revelation) | 8 | YES | YES | YES (overlap 2) |

**Selected primary tension:** FEEL + RECONCILE (Richness 27)

**The tension in plain language:** The reader needs to feel progressively safe about granting an AI increasingly powerful access to their physical computer -- building from cautious curiosity to confident control. But KortAI's austere, angular, decisive personality communicates authority-by-fiat, not graduated trust-building. The content needs PERMEABLE, GRADUATED CONTAINMENT; the system provides ABSOLUTE, BINARY EDGES.

**Secondary tension absorbed:** UNDERSTAND + SEE. The bidirectional flow (trust down, capability up) and zone differentiation will be expressed WITHIN whichever metaphor resolves the primary tension, not as a separate concern.

---

## Phase 3: Metaphor Collapse

### Step 3.1: Structural Properties from Side A (Reader Needs)

Transforming emotional needs into geometric/topological abstractions:

- "Graduated trust" -> **STRATIFICATION** (parallel layers of different permeability)
- "Controlled power" -> **GATED FLOW** (movement through checkpoints)
- "Permeable boundaries" -> **SEMI-PERMEABLE MEMBRANES** (boundaries that filter, not block)
- "Progressive capability" -> **NESTED CONTAINMENT** (each zone encompasses more capability)
- "Belief transformation" -> **TRAVERSAL WITH STATE CHANGE** (reader changes as they pass through)
- "Fear to confidence arc" -> **GRADUATED DENSITY** (sparse caution -> dense confidence)

### Step 3.2: Structural Properties from Side B (System Constraints)

- `border-radius: 0` -> **ANGULARITY** (all boundaries are straight lines)
- `box-shadow: none` -> **FLATNESS** (no depth illusion)
- Border categories (1px, 3px, 4px) -> **DISCRETE WEIGHT** (finite emphasis levels)
- Spacing scale -> **PRECISE INTERVALS** (quantized positions)
- Limited palette -> **NARROW TEMPERATURE RANGE** (small perceptual variation)
- 70% sparse -> **GENEROUS WHITE SPACE** (breathing room dominates)

### Step 3.3: Structural Overlap

| Property | Side A (Needs) | Side B (System) | Shared? |
|----------|---------------|-----------------|---------|
| Stratification / Layering | Layers of trust | Border-weight hierarchy | **YES** |
| Gated flow / Discrete steps | Checkpoints | Precise intervals | **YES** |
| Containment / Angularity | Nested zones | Sharp-edged containers | **YES** |
| Graduated density | Sparse -> Dense | Sparse default | **YES** |
| Semi-permeability | Selective passage | -- | NO (system has absolute edges) |
| Traversal with state change | Reader transforms | -- | NO (system is static) |
| Flatness | -- | Flat, no depth | SIDE B ONLY |
| Narrow temperature | -- | Limited palette | SIDE B ONLY |

**Shared properties:** 4 (Stratification, Gated flow, Containment, Graduated density)
**Total unique properties:** 8
**Overlap = 4/8 = 50%** -- IDEAL ZONE (strong metaphor potential)

**GAP properties (Side A only):** Semi-permeability, Traversal with state change
**GAP properties (Side B only):** Flatness, Narrow temperature range

### Step 3.4: Search Query

> "What real-world domain naturally exhibits STRATIFICATION, GATED FLOW, ANGULAR CONTAINMENT, and GRADUATED DENSITY, while being FLAT and TEMPERATURE-NARROW, yet conveying SEMI-PERMEABILITY and TRAVERSAL WITH TRANSFORMATION?"

### Three Search Heuristics

**1. Constraint scan (ANGULARITY + FLATNESS eliminates most):**
- Eliminates: organic/biological, liquid/fluid, atmospheric, textile, botanical, musical
- Survives: architectural, geological, cartographic, industrial, military, legal, archival

**2. Content resonance (what is the content LITERALLY about?):**
- The content uses: "Brain/Tunnel/Body", "trust zones", "layers", "bridge", "security layers", "allowlist", "checkpoint"
- LITERAL VOCABULARY: "tunnel" (passage through), "bridge" (connection between zones), "zone" (bounded territory), "layer" (stratification), "checkpoint" (gated flow)
- Strongest resonance: FORTIFICATION / SECURE FACILITY (multiple security perimeters, checkpoints, authorized passage, zoned access)

**3. Emotional valence (warmth/safety eliminates aggressive/clinical):**
- Eliminates: military (aggressive), legal (adversarial), clinical
- Partially eliminates: industrial (impersonal)
- Survives: architectural (can be warm), geological (neutral), cartographic (neutral), archival (warm)

### Candidate Generation

**Candidate 1: SECURE FACILITY / CONTROLLED-ACCESS BUILDING**
Domain: A secure building with nested perimeters -- visitor lobby (untrusted), reception desk (semi-trusted), secured corridors (trusted), inner vault (system zone). Each zone requires higher authorization. The building is angular, flat-roofed, precise. Movement through the building requires passing checkpoints. Trust is verified at each threshold.

**Candidate 2: CARTOGRAPHIC SURVEY / TERRITORIAL MAP**
Domain: A territorial survey with concentric boundaries -- the borderland (untrusted), the frontier checkpoint (semi-trusted), the settled territory (trusted), the capital/citadel (system zone). Mapped in flat, angular cartographic projection. Movement inward requires authorization at each boundary. The map progressively reveals more detail as you move from periphery to center.

**Candidate 3: LOCK SYSTEM / CANAL LOCK SEQUENCE**
Domain: A canal lock system (like the Panama Canal) -- water (commands/data) must pass through a series of locks (validation layers) to move between elevations (trust levels). Each lock is a discrete, angular chamber. Water enters, the gate closes, the level adjusts (validation occurs), the gate opens to the next chamber. The sequence is graduated, controlled, and inherently about flow through containment.

---

## Metaphor Evaluation (Ceiling Modification)

### Scoring Table (0-3 per criterion, threshold >= 8/12)

| Criterion | Candidate 1: SECURE FACILITY | Candidate 2: TERRITORIAL MAP | Candidate 3: CANAL LOCK SEQUENCE |
|-----------|------------------------------|------------------------------|----------------------------------|
| **1. STRUCTURAL DEPTH** (internal parts mapping at 2+ levels) | **3** -- Zones map to trust boundaries (4 zones = 4 trust levels). Within zones: sub-rooms map to components (reception desk = auth validation, corridor = request routing, vault = system execution). At micro level: door hardware maps to code patterns (locks = bearer tokens, badges = API keys). 3 levels deep. | **2** -- Borders map to trust boundaries. Territory detail increases toward center. But internal structure of each territory zone is thin -- "settled territory" doesn't have natural sub-components. 2 levels. | **3** -- Lock chambers map to security layers (4 chambers = 4 layers). Within each chamber: gates = validation checks, water level = trust level, chamber walls = containment. Flow direction maps to command/result flow. At micro level: gate mechanisms map to specific security operations. 3 levels deep. |
| **2. TENSION RESONANCE** (captures a tension already in the content) | **3** -- The content IS about controlled access through security perimeters. Brain = inner sanctum, Tunnel = secured corridor, Body = execution wing. The tension between "you want to get in" (access your Mac) and "we need to verify you" (security layers) IS the content's core tension. The facility metaphor doesn't just REPRESENT the architecture; it IS the architecture. | **2** -- The content has territorial language ("zones", "boundaries") but isn't fundamentally about territory. The trust boundary diagram looks territorial, but the DYNAMICS (flow, validation, transformation) are not naturally cartographic. | **3** -- The content IS about controlled flow through validation stages. Commands enter at one level, get validated, and emerge at a different trust level. The lock metaphor captures the TRANSFORMATION aspect: water doesn't just PASS through locks, it CHANGES ELEVATION. Similarly, a command doesn't just pass through the Tunnel -- it gets validated and its trust level changes. |
| **3. MECHANISM AFFINITY** (suggests 3+ CSS mechanisms without forcing) | **3** -- Zone backgrounds (different background tints for each trust zone = S category). Border-weight gradient (heavier borders for more secure zones = H category). Spacing compression (tighter spacing in high-security zones = S/H category). Color-coded security badges (accent color for auth-level indicators = C category). Checkpoint dividers (structural borders between zones = N category). Progressive disclosure for zone details (collapsible per-zone content = N category). Naturally suggests 6+ mechanisms across all 5 categories. | **2** -- Zone backgrounds (territory shading). Border-weight for boundaries. Spacing for detail density. But the flat map metaphor doesn't naturally suggest temporal/sequential mechanisms. Missing strong affinity with hierarchy mechanisms or navigation mechanisms. ~4 mechanisms, concentrated in S and C categories. | **2** -- Zone backgrounds (water level tinting). Border-weight for lock gates. Sequential flow for navigation. But the vertical/sequential nature of locks may conflict with horizontal web layout. Lock chambers want to be VERTICAL (water rises); web pages are HORIZONTAL (content flows down). The metaphor maps well conceptually but has a spatial orientation mismatch. ~4 mechanisms, but some require forced translation. |
| **4. SEMANTIC SURPLUS** (generates more ideas than needed) | **3** -- Immediately suggests: visitor badges (API keys), security cameras (audit logs), intercom system (WebSocket communication), building blueprints (architecture diagrams), fire exits (error handling), delivery dock (batch endpoints), maintenance schedule (cron scheduling), wing designation (multi-Mac routing), elevator access levels (capability ladder). Far more ideas than sections. The metaphor is generative. | **2** -- Suggests: border crossings (checkpoints), cartographer's legend (documentation), fog of war (undiscovered capabilities), trade routes (integration patterns). Reasonable but not overflowing. Some ideas feel forced (what is the "trade route" for Ralph?). | **2** -- Suggests: lock keeper (Bridge process), tide schedule (cron scheduling), cargo manifest (request payload), depth markers (trust levels), sluice gates (rate limiting). Good conceptual mapping but the canal domain is narrow -- it runs out of vocabulary faster than the facility domain. |
| **TOTAL** | **12/12** | **8/12** | **10/12** |

### Candidate Rankings

1. **SECURE FACILITY / CONTROLLED-ACCESS BUILDING: 12/12** -- COMMIT
2. Canal Lock Sequence: 10/12 -- Strong alternate but spatial orientation mismatch
3. Territorial Map: 8/12 -- Passes threshold but lacks depth and dynamism

### Perceptual Risk Assessment (Candidate 1: Secure Facility)

| Risk Question | Assessment | Score |
|---------------|------------|-------|
| Transition model: state change or empty space? | State change -- moving between zones is passing through a security checkpoint (door, scanner, badge reader). Transitions are EVENTS, not gaps. | LOW (0) |
| Expression mode: structural gradients or textual labels? | Structural -- zone backgrounds darken progressively, borders thicken, spacing tightens. The security level is SHOWN through graduated visual density, not labeled "ZONE 1, ZONE 2." | LOW (0) |
| Element variety: varied sizes or uniform grids? | Varied -- visitor lobby (wide, sparse) vs security corridor (narrow, dense) vs vault (compact, heavy). Each zone has different visual character. | LOW (0) |
| Responsive story: natural degradation? | Natural -- a building narrows into a corridor at 768px. Rooms stack vertically. The building gets taller and narrower, like a real narrow-footprint security building. | LOW (0) |

**Perceptual Risk Score: 0/4 (LOW RISK)** -- Proceed confidently.

### Perceptual Cost Assessment (Candidate 1: Secure Facility)

| Isomorphism | Cost Question | Cost |
|-------------|---------------|------|
| Vault = compact zone -> tight spacing | Compression below 32px floors? | 0 (vault can use heavy borders + dark background without extreme compression) |
| Building footprint -> container width | Container below 940px? | 0 (building fills available width -- no cylindrical narrowing) |
| Room grid for endpoints table | 4+ identical items in grid? | 0 (rooms are differentiated by function, not uniform) |
| Zone transitions -> checkpoint dividers | Transitions as empty space? | 0 (checkpoints are ACTIVE barriers, not gaps) |
| Security signage -> section headers | Explicit labels over structure? | +1 (risk of over-labeling zones with security metaphor vocabulary) |

**Perceptual Cost Score: 1/5 (LOW-MODERATE)**

**Builder Warning:** Avoid explicit metaphor labels like "ENTERING SECURED ZONE" or "CHECKPOINT ALPHA." The zone transitions should be FELT through visual changes (background, border-weight, density), not ANNOUNCED through text labels. Let the structure do the speaking.

---

## Winning Metaphor: SECURE FACILITY (Detailed Structural Mapping)

### Core Concept

The page is a **controlled-access facility** -- a flat-roofed, angular, security-conscious building that the reader enters as a visitor and, through progressive authorization, gains access to deeper and more powerful zones. The building has four distinct security zones, each with increasing authorization requirements and decreasing accessibility. Trust is earned by passage through checkpoints, not granted at the door.

### Zone Mapping

| Facility Zone | Content Section(s) | Trust Level | Visual Treatment |
|---------------|-------------------|-------------|-----------------|
| **EXTERIOR / APPROACH** | "You Are Here", "What This Is", "Key Features" | UNTRUSTED | Lightest background (warm cream base). Widest spacing. Thinnest borders (1px). Most open -- the "public face" of the facility. Welcoming but angular. |
| **LOBBY / RECEPTION** | "Brain/Tunnel/Body Architecture", "Why This Architecture Matters" | SEMI-TRUSTED | Slightly deeper background tint. Medium spacing. 3px structural borders appear. The architecture is EXPLAINED here -- you learn the building's security design before going deeper. |
| **SECURED WING** | "Architecture Deep Dive" (Brain/Bridge/Tools), "Installation", "Configuration", "Security Considerations" | TRUSTED | Noticeably denser zone. Tighter spacing. 4px accent borders mark critical information. Code blocks are prominent (these are the operational tools). Security section is the wing's core -- heaviest treatment. |
| **OPERATIONS CENTER** | "Integration Patterns", "Mental Models", "Checkpoints" | SYSTEM | Densest zone. Darkest background tint (still within warm palette). Heaviest border treatments. This is where the facility's POWER lives -- multi-Mac orchestration, distributed factories, capability ladders. The reader who reaches here has been "authorized" by understanding all previous zones. |

### Directional Flow Mapping

The content's bidirectional flow (trust descends, capability ascends) maps to:
- **Inward = deeper trust required, more powerful capability granted:** As the reader progresses through the page (downward = inward through the facility), each zone grants more power but requires more understanding.
- **Visual density gradient:** Sparse exterior -> dense operations center mirrors untrusted -> system zone.
- **Border-weight gradient:** 1px (exterior) -> 3px (lobby) -> 4px (secured wing) -> 4px + accent color (operations center). Weight encodes authorization level.

### Checkpoint Mapping

The transitions between zones are not empty whitespace -- they are **checkpoints**: visually distinct structural dividers that mark the boundary between trust levels.

| Checkpoint | Between | Visual Expression |
|------------|---------|-------------------|
| **Entry Gate** | Exterior -> Lobby | Structural divider with subtle background shift. "You've entered the building." |
| **Security Desk** | Lobby -> Secured Wing | Heavier divider (4px border). Background tint deepens noticeably. "You've been verified." |
| **Vault Door** | Secured Wing -> Operations Center | Full-width accent-color divider. Maximum visual weight. "You're authorized for full access." |

### Component Mapping

| Facility Element | Content Element | Expression |
|-----------------|-----------------|------------|
| Building blueprint | ASCII architecture diagrams | Preserved as code blocks within zone background |
| Security camera feed | Code examples (security layers) | Monospace blocks with subtle zone-appropriate tinting |
| Visitor badge | Feature tables, capability lists | Bordered tables with warm palette |
| Wing directory | Endpoint tables, configuration options | Data separator borders (1px), open grid (no vertical bars) |
| Intercom system | WebSocket/scheduling descriptions | Callout blocks with left accent border |
| Building wings | Integration patterns (Ralph, Gas Town, CC-Mirror) | Sub-zones within Operations Center, each with distinct treatment |
| Fire escape plan | Troubleshooting section | Distinct visual treatment -- accessible from any zone |
| Elevator access card | Capability expansion model (Levels 0-4) | Progressive disclosure or stepped visual (density builds) |

### Mechanism Category Affinity (Breadth Verification)

| Category | Mechanism Affinity | How Metaphor Suggests It |
|----------|-------------------|--------------------------|
| **Spatial (S)** | Zone-based density variation, spacing compression with depth | Each facility zone has different spatial density -- exterior is open, operations center is dense |
| **Hierarchy (H)** | Border-weight gradient encoding authorization level, typographic scale shift per zone | Heavier borders and larger type in higher-security zones |
| **Component (C)** | Zone backgrounds (tint gradient), color-coded checkpoints, code block treatment per zone | Each trust zone gets a subtly different background; checkpoints use accent color |
| **Depth/Emphasis (D)** | Solid offset for checkpoint dividers, zone background stepping | Checkpoints are visually heavy; zones step through background tints |
| **Structure/Navigation (N)** | Scroll witness tracking zone progression, progressive disclosure for sub-zones, dark header for facility "roof" | Reader sees which zone they're in; sub-sections collapse within zones |

All 5 categories have natural affinity. The metaphor does not force any category -- each emerges from the zone-based structure.

---

## STRUCTURAL OBLIGATION TABLE

What the metaphor DEMANDS of each content section -- not suggestions, but obligations that follow from the metaphor's internal logic. If the metaphor is a secure facility, these are non-negotiable consequences.

| Content Section | Metaphor Zone | Structural Obligation | What This Means in CSS/Layout |
|----------------|---------------|----------------------|------------------------------|
| "You Are Here" + "What This Is" + "Key Features" | EXTERIOR | MUST be the most open, least dense zone. MUST use lightest visual treatment. MUST feel like approaching a building -- you see the facade before you enter. Wide margins, generous whitespace, minimal borders. | `background: var(--color-background)` (pure warm cream). Widest `padding`. Thinnest borders (1px only). No accent color yet -- you haven't entered. |
| "Brain/Tunnel/Body Architecture" + "Why This Architecture Matters" | LOBBY | MUST introduce the facility's security logic. MUST feel like learning the building's layout from the reception desk. The architecture diagram is the "building map" posted in the lobby. Structural borders appear (3px) -- you're now inside. | Subtly deeper background tint. 3px structural borders on key containers. The ASCII architecture diagram is a featured element (lobby centerpiece). Medium spacing. |
| "Architecture Deep Dive" (Brain/Bridge/Tools) | SECURED WING -- Room A | MUST feel like entering specific rooms. Each component (Brain, Bridge, Body) is a ROOM within the wing. Rooms have their own treatment but share the wing's visual language. Code blocks are prominent (these are the room's equipment). | 4px accent borders on component sections. Code blocks with zone-appropriate background. Tighter spacing than lobby. Each component section is visually contained (its own "room"). |
| "Installation and Setup" + "Configuration" | SECURED WING -- Room B | MUST feel like the facility's "operations manual." Procedural, sequential, precise. Step-by-step with checkpoint verification. This is where you learn to USE the building's systems. | Sequential layout. Code blocks dominate. Steps are visually distinct (numbered or bordered). Configuration is tabular (wing directory style). |
| "Security Considerations" | SECURED WING -- Room C (Vault Antechamber) | MUST be the HEAVIEST-treated section in the Secured Wing. This is the security office -- the room where trust is evaluated. Threat tables are the facility's risk register. Hardening recommendations are posted protocols. | Maximum border-weight within the wing. Threat/mitigation tables with strong visual structure. The "What SYSTEM Does NOT Protect Against" section gets special treatment (honest disclosure = building the reader's trust). |
| "Integration Patterns" | OPERATIONS CENTER -- Main Floor | MUST feel like entering the command center. Each integration (Ralph, Gas Town, CC-Mirror) is a WORKSTATION in the operations center. This is where the facility's real power is visible. Densest treatment. | Deepest background tint. 4px borders + accent color. Each integration pattern is a distinct sub-zone. Architecture diagrams are operational displays. The combination matrix is the operations dashboard. |
| "Mental Models" | OPERATIONS CENTER -- Strategy Room | MUST feel like the facility's planning room. Abstract, strategic. The 4 mental models are strategic frameworks posted on the strategy room walls. | Slightly different treatment from main operations floor -- more contemplative spacing, but within the dense operations zone. Diagrams are featured. |
| "Checkpoints" + "Troubleshooting" | FACILITY-WIDE (Accessible from any zone) | MUST feel like the building's emergency protocols -- accessible from ANY zone, not locked behind authorization. Checkpoints are verification stations distributed throughout. Troubleshooting is the fire escape plan. | Visually distinct from the zone progression. Could use a consistent sidebar treatment or repeating visual pattern. Each checkpoint is a self-contained verification block. Troubleshooting uses collapsible/accordion pattern. |

---

## 1-PARAGRAPH SUMMARY

The page is a **controlled-access facility**: a flat-roofed, angular, security-conscious building that the reader enters as a visitor and, through progressive authorization, gains access to deeper and more powerful zones. Four trust zones -- Exterior (open, sparse, lightest background), Lobby (the architecture explained, structural borders appear), Secured Wing (code-heavy, dense, accent borders, three "rooms" for components, setup, and security), and Operations Center (densest, darkest tint, integration patterns as command workstations) -- are separated by checkpoint dividers that mark trust-level transitions through visual weight shifts rather than labels. The metaphor is structurally load-bearing: border-weight encodes authorization level (1px exterior to 4px operations), background tint encodes depth into the facility, spacing compression encodes increasing power density, and checkpoint dividers function as security thresholds the reader "passes through" by absorbing each section's content. If the facility metaphor collapsed, the zone progression, the graduated density, and the checkpoint rhythm would collapse with it.

---

**END METAPHOR DERIVATION**
**Status:** Metaphor committed. Score 12/12. Perceptual Risk 0/4. Ready for Phase 4 (Build Plan).**

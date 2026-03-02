## World-Description

This page lives in the part of the KortAI world where the machinery is visible. Where the editorial surface cracks open to reveal an engine room — not clean and diagrammatic, but working, loud, running hot. The earth tones here carry soot. The red (#E83025) appears not as an accent but as a warning light on industrial gauges. This is the room in KortAI's world where precision serves scale, where the geometry that elsewhere feels decisive here feels *structural* — load-bearing walls, not aesthetic choices.

## Opposition

The central tension is **INDUSTRIAL SCALE vs. INDIVIDUAL COMMAND**.

On one side: a factory. Eight named roles. Dozens of simultaneous agents. $750/day burn rates. Nondeterministic idempotence. "Some bugs fixed 2-3 times." Chaos accepted as a feature. The content screams *surrender control to gain throughput* — stop being the programmer, become the product manager, let the colony work.

On the other side: a single human. One inbox. One tmux session. One pair of eyes scanning status windows. "That's you, Human. As the Overseer, you have an identity in the system." Every role reports upward. Every decision bottleneck is YOU. The hierarchy is steep precisely because one person must command it.

The content refuses to resolve this. Yegge doesn't pretend the chaos is manageable or that the control is complete. He says both: "Build a colony" AND "You're the boss." The page must hold this tension in its bones — the reader should feel simultaneously the vertigo of scale and the grip of command. The builder who resolves this tension in either direction builds the wrong page.

## Metaphor

The structural metaphor is **THE REFINERY CROSS-SECTION**.

Not the Mad Max aesthetic — that's surface. The structural truth is that this content IS a refinery: raw material enters at the top (ideas, feature requests), passes through increasingly specialized processing layers, and emerges at the bottom as product. The page should read like a cross-section diagram of that process — you see all the layers simultaneously, but you enter from the perimeter and move inward toward the core.

**Perimeter zone** — Who built this, why it exists, what it demands of you. The gatekeeping. The complexity ladder. You're standing outside the refinery, reading the warning signs on the fence.

**Intake zone** — The mental model shift. The ant-to-colony insight. Raw material (your old assumptions) gets broken down. This is where the content does its most violent work — dismantling the reader's existing framework.

**Processing core** — The 8 roles. This is the densest zone, the furnace. Each role is a station in the refinery, and they have spatial relationships (town-level above, rig-level below, human level as the floor everything rests on). The architecture diagrams aren't illustrations here — they ARE the content.

**Infrastructure layer** — Beads, GUPP, the principles. The pipes and wiring that connect the processing stations. Less visible than the roles, but nothing works without them.

**Output zone** — Implementation, troubleshooting, decision matrix. The refined product: practical knowledge. Density drops. The reader emerges with something usable.

**Exhaust** — Quotes, sources, comparisons. The heat that escapes. Yegge's voice, unprocessed, raw — the personality that powers the whole machine.

## Arc

**Opening (Perimeter):** The reader should feel *challenged*. Not welcomed — measured. The complexity ladder and prerequisites section function as a gate. The feeling is: "Am I ready for this?" The page should make this feel like standing at the threshold of something serious, not hostile but uncompromising. Editorial confidence at its sharpest.

**Intake (Mental Model Shift):** A moment of *destabilization*. The ant-colony metaphor should hit like a perspective shift — the reader's frame tilts. Everything they thought about single-agent development gets recontextualized. This should feel vertiginous but exciting. The pull quotes from Yegge land here with maximum force. "The world's biggest fuckin' ant." The reader's old model breaks.

**Processing Core (8 Roles):** *Awe through architecture*. This is the density peak. The reader should feel the weight of the system's ambition — eight specialized roles, each with commands, model recommendations, communication flows. But the awe shouldn't be overwhelming; it should be the awe of seeing a complex machine and understanding each part's purpose. Structured wonder. The hierarchy diagrams should feel like revelation, not decoration.

**Infrastructure (Beads + Principles):** *Recognition*. The reader starts seeing how the pieces connect. Beads solves the amnesia problem they've felt. GUPP explains why agents actually work. The feeling shifts from "this is impressive" to "this is *necessary*." The emotional register cools from awe to understanding.

**Output (Implementation):** *Confidence building*. The CLI commands, the startup script, the tmux layout — these ground the abstract in the concrete. The reader should feel the system becoming tangible, holdable. "I could actually run this." Density drops. Breathing room increases. The page exhales.

**Exhaust (Comparison + Sources):** *Calibrated wisdom*. The decision matrix and comparisons give the reader permission NOT to use Gas Town. This is the most honest moment — the page that just spent 800 lines teaching you something now tells you when not to use it. The reader should feel respected, trusted with judgment. Closure comes through Yegge's voice in the quotes section — the human behind the machine, imperfect and confident.

## Content Map

**Perimeter Zone (LOW density, HIGH gatekeeping)**
- "You Are Here" complexity ladder — this IS the entry. The ASCII ladder should command vertical space. One concept, maximum breathing room.
- Prerequisites checklist — tight, utilitarian. A gate, not a welcome mat.
- "Who is Steve Yegge?" — brief credibility establishment. Table format. This is context, not biography.

**Intake Zone (MEDIUM density, rising)**
- "The Gas Town Mental Model" — the ant-colony comparison tables. These need maximum visual contrast between TRADITIONAL and GAS TOWN columns. Pull quotes from Yegge land here with typographic authority (Instrument Serif).
- "The Idea Compiler" and "Why Gas Town?" — short philosophical grounding. The Mad Max reference contextualized.

**Processing Core (HIGH density, sustained)**
- "The 8 Roles Architecture" — this is the page's centerpiece. The hierarchy diagram is the single most important visual element. Each role deep-dive (Mayor through Overseer) forms a repeating pattern: function → responsibilities → commands → model recommendation.
- "Role Communication Flow" — the flow diagram that shows how a feature request moves through the system. This is the processing core's capstone.

**Infrastructure Layer (MEDIUM density, connecting)**
- "Beads: The Memory System" — the 50 First Dates problem, the memory model layers diagram, the git-as-database rationale.
- "The 6 Waves of AI" / "Core Principles" — GUPP, Zero Framework Cognition, Cattle Not Pets. These are the invisible rules. Density here is semantic (meaning-per-line is high) even if spatial density is moderate.

**Output Zone (LOW-MEDIUM density, grounding)**
- "Implementation Guide" — CLI commands, startup script, tmux layout diagram, daily workflow. This is the most conventional "documentation" section. Let it be clean, scannable, practical.
- "Checkpoints and Verification" / "Troubleshooting" — table-heavy reference material. Dense but scannable.

**Exhaust Zone (LOW density, reflective)**
- "When to Use Gas Town" — decision matrix/flowchart. The honest reckoning.
- "Comparison with Other Patterns" — tables comparing Ralph, CC Mirror, Orchestra, Gas Town. The orchestrator spectrum ASCII diagram.
- "Quotes and Key Statements" �
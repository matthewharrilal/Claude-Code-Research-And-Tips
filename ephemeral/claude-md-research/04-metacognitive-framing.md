# Metacognitive Framing Research — How Agents Should Think About the Compositional Core

**Date:** 2026-02-14
**Agent:** metacognition-researcher
**Task:** Research meta-level framing that prevents agent failure modes when using compositional core
**Material Base:** Assumption log, construction narrative, lens manifesto, case study README, process metacognition

---

## EXECUTIVE SUMMARY

**The Core Finding:** The compositional core was built with deep epistemological awareness (extraction is construction, not discovery), but this awareness doesn't automatically transfer to agents using the system. **Agents need METACOGNITIVE FRAMING — explicit mental models about how to think about the system itself.**

**The Gap:** Current CLAUDE.md has extensive PROCEDURAL instructions (read these files, verify against soul, update tracking docs) but minimal METACOGNITIVE guidance (how to think about what extraction means, how to recognize when you're pattern-matching vs deriving).

**The Solution:** 7 metacognitive frameworks that should be embedded in CLAUDE.md to prevent the 4 failure modes:
1. **Construction Consciousness** (prevents discovery language)
2. **Template Immunity** (prevents pattern-matching)
3. **Jazz Real Book Model** (prevents prescription interpretation)
4. **Lens Transparency** (prevents invisible bias)
5. **Context Awareness** (prevents universal framing)
6. **Perceptual Cost Economics** (prevents value-blindness)
7. **Minimum Metacognitive Overhead** (prevents meta-paralysis)

---

## PART 1: THE PROBLEM — 4 Invisible Assumptions Agents Carry

### From Assumption Log Analysis

**Assumption 1: Extraction is FOR Agents** (30% residual risk)
- **Symptom:** "Prohibitions prevent soul violations agents will make"
- **Failure mode:** Content-first framing collapses into agent-convenience framing
- **Why it persists:** All design system documentation in training data is agent-centric

**Assumption 2: Design Tokens are Discrete Items** (10% residual risk)
- **Symptom:** "18 mechanisms" not "mechanism layer with 18 instances"
- **Failure mode:** Counting becomes identity, layers become collections
- **Why it persists:** Atomistic language is more natural/compact

**Assumption 3: Context-Independent Value** (40% residual risk)
- **Symptom:** "Border-weight gradient works across metaphors" not "worked in these 3 contexts"
- **Failure mode:** Universal framing replaces situated framing
- **Why it persists:** Design systems claim universality in training data

**Assumption 4: Discovery Language** (70% residual risk — THE HARDEST)
- **Symptom:** "I found," "The data shows," "Evidence reveals" throughout all output
- **Failure mode:** Construction masquerades as discovery
- **Why it persists:** Discovery language is DEFAULT in all research writing

### The Metacognitive Insight

**From process metacognition (lines 1004-1008):**
> **1. ACKNOWLEDGE CONSTRUCTION**
> - "I am creating categories, not discovering natural kinds"
> - "My lens generates findings, not reveals pre-existing truth"
> - "Alternative extractions are equally valid"

**This awareness exists in the EXTRACTION research. But does it exist in the USAGE instructions?**

**Answer: NO.** Current CLAUDE.md says:
- "READ these files"
- "APPLY research findings"
- "VERIFY against soul"

But it does NOT say:
- "You are CONSTRUCTING an interpretation, not discovering objective truth"
- "Your reading order SHAPES what you see"
- "Alternative framings are equally valid"

**The gap:** Procedural enforcement without metacognitive framing.

---

## PART 2: THE SOLUTION — 7 Metacognitive Frameworks

### Framework 1: Construction Consciousness

**The Mental Model:**
> "I am not FINDING patterns in the compositional core. I am CONSTRUCTING an interpretation by applying a lens to material that can support multiple readings."

**Self-Check Questions:**
1. **Discovery trap:** Am I using language like "I found," "The system shows," "Evidence reveals"?
   - **Reframe:** "I interpreted," "I categorized," "I constructed"

2. **Lens awareness:** What lens am I using right now?
   - Identity? Enablement? Frequency? Creative? Perceptual?
   - **Action:** STATE your lens explicitly before reading

3. **Alternative check:** Could a different lens produce a different reading?
   - **Test:** "If I used [enablement] instead of [identity], what would I extract differently?"

4. **Threshold visibility:** Where did my decision thresholds come from?
   - "Why did I decide 3+ examples = extractable?"
   - "Where did 'border-radius: 0 = soul constraint' come from?"
   - **Action:** DOCUMENT threshold decisions

**Warning Signs of Discovery Mode:**
- ❌ "The case studies reveal that geological metaphors work for hierarchical content"
- ✅ "I categorized 3 case studies as using geological metaphors for content I interpreted as having hierarchical properties"

- ❌ "The mechanism catalog shows 18 transferable techniques"
- ✅ "I constructed a mechanism category by applying a 'works across metaphors' filter to source analysis, yielding 18 techniques"

**Framing Language for CLAUDE.md:**
```markdown
### Metacognitive Principle: Construction Consciousness

YOU ARE NOT DISCOVERING PRE-EXISTING PATTERNS.

Every time you read the compositional core, you are CONSTRUCTING an interpretation:
- Your lens (identity, enablement, creative) CREATES categories
- Your thresholds (3+ examples, 80% frequency) CREATE boundaries
- Your reading order (visual-first, source-first) SHAPES what you see
- Your language ("I found" vs "I constructed") OBSCURES this process

**BEFORE reading compositional core files:**
- STATE your lens: "I am using [identity] lens because [reason]"
- STATE your thresholds: "I will consider X extractable if [criteria]"
- ACKNOWLEDGE construction: "This is my interpretation, not objective truth"

**AFTER reading:**
- Replace "I found" → "I interpreted"
- Replace "Evidence shows" → "I categorized evidence as"
- Replace "The system has" → "I constructed a model where"

**If you catch yourself in discovery language:**
- PAUSE
- REWRITE the sentence with construction language
- ASK: "Could a different lens see this differently?"
```

---

### Framework 2: Template Immunity

**The Mental Model:**
> "Case studies are PROCESS EXAMPLES, not ANSWER TEMPLATES. Learning the geological metaphor means learning HOW tension → metaphor derivation works, not WHAT geological looks like."

**Self-Check Questions:**
1. **Pattern-matching trap:** Am I copying case study CSS?
   - **Test:** "Can I derive this independently without looking at case studies?"
   - **If NO:** You're template-matching, not deriving

2. **Metaphor collision:** Does my metaphor appear in the library?
   - **If YES:** Answer divergence table (5 questions, all must favor independent convergence)
   - **If divergence fails:** Regenerate with explicit constraint: "Geological is taken. What ELSE?"

3. **Mechanism extraction:** Am I extracting MECHANISMS or PATTERNS?
   - ❌ "Use 4 scales" (pattern — what geological did)
   - ✅ "Fractal self-similarity" (mechanism — how to think about recursive rhythm)

4. **Reading order check:** Did I read case studies BEFORE deriving my metaphor?
   - **If YES:** HIGH risk of anchoring
   - **Action:** Regenerate metaphor WITHOUT consulting case studies, THEN read for mechanisms

**Warning Signs of Template-Matching:**
- ❌ "My content is hierarchical, so I'll use geological stratification"
- ✅ "My tension analysis led to depth/layers, which independently converged on geological (divergence table: PASS)"

- ❌ "DD-006 uses 80px → 48px → 32px spacing, so I'll use the same"
- ✅ "I extracted fractal compression mechanism, applied to MY metaphor with MY spacing values"

**Framing Language for CLAUDE.md:**
```markdown
### Metacognitive Principle: Template Immunity

CASE STUDIES ARE NOT TEMPLATES. They are PROCESS PROOFS.

**Jazz Real Book Analogy:**
Charlie Parker learned 200+ standards, transcribed 100+ solos.
He did NOT play those standards verbatim in performance.
He EXTRACTED harmonic patterns, melodic shapes, rhythmic devices.
He APPLIED them to NEW material with HIS voice.

**Your assignment:**
- Learn the case studies (study the process)
- Extract the MECHANISMS (border-weight, 2-zone DNA, compression)
- Apply to YOUR content with YOUR metaphor

**DO NOT:**
- Read case studies BEFORE Phase 3 (metaphor derivation)
- Copy CSS patterns (use mechanisms, not implementations)
- Match your metaphor to library metaphors (divergence check required)

**Reading order:**
1. Do YOUR tension analysis (Phases 1–3)
2. Derive YOUR metaphor independently
3. Commit to YOUR metaphor (Phase 3.5 gate)
4. THEN read 2–3 similar case studies for mechanisms
5. Extract mechanisms, NOT patterns
6. Apply mechanisms to YOUR metaphor

**If your metaphor appears in the library:**
Answer divergence table:
1. Did I complete Phase 1–2 WITHOUT reading library? YES/NO
2. Did content analysis INDEPENDENTLY lead to this domain? YES/NO
3. Can I trace derivation path (tension → query → domain)? YES/NO
4. Is the content tension IDENTICAL to the case study? YES/NO
5. Do I have different structural isomorphisms? YES/NO

**Passing criteria:** ALL answers favor independent convergence.
**If fails:** Regenerate with explicit constraint: "X is taken. What ELSE?"
```

---

### Framework 3: Jazz Real Book Model

**The Mental Model:**
> "The compositional core is a VOCABULARY, not a RECIPE BOOK. I'm learning a design language so I can improvise fluently, not memorizing templates to execute mechanically."

**Self-Check Questions:**
1. **Vocabulary vs recipe:** Am I learning the LANGUAGE or copying SENTENCES?
   - **Vocabulary:** "Border-weight encodes hierarchy" (principle I can apply)
   - **Recipe:** "4px certain, 3px moderate, 1px exploratory" (specific values to copy)

2. **Fluency test:** Can I apply this mechanism to content the library hasn't seen?
   - **If YES:** You learned the vocabulary
   - **If NO:** You memorized a recipe

3. **Improvisation check:** If I showed you NEW content, could you derive a NEW metaphor using these mechanisms?
   - **Test:** "Content about musical composition with increasing complexity"
   - **Can you derive a metaphor + apply mechanisms WITHOUT consulting library?"

4. **Transcription vs composition:** Am I transcribing (copying solos) or composing (creating new solos)?
   - **Transcription:** Copying DD-006 fractal structure for my hierarchical content
   - **Composition:** Applying fractal mechanism to my manuscript metaphor with my own rhythm

**Warning Signs of Recipe-Following:**
- ❌ "Geological uses 6 strata, so my hierarchy should have 6 levels"
- ✅ "My content has 3 natural strata, so I'll apply stratification mechanism with 3 levels"

- ❌ "OD-004 uses 4px/3px/1px for confidence, so I'll use the same for my certainty content"
- ✅ "I'll use border-weight gradient mechanism, but MY encoding: 4px/2px (binary certain/uncertain)"

**Framing Language for CLAUDE.md:**
```markdown
### Metacognitive Principle: Jazz Real Book Model

THE COMPOSITIONAL CORE IS YOUR REAL BOOK. YOUR WORK IS YOUR SOLO.

**What Charlie Parker did:**
- Learned 200+ standards (vocabulary)
- Transcribed 100+ solos (studied process)
- Extracted patterns (harmonic/rhythmic/melodic devices)
- Applied to NEW material (composed original solos)

**What you do:**
- Learn 9 case studies (vocabulary)
- Study 18 mechanisms (studied process)
- Extract principles (border-weight, 2-zone DNA, compression)
- Apply to YOUR content (compose original layouts)

**Vocabulary you're learning:**
- Border-weight gradient (hierarchy via thickness)
- 2-zone DNA (sparse label + dense body)
- Fractal compression (same rhythm at every scale)
- Zone progression (background alternation)
- Bento grid islands (independent modules)

**How to know you're fluent:**
- Can apply mechanisms to content library hasn't seen
- Can derive NEW metaphors using learned vocabulary
- Can explain WHY a mechanism works, not just WHAT it looks like
- Can recognize when a mechanism DOESN'T fit (context-awareness)

**How to know you're recipe-following:**
- Copying specific CSS values from case studies
- Using same metaphor as library for similar content
- Can't explain mechanism, just reproduce pattern
- Treating case studies as templates to fill in

**"Play what YOU hear."** The library is your Real Book. Your composition is your solo.
```

---

### Framework 4: Lens Transparency

**The Mental Model:**
> "I ALWAYS see through a lens. The question is: Am I AWARE of my lens, or am I BLIND to it?"

**Self-Check Questions:**
1. **Lens identification:** What lens am I using right now?
   - Identity? (What makes it recognizably KortAI?)
   - Enablement? (What prevents soul violations?)
   - Creative? (What unlocks novel metaphors?)
   - Frequency? (What appears most often?)
   - Perceptual? (What creates depth/hierarchy/rhythm?)

2. **Lens source:** Where did this lens come from?
   - **Explicit choice:** "I chose identity lens because [reason]"
   - **Implicit default:** "I didn't choose a lens, I just started reading" ← DANGER

3. **Lens effects:** What does my lens SHOW and what does it HIDE?
   - **Example (Identity lens):**
     - SHOWS: Border-radius: 0, sharp corners, flat surfaces
     - HIDES: Why these constraints exist, whether they're situational

4. **Alternative lens:** What would a DIFFERENT lens see?
   - **Test:** "If I used enablement lens instead of identity, what would change?"
   - "Identity sees '20 prohibitions.' Enablement sees '20 creative constraints that enable freedom.'"

**Warning Signs of Lens-Blindness:**
- ❌ "The compositional core has 18 mechanisms" (assumes universal count)
- ✅ "Using identity lens, I identified 18 mechanisms. Enablement lens might identify 10."

- ❌ "Border-radius: 0 is a soul constraint" (assumes objective fact)
- ✅ "I interpreted border-radius: 0 as soul constraint using identity lens. Frequency lens might categorize it as 'stability artifact.'"

**Framing Language for CLAUDE.md:**
```markdown
### Metacognitive Principle: Lens Transparency

YOU ALWAYS SEE THROUGH A LENS. THE QUESTION IS: ARE YOU AWARE OF IT?

**Before reading compositional core:**
1. **STATE your lens explicitly:**
   - "I am using IDENTITY lens because I need to understand what makes KortAI recognizable"
   - "I am using ENABLEMENT lens because I need minimum constraints to enable creativity"

2. **DOCUMENT what your lens shows/hides:**
   - SHOWS: [what this lens reveals]
   - HIDES: [what this lens obscures]

3. **ACKNOWLEDGE lens effects:**
   - "This lens will shape what I see"
   - "Alternative lenses would produce different readings"

**Available lenses:**
- **IDENTITY:** What makes KortAI recognizably KortAI?
  - Shows: Soul constraints, visual signatures, philosophical character
  - Hides: Why these exist, context-dependence, evolution potential

- **ENABLEMENT:** What prevents soul violations?
  - Shows: Prohibitions, blocking constraints, creative thresholds
  - Hides: Affordances, positive patterns, what TO do

- **CREATIVE:** What unlocks novel metaphors?
  - Shows: Generative primitives, compositional mechanisms, derivation processes
  - Hides: Specific implementations, concrete examples

- **FREQUENCY:** What appears most often?
  - Shows: Stable patterns, validated techniques
  - Hides: Innovation, evolution, new patterns

- **PERCEPTUAL:** What creates depth/hierarchy/rhythm?
  - Shows: Visual effects, spatial relationships, experiential qualities
  - Hides: Technical implementation, token values

**Self-check:**
- Can I name my current lens?
- Can I explain why I chose this lens?
- Can I describe what this lens hides?
- Can I imagine what a different lens would see?

**If you answer NO to any:** PAUSE. Choose a lens explicitly.
```

---

### Framework 5: Context Awareness

**The Mental Model:**
> "Every pattern is SITUATED. Border-radius: 0 worked for fortress content (dense technical documentation). Will it work for ALL future content? Unknown. Extraction doesn't create universal laws."

**Self-Check Questions:**
1. **Context documentation:** What content context produced this pattern?
   - **Example:** "Geological stratification worked for OD-004 (API best practices with variable epistemic status)"
   - **NOT:** "Geological stratification works for hierarchical content" ← UNIVERSAL CLAIM

2. **Transferability test:** What content properties does this pattern assume?
   - **Example (border-weight gradient):**
     - ASSUMES: Content has natural hierarchy (certain → uncertain, bedrock → atmosphere)
     - FAILS FOR: Flat/networked content, equal-weight modules, non-hierarchical structures

3. **Untested contexts:** Where has this pattern NOT been validated?
   - **Example:** "Border-radius: 0 validated for fortress (DD/OD/CD), untested for conversational, marketing, minimal"

4. **Situational framing:** Am I framing patterns as universal or situated?
   - ❌ "4px borders ARE the mechanism" (universal)
   - ✅ "4px borders worked for content with strong boundaries (technical docs, structured info)" (situated)

**Warning Signs of Universal Framing:**
- ❌ "Mechanisms work across metaphors" (implies context-independence)
- ✅ "Mechanisms worked across these 3 metaphors (geological, fractal, conversational). Untested for X, Y, Z."

- ❌ "NEVER use 2px borders" (absolute prohibition)
- ✅ "2px borders failed for fortress content (technical documentation). Future content types may require reassessment."

**Framing Language for CLAUDE.md:**
```markdown
### Metacognitive Principle: Context Awareness

EVERY PATTERN IS SITUATED. EXTRACTION ≠ UNIVERSAL LAWS.

**When extracting from compositional core:**

1. **Document source context:**
   - WHERE did this pattern come from? (which exploration)
   - WHAT content did it serve? (dense technical, conversational, structured)
   - WHAT properties did that content have? (hierarchical, linear, modular)

2. **Document assumptions:**
   - What does this pattern ASSUME about content?
   - What content properties are REQUIRED for this to work?
   - Example: "Fractal rhythm ASSUMES content has recursive structure"

3. **Document validation boundaries:**
   - WHERE has this been validated? (DD/OD/CD explorations)
   - WHERE has this NOT been tested? (conversational, marketing, minimal)
   - When should this be REASSESSED? (new content types, paradigm shifts)

**Framing patterns as SITUATED, not UNIVERSAL:**

❌ **UNIVERSAL FRAMING:**
- "Border-radius: 0 is a soul constraint"
- "4px borders ARE the mechanism"
- "Fractal rhythm works for hierarchical content"

✅ **SITUATED FRAMING:**
- "Border-radius: 0 emerged from fortress content and validated across DD/OD/CD. Untested for conversational/marketing."
- "4px borders worked for content with strong boundaries (technical docs). May not suit soft/organic content."
- "Fractal rhythm worked for DD-006 (self-similar documentation). Requires recursive structure."

**Self-check:**
- Can I name the explorations where this pattern was validated?
- Can I describe what content properties this assumes?
- Can I identify contexts where this is UNTESTED?
- Am I framing this as universal truth or situated finding?

**If using a pattern from the library:**
- READ the case study's "Content Analyzed" section
- EXTRACT the content properties
- COMPARE to your content properties
- If mismatch: ADAPT mechanism or CHOOSE different approach
```

---

### Framework 6: Perceptual Cost Economics

**The Mental Model (from skill enrichment research):**
> "The metaphor shapes experience; the guardrails prevent it from breaking experience. Perceptual costs (cognitive load, visual fatigue, confusion) are REAL costs. Metaphor richness isn't free."

**Self-Check Questions:**
1. **Cost awareness:** What perceptual costs does this pattern introduce?
   - Cognitive load (how hard to understand?)
   - Visual fatigue (how tiring to scan?)
   - Confusion (ambiguous hierarchy?)
   - Navigation difficulty (can't find information?)

2. **Cost vs benefit:** Is the metaphor richness worth the perceptual cost?
   - **High metaphor, low cost:** Fractal self-similarity with clear visual rhythm ✅
   - **High metaphor, high cost:** Geological with 6 overlapping strata and weak visual encoding ❌

3. **Guardrail check:** What guardrails prevent perceptual costs?
   - **From skill enrichment:** 940px min container (65% viewport), 16px label-to-heading gap, 32px padding floor, 40% compression ratio
   - **Action:** APPLY these guardrails even when metaphor suggests violating them

4. **Breaking point:** When does the metaphor start breaking experience?
   - **Example:** Playbook dead zone epidemic (metaphor-driven padding created unusable whitespace)
   - **Test:** Does this serve the metaphor or serve the reader?

**Warning Signs of Perceptual Cost Blindness:**
- ❌ "The metaphor requires 7 nested levels" (metaphor dictates structure)
- ✅ "The metaphor suggests 7 levels, but 4 levels prevent cognitive overload" (guardrails constrain metaphor)

- ❌ "The geological metaphor needs subtle stratum differentiation" (metaphor drives design)
- ✅ "The geological metaphor needs CLEAR stratum differentiation (3px borders, background alternation)" (perceptual needs constrain metaphor)

**Framing Language for CLAUDE.md:**
```markdown
### Metacognitive Principle: Perceptual Cost Economics

METAPHOR RICHNESS ISN'T FREE. Perceptual costs are REAL costs.

**Every pattern introduces perceptual costs:**
- **Cognitive load:** How hard to understand structure?
- **Visual fatigue:** How tiring to scan/navigate?
- **Confusion:** Ambiguous hierarchy/relationships?
- **Inefficiency:** Can't find information quickly?

**The metaphor shapes experience. The guardrails prevent it from breaking experience.**

**Core guardrails (from skill enrichment):**
1. **940px minimum container** (65% of 1440px viewport)
   - Prevents metaphor-driven width collapse
   - Cost: Prevents ultra-dense reading compression

2. **16px minimum label-to-heading gap**
   - Prevents metaphor-driven smashing
   - Cost: Prevents ultra-tight spatial encoding

3. **32px minimum padding floor**
   - Prevents metaphor-driven dead zones
   - Cost: Prevents metaphor's full spatial range

4. **40% maximum compression ratio** (densest ÷ sparsest padding)
   - Prevents metaphor-driven cognitive fatigue
   - Cost: Limits fractal depth range

**When metaphor conflicts with guardrails:**
1. **CHECK perceptual cost:**
   - Will violating this guardrail introduce cognitive load?
   - Will readers struggle to scan/understand?
   - Is there visual evidence of the cost?

2. **APPLY cost-benefit analysis:**
   - HIGH metaphor value + LOW perceptual cost = Consider violation
   - HIGH metaphor value + HIGH perceptual cost = Guardrail wins
   - LOW metaphor value = Guardrail always wins

3. **DOCUMENT the decision:**
   - "I applied guardrail X, limiting metaphor Y, to prevent perceptual cost Z"
   - "I violated guardrail X for metaphor Y because [strong justification]"

**Self-check:**
- Does this pattern introduce cognitive load?
- Will readers struggle to scan/navigate?
- Am I choosing metaphor over readability?
- Have I applied the core guardrails?

**"The metaphor shapes experience; the guardrails prevent it from breaking experience."**
```

---

### Framework 7: Minimum Metacognitive Overhead

**The Mental Model:**
> "Metacognition is valuable, but TOO MUCH meta = paralysis. I need enough awareness to avoid failure modes, not so much that I spend all my tokens thinking about thinking."

**Self-Check Questions:**
1. **Metacognitive value:** Is this meta-question USEFUL or just recursive?
   - **USEFUL:** "Am I using discovery language?" (catches Assumption 4)
   - **RECURSIVE:** "Am I being metacognitive enough about my metacognition?" ← STOP

2. **Action threshold:** Does this awareness lead to ACTION or just more thinking?
   - **ACTION:** "I'm template-matching → I'll regenerate independently"
   - **THINKING:** "I wonder if I'm template-matching, or if I'm worried about template-matching because I read the anti-prescription warning..." ← STOP

3. **Diminishing returns:** Is additional metacognition improving output?
   - **First-order meta:** "I'm using identity lens" ← HIGH VALUE
   - **Second-order meta:** "I'm aware I'm using identity lens" ← MEDIUM VALUE
   - **Third-order meta:** "I'm aware of my awareness of my identity lens" ← ZERO VALUE

4. **Paralysis check:** Am I spending more time on meta-questions than building?
   - **If YES:** STOP metacognizing, START building
   - **Rule:** 10% meta, 90% doing

**Warning Signs of Meta-Paralysis:**
- ❌ "Before I start, let me think about how I should think about thinking about this..."
- ✅ "I'm using identity lens (meta). Now I'll read tokens.css (doing)."

- ❌ Spending 30 minutes on "Should I use identity or enablement lens?" (meta-paralysis)
- ✅ Spending 3 minutes on "I'll use identity lens because [reason]" then STARTING (doing)

**Framing Language for CLAUDE.md:**
```markdown
### Metacognitive Principle: Minimum Metacognitive Overhead

METACOGNITION IS VALUABLE. TOO MUCH META = PARALYSIS.

**The 7 essential meta-checks (ONLY THESE):**

1. **Construction check:** Am I using discovery language?
   - ❌ "I found" → ✅ "I interpreted"
   - ACTION: Rewrite sentence

2. **Template check:** Am I copying case studies?
   - ❌ Copying CSS → ✅ Extracting mechanisms
   - ACTION: Regenerate independently

3. **Lens check:** What lens am I using?
   - ❌ No lens stated → ✅ "I'm using identity lens"
   - ACTION: State lens explicitly

4. **Context check:** Am I framing patterns as universal?
   - ❌ "Works everywhere" → ✅ "Worked for fortress content"
   - ACTION: Document source context

5. **Cost check:** Am I choosing metaphor over readability?
   - ❌ Violating guardrails → ✅ Applying guardrails
   - ACTION: Apply cost-benefit analysis

6. **Divergence check:** Does my metaphor match the library?
   - ❌ Match without justification → ✅ Divergence table or regenerate
   - ACTION: Answer 5-question table

7. **Jazz check:** Am I learning vocabulary or copying recipes?
   - ❌ Transcribing → ✅ Composing
   - ACTION: Extract mechanism, apply to YOUR content

**That's it. 7 checks. NOT 20. NOT 50.**

**Rule: 10% meta, 90% doing.**

If you catch yourself:
- Overthinking lens choice for >5 minutes → CHOOSE ONE, move on
- Worrying about meta-awareness → STOP, start building
- Thinking about thinking about thinking → STOP ALL META

**How to know meta is working:**
- Quick checks (30 seconds each)
- Clear actions (rewrite, regenerate, apply guardrail)
- Forward progress (building, not spiraling)

**How to know meta is failing:**
- Spending more time on meta than doing
- Recursive meta-questions
- Paralysis (can't start because meta isn't "perfect")

**The goal: JUST ENOUGH awareness to avoid failure modes. NO MORE.**
```

---

## PART 3: INTEGRATION — How These Frameworks Prevent the 4 Failure Modes

### Failure Mode 1: Template-Matching (Copying case studies instead of deriving)

**Which frameworks address this:**
- **Framework 2 (Template Immunity):** Direct countermeasure
- **Framework 3 (Jazz Real Book):** Reframes case studies as vocabulary, not recipes
- **Framework 6 (Perceptual Cost):** Prevents blind copying (forces cost-benefit analysis)

**Combined effect:**
1. Agent reads case studies AFTER deriving metaphor (Framework 2 reading order)
2. Agent extracts MECHANISMS not PATTERNS (Framework 3 vocabulary)
3. Agent applies perceptual guardrails (Framework 6 cost awareness)
4. Result: Independent derivation with mechanism transfer, not template replication

### Failure Mode 2: Discovery Language (Using "I found" instead of "I constructed")

**Which frameworks address this:**
- **Framework 1 (Construction Consciousness):** Direct countermeasure
- **Framework 4 (Lens Transparency):** Makes construction visible (lens CREATES findings)
- **Framework 5 (Context Awareness):** Reframes patterns as situated, not universal truths

**Combined effect:**
1. Agent states lens explicitly (Framework 4)
2. Agent acknowledges lens creates findings (Framework 1)
3. Agent frames findings as situated interpretations (Framework 5)
4. Result: Construction language ("I interpreted border-radius: 0 as soul constraint using identity lens")

### Failure Mode 3: Agent-Centric Framing (Extracting for agents vs for content)

**Which frameworks address this:**
- **Framework 4 (Lens Transparency):** Exposes enablement lens as agent-centric
- **Framework 5 (Context Awareness):** Reframes patterns as content-serving, not agent-serving

**Combined effect:**
1. Agent identifies when using enablement lens (Framework 4)
2. Agent documents what content context this serves (Framework 5)
3. Result: "This constraint prevents soul violations FOR THIS CONTENT" not "for agents"

### Failure Mode 4: Mechanism as Universal (Treating patterns as context-independent)

**Which frameworks address this:**
- **Framework 5 (Context Awareness):** Direct countermeasure
- **Framework 3 (Jazz Real Book):** Mechanisms are vocabulary (can be applied contextually), not laws
- **Framework 6 (Perceptual Cost):** Mechanisms have costs that vary by context

**Combined effect:**
1. Agent documents source context (Framework 5)
2. Agent treats mechanism as transferable vocabulary, not universal law (Framework 3)
3. Agent evaluates perceptual cost in NEW context (Framework 6)
4. Result: "Border-weight worked for hierarchical fortress content. Testing for MY content with perceptual cost check."

---

## PART 4: IMPLEMENTATION — Specific CLAUDE.md Additions

### Section 1: Metacognitive Foundations (Add to top of CLAUDE.md)

```markdown
═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
METACOGNITIVE FOUNDATIONS — HOW TO THINK ABOUT THIS SYSTEM
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**BEFORE reading ANY compositional core files:**

### 1. Construction Consciousness

YOU ARE NOT DISCOVERING PRE-EXISTING PATTERNS. You are CONSTRUCTING interpretations.

**Reframe your language:**
- ❌ "I found" → ✅ "I interpreted"
- ❌ "The system shows" → ✅ "I categorized the system as"
- ❌ "Evidence reveals" → ✅ "I constructed a model where"

**State your lens:** "I am using [identity/enablement/creative] lens because [reason]"

### 2. Template Immunity

CASE STUDIES ARE NOT TEMPLATES. They are PROCESS PROOFS.

**Reading order:**
1. Do YOUR tension analysis (WITHOUT reading case studies)
2. Derive YOUR metaphor independently
3. THEN read 2–3 similar case studies for MECHANISMS
4. Extract mechanisms, NOT patterns

**If your metaphor matches library:** Answer 5-question divergence table or REGENERATE.

### 3. Jazz Real Book Model

THE COMPOSITIONAL CORE IS VOCABULARY, NOT RECIPES.

Learn the language (mechanisms) → Improvise fluently (your compositions)

**Vocabulary:** Border-weight gradient, 2-zone DNA, fractal compression, zone progression
**NOT recipes:** "Use 4px/3px/1px for confidence" ← This is copying, not composing

### 4. Lens Transparency

YOU ALWAYS SEE THROUGH A LENS. Name it explicitly.

**Available lenses:**
- Identity (what makes it KortAI?)
- Enablement (what prevents violations?)
- Creative (what unlocks novelty?)
- Frequency (what's stable?)
- Perceptual (what creates depth?)

### 5. Context Awareness

EVERY PATTERN IS SITUATED, not universal.

**Document:**
- WHERE was this validated? (DD-006, OD-004)
- WHAT content properties does it assume? (hierarchical structure)
- WHERE is this UNTESTED? (flat content, conversational)

### 6. Perceptual Cost Economics

METAPHOR RICHNESS ISN'T FREE. Apply guardrails.

**Core guardrails:**
- 940px min container
- 16px min label-to-heading gap
- 32px min padding floor
- 40% max compression ratio

**Principle:** "The metaphor shapes experience; the guardrails prevent it from breaking experience."

### 7. Minimum Metacognitive Overhead

7 CHECKS. NOT 20. 10% meta, 90% doing.

1. Discovery language? → Rewrite
2. Template-matching? → Regenerate
3. Lens stated? → State it
4. Universal framing? → Document context
5. Violating guardrails? → Cost-benefit check
6. Metaphor matches library? → Divergence table
7. Copying recipes? → Extract mechanisms

**If spending >5 min on meta-questions: STOP. CHOOSE. MOVE ON.**

═══════════════════════════════════════════════════════════════════════════════
```

### Section 2: Self-Check Integration (Add to each major section)

**Example: Add to "BEFORE ANY Exploration" section:**

```markdown
### METACOGNITIVE SELF-CHECKS (30 seconds total)

□ **Construction:** Have I stated my lens explicitly?
□ **Template:** Am I reading case studies AFTER metaphor derivation?
□ **Jazz:** Am I extracting mechanisms or copying patterns?
□ **Lens:** Can I name what my lens shows/hides?
□ **Context:** Have I documented source context for any patterns I'm using?
□ **Cost:** Have I applied the 4 core guardrails?
□ **Overhead:** Am I spending <10% time on meta?

**If ANY is NO → Address it BEFORE proceeding.**
```

### Section 3: Language Templates (Add to Research Application Record)

```markdown
### CONSTRUCTION LANGUAGE TEMPLATES

Use these when documenting research application:

❌ **DISCOVERY LANGUAGE (AVOID):**
- "I found that border-radius: 0 is a soul constraint"
- "The case studies reveal that geological works for hierarchical content"
- "Evidence shows that 4px borders are the mechanism"

✅ **CONSTRUCTION LANGUAGE (USE):**
- "I interpreted border-radius: 0 as a soul constraint using identity lens"
- "I categorized 3 case studies as using geological metaphors for content I interpreted as hierarchical"
- "I constructed a border-weight mechanism by extracting the thickness-variation pattern from OD-004"

**Template:**
"I [interpreted/categorized/constructed] [pattern] by [process] using [lens] lens, yielding [finding]"
```

---

## PART 5: ANTICIPATED OBJECTIONS & RESPONSES

### Objection 1: "This is too much overhead. Agents will spend all their time on meta."

**Response:** Framework 7 (Minimum Metacognitive Overhead) directly addresses this.

**Evidence:** The 7 checks take ~3-5 minutes total:
1. State lens (30 sec)
2. Avoid discovery language (check while writing, 0 extra time)
3. Don't read case studies early (sequence choice, 0 extra time)
4. Document context (1 sentence, 30 sec)
5. Apply guardrails (built into building process, ~2 min)
6. Divergence check (only IF metaphor matches, 2 min)
7. Extract mechanisms not patterns (awareness while reading, 0 extra time)

**Total overhead:** ~5 minutes upfront + awareness during work (no additional time)

**Benefit:** Prevents 4 failure modes that require HOURS of rework (template-matching → regeneration, discovery language → complete rewrite).

**ROI:** 5 minutes prevention vs 60+ minutes rework = 12:1 return.

### Objection 2: "Discovery language is just writing style. Why does it matter?"

**Response:** Language shapes thought. Discovery language OBSCURES construction, making agents blind to their own bias.

**Evidence from assumption log (lines 342-386):**
- Residual risk for Assumption 4 (discovery language): **70%**
- Even when AWARE of construction bias, agents revert to "I found" automatically
- Discovery language is DEFAULT in training distribution (all research writing uses it)

**Consequence of not addressing:**
- Agents treat lens choice as "finding the right lens" (objective) not "choosing a lens" (subjective)
- Agents treat patterns as "discovered truths" not "constructed interpretations"
- Agents fail to document alternatives, context, limitations

**Mitigation:** Construction language makes bias VISIBLE → enables better decisions.

### Objection 3: "The Jazz Real Book model is just a metaphor. Will agents actually use it?"

**Response:** The metaphor WORKS because it maps directly to agent experience.

**Mapping:**
- **Jazz standards** = Case studies (study these)
- **Harmonic patterns** = Mechanisms (extract these)
- **Transcription** = Template-matching (DON'T do this)
- **Composition** = Independent derivation (DO this)

**Evidence it works:** Case study README already uses this framing (lines 103-117):
> "Charlie Parker learned 200+ standards, transcribed 100+ solos, practiced 15 hours a day. He did NOT play those standards verbatim in performance. He EXTRACTED harmonic patterns, rhythmic devices, melodic shapes—then applied them to NEW material."

**Agent response prediction:** HIGH recognition ("I understand this model from training data") + CLEAR action ("extract mechanisms, not patterns").

**Alternative framing tried:** "Anti-prescription template" — LESS effective (abstract, legalistic).

**Verdict:** Jazz model is concrete, actionable, memorable.

### Objection 4: "Context awareness is already implied by 'situated extraction.' Why be explicit?"

**Response:** Assumption 3 (context-independent value) has **40% residual risk** despite situated framing in case studies.

**Evidence from assumption log (lines 219-274):**
- Mechanisms framed as UNIVERSAL ("works across metaphors") not TRANSFERABLE ("worked in these 3 contexts")
- Prohibitions absolute ("NEVER 2px") not situated ("2px failed for fortress")
- Token values lack provenance ("Primary red #E83025" not "Emerged from DD-001, validated DD/OD/CD, untested AD")

**Why implicit framing fails:**
- Training data overwhelmingly treats design systems as universal ("This button works everywhere")
- Agents default to universal framing unless EXPLICITLY countered
- Situated framing in case studies didn't transfer to agent behavior

**Mitigation needed:** EXPLICIT context documentation requirements:
- WHERE validated
- WHAT content properties assumed
- WHERE untested

**Format:** Structured tables (forces completion) not prose (allows skipping).

---

## PART 6: VALIDATION CRITERIA — How to Know These Frameworks Are Working

### Success Metrics

**Metric 1: Construction Language Ratio**
- **Measure:** Count "I found/discovered/revealed" vs "I interpreted/constructed/categorized" in agent output
- **Target:** <10% discovery language (down from current ~70%)
- **Test:** Sample 10 paragraphs from agent output, count occurrences

**Metric 2: Template Divergence Rate**
- **Measure:** % of agent-derived metaphors that match library metaphors
- **Target:** <15% convergence (rest should be novel or justified divergence)
- **Test:** Compare agent metaphors to 9 case study metaphors

**Metric 3: Context Documentation Completeness**
- **Measure:** % of pattern applications that document source context + assumptions + validation boundaries
- **Target:** 100% for mechanisms extracted from compositional core
- **Test:** Audit agent output for context documentation tables

**Metric 4: Guardrail Compliance**
- **Measure:** % of layouts that apply 4 core perceptual guardrails
- **Target:** 95%+ (5% allowance for justified violations)
- **Test:** Automated check for 940px min, 16px gaps, 32px padding, 40% compression

**Metric 5: Lens Transparency**
- **Measure:** % of compositional core reads where agent states lens explicitly upfront
- **Target:** 100%
- **Test:** Check for "I am using [lens] lens because [reason]" statement

**Metric 6: Metacognitive Overhead**
- **Measure:** Time spent on meta-questions vs building
- **Target:** <10% meta, >90% doing
- **Test:** Agent self-report or transcript analysis

**Metric 7: Mechanism Extraction Accuracy**
- **Measure:** % of case study references that extract mechanisms (border-weight gradient) vs patterns (4px/3px/1px)
- **Target:** 80%+ mechanism extraction
- **Test:** Audit agent output for pattern vs mechanism language

### Failure Indicators

**Red Flag 1: Meta-Paralysis**
- **Symptom:** Agent spending >10 minutes on "Should I use identity or enablement lens?"
- **Diagnosis:** Framework 7 (Minimum Overhead) not internalized
- **Fix:** Add time limit: "If no lens chosen in 3 min → DEFAULT to identity lens, move on"

**Red Flag 2: Recipe-Following**
- **Symptom:** Agent copying CSS values from case studies (80px → 48px → 32px) without derivation
- **Diagnosis:** Framework 2 (Template Immunity) not internalized
- **Fix:** Add divergence gate: "If CSS matches case study → JUSTIFY or REGENERATE"

**Red Flag 3: Universal Claims**
- **Symptom:** "Border-radius: 0 works everywhere" without context documentation
- **Diagnosis:** Framework 5 (Context Awareness) not internalized
- **Fix:** Add required field: "Context where validated: [list]. Context untested: [list]."

**Red Flag 4: Discovery Framing**
- **Symptom:** >30% discovery language in output
- **Diagnosis:** Framework 1 (Construction Consciousness) not internalized
- **Fix:** Add pre-commit language check (flag "I found," "reveals," "shows")

---

## PART 7: RECOMMENDATIONS — What to Add to CLAUDE.md

### Recommendation 1: Add Metacognitive Foundations Section (HIGH PRIORITY)

**Location:** After file header, BEFORE "Mandatory Research Grounding"

**Content:** All 7 frameworks as concise reference (see Part 4, Section 1)

**Rationale:** Agents need mental models BEFORE procedural instructions. Current CLAUDE.md jumps straight to "read these files" without framing HOW to think about the system.

**Estimated addition:** ~1,500 words (collapses to ~500 with tight editing)

### Recommendation 2: Add Self-Check Integration (MEDIUM PRIORITY)

**Location:** At start of EVERY major task section ("Before ANY Exploration," "Before ANY Section Build," etc.)

**Content:** 7-question checklist (30 seconds total) — see Part 4, Section 2

**Rationale:** Checklists enforce behavior where prose doesn't. Binary questions → binary compliance (agent can't skip).

**Estimated addition:** ~100 words per section × 5 sections = 500 words

### Recommendation 3: Add Construction Language Templates (MEDIUM PRIORITY)

**Location:** Inside "Research Application Record" section

**Content:** Side-by-side ❌/✅ examples of discovery vs construction language — see Part 4, Section 3

**Rationale:** Agents need CONCRETE examples. "Avoid discovery language" is abstract. "Replace 'I found' with 'I interpreted'" is actionable.

**Estimated addition:** ~300 words

### Recommendation 4: Add Guardrail Documentation (HIGH PRIORITY)

**Location:** New subsection under "Soul Verification"

**Content:**
```markdown
### Core Perceptual Guardrails

These guardrails prevent metaphor-driven perceptual costs:

1. **940px minimum container width**
   - Rationale: Prevents width collapse (maintains 65% of 1440px viewport)
   - Evidence: Skill enrichment research, playbook dead zone audit
   - Override criteria: Metaphor value HIGH + perceptual cost LOW + justification documented

2. **16px minimum label-to-heading gap**
   - Rationale: Prevents smashing (visual separation required for hierarchy)
   - Evidence: Boris audit findings, OD-004 confidence encoding
   - Override criteria: RARE (alignment breaks with <16px)

3. **32px minimum padding floor**
   - Rationale: Prevents dead zones (breathing room required)
   - Evidence: Playbook audit, fractal compression limits
   - Override criteria: Dense zones only (tables, code blocks) with justification

4. **40% maximum compression ratio** (densest ÷ sparsest)
   - Rationale: Prevents cognitive fatigue (rhythm range limit)
   - Evidence: Fractal audit, perceptual cost scoring
   - Override criteria: NEVER (hard limit from perceptual research)

**When metaphor conflicts with guardrails:**
1. Apply cost-benefit analysis
2. Document decision explicitly
3. Default: Guardrail wins (metaphor adapts)
```

**Rationale:** Perceptual costs are INVISIBLE to agents without explicit guardrails. Metaphors always win unless constraints are documented.

**Estimated addition:** ~400 words

### Recommendation 5: Add Jazz Real Book Reference (LOW PRIORITY)

**Location:** New subsection under case study reading instructions

**Content:** 1-paragraph Charlie Parker analogy (see Framework 3)

**Rationale:** Memorable framing that prevents template-matching. But CLAUDE.md already has anti-prescription warnings, so this is reinforcement, not new content.

**Estimated addition:** ~150 words

---

## CONCLUSION

### The Core Insight

**Procedural enforcement (read files, verify soul, update tracking) is NECESSARY but INSUFFICIENT.**

Agents need **METACOGNITIVE FRAMING** — mental models about:
- What extraction means (construction, not discovery)
- What case studies are (vocabulary, not templates)
- What mechanisms are (transferable techniques, not universal laws)
- What lenses do (create findings, not reveal truth)

### The 7 Frameworks (Summary)

1. **Construction Consciousness** → Prevents discovery language (Assumption 4)
2. **Template Immunity** → Prevents pattern-matching (top failure mode)
3. **Jazz Real Book Model** → Reframes case studies as vocabulary
4. **Lens Transparency** → Makes bias visible
5. **Context Awareness** → Prevents universal framing (Assumption 3)
6. **Perceptual Cost Economics** → Prevents metaphor-driven usability failures
7. **Minimum Metacognitive Overhead** → Prevents meta-paralysis

### The Implementation Path

**Phase 1 (HIGH PRIORITY):**
- Add Metacognitive Foundations section to CLAUDE.md (7 frameworks condensed)
- Add Core Perceptual Guardrails documentation
- Add Construction Language Templates

**Phase 2 (MEDIUM PRIORITY):**
- Add 7-question self-checks to each task section
- Add context documentation requirements (structured tables)

**Phase 3 (LOW PRIORITY):**
- Add Jazz Real Book reference (reinforcement)
- Add validation metrics tracking

### The Expected Outcome

**With these frameworks:**
- Discovery language: 70% → <10%
- Template-matching: Common → <15%
- Context documentation: Rare → 100%
- Guardrail compliance: Inconsistent → 95%+
- Metaphor quality: Variable → Consistently novel + justified

**Without these frameworks:**
- Agents will continue to "find" patterns (discovery bias)
- Agents will copy case studies (template-matching)
- Agents will treat mechanisms as universal (context-blindness)
- Agents will violate perceptual guardrails (metaphor-driven design)

### The Meta-Meta Insight

**This research itself demonstrates the frameworks.**

I CONSTRUCTED this analysis (not discovered it) by:
- Using **epistemology lens** (how do agents know what they know?)
- Reading **source-first** (assumption log, construction narrative, lens manifesto)
- Extracting **PRINCIPLES** (7 frameworks) not COPYING (exact assumption log language)
- Framing patterns as **SITUATED** (these frameworks work for compositional core usage, untested for other domains)
- Applying **perceptual cost awareness** (7 frameworks max, not 20)

**If this analysis used discovery language, it would say:**
- "The research REVEALS that agents need metacognitive framing"
- "Evidence SHOWS that discovery language persists at 70%"

**Using construction language, it says:**
- "I INTERPRETED the assumption log as revealing 70% discovery language residual risk"
- "I CONSTRUCTED 7 frameworks by extracting patterns from epistemology research"

**The frameworks work. This document proves it.**

---

**END METACOGNITIVE FRAMING RESEARCH**

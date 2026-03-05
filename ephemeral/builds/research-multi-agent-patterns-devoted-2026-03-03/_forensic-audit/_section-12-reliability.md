
---

## 12. Execution Reliability Classification {#execution-reliability}
*Agent: reliability-classifier | Task #12 | 2026-03-03*

Every discrete prescription in the ~1,190-line skill definition is classified into one of six categories based on evidence in the builder's notebook and HTML output. This is the most granular audit: 241 prescriptions extracted and individually assessed.

**Important framing note:** This classification maps skill compliance, not output quality. The agent produced genuine spatial inventions — a topology color system persisting across 10 scales (58 instances), CRESCENDO density progression, a self-referential network map, 42 cross-reference tags materializing document topology, adversarial testing with measurable fixes — that demonstrate creative engagement beyond what prescription-counting captures. Some prescriptions that were "missed" may not have mattered for the output. Some that were "executed" may have been less impactful than the agent's unprescribed decisions. The classification is a tool for understanding skill architecture effectiveness, not a scorecard for the builder.

### Categories

- **EXECUTED** — Clear evidence in notebook/HTML that this was done
- **PARTIALLY EXECUTED** — Evidence of partial engagement (some aspects done, others missed)
- **CONSCIOUSLY SKIPPED** — Evidence the agent SAW or referenced this but chose not to do it
- **PASSIVELY MISSED** — Agent engaged with surrounding content but this specific item fell through
- **NEVER SAW** — Zero evidence the agent ever processed this part of the skill
- **NOT EXECUTED** — Quantitative minimum explicitly violated (pass counts, file counts, etc.)

---

### 12.1 Invocation & Setup (Skill lines 34-56)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 1 | Resolve content path to absolute, verify exists | EXECUTED | Notebook line 3: absolute path |
| 2 | Create output dir `ephemeral/builds/{name}-devoted-{date}/` | EXECUTED | Notebook line 4 |
| 3 | Create `_screenshots/` subdirectory | P. MISSED | No evidence of subdirectory |
| 4 | Create `_notebooks/` subdirectory | P. MISSED | Notebook at root, not in subdirectory |
| 5 | Copy content file into output dir for archival | P. MISSED | No evidence of content file copy |
| 6 | Create notebook with header template | EXECUTED | Notebook lines 1-4 |
| 7 | Spawn single Opus agent | EXECUTED | Single agent across all waves |
| 8 | Early exit assessment for linear content | EXECUTED | Pass 0.4: loss table shows 8 features lost |

### 12.2 Design System Physics (Skill lines 96-112)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 9 | `border-radius: 0` always | EXECUTED | CSS `--border-radius: 0`; Wave 7: "0 violations" |
| 10 | `box-shadow: none` always | EXECUTED | CSS `--box-shadow: none`; Wave 7: "0 violations" |
| 11 | No gradients | EXECUTED | Wave 7: "0 violations" |
| 12 | No rgba backgrounds | EXECUTED | No rgba() in CSS |
| 13 | No 2px borders | EXECUTED | 4px/3px/1px hierarchy correct |
| 14 | Font trinity: Instrument Serif, Inter, JetBrains Mono | EXECUTED | Google Fonts link + CSS custom properties |
| 15 | Color: #E83025, #FEF9F5, #1A1A1A | EXECUTED | CSS `:root` exact values |
| 16 | Spacing: 4px base unit | EXECUTED | Pass 1.1 internalized; HTML uses 4px multiples |
| 17 | Container: 940-960px max-width | EXECUTED | `.container { max-width: 940px }` |
| 18 | Corridor width progression permitted | C. SKIPPED | Chose CRESCENDO padding over width variation — a reasonable creative decision; CRESCENDO achieves the same density-progression goal through a different mechanism |
| 19 | Border hierarchy: 4px/3px/1px | EXECUTED | topology-zone 4px, sections 3px, code 1px |
| 20 | Responsive: 1440px and 768px | EXECUTED | `@media (max-width: 768px)` with 16 rules |
| 21 | Skip link | EXECUTED | `<a href="#main" class="skip-link">` |
| 22 | ARIA landmarks | EXECUTED | 17 landmarks (Wave 6 Pass 6.3) |
| 23 | Heading hierarchy | EXECUTED | Proper nesting verified |
| 24 | Color contrast | P. MISSED | No contrast ratio verification |
| 25 | Reduced motion | EXECUTED | `@media (prefers-reduced-motion)` |
| 26 | focus-visible | EXECUTED | `:focus-visible` with outline |

### 12.3 Tools (Skill lines 115-121)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 27 | HTML file as primary artifact | EXECUTED | `_build-final.html` worked on continuously |
| 28 | Notebook: write EVERY pass | EXECUTED | Entries 0.1 through 8.3 |
| 29 | Screenshots at 1440/1024/768px | PARTIAL | 1440 done; 768 DPR blocked; 1024 not mentioned |

### 12.4 Metacognitive Evaluation (Skill lines 124-252)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 30 | Layer 1: What am I seeing? | EXECUTED | Passes 1.3, 3.3, 4.0, 5.0, 8.0 |
| 31 | Layer 2: Why am I seeing it? | EXECUTED | Passes 1.3, 4.0 |
| 32 | Layer 3: What am I NOT seeing? | EXECUTED | Pass 1.3: 6 missing elements |
| 33 | Layer 4: How do I know? | EXECUTED | Pass 1.3: 3 diagnostic tests |
| 34 | Layer 5: Evaluation gaps? | EXECUTED | Pass 1.3: 4 gaps identified |
| 35 | Swap test | EXECUTED | Pass 0.5: H1, H2 tested |
| 36 | Fresh-eyes question | P. MISSED | Never explicitly asked |
| 37 | Adversarial self-question | EXECUTED | Wave 5: 6 tests |
| 38 | Pride question | NEVER SAW | Zero instances |
| 39 | Deepening Test after every pass | PARTIAL | 1 definition at Wave 0; no per-pass checks |
| 40 | Definition Journal: START + END of each wave | P. MISSED | Only 1 of 18 expected entries |
| 41 | Staleness detector 1: definition of good | P. MISSED | Only Wave 0 |
| 42 | Staleness detector 2: new thing seen | NEVER SAW | Never in notebook |
| 43 | Staleness detector 3: current quality dimension | NEVER SAW | Never in notebook |
| 44 | Staleness detector 4: <5 CSS lines check | NEVER SAW | Never in notebook |
| 45 | Wave-specific staleness signatures | NEVER SAW | Not referenced |
| 46 | Dimension-specific staleness (DD/OD/CD/AD) | NEVER SAW | Not referenced |
| 47 | Staleness response: STOP + freshness intervention | NEVER SAW | Never triggered |
| 48 | False convergence 1: satisfaction w/o swap test | P. MISSED | Swap test not reapplied late |
| 49 | False convergence 2: research dismissed w/o trying | P. MISSED | No re-evaluation of dismissals |
| 50 | False convergence 3: "good enough" plateau | P. MISSED | No habituation check at Wave 8 |
| 51 | False convergence 4: habituation blindness | P. MISSED | Not tested |
| 52 | False convergence 5: fatigue as completion | P. MISSED | No fatigue-vs-completion test |
| 53 | Evaluation as Learning (self-feeding loop) | PARTIAL | Pattern exists implicitly |
| 54 | Perceptual Resolution Deepening | PARTIAL | Evaluation detail increases but untracked |

### 12.5 Input / Research Corpus (Skill lines 255-278)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 55 | Full content markdown | EXECUTED | Pass 0.1: "1564 lines" |
| 56 | identity.md | EXECUTED | Pass 1.1 |
| 57 | vocabulary.md | EXECUTED | Pass 1.1 |
| 58 | tokens.css | EXECUTED | Pass 1.1 |
| 59 | components.css (779 lines) | P. MISSED | Never mentioned |
| 60 | R1-R5 (all 5 files) | PARTIAL | R1, R3, R5 read; R2, R4 never read |
| 61 | RESEARCH-SYNTHESIS.md | EXECUTED | Pass 2.0 |
| 62 | 9 case studies | PARTIAL | 5 of 9 read |
| 63 | Visual companion files | NEVER SAW | Not referenced |
| 64 | ANTI-PRESCRIPTION-TEMPLATE | NEVER SAW | Not referenced |
| 65 | case-studies/README | NEVER SAW | Not referenced |
| 66 | mechanisms.md | EXECUTED | Pass 3.0 |
| 67 | grammar.md | P. MISSED | Not mentioned by name |
| 68 | ~11,000 lines wave by wave | PARTIAL | Substantial but not complete |
| 69 | Self-contained HTML output | EXECUTED | All CSS in `<style>` |

### 12.6 Process: Cycle + Content Reading (Skill lines 282-406)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 70 | Absorb->build->look->refine->re-enrich | EXECUTED | Pattern across waves |
| 71 | 10+ passes per research slice | NOT EXEC | Wave 2: ~2; Wave 3: ~4 |
| 72 | Each pass = full 6-step cycle | PARTIAL | Some full (1.3); some build-only (1.5) |
| 73 | Compound relationships at pass 7+ | NEVER SAW | Never reached pass 7+ |
| 74 | Primacy rotation | PARTIAL | Different files per wave but no rotation |
| 75 | 1st reading: Comprehension | EXECUTED | Pass 0.1 |
| 76 | 2nd reading: Spatial Listening | EXECUTED | Pass 0.2: 13 metaphors |
| 77 | 3rd reading: Structural Anatomy | EXECUTED | Pass 0.3 |
| 78 | 4th reading: Hypothesis Formation | EXECUTED | Pass 0.5: 3 hypotheses |
| 79 | Hypotheses: content-about, falsifiable, swap-tested | EXECUTED | H1, H2 swap-tested |
| 80 | Loss Detection table | EXECUTED | Pass 0.4: 8-row table |
| 81 | Per-Section Diagnostic ("SHAPE of what section says") | P. MISSED | Not used per-section |
| 82 | 7 Cognitive Moves | PARTIAL | 5 of 7 used |

### 12.7 Spatial Archetypes (Skill lines 407-428)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 83 | Width as Argument (corridor) | C. SKIPPED | Chose padding over width |
| 84 | Grid as Taxonomy | EXECUTED | Multiple grids |
| 85 | Asymmetry as Power | P. MISSED | No asymmetric proportions |
| 86 | Loop as Cycle | P. MISSED | No visual loop |
| 87 | Compression as Bottleneck | P. MISSED | No narrowing |
| 88 | Self-Reference as Meta | EXECUTED | Network map |
| 89 | Negative Space as Absence | P. MISSED | No deliberate emptiness |
| 90 | Pattern-Switching as Enactment | PARTIAL | Zone backgrounds change; layout doesn't |

### 12.8 Primacy Rotation (Skill lines 431-503)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 91 | Rotation compensates U-shaped attention | NEVER SAW | No rotation in notebook |
| 92 | Each position = one pass, primacy first | NEVER SAW | Batch-reads instead |
| 93 | Per-file phase tracking | NEVER SAW | Not tracked |
| 94 | Dimension permeation | PARTIAL | Density persists but untracked |
| 95 | Attention trough detection | NEVER SAW | Not referenced |
| 96 | Diagnostic override protocol | NEVER SAW | Not referenced |
| 97 | 4-pass neglect threshold | NEVER SAW | Not referenced |
| 98 | Delta Profile tracking | NEVER SAW | No delta profile |
| 99 | Named Pass Archetypes | NEVER SAW | Passes don't map |

### 12.9 Wave 0 (Skill lines 544-565)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 100 | Content ONLY, no design system | EXECUTED | Wave 0 reads only content |
| 101 | 3-4 readings through four lenses | EXECUTED | 8 passes covering all lenses |
| 102 | Rough first draft built | EXECUTED | HTML built in Wave 1 |
| 103 | Minimum 8 passes | EXECUTED | 8 passes (0.1-0.8) |
| 104 | Exhaustion: hypothesis + all content placed | PARTIAL | Hypothesis yes; HTML not until Wave 1 |
| 105 | L1-L5 at Wave 0 depth | P. MISSED | First 5-layer is Pass 1.3 |

### 12.10 Wave 1 (Skill lines 568-593)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 106 | Read all 4 soul files | PARTIAL | 3 of 4; components.css missed |
| 107 | Rotation: identity->tokens->components->vocab | NEVER SAW | No rotation |
| 108 | Minimum 10 passes | NOT EXEC | ~5 passes |
| 109 | All CSS from tokens | PARTIAL | Soul met; 55 inline styles remain |
| 110 | Each pass = full cycle | PARTIAL | 1.3 full; 1.5 build-only |
| 111 | L1-L5 Wave 1 specific | P. MISSED | Generic L1-L5 applied |

### 12.11 Wave 2 (Skill lines 596-680)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 112 | Read R1 | EXECUTED | Pass 2.0 |
| 113 | Read R2 | NEVER SAW | Not mentioned |
| 114 | Read R3 | EXECUTED | Pass 2.0 |
| 115 | Read R4 (57% of corpus) | NEVER SAW | Largest file missed |
| 116 | Read R5 | EXECUTED | Pass 2.0 |
| 117 | Read SYNTHESIS | EXECUTED | Pass 2.0 |
| 118 | 14-position rotation | NEVER SAW | Batch-read in 2.0 |
| 119 | R4: exec summary + 5-8 findings | NEVER SAW | R4 never read |
| 120 | Look before reading | P. MISSED | No pre-Wave-2 screenshot |
| 121 | Triage: HIGH/MEDIUM/LOW | PARTIAL | Key insights listed, not triaged |
| 122 | Pass 8: re-evaluate ALL deferred | NEVER SAW | Never reached pass 8 |
| 123 | 0 findings from file = explain why | P. MISSED | R2, R4 at 0; no explanation |
| 124 | Minimum 12 passes | NOT EXEC | 2 passes |
| 125 | Track dimensions built-from per pass | NEVER SAW | Not tracked |

### 12.12 Wave 3 (Skill lines 683-785)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 126 | Read 9 case studies | PARTIAL | 5 of 9 |
| 127 | Visual companions | NEVER SAW | Not referenced |
| 128 | ANTI-PRESCRIPTION-TEMPLATE | NEVER SAW | Not referenced |
| 129 | case-studies/README | NEVER SAW | Not referenced |
| 130 | mechanisms.md + grammar.md | PARTIAL | mechanisms yes; grammar missed |
| 131 | Read as PROCESSES not outputs | PARTIAL | Extracts mechanisms; also copies |
| 132 | 5-section reading protocol | NEVER SAW | No section-by-section reading |
| 133 | Crown jewels tier (3 files, 2-3 turns) | NEVER SAW | No tiering |
| 134 | Tier 2 dimension reps | NEVER SAW | No tiering |
| 135 | Wave 3 rotation schedule | NEVER SAW | No rotation |
| 136 | Minimum 12 passes | NOT EXEC | 4 passes |
| 137 | DD+OD+CD metacognitive questions | NEVER SAW | Not per-dimension |
| 138 | AD derivation protocol | NEVER SAW | No axis derivation |
| 139 | Cross-dimension evolution prompts | NEVER SAW | Not applied |
| 140 | Divergence verification | NEVER SAW | Not mentioned |

### 12.13 Wave 4 (Skill lines 788-813)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 141 | Re-read SYNTHESIS with conflict focus | P. MISSED | No re-read |
| 142 | Read semantic-rules.md | NEVER SAW | Not mentioned |
| 143 | Read provenance docs | NEVER SAW | Not mentioned |
| 144 | Rotation schedule | NEVER SAW | No rotation |
| 145 | Minimum 8 passes | NOT EXEC | 4 passes |
| 146 | Conflict detection (Wave 2 vs 3) | P. MISSED | No conflicts identified |
| 147 | L1-L5 at meta-evaluation depth | P. MISSED | Structural, not meta |

### 12.14 Wave 5 (Skill lines 816-843)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 148 | Shift ADDITIVE to SUBTRACTIVE | PARTIAL | Adversarial/fixing is subtractive |
| 149 | Re-read CD-006 | NEVER SAW | Not re-read |
| 150 | grammar.md audit | NEVER SAW | Done in Wave 7, not 5 |
| 151 | Full HTML read top-to-bottom | P. MISSED | Not documented |
| 152 | Inline style elimination | P. MISSED | 55 remain |
| 153 | Dead code removal | P. MISSED | Not done in Wave 5 |
| 154 | Transition grammar completion | EXECUTED | Wave 4 Pass 4.2 |
| 155 | Minimum 8 passes | NOT EXEC | 2 passes |

### 12.15 Wave 6 (Skill lines 850-885)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 156 | No new research | EXECUTED | Detail refinement only |
| 157 | Passes 1-5: Taste Audit | PARTIAL | Measurements, not taste |
| 158 | Passes 6-10: Surgical Refinement | P. MISSED | Small fixes only |
| 159 | Passes 11-15: Responsive Deepening | P. MISSED | Structural check only |
| 160 | Passes 16-20: Architecture Audit | PARTIAL | Accessibility yes; dead code no |
| 161 | Passes 21-25: Deep Re-evaluation | NEVER SAW | Ended at Pass 6.3 |
| 162 | Minimum 15 passes | NOT EXEC | 4 passes |
| 163 | Pride question | NEVER SAW | Not asked |
| 164 | Infinite time question | NEVER SAW | Not asked |

### 12.16 Wave 7 (Skill lines 887-911)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 165 | Pass 1: screenshots, scroll w/o analyzing | PARTIAL | Opens with grammar check |
| 166 | Pass 2: Adversarial pass | P. MISSED | Adversarial was Wave 5 |
| 167 | Passes 3-4: Score 10 criteria | NEVER SAW | Not scored |
| 168 | Passes 5-6: Comprehensive pass | PARTIAL | Audit-style, not experiential |
| 169 | Passes 7-8: Content-coupling | NEVER SAW | Content not re-read |
| 170 | Passes 9-12: Final surgery | P. MISSED | No surgery |
| 171 | Minimum 8 passes | NOT EXEC | 5 passes |
| 172 | L1-L5 inverted perception | NEVER SAW | Not applied |

### 12.17 Wave 8 (Skill lines 913-936)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 173 | Only if Wave 7 revealed issues | EXECUTED | 0 blocking; verification wave |
| 174 | Passes 1-3: Surgery from findings | EXECUTED | Review + polish + verification |
| 175 | Passes 4-6: Responsive/accessibility | P. MISSED | Not explicit pass |
| 176 | Passes 7-10: Retrospective + closure | PARTIAL | Summary yes; retrospective no |
| 177 | "I am done" and means it | EXECUTED | "COMPLETE. No changes needed." |
| 178 | Content re-read ONE MORE TIME | NEVER SAW | Not re-read |

### 12.18 Retrospectives (Skill lines 939-963)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 179 | Q1: What did wave contribute? | PARTIAL | Implicit in "Updated metrics" |
| 180 | Q2: What did page teach about content? | NEVER SAW | Not asked |
| 181 | Q3: What does next wave need? | PARTIAL | "Still missing" lists |
| 182 | Q4: How has evaluation deepened? | NEVER SAW | Not asked |
| 183 | Wave-specific retrospective questions | NEVER SAW | None written |
| 184 | Retrospectives as cognitive act | P. MISSED | Pragmatic checklists |

### 12.19 Looking Protocol (Skill lines 966-1031)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 185 | Screenshots at 1440 + 768 minimum | PARTIAL | 1440 yes; 768 DPR blocked |
| 186 | Scroll at reading speed | PARTIAL | Arc described, not scroll feel |
| 187 | Experiential FIRST, analytical SECOND | P. MISSED | Analytical throughout |
| 188 | Swap test 2-3 sections per wave | P. MISSED | Only at Wave 0 |
| 189 | Per-section diagnostic on weakest | P. MISSED | Not applied |
| 190 | L2-5 metacognitive check | EXECUTED | Passes 1.3, 3.3, 4.0 |
| 191 | Looking evolves (Imagining->Tasting) | P. MISSED | Stays analytical |
| 192 | 4-Phase Eval Progression | NEVER SAW | Not tracked |
| 193 | 2 screenshot sessions per wave | PARTIAL | Inconsistent |
| 194 | Screenshot protocol | EXECUTED | Full-page captures done |

### 12.20 10 Falsifiable Criteria (Skill lines 1034-1075)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 195 | C1: Named grid areas (2+) | NOT EXEC | No content-vocabulary grid areas |
| 196 | C2: Asymmetric proportions (2+) | NOT EXEC | All grids symmetric |
| 197 | C3: Layout loss = content loss (2+) | EXECUTED | Topology grid, pattern cards, network map |
| 198 | C4: Self-referential components (2+) | PARTIAL | Network map; 2nd unclear |
| 199 | C5: Position rel/abs pairs (2+) | EXECUTED | 4+ pairs |
| 200 | C6: Content-mapped color (1+) | EXECUTED | 4-topology color system |
| 201 | C7: Distinct spatial orgs (4+) | EXECUTED | 8+ distinct |
| 202 | C8: Transition/animation (6+) | P. MISSED | Only 1 transition |
| 203 | C9: CSS comments w/ content reasoning (5/10) | EXECUTED | 5+ comments |
| 204 | C10: Non-default reading dirs (1+) | EXECUTED | 2x2 Z-pattern |

### 12.21 Anti-Patterns (Skill lines 1078-1103)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 205 | NOT vertical skeleton first | PARTIAL | Hypotheses before HTML; page largely vertical |
| 206 | NOT "deploy mechanisms" | PARTIAL | Uses research but lists M-numbers |
| 207 | NOT "be creative" | EXECUTED | Cognitive moves used |
| 208 | NOT fixed pass counts | C. SKIPPED | Agent self-determined pass counts per wave — arguably this IS the anti-pattern's intent (don't rigidly follow minimums without judgment) |
| 209 | NOT static evaluation | PARTIAL | Some evolution; same metrics persist |
| 210 | NOT research compression | EXECUTED | Direct reading |
| 211 | NOT separate build/evaluate | EXECUTED | Combined passes |
| 212 | NOT agent handoff | EXECUTED | Single agent |
| 213 | NOT "sample 2-4 mechanisms" | C. SKIPPED | Lists 10/20 deployed |
| 214 | NOT premature convergence | C. SKIPPED | ~30 vs 100-200 passes |

### 12.22 Context Window + Cost (Skill lines 1106-1191)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 215 | HTML as compression device | EXECUTED | Primary artifact |
| 216 | Notebook pruning at >200 lines | P. MISSED | 691 lines, no pruning |
| 217 | Definition Journal never pruned | P. MISSED | Only 1 entry exists |
| 218 | Content handoff protocol | PARTIAL | Occurred by coincidence |
| 219 | Transition state every 15 passes | NEVER SAW | None written |
| 220 | New window reading order | NEVER SAW | No transitions |
| 221 | $150-300 per build | NOT EXEC | Much cheaper |
| 222 | 6-10 hours duration | NOT EXEC | ~5 hours max |
| 223 | 100-200 passes | NOT EXEC | ~30 passes |
| 224 | DOM skeletons 10-18+ | PARTIAL | 8+ vs 10-18+ |
| 225 | 4+ INEVITABLE coupling | P. MISSED | ~2 approach INEVITABLE |
| 226 | 3-5+ spatial inventions | PARTIAL | ~4 inventions |

### 12.23 Engagement Minimums + Wave Transitions (Skill lines 509-543)

| # | Prescription | Class. | Evidence |
|---|-------------|--------|---------|
| 227 | Pass minimums per wave | NOT EXEC | Only Wave 0 meets minimum (1/9) |
| 228 | 0 findings = explain why | P. MISSED | R2, R4, 4 case studies unexplained |
| 229 | Swap test 3+ sections/wave | NOT EXEC | Only Wave 0 hypotheses |
| 230 | Notebook entry per pass | EXECUTED | Every pass has entry |
| 231 | 2 screenshot sessions/wave | PARTIAL | Inconsistent |
| 232 | Adversarial question 1/4 passes | P. MISSED | Concentrated in Wave 5 |
| 233 | Full HTML re-read 2/wave | P. MISSED | Not documented |
| 234 | Exhaustion check at wave boundary | P. MISSED | No formal checks |
| 235 | Physics check at wave boundary | PARTIAL | Wave 7 only |
| 236 | Definition + comparison at boundary | P. MISSED | 1 definition, never compared |
| 237 | Look before reading each wave | P. MISSED | No pre-wave screenshots |
| 238 | Content re-read each wave | P. MISSED | Not after Wave 0 |
| 239 | Exhaustion: delta stabilized | NEVER SAW | Not tracked |
| 240 | Exhaustion: re-read produces nothing | NEVER SAW | Not tested |
| 241 | Exhaustion: infinite time invisible | NEVER SAW | Not asked |

---

### 12.24 Summary Statistics

| Category | Count | % |
|----------|:-----:|:---:|
| **EXECUTED** | 76 | 31.5 |
| **PARTIALLY EXECUTED** | 42 | 17.4 |
| **CONSCIOUSLY SKIPPED** | 5 | 2.1 |
| **PASSIVELY MISSED** | 54 | 22.4 |
| **NEVER SAW** | 49 | 20.3 |
| **NOT EXECUTED** (violated minimums) | 15 | 6.2 |
| **Total** | **241** | **100** |

### 12.25 Compliance by Skill Section

| Section | Items | Exec | Part | Skip | Miss | Never | NotEx |
|---------|:-----:|:----:|:----:|:----:|:----:|:-----:|:-----:|
| Invocation/Setup | 8 | 5 | 0 | 0 | 3 | 0 | 0 |
| Design Physics | 18 | 16 | 0 | 1 | 1 | 0 | 0 |
| Tools | 3 | 2 | 1 | 0 | 0 | 0 | 0 |
| Metacognitive | 25 | 7 | 3 | 0 | 6 | 9 | 0 |
| Input/Research | 15 | 7 | 3 | 0 | 2 | 3 | 0 |
| Cycle+Content | 13 | 8 | 2 | 0 | 1 | 1 | 1 |
| Archetypes | 8 | 2 | 1 | 1 | 4 | 0 | 0 |
| Primacy Rotation | 9 | 0 | 1 | 0 | 0 | 8 | 0 |
| Wave 0 | 6 | 3 | 2 | 0 | 1 | 0 | 0 |
| Wave 1 | 6 | 0 | 3 | 0 | 1 | 1 | 1 |
| Wave 2 | 14 | 4 | 2 | 0 | 2 | 4 | 2 |
| Wave 3 | 15 | 0 | 2 | 0 | 1 | 10 | 2 |
| Wave 4 | 7 | 0 | 1 | 0 | 3 | 3 | 0 |
| Wave 5 | 8 | 1 | 1 | 0 | 3 | 2 | 1 |
| Wave 6 | 9 | 1 | 2 | 0 | 2 | 3 | 1 |
| Wave 7 | 8 | 0 | 1 | 0 | 1 | 3 | 3 |
| Wave 8 | 6 | 2 | 1 | 0 | 1 | 1 | 1 |
| Retrospectives | 6 | 0 | 1 | 0 | 2 | 3 | 0 |
| Looking Protocol | 10 | 2 | 3 | 0 | 4 | 1 | 0 |
| 10 Criteria | 10 | 5 | 2 | 0 | 1 | 0 | 2 |
| Anti-Patterns | 10 | 4 | 3 | 3 | 0 | 0 | 0 |
| Context+Cost | 12 | 1 | 3 | 0 | 3 | 2 | 3 |
| Engagement+Trans | 15 | 1 | 3 | 0 | 6 | 3 | 2 |

### 12.26 Key Findings

#### What the Numbers Mean (and Don't Mean)

The headline — 31.5% EXECUTED, 48.9% MISSED/NEVER SAW — looks damning if read as a report card. It is not a report card. It is a map of where the skill's architecture succeeds at directing LLM behavior and where it fails. The agent produced a 2,357-line HTML page with genuine spatial inventions, 0 soul violations, correct design system compliance, and creative decisions that go beyond anything the skill explicitly prescribes. The question is not "did the agent fail?" but "what does the compliance pattern tell us about how to write better skills?"

#### Finding 1: Design system physics and binary constraints achieve near-perfect compliance.

Design Physics: 16/18 EXECUTED (89%). Anti-Patterns: 7/10 EXECUTED or CONSCIOUSLY SKIPPED with good judgment (70%). 10 Falsifiable Criteria: 7/10 EXECUTED or PARTIAL (70%). These sections share a common trait: they are concrete, testable, and binary. "border-radius: 0 always" leaves no room for interpretation and gets 100% compliance. "2+ named grid areas" is measurable and gets either compliance or a clear violation. This is the skill working as designed.

#### Finding 2: Process protocols are systematically invisible to the agent.

Primacy Rotation: 8/9 NEVER SAW. Metacognitive staleness detectors: 7/7 NEVER SAW. Wave-specific retrospective questions: NEVER SAW. Definition Journal: 1/18 expected entries. These are the skill's most elaborate procedural systems, and they were almost entirely unprocessed. But this finding requires nuance: **the agent DID self-evaluate** (5-layer metacognition at Passes 1.3, 3.3, 4.0, 5.0, 8.0), **DID run adversarial tests** (6 tests in Wave 5 with measurable RGB deltas and stacking gap fixes), and **DID track quality evolution across waves**. It just did these things in its own way rather than following the skill's prescribed format. The staleness detectors and rotation schedules read as an elaborate procedural overlay on something the agent was doing naturally through a simpler process.

#### Finding 3: The agent's unprescribed inventions are as significant as its prescribed compliance.

The skill does NOT prescribe: topology color system at 10 scales (58 instances), CRESCENDO density progression with named phases (sparse/medium/compact/heart/bedrock), a self-referential network map ("the page about topology IS a topology"), 42 cross-reference tags making document structure visible, velocity callouts (CD-001 pattern), phase transition markers (OD-006 pattern), or the 2x2 story grid. These are the agent's own creative responses to the content. A pure compliance audit misses this entirely. The agent read the Wave 0 content, formed the insight that "this document about topology IS ITSELF a topology," and then built spatial systems to express that insight. That is exactly what the skill wants — it just happened through creative engagement with content rather than through the skill's prescribed metacognitive protocols.

#### Finding 4: Pass count shortfall is real but its impact is debatable.

30 passes vs. 100-200 prescribed. Only Wave 0 met its minimum. This is the most clear-cut quantitative gap. However, the agent's passes were substantive — Pass 1.3 is a genuine 5-layer metacognitive assessment, Pass 2.1 applies research findings to measurable CSS changes, Pass 4.0 identifies and fixes 7 architectural issues, Pass 5.0 runs 6 adversarial tests with before/after measurements. These are not "code dumps." Whether 70 more passes of this quality would have yielded proportionally better output, or whether they would have hit diminishing returns, is a legitimate open question that this classification cannot answer.

#### Finding 5: Research gaps are real — R2 and R4 were never read.

R2-CREATIVE-LAYOUTS and R4-AXIS-INNOVATIONS (192 findings, 57% of corpus) were skipped. 4 of 9 case studies unread. This is a genuine coverage gap. The agent read R1, R3, R5, and SYNTHESIS, and applied findings from them (CRESCENDO from R3, zone transitions from R1, stacking avoidance from R5). Whether R2 and R4 would have produced additional spatial inventions for this specific content is a counterfactual question — the data here just confirms they were not read.

#### Finding 6: The compliance gradient (CONCRETE > ABSTRACT) is the most important architectural insight.

| Prescription Type | Execution Rate | Examples |
|---|---|---|
| Binary constraints (do/don't) | ~90% | border-radius:0, box-shadow:none, font trinity |
| Measurable thresholds | ~70% | 2+ grid areas, 940px container, >=15 RGB delta |
| Structured protocols | ~30% | 5-layer metacog, wave schedule, content readings |
| Process prescriptions | ~5-15% | Primacy rotation, staleness detectors, definition journal |

The skill is written as if all prescriptions have equal weight and equal probability of execution. They do not. Binary constraints are nearly guaranteed. Process prescriptions are nearly guaranteed to be ignored — not from defiance, but from how LLMs process instructions. **The skill should be redesigned around this reality** rather than treating all prescription types as equivalent.

#### Finding 7: CONSCIOUSLY SKIPPED reveals good judgment, not failure.

Only 5 items (2.1%) were consciously skipped. These are: corridor width variation (replaced by CRESCENDO padding — arguably better), fixed pass counts (agent self-determined — arguably the anti-pattern's intent), and mechanism sampling limits (agent deployed 10/20 mechanisms meaningfully). These are moments where the agent exercised creative judgment to deviate from the letter of a prescription while honoring its spirit. The skill should welcome this.

#### Finding 8: The 49 NEVER SAW items cluster in specific skill regions.

Primacy Rotation (8), Wave 3 detailed protocols (10), Wave 4-7 late-wave prescriptions (11), Metacognitive staleness (7), Engagement transitions (3). These are not scattered randomly — they cluster in the skill's most procedurally elaborate sections, typically appearing deep within subsections. This suggests a reading-depth problem: the agent processes the skill's high-level structure and early content reliably, but detailed procedural specifications buried in later sections fall below the attention threshold. The fix is structural (move critical prescriptions to high-salience positions) rather than emphatic (making them louder).

#### Summary: What This Classification Reveals About Skill Architecture

The build produced a good page while following roughly half the skill and ignoring the other half. This is not a paradox — it means the skill contains two kinds of content: (a) constraints and goals that effectively shape LLM output, and (b) elaborate process protocols that the LLM does not internalize. The agent's creative quality came from its genuine engagement with the content (Wave 0 immersion, topology insight, research application) combined with reliable design system compliance. It did NOT come from the staleness detectors, primacy rotation, definition journal, or exhaustion checks. A v2 skill should lean heavily into what works (binary constraints, measurable criteria, content-engagement triggers) and either convert process protocols into concrete checkpoints or accept that they serve as aspirational documentation rather than executable instructions.

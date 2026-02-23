# Extraction: Diagrams 15, 16, and 17

**Source:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/pipeline-v3-research/VISUAL-ARCHITECTURE.md`
**Diagrams:** 15 (Anti-Patterns), 16 (Revision Quality), 17 (Cross-Page Coherence)
**Lines covered:** 1125-1332

---

## DIAGRAM 15: 14 COMPOSITIONAL ANTI-PATTERNS (from B4)

### ITEM 001
- **Diagram:** 15
- **Line range:** 1125
- **Type:** FILE_REF
- **Exact text:** "14 COMPOSITIONAL ANTI-PATTERNS (from B4)"
- **Actionable implication:** Source material is B4 (Anti-Pattern Investigation); all items trace to this report.

### ITEM 002
- **Diagram:** 15
- **Line range:** 1130
- **Type:** VALUE
- **Exact text:** "Current catalog covers 3/153 pairs = 2% coverage. 98% is a minefield."
- **Actionable implication:** The mechanism catalog only documents 3 of 153 possible mechanism pairs — anti-pattern awareness must compensate for the 98% undocumented interactions.

### ITEM 003
- **Diagram:** 15
- **Line range:** 1136
- **Type:** DECISION
- **Exact text:** "DENSITY FAILURES (mechanisms compress each other)"
- **Actionable implication:** Anti-pattern category "Density Failures" must be recognized as a distinct failure class in the gate runner and PA protocol.

### ITEM 004
- **Diagram:** 15
- **Line range:** 1138-1142
- **Type:** THRESHOLD
- **Exact text:** "AP-01  DENSITY STACKING        Zone + component + disclosure ALL say 'compress.' Triple-compressed content becomes illegible. RULE: min(all padding levels) >= 12px DETECTABLE: ✅ (parse CSS cascade)"
- **Actionable implication:** Gate runner must check that the minimum of all padding levels in any stacked density context is >= 12px. This is programmatically detectable by parsing the CSS cascade. Anti-pattern involves mechanisms #2, #5, #12, and #4.

### ITEM 005
- **Diagram:** 15
- **Line range:** 1144-1148
- **Type:** RECOMMENDATION
- **Exact text:** "AP-02  COLOR ZONE CONFLICT     Zone bg + confidence encoding + border gradient create hierarchy DISAGREEMENT. 3 systems encode importance differently."
- **Actionable implication:** When zone backgrounds, confidence encoding, and border gradients are all active, a coherence check must verify they agree on hierarchy direction. Involves mechanisms #7, #9, and #1.

### ITEM 006
- **Diagram:** 15
- **Line range:** 1150
- **Type:** DECISION
- **Exact text:** "RHYTHM FAILURES (mechanisms cancel each other's patterns)"
- **Actionable implication:** Anti-pattern category "Rhythm Failures" must be recognized as a distinct failure class.

### ITEM 007
- **Diagram:** 15
- **Line range:** 1152
- **Type:** RECOMMENDATION
- **Exact text:** "AP-03  TRANSITION MONOTONY     All zones use identical dividers."
- **Actionable implication:** Builder recipe must instruct variation in zone dividers — no two consecutive transitions should be identical.

### ITEM 008
- **Diagram:** 15
- **Line range:** 1153-1154
- **Type:** RECOMMENDATION
- **Exact text:** "AP-04  SCALE COLLISION         2 mechanisms both claim the same typographic range."
- **Actionable implication:** Builder or compositional critic must verify that no two mechanisms map to the same typographic size range.

### ITEM 009
- **Diagram:** 15
- **Line range:** 1155-1156
- **Type:** RECOMMENDATION
- **Exact text:** "AP-05  SPACING FLAT-LINE       Density arc compresses uniformly instead of progressively."
- **Actionable implication:** Spacing values must form a progressive arc (not uniform), verifiable by checking that spacing does not remain constant across zones.

### ITEM 010
- **Diagram:** 15
- **Line range:** 1159
- **Type:** DECISION
- **Exact text:** "COHERENCE FAILURES (mechanisms fight across boundaries)"
- **Actionable implication:** Anti-pattern category "Coherence Failures" must be recognized as a distinct failure class.

### ITEM 011
- **Diagram:** 15
- **Line range:** 1161-1162
- **Type:** RECOMMENDATION
- **Exact text:** "AP-06  CHANNEL ISOLATION       6 channels shift but not at the same boundaries. No co-variation."
- **Actionable implication:** Compositional critic must verify that channel shifts co-occur at zone boundaries — channels must shift together, not independently.

### ITEM 012
- **Diagram:** 15
- **Line range:** 1163-1164
- **Type:** RECOMMENDATION
- **Exact text:** "AP-07  METAPHOR BLEED          Structural metaphor vocabulary leaks across zone boundaries."
- **Actionable implication:** Compositional critic must verify that metaphor-specific vocabulary is contained within its designated zones and does not leak.

### ITEM 013
- **Diagram:** 15
- **Line range:** 1165-1166
- **Type:** RECOMMENDATION
- **Exact text:** "AP-08  COMPONENT ORPHAN        Component styled for one zone dropped into a different zone."
- **Actionable implication:** Compositional critic must verify that every component's styling matches the zone it appears in — no zone-mismatched components.

### ITEM 014
- **Diagram:** 15
- **Line range:** 1169
- **Type:** DECISION
- **Exact text:** "PERCEPTION FAILURES (mechanisms produce sub-threshold output)"
- **Actionable implication:** Anti-pattern category "Perception Failures" must be recognized as a distinct failure class.

### ITEM 015
- **Diagram:** 15
- **Line range:** 1171-1172
- **Type:** RECOMMENDATION
- **Exact text:** "AP-09  GHOST MECHANISMS        Mechanism deployed but values below perception thresholds. Invisible."
- **Actionable implication:** Gate runner must verify that every deployed mechanism has values ABOVE perception thresholds (not just present in CSS). Programmatically detectable.

### ITEM 016
- **Diagram:** 15
- **Line range:** 1173-1176
- **Type:** WARNING
- **Exact text:** "AP-10  THRESHOLD GAMING        Values set at exact threshold floor (16 RGB delta, 0.026em spacing). Technically passes, perceptually empty. THE Gas Town failure mode."
- **Actionable implication:** Gate runner must flag values that sit at the exact perception threshold floor as a WARNING — technically passing but perceptually empty. This is identified as THE Gas Town failure mode. Specific floor values: 16 RGB delta, 0.026em spacing.

### ITEM 017
- **Diagram:** 15
- **Line range:** 1173-1176
- **Type:** THRESHOLD
- **Exact text:** "16 RGB delta, 0.026em spacing"
- **Actionable implication:** These are the specific threshold gaming floor values that must be flagged: backgrounds at exactly 16 RGB delta and letter-spacing at exactly 0.026em.

### ITEM 018
- **Diagram:** 15
- **Line range:** 1180
- **Type:** RECOMMENDATION
- **Exact text:** "AP-11 STRUCTURAL ECHO — same pattern repeated 3+ times kills surprise"
- **Actionable implication:** Gate runner must check that no structural pattern repeats more than 2 times consecutively. Programmatically detectable.

### ITEM 019
- **Diagram:** 15
- **Line range:** 1181
- **Type:** RECOMMENDATION
- **Exact text:** "AP-12 RESTRAINT EROSION — adding mechanisms erodes deliberate absences"
- **Actionable implication:** Compositional critic must verify that deliberate absences (restraint) are preserved — mechanism additions should not fill in spaces that were intentionally left empty.

### ITEM 020
- **Diagram:** 15
- **Line range:** 1182
- **Type:** RECOMMENDATION
- **Exact text:** "AP-13 BOOKEND ASYMMETRY — header/footer echo breaks during revision"
- **Actionable implication:** Compositional critic must verify header/footer echo symmetry is maintained, especially during revision cycles.

### ITEM 021
- **Diagram:** 15
- **Line range:** 1183
- **Type:** THRESHOLD
- **Exact text:** "AP-14 COGNITIVE OVERLOAD — >4 simultaneous visual channels per viewport"
- **Actionable implication:** Gate runner must verify that no single viewport contains more than 4 simultaneous visual channels. Programmatically detectable.

### ITEM 022
- **Diagram:** 15
- **Line range:** 1187
- **Type:** VALUE
- **Exact text:** "6 anti-patterns are PROGRAMMATICALLY DETECTABLE (gate runner)"
- **Actionable implication:** 6 of the 14 anti-patterns must be encoded as binary checks in the gate runner.

### ITEM 023
- **Diagram:** 15
- **Line range:** 1188
- **Type:** VALUE
- **Exact text:** "4 require PERCEPTUAL AUDIT (PA-05 questions)"
- **Actionable implication:** 4 anti-patterns require new PA-05 questions for detection; these must be added to the PA protocol.

### ITEM 024
- **Diagram:** 15
- **Line range:** 1189
- **Type:** VALUE
- **Exact text:** "4 can only be caught by COMPOSITIONAL CRITIC (iteration arch)"
- **Actionable implication:** 4 anti-patterns can only be caught by the compositional critic agent in the iteration architecture; these cannot be automated.

### ITEM 025
- **Diagram:** 15
- **Line range:** 1191
- **Type:** PROCESS
- **Exact text:** "Phase 3 gate runner adds 6 new binary gates for AP-01,09,10,11,14"
- **Actionable implication:** The Phase 3 gate runner must include 6 new binary gate checks specifically targeting anti-patterns AP-01, AP-09, AP-10, AP-11, and AP-14 (note: 5 APs listed for 6 gates — AP-02 may also be included given its detectable nature).

### ITEM 026
- **Diagram:** 15
- **Line range:** 1192
- **Type:** PROCESS
- **Exact text:** "Phase 3 PA adds anti-pattern-aware questions"
- **Actionable implication:** The Phase 3 PA protocol must include new questions specifically designed to detect anti-patterns.

### ITEM 027
- **Diagram:** 15
- **Line range:** 1193
- **Type:** PROCESS
- **Exact text:** "Phase 2 Compositional Critic catches AP-06,07,12,13"
- **Actionable implication:** The Phase 2 compositional critic agent must be specifically instructed to check for anti-patterns AP-06 (Channel Isolation), AP-07 (Metaphor Bleed), AP-12 (Restraint Erosion), and AP-13 (Bookend Asymmetry).

---

## DIAGRAM 16: REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION (from B6)

### ITEM 028
- **Diagram:** 16
- **Line range:** 1199
- **Type:** FILE_REF
- **Exact text:** "REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION (from B6)"
- **Actionable implication:** Source material is B6 (Revision Quality Investigation); all items trace to this report.

### ITEM 029
- **Diagram:** 16
- **Line range:** 1203-1205
- **Type:** DECISION
- **Exact text:** "REVISION QUALITY: Edits are LOCAL, Composition is GLOBAL 'The 0.3-0.5 gap between all-fixes-applied and DESIGNED IS the revision quality deficit.'"
- **Actionable implication:** The pipeline must recognize that fix cycles produce LOCAL edits that degrade GLOBAL composition — the 0.3-0.5 PA-05 gap is inherent to revision and cannot be closed by more fixes.

### ITEM 030
- **Diagram:** 16
- **Line range:** 1208-1221
- **Type:** DECISION
- **Exact text:** "THE MODE SHIFT: GENERATIVE (build) — Full composition in working memory / Each CSS decision considers ALL other decisions / CCS > 0.35 (interdependent) →  CORRECTIVE (fix) — Target specific defects / Each fix addresses ONE problem / Does NOT re-hold full composition / CCS unchanged/drops"
- **Actionable implication:** The pipeline must distinguish between GENERATIVE mode (building with full composition in working memory, CCS > 0.35) and CORRECTIVE mode (fixing specific defects, losing global composition context). Fix cycles inherently shift from generative to corrective.

### ITEM 031
- **Diagram:** 16
- **Line range:** 1219
- **Type:** THRESHOLD
- **Exact text:** "CCS > 0.35 (interdependent)"
- **Actionable implication:** A Compositional Coupling Score (CCS) above 0.35 indicates interdependent generative composition — this is the target for build mode.

### ITEM 032
- **Diagram:** 16
- **Line range:** 1220
- **Type:** WARNING
- **Exact text:** "CCS unchanged/drops"
- **Actionable implication:** During corrective/fix mode, CCS does not improve and typically drops — this is an inherent property of revision, not a builder failure.

### ITEM 033
- **Diagram:** 16
- **Line range:** 1225
- **Type:** VALUE
- **Exact text:** "Start:  PA-05 1.5/4"
- **Actionable implication:** The Flagship experiment started at PA-05 1.5/4 — baseline evidence for revision quality analysis.

### ITEM 034
- **Diagram:** 16
- **Line range:** 1226
- **Type:** VALUE
- **Exact text:** "After 9-phase remediation: PA-05 2.5/4  (+1.0)"
- **Actionable implication:** 9-phase remediation improved PA-05 by exactly 1.0 points — evidence that extensive remediation yields limited gains.

### ITEM 035
- **Diagram:** 16
- **Line range:** 1227
- **Type:** VALUE
- **Exact text:** "After all blocking fixes: PA-05 ~3.0-3.2/4 (projected)"
- **Actionable implication:** Even with ALL blocking fixes applied, PA-05 is projected to reach only 3.0-3.2/4 — a ceiling for fix-based improvement.

### ITEM 036
- **Diagram:** 16
- **Line range:** 1228
- **Type:** THRESHOLD
- **Exact text:** "Flagship target: PA-05 3.5-4.0/4"
- **Actionable implication:** The Flagship tier target is PA-05 3.5-4.0/4 — unreachable through revision alone based on evidence.

### ITEM 037
- **Diagram:** 16
- **Line range:** 1230-1232
- **Type:** DECISION
- **Exact text:** "THE GAP: 3.2 → 4.0 = 0.8 points This gap IS revision quality deficit. You cannot FIX your way to DESIGNED."
- **Actionable implication:** The 0.8-point gap between best-case revision (3.2) and Flagship target (4.0) is structurally unfixable through corrections — the pipeline must compose, not fix.

### ITEM 038
- **Diagram:** 16
- **Line range:** 1237-1238
- **Type:** WARNING
- **Exact text:** "1. Multi-channel encoding  — channels decouple when edited independently"
- **Actionable implication:** Revision breaks multi-channel encoding because channels are edited independently rather than as a coordinated system. The pipeline must warn against independent channel edits.

### ITEM 039
- **Diagram:** 16
- **Line range:** 1239-1240
- **Type:** WARNING
- **Exact text:** "2. Density arcs — flatten when individual zones corrected to pass thresholds"
- **Actionable implication:** Fixing individual zones to pass threshold checks flattens the overall density arc. Gate runners checking individual zones can CAUSE this anti-pattern.

### ITEM 040
- **Diagram:** 16
- **Line range:** 1241-1242
- **Type:** WARNING
- **Exact text:** "3. Bookending symmetry — header↔footer echo breaks when one end modified"
- **Actionable implication:** Modifying header OR footer in isolation breaks their echo symmetry — any revision to one end must consider the other.

### ITEM 041
- **Diagram:** 16
- **Line range:** 1243-1244
- **Type:** WARNING
- **Exact text:** "4. Component-context coupling — zone-aware styling breaks when component OR zone CSS changes"
- **Actionable implication:** Changing either a component's CSS or its containing zone's CSS can break their coupling — revisions must consider both together.

### ITEM 042
- **Diagram:** 16
- **Line range:** 1245-1246
- **Type:** WARNING
- **Exact text:** "5. Restraint coherence — deliberate absences become accidental when surrounding mechanisms change"
- **Actionable implication:** When surrounding mechanisms are revised, deliberate absences (restraint) lose their intentionality and appear accidental — revision must preserve restraint rationale.

### ITEM 043
- **Diagram:** 16
- **Line range:** 1251
- **Type:** THRESHOLD
- **Exact text:** "VERDICT: REBUILD  (PA-05 < 2.5)"
- **Actionable implication:** If PA-05 scores below 2.5, the pipeline verdict is REBUILD — a fresh Opus builder must start from scratch in composing mode.

### ITEM 044
- **Diagram:** 16
- **Line range:** 1252
- **Type:** AGENT_ROLE
- **Exact text:** "Fresh Opus builder in COMPOSING mode"
- **Actionable implication:** REBUILD requires a FRESH Opus agent (not the same one) operating in COMPOSING mode — generative, not corrective.

### ITEM 045
- **Diagram:** 16
- **Line range:** 1253
- **Type:** PROCESS
- **Exact text:** "Reads previous conviction artifact (not fix list)"
- **Actionable implication:** The rebuild agent reads the previous conviction artifact as inspiration but does NOT read fix lists or diagnostic output — this preserves generative mode.

### ITEM 046
- **Diagram:** 16
- **Line range:** 1254
- **Type:** DECISION
- **Exact text:** "Generative language, not diagnostic"
- **Actionable implication:** All prompting for REBUILD agents must use generative language ("compose," "create," "express") not diagnostic language ("fix," "correct," "address").

### ITEM 047
- **Diagram:** 16
- **Line range:** 1256
- **Type:** THRESHOLD
- **Exact text:** "VERDICT: REFINE  (PA-05 2.5-3.5)"
- **Actionable implication:** If PA-05 scores between 2.5 and 3.5, the pipeline verdict is REFINE — a different Opus agent refines the existing composition.

### ITEM 048
- **Diagram:** 16
- **Line range:** 1257
- **Type:** AGENT_ROLE
- **Exact text:** "DIFFERENT Opus agent (defeats continuation bias)"
- **Actionable implication:** REFINE requires a DIFFERENT Opus agent than the original builder — same-agent refinement fails due to continuation bias.

### ITEM 049
- **Diagram:** 16
- **Line range:** 1258
- **Type:** PROCESS
- **Exact text:** "Reads conviction + PA artistic impressions"
- **Actionable implication:** The REFINE agent reads the conviction artifact PLUS PA artistic impressions — qualitative perceptual feedback, not quantitative scores.

### ITEM 050
- **Diagram:** 16
- **Line range:** 1259
- **Type:** DECISION
- **Exact text:** "Never sees gate scores or threshold numbers"
- **Actionable implication:** The REFINE agent must NEVER be shown gate scores or threshold numbers — this prevents the shift from generative to corrective mode.

### ITEM 051
- **Diagram:** 16
- **Line range:** 1261-1262
- **Type:** DECISION
- **Exact text:** "You cannot fix your way to Flagship. You can only compose your way there."
- **Actionable implication:** This is the core architectural principle: the iteration architecture must preserve COMPOSING mode at all costs and never degrade into a fix cycle.

---

## DIAGRAM 17: CROSS-PAGE COHERENCE — FAMILY DNA (from B5)

### ITEM 052
- **Diagram:** 17
- **Line range:** 1268
- **Type:** FILE_REF
- **Exact text:** "CROSS-PAGE COHERENCE — FAMILY DNA (from B5)"
- **Actionable implication:** Source material is B5 (Cross-Page Coherence Investigation); all items trace to this report.

### ITEM 053
- **Diagram:** 17
- **Line range:** 1273
- **Type:** VALUE
- **Exact text:** "~30 CSS properties IDENTICAL between independently-built pages"
- **Actionable implication:** Approximately 30 CSS properties are naturally identical across independently-built pages — this is the "family DNA" that provides coherence without explicit specification.

### ITEM 054
- **Diagram:** 17
- **Line range:** 1277
- **Type:** DECISION
- **Exact text:** "SHARED DNA (identical across Gas Town + CD-006):"
- **Actionable implication:** The shared DNA properties were empirically verified across Gas Town and CD-006 — these two pages serve as the evidence base.

### ITEM 055
- **Diagram:** 17
- **Line range:** 1280
- **Type:** VALUE
- **Exact text:** "--color-primary: #E83025        (red)"
- **Actionable implication:** The primary color #E83025 (red) is part of the cross-page family DNA and must be identical on all pages.

### ITEM 056
- **Diagram:** 17
- **Line range:** 1281
- **Type:** VALUE
- **Exact text:** "--color-background: #FEF9F5     (warm cream)"
- **Actionable implication:** The background color #FEF9F5 (warm cream) is part of the cross-page family DNA and must be identical on all pages.

### ITEM 057
- **Diagram:** 17
- **Line range:** 1282
- **Type:** VALUE
- **Exact text:** "--color-text: #1A1A1A           (near-black)"
- **Actionable implication:** The text color #1A1A1A (near-black) is part of the cross-page family DNA and must be identical on all pages.

### ITEM 058
- **Diagram:** 17
- **Line range:** 1283
- **Type:** VALUE
- **Exact text:** "5 accent colors                 (all match)"
- **Actionable implication:** All 5 accent colors must be identical across pages — part of the family DNA.

### ITEM 059
- **Diagram:** 17
- **Line range:** 1284
- **Type:** VALUE
- **Exact text:** "border-radius: 0               (soul)"
- **Actionable implication:** border-radius: 0 is a soul constraint and part of cross-page family DNA — must be identical on all pages.

### ITEM 060
- **Diagram:** 17
- **Line range:** 1285
- **Type:** VALUE
- **Exact text:** "box-shadow: none               (soul)"
- **Actionable implication:** box-shadow: none is a soul constraint and part of cross-page family DNA — must be identical on all pages.

### ITEM 061
- **Diagram:** 17
- **Line range:** 1286
- **Type:** VALUE
- **Exact text:** "font trinity: Instrument Serif / Inter / JBM"
- **Actionable implication:** The font trinity (Instrument Serif / Inter / JetBrains Mono) is part of the cross-page family DNA — all pages must use exactly these three fonts.

### ITEM 062
- **Diagram:** 17
- **Line range:** 1287
- **Type:** VALUE
- **Exact text:** "body: 1rem / 1.7 line-height"
- **Actionable implication:** Body text at 1rem with 1.7 line-height is part of the cross-page family DNA and must be identical on all pages.

### ITEM 063
- **Diagram:** 17
- **Line range:** 1288
- **Type:** VALUE
- **Exact text:** "p: max-width 70ch"
- **Actionable implication:** Paragraph max-width of 70ch is part of the cross-page family DNA and must be identical on all pages.

### ITEM 064
- **Diagram:** 17
- **Line range:** 1289
- **Type:** VALUE
- **Exact text:** "header: dark bg + 3px red bottom border"
- **Actionable implication:** Header styling (dark background + 3px red bottom border) is part of the cross-page family DNA and must be identical on all pages.

### ITEM 065
- **Diagram:** 17
- **Line range:** 1290
- **Type:** VALUE
- **Exact text:** "callout: 4px left border DNA"
- **Actionable implication:** Callout styling with 4px left border is part of the cross-page family DNA and must be identical on all pages.

### ITEM 066
- **Diagram:** 17
- **Line range:** 1291
- **Type:** VALUE
- **Exact text:** "h3: italic"
- **Actionable implication:** h3 elements styled as italic is part of the cross-page family DNA and must be identical on all pages.

### ITEM 067
- **Diagram:** 17
- **Line range:** 1292
- **Type:** VALUE
- **Exact text:** "syntax highlighting: 6 colors match"
- **Actionable implication:** All 6 syntax highlighting colors must match across pages — part of the family DNA.

### ITEM 068
- **Diagram:** 17
- **Line range:** 1293
- **Type:** VALUE
- **Exact text:** "selection: red background"
- **Actionable implication:** Text selection with red background is part of the cross-page family DNA and must be identical on all pages.

### ITEM 069
- **Diagram:** 17
- **Line range:** 1294
- **Type:** VALUE
- **Exact text:** "focus-visible: 3px solid primary"
- **Actionable implication:** focus-visible styling of 3px solid primary color is part of the cross-page family DNA and must be identical on all pages.

### ITEM 070
- **Diagram:** 17
- **Line range:** 1295
- **Type:** VALUE
- **Exact text:** "skip-link: present, red bg"
- **Actionable implication:** Skip-link element must be present with red background on all pages — part of the family DNA.

### ITEM 071
- **Diagram:** 17
- **Line range:** 1298
- **Type:** VALUE
- **Exact text:** "~30 IDENTICAL PROPERTIES = FAMILY DNA"
- **Actionable implication:** The approximately 30 properties listed above constitute the complete family DNA specification.

### ITEM 072
- **Diagram:** 17
- **Line range:** 1299
- **Type:** DECISION
- **Exact text:** "This persists WITHOUT any cross-page spec."
- **Actionable implication:** Family DNA emerges naturally from shared source files — no explicit cross-page specification document is needed.

### ITEM 073
- **Diagram:** 17
- **Line range:** 1300
- **Type:** FILE_REF
- **Exact text:** "Source: tokens.css + soul constraints + components.css"
- **Actionable implication:** The family DNA originates from three source files: tokens.css, soul constraints (prohibitions.md), and components.css — these are the DNA carriers.

### ITEM 074
- **Diagram:** 17
- **Line range:** 1306
- **Type:** DECISION
- **Exact text:** "WHAT VARIES (per-page creative decisions):"
- **Actionable implication:** The following properties are the per-page creative domain — builders have authority over these.

### ITEM 075
- **Diagram:** 17
- **Line range:** 1306
- **Type:** VALUE
- **Exact text:** "Zone background strategy + colors"
- **Actionable implication:** Zone background strategy and specific colors vary per page and are creative decisions.

### ITEM 076
- **Diagram:** 17
- **Line range:** 1307
- **Type:** VALUE
- **Exact text:** "Type scale values + naming"
- **Actionable implication:** Type scale values and their naming conventions vary per page and are creative decisions.

### ITEM 077
- **Diagram:** 17
- **Line range:** 1308
- **Type:** VALUE
- **Exact text:** "Structural metaphor vocabulary"
- **Actionable implication:** The structural metaphor and its vocabulary vary per page and are creative decisions.

### ITEM 078
- **Diagram:** 17
- **Line range:** 1309
- **Type:** VALUE
- **Exact text:** "Callout variant semantics"
- **Actionable implication:** Callout variant semantics (what different callout styles mean) vary per page and are creative decisions.

### ITEM 079
- **Diagram:** 17
- **Line range:** 1310
- **Type:** VALUE
- **Exact text:** "Component selection + layout"
- **Actionable implication:** Which components are selected and how they are laid out varies per page and are creative decisions.

### ITEM 080
- **Diagram:** 17
- **Line range:** 1311
- **Type:** VALUE
- **Exact text:** "Container width (960px vs 1100px)"
- **Actionable implication:** Container width is a per-page creative decision that can be either 960px or 1100px.

### ITEM 081
- **Diagram:** 17
- **Line range:** 1312
- **Type:** VALUE
- **Exact text:** "Hover behavior patterns"
- **Actionable implication:** Hover behavior patterns vary per page and are creative decisions.

### ITEM 082
- **Diagram:** 17
- **Line range:** 1313
- **Type:** VALUE
- **Exact text:** "Transition type vocabulary"
- **Actionable implication:** Transition type vocabulary varies per page and are creative decisions.

### ITEM 083
- **Diagram:** 17
- **Line range:** 1316
- **Type:** DECISION
- **Exact text:** "VERDICT: SIBLINGS, NOT STRANGERS."
- **Actionable implication:** The overall architectural verdict is that independently-built pages are siblings (shared family DNA) not strangers — this validates the current approach.

### ITEM 084
- **Diagram:** 17
- **Line range:** 1318-1319
- **Type:** VALUE
- **Exact text:** "tokens.css + soul constraints already provide ~80% of cross-page coherence WITHOUT any explicit cross-page spec."
- **Actionable implication:** 80% of cross-page coherence comes automatically from tokens.css and soul constraints — no additional cross-page specification is needed for this 80%.

### ITEM 085
- **Diagram:** 17
- **Line range:** 1322
- **Type:** PROCESS
- **Exact text:** "Builder reads tokens.css (183 lines) → shared vocabulary"
- **Actionable implication:** Every builder must read tokens.css (183 lines) to absorb the shared vocabulary that produces cross-page coherence.

### ITEM 086
- **Diagram:** 17
- **Line range:** 1322
- **Type:** VALUE
- **Exact text:** "tokens.css (183 lines)"
- **Actionable implication:** tokens.css is 183 lines — this is the exact size that must be routed to the builder agent.

### ITEM 087
- **Diagram:** 17
- **Line range:** 1323
- **Type:** PROCESS
- **Exact text:** "Builder reads components.css (290 lines) → shared DNA"
- **Actionable implication:** Every builder must read components.css (290 lines) to absorb the shared component DNA.

### ITEM 088
- **Diagram:** 17
- **Line range:** 1323
- **Type:** VALUE
- **Exact text:** "components.css (290 lines)"
- **Actionable implication:** components.css is 290 lines — this is the exact size that must be routed to the builder agent.

### ITEM 089
- **Diagram:** 17
- **Line range:** 1324
- **Type:** PROCESS
- **Exact text:** "73-line template embeds soul → shared identity"
- **Actionable implication:** The 73-line constraint template embeds soul constraints to ensure shared identity across all pages.

### ITEM 090
- **Diagram:** 17
- **Line range:** 1324
- **Type:** VALUE
- **Exact text:** "73-line template"
- **Actionable implication:** The soul/identity template is exactly 73 lines — this is the constraint set size that each builder receives.

### ITEM 091
- **Diagram:** 17
- **Line range:** 1325
- **Type:** PROCESS
- **Exact text:** "Per-page metaphor + zone strategy → page uniqueness"
- **Actionable implication:** Page uniqueness comes from per-page metaphor selection and zone strategy — this is the creative authority domain.

### ITEM 092
- **Diagram:** 17
- **Line range:** 1327
- **Type:** DECISION
- **Exact text:** "No additional cross-page gate needed. The DNA is INHERENT."
- **Actionable implication:** The pipeline must NOT include a cross-page coherence gate — the shared DNA is inherent from the source files and does not need explicit verification.

---

## ITEM COUNT

**Diagram 15:** 27 items (ITEM 001 - ITEM 027)
**Diagram 16:** 24 items (ITEM 028 - ITEM 051)
**Diagram 17:** 41 items (ITEM 052 - ITEM 092)

**TOTAL: 92 items extracted**

### Anti-Pattern Coverage (all 14 individually extracted):
- AP-01: ITEM 004 (Density Stacking)
- AP-02: ITEM 005 (Color Zone Conflict)
- AP-03: ITEM 007 (Transition Monotony)
- AP-04: ITEM 008 (Scale Collision)
- AP-05: ITEM 009 (Spacing Flat-Line)
- AP-06: ITEM 011 (Channel Isolation)
- AP-07: ITEM 012 (Metaphor Bleed)
- AP-08: ITEM 013 (Component Orphan)
- AP-09: ITEM 015 (Ghost Mechanisms)
- AP-10: ITEM 016 (Threshold Gaming)
- AP-11: ITEM 018 (Structural Echo)
- AP-12: ITEM 019 (Restraint Erosion)
- AP-13: ITEM 020 (Bookend Asymmetry)
- AP-14: ITEM 021 (Cognitive Overload)

### Revision Fragility Rules (all 5 individually extracted):
- ITEM 038: Multi-channel encoding decouples
- ITEM 039: Density arcs flatten
- ITEM 040: Bookending symmetry breaks
- ITEM 041: Component-context coupling breaks
- ITEM 042: Restraint coherence degrades

### Cross-Page Coherence Properties (all ~30 individually extracted):
- ITEMS 055-070: 16 shared DNA properties (colors, fonts, borders, etc.)
- ITEMS 075-082: 8 per-page creative variation properties
- Total cross-page properties covered: 24 explicit + grouped references (~30 per source)

<!--
═══════════════════════════════════════════════════════════════════════════════
INLINE THREADING HEADER — Phase 2B
File: docs-spa/app/showcase/dependency-trace/07-QUESTIONS-FOR-HUMAN.md
Tier: B | Batch: 10 | Generated: 2026-02-06

1. WHY THIS EXISTS
Collects 6 questions (Q-001 through Q-006) that emerged from the Phase 1B
dependency trace but cannot be resolved by analysis alone — each requires a
human judgment call about intent, direction, or priority. Covers design-system
token alignment, R2 finding count discrepancy, node_modules gitignore, blend
component status, CLAUDE.md Phase 4 coverage, and accent token drift.

3. STATUS
ACTIVE

5. BUILT ON
| Dependency                              | Relationship                          |
|-----------------------------------------|---------------------------------------|
| 04-cross-directory-analysis.md          | Token divergence data for Q-001, Q-006 |
| 05-cleanup-recommendations.md           | Cleanup items elevated to questions    |
| 01-reachability-report.md               | Orphan/connected data for Q-003        |
| 02-threading-data/ (all 3 files)        | Threading gaps driving Q-002, Q-005    |
| All Phase 1B analysis files             | Evidence base for each question        |

6. MUST HONOR
- Each question includes Options with pros/cons and a Recommendation
- Confidence levels (HIGH/MEDIUM) indicate analysis certainty
- Questions are OPEN — no answer has been given yet by the human
- Q-001 (design-system alignment) is the highest-impact decision

8. CONSUMED BY
| Consumer                                | How Used                              |
|-----------------------------------------|---------------------------------------|
| PHASE-2B-BATCH-MANIFEST.md             | References as Batch 10 file #167      |
| Human project owner                     | Decision-making on 6 open questions    |
| Future work depending on Q-001 answer   | design-system alignment direction      |
| knowledge-architecture/PHASE-1B-MEGA-DEBRIEF.md | Cites open questions       |

═══════════════════════════════════════════════════════════════════════════════
END INLINE THREADING HEADER
═══════════════════════════════════════════════════════════════════════════════
-->
# 07-QUESTIONS-FOR-HUMAN.md
## Unresolvable Issues Requiring Human Decision

**Generated:** 2026-02-05
**Context:** Dependency trace across showcase (83 files), design-extraction (350 files), design-system (30 files)

These questions cannot be resolved by analysis alone. Each requires a human judgment call about intent, direction, or priority.

---

### Q-001: Design-System Token Values Diverge from T1 Soul -- Is design-system Meant to Be Soul-Compliant or Independent?
**Files:**
- `design-system/src/styles/tokens.css`
- `design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md`
- `design-extraction/component-system/perceptual-audit-v2/synthesis/PRODUCTION-RULES.md`

**Issue:** The `design-system/` directory (repo root) defines token values that contradict the soul-locked definitions from the T1 synthesis. Specifically:
- `--sanrok-red: #FF0000` vs soul-locked `--color-primary: #E83025`
- `--radius-sm` through `--radius-full`: 0.25rem to 9999px vs soul-locked `--border-radius: 0`
- `--shadow-sm` through `--shadow-elevated`: actual values vs soul-locked `--box-shadow: none`
- `--color-border: rgba(0,0,0,0.08)` vs soul-locked `#E0D5C5`

The design-system was created before the T1 synthesis (which was completed Feb 4). It consumed the earlier typography-system research (Instrument Serif font) but not the perceptual audit refinements.

**Options:**
1. **Align design-system with soul** -- Update all tokens to match T1 values. Requires rewriting tokens.css, updating 6+ theme files, refactoring 16 TSX components.
   - Pros: Single source of truth, soul compliance, consistency with showcase
   - Cons: Major effort (~30 files to touch), blended themes may lose their design intent, medieval/nous themes have their own aesthetics that may not align with the KortAI soul
2. **Keep design-system independent** -- Document the divergence explicitly. design-system represents the "Sanrok/Medieval/Nous research" aesthetic; showcase represents the "KortAI soul" aesthetic.
   - Pros: Preserves design intent, minimal effort, blended themes stay as designed
   - Cons: Two competing token systems in the same repo, confusion for agents and humans, the name "design-system" implies it IS the design system
3. **Hybrid** -- Align base tokens (tokens.css) with soul, but keep blended themes as independent design experiments with documented divergences.
   - Pros: Core alignment, preserves experimental work, clear boundary
   - Cons: Mixed compliance, requires careful documentation of which files are soul-aligned and which are not

**Recommendation:** Option 3 (Hybrid). The base theme should match the soul, but blended themes serve a different purpose (design exploration) and their divergence is architectural, not accidental.
**Confidence:** MEDIUM

---

### Q-002: R2 Finding Count -- Are Sub-Findings Counted Separately?
**Files:**
- `docs-spa/app/showcase/research/R2-CREATIVE-LAYOUTS.md` (32,253 bytes)
- `docs-spa/app/showcase/checkpoints/COMPONENT-AUDIT-FOUNDATION.md`
- `docs-spa/app/showcase/checkpoints/DISCOVERIES-LOG.md`
- `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/original-research/CLAUDE.md`

**Issue:** `original-research/CLAUDE.md` states R2 contains 78 findings. `COMPONENT-AUDIT-FOUNDATION.md` tables list R2-001 through R2-027 only (27 findings). `DISCOVERIES-LOG.md` references R2-079. Three possible explanations:
1. R2-CREATIVE-LAYOUTS.md contains sub-findings (R2-001a, R2-001b, etc.) that total 78
2. Findings R2-028 through R2-079 were generated during exploration work and documented elsewhere
3. The "78" count is an error

**Options:**
1. **Audit R2 file content** -- Read R2-CREATIVE-LAYOUTS.md end-to-end and count every finding definition
   - Pros: Definitive answer
   - Cons: Requires dedicated agent time on a 32KB file
2. **Accept 27 as primary count** -- Treat the COMPONENT-AUDIT-FOUNDATION table as authoritative and note the discrepancy
   - Pros: Conservative, avoids phantom finding IDs
   - Cons: May miss real findings
3. **Search for R2-028+ across all files** -- Grep for R2-028 through R2-079 to find where they are defined
   - Pros: Finds all instances
   - Cons: If they only appear in DISCOVERIES-LOG, they may be discovery-phase additions not formal R2 findings

**Recommendation:** Option 3 first (search is quick), then Option 1 if needed.
**Confidence:** MEDIUM

---

### Q-003: Should design-extraction node_modules Be Gitignored and Removed from Tracking?
**Files:**
- `design-extraction/archive/variations/tests/node_modules/` (23 files)
- `design-extraction/card-system/tests/node_modules/` (23 files)
- `design-extraction/component-system/tests/node_modules/` (137 files)
- `design-extraction/typography-system/node_modules/` (23 files)

**Issue:** 201 node_modules files (~5.4MB) and 4 playwright-report files (~1.83MB) are tracked in git. These are Playwright test framework dependencies and generated test output. They inflate the repository by ~7.2MB and the file count from 350 to 555.

**Options:**
1. **Gitignore and untrack** -- Add `**/node_modules/` and `**/playwright-report/` to `.gitignore`, then `git rm -r --cached` to untrack
   - Pros: Clean repo, accurate file counts, reduced clone size by ~7MB
   - Cons: Irreversible in the sense that git history still contains them; anyone who needs Playwright tests must `npm install` manually
2. **Leave as-is** -- Document their presence but don't change tracking
   - Pros: Zero risk, no git operations needed
   - Cons: Continues to inflate repo, confuse file counts, waste bandwidth on clone
3. **Move test infrastructure to a separate repo** -- Extract all test directories to a dedicated testing repo
   - Pros: Clean separation of concerns
   - Cons: Over-engineering for the current project scope

**Recommendation:** Option 1. Standard practice. The files are generated dependencies that can always be recreated with `npm install`.
**Confidence:** HIGH

---

### Q-004: Should the 3 Blended Theme Showcase Components Be Production or Demo-Only?
**Files:**
- `design-system/src/components/blend/BlendedThemeShowcase.tsx` (15,605 bytes)
- `design-system/src/components/blended/index.tsx` (15,272 bytes)
- `design-system/src/components/medieval-blend/MedievalBlendShowcase.tsx` (19,880 bytes)

**Issue:** Three large TSX files (15-20KB each) in `src/components/` define their own inline token objects and render full showcase pages. They contain hardcoded sample content (person names, lorem text) and are self-contained rather than reusable. They behave like demo pages but live in the production components directory. The README.md does not document them.

**Options:**
1. **Treat as production** -- Document in README.md, align tokens, remove hardcoded content, make props configurable
   - Pros: Retains work, maintains blended theme coverage
   - Cons: Significant refactoring effort; these were likely designed as demos
2. **Move to demos/** -- Create `design-system/demos/` directory, move all three there
   - Pros: Clear separation, no confusion about production status, preserves the work as reference
   - Cons: Creates a new directory convention
3. **Split** -- Extract reusable sub-components (e.g., `BlendedHero`, `BlendedCard`) into proper production files, keep showcase wrappers as demos
   - Pros: Best of both worlds -- reusable parts go to production, demo parts stay separate
   - Cons: Most effort

**Recommendation:** Option 2 (move to demos). These read as design exploration artifacts, not production building blocks.
**Confidence:** MEDIUM

---

### Q-005: Should design-extraction/CLAUDE.md Be Updated to Cover Phase 4?
**Files:**
- `design-extraction/CLAUDE.md` (12,027 bytes, last updated 2026-02-03)
- `design-extraction/component-system/perceptual-audit-v2/` (176 files)
- `design-extraction/component-system/perceptual-audit-v2/synthesis/` (6 T1 files)

**Issue:** The entry-point CLAUDE.md for `design-extraction/` documents Phases 1-3 only. Phase 4 (component-system/perceptual-audit-v2/) contains 176 files including the 6 most important T1 foundation documents in the entire project. Agents entering via CLAUDE.md have no visibility into Phase 4.

**Options:**
1. **Full update** -- Add Phase 4 section with: directory map, 6 T1 file paths, tracking directory, MASTER-INDEX.md, supersession chains
   - Pros: Complete navigation, agents find T1 content immediately
   - Cons: CLAUDE.md becomes larger; risk of introducing errors about the audit structure
2. **Minimal update** -- Add a one-line Phase 4 pointer: "Phase 4: See component-system/perceptual-audit-v2/MASTER-INDEX.md"
   - Pros: Quick, low risk, delegates navigation to the sub-directory's own index
   - Cons: Agents still need two hops to reach T1 content
3. **Leave as-is** -- The perceptual-audit-v2/MASTER-INDEX.md and component-system/PROGRESS.md already provide navigation within Phase 4
   - Pros: Zero risk
   - Cons: Agents miss Phase 4 entirely on initial entry

**Recommendation:** Option 1 (full update). The CLAUDE.md is the primary navigation document and should reflect the current state of the project, especially for the most critical phase.
**Confidence:** HIGH

---

### Q-006: Should the Accent Token Drift Between Tracking Sheets and Showcase Be Reconciled?
**Files:**
- `design-extraction/component-system/perceptual-audit-v2/tracking/COLOR-TOKENS.md`
- `docs-spa/app/showcase/DESIGN-SYSTEM/tokens/colors.md`

**Issue:** Secondary/semantic tokens show drift between the two directories:
- `accent-amber`: `#C49052` (tracking) vs `#D97706` (showcase)
- `accent-purple`: `#7B68EE` (tracking) vs `#7C3AED` (showcase)
- `bg-info`: `#F0F7FF` (tracking) vs `#F5F8FA` (showcase)
- `bg-tip`: `#F0F7F0` (tracking) vs `#F5FAF5` (showcase)

Core locked tokens (primary, background, text, border, geometry) remain identical. The drift likely occurred because the showcase evolved accent values during DD exploration work, while the tracking sheets were not updated.

**Options:**
1. **Update tracking to match showcase** -- The showcase DD explorations are the SOURCES OF TRUTH (per user directive). The tracking sheets should reflect the latest values.
   - Pros: Consistency, tracking sheets become accurate references
   - Cons: Changes files in design-extraction that may be considered "locked"
2. **Update showcase to match tracking** -- If the tracking sheets represent the T1-sanctioned values, the showcase should revert.
   - Pros: T1 chain integrity
   - Cons: Would contradict DD exploration files which are sources of truth
3. **Document the drift** -- Add a note in both files explaining the divergence and declaring which is authoritative
   - Pros: Transparency, no file changes
   - Cons: Drift persists, two competing values for the same semantic tokens
4. **Create a RECONCILIATION.md** -- New file documenting the complete token comparison with decisions on each divergent value
   - Pros: Full visibility, structured decision-making
   - Cons: Adds another file to maintain

**Recommendation:** Option 1 -- per the trust hierarchy, DD files (and by extension, the showcase tokens they use) are sources of truth. The tracking sheets should be updated to match. However, this should be done as a documented update with clear provenance (e.g., "Updated to match showcase values validated in DD explorations").
**Confidence:** MEDIUM

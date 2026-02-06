# 08-OBSERVATIONS-LOG.md
## Aggregated Anomalies Across All 3 Directory Analyses

**Generated:** 2026-02-05
**Sources:** showcase-analysis.md (ALPHA), design-extraction-analysis.md (BETA), design-system-analysis.md (GAMMA), cross-pollination-investigation.md, CRITICAL-TRUST-RULES.md

---

## showcase/ Observations

---

### OBS-001: [ANOMALY] -- R2 Finding Count Discrepancy (78 vs 27)
- **Type:** ANOMALY
- **Directory:** showcase
- **Files:**
  - `docs-spa/app/showcase/research/R2-CREATIVE-LAYOUTS.md`
  - `docs-spa/app/showcase/checkpoints/COMPONENT-AUDIT-FOUNDATION.md`
  - `docs-spa/app/showcase/checkpoints/DISCOVERIES-LOG.md`
  - `docs-spa/app/showcase/DESIGN-SYSTEM/provenance/original-research/CLAUDE.md`
- **Evidence:** `original-research/CLAUDE.md` states "R2=78" findings. `COMPONENT-AUDIT-FOUNDATION.md` tables list only R2-001 through R2-027 (27 findings). `DISCOVERIES-LOG.md` references R2-079, suggesting additional findings were generated during work. The R2-CREATIVE-LAYOUTS.md file itself is 32,253 bytes.
- **Impact:** Downstream consumers relying on the finding count for completeness tracking will have incorrect metrics. The discrepancy creates uncertainty about whether R2 research has been fully catalogued.
- **Recommendation:** Audit R2-CREATIVE-LAYOUTS.md to determine if it contains findings beyond R2-027. If R2-079 exists as a sub-finding or discovery-phase addition, document the counting methodology (e.g., "78 includes sub-findings R2-001a, R2-001b, etc.").

---

### OBS-002: [INCOMPLETE] -- README.md Contains Hypothetical OD Examples
- **Type:** INCOMPLETE
- **Directory:** showcase
- **Files:**
  - `docs-spa/app/showcase/DESIGN-SYSTEM/README.md` (109,544 bytes)
- **Evidence:** README.md at 109K contains hypothetical OD-F-007, OD-F-008, OD-F-009 examples. OD (Organizational Density) Stage 3 has not started -- `explorations/organizational/CLAUDE.md` confirms OD directory is empty except for navigation file. All Stage 3 output files are marked PENDING.
- **Impact:** An agent or human reading the README could confuse hypothetical examples with actual completed work. The OD findings presented (OD-F-007 "Hierarchy Through Density Contrast", OD-F-008, OD-F-009) do not exist in any provenance file.
- **Recommendation:** Add a clear HYPOTHETICAL / ILLUSTRATIVE disclaimer on the OD examples section. Consider using a visually distinct callout (e.g., "EXAMPLE ONLY -- Not Yet Completed").

---

### OBS-003: [ANOMALY] -- DD-001 Missing Token Standardizations
- **Type:** ANOMALY
- **Directory:** showcase
- **Files:**
  - `docs-spa/app/showcase/explorations/density/DD-001-breathing.html`
- **Evidence:** DD-001 lacks `--border-left-width` standardization and `--space-20` token that were added in DD-002+. DD-002 CSS comment explicitly states "DD-001 LESSONS APPLIED: Standardized borders, no traffic-light." DD-001 scored 33/40 (lowest of all DD files).
- **Impact:** LOW -- DD-001 is a T1 source of truth per user directive. The missing standardizations are documented as lessons learned. No corrective action needed unless DD-001 is used as a template for new work.
- **Recommendation:** KEEP as-is. The lesson chain (DD-001 lessons -> DD-002 improvements -> DD-003 lessons -> etc.) is intentional and documented.

---

## design-extraction/ Observations

---

### OBS-004: [DEPRECATED] -- archive/tokens/ Contains DANGEROUS Values
- **Type:** DEPRECATED
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/archive/tokens/effects.css` (10,449 bytes)
  - `design-extraction/archive/tokens/colors.css` (8,674 bytes)
  - `design-extraction/archive/tokens/typography.css` (11,090 bytes)
  - `design-extraction/archive/tokens/spacing.css` (7,549 bytes)
  - `design-extraction/archive/tokens/index.css` (8,465 bytes)
  - `design-extraction/archive/tokens/test.html` (16,511 bytes)
- **Evidence:** `effects.css` defines `--radius-sm: 2px` through `--radius-full: 9999px` and shadow variables. `typography.css` defines `--font-display: 'Bebas Neue'` (later changed to Instrument Serif). The T1 synthesis files EXPLICITLY BAN all `border-radius > 0` and all `box-shadow`. README.md marks these as "Superseded by typography-system."
- **Impact:** CRITICAL if consumed without context. An agent reading `effects.css` would produce anti-pattern CSS that violates every soul constraint. The old font-display value would use the wrong typeface entirely.
- **Recommendation:** Add a DANGEROUS/SUPERSEDED header comment to each file. Consider renaming the directory to `archive/tokens-SUPERSEDED-DANGEROUS/` to make the status unmistakable.

---

### OBS-005: [STALE] -- CLAUDE.md Covers Only Phases 1-3
- **Type:** STALE
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/CLAUDE.md` (12,027 bytes)
- **Evidence:** Last updated 2026-02-03. Documents Phase 1 (typography-system), Phase 2 (card-system research), Phase 3 (card-system implementation). Does NOT reference Phase 4 (`component-system/perceptual-audit-v2/`) which contains 176 files and all 6 T1 synthesis documents. The 6 T1 foundation files (MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md, CHARACTER-FAMILY-COMPLETE.md, PRODUCTION-RULES.md, ANTI-PATTERNS-REGISTRY.md, CONSISTENCY-VERIFICATION.md) are not mentioned.
- **Impact:** HIGH -- Agents entering `design-extraction/` via CLAUDE.md (the standard entry point) miss the most authoritative content in the directory. They would navigate to typography-system and card-system without awareness of perceptual-audit-v2.
- **Recommendation:** Update CLAUDE.md to include Phase 4 section with paths to the 6 T1 synthesis files, the tracking directory, and the MASTER-INDEX.md navigation file.

---

### OBS-006: [STALE] -- README.md Has Wrong Phase Table
- **Type:** STALE
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/README.md` (4,885 bytes)
- **Evidence:** Phase progress table lists "Phase 3: Color System" as NEXT. The actual next phase was Phase 4 (component-system), which is now COMPLETE with 176 files. The README predates the component-system work entirely.
- **Impact:** MEDIUM -- External readers and new agents would have an incorrect picture of project status. They would not know that Phase 4 exists or is complete.
- **Recommendation:** Update phase table to reflect current state: Phase 1-3 COMPLETE, Phase 4 COMPLETE (perceptual-audit-v2).

---

### OBS-007: [ANOMALY] -- SOUL-DEFINITION.md at 58KB
- **Type:** ANOMALY
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/component-system/SOUL-DEFINITION.md` (58,009 bytes)
- **Evidence:** At 58KB, this is the largest markdown file in the entire system. It contains 6 Universal Rules plus component-specific rules. The T1 synthesis file MASTER-SOUL-SYNTHESIS.md (15,658 bytes) distills the same content into 16KB.
- **Impact:** LOW -- The file is correctly marked as T1 but is referenced primarily through MASTER-SOUL-SYNTHESIS.md. Agents consuming the full 58KB file would get correct but overwhelming information when the synthesis would suffice.
- **Recommendation:** No action required. The supersession chain is documented: `SOUL-DEFINITION.md -> MASTER-SOUL-SYNTHESIS.md`. Consider adding a header note: "For a condensed version, see MASTER-SOUL-SYNTHESIS.md."

---

### OBS-008: [MISPLACED] -- node_modules Committed to Git
- **Type:** MISPLACED
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/archive/variations/tests/node_modules/` (23 files)
  - `design-extraction/card-system/tests/node_modules/` (23 files)
  - `design-extraction/component-system/tests/node_modules/` (137 files)
  - `design-extraction/typography-system/node_modules/` (23 files)
- **Evidence:** 201 node_modules files totaling ~5.4MB are tracked in git across 4 test directories. These are Playwright test framework dependencies. The component-system installation is largest (137 files, includes serve, compression, chalk beyond just Playwright).
- **Impact:** MEDIUM -- Inflates repository size by 5.4MB. Inflates file count from 350 to 555 (misleading). No functional impact on the design system itself.
- **Recommendation:** Add `**/node_modules/` to `.gitignore`. Run `git rm -r --cached` on all 4 directories to untrack without deleting. Requires human confirmation before execution.

---

### OBS-009: [MISPLACED] -- Duplicate Playwright Report Assets
- **Type:** MISPLACED
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/archive/variations/tests/playwright-report/index.html` (561,392 bytes)
  - `design-extraction/component-system/tests/playwright-report/index.html` (704,460 bytes)
  - `design-extraction/component-system/tests/playwright-report/data/*.md` (9,829 bytes)
  - `design-extraction/typography-system/playwright-report/index.html` (551,372 bytes)
- **Evidence:** 4 playwright-report files totaling ~1.83MB. These are generated test output (single HTML files with embedded data), not source material.
- **Impact:** LOW -- Occupies space but no functional impact.
- **Recommendation:** Add `**/playwright-report/` to `.gitignore` alongside node_modules. Untrack with `git rm -r --cached`.

---

### OBS-010: [INCOMPLETE] -- Info-Callout Structural Inconsistency
- **Type:** INCOMPLETE
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/component-system/perceptual-audit-v2/components/info-callout/`
- **Evidence:** The info-callout component has its zone analysis files at the component root level instead of inside `sub-agent-analyses/` like the other 6 fully-analyzed components. Only `ZONE-TYPOGRAPHY-ANALYSIS.md` is inside `sub-agent-analyses/`.
- **Impact:** LOW -- The content is present and correct; only the file organization differs from the pattern established by other components.
- **Recommendation:** Move zone analysis files into `sub-agent-analyses/` to match the convention used by challenge-callout, code-snippet, essence-callout, file-tree, gotcha-callout, and tip-callout.

---

## design-system/ Observations

---

### OBS-011: [ANOMALY] -- 4 CRITICAL Token Divergences from Soul
- **Type:** ANOMALY
- **Directory:** design-system
- **Files:**
  - `design-system/src/styles/tokens.css` (6,534 bytes)
- **Evidence:**
  - `--sanrok-red: #FF0000` vs soul-locked `--color-primary: #E83025`
  - `--radius-sm` through `--radius-full`: 0.25rem to 9999px vs soul-locked `--border-radius: 0`
  - `--shadow-sm` through `--shadow-elevated`: actual values vs soul-locked `--box-shadow: none`
  - `--color-border: rgba(0,0,0,0.08)` vs soul-locked solid border `#E0D5C5`
- **Impact:** CRITICAL -- Every component using these tokens violates soul constraints. If design-system is intended to be soul-compliant, ALL radius, shadow, and primary color tokens must be overridden.
- **Recommendation:** Determine intent first (see Q-001). If soul-compliant, align all values. If independent, document the divergence explicitly.

---

### OBS-012: [ANOMALY] -- 8 Token Namespaces / Sources of Truth
- **Type:** ANOMALY
- **Directory:** design-system
- **Files:**
  - `design-system/src/styles/tokens.css` (base namespace, ~85 tokens)
  - `design-system/src/styles/themes/blended-sanrok-dominant.css` (`--blend-*`, ~65 tokens)
  - `design-system/src/styles/themes/blend-nous-dominant.css` (`--blend-*` different, ~90 tokens)
  - `design-system/src/styles/themes/medieval-blend.css` (`--mb-*`, ~70 tokens)
  - `design-system/src/components/blended/index.tsx` (JS inline tokens)
  - `design-system/src/components/blend/BlendedThemeShowcase.tsx` (JS inline tokens)
  - `design-system/src/components/medieval-blend/MedievalBlendShowcase.tsx` (JS inline tokens)
- **Evidence:** 5 CSS namespaces + 3 JS inline token objects = 8 independent sources of truth for token values. Token names differ across namespaces (`--space-4` vs `--blend-space-4` vs `--mb-space-xl`). Blended themes are self-contained and do not import from tokens.css.
- **Impact:** HIGH -- Impossible to make a single token change and have it propagate across all themes/components. Each namespace must be updated independently.
- **Recommendation:** Consolidate to maximum 2 namespaces (base + theme override pattern) or document the multi-namespace architecture as intentional.

---

### OBS-013: [ANOMALY] -- TSX Components Bypass CSS Token System
- **Type:** ANOMALY
- **Directory:** design-system
- **Files:**
  - All 16 TSX files in `design-system/src/components/`
- **Evidence:** Every TSX component uses hardcoded Tailwind classes (`rounded-full`, `bg-[#FF0000]`, `text-[#171717]`) and inline styles (`boxShadow`, `borderRadius`) instead of CSS custom properties from `tokens.css`. CSS token usage count across all TSX files: 0.
- **Impact:** CRITICAL -- The token system has zero influence on rendered output. Changing tokens.css values changes nothing in the components. The CSS and TSX layers are completely decoupled.
- **Recommendation:** Refactor TSX components to use CSS custom properties via `style={{ color: 'var(--color-primary)' }}` or create a token-to-Tailwind bridge configuration.

---

### OBS-014: [ANOMALY] -- medieval-blend.css :root Override
- **Type:** ANOMALY
- **Directory:** design-system
- **Files:**
  - `design-system/src/styles/themes/medieval-blend.css` (12,692 bytes)
- **Evidence:** Sets CSS custom properties on `:root` in addition to `[data-theme="medieval-blend"]`. The `--mb-*` prefixed tokens are set on both selectors. When this CSS file is loaded (even without activating the theme), the `:root` definitions will override base tokens globally.
- **Impact:** HIGH -- Loading medieval-blend.css corrupts the base token system. Any page importing this file will have its base theme polluted with medieval-blend values. This is a latent bug that would manifest in production.
- **Recommendation:** Remove the `:root` selector from medieval-blend.css. Tokens should only be set on `[data-theme="medieval-blend"]`.

---

### OBS-015: [INCOMPLETE] -- No CLAUDE.md in design-system
- **Type:** INCOMPLETE
- **Directory:** design-system
- **Files:**
  - `design-system/` (directory root)
- **Evidence:** No CLAUDE.md exists at `design-system/CLAUDE.md`. The only documentation is `design-system/docs/README.md` which covers component listing but not process rules, entry points, or mandatory reading.
- **Impact:** MEDIUM -- Agents entering design-system/ have no local instructions, no tier classification, no mandatory reading list, no soul compliance requirements documented at the directory level.
- **Recommendation:** Create `design-system/CLAUDE.md` with: directory purpose, token system architecture, soul compliance status/requirements, mandatory reading order, and relationship to design-extraction and showcase.

---

### OBS-016: [INCOMPLETE] -- No Finding IDs or Provenance Markers
- **Type:** INCOMPLETE
- **Directory:** design-system
- **Files:**
  - All 30 files in `design-system/`
- **Evidence:** V1 (structured finding IDs) = 0 hits. V4 (provenance references) = 0 hits. V8 (deprecation markers) = 0 hits. No file traces its decisions to research findings, soul pieces, or design-extraction origins.
- **Impact:** MEDIUM -- Cannot trace why any design decision was made. Cannot verify soul compliance through the provenance chain. The design-system operates in isolation from the documented research pipeline.
- **Recommendation:** If design-system is intended to join the provenance pipeline, add finding IDs and provenance markers. If independent, document this as the intended status.

---

### OBS-017: [INCOMPLETE] -- Instrument Serif Undocumented Dependency
- **Type:** INCOMPLETE
- **Directory:** design-system (cross-directory)
- **Files:**
  - `design-system/src/styles/typography.css` (Google Fonts @import for Instrument Serif)
  - `design-extraction/typography-system/typography.css` (origin of Instrument Serif choice)
  - `design-extraction/font-research/FINAL-DECISION.md` (decision document)
- **Evidence:** `typography.css` imports Instrument Serif from Google Fonts. The choice of Instrument Serif was made in `design-extraction/font-research/FINAL-DECISION.md` (30/40 match score as the actual Sanrok font). No provenance marker in design-system acknowledges this flow.
- **Impact:** LOW functionally (the font works), but HIGH for traceability (the dependency is invisible).
- **Recommendation:** Add a CSS comment in typography.css citing the origin: `/* Font choice: Instrument Serif -- see design-extraction/font-research/FINAL-DECISION.md */`

---

## Cross-Directory Observations

---

### OBS-018: [ANOMALY] -- Accent Token Drift Between Tracking and Showcase
- **Type:** ANOMALY
- **Directory:** design-extraction + showcase (cross-directory)
- **Files:**
  - `design-extraction/component-system/perceptual-audit-v2/tracking/COLOR-TOKENS.md`
  - `docs-spa/app/showcase/DESIGN-SYSTEM/tokens/colors.md`
- **Evidence:**
  - `accent-amber`: `#C49052` (tracking) vs `#D97706` (showcase)
  - `accent-purple`: `#7B68EE` (tracking) vs `#7C3AED` (showcase)
  - `bg-info`: `#F0F7FF` (tracking) vs `#F5F8FA` (showcase)
  - `bg-tip`: `#F0F7F0` (tracking) vs `#F5FAF5` (showcase)
  - Core locked tokens (primary, background, text, border) are identical.
- **Impact:** LOW-MEDIUM -- The tracking sheets appear to be earlier working documents. The showcase adopted final synthesis values and then evolved some during exploration work. The drift is in secondary/semantic tokens, not core locked tokens.
- **Recommendation:** Document which file is authoritative for accent tokens. If showcase evolved these intentionally during DD work, update the tracking sheets to match or mark them as superseded for those specific tokens.

---

### OBS-019: [INCOMPLETE] -- Undocumented Typography System -> design-system Flow
- **Type:** INCOMPLETE
- **Directory:** design-extraction + design-system (cross-directory)
- **Files:**
  - `design-extraction/typography-system/` (origin)
  - `design-system/src/styles/tokens.css` (consumer)
  - `design-system/src/styles/typography.css` (consumer)
- **Evidence:** `tokens.css` uses `--font-display: 'Instrument Serif'` and `typography.css` imports it from Google Fonts. The Instrument Serif font was discovered and selected in `design-extraction/font-research/FINAL-DECISION.md`. No provenance marker exists in design-system acknowledging this dependency.
- **Impact:** MEDIUM -- The dependency exists but is invisible. Future work on the design-system typography might inadvertently change the font without consulting the research that selected it.
- **Recommendation:** Add provenance comment to design-system files. Add entry to any future design-system CLAUDE.md.

---

### OBS-020: [ANOMALY] -- design-system/tokens.css Primary Red vs Soul Primary
- **Type:** ANOMALY
- **Directory:** design-system + design-extraction (cross-directory)
- **Files:**
  - `design-system/src/styles/tokens.css`: `--sanrok-red: #FF0000`
  - `design-extraction/.../synthesis/DESIGN-TOKEN-SUMMARY.md`: `--color-primary: #E83025`
  - `docs-spa/app/showcase/DESIGN-SYSTEM/tokens/colors.md`: `--color-primary: #E83025`
- **Evidence:** design-system uses pure red `#FF0000`; the soul-locked value from perceptual audit is `#E83025` (a warmer, less saturated red). The design-system predates the T1 synthesis work and consumed the earlier typography-system values directly.
- **Impact:** CRITICAL if design-system is intended to be soul-compliant. The color difference is visually noticeable (pure red vs warm red).
- **Recommendation:** If design-system should follow soul, change `--sanrok-red` to `#E83025`. If independent, document the intentional divergence.

---

### OBS-021: [STALE] -- design-extraction/archive/perceptual-audit-phase-2.5 Lacks Supersession Marker
- **Type:** STALE
- **Directory:** design-extraction
- **Files:**
  - `design-extraction/component-system/archive/perceptual-audit-phase-2.5/` (7 files)
- **Evidence:** The MASTER-INDEX.md line 141 marks this as archived. However, the archive directory itself does not contain a visible "SUPERSEDED BY perceptual-audit-v2" marker. The 7 soul pieces defined here were refined to 5 in perceptual-audit-v2, but this evolution is not documented within the archive directory.
- **Impact:** LOW -- The content is in `archive/` which signals supersession. But an agent navigating directly to this directory would not know where the updated version lives.
- **Recommendation:** Add a brief SUPERSEDED.md or header note in each file pointing to `perceptual-audit-v2/synthesis/` as the authoritative replacement.

---

### OBS-022: [ANOMALY] -- Blended Theme Showcase Components Purpose Unclear
- **Type:** ANOMALY
- **Directory:** design-system
- **Files:**
  - `design-system/src/components/blend/BlendedThemeShowcase.tsx` (15,605 bytes)
  - `design-system/src/components/blended/index.tsx` (15,272 bytes)
  - `design-system/src/components/medieval-blend/MedievalBlendShowcase.tsx` (19,880 bytes)
- **Evidence:** Three large showcase components (15-20KB each) that define their own inline token objects and are self-contained pages rather than reusable building blocks. They contain hardcoded sample content (people names, lorem-style text). The README.md does not document the blended themes or these components.
- **Impact:** MEDIUM -- Unclear whether these are demo artifacts or production components. They are in `src/components/` (suggesting production) but behave like showcase pages.
- **Recommendation:** Human decision needed (see Q-004). Either move to a `demos/` or `showcase/` directory, or document them as production-ready showcase page components.

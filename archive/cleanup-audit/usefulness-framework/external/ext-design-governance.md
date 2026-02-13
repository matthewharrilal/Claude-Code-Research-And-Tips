# External Research: Design System Governance & File Lifecycle

**Research Date:** 2026-02-13
**Researcher:** External Framework Researcher
**Task:** Map industry design system governance practices to this project's architecture

---

## Executive Summary

Design system governance in 2026 centers on **versioning, deprecation protocols, and maintaining design-code synchronization**. The industry has converged on Architecture Decision Records (ADRs) for decision provenance, Semantic Versioning for release management, and structured component lifecycle stages from Proposed → Stable → Deprecated → Removed.

**Key Insight:** Mature design systems treat deprecation as **communication**, not deletion. Files persist with context markers while documentation guides migration.

---

## 1. Design Token Governance

### Industry Standard: Central Repository + Bi-directional Sync

[Design Tokens Governance](https://designtokens.substack.com/p/design-tokens-governance) identifies design-code drift as "the biggest governance headache in design systems." The solution:

- **Single source of truth:** Platform-agnostic token repository (JSON, YAML, or W3C standard format)
- **Bi-directional sync:** Figma ↔ Code repositories automatically propagate changes
- **Real-time collaboration:** Prevents manual coordination overhead
- **Central management:** Entire product suite consumes identical design values

Tools like **Knapsack** manage tokens, components, documentation, and permissions in one platform with emphasis on preventing drift at the source.

### Mapping to This Project

| Industry Practice | This Project Equivalent |
|-------------------|------------------------|
| Central token repository | `soul.md`, `tokens.md` (T1 synthesis locked) |
| Design-code sync | Skills internalize rules + CLAUDE.md enforces |
| Platform-agnostic format | Markdown decision records (human + LLM readable) |
| Dangerous divergences | `archive/tokens/` with wrong values (border-radius > 0) |

**Governance Gap:** This project has **zero automated validation** that skills match T1 synthesis. A skill could drift from soul.md without detection until human audit.

**Recommendation:** Create programmatic validators that compare skill SKILL.md Phase 0 gates against T1 synthesis values.

---

## 2. Deprecation Protocols

### Brad Frost: Atomic Design Maintenance

[Maintaining Design Systems](https://atomicdesign.bradfrost.com/chapter-5/) outlines deprecation rationale:

**Why Patterns Get Deprecated:**
- Discovered through use to be a terrible idea
- Industry has moved away from pattern (UX or technical reasons)
- Pattern sat unused by any application for ages

**Salesforce's Sass Deprecate Utility:**
- Flags patterns heading to chopping block
- Uses Sass variable flags and styling to warn users
- Recommends alternative patterns
- Prevents "pulling the rug out from under people"

**Key Principle:** "Creating a living design system means giving it attention and care in order for it to continue to thrive."

### Nathan Curtis: Visual Breaking Change Criteria

[Visual Breaking Change in Design Systems](https://medium.com/eightshapes-llc/visual-breaking-change-in-design-systems-1e9109fac9c4) defines what constitutes a breaking change:

**Breaking Change Categories:**
- **Color:** Changes to brand colors, semantic palette
- **Typography:** Font family, size, weight, line-height
- **Space:** Padding, margin, gap values

[Versioning Design Systems](https://medium.com/eightshapes-llc/versioning-design-systems-48cceb5ace4d) recommends **Semantic Versioning (SemVer):**

- **Major (X.0.0):** Breaking changes (e.g., soul violations, token changes)
- **Minor (0.X.0):** Backwards-compatible features (new components)
- **Patch (0.0.X):** Bug fixes, documentation updates

**Versioning Strategy:**
- **By Library:** Single version for entire system (simpler communication)
- **By Component:** Per-component versioning (more granular, more complex)

Most teams choose **by library** to avoid coordination overhead.

### Industry Standard: Component Lifecycle Stages

Multiple design systems ([USWDS](https://designsystem.digital.gov/components/lifecycle/), [Octopus](https://www.octopus.design/latest/components/component-lifecycle-Gu0lsT5z-Gu0lsT5z), [Halstack](https://developer.dxc.com/halstack/14/overview/component-lifecycle/)) use similar lifecycle stages:

1. **Proposed** → Under consideration, not for production
2. **Alpha** → Experimental, may change drastically
3. **Beta** → Stable API, gathering feedback
4. **Stable** → Production-ready, follows SemVer
5. **Deprecated** → Replaced by alternative, no new features
6. **Removed** → No longer available in new versions

**Deprecation Documentation Requirements** ([Octopus Deprecation Guidelines](https://www.octopus.design/latest/contribute/deprecation-guidelines-3DC02G6k-3DC02G6k)):
- **Date** of deprecation
- **Replacement** component name
- **Reason** for deprecation
- **Migration guide** with code examples
- **JSDoc tags:** `@deprecated` and `@deprecatedSince`

**Key Insight:** [Zeroheight guide](https://zeroheight.com/help/guides/deprecating-in-design-systems-when-its-time-to-say-goodbye/) emphasizes deprecation as **communication**: "As much about communicating change within and from the design system as it is a practical exercise."

### Mapping to This Project

| Industry Practice | This Project Equivalent |
|-------------------|------------------------|
| Component lifecycle stages | Supersession chains (4 chains: Typography, Soul, Anti-patterns, Perceptual) |
| Deprecated components remain in code | `archive/tokens/` persists with DANGEROUS markers |
| Migration documentation | No formal migration guides (gap) |
| Visual breaking change criteria | Soul compliance = 0 violations (locked) |
| Semantic versioning | No explicit versioning (all files in git history) |

**Supersession Chain Analysis:**

This project's **supersession chains** are implicitly versioned:

```
Typography: exploration → synthesis → lock → skill internalization
Soul: R5 rule → enforcement → audit (0 violations) → locked
Anti-patterns: discovery → documentation → prohibition
Perceptual: audit → findings → fixes → re-audit
```

Each chain represents a **major version increment** in design system maturity. The project is effectively at **v4.0** (post-skill-enrichment).

**Governance Gap:** No explicit deprecation dates or migration guides. `archive/tokens/` has DANGEROUS values but no structured "DO NOT USE" warnings in code comments.

**Recommendation:** Add JSDoc-style headers to archived files:
```css
/**
 * @deprecated Since Phase 2D (2026-01-15)
 * @reason Soul violations (border-radius > 0, drop-shadow)
 * @replacement See tokens.md for correct values
 * @warning DANGEROUS - Do not reference these tokens
 */
```

---

## 3. Architecture Decision Records (ADRs)

### Industry Standard: Decision Provenance

[Microsoft Azure ADR guide](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record) defines ADRs as capturing "a single architectural decision and its rationale."

**ADR Lifecycle:**
- **Proposed** → Initial draft, under review
- **Accepted** → Team consensus, now in effect
- **Superseded** → Replaced by newer decision, kept for history
- **Deprecated** → No longer recommended, migration path documented

**Minimum ADR Contents** ([AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)):
1. **Context:** Problem space, constraints, alternatives considered
2. **Decision:** Chosen approach and rationale
3. **Consequences:** Positive and negative outcomes

[Google Cloud ADR guide](https://docs.cloud.google.com/architecture/architecture-decision-records) emphasizes: "Start the ADR at the onset of a workload and **maintain it throughout the workload's lifespan**. The ADR serves as an **append-only log**."

**Key Properties:**
- ADRs are **immutable** (never edited, only superseded)
- ADRs are **lightweight** (not comprehensive documentation)
- ADRs are **append-only** (history preserved)
- [GitHub ADR repo](https://github.com/joelparkerhenderson/architecture-decision-record) notes: "ADR usage can be extended to design and other decisions"

### Mapping to This Project

| Industry Practice | This Project Equivalent |
|-------------------|------------------------|
| ADR append-only log | Git history + provenance headers |
| Context → Decision → Consequences | Research files → Synthesis (T1) → Findings |
| Superseded ADRs kept for history | Supersession chains (4 chains documented) |
| Immutable records | T1 synthesis = locked (soul.md, tokens.md) |
| Lightweight documentation | Decision records separate from implementation |

**This Project's ADR System:**

```
Phase 0 Research (Context)
    ↓
Phase 1 Synthesis (Decision)  ← T1 files (6 synthesis docs)
    ↓
Phase 2 Provenance (Consequences)  ← Threading headers link back
    ↓
Phase 3 Audits (Validation)  ← 0 violations = decision upheld
    ↓
Phase 4 Skills (Internalization)  ← Rules enforced automatically
```

Each **T1 synthesis file** is effectively an ADR:
- **soul.md** = ADR-001: "No border-radius, no box-shadow, no drop-shadow"
- **tokens.md** = ADR-002: "Typography scale, color palette, spacing rhythm"
- **characters.md** = ADR-003: "Content archetypes and editorial voice"
- **anti-patterns.md** = ADR-004: "Prohibited design choices"

**Governance Strength:** Git commits preserve entire decision history. Provenance headers create explicit parent→child links.

**Governance Gap:** No formal ADR index. A reader can't quickly see "all design decisions" without navigating the repo.

**Recommendation:** Create `DECISIONS.md` index:
```markdown
# Design System Decision Log

## Active Decisions (T1 Synthesis)
- [ADR-001: Soul Constraints](soul.md) - Locked, 0 violations
- [ADR-002: Design Tokens](tokens.md) - Locked
- [ADR-003: Content Archetypes](characters.md) - Locked
- [ADR-004: Anti-patterns](anti-patterns.md) - Locked

## Superseded Decisions
- Typography Chain: exploration → synthesis → lock (v1→v4)
- Soul Chain: R5 rule → enforcement → skill internalization
- Perceptual Chain: audit v1 → enrichment → audit v2

## Deprecated (Do Not Use)
- archive/tokens/ - Soul violations, wrong values
```

---

## 4. Documentation Lifecycle

### Industry Practice: Living Documentation

[Design System Documentation Best Practices](https://backlight.dev/blog/design-system-documentation-best-practices) emphasizes documentation as **co-equal with code:**

**Documentation Types:**
1. **Getting Started** → Onboarding, quick wins
2. **Component Docs** → API, usage guidelines, do/don't examples
3. **Foundations** → Tokens, principles, accessibility
4. **Patterns** → Complex compositions, recipes
5. **Migration Guides** → Deprecation paths

**Key Insight:** Documentation is **not static**. It evolves with the system.

[Primer Component Lifecycle](https://primer.style/contribute/component-lifecycle/) notes: "Components that do not meet requirements or are no longer needed are removed from active support, though they remain available in the code base but will not receive any updates."

This approach prevents **orphaned dependencies** while signaling "not recommended."

### Mapping to This Project

| Industry Practice | This Project Equivalent |
|-------------------|------------------------|
| Getting Started | No formal onboarding docs (gap) |
| Component Docs | HTML layouts = live documentation |
| Foundations | T1 synthesis files (soul.md, tokens.md) |
| Patterns | CD explorations, OD layouts |
| Migration Guides | No formal guides (gap) |
| Living documentation | Provenance threading (490 files) |

**Documentation Strengths:**
- **Provenance threading:** 490 files carry inline headers linking to T1 synthesis
- **Live examples:** 15 HTML layouts serve as executable documentation
- **Research transparency:** `_*-research/` directories preserve decision context

**Documentation Gaps:**
- No **onboarding guide** for new contributors
- No **migration guides** from deprecated patterns
- No **decision log index** (DECISIONS.md recommended above)
- No **contribution guidelines** (how to propose new patterns)

**Recommendation:** Create `CONTRIBUTING.md` with:
1. How to propose a design change
2. How to deprecate a pattern
3. How to update skills when T1 synthesis changes
4. How to add provenance headers to new files

---

## 5. Governance Framework Synthesis

### Three-Tier Governance Model (Industry Standard)

Combining practices from [Token Lifecycle Management](https://oneuptime.com/blog/post/2026-01-30-token-lifecycle-management/view), Brad Frost, Nathan Curtis, and ADR guides:

**Tier 1: Design Decisions (Immutable)**
- Architecture Decision Records (ADRs)
- Design tokens (color, typography, space)
- Brand guidelines, accessibility requirements
- **Status:** Locked, append-only, versioned

**Tier 2: Components & Patterns (Evolving)**
- UI components (atoms, molecules, organisms)
- Composition patterns (layouts, flows)
- **Status:** Lifecycle stages (Proposed → Stable → Deprecated → Removed)
- **Communication:** Migration guides, deprecation warnings

**Tier 3: Documentation & Examples (Dynamic)**
- Getting started guides
- Component usage examples
- Migration documentation
- **Status:** Continuously updated, reflects current system state

### Mapping to This Project

| Tier | This Project | Governance Status |
|------|--------------|-------------------|
| **Tier 1** | T1 synthesis (soul.md, tokens.md, characters.md, anti-patterns.md) | ✅ LOCKED (0 violations) |
| **Tier 2** | HTML layouts (OD, CD, AD), skills (perceptual-auditing, tension-composition) | ⚠️ EVOLVING (supersession chains active) |
| **Tier 3** | Research files, provenance headers, findings | ✅ ACTIVE (490 files threaded) |

**Critical Insight:** This project has **inverted the typical documentation pyramid:**

Typical design system:
```
Documentation (largest layer) ← most files
    ↓
Components (medium layer) ← versioned releases
    ↓
Tokens (smallest layer) ← rarely changes
```

This project:
```
Tokens (T1, locked) ← 6 files, ~200KB
    ↓
Components (HTML layouts) ← 15 files, evolving
    ↓
Documentation (research) ← 500+ files, append-only
```

This is **research-first governance:** decisions are exhaustively documented before implementation, creating an audit trail that typical design systems lack.

**Trade-off:** Higher meta-to-output ratio (2.6:1 per metacognition analysis), but **zero ambiguity** about design rationale.

---

## 6. File Lifecycle Decision Framework

### When to Keep vs. Archive vs. Delete

Based on [USWDS Component Lifecycle](https://designsystem.digital.gov/components/lifecycle/) and [Octopus Deprecation Guidelines](https://www.octopus.design/latest/contribute/deprecation-guidelines-3DC02G6k-3DC02G6k):

#### KEEP (Active Use)
- **Tier 1 Decisions:** soul.md, tokens.md, characters.md, anti-patterns.md
- **Tier 2 Components:** HTML layouts passing audits, active skills
- **Tier 3 Documentation:** Research files explaining current state
- **Provenance:** Files with threading headers linking to active T1

**Criteria:**
- Referenced by current implementation
- No superseding decision exists
- Passes current audit standards
- Part of active supersession chain

#### ARCHIVE (Historical Context)
- **Deprecated decisions:** Old token values (archive/tokens/)
- **Superseded research:** Early explorations before T1 synthesis
- **Failed experiments:** Patterns tried and rejected
- **Audit artifacts:** Screenshots, intermediate findings

**Criteria:**
- Superseded by newer decision (mark with @deprecated)
- Contains DANGEROUS values (border-radius > 0)
- Historical context useful for understanding evolution
- May be referenced in provenance chain as "why we don't do X"

**Required Markers:**
```
/**
 * @deprecated Since [Phase/Date]
 * @reason [Why superseded]
 * @replacement [Where to find current version]
 * @warning [Why this is dangerous if present]
 */
```

#### DELETE (Truly Orphaned)
- **Build artifacts:** .next/, node_modules/, playwright-report/
- **Duplicate files:** Identical content in multiple locations
- **Broken experiments:** No historical value, not referenced
- **Temporary scaffolding:** Planning files marked "delete after completion"

**Criteria:**
- Zero references in provenance chain
- Zero git history value
- Not part of supersession chain
- Can be regenerated from source

**High Bar:** Delete only when 100% certain no historical value.

### Mapping to This Project's Cleanup Audit

From MEMORY.md, the cleanup audit will classify ~500 research files. Apply this framework:

**T1 Synthesis → KEEP (Tier 1)**
- 6 synthesis files in `perceptual-audit-v2/synthesis/`
- soul.md, tokens.md, characters.md, anti-patterns.md
- **Status:** Locked, 0 violations

**Supersession Chains → KEEP (Tier 1/2)**
- Typography, Soul, Anti-patterns, Perceptual audit chains
- Each represents a major version increment
- **Status:** Active, referenced in skills

**archive/tokens/ → ARCHIVE with WARNINGS (Tier 2 Deprecated)**
- Contains DANGEROUS wrong values (border-radius > 0, 'Bebas Neue')
- Keep for historical "what not to do" reference
- **Action:** Add @deprecated headers with explicit warnings

**HTML Layouts → KEEP (Tier 2)**
- 15 layouts = live documentation
- Top 3 unchanged: Playbook Elevation Map, Gas Town Floor Plan, Boris Geological Core
- **Status:** Active, passing audits

**Research Files → Conditional**
- Files explaining **current** T1 synthesis → KEEP
- Files from **superseded** explorations → ARCHIVE (historical context)
- Files with **zero references** in provenance chain → DELETE (rare)

**Audit Artifacts → ARCHIVE**
- Screenshots (e.g., `_comprehensive-audit/visual/screenshots/`)
- Intermediate findings before final synthesis
- **Status:** Historical record, not actively referenced

---

## 7. Governance Gaps in This Project

### Gap 1: No Explicit Deprecation Protocol

**Industry Standard:** JSDoc @deprecated tags, migration guides, communication plan

**This Project:** archive/tokens/ has wrong values but no structured warnings in file headers

**Impact:** Medium — relying on oral tradition ("don't use archive/")

**Fix:** Add deprecation headers to all archived files (5-minute task per file)

### Gap 2: No Decision Log Index

**Industry Standard:** Central ADR index (DECISIONS.md) linking to all decisions

**This Project:** T1 synthesis scattered across perceptual-audit-v2/synthesis/

**Impact:** Low — provenance headers create implicit index, but not human-friendly

**Fix:** Create DECISIONS.md with categorized links (30-minute task)

### Gap 3: No Skill Validation Against T1

**Industry Standard:** Automated tests that tokens match design system spec

**This Project:** Skills internalize rules manually, no programmatic validation

**Impact:** High — skill drift from soul.md possible without detection

**Fix:** Programmatic validator comparing skill Phase 0 gates to T1 synthesis (4-hour task)

### Gap 4: No Contribution Guidelines

**Industry Standard:** CONTRIBUTING.md with deprecation protocol, proposal process

**This Project:** Implicit workflow from MEMORY.md agent team lessons

**Impact:** Low — single-user project, but scales poorly if team grows

**Fix:** Extract agent team lessons into CONTRIBUTING.md (1-hour task)

### Gap 5: No Formal Versioning

**Industry Standard:** SemVer releases (1.0.0 → 2.0.0 on breaking change)

**This Project:** Git commits + phase numbers (OD → AD → CD → Skills)

**Impact:** Low — git history sufficient for single project, but unclear for external consumers

**Fix:** Tag major milestones in git (e.g., `git tag v4.0-skill-enrichment`)

---

## 8. Recommendations for Cleanup Audit

### High Priority (Do First)

1. **Add @deprecated headers to archive/tokens/**
   - Prevents accidental use of DANGEROUS values
   - 5 minutes per file, ~10 files = 1 hour total

2. **Create skill validation script**
   - Parse SKILL.md Phase 0 gates
   - Compare to soul.md, tokens.md
   - Alert on drift
   - Prevents governance gap #3

3. **Tag git milestones**
   - `v1.0-od-complete`
   - `v2.0-ad-complete`
   - `v3.0-cd-complete`
   - `v4.0-skill-enrichment`
   - Creates explicit versioning

### Medium Priority (Do Second)

4. **Create DECISIONS.md index**
   - List all T1 synthesis files
   - Show supersession chains
   - Link to deprecated patterns in archive/

5. **Write migration guides for deprecated patterns**
   - archive/tokens/ → tokens.md
   - Old typography → current scale
   - 30 minutes per deprecated pattern

### Low Priority (Nice to Have)

6. **Extract CONTRIBUTING.md from MEMORY.md**
   - Agent team lessons → contributor guidelines
   - How to propose changes
   - Deprecation protocol

7. **Create onboarding guide**
   - "Start here" for new contributors
   - Link to T1 synthesis
   - Explain provenance threading

---

## 9. Final Mapping: Industry → This Project

| Industry Concept | This Project Implementation | Governance Status |
|------------------|----------------------------|-------------------|
| **Central token repository** | T1 synthesis (soul.md, tokens.md) | ✅ LOCKED |
| **Design-code sync** | Skills + CLAUDE.md enforcement | ⚠️ NO VALIDATION |
| **Component lifecycle stages** | Supersession chains (4 chains) | ✅ ACTIVE |
| **Deprecation warnings** | archive/tokens/ exists | ❌ NO HEADERS |
| **Migration guides** | None | ❌ GAP |
| **Architecture Decision Records** | Research files → T1 synthesis | ✅ IMPLICIT |
| **ADR index** | None | ❌ GAP |
| **Semantic versioning** | Git commits + phase numbers | ⚠️ INFORMAL |
| **Living documentation** | Provenance threading (490 files) | ✅ ACTIVE |
| **Contribution guidelines** | MEMORY.md agent lessons | ⚠️ IMPLICIT |

**Overall Governance Maturity: 7/10**

**Strengths:**
- Research-first governance (exhaustive decision context)
- Provenance threading (490 files linked to T1)
- Soul compliance (0 violations, locked)
- Append-only research log (git history)

**Weaknesses:**
- No automated skill validation
- No formal deprecation headers
- No centralized decision index
- No migration guides

**Key Insight:** This project has **exceptional decision provenance** (better than most design systems) but **weak operational governance** (no automation, no deprecation protocol).

---

## 10. Usefulness Framework Implications

### For File Lifecycle Management

**KEEP files that:**
- Are part of T1 synthesis (Tier 1 locked)
- Explain active supersession chains (historical context)
- Referenced in provenance threading (490 files)
- Part of current HTML layouts (15 files)

**ARCHIVE files that:**
- Superseded by T1 synthesis (e.g., early typography explorations)
- Contain deprecated patterns (archive/tokens/)
- Audit artifacts (screenshots, intermediate findings)
- Have historical value but not actively referenced

**DELETE files that:**
- Build artifacts (.next/, node_modules/)
- Zero references in provenance chain
- Duplicates of existing content
- No historical value

**Critical Rule:** When in doubt, ARCHIVE. The cost of keeping a 50KB markdown file is ~$0. The cost of losing decision context is hours of re-research.

**Exception:** archive/tokens/ must stay ARCHIVED with @deprecated headers because it contains DANGEROUS values that must not be used but serve as "what not to do" examples.

---

## Sources

- [Design Tokens Governance](https://designtokens.substack.com/p/design-tokens-governance)
- [Maintaining Design Systems | Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-5/)
- [Versioning Design Systems | Nathan Curtis](https://medium.com/eightshapes-llc/versioning-design-systems-48cceb5ace4d)
- [Visual Breaking Change in Design Systems | Nathan Curtis](https://medium.com/eightshapes-llc/visual-breaking-change-in-design-systems-1e9109fac9c4)
- [USWDS Component Lifecycle](https://designsystem.digital.gov/components/lifecycle/)
- [Octopus Deprecation Guidelines](https://www.octopus.design/latest/contribute/deprecation-guidelines-3DC02G6k-3DC02G6k)
- [Deprecating in Design Systems | Zeroheight](https://zeroheight.com/help/guides/deprecating-in-design-systems-when-its-time-to-say-goodbye/)
- [Microsoft Azure ADR Guide](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)
- [AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
- [Google Cloud Architecture Decision Records](https://docs.cloud.google.com/architecture/architecture-decision-records)
- [GitHub Architecture Decision Record Examples](https://github.com/joelparkerhenderson/architecture-decision-record)
- [Design System Documentation Best Practices](https://backlight.dev/blog/design-system-documentation-best-practices)
- [Primer Component Lifecycle](https://primer.style/contribute/component-lifecycle/)
- [Token Lifecycle Management](https://oneuptime.com/blog/post/2026-01-30-token-lifecycle-management/view)

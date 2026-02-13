# External Information Architecture Frameworks for File Usefulness Assessment

**Research Date**: 2026-02-13
**Researcher**: External Framework Researcher
**Task**: Map IA theory to this project's specific usefulness criteria

---

## Executive Summary

Professional information architecture practitioners use three core frameworks for content auditing at scale: **ROT Analysis** (Redundant, Outdated, Trivial), **Content Lifecycle Management** (CLM), and **Enterprise Content Audit Methodology**. These frameworks provide structured criteria for keep/delete decisions, lifecycle stage assessment, and value decay measurement.

**Critical Mapping**: This project's 2.6:1 meta-to-output ratio and synthesis absorption pattern creates a unique usefulness challenge—the traditional ROT framework must be adapted to account for **provenance value** (files that thread knowledge) vs **direct value** (files that ARE the product).

---

## 1. ROT Analysis Framework

### 1.1 Core Definition

ROT stands for **Redundant, Outdated, and Trivial** content. A ROT analysis is a content audit with action plans based on improving content workflows and performance.

**Three Categories**:
- **Redundant**: Duplicate content/data stored internally or published externally
- **Outdated**: Content no longer accurate or useful to end user
- **Trivial**: Information not valuable or necessary to store

**Source**: [Smashing Magazine - ROT Content](https://www.smashingmagazine.com/2015/06/dealing-with-redundant-out-of-date-trivial-rot-content/), [Parse.ly - ROT Analysis](https://www.parse.ly/what-is-a-rot-analysis/), [Innovatia - What is ROT Content](https://www.innovatia.net/blog/what-is-rot-content-and-why-can-it-kill-your-business-slowly)

### 1.2 Implementation Process

**Standard ROT Process**:

1. **Gather stakeholders** with content authority and outline goals (e.g., improve performance, increase lead generation)
2. **Create content tracking spreadsheet** with identifiers, metrics, and action items for each piece
3. **Establish removal/update plan** for ROT data, SEO optimization, and content repurposing
4. **Create inventory** and conduct periodic audits (recommended quarterly)

**Source**: [Annertech - ROT Content Analysis](https://www.annertech.com/blog/rot-content-analysis-has-so-many-benefits-heres-how-get-started), [Komprise - ROT Data Management](https://www.komprise.com/glossary_terms/rot-data/)

### 1.3 ROT Benefits

- **Consolidate, update, or remove** content for fresher, more relevant user experience
- **Insight into deeper problems** and patterns across site
- **Improved web performance** and overall site quality
- **Better resource allocation** by removing maintenance burden of trivial content

**Source**: [USDA Content Plays](https://www.usda.gov/about-usda/policies-and-links/digital/digital-strategy/content/content-plays), [ManageEngine - ROT Data](https://www.manageengine.com/data-security/what-is/rot-data.html)

### 1.4 Mapping to This Project

**Direct Application**:

| ROT Category | This Project's Context | Example |
|--------------|------------------------|---------|
| **Redundant** | Agent teams writing 5-30 files → synthesis absorbs | Multiple research reports covering same findings, pre-synthesis explorations |
| **Outdated** | DD→OD→AD→CD phase progression, supersession chains | DD-era explorations superseded by OD synthesis, early convention drafts |
| **Trivial** | 2.6:1 meta-to-output ratio, scratchpad artifacts | Build logs, intermediate agent reports, temporary manifests |

**Critical Nuance**: Traditional ROT assumes all content is **direct value** (user-facing). This project has **provenance value**—734 threaded files create knowledge lineage. Redundant files may still be **necessary for threading integrity**.

**Adapted ROT for Provenance Projects**:
- **Redundant + Unthreaded** = DELETE candidate
- **Redundant + Threaded** = ARCHIVE candidate (preserve chain, remove from working set)
- **Outdated + Superseded** = ARCHIVE if provenance intact, DELETE if broken chain
- **Trivial + No Inbound References** = DELETE
- **Trivial + Threaded** = ARCHIVE (threading itself provides value)

---

## 2. Content Lifecycle Management Framework

### 2.1 Core Concept

**Content Lifecycle Management (CLM)** guides content throughout its lifespan from development and publishing to archiving, enabling streamlined production, better resource management, and optimization for reuse/repurposing.

**Key Principle**: Data declines in value at different rates—some types retain value much longer than others. This implies a **content half-life** concept where usefulness diminishes over time.

**Source**: [Aprimo - Content Lifecycle Management](https://www.aprimo.com/blog/content-lifecycle-management), [Hyland - Information Lifecycle](https://www.hyland.com/en/resources/articles/information-lifecycle), [TechTarget - Information Lifecycle Management](https://www.techtarget.com/searchstorage/definition/information-life-cycle-management)

### 2.2 Lifecycle Stages

**Standard 7-Stage Enterprise Content Lifecycle**:

1. **Creation/Acquisition** - Content originates
2. **Capture** - Content enters system
3. **Classification** - Content tagged and categorized
4. **Storage** - Content retained in appropriate location
5. **Use/Reuse** - Content actively serves purpose
6. **Archive** - Content moves to long-term storage
7. **Deletion/Disposition** - Content permanently removed

**Source**: [TechTarget - 7 Stages of ECM](https://www.techtarget.com/searchcontentmanagement/tip/7-key-stages-of-enterprise-content-lifecycle-management), [Optimizely - Content Lifecycle](https://www.optimizely.com/optimization-glossary/content-lifecycle-management/)

### 2.3 Content Half-Life (Implied)

While "content half-life" isn't explicitly defined in current literature, the CLM framework emphasizes **value decay over time**:

- Information lifecycle management (ILM) accounts for data declining in value at different rates
- Strategic approach involves applying policies across lifecycle to optimize compliance and efficiency
- Content that becomes obsolete moves to deletion stage

**Operational Definition**: Content half-life = time period after which content's usefulness/relevance drops by 50%.

**Source**: [Concentric - ILM 2026 Guide](https://concentric.ai/2025-guide-to-modern-information-lifecycle-management/), [Bynder - 5 Stages CLM](https://www.bynder.com/en/blog/5-stages-content-lifecycle-management/)

### 2.4 Mapping to This Project

**This Project's Lifecycle Stages**:

| Standard Stage | This Project Equivalent | Current State |
|----------------|-------------------------|---------------|
| **Creation** | Agent team execution (DD→OD→AD→CD phases) | Complete (13 agent teams executed) |
| **Capture** | File writes to repo, provenance headers | Complete (734 threaded files) |
| **Classification** | Phase tags (DD/OD/AD/CD), finding IDs, tier system | Complete (T1/T2/T3/T4 hierarchy) |
| **Storage** | Git repository, `_*` directories for research | Active (340MB total, ~20MB product) |
| **Use/Reuse** | Synthesis absorption, cross-references | Ongoing (synthesis files actively reference) |
| **Archive** | ??? | **NOT DEFINED** |
| **Deletion** | ??? | **NOT DEFINED** |

**Critical Gap**: This project has NO defined archive or deletion stages. Content accumulates indefinitely with no lifecycle exit strategy.

**Content Half-Life Analysis**:

| Content Type | Half-Life Estimate | Justification |
|--------------|-------------------|---------------|
| **T1 Synthesis** | Infinite (or project lifespan) | Crown jewels, constantly referenced |
| **T2 Phase Reports** | Long (1-2 years) | Historical record of phase execution |
| **T3 Research Files** | Medium (3-6 months) | Absorbed into synthesis, provenance value only |
| **T4 Scratchpad** | Short (days to weeks) | Temporary artifacts, zero post-phase value |
| **HTML Layouts** | Variable | Product files = infinite; exploration files = medium |

**Recommendation**: Define **archive threshold** (6 months post-synthesis) and **deletion threshold** (12 months post-archive, or immediately for T4 scratchpad after phase commit).

---

## 3. Enterprise Content Audit Methodology

### 3.1 Core Framework

Enterprise content auditing at scale requires structured methodology to avoid "scattered taxonomies, brittle schemas, and slow manual reviews" that cause audits to "drag on and miss issues."

**Key Steps**:

1. **Define scope and objectives** - Which pages/elements to include, criteria/metrics to use, questions to answer
2. **Create unified inventory** - List every piece of content at page or asset level with specific characteristics
3. **Analyze and evaluate** - Use qualitative/quantitative methods to assess quality, relevance, performance, usability, accessibility
4. **Apply status decisions** - Delete, rewrite, update, keep, or identify content gaps

**Source**: [A List Apart - Everyday IA](https://alistapart.com/article/everyday-information-architecture-excerpt/), [NN/g - Content Audits](https://www.nngroup.com/articles/content-audits/), [Enterprise CMS - Audit Methodologies](https://www.enterprisecms.org/guides/enterprise-content-audit-methodologies)

### 3.2 Keep/Delete Criteria

Professional IA practitioners use **evaluation criteria** combining:

- **Industry best practices** for web writing and content formats
- **Organization's content standards**
- **User needs, goals, and performance metrics**
- **Audience, task, and needs specification**

**Status Categories** (from audit spreadsheets):
- **Keep** - Content meets standards, actively serves user needs
- **Update** - Content valuable but needs refresh
- **Rewrite** - Content concept valuable but execution poor
- **Delete** - Content redundant, outdated, or trivial
- **Gap** - Missing content identified for creation

**Source**: [Medium - Website Content Audit](https://medium.com/@sarawang_39831/website-content-audit-101-68cd572f1925), [Thoughtfarmer - Intranet Audits](https://www.thoughtfarmer.com/blog/intranet-content-audit/), [LinkedIn - Content Audits for IA](https://www.linkedin.com/advice/3/how-can-you-use-content-audits-inform-your-cmeac)

### 3.3 Scaling Strategies

**For large-scale audits**:

- **Start small mindset** - Break effort into manageable increments
- **Prioritize high-impact subsets** - Focus on most frequently accessed or top-task-supporting content
- **Staged rollouts** - Enterprise audits roll out by market, product line, or risk class
- **Ongoing hygiene** - Audit is most valuable when it becomes continuous practice, not one-time event

**Source**: [ClickUp - Content Audit Templates](https://clickup.com/blog/content-audit/), [Seotistics - 8-Step Framework](https://seotistics.com/content-auditing-framework/), [Profiletree - Content Audit Framework](https://profiletree.com/content-audit-framework/)

### 3.4 Cross-Functional Engagement

**Critical Success Factor**: Involve stakeholders, authors, designers, and user researchers early, aligning on appropriate audit criteria.

**Modern Platform Approach**: Treat content as structured data for faster discovery and consistent evaluation (vs traditional CMS scattered taxonomies).

**Source**: [Contentful - Audit Logging](https://www.contentful.com/blog/audit-logging-for-enterprise-scale-content-platforms/), [Atlassian - UX Heuristics](https://medium.com/designing-atlassian/taming-the-content-monster-e8be5f937e72)

### 3.5 Mapping to This Project

**This Project's Audit Scope**:

| Scope Dimension | This Project's Value |
|-----------------|---------------------|
| **Total Content** | 910 source files (36 design-system + 515 design-extraction + 359 docs-spa) |
| **Threaded Content** | 734 files with provenance headers |
| **Junk Already Identified** | 9,424 files (.next, node_modules, etc.) |
| **Working Set Size** | ~340MB total, ~20MB actual product |
| **Phase Progression** | 4 major phases (DD→OD→AD→CD) |

**Start-Small Strategy Application**:

Instead of auditing all 910 files, prioritize:

1. **T4 Scratchpad** (~150 files estimated) - Highest ROT probability
2. **Superseded Exploration Files** (DD-era files post-OD synthesis) - Clear outdated candidates
3. **Unthreaded Research Files** (910 - 734 = 176 files) - No provenance value
4. **Archive/ directories** - Already flagged for potential deletion

**Status Categories for This Project**:

| Standard Status | This Project Adaptation | Example |
|-----------------|------------------------|---------|
| **Keep** | KEEP - Active product or T1/T2 synthesis | 6 T1 synthesis files, CD-006.html |
| **Update** | UPDATE - Needs provenance header or metadata refresh | Files missing threading, stale timestamps |
| **Rewrite** | N/A - This project doesn't rewrite, it supersedes | (Not applicable) |
| **Delete** | DELETE - Scratchpad, duplicates, broken chains | /tmp artifacts, abandoned experiments |
| **Gap** | N/A - Audit focuses on removal, not creation | (Not applicable) |
| **Archive** | **ARCHIVE** - Provenance value only, remove from working set | Phase 1 research post-synthesis |

**New Category Required**: ARCHIVE status doesn't exist in standard framework but is critical for this project's provenance chain preservation.

---

## 4. Design System Specific Frameworks

### 4.1 Design System Audit Methodology

Design system audits focus on **design inventory** as the most time-consuming and important step, gathering every UI element that makes up the system.

**Audit Scope**:
- Design policies
- Pattern library
- Component library
- Branding guidelines
- Accessibility policies

**Key Steps**:

1. **Documentation** - Maintain detailed records of changes, rationales, and future guidelines
2. **Categorization** - Group UI elements/patterns by design system categories (buttons, icons, forms)
3. **Cross-functional Engagement** - Teams and user feedback ensure comprehensive audit
4. **Accessibility Analysis** - Review accessibility policies and confirm correct application

**Source**: [DOOR3 - Design System Audit](https://www.door3.com/blog/design-system-audit), [Ramotion - Design System Audit](https://www.ramotion.com/blog/design-system-audit/), [Figma - How to Audit](https://www.figma.com/community/file/1379397068370508866/how-to-do-a-design-system-audit)

### 4.2 Design System Maintenance

**Ongoing Hygiene**: Design system maintenance requires keeping the system up to date through continuous audit cycles, not one-time reviews.

**Documentation Focus**: Every aspect of the system must be documented, including:
- Changes made during audit
- Rationales behind decisions
- Guidelines for future modifications

**Source**: [UXPin - Design System Maintenance](https://www.uxpin.com/studio/blog/design-system-maintenance/), [Aufait UX - Design System Audit Guide](https://www.aufaitux.com/blog/ui-ux-design-system-audit/)

### 4.3 Mapping to This Project

**This Project's Design System Context**:

- **734 threaded files** create formal provenance chain (not typical design system documentation)
- **4 supersession chains** (Typography, Soul, Anti-patterns, Perceptual audit)
- **T1 synthesis files** (6 files) function as "crown jewels" equivalent to pattern library
- **HTML layouts** (DD-001 through CD-006) are component library equivalents
- **Phase progression** (DD→OD→AD→CD) is iterative refinement, not static documentation

**Key Difference**: Standard design systems audit UI components; this project audits **knowledge architecture** where provenance threading IS the organizing principle.

**Design System Retention Policy**:

While search results lack specific retention policies for design documentation, general audit log retention principles apply:

- **Establish clear guidelines** for what to retain, how long, under what conditions
- **Audit logs** typically retained for compliance periods (varies by industry)
- **Documentation** retained indefinitely if actively referenced

**This Project's Adaptation**:

| Design System Element | This Project Equivalent | Retention Policy |
|-----------------------|------------------------|------------------|
| **Pattern Library** | T1 Synthesis | KEEP indefinitely |
| **Component Library** | HTML layouts (product) | KEEP indefinitely |
| **Design Tokens** | convention-spec, SOUL.md | KEEP indefinitely |
| **Documentation** | Phase reports (T2) | ARCHIVE after 12 months |
| **Audit Records** | Agent team reports (T3) | ARCHIVE after synthesis, DELETE after 12 months |
| **Build Logs** | Scratchpad (T4) | DELETE immediately post-commit |

---

## 5. Defining "Useful" for This Project

### 5.1 Multi-Dimensional Usefulness Model

Based on external IA frameworks, "usefulness" is NOT binary—it's multi-dimensional across:

1. **Direct Value** - File directly serves end user (product HTML, synthesis docs)
2. **Provenance Value** - File threads knowledge chain (research reports, phase archives)
3. **Reference Value** - File actively cited by other files (finding IDs, cross-refs)
4. **Temporal Value** - File's relevance tied to lifecycle stage (current phase vs superseded)
5. **Volume Value** - File's contribution to storage/cognitive load (340MB total, 2.6:1 meta ratio)

### 5.2 Usefulness Decision Matrix

| Dimension | High | Medium | Low | Action |
|-----------|------|--------|-----|--------|
| **Direct** | Product files, T1 synthesis | Phase reports, specs | Scratchpad, duplicates | KEEP / ARCHIVE / DELETE |
| **Provenance** | Threaded research, cited reports | Threaded but unread | Unthreaded | KEEP / ARCHIVE / DELETE |
| **Reference** | >5 inbound citations | 1-5 inbound citations | 0 inbound citations | KEEP / ARCHIVE / DELETE |
| **Temporal** | Current phase, active | 1-2 phases old | 3+ phases old or superseded | KEEP / ARCHIVE / DELETE |
| **Volume** | <1MB, essential | 1-10MB, valuable | >10MB, redundant | KEEP / ARCHIVE / DELETE |

**Decision Logic**:

```
IF (Direct = High) OR (Provenance = High AND Reference > 0)
  THEN KEEP

ELSE IF (Provenance = Medium OR High) AND (Temporal = Low)
  THEN ARCHIVE

ELSE IF (Reference = Low) AND (Temporal = Low) AND (Direct = Low)
  THEN DELETE

ELSE
  THEN MANUAL_REVIEW
```

### 5.3 ROT Analysis Adapted for Provenance

**Redundant**:
- **Traditional**: Exact duplicates or near-duplicates
- **This Project**: Files superseded by synthesis OR files with identical findings across multiple agent reports
- **Test**: Compare file hashes, finding IDs, synthesis absorption status

**Outdated**:
- **Traditional**: Information no longer accurate
- **This Project**: Files from superseded phases (DD-era post-OD synthesis) OR files with SUPERSEDED markers
- **Test**: Check phase progression, supersession chain, timestamp vs current phase

**Trivial**:
- **Traditional**: Information not valuable to store
- **This Project**: Scratchpad artifacts, build logs, temporary manifests, agent coordination messages
- **Test**: File in `_*/scratchpad/` OR `_*/tmp/` OR zero inbound references AND Tier 4 classification

### 5.4 Content Half-Life Thresholds

Based on CLM framework and this project's phase velocity:

| Content Type | Creation → Archive | Archive → Delete | Total Lifespan |
|--------------|-------------------|------------------|----------------|
| **T1 Synthesis** | Never | Never | Infinite |
| **T2 Phase Reports** | 12 months | 24 months | 36 months |
| **T3 Research (threaded)** | 6 months | 18 months | 24 months |
| **T3 Research (unthreaded)** | Immediate | 6 months | 6 months |
| **T4 Scratchpad** | Immediate | 1 month | 1 month |
| **HTML Layouts (product)** | Never | Never | Infinite |
| **HTML Layouts (exploration)** | 12 months | 24 months | 36 months |

**Rationale**:
- **6 months post-synthesis** = Time for cross-references to stabilize
- **12 months archive window** = Sufficient for historical lookup without permanent storage burden
- **Immediate scratchpad deletion** = Zero value retention after phase commit

---

## 6. Implementation Roadmap for This Project

### 6.1 Phase 1: Inventory and Classification (Week 1)

**Based on Enterprise Audit Methodology "start small" principle**:

1. **Scope**: T4 scratchpad directories only (~150 files estimated)
2. **Create tracking spreadsheet** with columns:
   - File path
   - Tier (T1/T2/T3/T4)
   - Phase (DD/OD/AD/CD/None)
   - Threaded (Y/N)
   - Inbound references count
   - Last modified date
   - ROT classification (R/O/T/None)
   - Status (KEEP/ARCHIVE/DELETE)
3. **Automated inventory** using `find` + metadata extraction
4. **Manual review** of edge cases (files in multiple categories)

### 6.2 Phase 2: ROT Analysis (Week 2)

**Apply adapted ROT framework**:

1. **Redundant Detection**:
   - Hash-based duplicate detection
   - Finding ID overlap analysis (same findings across multiple reports)
   - Synthesis absorption check (research reports fully absorbed?)

2. **Outdated Detection**:
   - SUPERSEDED marker scan
   - Phase progression check (DD-era files post-OD synthesis)
   - Timestamp vs current phase comparison

3. **Trivial Detection**:
   - Zero inbound reference check
   - Tier 4 classification confirmation
   - Directory pattern match (`_*/scratchpad/`, `_*/tmp/`)

### 6.3 Phase 3: Staged Deletion (Week 3)

**Following "staged rollouts" principle**:

1. **Wave 1**: DELETE T4 scratchpad with 0 references (highest confidence)
2. **Wave 2**: ARCHIVE T3 unthreaded research (preserve for 6 months)
3. **Wave 3**: ARCHIVE superseded phase files (DD-era explorations)
4. **Wave 4**: Manual review borderline cases

**Verification Gate**: Before each wave, verify no broken provenance chains.

### 6.4 Phase 4: Ongoing Hygiene (Continuous)

**Convert to "audit as ongoing hygiene"**:

1. **Post-phase cleanup protocol**: DELETE scratchpad within 7 days of phase commit
2. **Quarterly ROT audit**: Every 3 months, scan for new outdated/trivial content
3. **Archive automation**: Move files to `archive/` when half-life threshold crossed
4. **Provenance integrity check**: Monthly scan for broken threading chains

---

## 7. Key Takeaways

### 7.1 IA Theory Contributions

External IA frameworks provide **structured criteria** this project currently lacks:

1. **ROT Analysis** → Objective keep/delete criteria (vs subjective "feels useful")
2. **Content Lifecycle** → Stage-based retention policies (vs indefinite accumulation)
3. **Enterprise Methodology** → Start-small, staged rollout (vs all-or-nothing audit)
4. **Design System Maintenance** → Ongoing hygiene (vs one-time cleanup)

### 7.2 Critical Adaptations Required

Standard IA frameworks assume **direct value content** (user-facing). This project requires:

1. **Provenance dimension** added to ROT analysis (threading creates retention value)
2. **Multi-tier classification** (T1/T2/T3/T4) for differential retention policies
3. **Synthesis absorption tracking** (research value drops post-synthesis)
4. **Phase progression awareness** (DD→OD→AD→CD creates temporal outdatedness)

### 7.3 "Useful" Defined for This Project

**File is USEFUL if**:

```
(Direct_Value = High)
  OR (Provenance_Value = High AND Inbound_References > 0)
  OR (Temporal_Value = High AND Tier ≤ 2)
  OR (Reference_Value = High)
```

**File is ARCHIVE candidate if**:

```
(Provenance_Value = Medium OR High)
  AND (Temporal_Value = Low)
  AND (Direct_Value = Low)
```

**File is DELETE candidate if**:

```
(ROT_Classification = R OR O OR T)
  AND (Inbound_References = 0)
  AND (Provenance_Value = Low)
```

---

## Sources

### ROT Analysis
- [Smashing Magazine - Dealing With ROT Content](https://www.smashingmagazine.com/2015/06/dealing-with-redundant-out-of-date-trivial-rot-content/)
- [Parse.ly - What is a ROT Analysis](https://www.parse.ly/what-is-a-rot-analysis/)
- [Innovatia - What is ROT Content](https://www.innovatia.net/blog/what-is-rot-content-and-why-can-it-kill-your-business-slowly)
- [Annertech - ROT Content Analysis Benefits](https://www.annertech.com/blog/rot-content-analysis-has-so-many-benefits-heres-how-get-started)
- [Komprise - ROT Data Management](https://www.komprise.com/glossary_terms/rot-data/)
- [USDA - Content Plays](https://www.usda.gov/about-usda/policies-and-links/digital/digital-strategy/content/content-plays)
- [ManageEngine - ROT Data Definition](https://www.manageengine.com/data-security/what-is/rot-data.html)

### Content Lifecycle Management
- [Aprimo - Content Lifecycle Management](https://www.aprimo.com/blog/content-lifecycle-management)
- [Hyland - Information Lifecycle](https://www.hyland.com/en/resources/articles/information-lifecycle)
- [TechTarget - Information Lifecycle Management](https://www.techtarget.com/searchstorage/definition/information-life-cycle-management)
- [TechTarget - 7 Stages of ECM](https://www.techtarget.com/searchcontentmanagement/tip/7-key-stages-of-enterprise-content-lifecycle-management)
- [Optimizely - Content Lifecycle Management](https://www.optimizely.com/optimization-glossary/content-lifecycle-management/)
- [Concentric - ILM 2026 Guide](https://concentric.ai/2025-guide-to-modern-information-lifecycle-management/)
- [Bynder - 5 Stages of CLM](https://www.bynder.com/en/blog/5-stages-content-lifecycle-management/)

### Enterprise Content Audit
- [A List Apart - Everyday Information Architecture](https://alistapart.com/article/everyday-information-architecture-excerpt/)
- [Nielsen Norman Group - Content Audits 101](https://www.nngroup.com/articles/content-audits/)
- [Enterprise CMS - Audit Methodologies](https://www.enterprisecms.org/guides/enterprise-content-audit-methodologies)
- [Medium - Website Content Audit 101](https://medium.com/@sarawang_39831/website-content-audit-101-68cd572f1925)
- [Thoughtfarmer - Intranet Content Audits](https://www.thoughtfarmer.com/blog/intranet-content-audit/)
- [LinkedIn - Content Audits for IA](https://www.linkedin.com/advice/3/how-can-you-use-content-audits-inform-your-cmeac)
- [ClickUp - Content Audit with Templates](https://clickup.com/blog/content-audit/)
- [Seotistics - 8-Step Auditing Framework](https://seotistics.com/content-auditing-framework/)
- [Profiletree - Content Audit Framework](https://profiletree.com/content-audit-framework/)
- [Contentful - Audit Logging at Scale](https://www.contentful.com/blog/audit-logging-for-enterprise-scale-content-platforms/)
- [Atlassian - Taming Content Monster](https://medium.com/designing-atlassian/taming-the-content-monster-e8be5f937e72)

### Design System Audits
- [DOOR3 - Design System Audit](https://www.door3.com/blog/design-system-audit)
- [Ramotion - Design System Audit in Simple Steps](https://www.ramotion.com/blog/design-system-audit/)
- [Figma - How to Do a Design System Audit](https://www.figma.com/community/file/1379397068370508866/how-to-do-a-design-system-audit)
- [UXPin - Design System Maintenance](https://www.uxpin.com/studio/blog/design-system-maintenance/)
- [Aufait UX - Ultimate Design System Audit Guide](https://www.aufaitux.com/blog/ui-ux-design-system-audit/)

---

**End of Research Report**

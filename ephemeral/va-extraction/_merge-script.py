#!/usr/bin/env python3
"""
Merge classify-by-layer.md and classify-by-agent.md into a unified registry.
"""
import re
import sys
from collections import defaultdict

BASE = "/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/va-extraction"

# Manual agent assignments for items present in layer file but missing from agent file.
# These are section headers, source refs, or items consolidated into batches by the agent classifier.
# Each is manually assigned based on content analysis.
MANUAL_AGENT_OVERRIDES = {
    # extract-d06-d08.md items 92-101: Items past the D8-I86-91 batch in agent file
    ("extract-d06-d08.md", "ITEM 92"): {"agent": "ORCHESTRATOR", "type": "DECISION", "reason": "Pipeline v3 dependency for top 4 dims -> orchestrator routing decision"},
    ("extract-d06-d08.md", "ITEM 94"): {"agent": "ORCHESTRATOR", "type": "WARNING", "reason": "Diagnostic about builder deploying as checklist -> pipeline-level observation"},
    ("extract-d06-d08.md", "ITEM 96"): {"agent": "TC-ASSEMBLER", "type": "FILE_REF", "reason": "Dispositional recipe file reference -> TC assembler includes in brief"},
    ("extract-d06-d08.md", "ITEM 97"): {"agent": "ORCHESTRATOR", "type": "FILE_REF", "reason": "Activation architecture reference -> orchestrator designs this"},
    ("extract-d06-d08.md", "ITEM 98"): {"agent": "ORCHESTRATOR", "type": "DECISION", "reason": "COMPOSING mode gatekeeper -> orchestrator enforces builder mode"},
    ("extract-d06-d08.md", "ITEM 99"): {"agent": "ORCHESTRATOR", "type": "RECOMMENDATION", "reason": "Fix-type classification (prompt-fixable) -> orchestrator decides fix approach"},
    ("extract-d06-d08.md", "ITEM 100"): {"agent": "ORCHESTRATOR", "type": "RECOMMENDATION", "reason": "Fix-type classification (architecture-needed) -> orchestrator decides fix approach"},
    ("extract-d06-d08.md", "ITEM 101"): {"agent": "BUILDER", "type": "VALUE", "reason": "4 CSS-fixable dimensions -> builder must implement these CSS fixes"},
    # extract-d15-d17.md: Section headers not individually listed
    ("extract-d15-d17.md", "ITEM 28"): {"agent": "ORCHESTRATOR", "type": "DECISION", "reason": "Section header about revision quality degrading composition -> orchestrator policy"},
    ("extract-d15-d17.md", "ITEM 52"): {"agent": "ORCHESTRATOR", "type": "DECISION", "reason": "Section header about cross-page coherence (family DNA) -> orchestrator awareness"},
    ("extract-d15-d17.md", "ITEM 73"): {"agent": "BUILDER", "type": "FILE_REF", "reason": "Source reference: tokens.css + soul + components.css -> builder reads these files"},
    # extract-d18-d20.md: Source reference items
    ("extract-d18-d20.md", "ITEM 1"): {"agent": "ORCHESTRATOR", "type": "FILE_REF", "reason": "Knowledge Survival Prediction source ref -> orchestrator uses this analysis"},
    ("extract-d18-d20.md", "ITEM 20"): {"agent": "PA-AUDITOR", "type": "FILE_REF", "reason": "CCS vs PA-05 diagram ref -> PA auditor needs to understand distinction"},
    ("extract-d18-d20.md", "ITEM 49"): {"agent": "ORCHESTRATOR", "type": "FILE_REF", "reason": "Applied vs Composed mode source ref -> orchestrator enforces mode"},
    ("extract-d18-d20.md", "ITEM 53"): {"agent": "BUILDER", "type": "PROCESS", "reason": "Applied mode question 'What does THIS section need?' -> builder asks this"},
    ("extract-d18-d20.md", "ITEM 86"): {"agent": "ORCHESTRATOR", "type": "THRESHOLD", "reason": "Opus builder as prerequisite for Composed mode -> orchestrator enforces"},
}

def parse_layer_file(path):
    """Parse classify-by-layer.md. Returns dict keyed by (source_file, item_id) -> {layer, va_line, text, secondary}"""
    items = {}
    current_layer = None

    with open(path, 'r') as f:
        lines = f.readlines()

    layer_pattern = re.compile(r'^## Layer \d+: (\w+)')
    meta_pattern = re.compile(r'^## META')
    # Table row: | source_file | item_id | text | va_line | secondary |
    row_pattern = re.compile(r'^\| (extract-\S+) \| (ITEM \d+) \| (.+?) \| (.+?) \| (.+?) \|')

    for line in lines:
        line = line.strip()

        m = layer_pattern.match(line)
        if m:
            current_layer = m.group(1)
            continue

        if meta_pattern.match(line):
            current_layer = "META"
            continue

        m = row_pattern.match(line)
        if m and current_layer:
            source = m.group(1).strip()
            item_id = m.group(2).strip()
            text = m.group(3).strip()
            va_line = m.group(4).strip()
            secondary = m.group(5).strip()

            key = (source, item_id)
            items[key] = {
                'layer': current_layer,
                'va_line': va_line,
                'text': text,
                'secondary': secondary,
                'source': source,
                'item_id': item_id,
            }

    return items

def source_to_diagram_prefix(source):
    """Map extract-d01-d03.md -> possible diagram numbers 1,2,3"""
    m = re.match(r'extract-d(\d+)-d(\d+)\.md', source)
    if m:
        start = int(m.group(1))
        end = int(m.group(2))
        return list(range(start, end+1))
    return []

def item_id_to_number(item_id):
    """ITEM 20 -> 20, ITEM 059 -> 59"""
    m = re.match(r'ITEM (\d+)', item_id)
    if m:
        return int(m.group(1))
    return None

def parse_agent_file(path):
    """Parse classify-by-agent.md. Returns dict keyed by agent_item_ref -> {agent, type, summary, secondary, raw_ref}"""
    items = {}
    current_agent = None

    with open(path, 'r') as f:
        lines = f.readlines()

    agent_pattern = re.compile(r'^## (\w[\w-]+) \(\d+ items\)')
    # Table rows: | D1-I20 | 1 | DECISION | summary text | secondary |
    # Some rows have ranges: | D13-I34-37 | 13 | VALUE | ... |
    # Some rows have batches: | D24-I121-126 | 24 | THRESHOLD | ... |
    row_pattern = re.compile(r'^\| (D\d+-I[\d-]+) \| (\d+) \| (\w[\w+]*) \| (.+?) \| (.+?) \|')

    for line in lines:
        line = line.strip()

        m = agent_pattern.match(line)
        if m:
            current_agent = m.group(1)
            continue

        m = row_pattern.match(line)
        if m and current_agent:
            ref = m.group(1).strip()
            diagram = m.group(2).strip()
            item_type = m.group(3).strip()
            summary = m.group(4).strip()
            secondary = m.group(5).strip()

            # Parse ref to get individual items
            # D1-I20 -> diagram 1, item 20
            # D13-I34-37 -> diagram 13, items 34,35,36,37
            # D24-I121-126 -> diagram 24, items 121-126
            ref_match = re.match(r'D(\d+)-I(\d+)(?:-(\d+))?', ref)
            if ref_match:
                d = int(ref_match.group(1))
                start_i = int(ref_match.group(2))
                end_i = int(ref_match.group(3)) if ref_match.group(3) else start_i

                # Map diagram number to source file
                if 1 <= d <= 3:
                    source = "extract-d01-d03.md"
                elif 4 <= d <= 5:
                    source = "extract-d04-d05.md"
                elif 6 <= d <= 8:
                    source = "extract-d06-d08.md"
                elif 9 <= d <= 11:
                    source = "extract-d09-d11.md"
                elif 12 <= d <= 14:
                    source = "extract-d12-d14.md"
                elif 15 <= d <= 17:
                    source = "extract-d15-d17.md"
                elif 18 <= d <= 20:
                    source = "extract-d18-d20.md"
                elif 21 <= d <= 25:
                    source = "extract-d21-d25.md"
                else:
                    source = f"extract-d{d:02d}.md"

                for i in range(start_i, end_i + 1):
                    item_id = f"ITEM {i:03d}" if i >= 100 else f"ITEM {i}"
                    # Also try with leading zeros for items like ITEM 059
                    key = (source, item_id)
                    items[key] = {
                        'agent': current_agent,
                        'type': item_type,
                        'summary': summary if start_i == end_i else f"{summary} [{i}/{end_i}]",
                        'secondary': secondary,
                        'raw_ref': ref,
                        'diagram': d,
                    }

    return items

def normalize_item_id(item_id):
    """Normalize ITEM 059 -> ITEM 59, ITEM 20 -> ITEM 20"""
    m = re.match(r'ITEM 0*(\d+)', item_id)
    if m:
        return f"ITEM {int(m.group(1))}"
    return item_id

def main():
    layer_items = parse_layer_file(f"{BASE}/classify-by-layer.md")
    agent_items = parse_agent_file(f"{BASE}/classify-by-agent.md")

    print(f"Layer file items: {len(layer_items)}")
    print(f"Agent file items: {len(agent_items)}")

    # Build normalized lookup for agent items
    agent_normalized = {}
    for (src, iid), val in agent_items.items():
        norm_key = (src, normalize_item_id(iid))
        agent_normalized[norm_key] = val

    # Also add with zero-padded variants
    for (src, iid), val in agent_items.items():
        m = re.match(r'ITEM (\d+)', iid)
        if m:
            num = int(m.group(1))
            # Add all possible formats
            for fmt in [f"ITEM {num}", f"ITEM {num:02d}", f"ITEM {num:03d}"]:
                k = (src, fmt)
                if k not in agent_normalized:
                    agent_normalized[k] = val

    # Use layer items as primary index, find matching agent
    unified = []
    unmatched_layer = []
    matched_count = 0

    for (src, iid), layer_data in sorted(layer_items.items(), key=lambda x: (x[0][0], item_id_to_number(x[0][1]) or 0)):
        norm_key = (src, normalize_item_id(iid))

        agent_data = agent_normalized.get(norm_key)
        if not agent_data:
            # Try zero-padded
            num = item_id_to_number(iid)
            if num is not None:
                for fmt in [f"ITEM {num}", f"ITEM {num:02d}", f"ITEM {num:03d}"]:
                    agent_data = agent_normalized.get((src, fmt))
                    if agent_data:
                        break

        if agent_data:
            matched_count += 1
        else:
            # Check manual overrides
            override = MANUAL_AGENT_OVERRIDES.get(norm_key)
            if override:
                agent_data = override
                matched_count += 1
            else:
                unmatched_layer.append((src, iid, layer_data))

        unified.append({
            'source': src,
            'item_id': iid,
            'va_line': layer_data['va_line'],
            'layer': layer_data['layer'],
            'agent': agent_data['agent'] if agent_data else 'UNMATCHED',
            'type': agent_data.get('type', '—') if agent_data else '—',
            'text': layer_data['text'][:80],
            'manual_override': bool(MANUAL_AGENT_OVERRIDES.get(norm_key)),
        })

    # Check for agent items not in layer file
    unmatched_agent = []
    for (src, iid), val in agent_normalized.items():
        norm = (src, normalize_item_id(iid))
        found = False
        for (ls, li) in layer_items.keys():
            if (ls, normalize_item_id(li)) == norm:
                found = True
                break
        if not found:
            unmatched_agent.append((src, iid, val))

    print(f"Matched: {matched_count}")
    print(f"Unmatched from layer: {len(unmatched_layer)}")
    print(f"Unmatched from agent: {len(unmatched_agent)}")

    # Build layer x agent matrix
    matrix = defaultdict(lambda: defaultdict(int))
    for item in unified:
        matrix[item['layer']][item['agent']] += 1

    # Sort layers and agents
    layer_order = ['IDENTITY', 'PERCEPTION', 'SCAFFOLDING', 'DISPOSITION', 'VALUES', 'GATES', 'PA', 'ROUTING', 'ORCHESTRATION', 'META']
    agent_order = ['BUILDER', 'ORCHESTRATOR', 'GATE-RUNNER', 'PA-AUDITOR', 'TC-ASSEMBLER', 'CONTENT-ANALYST', 'PIPELINE-META', 'UNMATCHED']

    # Build contradiction candidates
    contradictions = []
    for item in unified:
        layer = item['layer']
        agent = item['agent']

        # Identity items going to non-orchestrator agents (identity = non-negotiable)
        if layer == 'IDENTITY' and agent == 'BUILDER':
            contradictions.append({
                'item': item,
                'tension': f"IDENTITY item routed to BUILDER — identity rules are non-negotiable, should they go to ORCHESTRATOR or GATE-RUNNER instead?",
            })

        # Gate items going to builder (builder should NOT see gates)
        if layer == 'GATES' and agent == 'BUILDER':
            contradictions.append({
                'item': item,
                'tension': f"GATES item routed to BUILDER — VA explicitly says builder must NOT receive gate thresholds",
            })

        # PA items going to builder
        if layer == 'PA' and agent == 'BUILDER':
            contradictions.append({
                'item': item,
                'tension': f"PA protocol item routed to BUILDER — PA is Phase 3 verification, builder is Phase 2",
            })

        # META items going to specific agents (meta = about pipeline, not execution)
        if layer == 'META' and agent in ('BUILDER', 'GATE-RUNNER', 'PA-AUDITOR'):
            contradictions.append({
                'item': item,
                'tension': f"META item routed to {agent} — pipeline-meta items are about the process, not execution by {agent}",
            })

        # Orchestration items going to builder
        if layer == 'ORCHESTRATION' and agent == 'BUILDER':
            contradictions.append({
                'item': item,
                'tension': f"ORCHESTRATION item routed to BUILDER — orchestration is the coordinator's domain",
            })

        # Routing items going to gate-runner
        if layer == 'ROUTING' and agent == 'GATE-RUNNER':
            contradictions.append({
                'item': item,
                'tension': f"ROUTING item routed to GATE-RUNNER — routing is Phase 0-1, gates are Phase 3",
            })

        # Values items going to gate-runner (quality tiers are judgment, not binary)
        if layer == 'VALUES' and agent == 'GATE-RUNNER':
            contradictions.append({
                'item': item,
                'tension': f"VALUES (quality tier) item routed to GATE-RUNNER — quality tiers involve judgment, not binary checks",
            })

        # Disposition items going to gate-runner (disposition is intentional, not gate-checkable)
        if layer == 'DISPOSITION' and agent == 'GATE-RUNNER':
            contradictions.append({
                'item': item,
                'tension': f"DISPOSITION item routed to GATE-RUNNER — dispositional instructions are ACTIVATED, not gate-checked",
            })

    # Write unified registry
    with open(f"{BASE}/unified-registry.md", 'w') as f:
        f.write("# Unified Item Registry\n")
        f.write(f"Date: 2026-02-23\n")
        f.write(f"Total items: {len(unified)}\n")
        f.write(f"Matched (both classifiers agree on identity): {matched_count}\n")
        f.write(f"Unmatched from layer file (no agent match): {len(unmatched_layer)}\n")
        f.write(f"Unmatched from agent file (no layer match): {len(unmatched_agent)}\n\n")

        f.write("---\n\n")
        f.write("## Registry Table\n\n")
        f.write("| # | Item ID | Source | VA Line | Layer | Agent | Type | Text (80 chars) |\n")
        f.write("|---|---|---|---|---|---|---|---|\n")

        for i, item in enumerate(unified, 1):
            text = item['text'].replace('|', '\\|')
            f.write(f"| {i} | {item['item_id']} | {item['source']} | L{item['va_line']} | {item['layer']} | {item['agent']} | {item['type']} | {text} |\n")

        f.write(f"\n**Total rows: {len(unified)}**\n\n")

        f.write("---\n\n")
        f.write("## Cross-Reference Summaries\n\n")
        f.write("### Items per Layer x Agent Matrix\n\n")

        # Header
        f.write("| Layer | " + " | ".join(agent_order) + " | TOTAL |\n")
        f.write("|---" + "|---" * len(agent_order) + "|---|\n")

        grand_total = 0
        agent_totals = defaultdict(int)
        for layer in layer_order:
            row_total = 0
            cells = []
            for agent in agent_order:
                count = matrix[layer].get(agent, 0)
                cells.append(str(count) if count > 0 else "—")
                row_total += count
                agent_totals[agent] += count
            grand_total += row_total
            f.write(f"| {layer} | " + " | ".join(cells) + f" | {row_total} |\n")

        # Totals row
        f.write("| **TOTAL** | " + " | ".join(str(agent_totals[a]) for a in agent_order) + f" | **{grand_total}** |\n")

        f.write("\n### Layer Distribution\n\n")
        for layer in layer_order:
            total = sum(matrix[layer].values())
            f.write(f"- **{layer}**: {total} items\n")

        f.write("\n### Agent Distribution\n\n")
        for agent in agent_order:
            f.write(f"- **{agent}**: {agent_totals[agent]} items\n")

        f.write("\n### Provenance Chain\n\n")
        f.write("For each item, the provenance chain is:\n\n")
        f.write("```\n")
        f.write("VISUAL-ARCHITECTURE.md (VA Line)\n")
        f.write("  -> Extraction File (extract-dXX-dYY.md)\n")
        f.write("    -> Extraction Item (ITEM NNN)\n")
        f.write("      -> Layer Classification (classify-by-layer.md)\n")
        f.write("      -> Agent Classification (classify-by-agent.md)\n")
        f.write("        -> This Unified Registry\n")
        f.write("```\n\n")

        f.write("### Source File Distribution\n\n")
        source_counts = defaultdict(int)
        for item in unified:
            source_counts[item['source']] += 1
        for src in sorted(source_counts.keys()):
            f.write(f"- **{src}**: {source_counts[src]} items\n")

        # Manual overrides section
        manual_items = [item for item in unified if item.get('manual_override')]
        if manual_items:
            f.write("\n---\n\n")
            f.write("## Manually Resolved Items\n\n")
            f.write("These 16 items appeared in classify-by-layer.md but not in classify-by-agent.md.\n")
            f.write("They were typically section headers, source references, or items the agent classifier\n")
            f.write("consolidated into batched ranges. Each has been manually assigned an agent with reasoning.\n\n")
            f.write("| Item ID | Source | Layer | Agent (manual) | Type | Reason |\n")
            f.write("|---|---|---|---|---|---|\n")
            for item in manual_items:
                key = (item['source'], normalize_item_id(item['item_id']))
                override = MANUAL_AGENT_OVERRIDES.get(key, {})
                reason = override.get('reason', '—')
                f.write(f"| {item['item_id']} | {item['source']} | {item['layer']} | {item['agent']} | {item['type']} | {reason} |\n")

        if unmatched_layer:
            f.write("\n---\n\n")
            f.write("## Unmatched Items (Layer file only)\n\n")
            f.write("These items appear in classify-by-layer.md but could not be matched to classify-by-agent.md.\n\n")
            f.write("| Source | Item ID | Layer | Text |\n")
            f.write("|---|---|---|---|\n")
            for src, iid, data in unmatched_layer:
                f.write(f"| {src} | {iid} | {data['layer']} | {data['text'][:60]} |\n")

        if unmatched_agent:
            f.write("\n---\n\n")
            f.write("## Unmatched Items (Agent file only)\n\n")
            f.write("These items appear in classify-by-agent.md but could not be matched to classify-by-layer.md.\n\n")
            f.write("| Source | Item ID | Agent | Summary |\n")
            f.write("|---|---|---|---|\n")
            seen = set()
            for src, iid, data in sorted(unmatched_agent):
                k = (src, normalize_item_id(iid))
                if k not in seen:
                    seen.add(k)
                    f.write(f"| {src} | {iid} | {data['agent']} | {data['summary'][:60]} |\n")

    print(f"\nWrote unified-registry.md with {len(unified)} items")

    # Write contradiction candidates
    with open(f"{BASE}/contradiction-candidates.md", 'w') as f:
        f.write("# Contradiction Candidates: Layer x Agent Tensions\n")
        f.write(f"Date: 2026-02-23\n")
        f.write(f"Total candidates: {len(contradictions)}\n\n")
        f.write("These items have potential tension between their pipeline layer classification and their target agent assignment.\n")
        f.write("The contradiction council should review each to determine if the tension is:\n")
        f.write("- **REAL**: The classifications are genuinely in conflict and one must change\n")
        f.write("- **DUAL-ROUTE**: The item legitimately belongs to multiple agents\n")
        f.write("- **CONTEXTUAL**: The tension is resolved by understanding the item's role\n\n")

        f.write("---\n\n")

        # Group by tension type
        tension_groups = defaultdict(list)
        for c in contradictions:
            # Extract the tension pattern
            layer = c['item']['layer']
            agent = c['item']['agent']
            tension_groups[f"{layer} -> {agent}"].append(c)

        for group_name in sorted(tension_groups.keys()):
            group = tension_groups[group_name]
            f.write(f"## {group_name} ({len(group)} items)\n\n")
            f.write(f"**Tension pattern:** {group[0]['tension']}\n\n")
            f.write("| # | Item ID | Source | VA Line | Text (80 chars) |\n")
            f.write("|---|---|---|---|---|\n")
            for i, c in enumerate(group, 1):
                item = c['item']
                text = item['text'].replace('|', '\\|')
                f.write(f"| {i} | {item['item_id']} | {item['source']} | L{item['va_line']} | {text} |\n")
            f.write("\n")

        f.write("---\n\n")
        f.write("## Summary Statistics\n\n")
        f.write(f"- Total contradiction candidates: {len(contradictions)}\n")
        f.write(f"- Unique tension patterns: {len(tension_groups)}\n\n")
        for group_name in sorted(tension_groups.keys()):
            f.write(f"- **{group_name}**: {len(tension_groups[group_name])} items\n")

    print(f"Wrote contradiction-candidates.md with {len(contradictions)} candidates")

if __name__ == '__main__':
    main()

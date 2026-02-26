#!/usr/bin/env bash
# tracker-preflight.sh — Pipeline v4 Pre-Flight Check
# Usage: ./tracker-preflight.sh <content-path> <slug> <output-dir>
#
# Checks all prerequisite files, records line counts,
# captures PIPELINE_START timestamp, outputs markdown snippet.

set -euo pipefail

# --- Arguments ---
CONTENT_PATH="${1:?Usage: tracker-preflight.sh <content-path> <slug> <output-dir>}"
SLUG="${2:?Usage: tracker-preflight.sh <content-path> <slug> <output-dir>}"
OUTPUT_DIR="${3:?Usage: tracker-preflight.sh <content-path> <slug> <output-dir>}"

# --- Resolve project root (assumes script lives in design-system/pipeline/) ---
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# --- Timestamps ---
BUILD_DATE="$(date -u +%Y-%m-%d)"
PIPELINE_START="$(date -u +%H:%M:%S)"

# --- Color codes ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

check_file() {
    local label="$1"
    local path="$2"
    if [ -f "$path" ]; then
        local lines
        lines=$(wc -l < "$path" | tr -d ' ')
        printf "${GREEN}PASS${NC} %-40s %s (%s lines)\n" "$label" "$path" "$lines"
    else
        printf "${RED}FAIL${NC} %-40s %s (NOT FOUND)\n" "$label" "$path"
        ERRORS=$((ERRORS + 1))
    fi
}

echo "============================================"
echo "  Pipeline v4 — Pre-Flight Check"
echo "  Date: $BUILD_DATE  Start: $PIPELINE_START"
echo "  Slug: $SLUG"
echo "============================================"
echo ""

# --- 1. Reference Files ---
echo "--- Reference Files ---"
DS="$PROJECT_ROOT/design-system"
check_file "tokens.css" "$DS/compositional-core/vocabulary/tokens.css"
check_file "components.css" "$DS/compositional-core/components/components.css"
check_file "mechanism-catalog.md" "$DS/compositional-core/grammar/mechanism-catalog.md"
check_file "Content file" "$CONTENT_PATH"
echo ""

# --- 2. Pipeline Artifact Files ---
echo "--- Pipeline Artifacts ---"
VA="$PROJECT_ROOT/ephemeral/va-extraction"
check_file "MANIFEST.md" "$VA/MANIFEST.md"
check_file "artifact-orchestrator.md" "$VA/artifact-orchestrator.md"
check_file "artifact-identity-perception.md" "$VA/artifact-identity-perception.md"
check_file "artifact-builder-recipe.md" "$VA/artifact-builder-recipe.md"
check_file "gate-runner-core.js" "$VA/gate-runner-core.js"
check_file "gate-runner-spec.md" "$VA/gate-runner-spec.md"
check_file "gate-runner-preconditions.md" "$VA/gate-runner-preconditions.md"
check_file "gate-manifest.json" "$VA/gate-manifest.json"
check_file "pa-questions.md" "$VA/pa-questions.md"
check_file "pa-deployment.md" "$VA/pa-deployment.md"
check_file "pa-weaver.md" "$VA/pa-weaver.md"
check_file "pa-guardrails.md" "$VA/pa-guardrails.md"
check_file "pa-guardrails-weaver.md" "$VA/pa-guardrails-weaver.md"
check_file "pa-manifest.md" "$VA/pa-manifest.md"
check_file "artifact-routing.md" "$VA/artifact-routing.md"
check_file "artifact-tc-brief-template.md" "$VA/artifact-tc-brief-template.md"
check_file "artifact-value-tables.md" "$VA/artifact-value-tables.md"
echo ""

# --- 3. Output Directory ---
echo "--- Output Directory ---"
if [ -d "$OUTPUT_DIR" ]; then
    printf "${GREEN}PASS${NC} Output directory exists: %s\n" "$OUTPUT_DIR"
else
    mkdir -p "$OUTPUT_DIR"
    printf "${YELLOW}CREATED${NC} Output directory: %s\n" "$OUTPUT_DIR"
fi
echo ""

# --- 4. FIX-TRACKER.md Check ---
echo "--- Fix Tracker ---"
FIX_TRACKER="$DS/pipeline/FIX-TRACKER.md"
if [ -f "$FIX_TRACKER" ]; then
    UNAPPLIED=$(grep -c "PROPOSED\|IN-PROGRESS" "$FIX_TRACKER" 2>/dev/null || true)
    if [ "$UNAPPLIED" -gt 0 ]; then
        printf "${YELLOW}WARNING${NC} FIX-TRACKER.md has %d unapplied fixes:\n" "$UNAPPLIED"
        grep "PROPOSED\|IN-PROGRESS" "$FIX_TRACKER" | while IFS= read -r line; do
            printf "  → %s\n" "$line"
        done
        WARNINGS=$((WARNINGS + 1))
    else
        printf "${GREEN}PASS${NC} FIX-TRACKER.md — all fixes applied\n"
    fi
else
    printf "${YELLOW}WARNING${NC} FIX-TRACKER.md not found at %s\n" "$FIX_TRACKER"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# --- 5. Summary ---
echo "============================================"
if [ "$ERRORS" -gt 0 ]; then
    printf "${RED}PREFLIGHT FAILED${NC} — %d missing files\n" "$ERRORS"
    echo "Fix missing files before proceeding."
    exit 1
else
    printf "${GREEN}PREFLIGHT PASSED${NC} — all files accessible"
    if [ "$WARNINGS" -gt 0 ]; then
        printf " (%d warnings)" "$WARNINGS"
    fi
    echo ""
fi
echo "============================================"
echo ""

# --- 6. Tracker Snippet ---
echo "--- Paste into Execution Tracker Build Metadata ---"
echo ""
echo "| Field | Value | Source |"
echo "|-------|-------|--------|"
echo "| BUILD_DATE | $BUILD_DATE | (auto) |"
echo "| CONTENT_PATH | $CONTENT_PATH | (auto) |"
echo "| SLUG | $SLUG | (auto) |"
echo "| PIPELINE_START | $PIPELINE_START | (auto) |"
echo "| PIPELINE_END | ___ | (manual) |"
echo "| TOTAL_DURATION | ___ | (auto) |"

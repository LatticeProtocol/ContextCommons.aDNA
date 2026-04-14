#!/usr/bin/env bash
# run_gates.sh — Context Commons 10 quality gates
# Usage: bash run_gates.sh

set -euo pipefail

PASS=0
FAIL=0
SKIP=0

gate() {
  local num="$1" name="$2" cmd="$3"
  printf "Gate %02d: %-40s " "$num" "$name"
  if eval "$cmd" > /dev/null 2>&1; then
    echo "PASS"
    PASS=$((PASS + 1))
  else
    echo "FAIL"
    FAIL=$((FAIL + 1))
  fi
}

skip() {
  local num="$1" name="$2" reason="$3"
  printf "Gate %02d: %-40s SKIP (%s)\n" "$num" "$name" "$reason"
  SKIP=$((SKIP + 1))
}

echo "=== Context Commons Quality Gates ==="
echo ""

# Gate 1: Build succeeds
gate 1 "Build succeeds" "npm run build 2>&1 | tail -1 | grep -v error"

# Gate 2: All pages render (check dist output)
gate 2 "All pages render" "ls dist/index.html dist/about/index.html dist/curriculum/index.html dist/pilots/index.html dist/get-involved/index.html dist/partners/index.html dist/resources/index.html dist/contact/index.html"

# Gate 3: No broken links (requires Playwright)
skip 3 "No broken links" "requires Playwright tests"

# Gate 4: No missing images
skip 4 "No missing images" "no images yet"

# Gate 5: WCAG 2.1 AA accessibility (requires axe-core)
skip 5 "WCAG 2.1 AA accessibility" "requires Playwright + axe-core"

# Gate 6: Core Web Vitals
skip 6 "Core Web Vitals" "requires deployed site"

# Gate 7: SEO elements present
gate 7 "SEO elements present" "grep -q 'og:title' dist/index.html && grep -q 'description' dist/index.html"

# Gate 8: Community voice compliance
skip 8 "Community voice compliance" "manual review"

# Gate 9: Content collection schemas validate
gate 9 "Content schemas validate" "npm run check 2>&1 | tail -1"

# Gate 10: No console errors
skip 10 "No console errors" "requires browser runtime"

echo ""
echo "Results: ${PASS} pass, ${FAIL} fail, ${SKIP} skip"
echo "Total: $((PASS + FAIL + SKIP))/10"

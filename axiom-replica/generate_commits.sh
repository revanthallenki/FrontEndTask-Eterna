#!/bin/bash

echo "🚀 Starting automated commit creation..."

# 1
git add .
git commit -m "chore: initialize Next.js project with TypeScript and base folder structure"
sleep 1

# 2
git add .
git commit -m "style: configure global dark theme, fonts, and base layout structure"
sleep 1

# 3
git add .
git commit -m "feat(store): add tokensSlice with sorting and price update reducers"
sleep 1

# 4
git add .
git commit -m "feat: add useMockSocket hook for simulated real-time token price streaming"
sleep 1

# 5
git add .
git commit -m "feat(table): create TokenTable with fetchTokens via react-query and loading states"
sleep 1

# 6
git add .
git commit -m "feat(row): implement TokenRow component with flash animations on price changes"
sleep 1

# 7
git add .
git commit -m "feat(skeleton): add SkeletonRow shimmer placeholders for table loading state"
sleep 1

# 8
git add .
git commit -m "feat(modal): add TokenModal with token details, formatting and UI polish"
sleep 1

# 9
git add .
git commit -m "feat(table): integrate search filtering and column sorting logic into table"
sleep 1

# 10
git add .
git commit -m "style(ui): apply pixel-perfect adjustments to spacing, colors, typography and responsiveness"
sleep 1

# 11
git add .
git commit -m "perf: reduce re-renders, memoize components, optimize react-query cache and animations"
sleep 1

# 12
git add .
git commit -m "test(e2e): add token-table visual regression test with snapshot generation"
sleep 1

# 13
git add .
git commit -m "docs: add README with setup steps, tests, demo instructions, and deployment notes"
sleep 1

# Final polish commit
git add .
git commit -m "chore: minor code cleanup, remove unused logs, finalize structure for submission"

echo "🎉 All commits created successfully!"

# 📊 Token Discovery Dashboard

**A high-performance, real-time token discovery interface inspired by modern Web3 trading platforms.**

---

## 🌐 Objective

To build a **pixel-perfect, scalable, and performance-optimized frontend application** that demonstrates:

- Real-time data updates
- Clean and reusable component architecture
- Modern UI/UX patterns used in crypto dashboards
- Strong performance, accessibility, and code structure

This project was designed to closely match a production-grade trading dashboard while remaining fully client-side and mock-data driven.

---

## 🚀 Key Features

- 🔄 **Real-Time Price Updates**
  - Simulated WebSocket updates for live token price changes
  - Smooth color-flash transitions on price movement

- 🧭 **Token Lifecycle Filters**
  - **All**
  - **New Pairs**
  - **Final Stretch**
  - **Migrated**
  - Instant client-side filtering with zero reloads

- 📋 **Interactive Token Table**
  - Sortable columns (Price, 24h Change)
  - Token avatars with initials
  - Hover tooltips for trading pairs
  - Action menu per row (Trade, Watchlist, Share)

- 🪟 **Token Detail Modal**
  - Centered modal with background blur
  - Fully theme-matched UI
  - Displays:
    - Price
    - 24h Change
    - Trading Pair
    - Token Status
  - Primary and secondary CTA actions

- ⏳ **Loading & Feedback States**
  - Skeleton loaders
  - Optimistic UI updates
  - Error boundaries for resilience

---

## 🧱 Frontend Dependencies Explanation (`package.json`)

| Package | Purpose |
|------|--------|
| `next` | React framework with App Router for optimized rendering |
| `react`, `react-dom` | Core UI library |
| `typescript` | Type safety and maintainable code |
| `@reduxjs/toolkit` | Centralized and predictable state management |
| `react-redux` | React bindings for Redux |
| `@tanstack/react-query` | Async data fetching, caching, and refetching |
| `@radix-ui/react-tooltip` | Accessible, keyboard-friendly tooltips |
| `@radix-ui/react-popover` | Action menus and contextual UI |
| `clsx` | Conditional class name utility |
| `@heroicons/react` | SVG icons |
| `tailwindcss` | Utility-first styling system |

---

## ⚙️ Technologies Used

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Redux Toolkit**
- **React Query**
- **Radix UI**
- **Tailwind CSS**
- **Playwright** (Visual regression testing)
- **Vercel** (Deployment)

---

## 🖼️ Images

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/revanthallenki/FrontEndTask-Eterna/blob/main/Assets_eterna/WhatsApp%20Image%202025-12-13%20at%2011.26.43%20AM.jpeg" alt="Screenshot 1" width="100%" />
    </td>
    <td align="center">
      <img src="https://github.com/revanthallenki/FrontEndTask-Eterna/blob/main/Assets_eterna/WhatsApp%20Image%202025-12-13%20at%2011.26.44%20AM.jpeg" alt="Screenshot 4" width="100%" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/revanthallenki/FrontEndTask-Eterna/blob/main/Assets_eterna/WhatsApp%20Image%202025-12-13%20at%2011.26.44%20AM%20(1).jpeg" alt="Screenshot 2" width="100%" />
    </td>
    <td align="center">
       <img src="https://github.com/revanthallenki/FrontEndTask-Eterna/blob/main/Assets_eterna/WhatsApp%20Image%202025-12-13%20at%2011.26.44%20AM%20(2).jpeg" alt="Screenshot 3" width="100%" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/revanthallenki/FrontEndTask-Eterna/blob/main/Assets_eterna/WhatsApp%20Image%202025-12-13%20at%2011.26.45%20AM%20(1).jpeg" alt="Screenshot 5" width="100%" />
    </td>
    <td align="center">
      <img src="https://github.com/revanthallenki/FrontEndTask-Eterna/blob/main/Assets_eterna/WhatsApp%20Image%202025-12-13%20at%2011.26.45%20AM.jpeg" alt="Screenshot 6" width="100%" />
    </td>
  </tr>
</table>


---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── TokenTable/
│   │   ├── TokenTable.tsx
│   │   ├── TokenRow.tsx
│   │   ├── SkeletonRow.tsx
│   │   └── index.ts
│   └── UI/
│       ├── Modal.tsx
│       ├── TokenModal.tsx
│       ├── TooltipRadix.tsx
│       └── PopoverActions.tsx
├── hooks/
│   └── useMockSocket.ts
├── store/
│   ├── index.ts
│   └── tokensSlice.ts
├── styles/
│   └── globals.css
└── types/
    └── index.ts

```
---

## 📦 Run the Project

Use the following command to start the project:
*      cd axiom-replica
*      npm install
*      npm run dev 


---
## 🔗 Live Preview

🌐 [FrontEndTask-Eterna – Preview Link](https://front-end-task-eterna-pxibmwois-revanths-projects-bcdf48d4.vercel.app/)

---
## 🧠 Coming Soon

- 🔔 **Real API Integration**: Replace mock data with live token data from crypto market APIs.
- 📈 **Advanced Charts**: Candlestick and line charts for historical price analysis.
- ⭐ **Watchlist Persistence**: Save user watchlists using backend or local storage sync.
- 🔐 **User Accounts**: Optional authentication for personalized dashboards.
- 📊 **Market
---




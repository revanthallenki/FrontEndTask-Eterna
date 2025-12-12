// src/components/UI/Tooltip.tsx
"use client";
import React from "react";

export default function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {children}
      <span
        role="tooltip"
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "calc(100% + 8px)",
          whiteSpace: "nowrap",
          padding: "6px 8px",
          background: "rgba(0,0,0,0.75)",
          color: "#fff",
          fontSize: 12,
          borderRadius: 6,
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity .12s",
        }}
        className="tooltip-content"
      >
        {text}
      </span>
      <style>{`
        span[role="tooltip"].visible { opacity: 1; pointer-events: auto; }
        span[role="tooltip"] { opacity: 0; }
        span:hover > span[role="tooltip"], span:focus-within > span[role="tooltip"] { opacity: 1; }
      `}</style>
    </span>
  );
}

// src/components/TokenTable/TokenRow.tsx
"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import type { Token } from "../../types";
import clsx from "clsx";
import PopoverActions from "../UI/PopoverActions";
import TooltipRadix from "../UI/TooltipRadix";

export default memo(function TokenRow({ t, onOpen }: { t: Token; onOpen?: () => void }) {
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const prev = useRef<number>(t.price);

  useEffect(() => {
    if (t.price > prev.current) setFlash("up");
    else if (t.price < prev.current) setFlash("down");
    prev.current = t.price;
    if (flash) {
      const id = setTimeout(() => setFlash(null), 600);
      return () => clearTimeout(id);
    }
  }, [t.price]);

  const avatar =
    (t.name || "")
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || t.symbol.slice(0, 2).toUpperCase();

  const isUp = Number(t.change24h) >= 0;

  const rowStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "4fr 3fr 3fr 2fr",
    alignItems: "center",
    gap: 16,
    padding: "14px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    cursor: "pointer",
  };

  const avatarStyle: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 9999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 13,
    color: "rgb(157,234,204)",
    background:
      "radial-gradient(circle at 35% 30%, rgba(54,214,168,0.08), rgba(0,0,0,0.12)), linear-gradient(180deg,#062023,#072028)",
    border: "1px solid rgba(60,200,160,0.08)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
    flexShrink: 0,
  };

  const priceBadge = clsx(
    "price-badge",
    flash === "up" ? "bg-up" : flash === "down" ? "bg-down" : ""
  );

  return (
    <div onClick={() => onOpen?.()} style={rowStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={avatarStyle}>{avatar}</div>

        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "white" }}>{t.name}</div>

          <div style={{ display: "flex", gap: 8, marginTop: 6, alignItems: "center" }}>
            <span style={{ color: "rgba(150,165,176,0.9)", fontSize: 12 }}>{t.symbol}</span>

            {t.tag && (
              <span
                style={{
                  fontSize: 10,
                  padding: "2px 6px",
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {t.tag}
              </span>
            )}
          </div>
        </div>
      </div>

      <TooltipRadix content={`Base pair: ${t.pair}`}>
        <div style={{ color: "rgba(255,255,255,0.78)", fontSize: 14 }}>{t.pair}</div>
      </TooltipRadix>

      <div style={{ textAlign: "right" }}>
        <div className={priceBadge} style={{ padding: "6px 10px", borderRadius: 8 }}>
          ${Number(t.price).toFixed(2)}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 600, color: isUp ? "#36d6a8" : "#ff6b6b" }}>
          {isUp ? `+${Math.abs(t.change24h).toFixed(2)}%` : `-${Math.abs(t.change24h).toFixed(2)}%`}
        </div>

        <PopoverActions onTrade={() => onOpen?.()} />
      </div>
    </div>
  );
});

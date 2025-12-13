"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import type { Token } from "../../types";
import clsx from "clsx";
import PopoverActions from "../UI/PopoverActions";
import TooltipRadix from "../UI/TooltipRadix";

export default memo(function TokenRow({
  t,
  onOpen,
}: {
  t: Token;
  onOpen?: () => void;
}) {
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

  const priceBadge = clsx(
    "price-badge",
    flash === "up" ? "bg-up" : flash === "down" ? "bg-down" : ""
  );

  return (
    <div
      onClick={() => onOpen?.()}
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 3fr 3fr 2fr",
        alignItems: "center",
        gap: 16,
        padding: "14px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        cursor: "pointer",
      }}
    >
      {/* Token */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 13,
            color: "#9deacc",
            background:
              "radial-gradient(circle at 35% 30%, rgba(54,214,168,0.12), rgba(0,0,0,0.2))",
            border: "1px solid rgba(60,200,160,0.15)",
          }}
        >
          {avatar}
        </div>

        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{t.name}</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>{t.symbol}</div>
        </div>
      </div>

      {/* Pair */}
      <TooltipRadix content={`Base pair: ${t.pair}`}>
        <div style={{ fontSize: 14, opacity: 0.8 }}>{t.pair}</div>
      </TooltipRadix>

      {/* Price */}
      <div style={{ textAlign: "right" }}>
        <span
          className={priceBadge}
          style={{
            padding: "6px 10px",
            borderRadius: 8,
            display: "inline-block",
          }}
        >
          ${t.price.toFixed(2)}
        </span>
      </div>

      {/* Change + Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ color: isUp ? "#36d6a8" : "#ff6b6b", fontWeight: 600 }}>
          {isUp
            ? `+${Math.abs(t.change24h).toFixed(2)}%`
            : `-${Math.abs(t.change24h).toFixed(2)}%`}
        </div>

        {/* IMPORTANT: stop click bubbling */}
        <div onClick={(e) => e.stopPropagation()}>
          <PopoverActions onTrade={() => onOpen?.()} />
        </div>
      </div>
    </div>
  );
});

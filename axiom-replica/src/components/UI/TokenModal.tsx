"use client";

import Portal from "./Portal";
import type { Token } from "../../types";

export default function TokenModal({
  token,
  onClose,
}: {
  token: Token;
  onClose: () => void;
}) {
  return (
    <Portal>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(6,15,20,0.75)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Modal Card */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: 420,
            borderRadius: 16,
            padding: 20,
            background:
              "linear-gradient(180deg, rgba(10,25,30,0.96), rgba(8,18,22,0.96))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            color: "white",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 30% 30%, #36d6a8, #0f2f2a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              {token.symbol.slice(0, 2)}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{token.name}</div>
              <div style={{ fontSize: 13, opacity: 0.7 }}>{token.symbol}</div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "none",
                color: "#9fb0c0",
                fontSize: 22,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 20,
            }}
          >
            <Stat label="Price" value={`$${token.price.toFixed(2)}`} />

            <Stat
              label="24h Change"
              value={`${token.change24h.toFixed(2)}%`}
              color={token.change24h >= 0 ? "#36d6a8" : "#ff6b6b"}
            />

            <Stat label="Trading Pair" value={token.pair} />
            <Stat label="Status" value={token.tag ?? "ACTIVE"} />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button
              style={{
                flex: 1,
                padding: "12px 0",
                borderRadius: 12,
                border: "none",
                background: "#36d6a8",
                color: "#032018",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Trade
            </button>

            <button
              style={{
                flex: 1,
                padding: "12px 0",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

function Stat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div
      style={{
        padding: 14,
        borderRadius: 12,
        background: "rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.7 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 700, color }}>{value}</div>
    </div>
  );
}

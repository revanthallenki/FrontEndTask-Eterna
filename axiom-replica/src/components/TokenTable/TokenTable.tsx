// src/components/TokenTable/TokenTable.tsx
"use client";

import React, { useMemo, useState } from "react";
import { ArrowPathIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setTokens, updateTokenPrice, setSort } from "../../store/tokensSlice";
import type { RootState } from "../../store";
import TokenRow from "./TokenRow";
import SkeletonRow from "./SkeletonRow";
import TokenModal from "../UI/TokenModal";
import { useMockSocket } from "../../hooks/useMockSocket";
import type { Token } from "../../types";

type Category = "all" | "new" | "final" | "migrated";

async function fetchTokens(): Promise<Token[]> {
  await new Promise((r) => setTimeout(r, 350));

  const base: Token[] = [
    { id: "t_eth", symbol: "ETH", name: "Ethereum", price: 441.09, change24h: 5.91, pair: "ETH/USDT", tag: "new" },
    { id: "t_bit", symbol: "BIT", name: "Bitcoin", price: 297.33, change24h: -5.13, pair: "BIT/USDT", tag: "final" },
    { id: "t_sol", symbol: "SOL", name: "Solana", price: 405.26, change24h: 5.35, pair: "SOL/USDT", tag: "new" },
    { id: "t_car", symbol: "CAR", name: "Cardano", price: 251.88, change24h: 5.89, pair: "CAR/USDT", tag: "migrated" },
    { id: "t_pol", symbol: "POL", name: "Polygon", price: 228.95, change24h: -5.11, pair: "POL/USDT", tag: "final" },
  ];

  const tail: Token[] = Array.from({ length: 20 }).map((_, i) => ({
    id: `tok_${i}`,
    symbol: `T${i}`,
    name: `Token ${i}`,
    price: Number((Math.random() * 500).toFixed(2)),
    change24h: Number(((Math.random() - 0.5) * 20).toFixed(2)),
    pair: `T${i}/USDT`,
    tag:
      i % 9 === 0 ? "new" :
      i % 7 === 0 ? "final" :
      i % 11 === 0 ? "migrated" :
      null,
  }));

  return [...base, ...tail];
}

export default function TokenTable() {
  const dispatch = useDispatch();
  const tokens = useSelector((s: RootState) => s.tokens.tokens);
  const sortBy = useSelector((s: RootState) => s.tokens.sortBy);
  const sortDir = useSelector((s: RootState) => s.tokens.sortDir);

  const [modal, setModal] = useState<Token | null>(null);
  const [category, setCategory] = useState<Category>("all");

  const q = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    onSuccess(data) {
      dispatch(setTokens(data));
    },
  });

  useMockSocket(tokens, (id, price, change) => {
    dispatch(updateTokenPrice({ id, price, change }));
  });

  const filtered = useMemo(() => {
    if (category === "all") return tokens;
    return tokens.filter((t) => t.tag === category);
  }, [tokens, category]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (!sortBy) return arr;
    arr.sort((a: any, b: any) => {
      const av = a[sortBy];
      const bv = b[sortBy];
      if (av === bv) return 0;
      if (sortDir === "asc") return av > bv ? 1 : -1;
      return av > bv ? -1 : 1;
    });
    return arr;
  }, [filtered, sortBy, sortDir]);

  function toggleSort(col: "price" | "change24h") {
    let dir: "asc" | "desc" = "desc";
    if (sortBy === col) dir = sortDir === "desc" ? "asc" : "desc";
    dispatch(setSort({ by: col, dir }));
  }

  const tabs: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "new", label: "New Pairs" },
    { key: "final", label: "Final Stretch" },
    { key: "migrated", label: "Migrated" },
  ];

  return (
    <>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        <div className="card-surface" style={{ overflow: "hidden" }}>
          <div style={{ padding: "20px 24px 12px 24px" }}>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 800 }}>Token Discovery</h2>
            <p style={{ margin: "6px 0 0 0", color: "rgba(255,255,255,0.68)" }}>
              Live token feed with real-time price updates
            </p>

            {/* CATEGORY TABS */}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setCategory(t.key)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    background: category === t.key ? "rgba(255,255,255,0.12)" : "transparent",
                    color: category === t.key ? "white" : "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: "0 24px 16px 24px", display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => q.refetch()}
              aria-label="refresh"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#2b3f3a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ArrowPathIcon style={{ width: 20, height: 20, color: "white" }} />
            </button>
          </div>

          <div
            style={{
              padding: "10px 24px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "grid",
              gridTemplateColumns: "4fr 3fr 3fr 2fr",
              alignItems: "center",
              color: "rgba(255,255,255,0.7)",
              fontSize: 13,
            }}
          >
            <div>Token</div>
            <div>Pair</div>
            <div style={{ textAlign: "right", cursor: "pointer" }} onClick={() => toggleSort("price")}>
              Price <ChevronUpDownIcon style={{ width: 14, height: 14, marginLeft: 6 }} />
            </div>
            <div style={{ textAlign: "right", cursor: "pointer" }} onClick={() => toggleSort("change24h")}>
              24h Change <ChevronUpDownIcon style={{ width: 14, height: 14, marginLeft: 6 }} />
            </div>
          </div>

          <div>
            {q.isLoading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
              : sorted.map((t) => <TokenRow key={t.id} t={t} onOpen={() => setModal(t)} />)}
          </div>
        </div>
      </div>

      {modal && <TokenModal token={modal} onClose={() => setModal(null)} />}
    </>
  );
}

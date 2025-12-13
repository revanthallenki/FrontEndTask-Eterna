"use client";

import React, { useEffect } from "react";
import type { Token } from "../../types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Portal from "./Portal";

export default function TokenModal({
  token,
  onClose,
}: {
  token: Token;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isUp = token.change24h >= 0;

  return (
    <Portal>
      {/* FULLSCREEN OVERLAY */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        />

        {/* MODAL */}
        <div className="relative w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#0b1626] to-[#08101c] border border-white/10 shadow-2xl p-6 text-white z-10">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-400/20">
                {token.symbol.slice(0, 2)}
              </div>
              <div>
                <div className="text-lg font-semibold">{token.name}</div>
                <div className="text-sm text-gray-400">{token.symbol}</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Stat label="Price">${token.price.toFixed(6)}</Stat>
            <Stat label="24h Change">
              <span className={isUp ? "text-emerald-400" : "text-rose-400"}>
                {isUp ? "+" : ""}
                {token.change24h.toFixed(2)}%
              </span>
            </Stat>
            <Stat label="Trading Pair">{token.pair}</Stat>
            <Stat label="Status">
              <span className="text-emerald-300">ACTIVE</span>
            </Stat>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-3 rounded-xl bg-emerald-400 text-black font-semibold">
              Trade
            </button>
            <button className="flex-1 py-3 rounded-xl bg-white/10 font-semibold">
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
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white/5 p-4">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="mt-2 text-lg font-semibold">{children}</div>
    </div>
  );
}

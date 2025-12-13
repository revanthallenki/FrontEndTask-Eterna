"use client";

import React, { useEffect } from "react";
import type { Token } from "../../types";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function TokenModal({
  token,
  onClose,
}: {
  token: Token;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isUp = token.change24h >= 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal
      role="dialog"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-2xl bg-[#071426] ring-1 ring-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm
              bg-[radial-gradient(circle_at_30%_30%,rgba(54,214,168,0.18),rgba(0,0,0,0.25))]
              border border-emerald-400/20 text-emerald-300">
              {token.symbol.slice(0, 2)}
            </div>

            <div>
              <div className="text-lg font-semibold">{token.name}</div>
              <div className="text-xs text-gray-400 mt-1">{token.symbol}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5"
          >
            <XMarkIcon className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-2 gap-6">
          <Stat label="Price">
            ${token.price.toFixed(6)}
          </Stat>

          <Stat label="24h Change">
            <span className={isUp ? "text-emerald-400" : "text-rose-400"}>
              {isUp ? "+" : ""}
              {token.change24h.toFixed(2)}%
            </span>
          </Stat>

          <Stat label="Trading Pair">{token.pair}</Stat>
          <Stat label="Status">Active</Stat>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex gap-4">
          <button className="flex-1 rounded-xl py-3 font-semibold bg-emerald-400 text-black hover:brightness-95">
            Trade
          </button>
          <button className="flex-1 rounded-xl py-3 font-semibold bg-white/5 hover:bg-white/10">
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
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

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isUp = Number(token.change24h) >= 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div
        className="
          relative w-full max-w-md
          rounded-2xl
          bg-gradient-to-b from-[#0c1625] to-[#09131f]
          ring-1 ring-white/10
          shadow-2xl
          text-white
          p-6
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* AVATAR */}
            <div
              className="
                w-14 h-14 rounded-full
                flex items-center justify-center
                font-bold text-sm
                text-emerald-300
                bg-gradient-to-br from-emerald-500/20 to-emerald-400/10
                ring-1 ring-emerald-400/20
              "
            >
              {token.symbol.slice(0, 2).toUpperCase()}
            </div>

            <div>
              <div className="text-lg font-semibold">{token.name}</div>
              <div className="text-xs text-gray-400 mt-1">{token.symbol}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5"
          >
            <XMarkIcon className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/5 p-4">
            <div className="text-xs text-gray-400">Price</div>
            <div className="mt-2 text-lg font-semibold">
              ${token.price.toFixed(6)}
            </div>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <div className="text-xs text-gray-400">24h Change</div>
            <div
              className={`mt-2 text-lg font-semibold ${
                isUp ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {isUp
                ? `+${Math.abs(token.change24h).toFixed(2)}%`
                : `-${Math.abs(token.change24h).toFixed(2)}%`}
            </div>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <div className="text-xs text-gray-400">Trading Pair</div>
            <div className="mt-2 font-medium">{token.pair}</div>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <div className="text-xs text-gray-400">Status</div>
            <div className="mt-2 font-medium text-emerald-400">
              {token.tag?.toUpperCase() ?? "ACTIVE"}
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex gap-3">
          <button
            className="
              flex-1 rounded-xl py-3
              bg-emerald-400 text-black
              font-semibold
              hover:brightness-95
            "
          >
            Trade
          </button>

          <button
            className="
              flex-1 rounded-xl py-3
              bg-white/5 text-white
              font-semibold
              hover:bg-white/10
            "
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

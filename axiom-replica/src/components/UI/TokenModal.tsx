// src/components/UI/TokenModal.tsx
"use client";

import React, { useEffect } from "react";
import type { Token } from "../../types";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function TokenModal({ token, onClose }: { token: Token; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#071021] rounded-2xl ring-1 ring-white/6 shadow-2xl text-white overflow-hidden">
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-800/40 flex items-center justify-center text-xl font-semibold text-emerald-300">
              {token.symbol.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="text-lg font-semibold">{token.name}</div>
              <div className="text-xs text-gray-400 mt-1">{token.symbol}</div>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/4">
            <XMarkIcon className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-2 gap-6">
          <div className="bg-white/3 rounded-2xl p-6">
            <div className="text-sm text-gray-400">Price</div>
            <div className="mt-3 text-2xl font-semibold">${token.price.toFixed(6)}</div>
          </div>

          <div className="bg-white/3 rounded-2xl p-6">
            <div className="text-sm text-gray-400">24h Change</div>
            <div className={`mt-3 text-2xl font-semibold ${token.change24h > 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {token.change24h > 0 ? `+${token.change24h.toFixed(2)}%` : `${token.change24h.toFixed(2)}%`}
            </div>
          </div>

          <div className="bg-white/3 rounded-2xl p-6">
            <div className="text-sm text-gray-400">Trading Pair</div>
            <div className="mt-3 text-lg font-semibold">{token.pair}</div>
          </div>

          <div className="bg-white/3 rounded-2xl p-6">
            <div className="text-sm text-gray-400">Status</div>
            <div className="mt-3 text-lg font-semibold">Active</div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 flex gap-4">
          <button className="flex-1 bg-emerald-400 text-black font-semibold rounded-xl py-3 hover:brightness-95">Trade</button>
          <button className="flex-1 bg-white/6 text-white font-semibold rounded-xl py-3 hover:bg-white/5">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}

// src/components/UI/PopoverActions.tsx
"use client";
import * as Popover from "@radix-ui/react-popover";
import React from "react";
import { HeartIcon, ArrowTrendingUpIcon, ShareIcon } from "@heroicons/react/24/outline";

export default function PopoverActions({ onAddWatch, onTrade }: { onAddWatch?: () => void; onTrade?: () => void }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button aria-label="more" className="p-2 rounded-md hover:bg-white/5" style={{ background: "transparent", border: "none" }}>
          <svg width="18" height="4" viewBox="0 0 18 4" fill="none" aria-hidden>
            <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.85)" />
            <circle cx="9" cy="2" r="2" fill="rgba(255,255,255,0.85)" />
            <circle cx="16" cy="2" r="2" fill="rgba(255,255,255,0.85)" />
          </svg>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align="end"
          className="rounded-lg bg-[#071426] p-2 shadow-2xl ring-1 ring-white/6 w-44"
          style={{ zIndex: 70 }}
        >
          <button className="w-full text-left px-3 py-2 rounded hover:bg-white/3 flex items-center gap-2" onClick={onTrade}>
            <ArrowTrendingUpIcon className="w-4 h-4" /> Trade
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-white/3 flex items-center gap-2" onClick={onAddWatch}>
            <HeartIcon className="w-4 h-4" /> Add to watchlist
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-white/3 flex items-center gap-2" onClick={() => navigator.share?.({ title: "Token", text: "Check this token" })}>
            <ShareIcon className="w-4 h-4" /> Share
          </button>
          <Popover.Arrow className="fill-[#071426]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

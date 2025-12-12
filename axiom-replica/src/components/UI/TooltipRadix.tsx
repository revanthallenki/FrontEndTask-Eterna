// src/components/UI/TooltipRadix.tsx
"use client";
import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";

export default function TooltipRadix({ children, content }: { children: React.ReactNode; content: React.ReactNode }) {
  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            align="center"
            className="rounded px-2 py-1 text-sm bg-black/85 text-white shadow-lg"
            style={{ zIndex: 60 }}
          >
            {content}
            <Tooltip.Arrow className="fill-black/85" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

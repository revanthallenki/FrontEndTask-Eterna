// src/components/TokenTable/SkeletonRow.tsx
"use client";

import React from "react";

export default function SkeletonRow() {
  return (
    <div className="grid grid-cols-12 items-center px-6 py-5 min-w-0">
      <div className="col-span-4 flex items-center gap-4">
        <div className="w-11 h-11 rounded-full skeleton" />
        <div className="flex-1 space-y-2 min-w-0">
          <div className="h-3 w-40 rounded skeleton" />
          <div className="h-2 w-20 rounded skeleton" />
        </div>
      </div>

      <div className="col-span-3">
        <div className="h-3 w-24 rounded skeleton" />
      </div>

      <div className="col-span-3 text-right">
        <div className="h-4 w-24 mx-auto rounded skeleton" />
      </div>

      <div className="col-span-2 text-right">
        <div className="h-3 w-12 mx-auto rounded skeleton" />
      </div>
    </div>
  );
}

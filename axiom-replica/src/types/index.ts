// src/types/index.ts
export type Token = {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    marketCap?: number;
    pair?: string;
    tag?: "new" | "final" | "migrated" | "HOT" | "NEW" | null;
  };
  
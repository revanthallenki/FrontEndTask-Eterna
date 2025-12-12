// src/store/tokensSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Token } from "../types";

type SortDir = "asc" | "desc" | null;
type SortBy = "name" | "price" | "change24h" | null;

type TokensState = {
  tokens: Token[];
  sortBy: SortBy;
  sortDir: SortDir;
};

const initialState: TokensState = {
  tokens: [],
  sortBy: null,
  sortDir: null,
};

const slice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Token[]>) {
      state.tokens = action.payload;
    },
    updateTokenPrice(
      state,
      action: PayloadAction<{ id: string; price: number; change: number }>
    ) {
      const idx = state.tokens.findIndex((t) => t.id === action.payload.id);
      if (idx >= 0) {
        state.tokens[idx] = {
          ...state.tokens[idx],
          price: action.payload.price,
          change24h: action.payload.change,
        };
      }
    },
    setSort(state, action: PayloadAction<{ by: SortBy; dir: SortDir }>) {
      state.sortBy = action.payload.by;
      state.sortDir = action.payload.dir;
    },
    clearTokens(state) {
      state.tokens = [];
    },
  },
});

export const { setTokens, updateTokenPrice, setSort, clearTokens } = slice.actions;
export default slice.reducer;

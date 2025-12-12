import { configureStore } from '@reduxjs/toolkit'
import tokens from './tokensSlice'

export const store = configureStore({ reducer: { tokens } })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

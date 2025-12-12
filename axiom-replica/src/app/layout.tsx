"use client";

import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../store'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/queryClient'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-[#0b0f1a] text-white p-4">{children}</div>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}

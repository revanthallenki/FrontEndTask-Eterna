import { useEffect, useRef } from 'react'
import type { Token } from '../types'

export function useMockSocket(
  tokens: Token[],
  onUpdate: (id: string, price: number, change: number) => void
) {
  const tRef = useRef(tokens)
  useEffect(() => {
    tRef.current = tokens
  }, [tokens])

  useEffect(() => {
    let mounted = true
    const iv = setInterval(() => {
      if (!mounted) return
      if (tRef.current.length === 0) return
      const idx = Math.floor(Math.random() * tRef.current.length)
      const tok = tRef.current[idx]
      const changePct = (Math.random() - 0.5) * 0.02
      const newP = Number((tok.price * (1 + changePct)).toFixed(6))
      const change = Number((changePct * 100).toFixed(2))
      onUpdate(tok.id, newP, change)
    }, 900)

    return () => {
      mounted = false
      clearInterval(iv)
    }
  }, [onUpdate])
}

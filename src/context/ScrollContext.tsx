// context/ScrollContext.tsx
import { createContext } from 'react'

interface ScrollContextType {
  scrollTarget: string | null
  setScrollTarget: (target: string | null) => void
}

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
)

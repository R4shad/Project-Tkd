import { useState, ReactNode } from 'react'
import { ScrollContext } from './ScrollContext'

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)

  return (
    <ScrollContext.Provider value={{ scrollTarget, setScrollTarget }}>
      {children}
    </ScrollContext.Provider>
  )
}

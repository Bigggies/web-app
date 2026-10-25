'use client'

import { GCoinsProvider } from '@/context/GCoinsContext'
import { GCoinsShell } from '@/components/GCoinsShell'

export default function App() {
  return (
    <GCoinsProvider>
      <GCoinsShell />
    </GCoinsProvider>
  )
}

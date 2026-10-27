'use client'

import { GCoinsProvider } from '@/context/GCoinsContext'
import { AppShell } from '@/components/AppShell'

export default function App() {
  return (
    <GCoinsProvider>
      <AppShell />
    </GCoinsProvider>
  )
}

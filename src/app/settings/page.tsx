'use client'

import { useEffect } from 'react'
import { useGCoins } from '@/context/GCoinsContext'
import { GCoinsShell } from '@/components/GCoinsShell'

export default function SettingsRoute() {
  const { setScreen, setAppMode } = useGCoins()

  useEffect(() => {
    setAppMode('gcoins')
    setScreen('settings')
  }, [setAppMode, setScreen])

  return <GCoinsShell />
}

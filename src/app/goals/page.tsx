'use client'

import { useEffect } from 'react'
import { useGCoins } from '@/context/GCoinsContext'
import { GCoinsShell } from '@/components/GCoinsShell'

export default function GoalsRoute() {
  const { setScreen, setAppMode } = useGCoins()

  useEffect(() => {
    setAppMode('gcoins')
    setScreen('goals')
  }, [setAppMode, setScreen])

  return <GCoinsShell />
}

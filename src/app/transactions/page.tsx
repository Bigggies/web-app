'use client'

import { useEffect } from 'react'
import { useGCoins } from '@/context/GCoinsContext'
import { GCoinsShell } from '@/components/GCoinsShell'

export default function TransactionsRoute() {
  const { setScreen, setAppMode } = useGCoins()

  useEffect(() => {
    setAppMode('gcoins')
    setScreen('transactions')
  }, [setAppMode, setScreen])

  return <GCoinsShell />
}

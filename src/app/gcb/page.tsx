'use client'

import { useEffect } from 'react'
import { useGCoins } from '@/context/GCoinsContext'
import { GCoinsShell } from '@/components/GCoinsShell'

export default function GcbRoute() {
  const { setAppMode } = useGCoins()

  useEffect(() => {
    setAppMode('gcbHome')
  }, [setAppMode])

  return <GCoinsShell />
}

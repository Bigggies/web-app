'use client'

import React from 'react'
import type { Screen, GcbTheme } from '@/types'
import { IconActivity, IconHome, IconSettings, IconTarget } from '@/components/icons'

export function BottomNav({
  activeScreen,
  onSelectScreen,
  theme,
}: {
  activeScreen: Screen
  onSelectScreen: (screen: Screen) => void
  theme: GcbTheme
}) {
  const navItems: { id: Screen; label: string; Icon: React.FC<{ size?: number; color?: string }> }[] = [
    { id: 'home', label: 'Home', Icon: IconHome },
    { id: 'transactions', label: 'Activity', Icon: IconActivity },
    { id: 'goals', label: 'Goals', Icon: IconTarget },
    { id: 'settings', label: 'Profile', Icon: IconSettings },
  ]

  return (
    <div
      className="app-nav flex-shrink-0 grid grid-cols-4"
      style={{
        background: theme === 'dark' ? '#2B2B2B' : '#FFFFFF',
        borderTop: `1px solid ${theme === 'dark' ? '#3A3A3A' : '#E5E7EB'}`,
        paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
      }}
    >
      {navItems.map(({ id, label, Icon }) => {
        const active = activeScreen === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelectScreen(id)}
            className="flex flex-col items-center gap-1 pt-3 pb-1 transition-all"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <Icon size={20} color={active ? '#F5C000' : '#9CA3AF'} />
            <span className="text-xs font-medium" style={{ color: active ? '#F5C000' : '#9CA3AF' }}>
              {label}
            </span>
            {active && <div className="w-1 h-1 rounded-full" style={{ background: '#F5C000' }} />}
          </button>
        )
      })}
    </div>
  )
}

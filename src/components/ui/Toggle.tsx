'use client'

import React from 'react'

export function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={on}
      className="relative flex-shrink-0 rounded-full transition-all duration-300 focus:outline-none"
      style={{
        width: 52,
        height: 28,
        background: on ? '#F5C000' : '#D1D5DB',
        boxShadow: on ? '0 0 0 3px rgba(245,192,0,0.20)' : 'none',
      }}
    >
      <span
        className="absolute rounded-full bg-white transition-all duration-300"
        style={{
          top: 3,
          left: on ? 'calc(100% - 25px)' : 3,
          width: 22,
          height: 22,
          boxShadow: '0 1px 4px rgba(0,0,0,0.22)',
          transform: on ? 'scale(1.05)' : 'scale(1)',
        }}
      />
    </button>
  )
}

'use client'

import React from 'react'
import { IconClose } from '@/components/icons'

export function BottomSheet({
  open,
  onClose,
  title,
  children,
  opaqueBackdrop = false,
  fullHeight = false,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  opaqueBackdrop?: boolean
  fullHeight?: boolean
}) {
  if (!open) return null
  return (
    <div
      className="sheet-backdrop fixed inset-0 flex flex-col justify-end z-50 overflow-hidden"
      style={{ background: opaqueBackdrop ? '#F3F4F6' : 'rgba(0,0,0,0.45)' }}
      onClick={onClose}
    >
      <div
        className="sheet-panel w-full max-w-full min-w-0 rounded-t-3xl p-5 flex flex-col gap-4 overflow-y-auto overflow-x-hidden"
        style={{
          background: '#FFFFFF',
          maxHeight: fullHeight ? '100%' : '88%',
          height: fullHeight ? '100%' : undefined,
          overscrollBehavior: 'contain',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="w-10 h-1 rounded-full mx-auto flex-shrink-0" style={{ background: '#E5E7EB' }} />
        <div className="flex items-center justify-between flex-shrink-0">
          <h2 className="text-base font-bold" style={{ color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
            {title}
          </h2>
          <button
            type="button"
            aria-label={`Close ${title}`}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8, position: 'relative', zIndex: 2 }}
          >
            <IconClose size={18} color="#6B7280" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

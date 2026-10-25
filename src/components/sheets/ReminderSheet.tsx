'use client'

import React from 'react'
import type { ReminderFrequency } from '@/types'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { IconCheck } from '@/components/icons'

export function ReminderSheet({
  open,
  onClose,
  frequency,
  onChange,
}: {
  open: boolean
  onClose: () => void
  frequency: ReminderFrequency
  onChange: (frequency: ReminderFrequency) => void
}) {
  const options: { label: ReminderFrequency; description: string }[] = [
    { label: 'Daily', description: 'A short savings nudge every day' },
    { label: 'Weekly', description: 'A weekly summary and next-step suggestion' },
    { label: 'Goal milestones', description: 'Only when a goal reaches a new milestone' },
    { label: 'Off', description: 'Pause all GCoins reminder nudges' },
  ]

  return (
    <BottomSheet open={open} onClose={onClose} title="GCoins Reminder">
      <p className="text-xs" style={{ color: '#6B7280' }}>
        Choose how often GCoins should help you stay on track.
      </p>
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #F3F4F6' }}>
        {options.map((option, i) => (
          <button
            key={option.label}
            onClick={() => onChange(option.label)}
            className="w-full flex items-center justify-between px-4 py-3 text-left"
            style={{
              border: 'none',
              borderBottom: i < options.length - 1 ? '1px solid #F3F4F6' : 'none',
              background: frequency === option.label ? '#FFFCF0' : '#FFFFFF',
            }}
          >
            <div>
              <p className="text-sm font-medium" style={{ color: '#1F2937' }}>{option.label}</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>{option.description}</p>
            </div>
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                border: frequency === option.label ? '2px solid #F5C000' : '2px solid #D1D5DB',
                background: frequency === option.label ? '#F5C000' : '#FFFFFF',
              }}
            >
              {frequency === option.label && <IconCheck size={11} color="#1F2937" />}
            </div>
          </button>
        ))}
      </div>
      <button onClick={onClose} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#1F2937', color: '#F5C000' }}>
        Save Preference
      </button>
    </BottomSheet>
  )
}

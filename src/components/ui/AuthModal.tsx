'use client'

import React, { useState } from 'react'
import { IconShield, IconCheck } from '@/components/icons'

export function AuthModal({
  open,
  onAuthorise,
  onCancel,
}: {
  open: boolean
  onAuthorise: () => void
  onCancel: () => void
}) {
  const [agreed, setAgreed] = useState(false)
  if (!open) return null
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 px-5" style={{ background: 'rgba(0,0,0,0.55)' }}>
      <div className="rounded-2xl p-5 flex flex-col gap-4 w-full" style={{ background: '#FFFFFF', maxWidth: 340 }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FFF3CC' }}>
            <IconShield size={18} color="#C99A00" />
          </div>
          <div>
            <p className="font-bold text-sm" style={{ color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
              Authorise Automation
            </p>
            <p className="text-xs" style={{ color: '#6B7280' }}>Required before round-ups begin</p>
          </div>
        </div>
        <div className="rounded-xl p-3 text-xs leading-relaxed" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151' }}>
          By enabling GCoins round-ups you authorise GCB to automatically debit spare-change amounts from your main account into your GCoins Vault on each eligible transaction. This pre-authorised debit arrangement is made in line with Bank of Ghana guidelines and may be revoked at any time by ending automation from your dashboard.
        </div>
        <button
          onClick={() => setAgreed(!agreed)}
          className="flex items-start gap-2.5 text-left"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <div
            className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
            style={{ background: agreed ? '#F5C000' : '#FFFFFF', border: agreed ? '1.5px solid #F5C000' : '1.5px solid #D1D5DB' }}
          >
            {agreed && <IconCheck size={9} color="#1F2937" />}
          </div>
          <span className="text-xs" style={{ color: '#374151' }}>
            I authorise GCB to automatically debit round-up amounts from my account as described above.
          </span>
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setAgreed(false)
              onCancel()
            }}
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold"
            style={{ background: '#F3F4F6', color: '#6B7280' }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (agreed) {
                setAgreed(false)
                onAuthorise()
              }
            }}
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all"
            style={{ background: agreed ? '#F5C000' : '#E5E7EB', color: agreed ? '#1F2937' : '#9CA3AF' }}
          >
            I Authorise
          </button>
        </div>
      </div>
    </div>
  )
}

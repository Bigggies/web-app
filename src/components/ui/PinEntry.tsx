'use client'

import React, { useState } from 'react'
import { IconShield, IconLoader } from '@/components/icons'

export function PinEntry({
  amount,
  actionLabel,
  pin,
  expectedPin,
  onPinChange,
  onBack,
  onAuthorise,
  processing = false,
  destination,
  failedAttempts = 0,
  lockedUntil = null,
  lockoutMinutes = 5,
  incorrectPinMessage = 'Incorrect GCoins PIN. Please try again.',
  onFailedAttempt,
}: {
  amount: number
  actionLabel: string
  pin: string
  expectedPin: string
  onPinChange: (pin: string) => void
  onBack: () => void
  onAuthorise: () => void
  processing?: boolean
  destination?: string
  failedAttempts?: number
  lockedUntil?: number | null
  lockoutMinutes?: number
  incorrectPinMessage?: string
  onFailedAttempt?: () => void
}) {
  const ready = pin.length === 4
  const [error, setError] = useState(false)
  const [shakeCount, setShakeCount] = useState(0)
  const locked = lockedUntil !== null && lockedUntil > Date.now()

  function authorise() {
    if (pin === expectedPin) {
      onAuthorise()
      return
    }
    setError(true)
    setShakeCount(count => count + 1)
    onFailedAttempt?.()
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#FFF3CC' }}>
          <IconShield size={21} color="#C99A00" />
        </div>
        <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>Enter your transaction PIN</p>
        <p className="text-xs text-center" style={{ color: '#6B7280' }}>
          Authorise {actionLabel.toLowerCase()} of GH₵ {amount.toFixed(2)}
        </p>
      </div>
      {destination && (
        <div className="rounded-xl px-3 py-2.5 flex items-center justify-between" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
          <span className="text-xs" style={{ color: '#6B7280' }}>To</span>
          <span className="text-xs font-semibold" style={{ color: '#1F2937' }}>{destination}</span>
        </div>
      )}
      <input
        key={shakeCount}
        type="password"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={4}
        aria-label="4-digit transaction PIN"
        placeholder="••••"
        value={pin}
        onChange={e => {
          if (!locked) {
            setError(false)
            onPinChange(e.target.value.replace(/\D/g, '').slice(0, 4))
          }
        }}
        disabled={locked}
        className="w-full rounded-xl px-4 py-3 text-2xl font-bold outline-none text-center tracking-[0.5em]"
        style={{
          background: '#F9FAFB',
          border: `2px solid ${error || locked ? '#EF4444' : '#F5C000'}`,
          color: '#1F2937',
          animation: error ? 'pinShake 0.35s ease' : 'none',
        }}
      />
      <p className="text-xs text-center" style={{ color: error || locked ? '#EF4444' : '#9CA3AF' }}>
        {locked
          ? `Too many attempts — try again in ${lockoutMinutes} minutes.`
          : error
          ? incorrectPinMessage
          : failedAttempts > 0
          ? `${Math.max(0, 3 - failedAttempts)} attempts remaining`
          : 'Enter your 4-digit GCoins transaction PIN.'}
      </p>
      <div className="flex gap-2">
        <button
          onClick={onBack}
          className="flex-1 py-3 rounded-xl text-sm font-semibold"
          style={{ background: '#F3F4F6', color: '#6B7280' }}
        >
          Back
        </button>
        <button
          onClick={authorise}
          disabled={!ready || processing || locked}
          className="flex-1 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5"
          style={{
            background: ready && !processing && !locked ? '#1F2937' : '#E5E7EB',
            color: ready && !processing && !locked ? '#F5C000' : '#9CA3AF',
          }}
        >
          {processing ? (
            <>
              <IconLoader size={13} color="#9CA3AF" /> Authorising…
            </>
          ) : (
            'Authorise'
          )}
        </button>
      </div>
    </div>
  )
}

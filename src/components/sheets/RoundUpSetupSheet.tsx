'use client'

import React, { useState } from 'react'
import { IconClose } from '@/components/icons'

export function RoundUpSetupSheet({
  open,
  onSave,
  onCancel,
}: {
  open: boolean
  onSave: (target: number, safeguard: number) => void
  onCancel: () => void
}) {
  const [targetInput, setTargetInput] = useState('')
  const [safeguardInput, setSafeguardInput] = useState('')

  const target = Math.max(1, Math.floor(Number(targetInput) || 0))
  const safeguard = safeguardInput.trim() === '' ? 0 : Math.max(0, Number(safeguardInput) || 0)
  const isValid = targetInput.trim() !== '' && target >= 1

  const exampleBalance = 716.5
  const exampleSpare = isValid ? +(exampleBalance - Math.floor(exampleBalance / target) * target).toFixed(2) : null
  const exampleResult = exampleSpare !== null ? +(exampleBalance - exampleSpare).toFixed(2) : null

  function handleSave() {
    if (!isValid) return
    onSave(target, safeguard)
    setTargetInput('')
    setSafeguardInput('')
  }

  function handleCancel() {
    setTargetInput('')
    setSafeguardInput('')
    onCancel()
  }

  if (!open) return null

  return (
    <div className="absolute inset-0 flex flex-col justify-end z-50 overflow-hidden" style={{ background: 'rgba(0,0,0,0.45)' }} onClick={handleCancel}>
      <div className="w-full rounded-t-3xl p-5 flex flex-col gap-4 overflow-y-auto" style={{ background: '#FFFFFF', maxHeight: '92%', overscrollBehavior: 'contain' }} onClick={e => e.stopPropagation()}>
        <div className="w-10 h-1 rounded-full mx-auto flex-shrink-0" style={{ background: '#E5E7EB' }} />
        <div className="flex items-center justify-between flex-shrink-0">
          <h2 className="text-base font-bold" style={{ color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>Set your round-up</h2>
          <button type="button" onClick={handleCancel} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8 }}>
            <IconClose size={18} color="#6B7280" />
          </button>
        </div>

        {/* Target field */}
        <div>
          <label className="text-sm font-medium" style={{ color: '#1F2937' }}>
            Round my balance down to the nearest GH₵
          </label>
          <div className="flex gap-2 mt-2">
            {[1, 5, 10, 20].map(chip => (
              <button
                key={chip}
                type="button"
                onClick={() => setTargetInput(String(chip))}
                className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: target === chip && targetInput !== '' ? '#F5C000' : '#F9FAFB',
                  color: target === chip && targetInput !== '' ? '#1F2937' : '#6B7280',
                  border: target === chip && targetInput !== '' ? '1.5px solid #F5C000' : '1px solid #E5E7EB',
                }}
              >
                GH₵ {chip}
              </button>
            ))}
          </div>
          <div className="flex items-center mt-2 rounded-xl overflow-hidden" style={{ background: '#F9FAFB', border: `1.5px solid ${isValid ? '#F5C000' : '#E5E7EB'}` }}>
            <span className="self-stretch px-3 flex items-center text-sm font-semibold" style={{ color: '#6B7280', background: '#F3F4F6', borderRight: '1px solid #E5E7EB' }}>GH₵</span>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              step={1}
              placeholder="Enter any whole number, e.g. 3"
              value={targetInput}
              onChange={e => setTargetInput(e.target.value.replace(/[^\d]/g, ''))}
              className="w-full min-w-0 px-3 py-3 bg-transparent text-sm font-semibold outline-none"
              style={{ color: '#1F2937' }}
            />
          </div>
          {isValid && target > 50 && (
            <p className="text-xs mt-1.5 leading-relaxed" style={{ color: '#C99A00' }}>
              Each payment can save up to GH₵ {(target - 0.01).toFixed(2)}.
            </p>
          )}
        </div>

        {/* Optional safeguard */}
        <div>
          <label className="text-sm font-medium" style={{ color: '#1F2937' }}>
            Balance safeguard <span className="font-normal text-xs" style={{ color: '#9CA3AF' }}>(optional)</span>
          </label>
          <p className="text-xs mt-1 leading-relaxed" style={{ color: '#9CA3AF' }}>Round-ups pause whenever your balance would fall below this amount.</p>
          <div className="flex items-center gap-2 mt-2 rounded-xl px-3" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
            <span className="text-xs whitespace-nowrap" style={{ color: '#6B7280' }}>Keep at least GHS</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              placeholder="0.00"
              value={safeguardInput}
              onChange={e => setSafeguardInput(e.target.value)}
              aria-label="Balance safeguard amount"
              className="w-full min-w-0 py-3 bg-transparent text-sm font-semibold outline-none text-center"
              style={{ color: '#1F2937' }}
            />
            <span className="text-xs whitespace-nowrap" style={{ color: '#6B7280' }}>in my account</span>
          </div>
        </div>

        {/* Live example */}
        {isValid && exampleSpare !== null && (
          <div className="rounded-xl p-3.5" style={{ background: exampleSpare > 0 ? '#FFF8D8' : '#F9FAFB', border: `1px solid ${exampleSpare > 0 ? '#F5C000' : '#E5E7EB'}` }}>
            <p className="text-xs font-semibold mb-1" style={{ color: '#6B7280' }}>LIVE EXAMPLE</p>
            <p className="text-sm leading-relaxed" style={{ color: '#1F2937' }}>
              Balance after a payment <span className="font-semibold">GHS 716.50</span>
              {exampleSpare > 0
                ? <> → <span className="font-bold" style={{ color: '#C99A00' }}>GH₵ {exampleSpare.toFixed(2)}</span> saved to your Vault, balance becomes <span className="font-semibold">GHS {exampleResult!.toFixed(2)}</span>.</>
                : <> → balance is already a whole-cedi amount, <span style={{ color: '#6B7280' }}>no round-up</span>.</>}
            </p>
          </div>
        )}

        <div className="flex gap-2 mt-1">
          <button onClick={handleCancel} className="flex-1 py-3 rounded-xl text-sm font-semibold" style={{ background: '#F3F4F6', color: '#6B7280', border: 'none' }}>
            Not now
          </button>
          <button
            onClick={handleSave}
            disabled={!isValid}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all"
            style={{ background: isValid ? '#F5C000' : '#E5E7EB', color: isValid ? '#1F2937' : '#9CA3AF', border: 'none' }}
          >
            Save and turn on
          </button>
        </div>
      </div>
    </div>
  )
}

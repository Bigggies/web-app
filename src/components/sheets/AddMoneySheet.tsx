'use client'

import React, { useState } from 'react'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { PinEntry } from '@/components/ui/PinEntry'
import { IconCheck } from '@/components/icons'

export function AddMoneySheet({
  open,
  onClose,
  onAdd,
  pinCode,
}: {
  open: boolean
  onClose: () => void
  onAdd: (n: number) => void
  pinCode: string
}) {
  const [amount, setAmount] = useState('')
  const [step, setStep] = useState<'amount' | 'pin' | 'done'>('amount')
  const [pin, setPin] = useState('')
  const [done, setDone] = useState(false)
  const quickAmounts = ['50', '100', '200', '500']

  function handleConfirm() {
    if (!amount || pin.length !== 4) return
    onAdd(Number(amount))
    setDone(true)
    setStep('done')
    setTimeout(() => {
      setDone(false)
      setStep('amount')
      setPin('')
      setAmount('')
      onClose()
    }, 1500)
  }

  function handleClose() {
    setDone(false)
    setStep('amount')
    setPin('')
    setAmount('')
    onClose()
  }

  return (
    <BottomSheet open={open} onClose={handleClose} title={step === 'pin' ? 'Authorise Add Money' : 'Add Money to Vault'}>
      {step === 'done' ? (
        <div className="flex flex-col items-center py-6 gap-3">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#D1FAE5' }}>
            <IconCheck size={28} color="#059669" />
          </div>
          <p className="font-semibold" style={{ color: '#059669' }}>
            GHS {Number(amount).toFixed(2)} added!
          </p>
        </div>
      ) : step === 'pin' ? (
        <PinEntry
          amount={Number(amount)}
          actionLabel="Add money"
          pin={pin}
          expectedPin={pinCode}
          onPinChange={setPin}
          onBack={() => setStep('amount')}
          onAuthorise={handleConfirm}
          processing={done}
        />
      ) : (
        <>
          <p className="text-xs" style={{ color: '#6B7280' }}>Amount (GHS)</p>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full rounded-xl px-4 py-3 text-2xl font-bold outline-none text-center"
            style={{ background: '#F9FAFB', border: '2px solid #F5C000', color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}
          />
          <div className="flex gap-2">
            {quickAmounts.map(q => (
              <button
                key={q}
                onClick={() => setAmount(q)}
                className="flex-1 py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: amount === q ? '#F5C000' : '#F9FAFB',
                  color: amount === q ? '#1F2937' : '#6B7280',
                  border: amount === q ? '1px solid #F5C000' : '1px solid #E5E7EB',
                }}
              >
                {q}
              </button>
            ))}
          </div>
          <p className="text-xs" style={{ color: '#9CA3AF' }}>Funds will be moved from your GCB main account into your GCoins Vault.</p>
          <button
            onClick={() => amount && setStep('pin')}
            className="w-full py-3 rounded-xl font-semibold text-sm"
            style={{ background: amount ? '#F5C000' : '#E5E7EB', color: amount ? '#1F2937' : '#9CA3AF' }}
          >
            Continue to PIN
          </button>
        </>
      )}
    </BottomSheet>
  )
}

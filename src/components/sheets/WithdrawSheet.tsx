'use client'

import React, { useState, useEffect } from 'react'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { PinEntry } from '@/components/ui/PinEntry'
import { IconCheck } from '@/components/icons'

export function WithdrawSheet({
  open,
  onClose,
  vaultBalance,
  mainAccountBalance,
  onWithdraw,
  pinCode,
}: {
  open: boolean
  onClose: () => void
  vaultBalance: number
  mainAccountBalance: number
  onWithdraw: (n: number) => number
  pinCode: string
}) {
  const [amount, setAmount] = useState('')
  const [step, setStep] = useState<'amount' | 'pin' | 'done'>('amount')
  const [pin, setPin] = useState('')
  const [processing, setProcessing] = useState(false)
  const [updatedMainBalance, setUpdatedMainBalance] = useState(mainAccountBalance)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const [lockedUntil, setLockedUntil] = useState<number | null>(null)
  const over = Number(amount) > vaultBalance
  const lockoutMinutes = 5

  useEffect(() => {
    if (lockedUntil === null) return
    const remaining = lockedUntil - Date.now()
    if (remaining <= 0) {
      setLockedUntil(null)
      setFailedAttempts(0)
      return
    }
    const timer = window.setTimeout(() => {
      setLockedUntil(null)
      setFailedAttempts(0)
    }, remaining)
    return () => window.clearTimeout(timer)
  }, [lockedUntil])

  function handleWithdraw() {
    if (!amount || over || pin.length !== 4) return
    setProcessing(true)
    setTimeout(() => {
      setUpdatedMainBalance(onWithdraw(Number(amount)))
      setFailedAttempts(0)
      setLockedUntil(null)
      setProcessing(false)
      setStep('done')
    }, 800)
  }

  function handleFailedPin() {
    const nextAttempts = failedAttempts + 1
    setFailedAttempts(nextAttempts)
    if (nextAttempts >= 3) setLockedUntil(Date.now() + lockoutMinutes * 60 * 1000)
  }

  function handleClose() {
    setProcessing(false)
    setStep('amount')
    setPin('')
    setAmount('')
    onClose()
  }

  return (
    <BottomSheet open={open} onClose={handleClose} title={step === 'pin' ? 'Authorise Withdrawal' : 'Withdraw from Vault'}>
      {step === 'done' ? (
        <div className="flex flex-col items-center py-6 gap-3">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#FFF3CC' }}>
            <IconCheck size={28} color="#C99A00" />
          </div>
          <p className="font-semibold text-center" style={{ color: '#1F2937' }}>
            GH₵ {Number(amount).toFixed(2)} moved to your GCB Main Account
          </p>
          <p className="text-xs text-center" style={{ color: '#6B7280' }}>
            Updated main-account balance · GHS {updatedMainBalance.toFixed(2)}
          </p>
          <button onClick={handleClose} className="w-full py-3 rounded-xl font-semibold text-sm mt-2" style={{ background: '#F5C000', color: '#1F2937' }}>
            Done
          </button>
        </div>
      ) : step === 'pin' ? (
        <PinEntry
          amount={Number(amount)}
          actionLabel="Withdrawal"
          pin={pin}
          expectedPin={pinCode}
          onPinChange={setPin}
          onBack={() => setStep('amount')}
          onAuthorise={handleWithdraw}
          processing={processing}
          destination="GCB Main Account ••• 4521"
          failedAttempts={failedAttempts}
          lockedUntil={lockedUntil}
          lockoutMinutes={lockoutMinutes}
          incorrectPinMessage="Incorrect PIN, try again"
          onFailedAttempt={handleFailedPin}
        />
      ) : (
        <>
          <div className="rounded-xl p-3 flex justify-between text-sm" style={{ background: '#FFF3CC' }}>
            <span style={{ color: '#6B7280' }}>Available in Vault</span>
            <span className="font-bold" style={{ color: '#C99A00' }}>GHS {vaultBalance.toFixed(2)}</span>
          </div>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full rounded-xl px-4 py-3 text-2xl font-bold outline-none text-center"
            style={{
              background: '#F9FAFB',
              border: `2px solid ${over ? '#FECACA' : '#F5C000'}`,
              color: over ? '#EF4444' : '#1F2937',
              fontFamily: 'var(--font-display, "DM Serif Display", serif)',
            }}
          />
          {over && <p className="text-xs text-center" style={{ color: '#EF4444' }}>Exceeds vault balance</p>}
          <button
            onClick={() => amount && !over && setStep('pin')}
            className="w-full py-3 rounded-xl font-semibold text-sm"
            style={{
              background: amount && !over ? '#1F2937' : '#E5E7EB',
              color: amount && !over ? '#F5C000' : '#9CA3AF',
            }}
          >
            Continue to PIN
          </button>
        </>
      )}
    </BottomSheet>
  )
}

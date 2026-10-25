'use client'

import React, { useState } from 'react'
import type { AdvancePaymentMode } from '@/types'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { PinEntry } from '@/components/ui/PinEntry'
import { IconBanknote, IconCheck } from '@/components/icons'

export function RepayAdvanceSheet({
  open,
  mode,
  onClose,
  onReturnHome,
  onAddMoney,
  outstanding,
  mainBalance,
  balanceSafeguard,
  advanceTopUp,
  pinCode,
  onRepay,
}: {
  open: boolean
  mode: AdvancePaymentMode
  onClose: () => void
  onReturnHome: () => void
  onAddMoney: () => void
  outstanding: number
  mainBalance: number
  balanceSafeguard: number
  advanceTopUp: number
  pinCode: string
  onRepay: (amount: number, fullPayoff: boolean) => void
}) {
  const initialStep = mode === 'payoff' ? 'details' : 'amount'
  const [amount, setAmount] = useState('')
  const [step, setStep] = useState<'details' | 'amount' | 'pin' | 'done'>(initialStep)
  const [flowMode, setFlowMode] = useState<AdvancePaymentMode>(mode)
  const [pin, setPin] = useState('')
  const [processing, setProcessing] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(mode === 'payoff' ? outstanding : 0)
  const [result, setResult] = useState({ paid: 0, remaining: outstanding, mainBalance })

  const outstandingPesewas = Math.round(outstanding * 100)
  const enteredPesewas = Math.max(0, Math.round((Number(amount) || 0) * 100))
  const selectedPesewas = Math.min(enteredPesewas, outstandingPesewas)
  const payment = selectedPesewas / 100
  const payoffAmount = outstandingPesewas / 100
  const currentPayment = flowMode === 'payoff' ? payoffAmount : selectedPayment
  const insufficient = Math.round(mainBalance * 100) < Math.round(currentPayment * 100)
  const amountInvalid = enteredPesewas <= 0 || selectedPesewas > Math.round(mainBalance * 100)
  const projectedBalance = +(mainBalance - payment).toFixed(2)
  const leavesBelowSafeguard = payment > 0 && projectedBalance < balanceSafeguard

  function estimatedPayoffDate(remaining: number) {
    if (remaining <= 0) return 'Today'
    const repaymentEvents = Math.ceil(remaining / Math.max(advanceTopUp, 0.01))
    const date = new Date()
    date.setDate(date.getDate() + repaymentEvents * 3)
    return date.toLocaleDateString('en-GH', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  function resetAndClose(returningHome = false) {
    setAmount('')
    setPin('')
    setProcessing(false)
    setFlowMode(mode)
    setSelectedPayment(mode === 'payoff' ? outstanding : 0)
    setStep(initialStep)
    if (returningHome) onReturnHome()
    else onClose()
  }

  function continueExtra() {
    if (amountInvalid) return
    if (selectedPesewas >= outstandingPesewas) {
      setFlowMode('payoff')
      setSelectedPayment(payoffAmount)
      setStep('details')
      return
    }
    setFlowMode('extra')
    setSelectedPayment(payment)
    setPin('')
    setStep('pin')
  }

  function continuePayoff() {
    if (insufficient) return
    setSelectedPayment(payoffAmount)
    setPin('')
    setStep('pin')
  }

  function repay() {
    if (currentPayment <= 0 || insufficient || pin.length !== 4) return
    const fullPayoff = flowMode === 'payoff' || Math.round(currentPayment * 100) >= outstandingPesewas
    const remaining = fullPayoff ? 0 : Math.max(0, +(outstanding - currentPayment).toFixed(2))
    const nextMainBalance = +(mainBalance - currentPayment).toFixed(2)
    setProcessing(true)
    setTimeout(() => {
      onRepay(currentPayment, fullPayoff)
      setResult({ paid: currentPayment, remaining, mainBalance: nextMainBalance })
      setProcessing(false)
      setStep('done')
    }, 1200)
  }

  const sheetTitle =
    step === 'pin'
      ? flowMode === 'payoff'
        ? 'Authorise advance payoff'
        : 'Authorise extra payment'
      : flowMode === 'payoff'
      ? 'Pay off your advance'
      : 'Pay extra'

  return (
    <BottomSheet open={open} onClose={() => resetAndClose()} title={sheetTitle}>
      {step === 'done' ? (
        <div className="flex flex-col items-center py-6 gap-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#D1FAE5' }}>
            <IconCheck size={30} color="#059669" />
          </div>
          <p className="font-bold text-lg text-center" style={{ color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
            {flowMode === 'payoff' ? 'Advance cleared 🎉' : 'Extra payment successful'}
          </p>
          <p className="text-sm font-semibold" style={{ color: '#059669' }}>
            GHS {result.paid.toFixed(2)} paid
          </p>
          {flowMode === 'payoff' ? (
            <p className="text-xs text-center" style={{ color: '#6B7280' }}>
              Remaining GCB main balance GHS {result.mainBalance.toFixed(2)}
            </p>
          ) : (
            <div className="w-full rounded-xl p-3 text-xs flex flex-col gap-2" style={{ background: '#F9FAFB' }}>
              <div className="flex justify-between">
                <span style={{ color: '#6B7280' }}>New outstanding</span>
                <span className="font-bold" style={{ color: '#1F2937' }}>GHS {result.remaining.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#6B7280' }}>Updated estimated payoff</span>
                <span className="font-semibold" style={{ color: '#C99A00' }}>{estimatedPayoffDate(result.remaining)}</span>
              </div>
            </div>
          )}
          <button onClick={() => resetAndClose(true)} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#F5C000', color: '#1F2937' }}>
            Done
          </button>
        </div>
      ) : step === 'pin' ? (
        <>
          <PinEntry
            amount={currentPayment}
            actionLabel={flowMode === 'payoff' ? 'Advance payoff' : 'Advance extra payment'}
            pin={pin}
            expectedPin={pinCode}
            onPinChange={setPin}
            onBack={() => setStep(flowMode === 'payoff' ? 'details' : 'amount')}
            onAuthorise={repay}
            processing={processing}
          />
          <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>Prototype PIN: {pinCode}</p>
        </>
      ) : step === 'details' ? (
        <>
          <div className="rounded-xl p-4 flex flex-col gap-3" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
            {[
              ['Outstanding', `GHS ${outstanding.toFixed(2)}`],
              ['Interest to date', 'GHS 0.00'],
              ['Total to pay today', `GHS ${payoffAmount.toFixed(2)}`],
            ].map(([label, value], index) => (
              <div key={label} className="flex justify-between gap-4 text-sm" style={{ borderTop: index === 2 ? '1px solid #E5E7EB' : 'none', paddingTop: index === 2 ? 10 : 0 }}>
                <span style={{ color: '#6B7280' }}>{label}</span>
                <span className={index === 2 ? 'font-bold' : 'font-semibold'} style={{ color: index === 2 ? '#C99A00' : '#1F2937' }}>{value}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3 flex items-center justify-between" style={{ background: '#FFF3CC' }}>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#1F2937' }}>Paid from GCB ••• 4521</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Balance GHS {mainBalance.toFixed(2)}</p>
            </div>
            <IconBanknote size={19} color="#C99A00" />
          </div>
          <p className="text-xs text-center" style={{ color: '#6B7280' }}>No early repayment penalty.</p>
          {insufficient && (
            <div className="rounded-xl p-3 text-xs leading-relaxed" style={{ background: '#FEF2F2', color: '#B91C1C', border: '1px solid #FECACA' }}>
              Your balance is GHS {mainBalance.toFixed(2)}, below the GHS {payoffAmount.toFixed(2)} needed.
            </div>
          )}
          <div className="flex gap-2">
            <button onClick={() => (flowMode === mode ? resetAndClose() : setStep('amount'))} className="flex-1 py-3 rounded-xl text-sm font-semibold" style={{ background: '#F3F4F6', color: '#6B7280' }}>
              Back
            </button>
            <button onClick={continuePayoff} disabled={insufficient} className="flex-1 py-3 rounded-xl text-sm font-semibold" style={{ background: insufficient ? '#E5E7EB' : '#1F2937', color: insufficient ? '#9CA3AF' : '#F5C000' }}>
              Continue to PIN
            </button>
          </div>
          {insufficient && (
            <div className="flex gap-2">
              <button onClick={() => { setFlowMode('extra'); setAmount(mainBalance.toFixed(2)); setStep('amount') }} className="flex-1 py-2.5 rounded-xl text-xs font-semibold" style={{ background: '#FFF3CC', color: '#C99A00', border: '1px solid #F5C000' }}>
                Pay extra instead
              </button>
              <button onClick={onAddMoney} className="flex-1 py-2.5 rounded-xl text-xs font-semibold" style={{ background: '#F5C000', color: '#1F2937' }}>
                Add money
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="rounded-xl p-3 flex items-center justify-between" style={{ background: '#FFF3CC' }}>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#1F2937' }}>Pay from GCB Main Account</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>••• 4521 · Balance GHS {mainBalance.toFixed(2)}</p>
            </div>
            <IconBanknote size={19} color="#C99A00" />
          </div>
          <label className="text-xs font-medium" style={{ color: '#6B7280' }}>
            Amount to pay
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={event => setAmount(event.target.value)}
              className="w-full mt-1 rounded-xl px-4 py-3 text-xl font-bold outline-none text-center"
              style={{ background: '#F9FAFB', border: `2px solid ${amountInvalid && amount ? '#FECACA' : '#F5C000'}`, color: '#1F2937' }}
            />
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[10, 20, 50].map(value => (
              <button
                key={value}
                onClick={() => setAmount(value.toFixed(2))}
                className="py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: Number(amount) === value ? '#F5C000' : '#F9FAFB',
                  color: Number(amount) === value ? '#1F2937' : '#6B7280',
                  border: '1px solid #E5E7EB',
                }}
              >
                GHS {value}
              </button>
            ))}
            <button
              onClick={() => setAmount(outstanding.toFixed(2))}
              className="py-2 rounded-xl text-xs font-semibold"
              style={{
                background: Math.round(Number(amount) * 100) >= outstandingPesewas ? '#F5C000' : '#F9FAFB',
                color: '#1F2937',
                border: '1px solid #E5E7EB',
              }}
            >
              Full balance
            </button>
          </div>
          {enteredPesewas > outstandingPesewas && (
            <p className="text-xs text-center" style={{ color: '#C99A00' }}>
              Payment capped at the GHS {outstanding.toFixed(2)} outstanding balance.
            </p>
          )}
          {selectedPesewas > Math.round(mainBalance * 100) && (
            <p className="text-xs text-center" style={{ color: '#EF4444' }}>
              Amount exceeds your available GCB balance.
            </p>
          )}
          {payment > 0 && (
            <div className="rounded-xl p-3 text-xs leading-relaxed" style={{ background: '#F9FAFB', color: '#6B7280' }}>
              Outstanding after this payment: <span className="font-bold" style={{ color: '#1F2937' }}>GHS {Math.max(0, outstanding - payment).toFixed(2)}</span> · Estimated payoff: <span className="font-semibold" style={{ color: '#C99A00' }}>{estimatedPayoffDate(Math.max(0, outstanding - payment))}</span>
            </div>
          )}
          {leavesBelowSafeguard && !amountInvalid && (
            <div className="rounded-xl p-3 text-xs leading-relaxed" style={{ background: '#FFF3CC', color: '#6B7280', border: '1px solid #F5C000' }}>
              This payment leaves your GCB balance below your GHS {balanceSafeguard.toFixed(2)} safeguard. You can still continue.
            </div>
          )}
          <button
            type="button"
            onClick={continueExtra}
            disabled={amountInvalid}
            className="w-full py-3 rounded-xl text-sm font-semibold"
            style={{ background: amountInvalid ? '#E5E7EB' : '#1F2937', color: amountInvalid ? '#9CA3AF' : '#F5C000' }}
          >
            Continue to PIN
          </button>
        </>
      )}
    </BottomSheet>
  )
}

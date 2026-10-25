'use client'

import React, { useState } from 'react'
import type { AdvanceRepaymentPlan, BorrowStep, RepaymentPace } from '@/types'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { PinEntry } from '@/components/ui/PinEntry'
import {
  MONTHLY_RATE,
  ROUND_UP_MONTHLY,
  REPAYMENT_PACES,
} from '@/constants'
import {
  IconBanknote,
  IconCheck,
  IconLoader,
  IconPower,
} from '@/components/icons'

export function BorrowSheet({
  open,
  onClose,
  onBorrow,
  pinCode,
}: {
  open: boolean
  onClose: () => void
  onBorrow: (amount: number, plan: AdvanceRepaymentPlan) => void
  pinCode: string
}) {
  const [step, setStep] = useState<BorrowStep>('intro')
  const [loanAmount, setLoanAmount] = useState(200)
  const [repaymentPace, setRepaymentPace] = useState<RepaymentPace>('standard')
  const [confirming, setConfirming] = useState(false)
  const [pin, setPin] = useState('')
  const interest = +(loanAmount * MONTHLY_RATE).toFixed(2)
  const totalOwed = +(loanAmount + interest).toFixed(2)
  const selectedPace = REPAYMENT_PACES.find(pace => pace.id === repaymentPace) ?? REPAYMENT_PACES[1]
  const topUp = +(selectedPace.baseTopUp * (totalOwed / 205)).toFixed(2)
  const streakDays = 14
  const qualified = streakDays >= 7 && ROUND_UP_MONTHLY >= 10

  function startCheck() {
    setStep('check')
    setTimeout(() => setStep(qualified ? 'qualified' : 'unqualified'), 2200)
  }

  function handleConfirm() {
    if (pin.length !== 4) return
    setConfirming(true)
    setTimeout(() => {
      onBorrow(loanAmount, { pace: repaymentPace, topUp })
      setConfirming(false)
      setStep('confirmed')
    }, 1400)
  }

  function handleClose() {
    setStep('intro')
    setLoanAmount(200)
    setRepaymentPace('standard')
    setPin('')
    setConfirming(false)
    onClose()
  }

  return (
    <BottomSheet open={open} onClose={handleClose} title={step === 'plan' ? 'Choose your repayment pace' : 'GCoins Advance'}>
      {step === 'intro' && (
        <div className="flex flex-col gap-4">
          <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: '#FFF3CC' }}>
            <IconBanknote size={20} color="#C99A00" />
            <div>
              <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>Get funds in advance</p>
              <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>
                Borrow against your savings activity and repay through future round-ups. Interest at GCB's standard rate of 2.5%/month.
              </p>
            </div>
          </div>
          {[
            'No new account or paperwork required',
            'Repayment deducted via round-ups automatically',
            'Governed by Bank of Ghana lending guidelines',
          ].map(pt => (
            <div key={pt} className="flex gap-2 items-start text-xs" style={{ color: '#6B7280' }}>
              <IconCheck size={12} color="#F5C000" />
              <span>{pt}</span>
            </div>
          ))}
          <button onClick={startCheck} className="w-full py-3 rounded-xl font-semibold text-sm" style={{ background: '#F5C000', color: '#1F2937' }}>
            Check My Eligibility
          </button>
        </div>
      )}

      {step === 'check' && (
        <div className="flex flex-col items-center py-8 gap-4">
          <IconLoader size={36} color="#F5C000" />
          <div className="text-center">
            <p className="font-semibold text-sm" style={{ color: '#1F2937' }}>Checking your profile…</p>
            <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>Reviewing round-up history and account standing</p>
          </div>
          <div className="w-full rounded-full overflow-hidden h-1.5" style={{ background: '#F3F4F6' }}>
            <div className="h-full rounded-full" style={{ background: '#F5C000', animation: 'progress 2.2s linear forwards' }} />
          </div>
        </div>
      )}

      {step === 'unqualified' && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center py-4 gap-2">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#FEF2F2' }}>
              <IconPower size={24} color="#EF4444" />
            </div>
            <p className="font-semibold text-sm" style={{ color: '#1F2937' }}>Not yet eligible</p>
          </div>
          <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
            <p className="text-xs font-semibold" style={{ color: '#374151' }}>Requirements to qualify:</p>
            {[
              { label: 'Active round-ups for 7+ days', met: streakDays >= 7 },
              { label: 'Monthly round-ups of at least GHS 10', met: ROUND_UP_MONTHLY >= 10 },
              { label: 'Account in good standing', met: true },
            ].map(req => (
              <div key={req.label} className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: req.met ? '#D1FAE5' : '#FEE2E2' }}>
                  {req.met ? <IconCheck size={9} color="#059669" /> : <IconPower size={9} color="#EF4444" />}
                </div>
                <span style={{ color: req.met ? '#374151' : '#9CA3AF' }}>{req.label}</span>
              </div>
            ))}
          </div>
          <button onClick={handleClose} className="w-full py-3 rounded-xl font-semibold text-sm" style={{ background: '#F3F4F6', color: '#6B7280' }}>
            Got it
          </button>
        </div>
      )}

      {step === 'qualified' && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#D1FAE5' }}>
              <IconCheck size={14} color="#059669" />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#059669' }}>You're eligible</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>Select how much to borrow</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[100, 200, 500, 1000].map(amt => (
              <button
                key={amt}
                onClick={() => setLoanAmount(amt)}
                className="py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: loanAmount === amt ? '#1F2937' : '#F9FAFB',
                  color: loanAmount === amt ? '#F5C000' : '#374151',
                  border: loanAmount === amt ? '1.5px solid #1F2937' : '1px solid #E5E7EB',
                }}
              >
                GHS {amt}
              </button>
            ))}
          </div>
          <div className="rounded-xl p-3 flex flex-col gap-1.5 text-xs" style={{ background: '#FFF3CC' }}>
            {[
              ['Loan amount', `GHS ${loanAmount.toFixed(2)}`],
              ['Interest (2.5%/month)', `GHS ${interest.toFixed(2)}`],
              ['Total to repay', `GHS ${totalOwed.toFixed(2)}`],
            ].map(([l, v], i, arr) => (
              <div
                key={l}
                className="flex justify-between"
                style={{
                  fontWeight: i === arr.length - 1 ? 700 : 400,
                  borderTop: i === arr.length - 1 ? '1px solid rgba(245,192,0,0.4)' : 'none',
                  paddingTop: i === arr.length - 1 ? 6 : 0,
                  marginTop: i === arr.length - 1 ? 2 : 0,
                }}
              >
                <span style={{ color: '#6B7280' }}>{l}</span>
                <span style={{ color: '#C99A00' }}>{v}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setStep('plan')} className="w-full py-3 rounded-xl font-semibold text-sm" style={{ background: '#F5C000', color: '#1F2937' }}>
            See Repayment Plan
          </button>
        </div>
      )}

      {step === 'plan' && (
        <div className="flex flex-col gap-4">
          <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
            Choose how quickly you want to repay GHS {totalOwed.toFixed(2)} through automatic round-up top-ups.
          </p>
          <div className="flex flex-col gap-2.5" role="radiogroup" aria-label="Repayment pace">
            {REPAYMENT_PACES.map(pace => {
              const selected = repaymentPace === pace.id
              const paceTopUp = +(pace.baseTopUp * (totalOwed / 205)).toFixed(2)
              return (
                <button
                  key={pace.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setRepaymentPace(pace.id)}
                  className="w-full rounded-xl p-3.5 text-left transition-colors"
                  style={{
                    background: selected ? '#FFF3CC' : '#FFFFFF',
                    border: selected ? '2px solid #F5C000' : '1px solid #E5E7EB',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ border: selected ? '2px solid #F5C000' : '1.5px solid #9CA3AF', background: selected ? '#F5C000' : 'transparent' }}
                    >
                      {selected && <IconCheck size={11} color="#1F2937" />}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold" style={{ color: '#1F2937' }}>{pace.label}</span>
                        {pace.recommended && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: '#F5C000', color: '#1F2937' }}>
                            Recommended
                          </span>
                        )}
                      </span>
                      <span className="block text-xs mt-0.5" style={{ color: '#6B7280' }}>{pace.period}</span>
                      <span className="flex items-end justify-between gap-2 mt-2">
                        <span className="text-[11px]" style={{ color: '#9CA3AF' }}>{pace.description}</span>
                        <span className="text-sm font-bold whitespace-nowrap" style={{ color: '#C99A00' }}>GHS {paceTopUp.toFixed(2)}</span>
                      </span>
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
          <div className="rounded-xl px-3.5 py-3 flex items-center justify-between" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
            <div>
              <p className="text-[11px]" style={{ color: '#6B7280' }}>Your selected top-up</p>
              <p className="text-xs font-semibold mt-0.5" style={{ color: '#1F2937' }}>{selectedPace.label} · {selectedPace.period}</p>
            </div>
            <p className="text-base font-bold" style={{ color: '#C99A00' }}>+GHS {topUp.toFixed(2)}</p>
          </div>
          <p className="text-[11px] leading-relaxed" style={{ color: '#6B7280' }}>
            GHS {topUp.toFixed(2)} will be deducted alongside every eligible round-up and applied directly to reduce your outstanding GCoins Advance balance.
          </p>
          <div className="flex gap-2">
            <button onClick={() => setStep('qualified')} className="flex-1 py-2.5 rounded-xl text-xs font-semibold" style={{ background: '#F9FAFB', color: '#6B7280', border: '1px solid #E5E7EB' }}>
              Change Amount
            </button>
            <button
              onClick={() => setStep('pin')}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
              style={{ background: '#1F2937', color: '#F5C000' }}
            >
              Continue with {selectedPace.label}
            </button>
          </div>
        </div>
      )}

      {step === 'pin' && (
        <PinEntry
          amount={loanAmount}
          actionLabel="GCoins Advance"
          pin={pin}
          expectedPin={pinCode}
          onPinChange={setPin}
          onBack={() => setStep('plan')}
          onAuthorise={handleConfirm}
          processing={confirming}
        />
      )}

      {step === 'confirmed' && (
        <div className="flex flex-col items-center py-6 gap-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#D1FAE5' }}>
            <IconCheck size={30} color="#059669" />
          </div>
          <p className="font-bold text-base" style={{ color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
            GHS {loanAmount.toFixed(2)} disbursed!
          </p>
          <p className="text-xs text-center" style={{ color: '#6B7280' }}>
            Funds are in your GCB main account. Your {selectedPace.label.toLowerCase()} rule will apply GHS {topUp.toFixed(2)} from each eligible round-up directly to the GHS {totalOwed.toFixed(2)} balance.
          </p>
          <button onClick={handleClose} className="w-full py-3 rounded-xl font-semibold text-sm mt-2" style={{ background: '#F5C000', color: '#1F2937' }}>
            Done
          </button>
        </div>
      )}
    </BottomSheet>
  )
}

'use client'

import React, { useState } from 'react'
import type {
  AdvancePaymentMode,
  AdvanceRepaymentPlan,
  ClaimedVoucher,
  LedgerTransaction,
  RedemptionCategory,
  ReminderFrequency,
  RepaymentPace,
} from '@/types'
import { REPAYMENT_PACES } from '@/constants'
import { Toggle } from '@/components/ui/Toggle'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { AddMoneySheet } from '@/components/sheets/AddMoneySheet'
import { WithdrawSheet } from '@/components/sheets/WithdrawSheet'
import { BorrowSheet } from '@/components/sheets/BorrowSheet'
import { ReminderSheet } from '@/components/sheets/ReminderSheet'
import { RewardsSheet } from '@/components/sheets/RewardsSheet'
import { TransactionHistoryList } from '@/components/screens/TransactionHistoryList'
import {
  IconArrowDown,
  IconBanknote,
  IconBot,
  IconCheck,
  IconChevronRight,
  IconEye,
  IconFlame,
  IconPause,
  IconPlay,
  IconPlus,
  IconPower,
  IconTarget,
} from '@/components/icons'

export function HomeScreen({
  roundUpOn,
  roundUpPaused,
  vaultBalance,
  mainAccountBalance,
  roundUpMultiple,
  monthlyTotal,
  weeklyRoundUps,
  streakDays,
  reminderFrequency,
  pinCode,
  loyaltyPoints,
  freezeEnabled,
  freezeUsed,
  claimedVouchers,
  advanceTotal,
  advanceOutstanding,
  advanceActive,
  advanceCleared,
  advanceEligible,
  advanceDueAt,
  advanceRepaymentPace,
  advanceTopUp,
  balanceSafeguard,
  transactions,
  onEnableRequest,
  onPause,
  onResume,
  onEnd,
  onAdd,
  onWithdraw,
  onBorrow,
  onOpenRepay,
  onReminderChange,
  onToggleFreeze,
  onRedeemPoints,
  onRedeemReward,
  onMarkVoucherUsed,
  onGoToGoals,
}: {
  roundUpOn: boolean
  roundUpPaused: boolean
  vaultBalance: number
  mainAccountBalance: number
  roundUpMultiple: number
  monthlyTotal: number
  weeklyRoundUps: number
  streakDays: number
  loyaltyPoints: number
  freezeEnabled: boolean
  freezeUsed: boolean
  claimedVouchers: ClaimedVoucher[]
  reminderFrequency: ReminderFrequency
  pinCode: string
  advanceBorrowed: number
  advanceTotal: number
  advanceOutstanding: number
  advanceActive: boolean
  advanceCleared: boolean
  advanceEligible: boolean
  advanceDueAt: number | null
  advanceRepaymentPace: RepaymentPace
  advanceTopUp: number
  balanceSafeguard: number
  transactions: LedgerTransaction[]
  onEnableRequest: () => void
  onPause: () => void
  onResume: () => void
  onEnd: () => void
  onAdd: (n: number) => void
  onWithdraw: (n: number) => number
  onBorrow: (amount: number, plan: AdvanceRepaymentPlan) => void
  onOpenRepay: (mode: AdvancePaymentMode) => void
  onReminderChange: (frequency: ReminderFrequency) => void
  onToggleFreeze: () => void
  onRedeemPoints: () => void
  onRedeemReward: (category: RedemptionCategory, points: number, reward: string) => boolean
  onMarkVoucherUsed: (id: string) => void
  onGoToGoals: () => void
}) {
  const [sheet, setSheet] = useState<'addMoney' | 'withdraw' | 'borrow' | null>(null)
  const [showReminder, setShowReminder] = useState(false)
  const [showRewards, setShowRewards] = useState(false)
  const [showAdvanceDetails, setShowAdvanceDetails] = useState(false)
  const isActive = roundUpOn && !roundUpPaused
  const repaidAmount = Math.max(0, advanceTotal - advanceOutstanding)
  const repaidPercentage = advanceTotal > 0 ? Math.min(100, Math.round((repaidAmount / advanceTotal) * 100)) : 0
  const repaymentPaceLabel = REPAYMENT_PACES.find(pace => pace.id === advanceRepaymentPace)?.label ?? 'Standard'
  const advanceDueDate = advanceDueAt ? new Date(advanceDueAt) : null
  const daysUntilDue = advanceDueAt ? Math.ceil((advanceDueAt - Date.now()) / 86400000) : null
  const advanceStatus = advanceCleared
    ? 'Cleared'
    : daysUntilDue !== null && daysUntilDue < 0
    ? 'Overdue'
    : daysUntilDue !== null && daysUntilDue <= 14
    ? 'Due soon'
    : 'On track'
  const advanceStatusStyle =
    advanceStatus === 'Overdue'
      ? { background: 'rgba(239,68,68,0.18)', color: '#FCA5A5' }
      : advanceStatus === 'Due soon'
      ? { background: 'rgba(245,192,0,0.16)', color: '#F5C000' }
      : { background: 'rgba(16,185,129,0.16)', color: '#6EE7B7' }

  return (
    <div className="flex flex-col gap-4 pb-6 relative">
      <AddMoneySheet open={sheet === 'addMoney'} onClose={() => setSheet(null)} onAdd={onAdd} pinCode={pinCode} />
      <WithdrawSheet
        open={sheet === 'withdraw'}
        onClose={() => setSheet(null)}
        vaultBalance={vaultBalance}
        mainAccountBalance={mainAccountBalance}
        onWithdraw={onWithdraw}
        pinCode={pinCode}
      />
      <BorrowSheet open={sheet === 'borrow'} onClose={() => setSheet(null)} onBorrow={onBorrow} pinCode={pinCode} />
      <ReminderSheet open={showReminder} onClose={() => setShowReminder(false)} frequency={reminderFrequency} onChange={onReminderChange} />
      <RewardsSheet
        open={showRewards}
        onClose={() => setShowRewards(false)}
        streakDays={streakDays}
        points={loyaltyPoints}
        vaultBalance={vaultBalance}
        freezeEnabled={freezeEnabled}
        freezeUsed={freezeUsed}
        advanceOutstanding={advanceOutstanding}
        vouchers={claimedVouchers}
        onToggleFreeze={onToggleFreeze}
        onRedeemForAdvance={onRedeemPoints}
        onRedeemReward={onRedeemReward}
        onMarkVoucherUsed={onMarkVoucherUsed}
      />
      <BottomSheet open={showAdvanceDetails} onClose={() => setShowAdvanceDetails(false)} title="GCoins Advance" fullHeight>
        {advanceActive ? (
          <>
            <div className="rounded-2xl p-4" style={{ background: '#1F2937' }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={advanceStatusStyle}>
                    {advanceStatus}
                  </span>
                  <p className="text-xs mt-3" style={{ color: '#9CA3AF' }}>Outstanding balance</p>
                  <p className="text-3xl font-bold mt-0.5 text-white" style={{ fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
                    GHS {advanceOutstanding.toFixed(2)}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: '#9CA3AF' }}>of GHS {advanceTotal.toFixed(2)} total</p>
                </div>
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'rgba(245,192,0,0.14)' }}>
                  <IconBanknote size={21} color="#F5C000" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span style={{ color: '#D1D5DB' }}>{repaidPercentage}% repaid</span>
                  <span style={{ color: '#9CA3AF' }}>GHS {repaidAmount.toFixed(2)} paid</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: '#374151' }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${repaidPercentage}%`, background: '#F5C000' }} />
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4 flex flex-col gap-3" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
              <div className="flex justify-between gap-4 text-sm">
                <span style={{ color: '#6B7280' }}>Estimated due date</span>
                <span className="font-semibold" style={{ color: '#1F2937' }}>
                  {advanceDueDate?.toLocaleDateString('en-GH', { day: 'numeric', month: 'short', year: 'numeric' }) ?? 'Not set'}
                </span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span style={{ color: '#6B7280' }}>Repayment pace</span>
                <span className="font-semibold" style={{ color: '#1F2937' }}>{repaymentPaceLabel}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span style={{ color: '#6B7280' }}>Per-transaction top-up</span>
                <span className="font-semibold" style={{ color: '#1F2937' }}>GHS {advanceTopUp.toFixed(2)}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span style={{ color: '#6B7280' }}>Balance safeguard</span>
                <span className="font-semibold" style={{ color: '#1F2937' }}>
                  {balanceSafeguard > 0 ? `GH₵ ${balanceSafeguard.toFixed(0)}` : 'Not set'}
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>Round-ups pause whenever your balance would fall below this amount.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setShowAdvanceDetails(false)
                  onOpenRepay('extra')
                }}
                className="flex-1 py-3 rounded-xl text-sm font-semibold"
                style={{ background: '#F3F4F6', color: '#1F2937', border: '1px solid #E5E7EB' }}
              >
                Pay extra
              </button>
              <button
                onClick={() => {
                  setShowAdvanceDetails(false)
                  onOpenRepay('payoff')
                }}
                className="flex-1 py-3 rounded-xl text-sm font-semibold"
                style={{ background: '#F5C000', color: '#1F2937' }}
              >
                Pay off now
              </button>
            </div>
            <p className="text-xs text-center leading-relaxed" style={{ color: '#9CA3AF' }}>Clear your balance early anytime with no penalty.</p>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#D1FAE5' }}>
              <IconCheck size={30} color="#059669" />
            </div>
            <p className="text-lg font-bold mt-3" style={{ color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
              Advance cleared
            </p>
            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>Your balance is settled and automatic repayment top-ups have stopped.</p>
            {advanceEligible && (
              <button
                onClick={() => {
                  setShowAdvanceDetails(false)
                  setSheet('borrow')
                }}
                className="w-full mt-5 py-3 rounded-xl text-sm font-semibold"
                style={{ background: '#F5C000', color: '#1F2937' }}
              >
                Borrow again
              </button>
            )}
          </div>
        )}
      </BottomSheet>

      {/* Hero balance card */}
      <div
        className="gcoins-hero mx-4 mt-4 rounded-2xl p-6 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)' }}
      >
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: '#F5C000', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-10 w-24 h-24 rounded-full opacity-10" style={{ background: '#F5C000', transform: 'translate(-30%, 30%)' }} />
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium" style={{ color: '#9CA3AF' }}>GCoins Balance</p>
          <IconEye size={15} color="#9CA3AF" />
        </div>
        <h2 className="text-4xl font-bold mt-1 mb-4" style={{ fontFamily: 'var(--font-display, "DM Serif Display", serif)', color: '#F5C000' }}>
          GHS {vaultBalance.toFixed(2)}
        </h2>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-xs" style={{ color: '#9CA3AF' }}>This week</span>
            <span className="text-base font-semibold text-white">+GH₵ {weeklyRoundUps.toFixed(2)}</span>
          </div>
          <div className="w-px bg-gray-600" />
          <div className="flex flex-col">
            <span className="text-xs" style={{ color: '#9CA3AF' }}>Streak</span>
            <span className="text-base font-semibold text-white flex items-center gap-1">
              {streakDays} days <IconFlame size={14} />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-3 text-[11px]" style={{ color: '#F5C000' }}>
          <span>{loyaltyPoints} points ·</span>
          <button
            type="button"
            onClick={() => setShowRewards(true)}
            className="font-semibold underline underline-offset-2"
            style={{ background: 'transparent', border: 'none', padding: 0, color: '#F5C000' }}
          >
            View rewards ›
          </button>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mx-4 grid grid-cols-2 gap-3">
        {[
          { label: 'Add Money', Icon: IconPlus, action: 'addMoney' as const },
          { label: 'Withdraw', Icon: IconArrowDown, action: 'withdraw' as const },
          { label: 'Set Goal', Icon: IconTarget, action: null, onTap: onGoToGoals },
          { label: 'Borrow', Icon: IconBanknote, action: 'borrow' as const, highlight: true },
        ].map(({ label, Icon, action, highlight, onTap }) => (
          <button
            key={label}
            onClick={() => (action ? setSheet(action) : onTap?.())}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition-all active:scale-95"
            style={{
              background: highlight ? '#1F2937' : '#FFFFFF',
              color: highlight ? '#F5C000' : '#1F2937',
              border: highlight ? 'none' : '1px solid #E5E7EB',
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: highlight ? 'rgba(245,192,0,0.15)' : '#FFF3CC' }}
            >
              <Icon size={17} color={highlight ? '#F5C000' : '#C99A00'} />
            </div>
            {label}
          </button>
        ))}
      </div>

      {(advanceActive || advanceCleared) && (
        <button
          type="button"
          onClick={() => setShowAdvanceDetails(true)}
          className="mx-4 rounded-2xl px-4 py-3.5 flex items-center gap-3 text-left"
          style={{ background: '#1F2937', border: '1px solid #F5C000' }}
        >
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,192,0,0.14)' }}>
            <IconBanknote size={18} color="#F5C000" />
          </div>
          <span className="text-sm font-semibold text-white">GCoins Advance</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold ml-auto" style={advanceStatusStyle}>
            {advanceStatus}
          </span>
          <IconChevronRight size={18} color="#F5C000" />
        </button>
      )}

      {/* Round-up control */}
      <div className="mx-4 rounded-2xl p-4" style={{ background: '#FFFFFF' }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-semibold text-sm" style={{ color: '#1F2937' }}>Round-Up Savings</p>
            <p className="text-xs mt-0.5" style={{ color: roundUpPaused ? '#C99A00' : !roundUpOn ? '#EF4444' : '#6B7280' }}>
              {!roundUpOn ? 'Automation ended' : roundUpPaused ? 'Paused' : 'Spare change goes straight to your vault'}
            </p>
          </div>
          <Toggle
            on={isActive}
            onToggle={() => {
              if (!roundUpOn) onEnableRequest()
              else if (roundUpPaused) onResume()
              else onEnd()
            }}
          />
        </div>
        <div className="rounded-xl p-3 text-sm mb-3" style={{ background: isActive ? '#FFF3CC' : '#F9FAFB' }}>
          <div className="flex justify-between">
            <span style={{ color: '#6B7280' }}>Round-up target</span>
            <span className="font-semibold" style={{ color: isActive ? '#C99A00' : '#9CA3AF' }}>Nearest GH₵ {roundUpMultiple}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span style={{ color: '#6B7280' }}>Balance safeguard</span>
            <span className="font-semibold" style={{ color: balanceSafeguard > 0 ? (isActive ? '#C99A00' : '#9CA3AF') : '#9CA3AF' }}>
              {balanceSafeguard > 0 ? `GH₵ ${balanceSafeguard.toFixed(0)}` : 'Not set'}
            </span>
          </div>
          <div className="flex justify-between mt-1">
            <span style={{ color: '#6B7280' }}>Total this month</span>
            <span className="font-semibold" style={{ color: monthlyTotal > 0 ? '#C99A00' : '#9CA3AF' }}>GH₵ {monthlyTotal.toFixed(2)}</span>
          </div>
        </div>
        {roundUpOn && (
          <div className="flex gap-2">
            <button
              onClick={roundUpPaused ? onResume : onPause}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              style={{
                background: roundUpPaused ? '#FFF3CC' : '#F9FAFB',
                color: roundUpPaused ? '#C99A00' : '#6B7280',
                border: roundUpPaused ? '1.5px solid #F5C000' : '1px solid #E5E7EB',
              }}
            >
              {roundUpPaused ? (
                <>
                  <IconPlay size={11} color="#C99A00" /> Resume
                </>
              ) : (
                <>
                  <IconPause size={11} color="#6B7280" /> Pause
                </>
              )}
            </button>
            <button
              onClick={onEnd}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
              style={{ background: '#FEF2F2', color: '#EF4444', border: '1px solid #FECACA' }}
            >
              <IconPower size={12} color="#EF4444" /> End
            </button>
          </div>
        )}
        {!roundUpOn && (
          <button
            onClick={onEnableRequest}
            className="w-full py-2.5 rounded-xl text-xs font-semibold"
            style={{ background: '#FFF3CC', color: '#C99A00', border: '1.5px solid #F5C000' }}
          >
            Re-enable Automation
          </button>
        )}
      </div>

      {/* GCoins Reminder */}
      <button onClick={() => setShowReminder(true)} className="mx-4 rounded-2xl p-4 text-left" style={{ background: '#FFFFFF', border: 'none' }}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FFF3CC' }}>
            <IconBot size={18} color="#C99A00" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-sm" style={{ color: '#1F2937' }}>GCoins Reminder</p>
              <span className="text-xs font-semibold" style={{ color: reminderFrequency === 'Off' ? '#9CA3AF' : '#C99A00' }}>
                {reminderFrequency}
              </span>
            </div>
            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>
              {reminderFrequency === 'Off'
                ? 'Reminders are off. Tap to explore reminder options.'
                : `"You're GH₵ 759.50 away from your Emergency Fund goal. At your current pace, you'll hit it by Nov 2026!"`}
            </p>
          </div>
        </div>
      </button>

      {/* Recent transactions */}
      <div className="mx-4">
        <h3 className="font-semibold text-sm mb-3" style={{ color: '#374151' }}>Recent Transactions</h3>
        <TransactionHistoryList transactions={transactions} limit={4} />
      </div>
    </div>
  )
}

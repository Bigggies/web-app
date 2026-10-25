'use client'

import React, { useState } from 'react'
import type { ClaimedVoucher, RedemptionCategory } from '@/types'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { Toggle } from '@/components/ui/Toggle'
import {
  FREEZE_BALANCE_MINIMUM,
  FREEZE_POINT_COST,
  LOAN_REDEMPTION_POINTS,
  LOYALTY_TIERS,
  REDEMPTION_OPTIONS,
  rewardForStreakDay,
} from '@/constants'
import {
  IconBriefcase,
  IconChevronRight,
  IconCoin,
  IconFlame,
  IconSmartphone,
  IconTag,
  IconZap,
} from '@/components/icons'

export function RewardsSheet({
  open,
  onClose,
  streakDays,
  points,
  vaultBalance,
  freezeEnabled,
  freezeUsed,
  advanceOutstanding,
  vouchers,
  onToggleFreeze,
  onRedeemForAdvance,
  onRedeemReward,
  onMarkVoucherUsed,
}: {
  open: boolean
  onClose: () => void
  streakDays: number
  points: number
  vaultBalance: number
  freezeEnabled: boolean
  freezeUsed: boolean
  advanceOutstanding: number
  vouchers: ClaimedVoucher[]
  onToggleFreeze: () => void
  onRedeemForAdvance: () => void
  onRedeemReward: (category: RedemptionCategory, points: number, reward: string) => boolean
  onMarkVoucherUsed: (id: string) => void
}) {
  const [view, setView] = useState<'overview' | 'redeem' | RedemptionCategory | 'vouchers'>('overview')
  const [message, setMessage] = useState('')
  const [copiedVoucherId, setCopiedVoucherId] = useState<string | null>(null)
  const reward = rewardForStreakDay(Math.max(1, streakDays))
  const nextTier = LOYALTY_TIERS.find(tier => tier.min > streakDays)
  const canFundFreeze = vaultBalance >= FREEZE_BALANCE_MINIMUM || points >= FREEZE_POINT_COST
  const canRedeem = advanceOutstanding > 0 && streakDays >= 7 && points >= LOAN_REDEMPTION_POINTS
  const viewTitles = {
    overview: 'GCoins Rewards',
    redeem: 'Redeem Points',
    airtime: 'Airtime',
    data: 'Data Bundle',
    lifestyle: 'Lifestyle Rewards',
    vouchers: 'View Voucher Code',
  }

  function close() {
    setView('overview')
    setMessage('')
    setCopiedVoucherId(null)
    onClose()
  }

  function goBack() {
    setMessage('')
    setCopiedVoucherId(null)
    setView(view === 'redeem' ? 'overview' : 'redeem')
  }

  function redeem(category: RedemptionCategory, option: { reward: string; points: number }) {
    if (onRedeemReward(category, option.points, option.reward)) {
      setMessage(`${option.reward} redeemed successfully.`)
    }
  }

  return (
    <BottomSheet open={open} onClose={close} title={viewTitles[view]}>
      {view !== 'overview' && (
        <button
          type="button"
          onClick={goBack}
          className="self-start text-xs font-semibold flex items-center gap-1"
          style={{ background: 'transparent', border: 'none', color: '#6B7280' }}
        >
          <span style={{ transform: 'rotate(180deg)', display: 'flex' }}>
            <IconChevronRight size={13} color="#6B7280" />
          </span>
          Back
        </button>
      )}

      {view === 'overview' && (
        <>
          <div className="rounded-2xl p-4" style={{ background: '#1F2937' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>Current streak</p>
                <p className="text-2xl font-bold text-white flex items-center gap-1.5">
                  <IconFlame size={20} /> {streakDays} days
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs" style={{ color: '#9CA3AF' }}>Available points</p>
                <p className="text-xl font-bold" style={{ color: '#F5C000' }}>
                  {points.toLocaleString()} pts
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-xl px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <p className="text-[10px]" style={{ color: '#9CA3AF' }}>Current tier</p>
              <p className="text-sm font-semibold" style={{ color: reward.tier.color }}>
                {reward.tier.name}
              </p>
            </div>
            {nextTier && (
              <p className="text-[10px] mt-2" style={{ color: '#9CA3AF' }}>
                {Math.max(0, nextTier.min - streakDays)} more active day{nextTier.min - streakDays === 1 ? '' : 's'} to reach {nextTier.name}
              </p>
            )}
          </div>

          <div className="rounded-xl p-3.5 flex items-start gap-3" style={{ background: '#FFF3CC' }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F5C000' }}>
              <IconCoin size={18} color="#1F2937" />
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#1F2937' }}>Points are earned automatically</p>
              <p className="text-[11px] mt-1 leading-relaxed" style={{ color: '#6B7280' }}>
                Keep saving daily and maintaining your streak. Verified seven-day activity milestones earn additional rewards automatically.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setView('redeem')}
            className="w-full rounded-xl px-4 py-3.5 flex items-center justify-between text-left"
            style={{ background: '#F5C000', color: '#1F2937' }}
          >
            <div>
              <p className="text-sm font-bold">Redeem Points</p>
              <p className="text-[11px] mt-0.5">Use your {points.toLocaleString()} available points</p>
            </div>
            <IconChevronRight size={18} color="#1F2937" />
          </button>

          <div className="rounded-xl p-3.5" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>Streak Freeze</p>
                <p className="text-[11px] mt-1 leading-relaxed" style={{ color: '#6B7280' }}>
                  Protect one missed day per 30-day cycle using your points or qualifying Vault balance.
                </p>
              </div>
              <Toggle on={freezeEnabled && !freezeUsed} onToggle={onToggleFreeze} />
            </div>
            <p
              className="text-[10px] mt-2 font-medium"
              style={{ color: freezeUsed ? '#EF4444' : canFundFreeze ? '#059669' : '#C99A00' }}
            >
              {freezeUsed
                ? 'Freeze already used this cycle'
                : canFundFreeze
                ? freezeEnabled
                  ? 'Auto-freeze ready'
                  : 'Freeze protection is off'
                : 'Continue saving to unlock protection'}
            </p>
          </div>

          <div className="rounded-xl p-3.5" style={{ background: advanceOutstanding > 0 ? '#1F2937' : '#F9FAFB' }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold" style={{ color: advanceOutstanding > 0 ? '#FFFFFF' : '#6B7280' }}>
                  Points toward GCoins Advance
                </p>
                <p className="text-[11px] mt-1" style={{ color: '#9CA3AF' }}>
                  {advanceOutstanding > 0 ? 'Use points to reduce interest first, then principal.' : 'No active advance balance.'}
                </p>
              </div>
              {advanceOutstanding > 0 && (
                <p className="text-xs font-bold whitespace-nowrap" style={{ color: '#F5C000' }}>
                  GHS {advanceOutstanding.toFixed(2)}
                </p>
              )}
            </div>
            {advanceOutstanding > 0 && (
              <button
                type="button"
                disabled={!canRedeem}
                onClick={onRedeemForAdvance}
                className="w-full mt-3 py-2.5 rounded-xl text-xs font-semibold"
                style={{ background: canRedeem ? '#F5C000' : '#374151', color: canRedeem ? '#1F2937' : '#9CA3AF' }}
              >
                {streakDays < 7 ? 'Unlocks at a 7-day streak' : points < LOAN_REDEMPTION_POINTS ? 'Keep earning points to redeem' : 'Apply points to Advance'}
              </button>
            )}
          </div>
        </>
      )}

      {view === 'redeem' && (
        <>
          <div className="rounded-2xl p-4 flex items-center justify-between" style={{ background: '#1F2937' }}>
            <div>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Available balance</p>
              <p className="text-2xl font-bold" style={{ color: '#F5C000' }}>{points.toLocaleString()} points</p>
            </div>
            <IconCoin size={30} color="#F5C000" />
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
            {[
              { label: 'Airtime', description: 'Convert points into mobile top-up credit', view: 'airtime' as const, Icon: IconSmartphone },
              { label: 'Data Bundle', description: 'Redeem internet data packages', view: 'data' as const, Icon: IconZap },
              { label: 'Lifestyle Rewards', description: 'Claim partner perks and shopping vouchers', view: 'lifestyle' as const, Icon: IconTag },
              { label: 'View Voucher Code', description: `${vouchers.length} claimed voucher${vouchers.length === 1 ? '' : 's'}`, view: 'vouchers' as const, Icon: IconBriefcase },
            ].map((item, index, items) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setView(item.view)}
                className="w-full px-4 py-3.5 flex items-center gap-3 text-left"
                style={{
                  background: '#FFFFFF',
                  border: 'none',
                  borderBottom: index < items.length - 1 ? '1px solid #E5E7EB' : 'none',
                }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FFF3CC' }}>
                  <item.Icon size={17} color="#C99A00" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>{item.label}</p>
                  <p className="text-[11px]" style={{ color: '#6B7280' }}>{item.description}</p>
                </div>
                <IconChevronRight size={15} color="#9CA3AF" />
              </button>
            ))}
          </div>
        </>
      )}

      {(view === 'airtime' || view === 'data' || view === 'lifestyle') && (
        <>
          <div className="rounded-xl px-4 py-3 flex justify-between items-center" style={{ background: '#FFF3CC' }}>
            <span className="text-xs" style={{ color: '#6B7280' }}>Available points</span>
            <span className="text-base font-bold" style={{ color: '#C99A00' }}>{points.toLocaleString()}</span>
          </div>
          {message && (
            <div className="rounded-xl p-3 text-xs font-semibold" style={{ background: '#D1FAE5', color: '#059669' }}>
              {message}
            </div>
          )}
          <div className="flex flex-col gap-2">
            {REDEMPTION_OPTIONS[view].map(option => {
              const affordable = points >= option.points
              return (
                <div
                  key={option.label}
                  className="rounded-xl p-3.5 flex items-center justify-between gap-3"
                  style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
                >
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>{option.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{option.points.toLocaleString()} points</p>
                  </div>
                  <button
                    type="button"
                    disabled={!affordable}
                    onClick={() => redeem(view, option)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: affordable ? '#F5C000' : '#E5E7EB', color: affordable ? '#1F2937' : '#9CA3AF' }}
                  >
                    Redeem
                  </button>
                </div>
              )
            })}
          </div>
          <p className="text-[10px] leading-relaxed" style={{ color: '#9CA3AF' }}>
            {view === 'lifestyle'
              ? 'A voucher code will be saved under View Voucher Code.'
              : 'The reward will be applied directly to your registered mobile number.'}
          </p>
        </>
      )}

      {view === 'vouchers' &&
        (vouchers.length > 0 ? (
          <div className="flex flex-col gap-2">
            {vouchers.map(voucher => (
              <div
                key={voucher.id}
                className="rounded-xl p-3.5"
                style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', opacity: voucher.used ? 0.65 : 1 }}
              >
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>{voucher.title}</p>
                    <p className="text-[10px]" style={{ color: '#9CA3AF' }}>Claimed {voucher.claimedAt}</p>
                  </div>
                  <span className="text-[10px] font-semibold" style={{ color: voucher.used ? '#9CA3AF' : '#059669' }}>
                    {voucher.used ? 'Used' : 'Active'}
                  </span>
                </div>
                <div className="mt-3 rounded-lg px-3 py-2.5 flex items-center justify-between" style={{ background: '#FFFFFF', border: '1px dashed #F5C000' }}>
                  <code className="text-sm font-bold tracking-wider" style={{ color: '#1F2937' }}>{voucher.code}</code>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText(voucher.code)
                      setCopiedVoucherId(voucher.id)
                    }}
                    className="text-xs font-semibold"
                    style={{ background: 'transparent', border: 'none', color: '#C99A00' }}
                  >
                    {copiedVoucherId === voucher.id ? 'Copied' : 'Copy'}
                  </button>
                </div>
                {!voucher.used && (
                  <button
                    type="button"
                    onClick={() => onMarkVoucherUsed(voucher.id)}
                    className="w-full mt-2 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: '#F3F4F6', color: '#6B7280' }}
                  >
                    Mark as used
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl p-6 text-center" style={{ background: '#F9FAFB' }}>
            <IconBriefcase size={26} color="#9CA3AF" />
            <p className="text-sm font-semibold mt-2" style={{ color: '#374151' }}>No voucher codes yet</p>
            <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>Claim a Lifestyle Reward to save its code here.</p>
          </div>
        ))}
    </BottomSheet>
  )
}

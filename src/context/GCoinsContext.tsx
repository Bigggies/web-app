'use client'

import React, { createContext, useContext, useState } from 'react'
import type {
  AdvancePaymentMode,
  AdvanceRepaymentPlan,
  AppMode,
  ClaimedVoucher,
  GcbTheme,
  GcbTransaction,
  Goal,
  LedgerTransaction,
  MonthlyRecord,
  NotificationItem,
  RedemptionCategory,
  ReminderFrequency,
  RepaymentPace,
  RoundUpResult,
  Screen,
} from '@/types'
import {
  baseGoals,
  calculateAdvanceDueAt,
  calendarDateKey,
  daysBetween,
  FREEZE_BALANCE_MINIMUM,
  FREEZE_POINT_COST,
  initialNotifications,
  initialTransactions,
  LOAN_REDEMPTION_POINTS,
  LOAN_REDEMPTION_VALUE,
  nextMonthLabel,
  rewardForStreakDay,
} from '@/constants'

interface GCoinsContextType {
  appMode: AppMode
  setAppMode: (mode: AppMode) => void
  gcbTheme: GcbTheme
  setGcbTheme: (theme: GcbTheme) => void
  screen: Screen
  setScreen: (screen: Screen) => void
  roundUpOn: boolean
  setRoundUpOn: (on: boolean) => void
  roundUpPaused: boolean
  setRoundUpPaused: (paused: boolean) => void
  vaultBalance: number
  setVaultBalance: React.Dispatch<React.SetStateAction<number>>
  monthlyTotal: number
  setMonthlyTotal: React.Dispatch<React.SetStateAction<number>>
  monthlyRecords: MonthlyRecord[]
  setMonthlyRecords: React.Dispatch<React.SetStateAction<MonthlyRecord[]>>
  weeklyRoundUps: number
  setWeeklyRoundUps: React.Dispatch<React.SetStateAction<number>>
  streakDays: number
  setStreakDays: React.Dispatch<React.SetStateAction<number>>
  loyaltyPoints: number
  setLoyaltyPoints: React.Dispatch<React.SetStateAction<number>>
  claimedVouchers: ClaimedVoucher[]
  setClaimedVouchers: React.Dispatch<React.SetStateAction<ClaimedVoucher[]>>
  freezeEnabled: boolean
  setFreezeEnabled: React.Dispatch<React.SetStateAction<boolean>>
  freezeUsed: boolean
  setFreezeUsed: React.Dispatch<React.SetStateAction<boolean>>
  transactionPin: string
  setTransactionPin: (pin: string) => void
  advanceBorrowed: number
  setAdvanceBorrowed: React.Dispatch<React.SetStateAction<number>>
  advanceTotal: number
  setAdvanceTotal: React.Dispatch<React.SetStateAction<number>>
  advanceOutstanding: number
  setAdvanceOutstanding: React.Dispatch<React.SetStateAction<number>>
  advanceActive: boolean
  setAdvanceActive: (active: boolean) => void
  advanceCleared: boolean
  setAdvanceCleared: (cleared: boolean) => void
  advanceRepaymentPace: RepaymentPace
  setAdvanceRepaymentPace: (pace: RepaymentPace) => void
  advanceTopUp: number
  setAdvanceTopUp: (topUp: number) => void
  advanceDueAt: number | null
  balanceSafeguard: number
  setBalanceSafeguard: (safeguard: number) => void
  roundUpMultiple: number
  setRoundUpMultiple: (multiple: number) => void
  showSetup: boolean
  setShowSetup: (show: boolean) => void
  mainAccountBalance: number
  setMainAccountBalance: React.Dispatch<React.SetStateAction<number>>
  reminderFrequency: ReminderFrequency
  setReminderFrequency: (freq: ReminderFrequency) => void
  goals: Goal[]
  setGoals: React.Dispatch<React.SetStateAction<Goal[]>>
  transactions: LedgerTransaction[]
  setTransactions: React.Dispatch<React.SetStateAction<LedgerTransaction[]>>
  notifications: NotificationItem[]
  setNotifications: React.Dispatch<React.SetStateAction<NotificationItem[]>>
  showNotifs: boolean
  setShowNotifs: (show: boolean) => void
  showProfile: boolean
  setShowProfile: (show: boolean) => void
  showRepayAdvance: boolean
  setShowRepayAdvance: (show: boolean) => void
  advancePaymentMode: AdvancePaymentMode
  setAdvancePaymentMode: (mode: AdvancePaymentMode) => void
  showLogout: boolean
  setShowLogout: (show: boolean) => void
  handleEnableRequest: () => void
  handleSetupSave: (target: number, safeguard: number) => void
  handleEnd: () => void
  handleVaultAddition: (amount: number) => void
  handleCompletedTransaction: (transaction: GcbTransaction) => RoundUpResult
  handleVaultWithdrawal: (amount: number) => number
  handleBorrow: (amount: number, plan: AdvanceRepaymentPlan) => void
  handleRepayAdvance: (amount: number, fullPayoff: boolean) => void
  handleRedeemPointsForAdvance: () => void
  handleRewardRedemption: (category: RedemptionCategory, points: number, reward: string) => boolean
  handleMarkVoucherUsed: (id: string) => void
  handleDeleteGoal: (goalId: number) => void
  handleGoalAllocation: (goalId: number, amount: number) => void
  handleGoalWithdrawal: (goalId: number) => void
  handleClearCompletedGoals: () => void
}

const GCoinsContext = createContext<GCoinsContextType | null>(null)

export function GCoinsProvider({ children }: { children: React.ReactNode }) {
  const [appMode, setAppMode] = useState<AppMode>('gcbHome')
  const [gcbTheme, setGcbTheme] = useState<GcbTheme>('dark')
  const [screen, setScreen] = useState<Screen>('home')
  const [roundUpOn, setRoundUpOn] = useState(true)
  const [roundUpPaused, setRoundUpPaused] = useState(false)
  const [vaultBalance, setVaultBalance] = useState(1240.5)
  const [monthlyTotal, setMonthlyTotal] = useState(43.15)
  const [monthlyRecords, setMonthlyRecords] = useState<MonthlyRecord[]>([
    { id: 1, label: 'September 2026', amount: 43.15, active: true },
  ])
  const [weeklyRoundUps, setWeeklyRoundUps] = useState(12.8)
  const [streakDays, setStreakDays] = useState(14)
  const [loyaltyPoints, setLoyaltyPoints] = useState(1000)
  const [claimedVouchers, setClaimedVouchers] = useState<ClaimedVoucher[]>([])
  const [lastVaultActivityDate, setLastVaultActivityDate] = useState(() => calendarDateKey(new Date(Date.now() - 86400000)))
  const [freezeEnabled, setFreezeEnabled] = useState(true)
  const [freezeUsed, setFreezeUsed] = useState(false)
  const [freezeCycleStart, setFreezeCycleStart] = useState(() => calendarDateKey(new Date(Date.now() - 14 * 86400000)))
  const [transactionPin, setTransactionPin] = useState('1234')
  const [advanceBorrowed, setAdvanceBorrowed] = useState(200)
  const [advanceTotal, setAdvanceTotal] = useState(210)
  const [advanceOutstanding, setAdvanceOutstanding] = useState(143.5)
  const [advanceActive, setAdvanceActive] = useState(true)
  const [advanceCleared, setAdvanceCleared] = useState(false)
  const [advanceRepaymentPace, setAdvanceRepaymentPace] = useState<RepaymentPace>('standard')
  const [advanceTopUp, setAdvanceTopUp] = useState(3.5)
  const [advanceDueAt, setAdvanceDueAt] = useState<number | null>(() => calculateAdvanceDueAt(143.5, 3.5))
  const [balanceSafeguard, setBalanceSafeguard] = useState(50)
  const [roundUpMultiple, setRoundUpMultiple] = useState(1)
  const [showSetup, setShowSetup] = useState(false)
  const [mainAccountBalance, setMainAccountBalance] = useState(10000)
  const [processedTransactionIds, setProcessedTransactionIds] = useState<Set<string>>(() => new Set())
  const [reminderFrequency, setReminderFrequency] = useState<ReminderFrequency>('Daily')
  const [goals, setGoals] = useState<Goal[]>(baseGoals)
  const [transactions, setTransactions] = useState<LedgerTransaction[]>(initialTransactions)
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications)

  const [showNotifs, setShowNotifs] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showRepayAdvance, setShowRepayAdvance] = useState(false)
  const [advancePaymentMode, setAdvancePaymentMode] = useState<AdvancePaymentMode>('extra')
  const [showLogout, setShowLogout] = useState(false)

  function handleEnableRequest() {
    setShowSetup(true)
  }

  function handleSetupSave(target: number, safeguard: number) {
    setShowSetup(false)
    setRoundUpMultiple(target)
    setBalanceSafeguard(safeguard)
    setRoundUpOn(true)
    setRoundUpPaused(false)
    setWeeklyRoundUps(0)
    setMonthlyRecords(records => {
      if (records.some(record => record.active)) return records
      const latest = records[records.length - 1]
      return [...records, { id: Date.now(), label: nextMonthLabel(latest?.label ?? 'September 2026'), amount: 0, active: true }]
    })
  }

  function handleEnd() {
    setRoundUpOn(false)
    setRoundUpPaused(false)
    setBalanceSafeguard(0)
    setRoundUpMultiple(1)
    setMonthlyTotal(0)
    setMonthlyRecords(records => records.map(record => (record.active ? { ...record, active: false } : record)))
  }

  function recordVaultActivity(resultingVaultBalance: number) {
    const today = calendarDateKey()
    const activityGap = daysBetween(lastVaultActivityDate, today)
    if (activityGap <= 0) return

    let usedThisCycle = freezeUsed
    if (daysBetween(freezeCycleStart, today) >= 30) {
      usedThisCycle = false
      setFreezeUsed(false)
      setFreezeCycleStart(today)
    }

    const canUseBalanceFreeze = resultingVaultBalance >= FREEZE_BALANCE_MINIMUM
    const canUsePointsFreeze = loyaltyPoints >= FREEZE_POINT_COST
    const freezeApplies = activityGap === 2 && freezeEnabled && !usedThisCycle && (canUseBalanceFreeze || canUsePointsFreeze)
    const nextStreak = activityGap === 1 || freezeApplies ? streakDays + 1 : 1
    const reward = rewardForStreakDay(nextStreak)
    const freezeCost = freezeApplies && !canUseBalanceFreeze ? FREEZE_POINT_COST : 0

    setStreakDays(nextStreak)
    setLastVaultActivityDate(today)
    setLoyaltyPoints(points => Math.max(0, points - freezeCost + reward.total))
    if (freezeApplies) setFreezeUsed(true)
    setNotifications(items => [
      {
        id: Date.now() + 2,
        title: freezeApplies ? 'Streak protected' : `${reward.tier.name} streak reward`,
        body: freezeApplies
          ? `Your Streak Freeze covered one missed day. You earned ${reward.total} points today.`
          : `${reward.total} loyalty points earned for your day ${nextStreak} Vault activity.`,
        time: 'Just now',
        dot: reward.tier.color,
        read: false,
      },
      ...items,
    ])
  }

  function handleVaultAddition(amount: number) {
    setMainAccountBalance(balance => +(balance - amount).toFixed(2))
    const nextVaultBalance = +(vaultBalance + amount).toFixed(2)
    setVaultBalance(nextVaultBalance)
    recordVaultActivity(nextVaultBalance)
    setTransactions(items => [
      {
        id: `vault-add-${Date.now()}`,
        merchant: 'GCoins Vault Deposit',
        category: 'Savings',
        amount: -amount,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'vault',
      },
      ...items,
    ])
  }

  function handleCompletedTransaction(transaction: GcbTransaction): RoundUpResult {
    if (processedTransactionIds.has(transaction.id)) {
      return {
        status: 'skipped',
        amount: 0,
        debit: transaction.totalDebit,
        advanceRepay: 0,
        advanceOutstandingLeft: advanceOutstanding,
        newVaultBalance: vaultBalance,
        newMainAccountBalance: mainAccountBalance,
        reason: 'duplicate',
      }
    }
    setProcessedTransactionIds(ids => new Set(ids).add(transaction.id))

    const debit = transaction.totalDebit
    let after = +(mainAccountBalance - debit).toFixed(2)

    const targetPesewas = Math.max(100, Math.round(roundUpMultiple * 100))
    const afterPesewas = Math.round(after * 100)
    const rawSparePesewas = afterPesewas % targetPesewas
    let spare = 0
    let spareReason: RoundUpResult['reason'] = undefined

    if (!roundUpOn) {
      spareReason = 'disabled'
    } else if (roundUpPaused) {
      spareReason = 'paused'
    } else if (rawSparePesewas === 0) {
      spareReason = 'whole-amount'
    } else {
      const uncappedSpare = rawSparePesewas / 100
      if (after - uncappedSpare < balanceSafeguard) {
        spareReason = 'balance-safeguard'
      } else {
        spare = +uncappedSpare.toFixed(2)
      }
    }

    after = +(after - spare).toFixed(2)
    const newVaultBalance = +(vaultBalance + spare).toFixed(2)

    let advanceRepay = 0
    if (advanceActive && advanceOutstanding > 0) {
      const plannedRepay = Math.min(advanceTopUp, advanceOutstanding)
      if (after - plannedRepay >= balanceSafeguard) {
        advanceRepay = +plannedRepay.toFixed(2)
      }
    }
    after = +(after - advanceRepay).toFixed(2)
    const advanceOutstandingLeft = +Math.max(0, advanceOutstanding - advanceRepay).toFixed(2)

    const result: RoundUpResult = {
      status: spare > 0 ? 'saved' : 'skipped',
      amount: spare,
      debit,
      advanceRepay,
      advanceOutstandingLeft,
      newVaultBalance,
      newMainAccountBalance: after,
      reason: spare === 0 ? spareReason : undefined,
    }

    setMainAccountBalance(after)
    const completedTransactions: LedgerTransaction[] = [
      {
        id: transaction.id,
        merchant: transaction.merchant,
        category: 'Mobile Money',
        amount: -debit,
        roundUp: spare,
        date: 'Just now',
        status: 'successful',
        source: 'gcb',
      },
    ]
    if (advanceRepay > 0) {
      completedTransactions.unshift({
        id: `advance-auto-${transaction.id}`,
        merchant: 'GCoins Advance Auto-Repayment',
        category: 'Savings',
        amount: -advanceRepay,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'gcoins',
      })
    }
    setTransactions(items => [...completedTransactions, ...items])

    if (spare > 0) {
      setVaultBalance(newVaultBalance)
      setMonthlyTotal(total => +(total + spare).toFixed(2))
      setMonthlyRecords(records =>
        records.map(record => (record.active ? { ...record, amount: +(record.amount + spare).toFixed(2) } : record)),
      )
      setWeeklyRoundUps(total => +(total + spare).toFixed(2))
      recordVaultActivity(newVaultBalance)
    }

    if (advanceRepay > 0) {
      setAdvanceOutstanding(advanceOutstandingLeft)
      if (advanceOutstandingLeft === 0) {
        setAdvanceBorrowed(0)
        setAdvanceTotal(0)
        setAdvanceActive(false)
        setAdvanceCleared(true)
        setAdvanceTopUp(0)
        setAdvanceDueAt(null)
      } else {
        setAdvanceDueAt(calculateAdvanceDueAt(advanceOutstandingLeft, advanceTopUp))
      }
    }

    const notifItems: NotificationItem[] = []
    if (advanceRepay > 0) {
      notifItems.push({
        id: Date.now() + 1,
        title: 'Advance repayment',
        body: `GH₵ ${advanceRepay.toFixed(2)} was applied to your GCoins Advance. GH₵ ${advanceOutstandingLeft.toFixed(2)} left.`,
        time: 'Just now',
        dot: '#6B7280',
        read: false,
      })
    }
    if (spare > 0) {
      notifItems.push({
        id: Date.now(),
        title: 'Round-up saved',
        body: `GH₵ ${spare.toFixed(2)} from ${transaction.merchant} was added to your GCoins Vault.`,
        time: 'Just now',
        dot: '#F5C000',
        read: false,
      })
    }
    if (notifItems.length > 0) {
      setNotifications(items => [...notifItems, ...items])
    }

    return result
  }

  function handleVaultWithdrawal(amount: number) {
    setVaultBalance(balance => +(balance - amount).toFixed(2))
    const updatedBalance = +(mainAccountBalance + amount).toFixed(2)
    setMainAccountBalance(updatedBalance)
    setTransactions(items => [
      {
        id: `vault-withdraw-${Date.now()}`,
        merchant: 'GCoins Vault → GCB Main Account',
        category: 'Transfer',
        amount,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'vault',
      },
      ...items,
    ])
    return updatedBalance
  }

  function handleBorrow(amount: number, plan: AdvanceRepaymentPlan) {
    setMainAccountBalance(balance => +(balance + amount).toFixed(2))
    setAdvanceBorrowed(total => +(total + amount).toFixed(2))
    const amountWithInterest = +(amount * 1.025).toFixed(2)
    setAdvanceTotal(total => +(total + amountWithInterest).toFixed(2))
    const nextOutstanding = +(advanceOutstanding + amountWithInterest).toFixed(2)
    setAdvanceOutstanding(nextOutstanding)
    setAdvanceActive(true)
    setAdvanceCleared(false)
    setAdvanceRepaymentPace(plan.pace)
    setAdvanceTopUp(plan.topUp)
    setAdvanceDueAt(calculateAdvanceDueAt(nextOutstanding, plan.topUp))
    setTransactions(items => [
      {
        id: `advance-${Date.now()}`,
        merchant: 'GCoins Advance',
        category: 'Income',
        amount,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'gcoins',
      },
      ...items,
    ])
  }

  function handleRepayAdvance(amount: number, fullPayoff: boolean) {
    const paymentPesewas = Math.min(Math.round(amount * 100), Math.round(advanceOutstanding * 100))
    const settledAmount = paymentPesewas / 100
    const remaining = fullPayoff ? 0 : Math.max(0, (Math.round(advanceOutstanding * 100) - paymentPesewas) / 100)
    setMainAccountBalance(balance => (Math.round(balance * 100) - paymentPesewas) / 100)
    setAdvanceOutstanding(remaining)
    if (remaining === 0) {
      setAdvanceBorrowed(0)
      setAdvanceTotal(0)
      setAdvanceActive(false)
      setAdvanceCleared(true)
      setAdvanceTopUp(0)
      setAdvanceDueAt(null)
    } else {
      setAdvanceDueAt(calculateAdvanceDueAt(remaining, advanceTopUp))
    }
    setTransactions(items => [
      {
        id: `advance-repay-${Date.now()}`,
        merchant: fullPayoff ? 'GCoins advance payoff' : 'GCoins Advance Extra Payment',
        category: 'Advance',
        amount: -settledAmount,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'gcoins',
      },
      ...items,
    ])
  }

  function handleRedeemPointsForAdvance() {
    if (streakDays < 7 || loyaltyPoints < LOAN_REDEMPTION_POINTS || advanceOutstanding <= 0) return
    const reduction = Math.min(LOAN_REDEMPTION_VALUE, advanceOutstanding)
    const remaining = Math.max(0, +(advanceOutstanding - reduction).toFixed(2))
    setLoyaltyPoints(points => points - LOAN_REDEMPTION_POINTS)
    setAdvanceOutstanding(remaining)
    if (remaining === 0) {
      setAdvanceBorrowed(0)
      setAdvanceTotal(0)
      setAdvanceActive(false)
      setAdvanceCleared(true)
      setAdvanceTopUp(0)
      setAdvanceDueAt(null)
    } else {
      setAdvanceDueAt(calculateAdvanceDueAt(remaining, advanceTopUp))
    }
    setTransactions(items => [
      {
        id: `loyalty-advance-${Date.now()}`,
        merchant: 'Loyalty Credit to GCoins Advance',
        category: 'Rewards',
        amount: reduction,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'gcoins',
      },
      ...items,
    ])
    setNotifications(items => [
      {
        id: Date.now(),
        title: 'Points applied to Advance',
        body: `${LOAN_REDEMPTION_POINTS} points reduced your GCoins Advance by GH₵ ${reduction.toFixed(2)}, applied to interest first.`,
        time: 'Just now',
        dot: '#F5C000',
        read: false,
      },
      ...items,
    ])
  }

  function handleRewardRedemption(category: RedemptionCategory, points: number, reward: string) {
    if (loyaltyPoints < points) return false
    setLoyaltyPoints(balance => balance - points)
    if (category === 'lifestyle') {
      const suffix = Math.random().toString(36).slice(2, 8).toUpperCase()
      setClaimedVouchers(vouchers => [
        {
          id: `voucher-${Date.now()}`,
          title: reward,
          code: `GCOINS-${suffix}`,
          claimedAt: 'Today',
          used: false,
        },
        ...vouchers,
      ])
    }
    setNotifications(items => [
      {
        id: Date.now(),
        title: `${category === 'data' ? 'Data Bundle' : category === 'airtime' ? 'Airtime' : 'Lifestyle Reward'} redeemed`,
        body:
          category === 'lifestyle'
            ? `${reward} claimed. Your code is ready under View Voucher Code.`
            : `${reward} was applied to your registered mobile number.`,
        time: 'Just now',
        dot: '#F5C000',
        read: false,
      },
      ...items,
    ])
    return true
  }

  function handleMarkVoucherUsed(id: string) {
    setClaimedVouchers(vouchers => vouchers.map(voucher => (voucher.id === id ? { ...voucher, used: true } : voucher)))
  }

  function handleDeleteGoal(goalId: number) {
    const goal = goals.find(item => item.id === goalId)
    if (goal && !goal.withdrawn) {
      setVaultBalance(balance => +(balance + goal.saved).toFixed(2))
      if (goal.saved > 0) {
        setTransactions(items => [
          {
            id: `goal-return-${Date.now()}`,
            merchant: `${goal.name} funds returned`,
            category: 'Savings',
            amount: goal.saved,
            roundUp: 0,
            date: 'Just now',
            status: 'successful',
            source: 'vault',
          },
          ...items,
        ])
      }
    }
    setGoals(current => current.filter(item => item.id !== goalId))
  }

  function handleGoalAllocation(goalId: number, amount: number) {
    const goal = goals.find(item => item.id === goalId)
    setGoals(current => current.map(item => (item.id === goalId ? { ...item, saved: +(item.saved + amount).toFixed(2) } : item)))
    setVaultBalance(balance => +(balance - amount).toFixed(2))
    setTransactions(items => [
      {
        id: `goal-allocation-${Date.now()}`,
        merchant: goal ? `${goal.name} allocation` : 'Savings goal allocation',
        category: 'Savings',
        amount: -amount,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'vault',
      },
      ...items,
    ])
  }

  function handleGoalWithdrawal(goalId: number) {
    const goal = goals.find(item => item.id === goalId)
    if (!goal || goal.withdrawn) return
    setGoals(current => current.map(item => (item.id === goalId ? { ...item, withdrawn: true } : item)))
    setMainAccountBalance(balance => +(balance + goal.saved).toFixed(2))
    setTransactions(items => [
      {
        id: `goal-withdraw-${Date.now()}`,
        merchant: `${goal.name} withdrawal`,
        category: 'Savings',
        amount: goal.saved,
        roundUp: 0,
        date: 'Just now',
        status: 'successful',
        source: 'vault',
      },
      ...items,
    ])
  }

  function handleClearCompletedGoals() {
    setGoals(current => current.filter(goal => goal.saved < goal.target))
  }

  return (
    <GCoinsContext.Provider
      value={{
        appMode,
        setAppMode,
        gcbTheme,
        setGcbTheme,
        screen,
        setScreen,
        roundUpOn,
        setRoundUpOn,
        roundUpPaused,
        setRoundUpPaused,
        vaultBalance,
        setVaultBalance,
        monthlyTotal,
        setMonthlyTotal,
        monthlyRecords,
        setMonthlyRecords,
        weeklyRoundUps,
        setWeeklyRoundUps,
        streakDays,
        setStreakDays,
        loyaltyPoints,
        setLoyaltyPoints,
        claimedVouchers,
        setClaimedVouchers,
        freezeEnabled,
        setFreezeEnabled,
        freezeUsed,
        setFreezeUsed,
        transactionPin,
        setTransactionPin,
        advanceBorrowed,
        setAdvanceBorrowed,
        advanceTotal,
        setAdvanceTotal,
        advanceOutstanding,
        setAdvanceOutstanding,
        advanceActive,
        setAdvanceActive,
        advanceCleared,
        setAdvanceCleared,
        advanceRepaymentPace,
        setAdvanceRepaymentPace,
        advanceTopUp,
        setAdvanceTopUp,
        advanceDueAt,
        balanceSafeguard,
        setBalanceSafeguard,
        roundUpMultiple,
        setRoundUpMultiple,
        showSetup,
        setShowSetup,
        mainAccountBalance,
        setMainAccountBalance,
        reminderFrequency,
        setReminderFrequency,
        goals,
        setGoals,
        transactions,
        setTransactions,
        notifications,
        setNotifications,
        showNotifs,
        setShowNotifs,
        showProfile,
        setShowProfile,
        showRepayAdvance,
        setShowRepayAdvance,
        advancePaymentMode,
        setAdvancePaymentMode,
        showLogout,
        setShowLogout,
        handleEnableRequest,
        handleSetupSave,
        handleEnd,
        handleVaultAddition,
        handleCompletedTransaction,
        handleVaultWithdrawal,
        handleBorrow,
        handleRepayAdvance,
        handleRedeemPointsForAdvance,
        handleRewardRedemption,
        handleMarkVoucherUsed,
        handleDeleteGoal,
        handleGoalAllocation,
        handleGoalWithdrawal,
        handleClearCompletedGoals,
      }}
    >
      {children}
    </GCoinsContext.Provider>
  )
}

export function useGCoins() {
  const context = useContext(GCoinsContext)
  if (!context) {
    throw new Error('useGCoins must be used within a GCoinsProvider')
  }
  return context
}

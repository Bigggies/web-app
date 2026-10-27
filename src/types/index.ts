export type Screen = 'home' | 'transactions' | 'goals' | 'settings'

export type MonthlyRecord = {
  id: number
  label: string
  amount: number
  active: boolean
}

export type LedgerTransaction = {
  id: string
  merchant: string
  category: string
  amount: number
  roundUp: number
  date: string
  status: 'successful' | 'reversed'
  source: 'gcb' | 'gcoins' | 'vault'
}

export type Goal = {
  id: number
  name: string
  target: number
  saved: number
  deadline: string
  color: string
  archived?: boolean
  automation?: { amount: number; frequency: 'Daily' | 'Weekly' | 'Monthly'; source: 'GCB Main Account' | 'Round-Up Savings'; nextDate: string; day: number; paused: boolean; warning?: boolean }
  withdrawn?: boolean
}

export type ReminderFrequency = 'Off' | 'Daily' | 'Weekly' | 'Goal milestones'

export type LoyaltyTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond'

export type RedemptionCategory = 'airtime' | 'data' | 'lifestyle'

export type ClaimedVoucher = {
  id: string
  title: string
  code: string
  claimedAt: string
  used: boolean
}

export type NotificationItem = {
  id: number
  title: string
  body: string
  time: string
  dot: string
  read: boolean
}

export type BorrowStep = 'intro' | 'check' | 'qualified' | 'unqualified' | 'plan' | 'pin' | 'confirmed'

export type RepaymentPace = 'relaxed' | 'standard' | 'fast'

export type AdvanceRepaymentPlan = {
  pace: RepaymentPace
  topUp: number
}

export type AdvancePaymentMode = 'payoff' | 'extra'

export type AppMode =
  | 'gcoins'
  | 'gcbHome'
  | 'gcbQuickAccess'
  | 'gcbProfile'
  | 'gcbSettings'
  | 'gcbMobileMoney'
  | 'gcoinsLogin'

export type GcbTheme = 'light' | 'dark'

export type GcbTransaction = {
  id: string
  merchant: string
  principalAmount: number
  feeAmount: number
  totalDebit: number
}

export type Beneficiary = {
  id: string
  name: string
  network: string
  account: string
}

export type RoundUpResult = {
  status: 'saved' | 'skipped'
  amount: number
  debit: number
  advanceRepay: number
  advanceOutstandingLeft: number
  newVaultBalance: number
  newMainAccountBalance: number
  reason?: 'paused' | 'disabled' | 'balance-safeguard' | 'whole-amount' | 'duplicate'
}

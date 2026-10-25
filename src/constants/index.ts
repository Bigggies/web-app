import type {
  Goal,
  LedgerTransaction,
  LoyaltyTier,
  NotificationItem,
  RedemptionCategory,
  RepaymentPace,
} from '@/types'

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const FULL_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const YEARS = Array.from({ length: 8 }, (_, i) => String(2026 + i))

export function nextMonthLabel(label: string) {
  const [month, yearText] = label.split(' ')
  const monthIndex = FULL_MONTHS.indexOf(month)
  const nextIndex = (monthIndex + 1) % 12
  const year = Number(yearText) + (nextIndex === 0 ? 1 : 0)
  return `${FULL_MONTHS[nextIndex]} ${year}`
}

export const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    title: 'Round-up saved',
    body: 'GH₵ 0.50 from Shoprite Accra Mall was added to your GCoins Vault.',
    time: '2 min ago',
    dot: '#F5C000',
    read: false,
  },
  {
    id: 2,
    title: 'GCoins Reminder',
    body: "You're 62% towards your Emergency Fund goal. Keep it up!",
    time: '1 hr ago',
    dot: '#F5C000',
    read: false,
  },
  {
    id: 3,
    title: 'Monthly summary',
    body: 'You saved GH₵ 43.15 through round-ups in September. Great work!',
    time: 'Yesterday',
    dot: '#10B981',
    read: false,
  },
  {
    id: 4,
    title: 'Round-up saved',
    body: 'GH₵ 0.60 from Bolt Ride was added to your GCoins Vault.',
    time: 'Yesterday',
    dot: '#F5C000',
    read: true,
  },
  {
    id: 5,
    title: 'GCoins Reminder',
    body: 'Your Holiday Trip goal is 17.5% funded. A little more each day gets you there.',
    time: '2 days ago',
    dot: '#F5C000',
    read: true,
  },
  {
    id: 6,
    title: 'Advance repayment',
    body: 'GH₵ 0.45 was deducted from your round-up towards your GCoins Advance repayment.',
    time: '3 days ago',
    dot: '#6B7280',
    read: true,
  },
]

export const initialTransactions: LedgerTransaction[] = [
  {
    id: 'tx-1',
    merchant: 'Shoprite Accra Mall',
    category: 'Groceries',
    amount: -85.5,
    roundUp: 0.5,
    date: 'Today, 2:14 PM',
    status: 'successful',
    source: 'gcb',
  },
  {
    id: 'tx-2',
    merchant: 'Bolt Ride',
    category: 'Transport',
    amount: -23.4,
    roundUp: 0.6,
    date: 'Today, 11:32 AM',
    status: 'successful',
    source: 'gcb',
  },
  {
    id: 'tx-3',
    merchant: 'ECG Bill Payment',
    category: 'Utilities',
    amount: -142.75,
    roundUp: 0.25,
    date: 'Yesterday',
    status: 'successful',
    source: 'gcb',
  },
  {
    id: 'tx-4',
    merchant: 'KFC Spintex',
    category: 'Food & Drink',
    amount: -67.2,
    roundUp: 0.8,
    date: 'Yesterday',
    status: 'successful',
    source: 'gcb',
  },
  {
    id: 'tx-5',
    merchant: 'GCB Salary Credit',
    category: 'Income',
    amount: 5200.0,
    roundUp: 0,
    date: 'Sep 20',
    status: 'successful',
    source: 'gcb',
  },
  {
    id: 'tx-6',
    merchant: 'Melcom Electronics',
    category: 'Shopping',
    amount: -312.0,
    roundUp: 0,
    date: 'Sep 19',
    status: 'successful',
    source: 'gcb',
  },
  {
    id: 'tx-7',
    merchant: 'Vodafone Data Bundle',
    category: 'Utilities',
    amount: -50.0,
    roundUp: 0,
    date: 'Sep 18',
    status: 'successful',
    source: 'gcb',
  },
]

export const baseGoals: Goal[] = [
  { id: 1, name: 'Emergency Fund', target: 2000, saved: 1240, deadline: 'Dec 2026', color: '#F5C000' },
  { id: 2, name: 'Holiday Trip', target: 5000, saved: 875, deadline: 'Jun 2027', color: '#6B7280' },
  { id: 3, name: 'New Laptop', target: 3500, saved: 3500, deadline: 'Completed', color: '#10B981' },
]

export const MONTHLY_RATE = 0.025
export const ROUND_UP_MONTHLY = 43.15

export const REPAYMENT_PACES: {
  id: RepaymentPace
  label: string
  period: string
  description: string
  baseTopUp: number
  recommended?: boolean
}[] = [
  { id: 'relaxed', label: 'Relaxed', period: 'About 5 months', description: 'Lower top-up per round-up', baseTopUp: 1.5 },
  {
    id: 'standard',
    label: 'Standard',
    period: 'About 2 months',
    description: 'Balanced top-up per round-up',
    baseTopUp: 3.5,
    recommended: true,
  },
  { id: 'fast', label: 'Fast', period: 'About 1 month', description: 'Higher top-up per round-up', baseTopUp: 6.83 },
]

export function calculateAdvanceDueAt(outstanding: number, topUp: number): number | null {
  if (outstanding <= 0 || topUp <= 0) return null
  return Date.now() + Math.ceil(outstanding / topUp) * 3 * 86400000
}

export const BASE_LOYALTY_POINTS = 10
export const FREEZE_POINT_COST = 100
export const FREEZE_BALANCE_MINIMUM = 500
export const LOAN_REDEMPTION_POINTS = 100
export const LOAN_REDEMPTION_VALUE = 1

export const REDEMPTION_OPTIONS: Record<RedemptionCategory, { label: string; reward: string; points: number }[]> = {
  airtime: [
    { label: 'GHS 5 Airtime', reward: 'GHS 5 mobile top-up', points: 250 },
    { label: 'GHS 10 Airtime', reward: 'GHS 10 mobile top-up', points: 500 },
  ],
  data: [
    { label: '500 MB Data', reward: '500 MB internet bundle', points: 400 },
    { label: '1 GB Data', reward: '1 GB internet bundle', points: 750 },
  ],
  lifestyle: [
    { label: 'GHS 10 Shopping Voucher', reward: 'GHS 10 partner shopping voucher', points: 600 },
    { label: 'GHS 20 Dining Voucher', reward: 'GHS 20 partner dining voucher', points: 1000 },
  ],
}

export const LOYALTY_TIERS: { name: LoyaltyTier; min: number; max: number; multiplier: number; color: string }[] = [
  { name: 'Bronze', min: 1, max: 3, multiplier: 1, color: '#B77942' },
  { name: 'Silver', min: 4, max: 7, multiplier: 1.25, color: '#9CA3AF' },
  { name: 'Gold', min: 8, max: 14, multiplier: 1.5, color: '#F5C000' },
  { name: 'Platinum', min: 15, max: 30, multiplier: 2, color: '#7DD3FC' },
  { name: 'Diamond', min: 31, max: Infinity, multiplier: 3, color: '#A78BFA' },
]

export function loyaltyTierFor(streak: number) {
  return LOYALTY_TIERS.find(tier => streak >= tier.min && streak <= tier.max) ?? LOYALTY_TIERS[0]
}

export function rewardForStreakDay(streak: number) {
  const tier = loyaltyTierFor(streak)
  const milestoneBonus = streak === 7 ? 50 : streak === 30 ? 250 : 0
  return {
    tier,
    basePoints: BASE_LOYALTY_POINTS,
    milestoneBonus,
    total: Math.round(BASE_LOYALTY_POINTS * tier.multiplier + milestoneBonus),
  }
}

export function calendarDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function daysBetween(from: string, to: string) {
  return Math.round((Date.parse(`${to}T12:00:00Z`) - Date.parse(`${from}T12:00:00Z`)) / 86400000)
}

module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/constants/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_LOYALTY_POINTS",
    ()=>BASE_LOYALTY_POINTS,
    "FREEZE_BALANCE_MINIMUM",
    ()=>FREEZE_BALANCE_MINIMUM,
    "FREEZE_POINT_COST",
    ()=>FREEZE_POINT_COST,
    "FULL_MONTHS",
    ()=>FULL_MONTHS,
    "LOAN_REDEMPTION_POINTS",
    ()=>LOAN_REDEMPTION_POINTS,
    "LOAN_REDEMPTION_VALUE",
    ()=>LOAN_REDEMPTION_VALUE,
    "LOYALTY_TIERS",
    ()=>LOYALTY_TIERS,
    "MONTHLY_RATE",
    ()=>MONTHLY_RATE,
    "MONTHS",
    ()=>MONTHS,
    "REDEMPTION_OPTIONS",
    ()=>REDEMPTION_OPTIONS,
    "REPAYMENT_PACES",
    ()=>REPAYMENT_PACES,
    "ROUND_UP_MONTHLY",
    ()=>ROUND_UP_MONTHLY,
    "YEARS",
    ()=>YEARS,
    "baseGoals",
    ()=>baseGoals,
    "calculateAdvanceDueAt",
    ()=>calculateAdvanceDueAt,
    "calendarDateKey",
    ()=>calendarDateKey,
    "daysBetween",
    ()=>daysBetween,
    "initialNotifications",
    ()=>initialNotifications,
    "initialTransactions",
    ()=>initialTransactions,
    "loyaltyTierFor",
    ()=>loyaltyTierFor,
    "nextMonthLabel",
    ()=>nextMonthLabel,
    "rewardForStreakDay",
    ()=>rewardForStreakDay
]);
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const FULL_MONTHS = [
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
    'December'
];
const YEARS = Array.from({
    length: 8
}, (_, i)=>String(2026 + i));
function nextMonthLabel(label) {
    const [month, yearText] = label.split(' ');
    const monthIndex = FULL_MONTHS.indexOf(month);
    const nextIndex = (monthIndex + 1) % 12;
    const year = Number(yearText) + (nextIndex === 0 ? 1 : 0);
    return `${FULL_MONTHS[nextIndex]} ${year}`;
}
const initialNotifications = [
    {
        id: 1,
        title: 'Round-up saved',
        body: 'GH₵ 0.50 from Shoprite Accra Mall was added to your GCoins Vault.',
        time: '2 min ago',
        dot: '#F5C000',
        read: false
    },
    {
        id: 2,
        title: 'GCoins Reminder',
        body: "You're 62% towards your Emergency Fund goal. Keep it up!",
        time: '1 hr ago',
        dot: '#F5C000',
        read: false
    },
    {
        id: 3,
        title: 'Monthly summary',
        body: 'You saved GH₵ 43.15 through round-ups in September. Great work!',
        time: 'Yesterday',
        dot: '#10B981',
        read: false
    },
    {
        id: 4,
        title: 'Round-up saved',
        body: 'GH₵ 0.60 from Bolt Ride was added to your GCoins Vault.',
        time: 'Yesterday',
        dot: '#F5C000',
        read: true
    },
    {
        id: 5,
        title: 'GCoins Reminder',
        body: 'Your Holiday Trip goal is 17.5% funded. A little more each day gets you there.',
        time: '2 days ago',
        dot: '#F5C000',
        read: true
    },
    {
        id: 6,
        title: 'Advance repayment',
        body: 'GH₵ 0.45 was deducted from your round-up towards your GCoins Advance repayment.',
        time: '3 days ago',
        dot: '#6B7280',
        read: true
    }
];
const initialTransactions = [
    {
        id: 'tx-1',
        merchant: 'Shoprite Accra Mall',
        category: 'Groceries',
        amount: -85.5,
        roundUp: 0.5,
        date: 'Today, 2:14 PM',
        status: 'successful',
        source: 'gcb'
    },
    {
        id: 'tx-2',
        merchant: 'Bolt Ride',
        category: 'Transport',
        amount: -23.4,
        roundUp: 0.6,
        date: 'Today, 11:32 AM',
        status: 'successful',
        source: 'gcb'
    },
    {
        id: 'tx-3',
        merchant: 'ECG Bill Payment',
        category: 'Utilities',
        amount: -142.75,
        roundUp: 0.25,
        date: 'Yesterday',
        status: 'successful',
        source: 'gcb'
    },
    {
        id: 'tx-4',
        merchant: 'KFC Spintex',
        category: 'Food & Drink',
        amount: -67.2,
        roundUp: 0.8,
        date: 'Yesterday',
        status: 'successful',
        source: 'gcb'
    },
    {
        id: 'tx-5',
        merchant: 'GCB Salary Credit',
        category: 'Income',
        amount: 5200.0,
        roundUp: 0,
        date: 'Sep 20',
        status: 'successful',
        source: 'gcb'
    },
    {
        id: 'tx-6',
        merchant: 'Melcom Electronics',
        category: 'Shopping',
        amount: -312.0,
        roundUp: 0,
        date: 'Sep 19',
        status: 'successful',
        source: 'gcb'
    },
    {
        id: 'tx-7',
        merchant: 'Vodafone Data Bundle',
        category: 'Utilities',
        amount: -50.0,
        roundUp: 0,
        date: 'Sep 18',
        status: 'successful',
        source: 'gcb'
    }
];
const baseGoals = [
    {
        id: 1,
        name: 'Emergency Fund',
        target: 2000,
        saved: 1240,
        deadline: 'Dec 2026',
        color: '#F5C000'
    },
    {
        id: 2,
        name: 'Holiday Trip',
        target: 5000,
        saved: 875,
        deadline: 'Jun 2027',
        color: '#6B7280'
    },
    {
        id: 3,
        name: 'New Laptop',
        target: 3500,
        saved: 3500,
        deadline: 'Completed',
        color: '#10B981'
    }
];
const MONTHLY_RATE = 0.025;
const ROUND_UP_MONTHLY = 43.15;
const REPAYMENT_PACES = [
    {
        id: 'relaxed',
        label: 'Relaxed',
        period: 'About 5 months',
        description: 'Lower top-up per round-up',
        baseTopUp: 1.5
    },
    {
        id: 'standard',
        label: 'Standard',
        period: 'About 2 months',
        description: 'Balanced top-up per round-up',
        baseTopUp: 3.5,
        recommended: true
    },
    {
        id: 'fast',
        label: 'Fast',
        period: 'About 1 month',
        description: 'Higher top-up per round-up',
        baseTopUp: 6.83
    }
];
function calculateAdvanceDueAt(outstanding, topUp) {
    if (outstanding <= 0 || topUp <= 0) return null;
    return Date.now() + Math.ceil(outstanding / topUp) * 3 * 86400000;
}
const BASE_LOYALTY_POINTS = 10;
const FREEZE_POINT_COST = 100;
const FREEZE_BALANCE_MINIMUM = 500;
const LOAN_REDEMPTION_POINTS = 100;
const LOAN_REDEMPTION_VALUE = 1;
const REDEMPTION_OPTIONS = {
    airtime: [
        {
            label: 'GHS 5 Airtime',
            reward: 'GHS 5 mobile top-up',
            points: 250
        },
        {
            label: 'GHS 10 Airtime',
            reward: 'GHS 10 mobile top-up',
            points: 500
        }
    ],
    data: [
        {
            label: '500 MB Data',
            reward: '500 MB internet bundle',
            points: 400
        },
        {
            label: '1 GB Data',
            reward: '1 GB internet bundle',
            points: 750
        }
    ],
    lifestyle: [
        {
            label: 'GHS 10 Shopping Voucher',
            reward: 'GHS 10 partner shopping voucher',
            points: 600
        },
        {
            label: 'GHS 20 Dining Voucher',
            reward: 'GHS 20 partner dining voucher',
            points: 1000
        }
    ]
};
const LOYALTY_TIERS = [
    {
        name: 'Bronze',
        min: 1,
        max: 3,
        multiplier: 1,
        color: '#B77942'
    },
    {
        name: 'Silver',
        min: 4,
        max: 7,
        multiplier: 1.25,
        color: '#9CA3AF'
    },
    {
        name: 'Gold',
        min: 8,
        max: 14,
        multiplier: 1.5,
        color: '#F5C000'
    },
    {
        name: 'Platinum',
        min: 15,
        max: 30,
        multiplier: 2,
        color: '#7DD3FC'
    },
    {
        name: 'Diamond',
        min: 31,
        max: Infinity,
        multiplier: 3,
        color: '#A78BFA'
    }
];
function loyaltyTierFor(streak) {
    return LOYALTY_TIERS.find((tier)=>streak >= tier.min && streak <= tier.max) ?? LOYALTY_TIERS[0];
}
function rewardForStreakDay(streak) {
    const tier = loyaltyTierFor(streak);
    const milestoneBonus = streak === 7 ? 50 : streak === 30 ? 250 : 0;
    return {
        tier,
        basePoints: BASE_LOYALTY_POINTS,
        milestoneBonus,
        total: Math.round(BASE_LOYALTY_POINTS * tier.multiplier + milestoneBonus)
    };
}
function calendarDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function daysBetween(from, to) {
    return Math.round((Date.parse(`${to}T12:00:00Z`) - Date.parse(`${from}T12:00:00Z`)) / 86400000);
}
}),
"[project]/src/context/GCoinsContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GCoinsProvider",
    ()=>GCoinsProvider,
    "useGCoins",
    ()=>useGCoins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const GCoinsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function GCoinsProvider({ children }) {
    const [appMode, setAppMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('gcbHome');
    const [gcbTheme, setGcbTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    const [roundUpOn, setRoundUpOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [roundUpPaused, setRoundUpPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [vaultBalance, setVaultBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1240.5);
    const [monthlyTotal, setMonthlyTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(43.15);
    const [monthlyRecords, setMonthlyRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            label: 'September 2026',
            amount: 43.15,
            active: true
        }
    ]);
    const [weeklyRoundUps, setWeeklyRoundUps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12.8);
    const [streakDays, setStreakDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(14);
    const [loyaltyPoints, setLoyaltyPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [claimedVouchers, setClaimedVouchers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lastVaultActivityDate, setLastVaultActivityDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calendarDateKey"])(new Date(Date.now() - 86400000)));
    const [freezeEnabled, setFreezeEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [freezeUsed, setFreezeUsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [freezeCycleStart, setFreezeCycleStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calendarDateKey"])(new Date(Date.now() - 14 * 86400000)));
    const [transactionPin, setTransactionPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1234');
    const [advanceBorrowed, setAdvanceBorrowed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(200);
    const [advanceTotal, setAdvanceTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(210);
    const [advanceOutstanding, setAdvanceOutstanding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(143.5);
    const [advanceActive, setAdvanceActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [advanceCleared, setAdvanceCleared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [advanceRepaymentPace, setAdvanceRepaymentPace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('standard');
    const [advanceTopUp, setAdvanceTopUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3.5);
    const [advanceDueAt, setAdvanceDueAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateAdvanceDueAt"])(143.5, 3.5));
    const [balanceSafeguard, setBalanceSafeguard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50);
    const [roundUpMultiple, setRoundUpMultiple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showSetup, setShowSetup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mainAccountBalance, setMainAccountBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10000);
    const [processedTransactionIds, setProcessedTransactionIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set());
    const [reminderFrequency, setReminderFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Daily');
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseGoals"]);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialTransactions"]);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialNotifications"]);
    const [showNotifs, setShowNotifs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRepayAdvance, setShowRepayAdvance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [advancePaymentMode, setAdvancePaymentMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('extra');
    const [showLogout, setShowLogout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleEnableRequest() {
        setShowSetup(true);
    }
    function handleSetupSave(target, safeguard) {
        setShowSetup(false);
        setRoundUpMultiple(target);
        setBalanceSafeguard(safeguard);
        setRoundUpOn(true);
        setRoundUpPaused(false);
        setWeeklyRoundUps(0);
        setMonthlyRecords((records)=>{
            if (records.some((record)=>record.active)) return records;
            const latest = records[records.length - 1];
            return [
                ...records,
                {
                    id: Date.now(),
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextMonthLabel"])(latest?.label ?? 'September 2026'),
                    amount: 0,
                    active: true
                }
            ];
        });
    }
    function handleEnd() {
        setRoundUpOn(false);
        setRoundUpPaused(false);
        setBalanceSafeguard(0);
        setRoundUpMultiple(1);
        setMonthlyTotal(0);
        setMonthlyRecords((records)=>records.map((record)=>record.active ? {
                    ...record,
                    active: false
                } : record));
    }
    function recordVaultActivity(resultingVaultBalance) {
        const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calendarDateKey"])();
        const activityGap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(lastVaultActivityDate, today);
        if (activityGap <= 0) return;
        let usedThisCycle = freezeUsed;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(freezeCycleStart, today) >= 30) {
            usedThisCycle = false;
            setFreezeUsed(false);
            setFreezeCycleStart(today);
        }
        const canUseBalanceFreeze = resultingVaultBalance >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FREEZE_BALANCE_MINIMUM"];
        const canUsePointsFreeze = loyaltyPoints >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FREEZE_POINT_COST"];
        const freezeApplies = activityGap === 2 && freezeEnabled && !usedThisCycle && (canUseBalanceFreeze || canUsePointsFreeze);
        const nextStreak = activityGap === 1 || freezeApplies ? streakDays + 1 : 1;
        const reward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rewardForStreakDay"])(nextStreak);
        const freezeCost = freezeApplies && !canUseBalanceFreeze ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FREEZE_POINT_COST"] : 0;
        setStreakDays(nextStreak);
        setLastVaultActivityDate(today);
        setLoyaltyPoints((points)=>Math.max(0, points - freezeCost + reward.total));
        if (freezeApplies) setFreezeUsed(true);
        setNotifications((items)=>[
                {
                    id: Date.now() + 2,
                    title: freezeApplies ? 'Streak protected' : `${reward.tier.name} streak reward`,
                    body: freezeApplies ? `Your Streak Freeze covered one missed day. You earned ${reward.total} points today.` : `${reward.total} loyalty points earned for your day ${nextStreak} Vault activity.`,
                    time: 'Just now',
                    dot: reward.tier.color,
                    read: false
                },
                ...items
            ]);
    }
    function handleVaultAddition(amount) {
        setMainAccountBalance((balance)=>+(balance - amount).toFixed(2));
        const nextVaultBalance = +(vaultBalance + amount).toFixed(2);
        setVaultBalance(nextVaultBalance);
        recordVaultActivity(nextVaultBalance);
        setTransactions((items)=>[
                {
                    id: `vault-add-${Date.now()}`,
                    merchant: 'GCoins Vault Deposit',
                    category: 'Savings',
                    amount: -amount,
                    roundUp: 0,
                    date: 'Just now',
                    status: 'successful',
                    source: 'vault'
                },
                ...items
            ]);
    }
    function handleCompletedTransaction(transaction) {
        if (processedTransactionIds.has(transaction.id)) {
            return {
                status: 'skipped',
                amount: 0,
                debit: transaction.totalDebit,
                advanceRepay: 0,
                advanceOutstandingLeft: advanceOutstanding,
                newVaultBalance: vaultBalance,
                newMainAccountBalance: mainAccountBalance,
                reason: 'duplicate'
            };
        }
        setProcessedTransactionIds((ids)=>new Set(ids).add(transaction.id));
        const debit = transaction.totalDebit;
        let after = +(mainAccountBalance - debit).toFixed(2);
        const targetPesewas = Math.max(100, Math.round(roundUpMultiple * 100));
        const afterPesewas = Math.round(after * 100);
        const rawSparePesewas = afterPesewas % targetPesewas;
        let spare = 0;
        let spareReason = undefined;
        if (!roundUpOn) {
            spareReason = 'disabled';
        } else if (roundUpPaused) {
            spareReason = 'paused';
        } else if (rawSparePesewas === 0) {
            spareReason = 'whole-amount';
        } else {
            const uncappedSpare = rawSparePesewas / 100;
            if (after - uncappedSpare < balanceSafeguard) {
                spareReason = 'balance-safeguard';
            } else {
                spare = +uncappedSpare.toFixed(2);
            }
        }
        after = +(after - spare).toFixed(2);
        const newVaultBalance = +(vaultBalance + spare).toFixed(2);
        let advanceRepay = 0;
        if (advanceActive && advanceOutstanding > 0) {
            const plannedRepay = Math.min(advanceTopUp, advanceOutstanding);
            if (after - plannedRepay >= balanceSafeguard) {
                advanceRepay = +plannedRepay.toFixed(2);
            }
        }
        after = +(after - advanceRepay).toFixed(2);
        const advanceOutstandingLeft = +Math.max(0, advanceOutstanding - advanceRepay).toFixed(2);
        const result = {
            status: spare > 0 ? 'saved' : 'skipped',
            amount: spare,
            debit,
            advanceRepay,
            advanceOutstandingLeft,
            newVaultBalance,
            newMainAccountBalance: after,
            reason: spare === 0 ? spareReason : undefined
        };
        setMainAccountBalance(after);
        const completedTransactions = [
            {
                id: transaction.id,
                merchant: transaction.merchant,
                category: 'Mobile Money',
                amount: -debit,
                roundUp: spare,
                date: 'Just now',
                status: 'successful',
                source: 'gcb'
            }
        ];
        if (advanceRepay > 0) {
            completedTransactions.unshift({
                id: `advance-auto-${transaction.id}`,
                merchant: 'GCoins Advance Auto-Repayment',
                category: 'Savings',
                amount: -advanceRepay,
                roundUp: 0,
                date: 'Just now',
                status: 'successful',
                source: 'gcoins'
            });
        }
        setTransactions((items)=>[
                ...completedTransactions,
                ...items
            ]);
        if (spare > 0) {
            setVaultBalance(newVaultBalance);
            setMonthlyTotal((total)=>+(total + spare).toFixed(2));
            setMonthlyRecords((records)=>records.map((record)=>record.active ? {
                        ...record,
                        amount: +(record.amount + spare).toFixed(2)
                    } : record));
            setWeeklyRoundUps((total)=>+(total + spare).toFixed(2));
            recordVaultActivity(newVaultBalance);
        }
        if (advanceRepay > 0) {
            setAdvanceOutstanding(advanceOutstandingLeft);
            if (advanceOutstandingLeft === 0) {
                setAdvanceBorrowed(0);
                setAdvanceTotal(0);
                setAdvanceActive(false);
                setAdvanceCleared(true);
                setAdvanceTopUp(0);
                setAdvanceDueAt(null);
            } else {
                setAdvanceDueAt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateAdvanceDueAt"])(advanceOutstandingLeft, advanceTopUp));
            }
        }
        const notifItems = [];
        if (advanceRepay > 0) {
            notifItems.push({
                id: Date.now() + 1,
                title: 'Advance repayment',
                body: `GH₵ ${advanceRepay.toFixed(2)} was applied to your GCoins Advance. GH₵ ${advanceOutstandingLeft.toFixed(2)} left.`,
                time: 'Just now',
                dot: '#6B7280',
                read: false
            });
        }
        if (spare > 0) {
            notifItems.push({
                id: Date.now(),
                title: 'Round-up saved',
                body: `GH₵ ${spare.toFixed(2)} from ${transaction.merchant} was added to your GCoins Vault.`,
                time: 'Just now',
                dot: '#F5C000',
                read: false
            });
        }
        if (notifItems.length > 0) {
            setNotifications((items)=>[
                    ...notifItems,
                    ...items
                ]);
        }
        return result;
    }
    function handleVaultWithdrawal(amount) {
        setVaultBalance((balance)=>+(balance - amount).toFixed(2));
        const updatedBalance = +(mainAccountBalance + amount).toFixed(2);
        setMainAccountBalance(updatedBalance);
        setTransactions((items)=>[
                {
                    id: `vault-withdraw-${Date.now()}`,
                    merchant: 'GCoins Vault → GCB Main Account',
                    category: 'Transfer',
                    amount,
                    roundUp: 0,
                    date: 'Just now',
                    status: 'successful',
                    source: 'vault'
                },
                ...items
            ]);
        return updatedBalance;
    }
    function handleBorrow(amount, plan) {
        setMainAccountBalance((balance)=>+(balance + amount).toFixed(2));
        setAdvanceBorrowed((total)=>+(total + amount).toFixed(2));
        const amountWithInterest = +(amount * 1.025).toFixed(2);
        setAdvanceTotal((total)=>+(total + amountWithInterest).toFixed(2));
        const nextOutstanding = +(advanceOutstanding + amountWithInterest).toFixed(2);
        setAdvanceOutstanding(nextOutstanding);
        setAdvanceActive(true);
        setAdvanceCleared(false);
        setAdvanceRepaymentPace(plan.pace);
        setAdvanceTopUp(plan.topUp);
        setAdvanceDueAt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateAdvanceDueAt"])(nextOutstanding, plan.topUp));
        setTransactions((items)=>[
                {
                    id: `advance-${Date.now()}`,
                    merchant: 'GCoins Advance',
                    category: 'Income',
                    amount,
                    roundUp: 0,
                    date: 'Just now',
                    status: 'successful',
                    source: 'gcoins'
                },
                ...items
            ]);
    }
    function handleRepayAdvance(amount, fullPayoff) {
        const paymentPesewas = Math.min(Math.round(amount * 100), Math.round(advanceOutstanding * 100));
        const settledAmount = paymentPesewas / 100;
        const remaining = fullPayoff ? 0 : Math.max(0, (Math.round(advanceOutstanding * 100) - paymentPesewas) / 100);
        setMainAccountBalance((balance)=>(Math.round(balance * 100) - paymentPesewas) / 100);
        setAdvanceOutstanding(remaining);
        if (remaining === 0) {
            setAdvanceBorrowed(0);
            setAdvanceTotal(0);
            setAdvanceActive(false);
            setAdvanceCleared(true);
            setAdvanceTopUp(0);
            setAdvanceDueAt(null);
        } else {
            setAdvanceDueAt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateAdvanceDueAt"])(remaining, advanceTopUp));
        }
        setTransactions((items)=>[
                {
                    id: `advance-repay-${Date.now()}`,
                    merchant: fullPayoff ? 'GCoins advance payoff' : 'GCoins Advance Extra Payment',
                    category: 'Advance',
                    amount: -settledAmount,
                    roundUp: 0,
                    date: 'Just now',
                    status: 'successful',
                    source: 'gcoins'
                },
                ...items
            ]);
    }
    function handleRedeemPointsForAdvance() {
        if (streakDays < 7 || loyaltyPoints < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOAN_REDEMPTION_POINTS"] || advanceOutstanding <= 0) return;
        const reduction = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOAN_REDEMPTION_VALUE"], advanceOutstanding);
        const remaining = Math.max(0, +(advanceOutstanding - reduction).toFixed(2));
        setLoyaltyPoints((points)=>points - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOAN_REDEMPTION_POINTS"]);
        setAdvanceOutstanding(remaining);
        if (remaining === 0) {
            setAdvanceBorrowed(0);
            setAdvanceTotal(0);
            setAdvanceActive(false);
            setAdvanceCleared(true);
            setAdvanceTopUp(0);
            setAdvanceDueAt(null);
        } else {
            setAdvanceDueAt((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateAdvanceDueAt"])(remaining, advanceTopUp));
        }
        setTransactions((items)=>[
                {
                    id: `loyalty-advance-${Date.now()}`,
                    merchant: 'Loyalty Credit to GCoins Advance',
                    category: 'Rewards',
                    amount: reduction,
                    roundUp: 0,
                    date: 'Just now',
                    status: 'successful',
                    source: 'gcoins'
                },
                ...items
            ]);
        setNotifications((items)=>[
                {
                    id: Date.now(),
                    title: 'Points applied to Advance',
                    body: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOAN_REDEMPTION_POINTS"]} points reduced your GCoins Advance by GH₵ ${reduction.toFixed(2)}, applied to interest first.`,
                    time: 'Just now',
                    dot: '#F5C000',
                    read: false
                },
                ...items
            ]);
    }
    function handleRewardRedemption(category, points, reward) {
        if (loyaltyPoints < points) return false;
        setLoyaltyPoints((balance)=>balance - points);
        if (category === 'lifestyle') {
            const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
            setClaimedVouchers((vouchers)=>[
                    {
                        id: `voucher-${Date.now()}`,
                        title: reward,
                        code: `GCOINS-${suffix}`,
                        claimedAt: 'Today',
                        used: false
                    },
                    ...vouchers
                ]);
        }
        setNotifications((items)=>[
                {
                    id: Date.now(),
                    title: `${category === 'data' ? 'Data Bundle' : category === 'airtime' ? 'Airtime' : 'Lifestyle Reward'} redeemed`,
                    body: category === 'lifestyle' ? `${reward} claimed. Your code is ready under View Voucher Code.` : `${reward} was applied to your registered mobile number.`,
                    time: 'Just now',
                    dot: '#F5C000',
                    read: false
                },
                ...items
            ]);
        return true;
    }
    function handleMarkVoucherUsed(id) {
        setClaimedVouchers((vouchers)=>vouchers.map((voucher)=>voucher.id === id ? {
                    ...voucher,
                    used: true
                } : voucher));
    }
    function handleDeleteGoal(goalId) {
        const goal = goals.find((item)=>item.id === goalId);
        if (goal && !goal.withdrawn) {
            setVaultBalance((balance)=>+(balance + goal.saved).toFixed(2));
            if (goal.saved > 0) {
                setTransactions((items)=>[
                        {
                            id: `goal-return-${Date.now()}`,
                            merchant: `${goal.name} funds returned`,
                            category: 'Savings',
                            amount: goal.saved,
                            roundUp: 0,
                            date: 'Just now',
                            status: 'successful',
                            source: 'vault'
                        },
                        ...items
                    ]);
            }
        }
        setGoals((current)=>current.filter((item)=>item.id !== goalId));
    }
    function handleGoalAllocation(goalId, amount) {
        const goal = goals.find((item)=>item.id === goalId);
        setGoals((current)=>current.map((item)=>item.id === goalId ? {
                    ...item,
                    saved: +(item.saved + amount).toFixed(2)
                } : item));
        setVaultBalance((balance)=>+(balance - amount).toFixed(2));
        setTransactions((items)=>[
                {
                    id: `goal-allocation-${Date.now()}`,
                    merchant: goal ? `${goal.name} allocation` : 'Savings goal allocation',
                    category: 'Savings',
                    amount: -amount,
                    roundUp: 0,
                    date: 'Just now',
                    status: 'successful',
                    source: 'vault'
                },
                ...items
            ]);
    }
    function handleGoalWithdrawal(goalId) {
        const goal = goals.find((item)=>item.id === goalId);
        if (!goal || goal.withdrawn) return;
        setGoals((current)=>current.map((item)=>item.id === goalId ? {
                    ...item,
                    withdrawn: true
                } : item));
        setMainAccountBalance((balance)=>+(balance + goal.saved).toFixed(2));
        setTransactions((items)=>[
                {
                    id: `goal-withdraw-${Date.now()}`,
                    merchant: `${goal.name} withdrawal`,
                    category: 'Savings',
                    amount: goal.saved,
                    roundUp: 0,
                    date: 'Just now',
                    status: 'successful',
                    source: 'vault'
                },
                ...items
            ]);
    }
    function handleClearCompletedGoals() {
        setGoals((current)=>current.filter((goal)=>goal.saved < goal.target));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GCoinsContext.Provider, {
        value: {
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
            handleClearCompletedGoals
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/GCoinsContext.tsx",
        lineNumber: 622,
        columnNumber: 5
    }, this);
}
function useGCoins() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GCoinsContext);
    if (!context) {
        throw new Error('useGCoins must be used within a GCoinsProvider');
    }
    return context;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0vb25kj_d0ey_._.js.map
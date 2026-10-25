(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/screens/GcbApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GcbApp",
    ()=>GcbApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/TransactionHistoryList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function GcbApp({ mode, pinCode, theme, mainAccountBalance, transactions, gcoinsModule, onThemeChange, onModeChange, onEnterGCoins, onCompleteTransaction, roundUpOn, roundUpPaused, roundUpTarget, advanceActive, advanceTopUp: advanceTopUpProp }) {
    _s();
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pinError, setPinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transferStep, setTransferStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('details');
    const [transferAmount, setTransferAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('0.00');
    const [selectedBeneficiary, setSelectedBeneficiary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [beneficiaryPickerOpen, setBeneficiaryPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [beneficiaryQuery, setBeneficiaryQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [roundUpResult, setRoundUpResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mainBalanceVisible, setMainBalanceVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dark = theme === 'dark';
    const pageBg = dark ? '#111111' : '#F8F8F8';
    const surface = dark ? '#2B2B2B' : '#FFFFFF';
    const text = dark ? '#FFFFFF' : '#171717';
    const muted = dark ? '#8B8B8B' : '#737373';
    const headerBg = dark ? '#111111' : '#50616C';
    const services = [
        [
            'Group Transfer',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowDown"]
        ],
        [
            'Investments',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"]
        ],
        [
            'Lifestyle',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoffee"]
        ],
        [
            'Loans and Advances',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"]
        ],
        [
            'Locate Us',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTarget"]
        ],
        [
            'Manage Beneficiaries',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"]
        ],
        [
            'Mobile Money',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSmartphone"]
        ],
        [
            'GCoins',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"]
        ],
        [
            'Pay Bills',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconZap"]
        ],
        [
            'Prepaid Card Top up',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBriefcase"]
        ],
        [
            'Proxy Pay',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMonitor"]
        ],
        [
            'Scan and Pay',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTarget"]
        ],
        [
            'Settings',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSettings"]
        ],
        [
            'Standing Order',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconActivity"]
        ],
        [
            'Statements',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTag"]
        ],
        [
            'Term Deposit',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconShield"]
        ],
        [
            'Transfers',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowDown"]
        ],
        [
            'Virtual Cards',
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"]
        ]
    ];
    const beneficiaries = [
        {
            id: 'alex',
            name: 'Alex Kyeremeh Kwarteng',
            network: 'MTN Mobile Money',
            account: '0244472055'
        },
        {
            id: 'ama',
            name: 'Ama Serwaa Mensah',
            network: 'Telecel Cash',
            account: '0207854196'
        },
        {
            id: 'kwesi',
            name: 'Kwesi Boateng',
            network: 'AT Money',
            account: '0273361842'
        }
    ];
    const normalizedBeneficiaryQuery = beneficiaryQuery.trim().toLowerCase();
    const filteredBeneficiaries = beneficiaries.filter((beneficiary)=>`${beneficiary.name} ${beneficiary.network} ${beneficiary.account}`.toLowerCase().includes(normalizedBeneficiaryQuery));
    const transferAmountNumber = Number(transferAmount) || 0;
    const canContinueTransfer = transferAmountNumber > 0 && selectedBeneficiary !== null;
    function openGCoins() {
        setPin('');
        setPinError(false);
        onModeChange('gcoinsLogin');
    }
    function authorise() {
        if (pin !== pinCode) {
            setPinError(true);
            return;
        }
        setPin('');
        setPinError(false);
        onEnterGCoins();
    }
    function openMobileMoney() {
        setTransferStep('details');
        setTransferAmount('0.00');
        setSelectedBeneficiary(null);
        setBeneficiaryPickerOpen(false);
        setBeneficiaryQuery('');
        setRoundUpResult(null);
        onModeChange('gcbMobileMoney');
    }
    function updateTransferAmount(value) {
        const sanitized = value.replace(/[^\d.]/g, '');
        const [whole = '', ...decimalParts] = sanitized.split('.');
        const decimal = decimalParts.join('').slice(0, 2);
        setTransferAmount(decimalParts.length > 0 ? `${whole}.${decimal}` : whole);
    }
    function selectBeneficiary(beneficiary) {
        setSelectedBeneficiary(beneficiary);
        setBeneficiaryPickerOpen(false);
        setBeneficiaryQuery('');
    }
    function completeTransfer() {
        if (transferStep !== 'confirm' || !selectedBeneficiary || transferAmountNumber <= 0) return;
        const principalAmount = transferAmountNumber;
        const feeAmount = 0.5;
        const transaction = {
            id: `MOMO-${Date.now()}`,
            merchant: selectedBeneficiary.name.toUpperCase(),
            principalAmount,
            feeAmount,
            totalDebit: +(principalAmount + feeAmount).toFixed(2)
        };
        setRoundUpResult(onCompleteTransaction(transaction));
        setTransferStep('success');
    }
    function handleTransferBack() {
        setRoundUpResult(null);
        if (transferStep === 'confirm') {
            setTransferStep('details');
            return;
        }
        setTransferStep('details');
        onModeChange('gcbHome');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-2 sm:p-4",
        style: {
            background: dark ? '#111111' : '#D7DADD'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex flex-col w-full max-w-sm overflow-hidden ${mode === 'gcoins' ? dark ? 'gcoins-dark' : 'gcoins-light' : ''}`,
            style: {
                height: '844px',
                background: pageBg,
                color: text,
                borderRadius: '44px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 0 0 12px #242424'
            },
            children: mode === 'gcoins' ? gcoinsModule : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 pt-4 pb-3 text-xs font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "3:23"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSignal"], {
                                        size: 13,
                                        color: text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWifi"], {
                                        size: 13,
                                        color: text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBattery"], {
                                        size: 16,
                                        color: text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this),
                    mode === 'gcoinsLogin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 px-5 py-4",
                                style: {
                                    background: headerBg,
                                    color: '#FFFFFF'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onModeChange('gcbHome'),
                                        className: "w-9 h-9 rounded-full flex items-center justify-center",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            transform: 'rotate(180deg)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                            size: 24,
                                            color: "#FFFFFF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                            lineNumber: 223,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 218,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: "Open GCoins"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 217,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col justify-center px-6 pb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full flex items-center justify-center",
                                                style: {
                                                    background: '#F5C000'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                                    size: 31,
                                                    color: "#1F2937"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-bold",
                                                        style: {
                                                            fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: text
                                                                },
                                                                children: "G"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#F5C000'
                                                                },
                                                                children: "Coins"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "Enter your GCoins PIN to continue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 228,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        inputMode: "numeric",
                                        maxLength: 4,
                                        autoFocus: true,
                                        value: pin,
                                        onChange: (e)=>{
                                            setPinError(false);
                                            setPin(e.target.value.replace(/\D/g, '').slice(0, 4));
                                        },
                                        placeholder: "••••",
                                        className: "w-full rounded-2xl px-4 py-4 text-2xl font-bold text-center tracking-[0.6em] outline-none",
                                        style: {
                                            background: surface,
                                            border: `2px solid ${pinError ? '#EF4444' : '#F5C000'}`,
                                            color: text
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 242,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-center mt-3",
                                        style: {
                                            color: pinError ? '#EF4444' : '#737373'
                                        },
                                        children: pinError ? 'Incorrect GCoins PIN. Please try again.' : `Prototype PIN: ${pinCode}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: authorise,
                                        disabled: pin.length !== 4,
                                        className: "w-full mt-5 py-3.5 rounded-xl text-sm font-semibold",
                                        style: {
                                            background: pin.length === 4 ? '#F5C000' : '#3F3F46',
                                            color: pin.length === 4 ? '#1F2937' : '#737373'
                                        },
                                        children: "Open GCoins"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 259,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onModeChange('gcbHome'),
                                        className: "w-full mt-2 py-3 rounded-xl text-sm font-semibold",
                                        style: {
                                            background: 'transparent',
                                            color: muted,
                                            border: 'none'
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 270,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 227,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 216,
                        columnNumber: 15
                    }, this) : mode === 'gcbMobileMoney' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col overflow-hidden",
                        style: {
                            background: pageBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 px-5 py-4 flex-shrink-0",
                                style: {
                                    background: headerBg,
                                    color: '#FFFFFF'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleTransferBack,
                                        className: "w-9 h-9 rounded-full flex items-center justify-center",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            transform: 'rotate(180deg)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                            size: 24,
                                            color: "#FFFFFF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                            lineNumber: 287,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 282,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: transferStep === 'success' ? 'Transaction Complete' : transferStep === 'confirm' ? 'Confirmation' : 'Mobile Money to Others'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 289,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 281,
                                columnNumber: 17
                            }, this),
                            transferStep === 'details' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold mb-2",
                                        style: {
                                            color: muted
                                        },
                                        children: "FROM ACCOUNT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 296,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4 mb-5",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "Standard Savings ••• 4521"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 298,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mt-1",
                                                style: {
                                                    color: muted
                                                },
                                                children: [
                                                    "Available balance · GHS ",
                                                    mainAccountBalance.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 299,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 297,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold mb-2",
                                        style: {
                                            color: muted
                                        },
                                        children: "BENEFICIARY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 303,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-expanded": beneficiaryPickerOpen,
                                        onClick: ()=>setBeneficiaryPickerOpen((open)=>!open),
                                        className: "w-full rounded-2xl p-4 mb-3 flex items-center gap-3 text-left",
                                        style: {
                                            background: surface,
                                            color: text,
                                            border: `1px solid ${beneficiaryPickerOpen ? '#F5C000' : dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: selectedBeneficiary ? '#455563' : dark ? '#3A3A3A' : '#EEF1F3'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSmartphone"], {
                                                    size: 18,
                                                    color: selectedBeneficiary ? '#FFFFFF' : muted
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 315,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: selectedBeneficiary?.name ?? 'Select a beneficiary'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs truncate",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: selectedBeneficiary ? `${selectedBeneficiary.network} · ${selectedBeneficiary.account}` : 'Search saved people or enter someone new'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 321,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                                size: 17,
                                                color: muted
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 327,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 304,
                                        columnNumber: 21
                                    }, this),
                                    beneficiaryPickerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-3 mb-5",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "rounded-xl px-3 py-2.5 flex items-center gap-2",
                                                style: {
                                                    background: dark ? '#1C1C1C' : '#F5F6F7',
                                                    border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTarget"], {
                                                        size: 16,
                                                        color: muted
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        autoFocus: true,
                                                        value: beneficiaryQuery,
                                                        onChange: (event)=>setBeneficiaryQuery(event.target.value),
                                                        placeholder: "Search name or enter mobile number",
                                                        className: "w-full bg-transparent outline-none text-sm",
                                                        style: {
                                                            color: text
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 331,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: [
                                                    filteredBeneficiaries.map((beneficiary)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>selectBeneficiary(beneficiary),
                                                            className: "w-full flex items-center gap-3 p-3 rounded-xl text-left",
                                                            style: {
                                                                background: 'transparent',
                                                                color: text
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                                                    style: {
                                                                        background: '#455563'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"], {
                                                                        size: 15,
                                                                        color: "#FFFFFF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                    lineNumber: 354,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium truncate",
                                                                            children: beneficiary.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                            lineNumber: 358,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs",
                                                                            style: {
                                                                                color: muted
                                                                            },
                                                                            children: [
                                                                                beneficiary.network,
                                                                                " · ",
                                                                                beneficiary.account
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                            lineNumber: 359,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, beneficiary.id, true, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 29
                                                        }, this)),
                                                    beneficiaryQuery.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>selectBeneficiary({
                                                                id: `new-${Date.now()}`,
                                                                name: beneficiaryQuery.trim(),
                                                                network: 'New beneficiary',
                                                                account: 'Details to be verified'
                                                            }),
                                                        className: "w-full flex items-center gap-3 p-3 rounded-xl text-left",
                                                        style: {
                                                            background: dark ? '#403A20' : '#FFF8D8',
                                                            color: text,
                                                            border: '1px solid #F5C000'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                                                style: {
                                                                    background: '#F5C000'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {
                                                                    size: 15,
                                                                    color: "#1F2937"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: [
                                                                            "Use “",
                                                                            beneficiaryQuery.trim(),
                                                                            "”"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                        lineNumber: 381,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs",
                                                                        style: {
                                                                            color: muted
                                                                        },
                                                                        children: "Continue with a new beneficiary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                        lineNumber: 382,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 29
                                                    }, this),
                                                    !beneficiaryQuery.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "px-3 pt-2 pb-1 text-xs",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "Choose a saved beneficiary or type to add a new one."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 345,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 330,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-semibold",
                                        style: {
                                            color: muted
                                        },
                                        children: "AMOUNT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 394,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 rounded-2xl px-4 py-5 flex items-center gap-3",
                                        style: {
                                            background: surface,
                                            border: '2px solid #50616C'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                style: {
                                                    color: muted
                                                },
                                                children: "GHS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 396,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                inputMode: "decimal",
                                                "aria-label": "Transfer amount",
                                                value: transferAmount,
                                                onFocus: (event)=>event.currentTarget.select(),
                                                onChange: (event)=>updateTransferAmount(event.target.value),
                                                onBlur: ()=>setTransferAmount(transferAmountNumber.toFixed(2)),
                                                className: "flex-1 min-w-0 bg-transparent outline-none text-2xl font-semibold",
                                                style: {
                                                    color: text
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 397,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 395,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4 mt-4",
                                        style: {
                                            background: dark ? '#1C1C1C' : '#EEF1F3',
                                            border: `1px solid ${dark ? '#333333' : '#E1E5E8'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "LIVE TRANSACTION PREVIEW"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: '#C99A00'
                                                        },
                                                        children: "Updates as you type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 413,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "To"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-right truncate",
                                                        children: selectedBeneficiary?.name ?? 'No beneficiary selected'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 417,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-4 text-sm mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: [
                                                            "GHS ",
                                                            transferAmountNumber.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 421,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 409,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: !canContinueTransfer,
                                        onClick: ()=>setTransferStep('confirm'),
                                        className: "w-full mt-6 py-3.5 rounded-xl text-sm font-semibold",
                                        style: {
                                            background: canContinueTransfer ? '#50616C' : '#3F3F46',
                                            color: canContinueTransfer ? '#FFFFFF' : '#8B8B8B'
                                        },
                                        children: "Continue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 426,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 295,
                                columnNumber: 19
                            }, this) : transferStep === 'confirm' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mb-3",
                                                style: {
                                                    color: muted
                                                },
                                                children: "Beneficiary details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 438,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: selectedBeneficiary?.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 439,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: muted
                                                },
                                                children: [
                                                    selectedBeneficiary?.network,
                                                    " · ",
                                                    selectedBeneficiary?.account
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 440,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 437,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4 mt-4 flex flex-col gap-3",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "GHS ",
                                                            Number(transferAmount).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 445,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "Transfer fee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "GHS 0.50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 449,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px",
                                                style: {
                                                    background: dark ? '#3A3A3A' : '#E5E7EB'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 453,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total you pay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "GHS ",
                                                            (Number(transferAmount) + 0.5).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 454,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "Paid from"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "GCB ••• 4521"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "Current GCB balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "GHS ",
                                                            mainAccountBalance.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 462,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 444,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4 mt-4 flex items-start gap-3",
                                        style: {
                                            background: dark ? '#403A20' : '#FFF8D8',
                                            border: '1px solid #F5C000'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: '#F5C000'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                                    size: 18,
                                                    color: "#1F2937"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 471,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: "GCoins is active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: roundUpOn && !roundUpPaused ? `Spare change will be rounded up to the nearest GH₵ ${roundUpTarget} and moved to your Vault.` : 'GCoins round-up is currently paused or disabled.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1 font-medium",
                                                        style: {
                                                            color: '#C99A00'
                                                        },
                                                        children: [
                                                            "Target: nearest GH₵ ",
                                                            roundUpTarget
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 25
                                                    }, this),
                                                    advanceActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-2 leading-snug",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: [
                                                            "Advance repayment of GHS ",
                                                            advanceTopUpProp.toFixed(2),
                                                            " will also be taken after this transfer."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 474,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 467,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: completeTransfer,
                                        className: "w-full mt-6 py-3.5 rounded-xl text-sm font-semibold",
                                        style: {
                                            background: '#50616C',
                                            color: '#FFFFFF'
                                        },
                                        children: "Confirm Transfer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 489,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 436,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-5 flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl p-6 text-center",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-full mx-auto flex items-center justify-center",
                                                style: {
                                                    background: '#3F9C35'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                                    size: 38,
                                                    color: "#FFFFFF"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 496,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-bold mt-5",
                                                children: "Transaction Successful"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 499,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm mt-2",
                                                style: {
                                                    color: muted
                                                },
                                                children: [
                                                    "Your transfer of GHS ",
                                                    transferAmountNumber.toFixed(2),
                                                    " to ",
                                                    selectedBeneficiary?.name,
                                                    " was successful."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 500,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 495,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: "REMAINING GCB MAIN BALANCE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base font-bold",
                                                        children: [
                                                            "GHS ",
                                                            roundUpResult?.newMainAccountBalance.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 506,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px mb-3",
                                                style: {
                                                    background: dark ? '#3A3A3A' : '#E5E7EB'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 510,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: muted
                                                                },
                                                                children: "Transfer + fee"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: [
                                                                    "−GHS ",
                                                                    roundUpResult?.debit.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 25
                                                    }, this),
                                                    (roundUpResult?.amount ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: muted
                                                                },
                                                                children: "GCoins round-up (to Vault)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                style: {
                                                                    color: '#C99A00'
                                                                },
                                                                children: [
                                                                    "−GHS ",
                                                                    roundUpResult.amount.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 27
                                                    }, this),
                                                    (roundUpResult?.advanceRepay ?? 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: muted
                                                                        },
                                                                        children: "Advance repayment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs ml-1",
                                                                        style: {
                                                                            color: '#9CA3AF'
                                                                        },
                                                                        children: [
                                                                            "· GHS ",
                                                                            roundUpResult.advanceOutstandingLeft.toFixed(2),
                                                                            " left"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                style: {
                                                                    color: '#6B7280'
                                                                },
                                                                children: [
                                                                    "−GHS ",
                                                                    roundUpResult.advanceRepay.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 511,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 505,
                                        columnNumber: 21
                                    }, this),
                                    (roundUpResult?.amount ?? 0) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4 flex items-center gap-3",
                                        style: {
                                            background: dark ? '#403A20' : '#FFF8D8',
                                            border: '1px solid #F5C000'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0",
                                                style: {
                                                    background: '#F5C000'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                                    size: 22,
                                                    color: "#1F2937"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 539,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: "GCoins round-up saved"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-0.5",
                                                        style: {
                                                            color: muted
                                                        },
                                                        children: [
                                                            "GH₵ ",
                                                            roundUpResult.amount.toFixed(2),
                                                            " added to your Vault"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1 font-semibold",
                                                        style: {
                                                            color: '#C99A00'
                                                        },
                                                        children: [
                                                            "New balance · GH₵ ",
                                                            roundUpResult.newVaultBalance.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 542,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 535,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                children: "No GCoins round-up"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 552,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mt-1",
                                                style: {
                                                    color: muted
                                                },
                                                children: roundUpResult?.reason === 'whole-amount' ? 'No GCoins round-up. Your balance after this payment was already a whole-cedi amount.' : roundUpResult?.reason === 'disabled' || roundUpResult?.reason === 'paused' ? 'GCoins round-up is off.' : 'Your round-up settings or account safeguard prevented this deposit.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 553,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 551,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setTransferStep('details');
                                            setRoundUpResult(null);
                                            onModeChange('gcbHome');
                                        },
                                        className: "w-full mt-auto py-3.5 rounded-xl text-sm font-semibold",
                                        style: {
                                            background: '#50616C',
                                            color: '#FFFFFF'
                                        },
                                        children: "Go Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 563,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 494,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 280,
                        columnNumber: 15
                    }, this) : mode === 'gcbProfile' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto pb-8",
                        style: {
                            background: pageBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-44 px-5 pt-5",
                                style: {
                                    background: headerBg
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onModeChange('gcbHome'),
                                        className: "w-9 h-9 rounded-full flex items-center justify-center",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            transform: 'rotate(180deg)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                            size: 25,
                                            color: "#FFFFFF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                            lineNumber: 585,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 580,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-1/2 bottom-0 w-28 h-28 rounded-full flex items-center justify-center",
                                        style: {
                                            transform: 'translate(-50%, 50%)',
                                            background: '#F5D76E',
                                            border: `3px solid ${pageBg}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"], {
                                                size: 52,
                                                color: "#45545D"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 591,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-1 right-1 w-6 h-6 rounded-full flex items-center justify-center",
                                                style: {
                                                    background: '#45545D',
                                                    color: '#F5C000',
                                                    border: `2px solid ${pageBg}`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {
                                                    size: 11,
                                                    color: "#F5C000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 592,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 587,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 579,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-16 text-center px-5 pb-4",
                                style: {
                                    borderBottom: `1px solid ${dark ? '#333333' : '#D9D9D9'}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: "Kwame Asante"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 601,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-1",
                                        style: {
                                            color: muted
                                        },
                                        children: "Last login date · 06-10-2026 08:47 AM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 602,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 600,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5",
                                children: [
                                    [
                                        {
                                            label: 'Settings',
                                            sub: 'Manage your profile settings',
                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSettings"],
                                            color: '#8BE0E8',
                                            action: ()=>onModeChange('gcbSettings')
                                        },
                                        {
                                            label: 'Manage Beneficiaries',
                                            sub: 'Manage transaction beneficiaries',
                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"],
                                            color: '#AFC2E2',
                                            action: undefined
                                        },
                                        {
                                            label: 'My Limits',
                                            sub: 'Control limits on your transactions',
                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconShield"],
                                            color: '#F5A33B',
                                            action: undefined
                                        },
                                        {
                                            label: 'Profile Session Summary',
                                            sub: 'View the history of app usage',
                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconActivity"],
                                            color: '#A9B0A5',
                                            action: undefined
                                        },
                                        {
                                            label: 'Referral and Reward',
                                            sub: 'Refer the app to loved ones and be rewarded',
                                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBriefcase"],
                                            color: '#20A8C7',
                                            action: undefined
                                        }
                                    ].map(({ label, sub, Icon, color, action })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: action,
                                            className: "w-full flex items-center gap-3 py-4 text-left",
                                            style: {
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: `1px solid ${dark ? '#333333' : '#D9D9D9'}`,
                                                color: text
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                                                    style: {
                                                        background: color
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        size: 16,
                                                        color: "#1F2937"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs",
                                                            style: {
                                                                color: muted
                                                            },
                                                            children: sub
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                                    size: 16,
                                                    color: muted
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onModeChange('gcbHome'),
                                        className: "w-full flex items-center gap-3 py-4 text-left",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            borderBottom: `1px solid ${dark ? '#333333' : '#D9D9D9'}`,
                                            color: text
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-full flex items-center justify-center",
                                                style: {
                                                    background: '#8BE0E8'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPower"], {
                                                    size: 16,
                                                    color: "#1F2937"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 633,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Log out"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 636,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 628,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 604,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-sm mt-24",
                                children: "Version 2.15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 639,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 578,
                        columnNumber: 15
                    }, this) : mode === 'gcbSettings' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        style: {
                            background: pageBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 px-5 py-4",
                                style: {
                                    background: headerBg,
                                    color: '#FFFFFF'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onModeChange('gcbProfile'),
                                        className: "w-9 h-9 rounded-full flex items-center justify-center",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            transform: 'rotate(180deg)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                            size: 24,
                                            color: "#FFFFFF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                            lineNumber: 649,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 644,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 651,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 643,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-wider mb-3",
                                        style: {
                                            color: muted
                                        },
                                        children: "Appearance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 654,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl p-4",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full flex items-center justify-center",
                                                        style: {
                                                            background: '#8BE0E8'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMonitor"], {
                                                            size: 18,
                                                            color: "#1F2937"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold",
                                                                children: "Themes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs",
                                                                style: {
                                                                    color: muted
                                                                },
                                                                children: "Choose how the GCB app looks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 656,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    'light',
                                                    'dark'
                                                ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onThemeChange(option),
                                                        className: "rounded-xl p-3 text-left",
                                                        style: {
                                                            background: option === 'light' ? '#F8F8F8' : '#171717',
                                                            color: option === 'light' ? '#171717' : '#FFFFFF',
                                                            border: theme === option ? '2px solid #F5C000' : '2px solid transparent'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-12 rounded-lg mb-2",
                                                                style: {
                                                                    background: option === 'light' ? 'linear-gradient(#50616C 45%, #FFFFFF 45%)' : 'linear-gradient(#111111 45%, #2B2B2B 45%)'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-semibold capitalize",
                                                                        children: option
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                        lineNumber: 684,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    theme === option && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                                                        size: 13,
                                                                        color: "#F5C000"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                        lineNumber: 685,
                                                                        columnNumber: 50
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 683,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, option, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 665,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 655,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl overflow-hidden mt-4",
                                        style: {
                                            background: surface,
                                            border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}`
                                        },
                                        children: [
                                            'Login Preferences',
                                            'Notifications',
                                            'Privacy and Security'
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between px-4 py-3.5",
                                                style: {
                                                    borderBottom: i < 2 ? `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                                        size: 15,
                                                        color: muted
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 693,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 691,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 653,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 642,
                        columnNumber: 15
                    }, this) : mode === 'gcbQuickAccess' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto pb-8",
                        style: {
                            background: pageBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 px-5 py-4",
                                style: {
                                    background: headerBg,
                                    color: '#FFFFFF'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onModeChange('gcbHome'),
                                        className: "w-9 h-9 rounded-full flex items-center justify-center",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            transform: 'rotate(180deg)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                            size: 24,
                                            color: "#FFFFFF"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                            lineNumber: 713,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 708,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: "Quick Access"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 715,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 707,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl px-4 py-3 flex items-center gap-3 mb-3",
                                        style: {
                                            background: surface,
                                            color: muted,
                                            border: `1px solid ${dark ? '#333333' : '#E5E7EB'}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTarget"], {
                                                size: 19,
                                                color: muted
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 722,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "Search Service"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 723,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 718,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: services.map(([label, Icon], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: label === 'GCoins' ? openGCoins : label === 'Mobile Money' ? openMobileMoney : undefined,
                                                className: "rounded-xl p-3 flex items-center gap-3 text-left",
                                                style: {
                                                    background: label === 'GCoins' ? dark ? '#403A20' : '#FFF8D8' : surface,
                                                    border: label === 'GCoins' ? '1px solid #F5C000' : `1px solid ${dark ? '#333333' : '#E5E7EB'}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                                        style: {
                                                            background: label === 'GCoins' ? '#F5C000' : index % 3 === 0 ? '#B9D7F5' : index % 3 === 1 ? '#F5B04D' : '#B8A9D9'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 15,
                                                            color: "#1F2937"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 736,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium",
                                                        style: {
                                                            color: text
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 727,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 725,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 717,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 706,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto pb-8 relative",
                        style: {
                            background: pageBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-0 top-0 h-56",
                                style: {
                                    background: headerBg
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 752,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 pt-5 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onModeChange('gcbProfile'),
                                                        className: "w-12 h-12 rounded-full flex items-center justify-center",
                                                        style: {
                                                            background: '#F5D76E',
                                                            border: '1px solid #FFFFFF'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"], {
                                                            size: 22,
                                                            color: "#45545D"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 756,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: '#FFFFFF'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm",
                                                                children: "Welcome,"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 764,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-semibold",
                                                                children: "Kwame Asante"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs",
                                                                style: {
                                                                    color: '#D1D5DB'
                                                                },
                                                                children: "Last login date 06-10-2026 08:47 AM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 766,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 755,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBell"], {
                                                size: 20,
                                                color: "#FFFFFF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 769,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 754,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mt-8 mb-3",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: "My Accounts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 773,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm underline",
                                                children: "View Accounts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 774,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 772,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl p-5",
                                        style: {
                                            background: surface,
                                            color: text,
                                            boxShadow: dark ? 'none' : '0 8px 20px rgba(0,0,0,0.10)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        children: "Standard Savings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-0.5",
                                                        style: {
                                                            color: '#A3A3A3'
                                                        },
                                                        children: "Account ••• 4521"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 780,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2 mt-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl",
                                                        "aria-live": "polite",
                                                        style: {
                                                            letterSpacing: mainBalanceVisible ? 'normal' : '0.12em'
                                                        },
                                                        children: mainBalanceVisible ? `GHS ${mainAccountBalance.toLocaleString('en-GH', {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })}` : 'GHS ••••••'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        "aria-label": mainBalanceVisible ? 'Hide account balance' : 'Show account balance',
                                                        "aria-pressed": mainBalanceVisible,
                                                        onClick: ()=>setMainBalanceVisible((visible)=>!visible),
                                                        className: "w-9 h-9 rounded-full flex items-center justify-center transition-colors",
                                                        style: {
                                                            background: dark ? '#3A3A3A' : '#F3F4F6',
                                                            border: 'none'
                                                        },
                                                        children: mainBalanceVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEye"], {
                                                            size: 18,
                                                            color: muted
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 47
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEyeOff"], {
                                                            size: 18,
                                                            color: muted
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 85
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 784,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-12 mt-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 mx-auto rounded-full flex items-center justify-center",
                                                                style: {
                                                                    background: '#455563'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowDown"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                    lineNumber: 804,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs mt-1",
                                                                children: "Share Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 806,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 802,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 mx-auto rounded-full flex items-center justify-center",
                                                                style: {
                                                                    background: '#455563'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconActivity"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                    lineNumber: 810,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 809,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs mt-1",
                                                                children: "Last 10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                                lineNumber: 812,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 801,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 776,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mt-7 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: "Quick Access"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 818,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onModeChange('gcbQuickAccess'),
                                                className: "text-sm underline",
                                                style: {
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#38BDF8'
                                                },
                                                children: "View All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 819,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 817,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-3",
                                        children: [
                                            {
                                                label: 'Transfers',
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowDown"],
                                                isGCoins: false
                                            },
                                            {
                                                label: 'Pay Bills',
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconZap"],
                                                isGCoins: false
                                            },
                                            {
                                                label: 'GCoins',
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"],
                                                isGCoins: true
                                            },
                                            {
                                                label: 'Mobile Money',
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSmartphone"],
                                                isGCoins: false
                                            }
                                        ].map(({ label, Icon, isGCoins })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: isGCoins ? openGCoins : label === 'Mobile Money' ? openMobileMoney : undefined,
                                                className: "flex flex-col items-center gap-2",
                                                style: {
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: text
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-full flex items-center justify-center",
                                                        style: {
                                                            background: isGCoins ? '#F5C000' : '#455563',
                                                            border: isGCoins ? '2px solid #FFF3CC' : 'none'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 21,
                                                            color: isGCoins ? '#1F2937' : '#FFFFFF'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                            lineNumber: 840,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 830,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 823,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold mb-3",
                                                children: "Recent Activities"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 848,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionHistoryList"], {
                                                transactions: transactions,
                                                limit: 4,
                                                dark: dark
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                                lineNumber: 849,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 847,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 753,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 751,
                        columnNumber: 15
                    }, this),
                    mode === 'gcbHome' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 px-4 py-3",
                        style: {
                            background: surface,
                            borderTop: `1px solid ${dark ? '#333333' : '#E5E7EB'}`
                        },
                        children: [
                            'Home',
                            'Payments',
                            'Cards',
                            'Help',
                            'More'
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconHome"], {
                                        size: 18,
                                        color: i === 0 ? text : muted
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 859,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: i === 0 ? text : muted
                                        },
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                                        lineNumber: 860,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, item, true, {
                                fileName: "[project]/src/components/screens/GcbApp.tsx",
                                lineNumber: 858,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/GcbApp.tsx",
                        lineNumber: 856,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/GcbApp.tsx",
                lineNumber: 205,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/screens/GcbApp.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/screens/GcbApp.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(GcbApp, "gsVbQ71KRR5dD7twGPuslvMCqNw=");
_c = GcbApp;
var _c;
__turbopack_context__.k.register(_c, "GcbApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/GoalsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoalsScreen",
    ()=>GoalsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PinEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PinEntry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function GoalsScreen({ goals, vaultBalance, pinCode, onCreateGoal, onUpdateGoal, onDeleteGoal, onAllocate, onWithdrawGoal, onClearCompleted }) {
    _s();
    const [showNew, setShowNew] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [goalName, setGoalName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [goalTarget, setGoalTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [goalMonth, setGoalMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [goalYear, setGoalYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedGoalId, setSelectedGoalId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [allocation, setAllocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [detailMode, setDetailMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('details');
    const [withdrawPin, setWithdrawPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [withdrawing, setWithdrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editTarget, setEditTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editDeadline, setEditDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const selectedGoal = goals.find((goal)=>goal.id === selectedGoalId);
    const hasCompleted = goals.some((goal)=>goal.saved >= goal.target);
    function createGoal() {
        const target = Number(goalTarget);
        if (!goalName.trim() || target <= 0) return;
        onCreateGoal({
            id: Date.now(),
            name: goalName.trim(),
            target,
            saved: 0,
            deadline: goalMonth && goalYear ? `${goalMonth} ${goalYear}` : 'No deadline',
            color: '#F5C000'
        });
        setGoalName('');
        setGoalTarget('');
        setGoalMonth('');
        setGoalYear('');
        setShowNew(false);
    }
    function allocate() {
        if (!selectedGoal) return;
        const remaining = selectedGoal.target - selectedGoal.saved;
        const amount = Math.min(Number(allocation), vaultBalance, remaining);
        if (amount <= 0) return;
        onAllocate(selectedGoal.id, amount);
        setAllocation('');
    }
    function closeGoalDetails() {
        setSelectedGoalId(null);
        setAllocation('');
        setDetailMode('details');
        setWithdrawPin('');
        setWithdrawing(false);
    }
    function withdrawCompletedGoal() {
        if (!selectedGoal || withdrawPin.length !== 4) return;
        setWithdrawing(true);
        setTimeout(()=>{
            onWithdrawGoal(selectedGoal.id);
            setWithdrawing(false);
            setDetailMode('success');
            setWithdrawPin('');
        }, 1000);
    }
    function startEditing(goal) {
        setEditName(goal.name);
        setEditTarget(String(goal.target));
        setEditDeadline(goal.deadline);
        setDetailMode('edit');
    }
    function saveGoalEdits() {
        if (!selectedGoal || !editName.trim() || Number(editTarget) < selectedGoal.saved) return;
        onUpdateGoal({
            ...selectedGoal,
            name: editName.trim(),
            target: Number(editTarget),
            deadline: editDeadline.trim() || 'No deadline'
        });
        setDetailMode('details');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 pb-6 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
                open: Boolean(selectedGoal),
                onClose: closeGoalDetails,
                title: detailMode === 'pin' ? 'Authorise Goal Withdrawal' : 'Goal Details',
                children: selectedGoal && (()=>{
                    const pct = Math.min(selectedGoal.saved / selectedGoal.target * 100, 100);
                    const done = pct >= 100;
                    if (detailMode === 'pin') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PinEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinEntry"], {
                            amount: selectedGoal.saved,
                            actionLabel: "Goal withdrawal",
                            pin: withdrawPin,
                            expectedPin: pinCode,
                            onPinChange: setWithdrawPin,
                            onBack: ()=>setDetailMode('details'),
                            onAuthorise: withdrawCompletedGoal,
                            processing: withdrawing
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 125,
                            columnNumber: 17
                        }, this);
                    }
                    if (detailMode === 'success') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-6 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full flex items-center justify-center",
                                    style: {
                                        background: '#D1FAE5'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                        size: 30,
                                        color: "#059669"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 142,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 141,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: "Funds sent to your GCB account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 144,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-center",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "GH₵ ",
                                        selectedGoal.saved.toFixed(2),
                                        " from ",
                                        selectedGoal.name,
                                        " was withdrawn to GCB Account ••• 4521."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeGoalDetails,
                                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                                    style: {
                                        background: '#F5C000',
                                        color: '#1F2937'
                                    },
                                    children: "Done"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 148,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 140,
                            columnNumber: 17
                        }, this);
                    }
                    if (detailMode === 'edit') {
                        const invalidTarget = Number(editTarget) < selectedGoal.saved || Number(editTarget) <= 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-medium",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "Goal name",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: editName,
                                            onChange: (e)=>setEditName(e.target.value),
                                            className: "w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none",
                                            style: {
                                                background: '#F9FAFB',
                                                border: '1px solid #E5E7EB',
                                                color: '#1F2937'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 159,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-medium",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "Target amount",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: selectedGoal.saved,
                                            value: editTarget,
                                            onChange: (e)=>setEditTarget(e.target.value),
                                            className: "w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none",
                                            style: {
                                                background: '#F9FAFB',
                                                border: `1px solid ${invalidTarget ? '#FECACA' : '#E5E7EB'}`,
                                                color: '#1F2937'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 168,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-medium",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "Target date",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: editDeadline,
                                            onChange: (e)=>setEditDeadline(e.target.value),
                                            placeholder: "e.g. Dec 2027",
                                            className: "w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none",
                                            style: {
                                                background: '#F9FAFB',
                                                border: '1px solid #E5E7EB',
                                                color: '#1F2937'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 181,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 179,
                                    columnNumber: 19
                                }, this),
                                invalidTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#EF4444'
                                    },
                                    children: "Target cannot be lower than the amount already saved."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 189,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDetailMode('details'),
                                            className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                            style: {
                                                background: '#F3F4F6',
                                                color: '#6B7280'
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: saveGoalEdits,
                                            className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                            style: {
                                                background: invalidTarget || !editName.trim() ? '#E5E7EB' : '#F5C000',
                                                color: invalidTarget || !editName.trim() ? '#9CA3AF' : '#1F2937'
                                            },
                                            children: "Save Goal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 194,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 190,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 158,
                            columnNumber: 17
                        }, this);
                    }
                    if (detailMode === 'delete') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-4 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-full flex items-center justify-center",
                                    style: {
                                        background: '#FEF2F2'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPower"], {
                                        size: 23,
                                        color: "#EF4444"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 213,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 212,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: [
                                        "Delete ",
                                        selectedGoal.name,
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 215,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-center",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: selectedGoal.withdrawn ? 'This removes the completed goal from your list.' : 'This removes the goal from your list. Funds already allocated to it will return to your GCoins Vault.'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 216,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDetailMode('details'),
                                            className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                            style: {
                                                background: '#F3F4F6',
                                                color: '#6B7280'
                                            },
                                            children: "Keep Goal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 222,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onDeleteGoal(selectedGoal.id),
                                            className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                            style: {
                                                background: '#EF4444',
                                                color: '#FFFFFF'
                                            },
                                            children: "Delete Goal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 225,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 221,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 211,
                            columnNumber: 17
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full flex items-center justify-center",
                                        style: {
                                            background: done ? '#D1FAE5' : '#FFF3CC'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalIcon"], {
                                            name: selectedGoal.name,
                                            done: done
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 237,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 236,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: selectedGoal.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: [
                                                    "Target date: ",
                                                    selectedGoal.deadline
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 239,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 235,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-4",
                                style: {
                                    background: '#F9FAFB'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: "Saved"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: [
                                                    "GH₵ ",
                                                    selectedGoal.saved.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 247,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: "Target"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 250,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: [
                                                    "GH₵ ",
                                                    selectedGoal.target.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 251,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 249,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 rounded-full overflow-hidden",
                                        style: {
                                            background: '#E5E7EB'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full",
                                            style: {
                                                width: `${pct}%`,
                                                background: done ? '#10B981' : '#F5C000'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 254,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-2 text-right",
                                        style: {
                                            color: done ? '#059669' : '#6B7280'
                                        },
                                        children: [
                                            pct.toFixed(0),
                                            "% complete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 244,
                                columnNumber: 17
                            }, this),
                            !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold",
                                                style: {
                                                    color: '#374151'
                                                },
                                                children: "Allocate from Vault"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 263,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: [
                                                    "Available: GH₵ ",
                                                    vaultBalance.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 264,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 262,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0",
                                        max: Math.min(vaultBalance, selectedGoal.target - selectedGoal.saved),
                                        placeholder: "Amount in GH₵",
                                        value: allocation,
                                        onChange: (e)=>setAllocation(e.target.value),
                                        className: "w-full rounded-xl px-3 py-2.5 text-sm outline-none",
                                        style: {
                                            background: '#F9FAFB',
                                            border: '1px solid #E5E7EB',
                                            color: '#1F2937'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 266,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: allocate,
                                        className: "w-full py-3 rounded-xl text-sm font-semibold",
                                        style: {
                                            background: Number(allocation) > 0 ? '#F5C000' : '#E5E7EB',
                                            color: Number(allocation) > 0 ? '#1F2937' : '#9CA3AF'
                                        },
                                        children: "Allocate Funds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 276,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 261,
                                columnNumber: 19
                            }, this),
                            done && !selectedGoal.withdrawn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs leading-relaxed",
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Your goal is complete. Withdraw the full saved amount directly to your linked GCB main account."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 290,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDetailMode('pin'),
                                        className: "w-full py-3 rounded-xl text-sm font-semibold",
                                        style: {
                                            background: '#1F2937',
                                            color: '#F5C000'
                                        },
                                        children: "Withdraw to GCB Account"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 293,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 289,
                                columnNumber: 19
                            }, this),
                            selectedGoal.withdrawn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-3 flex items-center gap-2",
                                style: {
                                    background: '#D1FAE5',
                                    color: '#059669'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                        size: 14,
                                        color: "#059669"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 300,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold",
                                        children: "Funds withdrawn to GCB Account ••• 4521"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 301,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 299,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>startEditing(selectedGoal),
                                        className: "flex-1 py-2.5 rounded-xl text-xs font-semibold",
                                        style: {
                                            background: '#F3F4F6',
                                            color: '#374151'
                                        },
                                        children: "Edit Goal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 305,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDetailMode('delete'),
                                        className: "flex-1 py-2.5 rounded-xl text-xs font-semibold",
                                        style: {
                                            background: '#FEF2F2',
                                            color: '#EF4444'
                                        },
                                        children: "Delete Goal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 308,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 304,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 234,
                        columnNumber: 15
                    }, this);
                })()
            }, void 0, false, {
                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-sm",
                        style: {
                            color: '#374151'
                        },
                        children: "Savings Goals"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            hasCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClearCompleted,
                                className: "text-xs font-semibold px-3 py-1.5 rounded-full",
                                style: {
                                    background: '#F3F4F6',
                                    color: '#6B7280'
                                },
                                children: "Clear completed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowNew(!showNew),
                                className: "text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1",
                                style: {
                                    background: '#F5C000',
                                    color: '#1F2937'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {
                                        size: 12,
                                        color: "#1F2937"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    " New Goal"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            showNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 rounded-2xl p-4",
                style: {
                    background: '#FFFFFF',
                    border: '2px solid #F5C000'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold mb-3",
                        style: {
                            color: '#1F2937'
                        },
                        children: "Create New Goal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Goal name (e.g. New Car)",
                                value: goalName,
                                onChange: (e)=>setGoalName(e.target.value),
                                className: "w-full rounded-xl px-3 py-2.5 text-sm outline-none",
                                style: {
                                    background: '#F9FAFB',
                                    border: '1px solid #E5E7EB',
                                    color: '#1F2937'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                placeholder: "Target amount (GHS)",
                                type: "number",
                                value: goalTarget,
                                onChange: (e)=>setGoalTarget(e.target.value),
                                className: "w-full rounded-xl px-3 py-2.5 text-sm outline-none",
                                style: {
                                    background: '#F9FAFB',
                                    border: '1px solid #E5E7EB',
                                    color: '#1F2937'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mb-1.5",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: "Target date (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: goalMonth,
                                                onChange: (e)=>setGoalMonth(e.target.value),
                                                className: "flex-1 rounded-xl px-2 py-2.5 text-xs outline-none min-w-0",
                                                style: {
                                                    background: '#F9FAFB',
                                                    border: '1px solid #E5E7EB',
                                                    color: goalMonth ? '#1F2937' : '#9CA3AF'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTHS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: m,
                                                            children: m
                                                        }, m, false, {
                                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: goalYear,
                                                onChange: (e)=>setGoalYear(e.target.value),
                                                className: "flex-1 rounded-xl px-2 py-2.5 text-xs outline-none min-w-0",
                                                style: {
                                                    background: '#F9FAFB',
                                                    border: '1px solid #E5E7EB',
                                                    color: goalYear ? '#1F2937' : '#9CA3AF'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Year"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YEARS"].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: y,
                                                            children: y
                                                        }, y, false, {
                                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                lineNumber: 368,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full py-2.5 rounded-xl text-sm font-semibold",
                        style: {
                            background: goalName.trim() && Number(goalTarget) > 0 ? '#F5C000' : '#E5E7EB',
                            color: goalName.trim() && Number(goalTarget) > 0 ? '#1F2937' : '#9CA3AF'
                        },
                        onClick: createGoal,
                        children: "Create Goal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, this),
            goals.map((goal)=>{
                const pct = Math.min(goal.saved / goal.target * 100, 100);
                const done = pct >= 100;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSelectedGoalId(goal.id),
                    className: "mx-4 rounded-2xl p-4 text-left",
                    style: {
                        background: '#FFFFFF',
                        border: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                                    style: {
                                        background: done ? '#D1FAE5' : '#F3F4F6'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalIcon"], {
                                        name: goal.name,
                                        done: done
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-sm",
                                                    style: {
                                                        color: '#1F2937'
                                                    },
                                                    children: goal.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this),
                                                done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1",
                                                    style: {
                                                        background: '#D1FAE5',
                                                        color: '#059669'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                                            size: 10,
                                                            color: "#059669"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        goal.withdrawn ? 'Withdrawn' : 'Completed'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs",
                                            style: {
                                                color: '#9CA3AF'
                                            },
                                            children: [
                                                "By ",
                                                goal.deadline
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "GH₵ ",
                                        goal.saved.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: [
                                        "GH₵ ",
                                        goal.target.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 rounded-full overflow-hidden",
                            style: {
                                background: '#F3F4F6'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-full transition-all duration-700",
                                style: {
                                    width: `${pct}%`,
                                    background: done ? '#10B981' : goal.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                                lineNumber: 426,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-1.5 text-right font-medium",
                            style: {
                                color: done ? '#059669' : '#6B7280'
                            },
                            children: [
                                pct.toFixed(0),
                                "% reached"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, this)
                    ]
                }, goal.id, true, {
                    fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                    lineNumber: 399,
                    columnNumber: 11
                }, this);
            }),
            goals.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 rounded-2xl p-8 text-center",
                style: {
                    background: '#FFFFFF'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold",
                        style: {
                            color: '#374151'
                        },
                        children: "No active goals"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs mt-1",
                        style: {
                            color: '#9CA3AF'
                        },
                        children: "Create a goal and allocate funds from your Vault."
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/GoalsScreen.tsx",
                lineNumber: 435,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/GoalsScreen.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(GoalsScreen, "VnLNroxAeTrTevZ887s9bGn+E/Y=");
_c = GoalsScreen;
var _c;
__turbopack_context__.k.register(_c, "GoalsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/HomeScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeScreen",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$AddMoneySheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/AddMoneySheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$WithdrawSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/WithdrawSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$BorrowSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/BorrowSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$ReminderSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/ReminderSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$RewardsSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/RewardsSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/TransactionHistoryList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function HomeScreen({ roundUpOn, roundUpPaused, vaultBalance, mainAccountBalance, roundUpMultiple, monthlyTotal, weeklyRoundUps, streakDays, reminderFrequency, pinCode, loyaltyPoints, freezeEnabled, freezeUsed, claimedVouchers, advanceTotal, advanceOutstanding, advanceActive, advanceCleared, advanceEligible, advanceDueAt, advanceRepaymentPace, advanceTopUp, balanceSafeguard, transactions, onEnableRequest, onPause, onResume, onEnd, onAdd, onWithdraw, onBorrow, onOpenRepay, onReminderChange, onToggleFreeze, onRedeemPoints, onRedeemReward, onMarkVoucherUsed, onGoToGoals }) {
    _s();
    const [sheet, setSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showReminder, setShowReminder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRewards, setShowRewards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAdvanceDetails, setShowAdvanceDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isActive = roundUpOn && !roundUpPaused;
    const repaidAmount = Math.max(0, advanceTotal - advanceOutstanding);
    const repaidPercentage = advanceTotal > 0 ? Math.min(100, Math.round(repaidAmount / advanceTotal * 100)) : 0;
    const repaymentPaceLabel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPAYMENT_PACES"].find((pace)=>pace.id === advanceRepaymentPace)?.label ?? 'Standard';
    const advanceDueDate = advanceDueAt ? new Date(advanceDueAt) : null;
    const daysUntilDue = advanceDueAt ? Math.ceil((advanceDueAt - Date.now()) / 86400000) : null;
    const advanceStatus = advanceCleared ? 'Cleared' : daysUntilDue !== null && daysUntilDue < 0 ? 'Overdue' : daysUntilDue !== null && daysUntilDue <= 14 ? 'Due soon' : 'On track';
    const advanceStatusStyle = advanceStatus === 'Overdue' ? {
        background: 'rgba(239,68,68,0.18)',
        color: '#FCA5A5'
    } : advanceStatus === 'Due soon' ? {
        background: 'rgba(245,192,0,0.16)',
        color: '#F5C000'
    } : {
        background: 'rgba(16,185,129,0.16)',
        color: '#6EE7B7'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 pb-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$AddMoneySheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddMoneySheet"], {
                open: sheet === 'addMoney',
                onClose: ()=>setSheet(null),
                onAdd: onAdd,
                pinCode: pinCode
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$WithdrawSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithdrawSheet"], {
                open: sheet === 'withdraw',
                onClose: ()=>setSheet(null),
                vaultBalance: vaultBalance,
                mainAccountBalance: mainAccountBalance,
                onWithdraw: onWithdraw,
                pinCode: pinCode
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$BorrowSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorrowSheet"], {
                open: sheet === 'borrow',
                onClose: ()=>setSheet(null),
                onBorrow: onBorrow,
                pinCode: pinCode
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$ReminderSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReminderSheet"], {
                open: showReminder,
                onClose: ()=>setShowReminder(false),
                frequency: reminderFrequency,
                onChange: onReminderChange
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$RewardsSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RewardsSheet"], {
                open: showRewards,
                onClose: ()=>setShowRewards(false),
                streakDays: streakDays,
                points: loyaltyPoints,
                vaultBalance: vaultBalance,
                freezeEnabled: freezeEnabled,
                freezeUsed: freezeUsed,
                advanceOutstanding: advanceOutstanding,
                vouchers: claimedVouchers,
                onToggleFreeze: onToggleFreeze,
                onRedeemForAdvance: onRedeemPoints,
                onRedeemReward: onRedeemReward,
                onMarkVoucherUsed: onMarkVoucherUsed
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
                open: showAdvanceDetails,
                onClose: ()=>setShowAdvanceDetails(false),
                title: "GCoins Advance",
                fullHeight: true,
                children: advanceActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-4",
                            style: {
                                background: '#1F2937'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-full text-[10px] font-semibold",
                                                    style: advanceStatusStyle,
                                                    children: advanceStatus
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mt-3",
                                                    style: {
                                                        color: '#9CA3AF'
                                                    },
                                                    children: "Outstanding balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl font-bold mt-0.5 text-white",
                                                    style: {
                                                        fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                                                    },
                                                    children: [
                                                        "GHS ",
                                                        advanceOutstanding.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] mt-0.5",
                                                    style: {
                                                        color: '#9CA3AF'
                                                    },
                                                    children: [
                                                        "of GHS ",
                                                        advanceTotal.toFixed(2),
                                                        " total"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-11 h-11 rounded-full flex items-center justify-center",
                                            style: {
                                                background: 'rgba(245,192,0,0.14)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"], {
                                                size: 21,
                                                color: "#F5C000"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-[11px] mb-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#D1D5DB'
                                                    },
                                                    children: [
                                                        repaidPercentage,
                                                        "% repaid"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#9CA3AF'
                                                    },
                                                    children: [
                                                        "GHS ",
                                                        repaidAmount.toFixed(2),
                                                        " paid"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-2 rounded-full overflow-hidden",
                                            style: {
                                                background: '#374151'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-full transition-all",
                                                style: {
                                                    width: `${repaidPercentage}%`,
                                                    background: '#F5C000'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl p-4 flex flex-col gap-3",
                            style: {
                                background: '#F9FAFB',
                                border: '1px solid #E5E7EB'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#6B7280'
                                            },
                                            children: "Estimated due date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: advanceDueDate?.toLocaleDateString('en-GH', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            }) ?? 'Not set'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#6B7280'
                                            },
                                            children: "Repayment pace"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: repaymentPaceLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#6B7280'
                                            },
                                            children: "Per-transaction top-up"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: [
                                                "GHS ",
                                                advanceTopUp.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#6B7280'
                                            },
                                            children: "Balance safeguard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: balanceSafeguard > 0 ? `GH₵ ${balanceSafeguard.toFixed(0)}` : 'Not set'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs leading-relaxed",
                                    style: {
                                        color: '#9CA3AF'
                                    },
                                    children: "Round-ups pause whenever your balance would fall below this amount."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowAdvanceDetails(false);
                                        onOpenRepay('extra');
                                    },
                                    className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                    style: {
                                        background: '#F3F4F6',
                                        color: '#1F2937',
                                        border: '1px solid #E5E7EB'
                                    },
                                    children: "Pay extra"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowAdvanceDetails(false);
                                        onOpenRepay('payoff');
                                    },
                                    className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                    style: {
                                        background: '#F5C000',
                                        color: '#1F2937'
                                    },
                                    children: "Pay off now"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-center leading-relaxed",
                            style: {
                                color: '#9CA3AF'
                            },
                            children: "Clear your balance early anytime with no penalty."
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full flex items-center justify-center",
                            style: {
                                background: '#D1FAE5'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                size: 30,
                                color: "#059669"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-bold mt-3",
                            style: {
                                color: '#1F2937',
                                fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                            },
                            children: "Advance cleared"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-1",
                            style: {
                                color: '#6B7280'
                            },
                            children: "Your balance is settled and automatic repayment top-ups have stopped."
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        advanceEligible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowAdvanceDetails(false);
                                setSheet('borrow');
                            },
                            className: "w-full mt-5 py-3 rounded-xl text-sm font-semibold",
                            style: {
                                background: '#F5C000',
                                color: '#1F2937'
                            },
                            children: "Borrow again"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 255,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gcoins-hero mx-4 mt-4 rounded-2xl p-6 text-white relative overflow-hidden",
                style: {
                    background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-40 h-40 rounded-full opacity-10",
                        style: {
                            background: '#F5C000',
                            transform: 'translate(30%, -30%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-10 w-24 h-24 rounded-full opacity-10",
                        style: {
                            background: '#F5C000',
                            transform: 'translate(-30%, 30%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                style: {
                                    color: '#9CA3AF'
                                },
                                children: "GCoins Balance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEye"], {
                                size: 15,
                                color: "#9CA3AF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mt-1 mb-4",
                        style: {
                            fontFamily: 'var(--font-display, "DM Serif Display", serif)',
                            color: '#F5C000'
                        },
                        children: [
                            "GHS ",
                            vaultBalance.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: "This week"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-semibold text-white",
                                        children: [
                                            "+GH₵ ",
                                            weeklyRoundUps.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px bg-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: "Streak"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-semibold text-white flex items-center gap-1",
                                        children: [
                                            streakDays,
                                            " days ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFlame"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 293,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 mt-3 text-[11px]",
                        style: {
                            color: '#F5C000'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    loyaltyPoints,
                                    " points ·"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowRewards(true),
                                className: "font-semibold underline underline-offset-2",
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    padding: 0,
                                    color: '#F5C000'
                                },
                                children: "View rewards ›"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 grid grid-cols-2 gap-3",
                children: [
                    {
                        label: 'Add Money',
                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"],
                        action: 'addMoney'
                    },
                    {
                        label: 'Withdraw',
                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowDown"],
                        action: 'withdraw'
                    },
                    {
                        label: 'Set Goal',
                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTarget"],
                        action: null,
                        onTap: onGoToGoals
                    },
                    {
                        label: 'Borrow',
                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"],
                        action: 'borrow',
                        highlight: true
                    }
                ].map(({ label, Icon, action, highlight, onTap })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>action ? setSheet(action) : onTap?.(),
                        className: "flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition-all active:scale-95",
                        style: {
                            background: highlight ? '#1F2937' : '#FFFFFF',
                            color: highlight ? '#F5C000' : '#1F2937',
                            border: highlight ? 'none' : '1px solid #E5E7EB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                                style: {
                                    background: highlight ? 'rgba(245,192,0,0.15)' : '#FFF3CC'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 17,
                                    color: highlight ? '#F5C000' : '#C99A00'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            label
                        ]
                    }, label, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            (advanceActive || advanceCleared) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setShowAdvanceDetails(true),
                className: "mx-4 rounded-2xl px-4 py-3.5 flex items-center gap-3 text-left",
                style: {
                    background: '#1F2937',
                    border: '1px solid #F5C000'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                        style: {
                            background: 'rgba(245,192,0,0.14)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"], {
                            size: 18,
                            color: "#F5C000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-white",
                        children: "GCoins Advance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 rounded-full text-[10px] font-semibold ml-auto",
                        style: advanceStatusStyle,
                        children: advanceStatus
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                        size: 18,
                        color: "#F5C000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 340,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 rounded-2xl p-4",
                style: {
                    background: '#FFFFFF'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-sm",
                                        style: {
                                            color: '#1F2937'
                                        },
                                        children: "Round-Up Savings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-0.5",
                                        style: {
                                            color: roundUpPaused ? '#C99A00' : !roundUpOn ? '#EF4444' : '#6B7280'
                                        },
                                        children: !roundUpOn ? 'Automation ended' : roundUpPaused ? 'Paused' : 'Spare change goes straight to your vault'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                on: isActive,
                                onToggle: ()=>{
                                    if (!roundUpOn) onEnableRequest();
                                    else if (roundUpPaused) onResume();
                                    else onEnd();
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3 text-sm mb-3",
                        style: {
                            background: isActive ? '#FFF3CC' : '#F9FAFB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Round-up target"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        style: {
                                            color: isActive ? '#C99A00' : '#9CA3AF'
                                        },
                                        children: [
                                            "Nearest GH₵ ",
                                            roundUpMultiple
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Balance safeguard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        style: {
                                            color: balanceSafeguard > 0 ? isActive ? '#C99A00' : '#9CA3AF' : '#9CA3AF'
                                        },
                                        children: balanceSafeguard > 0 ? `GH₵ ${balanceSafeguard.toFixed(0)}` : 'Not set'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Total this month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        style: {
                                            color: monthlyTotal > 0 ? '#C99A00' : '#9CA3AF'
                                        },
                                        children: [
                                            "GH₵ ",
                                            monthlyTotal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    roundUpOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: roundUpPaused ? onResume : onPause,
                                className: "flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all",
                                style: {
                                    background: roundUpPaused ? '#FFF3CC' : '#F9FAFB',
                                    color: roundUpPaused ? '#C99A00' : '#6B7280',
                                    border: roundUpPaused ? '1.5px solid #F5C000' : '1px solid #E5E7EB'
                                },
                                children: roundUpPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"], {
                                            size: 11,
                                            color: "#C99A00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 404,
                                            columnNumber: 19
                                        }, this),
                                        " Resume"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 403,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPause"], {
                                            size: 11,
                                            color: "#6B7280"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 408,
                                            columnNumber: 19
                                        }, this),
                                        " Pause"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 407,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onEnd,
                                className: "flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5",
                                style: {
                                    background: '#FEF2F2',
                                    color: '#EF4444',
                                    border: '1px solid #FECACA'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPower"], {
                                        size: 12,
                                        color: "#EF4444"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    " End"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this),
                    !roundUpOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onEnableRequest,
                        className: "w-full py-2.5 rounded-xl text-xs font-semibold",
                        style: {
                            background: '#FFF3CC',
                            color: '#C99A00',
                            border: '1.5px solid #F5C000'
                        },
                        children: "Re-enable Automation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowReminder(true),
                className: "mx-4 rounded-2xl p-4 text-left",
                style: {
                    background: '#FFFFFF',
                    border: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                            style: {
                                background: '#FFF3CC'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBot"], {
                                size: 18,
                                color: "#C99A00"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 436,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-sm",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: "GCoins Reminder"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold",
                                            style: {
                                                color: reminderFrequency === 'Off' ? '#9CA3AF' : '#C99A00'
                                            },
                                            children: reminderFrequency
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-1",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: reminderFrequency === 'Off' ? 'Reminders are off. Tap to explore reminder options.' : `"You're GH₵ 759.50 away from your Emergency Fund goal. At your current pace, you'll hit it by Nov 2026!"`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-sm mb-3",
                        style: {
                            color: '#374151'
                        },
                        children: "Recent Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionHistoryList"], {
                        transactions: transactions,
                        limit: 4
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/HomeScreen.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(HomeScreen, "xkfsGW3uWAjWVWTdnJhfUEceMwg=");
_c = HomeScreen;
var _c;
__turbopack_context__.k.register(_c, "HomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/SettingsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsScreen",
    ()=>SettingsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$ReminderSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/ReminderSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SettingsScreen({ roundUpOn, threshold, roundUpMultiple, reminderFrequency, theme, onThresholdChange, onRoundUpMultipleChange, onReminderChange, onThemeChange, onEnableRequest, onEnd, onLogout }) {
    _s();
    const [panel, setPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [personalisedInsights, setPersonalisedInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [usageAnalytics, setUsageAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [historyCleared, setHistoryCleared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statementFrom, setStatementFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-09');
    const [statementTo, setStatementTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2026-09');
    const [statementType, setStatementType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Brief');
    const [statementRequested, setStatementRequested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thresholdInput, setThresholdInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(threshold));
    const settingsRootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const settingsScrollPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const panelWasOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsScreen.useEffect": ()=>setThresholdInput(threshold > 0 ? String(threshold) : '')
    }["SettingsScreen.useEffect"], [
        threshold
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsScreen.useEffect": ()=>{
            const scrollContainer = settingsRootRef.current?.parentElement;
            if (!scrollContainer) return;
            if (panel && !panelWasOpen.current) {
                settingsScrollPosition.current = scrollContainer.scrollTop;
                scrollContainer.scrollTop = 0;
            } else if (!panel && panelWasOpen.current) {
                scrollContainer.scrollTop = settingsScrollPosition.current;
            }
            panelWasOpen.current = panel !== null;
        }
    }["SettingsScreen.useEffect"], [
        panel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: settingsRootRef,
        className: "flex flex-col gap-4 pb-6 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$ReminderSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReminderSheet"], {
                open: panel === 'reminder',
                onClose: ()=>setPanel(null),
                frequency: reminderFrequency,
                onChange: onReminderChange
            }, void 0, false, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
                open: panel === 'theme',
                onClose: ()=>setPanel(null),
                title: "Themes",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: '#6B7280'
                        },
                        children: "Choose how GCoins and the GCB app appear."
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            'light',
                            'dark'
                        ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onThemeChange(option),
                                className: "rounded-xl p-3 text-left",
                                style: {
                                    background: option === 'light' ? '#F8F8F8' : '#171717',
                                    color: option === 'light' ? '#171717' : '#FFFFFF',
                                    border: theme === option ? '2px solid #F5C000' : '2px solid #E5E7EB'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-16 rounded-lg mb-2",
                                        style: {
                                            background: option === 'light' ? 'linear-gradient(#50616C 35%, #FFFFFF 35%)' : 'linear-gradient(#111111 35%, #2B2B2B 35%)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold capitalize",
                                                children: option
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            theme === option && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                                size: 13,
                                                color: "#F5C000"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 94,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option, true, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
                open: panel === 'privacy',
                onClose: ()=>setPanel(null),
                title: "Privacy & Data",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-4",
                        style: {
                            background: '#F9FAFB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                style: {
                                    color: '#1F2937'
                                },
                                children: "Your data, your control"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-1 leading-relaxed",
                                style: {
                                    color: '#6B7280'
                                },
                                children: "GCoins uses transaction amounts to calculate round-ups and savings insights. Your data is protected in line with Ghana's Data Protection Act, 2012 (Act 843)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    [
                        'Round-up transaction history',
                        'Savings goals and progress',
                        'Reminder preferences'
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs",
                            style: {
                                color: '#374151'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                    size: 12,
                                    color: "#059669"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                item
                            ]
                        }, item, true, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl overflow-hidden",
                        style: {
                            border: '1px solid #E5E7EB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3",
                                style: {
                                    borderBottom: '1px solid #F3F4F6'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: "Personalised savings insights"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: "Use activity to tailor GCoins guidance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                        on: personalisedInsights,
                                        onToggle: ()=>setPersonalisedInsights(!personalisedInsights)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: "Anonymous usage analytics"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: "Help improve the GCoins experience"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                        on: usageAnalytics,
                                        onToggle: ()=>setUsageAnalytics(!usageAnalytics)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setHistoryCleared(true),
                        className: "w-full py-3 rounded-xl text-sm font-semibold",
                        style: {
                            background: historyCleared ? '#D1FAE5' : '#F3F4F6',
                            color: historyCleared ? '#059669' : '#6B7280'
                        },
                        children: historyCleared ? 'Savings insight history cleared' : 'Clear Savings Insight History'
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPanel('consent'),
                        className: "w-full py-3 rounded-xl text-sm font-semibold",
                        style: {
                            background: '#FFF3CC',
                            color: '#C99A00'
                        },
                        children: "Manage Consent & Authorization"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
                open: panel === 'statement',
                onClose: ()=>{
                    setPanel(null);
                    setStatementRequested(false);
                },
                title: "Request GCoins Statement",
                children: statementRequested ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center py-6 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full flex items-center justify-center",
                            style: {
                                background: '#D1FAE5'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                size: 30,
                                color: "#059669"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            style: {
                                color: '#1F2937'
                            },
                            children: [
                                statementType,
                                " statement requested"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-center",
                            style: {
                                color: '#6B7280'
                            },
                            children: "Your GCoins statement will be sent to your registered email address."
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setPanel(null);
                                setStatementRequested(false);
                            },
                            className: "w-full py-3 rounded-xl text-sm font-semibold",
                            style: {
                                background: '#F5C000',
                                color: '#1F2937'
                            },
                            children: "Done"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            style: {
                                color: '#6B7280'
                            },
                            children: "Choose a date range and how much detail to include in your statement."
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full min-w-0 flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block w-full min-w-0 text-xs font-medium",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "From",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "month",
                                            value: statementFrom,
                                            onChange: (e)=>setStatementFrom(e.target.value),
                                            className: "block w-full max-w-full min-w-0 mt-1 rounded-xl px-3 py-2.5 text-sm outline-none",
                                            style: {
                                                background: '#F9FAFB',
                                                border: '1px solid #E5E7EB',
                                                color: '#1F2937'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block w-full min-w-0 text-xs font-medium",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "To",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "month",
                                            value: statementTo,
                                            onChange: (e)=>setStatementTo(e.target.value),
                                            className: "block w-full max-w-full min-w-0 mt-1 rounded-xl px-3 py-2.5 text-sm outline-none",
                                            style: {
                                                background: '#F9FAFB',
                                                border: '1px solid #E5E7EB',
                                                color: '#1F2937'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid w-full min-w-0 grid-cols-2 gap-2",
                            children: [
                                {
                                    type: 'Brief',
                                    description: 'Monthly totals and balances'
                                },
                                {
                                    type: 'Detailed',
                                    description: 'Every round-up and transaction'
                                }
                            ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setStatementType(option.type),
                                    className: "w-full min-w-0 rounded-xl p-3 text-left",
                                    style: {
                                        background: statementType === option.type ? '#FFF3CC' : '#F9FAFB',
                                        border: statementType === option.type ? '2px solid #F5C000' : '1px solid #E5E7EB'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: option.type
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-0.5",
                                            style: {
                                                color: '#6B7280'
                                            },
                                            children: option.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, option.type, true, {
                                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        statementFrom > statementTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            style: {
                                color: '#EF4444'
                            },
                            children: "The start date must be before the end date."
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 196,
                            columnNumber: 45
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>statementFrom <= statementTo && setStatementRequested(true),
                            className: "w-full min-w-0 py-3 px-3 rounded-xl text-sm font-semibold whitespace-normal",
                            style: {
                                background: statementFrom <= statementTo ? '#1F2937' : '#E5E7EB',
                                color: statementFrom <= statementTo ? '#F5C000' : '#9CA3AF'
                            },
                            children: [
                                "Request ",
                                statementType,
                                " Statement"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
                open: panel === 'consent',
                onClose: ()=>setPanel(null),
                title: "Consent & Authorization",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-4 flex gap-3",
                        style: {
                            background: roundUpOn ? '#D1FAE5' : '#FEF2F2'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconShield"], {
                                size: 18,
                                color: roundUpOn ? '#059669' : '#EF4444'
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: roundUpOn ? '#059669' : '#EF4444'
                                        },
                                        children: roundUpOn ? 'Round-up authorization active' : 'Authorization inactive'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-1",
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: roundUpOn ? 'You have authorized automatic spare-change debits into your GCoins Vault.' : 'Round-up debits are stopped. New authorization is required to restart.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs leading-relaxed",
                        style: {
                            color: '#6B7280'
                        },
                        children: "You can withdraw consent at any time. Ending GCoins resets your round-up settings and monthly round-up total."
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    roundUpOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onEnd();
                            setPanel(null);
                        },
                        className: "w-full py-3 rounded-xl text-sm font-semibold",
                        style: {
                            background: '#FEF2F2',
                            color: '#EF4444',
                            border: '1px solid #FECACA'
                        },
                        children: "Withdraw Consent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setPanel(null);
                            onEnableRequest();
                        },
                        className: "w-full py-3 rounded-xl text-sm font-semibold",
                        style: {
                            background: '#F5C000',
                            color: '#1F2937'
                        },
                        children: "Review & Authorize"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full flex items-center justify-center",
                        style: {
                            background: '#FFF3CC'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"], {
                            size: 28,
                            color: "#C99A00"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                style: {
                                    color: '#1F2937'
                                },
                                children: "Kwame Asante"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs",
                                style: {
                                    color: '#6B7280'
                                },
                                children: "GCB Account ••• 4521"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 rounded-2xl overflow-hidden",
                style: {
                    background: '#FFFFFF'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-4 pt-4 pb-2 text-xs font-semibold uppercase tracking-wider",
                        style: {
                            color: '#9CA3AF'
                        },
                        children: "Round-Up Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-4 flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "round-up-multiple",
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: "Round-up target"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                style: {
                                                    color: '#F5C000'
                                                },
                                                children: [
                                                    "GH₵ ",
                                                    roundUpMultiple
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-2",
                                        children: [
                                            1,
                                            5,
                                            10,
                                            20
                                        ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onRoundUpMultipleChange(value),
                                                className: "py-2 rounded-xl text-xs font-semibold",
                                                style: {
                                                    background: roundUpMultiple === value ? '#F5C000' : '#F9FAFB',
                                                    color: roundUpMultiple === value ? '#1F2937' : '#6B7280',
                                                    border: roundUpMultiple === value ? '1px solid #F5C000' : '1px solid #E5E7EB'
                                                },
                                                children: [
                                                    "GH₵ ",
                                                    value
                                                ]
                                            }, value, true, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 mt-2 rounded-xl px-3 py-2",
                                        style: {
                                            background: '#F9FAFB',
                                            border: '1px solid #E5E7EB'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs flex-1",
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: "Custom whole-cedi target"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold",
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: "GH₵"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "round-up-multiple",
                                                type: "number",
                                                inputMode: "numeric",
                                                min: 1,
                                                step: 1,
                                                value: roundUpMultiple,
                                                onChange: (event)=>onRoundUpMultipleChange(Math.max(1, Math.floor(Number(event.target.value) || 1))),
                                                className: "w-14 bg-transparent text-right text-sm font-bold outline-none",
                                                style: {
                                                    color: '#1F2937'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-2 leading-relaxed",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: "After each eligible transaction, your GCB main balance is rounded down to the nearest selected amount. The difference moves to your GCoins Vault."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "balance-safeguard",
                                        className: "text-sm font-medium",
                                        style: {
                                            color: '#1F2937'
                                        },
                                        children: [
                                            "Balance safeguard ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-normal text-xs",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: "(optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 307,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-1 leading-relaxed",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: "Round-ups pause whenever your balance would fall below this amount."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-2 rounded-xl px-3",
                                        style: {
                                            background: '#F9FAFB',
                                            border: '1px solid #E5E7EB'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs whitespace-nowrap",
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: "Keep at least GHS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "balance-safeguard",
                                                type: "number",
                                                inputMode: "decimal",
                                                min: 0,
                                                step: "0.01",
                                                value: thresholdInput,
                                                onChange: (event)=>{
                                                    const value = event.target.value;
                                                    setThresholdInput(value);
                                                    if (value === '') onThresholdChange(0);
                                                    else {
                                                        const amount = Number(value);
                                                        if (Number.isFinite(amount) && amount >= 0) onThresholdChange(amount);
                                                    }
                                                },
                                                placeholder: "0.00",
                                                className: "w-full min-w-0 py-3 bg-transparent text-sm font-semibold outline-none text-center",
                                                style: {
                                                    color: '#1F2937'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs whitespace-nowrap",
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: "in my account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 rounded-2xl overflow-hidden",
                style: {
                    background: '#FFFFFF'
                },
                children: [
                    [
                        {
                            label: 'GCoins Reminder',
                            value: reminderFrequency === 'Off' ? 'Off' : reminderFrequency,
                            action: ()=>setPanel('reminder')
                        },
                        {
                            label: 'Themes',
                            value: theme === 'dark' ? 'Dark' : 'Light',
                            action: ()=>setPanel('theme')
                        },
                        {
                            label: 'Privacy & Data',
                            value: 'Ghana DPA compliant',
                            action: ()=>setPanel('privacy')
                        },
                        {
                            label: 'GCoins Statements',
                            value: 'Request',
                            action: ()=>setPanel('statement')
                        }
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: item.action,
                            className: "w-full flex items-center justify-between px-4 py-3.5 text-left",
                            style: {
                                border: 'none',
                                borderBottom: '1px solid #F3F4F6',
                                background: '#FFFFFF'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium flex items-center gap-1",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        item.value,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                            size: 14,
                                            color: "#D1D5DB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                            lineNumber: 344,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onEnd,
                        className: "w-full flex items-center justify-between px-4 py-3.5",
                        style: {
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                style: {
                                    color: '#EF4444'
                                },
                                children: "End GCoins"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPower"], {
                                size: 14,
                                color: "#EF4444"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "w-full flex items-center justify-between px-4 py-3.5",
                        style: {
                            background: '#FEF2F2',
                            border: 'none',
                            borderTop: '1px solid #FECACA'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                style: {
                                    color: '#EF4444'
                                },
                                children: "Log Out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                size: 14,
                                color: "#EF4444"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SettingsScreen.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/SettingsScreen.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(SettingsScreen, "4jauufuEDrlJ71S7L7r2hbwStJ8=");
_c = SettingsScreen;
var _c;
__turbopack_context__.k.register(_c, "SettingsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/TransactionHistoryList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionHistoryList",
    ()=>TransactionHistoryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
'use client';
;
;
function TransactionHistoryList({ transactions, limit, dark = false }) {
    const visibleTransactions = typeof limit === 'number' ? transactions.slice(0, limit) : transactions;
    const surface = dark ? '#2B2B2B' : '#FFFFFF';
    const text = dark ? '#FFFFFF' : '#1F2937';
    const muted = dark ? '#A3A3A3' : '#9CA3AF';
    const divider = dark ? '#3A3A3A' : '#F3F4F6';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl overflow-hidden",
        style: {
            background: surface
        },
        children: visibleTransactions.length > 0 ? visibleTransactions.map((transaction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-3",
                style: {
                    borderBottom: index < visibleTransactions.length - 1 ? `1px solid ${divider}` : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        style: {
                            background: dark ? '#3A3A3A' : '#F3F4F6'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TxIcon"], {
                            category: transaction.category
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium truncate",
                                style: {
                                    color: text
                                },
                                children: transaction.merchant
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs",
                                style: {
                                    color: muted
                                },
                                children: [
                                    transaction.category,
                                    " · ",
                                    transaction.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                style: {
                                    color: transaction.amount > 0 ? '#10B981' : text
                                },
                                children: [
                                    transaction.amount > 0 ? '+' : '',
                                    "GHS ",
                                    Math.abs(transaction.amount).toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            transaction.roundUp > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium",
                                style: {
                                    color: '#F5C000'
                                },
                                children: [
                                    "+GHS ",
                                    transaction.roundUp.toFixed(2),
                                    " saved"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, this),
                            transaction.status === 'reversed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium",
                                style: {
                                    color: '#EF4444'
                                },
                                children: "Reversed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                ]
            }, transaction.id, true, {
                fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                style: {
                    color: muted
                },
                children: "No transactions yet."
            }, void 0, false, {
                fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
                lineNumber: 66,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
            lineNumber: 65,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/screens/TransactionHistoryList.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = TransactionHistoryList;
var _c;
__turbopack_context__.k.register(_c, "TransactionHistoryList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/TransactionsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionsScreen",
    ()=>TransactionsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/TransactionHistoryList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function TransactionsScreen({ records, transactions }) {
    _s();
    const latestLabel = records[records.length - 1]?.label ?? 'September 2026';
    const [selectedMonth, setSelectedMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(latestLabel.split(' ')[0]);
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(latestLabel.split(' ')[1]);
    const selectedRecord = records.find((record)=>record.label === `${selectedMonth} ${selectedYear}`);
    const recordYears = Array.from(new Set(records.map((record)=>record.label.split(' ')[1])));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 pb-6 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 rounded-2xl p-4",
                style: {
                    background: '#FFFFFF'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold mb-2",
                        style: {
                            color: '#374151'
                        },
                        children: "Choose record month"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedMonth,
                                onChange: (e)=>setSelectedMonth(e.target.value),
                                className: "flex-1 rounded-xl px-3 py-2.5 text-sm outline-none",
                                style: {
                                    background: '#F9FAFB',
                                    border: '1px solid #E5E7EB',
                                    color: '#1F2937'
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FULL_MONTHS"].map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: month,
                                        children: month
                                    }, month, false, {
                                        fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedYear,
                                onChange: (e)=>setSelectedYear(e.target.value),
                                className: "w-28 rounded-xl px-3 py-2.5 text-sm outline-none",
                                style: {
                                    background: '#F9FAFB',
                                    border: '1px solid #E5E7EB',
                                    color: '#1F2937'
                                },
                                children: recordYears.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: year,
                                        children: year
                                    }, year, false, {
                                        fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 rounded-2xl p-4",
                style: {
                    background: '#FFF3CC'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium",
                                    style: {
                                        color: '#C99A00'
                                    },
                                    children: [
                                        "Total Round-Ups · ",
                                        selectedMonth,
                                        " ",
                                        selectedYear
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold mt-0.5",
                                    style: {
                                        fontFamily: 'var(--font-display, "DM Serif Display", serif)',
                                        color: '#1F2937'
                                    },
                                    children: [
                                        "GH₵ ",
                                        (selectedRecord?.amount ?? 0).toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-1",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: selectedRecord ? selectedRecord.active ? 'Current savings cycle' : 'Closed cycle · kept for your records' : 'No round-up record for this month'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                            size: 32,
                            color: "#C99A00"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-sm mb-3",
                        style: {
                            color: '#374151'
                        },
                        children: "All Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionHistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionHistoryList"], {
                        transactions: transactions
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/TransactionsScreen.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(TransactionsScreen, "eTbIrubyohY8djKkIxt/90VGNss=");
_c = TransactionsScreen;
var _c;
__turbopack_context__.k.register(_c, "TransactionsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_components_screens_1yool-cwu6_x_._.js.map
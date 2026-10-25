(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sheets/AddMoneySheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddMoneySheet",
    ()=>AddMoneySheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
function AddMoneySheet({ open, onClose, onAdd, pinCode }) {
    _s();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('amount');
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const quickAmounts = [
        '50',
        '100',
        '200',
        '500'
    ];
    function handleConfirm() {
        if (!amount || pin.length !== 4) return;
        onAdd(Number(amount));
        setDone(true);
        setStep('done');
        setTimeout(()=>{
            setDone(false);
            setStep('amount');
            setPin('');
            setAmount('');
            onClose();
        }, 1500);
    }
    function handleClose() {
        setDone(false);
        setStep('amount');
        setPin('');
        setAmount('');
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: handleClose,
        title: step === 'pin' ? 'Authorise Add Money' : 'Add Money to Vault',
        children: step === 'done' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center py-6 gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-14 h-14 rounded-full flex items-center justify-center",
                    style: {
                        background: '#D1FAE5'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                        size: 28,
                        color: "#059669"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold",
                    style: {
                        color: '#059669'
                    },
                    children: [
                        "GHS ",
                        Number(amount).toFixed(2),
                        " added!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
            lineNumber: 50,
            columnNumber: 9
        }, this) : step === 'pin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PinEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinEntry"], {
            amount: Number(amount),
            actionLabel: "Add money",
            pin: pin,
            expectedPin: pinCode,
            onPinChange: setPin,
            onBack: ()=>setStep('amount'),
            onAuthorise: handleConfirm,
            processing: done
        }, void 0, false, {
            fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs",
                    style: {
                        color: '#6B7280'
                    },
                    children: "Amount (GHS)"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    placeholder: "0.00",
                    value: amount,
                    onChange: (e)=>setAmount(e.target.value),
                    className: "w-full rounded-xl px-4 py-3 text-2xl font-bold outline-none text-center",
                    style: {
                        background: '#F9FAFB',
                        border: '2px solid #F5C000',
                        color: '#1F2937',
                        fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: quickAmounts.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setAmount(q),
                            className: "flex-1 py-2 rounded-xl text-xs font-semibold",
                            style: {
                                background: amount === q ? '#F5C000' : '#F9FAFB',
                                color: amount === q ? '#1F2937' : '#6B7280',
                                border: amount === q ? '1px solid #F5C000' : '1px solid #E5E7EB'
                            },
                            children: q
                        }, q, false, {
                            fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs",
                    style: {
                        color: '#9CA3AF'
                    },
                    children: "Funds will be moved from your GCB main account into your GCoins Vault."
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>amount && setStep('pin'),
                    className: "w-full py-3 rounded-xl font-semibold text-sm",
                    style: {
                        background: amount ? '#F5C000' : '#E5E7EB',
                        color: amount ? '#1F2937' : '#9CA3AF'
                    },
                    children: "Continue to PIN"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
            lineNumber: 70,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sheets/AddMoneySheet.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AddMoneySheet, "RUJpZ3rx27NOixiXL9vsqmTFfZg=");
_c = AddMoneySheet;
var _c;
__turbopack_context__.k.register(_c, "AddMoneySheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/BorrowSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BorrowSheet",
    ()=>BorrowSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PinEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PinEntry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function BorrowSheet({ open, onClose, onBorrow, pinCode }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('intro');
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(200);
    const [repaymentPace, setRepaymentPace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('standard');
    const [confirming, setConfirming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const interest = +(loanAmount * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONTHLY_RATE"]).toFixed(2);
    const totalOwed = +(loanAmount + interest).toFixed(2);
    const selectedPace = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPAYMENT_PACES"].find((pace)=>pace.id === repaymentPace) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPAYMENT_PACES"][1];
    const topUp = +(selectedPace.baseTopUp * (totalOwed / 205)).toFixed(2);
    const streakDays = 14;
    const qualified = streakDays >= 7 && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUND_UP_MONTHLY"] >= 10;
    function startCheck() {
        setStep('check');
        setTimeout(()=>setStep(qualified ? 'qualified' : 'unqualified'), 2200);
    }
    function handleConfirm() {
        if (pin.length !== 4) return;
        setConfirming(true);
        setTimeout(()=>{
            onBorrow(loanAmount, {
                pace: repaymentPace,
                topUp
            });
            setConfirming(false);
            setStep('confirmed');
        }, 1400);
    }
    function handleClose() {
        setStep('intro');
        setLoanAmount(200);
        setRepaymentPace('standard');
        setPin('');
        setConfirming(false);
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: handleClose,
        title: step === 'plan' ? 'Choose your repayment pace' : 'GCoins Advance',
        children: [
            step === 'intro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-4 flex gap-3 items-start",
                        style: {
                            background: '#FFF3CC'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"], {
                                size: 20,
                                color: "#C99A00"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: '#1F2937'
                                        },
                                        children: "Get funds in advance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-0.5",
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Borrow against your savings activity and repay through future round-ups. Interest at GCB's standard rate of 2.5%/month."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    [
                        'No new account or paperwork required',
                        'Repayment deducted via round-ups automatically',
                        'Governed by Bank of Ghana lending guidelines'
                    ].map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-start text-xs",
                            style: {
                                color: '#6B7280'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                    size: 12,
                                    color: "#F5C000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: pt
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, pt, true, {
                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: startCheck,
                        className: "w-full py-3 rounded-xl font-semibold text-sm",
                        style: {
                            background: '#F5C000',
                            color: '#1F2937'
                        },
                        children: "Check My Eligibility"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            step === 'check' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center py-8 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLoader"], {
                        size: 36,
                        color: "#F5C000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-sm",
                                style: {
                                    color: '#1F2937'
                                },
                                children: "Checking your profile…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-1",
                                style: {
                                    color: '#9CA3AF'
                                },
                                children: "Reviewing round-up history and account standing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full rounded-full overflow-hidden h-1.5",
                        style: {
                            background: '#F3F4F6'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full",
                            style: {
                                background: '#F5C000',
                                animation: 'progress 2.2s linear forwards'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            step === 'unqualified' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center py-4 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-full flex items-center justify-center",
                                style: {
                                    background: '#FEF2F2'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPower"], {
                                    size: 24,
                                    color: "#EF4444"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-sm",
                                style: {
                                    color: '#1F2937'
                                },
                                children: "Not yet eligible"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-4 flex flex-col gap-2",
                        style: {
                            background: '#F9FAFB',
                            border: '1px solid #E5E7EB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold",
                                style: {
                                    color: '#374151'
                                },
                                children: "Requirements to qualify:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            [
                                {
                                    label: 'Active round-ups for 7+ days',
                                    met: streakDays >= 7
                                },
                                {
                                    label: 'Monthly round-ups of at least GHS 10',
                                    met: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUND_UP_MONTHLY"] >= 10
                                },
                                {
                                    label: 'Account in good standing',
                                    met: true
                                }
                            ].map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0",
                                            style: {
                                                background: req.met ? '#D1FAE5' : '#FEE2E2'
                                            },
                                            children: req.met ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                                size: 9,
                                                color: "#059669"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                lineNumber: 125,
                                                columnNumber: 30
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPower"], {
                                                size: 9,
                                                color: "#EF4444"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                lineNumber: 125,
                                                columnNumber: 71
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: req.met ? '#374151' : '#9CA3AF'
                                            },
                                            children: req.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, req.label, true, {
                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "w-full py-3 rounded-xl font-semibold text-sm",
                        style: {
                            background: '#F3F4F6',
                            color: '#6B7280'
                        },
                        children: "Got it"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            step === 'qualified' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full flex items-center justify-center",
                                style: {
                                    background: '#D1FAE5'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                    size: 14,
                                    color: "#059669"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: '#059669'
                                        },
                                        children: "You're eligible"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs",
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Select how much to borrow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            100,
                            200,
                            500,
                            1000
                        ].map((amt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLoanAmount(amt),
                                className: "py-3 rounded-xl text-sm font-semibold",
                                style: {
                                    background: loanAmount === amt ? '#1F2937' : '#F9FAFB',
                                    color: loanAmount === amt ? '#F5C000' : '#374151',
                                    border: loanAmount === amt ? '1.5px solid #1F2937' : '1px solid #E5E7EB'
                                },
                                children: [
                                    "GHS ",
                                    amt
                                ]
                            }, amt, true, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3 flex flex-col gap-1.5 text-xs",
                        style: {
                            background: '#FFF3CC'
                        },
                        children: [
                            [
                                'Loan amount',
                                `GHS ${loanAmount.toFixed(2)}`
                            ],
                            [
                                'Interest (2.5%/month)',
                                `GHS ${interest.toFixed(2)}`
                            ],
                            [
                                'Total to repay',
                                `GHS ${totalOwed.toFixed(2)}`
                            ]
                        ].map(([l, v], i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                style: {
                                    fontWeight: i === arr.length - 1 ? 700 : 400,
                                    borderTop: i === arr.length - 1 ? '1px solid rgba(245,192,0,0.4)' : 'none',
                                    paddingTop: i === arr.length - 1 ? 6 : 0,
                                    marginTop: i === arr.length - 1 ? 2 : 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: l
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#C99A00'
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l, true, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStep('plan'),
                        className: "w-full py-3 rounded-xl font-semibold text-sm",
                        style: {
                            background: '#F5C000',
                            color: '#1F2937'
                        },
                        children: "See Repayment Plan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this),
            step === 'plan' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs leading-relaxed",
                        style: {
                            color: '#6B7280'
                        },
                        children: [
                            "Choose how quickly you want to repay GHS ",
                            totalOwed.toFixed(2),
                            " through automatic round-up top-ups."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2.5",
                        role: "radiogroup",
                        "aria-label": "Repayment pace",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPAYMENT_PACES"].map((pace)=>{
                            const selected = repaymentPace === pace.id;
                            const paceTopUp = +(pace.baseTopUp * (totalOwed / 205)).toFixed(2);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "radio",
                                "aria-checked": selected,
                                onClick: ()=>setRepaymentPace(pace.id),
                                className: "w-full rounded-xl p-3.5 text-left transition-colors",
                                style: {
                                    background: selected ? '#FFF3CC' : '#FFFFFF',
                                    border: selected ? '2px solid #F5C000' : '1px solid #E5E7EB'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                                            style: {
                                                border: selected ? '2px solid #F5C000' : '1.5px solid #9CA3AF',
                                                background: selected ? '#F5C000' : 'transparent'
                                            },
                                            children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                                size: 11,
                                                color: "#1F2937"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                lineNumber: 218,
                                                columnNumber: 36
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                            lineNumber: 214,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-between gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold",
                                                            style: {
                                                                color: '#1F2937'
                                                            },
                                                            children: pace.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 25
                                                        }, this),
                                                        pace.recommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-full text-[10px] font-semibold",
                                                            style: {
                                                                background: '#F5C000',
                                                                color: '#1F2937'
                                                            },
                                                            children: "Recommended"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xs mt-0.5",
                                                    style: {
                                                        color: '#6B7280'
                                                    },
                                                    children: pace.period
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-end justify-between gap-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px]",
                                                            style: {
                                                                color: '#9CA3AF'
                                                            },
                                                            children: pace.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold whitespace-nowrap",
                                                            style: {
                                                                color: '#C99A00'
                                                            },
                                                            children: [
                                                                "GHS ",
                                                                paceTopUp.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                            lineNumber: 220,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                    lineNumber: 213,
                                    columnNumber: 19
                                }, this)
                            }, pace.id, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 201,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl px-3.5 py-3 flex items-center justify-between",
                        style: {
                            background: '#F9FAFB',
                            border: '1px solid #E5E7EB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px]",
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Your selected top-up"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold mt-0.5",
                                        style: {
                                            color: '#1F2937'
                                        },
                                        children: [
                                            selectedPace.label,
                                            " · ",
                                            selectedPace.period
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold",
                                style: {
                                    color: '#C99A00'
                                },
                                children: [
                                    "+GHS ",
                                    topUp.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] leading-relaxed",
                        style: {
                            color: '#6B7280'
                        },
                        children: [
                            "GHS ",
                            topUp.toFixed(2),
                            " will be deducted alongside every eligible round-up and applied directly to reduce your outstanding GCoins Advance balance."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep('qualified'),
                                className: "flex-1 py-2.5 rounded-xl text-xs font-semibold",
                                style: {
                                    background: '#F9FAFB',
                                    color: '#6B7280',
                                    border: '1px solid #E5E7EB'
                                },
                                children: "Change Amount"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep('pin'),
                                className: "flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5",
                                style: {
                                    background: '#1F2937',
                                    color: '#F5C000'
                                },
                                children: [
                                    "Continue with ",
                                    selectedPace.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this),
            step === 'pin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PinEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinEntry"], {
                amount: loanAmount,
                actionLabel: "GCoins Advance",
                pin: pin,
                expectedPin: pinCode,
                onPinChange: setPin,
                onBack: ()=>setStep('plan'),
                onAuthorise: handleConfirm,
                processing: confirming
            }, void 0, false, {
                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this),
            step === 'confirmed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-base",
                        style: {
                            color: '#1F2937',
                            fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                        },
                        children: [
                            "GHS ",
                            loanAmount.toFixed(2),
                            " disbursed!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-center",
                        style: {
                            color: '#6B7280'
                        },
                        children: [
                            "Funds are in your GCB main account. Your ",
                            selectedPace.label.toLowerCase(),
                            " rule will apply GHS ",
                            topUp.toFixed(2),
                            " from each eligible round-up directly to the GHS ",
                            totalOwed.toFixed(2),
                            " balance."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "w-full py-3 rounded-xl font-semibold text-sm mt-2",
                        style: {
                            background: '#F5C000',
                            color: '#1F2937'
                        },
                        children: "Done"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sheets/BorrowSheet.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(BorrowSheet, "DxbNCXk+CK80JNQ4fDIpN82t1iY=");
_c = BorrowSheet;
var _c;
__turbopack_context__.k.register(_c, "BorrowSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/NotificationsSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationsSheet",
    ()=>NotificationsSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function NotificationsSheet({ open, onClose, notifications, onChange }) {
    const unread = notifications.filter((n)=>!n.read).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: onClose,
        title: "Notifications",
        children: notifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            style: {
                                color: '#6B7280'
                            },
                            children: [
                                unread,
                                " unread"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onChange(notifications.map((n)=>({
                                                ...n,
                                                read: true
                                            }))),
                                    className: "text-xs font-semibold px-3 py-1.5 rounded-full",
                                    style: {
                                        background: '#FFF3CC',
                                        color: '#C99A00'
                                    },
                                    children: "Mark all read"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                    lineNumber: 28,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onChange([]),
                                    className: "text-xs font-semibold px-3 py-1.5 rounded-full",
                                    style: {
                                        background: '#F3F4F6',
                                        color: '#6B7280'
                                    },
                                    children: "Clear all"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-0 rounded-2xl overflow-y-auto",
                    style: {
                        border: '1px solid #F3F4F6',
                        maxHeight: 520
                    },
                    children: notifications.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onChange(notifications.map((item)=>item.id === n.id ? {
                                        ...item,
                                        read: true
                                    } : item)),
                            className: "flex gap-3 px-4 py-3 text-left w-full",
                            style: {
                                border: 'none',
                                borderBottom: i < notifications.length - 1 ? '1px solid #F3F4F6' : 'none',
                                background: n.read ? '#FFFFFF' : '#FFFCF0'
                            },
                            children: [
                                n.title === 'GCoins Reminder' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                    style: {
                                        background: '#FFF3CC'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBot"], {
                                        size: 15,
                                        color: "#C99A00"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                        lineNumber: 59,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                    lineNumber: 58,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full flex-shrink-0 mt-1.5",
                                    style: {
                                        background: n.read ? '#D1D5DB' : n.dot
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                    lineNumber: 62,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: n.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-0.5",
                                            style: {
                                                color: '#6B7280'
                                            },
                                            children: n.body
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-1",
                                            style: {
                                                color: '#9CA3AF'
                                            },
                                            children: [
                                                n.time,
                                                !n.read && ' · Tap to mark read'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, n.id, true, {
                            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center py-8 gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full flex items-center justify-center",
                    style: {
                        background: '#F3F4F6'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBell"], {
                        size: 20,
                        color: "#9CA3AF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold",
                    style: {
                        color: '#374151'
                    },
                    children: "You're all caught up"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs",
                    style: {
                        color: '#9CA3AF'
                    },
                    children: "New GCoins updates will appear here."
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
            lineNumber: 74,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sheets/NotificationsSheet.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = NotificationsSheet;
var _c;
__turbopack_context__.k.register(_c, "NotificationsSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/ProfileSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileSheet",
    ()=>ProfileSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProfileSheet({ open, onClose, onNavigateSettings, pinCode, onPinChange, onLogout }) {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('menu');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Kwame Asante');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('kwame.asante@example.com');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('+233 24 555 0123');
    const [biometrics, setBiometrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [accountLinked, setAccountLinked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentPin, setCurrentPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPin, setNewPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmPin, setConfirmPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pinMessage, setPinMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function close() {
        setView('menu');
        setCurrentPin('');
        setNewPin('');
        setConfirmPin('');
        setPinMessage('');
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: close,
        opaqueBackdrop: true,
        fullHeight: true,
        title: view === 'menu' ? 'My Profile' : view === 'edit' ? 'Edit Profile' : view === 'security' ? 'Security' : view === 'changePin' ? 'Change GCoins PIN' : 'Linked Accounts',
        children: view === 'menu' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 pb-2",
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
                                fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold",
                                    style: {
                                        color: '#1F2937',
                                        fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                                    },
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: "GCB Account ••• 4521"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs mt-0.5",
                                    style: {
                                        color: '#9CA3AF'
                                    },
                                    children: "Member since Jan 2023"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl overflow-hidden",
                    style: {
                        border: '1px solid #F3F4F6'
                    },
                    children: [
                        {
                            label: 'Linked Accounts',
                            sub: accountLinked ? 'GCB Account ••• 4521' : 'No linked account',
                            action: ()=>setView('accounts')
                        },
                        {
                            label: 'Settings',
                            sub: 'Round-ups, preferences',
                            action: ()=>{
                                close();
                                onNavigateSettings();
                            }
                        }
                    ].map((item, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: item.action,
                            className: "w-full flex items-center justify-between px-4 py-3 text-left",
                            style: {
                                border: 'none',
                                borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none',
                                background: '#FFFFFF',
                                cursor: 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            style: {
                                                color: '#1F2937'
                                            },
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs",
                                            style: {
                                                color: '#9CA3AF'
                                            },
                                            children: item.sub
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                    size: 16,
                                    color: "#D1D5DB"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        close();
                        onLogout();
                    },
                    className: "w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2",
                    style: {
                        background: '#FEF2F2',
                        color: '#EF4444',
                        border: '1px solid #FECACA'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPower"], {
                            size: 14,
                            color: "#EF4444"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        " Log Out"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
            lineNumber: 62,
            columnNumber: 9
        }, this) : view === 'edit' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                [
                    [
                        'Full name',
                        name,
                        setName
                    ],
                    [
                        'Email',
                        email,
                        setEmail
                    ],
                    [
                        'Phone',
                        phone,
                        setPhone
                    ]
                ].map(([label, value, setter])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-medium",
                        style: {
                            color: '#6B7280'
                        },
                        children: [
                            label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: value,
                                onChange: (e)=>setter(e.target.value),
                                className: "w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none",
                                style: {
                                    background: '#F9FAFB',
                                    border: '1px solid #E5E7EB',
                                    color: '#1F2937'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setView('menu'),
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: '#F5C000',
                        color: '#1F2937'
                    },
                    children: "Save Changes"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
            lineNumber: 122,
            columnNumber: 9
        }, this) : view === 'security' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center justify-between rounded-xl p-4 text-left",
                    style: {
                        background: '#F9FAFB'
                    },
                    onClick: ()=>setView('changePin'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: "Change GCoins PIN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#9CA3AF'
                                    },
                                    children: "Last changed 3 months ago"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                            color: "#9CA3AF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between rounded-xl p-4",
                    style: {
                        background: '#F9FAFB'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: "Biometric login"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#9CA3AF'
                                    },
                                    children: "Use fingerprint or face ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                            on: biometrics,
                            onToggle: ()=>setBiometrics(!biometrics)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setView('menu'),
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: '#F5C000',
                        color: '#1F2937'
                    },
                    children: "Done"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
            lineNumber: 143,
            columnNumber: 9
        }, this) : view === 'changePin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs rounded-xl p-3",
                    style: {
                        background: '#FFF3CC',
                        color: '#6B7280'
                    },
                    children: "For this prototype, your starting GCoins PIN is 1234. Future transactions will use the new PIN after you update it."
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this),
                [
                    {
                        label: 'Current PIN',
                        value: currentPin,
                        setter: setCurrentPin
                    },
                    {
                        label: 'New 4-digit PIN',
                        value: newPin,
                        setter: setNewPin
                    },
                    {
                        label: 'Confirm new PIN',
                        value: confirmPin,
                        setter: setConfirmPin
                    }
                ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-medium",
                        style: {
                            color: '#6B7280'
                        },
                        children: [
                            field.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                inputMode: "numeric",
                                maxLength: 4,
                                value: field.value,
                                onChange: (e)=>{
                                    setPinMessage('');
                                    field.setter(e.target.value.replace(/\D/g, '').slice(0, 4));
                                },
                                className: "w-full mt-1 rounded-xl px-3 py-2.5 text-lg text-center tracking-[0.4em] outline-none",
                                style: {
                                    background: '#F9FAFB',
                                    border: '1px solid #E5E7EB',
                                    color: '#1F2937'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        ]
                    }, field.label, true, {
                        fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                        lineNumber: 172,
                        columnNumber: 13
                    }, this)),
                pinMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: pinMessage === 'PIN changed successfully.' ? '#059669' : '#EF4444'
                    },
                    children: pinMessage
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 189,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        if (currentPin !== pinCode) return setPinMessage('Current PIN is incorrect.');
                        if (newPin.length !== 4) return setPinMessage('New PIN must contain 4 digits.');
                        if (newPin !== confirmPin) return setPinMessage('New PINs do not match.');
                        onPinChange(newPin);
                        setCurrentPin('');
                        setNewPin('');
                        setConfirmPin('');
                        setPinMessage('PIN changed successfully.');
                    },
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: '#1F2937',
                        color: '#F5C000'
                    },
                    children: "Update PIN"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setView('security'),
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: '#F3F4F6',
                        color: '#6B7280'
                    },
                    children: "Back to Security"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
            lineNumber: 163,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-4 flex items-center justify-between",
                    style: {
                        background: '#F9FAFB',
                        border: '1px solid #E5E7EB'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: "GCB Current Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#9CA3AF'
                                    },
                                    children: "•••• 4521 · Primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold",
                            style: {
                                color: accountLinked ? '#059669' : '#EF4444'
                            },
                            children: accountLinked ? 'Linked' : 'Unlinked'
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setAccountLinked(!accountLinked),
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: accountLinked ? '#FEF2F2' : '#F5C000',
                        color: accountLinked ? '#EF4444' : '#1F2937'
                    },
                    children: accountLinked ? 'Unlink Account' : 'Link Account'
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setView('menu'),
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: '#F3F4F6',
                        color: '#6B7280'
                    },
                    children: "Back to Profile"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
                    lineNumber: 231,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
            lineNumber: 214,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sheets/ProfileSheet.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ProfileSheet, "vJgQsZRVt8MZ52r3iCrdY5jOFpk=");
_c = ProfileSheet;
var _c;
__turbopack_context__.k.register(_c, "ProfileSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/ReminderSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReminderSheet",
    ()=>ReminderSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function ReminderSheet({ open, onClose, frequency, onChange }) {
    const options = [
        {
            label: 'Daily',
            description: 'A short savings nudge every day'
        },
        {
            label: 'Weekly',
            description: 'A weekly summary and next-step suggestion'
        },
        {
            label: 'Goal milestones',
            description: 'Only when a goal reaches a new milestone'
        },
        {
            label: 'Off',
            description: 'Pause all GCoins reminder nudges'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: onClose,
        title: "GCoins Reminder",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs",
                style: {
                    color: '#6B7280'
                },
                children: "Choose how often GCoins should help you stay on track."
            }, void 0, false, {
                fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl overflow-hidden",
                style: {
                    border: '1px solid #F3F4F6'
                },
                children: options.map((option, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onChange(option.label),
                        className: "w-full flex items-center justify-between px-4 py-3 text-left",
                        style: {
                            border: 'none',
                            borderBottom: i < options.length - 1 ? '1px solid #F3F4F6' : 'none',
                            background: frequency === option.label ? '#FFFCF0' : '#FFFFFF'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium",
                                        style: {
                                            color: '#1F2937'
                                        },
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: option.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 rounded-full flex items-center justify-center",
                                style: {
                                    border: frequency === option.label ? '2px solid #F5C000' : '2px solid #D1D5DB',
                                    background: frequency === option.label ? '#F5C000' : '#FFFFFF'
                                },
                                children: frequency === option.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                                    size: 11,
                                    color: "#1F2937"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                                    lineNumber: 54,
                                    columnNumber: 46
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, option.label, true, {
                        fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "w-full py-3 rounded-xl text-sm font-semibold",
                style: {
                    background: '#1F2937',
                    color: '#F5C000'
                },
                children: "Save Preference"
            }, void 0, false, {
                fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sheets/ReminderSheet.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = ReminderSheet;
var _c;
__turbopack_context__.k.register(_c, "ReminderSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/RepayAdvanceSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RepayAdvanceSheet",
    ()=>RepayAdvanceSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
function RepayAdvanceSheet({ open, mode, onClose, onReturnHome, onAddMoney, outstanding, mainBalance, balanceSafeguard, advanceTopUp, pinCode, onRepay }) {
    _s();
    const initialStep = mode === 'payoff' ? 'details' : 'amount';
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStep);
    const [flowMode, setFlowMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mode);
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPayment, setSelectedPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mode === 'payoff' ? outstanding : 0);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        paid: 0,
        remaining: outstanding,
        mainBalance
    });
    const outstandingPesewas = Math.round(outstanding * 100);
    const enteredPesewas = Math.max(0, Math.round((Number(amount) || 0) * 100));
    const selectedPesewas = Math.min(enteredPesewas, outstandingPesewas);
    const payment = selectedPesewas / 100;
    const payoffAmount = outstandingPesewas / 100;
    const currentPayment = flowMode === 'payoff' ? payoffAmount : selectedPayment;
    const insufficient = Math.round(mainBalance * 100) < Math.round(currentPayment * 100);
    const amountInvalid = enteredPesewas <= 0 || selectedPesewas > Math.round(mainBalance * 100);
    const projectedBalance = +(mainBalance - payment).toFixed(2);
    const leavesBelowSafeguard = payment > 0 && projectedBalance < balanceSafeguard;
    function estimatedPayoffDate(remaining) {
        if (remaining <= 0) return 'Today';
        const repaymentEvents = Math.ceil(remaining / Math.max(advanceTopUp, 0.01));
        const date = new Date();
        date.setDate(date.getDate() + repaymentEvents * 3);
        return date.toLocaleDateString('en-GH', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }
    function resetAndClose(returningHome = false) {
        setAmount('');
        setPin('');
        setProcessing(false);
        setFlowMode(mode);
        setSelectedPayment(mode === 'payoff' ? outstanding : 0);
        setStep(initialStep);
        if (returningHome) onReturnHome();
        else onClose();
    }
    function continueExtra() {
        if (amountInvalid) return;
        if (selectedPesewas >= outstandingPesewas) {
            setFlowMode('payoff');
            setSelectedPayment(payoffAmount);
            setStep('details');
            return;
        }
        setFlowMode('extra');
        setSelectedPayment(payment);
        setPin('');
        setStep('pin');
    }
    function continuePayoff() {
        if (insufficient) return;
        setSelectedPayment(payoffAmount);
        setPin('');
        setStep('pin');
    }
    function repay() {
        if (currentPayment <= 0 || insufficient || pin.length !== 4) return;
        const fullPayoff = flowMode === 'payoff' || Math.round(currentPayment * 100) >= outstandingPesewas;
        const remaining = fullPayoff ? 0 : Math.max(0, +(outstanding - currentPayment).toFixed(2));
        const nextMainBalance = +(mainBalance - currentPayment).toFixed(2);
        setProcessing(true);
        setTimeout(()=>{
            onRepay(currentPayment, fullPayoff);
            setResult({
                paid: currentPayment,
                remaining,
                mainBalance: nextMainBalance
            });
            setProcessing(false);
            setStep('done');
        }, 1200);
    }
    const sheetTitle = step === 'pin' ? flowMode === 'payoff' ? 'Authorise advance payoff' : 'Authorise extra payment' : flowMode === 'payoff' ? 'Pay off your advance' : 'Pay extra';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: ()=>resetAndClose(),
        title: sheetTitle,
        children: step === 'done' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-bold text-lg text-center",
                    style: {
                        color: '#1F2937',
                        fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                    },
                    children: flowMode === 'payoff' ? 'Advance cleared 🎉' : 'Extra payment successful'
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold",
                    style: {
                        color: '#059669'
                    },
                    children: [
                        "GHS ",
                        result.paid.toFixed(2),
                        " paid"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this),
                flowMode === 'payoff' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: '#6B7280'
                    },
                    children: [
                        "Remaining GCB main balance GHS ",
                        result.mainBalance.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 131,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full rounded-xl p-3 text-xs flex flex-col gap-2",
                    style: {
                        background: '#F9FAFB'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: "New outstanding"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: [
                                        "GHS ",
                                        result.remaining.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: "Updated estimated payoff"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    style: {
                                        color: '#C99A00'
                                    },
                                    children: estimatedPayoffDate(result.remaining)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 140,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 135,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>resetAndClose(true),
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: '#F5C000',
                        color: '#1F2937'
                    },
                    children: "Done"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
            lineNumber: 120,
            columnNumber: 9
        }, this) : step === 'pin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PinEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinEntry"], {
                    amount: currentPayment,
                    actionLabel: flowMode === 'payoff' ? 'Advance payoff' : 'Advance extra payment',
                    pin: pin,
                    expectedPin: pinCode,
                    onPinChange: setPin,
                    onBack: ()=>setStep(flowMode === 'payoff' ? 'details' : 'amount'),
                    onAuthorise: repay,
                    processing: processing
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: '#9CA3AF'
                    },
                    children: [
                        "Prototype PIN: ",
                        pinCode
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
            lineNumber: 151,
            columnNumber: 9
        }, this) : step === 'details' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-4 flex flex-col gap-3",
                    style: {
                        background: '#F9FAFB',
                        border: '1px solid #E5E7EB'
                    },
                    children: [
                        [
                            'Outstanding',
                            `GHS ${outstanding.toFixed(2)}`
                        ],
                        [
                            'Interest to date',
                            'GHS 0.00'
                        ],
                        [
                            'Total to pay today',
                            `GHS ${payoffAmount.toFixed(2)}`
                        ]
                    ].map(([label, value], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-4 text-sm",
                            style: {
                                borderTop: index === 2 ? '1px solid #E5E7EB' : 'none',
                                paddingTop: index === 2 ? 10 : 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: index === 2 ? 'font-bold' : 'font-semibold',
                                    style: {
                                        color: index === 2 ? '#C99A00' : '#1F2937'
                                    },
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 172,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-3 flex items-center justify-between",
                    style: {
                        background: '#FFF3CC'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: "Paid from GCB ••• 4521"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "Balance GHS ",
                                        mainBalance.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"], {
                            size: 19,
                            color: "#C99A00"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: '#6B7280'
                    },
                    children: "No early repayment penalty."
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this),
                insufficient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-3 text-xs leading-relaxed",
                    style: {
                        background: '#FEF2F2',
                        color: '#B91C1C',
                        border: '1px solid #FECACA'
                    },
                    children: [
                        "Your balance is GHS ",
                        mainBalance.toFixed(2),
                        ", below the GHS ",
                        payoffAmount.toFixed(2),
                        " needed."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 187,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>flowMode === mode ? resetAndClose() : setStep('amount'),
                            className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                            style: {
                                background: '#F3F4F6',
                                color: '#6B7280'
                            },
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: continuePayoff,
                            disabled: insufficient,
                            className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                            style: {
                                background: insufficient ? '#E5E7EB' : '#1F2937',
                                color: insufficient ? '#9CA3AF' : '#F5C000'
                            },
                            children: "Continue to PIN"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this),
                insufficient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setFlowMode('extra');
                                setAmount(mainBalance.toFixed(2));
                                setStep('amount');
                            },
                            className: "flex-1 py-2.5 rounded-xl text-xs font-semibold",
                            style: {
                                background: '#FFF3CC',
                                color: '#C99A00',
                                border: '1px solid #F5C000'
                            },
                            children: "Pay extra instead"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 201,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onAddMoney,
                            className: "flex-1 py-2.5 rounded-xl text-xs font-semibold",
                            style: {
                                background: '#F5C000',
                                color: '#1F2937'
                            },
                            children: "Add money"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 204,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 200,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
            lineNumber: 165,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-3 flex items-center justify-between",
                    style: {
                        background: '#FFF3CC'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold",
                                    style: {
                                        color: '#1F2937'
                                    },
                                    children: "Pay from GCB Main Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: [
                                        "••• 4521 · Balance GHS ",
                                        mainBalance.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBanknote"], {
                            size: 19,
                            color: "#C99A00"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-xs font-medium",
                    style: {
                        color: '#6B7280'
                    },
                    children: [
                        "Amount to pay",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: "0",
                            step: "0.01",
                            placeholder: "0.00",
                            value: amount,
                            onChange: (event)=>setAmount(event.target.value),
                            className: "w-full mt-1 rounded-xl px-4 py-3 text-xl font-bold outline-none text-center",
                            style: {
                                background: '#F9FAFB',
                                border: `2px solid ${amountInvalid && amount ? '#FECACA' : '#F5C000'}`,
                                color: '#1F2937'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: [
                        [
                            10,
                            20,
                            50
                        ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAmount(value.toFixed(2)),
                                className: "py-2 rounded-xl text-xs font-semibold",
                                style: {
                                    background: Number(amount) === value ? '#F5C000' : '#F9FAFB',
                                    color: Number(amount) === value ? '#1F2937' : '#6B7280',
                                    border: '1px solid #E5E7EB'
                                },
                                children: [
                                    "GHS ",
                                    value
                                ]
                            }, value, true, {
                                fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setAmount(outstanding.toFixed(2)),
                            className: "py-2 rounded-xl text-xs font-semibold",
                            style: {
                                background: Math.round(Number(amount) * 100) >= outstandingPesewas ? '#F5C000' : '#F9FAFB',
                                color: '#1F2937',
                                border: '1px solid #E5E7EB'
                            },
                            children: "Full balance"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 232,
                    columnNumber: 11
                }, this),
                enteredPesewas > outstandingPesewas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: '#C99A00'
                    },
                    children: [
                        "Payment capped at the GHS ",
                        outstanding.toFixed(2),
                        " outstanding balance."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 260,
                    columnNumber: 13
                }, this),
                selectedPesewas > Math.round(mainBalance * 100) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: '#EF4444'
                    },
                    children: "Amount exceeds your available GCB balance."
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 265,
                    columnNumber: 13
                }, this),
                payment > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-3 text-xs leading-relaxed",
                    style: {
                        background: '#F9FAFB',
                        color: '#6B7280'
                    },
                    children: [
                        "Outstanding after this payment: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold",
                            style: {
                                color: '#1F2937'
                            },
                            children: [
                                "GHS ",
                                Math.max(0, outstanding - payment).toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 271,
                            columnNumber: 47
                        }, this),
                        " · Estimated payoff: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            style: {
                                color: '#C99A00'
                            },
                            children: estimatedPayoffDate(Math.max(0, outstanding - payment))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                            lineNumber: 271,
                            columnNumber: 183
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 270,
                    columnNumber: 13
                }, this),
                leavesBelowSafeguard && !amountInvalid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-3 text-xs leading-relaxed",
                    style: {
                        background: '#FFF3CC',
                        color: '#6B7280',
                        border: '1px solid #F5C000'
                    },
                    children: [
                        "This payment leaves your GCB balance below your GHS ",
                        balanceSafeguard.toFixed(2),
                        " safeguard. You can still continue."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 275,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: continueExtra,
                    disabled: amountInvalid,
                    className: "w-full py-3 rounded-xl text-sm font-semibold",
                    style: {
                        background: amountInvalid ? '#E5E7EB' : '#1F2937',
                        color: amountInvalid ? '#9CA3AF' : '#F5C000'
                    },
                    children: "Continue to PIN"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
            lineNumber: 211,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sheets/RepayAdvanceSheet.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(RepayAdvanceSheet, "C6MNXoWZKOdA2WvnJO5RaO3yBzw=");
_c = RepayAdvanceSheet;
var _c;
__turbopack_context__.k.register(_c, "RepayAdvanceSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/RewardsSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RewardsSheet",
    ()=>RewardsSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function RewardsSheet({ open, onClose, streakDays, points, vaultBalance, freezeEnabled, freezeUsed, advanceOutstanding, vouchers, onToggleFreeze, onRedeemForAdvance, onRedeemReward, onMarkVoucherUsed }) {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copiedVoucherId, setCopiedVoucherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const reward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rewardForStreakDay"])(Math.max(1, streakDays));
    const nextTier = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOYALTY_TIERS"].find((tier)=>tier.min > streakDays);
    const canFundFreeze = vaultBalance >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FREEZE_BALANCE_MINIMUM"] || points >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FREEZE_POINT_COST"];
    const canRedeem = advanceOutstanding > 0 && streakDays >= 7 && points >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOAN_REDEMPTION_POINTS"];
    const viewTitles = {
        overview: 'GCoins Rewards',
        redeem: 'Redeem Points',
        airtime: 'Airtime',
        data: 'Data Bundle',
        lifestyle: 'Lifestyle Rewards',
        vouchers: 'View Voucher Code'
    };
    function close() {
        setView('overview');
        setMessage('');
        setCopiedVoucherId(null);
        onClose();
    }
    function goBack() {
        setMessage('');
        setCopiedVoucherId(null);
        setView(view === 'redeem' ? 'overview' : 'redeem');
    }
    function redeem(category, option) {
        if (onRedeemReward(category, option.points, option.reward)) {
            setMessage(`${option.reward} redeemed successfully.`);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: close,
        title: viewTitles[view],
        children: [
            view !== 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: goBack,
                className: "self-start text-xs font-semibold flex items-center gap-1",
                style: {
                    background: 'transparent',
                    border: 'none',
                    color: '#6B7280'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            transform: 'rotate(180deg)',
                            display: 'flex'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                            size: 13,
                            color: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    "Back"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            view === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4",
                        style: {
                            background: '#1F2937'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: "Current streak"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-white flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFlame"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    streakDays,
                                                    " days"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: "Available points"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-bold",
                                                style: {
                                                    color: '#F5C000'
                                                },
                                                children: [
                                                    points.toLocaleString(),
                                                    " pts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-xl px-3 py-2.5",
                                style: {
                                    background: 'rgba(255,255,255,0.07)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px]",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: "Current tier"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        style: {
                                            color: reward.tier.color
                                        },
                                        children: reward.tier.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            nextTier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] mt-2",
                                style: {
                                    color: '#9CA3AF'
                                },
                                children: [
                                    Math.max(0, nextTier.min - streakDays),
                                    " more active day",
                                    nextTier.min - streakDays === 1 ? '' : 's',
                                    " to reach ",
                                    nextTier.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3.5 flex items-start gap-3",
                        style: {
                            background: '#FFF3CC'
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
                                    fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold",
                                        style: {
                                            color: '#1F2937'
                                        },
                                        children: "Points are earned automatically"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-1 leading-relaxed",
                                        style: {
                                            color: '#6B7280'
                                        },
                                        children: "Keep saving daily and maintaining your streak. Verified seven-day activity milestones earn additional rewards automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setView('redeem'),
                        className: "w-full rounded-xl px-4 py-3.5 flex items-center justify-between text-left",
                        style: {
                            background: '#F5C000',
                            color: '#1F2937'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold",
                                        children: "Redeem Points"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mt-0.5",
                                        children: [
                                            "Use your ",
                                            points.toLocaleString(),
                                            " available points"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                size: 18,
                                color: "#1F2937"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3.5",
                        style: {
                            background: '#F9FAFB',
                            border: '1px solid #E5E7EB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: "Streak Freeze"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] mt-1 leading-relaxed",
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: "Protect one missed day per 30-day cycle using your points or qualifying Vault balance."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                        on: freezeEnabled && !freezeUsed,
                                        onToggle: onToggleFreeze
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] mt-2 font-medium",
                                style: {
                                    color: freezeUsed ? '#EF4444' : canFundFreeze ? '#059669' : '#C99A00'
                                },
                                children: freezeUsed ? 'Freeze already used this cycle' : canFundFreeze ? freezeEnabled ? 'Auto-freeze ready' : 'Freeze protection is off' : 'Continue saving to unlock protection'
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3.5",
                        style: {
                            background: advanceOutstanding > 0 ? '#1F2937' : '#F9FAFB'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: advanceOutstanding > 0 ? '#FFFFFF' : '#6B7280'
                                                },
                                                children: "Points toward GCoins Advance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] mt-1",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: advanceOutstanding > 0 ? 'Use points to reduce interest first, then principal.' : 'No active advance balance.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    advanceOutstanding > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold whitespace-nowrap",
                                        style: {
                                            color: '#F5C000'
                                        },
                                        children: [
                                            "GHS ",
                                            advanceOutstanding.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            advanceOutstanding > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: !canRedeem,
                                onClick: onRedeemForAdvance,
                                className: "w-full mt-3 py-2.5 rounded-xl text-xs font-semibold",
                                style: {
                                    background: canRedeem ? '#F5C000' : '#374151',
                                    color: canRedeem ? '#1F2937' : '#9CA3AF'
                                },
                                children: streakDays < 7 ? 'Unlocks at a 7-day streak' : points < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOAN_REDEMPTION_POINTS"] ? 'Keep earning points to redeem' : 'Apply points to Advance'
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            view === 'redeem' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4 flex items-center justify-between",
                        style: {
                            background: '#1F2937'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs",
                                        style: {
                                            color: '#9CA3AF'
                                        },
                                        children: "Available balance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: '#F5C000'
                                        },
                                        children: [
                                            points.toLocaleString(),
                                            " points"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCoin"], {
                                size: 30,
                                color: "#F5C000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl overflow-hidden",
                        style: {
                            border: '1px solid #E5E7EB'
                        },
                        children: [
                            {
                                label: 'Airtime',
                                description: 'Convert points into mobile top-up credit',
                                view: 'airtime',
                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSmartphone"]
                            },
                            {
                                label: 'Data Bundle',
                                description: 'Redeem internet data packages',
                                view: 'data',
                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconZap"]
                            },
                            {
                                label: 'Lifestyle Rewards',
                                description: 'Claim partner perks and shopping vouchers',
                                view: 'lifestyle',
                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTag"]
                            },
                            {
                                label: 'View Voucher Code',
                                description: `${vouchers.length} claimed voucher${vouchers.length === 1 ? '' : 's'}`,
                                view: 'vouchers',
                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBriefcase"]
                            }
                        ].map((item, index, items)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setView(item.view),
                                className: "w-full px-4 py-3.5 flex items-center gap-3 text-left",
                                style: {
                                    background: '#FFFFFF',
                                    border: 'none',
                                    borderBottom: index < items.length - 1 ? '1px solid #E5E7EB' : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                                        style: {
                                            background: '#FFF3CC'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.Icon, {
                                            size: 17,
                                            color: "#C99A00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px]",
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 247,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronRight"], {
                                        size: 15,
                                        color: "#9CA3AF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this),
            (view === 'airtime' || view === 'data' || view === 'lifestyle') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl px-4 py-3 flex justify-between items-center",
                        style: {
                            background: '#FFF3CC'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                style: {
                                    color: '#6B7280'
                                },
                                children: "Available points"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-bold",
                                style: {
                                    color: '#C99A00'
                                },
                                children: points.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3 text-xs font-semibold",
                        style: {
                            background: '#D1FAE5',
                            color: '#059669'
                        },
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 263,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REDEMPTION_OPTIONS"][view].map((option)=>{
                            const affordable = points >= option.points;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-3.5 flex items-center justify-between gap-3",
                                style: {
                                    background: '#F9FAFB',
                                    border: '1px solid #E5E7EB'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: option.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 277,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mt-0.5",
                                                style: {
                                                    color: '#6B7280'
                                                },
                                                children: [
                                                    option.points.toLocaleString(),
                                                    " points"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 278,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 276,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !affordable,
                                        onClick: ()=>redeem(view, option),
                                        className: "px-3 py-2 rounded-lg text-xs font-semibold",
                                        style: {
                                            background: affordable ? '#F5C000' : '#E5E7EB',
                                            color: affordable ? '#1F2937' : '#9CA3AF'
                                        },
                                        children: "Redeem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, option.label, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 271,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] leading-relaxed",
                        style: {
                            color: '#9CA3AF'
                        },
                        children: view === 'lifestyle' ? 'A voucher code will be saved under View Voucher Code.' : 'The reward will be applied directly to your registered mobile number.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, this),
            view === 'vouchers' && (vouchers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: vouchers.map((voucher)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3.5",
                        style: {
                            background: '#F9FAFB',
                            border: '1px solid #E5E7EB',
                            opacity: voucher.used ? 0.65 : 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: '#1F2937'
                                                },
                                                children: voucher.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 312,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px]",
                                                style: {
                                                    color: '#9CA3AF'
                                                },
                                                children: [
                                                    "Claimed ",
                                                    voucher.claimedAt
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                                lineNumber: 313,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 311,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold",
                                        style: {
                                            color: voucher.used ? '#9CA3AF' : '#059669'
                                        },
                                        children: voucher.used ? 'Used' : 'Active'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 315,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 310,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 rounded-lg px-3 py-2.5 flex items-center justify-between",
                                style: {
                                    background: '#FFFFFF',
                                    border: '1px dashed #F5C000'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-sm font-bold tracking-wider",
                                        style: {
                                            color: '#1F2937'
                                        },
                                        children: voucher.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 320,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            navigator.clipboard?.writeText(voucher.code);
                                            setCopiedVoucherId(voucher.id);
                                        },
                                        className: "text-xs font-semibold",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#C99A00'
                                        },
                                        children: copiedVoucherId === voucher.id ? 'Copied' : 'Copy'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                        lineNumber: 321,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 319,
                                columnNumber: 17
                            }, this),
                            !voucher.used && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onMarkVoucherUsed(voucher.id),
                                className: "w-full mt-2 py-2 rounded-lg text-xs font-semibold",
                                style: {
                                    background: '#F3F4F6',
                                    color: '#6B7280'
                                },
                                children: "Mark as used"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                                lineNumber: 334,
                                columnNumber: 19
                            }, this)
                        ]
                    }, voucher.id, true, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 305,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                lineNumber: 303,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 text-center",
                style: {
                    background: '#F9FAFB'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBriefcase"], {
                        size: 26,
                        color: "#9CA3AF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 348,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold mt-2",
                        style: {
                            color: '#374151'
                        },
                        children: "No voucher codes yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 349,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs mt-1",
                        style: {
                            color: '#9CA3AF'
                        },
                        children: "Claim a Lifestyle Reward to save its code here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                        lineNumber: 350,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
                lineNumber: 347,
                columnNumber: 11
            }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sheets/RewardsSheet.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(RewardsSheet, "biDLg9kGVfzaT3rG3TZ6dAEshik=");
_c = RewardsSheet;
var _c;
__turbopack_context__.k.register(_c, "RewardsSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/RoundUpSetupSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoundUpSetupSheet",
    ()=>RoundUpSetupSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RoundUpSetupSheet({ open, onSave, onCancel }) {
    _s();
    const [targetInput, setTargetInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [safeguardInput, setSafeguardInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const target = Math.max(1, Math.floor(Number(targetInput) || 0));
    const safeguard = safeguardInput.trim() === '' ? 0 : Math.max(0, Number(safeguardInput) || 0);
    const isValid = targetInput.trim() !== '' && target >= 1;
    const exampleBalance = 716.5;
    const exampleSpare = isValid ? +(exampleBalance - Math.floor(exampleBalance / target) * target).toFixed(2) : null;
    const exampleResult = exampleSpare !== null ? +(exampleBalance - exampleSpare).toFixed(2) : null;
    function handleSave() {
        if (!isValid) return;
        onSave(target, safeguard);
        setTargetInput('');
        setSafeguardInput('');
    }
    function handleCancel() {
        setTargetInput('');
        setSafeguardInput('');
        onCancel();
    }
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col justify-end z-50 overflow-hidden",
        style: {
            background: 'rgba(0,0,0,0.45)'
        },
        onClick: handleCancel,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full rounded-t-3xl p-5 flex flex-col gap-4 overflow-y-auto",
            style: {
                background: '#FFFFFF',
                maxHeight: '92%',
                overscrollBehavior: 'contain'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-1 rounded-full mx-auto flex-shrink-0",
                    style: {
                        background: '#E5E7EB'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-bold",
                            style: {
                                color: '#1F2937',
                                fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                            },
                            children: "Set your round-up"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            style: {
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 8
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"], {
                                size: 18,
                                color: "#6B7280"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-medium",
                            style: {
                                color: '#1F2937'
                            },
                            children: "Round my balance down to the nearest GH₵"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2",
                            children: [
                                1,
                                5,
                                10,
                                20
                            ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTargetInput(String(chip)),
                                    className: "flex-1 py-2 rounded-xl text-xs font-semibold transition-all",
                                    style: {
                                        background: target === chip && targetInput !== '' ? '#F5C000' : '#F9FAFB',
                                        color: target === chip && targetInput !== '' ? '#1F2937' : '#6B7280',
                                        border: target === chip && targetInput !== '' ? '1.5px solid #F5C000' : '1px solid #E5E7EB'
                                    },
                                    children: [
                                        "GH₵ ",
                                        chip
                                    ]
                                }, chip, true, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mt-2 rounded-xl overflow-hidden",
                            style: {
                                background: '#F9FAFB',
                                border: `1.5px solid ${isValid ? '#F5C000' : '#E5E7EB'}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "self-stretch px-3 flex items-center text-sm font-semibold",
                                    style: {
                                        color: '#6B7280',
                                        background: '#F3F4F6',
                                        borderRight: '1px solid #E5E7EB'
                                    },
                                    children: "GH₵"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    inputMode: "numeric",
                                    min: 1,
                                    step: 1,
                                    placeholder: "Enter any whole number, e.g. 3",
                                    value: targetInput,
                                    onChange: (e)=>setTargetInput(e.target.value.replace(/[^\d]/g, '')),
                                    className: "w-full min-w-0 px-3 py-3 bg-transparent text-sm font-semibold outline-none",
                                    style: {
                                        color: '#1F2937'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        isValid && target > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-1.5 leading-relaxed",
                            style: {
                                color: '#C99A00'
                            },
                            children: [
                                "Each payment can save up to GH₵ ",
                                (target - 0.01).toFixed(2),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 98,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-1 leading-relaxed",
                            style: {
                                color: '#9CA3AF'
                            },
                            children: "Round-ups pause whenever your balance would fall below this amount."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 100,
                            columnNumber: 11
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
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    inputMode: "decimal",
                                    min: 0,
                                    step: "0.01",
                                    placeholder: "0.00",
                                    value: safeguardInput,
                                    onChange: (e)=>setSafeguardInput(e.target.value),
                                    "aria-label": "Balance safeguard amount",
                                    className: "w-full min-w-0 py-3 bg-transparent text-sm font-semibold outline-none text-center",
                                    style: {
                                        color: '#1F2937'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs whitespace-nowrap",
                                    style: {
                                        color: '#6B7280'
                                    },
                                    children: "in my account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                isValid && exampleSpare !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-3.5",
                    style: {
                        background: exampleSpare > 0 ? '#FFF8D8' : '#F9FAFB',
                        border: `1px solid ${exampleSpare > 0 ? '#F5C000' : '#E5E7EB'}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold mb-1",
                            style: {
                                color: '#6B7280'
                            },
                            children: "LIVE EXAMPLE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed",
                            style: {
                                color: '#1F2937'
                            },
                            children: [
                                "Balance after a payment ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "GHS 716.50"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 124,
                                    columnNumber: 39
                                }, this),
                                exampleSpare > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        " → ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            style: {
                                                color: '#C99A00'
                                            },
                                            children: [
                                                "GH₵ ",
                                                exampleSpare.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                            lineNumber: 126,
                                            columnNumber: 24
                                        }, this),
                                        " saved to your Vault, balance becomes ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: [
                                                "GHS ",
                                                exampleResult.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                            lineNumber: 126,
                                            columnNumber: 155
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 126,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        " → balance is already a whole-cedi amount, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#6B7280'
                                            },
                                            children: "no round-up"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                            lineNumber: 127,
                                            columnNumber: 64
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCancel,
                            className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                            style: {
                                background: '#F3F4F6',
                                color: '#6B7280',
                                border: 'none'
                            },
                            children: "Not now"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            disabled: !isValid,
                            className: "flex-1 py-3 rounded-xl text-sm font-semibold transition-all",
                            style: {
                                background: isValid ? '#F5C000' : '#E5E7EB',
                                color: isValid ? '#1F2937' : '#9CA3AF',
                                border: 'none'
                            },
                            children: "Save and turn on"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sheets/RoundUpSetupSheet.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(RoundUpSetupSheet, "JSnG23rUxH5Swgnop5jevxG0f2g=");
_c = RoundUpSetupSheet;
var _c;
__turbopack_context__.k.register(_c, "RoundUpSetupSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sheets/WithdrawSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WithdrawSheet",
    ()=>WithdrawSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
function WithdrawSheet({ open, onClose, vaultBalance, mainAccountBalance, onWithdraw, pinCode }) {
    _s();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('amount');
    const [pin, setPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [updatedMainBalance, setUpdatedMainBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mainAccountBalance);
    const [failedAttempts, setFailedAttempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lockedUntil, setLockedUntil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const over = Number(amount) > vaultBalance;
    const lockoutMinutes = 5;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WithdrawSheet.useEffect": ()=>{
            if (lockedUntil === null) return;
            const remaining = lockedUntil - Date.now();
            if (remaining <= 0) {
                setLockedUntil(null);
                setFailedAttempts(0);
                return;
            }
            const timer = window.setTimeout({
                "WithdrawSheet.useEffect.timer": ()=>{
                    setLockedUntil(null);
                    setFailedAttempts(0);
                }
            }["WithdrawSheet.useEffect.timer"], remaining);
            return ({
                "WithdrawSheet.useEffect": ()=>window.clearTimeout(timer)
            })["WithdrawSheet.useEffect"];
        }
    }["WithdrawSheet.useEffect"], [
        lockedUntil
    ]);
    function handleWithdraw() {
        if (!amount || over || pin.length !== 4) return;
        setProcessing(true);
        setTimeout(()=>{
            setUpdatedMainBalance(onWithdraw(Number(amount)));
            setFailedAttempts(0);
            setLockedUntil(null);
            setProcessing(false);
            setStep('done');
        }, 800);
    }
    function handleFailedPin() {
        const nextAttempts = failedAttempts + 1;
        setFailedAttempts(nextAttempts);
        if (nextAttempts >= 3) setLockedUntil(Date.now() + lockoutMinutes * 60 * 1000);
    }
    function handleClose() {
        setProcessing(false);
        setStep('amount');
        setPin('');
        setAmount('');
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
        open: open,
        onClose: handleClose,
        title: step === 'pin' ? 'Authorise Withdrawal' : 'Withdraw from Vault',
        children: step === 'done' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center py-6 gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-14 h-14 rounded-full flex items-center justify-center",
                    style: {
                        background: '#FFF3CC'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {
                        size: 28,
                        color: "#C99A00"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-semibold text-center",
                    style: {
                        color: '#1F2937'
                    },
                    children: [
                        "GH₵ ",
                        Number(amount).toFixed(2),
                        " moved to your GCB Main Account"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: '#6B7280'
                    },
                    children: [
                        "Updated main-account balance · GHS ",
                        updatedMainBalance.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClose,
                    className: "w-full py-3 rounded-xl font-semibold text-sm mt-2",
                    style: {
                        background: '#F5C000',
                        color: '#1F2937'
                    },
                    children: "Done"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, this) : step === 'pin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PinEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinEntry"], {
            amount: Number(amount),
            actionLabel: "Withdrawal",
            pin: pin,
            expectedPin: pinCode,
            onPinChange: setPin,
            onBack: ()=>setStep('amount'),
            onAuthorise: handleWithdraw,
            processing: processing,
            destination: "GCB Main Account ••• 4521",
            failedAttempts: failedAttempts,
            lockedUntil: lockedUntil,
            lockoutMinutes: lockoutMinutes,
            incorrectPinMessage: "Incorrect PIN, try again",
            onFailedAttempt: handleFailedPin
        }, void 0, false, {
            fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
            lineNumber: 92,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl p-3 flex justify-between text-sm",
                    style: {
                        background: '#FFF3CC'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: '#6B7280'
                            },
                            children: "Available in Vault"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold",
                            style: {
                                color: '#C99A00'
                            },
                            children: [
                                "GHS ",
                                vaultBalance.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    placeholder: "0.00",
                    value: amount,
                    onChange: (e)=>setAmount(e.target.value),
                    className: "w-full rounded-xl px-4 py-3 text-2xl font-bold outline-none text-center",
                    style: {
                        background: '#F9FAFB',
                        border: `2px solid ${over ? '#FECACA' : '#F5C000'}`,
                        color: over ? '#EF4444' : '#1F2937',
                        fontFamily: 'var(--font-display, "DM Serif Display", serif)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this),
                over && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-center",
                    style: {
                        color: '#EF4444'
                    },
                    children: "Exceeds vault balance"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 127,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>amount && !over && setStep('pin'),
                    className: "w-full py-3 rounded-xl font-semibold text-sm",
                    style: {
                        background: amount && !over ? '#1F2937' : '#E5E7EB',
                        color: amount && !over ? '#F5C000' : '#9CA3AF'
                    },
                    children: "Continue to PIN"
                }, void 0, false, {
                    fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
            lineNumber: 109,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sheets/WithdrawSheet.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(WithdrawSheet, "87SfB3L+rsU5ax95W2RHaU6sjF0=");
_c = WithdrawSheet;
var _c;
__turbopack_context__.k.register(_c, "WithdrawSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_components_sheets_0trhedgili1ue._.js.map
(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/GCoinsShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GCoinsShell",
    ()=>GCoinsShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GCoinsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/GCoinsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$RoundUpSetupSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/RoundUpSetupSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$NotificationsSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/NotificationsSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$ProfileSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/ProfileSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$RepayAdvanceSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sheets/RepayAdvanceSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navigation/BottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$HomeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/HomeScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/TransactionsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$GoalsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/GoalsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/SettingsScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$GcbApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/GcbApp.tsx [app-client] (ecmascript)");
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
;
;
function GCoinsShell() {
    _s();
    const { appMode, setAppMode, gcbTheme, setGcbTheme, screen, setScreen, roundUpOn, setRoundUpPaused, roundUpPaused, vaultBalance, monthlyTotal, monthlyRecords, weeklyRoundUps, streakDays, loyaltyPoints, freezeEnabled, setFreezeEnabled, freezeUsed, claimedVouchers, transactionPin, setTransactionPin, advanceBorrowed, advanceTotal, advanceOutstanding, advanceActive, advanceCleared, advanceRepaymentPace, advanceTopUp, advanceDueAt, balanceSafeguard, setBalanceSafeguard, roundUpMultiple, setRoundUpMultiple, showSetup, setShowSetup, mainAccountBalance, reminderFrequency, setReminderFrequency, goals, setGoals, transactions, notifications, setNotifications, showNotifs, setShowNotifs, showProfile, setShowProfile, showRepayAdvance, setShowRepayAdvance, advancePaymentMode, setAdvancePaymentMode, showLogout, setShowLogout, handleEnableRequest, handleSetupSave, handleEnd, handleVaultAddition, handleCompletedTransaction, handleVaultWithdrawal, handleBorrow, handleRepayAdvance, handleRedeemPointsForAdvance, handleRewardRedemption, handleMarkVoucherUsed, handleDeleteGoal, handleGoalAllocation, handleGoalWithdrawal, handleClearCompletedGoals } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GCoinsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGCoins"])();
    const gcoinsModule = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$RoundUpSetupSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundUpSetupSheet"], {
                open: showSetup,
                onSave: handleSetupSave,
                onCancel: ()=>setShowSetup(false)
            }, void 0, false, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gcoins-header flex items-center justify-between px-6 pt-4 pb-2 flex-shrink-0",
                style: {
                    background: '#1F2937'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-white",
                        children: "9:41"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-6 rounded-full",
                        style: {
                            background: '#1F2937',
                            border: '2px solid #374151'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSignal"], {
                                size: 13,
                                color: "white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWifi"], {
                                size: 13,
                                color: "white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBattery"], {
                                size: 16,
                                color: "white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gcoins-header flex items-center justify-between px-5 py-3 flex-shrink-0",
                style: {
                    background: '#1F2937'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium",
                                style: {
                                    color: '#9CA3AF'
                                },
                                children: "Good morning,"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GCoinsLogo"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setShowProfile(false);
                                    setShowNotifs(true);
                                },
                                className: "relative w-8 h-8 rounded-full flex items-center justify-center",
                                style: {
                                    background: '#374151',
                                    border: 'none',
                                    cursor: 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBell"], {
                                        size: 15,
                                        color: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GCoinsShell.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    notifications.some((notification)=>!notification.read) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-0.5 right-0.5 w-2 h-2 rounded-full",
                                        style: {
                                            background: '#F5C000'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GCoinsShell.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setShowNotifs(false);
                                    setShowProfile(true);
                                },
                                className: "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                                style: {
                                    background: '#F5C000',
                                    color: '#1F2937',
                                    border: 'none',
                                    cursor: 'pointer'
                                },
                                children: "KA"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$NotificationsSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationsSheet"], {
                open: showNotifs,
                onClose: ()=>setShowNotifs(false),
                notifications: notifications,
                onChange: setNotifications
            }, void 0, false, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$ProfileSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileSheet"], {
                open: showProfile,
                onClose: ()=>setShowProfile(false),
                onNavigateSettings: ()=>setScreen('settings'),
                pinCode: transactionPin,
                onPinChange: setTransactionPin,
                onLogout: ()=>setShowLogout(true)
            }, void 0, false, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sheets$2f$RepayAdvanceSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepayAdvanceSheet"], {
                open: showRepayAdvance,
                mode: advancePaymentMode,
                onClose: ()=>setShowRepayAdvance(false),
                onReturnHome: ()=>{
                    setShowRepayAdvance(false);
                    setScreen('home');
                },
                onAddMoney: ()=>{
                    setShowRepayAdvance(false);
                    setAppMode('gcbHome');
                },
                outstanding: advanceOutstanding,
                mainBalance: mainAccountBalance,
                balanceSafeguard: balanceSafeguard,
                advanceTopUp: advanceTopUp,
                pinCode: transactionPin,
                onRepay: handleRepayAdvance
            }, `repay-${showRepayAdvance}-${advancePaymentMode}`, false, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomSheet"], {
                open: showLogout,
                onClose: ()=>setShowLogout(false),
                title: "Log Out",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        style: {
                            color: '#374151'
                        },
                        children: "Are you sure you want to log out of GCoins and return to the GCB app?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowLogout(false),
                                className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                style: {
                                    background: '#F3F4F6',
                                    color: '#6B7280'
                                },
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setShowProfile(false);
                                    setShowNotifs(false);
                                    setShowLogout(false);
                                    setScreen('home');
                                    setAppMode('gcbHome');
                                },
                                className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                                style: {
                                    background: '#EF4444',
                                    color: '#FFFFFF'
                                },
                                children: "Log Out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GCoinsShell.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto relative",
                style: {
                    visibility: showProfile ? 'hidden' : 'visible'
                },
                children: [
                    screen === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$HomeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeScreen"], {
                        roundUpOn: roundUpOn,
                        roundUpPaused: roundUpPaused,
                        vaultBalance: vaultBalance,
                        mainAccountBalance: mainAccountBalance,
                        roundUpMultiple: roundUpMultiple,
                        monthlyTotal: monthlyTotal,
                        weeklyRoundUps: weeklyRoundUps,
                        streakDays: streakDays,
                        reminderFrequency: reminderFrequency,
                        pinCode: transactionPin,
                        loyaltyPoints: loyaltyPoints,
                        freezeEnabled: freezeEnabled,
                        freezeUsed: freezeUsed,
                        claimedVouchers: claimedVouchers,
                        advanceBorrowed: advanceBorrowed,
                        advanceTotal: advanceTotal,
                        advanceOutstanding: advanceOutstanding,
                        advanceActive: advanceActive,
                        advanceCleared: advanceCleared,
                        advanceEligible: streakDays >= 7 && monthlyTotal >= 10,
                        advanceDueAt: advanceDueAt,
                        advanceRepaymentPace: advanceRepaymentPace,
                        advanceTopUp: advanceTopUp,
                        balanceSafeguard: balanceSafeguard,
                        transactions: transactions,
                        onEnableRequest: handleEnableRequest,
                        onPause: ()=>setRoundUpPaused(true),
                        onResume: ()=>setRoundUpPaused(false),
                        onEnd: handleEnd,
                        onAdd: handleVaultAddition,
                        onWithdraw: handleVaultWithdrawal,
                        onBorrow: handleBorrow,
                        onOpenRepay: (mode)=>{
                            setAdvancePaymentMode(mode);
                            setShowRepayAdvance(true);
                        },
                        onReminderChange: setReminderFrequency,
                        onToggleFreeze: ()=>!freezeUsed && setFreezeEnabled((enabled)=>!enabled),
                        onRedeemPoints: handleRedeemPointsForAdvance,
                        onRedeemReward: handleRewardRedemption,
                        onMarkVoucherUsed: handleMarkVoucherUsed,
                        onGoToGoals: ()=>setScreen('goals')
                    }, void 0, false, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    screen === 'transactions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$TransactionsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsScreen"], {
                        records: monthlyRecords,
                        transactions: transactions
                    }, void 0, false, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 249,
                        columnNumber: 39
                    }, this),
                    screen === 'goals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$GoalsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoalsScreen"], {
                        goals: goals,
                        vaultBalance: vaultBalance,
                        pinCode: transactionPin,
                        onCreateGoal: (goal)=>setGoals((current)=>[
                                    goal,
                                    ...current
                                ]),
                        onUpdateGoal: (updated)=>setGoals((current)=>current.map((goal)=>goal.id === updated.id ? updated : goal)),
                        onDeleteGoal: handleDeleteGoal,
                        onAllocate: handleGoalAllocation,
                        onWithdrawGoal: handleGoalWithdrawal,
                        onClearCompleted: handleClearCompletedGoals
                    }, void 0, false, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    screen === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SettingsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsScreen"], {
                        roundUpOn: roundUpOn,
                        threshold: balanceSafeguard,
                        roundUpMultiple: roundUpMultiple,
                        reminderFrequency: reminderFrequency,
                        theme: gcbTheme,
                        onThresholdChange: setBalanceSafeguard,
                        onRoundUpMultipleChange: setRoundUpMultiple,
                        onReminderChange: setReminderFrequency,
                        onThemeChange: setGcbTheme,
                        onEnableRequest: handleEnableRequest,
                        onEnd: handleEnd,
                        onLogout: ()=>setShowLogout(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/GCoinsShell.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navigation$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {
                activeScreen: screen,
                onSelectScreen: (id)=>{
                    setShowNotifs(false);
                    setShowProfile(false);
                    setScreen(id);
                },
                theme: gcbTheme
            }, void 0, false, {
                fileName: "[project]/src/components/GCoinsShell.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GCoinsShell.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$GcbApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GcbApp"], {
        mode: appMode,
        pinCode: transactionPin,
        theme: gcbTheme,
        mainAccountBalance: mainAccountBalance,
        transactions: transactions,
        gcoinsModule: gcoinsModule,
        onThemeChange: setGcbTheme,
        onModeChange: setAppMode,
        onEnterGCoins: ()=>{
            setAppMode('gcoins');
            setScreen('home');
        },
        onCompleteTransaction: handleCompletedTransaction,
        roundUpOn: roundUpOn,
        roundUpPaused: roundUpPaused,
        roundUpTarget: roundUpMultiple,
        advanceActive: advanceActive,
        advanceTopUp: advanceTopUp
    }, void 0, false, {
        fileName: "[project]/src/components/GCoinsShell.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s(GCoinsShell, "KkR6NpOqVtDzrsdciQB47x8Um2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$GCoinsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGCoins"]
    ];
});
_c = GCoinsShell;
var _c;
__turbopack_context__.k.register(_c, "GCoinsShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/icons/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GCoinsLogo",
    ()=>GCoinsLogo,
    "GoalIcon",
    ()=>GoalIcon,
    "IconActivity",
    ()=>IconActivity,
    "IconArrowDown",
    ()=>IconArrowDown,
    "IconBanknote",
    ()=>IconBanknote,
    "IconBattery",
    ()=>IconBattery,
    "IconBell",
    ()=>IconBell,
    "IconBot",
    ()=>IconBot,
    "IconBriefcase",
    ()=>IconBriefcase,
    "IconCar",
    ()=>IconCar,
    "IconCheck",
    ()=>IconCheck,
    "IconChevronRight",
    ()=>IconChevronRight,
    "IconClose",
    ()=>IconClose,
    "IconCoffee",
    ()=>IconCoffee,
    "IconCoin",
    ()=>IconCoin,
    "IconEye",
    ()=>IconEye,
    "IconEyeOff",
    ()=>IconEyeOff,
    "IconFlame",
    ()=>IconFlame,
    "IconHome",
    ()=>IconHome,
    "IconLoader",
    ()=>IconLoader,
    "IconMonitor",
    ()=>IconMonitor,
    "IconPause",
    ()=>IconPause,
    "IconPlane",
    ()=>IconPlane,
    "IconPlay",
    ()=>IconPlay,
    "IconPlus",
    ()=>IconPlus,
    "IconPower",
    ()=>IconPower,
    "IconSettings",
    ()=>IconSettings,
    "IconShield",
    ()=>IconShield,
    "IconShoppingCart",
    ()=>IconShoppingCart,
    "IconSignal",
    ()=>IconSignal,
    "IconSmartphone",
    ()=>IconSmartphone,
    "IconTag",
    ()=>IconTag,
    "IconTarget",
    ()=>IconTarget,
    "IconUser",
    ()=>IconUser,
    "IconWifi",
    ()=>IconWifi,
    "IconZap",
    ()=>IconZap,
    "TxIcon",
    ()=>TxIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function IconEye({ size = 16, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = IconEye;
function IconEyeOff({ size = 16, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "1",
                x2: "23",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c1 = IconEyeOff;
function IconHome({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "9 22 9 12 15 12 15 22"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c2 = IconHome;
function IconActivity({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "22 12 18 12 15 21 9 3 6 12 2 12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c3 = IconActivity;
function IconTarget({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c4 = IconTarget;
function IconUser({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c5 = IconUser;
function IconBell({ size = 16, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.73 21a2 2 0 0 1-3.46 0"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c6 = IconBell;
function IconPlus({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "19"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c7 = IconPlus;
function IconArrowDown({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5",
                x2: "12",
                y2: "19"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "19 12 12 19 5 12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c8 = IconArrowDown;
function IconClose({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c9 = IconClose;
function IconShoppingCart({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "21",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "20",
                cy: "21",
                r: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c10 = IconShoppingCart;
function IconCar({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "7.5",
                cy: "17.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "17.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c11 = IconCar;
function IconZap({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c12 = IconZap;
function IconCoffee({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8h1a4 4 0 0 1 0 8h-1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "1",
                x2: "6",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "1",
                x2: "10",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "1",
                x2: "14",
                y2: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c13 = IconCoffee;
function IconBriefcase({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "7",
                width: "20",
                height: "14",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_c14 = IconBriefcase;
function IconTag({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "7",
                y1: "7",
                x2: "7.01",
                y2: "7"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c15 = IconTag;
function IconSmartphone({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "2",
                width: "14",
                height: "20",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "18",
                x2: "12.01",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c16 = IconSmartphone;
function IconShield({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c17 = IconShield;
function IconPlane({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5 18 1 16 1 14.5 2.5L11 6 2.8 6.2l2 2L9 12l-2 2 4 1 1 4 2-2 3.8 3.2"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c18 = IconPlane;
function IconMonitor({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "3",
                width: "20",
                height: "14",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "21",
                x2: "16",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_c19 = IconMonitor;
function IconBot({ size = 18, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "11",
                width: "18",
                height: "10",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "5",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "7",
                x2: "12",
                y2: "11"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "16",
                x2: "8",
                y2: "16",
                strokeWidth: 3
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "16",
                x2: "16",
                y2: "16",
                strokeWidth: 3
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c20 = IconBot;
function IconCoin({ size = 28, color = '#C99A00' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 1.5-1.5 2-3 2.5-1.5.5-3 1-3 2.5 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "5.5",
                x2: "12",
                y2: "7"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12",
                y2: "18.5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_c21 = IconCoin;
function IconBattery({ size = 14, color = 'white' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "6",
                width: "18",
                height: "12",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "23",
                y1: "13",
                x2: "23",
                y2: "11"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "8",
                width: "12",
                height: "8",
                rx: "1",
                fill: color,
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_c22 = IconBattery;
function IconWifi({ size = 14, color = 'white' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 12.55a11 11 0 0 1 14.08 0"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.42 9a16 16 0 0 1 21.16 0"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.53 16.11a6 6 0 0 1 6.95 0"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "20",
                x2: "12.01",
                y2: "20",
                strokeWidth: 3
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_c23 = IconWifi;
function IconSignal({ size = 14, color = 'white' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "16",
                width: "4",
                height: "6",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9",
                y: "11",
                width: "4",
                height: "11",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "16",
                y: "6",
                width: "4",
                height: "16",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_c24 = IconSignal;
function IconPause({ size = 12, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "4",
                width: "4",
                height: "16",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "4",
                width: "4",
                height: "16",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
}
_c25 = IconPause;
function IconPlay({ size = 12, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "5 3 19 12 5 21 5 3"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_c26 = IconPlay;
function IconPower({ size = 12, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.34 6.34A9 9 0 1 0 17.66 6.34"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_c27 = IconPower;
function IconCheck({ size = 12, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 270,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
_c28 = IconCheck;
function IconFlame({ size = 16, color = '#F5C000' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: color,
        stroke: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C9 6 7 9 9 13c-2-1-3-3-3-3s-1 5 3 8a6 6 0 0 0 10-4c0-4-3-6-3-6s1 3-1 5c-1-2-3-4-3-8z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 278,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_c29 = IconFlame;
function IconSettings({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_c30 = IconSettings;
function IconBanknote({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "4",
                width: "22",
                height: "16",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "10",
                x2: "23",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "15",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
_c31 = IconBanknote;
function IconLoader({ size = 20, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
            animation: 'spin 1s linear infinite'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "18",
                x2: "12",
                y2: "22"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.93",
                y1: "4.93",
                x2: "7.76",
                y2: "7.76"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16.24",
                y1: "16.24",
                x2: "19.07",
                y2: "19.07"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "12",
                x2: "6",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "12",
                x2: "22",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.93",
                y1: "19.07",
                x2: "7.76",
                y2: "16.24"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16.24",
                y1: "7.76",
                x2: "19.07",
                y2: "4.93"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
_c32 = IconLoader;
function IconChevronRight({ size = 16, color = 'currentColor' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "9 18 15 12 9 6"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/index.tsx",
            lineNumber: 330,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 329,
        columnNumber: 5
    }, this);
}
_c33 = IconChevronRight;
function GCoinsLogo({ size = 22 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontFamily: 'var(--font-display, "DM Serif Display", serif)',
            fontSize: size,
            fontWeight: 700
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: '#FFFFFF'
                },
                children: "G"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: '#F5C000'
                },
                children: "Coins"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/index.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_c34 = GCoinsLogo;
function TxIcon({ category }) {
    const c = '#6B7280', s = 18;
    if (category === 'Groceries') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShoppingCart, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 346,
        columnNumber: 40
    }, this);
    if (category === 'Transport') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCar, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 347,
        columnNumber: 40
    }, this);
    if (category === 'Utilities') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconZap, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 348,
        columnNumber: 40
    }, this);
    if (category === 'Food & Drink') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCoffee, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 349,
        columnNumber: 43
    }, this);
    if (category === 'Income') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconBriefcase, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 350,
        columnNumber: 37
    }, this);
    if (category === 'Shopping') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTag, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 351,
        columnNumber: 39
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconSmartphone, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 352,
        columnNumber: 10
    }, this);
}
_c35 = TxIcon;
function GoalIcon({ name, done }) {
    const c = done ? '#059669' : '#6B7280', s = 18;
    if (name === 'Emergency Fund') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconShield, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 357,
        columnNumber: 41
    }, this);
    if (name === 'Holiday Trip') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconPlane, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 358,
        columnNumber: 39
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconMonitor, {
        size: s,
        color: c
    }, void 0, false, {
        fileName: "[project]/src/components/icons/index.tsx",
        lineNumber: 359,
        columnNumber: 10
    }, this);
}
_c36 = GoalIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36;
__turbopack_context__.k.register(_c, "IconEye");
__turbopack_context__.k.register(_c1, "IconEyeOff");
__turbopack_context__.k.register(_c2, "IconHome");
__turbopack_context__.k.register(_c3, "IconActivity");
__turbopack_context__.k.register(_c4, "IconTarget");
__turbopack_context__.k.register(_c5, "IconUser");
__turbopack_context__.k.register(_c6, "IconBell");
__turbopack_context__.k.register(_c7, "IconPlus");
__turbopack_context__.k.register(_c8, "IconArrowDown");
__turbopack_context__.k.register(_c9, "IconClose");
__turbopack_context__.k.register(_c10, "IconShoppingCart");
__turbopack_context__.k.register(_c11, "IconCar");
__turbopack_context__.k.register(_c12, "IconZap");
__turbopack_context__.k.register(_c13, "IconCoffee");
__turbopack_context__.k.register(_c14, "IconBriefcase");
__turbopack_context__.k.register(_c15, "IconTag");
__turbopack_context__.k.register(_c16, "IconSmartphone");
__turbopack_context__.k.register(_c17, "IconShield");
__turbopack_context__.k.register(_c18, "IconPlane");
__turbopack_context__.k.register(_c19, "IconMonitor");
__turbopack_context__.k.register(_c20, "IconBot");
__turbopack_context__.k.register(_c21, "IconCoin");
__turbopack_context__.k.register(_c22, "IconBattery");
__turbopack_context__.k.register(_c23, "IconWifi");
__turbopack_context__.k.register(_c24, "IconSignal");
__turbopack_context__.k.register(_c25, "IconPause");
__turbopack_context__.k.register(_c26, "IconPlay");
__turbopack_context__.k.register(_c27, "IconPower");
__turbopack_context__.k.register(_c28, "IconCheck");
__turbopack_context__.k.register(_c29, "IconFlame");
__turbopack_context__.k.register(_c30, "IconSettings");
__turbopack_context__.k.register(_c31, "IconBanknote");
__turbopack_context__.k.register(_c32, "IconLoader");
__turbopack_context__.k.register(_c33, "IconChevronRight");
__turbopack_context__.k.register(_c34, "GCoinsLogo");
__turbopack_context__.k.register(_c35, "TxIcon");
__turbopack_context__.k.register(_c36, "GoalIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navigation/BottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
'use client';
;
;
function BottomNav({ activeScreen, onSelectScreen, theme }) {
    const navItems = [
        {
            id: 'home',
            label: 'Home',
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconHome"]
        },
        {
            id: 'transactions',
            label: 'Activity',
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconActivity"]
        },
        {
            id: 'goals',
            label: 'Goals',
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTarget"]
        },
        {
            id: 'settings',
            label: 'Profile',
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSettings"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 grid grid-cols-4",
        style: {
            background: theme === 'dark' ? '#2B2B2B' : '#FFFFFF',
            borderTop: `1px solid ${theme === 'dark' ? '#3A3A3A' : '#E5E7EB'}`,
            paddingBottom: '20px'
        },
        children: navItems.map(({ id, label, Icon })=>{
            const active = activeScreen === id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onSelectScreen(id),
                className: "flex flex-col items-center gap-1 pt-3 pb-1 transition-all",
                style: {
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 20,
                        color: active ? '#F5C000' : '#9CA3AF'
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/BottomNav.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium",
                        style: {
                            color: active ? '#F5C000' : '#9CA3AF'
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/BottomNav.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this),
                    active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-1 rounded-full",
                        style: {
                            background: '#F5C000'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation/BottomNav.tsx",
                        lineNumber: 46,
                        columnNumber: 24
                    }, this)
                ]
            }, id, true, {
                fileName: "[project]/src/components/navigation/BottomNav.tsx",
                lineNumber: 35,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/navigation/BottomNav.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/BottomSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomSheet",
    ()=>BottomSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
'use client';
;
;
function BottomSheet({ open, onClose, title, children, opaqueBackdrop = false, fullHeight = false }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col justify-end z-50 overflow-hidden",
        style: {
            background: opaqueBackdrop ? '#F3F4F6' : 'rgba(0,0,0,0.45)'
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-full min-w-0 rounded-t-3xl p-5 flex flex-col gap-4 overflow-y-auto overflow-x-hidden",
            style: {
                background: '#FFFFFF',
                maxHeight: fullHeight ? '100%' : '88%',
                height: fullHeight ? '100%' : undefined,
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
                    fileName: "[project]/src/components/ui/BottomSheet.tsx",
                    lineNumber: 38,
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
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/BottomSheet.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-label": `Close ${title}`,
                            onClick: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                onClose();
                            },
                            style: {
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 8,
                                position: 'relative',
                                zIndex: 2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"], {
                                size: 18,
                                color: "#6B7280"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/BottomSheet.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/BottomSheet.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/BottomSheet.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/BottomSheet.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/BottomSheet.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = BottomSheet;
var _c;
__turbopack_context__.k.register(_c, "BottomSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/PinEntry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinEntry",
    ()=>PinEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PinEntry({ amount, actionLabel, pin, expectedPin, onPinChange, onBack, onAuthorise, processing = false, destination, failedAttempts = 0, lockedUntil = null, lockoutMinutes = 5, incorrectPinMessage = 'Incorrect GCoins PIN. Please try again.', onFailedAttempt }) {
    _s();
    const ready = pin.length === 4;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shakeCount, setShakeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const locked = lockedUntil !== null && lockedUntil > Date.now();
    function authorise() {
        if (pin === expectedPin) {
            onAuthorise();
            return;
        }
        setError(true);
        setShakeCount((count)=>count + 1);
        onFailedAttempt?.();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full flex items-center justify-center",
                        style: {
                            background: '#FFF3CC'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconShield"], {
                            size: 21,
                            color: "#C99A00"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/PinEntry.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PinEntry.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold",
                        style: {
                            color: '#1F2937'
                        },
                        children: "Enter your transaction PIN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PinEntry.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-center",
                        style: {
                            color: '#6B7280'
                        },
                        children: [
                            "Authorise ",
                            actionLabel.toLowerCase(),
                            " of GH₵ ",
                            amount.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/PinEntry.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PinEntry.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            destination && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl px-3 py-2.5 flex items-center justify-between",
                style: {
                    background: '#F9FAFB',
                    border: '1px solid #E5E7EB'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs",
                        style: {
                            color: '#6B7280'
                        },
                        children: "To"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PinEntry.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold",
                        style: {
                            color: '#1F2937'
                        },
                        children: destination
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PinEntry.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PinEntry.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "password",
                inputMode: "numeric",
                autoComplete: "one-time-code",
                maxLength: 4,
                "aria-label": "4-digit transaction PIN",
                placeholder: "••••",
                value: pin,
                onChange: (e)=>{
                    if (!locked) {
                        setError(false);
                        onPinChange(e.target.value.replace(/\D/g, '').slice(0, 4));
                    }
                },
                disabled: locked,
                className: "w-full rounded-xl px-4 py-3 text-2xl font-bold outline-none text-center tracking-[0.5em]",
                style: {
                    background: '#F9FAFB',
                    border: `2px solid ${error || locked ? '#EF4444' : '#F5C000'}`,
                    color: '#1F2937',
                    animation: error ? 'pinShake 0.35s ease' : 'none'
                }
            }, shakeCount, false, {
                fileName: "[project]/src/components/ui/PinEntry.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-center",
                style: {
                    color: error || locked ? '#EF4444' : '#9CA3AF'
                },
                children: locked ? `Too many attempts — try again in ${lockoutMinutes} minutes.` : error ? incorrectPinMessage : failedAttempts > 0 ? `${Math.max(0, 3 - failedAttempts)} attempts remaining` : 'Enter your 4-digit GCoins transaction PIN.'
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PinEntry.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex-1 py-3 rounded-xl text-sm font-semibold",
                        style: {
                            background: '#F3F4F6',
                            color: '#6B7280'
                        },
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PinEntry.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: authorise,
                        disabled: !ready || processing || locked,
                        className: "flex-1 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5",
                        style: {
                            background: ready && !processing && !locked ? '#1F2937' : '#E5E7EB',
                            color: ready && !processing && !locked ? '#F5C000' : '#9CA3AF'
                        },
                        children: processing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLoader"], {
                                    size: 13,
                                    color: "#9CA3AF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/PinEntry.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                " Authorising…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/PinEntry.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this) : 'Authorise'
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PinEntry.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/PinEntry.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PinEntry.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(PinEntry, "DbMUTV+TwJs5sOw/CR/dVJRl+FU=");
_c = PinEntry;
var _c;
__turbopack_context__.k.register(_c, "PinEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@22._38f51c1ec9c45764fb014710a7c7b5de/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Toggle({ on, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        "aria-pressed": on,
        className: "relative flex-shrink-0 rounded-full transition-all duration-300 focus:outline-none",
        style: {
            width: 52,
            height: 28,
            background: on ? '#F5C000' : '#D1D5DB',
            boxShadow: on ? '0 0 0 3px rgba(245,192,0,0.20)' : 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$22$2e$_38f51c1ec9c45764fb014710a7c7b5de$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute rounded-full bg-white transition-all duration-300",
            style: {
                top: 3,
                left: on ? 'calc(100% - 25px)' : 3,
                width: 22,
                height: 22,
                boxShadow: '0 1px 4px rgba(0,0,0,0.22)',
                transform: on ? 'scale(1.05)' : 'scale(1)'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toggle.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toggle.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Toggle;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_components_1ye0ydl56y0l5._.js.map
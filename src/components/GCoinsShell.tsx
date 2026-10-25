'use client'

import React from 'react'
import { useGCoins } from '@/context/GCoinsContext'
import { GCoinsLogo, IconBattery, IconBell, IconSignal, IconWifi } from '@/components/icons'
import { RoundUpSetupSheet } from '@/components/sheets/RoundUpSetupSheet'
import { NotificationsSheet } from '@/components/sheets/NotificationsSheet'
import { ProfileSheet } from '@/components/sheets/ProfileSheet'
import { RepayAdvanceSheet } from '@/components/sheets/RepayAdvanceSheet'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { BottomNav } from '@/components/navigation/BottomNav'
import { HomeScreen } from '@/components/screens/HomeScreen'
import { TransactionsScreen } from '@/components/screens/TransactionsScreen'
import { GoalsScreen } from '@/components/screens/GoalsScreen'
import { SettingsScreen } from '@/components/screens/SettingsScreen'
import { GcbApp } from '@/components/screens/GcbApp'

export function GCoinsShell() {
  const {
    appMode,
    setAppMode,
    gcbTheme,
    setGcbTheme,
    screen,
    setScreen,
    roundUpOn,
    setRoundUpPaused,
    roundUpPaused,
    vaultBalance,
    monthlyTotal,
    monthlyRecords,
    weeklyRoundUps,
    streakDays,
    loyaltyPoints,
    freezeEnabled,
    setFreezeEnabled,
    freezeUsed,
    claimedVouchers,
    transactionPin,
    setTransactionPin,
    advanceBorrowed,
    advanceTotal,
    advanceOutstanding,
    advanceActive,
    advanceCleared,
    advanceRepaymentPace,
    advanceTopUp,
    advanceDueAt,
    balanceSafeguard,
    setBalanceSafeguard,
    roundUpMultiple,
    setRoundUpMultiple,
    showSetup,
    setShowSetup,
    mainAccountBalance,
    reminderFrequency,
    setReminderFrequency,
    goals,
    setGoals,
    transactions,
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
  } = useGCoins()

  const gcoinsModule = (
    <>
      {/* Setup sheet */}
      <RoundUpSetupSheet open={showSetup} onSave={handleSetupSave} onCancel={() => setShowSetup(false)} />

      {/* Status bar */}
      <div className="gcoins-header flex items-center justify-between px-6 pt-4 pb-2 flex-shrink-0" style={{ background: '#1F2937' }}>
        <span className="text-xs font-semibold text-white">9:41</span>
        <div className="w-24 h-6 rounded-full" style={{ background: '#1F2937', border: '2px solid #374151' }} />
        <div className="flex gap-2 items-center">
          <IconSignal size={13} color="white" />
          <IconWifi size={13} color="white" />
          <IconBattery size={16} color="white" />
        </div>
      </div>

      {/* Header */}
      <div className="gcoins-header flex items-center justify-between px-5 py-3 flex-shrink-0" style={{ background: '#1F2937' }}>
        <div>
          <p className="text-xs font-medium" style={{ color: '#9CA3AF' }}>Good morning,</p>
          <GCoinsLogo size={22} />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setShowProfile(false)
              setShowNotifs(true)
            }}
            className="relative w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: '#374151', border: 'none', cursor: 'pointer' }}
          >
            <IconBell size={15} color="white" />
            {notifications.some(notification => !notification.read) && (
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full" style={{ background: '#F5C000' }} />
            )}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowNotifs(false)
              setShowProfile(true)
            }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ background: '#F5C000', color: '#1F2937', border: 'none', cursor: 'pointer' }}
          >
            KA
          </button>
        </div>
      </div>

      {/* Global sheets */}
      <NotificationsSheet open={showNotifs} onClose={() => setShowNotifs(false)} notifications={notifications} onChange={setNotifications} />
      <ProfileSheet
        open={showProfile}
        onClose={() => setShowProfile(false)}
        onNavigateSettings={() => setScreen('settings')}
        pinCode={transactionPin}
        onPinChange={setTransactionPin}
        onLogout={() => setShowLogout(true)}
      />
      <RepayAdvanceSheet
        key={`repay-${showRepayAdvance}-${advancePaymentMode}`}
        open={showRepayAdvance}
        mode={advancePaymentMode}
        onClose={() => setShowRepayAdvance(false)}
        onReturnHome={() => {
          setShowRepayAdvance(false)
          setScreen('home')
        }}
        onAddMoney={() => {
          setShowRepayAdvance(false)
          setAppMode('gcbHome')
        }}
        outstanding={advanceOutstanding}
        mainBalance={mainAccountBalance}
        balanceSafeguard={balanceSafeguard}
        advanceTopUp={advanceTopUp}
        pinCode={transactionPin}
        onRepay={handleRepayAdvance}
      />
      <BottomSheet open={showLogout} onClose={() => setShowLogout(false)} title="Log Out">
        <p className="text-sm" style={{ color: '#374151' }}>
          Are you sure you want to log out of GCoins and return to the GCB app?
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowLogout(false)}
            className="flex-1 py-3 rounded-xl text-sm font-semibold"
            style={{ background: '#F3F4F6', color: '#6B7280' }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              setShowProfile(false)
              setShowNotifs(false)
              setShowLogout(false)
              setScreen('home')
              setAppMode('gcbHome')
            }}
            className="flex-1 py-3 rounded-xl text-sm font-semibold"
            style={{ background: '#EF4444', color: '#FFFFFF' }}
          >
            Log Out
          </button>
        </div>
      </BottomSheet>

      {/* Screen content */}
      <div className="flex-1 overflow-y-auto relative" style={{ visibility: showProfile ? 'hidden' : 'visible' }}>
        {screen === 'home' && (
          <HomeScreen
            roundUpOn={roundUpOn}
            roundUpPaused={roundUpPaused}
            vaultBalance={vaultBalance}
            mainAccountBalance={mainAccountBalance}
            roundUpMultiple={roundUpMultiple}
            monthlyTotal={monthlyTotal}
            weeklyRoundUps={weeklyRoundUps}
            streakDays={streakDays}
            reminderFrequency={reminderFrequency}
            pinCode={transactionPin}
            loyaltyPoints={loyaltyPoints}
            freezeEnabled={freezeEnabled}
            freezeUsed={freezeUsed}
            claimedVouchers={claimedVouchers}
            advanceBorrowed={advanceBorrowed}
            advanceTotal={advanceTotal}
            advanceOutstanding={advanceOutstanding}
            advanceActive={advanceActive}
            advanceCleared={advanceCleared}
            advanceEligible={streakDays >= 7 && monthlyTotal >= 10}
            advanceDueAt={advanceDueAt}
            advanceRepaymentPace={advanceRepaymentPace}
            advanceTopUp={advanceTopUp}
            balanceSafeguard={balanceSafeguard}
            transactions={transactions}
            onEnableRequest={handleEnableRequest}
            onPause={() => setRoundUpPaused(true)}
            onResume={() => setRoundUpPaused(false)}
            onEnd={handleEnd}
            onAdd={handleVaultAddition}
            onWithdraw={handleVaultWithdrawal}
            onBorrow={handleBorrow}
            onOpenRepay={mode => {
              setAdvancePaymentMode(mode)
              setShowRepayAdvance(true)
            }}
            onReminderChange={setReminderFrequency}
            onToggleFreeze={() => !freezeUsed && setFreezeEnabled(enabled => !enabled)}
            onRedeemPoints={handleRedeemPointsForAdvance}
            onRedeemReward={handleRewardRedemption}
            onMarkVoucherUsed={handleMarkVoucherUsed}
            onGoToGoals={() => setScreen('goals')}
          />
        )}
        {screen === 'transactions' && <TransactionsScreen records={monthlyRecords} transactions={transactions} />}
        {screen === 'goals' && (
          <GoalsScreen
            goals={goals}
            vaultBalance={vaultBalance}
            pinCode={transactionPin}
            onCreateGoal={goal => setGoals(current => [goal, ...current])}
            onUpdateGoal={updated => setGoals(current => current.map(goal => (goal.id === updated.id ? updated : goal)))}
            onDeleteGoal={handleDeleteGoal}
            onAllocate={handleGoalAllocation}
            onWithdrawGoal={handleGoalWithdrawal}
            onClearCompleted={handleClearCompletedGoals}
          />
        )}
        {screen === 'settings' && (
          <SettingsScreen
            roundUpOn={roundUpOn}
            threshold={balanceSafeguard}
            roundUpMultiple={roundUpMultiple}
            reminderFrequency={reminderFrequency}
            theme={gcbTheme}
            onThresholdChange={setBalanceSafeguard}
            onRoundUpMultipleChange={setRoundUpMultiple}
            onReminderChange={setReminderFrequency}
            onThemeChange={setGcbTheme}
            onEnableRequest={handleEnableRequest}
            onEnd={handleEnd}
            onLogout={() => setShowLogout(true)}
          />
        )}
      </div>

      {/* Bottom navigation */}
      <BottomNav
        activeScreen={screen}
        onSelectScreen={id => {
          setShowNotifs(false)
          setShowProfile(false)
          setScreen(id)
        }}
        theme={gcbTheme}
      />
    </>
  )

  return (
    <GcbApp
      mode={appMode}
      pinCode={transactionPin}
      theme={gcbTheme}
      mainAccountBalance={mainAccountBalance}
      transactions={transactions}
      gcoinsModule={gcoinsModule}
      onThemeChange={setGcbTheme}
      onModeChange={setAppMode}
      onEnterGCoins={() => {
        setAppMode('gcoins')
        setScreen('home')
      }}
      onCompleteTransaction={handleCompletedTransaction}
      roundUpOn={roundUpOn}
      roundUpPaused={roundUpPaused}
      roundUpTarget={roundUpMultiple}
      advanceActive={advanceActive}
      advanceTopUp={advanceTopUp}
    />
  )
}

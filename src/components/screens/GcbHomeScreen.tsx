'use client'

import React, { useState } from 'react'
import type {
  AppMode,
  Beneficiary,
  GcbTheme,
  GcbTransaction,
  LedgerTransaction,
  RoundUpResult,
} from '@/types'
import {
  IconActivity,
  IconArrowDown,
  IconBanknote,
  IconBell,
  IconBriefcase,
  IconCheck,
  IconChevronRight,
  IconCoffee,
  IconCoin,
  IconEye,
  IconEyeOff,
  IconHome,
  IconMonitor,
  IconPlus,
  IconPower,
  IconSettings,
  IconShield,
  IconSmartphone,
  IconTag,
  IconTarget,
  IconUser,
  IconZap,
} from '@/components/icons'
import { TransactionHistoryList } from '@/components/screens/TransactionHistoryList'

export function GcbHomeScreen({
  mode,
  pinCode,
  theme,
  mainAccountBalance,
  transactions,
  gcoinsModule,
  onThemeChange,
  onModeChange,
  onEnterGCoins,
  onCompleteTransaction,
  roundUpOn,
  roundUpPaused,
  roundUpTarget,
  advanceActive,
  advanceTopUp: advanceTopUpProp,
}: {
  mode: AppMode
  pinCode: string
  theme: GcbTheme
  mainAccountBalance: number
  transactions: LedgerTransaction[]
  gcoinsModule: React.ReactNode
  onThemeChange: (theme: GcbTheme) => void
  onModeChange: (mode: AppMode) => void
  onEnterGCoins: () => void
  onCompleteTransaction: (transaction: GcbTransaction) => RoundUpResult
  roundUpOn: boolean
  roundUpPaused: boolean
  roundUpTarget: number
  advanceActive: boolean
  advanceTopUp: number
}) {
  const [pin, setPin] = useState('')
  const [pinError, setPinError] = useState(false)
  const [transferStep, setTransferStep] = useState<'details' | 'confirm' | 'success'>('details')
  const [transferAmount, setTransferAmount] = useState('0.00')
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<Beneficiary | null>(null)
  const [beneficiaryPickerOpen, setBeneficiaryPickerOpen] = useState(false)
  const [beneficiaryQuery, setBeneficiaryQuery] = useState('')
  const [roundUpResult, setRoundUpResult] = useState<RoundUpResult | null>(null)
  const [mainBalanceVisible, setMainBalanceVisible] = useState(false)
  const dark = theme === 'dark'
  const pageBg = dark ? '#111111' : '#F8F8F8'
  const surface = dark ? '#2B2B2B' : '#FFFFFF'
  const text = dark ? '#FFFFFF' : '#171717'
  const muted = dark ? '#8B8B8B' : '#737373'
  const headerBg = dark ? '#111111' : '#50616C'

  const services = [
    ['Group Transfer', IconArrowDown],
    ['Investments', IconCoin],
    ['Lifestyle', IconCoffee],
    ['Loans and Advances', IconBanknote],
    ['Locate Us', IconTarget],
    ['Manage Beneficiaries', IconUser],
    ['Mobile Money', IconSmartphone],
    ['GCoins', IconCoin],
    ['Pay Bills', IconZap],
    ['Prepaid Card Top up', IconBriefcase],
    ['Proxy Pay', IconMonitor],
    ['Scan and Pay', IconTarget],
    ['Settings', IconSettings],
    ['Standing Order', IconActivity],
    ['Statements', IconTag],
    ['Term Deposit', IconShield],
    ['Transfers', IconArrowDown],
    ['Virtual Cards', IconBanknote],
  ] as const

  const beneficiaries: Beneficiary[] = [
    { id: 'alex', name: 'Alex Kyeremeh Kwarteng', network: 'MTN Mobile Money', account: '0244472055' },
    { id: 'ama', name: 'Ama Serwaa Mensah', network: 'Telecel Cash', account: '0207854196' },
    { id: 'kwesi', name: 'Kwesi Boateng', network: 'AT Money', account: '0273361842' },
  ]

  const normalizedBeneficiaryQuery = beneficiaryQuery.trim().toLowerCase()
  const filteredBeneficiaries = beneficiaries.filter(beneficiary =>
    `${beneficiary.name} ${beneficiary.network} ${beneficiary.account}`.toLowerCase().includes(normalizedBeneficiaryQuery),
  )
  const transferAmountNumber = Number(transferAmount) || 0
  const canContinueTransfer = transferAmountNumber > 0 && selectedBeneficiary !== null

  function openGCoins() {
    setPin('')
    setPinError(false)
    onModeChange('gcoinsLogin')
  }

  function authorise() {
    if (pin !== pinCode) {
      setPinError(true)
      return
    }
    setPin('')
    setPinError(false)
    onEnterGCoins()
  }

  function openMobileMoney() {
    setTransferStep('details')
    setTransferAmount('0.00')
    setSelectedBeneficiary(null)
    setBeneficiaryPickerOpen(false)
    setBeneficiaryQuery('')
    setRoundUpResult(null)
    onModeChange('gcbMobileMoney')
  }

  function updateTransferAmount(value: string) {
    const sanitized = value.replace(/[^\d.]/g, '')
    const [whole = '', ...decimalParts] = sanitized.split('.')
    const decimal = decimalParts.join('').slice(0, 2)
    setTransferAmount(decimalParts.length > 0 ? `${whole}.${decimal}` : whole)
  }

  function selectBeneficiary(beneficiary: Beneficiary) {
    setSelectedBeneficiary(beneficiary)
    setBeneficiaryPickerOpen(false)
    setBeneficiaryQuery('')
  }

  function completeTransfer() {
    if (transferStep !== 'confirm' || !selectedBeneficiary || transferAmountNumber <= 0) return
    const principalAmount = transferAmountNumber
    const feeAmount = 0.5
    const transaction: GcbTransaction = {
      id: `MOMO-${Date.now()}`,
      merchant: selectedBeneficiary.name.toUpperCase(),
      principalAmount,
      feeAmount,
      totalDebit: +(principalAmount + feeAmount).toFixed(2),
    }
    setRoundUpResult(onCompleteTransaction(transaction))
    setTransferStep('success')
  }

  function handleTransferBack() {
    setRoundUpResult(null)
    if (transferStep === 'confirm') {
      setTransferStep('details')
      return
    }
    setTransferStep('details')
    onModeChange('gcbHome')
  }

  return (
    <div className="web-app min-h-screen w-full" style={{ background: dark ? '#111111' : '#D7DADD' }}>
      <div
        className={`app-shell relative flex flex-col w-full min-h-dvh ${
          mode === 'gcoins' ? (dark ? 'gcoins-dark' : 'gcoins-light') : ''
        }`}
        style={{
          background: pageBg,
          color: text,
        }}
      >
        {mode === 'gcoins' ? (
          gcoinsModule
        ) : (
          <>
            {mode === 'gcoinsLogin' ? (
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 px-5 py-4" style={{ background: headerBg, color: '#FFFFFF' }}>
                  <button
                    onClick={() => onModeChange('gcbHome')}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'transparent', border: 'none', transform: 'rotate(180deg)' }}
                  >
                    <IconChevronRight size={24} color="#FFFFFF" />
                  </button>
                  <p className="text-lg font-semibold">Open GCoins</p>
                </div>
                <div className="w-full max-w-lg mx-auto flex-1 flex flex-col justify-center px-6 py-12">
                  <div className="flex flex-col items-center gap-3 mb-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#F5C000' }}>
                      <IconCoin size={31} color="#1F2937" />
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold" style={{ fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
                        <span style={{ color: text }}>G</span>
                        <span style={{ color: '#F5C000' }}>Coins</span>
                      </p>
                      <p className="text-xs mt-1" style={{ color: muted }}>
                        Enter your GCoins PIN to continue
                      </p>
                    </div>
                  </div>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    autoFocus
                    value={pin}
                    onChange={e => {
                      setPinError(false)
                      setPin(e.target.value.replace(/\D/g, '').slice(0, 4))
                    }}
                    placeholder="••••"
                    className="w-full rounded-2xl px-4 py-4 text-2xl font-bold text-center tracking-[0.6em] outline-none"
                    style={{ background: surface, border: `2px solid ${pinError ? '#EF4444' : '#F5C000'}`, color: text }}
                  />
                  <p className="text-xs text-center mt-3" style={{ color: pinError ? '#EF4444' : '#737373' }}>
                    {pinError ? 'Incorrect GCoins PIN. Please try again.' : `Prototype PIN: ${pinCode}`}
                  </p>
                  <button
                    onClick={authorise}
                    disabled={pin.length !== 4}
                    className="w-full mt-5 py-3.5 rounded-xl text-sm font-semibold"
                    style={{
                      background: pin.length === 4 ? '#F5C000' : '#3F3F46',
                      color: pin.length === 4 ? '#1F2937' : '#737373',
                    }}
                  >
                    Open GCoins
                  </button>
                  <button
                    onClick={() => onModeChange('gcbHome')}
                    className="w-full mt-2 py-3 rounded-xl text-sm font-semibold"
                    style={{ background: 'transparent', color: muted, border: 'none' }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : mode === 'gcbMobileMoney' ? (
              <div className="flex-1 flex flex-col overflow-hidden" style={{ background: pageBg }}>
                <div className="flex items-center gap-4 px-5 py-4 flex-shrink-0" style={{ background: headerBg, color: '#FFFFFF' }}>
                  <button
                    onClick={handleTransferBack}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'transparent', border: 'none', transform: 'rotate(180deg)' }}
                  >
                    <IconChevronRight size={24} color="#FFFFFF" />
                  </button>
                  <p className="text-lg font-semibold">
                    {transferStep === 'success' ? 'Transaction Complete' : transferStep === 'confirm' ? 'Confirmation' : 'Mobile Money to Others'}
                  </p>
                </div>

                {transferStep === 'details' ? (
                  <div className="flex-1 overflow-y-auto p-5">
                    <p className="text-xs font-semibold mb-2" style={{ color: muted }}>FROM ACCOUNT</p>
                    <div className="rounded-2xl p-4 mb-5" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                      <p className="text-sm font-semibold">Standard Savings ••• 4521</p>
                      <p className="text-xs mt-1" style={{ color: muted }}>
                        Available balance · GHS {mainAccountBalance.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-xs font-semibold mb-2" style={{ color: muted }}>BENEFICIARY</p>
                    <button
                      type="button"
                      aria-expanded={beneficiaryPickerOpen}
                      onClick={() => setBeneficiaryPickerOpen(open => !open)}
                      className="w-full rounded-2xl p-4 mb-3 flex items-center gap-3 text-left"
                      style={{
                        background: surface,
                        color: text,
                        border: `1px solid ${beneficiaryPickerOpen ? '#F5C000' : dark ? '#3A3A3A' : '#E5E7EB'}`,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: selectedBeneficiary ? '#455563' : dark ? '#3A3A3A' : '#EEF1F3' }}
                      >
                        <IconSmartphone size={18} color={selectedBeneficiary ? '#FFFFFF' : muted} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold">{selectedBeneficiary?.name ?? 'Select a beneficiary'}</p>
                        <p className="text-xs truncate" style={{ color: muted }}>
                          {selectedBeneficiary ? `${selectedBeneficiary.network} · ${selectedBeneficiary.account}` : 'Search saved people or enter someone new'}
                        </p>
                      </div>
                      <IconChevronRight size={17} color={muted} />
                    </button>
                    {beneficiaryPickerOpen && (
                      <div className="rounded-2xl p-3 mb-5" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                        <label
                          className="rounded-xl px-3 py-2.5 flex items-center gap-2"
                          style={{ background: dark ? '#1C1C1C' : '#F5F6F7', border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}
                        >
                          <IconTarget size={16} color={muted} />
                          <input
                            autoFocus
                            value={beneficiaryQuery}
                            onChange={event => setBeneficiaryQuery(event.target.value)}
                            placeholder="Search name or enter mobile number"
                            className="w-full bg-transparent outline-none text-sm"
                            style={{ color: text }}
                          />
                        </label>
                        <div className="mt-2">
                          {filteredBeneficiaries.map(beneficiary => (
                            <button
                              key={beneficiary.id}
                              type="button"
                              onClick={() => selectBeneficiary(beneficiary)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl text-left"
                              style={{ background: 'transparent', color: text }}
                            >
                              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#455563' }}>
                                <IconUser size={15} color="#FFFFFF" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-medium truncate">{beneficiary.name}</p>
                                <p className="text-xs" style={{ color: muted }}>{beneficiary.network} · {beneficiary.account}</p>
                              </div>
                            </button>
                          ))}
                          {beneficiaryQuery.trim() && (
                            <button
                              type="button"
                              onClick={() =>
                                selectBeneficiary({
                                  id: `new-${Date.now()}`,
                                  name: beneficiaryQuery.trim(),
                                  network: 'New beneficiary',
                                  account: 'Details to be verified',
                                })
                              }
                              className="w-full flex items-center gap-3 p-3 rounded-xl text-left"
                              style={{ background: dark ? '#403A20' : '#FFF8D8', color: text, border: '1px solid #F5C000' }}
                            >
                              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F5C000' }}>
                                <IconPlus size={15} color="#1F2937" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Use “{beneficiaryQuery.trim()}”</p>
                                <p className="text-xs" style={{ color: muted }}>Continue with a new beneficiary</p>
                              </div>
                            </button>
                          )}
                          {!beneficiaryQuery.trim() && (
                            <p className="px-3 pt-2 pb-1 text-xs" style={{ color: muted }}>
                              Choose a saved beneficiary or type to add a new one.
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    <label className="text-xs font-semibold" style={{ color: muted }}>AMOUNT</label>
                    <div className="mt-2 rounded-2xl px-4 py-5 flex items-center gap-3" style={{ background: surface, border: '2px solid #50616C' }}>
                      <span className="text-sm" style={{ color: muted }}>GHS</span>
                      <input
                        type="text"
                        inputMode="decimal"
                        aria-label="Transfer amount"
                        value={transferAmount}
                        onFocus={event => event.currentTarget.select()}
                        onChange={event => updateTransferAmount(event.target.value)}
                        onBlur={() => setTransferAmount(transferAmountNumber.toFixed(2))}
                        className="flex-1 min-w-0 bg-transparent outline-none text-2xl font-semibold"
                        style={{ color: text }}
                      />
                    </div>
                    <div
                      className="rounded-2xl p-4 mt-4"
                      style={{ background: dark ? '#1C1C1C' : '#EEF1F3', border: `1px solid ${dark ? '#333333' : '#E1E5E8'}` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold" style={{ color: muted }}>LIVE TRANSACTION PREVIEW</p>
                        <span className="text-xs" style={{ color: '#C99A00' }}>Updates as you type</span>
                      </div>
                      <div className="flex justify-between gap-4 text-sm">
                        <span style={{ color: muted }}>To</span>
                        <span className="font-medium text-right truncate">{selectedBeneficiary?.name ?? 'No beneficiary selected'}</span>
                      </div>
                      <div className="flex justify-between gap-4 text-sm mt-2">
                        <span style={{ color: muted }}>Amount</span>
                        <span className="font-semibold">GHS {transferAmountNumber.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      disabled={!canContinueTransfer}
                      onClick={() => setTransferStep('confirm')}
                      className="w-full mt-6 py-3.5 rounded-xl text-sm font-semibold"
                      style={{ background: canContinueTransfer ? '#50616C' : '#3F3F46', color: canContinueTransfer ? '#FFFFFF' : '#8B8B8B' }}
                    >
                      Continue
                    </button>
                  </div>
                ) : transferStep === 'confirm' ? (
                  <div className="flex-1 overflow-y-auto p-5">
                    <div className="rounded-2xl p-4" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                      <p className="text-xs mb-3" style={{ color: muted }}>Beneficiary details</p>
                      <p className="text-sm font-semibold">{selectedBeneficiary?.name}</p>
                      <p className="text-xs" style={{ color: muted }}>
                        {selectedBeneficiary?.network} · {selectedBeneficiary?.account}
                      </p>
                    </div>
                    <div className="rounded-2xl p-4 mt-4 flex flex-col gap-3" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: muted }}>Amount</span>
                        <span>GHS {Number(transferAmount).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: muted }}>Transfer fee</span>
                        <span>GHS 0.50</span>
                      </div>
                      <div className="h-px" style={{ background: dark ? '#3A3A3A' : '#E5E7EB' }} />
                      <div className="flex justify-between font-semibold">
                        <span>Total you pay</span>
                        <span>GHS {(Number(transferAmount) + 0.5).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: muted }}>Paid from</span>
                        <span>GCB ••• 4521</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: muted }}>Current GCB balance</span>
                        <span>GHS {mainAccountBalance.toFixed(2)}</span>
                      </div>
                    </div>
                    <div
                      className="rounded-2xl p-4 mt-4 flex items-start gap-3"
                      style={{ background: dark ? '#403A20' : '#FFF8D8', border: '1px solid #F5C000' }}
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F5C000' }}>
                        <IconCoin size={18} color="#1F2937" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">GCoins is active</p>
                        <p className="text-xs mt-1" style={{ color: muted }}>
                          {roundUpOn && !roundUpPaused
                            ? `Spare change will be rounded up to the nearest GH₵ ${roundUpTarget} and moved to your Vault.`
                            : 'GCoins round-up is currently paused or disabled.'}
                        </p>
                        <p className="text-xs mt-1 font-medium" style={{ color: '#C99A00' }}>Target: nearest GH₵ {roundUpTarget}</p>
                        {advanceActive && (
                          <p className="text-xs mt-2 leading-snug" style={{ color: muted }}>
                            Advance repayment of GHS {advanceTopUpProp.toFixed(2)} will also be taken after this transfer.
                          </p>
                        )}
                      </div>
                    </div>
                    <button onClick={completeTransfer} className="w-full mt-6 py-3.5 rounded-xl text-sm font-semibold" style={{ background: '#50616C', color: '#FFFFFF' }}>
                      Confirm Transfer
                    </button>
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
                    <div className="rounded-3xl p-6 text-center" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                      <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ background: '#3F9C35' }}>
                        <IconCheck size={38} color="#FFFFFF" />
                      </div>
                      <p className="text-xl font-bold mt-5">Transaction Successful</p>
                      <p className="text-sm mt-2" style={{ color: muted }}>
                        Your transfer of GHS {transferAmountNumber.toFixed(2)} to {selectedBeneficiary?.name} was successful.
                      </p>
                    </div>

                    <div className="rounded-2xl p-4" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold" style={{ color: muted }}>REMAINING GCB MAIN BALANCE</p>
                        <p className="text-base font-bold">GHS {roundUpResult?.newMainAccountBalance.toFixed(2)}</p>
                      </div>
                      <div className="h-px mb-3" style={{ background: dark ? '#3A3A3A' : '#E5E7EB' }} />
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-sm">
                          <span style={{ color: muted }}>Transfer + fee</span>
                          <span className="font-medium">−GHS {roundUpResult?.debit.toFixed(2)}</span>
                        </div>
                        {(roundUpResult?.amount ?? 0) > 0 && (
                          <div className="flex justify-between text-sm">
                            <span style={{ color: muted }}>GCoins round-up (to Vault)</span>
                            <span className="font-medium" style={{ color: '#C99A00' }}>−GHS {roundUpResult!.amount.toFixed(2)}</span>
                          </div>
                        )}
                        {(roundUpResult?.advanceRepay ?? 0) > 0 && (
                          <div className="flex justify-between text-sm">
                            <div>
                              <span style={{ color: muted }}>Advance repayment</span>
                              <span className="text-xs ml-1" style={{ color: '#9CA3AF' }}>· GHS {roundUpResult!.advanceOutstandingLeft.toFixed(2)} left</span>
                            </div>
                            <span className="font-medium" style={{ color: '#6B7280' }}>−GHS {roundUpResult!.advanceRepay.toFixed(2)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {(roundUpResult?.amount ?? 0) > 0 ? (
                      <div
                        className="rounded-2xl p-4 flex items-center gap-3"
                        style={{ background: dark ? '#403A20' : '#FFF8D8', border: '1px solid #F5C000' }}
                      >
                        <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F5C000' }}>
                          <IconCoin size={22} color="#1F2937" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold">GCoins round-up saved</p>
                          <p className="text-xs mt-0.5" style={{ color: muted }}>GH₵ {roundUpResult!.amount.toFixed(2)} added to your Vault</p>
                          <p className="text-xs mt-1 font-semibold" style={{ color: '#C99A00' }}>
                            New balance · GH₵ {roundUpResult!.newVaultBalance.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl p-4" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                        <p className="text-sm font-semibold">No GCoins round-up</p>
                        <p className="text-xs mt-1" style={{ color: muted }}>
                          {roundUpResult?.reason === 'whole-amount'
                            ? 'No GCoins round-up. Your balance after this payment was already a whole-cedi amount.'
                            : roundUpResult?.reason === 'disabled' || roundUpResult?.reason === 'paused'
                            ? 'GCoins round-up is off.'
                            : 'Your round-up settings or account safeguard prevented this deposit.'}
                        </p>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setTransferStep('details')
                        setRoundUpResult(null)
                        onModeChange('gcbHome')
                      }}
                      className="w-full mt-auto py-3.5 rounded-xl text-sm font-semibold"
                      style={{ background: '#50616C', color: '#FFFFFF' }}
                    >
                      Go Home
                    </button>
                  </div>
                )}
              </div>
            ) : mode === 'gcbProfile' ? (
              <div className="flex-1 overflow-y-auto pb-8" style={{ background: pageBg }}>
                <div className="relative h-44 px-5 pt-5" style={{ background: headerBg }}>
                  <button
                    onClick={() => onModeChange('gcbHome')}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'transparent', border: 'none', transform: 'rotate(180deg)' }}
                  >
                    <IconChevronRight size={25} color="#FFFFFF" />
                  </button>
                  <div
                    className="absolute left-1/2 bottom-0 w-28 h-28 rounded-full flex items-center justify-center"
                    style={{ transform: 'translate(-50%, 50%)', background: '#F5D76E', border: `3px solid ${pageBg}` }}
                  >
                    <IconUser size={52} color="#45545D" />
                    <div
                      className="absolute bottom-1 right-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: '#45545D', color: '#F5C000', border: `2px solid ${pageBg}` }}
                    >
                      <IconPlus size={11} color="#F5C000" />
                    </div>
                  </div>
                </div>
                <div className="pt-16 text-center px-5 pb-4" style={{ borderBottom: `1px solid ${dark ? '#333333' : '#D9D9D9'}` }}>
                  <p className="text-lg font-semibold">Kwame Asante</p>
                  <p className="text-xs mt-1" style={{ color: muted }}>Last login date · 06-10-2026 08:47 AM</p>
                </div>
                <div className="px-5">
              {[
                { label: 'Settings', sub: 'Manage your profile settings', Icon: IconSettings, color: '#8BE0E8', action: () => onModeChange('gcbSettings') },
                { label: 'Manage Beneficiaries', sub: 'Manage transaction beneficiaries', Icon: IconUser, color: '#AFC2E2', action: undefined },
                { label: 'My Limits', sub: 'Control limits on your transactions', Icon: IconShield, color: '#F5A33B', action: undefined },
                { label: 'Profile Session Summary', sub: 'View the history of app usage', Icon: IconActivity, color: '#A9B0A5', action: undefined },
                { label: 'Referral and Reward', sub: 'Refer the app to loved ones and be rewarded', Icon: IconBriefcase, color: '#20A8C7', action: undefined },
              ].map(({ label, sub, Icon, color, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="w-full flex items-center gap-3 py-4 text-left"
                  style={{ background: 'transparent', border: 'none', borderBottom: `1px solid ${dark ? '#333333' : '#D9D9D9'}`, color: text }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: color }}>
                    <Icon size={16} color="#1F2937" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs" style={{ color: muted }}>{sub}</p>
                  </div>
                  <IconChevronRight size={16} color={muted} />
                </button>
              ))}
                  <button
                    onClick={() => onModeChange('gcbHome')}
                    className="w-full flex items-center gap-3 py-4 text-left"
                    style={{ background: 'transparent', border: 'none', borderBottom: `1px solid ${dark ? '#333333' : '#D9D9D9'}`, color: text }}
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#8BE0E8' }}>
                      <IconPower size={16} color="#1F2937" />
                    </div>
                    <span className="text-sm font-medium">Log out</span>
                  </button>
                </div>
                <p className="text-center text-sm mt-24">Version 2.15</p>
              </div>
            ) : mode === 'gcbSettings' ? (
              <div className="flex-1 overflow-y-auto" style={{ background: pageBg }}>
                <div className="flex items-center gap-4 px-5 py-4" style={{ background: headerBg, color: '#FFFFFF' }}>
                  <button
                    onClick={() => onModeChange('gcbProfile')}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'transparent', border: 'none', transform: 'rotate(180deg)' }}
                  >
                    <IconChevronRight size={24} color="#FFFFFF" />
                  </button>
                  <p className="text-lg font-semibold">Settings</p>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: muted }}>Appearance</p>
                  <div className="rounded-2xl p-4" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#8BE0E8' }}>
                        <IconMonitor size={18} color="#1F2937" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Themes</p>
                        <p className="text-xs" style={{ color: muted }}>Choose how the GCB app looks</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {(['light', 'dark'] as GcbTheme[]).map(option => (
                        <button
                          key={option}
                          onClick={() => onThemeChange(option)}
                          className="rounded-xl p-3 text-left"
                          style={{
                            background: option === 'light' ? '#F8F8F8' : '#171717',
                            color: option === 'light' ? '#171717' : '#FFFFFF',
                            border: theme === option ? '2px solid #F5C000' : '2px solid transparent',
                          }}
                        >
                          <div
                            className="h-12 rounded-lg mb-2"
                            style={{
                              background: option === 'light' ? 'linear-gradient(#50616C 45%, #FFFFFF 45%)' : 'linear-gradient(#111111 45%, #2B2B2B 45%)',
                            }}
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold capitalize">{option}</span>
                            {theme === option && <IconCheck size={13} color="#F5C000" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden mt-4" style={{ background: surface, border: `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` }}>
                    {['Login Preferences', 'Notifications', 'Privacy and Security'].map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center justify-between px-4 py-3.5"
                        style={{ borderBottom: i < 2 ? `1px solid ${dark ? '#3A3A3A' : '#E5E7EB'}` : 'none' }}
                      >
                        <span className="text-sm">{item}</span>
                        <IconChevronRight size={15} color={muted} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : mode === 'gcbQuickAccess' ? (
              <div className="flex-1 overflow-y-auto pb-8" style={{ background: pageBg }}>
                <div className="flex items-center gap-4 px-5 py-4" style={{ background: headerBg, color: '#FFFFFF' }}>
                  <button
                    onClick={() => onModeChange('gcbHome')}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'transparent', border: 'none', transform: 'rotate(180deg)' }}
                  >
                    <IconChevronRight size={24} color="#FFFFFF" />
                  </button>
                  <p className="text-lg font-semibold">Quick Access</p>
                </div>
                <div className="p-4">
                  <div
                    className="rounded-xl px-4 py-3 flex items-center gap-3 mb-3"
                    style={{ background: surface, color: muted, border: `1px solid ${dark ? '#333333' : '#E5E7EB'}` }}
                  >
                    <IconTarget size={19} color={muted} />
                    <span className="text-sm">Search Service</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map(([label, Icon], index) => (
                      <button
                        key={label}
                        onClick={label === 'GCoins' ? openGCoins : label === 'Mobile Money' ? openMobileMoney : undefined}
                        className="rounded-xl p-3 flex items-center gap-3 text-left"
                        style={{
                          background: label === 'GCoins' ? (dark ? '#403A20' : '#FFF8D8') : surface,
                          border: label === 'GCoins' ? '1px solid #F5C000' : `1px solid ${dark ? '#333333' : '#E5E7EB'}`,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: label === 'GCoins' ? '#F5C000' : index % 3 === 0 ? '#B9D7F5' : index % 3 === 1 ? '#F5B04D' : '#B8A9D9',
                          }}
                        >
                          <Icon size={15} color="#1F2937" />
                        </div>
                        <span className="text-xs font-medium" style={{ color: text }}>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto pb-8 relative" style={{ background: pageBg }}>
                <div className="absolute inset-x-0 top-0 h-56" style={{ background: headerBg }} />
                <div className="gcb-home-content px-5 pt-5 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onModeChange('gcbProfile')}
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: '#F5D76E', border: '1px solid #FFFFFF' }}
                      >
                        <IconUser size={22} color="#45545D" />
                      </button>
                      <div style={{ color: '#FFFFFF' }}>
                        <p className="text-sm">Welcome,</p>
                        <p className="text-lg font-semibold">Kwame Asante</p>
                        <p className="text-xs" style={{ color: '#D1D5DB' }}>Last login date 06-10-2026 08:47 AM</p>
                      </div>
                    </div>
                    <IconBell size={20} color="#FFFFFF" />
                  </div>

                  <div className="flex items-center justify-between mt-8 mb-3" style={{ color: '#FFFFFF' }}>
                    <p className="font-semibold">My Accounts</p>
                    <p className="text-sm underline">View Accounts</p>
                  </div>
                  <div
                    className="rounded-3xl p-5"
                    style={{ background: surface, color: text, boxShadow: dark ? 'none' : '0 8px 20px rgba(0,0,0,0.10)' }}
                  >
                    <div>
                      <p className="text-sm">Standard Savings</p>
                      <p className="text-xs mt-0.5" style={{ color: '#A3A3A3' }}>Account ••• 4521</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-5">
                      <p className="text-2xl" aria-live="polite" style={{ letterSpacing: mainBalanceVisible ? 'normal' : '0.12em' }}>
                        {mainBalanceVisible
                          ? `GHS ${mainAccountBalance.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                          : 'GHS ••••••'}
                      </p>
                      <button
                        type="button"
                        aria-label={mainBalanceVisible ? 'Hide account balance' : 'Show account balance'}
                        aria-pressed={mainBalanceVisible}
                        onClick={() => setMainBalanceVisible(visible => !visible)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                        style={{ background: dark ? '#3A3A3A' : '#F3F4F6', border: 'none' }}
                      >
                        {mainBalanceVisible ? <IconEye size={18} color={muted} /> : <IconEyeOff size={18} color={muted} />}
                      </button>
                    </div>
                    <div className="flex justify-center gap-12 mt-5">
                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center" style={{ background: '#455563' }}>
                          <IconArrowDown size={18} />
                        </div>
                        <p className="text-xs mt-1">Share Details</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center" style={{ background: '#455563' }}>
                          <IconActivity size={18} />
                        </div>
                        <p className="text-xs mt-1">Last 10</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-7 mb-4">
                    <p className="font-semibold">Quick Access</p>
                    <button onClick={() => onModeChange('gcbQuickAccess')} className="text-sm underline" style={{ background: 'none', border: 'none', color: '#38BDF8' }}>
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: 'Transfers', Icon: IconArrowDown, isGCoins: false },
                      { label: 'Pay Bills', Icon: IconZap, isGCoins: false },
                      { label: 'GCoins', Icon: IconCoin, isGCoins: true },
                      { label: 'Mobile Money', Icon: IconSmartphone, isGCoins: false },
                    ].map(({ label, Icon, isGCoins }) => (
                      <button
                        key={label}
                        onClick={isGCoins ? openGCoins : label === 'Mobile Money' ? openMobileMoney : undefined}
                        className="flex flex-col items-center gap-2"
                        style={{ background: 'transparent', border: 'none', color: text }}
                      >
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ background: isGCoins ? '#F5C000' : '#455563', border: isGCoins ? '2px solid #FFF3CC' : 'none' }}
                        >
                          <Icon size={21} color={isGCoins ? '#1F2937' : '#FFFFFF'} />
                        </div>
                        <span className="text-xs">{label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="font-semibold mb-3">Recent Activities</p>
                    <TransactionHistoryList transactions={transactions} limit={4} dark={dark} />
                  </div>
                </div>
              </div>
            )}

            {mode === 'gcbHome' && (
              <div className="app-nav grid grid-cols-5 px-4 py-3" style={{ background: surface, borderTop: `1px solid ${dark ? '#333333' : '#E5E7EB'}` }}>
                {['Home', 'Payments', 'Cards', 'Help', 'More'].map((item, i) => (
                  <div key={item} className="flex flex-col items-center gap-1">
                    <IconHome size={18} color={i === 0 ? text : muted} />
                    <span className="text-xs" style={{ color: i === 0 ? text : muted }}>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

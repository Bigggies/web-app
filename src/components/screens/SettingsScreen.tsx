'use client'

import React, { useState, useEffect, useRef } from 'react'
import type { GcbTheme, ReminderFrequency } from '@/types'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { Toggle } from '@/components/ui/Toggle'
import { ReminderSheet } from '@/components/sheets/ReminderSheet'
import {
  IconCheck,
  IconChevronRight,
  IconPower,
  IconShield,
  IconUser,
} from '@/components/icons'

export function SettingsScreen({
  roundUpOn,
  threshold,
  roundUpMultiple,
  reminderFrequency,
  theme,
  onThresholdChange,
  onRoundUpMultipleChange,
  onReminderChange,
  onThemeChange,
  onEnableRequest,
  onEnd,
  onLogout,
}: {
  roundUpOn: boolean
  threshold: number
  roundUpMultiple: number
  reminderFrequency: ReminderFrequency
  theme: GcbTheme
  onThresholdChange: (value: number) => void
  onRoundUpMultipleChange: (value: number) => void
  onReminderChange: (value: ReminderFrequency) => void
  onThemeChange: (theme: GcbTheme) => void
  onEnableRequest: () => void
  onEnd: () => void
  onLogout: () => void
}) {
  const [panel, setPanel] = useState<'reminder' | 'privacy' | 'statement' | 'consent' | 'theme' | null>(null)
  const [personalisedInsights, setPersonalisedInsights] = useState(true)
  const [usageAnalytics, setUsageAnalytics] = useState(false)
  const [historyCleared, setHistoryCleared] = useState(false)
  const [statementFrom, setStatementFrom] = useState('2026-09')
  const [statementTo, setStatementTo] = useState('2026-09')
  const [statementType, setStatementType] = useState<'Brief' | 'Detailed'>('Brief')
  const [statementRequested, setStatementRequested] = useState(false)
  const [thresholdInput, setThresholdInput] = useState(String(threshold))
  const settingsRootRef = useRef<HTMLDivElement>(null)
  const settingsScrollPosition = useRef(0)
  const panelWasOpen = useRef(false)

  useEffect(() => setThresholdInput(threshold > 0 ? String(threshold) : ''), [threshold])
  useEffect(() => {
    const scrollContainer = settingsRootRef.current?.parentElement
    if (!scrollContainer) return
    if (panel && !panelWasOpen.current) {
      settingsScrollPosition.current = scrollContainer.scrollTop
      scrollContainer.scrollTop = 0
    } else if (!panel && panelWasOpen.current) {
      scrollContainer.scrollTop = settingsScrollPosition.current
    }
    panelWasOpen.current = panel !== null
  }, [panel])

  return (
    <div ref={settingsRootRef} className="flex flex-col gap-4 pb-6 pt-4">
      <ReminderSheet open={panel === 'reminder'} onClose={() => setPanel(null)} frequency={reminderFrequency} onChange={onReminderChange} />
      <BottomSheet open={panel === 'theme'} onClose={() => setPanel(null)} title="Themes">
        <p className="text-xs" style={{ color: '#6B7280' }}>Choose how GCoins and the GCB app appear.</p>
        <div className="grid grid-cols-2 gap-3">
          {(['light', 'dark'] as GcbTheme[]).map(option => (
            <button
              key={option}
              onClick={() => onThemeChange(option)}
              className="rounded-xl p-3 text-left"
              style={{
                background: option === 'light' ? '#F8F8F8' : '#171717',
                color: option === 'light' ? '#171717' : '#FFFFFF',
                border: theme === option ? '2px solid #F5C000' : '2px solid #E5E7EB',
              }}
            >
              <div
                className="h-16 rounded-lg mb-2"
                style={{
                  background: option === 'light' ? 'linear-gradient(#50616C 35%, #FFFFFF 35%)' : 'linear-gradient(#111111 35%, #2B2B2B 35%)',
                }}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold capitalize">{option}</span>
                {theme === option && <IconCheck size={13} color="#F5C000" />}
              </div>
            </button>
          ))}
        </div>
      </BottomSheet>
      <BottomSheet open={panel === 'privacy'} onClose={() => setPanel(null)} title="Privacy & Data">
        <div className="rounded-xl p-4" style={{ background: '#F9FAFB' }}>
          <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>Your data, your control</p>
          <p className="text-xs mt-1 leading-relaxed" style={{ color: '#6B7280' }}>
            GCoins uses transaction amounts to calculate round-ups and savings insights. Your data is protected in line with Ghana's Data Protection Act, 2012 (Act 843).
          </p>
        </div>
        {['Round-up transaction history', 'Savings goals and progress', 'Reminder preferences'].map(item => (
          <div key={item} className="flex items-center gap-2 text-xs" style={{ color: '#374151' }}>
            <IconCheck size={12} color="#059669" />
            {item}
          </div>
        ))}
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
          <div className="flex items-center justify-between p-3" style={{ borderBottom: '1px solid #F3F4F6' }}>
            <div>
              <p className="text-sm font-medium" style={{ color: '#1F2937' }}>Personalised savings insights</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Use activity to tailor GCoins guidance</p>
            </div>
            <Toggle on={personalisedInsights} onToggle={() => setPersonalisedInsights(!personalisedInsights)} />
          </div>
          <div className="flex items-center justify-between p-3">
            <div>
              <p className="text-sm font-medium" style={{ color: '#1F2937' }}>Anonymous usage analytics</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Help improve the GCoins experience</p>
            </div>
            <Toggle on={usageAnalytics} onToggle={() => setUsageAnalytics(!usageAnalytics)} />
          </div>
        </div>
        <button
          onClick={() => setHistoryCleared(true)}
          className="w-full py-3 rounded-xl text-sm font-semibold"
          style={{ background: historyCleared ? '#D1FAE5' : '#F3F4F6', color: historyCleared ? '#059669' : '#6B7280' }}
        >
          {historyCleared ? 'Savings insight history cleared' : 'Clear Savings Insight History'}
        </button>
        <button onClick={() => setPanel('consent')} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#FFF3CC', color: '#C99A00' }}>
          Manage Consent & Authorization
        </button>
      </BottomSheet>
      <BottomSheet open={panel === 'statement'} onClose={() => { setPanel(null); setStatementRequested(false) }} title="Request GCoins Statement">
        {statementRequested ? (
          <div className="flex flex-col items-center py-6 gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#D1FAE5' }}>
              <IconCheck size={30} color="#059669" />
            </div>
            <p className="font-semibold" style={{ color: '#1F2937' }}>{statementType} statement requested</p>
            <p className="text-xs text-center" style={{ color: '#6B7280' }}>Your GCoins statement will be sent to your registered email address.</p>
            <button onClick={() => { setPanel(null); setStatementRequested(false) }} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#F5C000', color: '#1F2937' }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs" style={{ color: '#6B7280' }}>Choose a date range and how much detail to include in your statement.</p>
            <div className="w-full min-w-0 flex flex-col gap-3">
              <label className="block w-full min-w-0 text-xs font-medium" style={{ color: '#6B7280' }}>
                From
                <input
                  type="month"
                  value={statementFrom}
                  onChange={e => setStatementFrom(e.target.value)}
                  className="block w-full max-w-full min-w-0 mt-1 rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
                />
              </label>
              <label className="block w-full min-w-0 text-xs font-medium" style={{ color: '#6B7280' }}>
                To
                <input
                  type="month"
                  value={statementTo}
                  onChange={e => setStatementTo(e.target.value)}
                  className="block w-full max-w-full min-w-0 mt-1 rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
                />
              </label>
            </div>
            <div className="grid w-full min-w-0 grid-cols-2 gap-2">
              {[
                { type: 'Brief' as const, description: 'Monthly totals and balances' },
                { type: 'Detailed' as const, description: 'Every round-up and transaction' },
              ].map(option => (
                <button
                  key={option.type}
                  onClick={() => setStatementType(option.type)}
                  className="w-full min-w-0 rounded-xl p-3 text-left"
                  style={{
                    background: statementType === option.type ? '#FFF3CC' : '#F9FAFB',
                    border: statementType === option.type ? '2px solid #F5C000' : '1px solid #E5E7EB',
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>{option.type}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{option.description}</p>
                </button>
              ))}
            </div>
            {statementFrom > statementTo && <p className="text-xs" style={{ color: '#EF4444' }}>The start date must be before the end date.</p>}
            <button
              onClick={() => statementFrom <= statementTo && setStatementRequested(true)}
              className="w-full min-w-0 py-3 px-3 rounded-xl text-sm font-semibold whitespace-normal"
              style={{
                background: statementFrom <= statementTo ? '#1F2937' : '#E5E7EB',
                color: statementFrom <= statementTo ? '#F5C000' : '#9CA3AF',
              }}
            >
              Request {statementType} Statement
            </button>
          </>
        )}
      </BottomSheet>
      <BottomSheet open={panel === 'consent'} onClose={() => setPanel(null)} title="Consent & Authorization">
        <div className="rounded-xl p-4 flex gap-3" style={{ background: roundUpOn ? '#D1FAE5' : '#FEF2F2' }}>
          <IconShield size={18} color={roundUpOn ? '#059669' : '#EF4444'} />
          <div>
            <p className="text-sm font-semibold" style={{ color: roundUpOn ? '#059669' : '#EF4444' }}>
              {roundUpOn ? 'Round-up authorization active' : 'Authorization inactive'}
            </p>
            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>
              {roundUpOn
                ? 'You have authorized automatic spare-change debits into your GCoins Vault.'
                : 'Round-up debits are stopped. New authorization is required to restart.'}
            </p>
          </div>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
          You can withdraw consent at any time. Ending GCoins resets your round-up settings and monthly round-up total.
        </p>
        {roundUpOn ? (
          <button
            onClick={() => {
              onEnd()
              setPanel(null)
            }}
            className="w-full py-3 rounded-xl text-sm font-semibold"
            style={{ background: '#FEF2F2', color: '#EF4444', border: '1px solid #FECACA' }}
          >
            Withdraw Consent
          </button>
        ) : (
          <button
            onClick={() => {
              setPanel(null)
              onEnableRequest()
            }}
            className="w-full py-3 rounded-xl text-sm font-semibold"
            style={{ background: '#F5C000', color: '#1F2937' }}
          >
            Review & Authorize
          </button>
        )}
      </BottomSheet>

      <div className="mx-4 flex items-center gap-3">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#FFF3CC' }}>
          <IconUser size={28} color="#C99A00" />
        </div>
        <div>
          <p className="font-semibold" style={{ color: '#1F2937' }}>Kwame Asante</p>
          <p className="text-xs" style={{ color: '#6B7280' }}>GCB Account ••• 4521</p>
        </div>
      </div>
      <div className="mx-4 rounded-2xl overflow-hidden" style={{ background: '#FFFFFF' }}>
        <p className="px-4 pt-4 pb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#9CA3AF' }}>Round-Up Settings</p>
        <div className="px-4 pb-4 flex flex-col gap-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="round-up-multiple" className="text-sm font-medium" style={{ color: '#1F2937' }}>Round-up target</label>
              <span className="text-sm font-bold" style={{ color: '#F5C000' }}>GH₵ {roundUpMultiple}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 5, 10, 20].map(value => (
                <button
                  key={value}
                  type="button"
                  onClick={() => onRoundUpMultipleChange(value)}
                  className="py-2 rounded-xl text-xs font-semibold"
                  style={{
                    background: roundUpMultiple === value ? '#F5C000' : '#F9FAFB',
                    color: roundUpMultiple === value ? '#1F2937' : '#6B7280',
                    border: roundUpMultiple === value ? '1px solid #F5C000' : '1px solid #E5E7EB',
                  }}
                >
                  GH₵ {value}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 mt-2 rounded-xl px-3 py-2" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
              <span className="text-xs flex-1" style={{ color: '#6B7280' }}>Custom whole-cedi target</span>
              <span className="text-xs font-semibold" style={{ color: '#6B7280' }}>GH₵</span>
              <input
                id="round-up-multiple"
                type="number"
                inputMode="numeric"
                min={1}
                step={1}
                value={roundUpMultiple}
                onChange={event => onRoundUpMultipleChange(Math.max(1, Math.floor(Number(event.target.value) || 1)))}
                className="w-14 bg-transparent text-right text-sm font-bold outline-none"
                style={{ color: '#1F2937' }}
              />
            </label>
            <p className="text-xs mt-2 leading-relaxed" style={{ color: '#9CA3AF' }}>
              After each eligible transaction, your GCB main balance is rounded down to the nearest selected amount. The difference moves to your GCoins Vault.
            </p>
          </div>
          <div>
            <label htmlFor="balance-safeguard" className="text-sm font-medium" style={{ color: '#1F2937' }}>
              Balance safeguard <span className="font-normal text-xs" style={{ color: '#9CA3AF' }}>(optional)</span>
            </label>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: '#9CA3AF' }}>Round-ups pause whenever your balance would fall below this amount.</p>
            <div className="flex items-center gap-2 mt-2 rounded-xl px-3" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
              <span className="text-xs whitespace-nowrap" style={{ color: '#6B7280' }}>Keep at least GHS</span>
              <input
                id="balance-safeguard"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={thresholdInput}
                onChange={event => {
                  const value = event.target.value
                  setThresholdInput(value)
                  if (value === '') onThresholdChange(0)
                  else {
                    const amount = Number(value)
                    if (Number.isFinite(amount) && amount >= 0) onThresholdChange(amount)
                  }
                }}
                placeholder="0.00"
                className="w-full min-w-0 py-3 bg-transparent text-sm font-semibold outline-none text-center"
                style={{ color: '#1F2937' }}
              />
              <span className="text-xs whitespace-nowrap" style={{ color: '#6B7280' }}>in my account</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 rounded-2xl overflow-hidden" style={{ background: '#FFFFFF' }}>
        {[
          { label: 'GCoins Reminder', value: reminderFrequency === 'Off' ? 'Off' : reminderFrequency, action: () => setPanel('reminder') },
          { label: 'Themes', value: theme === 'dark' ? 'Dark' : 'Light', action: () => setPanel('theme') },
          { label: 'Privacy & Data', value: 'Ghana DPA compliant', action: () => setPanel('privacy') },
          { label: 'GCoins Statements', value: 'Request', action: () => setPanel('statement') },
        ].map(item => (
          <button
            key={item.label}
            onClick={item.action}
            className="w-full flex items-center justify-between px-4 py-3.5 text-left"
            style={{ border: 'none', borderBottom: '1px solid #F3F4F6', background: '#FFFFFF' }}
          >
            <span className="text-sm" style={{ color: '#1F2937' }}>{item.label}</span>
            <span className="text-xs font-medium flex items-center gap-1" style={{ color: '#6B7280' }}>
              {item.value}
              <IconChevronRight size={14} color="#D1D5DB" />
            </span>
          </button>
        ))}
        <button
          onClick={onEnd}
          className="w-full flex items-center justify-between px-4 py-3.5"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <span className="text-sm" style={{ color: '#EF4444' }}>End GCoins</span>
          <IconPower size={14} color="#EF4444" />
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-between px-4 py-3.5"
          style={{ background: '#FEF2F2', border: 'none', borderTop: '1px solid #FECACA' }}
        >
          <span className="text-sm font-semibold" style={{ color: '#EF4444' }}>Log Out</span>
          <IconChevronRight size={14} color="#EF4444" />
        </button>
      </div>
    </div>
  )
}

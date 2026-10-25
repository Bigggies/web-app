'use client'

import React, { useState } from 'react'
import type { LedgerTransaction, MonthlyRecord } from '@/types'
import { FULL_MONTHS } from '@/constants'
import { IconCoin } from '@/components/icons'
import { TransactionHistoryList } from '@/components/screens/TransactionHistoryList'

export function TransactionsScreen({
  records,
  transactions,
}: {
  records: MonthlyRecord[]
  transactions: LedgerTransaction[]
}) {
  const latestLabel = records[records.length - 1]?.label ?? 'September 2026'
  const [selectedMonth, setSelectedMonth] = useState(latestLabel.split(' ')[0])
  const [selectedYear, setSelectedYear] = useState(latestLabel.split(' ')[1])
  const selectedRecord = records.find(record => record.label === `${selectedMonth} ${selectedYear}`)
  const recordYears = Array.from(new Set(records.map(record => record.label.split(' ')[1])))

  return (
    <div className="flex flex-col gap-4 pb-6 pt-4">
      <div className="mx-4 rounded-2xl p-4" style={{ background: '#FFFFFF' }}>
        <p className="text-xs font-semibold mb-2" style={{ color: '#374151' }}>Choose record month</p>
        <div className="flex gap-2">
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="flex-1 rounded-xl px-3 py-2.5 text-sm outline-none"
            style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
          >
            {FULL_MONTHS.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="w-28 rounded-xl px-3 py-2.5 text-sm outline-none"
            style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
          >
            {recordYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mx-4 rounded-2xl p-4" style={{ background: '#FFF3CC' }}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs font-medium" style={{ color: '#C99A00' }}>
              Total Round-Ups · {selectedMonth} {selectedYear}
            </p>
            <p className="text-2xl font-bold mt-0.5" style={{ fontFamily: 'var(--font-display, "DM Serif Display", serif)', color: '#1F2937' }}>
              GH₵ {(selectedRecord?.amount ?? 0).toFixed(2)}
            </p>
            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>
              {selectedRecord
                ? selectedRecord.active
                  ? 'Current savings cycle'
                  : 'Closed cycle · kept for your records'
                : 'No round-up record for this month'}
            </p>
          </div>
          <IconCoin size={32} color="#C99A00" />
        </div>
      </div>
      <div className="mx-4">
        <h3 className="font-semibold text-sm mb-3" style={{ color: '#374151' }}>All Transactions</h3>
        <TransactionHistoryList transactions={transactions} />
      </div>
    </div>
  )
}

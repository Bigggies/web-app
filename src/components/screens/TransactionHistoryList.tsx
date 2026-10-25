'use client'

import React from 'react'
import type { LedgerTransaction } from '@/types'
import { TxIcon } from '@/components/icons'

export function TransactionHistoryList({
  transactions,
  limit,
  dark = false,
}: {
  transactions: LedgerTransaction[]
  limit?: number
  dark?: boolean
}) {
  const visibleTransactions = typeof limit === 'number' ? transactions.slice(0, limit) : transactions
  const surface = dark ? '#2B2B2B' : '#FFFFFF'
  const text = dark ? '#FFFFFF' : '#1F2937'
  const muted = dark ? '#A3A3A3' : '#9CA3AF'
  const divider = dark ? '#3A3A3A' : '#F3F4F6'

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: surface }}>
      {visibleTransactions.length > 0 ? (
        visibleTransactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="flex items-center gap-3 px-4 py-3"
            style={{
              borderBottom: index < visibleTransactions.length - 1 ? `1px solid ${divider}` : 'none',
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: dark ? '#3A3A3A' : '#F3F4F6' }}
            >
              <TxIcon category={transaction.category} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: text }}>
                {transaction.merchant}
              </p>
              <p className="text-xs" style={{ color: muted }}>
                {transaction.category} · {transaction.date}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm font-semibold" style={{ color: transaction.amount > 0 ? '#10B981' : text }}>
                {transaction.amount > 0 ? '+' : ''}GHS {Math.abs(transaction.amount).toFixed(2)}
              </p>
              {transaction.roundUp > 0 && (
                <p className="text-xs font-medium" style={{ color: '#F5C000' }}>
                  +GHS {transaction.roundUp.toFixed(2)} saved
                </p>
              )}
              {transaction.status === 'reversed' && (
                <p className="text-xs font-medium" style={{ color: '#EF4444' }}>
                  Reversed
                </p>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="p-5 text-center">
          <p className="text-xs" style={{ color: muted }}>No transactions yet.</p>
        </div>
      )}
    </div>
  )
}

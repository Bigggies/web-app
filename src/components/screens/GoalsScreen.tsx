'use client'

import React, { useState } from 'react'
import type { Goal } from '@/types'
import { MONTHS, YEARS } from '@/constants'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { PinEntry } from '@/components/ui/PinEntry'
import { GoalIcon, IconCheck, IconPlus, IconPower } from '@/components/icons'

export function GoalsScreen({
  goals,
  vaultBalance,
  pinCode,
  onCreateGoal,
  onUpdateGoal,
  onDeleteGoal,
  onAllocate,
  onWithdrawGoal,
  onClearCompleted,
}: {
  goals: Goal[]
  vaultBalance: number
  pinCode: string
  onCreateGoal: (goal: Goal) => void
  onUpdateGoal: (goal: Goal) => void
  onDeleteGoal: (goalId: number) => void
  onAllocate: (goalId: number, amount: number) => void
  onWithdrawGoal: (goalId: number) => void
  onClearCompleted: () => void
}) {
  const [showNew, setShowNew] = useState(false)
  const [goalName, setGoalName] = useState('')
  const [goalTarget, setGoalTarget] = useState('')
  const [goalMonth, setGoalMonth] = useState('')
  const [goalYear, setGoalYear] = useState('')
  const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null)
  const [allocation, setAllocation] = useState('')
  const [detailMode, setDetailMode] = useState<'details' | 'edit' | 'delete' | 'pin' | 'success'>('details')
  const [withdrawPin, setWithdrawPin] = useState('')
  const [withdrawing, setWithdrawing] = useState(false)
  const [editName, setEditName] = useState('')
  const [editTarget, setEditTarget] = useState('')
  const [editDeadline, setEditDeadline] = useState('')
  const selectedGoal = goals.find(goal => goal.id === selectedGoalId)
  const hasCompleted = goals.some(goal => goal.saved >= goal.target)

  function createGoal() {
    const target = Number(goalTarget)
    if (!goalName.trim() || target <= 0) return
    onCreateGoal({
      id: Date.now(),
      name: goalName.trim(),
      target,
      saved: 0,
      deadline: goalMonth && goalYear ? `${goalMonth} ${goalYear}` : 'No deadline',
      color: '#F5C000',
    })
    setGoalName('')
    setGoalTarget('')
    setGoalMonth('')
    setGoalYear('')
    setShowNew(false)
  }

  function allocate() {
    if (!selectedGoal) return
    const remaining = selectedGoal.target - selectedGoal.saved
    const amount = Math.min(Number(allocation), vaultBalance, remaining)
    if (amount <= 0) return
    onAllocate(selectedGoal.id, amount)
    setAllocation('')
  }

  function closeGoalDetails() {
    setSelectedGoalId(null)
    setAllocation('')
    setDetailMode('details')
    setWithdrawPin('')
    setWithdrawing(false)
  }

  function withdrawCompletedGoal() {
    if (!selectedGoal || withdrawPin.length !== 4) return
    setWithdrawing(true)
    setTimeout(() => {
      onWithdrawGoal(selectedGoal.id)
      setWithdrawing(false)
      setDetailMode('success')
      setWithdrawPin('')
    }, 1000)
  }

  function startEditing(goal: Goal) {
    setEditName(goal.name)
    setEditTarget(String(goal.target))
    setEditDeadline(goal.deadline)
    setDetailMode('edit')
  }

  function saveGoalEdits() {
    if (!selectedGoal || !editName.trim() || Number(editTarget) < selectedGoal.saved) return
    onUpdateGoal({
      ...selectedGoal,
      name: editName.trim(),
      target: Number(editTarget),
      deadline: editDeadline.trim() || 'No deadline',
    })
    setDetailMode('details')
  }

  return (
    <div className="flex flex-col gap-4 pb-6 pt-4">
      <BottomSheet
        open={Boolean(selectedGoal)}
        onClose={closeGoalDetails}
        title={detailMode === 'pin' ? 'Authorise Goal Withdrawal' : 'Goal Details'}
      >
        {selectedGoal &&
          (() => {
            const pct = Math.min((selectedGoal.saved / selectedGoal.target) * 100, 100)
            const done = pct >= 100

            if (detailMode === 'pin') {
              return (
                <PinEntry
                  amount={selectedGoal.saved}
                  actionLabel="Goal withdrawal"
                  pin={withdrawPin}
                  expectedPin={pinCode}
                  onPinChange={setWithdrawPin}
                  onBack={() => setDetailMode('details')}
                  onAuthorise={withdrawCompletedGoal}
                  processing={withdrawing}
                />
              )
            }

            if (detailMode === 'success') {
              return (
                <div className="flex flex-col items-center py-6 gap-3">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#D1FAE5' }}>
                    <IconCheck size={30} color="#059669" />
                  </div>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>Funds sent to your GCB account</p>
                  <p className="text-xs text-center" style={{ color: '#6B7280' }}>
                    GH₵ {selectedGoal.saved.toFixed(2)} from {selectedGoal.name} was withdrawn to GCB Account ••• 4521.
                  </p>
                  <button onClick={closeGoalDetails} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#F5C000', color: '#1F2937' }}>
                    Done
                  </button>
                </div>
              )
            }

            if (detailMode === 'edit') {
              const invalidTarget = Number(editTarget) < selectedGoal.saved || Number(editTarget) <= 0
              return (
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-medium" style={{ color: '#6B7280' }}>
                    Goal name
                    <input
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                      className="w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none"
                      style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
                    />
                  </label>
                  <label className="text-xs font-medium" style={{ color: '#6B7280' }}>
                    Target amount
                    <input
                      type="number"
                      min={selectedGoal.saved}
                      value={editTarget}
                      onChange={e => setEditTarget(e.target.value)}
                      className="w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none"
                      style={{ background: '#F9FAFB', border: `1px solid ${invalidTarget ? '#FECACA' : '#E5E7EB'}`, color: '#1F2937' }}
                    />
                  </label>
                  <label className="text-xs font-medium" style={{ color: '#6B7280' }}>
                    Target date
                    <input
                      value={editDeadline}
                      onChange={e => setEditDeadline(e.target.value)}
                      placeholder="e.g. Dec 2027"
                      className="w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none"
                      style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
                    />
                  </label>
                  {invalidTarget && <p className="text-xs" style={{ color: '#EF4444' }}>Target cannot be lower than the amount already saved.</p>}
                  <div className="flex gap-2">
                    <button onClick={() => setDetailMode('details')} className="flex-1 py-3 rounded-xl text-sm font-semibold" style={{ background: '#F3F4F6', color: '#6B7280' }}>
                      Cancel
                    </button>
                    <button
                      onClick={saveGoalEdits}
                      className="flex-1 py-3 rounded-xl text-sm font-semibold"
                      style={{
                        background: invalidTarget || !editName.trim() ? '#E5E7EB' : '#F5C000',
                        color: invalidTarget || !editName.trim() ? '#9CA3AF' : '#1F2937',
                      }}
                    >
                      Save Goal
                    </button>
                  </div>
                </div>
              )
            }

            if (detailMode === 'delete') {
              return (
                <div className="flex flex-col items-center py-4 gap-3">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#FEF2F2' }}>
                    <IconPower size={23} color="#EF4444" />
                  </div>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>Delete {selectedGoal.name}?</p>
                  <p className="text-xs text-center" style={{ color: '#6B7280' }}>
                    {selectedGoal.withdrawn
                      ? 'This removes the completed goal from your list.'
                      : 'This removes the goal from your list. Funds already allocated to it will return to your GCoins Vault.'}
                  </p>
                  <div className="flex gap-2 w-full">
                    <button onClick={() => setDetailMode('details')} className="flex-1 py-3 rounded-xl text-sm font-semibold" style={{ background: '#F3F4F6', color: '#6B7280' }}>
                      Keep Goal
                    </button>
                    <button onClick={() => onDeleteGoal(selectedGoal.id)} className="flex-1 py-3 rounded-xl text-sm font-semibold" style={{ background: '#EF4444', color: '#FFFFFF' }}>
                      Delete Goal
                    </button>
                  </div>
                </div>
              )
            }

            return (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: done ? '#D1FAE5' : '#FFF3CC' }}>
                    <GoalIcon name={selectedGoal.name} done={done} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#1F2937' }}>{selectedGoal.name}</p>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>Target date: {selectedGoal.deadline}</p>
                  </div>
                </div>
                <div className="rounded-xl p-4" style={{ background: '#F9FAFB' }}>
                  <div className="flex justify-between text-sm mb-2">
                    <span style={{ color: '#6B7280' }}>Saved</span>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>GH₵ {selectedGoal.saved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-3">
                    <span style={{ color: '#6B7280' }}>Target</span>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>GH₵ {selectedGoal.target.toLocaleString()}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: '#E5E7EB' }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: done ? '#10B981' : '#F5C000' }} />
                  </div>
                  <p className="text-xs mt-2 text-right" style={{ color: done ? '#059669' : '#6B7280' }}>
                    {pct.toFixed(0)}% complete
                  </p>
                </div>
                {!done && (
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-xs font-semibold" style={{ color: '#374151' }}>Allocate from Vault</p>
                      <p className="text-xs" style={{ color: '#9CA3AF' }}>Available: GH₵ {vaultBalance.toFixed(2)}</p>
                    </div>
                    <input
                      type="number"
                      min="0"
                      max={Math.min(vaultBalance, selectedGoal.target - selectedGoal.saved)}
                      placeholder="Amount in GH₵"
                      value={allocation}
                      onChange={e => setAllocation(e.target.value)}
                      className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                      style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
                    />
                    <button
                      onClick={allocate}
                      className="w-full py-3 rounded-xl text-sm font-semibold"
                      style={{
                        background: Number(allocation) > 0 ? '#F5C000' : '#E5E7EB',
                        color: Number(allocation) > 0 ? '#1F2937' : '#9CA3AF',
                      }}
                    >
                      Allocate Funds
                    </button>
                  </div>
                )}
                {done && !selectedGoal.withdrawn && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                      Your goal is complete. Withdraw the full saved amount directly to your linked GCB main account.
                    </p>
                    <button onClick={() => setDetailMode('pin')} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#1F2937', color: '#F5C000' }}>
                      Withdraw to GCB Account
                    </button>
                  </div>
                )}
                {selectedGoal.withdrawn && (
                  <div className="rounded-xl p-3 flex items-center gap-2" style={{ background: '#D1FAE5', color: '#059669' }}>
                    <IconCheck size={14} color="#059669" />
                    <span className="text-xs font-semibold">Funds withdrawn to GCB Account ••• 4521</span>
                  </div>
                )}
                <div className="flex gap-2 pt-1">
                  <button onClick={() => startEditing(selectedGoal)} className="flex-1 py-2.5 rounded-xl text-xs font-semibold" style={{ background: '#F3F4F6', color: '#374151' }}>
                    Edit Goal
                  </button>
                  <button onClick={() => setDetailMode('delete')} className="flex-1 py-2.5 rounded-xl text-xs font-semibold" style={{ background: '#FEF2F2', color: '#EF4444' }}>
                    Delete Goal
                  </button>
                </div>
              </>
            )
          })()}
      </BottomSheet>

      <div className="mx-4 flex items-center justify-between">
        <h3 className="font-semibold text-sm" style={{ color: '#374151' }}>Savings Goals</h3>
        <div className="flex gap-2">
          {hasCompleted && (
            <button onClick={onClearCompleted} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: '#F3F4F6', color: '#6B7280' }}>
              Clear completed
            </button>
          )}
          <button
            onClick={() => setShowNew(!showNew)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1"
            style={{ background: '#F5C000', color: '#1F2937' }}
          >
            <IconPlus size={12} color="#1F2937" /> New Goal
          </button>
        </div>
      </div>

      {showNew && (
        <div className="mx-4 rounded-2xl p-4" style={{ background: '#FFFFFF', border: '2px solid #F5C000' }}>
          <p className="text-sm font-semibold mb-3" style={{ color: '#1F2937' }}>Create New Goal</p>
          <div className="flex flex-col gap-2 mb-3">
            <input
              placeholder="Goal name (e.g. New Car)"
              value={goalName}
              onChange={e => setGoalName(e.target.value)}
              className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
              style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
            />
            <input
              placeholder="Target amount (GHS)"
              type="number"
              value={goalTarget}
              onChange={e => setGoalTarget(e.target.value)}
              className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
              style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
            />
            <div>
              <p className="text-xs mb-1.5" style={{ color: '#9CA3AF' }}>Target date (optional)</p>
              <div className="flex gap-2">
                <select
                  value={goalMonth}
                  onChange={e => setGoalMonth(e.target.value)}
                  className="flex-1 rounded-xl px-2 py-2.5 text-xs outline-none min-w-0"
                  style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: goalMonth ? '#1F2937' : '#9CA3AF' }}
                >
                  <option value="">Month</option>
                  {MONTHS.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select
                  value={goalYear}
                  onChange={e => setGoalYear(e.target.value)}
                  className="flex-1 rounded-xl px-2 py-2.5 text-xs outline-none min-w-0"
                  style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: goalYear ? '#1F2937' : '#9CA3AF' }}
                >
                  <option value="">Year</option>
                  {YEARS.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button
            className="w-full py-2.5 rounded-xl text-sm font-semibold"
            style={{
              background: goalName.trim() && Number(goalTarget) > 0 ? '#F5C000' : '#E5E7EB',
              color: goalName.trim() && Number(goalTarget) > 0 ? '#1F2937' : '#9CA3AF',
            }}
            onClick={createGoal}
          >
            Create Goal
          </button>
        </div>
      )}

      {goals.map(goal => {
        const pct = Math.min((goal.saved / goal.target) * 100, 100)
        const done = pct >= 100
        return (
          <button
            key={goal.id}
            onClick={() => setSelectedGoalId(goal.id)}
            className="mx-4 rounded-2xl p-4 text-left"
            style={{ background: '#FFFFFF', border: 'none' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: done ? '#D1FAE5' : '#F3F4F6' }}>
                <GoalIcon name={goal.name} done={done} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm" style={{ color: '#1F2937' }}>{goal.name}</p>
                  {done && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1" style={{ background: '#D1FAE5', color: '#059669' }}>
                      <IconCheck size={10} color="#059669" /> {goal.withdrawn ? 'Withdrawn' : 'Completed'}
                    </span>
                  )}
                </div>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>By {goal.deadline}</p>
              </div>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span style={{ color: '#6B7280' }}>GH₵ {goal.saved.toLocaleString()}</span>
              <span className="font-semibold" style={{ color: '#1F2937' }}>GH₵ {goal.target.toLocaleString()}</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F3F4F6' }}>
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: done ? '#10B981' : goal.color }} />
            </div>
            <p className="text-xs mt-1.5 text-right font-medium" style={{ color: done ? '#059669' : '#6B7280' }}>
              {pct.toFixed(0)}% reached
            </p>
          </button>
        )
      })}
      {goals.length === 0 && (
        <div className="mx-4 rounded-2xl p-8 text-center" style={{ background: '#FFFFFF' }}>
          <p className="text-sm font-semibold" style={{ color: '#374151' }}>No active goals</p>
          <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>Create a goal and allocate funds from your Vault.</p>
        </div>
      )}
    </div>
  )
}

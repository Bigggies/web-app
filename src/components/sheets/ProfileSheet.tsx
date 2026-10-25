'use client'

import React, { useState } from 'react'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { Toggle } from '@/components/ui/Toggle'
import { IconUser, IconChevronRight, IconPower } from '@/components/icons'

export function ProfileSheet({
  open,
  onClose,
  onNavigateSettings,
  pinCode,
  onPinChange,
  onLogout,
}: {
  open: boolean
  onClose: () => void
  onNavigateSettings: () => void
  pinCode: string
  onPinChange: (pin: string) => void
  onLogout: () => void
}) {
  const [view, setView] = useState<'menu' | 'edit' | 'security' | 'changePin' | 'accounts'>('menu')
  const [name, setName] = useState('Kwame Asante')
  const [email, setEmail] = useState('kwame.asante@example.com')
  const [phone, setPhone] = useState('+233 24 555 0123')
  const [biometrics, setBiometrics] = useState(true)
  const [accountLinked, setAccountLinked] = useState(true)
  const [currentPin, setCurrentPin] = useState('')
  const [newPin, setNewPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [pinMessage, setPinMessage] = useState('')

  function close() {
    setView('menu')
    setCurrentPin('')
    setNewPin('')
    setConfirmPin('')
    setPinMessage('')
    onClose()
  }

  return (
    <BottomSheet
      open={open}
      onClose={close}
      opaqueBackdrop
      fullHeight
      title={
        view === 'menu'
          ? 'My Profile'
          : view === 'edit'
          ? 'Edit Profile'
          : view === 'security'
          ? 'Security'
          : view === 'changePin'
          ? 'Change GCoins PIN'
          : 'Linked Accounts'
      }
    >
      {view === 'menu' ? (
        <>
          <div className="flex items-center gap-4 pb-2">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#FFF3CC' }}>
              <IconUser size={28} color="#C99A00" />
            </div>
            <div>
              <p className="font-bold" style={{ color: '#1F2937', fontFamily: 'var(--font-display, "DM Serif Display", serif)' }}>
                {name}
              </p>
              <p className="text-xs" style={{ color: '#6B7280' }}>GCB Account ••• 4521</p>
              <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>Member since Jan 2023</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #F3F4F6' }}>
            {[
              {
                label: 'Linked Accounts',
                sub: accountLinked ? 'GCB Account ••• 4521' : 'No linked account',
                action: () => setView('accounts'),
              },
              {
                label: 'Settings',
                sub: 'Round-ups, preferences',
                action: () => {
                  close()
                  onNavigateSettings()
                },
              },
            ].map((item, i, arr) => (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                style={{
                  border: 'none',
                  borderBottom: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none',
                  background: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                <div>
                  <p className="text-sm font-medium" style={{ color: '#1F2937' }}>{item.label}</p>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{item.sub}</p>
                </div>
                <IconChevronRight size={16} color="#D1D5DB" />
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              close()
              onLogout()
            }}
            className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            style={{ background: '#FEF2F2', color: '#EF4444', border: '1px solid #FECACA' }}
          >
            <IconPower size={14} color="#EF4444" /> Log Out
          </button>
        </>
      ) : view === 'edit' ? (
        <div className="flex flex-col gap-3">
          {[
            ['Full name', name, setName],
            ['Email', email, setEmail],
            ['Phone', phone, setPhone],
          ].map(([label, value, setter]) => (
            <label key={label as string} className="text-xs font-medium" style={{ color: '#6B7280' }}>
              {label as string}
              <input
                value={value as string}
                onChange={e => (setter as React.Dispatch<React.SetStateAction<string>>)(e.target.value)}
                className="w-full mt-1 rounded-xl px-3 py-2.5 text-sm outline-none"
                style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
              />
            </label>
          ))}
          <button onClick={() => setView('menu')} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#F5C000', color: '#1F2937' }}>
            Save Changes
          </button>
        </div>
      ) : view === 'security' ? (
        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-between rounded-xl p-4 text-left" style={{ background: '#F9FAFB' }} onClick={() => setView('changePin')}>
            <div>
              <p className="text-sm font-medium" style={{ color: '#1F2937' }}>Change GCoins PIN</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Last changed 3 months ago</p>
            </div>
            <IconChevronRight color="#9CA3AF" />
          </button>
          <div className="flex items-center justify-between rounded-xl p-4" style={{ background: '#F9FAFB' }}>
            <div>
              <p className="text-sm font-medium" style={{ color: '#1F2937' }}>Biometric login</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>Use fingerprint or face ID</p>
            </div>
            <Toggle on={biometrics} onToggle={() => setBiometrics(!biometrics)} />
          </div>
          <button onClick={() => setView('menu')} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#F5C000', color: '#1F2937' }}>
            Done
          </button>
        </div>
      ) : view === 'changePin' ? (
        <div className="flex flex-col gap-3">
          <p className="text-xs rounded-xl p-3" style={{ background: '#FFF3CC', color: '#6B7280' }}>
            For this prototype, your starting GCoins PIN is 1234. Future transactions will use the new PIN after you update it.
          </p>
          {[
            { label: 'Current PIN', value: currentPin, setter: setCurrentPin },
            { label: 'New 4-digit PIN', value: newPin, setter: setNewPin },
            { label: 'Confirm new PIN', value: confirmPin, setter: setConfirmPin },
          ].map(field => (
            <label key={field.label} className="text-xs font-medium" style={{ color: '#6B7280' }}>
              {field.label}
              <input
                type="password"
                inputMode="numeric"
                maxLength={4}
                value={field.value}
                onChange={e => {
                  setPinMessage('')
                  field.setter(e.target.value.replace(/\D/g, '').slice(0, 4))
                }}
                className="w-full mt-1 rounded-xl px-3 py-2.5 text-lg text-center tracking-[0.4em] outline-none"
                style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1F2937' }}
              />
            </label>
          ))}
          {pinMessage && (
            <p className="text-xs text-center" style={{ color: pinMessage === 'PIN changed successfully.' ? '#059669' : '#EF4444' }}>
              {pinMessage}
            </p>
          )}
          <button
            onClick={() => {
              if (currentPin !== pinCode) return setPinMessage('Current PIN is incorrect.')
              if (newPin.length !== 4) return setPinMessage('New PIN must contain 4 digits.')
              if (newPin !== confirmPin) return setPinMessage('New PINs do not match.')
              onPinChange(newPin)
              setCurrentPin('')
              setNewPin('')
              setConfirmPin('')
              setPinMessage('PIN changed successfully.')
            }}
            className="w-full py-3 rounded-xl text-sm font-semibold"
            style={{ background: '#1F2937', color: '#F5C000' }}
          >
            Update PIN
          </button>
          <button onClick={() => setView('security')} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#F3F4F6', color: '#6B7280' }}>
            Back to Security
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="rounded-xl p-4 flex items-center justify-between" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>GCB Current Account</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>•••• 4521 · Primary</p>
            </div>
            <span className="text-xs font-semibold" style={{ color: accountLinked ? '#059669' : '#EF4444' }}>
              {accountLinked ? 'Linked' : 'Unlinked'}
            </span>
          </div>
          <button
            onClick={() => setAccountLinked(!accountLinked)}
            className="w-full py-3 rounded-xl text-sm font-semibold"
            style={{ background: accountLinked ? '#FEF2F2' : '#F5C000', color: accountLinked ? '#EF4444' : '#1F2937' }}
          >
            {accountLinked ? 'Unlink Account' : 'Link Account'}
          </button>
          <button onClick={() => setView('menu')} className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: '#F3F4F6', color: '#6B7280' }}>
            Back to Profile
          </button>
        </div>
      )}
    </BottomSheet>
  )
}

'use client'

import React from 'react'
import type { NotificationItem } from '@/types'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { IconBell, IconBot } from '@/components/icons'

export function NotificationsSheet({
  open,
  onClose,
  notifications,
  onChange,
}: {
  open: boolean
  onClose: () => void
  notifications: NotificationItem[]
  onChange: (notifications: NotificationItem[]) => void
}) {
  const unread = notifications.filter(n => !n.read).length
  return (
    <BottomSheet open={open} onClose={onClose} title="Notifications">
      {notifications.length > 0 ? (
        <>
          <div className="flex items-center justify-between">
            <p className="text-xs" style={{ color: '#6B7280' }}>{unread} unread</p>
            <div className="flex gap-2">
              {unread > 0 && (
                <button
                  onClick={() => onChange(notifications.map(n => ({ ...n, read: true })))}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: '#FFF3CC', color: '#C99A00' }}
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={() => onChange([])}
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: '#F3F4F6', color: '#6B7280' }}
              >
                Clear all
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-0 rounded-2xl overflow-y-auto" style={{ border: '1px solid #F3F4F6', maxHeight: 520 }}>
            {notifications.map((n, i) => (
              <button
                key={n.id}
                onClick={() => onChange(notifications.map(item => (item.id === n.id ? { ...item, read: true } : item)))}
                className="flex gap-3 px-4 py-3 text-left w-full"
                style={{
                  border: 'none',
                  borderBottom: i < notifications.length - 1 ? '1px solid #F3F4F6' : 'none',
                  background: n.read ? '#FFFFFF' : '#FFFCF0',
                }}
              >
                {n.title === 'GCoins Reminder' ? (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FFF3CC' }}>
                    <IconBot size={15} color="#C99A00" />
                  </div>
                ) : (
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: n.read ? '#D1D5DB' : n.dot }} />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold" style={{ color: '#1F2937' }}>{n.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{n.body}</p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>{n.time}{!n.read && ' · Tap to mark read'}</p>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center py-8 gap-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#F3F4F6' }}>
            <IconBell size={20} color="#9CA3AF" />
          </div>
          <p className="text-sm font-semibold" style={{ color: '#374151' }}>You're all caught up</p>
          <p className="text-xs" style={{ color: '#9CA3AF' }}>New GCoins updates will appear here.</p>
        </div>
      )}
    </BottomSheet>
  )
}

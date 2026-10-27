import type { Metadata, Viewport } from 'next'
import { Outfit, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { GCoinsProvider } from '@/context/GCoinsContext'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GCoins · Smart Spare Change Savings by GCB',
  description: 'Automated spare-change round-ups, savings goals, and micro-advances integrated with your GCB Bank account.',
  keywords: ['GCB Bank', 'GCoins', 'Savings', 'Micro-investing', 'Ghana', 'Fintech'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F2937',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSerifDisplay.variable}`}>
      <body className="antialiased">
        <GCoinsProvider>{children}</GCoinsProvider>
      </body>
    </html>
  )
}

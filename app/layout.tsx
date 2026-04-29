import type { Metadata } from 'next'
import { Bebas_Neue, Instrument_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SHARPEST — AI Agents That Actually Work.',
  description: 'We automate the work your team hates doing. No long onboarding. No vague deliverables. Results in 30 days.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'SHARPEST — No Fluff. Just Results.',
    description: 'AI automation agency based in Prague. AI agents for businesses that hate wasted time.',
    siteName: 'SHARPEST',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${instrumentSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-white text-black font-body">{children}</body>
    </html>
  )
}

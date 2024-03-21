import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/panes/footer'
import Header from './components/panes/header'
import { ExchangeWrapper } from './lib/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'spCoin',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ExchangeWrapper>
        <body className={inter.className}>
          <Header />
          {children}
          {/* <Footer /> */}
        </body>
      </ExchangeWrapper>
    </html>
  )
}

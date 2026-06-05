// components/Layout.tsx
import type { ReactNode } from 'react'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <TopBar />
      <Header />

      {/* TEMPORARY TEST NAVIGATION */}
      <div className="test-navigation bg-yellow-100 p-2 text-sm">
        <strong>TEST NAVIGATION:</strong>
        <a href="/dashboard" className="mx-2">Dashboard</a> |
        <a href="/employee" className="mx-2">Employee</a>
      </div>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
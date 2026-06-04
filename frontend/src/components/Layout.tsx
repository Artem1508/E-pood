import type { ReactNode } from 'react'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  cartCount?: number
  favoritesCount?: number
}

export default function Layout({ children, cartCount = 0, favoritesCount = 0 }: LayoutProps) {
  return (
    <>
      <TopBar />
      <Header cartCount={cartCount} favoritesCount={favoritesCount} />

      {/* TEMPORARY TEST NAVIGATION */}
      <div className="test-navigation bg-yellow-100 p-2 text-sm">
        <strong>TEST NAVIGATION:</strong>
       
        <a href="/dashboard" className="mx-2">Dashboard</a> |
        <a href="/employee" className="mx-2">Employee</a>
      </div>

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </>
  )
}

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

     

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </>
  )
}

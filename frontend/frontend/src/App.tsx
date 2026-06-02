import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Header from './components/Header'
import MainNav from './components/MainNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Dashboard from './pages/Dashboard'

function App() {
  const [cartCount, setCartCount] = useState(3)

  return (
    <div className="app-wrapper">
      <TopBar />
      <Header cartCount={cartCount} />
      <MainNav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
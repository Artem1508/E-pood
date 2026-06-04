import { useState, useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Products from "./pages/Products";
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [favoritesCount, setFavoritesCount] = useState(0)
  const location = useLocation();
  const [, setUpdateTrigger] = useState(0);

  useEffect(() => {
    setUpdateTrigger(prev => prev + 1);
  }, [location]);

  return (
    <Routes>
      {/* Public routes with Layout */}
      <Route path="/" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <Home />
        </Layout>
      } />
      
      <Route path="/products" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <Products />
        </Layout>
      } />
      
      <Route path="/product/:id" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <ProductDetails />
        </Layout>
      } />
      
      <Route path="/about" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <About />
        </Layout>
      } />
      
      <Route path="/cart" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <Cart />
        </Layout>
      } />
      
      <Route path="/checkout" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <Checkout />
        </Layout>
      } />

      {/* Auth routes */}
      <Route path="/login" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <Login />
        </Layout>
      } />
      
      <Route path="/register" element={
        <Layout cartCount={cartCount} favoritesCount={favoritesCount}>
          <Register />
        </Layout>
      } />

      {/* Admin routes */}
      <Route element={<ProtectedRoute requiredRole={1} />}>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Employee routes */}
      <Route element={<ProtectedRoute requiredRole={2} />}>
        <Route element={<EmployeeLayout />}>
          <Route path="/employee/*" element={<div>Employee Panel</div>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './layouts/AdminLayout';
import EmployeeLayout from './layouts/EmployeeLayout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Публичные маршруты с Layout (пропсы больше не нужны) */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/products" element={<Layout><Products /></Layout>} />
      <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/cart" element={<Layout><Cart /></Layout>} />
      <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/register" element={<Layout><Register /></Layout>} />

      {/* Admin & Employee routes остаются без изменений */}
      <Route element={<ProtectedRoute requiredRole={1} />}>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute requiredRole={2} />}>
        <Route element={<EmployeeLayout />}>
          <Route path="/employee/*" element={<div>Employee Panel</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
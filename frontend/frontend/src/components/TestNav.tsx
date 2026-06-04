import { Link } from 'react-router-dom';

export default function TestNav() {
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-xl z-50 text-sm">
      <div className="font-bold mb-2">🔗 Quick Navigation</div>
      <div className="grid grid-cols-2 gap-2">
        <Link to="/" className="hover:text-yellow-300">🏠 Home</Link>
        <Link to="/products" className="hover:text-yellow-300">📦 Products</Link>
        <Link to="/cart" className="hover:text-yellow-300">🛒 Cart</Link>
        <Link to="/login" className="hover:text-yellow-300">🔐 Login</Link>
        <Link to="/register" className="hover:text-yellow-300">📝 Register</Link>
        <Link to="/dashboard" className="hover:text-yellow-300">📊 Dashboard</Link>
        <Link to="/about" className="hover:text-yellow-300">ℹ️ About</Link>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        Current: {window.location.pathname}
      </div>
    </div>
  );
}
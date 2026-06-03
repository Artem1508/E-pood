import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "../services/auth.service";

export default function EmployeeLayout() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser?.role_id !== 2 && currentUser?.role_id !== 1) {
      // Если не сотрудник и не админ
      navigate("/");
    }
    setUser(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Employee Header */}
      <header className="bg-white shadow-md">
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-[#C17B5E]">Employee Portal</h1>
            <p className="text-sm text-gray-600">Welcome, {user?.full_name}</p>
          </div>
          <nav className="flex space-x-6">
            <Link to="/employee/orders" className="text-gray-700 hover:text-[#C17B5E]">
              Orders
            </Link>
            <Link to="/employee/inventory" className="text-gray-700 hover:text-[#C17B5E]">
              Inventory
            </Link>
            <Link to="/employee/customers" className="text-gray-700 hover:text-[#C17B5E]">
              Customers
            </Link>
            <button onClick={handleLogout} className="text-red-600 hover:text-red-700">
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
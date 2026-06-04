import { useState } from 'react';

// Import all your pages
import AdminDashboard from './admin/Dashboard';
import AdminCategories from './admin/Categories';
import AdminProducts from './admin/Products';
import AdminUsers from './admin/Users';
import AdminPayments from './admin/Payments';
import CustomerDashboard from './customer/Dashboard';
import CustomerOrders from './customer/Orders';
import EmployeeInventory from './employee/Inventory';
import EmployeeOrders from './employee/Orders';

type PageKey =
  | 'admin-dashboard'
  | 'admin-categories'
  | 'admin-products'
  | 'admin-users'
  | 'admin-payments'
  | 'customer-dashboard'
  | 'customer-orders'
  | 'employee-inventory'
  | 'employee-orders';

export default function TestPages() {
  const [activePage, setActivePage] = useState<PageKey>('admin-dashboard');

  const pages = {
    // Admin Pages
    'admin-dashboard': { component: <AdminDashboard />, name: 'Admin Dashboard' },
    'admin-categories': { component: <AdminCategories />, name: 'Admin Categories' },
    'admin-products': { component: <AdminProducts />, name: 'Admin Products' },
    'admin-users': { component: <AdminUsers />, name: 'Admin Users' },
    'admin-payments': { component: <AdminPayments />, name: 'Admin Payments' },
    
    // Customer Pages
    'customer-dashboard': { component: <CustomerDashboard />, name: 'Customer Dashboard' },
    'customer-orders': { component: <CustomerOrders />, name: 'Customer Orders' },
    
    // Employee Pages
    'employee-inventory': { component: <EmployeeInventory />, name: 'Employee Inventory' },
    'employee-orders': { component: <EmployeeOrders />, name: 'Employee Orders' },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-white shadow-lg min-h-screen p-4">
          <h2 className="font-bold text-lg mb-4">Test Pages</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold text-sm text-gray-500 mb-2">ADMIN</h3>
            <div className="space-y-1">
              <button onClick={() => setActivePage('admin-dashboard')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Dashboard</button>
              <button onClick={() => setActivePage('admin-categories')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Categories</button>
              <button onClick={() => setActivePage('admin-products')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Products</button>
              <button onClick={() => setActivePage('admin-users')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Users</button>
              <button onClick={() => setActivePage('admin-payments')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Payments</button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-sm text-gray-500 mb-2">CUSTOMER</h3>
            <div className="space-y-1">
              <button onClick={() => setActivePage('customer-dashboard')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Dashboard</button>
              <button onClick={() => setActivePage('customer-orders')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Orders</button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-500 mb-2">EMPLOYEE</h3>
            <div className="space-y-1">
              <button onClick={() => setActivePage('employee-inventory')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Inventory</button>
              <button onClick={() => setActivePage('employee-orders')} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100">Orders</button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold mb-4">{pages[activePage].name}</h1>
            {pages[activePage].component}
          </div>
        </div>
      </div>
    </div>
  );
}
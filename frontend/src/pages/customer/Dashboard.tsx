// Purpose: Show customer's personal dashboard with recent orders.

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../services/auth.service';

interface Order {
  id: number;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: number;
}

export default function CustomerDashboard() {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      // Replace with actual API call
      // const response = await api.get('/customer/orders');
      // setRecentOrders(response.data.slice(0, 5));
      
      // Demo data
      setRecentOrders([
        { id: 1001, date: '2024-01-15', total: 156.00, status: 'delivered', items: 3 },
        { id: 1002, date: '2024-01-10', total: 89.50, status: 'shipped', items: 2 },
        { id: 1003, date: '2024-01-05', total: 234.00, status: 'processing', items: 4 },
      ]);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C17B5E]"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#C17B5E] to-[#A35C3A] rounded-lg p-8 text-white mb-8">
        <h1 className="text-2xl font-bold mb-2">
          {t('customer.welcome_back')}, {user?.full_name?.split(' ')[0]}!
        </h1>
        <p className="opacity-90">{t('customer.dashboard_subtitle')}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{t('customer.total_orders')}</p>
              <p className="text-2xl font-bold">{recentOrders.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{t('customer.total_spent')}</p>
              <p className="text-2xl font-bold">
                ${recentOrders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{t('customer.active_orders')}</p>
              <p className="text-2xl font-bold">
                {recentOrders.filter(o => o.status !== 'delivered').length}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">{t('customer.recent_orders')}</h2>
          <Link to="/customer/orders" className="text-[#C17B5E] hover:underline">
            {t('customer.view_all')} →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('customer.order_id')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('customer.date')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('customer.items')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('customer.total')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('customer.status')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">#{order.id}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.items}</td>
                  <td className="px-6 py-4">${order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link
          to="/products"
          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">🛍️</div>
          <h3 className="font-semibold mb-1">{t('customer.continue_shopping')}</h3>
          <p className="text-sm text-gray-500">{t('customer.explore_products')}</p>
        </Link>
        <Link
          to="/customer/orders"
          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">📦</div>
          <h3 className="font-semibold mb-1">{t('customer.track_orders')}</h3>
          <p className="text-sm text-gray-500">{t('customer.check_order_status')}</p>
        </Link>
      </div>
    </div>
  );
}
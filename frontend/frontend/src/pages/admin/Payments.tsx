// Purpose: Track all payment transactions.

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Payment {
  id: number;
  orderId: number;
  customerName: string;
  amount: number;
  method: 'card' | 'paypal' | 'cash';
  status: 'pending' | 'completed' | 'failed';
  date: string;
}

export default function AdminPayments() {
  const { t } = useTranslation();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      // Replace with actual API call
      // const response = await api.get('/admin/payments');
      // setPayments(response.data);
      
      // Demo data
      setPayments([
        { id: 1, orderId: 1001, customerName: 'John Doe', amount: 156.00, method: 'card', status: 'completed', date: '2024-01-15' },
        { id: 2, orderId: 1002, customerName: 'Jane Smith', amount: 89.50, method: 'paypal', status: 'completed', date: '2024-01-16' },
        { id: 3, orderId: 1003, customerName: 'Bob Wilson', amount: 234.00, method: 'card', status: 'pending', date: '2024-01-17' },
      ]);
    } catch (error) {
      console.error('Error fetching payments:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
      <h1 className="text-2xl font-bold mb-6">{t('admin.payments')}</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">{t('admin.total_revenue')}</p>
          <p className="text-2xl font-bold">
            ${payments.reduce((sum, p) => sum + (p.status === 'completed' ? p.amount : 0), 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">{t('admin.completed_payments')}</p>
          <p className="text-2xl font-bold">
            {payments.filter(p => p.status === 'completed').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">{t('admin.pending_payments')}</p>
          <p className="text-2xl font-bold">
            {payments.filter(p => p.status === 'pending').length}
          </p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.id')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.order_id')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.customer')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.amount')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.method')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.date')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4">{payment.id}</td>
                  <td className="px-6 py-4">#{payment.orderId}</td>
                  <td className="px-6 py-4">{payment.customerName}</td>
                  <td className="px-6 py-4">${payment.amount}</td>
                  <td className="px-6 py-4 capitalize">{payment.method}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
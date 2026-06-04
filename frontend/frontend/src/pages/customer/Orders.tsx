// Purpose: Display all customer orders with detailed view.

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Order {
  id: number;
  date: string;
  total: number;
  status: string;
  items: OrderItem[];
}

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default function CustomerOrders() {
  const { t } = useTranslation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      // Replace with actual API call
      // const response = await api.get('/customer/orders');
      // setOrders(response.data);
      
      // Demo data
      setOrders([
        {
          id: 1001,
          date: '2024-01-15',
          total: 156.00,
          status: 'delivered',
          items: [
            { id: 1, name: 'Classic T-Shirt', quantity: 2, price: 29.99 },
            { id: 2, name: 'Jeans', quantity: 1, price: 96.02 },
          ]
        },
        {
          id: 1002,
          date: '2024-01-10',
          total: 89.50,
          status: 'shipped',
          items: [
            { id: 3, name: 'Summer Dress', quantity: 1, price: 89.50 },
          ]
        },
      ]);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
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
      <h1 className="text-2xl font-bold mb-6">{t('customer.my_orders')}</h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-xl font-semibold mb-2">{t('customer.no_orders')}</h2>
          <p className="text-gray-500 mb-4">{t('customer.no_orders_message')}</p>
          <a href="/products" className="inline-block bg-[#C17B5E] text-white px-6 py-2 rounded-lg hover:bg-[#A35C3A] transition">
            {t('customer.start_shopping')}
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b bg-gray-50">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-gray-500">{t('customer.order_id')}</p>
                    <p className="font-semibold">#{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('customer.order_date')}</p>
                    <p>{order.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('customer.total_amount')}</p>
                    <p className="font-bold text-lg">${order.total.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
                    className="text-[#C17B5E] hover:underline"
                  >
                    {selectedOrder?.id === order.id ? t('customer.hide_details') : t('customer.view_details')}
                  </button>
                </div>
              </div>
              
              {selectedOrder?.id === order.id && (
                <div className="p-6">
                  <h3 className="font-semibold mb-4">{t('customer.order_items')}</h3>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            {t('customer.quantity')}: {item.quantity} × ${item.price}
                          </p>
                        </div>
                        <p className="font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    ))}
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <p>{t('customer.total')}</p>
                        <p>${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
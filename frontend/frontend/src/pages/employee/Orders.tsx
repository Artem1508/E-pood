// Purpose: Process and manage customer orders.

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: OrderItem[];
}

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default function EmployeeOrders() {
  const { t } = useTranslation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      // Replace with actual API call
      // const response = await api.get('/employee/orders');
      // setOrders(response.data);
      
      // Demo data
      setOrders([
        {
          id: 1001,
          customerName: 'John Doe',
          customerEmail: 'john@mail.com',
          date: '2024-01-15',
          total: 156.00,
          status: 'pending',
          items: [
            { id: 1, name: 'Classic T-Shirt', quantity: 2, price: 29.99 },
            { id: 2, name: 'Jeans', quantity: 1, price: 96.02 },
          ]
        },
        {
          id: 1002,
          customerName: 'Jane Smith',
          customerEmail: 'jane@mail.com',
          date: '2024-01-14',
          total: 89.50,
          status: 'processing',
          items: [
            { id: 3, name: 'Summer Dress', quantity: 1, price: 89.50 },
          ]
        },
        {
          id: 1003,
          customerName: 'Bob Wilson',
          customerEmail: 'bob@mail.com',
          date: '2024-01-13',
          total: 234.00,
          status: 'shipped',
          items: [
            { id: 4, name: 'Sneakers', quantity: 1, price: 89.99 },
            { id: 5, name: 'Hat', quantity: 2, price: 72.01 },
          ]
        },
      ]);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: number, newStatus: string) => {
    try {
      // await api.patch(`/employee/orders/${orderId}/status`, { status: newStatus });
      console.log('Update order status:', orderId, newStatus);
      fetchOrders(); // Refresh
      setSelectedOrder(null);
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const filteredOrders = filter === 'all' 
    ? orders 
    : orders.filter(order => order.status === filter);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const statusOptions = ['pending', 'processing', 'shipped', 'delivered'];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C17B5E]"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{t('employee.order_management')}</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'all' 
                ? 'bg-[#C17B5E] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t('employee.all_orders')}
          </button>
          {statusOptions.map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg transition capitalize ${
                filter === status 
                  ? 'bg-[#C17B5E] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">{t('employee.order_id')}</p>
                  <p className="font-semibold text-lg">#{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('employee.customer')}</p>
                  <p className="font-medium">{order.customerName}</p>
                  <p className="text-sm text-gray-500">{order.customerEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('employee.date')}</p>
                  <p>{order.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('employee.total')}</p>
                  <p className="font-bold text-lg">${order.total.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('employee.status')}</p>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className={`mt-1 px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(order.status)} border-0 cursor-pointer`}
                  >
                    {statusOptions.map(status => (
                      <option key={status} value={status} className="capitalize">
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
                  className="text-[#C17B5E] hover:underline"
                >
                  {selectedOrder?.id === order.id ? t('employee.hide_details') : t('employee.view_details')}
                </button>
              </div>

              {selectedOrder?.id === order.id && (
                <div className="border-t pt-4 mt-2">
                  <h3 className="font-semibold mb-3">{t('employee.order_items')}</h3>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            {t('employee.quantity')}: {item.quantity} × ${item.price}
                          </p>
                        </div>
                        <p className="font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    ))}
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <p className="font-bold">{t('employee.total')}</p>
                        <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
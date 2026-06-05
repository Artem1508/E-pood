// pages/Orders.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { Order } from '../types/order.types';

export default function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  // Загрузка заказов из localStorage
  useEffect(() => {
    if (user?.id) {
      const savedOrders = localStorage.getItem(`orders_${user.id}`);
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        setOrders([]);
      }
    }
    setLoading(false);
  }, [user]);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'delivered': return 'Delivered';
      case 'shipped': return 'Shipped';
      case 'processing': return 'Processing';
      case 'pending': return 'Pending';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">My Orders</h1>
        <p className="text-gray-500 mb-8">You haven't placed any orders yet</p>
        <Link 
          to="/products" 
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.order_id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Заголовок заказа */}
            <div className="bg-gray-50 px-6 py-4 border-b flex flex-wrap justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Order #{order.order_id}</span>
                <div className="text-sm text-gray-500">Placed on {formatDate(order.order_date)}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                  {getStatusText(order.status)}
                </span>
                <span className="font-bold text-lg">€{order.total_amount}</span>
                <button
                  onClick={() => setSelectedOrder(selectedOrder === order.order_id ? null : order.order_id)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {selectedOrder === order.order_id ? '▲' : '▼'}
                </button>
              </div>
            </div>

            {/* Детали заказа (показываются при клике) */}
            {selectedOrder === order.order_id && (
              <div className="px-6 py-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Товары */}
                  <div>
                    <h3 className="font-semibold mb-3">Items</h3>
                    <div className="space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex gap-3 border-b pb-3">
                          <img 
                            src={item.image_url || '/images/placeholder.jpg'} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              Quantity: {item.quantity} × €{item.price}
                            </p>
                            <p className="font-semibold">€{item.price * item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Информация о доставке */}
                  <div>
                    <h3 className="font-semibold mb-3">Shipping Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Name:</span> {order.customer_name}</p>
                      <p><span className="text-gray-500">Email:</span> {order.customer_email}</p>
                      <p><span className="text-gray-500">Phone:</span> {order.customer_phone}</p>
                      <p><span className="text-gray-500">Address:</span> {order.shipping_address}</p>
                    </div>

                    <h3 className="font-semibold mt-4 mb-3">Order Summary</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Subtotal:</span>
                        <span>€{order.total_amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Shipping:</span>
                        <span>Free</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>€{order.total_amount}</span>
                        </div>
                      </div>
                    </div>

                    {/* Кнопка повторного заказа */}
                    <button 
                      className="mt-4 w-full bg-gray-900 text-white py-2 rounded-full text-sm hover:bg-gray-700 transition"
                      onClick={() => {
                        // TODO: Добавить логику повторного заказа
                        alert('Repeat order functionality coming soon');
                      }}
                    >
                      Order Again
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
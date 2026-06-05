import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Cart() {
  const { t } = useTranslation();
  const { items, totalQuantity, totalPrice, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('cart')}</h1>
        <p className="text-gray-500 mb-8">{t('cart_empty')}</p>
        <Link 
          to="/products" 
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
        >
          {t('continue_shopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t('cart')}</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Список товаров */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product_id} className="flex gap-4 border-b pb-4">
              <img 
                src={item.image_URL || `/images/categories/default/${item.category_id}.jpg`} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">{item.price} €</p>
                
                <div className="flex items-center gap-3 mt-2">
                  <button 
                    onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeFromCart(item.product_id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    {t('remove')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Итого */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">{t('order_summary')}</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>{t('total_quantity')}:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>{t('total')}:</span>
              <span>{totalPrice} €</span>
            </div>
          </div>
          <Link 
            to="/checkout" 
            className="block w-full bg-gray-900 text-white text-center py-3 rounded-full hover:bg-gray-700 transition"
          >
            {t('checkout')}
          </Link>
        </div>
      </div>
    </div>
  );
}
import { useTranslation } from 'react-i18next';

export default function ShippingInfo() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Delivery Options</h2>
          <div className="space-y-3">
            <div className="border-b pb-3">
              <h3 className="font-bold text-lg">Standard Delivery</h3>
              <p className="text-gray-600">3-5 business days - €4.99</p>
              <p className="text-sm text-gray-500">Free on orders over €50</p>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-bold text-lg">Express Delivery</h3>
              <p className="text-gray-600">1-2 business days - €9.99</p>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-bold text-lg">Next Day Delivery</h3>
              <p className="text-gray-600">Order before 2PM - €14.99</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Destinations</h2>
          <p className="text-gray-700 mb-2">We ship to all countries within the European Union.</p>
          <p className="text-gray-700">International shipping is coming soon!</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
          <p className="text-gray-700 mb-2">
            Once your order is shipped, you will receive a confirmation email with a tracking number.
            You can track your order status in your account dashboard.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Customs & Duties</h2>
          <p className="text-gray-700">
            All prices include VAT. For international orders, customers are responsible for any customs 
            fees or import duties that may apply.
          </p>
        </section>
      </div>
    </div>
  );
}
// pages/ReturnsInfo.tsx
import { useTranslation } from 'react-i18next';

export default function ReturnsInfo() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Returns & Exchanges</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
          <p className="text-gray-700 mb-3">
            We want you to love your purchase! If you're not completely satisfied, you can return any item 
            within 30 days of delivery for a full refund or exchange.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Items must be unworn, unwashed, and with original tags attached</li>
            <li>Returns must be initiated within 30 days of delivery</li>
            <li>Original shipping fees are non-refundable</li>
            <li>Sale items are final sale</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">1. Initiate Return</h3>
              <p className="text-gray-700">Log into your account and go to "Orders" to start a return request.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">2. Pack Your Items</h3>
              <p className="text-gray-700">Place the items in their original packaging with all tags attached.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">3. Print Return Label</h3>
              <p className="text-gray-700">Download and print the prepaid return shipping label.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">4. Ship Your Return</h3>
              <p className="text-gray-700">Drop off your package at any local post office.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
          <p className="text-gray-700 mb-2">
            Once we receive and inspect your return, we will process your refund within 5-7 business days.
          </p>
          <p className="text-gray-700">
            Refunds will be issued to your original payment method. You will receive a confirmation email 
            once your refund has been processed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
          <p className="text-gray-700">
            To exchange an item for a different size or color, please return the original item and place a 
            new order for the desired item. This ensures you get the new item as quickly as possible.
          </p>
        </section>
      </div>
    </div>
  );
}
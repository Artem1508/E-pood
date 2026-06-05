// pages/OrderSuccess.tsx
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase. We'll send you a confirmation email shortly.
      </p>
      
      <div className="space-x-4">
        <Link 
          to="/products" 
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
        >
          Continue Shopping
        </Link>
        <Link 
          to="/" 
          className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
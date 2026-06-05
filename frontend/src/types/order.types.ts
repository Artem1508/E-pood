// types/order.types.ts
export interface OrderItem {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

export interface Order {
  order_id: number;
  user_id: number;
  order_date: string;
  total_amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  items: OrderItem[];
}
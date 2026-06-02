export interface CreateOrderDto {
  user_id: number;
}

export interface AddOrderItemDto {
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}
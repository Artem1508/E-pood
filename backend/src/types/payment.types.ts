export interface CreatePaymentDto {
  order_id: number;
  amount: number;
  payment_method: string;
}


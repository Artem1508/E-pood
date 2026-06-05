import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPayment = async (
  req: Request<{}, any, { order_id?: string; amount?: number; payment_method?: string }>,
  res: Response
) => {
  try {
    const { order_id, amount, payment_method } = req.body || {};

    if (!order_id || amount == null || !payment_method) {
      return res.status(400).json({ error: "Missing required payment fields" });
    }

    // Используем payments_table вместо payment
    const payment = await prisma.payments_table.create({
      data: {
        order_id: parseInt(order_id),
        amount: amount,
        payment_method: payment_method,
        payment_status: "Successful",
      },
    });

    // Обновляем статус платежа в заказе
    // payments.controller.ts
    await prisma.orders_table.update({
      where: { order_id: parseInt(order_id) },
      data: { 
        status: "processing"  // только status, без payment_status
      }
    });

    return res.status(201).json(payment);
  } catch (error) {
    console.error('Create payment error:', error);
    return res.status(500).json({ error: "Failed to create payment" });
  }
};

export const getPayments = async (
  req: Request,
  res: Response 
) => {
  try {
    // Используем payments_table вместо payment
    const payments = await prisma.payments_table.findMany({
      orderBy: {
        payment_date: 'desc'
      }
    });
    return res.json(payments);
  } catch (error) {
    console.error('Get payments error:', error);
    return res.status(500).json({ error: "Failed to retrieve payments" });
  }       
};
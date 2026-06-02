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

    const payment = await prisma.payment.create({
      data: {
        order_id: parseInt(order_id),
        amount,
        payment_method,
        payment_status: "Successful",
      },
    });

    return res.status(201).json(payment);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create payment" });
  }
};

export const getPayments = async (
  req: Request,
  res: Response 
) => {
    try {
        const payments = await prisma.payment.findMany();
        return res.json(payments);
    } catch (error) {
        return res.status(500).json({ error: "Failed to retrieve payments" });
    }       
};

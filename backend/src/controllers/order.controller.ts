import prisma from "../config/db";
import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

export const createOrder = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const order = await prisma.orders_table.create({
      data: {
        user_id: req.user.userId,
        status: "Pending",
        total_amount: 0,
      },
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Get my orders controller
export const getMyOrders = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const orders = await prisma.orders_table.findMany({
      where: {
        user_id: req.user.userId,
      },
      orderBy: {
        order_date: 'desc'
      }
    });

    res.json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ error: 'Failed to get orders' });
  }
};
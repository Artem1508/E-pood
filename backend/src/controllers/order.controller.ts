import prisma from "../config/db";
import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

export const createOrder = async (
  req: AuthRequest,
  res: Response
) => {
  const order =
    await prisma.order.create({
      data: {
        user_id:
          req.user.userId,

        status: "Pending",

        total_amount: 0,
      },
    });

  res.status(201).json(order);
};

// Get my orders controller

export const getMyOrders = async (
  req: AuthRequest,
  res: Response
) => {
  const orders =
    await prisma.order.findMany({
      where: {
        user_id:
          req.user.userId,
      },
    });

  res.json(orders);
};
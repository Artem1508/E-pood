import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
// import { AuthRequest } from '../middleware/auth.middleware';
// import prisma from '../config/db';

const prisma = new PrismaClient();

export const createReview = async (req: Request, res: Response) => {
  const body = (req.body ?? {}) as {
    product_id?: number;
    username?: string;
    rating?: number;
    comment?: string;
  };

  const { product_id, username, rating, comment } = body;

  if (!product_id || !username || typeof rating !== 'number') {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const review = await (prisma as any).productReview.create({
    data: {
      product_id,
      review_data: {
        username,
        rating,
        comment,
      },
    },
  });

  return res.status(201).json(review);
};
import { Request, Response } from "express";
import prisma from "../config/db";

export const createProduct = async (
  req: Request,
  res: Response
) => {
  const product =
    await prisma.products_table.create({
      data: {
        name: req.body.name,
        description:
          req.body.description,

        price: req.body.price,

        stock_quantity:
          req.body.stock_quantity,

        category_id:
          req.body.category_id,
      },
    });

  res.status(201).json(product);
};

// Get products controller
export const getProducts = async (
  req: Request,
  res: Response
) => {
  const products =
    await prisma.products_table.findMany();

  res.json(products);
};

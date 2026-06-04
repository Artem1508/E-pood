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

export const getProductById = async (req: Request, res: Response) => {
  try {
    const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = parseInt(idParam);
    
    const product = await prisma.products_table.findUnique({
      where: { product_id: id }
    });
    
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
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

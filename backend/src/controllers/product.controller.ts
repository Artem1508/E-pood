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
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = parseInt(idParam);
    
    const { name, description, price, stock_quantity, category_id, image_URL } = req.body;

    // Проверяем, существует ли продукт
    const existingProduct = await prisma.products_table.findUnique({
      where: { product_id: id }
    });

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Обновляем продукт
    const updatedProduct = await prisma.products_table.update({
      where: { product_id: id },
      data: {
        name: name !== undefined ? name : existingProduct.name,
        description: description !== undefined ? description : existingProduct.description,
        price: price !== undefined ? price : existingProduct.price,
        stock_quantity: stock_quantity !== undefined ? stock_quantity : existingProduct.stock_quantity,
        category_id: category_id !== undefined ? category_id : existingProduct.category_id,
        image_URL: image_URL !== undefined ? image_URL : existingProduct.image_URL,
      },
    });

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete product controller
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = parseInt(idParam);

    // Проверяем, существует ли продукт
    const existingProduct = await prisma.products_table.findUnique({
      where: { product_id: id }
    });

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Удаляем продукт
    await prisma.products_table.delete({
      where: { product_id: id }
    });

    res.json({ message: "Product deleted successfully", product_id: id });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
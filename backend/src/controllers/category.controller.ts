import { Request, Response } from "express";
import prisma from "../config/db";

export const getCategories = async (
  req: Request,
  res: Response
) => {
  const categories =
    await prisma.categories_table.findMany();

  res.json(categories);
}; 

// Create category controller
export const createCategory = async (
  req: Request,
  res: Response
) => {
  const category =
    await prisma.categories_table.create({
      data: {
        category_name:
          req.body.category_name,
      },
    });

  res.status(201).json(category);
};
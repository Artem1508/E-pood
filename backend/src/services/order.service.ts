import prisma from "../config/db";
import bcrypt from "bcrypt";

export const createProduct = async (
  name: string,
  description: string,  
    price: number,
    stock_quantity: number,
    category_id: number
) => {  
    return prisma.product.create({  
        data: {
            name,
            description,  
            price,
            stock_quantity,
            category_id
        }
    });
};

export const getProducts = async () => {
    return prisma.product.findMany({
        include: {
            category: true,
        },
    });
};

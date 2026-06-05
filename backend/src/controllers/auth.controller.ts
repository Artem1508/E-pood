import { Request, Response } from "express";
import prisma from "../config/db";
import bcrypt from "bcrypt";
import { registerUser, loginUser } from "../services/auth.service";
import { generateToken } from "../utils/jwt";

// Вспомогательная функция для получения ID
const getIntId = (id: string | string[] | undefined): number | null => {
  if (!id) return null;
  const parsed = parseInt(Array.isArray(id) ? id[0] : id);
  return isNaN(parsed) ? null : parsed;
};

// ==================== AUTH ====================
export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(
      req.body.full_name,
      req.body.email,
      req.body.password,
      req.body.address
    );

    res.status(201).json({
      message: "User registered successfully",
      user: {
        user_id: user.user_id,
        full_name: user.full_name,
        email: user.email,
        role_id: user.role_id,
        address: user.address,
        created_at: user.created_at,
      },
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);
    const token = generateToken(user.user_id, user.role_id);

    res.json({
      token,
      user: {
        user_id: user.user_id,
        full_name: user.full_name,
        email: user.email,
        role_id: user.role_id,
        address: user.address,
      },
    });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

// ==================== CRUD USERS ====================

// Get all users (Admin only)
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users_table.findMany({
      select: {
        user_id: true,
        full_name: true,
        email: true,
        role_id: true,
        address: true,
        created_at: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ error: "Failed to get users" });
  }
};

// Get user by ID (Admin only or self)
export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = getIntId(req.params.id);
    if (!id) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    
    const requestingUserId = (req as any).user?.userId;
    const requestingUserRole = (req as any).user?.role_id;

    if (requestingUserRole !== 1 && requestingUserId !== id) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const user = await prisma.users_table.findUnique({
      where: { user_id: id },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        role_id: true,
        address: true,
        created_at: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update user (Admin only or self)
export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = getIntId(req.params.id);
    if (!id) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    
    const { full_name, email, address, password } = req.body;
    const requestingUserId = (req as any).user?.userId;
    const requestingUserRole = (req as any).user?.role_id;

    if (requestingUserRole !== 1 && requestingUserId !== id) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const existingUser = await prisma.users_table.findUnique({
      where: { user_id: id },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const updateData: any = {};
    if (full_name) updateData.full_name = full_name;
    if (email) updateData.email = email;
    if (address !== undefined) updateData.address = address;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password_hash = await bcrypt.hash(password, salt);
    }

    const updatedUser = await prisma.users_table.update({
      where: { user_id: id },
      data: updateData,
      select: {
        user_id: true,
        full_name: true,
        email: true,
        role_id: true,
        address: true,
        created_at: true,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete user (Admin only)
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = getIntId(req.params.id);
    if (!id) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    
    const requestingUserRole = (req as any).user?.role_id;

    if (requestingUserRole !== 1) {
      return res.status(403).json({ error: "Forbidden - Admin only" });
    }

    const existingUser = await prisma.users_table.findUnique({
      where: { user_id: id },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    await prisma.users_table.delete({
      where: { user_id: id },
    });

    res.json({ message: "User deleted successfully", user_id: id });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
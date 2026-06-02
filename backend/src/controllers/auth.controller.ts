import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import { generateToken } from "../utils/jwt";

export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await registerUser(
      req.body.full_name,
      req.body.email,
      req.body.password,
      req.body.address
    );

    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Login controller
export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await loginUser(
      req.body.email,
      req.body.password
    );

    const token = generateToken(
      user.user_id,
      user.role_id
    );

    res.json({
      token,
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
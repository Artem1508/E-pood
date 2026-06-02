import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const authorizeRoles =
  (...allowedRoles: number[]) =>
  (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!allowedRoles.includes(req.user.roleId)) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };
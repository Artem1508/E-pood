import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const authorizeRoles = (...allowedRoles: number[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role_id;

    console.log("User role from token:", userRole);
    console.log("Allowed roles:", allowedRoles);

    if (!userRole && userRole !== 0) {
      return res.status(401).json({ error: "Unauthorized - No role found" });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ 
        error: `Forbidden - Required role: ${allowedRoles.join(", ")}, Your role: ${userRole}` 
      });
    }

    next();
  };
};
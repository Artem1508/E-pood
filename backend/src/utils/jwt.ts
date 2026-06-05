import jwt from "jsonwebtoken";

export const generateToken = (userId: number, role_id: number) => {
  return jwt.sign(
    { userId, role_id },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "7d" }
  );
};
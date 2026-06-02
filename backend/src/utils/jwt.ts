// If @types/jsonwebtoken is not installed, TypeScript may complain it cannot find the module.
// Silence that error locally for this file. Prefer installing @types/jsonwebtoken in the project.
// @ts-ignore
import jwt from "jsonwebtoken";

export const generateToken = (userId: number, roleId: number) => {
  return jwt.sign(
    {
      userId,
      roleId,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    }
  );
};
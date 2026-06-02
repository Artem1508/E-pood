import prisma from "../config/db";
import bcrypt from "bcrypt";

export const registerUser = async (
  full_name: string,
  email: string,
  password: string,
  address: string
) => {
  const existingUser = await prisma.users_table.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.users_table.create({
    data: {
      full_name,
      email,
      password_hash: hashedPassword,
      address,
      role_id: 3,
    },
  });
};

// Login service
export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await prisma.users_table.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return user;
};
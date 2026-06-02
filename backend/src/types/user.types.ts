export interface CreateUserDto {
  full_name: string;
  email: string;
  password: string;
  address?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface JwtPayload {
  userId: number;
  roleId: number;
}
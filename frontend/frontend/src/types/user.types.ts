export interface User {
  user_id: number;
  full_name: string;
  email: string;
  password_hash: string;
  address?: string | null;
  role_id: number;
  created_at?: Date;
}

export interface RegisterData {
  full_name: string;
  email: string;
  password: string;
  address?: string;
}

export interface LoginData {
  email: string;
  password: string;
}
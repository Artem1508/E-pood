import api from "../api/axios";

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });
  
  return response.data;
};

export const register = async (
  full_name: string,
  email: string,
  password: string,
  address: string
) => {
  const response = await api.post("/auth/register", {
    full_name,
    email,
    password,
    address,
  });
  
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
// contexts/AuthContext.tsx
import {
  createContext,
  useState,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  id: number;
  email: string;
  name: string;
  role: number; // 1 = admin, 2 = employee, 3 = customer
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// Создаём контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(null);

  // Функция для декодирования токена
  const getUserFromToken = (jwt: string): User | null => {
    try {
      const decoded: any = jwtDecode(jwt);
      return {
        id: decoded.id || decoded.userId,
        email: decoded.email,
        name: decoded.name || decoded.username,
        role: decoded.role || 3,
      };
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  // При изменении токена обновляем пользователя
  useEffect(() => {
    if (token) {
      const userData = getUserFromToken(token);
      setUser(userData);
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (jwt: string) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated: !!token && !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
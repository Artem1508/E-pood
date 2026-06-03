import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, getCurrentUser } from "../services/auth.service";

interface Props {
  requiredRole?: number;  // ← Добавьте эту строку
  children?: React.ReactNode;
}

export default function ProtectedRoute({ requiredRole, children }: Props) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    const user = getCurrentUser();
    if (user?.role_id !== requiredRole) {
      return <Navigate to="/" replace />;
    }
  }

  return children ? <>{children}</> : <Outlet />;
}
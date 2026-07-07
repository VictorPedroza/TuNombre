import { useAuth } from "@/shared/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="text-white text-center mt-10">Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

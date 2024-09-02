import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalProvider";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useGlobalContext();

  if (!isLoggedIn) {
    return <Navigate to="/Login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

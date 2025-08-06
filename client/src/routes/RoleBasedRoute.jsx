import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";   

export function RoleBasedRoute({ children, allowedRoles }) {
    const { user } = useContext(AuthContext);


  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if(allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
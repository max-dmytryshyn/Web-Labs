import { Navigate } from "react-router";

export const RequireAuth = ({ children }) => {
  if (localStorage.isLoggedIn === "true") {
    return children;
  }
  return <Navigate to="/login" />;
};

import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../state";
const RequireAuth = () => {
  const {
    user: { isLoggedIn },
  } = useUser();

  const { pathname } = useLocation();

  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace state={{ from: pathname }} />;
};

export { RequireAuth };

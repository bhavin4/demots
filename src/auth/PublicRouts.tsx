import React, { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const PublicRoutes = ({ children }: Props) => {
  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      // If the token exists, redirect to the login page
      window.location.href = "/LoginPage";
    }
  }, []);

  return <>{children}</>;
};

export default PublicRoutes;

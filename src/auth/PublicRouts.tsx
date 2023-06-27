import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const PublicRoutes = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
        <>{children}</>
      ) : (
        <Navigate to="/LoginPage/Demo" replace={true} />
      )}
    </>
  );
};

export default PublicRoutes;

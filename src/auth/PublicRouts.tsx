import React, { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const PublicRoutes = ({ children }: Props) => {
  const [cookies] = useCookies(["token"]);

  return (
    <>
      {!cookies.token ? (
        <>{children}</>
      ) : (
        <Navigate to="/LoginForm" replace={true} />
      )}
    </>
  );
};

export default PublicRoutes;

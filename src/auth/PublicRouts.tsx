import React, { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const PublicRoutes = ({ children }: Props) => {
  const [cookies, setCookies] = useCookies(["token"]);
  return (
    <>
      {!cookies.token ? (
        <>{children}</>
      ) : (
        <Navigate to={"/LoginForm"} />
      )}
    </>
  );
};

export default PublicRoutes;

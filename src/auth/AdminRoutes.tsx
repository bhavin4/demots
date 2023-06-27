import React, { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const AdminRoutes = ({ children }: Props) => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;

  return (
    <>
      {cookies.token ? (
        <>
          {children}
        </>
      ) : (
        <Navigate to="/"/>
      )}
    </>
  );
};

export default AdminRoutes;

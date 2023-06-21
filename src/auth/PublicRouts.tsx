import React, { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

type Props = {
<<<<<<< HEAD
  children: ReactNode;
=======
  children: ReactNode;  
>>>>>>> 5535a0e3dd89b0505845664aea17c1f72bad9667
};

const PublicRoutes = ({ children }: Props) => {
  const [cookies] = useCookies(["token"]);

  return (
    <>
      {!cookies.token ? (
        <>{children}</>
      ) : (
<<<<<<< HEAD
        <Navigate to="/LoginForm" replace={true} />
=======
        <Navigate to="/RegestrationForm" replace={true} />
>>>>>>> 5535a0e3dd89b0505845664aea17c1f72bad9667
      )}
    </>
  );
};

export default PublicRoutes;

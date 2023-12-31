import PublicRoutes from "../auth/PublicRouts";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import ResetPasswordPage from "../Pages/ResetPasswordPage";
import AdminRoutes from "../auth/AdminRoutes";
import Demo from "../Pages/Demo";
export const AppRoutes = [


  {
    id: "0",
    path: "/",
    name: "LoginPage",
    component: LoginPage,
    auth: PublicRoutes,
  },
  
  {
    id: "1",
    path: "/",
    name: "RegistrationPage",
    component: RegistrationPage,
    auth: PublicRoutes,
  },

  // {
  //   id: "2",
  //   path: "/LoginPage/RegistrationPage",
  //   name: "LoginPage",
  //   component: LoginPage,
  //   auth: PublicRoutes,
  // },
  {
    id: "3",
    path: "/forgetpassword",
    name: "login",
    component: ForgetPasswordPage,
    auth: PublicRoutes,
  },
  {
    id: "4",
    path: "/resetpassword/:hashedID",
    name: "login",
    component: ResetPasswordPage,
    auth: PublicRoutes,
  },

  {
    id: "4",
    path: "/LoginPage/Demo",
    name: "Demo",
    component: Demo,
    auth: AdminRoutes,
  },

];

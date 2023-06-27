// import LoginForm from "../components/LoginForm"
import PublicRoutes from "../auth/PublicRouts";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import ResetPasswordPage from "../Pages/ResetPasswordPage";
export const AppRoutes = [
  // {
  //   id: "0",
  //   path: "/",
  //   name: "loginForm",
  //   component: LoginForm,
  //   auth: PublicRoutes,
  // },

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
  {
    id: "2",
    path: "/RegistrationPage/LoginPage",
    name: "LoginPage",
    component: LoginPage,
    auth: PublicRoutes,
  },

  {
    id: "2",
    path: "/LoginPage/RegistrationPage",
    name: "LoginPage",
    component: LoginPage,
    auth: PublicRoutes,
  },
  {
    id: "3",
    path: "/forgetpassword",
    name: "login",
    component: ForgetPasswordPage,
    auth: PublicRoutes,
  },
  {
    id: "4",
    path: "/resetpassword",
    name: "login",
    component: ResetPasswordPage,
    auth: PublicRoutes,
  },
];

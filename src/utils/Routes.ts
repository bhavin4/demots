// import LoginForm from "../components/LoginForm"
import PublicRoutes from "../auth/PublicRouts";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";
import LoginForm from "../Components/LoginForm";
export const AppRoutes = [
  // {
  //   id: "0",
  //   path: "/",
  //   name: "loginForm",
  //   component: LoginForm,
  //   auth: PublicRoutes,
  // },

  // {
  //   id: "1",
  //   path: "/",
  //   name: "LoginPage",
  //   component: LoginPage,
  //   auth: PublicRoutes,
  // },
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
];

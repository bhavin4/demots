  import LoginForm from "../Pages/LoginForm"
  import RegestrationForm from "../Pages/RegestrationForm"
  import PublicRoutes from "../auth/PublicRouts"
  import LoginPage from "../components/LoginPage";
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

  ];

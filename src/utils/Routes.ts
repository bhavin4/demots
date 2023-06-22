  import LoginForm from "../components/LoginForm"
  import RegestrationForm from "../components/RegestrationForm"
  import PublicRoutes from "../auth/PublicRouts"
  import LoginPage from "../Pages/LoginPage";
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

import LoginForm from "../Pages/LoginPage"
import PublicRoutes from "../auth/PublicRouts"
export const AppRoutes = [
{
    id: "0",
    path: "/",
    name: "login",
    component: LoginForm,
    auth: PublicRoutes,
  },

]
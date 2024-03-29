// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Prestamos from "views/Dashboard/Prestamos";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/empleados",
    name: "Empleados",
    icon: <PersonIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/prestamos",
    name: "Prestamos",
    icon: <CreditIcon color="inherit" />,
    component: Prestamos,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "Loguearse",
    icon: <HomeIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Registrarse",
    icon: <RocketIcon color="inherit" />,
    secondaryNavbar: true,
    component: SignUp,
    layout: "/auth",
  },
];
export default dashRoutes;

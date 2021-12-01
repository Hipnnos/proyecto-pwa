// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Prestamos from "views/Dashboard/Prestamos";
import SignIn from "views/Pages/SignIn.js";
import Registro from "views/Dashboard/Empleado/Registro";
import {HomeIcon,CreditIcon,PersonIcon,SupportIcon, WalletIcon} from "components/Icons/Icons";
import Editar from "views/Dashboard/Empleado/Editar";

var dashRoutes = [
  {
    path: "/empleados",
    name: "Empleados",
    icon: <PersonIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/registro",
    name: "Registrar",
    icon: <SupportIcon color="inherit" />,
    component: Registro,
    layout: "/admin",
  },
  {
    path: "/editar",
    name: "Editar Empleado",
    icon: <WalletIcon color="inherit" />,
    component: Editar,
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
    name: "Login",
    icon: <HomeIcon color="inherit" />,
    component: SignIn,
    secondaryNavbar: true,
    layout: "/auth",
  },
];

// if(localStorage.getItem('rol') === 'Empleado'){
//   dashRoutes = dashRoutes.splice(2,2);

// }

export default dashRoutes;

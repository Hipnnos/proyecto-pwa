// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Registro from "views/Dashboard/Empleado/Registro"
import Solicitar from "views/Dashboard/Prestamo/Solicitar"
import RevisarSolicitar from "views/Dashboard/Prestamo/StepsSolicitar/RevisarSolicitud"
import Editar from "views/Dashboard/Empleado/Editar"
import Prestamos from "views/Dashboard/Prestamos";
import SignIn from "views/Pages/SignIn.js";
import {HomeIcon,CreditIcon,PersonIcon,} from "components/Icons/Icons";

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
    name: "Registro",
    icon: <PersonIcon color="inherit" />,
    component: Registro,
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
    path: "/solicitar",
    name: "Solicitar",
    icon: <CreditIcon color="inherit" />,
    component: Solicitar,
    layout: "/admin",
  },
  {
    path: "/editarEmpleado",
    name: "Editar empleado",
    icon: <PersonIcon color="inherit" />,
    component: Editar,    
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

if(localStorage.getItem('rol') == 'Empleado'){
  dashRoutes = dashRoutes.splice(2,2);
}

export default dashRoutes;

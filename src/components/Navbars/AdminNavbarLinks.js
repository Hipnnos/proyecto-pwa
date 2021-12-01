// Chakra Icons
import Swal from 'sweetalert2';
// Chakra Imports
import {Flex,Button,useColorModeValue,} from "@chakra-ui/react";
// Custom Components
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import routes from "routes.js";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, links, ...rest } = props;

  // Chakra Color Mode
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }

  const usuario = localStorage.getItem('user');
  const rol = localStorage.getItem('rol'); 

  const onClickCerrar = () => {
    Swal.fire({
      icon: 'success',
      title: 'Hasta la proxima, vuelva pronto',
      timer: 1500
    });
    window.location.href = "/purity-ui-dashboard#/auth/signin";
  }

  return (
    <Flex pe={{ sm: "0px", md: "16px" }} w={{ sm: "100%", md: "auto" }} alignItems="center" flexDirection="row">
      Usuario: {usuario} / Rol: {rol} &nbsp;&nbsp;
      <Button onClick={onClickCerrar}><i className="fa fa-sign-out-alt"></i></Button>&nbsp;&nbsp;
      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};

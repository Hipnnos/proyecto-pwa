// Chakra Icons
import { SearchIcon } from "@chakra-ui/icons";
import Swal from 'sweetalert2';
// Chakra Imports
import {Flex,IconButton,Input,Button,InputGroup,InputLeftElement,useColorModeValue,} from "@chakra-ui/react";
// Custom Components
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import routes from "routes.js";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, links, ...rest } = props;

  // Chakra Color Mode
  let mainTeal = useColorModeValue("blue.500", "blue.500");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");

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
      {usuario} : {rol} &nbsp;&nbsp;
      <InputGroup cursor="pointer" bg={inputBg} borderRadius="15px" w={{sm: "128px",md: "200px",}} me={{ sm: "auto", md: "20px" }} _focus={{borderColor: { mainTeal },}} _active={{borderColor: { mainTeal },}}>
        <InputLeftElement children={<IconButton bg="inherit" borderRadius="inherit" _hover="none" _active={{bg: "inherit",transform: "none",borderColor: "transparent",}} _focus={{boxShadow: "none",}} icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}></IconButton>}/>
        <Input fontSize="xs" py="11px" color={mainText} placeholder="Busca aquí..." borderRadius="inherit"/>
      </InputGroup>
      <Button onClick={onClickCerrar}><i className="fa fa-sign-out-alt"></i></Button>
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

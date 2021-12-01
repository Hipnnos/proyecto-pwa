import React, { useState } from "react";
import Swal from 'sweetalert2';
// Chakra imports
import {Box,Flex,Button,FormControl,FormLabel,Heading,Input,Text,useColorModeValue,} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/Rastreosatelital.png";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("blue.500", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onClickLogin = () => {
    if(correo.length > 0 && password.length){
      var data = {
        email: correo,
        password: password
      };
      fetch('http://ws-insumo.wsmprastreo.com.mx/api/loginApi', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.access_token) {
            Swal.fire({
              title: 'Error!',
              text: 'Credenciales incorrectas',
              icon: 'error'
            })
          }else{
            localStorage.setItem('Token', data.access_token);
            localStorage.setItem('user', data.nombre_usuario);
            localStorage.setItem('id_user', data.id_user);
	          localStorage.setItem('rol', data.rol);
            console.log(data);

            const rol = localStorage.getItem('rol');
            if(rol === "Administrador" || rol === "Gerente" || rol === "Contador"){
              window.location.href = "/purity-ui-dashboard#/admin/empleados/";
              setTimeout(()=>{
                window.location.reload();
              },500);
            } else if(rol === "Empleado") {
              window.location.href = "/purity-ui-dashboard#/admin/prestamos/";
              setTimeout(()=>{
                window.location.reload();
              },500);
            }
          }
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes introducir un correo y una contraseña',
      })
    }
  }

  return (
    <Flex position="relative" mb="40px">
      <Flex h={{ sm: "initial", md: "75vh", lg: "85vh" }} w="100%" maxW="1100px" mx="auto" justifyContent="space-between" mb="30px" pt={{ sm: "100px", md: "0px" }}>
        <Flex alignItems="center" justifyContent="start" style={{ userSelect: "none" }} w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex direction="column" w="100%" background="transparent" p="48px" mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} textAlign="center" fontSize="32px" mb="10px">
              Bienvenido de nuevo
            </Heading>
            <Text mb="36px" ms="4px" textAlign="center" color={textColor} fontWeight="bold" fontSize="14px">
              Ingrese su correo electrónico y contraseña para iniciar sesión
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                Correo
              </FormLabel>
              <Input borderRadius="15px" id="correo" value={correo} onChange={handleChangeCorreo} border="2px solid black" mb="24px" fontSize="sm" type="text" placeholder="Tu correo electrónico" size="lg"/>
              <FormLabel ms="4px" fontSize="sm" fontWeight="bold">
                Contraseña
              </FormLabel>
              <Input borderRadius="15px" id="password" value={password} onChange={handleChangePassword} border="2px solid black" mb="36px" fontSize="sm" type="password" placeholder="Tu contraseña" size="lg" />
              {/* <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" colorScheme="teal" me="10px" />
                <FormLabel htmlFor="remember-login" mb="0" ms="1" fontWeight="normal" >
                  Recuérdame
                </FormLabel>
              </FormControl> */}
              <Button fontSize="10px" onClick={onClickLogin} type="submit" bg="blue.500" w="100%" h="45" mb="20px" color="white" mt="20px" _hover={{bg: "blue.400",}} _active={{bg: "teal.400",}} >
                INICIAR SESIÓN
              </Button>
            </FormControl>
          </Flex>
        </Flex>
        <Box display={{ base: "none", md: "block" }} overflowX="hidden" h="100%" w="45vw" position="absolute" right="0px">
          <Box bgImage={signInImage} w="100%" h="100%" bgSize="cover" bgPosition="40%" position="absolute" borderBottomLeftRadius="20px"></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;

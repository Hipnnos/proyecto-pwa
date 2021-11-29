import React, { Component } from "react";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export class Contacto extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" fontWeight="bold">
            Datos de contacto
          </Text>
          &nbsp;&nbsp;&nbsp;
        </CardHeader>
        {/* DATOS DE CONTACTO */}
        <FormLabel>Número de celular</FormLabel>
        <Input
          borderRadius="15px"
          border="3px solid"
          mb="36px"
          type="number"
          onChange={handleChange('telefono')}
          placeholder="Número de celular"
          size="lg"
        />
        <FormLabel>Correo electronico</FormLabel>
        <Input
          borderRadius="15px"
          border="3px solid"
          mb="36px"
          type="email"
          onChange={handleChange('correo')}
          defaultValue={values.correo}
          placeholder="Correo electronico"
          size="lg"
        />
        <FormLabel>Contraseña</FormLabel>
        <Input
          borderRadius="15px"
          border="3px solid"
          mb="36px"
          type="password"
          onChange={handleChange('password')}
          defaultValue={values.password}
          placeholder="Contraseña"
          size="lg"
        />
        <CardBody>
          <Button
            type="submit"
            bg="red.500"
            w="auto"
            h="45"
            mb="20px"
            color="white"
            mt="20px"
            onClick={this.back}
            _hover={{
              bg: "red.200",
            }}
            _active={{
              bg: "red.400",
            }}
          >
            Regresar
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            type="submit"
            bg="green.500"
            w="auto"
            h="45"
            mb="20px"
            color="white"
            mt="20px"
            onClick={this.continue}
            _hover={{
              bg: "green.200",
            }}
            _active={{
              bg: "green.400",
            }}
          >
            Modificar
          </Button>
        </CardBody>
      </>
    )
  }
}

export default Contacto;


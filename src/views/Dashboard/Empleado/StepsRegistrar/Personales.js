import React, { Component } from "react";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// Chakra imports
import {Box,Flex,Button,FormControl,FormLabel,Heading,Input,Link,Switch,Select,Text,useColorModeValue,} from "@chakra-ui/react";

export class Personales extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" fontWeight="bold">
                Datos personales
              </Text>
              &nbsp;&nbsp;&nbsp;
            </CardHeader>
            {/* DATOS PERSONALES */}
            <FormLabel>Nombre</FormLabel>
            <Input
              borderRadius="15px"
              border="3px solid"
              mb="24px"
              type="text"
              onChange={handleChange('nombre')}
              defaultValue={values.nombre}
              placeholder="Tu nombre"
              size="lg"
            />
            <FormLabel>Apellidos</FormLabel>
            <Input
              borderRadius="15px"
              border="3px solid"
              mb="36px"
              w="45%"
              type="text"
              onChange={handleChange('apePaterno')}
              defaultValue={values.apePaterno}
              placeholder="Primer apellido"
              size="lg"
            />&nbsp;
            <Input
              borderRadius="15px"
              border="3px solid"
              mb="36px"
              w="45%"
              type="text"
              onChange={handleChange('apeMaterno')}
              defaultValue={values.apeMaterno}
              placeholder="Segundo apellido"
              size="lg"
            />
            <FormLabel>CURP</FormLabel>
            <Input
              borderRadius="15px"
              border="3px solid"
              mb="36px"
              type="text"
              onChange={handleChange('curp')}
              defaultValue={values.curp}
              placeholder="CURP"
              size="lg"
            />
            <FormLabel>RFC</FormLabel>
            <Input
              borderRadius="15px"
              border="3px solid"
              mb="36px"
              type="text"
              onChange={handleChange('rfc')}
              defaultValue={values.rfc}
              placeholder="RFC"
              size="lg"
            />
            <FormLabel>Rol</FormLabel>
            <Select borderRadius="15px" border="3px solid" mb="36px" type="text" 
              onChange={handleChange('rol')} name="rol" size="lg">
              <option value="0">Selecciona una opcion</option>
              <option value="Empleado">Empleado</option>
              <option value="Almacen">Almacenista</option>
              <option value="Contador">Contador</option>
              <option value="Gerente">Gerente</option>
            </Select>
            <CardBody>
                <Button
                    type="submit"
                    bg="red.500"
                    w="auto"
                    h="45"
                    mb="20px"
                    color="white"
                    mt="20px"
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
                    Siguiente
                </Button>
            </CardBody>
        </>
            
        )
    }
}

export default Personales;


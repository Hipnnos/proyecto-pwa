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

export class Domicilio extends Component {
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
                    Datos del domicilio
                  </Text>
                  &nbsp;&nbsp;&nbsp;
                </CardHeader>
                {/* DATOS DOMICILIO */}
                <FormLabel w="auto">Dirección</FormLabel>
                <Input
                  borderRadius="15px"
                  border="3px solid"
                  mb="36px"
                  w="30%"
                  type="text"
                  onChange={handleChange('calle')}                
                  defaultValue={values.calle}
                  placeholder="Calle"
                  size="lg"
                />&nbsp;
                <Input
                  borderRadius="15px"
                  border="3px solid"
                  mb="36px"
                  w="35%"
                  type="text"
                  onChange={handleChange('colonia')}                
                  defaultValue={values.colonia}
                  placeholder="Colonia"
                  size="lg"
                />&nbsp;
                <Input
                  borderRadius="15px"
                  border="3px solid"
                  mb="36px"
                  w="15%"
                  type="text"
                  onChange={handleChange('num_casa')}                
                  defaultValue={values.num_casa}
                  placeholder="Num. Ext"
                  size="lg"
                />&nbsp;
                <Input
                  borderRadius="15px"
                  border="3px solid"
                  mb="36px"
                  w="15%"
                  type="text"
                  onChange={handleChange('codigo_postal')}                
                  defaultValue={values.codigo_postal}
                  placeholder="C.P"
                  size="lg"
                />
                <FormLabel w="auto">Estado</FormLabel>
                <Input
                  borderRadius="15px"
                  border="3px solid"
                  mb="36px"
                  type="text"
                  onChange={handleChange('estado')}                
                  defaultValue={values.estado}
                  mb="36px"
                  size="lg"
                />
                <FormLabel w="auto">Municipio</FormLabel>
                <Input
                  borderRadius="15px"
                  border="3px solid"
                  mb="36px"
                  type="text"
                  onChange={handleChange('municipio')}                
                  defaultValue={values.municipio}
                  mb="36px"
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
                        Siguiente
                    </Button>
                </CardBody>
            </>
        )
    }
}

export default Domicilio;


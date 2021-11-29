import React, { Component } from "react";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// Chakra imports
import {
    Button,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/react";

export class DatosSolicitar extends Component {
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
            <FormLabel>Motivo</FormLabel>
            <Input
              borderRadius="15px"
              border="3px solid"
              mb="24px"
              type="text"
              placeholder="Motivo"
              size="lg"
            />
            <FormLabel>Observaciones</FormLabel>
            <Input
              borderRadius="15px"
              border="3px solid"
              mb="36px"
              type="text"
              placeholder="Observaciones"
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

export default DatosSolicitar;


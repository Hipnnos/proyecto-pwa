import React, { Component } from "react";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// Chakra imports
import {
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Confirmar = ({ prevStep, nextStep, values }) => {
  
  console.log(values);

  const { nombre,apePaterno,apeMaterno,telefono,curp,rfc,correo,password,calle,
    num_casa,colonia,municipio,estado,codigo_postal } = values;

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <>
        <FormLabel value={nombre}>{nombre}</FormLabel>
        <FormLabel value={apePaterno}>{apePaterno}</FormLabel>
        <FormLabel value={apeMaterno}>{apeMaterno}</FormLabel>
        <FormLabel value={telefono}>{telefono}</FormLabel>
        <FormLabel value={curp}>{curp}</FormLabel>
        <FormLabel value={rfc}>{rfc}</FormLabel>
        <FormLabel value={correo}>{correo}</FormLabel>
        <FormLabel value={password}>{password}</FormLabel>
        <FormLabel value={calle}>{calle}</FormLabel>
        <FormLabel value={colonia}>{colonia}</FormLabel>
        <FormLabel value={num_casa}>{num_casa}</FormLabel>
        <FormLabel value={municipio}>{municipio}</FormLabel>
        <FormLabel value={estado}>{estado}</FormLabel>
        <FormLabel value={codigo_postal}>{codigo_postal}</FormLabel>
        <CardBody>
          <Button
            type="submit"
            bg="red.500"
            w="auto"
            h="45"
            mb="20px"
            color="white"
            mt="20px"
            onClick={Previous}
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
            onClick={Continue}
            _hover={{
              bg: "green.200",
            }}
            _active={{
              bg: "green.400",
            }}
          >
            Registrar
          </Button>
        </CardBody>
    </>
  )
}

export default Confirmar
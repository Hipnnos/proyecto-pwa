// Chakra imports
import React from "react";
// Chakra imports
import {Flex,Button,} from "@chakra-ui/react";
// Custom components
import CardHeader from "components/Card/CardHeader.js";

function TablesPrestamo() {

  const rol = localStorage.getItem("rol");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <CardHeader p="6px 0px 22px 0px">
        {rol == "Administrador" || "Gerente" ? 
          <Button color="blue.500">Solicitar</Button>: null
        }
      </CardHeader>
    </Flex>
  );
}

export default TablesPrestamo;

import React from 'react'
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// Chakra imports
import {
  Flex,
  FormControl,
  Text,
} from "@chakra-ui/react";
import DatosSolicitar from './StepsSolicitar/DatosSolicitar';

const Solicitar = () => {  

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" fontWeight="bold">
            Solicitar prestamos
          </Text>
          &nbsp;&nbsp;&nbsp;
        </CardHeader>
        <CardBody>
          <FormControl >
            <DatosSolicitar />
          </FormControl>
        </CardBody>
      </Card>
    </Flex>
  )

  
}

export default Solicitar;
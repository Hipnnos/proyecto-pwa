import React from 'react'
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
// Chakra imports
import {
  Flex,
  FormControl,
} from "@chakra-ui/react";
import UserForm from './UserForm';

export default function Registro() {

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardBody>
          <FormControl >
            <UserForm />
          </FormControl>
        </CardBody>
      </Card>
    </Flex>
  )
  
}

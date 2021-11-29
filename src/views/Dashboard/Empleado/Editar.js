import React from "react";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
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

import UserFormEdit from './UserFormEdit';

function Editar() {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Editar
          </Text>
          &nbsp;&nbsp;&nbsp;
        </CardHeader>
        <CardBody>
          <FormControl>
            <UserFormEdit />
          </FormControl>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Editar;

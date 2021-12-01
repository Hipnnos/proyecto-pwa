import React from "react";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";

// Chakra imports
import {Flex,FormControl,} from "@chakra-ui/react";

import UserFormEdit from './UserFormEdit';

function Editar() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
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

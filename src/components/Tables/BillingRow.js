import {Box,Button,Flex,Icon,Text,useColorModeValue,Avatar} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { name, email, direction, rfc, numTel, logo } = props;

  return (
    <Box p="24px" bg={bgColor} my="10px" borderRadius="12px" border="1px solid black">
      <Flex justify="space-between" w="90%">
        <Flex direction="column" maxWidth="80%">
          {/* <Avatar src={logo} w="50px" borderRadius="12px" me="18px" /> */}
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {name}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Email:{" "}
            <Text as="span" color="gray.500">
              {email}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Direccción:{" "}
            <Text as="span" color="gray.500">
              {direction}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            RFC:{" "}
            <Text as="span" color="gray.500">
              {rfc}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Numero de Teléfono:{" "}
            <Text as="span" color="gray.500">
              {numTel}
            </Text>
          </Text>
        </Flex>
        <Flex direction={{ sm: "column", md: "row" }} align="flex-start" p={{ md: "24px" }}>
          <Button p="0px" bg="transparent">
            <Flex color="green.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDITAR
              </Text>
            </Flex>
          </Button>
          <Button p="0px" bg="transparent" mb={{ sm: "10px", md: "0px" }} me={{ md: "12px" }}>
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                ELIMINAR
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;

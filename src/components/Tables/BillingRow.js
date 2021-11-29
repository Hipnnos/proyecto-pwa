import {Box,Button,Flex,Icon,Text,useColorModeValue} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function BillingRow(props) {
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { nombre, apePaterno, apeMaterno, telefono, curp, rfc, correo, calle, num_casa, colonia, municipio, codigo_postal, estado } = props;

  return (
    <Box p="24px" bg={bgColor} my="10px" borderRadius="12px" border="1px solid black">
      <Flex justify="space-between" w="90%">
        <Flex direction="column" maxWidth="80%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {nombre} {apePaterno} {apeMaterno}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Direccción:{" "}
            <Text as="span" color="gray.500">
              {calle} #{num_casa}, Col. {colonia}, #{codigo_postal}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Teléfono:{" "}
            <Text as="span" color="gray.500">
              {telefono}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Correo:{" "}
            <Text as="span" color="gray.500">
              {correo}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            CURP:{" "}
            <Text as="span" color="gray.500">
              {curp}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            RFC:{" "}
            <Text as="span" color="gray.500">
              {rfc}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Estado:{" "}
            <Text as="span" color="gray.500">
              {estado}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Municipio:{" "}
            <Text as="span" color="gray.500">
              {municipio}
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

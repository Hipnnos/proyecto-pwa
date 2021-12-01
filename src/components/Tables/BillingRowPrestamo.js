import {Box,Button,Flex,Icon,Text,useColorModeValue} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function BillingRowPrestamo(props) {
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { motivo, observaciones, cantidad, fechaEntrega,
    motivo_cancelacion, motivo_devolucion, id_user, id_insumo } = props;

  return (
    <Box p="24px" bg={bgColor} my="10px" borderRadius="12px" border="1px solid black">
      <Flex justify="space-between" w="90%">
        <Flex direction="column" maxWidth="80%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {motivo}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Observaciones:{" "}
            <Text as="span" color="gray.500">
              {observaciones}
            </Text>
          </Text>
        </Flex>
        <Flex direction={{ sm: "column", md: "row" }} align="flex-start" p={{ md: "24px" }}>
          <NavLink to={"/admin/prestamos"}>
          <Button p="0px" bg="transparent">
            <Flex color="green.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDITAR
              </Text>
            </Flex>
          </Button>
          </NavLink>
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

export default BillingRowPrestamo;

// Chakra Imports
import {Box,Button,Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerHeader,Flex,Text,useColorMode,} from "@chakra-ui/react";
import { Separator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React from "react";

export default function Configurator(props) {

  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  if (props.secondary) {
    fixedDisplay = "none";
  }

  const settingsRef = React.useRef();
  return (
    <>
      <Drawer isOpen={props.isOpen} onClose={props.onClose} placement={document.documentElement.dir === "rtl" ? "left" : "right"} finalFocusRef={settingsRef} blockScrollOnMount={false}>
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px" textAlign="center">
              Configurador de interfaz de usuario
            </Text>
            <Text fontSize="md" mb="16px">
              Consulte las opciones de su panel de control.
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Box>
                <Text fontSize="md" fontWeight="600">
                  Tipo de Sidenav
                </Text>
                <Text fontSize="sm" mb="16px">
                  Elija entre 2 tipos diferentes de navegación lateral.
                </Text>
                <Flex>
                  <Button w="50%" p="8px 32px" me="8px" colorScheme="teal" borderColor="blue.500" color="blue.500" variant="outline" fontSize="xs" onClick={props.onTransparent} >
                    Transparente
                  </Button>
                  <Button type="submit" bg="blue.500" w="50%" p="8px 32px" mb={5} _hover="blue.500" color="white" fontSize="xs" onClick={props.onOpaque}>
                    Opaco
                  </Button>
                </Flex>
              </Box>
              <Flex justifyContent="space-between" alignItems="center" mb="24px">
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Oscuro/Luz
                </Text>
                <Button onClick={toggleColorMode}>
                  Palanca {colorMode === "light" ? "Oscuro" : "Luz"}
                </Button>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};

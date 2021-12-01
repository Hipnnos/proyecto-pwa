import {Box,Button,Flex,Icon,Text,useColorModeValue,} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import CardHeader from "components/Card/CardHeader.js";

function BillingRow(props) {
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const {nombre,apePaterno,apeMaterno,telefono,curp,rfc,correo,calle,num_casa,colonia,municipio,codigo_postal,estado,id_empleado,rol} = props;


  const edit=()=>{
    fetch("http://ws-insumo.wsmprastreo.com.mx/api/empleados/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMGM5MjczNmU5ODZhMzQwNjI3MzNkZGQwYTE5ODY3ZTU2ZTMxZjJlNDQxMGU0MDQyZmEwZTE0NDE1YjNkYTAwZTk4ZmY5OTMxODFiOWQ4NGMiLCJpYXQiOjE2MzgxNDI4MjEuOTYxNzA5MDIyNTIxOTcyNjU2MjUsIm5iZiI6MTYzODE0MjgyMS45NjE3MTQwMjkzMTIxMzM3ODkwNjI1LCJleHAiOjE2Njk2Nzg4MjEuOTU1NjU3OTU4OTg0Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.egBHmioR_BWObsj-PCkdW4XTdVdAYfYDpx31_OYmRAc70OJvQ9gNZT9k1jEQnXOLSLtw3HwY14oPqZi5-5tWvp3NgD0nm2_Qap7IFEABvKfG6dEhw24AdXjCDC0qDb-UBtLXhgEUY6s34NNfznSR1QHjdNzfuwIKrT3GpMdIXb1fA0trBxR_1CyMecinJDEoAJ1-VF5Da2mmJx9yElAEGWh2aGpJmIbRk9U3RvXmQfDq4ZZH_K9Sk_ZWwEXWrgz2S04vo_Af9TTCaOaimCPwF62M4_wMLOazlRItjZigIuMqsGmVXhfqRGuunIhQfb6qp9b_H4axiQ9mJcpN2mGCIR316Nr9qvPxe2lBM7uOgc91tyxsukvRvb8w4W1lixdvCfeXwIqa-oCNgzapZZYYsHjLW5-U03QAAF6QIi1LC5HGxaawErmpGuFIDo_DlSk3GisWPjj-nmtH0Em9sInuYT0AbE3yaM3-iHoSL1mHXZ4hpLmkZuvyEVOKb3jIJ2fyAmZPZAfgxXCiFYlIeeZYUqObYXZcjn-s-QsaF7gVghWTYmUdz8DQ_wI6Q6dZ1TX5T-aCtoT6-D5uv_6VNoBk-Y1Yz6QqYcaS87googSaLgR0ZyBCYQ5rbfCAB0rF1UCLc4u6gPRgI6xROAEYHPAepFZuyEMYHFvgST8mv0WfCoU`,
      },
    })
      .then((response) => response.json())
      .then((empleados) => {
        var empleados = empleados['Empleados'];
        empleados.forEach(empleado => {
            if(empleado.id_user==id_empleado)
            {
              var arregloEmpleado={
                'id_empleado': empleado.id,
                'nombre':empleado.nombre,
                'apePaterno':empleado.apePaterno,
                'apeMaterno':empleado.apeMaterno,
                'telefono':empleado.telefono,
                'curp':empleado.curp,
                'rfc':empleado.rfc,
                'correo':empleado.correo,
                'calle':empleado.calle,
                'num_casa':empleado.num_casa,
                'colonia':empleado.colonia,
                'codigo_postal':empleado.codigo_postal,
                'municipio':empleado.municipio,
                'estado':empleado.estado,
                'id_user': empleado.id_user,
                'rol': empleado.rol
              };
              console.log(arregloEmpleado);
              localStorage.setItem('Empleado',JSON.stringify(arregloEmpleado));
              console.log(typeof arregloEmpleado)
              window.location.href = "/purity-ui-dashboard#/admin/editar";
            }
        });
        // console.log(empleados['Empleados']);
        // console.log(empleados);
        console.log(empleados)
        // setState(empleado);
      });
  };
  const onClickDelete = () => {
    var data = {
      id_empleado: id_empleado,
    };

   
    console.log(data);
    fetch("http://ws-insumo.wsmprastreo.com.mx/api/empleado/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: 'sucess',
          title: 'Empleado Eliminado',
        })
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  
      const [state, setState] = useState(['']);
      useEffect(() => {
       
    }, []);
  

  return (
    <Box p="24px" bg={bgColor} my="10px" borderRadius="12px" border="1px solid">
      <Flex justify="space-between" w="85%">
        <Flex direction="column" maxWidth="90%">
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
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Rol:{" "}
            <Text as="span" color="gray.500">
              {rol}
            </Text>
          </Text>
        </Flex>
        <Flex direction={{ sm: "column", md: "row" }} align="flex-start" p={{ md: "24px" }}>
          <CardHeader p="6px 0px 22px 0px">
            <table>
              <tr>
                <Button p="0px" bg="transparent" onClick={edit}>
                  <Flex color="green.500" cursor="pointer" align="center" p="12px">
                    <Icon as={FaPencilAlt} me="4px" />
                    <Text fontSize="sm" fontWeight="semibold">
                      EDITAR
                    </Text>
                  </Flex>
                </Button>
              </tr>
              <tr><th><th></th></th></tr>
              <tr>
                <Button p="0px" bg="transparent" mb={{ sm: "10px", md: "0px" }} me={{ md: "12px" }} onClick={onClickDelete} >
                  <Text type="hidden" value="inputV" />
                  <Flex color="red.500" cursor="pointer" align="center" p="12px">
                    <Icon as={FaTrashAlt} me="4px" />
                    <Text fontSize="sm" fontWeight="semibold">
                      ELIMINAR
                    </Text>
                  </Flex>
                </Button>
              </tr>
            </table>
          </CardHeader>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;

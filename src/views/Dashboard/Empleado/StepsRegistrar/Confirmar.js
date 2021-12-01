import React from "react";
import CardBody from "components/Card/CardBody.js";
import Swal from "sweetalert2";
// Chakra imports
import { Button, FormLabel, Text } from "@chakra-ui/react";
import CardHeader from "components/Card/CardHeader.js";

const Confirmar = ({ prevStep, nextStep, values }) => {
  console.log(values);

  const {
    nombre,
    apePaterno,
    apeMaterno,
    telefono,
    curp,
    rfc,
    correo,
    password,
    calle,
    num_casa,
    colonia,
    municipio,
    estado,
    codigo_postal,
    rol
  } = values;

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const onClickAgregar = () => {
    var data = {
      nombre: nombre,
      apePaterno: apePaterno,
      apeMaterno: apeMaterno,
      telefono: telefono,
      curp: curp,
      rfc: rfc,
      correo: correo,
      password: password,
      calle: calle,
      num_casa: num_casa,
      colonia: colonia,
      municipio: municipio,
      estado: estado,
      codigo_postal: codigo_postal,
      rol: rol
    };
    console.log(data);
    fetch("http://ws-insumo.wsmprastreo.com.mx/api/empleado/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMGM5MjczNmU5ODZhMzQwNjI3MzNkZGQwYTE5ODY3ZTU2ZTMxZjJlNDQxMGU0MDQyZmEwZTE0NDE1YjNkYTAwZTk4ZmY5OTMxODFiOWQ4NGMiLCJpYXQiOjE2MzgxNDI4MjEuOTYxNzA5MDIyNTIxOTcyNjU2MjUsIm5iZiI6MTYzODE0MjgyMS45NjE3MTQwMjkzMTIxMzM3ODkwNjI1LCJleHAiOjE2Njk2Nzg4MjEuOTU1NjU3OTU4OTg0Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.egBHmioR_BWObsj-PCkdW4XTdVdAYfYDpx31_OYmRAc70OJvQ9gNZT9k1jEQnXOLSLtw3HwY14oPqZi5-5tWvp3NgD0nm2_Qap7IFEABvKfG6dEhw24AdXjCDC0qDb-UBtLXhgEUY6s34NNfznSR1QHjdNzfuwIKrT3GpMdIXb1fA0trBxR_1CyMecinJDEoAJ1-VF5Da2mmJx9yElAEGWh2aGpJmIbRk9U3RvXmQfDq4ZZH_K9Sk_ZWwEXWrgz2S04vo_Af9TTCaOaimCPwF62M4_wMLOazlRItjZigIuMqsGmVXhfqRGuunIhQfb6qp9b_H4axiQ9mJcpN2mGCIR316Nr9qvPxe2lBM7uOgc91tyxsukvRvb8w4W1lixdvCfeXwIqa-oCNgzapZZYYsHjLW5-U03QAAF6QIi1LC5HGxaawErmpGuFIDo_DlSk3GisWPjj-nmtH0Em9sInuYT0AbE3yaM3-iHoSL1mHXZ4hpLmkZuvyEVOKb3jIJ2fyAmZPZAfgxXCiFYlIeeZYUqObYXZcjn-s-QsaF7gVghWTYmUdz8DQ_wI6Q6dZ1TX5T-aCtoT6-D5uv_6VNoBk-Y1Yz6QqYcaS87googSaLgR0ZyBCYQ5rbfCAB0rF1UCLc4u6gPRgI6xROAEYHPAepFZuyEMYHFvgST8mv0WfCoU`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/purity-ui-dashboard#/admin/empleados/";
        Swal.fire({
          icon: "sucess",
          title: "Empleado Agregado",
        });
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
  }

  return (
    <>
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" fontWeight="bold">
          Confirmación de Datos
        </Text>
        &nbsp;&nbsp;&nbsp;
      </CardHeader>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Nombre</th>
            <th className="col">Apellido paterno</th>
            <th className="col">Apellido materno</th>
            <th className="col">CURP</th>
            <th className="col">RFC</th>
            <th className="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FormLabel value={nombre}>{nombre}</FormLabel>
            </td>
            <td>
              <FormLabel value={apePaterno}>{apePaterno}</FormLabel>
            </td>
            <td>
              <FormLabel value={apeMaterno}>{apeMaterno}</FormLabel>
            </td>
            <td>
              <FormLabel value={curp}>{curp}</FormLabel>
            </td>
            <td>
              <FormLabel value={rfc}>{rfc}</FormLabel>
            </td>
            <td>
              <FormLabel value={rol}>{rol}</FormLabel>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="col">Calle</th>
            <th className="col">Colonia</th>
            <th className="col">Numero de casa</th>
            <th className="col">Codigo Postal</th>
            <th className="col">Estado</th>
            <th className="col">Municipio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FormLabel value={calle}>{calle}</FormLabel>
            </td>
            <td>
              <FormLabel value={colonia}>{colonia}</FormLabel>
            </td>
            <td>
              <FormLabel value={num_casa}>{num_casa}</FormLabel>
            </td>
            <td>
              <FormLabel value={codigo_postal}>{codigo_postal}</FormLabel>
            </td>
            <td>
              <FormLabel value={estado}>{estado}</FormLabel>
            </td>
            <td>
              <FormLabel value={municipio}>{municipio}</FormLabel>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="col">Número de Celular</th>
            <th className="col">Correo electrónico</th>
            <th className="col">Contraseña</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FormLabel value={telefono}>{telefono}</FormLabel>
            </td>
            <td>
              <FormLabel value={correo}>{correo}</FormLabel>
            </td>
            <td>
              <FormLabel value={password}>{password}</FormLabel>
            </td>
          </tr>
        </tbody>
      </table>
      <CardBody>
        <Button
          type="submit"
          bg="red.500"
          w="auto"
          h="45"
          mb="20px"
          color="white"
          mt="20px"
          onClick={Previous}
          _hover={{ bg: "red.200" }}
          _active={{ bg: "red.400" }}
        >
          Regresar
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          type="submit"
          bg="green.500"
          w="auto"
          h="45"
          mb="20px"
          color="white"
          mt="20px"
          _hover={{ bg: "green.200" }}
          _active={{ bg: "green.400" }}
          onClick={onClickAgregar}
        >
          Registrar
        </Button>
      </CardBody>
    </>
  );
};

export default Confirmar;

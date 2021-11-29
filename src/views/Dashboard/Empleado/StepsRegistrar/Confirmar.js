import React, { Component } from "react";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Swal from "sweetalert2";
// Chakra imports
import { Button, FormLabel, Input } from "@chakra-ui/react";

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
  } = values;

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const onClicRegistro = () => {
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
        if (!data) {
          Swal.fire({
            title: "Error!",
            text: "Credenciales incorrectas",
            icon: "error",
          });
        } else {
          localStorage.setItem("nombre", data.nombre);
          localStorage.setItem("apePaterno", data.apePaterno);
          localStorage.setItem("apeMaterno", data.apeMaterno);
          localStorage.setItem("telefono", data.telefono);
          localStorage.setItem("curp", data.curp);
          localStorage.setItem("rfc", data.rfc);
          localStorage.setItem("correo", data.correo);
          localStorage.setItem("password", data.password);
          localStorage.setItem("calle", data.calle);
          localStorage.setItem("num_casa", data.num_casa);
          localStorage.setItem("colonia", data.colonia);
          localStorage.setItem("estado", data.estado);
          localStorage.setItem("municipio", data.municipio);
          localStorage.setItem("codigo_postal", data.codigo_postal);
          console.log(data);
          window.location.href = "/purity-ui-dashboard#/admin/empleados/";
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      })
      .catch((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <FormLabel value={nombre}>{nombre}</FormLabel>
      <FormLabel value={apePaterno}>{apePaterno}</FormLabel>
      <FormLabel value={apeMaterno}>{apeMaterno}</FormLabel>
      <FormLabel value={telefono}>{telefono}</FormLabel>
      <FormLabel value={curp}>{curp}</FormLabel>
      <FormLabel value={rfc}>{rfc}</FormLabel>
      <FormLabel value={correo}>{correo}</FormLabel>
      <FormLabel value={password}>{password}</FormLabel>
      <FormLabel value={calle}>{calle}</FormLabel>
      <FormLabel value={colonia}>{colonia}</FormLabel>
      <FormLabel value={num_casa}>{num_casa}</FormLabel>
      <FormLabel value={municipio}>{municipio}</FormLabel>
      <FormLabel value={estado}>{estado}</FormLabel>
      <FormLabel value={codigo_postal}>{codigo_postal}</FormLabel>
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
          _hover={{
            bg: "red.200",
          }}
          _active={{
            bg: "red.400",
          }}
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
          _hover={{
            bg: "green.200",
          }}
          _active={{
            bg: "green.400",
          }}
          onClick={onClicRegistro}
        >
          Registrar
        </Button>
      </CardBody>
    </>
  );
};

export default Confirmar;

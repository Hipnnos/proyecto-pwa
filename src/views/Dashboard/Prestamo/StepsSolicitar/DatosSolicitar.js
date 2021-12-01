import React, { useState, useEffect, useReducer } from "react";
import CardBody from "components/Card/CardBody.js";
// Chakra imports
import {
  Button,
  FormLabel,
  Input,
  Select,
  Switch,
  FormControl
} from "@chakra-ui/react";
import CantidadInsumo from "./CantidadInsumo";

const DatosSolicitar = () => {
  
  const cantidadJS = localStorage.getItem("cantidad");

  const init = () => {
    //Definimos el localStorage      
    return cantidadJS ? JSON.stringify(cantidadJS) : [];
  };

  const [formView, setFormView] = useState(false);

  const [estado] = useReducer(CantidadInsumo, [], init);

  const [state, setState] = useState(['']);

  const [values, setValues] = useState({
    motivo: '', observaciones: '', cantidad: '', fechaEntrega: '',
    motivo_cancelacion: '', motivo_devolucion: '', id_user: localStorage.getItem('id_user'), id_insumo: ''
  });

  const { motivo, observaciones, cantidad, fechaEntrega,
    motivo_cancelacion, motivo_devolucion, id_user, id_insumo } = values;

  useEffect(() => {
    
    fetch("http://ws-insumo.wsmprastreo.com.mx/api/insumos/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMGM5MjczNmU5ODZhMzQwNjI3MzNkZGQwYTE5ODY3ZTU2ZTMxZjJlNDQxMGU0MDQyZmEwZTE0NDE1YjNkYTAwZTk4ZmY5OTMxODFiOWQ4NGMiLCJpYXQiOjE2MzgxNDI4MjEuOTYxNzA5MDIyNTIxOTcyNjU2MjUsIm5iZiI6MTYzODE0MjgyMS45NjE3MTQwMjkzMTIxMzM3ODkwNjI1LCJleHAiOjE2Njk2Nzg4MjEuOTU1NjU3OTU4OTg0Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.egBHmioR_BWObsj-PCkdW4XTdVdAYfYDpx31_OYmRAc70OJvQ9gNZT9k1jEQnXOLSLtw3HwY14oPqZi5-5tWvp3NgD0nm2_Qap7IFEABvKfG6dEhw24AdXjCDC0qDb-UBtLXhgEUY6s34NNfznSR1QHjdNzfuwIKrT3GpMdIXb1fA0trBxR_1CyMecinJDEoAJ1-VF5Da2mmJx9yElAEGWh2aGpJmIbRk9U3RvXmQfDq4ZZH_K9Sk_ZWwEXWrgz2S04vo_Af9TTCaOaimCPwF62M4_wMLOazlRItjZigIuMqsGmVXhfqRGuunIhQfb6qp9b_H4axiQ9mJcpN2mGCIR316Nr9qvPxe2lBM7uOgc91tyxsukvRvb8w4W1lixdvCfeXwIqa-oCNgzapZZYYsHjLW5-U03QAAF6QIi1LC5HGxaawErmpGuFIDo_DlSk3GisWPjj-nmtH0Em9sInuYT0AbE3yaM3-iHoSL1mHXZ4hpLmkZuvyEVOKb3jIJ2fyAmZPZAfgxXCiFYlIeeZYUqObYXZcjn-s-QsaF7gVghWTYmUdz8DQ_wI6Q6dZ1TX5T-aCtoT6-D5uv_6VNoBk-Y1Yz6QqYcaS87googSaLgR0ZyBCYQ5rbfCAB0rF1UCLc4u6gPRgI6xROAEYHPAepFZuyEMYHFvgST8mv0WfCoU`,
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        console.log(datos['insumos'])
        setState(datos['insumos']);
      });
  }, []);


  const handleChange = name => (e) => {
    console.log(values)
    setValues({ ...values, [name]: e.target.value });
  };

  const onClickSolicitar = () => {
    
    var can=JSON.parse(cantidadJS)
    console.log(can['cantidad'])

    var data = {
      motivo: motivo, observaciones: observaciones, id_insumo: id_insumo, id_user: id_user, cantidad: can['cantidad'],
    }

    console.log(data);

    fetch("http://ws-insumo.wsmprastreo.com.mx/api/prestamo/solicitud", {
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
          //
          console.log(data);
          // window.location.href = "/purity-ui-dashboard#/admin/prestamos/";
          // setTimeout(() => {
          //   window.location.reload();
          // }, 500);
        }
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
      {/* DATOS PERSONALES */}
      <FormLabel>Motivo</FormLabel>
      <Input
        borderRadius="15px"
        border="3px solid"
        mb="24px"
        type="text"
        placeholder="Motivo"
        name="motivo"
        onChange={handleChange('motivo')}
        value={motivo}
        size="lg"
      />
      <FormLabel>Observaciones</FormLabel>
      <Input
        borderRadius="15px"
        border="3px solid"
        mb="36px"
        type="text"
        name="observaciones"
        onChange={handleChange('observaciones')}
        value={observaciones}
        placeholder="Observaciones"
        size="lg"
      />

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Insumos consumibles?
        </FormLabel>
        <Switch
          onChange={() => setFormView(!formView)}>
            {!formView ? "" : ""}
        </Switch>
      </FormControl>
      &nbsp;&nbsp;&nbsp;
      {formView && <CantidadInsumo value={cantidadJS} />}
      &nbsp;&nbsp;&nbsp;
      <FormLabel>Insumo</FormLabel>
      <Select
        borderRadius="15px"
        border="3px solid"
        mb="36px"
        placeholder="Selecciona un insumo"
        size="lg"
        onChange={handleChange('id_insumo')}
        name="id_insumo">
        {state.map(row => (         
          <option value={row.id}>{row.nombre}</option>
        ))}
      </Select>
      <CardBody>
        <Button
          type="submit"
          bg="red.500"
          w="auto"
          h="45"
          mb="20px"
          color="white"
          mt="20px"
          _hover={{
            bg: "red.200",
          }}
          _active={{
            bg: "red.400",
          }}
        >
          Cancelar
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
          onClick={onClickSolicitar}
          _hover={{
            bg: "green.200",
          }}
          _active={{
            bg: "green.400",
          }}
        >
          Solicitar
        </Button>
      </CardBody>
    </>

  )
}

export default DatosSolicitar;


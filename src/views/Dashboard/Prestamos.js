// Chakra imports
import React, { useState, useEffect  } from "react";
// Chakra imports
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { NavLink } from "react-router-dom";
import BillingRowPrestamo from "components/Tables/BillingRowPrestamo";

const TablesPrestamo = () => {

  const [state, setState] = useState(['']);

  console.log(state)

  useEffect(() => {
    fetch("http://ws-insumo.wsmprastreo.com.mx/api/prestamos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMGM5MjczNmU5ODZhMzQwNjI3MzNkZGQwYTE5ODY3ZTU2ZTMxZjJlNDQxMGU0MDQyZmEwZTE0NDE1YjNkYTAwZTk4ZmY5OTMxODFiOWQ4NGMiLCJpYXQiOjE2MzgxNDI4MjEuOTYxNzA5MDIyNTIxOTcyNjU2MjUsIm5iZiI6MTYzODE0MjgyMS45NjE3MTQwMjkzMTIxMzM3ODkwNjI1LCJleHAiOjE2Njk2Nzg4MjEuOTU1NjU3OTU4OTg0Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.egBHmioR_BWObsj-PCkdW4XTdVdAYfYDpx31_OYmRAc70OJvQ9gNZT9k1jEQnXOLSLtw3HwY14oPqZi5-5tWvp3NgD0nm2_Qap7IFEABvKfG6dEhw24AdXjCDC0qDb-UBtLXhgEUY6s34NNfznSR1QHjdNzfuwIKrT3GpMdIXb1fA0trBxR_1CyMecinJDEoAJ1-VF5Da2mmJx9yElAEGWh2aGpJmIbRk9U3RvXmQfDq4ZZH_K9Sk_ZWwEXWrgz2S04vo_Af9TTCaOaimCPwF62M4_wMLOazlRItjZigIuMqsGmVXhfqRGuunIhQfb6qp9b_H4axiQ9mJcpN2mGCIR316Nr9qvPxe2lBM7uOgc91tyxsukvRvb8w4W1lixdvCfeXwIqa-oCNgzapZZYYsHjLW5-U03QAAF6QIi1LC5HGxaawErmpGuFIDo_DlSk3GisWPjj-nmtH0Em9sInuYT0AbE3yaM3-iHoSL1mHXZ4hpLmkZuvyEVOKb3jIJ2fyAmZPZAfgxXCiFYlIeeZYUqObYXZcjn-s-QsaF7gVghWTYmUdz8DQ_wI6Q6dZ1TX5T-aCtoT6-D5uv_6VNoBk-Y1Yz6QqYcaS87googSaLgR0ZyBCYQ5rbfCAB0rF1UCLc4u6gPRgI6xROAEYHPAepFZuyEMYHFvgST8mv0WfCoU`,
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        setState(datos['Prestamos']);
      });
  }, []);


  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" fontWeight="bold">
            Prestamos
          </Text>
          &nbsp;&nbsp;&nbsp;
          <NavLink to="/admin/solicitar">
            <Button>
              <Text>Solicitar</Text>
            </Button>
          </NavLink>
        </CardHeader>
        {state.map(row => (
          <BillingRowPrestamo
            motivo = {row.motivo}
           />
        ))}
      </Card>
    </Flex>
  );
}

export default TablesPrestamo;
import React, { useState } from 'react';
// Chakra imports
import {
    FormLabel,
    Input,
} from "@chakra-ui/react";

const CantidadInsumo = () => {
    const [data, setData] = useState({ cantidad: 0, });

    const { cantidad } = data;

    const handleChange = name => (e) => {
        //Modificamos el estado.
        //console.log(data)
        setData({
          ...data,
          [name]: parseInt(e.target.value),
        });
        localStorage.setItem("cantidad", JSON.stringify(data));
      };
    


    return (
        <>
            <FormLabel>Cantidad</FormLabel>
            <Input
                borderRadius="15px"
                border="3px solid"
                mb="24px"
                type="number"
                placeholder="Cantidad"
                name="cantidad"
                onChange={handleChange('cantidad')}
                value={cantidad}
                size="lg"
            />
        </>
    )
}

export default CantidadInsumo

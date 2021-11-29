import React, { Component } from 'react';
import DatosSolicitar from '../Prestamo/StepsSolicitar/DatosSolicitar'

export class UserForm extends Component {
  state = {
    step: 1,
    motivo: "",
    observaciones: "",
    fechaSoliciud: "",
    cantidad: "",
    motivoCancelacion: "",
    motivoDevolucion: "",
    idEmpleado: "",
    fechaEntrega: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { nombre, apePaterno, apeMaterno, telefono, curp, rfc, correo, password, calle,
      num_casa, colonia, municipio, estado, codigo_postal, } = this.state;
    const values = {
      nombre, apePaterno, apeMaterno, telefono, curp, rfc, correo, password, calle,
      num_casa, colonia, municipio, estado, codigo_postal,
    };

    console.log(values);

    switch (step) {
      case 1:
        return (
          <DatosSolicitar />
        );

      default:
        (console.log('Esto es un multi-step echo en React.'))
    }
  }
}

export default UserForm;

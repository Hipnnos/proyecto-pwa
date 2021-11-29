import React, { Component } from 'react';
import Contacto from './StepsRegistrar/Contacto';
import Domicilio from './StepsRegistrar/Domicilio';
import Personales from './StepsRegistrar/Personales';
import Confirmar from './StepsRegistrar/Confirmar';

export class UserForm extends Component {
  state = {
    step: 1,
    nombre: "",
    apePaterno: "",
    apeMaterno: "",
    telefono: "",
    curp: "",
    rfc: "",
    correo: "",
    password: "",
    calle: "",
    num_casa: "",
    colonia: "",
    municipio: "",
    estado: "",
    codigo_postal: "",
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
    const { nombre,apePaterno,apeMaterno,telefono,curp,rfc,correo,password,calle,
    num_casa,colonia,municipio,estado,codigo_postal, } = this.state;
    const values = { nombre,apePaterno,apeMaterno,telefono,curp,rfc,correo,password,calle,
      num_casa,colonia,municipio,estado,codigo_postal,};

    console.log(values);

    switch (step) {
      case 1:
        return (
          <Personales
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Domicilio
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Contacto
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmar
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        (console.log('Esto es un multi-step echo en React.'))
    }
  }
}

export default UserForm;

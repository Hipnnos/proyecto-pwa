import React, { Component } from "react";
import Contacto from "./StepsEditar/Contacto";
import Domicilio from "./StepsEditar/Domicilio";
import Personales from "./StepsEditar/Personales";
import Confirmar from './StepsEditar/Confirmar';

export class UserForm extends Component {
  empleado = JSON.parse(localStorage.getItem("Empleado"));
  state = {
    step: 1,
    id_empleado: this.empleado["id_empleado"],
    nombre: this.empleado["nombre"],
    apePaterno: this.empleado["apePaterno"],
    apeMaterno: this.empleado["apeMaterno"],
    telefono: this.empleado["telefono"],
    curp: this.empleado["curp"],
    rfc: this.empleado["rfc"],
    correo: this.empleado["correo"],
    calle: this.empleado["calle"],
    num_casa: this.empleado["num_casa"],
    colonia: this.empleado["colonia"],
    municipio: this.empleado["minicipio"],
    estado: this.empleado["estado"],
    codigo_postal: this.empleado["codigo_postal"],
    id_user: this.empleado["id_user"],
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      id_empleado,
      nombre,
      apePaterno,
      apeMaterno,
      telefono,
      curp,
      rfc,
      correo,
      calle,
      num_casa,
      colonia,
      municipio,
      estado,
      codigo_postal,
    } = this.state;
    const values = {
      id_empleado,
      nombre,
      apePaterno,
      apeMaterno,
      telefono,
      curp,
      rfc,
      correo,
      calle,
      num_casa,
      colonia,
      municipio,
      estado,
      codigo_postal,
    };

    const empleado = localStorage.getItem("Empleado");
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
        console.log("Esto es un multi-step echo en React.");
    }
  }
}

export default UserForm;

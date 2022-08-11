import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";
import ComponenteB from "./ComponenteB";

const componenteA = ({ contacto }) => {
  return (
    <address>
      <p>
        <strong>Nombre: </strong> {contacto.nombre}
      </p>
      <p>
        <strong>Apellido: </strong> {contacto.apellido}
      </p>
      <p>
        <strong>Email: </strong>
        <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
      </p>
      <ComponenteB estado={contacto.conectado} />
    </address>
  );
};

componenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default componenteA;

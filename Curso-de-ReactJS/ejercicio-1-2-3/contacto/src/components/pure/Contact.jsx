import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
  return (
    <address>
      <p>
        <strong>Nombre: </strong> {contact.name}
      </p>
      <p>
        <strong>Apellido: </strong> {contact.surname}
      </p>
      <p>
        <strong>Email: </strong>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        <strong>Conectado: </strong>
        {contact.conected ? "Contacto en línea" : "Contacto No Disponible"}
      </p>
    </address>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;

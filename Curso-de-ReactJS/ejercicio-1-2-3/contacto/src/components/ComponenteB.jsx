import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponenteB = (estado) => {
  const [conectado, setConectado] = useState(estado);

  return (
    <div className="ComponenteB">
      <p className={conectado ? "online" : "offline"}>
        {conectado ? "Contacto en línea" : "Contacto No Disponible"}
      </p>
      <button onClick={() => setConectado(!conectado)}>
        {conectado ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponenteB;

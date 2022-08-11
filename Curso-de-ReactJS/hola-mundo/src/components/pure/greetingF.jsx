import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  const [age, setage] = useState(29);

  const birthday = () => {
    setage(age + 1);
  };

  return (
    <div>
      <h1>¡Hola {props.name} funcional!</h1>
      <p>Tu edad es de {age}</p>
      <button onClick={birthday}>Cumplir años</button>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;

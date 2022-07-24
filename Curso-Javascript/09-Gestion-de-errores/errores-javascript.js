const mifuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  // return false;
  throw new Error("El valor debe ser de tipo número");
};

// const elDoble = mifuncion("asd");
const numero = "5";

try {
  // Código que puede fallar
  console.log("Está ejecutándose de manera correcta");
  const doble = mifuncion(numero);
  console.log(doble);
} catch (e) {
  // En caso de fallar, quiero que ejecutes
  console.error("Error");
  console.error(`El valor de e es: ${e}`);
} finally {
  console.log("Se va a ejecutar si hay o no hay error ");
}

// Errores más comunes.
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error


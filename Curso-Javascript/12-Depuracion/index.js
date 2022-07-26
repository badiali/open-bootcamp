const persona = {
  nombre: "Luis",
  edad: 40,
};

function obtenEdad(edad) {
  return 2 * edad;
}

const dobleEdad = obtenEdad(persona.edad);

function obtenArray(edad) {
  let arrayNums = [];
  for (let i = 0; i < 10; i++) {
    const numero = edad + i;
    arrayNums = [...arrayNums, numero];
  }
  return arrayNums;
}

const array = obtenArray(persona.edad);
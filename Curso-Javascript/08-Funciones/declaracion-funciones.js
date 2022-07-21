// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Luis";

function saludar(nombre) {
  console.log(`¡Hola ${nombre}!`);
}

saludar(nom);

//////////////////////

let nom2 = "Juan";
console.log(nom2);

function despedir(nombre) {
  nombre = "Diego";
  console.log(`¡Adios ${nombre}!`);
}

despedir(nom2);
console.log(nom2);

/////////////////////

let persona = { nombre: "Luis", apellido: "Badiali" };

function saludarPersona(objeto) {
  objeto.apellido = "Bazán";
  console.log(`¡Adios ${objeto.nombre} ${objeto.apellido}!`);
}

saludarPersona(persona);

////////////////////

function imprimeNumero(numero = 7) {
  // Parámetros por defecto
  console.log(numero);
}

imprimeNumero();

///////////////////

function imprimir(...parametros) {
  console.log(parametros);
}

imprimir(1, 2, 3, 5, 6, 7, "Hola", { id: 9 });

///////////////////

function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 5, 6, 7);

console.log(s);

///////////////////

let variable = "Hola";

function multiplicar(a = 0, b = 0) {
  console.log(variable);
  let variableInterna = "Adiós";
  console.log(variableInterna);
  return a * b;
}
console.log(multiplicar(3, 4));
console.log(variableInterna);

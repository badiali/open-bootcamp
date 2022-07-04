// Comparaciones

// Igualdad
if (5 == 5) {
  // Solo compara el valor
  console.log("5 es igual a 5 - Débil");
}

if (5 === 5) {
  // Compara el valor y el tipo
  console.log("5 es igual a 5 - Fuerte");
}

if (5 == "5") {
  // Solo compara el valor
  console.log("5 es igual a 5 - Débil");
}

if (5 === "5") {
  // Compara el valor y el tipo
  console.log("5 es igual a 5 - Fuerte");
}

let c = 4;
let d = "4";

if (c != d) {
  console.log("c es diferente a d - Débil");
}

if (c !== d) {
  console.log("c es diferente a d - Fuerte");
}

let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min")
}

if (max >= 10) {
  console.log("max es mayor o igual que min")
}

if (min < max) {
  console.log("min es menor que max")
}

if (min <= max) {
  console.log("min es menor o igual que max")
}
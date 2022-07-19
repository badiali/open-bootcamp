// Cómo podemos comparar listas
// .every()

const array = [3, 5, 6, 2, 7, -12, 88, -40];

// const resultado = array.every(valor => {
//   if (typeof valor === "number") {
//     return true;
//   } else {
//     return false;
//   }
// });
const resultado = array.every(valor => valor > 0);

console.log(resultado);

// Comparación de listas

const ar1 = [1, 2, 3, 4, 5];
const ar2 = [1, 2, 3, 4, 5];

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2) => {
  if (array_1.lenght !== array_2.lenght) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
}

console.log(compararArrays(ar1, ar2));

const ar3 = [1, 4, 6, 7, 8];

console.log(compararArrays(ar1, ar3));
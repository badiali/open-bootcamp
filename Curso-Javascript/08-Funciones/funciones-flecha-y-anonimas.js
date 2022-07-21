// Funciones de tipo flecha - funciones anónimas

const array = [2, 5, 7, 8, 99, 33];

const array2 = array.map((valor, indice, arrayOrigina) => valor * 2);

console.log(array2);

// const dobleDelValor = valor => {
//   return valor * 2;
// };

const dobleDelValor = (valor) => valor * 2;

console.log(doble(6));
console.log(dobleDelValor(6));

const array3 = array.map(dobleDelValor);

console.log(array3);

function doble(valor) {
  return valor * 2;
}

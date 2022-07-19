// .sort() -> Modifica el array

const array = [2, 5, 6, 8, 9, 32, 66];
console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return +1
  } else {
    return 0;
  }
});

console.log(array);

// Ordenar únicamente arrays numéricos

const arrayNum = [3, 5, 6, 8, 12, 56];

console.log(arrayNum);

arrayNum.sort((a, b) => b - a);

console.log(arrayNum);

// Interesante en array de objetos

const listaObj = [
  { nombre: "Luis", edad: 40, trabajo: "Relaciones públicas" },
  { nombre: "Meme", edad: 40, trabajo: "Web Dev" },
  { nombre: "Fabio", edad: 10, trabajo: "Estudiante" },
  { nombre: "Emma", edad: 7, trabajo: "Estudiante" },
];

// listaObj.sort((a, b) => {
//   if (a.edad < b.edad) {
//     return -1;
//   } else if (a.edad > b.edad) {
//     return +1;
//   } else {
//     return 0;
//   }
// });
listaObj.sort((a, b) => a.edad - b.edad);

console.log(listaObj);
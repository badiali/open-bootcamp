// Trabajar con métodos más avanzados
//.map() .filter() .reduce()

const array = ["Málaga", "Madrid", "Barcelona", "Sevilla"];

const val = array.forEach((v) => {
  console.log(v);
});

console.log(val);

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);

console.log(newArray);

const listaObj = [
  { nombre: "Luis", edad: 40, trabajo: "Relaciones públicas" },
  { nombre: "Meme", edad: 40, trabajo: "Web Dev" },
  { nombre: "Fabio", edad: 10, trabajo: "Estudiante" },
  { nombre: "Emma", edad: 7, trabajo: "Estudiante" },
];

// const personasMAayores = listaObj.filter((obj) => {
//   if (obj.edad > 30) {
//     return true;
//   } else {
//     false;
//   }
// });
const personasMayores = listaObj.filter((obj) => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObj.filter((obj) => obj.nombre !== "Meme");
console.log(nuevaLista);

const valores = [3, 56, 7, 34, 25];
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  return acumulado + cur;
});
console.log(suma);

// Iterar los valores de una lista
const array = ["Hola", 1, 2, 3, true, undefined];

//Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [2, 4, 5, 6];
arrayNums.forEach((valor) => {
  suma += valor;
  console.log(valor);
});
console.log(suma);

//Búqueda de un valor dentro de la lista
//Encontrar elemento 3
const variable = array.find((valor) => {
  if (valor === 3) {
    return true;
  }
});

console.log(variable);

const listObjetos = [
  { nombre: "Luis", edad: 40, trabajo: "Relaciones públicas" },
  { nombre: "Meme", edad: 40, trabajo: "Web Dev" },
];

// const objeto = listObjetos.find( o => {
//   if (o.nombre == "Meme") {
//     return true;
//   }
// })
const objeto = listObjetos.find((o) => o.nombre === "Meme");
console.log(objeto.nombre);

const { trabajo } = listObjetos.find((o) => o.nombre === "Luis");
console.log(trabajo);

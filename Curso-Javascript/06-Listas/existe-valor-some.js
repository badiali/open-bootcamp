// .some()
const array = [1, 2, 3, 45, 6, 7, 8, 9, 98, -40];

const res = array.some(valor => valor < -0);
console.log(res);

const existe = array.some(valor => valor == 98);
console.log(existe);

const listaObj = [
  { nombre: "Luis", edad: 40, trabajo: "Relaciones públicas" },
  { nombre: "Meme", edad: 40, trabajo: "Web Dev" },
  { nombre: "Fabio", edad: 10, trabajo: "Estudiante" },
  { nombre: "Emma", edad: 7, trabajo: "Estudiante" },
];

const existeMeme = listaObj.some(persona => persona.nombre == "Meme");
console.log(existeMeme);

// Cómo obtener una lista a partie de un objeto iterable
const str = "Hola soy Badiali";
console.log(str[0]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 4, "Hola", 8]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
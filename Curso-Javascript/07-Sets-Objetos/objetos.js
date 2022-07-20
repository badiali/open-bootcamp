// Trabajando con objetos
const obj = {
  id: 4,
  nombre: "Luis",
  apellido: "Badiali",
  isDeveloper: true,
  peliculas_favorita: ["La Historia Interminable", "Cortocircuito"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj.apellido);
console.log(obj["apellido"]);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Meme";
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;
val2 = 6;
console.log(val1);
console.log(val2);

///////////////////////

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj2.nombre);

obj3.nombre = "Fabio";

console.log(obj.nombre);
console.log(obj2.nombre);
console.log(obj3.nombre);

///////////////////////

// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viento se llevó", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 },
];

console.log(listaPeliculas);
// .sort() -> Muta el valor del array original
listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listaPeliculas);

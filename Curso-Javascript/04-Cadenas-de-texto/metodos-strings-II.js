const { Console } = require("console");

// Manipulación de strings
let input = "Sagitario";
let db = "sagitario";

console.log(input === db);

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());

// Formas de concatenar
let str_1 = "Hola soy la primera cadena.";
let str_2 = "Hola soy la segunda cadena.";

console.log(str_1.concat(" - ", str_2, " otra cosa."));
// Con el + cuidado que puede sumar números
console.log(str_1.concat(" - " + str_2 + " otra cosa."));
console.log(`${str_1} - ${str_2}`);

// Eliminar espacios al inicio y final
let str_3 = "     String con espacios al final    ";
console.log(str_3.length);
// Principio y final
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el carácter de cierta posición
let str_4 = "Hola soy el string 4"; // ["H", "0", "l", ...]
console.log(str_4.charAt(0));
console.log(str_4[0]);

// Obtener la posición de una palabra en un string
let str_5 = "Hola soy Luis, soy Dev";
// Si no la encuentra muestra -1
console.log(str_5.indexOf("soy"));
console.log(str_5.lastIndexOf("soy"));
console.log(str_5.charAt(5));

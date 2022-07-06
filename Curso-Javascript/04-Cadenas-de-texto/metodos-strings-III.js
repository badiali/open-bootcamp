// Métodos de cadenas III 
// https://regexr.com

let str = "Lorem ipsum dolor sit amet consectetur lorem dolor sit amet";

console.log(str.match(/sit/g));

// Existe esta palabra?
console.log(str.includes("dolor"));

// Empieza con esta palabra?
console.log(str.startsWith("L"));

// Termina con esta palabra?
console.log(str.endsWith("y"));
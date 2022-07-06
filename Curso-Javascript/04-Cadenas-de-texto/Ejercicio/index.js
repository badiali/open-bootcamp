// Ejercicio 04 - Strings

const miNombre = "Luis";
console.log(miNombre);

const miApellido = "Badiali";
console.log(miApellido);

const estudiante = miNombre.concat(" ", miApellido);
console.log(estudiante);

const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

const lengthEstudiante = estudiante.length;
console.log(lengthEstudiante);

const firstLetterNombre = miNombre.charAt(0);
console.log(firstLetterNombre);

const lastLetterApellido = miApellido.charAt(miApellido.length - 1);
console.log(lastLetterApellido);

const replaceEstudiante = estudiante.replace(" ", "");
console.log(replaceEstudiante);

const isNombre = estudiante.includes(miNombre);
console.log(isNombre);
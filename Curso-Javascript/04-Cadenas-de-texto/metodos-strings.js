// Métodos con strings

// Obtener longitud de string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes
// slices() substring() substr()

let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar contenido
let cadena = "Hola mi nombre es Luis";
console.log(cadena);

// Solo reemplaza la primera instancia
console.log(cadena.replace("Luis", "Badiali"));

let texto_largo = "Lorem ipsum dolor sit amet consectetur dolor dolor";
console.log(texto_largo.replace("dolor", "dolores"));

// Al utilizar la expresión regular /g (global) reemplaza todas las instancias
console.log(texto_largo.replace(/dolor/g, "dolores"));

// Trabajando con fechas
const fecha = new Date();

console.log(fecha);

// Los meses inician en 0
const fecha2 = new Date(1981, 11, 11);
console.log(fecha2);

// Fecha en milisegundos
const fecha3 = new Date(0);
console.log(fecha3);

// Fecha en string
const fecha4 = new Date("December, 11, 1981 13:20:00");
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(1981, 11, 11);

console.log(fecha2 === fecha5); // ERROR - No se puede comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); // OK comparar fechas en milisegundos

///////////////////////// Obtener el día, mes y año de una fecha
// Obtener el día
console.log(fecha2.getDate());

// Obtener el mes
console.log(fecha2.getMonth() + 1);

// Obtener el año
console.log(fecha2.getFullYear());

// Mostrar una fecha en un string
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2);
console.log(fecha2.toLocaleDateString("es-ES"));
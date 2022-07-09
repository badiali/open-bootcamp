//Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

//Suma
console.log(a + b);

//Resta
console.log(a - b);

//Multiplicación
console.log(a * b);

//División
console.log(a / b);

//Representación de los números en cadenas de texto
console.log(typeof a);

let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);

// .toFixed() - Limitar el número de decimales al valor que le pasemos
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 3234234234234;
console.log(e.toFixed(2));

let f = 3234.23435356;
console.log(f.toFixed(2));

// .toPrecision() - Limita el número de cifras significativas
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(7));
// Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 178;
console.log(altura_cm);

// Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.78;
console.log(altura_m);

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 90.5;
console.log(peso_kg);

// Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_arriba = Math.ceil(altura_m);
console.log(altura_arriba);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_abajo = Math.floor(peso_kg);
console.log(peso_abajo);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let comparacion = Number.MAX_VALUE === Number.MAX_VALUE + 1;
console.log(comparacion);
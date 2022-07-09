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
let altura_arriba = altura_m.toFixed(1)
console.log(altura_arriba);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_abajo = peso_kg.toFixed(0)
console.log(peso_abajo);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor_JS = Number.MAX_VALUE;
console.log(max_valor_JS);

let max_valor_JS2 = max_valor_JS + 1;
console.log(max_valor_JS2);

let comparacion = max_valor_JS == max_valor_JS2;
console.log(comparacion);
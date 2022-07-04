// Calcular el factorial de 10 con while y break

let factorial = 10;
let total;
let i = 0;

while (i < factorial) {
  total = factorial * i;
  if (total === 30) {
    break;
  }
  console.log(total);
  i++;
}
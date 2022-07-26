function obtenFibonacci(num) {
  let fibonacci = [0, 1];
  for (let i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

const fibonacci = obtenFibonacci(10);

console.log(fibonacci);

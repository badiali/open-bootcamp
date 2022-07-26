function obtenFibonacci(num) {
  if (num === 1) return [1];
  if (num === 2) return [1, 1];
  let fibonacci = [1, 1];
  for (let i = 2; i < num; i++) {
    fibonacci = [...fibonacci, fibonacci[i - 2] + fibonacci[i - 1]];
  }
  return fibonacci;
}

const fibonacci = obtenFibonacci(1);

console.log(fibonacci);

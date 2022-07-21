// Funciones generadoras
function* generarId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; // Espera hasta que se vuelva a llamar
  }
}

const gen = generarId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

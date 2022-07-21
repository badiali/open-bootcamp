function siempreTrue() {
  return true;
}
console.log(siempreTrue());

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 5000);
});
miPromesa.then(() => console.log("Hola soy una promesa"));

function* generarPares() {
  let id = 0;
  while (true) {
    id += 2;
    if (id === 10) {
      return id;
    }
    yield id;
  }
}

const gen = generarPares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
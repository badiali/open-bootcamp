function siempreTrue() {
  return true;
}
console.log(siempreTrue());

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 5000);
});
miPromesa.then(() => console.log("Hola soy una promesa"));

async function damePromesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* generarPares() {
  let id = 0;
  while (true) {
    yield id += 2;
  }
}

const gen = generarPares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
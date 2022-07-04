// Bucles for

// i = i + 1;
// i += 1;
// i++;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let lista = [0, 23, 14, 56, 7, 88, 100];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// for ... of
for (let valor of lista) {
  console.log(valor);
}

// forEach
lista.forEach(valor => {
  console.log(valor);
});

// for ... in
let persona =  {
  nombre: "Luis",
  apllido: "Badiali",
  edad: 40,
  isDeveloper: true
}

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
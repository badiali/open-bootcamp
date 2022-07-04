// Casos específicos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue;
  }

  console.log(lista[i]);

  if (lista[i] > 5) {
    break;
  }
}

// Ámbito de un bucle
console.log(i);

// Sets o conjuntos - No va a tener valores duplicados
const array = [1, 2, 3, 4, 5, 6, 1, 2, 3];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add()
miSet.add(10);
console.log(miSet);

// .delete()
miSet.delete(6);
console.log(miSet);

// .clear()
// miSet.clear();
// console.log(miSet);

// .has()
console.log(miSet.has(3));

// .size
console.log(miSet.size);

miSet.forEach(valor => {
  console.log(valor);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet[1]);
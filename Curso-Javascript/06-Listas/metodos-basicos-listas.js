// Cómo trabajar con listas - Arrays

const array = [1, 2, 3, 4, 5, 6];
const array2 = new Array(1, 2, 3, 4, 5, 6);
console.log(array);
console.log(array2);

const var1 = 100;
const array3 = [1, "Hola", {edad: 40}, 4.5, null, undefined, var1];
console.log(array3);

//Acceder a los valores de un Array a traves de su posición
//array[indice]
console.log(array3[2]);

//Métodos para introducir nuevos valores en los arrays
// .push() .unshift => Mutan el valor del array

//Valores al final => .push()
array3.push("final", 345);
console.log(array3);

//Valores al principio => .unshift()
array3.unshift("principio", 99);
console.log(array3);

//Métodos para eliminar elementos del array
// .pop() .shift() Mutan el valor del array

const array4 = [1, 2, 3, "Hola", false];

//Valores al final => .pop()
array4.pop();
console.log(array4);

//Valores al principio => .shift()
array4.shift();
console.log(array4);

//Método para eliminar, modificar o añadir valores del array
// .splice(x, y, z)

const array5 = [1, 2, 3, 4, 5];

//Eliminar valores - .splice(indice, numValoresAEliminar)
array5.splice(0, 2);
console.log(array5);

//Añadir valores - .splice(indice, numValoresAEliminar, valores)
array5.splice(1, 0, "Hola", 89, 90);
console.log(array5);

//Modificar valores - .splice(indice, numValoresAEliminar, valores)
array5.splice(1, 1, "Adios");
console.log(array5);
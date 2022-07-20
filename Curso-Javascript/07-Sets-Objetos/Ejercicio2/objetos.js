const datos = {
  nombre: "Luis",
  apellido: "Badiali",
  edad: 40,
  altura: 178,
  eresDesarrollador: true,
};
console.log(datos);

const edad = datos.edad;
console.log(edad);

const lista = [
  {...datos},
  {
    nombre: "Mercedes",
    apellido: "Bazán",
    edad: 40,
    altura: 165,
    eresDesarrollador: false,
  },
  {
    nombre: "Juan",
    apellido: "Montes",
    edad: 29,
    altura: 185,
    eresDesarrollador: false,
  }
];
console.log(lista);

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada);

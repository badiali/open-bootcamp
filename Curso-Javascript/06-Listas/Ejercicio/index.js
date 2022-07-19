const listaCompra = ["Pan", "Nocilla", "Zumitos", "Batidos", "Fruta"];
console.log(listaCompra);

listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

const peliculas = [
  {
    titulo: "La historia interminable",
    director: "Wolfgang Petersen",
    fecha: new Date(1984, 11, 6),
  },
  {
    titulo: "Cortocircuito",
    director: "John Badham",
    fecha: new Date(1986, 4, 9),
  },
  {
    titulo: "Thor: Love and Thunder",
    director: "StTaika Waititi",
    fecha: new Date(2022, 6, 8),
  },
];

const peliculasRecientes = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
console.log(peliculasRecientes);

const directores = peliculas.map(pelicula => pelicula.director);
console.log(directores);

const titulos = peliculas.map(pelicula => pelicula.titulo);
console.log(titulos);

const directores_titulos = directores.concat(titulos);
console.log(directores_titulos);

const directores_titulos_prop = [...directores, ...titulos];
console.log(directores_titulos_prop);

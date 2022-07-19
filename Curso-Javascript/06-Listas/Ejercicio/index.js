const listaCompra = ["Pan", "Nocilla", "Zumitos", "Batidos", "Fruta"];
console.log(listaCompra);

listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

listaCompra.pop("Aceite de Girasol");
console.log(listaCompra);

const favPelis = [
  {titulo: "La historia interminable", director: "Wolfgang Petersen", fecha: 1984},
  {titulo: "Cortocircuito", director: "John Badham", fecha: 1986},
  {titulo: "Thor: Love and Thunder", director: "StTaika Waititi", fecha: 2022}
];

const filterPelis = favPelis.filter((obj) => obj.fecha > 2010);
console.log(filterPelis);

const mapPelisDir = favPelis.map((pelis) => pelis.director);
console.log(mapPelisDir);

const mapPelisTit = favPelis.map((pelis) => pelis.titulo);
console.log(mapPelisTit);

const concatDirTit = mapPelisDir.concat(mapPelisTit);
console.log(concatDirTit);

const concatProp = [...mapPelisDir, ...mapPelisTit];
console.log(concatProp);
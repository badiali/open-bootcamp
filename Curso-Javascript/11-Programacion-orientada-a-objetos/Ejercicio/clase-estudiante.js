class Estudiante {
  nombre = "Luis";
  asignaturas = ["Javascrip", "HTML", "CSS"];

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante = new Estudiante();

console.log(estudiante.obtenDatos());

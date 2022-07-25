class Estudiante {
  nombre;
  asignaturas = ["Javascrip", "HTML", "CSS"];
  constructor(nombre) {
    this.nombre = nombre;
  }
  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const nuevo_estudiante = new Estudiante("Luis");
console.log(nuevo_estudiante.obtenDatos());

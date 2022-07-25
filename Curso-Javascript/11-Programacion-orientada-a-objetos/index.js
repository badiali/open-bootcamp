const persona = {
  nombre: "Luis",
  edad: 40,
  isDeveloper: true,
  saludo: function () {
    console.log("Hola");
  },
};

//console.log(persona)
persona.saludo();

const otra_persona = {
  nombre: "Meme",
  edad: 40,
  isDeveloper: false,
  saludo: function () {
    console.log("Hola");
  },
};

//console.log(otra_persona)
otra_persona.saludo();

// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre, // nombre: nombre,
    edad,
    isDeveloper,
    saludo: function() {
      console.log("Hola")
    }
  }
}

const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona)
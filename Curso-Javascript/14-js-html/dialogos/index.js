const boton = document.querySelector("#btn")

// console.log(boton)

boton.addEventListener("click", () => {
  // alert("Click en el botón!")
  // confirm("Estás de acuerdo?") && console.log("ok")
  // const respuesta = confirm("¿Seguro?")
  // if(respuesta) {
  //   console.log("Estás de acuerdo")
  // } else {
  //   console.log("No estás de acuerdo")
  // }
  confirm("Estás de acuerdo?") 
    ? console.log("ok") 
    : console.log("NO!!")
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    console.log("Tu nombre es " + nombre)
  } else {
    console.log("No has puesto tu nombre")
  }
})

const lista = [
  {
    nombre: "Luis",
    edad: 40
  },
  {
    nombre: "Mercedes",
    edad: 40
  },
  {
    nombre: "Fabio",
    edad: 10
  }
]

// console.log(lista)

console.table(lista)
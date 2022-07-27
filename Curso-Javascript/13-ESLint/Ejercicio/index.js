// Strings
let str_dbl = "Texto comillas dobles"
let str_sgl = "Texto comillas simples"

console.log(str_dbl)
console.log(str_sgl)

let str_comillas_simples = "Lorem ipsum dolor sit amet consectetur \"dolor sit amet\""
console.log(str_comillas_simples)

// Comillas invertidas (backticks - templates)
let nombre = "Luis"
let str_backsticks = `Hola ${nombre}`
console.log(str_backsticks)

// Plantillas HTML
let libros = ["Empieza por el por qué", "El poder de la hora", "El monje que vendió su ferrari"]
let plantilla = `
<html>
  <h1>Hola ${nombre}</h1>
  <p>${libros[0]}</p>
</html>
`
console.log(plantilla)
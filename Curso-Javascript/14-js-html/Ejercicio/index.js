const btn = document.querySelector("button")

btn.addEventListener("click", () => alert("click en el botón"))

$(() => {
  $("button").click(() => console.log("Hola, estoy utilizando jQuery"))
})
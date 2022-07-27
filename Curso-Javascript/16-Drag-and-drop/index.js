const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", event => {
    console.log("Inicio de arrastre del párrafo " + parrafo.innerText)
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id", parrafo.id)
    const elemento_fantasma = document.querySelector(".imagen-fantasma")
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
  })
  parrafo.addEventListener("dragend", () => {
    console.log("Final de arrastre")
    parrafo.classList.remove("dragging")
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move" // "copy" por defecto
    // console.log("Drag Over")
  })
  seccion.addEventListener("drop", event => {
    console.log("Drop")
    const id_parrafo = event.dataTransfer.getData("id")
    // console.log("Párrafo id: " + id_parrafo)
    const parrafo = document.getElementById(id_parrafo)
    seccion.appendChild(parrafo)
  })
})
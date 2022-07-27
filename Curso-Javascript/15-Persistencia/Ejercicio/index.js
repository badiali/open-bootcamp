const nombre = "Luis"
const apellido = "Badiali"
const datos = { nombre, apellido }

sessionStorage.setItem("datos", JSON.stringify(datos))

localStorage.setItem("datos", JSON.stringify(datos))

const now = new Date()
document.cookie = `datos=${JSON.stringify(datos)};expires="${new Date(now.getTime()+(2*60*1000)).toUTCString()}`

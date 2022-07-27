const nombre = "Luis"
const apellido = "Badiali"
const objeto = { nombre, apellido }

sessionStorage.setItem("objSesion", JSON.stringify(objeto))

localStorage.setItem("objStorage", JSON.stringify(objeto))

const date = new Date()
date.setTime(date.getTime()+(2*60*1000))

document.cookie = "objCookie=" + JSON.stringify(objeto) + ";expires=" + date.toUTCString()

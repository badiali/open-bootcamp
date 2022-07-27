// localStorage.setItem("nombre", "Luis")
// localStorage.setItem("nombre", "Mercedes")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({ nombre: "Luis", edad: 40 }))

console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Luis")

/* Cookies */
document.cookie = "nombreCookie=LuisCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)
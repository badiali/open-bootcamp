let marker, map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13
  });

  marker = new google.maps.Marker({
    map: map
  });

  geoPosiciona()
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000 }
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
  } else {
    alert("El navegador no admite geolacalización.")
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError(error) {
  console.log("Se ha producido un error y lo hemos gestionado.")
  console.log(error)
}

window.initMap = initMap;

function initMap() {
  const estepona = { lat: 36.41170001179794, lng: -5.158298183620758 };
  const monaco = { lat: 43.73418745203081, lng: 7.419559439301853 };
  const poggioMirteto = { lat: 42.2659080261609, lng: 12.686792071679646 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 40.01163286499346, lng: 4.289576944935145 }
  });

  const marker_estepona = new google.maps.Marker({
    position: estepona,
    map: map,
  });

  const marker_monaco = new google.maps.Marker({
    position: monaco,
    map: map,
  });

  const marker_italia = new google.maps.Marker({
    position: poggioMirteto,
    map: map,
  });
}

window.initMap = initMap;

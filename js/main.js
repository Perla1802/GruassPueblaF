let mapa;
let destinos;

// Funcion para creear los marcadores.
function agregarMarcador(nombre, latitud, longitud) {
  const marker = new google.maps.Marker({
    position: { lat: latitud, lng: longitud },
    map: mapa,
    title: nombre,
    draggable: false,
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      scaledSize: new google.maps.Size(50, 50),
    }
  });
}

// Funcion que inicializa el mapa
async function initMap() {
  $.ajax({
    url: 'http://localhost:3001/corralon/get',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      if (data.content) {
        destinos = data.content;
        // Creamos el mapa
        mapa = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 19.044774, lng: -98.198309 },
          zoom: 12,
        });

        // Iteramos sobre los lugares obtenidos de la API y agregamos los marcadores
        data.content.forEach(lugar => {
          agregarMarcador(lugar.razonSocial, lugar.latitud, lugar.longitud);
        });
      } else {
        console.error('Error en la estructura de la respuesta de la API');
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error('Error en la solicitud AJAX: ', textStatus, errorThrown);
    }
  });
}

// Funcion que calcula las rutas al punto de origen
function calcularRutas(origen, destinos, callback) {
    var service = new google.maps.DirectionsService();

    var respuestas = [];
    var solicitudesPendientes = destinos.length;

    destinos.forEach(function (destino, index) {
        var destinoLatLng = new google.maps.LatLng(destino.latitud, destino.longitud);

        var solicitud = {
            origin: origen,
            destination: destinoLatLng,
            travelMode: google.maps.TravelMode.DRIVING
        };

        service.route(solicitud, function (response, status) {
            if (status == 'OK') {
                respuestas.push({ index: index, response: response });
            } else {
                console.error('Error al calcular la ruta: ' + status);
            }

            solicitudesPendientes--;

            // Verificar si todas las solicitudes han sido procesadas
            if (solicitudesPendientes === 0) {
                // Ordenar las respuestas por duración y obtener la más corta
                respuestas.sort((a, b) => a.response.routes[0].legs[0].duration.value - b.response.routes[0].legs[0].duration.value);
                const rutaMasCorta = respuestas[0];

                // Llamar al callback con la ruta más corta
                callback(rutaMasCorta);
            }
        });
    });
}

// Funcion que traza la ruta
function trazarRuta() {
  // Traemos los lugares al que le vamos a crear la ruta.
  const origen = document.getElementById("origenInput").value;
  calcularRutas(origen, destinos, function(rutaMasCorta) {
    const response = rutaMasCorta.response;

    const directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: '#aa6581' // Color  para la línea de la ruta
      },
    });

    directionsRenderer.setMap(mapa);
    directionsRenderer.setDirections(response); //renderizamos la ruta

    const duration = response.routes[0].legs[0].duration.text;

    document.getElementById("tiempoViaje").textContent = "Tiempo estimado: " + duration;
    document.getElementById("origenInput").value = ""
  });
}

initMap(); //Inicializamos el mapa.
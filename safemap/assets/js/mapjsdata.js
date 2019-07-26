var damagedCityRadius = {
  chicago: {
    center: {lat: 41.9764607, lng: -88.0553876},
    population: 1000
  }
};

function initMap() {
    var map, locationOfUserWindowInfo;

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: {lat: 50, lng: 50},
      mapTypeId: 'terrain',
      mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
    });

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter({lat: pos.lat-0.00001, lng: pos.lng});
        map.setZoom(15)

        var userPosMarker = new google.maps.Marker({
            position: {lat: pos.lat-0.00001, lng: pos.lng},
            map: map,
            title: 'Hello World!',
            icon: './assets/images/radarpulse3.gif',
            draggable: false
          });

        // infoWindow.setPosition(pos);
        // infoWindow.setContent('Location found.');
        // infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

    // Create the search box and link it to the UI element.
    var input = document.getElementById('search');
    var searchBox = new google.maps.places.SearchBox(input);

    var marker = new google.maps.Marker({
        position: {lat: 41.9764607, lng: -88.0553876},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pinmarkerbasic48.png',
        draggable: false
      });

    var marker2 = new google.maps.Marker({
        position: {lat: 41.9764622, lng: -88.0652871},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pincarepackage48.png',
        draggable: false
      });

    var bottledwater = new google.maps.Marker({
        position: {lat: 41.9664622, lng: -88.0352871},
        map: map,
        title: 'Drinking Water',
        icon: './assets/images/pinmarkerbottledwater48.png',
        draggable: false
      });

    var bottledwater2 = new google.maps.Marker({
        position: {lat: 41.985622, lng: -88.0682871},
        map: map,
        title: 'Drinking Water',
        icon: './assets/images/pinmarkerbottledwater48.png',
        draggable: false
      });

    var bottledwater3 = new google.maps.Marker({
        position: {lat: 41.974622, lng: -88.0382871},
        map: map,
        title: 'Drinking Water',
        icon: './assets/images/pinmarkerbottledwater48.png',
        draggable: false
      });

    var meds = new google.maps.Marker({
        position: {lat: 41.9814622, lng: -88.0842871},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pinmarkermeds48.png',
        draggable: false
      });

    var meds2 = new google.maps.Marker({
        position: {lat: 41.9614622, lng: -88.0542871},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pinmarkermeds48.png',
        draggable: false
      });

    var meds3 = new google.maps.Marker({
        position: {lat: 41.9814622, lng: -88.0242871},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pinmarkermeds48.png',
        draggable: false
      });

    var pwroutage = new google.maps.Marker({
        position: {lat: 41.951622, lng: -88.0542871},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pinmarkerpowerout248.png',
        draggable: false
      });

    var pwroutage2 = new google.maps.Marker({
        position: {lat: 41.991622, lng: -88.0382871},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pinmarkerpowerout248.png',
        draggable: false
      });

    var pwroutage3 = new google.maps.Marker({
        position: {lat: 41.961622, lng: -88.0382871},
        map: map,
        title: 'Hello World!',
        icon: './assets/images/pinmarkerpowerout248.png',
        draggable: false
      });

      var waterString = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '<h3 id="firstHeading" class="firstHeading">Drinking Water</h3>'+
                  '<div id="bodyContent">'+
                  '<p><b>This location has drinking water.</p></b>' +
                  '<p><b>Coordinates: lat and long</p></b>'+
                  '</div>'+
                  '</div>'+
                  '</div>';

      var eachMarkerInfoWindow = new google.maps.InfoWindow({
        content: waterString
      });

      bottledwater.addListener('click', function() {
        eachMarkerInfoWindow.open(map, bottledwater);
      });

      bottledwater2.addListener('click', function() {
        eachMarkerInfoWindow.open(map, bottledwater2);
      });

      bottledwater3.addListener('click', function() {
        eachMarkerInfoWindow.open(map, bottledwater3);
      });
    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (var city in damagedCityRadius) {
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#ffd1d1',
        fillOpacity: 0.35,
        map: map,
        center: damagedCityRadius[city].center,
        radius: Math.sqrt(damagedCityRadius[city].population) * 100
      });
    }



    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

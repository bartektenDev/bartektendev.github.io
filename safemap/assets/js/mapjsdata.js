var map, locationOfUserWindowInfo, userPosMarker;

var damagedCityRadius = {
  chicago: {
    center: {lat: 41.9764607, lng: -88.0553876},
    population: 1000
  }
};

function initMap() {
    window.location.href = 'http://127.0.0.1/safemap/usermap.html#popuploading';
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: {lat: 50, lng: 50},
      mapTypeId: 'terrain',
      fullscreen: 'true',
      disableDefaultUI: true,
      mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
    });

    initZoomControl(map);
    initMapTypeControl(map);
    initFullscreenControl(map);

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

        userPosMarker = new google.maps.Marker({
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

    var dangerzone1 = new google.maps.Marker({
        position: {lat: 41.9764607, lng: -88.0553876},
        map: map,
        title: 'Danger Zone',
        icon: './assets/images/pindangerzonemarker.png',
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
        icon: './assets/images/pinmarkerbottledwater648.png',
        draggable: false
      });

    var bottledwater2 = new google.maps.Marker({
        position: {lat: 41.985622, lng: -88.0682871},
        map: map,
        title: 'Drinking Water',
        icon: './assets/images/pinmarkerbottledwater648.png',
        draggable: false
      });

    var bottledwater3 = new google.maps.Marker({
        position: {lat: 41.974622, lng: -88.0382871},
        map: map,
        title: 'Drinking Water',
        icon: './assets/images/pinmarkerbottledwater648.png',
        draggable: false
      });

    var foodicon = new google.maps.Marker({
        position: {lat: 41.9634622, lng: -88.0342871},
        map: map,
        title: 'Food',
        icon: './assets/images/pinfoodiconmaker48.png',
        draggable: false
      });

    var foodicon2 = new google.maps.Marker({
        position: {lat: 41.9734622, lng: -88.07932871},
        map: map,
        title: 'Food',
        icon: './assets/images/pinfoodiconmaker48.png',
        draggable: false
      });

    var foodicon2 = new google.maps.Marker({
        position: {lat: 41.9834622, lng: -88.07232871},
        map: map,
        title: 'Food',
        icon: './assets/images/pinfoodiconmaker48.png',
        draggable: false
      });

    var meds = new google.maps.Marker({
        position: {lat: 41.9814622, lng: -88.0842871},
        map: map,
        title: 'First Aid',
        icon: './assets/images/pinfirstaidiconbag48.png',
        draggable: false
      });

    var meds2 = new google.maps.Marker({
        position: {lat: 41.9614622, lng: -88.0542871},
        map: map,
        title: 'First Aid',
        icon: './assets/images/pinfirstaidiconbag48.png',
        draggable: false
      });

    var meds3 = new google.maps.Marker({
        position: {lat: 41.9814622, lng: -88.0242871},
        map: map,
        title: 'First Aid',
        icon: './assets/images/pinfirstaidiconbag48.png',
        draggable: false
      });

    var pwroutage = new google.maps.Marker({
        position: {lat: 41.951622, lng: -88.0542871},
        map: map,
        title: 'Power Outage',
        icon: './assets/images/pinmarkerpowerout548.png',
        draggable: false
      });

    var pwroutage2 = new google.maps.Marker({
        position: {lat: 41.991622, lng: -88.0382871},
        map: map,
        title: 'Power Outage',
        icon: './assets/images/pinmarkerpowerout548.png',
        draggable: false
      });

    var pwroutage3 = new google.maps.Marker({
        position: {lat: 41.961622, lng: -88.0382871},
        map: map,
        title: 'Power Outage',
        icon: './assets/images/pinmarkerpowerout548.png',
        draggable: false
      });

    var shelterarea = new google.maps.Marker({
        position: {lat: 41.964622, lng: -88.0582871},
        map: map,
        title: 'Shelter Area',
        icon: './assets/images/pinshelterarea248.png',
        draggable: false
      });

    var shelterarea2 = new google.maps.Marker({
        position: {lat: 41.994622, lng: -88.0482871},
        map: map,
        title: 'Shelter Area',
        icon: './assets/images/pinshelterarea248.png',
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

    var iconBase = './assets/images/';
        var icons = {
          drinking_water: {
            name: 'Drinking Water',
            icon: iconBase + 'pinmarkerbottledwater648.png'
          },
          food: {
            name: 'Food',
            icon: iconBase + 'pinfoodiconmaker48.png'
          },
          medicaion_health: {
            name: 'First Aid',
            icon: iconBase + 'pinfirstaidiconbag48.png'
          },
          tents: {
            name: 'Shelter Area',
            icon: iconBase + 'pinshelterarea248.png'
          },
          poweroutage: {
            name: 'Power Outage',
            icon: iconBase + 'pinmarkerpowerout548.png'
          }
        };

    var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name.fontsize(4);
          legend.appendChild(div);
        }

    var logoPicture = document.getElementById('logoPic');
    var searchbar = document.getElementById('searchq');
    var controlsbottom = document.getElementById('controlsbottom');
    //controlsbottom.style.display = "block";

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(controlsbottom);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(searchbar);
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(logoPicture);

    var mapTypeControlDiv = document.querySelector('.maptype-control');
        document.querySelector('.maptype-control-map').onclick = function() {
          mapTypeControlDiv.classList.add('maptype-control-is-map');
          mapTypeControlDiv.classList.remove('maptype-control-is-satellite');
          map.setMapTypeId('roadmap');
        };
        document.querySelector('.maptype-control-satellite').onclick =
            function() {
          mapTypeControlDiv.classList.remove('maptype-control-is-map');
          mapTypeControlDiv.classList.add('maptype-control-is-satellite');
          map.setMapTypeId('hybrid');
        };

    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(
        mapTypeControlDiv);

    setTimeout(function(){ document.getElementById("finishedLoadingClosebtn").click(); }, 2000);
}

function initZoomControl(map) {
  document.querySelector('.zoom-control-in').onclick = function() {
    map.setZoom(map.getZoom() + 1);
  };
  document.querySelector('.zoom-control-out').onclick = function() {
    map.setZoom(map.getZoom() - 1);
  };
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
      document.querySelector('.zoom-control'));
}

function initMapTypeControl(map) {
  var mapTypeControlDiv = document.querySelector('.maptype-control');
  document.querySelector('.maptype-control-map').onclick = function() {
    mapTypeControlDiv.classList.add('maptype-control-is-map');
    mapTypeControlDiv.classList.remove('maptype-control-is-satellite');
    map.setMapTypeId('roadmap');
  };
  document.querySelector('.maptype-control-satellite').onclick =
      function() {
    mapTypeControlDiv.classList.remove('maptype-control-is-map');
    mapTypeControlDiv.classList.add('maptype-control-is-satellite');
    map.setMapTypeId('hybrid');
  };

  map.controls[google.maps.ControlPosition.LEFT_TOP].push(
      mapTypeControlDiv);
}

function initFullscreenControl(map) {
  var elementToSendFullscreen = map.getDiv().firstChild;
  var fullscreenControl = document.querySelector('.fullscreen-control');
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
      fullscreenControl);


  fullscreenControl.onclick = function() {
    if (isFullscreen(elementToSendFullscreen)) {
      exitFullscreen();
    } else {
      requestFullscreen(elementToSendFullscreen);
    }
  };

  document.onwebkitfullscreenchange =
  document.onmsfullscreenchange =
  document.onmozfullscreenchange =
  document.onfullscreenchange = function() {
    if (isFullscreen(elementToSendFullscreen)) {
      fullscreenControl.classList.add('is-fullscreen');
    } else {
      fullscreenControl.classList.remove('is-fullscreen');
    }
  };
}

function isFullscreen(element) {
  return (document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement) == element;
}
function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullScreen) {
    element.msRequestFullScreen();
  }
}
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msCancelFullScreen) {
    document.msCancelFullScreen();
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function getUserLocationAndSet()  {
  console.log('Getting location...');
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter({lat: pos.lat-0.00001, lng: pos.lng});
      map.setZoom(15)

      userPosMarker.setPosition(pos)

      // infoWindow.setPosition(pos);
      // infoWindow.setContent('Location found.');
      // infoWindow.open(map);
      map.setCenter(pos);
      console.log('Location set!');

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

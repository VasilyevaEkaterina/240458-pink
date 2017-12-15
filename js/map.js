'use strict';

var contactsMap = document.getElementById('map');
var mapPin = document.querySelector('.contacts__map-pin');

mapPin.classList.add('contacts__map-pin--hidden');

function initMap() {
  var uluru = {lat: 59.938982, lng: 30.323158};
  var map = new google.maps.Map(contactsMap, {
    zoom: 12,
    scrollwheel: true,
    center: uluru,
    gestureHandling: 'cooperative'
  });

  var image = 'img/icon-map-marker.svg';
  var castomMarker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });

}

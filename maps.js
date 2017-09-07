var map;

var locations = [
	  {title: 'Northstar', location: {lat: 39.27324, lng: -120.1624164}},
	  {title: 'Squaw Valley', location: {lat: 39.2115732, lng: -120.1985282}},
	  {title: 'Sugar Bowl', location: {lat: 39.3043494, lng: -120.3357567}},
	  {title: 'Tahoe Donner Ski Area', location: {lat: 39.3524057, lng: -120.271583}},
	  {title: 'Alpine Meadows', location: {lat: 39.1574066, lng: -120.2390835}}
];


// Create a new blank array for all the listing markers.
var markers = [];
function initMap() {
	var tahoe = {lat: 39.0968, lng: -120.0324}
	// Constructor creates a new map - only center and zoom are required.
	map = new google.maps.Map(document.getElementById('map'), {
	  center: tahoe,
	  zoom: 13
	});

	var largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();
	// The following group uses the location array to create an array of markers on initialize.
	for (var i = 0; i < locations.length; i++) {
	  // Get the position from the location array.
	  var position = locations[i].location;
	  var title = locations[i].title;
	  // Create a marker per location, and put into markers array.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: position,
	    title: title,
	    animation: google.maps.Animation.DROP,
	    id: i
	  });
	  // Push the marker to our array of markers.
	  markers.push(marker);
	  // Create an onclick event to open an infowindow at each marker.
	  marker.addListener('click', function() {
	  	console.log(this);
	    populateInfoWindow(this, largeInfowindow);
	  });
	  bounds.extend(markers[i].position);
	}
	// Extend the boundaries of the map for each marker
	map.fitBounds(bounds);
}




// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
  infowindow.marker = marker;
  infowindow.setContent('<div>' + marker.title + '</div>');
  infowindow.open(map, marker);
  // Make sure the marker property is cleared if the infowindow is closed.
  infowindow.addListener('closeclick',function(){
    infowindow.setMarker = null;
  });
}







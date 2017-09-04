function initMap(){
	// var newYork = {lat: 39.0968, lng: -120.0324}
	var newYork = {lat: 40.74193549, lng: -73.9980244}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: newYork
	});
	// new lat long
	var tribeca = {lat: 40.719526, lng: -74.0089934};
	// new marker
	var marker = new google.maps.Marker({
		position: tribeca,
		map: map,
		title: 'First Marker!'
	});

	var infowindow = new google.maps.InfoWindow({
		content: "this is some content that will show up in the infowindow"
	});

	marker.addListener('click', function(){
		infowindow.open(map, marker);
	});
}
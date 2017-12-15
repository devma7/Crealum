
function initMap() {
var myLatLng = {lat:33.5554942, lng: -7.6792293};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: myLatLng
});

var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Ibralum'
});


}

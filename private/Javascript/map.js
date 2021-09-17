//Get User loctaion
/*
if("geolocation" in navigator) {
    console.log('Location available!');
    navigator.geolocation.getCurrentPosition(function getLocation(position) {
        var location = (position.coords.latitude, position.coords.longitude);
    });
}
else {
    console.log('Location unavailable.');
}
*/

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
 // TO MAKE THE MAP APPEAR YOU MUST
        // ADD YOUR ACCESS TOKEN FROM
        // https://account.mapbox.com
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
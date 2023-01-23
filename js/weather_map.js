"use strict"
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: keys.openWeather,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
});

mapboxgl.accessToken = keys.mapbox;// easier access to my key
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/karolleo000/cld93zwc1001r01oe4192n12v',
    zoom: 5,  //So we can see most of Texas
    center: [-98.4916, 29.4252] //starting position in San Antonio
})


$('#mapBtn').click(function(){
    $('#weatherBoxes').toggleClass('flex-column');
    $('#mapDiv').toggleClass('visually-hidden')
});
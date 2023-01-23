"use strict"
let weeklyWeather = [];
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: keys.openWeather,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    updateToday(data);
    console.log(data.daily[1])
    // console.log(data);
});
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: keys.openWeather,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    weeklyWeather = data
    console.log('5 day forecast', data);
});

let latLongSA = [-98.4916, 29.4252]

mapboxgl.accessToken = keys.mapbox;// easier access to my key
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/karolleo000/cld93zwc1001r01oe4192n12v',
    zoom: 5,  //So we can see most of Texas
    center: latLongSA //starting position in San Antonio
})

//Functions
$('#mapBtn').click(function(){
    $('#weatherBoxes').toggleClass('flex-column');
    $('#mapDiv').toggleClass('visually-hidden')
});

//This is to update the first card inputs
function updateToday(info){
    let currentTemp = info.main.temp.toFixed(0)

    $('h2').children('strong').html(currentTemp + '°F');
    $('#locationName').html(info.name);

    // console.log(currentTemp, info.name); //.main.temp for current temp & .name for location
}

//updating third card
function updateWeekly(weeklyInfo){
    $('#weeklyTemp').empty()
}
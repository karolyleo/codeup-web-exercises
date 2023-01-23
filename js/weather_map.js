"use strict"
let weeklyWeather = [];
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: keys.openWeather,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    updateToday(data);
    console.log(data.daily)
    // console.log(data);
});
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: keys.openWeather,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    weeklyWeather = data
    updateWeekly(data.list)
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
    for(let i=0; i<weeklyInfo.length;i+=8){
        let date = weeklyInfo[i].dt_txt.split(' '),
            temp = weeklyInfo[i].main.temp.toFixed(0),
            dayOfTheWeek = getDayAbbr(date[0]);
        $('#weeklyTemp').append(`
        <div class="flex-column p-1">
          <p class="small"><strong>${temp}°F</strong></p>
          <p class="mb-0"><strong>${dayOfTheWeek}</strong></p>
        </div>
        `)
    }
}

//Turns '2023-01-24' format into 'tues'
function getDayAbbr(date) {
    let daysAbbr = {
        "Sun": "Sun",
        "Mon": "Mon",
        "Tue": "Tue",
        "Wed": "Wed",
        "Thu": "Thu",
        "Fri": "Fri",
        "Sat": "Sat"
    }
    let dateObject = new Date(date);
    let options = { timeZone: 'UTC', weekday: 'short'};
    let day = new Intl.DateTimeFormat('en-US', options).format(dateObject);
    return daysAbbr[day];
}
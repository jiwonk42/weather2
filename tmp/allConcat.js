var Temperature = require('./../js/temperature.js').temperatureModule;
var displayCelcisus = 0;
var displayTemperature = function(city, tempData) {
  $('.showTemperature').text("The temperature in " + city + " is " + tempData + ".s");
  $('.showFahrenheit').text("The temperature in this city is " + 9 / 5 * (tempData - 273) + 32);
  $('.showCelcius').text("The temperature in this city is " + (tempData - 273));
}

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#temperatureLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentTemperatureObject.getTemperature(city, displayTemperature);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

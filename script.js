// Easy access to elements
var searchHistoryList = $('#search-history-list');
var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");
var clearHistoryButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemp = $("#current-temp");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind-speed");
var UVindex = $("#uv-index");
var weatherContent = $("#weather-content");

// Get access to the OpenWeather API
var APIkey = "a17e1499228be1f9c294ac18b234c7d7";

// Easy access to data
var cityList = [];

//find the current date and display in the title of the page*/
var currentDate = moment().format('L');
$("#currentDate").text("("+ currentDate + ")");

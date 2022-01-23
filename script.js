// Easy access to elements
const searchHistoryList = $('#search-history-list');
const  searchCityInput = $("#search-city");
const  searchCityButton = $("#search-city-button");
const clearHistoryButton = $("#clear-history");
const currentCity = $("#current-city");
const  currentTemp = $("#current-temp");
const  currentHumidity = $("#current-humidity");
const  currentWindSpeed = $("#current-wind-speed");
const  UVindex = $("#uv-index");
const  weatherContent = $("#weather-content");

// Get access to the OpenWeather API
const APIkey = "a17e1499228be1f9c294ac18b234c7d7";

// Easy access to data
const cityList = [];

//find the current date and display in the title of the page*/
const currentDate = moment().format('L');
$("#currentDate").text("("+ currentDate + ")");

// Check if search history exists when page loads
initalizeHistory();
showClear();

// Hitting enter while input is focused will trigger
// value added to search history
$(document).on("submit", function(){
    event.preventDefault();

    // Grab value entered into search bar 
    const searchValue = searchCityInput.val().trim();

    currentConditionsRequest(searchValue)
    searchHistory(searchValue);
    searchCityInput.val(""); 
});


// Clear the sidebar of past cities searched
clearHistoryButton.on("click", function(){
    // Empty out the  city list array
    cityList = [];
    // Update city list history in local storage
    listArray();
    
    $(this).addClass("hide");
});

// Clicking on a button in the search history sidebar
// will populate the dashboard with info on that city
searchHistoryList.on("click","li.city-btn", function(event) {
    // console.log($(this).data("value"));
    const value = $(this).data("value");
    currentConditionsRequest(value);
    searchHistory(value); 

});

// Request Open Weather API based on user input
function currentConditionsRequest(searchValue) {
    
    // Formulate URL for AJAX api call
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=" + APIkey;
    

 

    // Request Open Weather API based on user input
function currentConditionsRequest(searchValue) {
    
    // Formulate URL for AJAX api call
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=" + APIkey;
    

    

 
}

}

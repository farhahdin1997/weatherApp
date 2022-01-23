$(document).ready(function () {

    // On click of Search or city list
    $('#getEnteredCityWeather,#past-searches').on('click', function () {
  
          // get location from user input if seearch event
          // or get location from city history if click event from history list
          let clickEvent = $(event.target)[0];
          let location = "";
          if (clickEvent.id === "getEnteredCityWeather") {
            location = $('#cityEntered').val().trim().toUpperCase();
          } else if ( clickEvent.className === ("cityList") ) {
            location = clickEvent.innerText;
          }
          if (location == "") return;
  
          // update local storage with new city search
          updateLocalStorage (location);
          
          // get current weather for searched location, pass location
          getCurrentWeather(location);
          
          // get forecast for searched location, pass location
          getForecastWeather(location);
         });
  
        });
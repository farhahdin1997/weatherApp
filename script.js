$(document).ready(function () {

    // On click of Search or city list
    $('#getEnteredCityWeather,#past-searches').on('click', function () {
  
          // get location from user input if search event
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
  
         //Converting unix timestamp to MM DD YY Format 
         /*function convertDate(UNIXtimestamp){
            
         }*/

         /*function updateLocalStorage(){

         }*/
         
         //Get current user location in order for the user to view the data
        function establishCurrLocation(){
            let location ={}; //Setting location to null

        function success(position){
            location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                success: true
            }
             // Get current conditions for current location
          getCurrentWeather(location);
      
          // Get forecast for local conditions 
          getForecastWeather(location);
        }



    }
 });
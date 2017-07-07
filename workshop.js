var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
  //this returns a promise Because --request().then()--
  return request('http://api.open-notify.org/iss-now.json')
  .then
  (
   //this is the call back function that will return co-ordinates
   //However since it is inside then, the whole thing will be returned as a promise
    function(response) //response is the data received from request(url)
    {
      // Parse as JSON
      var position = JSON.parse(response);
      // Return object with lat and lng
      var coordinates = {}; //new Object to store lat and lng
      coordinates.lat = position.iss_position.latitude;
      coordinates.lng = position.iss_position.longitude;
      //console.log(coordinates); // for testing
      return coordinates;
    }
  )
}
//testing
getIssPosition()
  .then
  (
    function(pos) //position is the return value of getISSPosition()
    {
      console.log(pos);
    }
  )
  .catch
  (
    function(error) 
    {
      console.log("Invalid URL");
    }
  );



function getAddressPosition(address) {

}

function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}
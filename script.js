const baseUrl =  "https://api.weatherapi.com/v1";
const apiKey = "ec12d0dee4604907929185302240705";

const getWeather = async () => {

  const location = getLocation();

  const url = `${baseUrl}/current.json?key=${apiKey}&q=${location}&aqi=no`;
  const response = await fetch(url, {mode: "cors"});
  const jsonResponse = await response.json();

  const params = {
    name: "location.name", 
    region: "location.region", 
    country: "location.country", 
    localtime: "location.localtime", 
    temp_c: "current.temp_c",
    temp_f: "current.temp_f",
    humidity: "current.humidity",
    precip_mm: "current.precip_mm"}
  

  Object.keys(params).forEach((value) => {
    console.log(params[value]);
  })
  
  return jsonResponse;
}

const getLocation = function getLocationFromInput() {
  const location = "azul";
  return location;
}

getWeather();
const baseUrl =  "https://api.weatherapi.com/v1";
const apiKey = "ec12d0dee4604907929185302240705";

// Function to fetch weather data from api
const fetchCurrentWeatherData = async (location) => {

  const url = `${baseUrl}/current.json?key=${apiKey}&q=${location}&aqi=no`;
  try {
    const response = await fetch(url, {mode: "cors"});
    if(!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch(error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
}

// Function to extract specific values from JSON response

const getCity = ({location: {name: value}}) => {
  return value;
}

const getRegion = ({location: {region: value}}) => {
  return value;
}

const getCountry = ({location: {country: value}}) => {
  return value;
}

const getLocalTime = ({location: {localtime: value}}) => {
  return value;
}

const getTempInCelsius = ({current: {temp_c: value}}) => {
  return value;
}

const getTempInFahrenheit = ({current: {temp_f: value}}) => {
  return value;
}

const getCondition = ({current: {condition: {text: value}}}) => {
  return value;
}

const getConditionIcon = ({current: {condition: {icon: value}}}) => {
  return value;
}

const getWindSpeedKph = ({current: {wind_kph: value}}) => {
  return value;
}

const getWindDirection = ({current: {wind_dir: value}}) => {
  return value;
}

const getHumidity = ({current: {humidity: value}}) => {
  return value;
}


fetchCurrentWeatherData("azul")
  .then((jsonResponse) => {
    // console.log(jsonResponse);
    return {
      "name": getCity(jsonResponse),
      "region": getRegion(jsonResponse),
      "country": getCountry(jsonResponse),
      "localtime": getLocalTime(jsonResponse),
      "temp_c": getTempInCelsius(jsonResponse),
      "temp_f": getTempInFahrenheit(jsonResponse),
      "text": getCondition(jsonResponse),
      "icon": getConditionIcon(jsonResponse),
      "wind_kpm": getWindSpeedKph(jsonResponse),
      "wind_dir": getWindDirection(jsonResponse),
      "Humidity": getHumidity(jsonResponse)
    }   
  })
  .then((response) => {
    console.log(response.temp_c);
  } )
  .catch((error) => {
    console.error("Error: ", error);
  })
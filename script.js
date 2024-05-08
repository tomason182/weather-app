const baseUrl =  "https://api.weatherapi.com/v1";
const apiKey = "ec12d0dee4604907929185302240705";

// Function to fetch weather data from api

const fetchWeather = async (url) => {
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

const fetchForecastWeatherData = async (location) => {
  const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${location}&aqi=no`;
  const response = await fetchWeather(url);
  return response;
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

const getMaxTempC = ({forecast: {forecastday: [{day: {maxtemp_c: value}}]}}) => {
  return value;
}

const getMaxTempF = ({forecast: {forecastday: [{day: {maxtemp_f: value}}]}}) => {
  return value;
}

const getMinTempC = ({forecast: {forecastday: [{day: {mintemp_c: value}}]}}) => {
  return value;
}

const getMinTempF = ({forecast: {forecastday: [{day: {mintemp_f: value}}]}}) => {
  return value;
}

const getRainProb = ({forecast: {forecastday: [{day: {daily_change_of_rain: value}}]}}) => {
  return value;
}

fetchForecastWeatherData("azul")
  .then((jsonResponse) => {
    // console.log(jsonResponse);
    console.log(jsonResponse.forecast.forecastday)
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
      "Humidity": getHumidity(jsonResponse),
      "maxTempC": getMaxTempC(jsonResponse),
      "maxTempF": getMaxTempF(jsonResponse),
      "minTempC": getMinTempC(jsonResponse),
      "minTempF": getMinTempF(jsonResponse),
      "rain_prob": getRainProb(jsonResponse)
    }   
  })
  .then((response) => {
    console.log(response); // Just for checking the returns values
  } )
  .catch((error) => {
    console.error("Error: ", error);
  })
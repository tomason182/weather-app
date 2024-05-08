const baseUrl =  "https://api.weatherapi.com/v1";
const apiKey = "ec12d0dee4604907929185302240705";

// Function to fetch weather data from api
const fetchWeatherData = async (location) => {

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

const getWindSpeedKph = ({current: {condition: {wind_kph: value}}}) => {
  return value;
}

const getHumidity = ({current: {condition: {humidity: value}}}) => {
  return value;
}




fetchWeatherData("azul")
  .then((jsonResponse) => {
    const cityName = getCity(jsonResponse);
    const cityRegion = getCity(jsonResponse);
    const country = getCountry(jsonResponse);
    const localTime = getLocalTime(jsonResponse);
    const temp_c = getTempInCelsius(jsonResponse);
    const temp_f = getTempInFahrenheit(jsonResponse);
    const conditionText = getCondition(jsonResponse);
    const conditionIcon = getConditionIcon(jsonResponse);
    const windSpeedKpm = getWindSpeedKph(jsonResponse);
    const humidity = getHumidity(jsonResponse);

    console.log(jsonResponse);
    /* console.log("city Name: ", cityName);
    console.log("city Region: ", cityRegion);
    console.log("Country: ", country );
    console.log("local time: ", localTime);
    console.log("Temperature in Celsius: ", temp_c);
    console.log("Temperature in Fahrenheit: ", temp_f);
    console.log("Condition: ", conditionText);
    console.log("Icon: ", conditionIcon);
    console.log("wind speed: ", windSpeedkpm);
    console.log("Humidity: ", humidity) */
  })
  .catch((error) => {
    console.error("Error: ", error);
  })





/* const getLocationData = async function getLocationDataFromJsonResponse(callback) {
  try {
    const response = await callback();
    const name = response.location.name;
    const region = response.location.region;
    const country = response.location.country;
    const localtime = response.location.localtime;
  
    return [name, region, country, localtime];
  } catch(error) {
    console.log("Failed to fetch location data: ", error);
    throw error;
  }

}

const getCurrentWeather = async function getWheatherConditionFromJsonResponse(callback) {
  try {
    const response = await callback();
    const temp_c = response.current.temp_c;
    const temp_f = response.current.temp_f;
    const text = response.current.condition.text;
    const icon = response.current.condition.icon;
    const windMph = response.current.wind_mph;
    const precip_mm = response.current.precip_mm;
    const humidity = response.current.humidity;
    const cloud = response.current.cloud;

    return {
      "tempCelcius": temp_c,
      "tempFarenheit": temp_f,
      "conditionText": text,
      "conditionIcon": icon,
      "wind": windMph,
      "precip": precip_mm,
      "humidity": humidity,
      "cloud": cloud,
    }

  } catch(error) {
    console.log("Failed to fetch current temperature", error);
  }
}

const getLocation = function getLocationFromInput() {
  const location = "azul";
  return location;
}

const finalResult = async () => {
 const result = await getCurrentWeather(getJsonResponse);
 console.log(result.tempCelcius);
}

finalResult(); */
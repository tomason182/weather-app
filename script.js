const baseUrl =  "https://api.weatherapi.com/v1";
const apiKey = "ec12d0dee4604907929185302240705";

// Function to fetch weather data from api

const fetchForecastWeather = async (location="azul") => {
  const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${location}&aqi=no&days=3`;
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

const todayForecast = async function fetchTodayForecast() {
  const response = await fetchForecastWeather();
  return response.forecast.forecastday[0]; 
}

const tomorrowForecast = async function fetchTomorrowForecast() {
  const response = await fetchForecastWeather();
  return response.forecast.forecastday[1];
}

const afterTomorrowForecast = async function fetchAfterTomorrowForecast() {
  const response = await fetchForecastWeather();
  return response.forecast.forecastday[2];
}

const forecastInfo = (jsonResponse) => {
  return {
    "city": getCity(jsonResponse),
    "region": getRegion(jsonResponse),
    "country": getCountry(jsonResponse),
    "localtime": getLocalTime(jsonResponse),
    "temp_c": getTempInCelsius(jsonResponse),
    "temp_f": getTempInFahrenheit(jsonResponse),
    "condition_text": getConditionText(jsonResponse),
    "condition_icon": getConditionIcon(jsonResponse),
    "wind_kph": getWindSpeedKph(jsonResponse),
    "wind_dir": getWindDirection(jsonResponse),
    "humidity": getHumidity(jsonResponse),
  }
}

const forecastParams = (jsonResponse) => {
  return {

    "max_temp_c": getMaxTempC(jsonResponse),
    "max_temp_f": getMaxTempF(jsonResponse),
    "min_temp_c": getMinTempC(jsonResponse),
    "min_temp_f": getMinTempF(jsonResponse),
    "rain_prob": getRainProb(jsonResponse)
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

const getConditionText = ({current: {condition: {text: value}}}) => {
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

const getMaxTempC = ({day: {maxtemp_c: value}}) => {
  return value;
}

const getMaxTempF = ({day: {maxtemp_f: value}}) => {
  return value;
}

const getMinTempC = ({day: {mintemp_c: value}}) => {
  return value;
}

const getMinTempF = ({day: {mintemp_f: value}}) => {
  return value;
}

const getRainProb = ({day: {daily_chance_of_rain: value}}) => {
  return value;
}

todayForecast()
  .then((response) => {
    return forecastParams(response);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error: ", error);
    throw error;
  })

tomorrowForecast()
  .then((response) => {
    return forecastParams(response);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error: ", error);
    throw error;
})

afterTomorrowForecast()
.then((response) => {
  return forecastParams(response);
})
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.error("Error: ", error);
  throw error;
})
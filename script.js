const baseUrl =  "https://api.weatherapi.com/v1";
const apiKey = "ec12d0dee4604907929185302240705";

const getJsonResponse = async () => {

  const location = getLocation();
  const url = `${baseUrl}/current.json?key=${apiKey}&q=${location}&aqi=no`;

  try {
    const response = await fetch(url, {mode: "cors"});
    if(!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const jsonResponse = await response.json();
    return jsonResponse;

  } catch(error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
}

const getLocationData = async function getLocationDataFromJsonResponse(callback) {
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

finalResult();



/* const getParams = async function getSpecificWeatherParameters(callback) {

  const params = {
    name: {
      dir1: "location",
      dir2: "name",
      value: null
    }, 
    region: {
      dir1: "location",a
      dir2: "region",
      value: null
    },   
    country: {
      dir1: "location", 
      dir2: "country", 
      value: null
    },    
    localtime: {
      dir1: "location", 
      dir2: "localtime",
      value: null,
    },
    temp_c: {
      dir1: "current", 
      dir2: "temp_c",
      value: null
    },
    temp_f: {
      dir1: "current", 
      dir2: "temp_f",
      value: null
    },
    humidity: {
      dir1: "current", 
      dir2: "humidity",
      value: null
    },
    precip_mm: {
      dir1: "current", 
      dir2: "precip_mm",
      value: null
    }
  }

  const response = await callback();

   Object.keys(params).forEach((key) => {
    const firstParam = params[key].dir1;
    const secondParam = params[key].dir2;

    params[key].value = response[firstParam][secondParam];

  })
  console.log(params);
  return params;
} */


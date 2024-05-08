const baseUrl =  "https://api.weatherapi.com/v1";
const apiKey = "ec12d0dee4604907929185302240705";

const getCurrentWeather = async () => {

  const location = getLocation();
  const url = `${baseUrl}/current.json?key=${apiKey}&q=${location}&aqi=no`;

  try {
    const response = await fetch(url, {mode: "cors"});
    console.log(response.ok);
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

const getLocation = function getLocationFromInput() {
  const location = "azul";
  return location;
}


/* const getParams = async function getSpecificWeatherParameters(callback) {

  const params = {
    name: {
      dir1: "location",
      dir2: "name",
      value: null
    }, 
    region: {
      dir1: "location",
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


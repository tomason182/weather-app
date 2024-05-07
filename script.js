baseUrl =  "https://api.weatherapi.com/v1";
apiKey = "ec12d0dee4604907929185302240705";

url = `${baseUrl}/current.json?key=${apiKey}&q=azul&aqi=no`;
 
fetch(url, {mode: "cors"})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    console.log(response.location.name);
    console.log(response.location.region);
    console.log(response.current.temp_c);
  })
  .catch(function(error) {
    console.log(error);
  })

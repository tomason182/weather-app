import './style.css';
import { getTodayWeatherData } from "./script";



const pageBuilder = {

  today: await getTodayWeatherData(),
  // Build 3 main containers.

  buildHeader: function() {
    this.buildSearch();
    this.buildTempSwitch();
  },
  buildMainContent: function() {
    const mainContent = document.getElementById('main-content');

    const sectionOne = this.buildSection1(this.today);
    const sectionTwo = this.buildSection2();
    const sectionThree = this.buildSection3();

    mainContent.appendChild(sectionOne);
  },
  buildFooter: function() {

  },

  // Function that goes in the header
  // Take the searched value
  buildSearch: function() {
    const searchForm = document.querySelector('#search-container > form');
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
            
      const input = document.getElementById('search');
      const searchedValue = input.value;
      input.value = '';
      return searchedValue;
    })
  },
  // Switch between celsius and fahrenheit.
  buildTempSwitch: function() {
    console.log("Switch function");
    return true;
  },

  // Functions that goes inside the main content.
  buildSection1: function(data) {
    const currentWeather = document.createElement('div');
    currentWeather.className = 'section-one';

    // Contenedor del titulo de la seccion 1.
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    // Content inside title container.
    const currentLocation = document.createElement('h2');
    currentLocation.className = 'current-location';
    currentLocation.textContent = `${data.city}-${data.region}-${data.country}`;

    const localtime = document.createElement('h2');
    localtime.className = 'localtime';
    localtime.textContent = data.localtime;


    // Append location and local time into title container.
    titleContainer.appendChild(currentLocation);
    titleContainer.appendChild(localtime);

    // Subsection One container.
    const subsectionOne = document.createElement('div');
    subsectionOne.className = 'subsection-one';

    // Append current temperature and information to subsection one.
    subsectionOne.appendChild(this.buildCurrentTempContainer(this.today));
    subsectionOne.appendChild(this.buildCurrentWeatherInfoContainer(this.today));

    // Append all three divs to section one container.
    currentWeather.appendChild(titleContainer);
    currentWeather.appendChild(subsectionOne);

    return currentWeather;
  },

  buildSection2: function(data) {

    console.log("section two running");
    return true;
  },
  buildSection3: function() {
    console.log("section three running");
    return true;
  },

  buildCurrentTempContainer: function(data) {
    const temp_c = data.temp_c;
    const temp_f = data.temp_f;
    const currentTempContainer = document.createElement('div');
    currentTempContainer.className = 'temperature-container';

    const currentTemp = document.createElement('h2');
    currentTemp.className = 'current-temperature';
    currentTemp.textContent = `${temp_c}°C`;

    const currentStatus = document.createElement('h4');
    currentStatus.className = 'current-status-text';
    currentStatus.textContent = data.condition_text;

    const currentStatusIcon = document.createElement('img');
    currentStatusIcon.className = 'current-status-img';
    currentStatusIcon.src = data.condition_icon;

    currentTempContainer.appendChild(currentTemp);
    currentTempContainer.appendChild(currentStatus);
    currentTempContainer.appendChild(currentStatusIcon);

    return currentTempContainer;
  },

  buildCurrentWeatherInfoContainer: function(data) {
    // Contenedor informacion actual del clima.
    const currentWeatherInfoContainer = document.createElement('div');
    currentWeatherInfoContainer.className = 'current-weather-info-container';

    const windSpeed = document.createElement('h4');
    windSpeed.className = 'current-weather-info';
    windSpeed.textContent = `Wind: ${data.wind_kph} km`;

    const humidity = document.createElement('h4');
    humidity.className= 'current-weather-info';
    humidity.textContent = `Humidity: ${data.humidity}%`;

    const rain_prob = document.createElement('h4');
    rain_prob.className = 'current-weather-info';


    currentWeatherInfoContainer.appendChild(windSpeed);
    currentWeatherInfoContainer.appendChild(humidity);

    return currentWeatherInfoContainer;
  }
}

pageBuilder.buildHeader();
pageBuilder.buildMainContent();
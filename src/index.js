import './style.css';
import { getTodayWeatherData } from "./script";

const today = await getTodayWeatherData();

const pageBuilder = {

  // Build 3 main containers.

  buildHeader: function() {
    this.buildSearch();
    this.buildTempSwitch();
  },
  buildMainContent: function() {
    this.buildSection1();
    this.buildSection2();
    this.buildSection3();
  },
  buildFooter: function() {

  },

  // Function that goes in the header
  // Take the searched value
  buildSearch: function() {
    const searchForm = document.querySelector('search-container > form');
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
            
      const input = document.getElementById('search');
      const searchedValue = input.value;
      console.log(searchedValue); // console log the value of the input.
      input.value = '';
      return searchedValue;
    })
  }
  // Switch between celsius and fahrenheit.
  switchTempUnit: function() {
    // function to switch between celsius to fahrenheit.
  }

  // Function that goes inside the main content.
  buildSection1: function() {
    const sectionOne = document.createElement('div');
    sectionOne.className = 'current-weather-container';

    // Contenedor del titulo de la seccion 1.
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    // Subsection One container.
    const subsectionOne = document.createElement('div');
    subsectionOne.className = 'subsection-one';

    // Contenedor de la temperatura actual.
    const currentTempContainer = document.createElement('div');
    currentTempContainer.className = 'temperature-container';

    // Contenedor informacion actual del clima.
    const currentWeatherInfo = document.createElement('div');
    currentWeatherInfo.className = 'current-weather-info';

    // Append current temperature and information to subsection one.
    subsectionOne.appendChild(currentTempContainer);
    subsectionOne.appendChild(currentWeatherInfo);

    // Append all three divs to section one container.
    sectionOne.appendChild(titleContainer);
    sectionOne.appendChild(subsectionOne);

    currentWeather.appendChild(title);
    currentWeather.appendChild(weatherInfo);

    return currentWeather;
  }



}


const displayWeather = function generateWeatherContainersAndDisplayInfo() {
    const mainContent = document.getElementById('main-content');

    // Create container for display today's weather
    const todayWeatherContainer = document.createElement('div');
    todayWeatherContainer.className = 'today-weather';

    // Inside todays weather container goes to more containers
    const todayTitleContainer = document.createElement('div');
    todayTitleContainer.className = 'today-title-container';

    // Location and localtime title.
    const location = document.createElement('h2');
    location.className = 'location';
    location.textContent = `${today.city}, ${today.region}, ${today.country}`;
    const localtime = document.createElement('h3');
    localtime.className = 'localtime';
    localtime.textContent = `${today.localtime}`;

    // Today weather condition summary;
    const todaySummary = document.createElement('div');
    todaySummary.className = 'today-summary';

    const todayForecastContainer = document.createElement('div');
    todayForecastContainer.className = 'today-forecast-container';

    const todayForecastDetails = document.createElement('div');
    todayForecastDetails.className = 'today-forecast-details';

    todaySummary.appendChild(todayForecastContainer);
    todaySummary.appendChild(todayForecastDetails);
    

    todayTitleContainer.appendChild(location);
    todayTitleContainer.appendChild(localtime);
    todayWeatherContainer.appendChild(todayTitleContainer);
    todayWeatherContainer.appendChild(todaySummary);

    // Create container for display today's details
    const todayDetailsContainer = document.createElement('div');
    todayDetailsContainer.className = 'today-details';


    mainContent.appendChild(todayWeatherContainer);
    mainContent.appendChild(todayDetailsContainer);
}


displayWeather();
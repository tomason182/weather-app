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
    this.buildSection1(today);
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
  },
  // Switch between celsius and fahrenheit.
  switchTempUnit: function() {
    // function to switch between celsius to fahrenheit.
  },

  // Function that goes inside the main content.
  buildSection1: function(data) {
    const sectionOne = document.createElement('div');
    sectionOne.className = 'current-weather-container';

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

    return sectionOne;
  }
}


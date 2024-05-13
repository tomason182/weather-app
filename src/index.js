import './style.css';
import { addContent } from './content';
import { createElementWithClassName } from './create-element';
import { getTodayWeatherData, getTodayForecastData, getTomorrowForecastData, getAfterTomorrowForecastData } from "./script";

const pageBuilder = {
  // Build 3 main containers.
  mainContainer: function() {
    const mainContainer = document.getElementById('main-container');
    return mainContainer;
  },

  buildHeader: function() {
    const header = createElementWithClassName('div', 'header');    
    header.appendChild(this.buildLogo());
    header.appendChild(this.buildSearch());
    header.appendChild(this.buildTempSwitch());

    this.mainContainer().appendChild(header);
  },
  buildMainContent: function() {

    const mainContent = createElementWithClassName('div', 'main-content');
    mainContent.appendChild(this.firstSection());
    
    // More sections can be added.

    this.mainContainer().appendChild(mainContent);

    
    // Build main content

  },
  buildFooter: function() {
    // build footer
  },

  // Header builder
  buildLogo: function() {
    const logoContainer = createElementWithClassName('div', 'logo-container');
    const logoImg = createElementWithClassName('img', 'logo-img');
    logoImg.src = '#';
    logoImg.alt = 'Logo';

    logoContainer.appendChild(logoImg);
    return logoContainer;
  },

  buildSearch: function() {
    const searchContainer = createElementWithClassName('div', 'search-container');
    const searchForm = createElementWithClassName('form', 'search-form');
    const searchInput = createElementWithClassName('input', 'search-input');
    
    searchInput.type = 'text';
    searchInput.name = 'search';
    searchInput.placeholder = 'Enter city or zip-code';

    searchForm.appendChild(searchInput);
    searchContainer.appendChild(searchForm);

    return searchContainer;
  },

  // Toggle btn
  buildTempSwitch: function() {
    const switchTempContainer = createElementWithClassName('div', 'switch-temp-container');
    const switchBtn = createElementWithClassName('div', 'switch-btn');
    
    const celsiusUnit = createElementWithClassName('span', 'celsius');
    celsiusUnit.textContent = '°C';
    const fahrenheitUnit = createElementWithClassName('span', 'fahrenheit');
    fahrenheitUnit.textContent = '°F';

    switchBtn.appendChild(celsiusUnit);
    switchBtn.appendChild(fahrenheitUnit);

    switchTempContainer.appendChild(switchBtn);
    return switchTempContainer;
  },

  // Main content builders
  // First section

  firstSection: function() {
    const firstSectionContainer = createElementWithClassName('div', 'first-section-container');
    const titleContainer = createElementWithClassName('div', 'first-section-title');
    const containerOne = createElementWithClassName('div', 'first-section-container-one');
    const containerTwo = createElementWithClassName('div', 'first-section-container-two');

    // ContainerOne containers.
    const weatherIconContainer = createElementWithClassName('div', 'weather-icon-container');
    const weatherTempContainer = createElementWithClassName('div', 'weather-temp-container');
    const weatherTextContainer = createElementWithClassName('div', 'weather-text-container');

    // ContainerTwo containers.
    const weatherDetails = ['feelLike', 'windDir', 'rainProb', 'air quality'];

    weatherDetails.forEach(element => {
      const container = createElementWithClassName('div', 'weather-detail');
      const weatherCondition = createElementWithClassName('span', 'weather-condition');
      weatherCondition.textContent = element;
      const conditionValue = createElementWithClassName('span', 'condition-value');
      container.appendChild(weatherCondition);
      container.appendChild(conditionValue);
      containerTwo.appendChild(container);
    });

    // Append containers into container one.
    containerOne.appendChild(weatherIconContainer);
    containerOne.appendChild(weatherTempContainer);
    containerOne.appendChild(weatherTextContainer);

    // Append container into first section.
    firstSectionContainer.appendChild(titleContainer);
    firstSectionContainer.appendChild(containerOne);
    firstSectionContainer.appendChild(containerTwo);

    return firstSectionContainer;
    },
}

document.addEventListener('DOMContentLoaded', () => {
  pageBuilder.buildHeader();
  pageBuilder.buildMainContent();
  addContent.addTitle(getTodayWeatherData());
})

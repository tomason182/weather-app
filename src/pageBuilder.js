import { createElementWithClassName } from './create-element';

export const pageBuilder = {
  // Build 3 main containers.
  mainContainer: function () {
    const mainContainer = document.getElementById('main-container');
    return mainContainer;
  },

  buildHeader: function () {
    const header = createElementWithClassName('div', 'header');
    header.appendChild(this.buildLogo());
    header.appendChild(this.buildSearch());
    header.appendChild(this.buildTempSwitch());

    this.mainContainer().appendChild(header);
  },
  buildMainContent: function () {

    const mainContent = createElementWithClassName('div', 'main-content');
    mainContent.appendChild(this.firstSection());
    mainContent.appendChild(this.secondSection());

    // More sections can be added.
    this.mainContainer().appendChild(mainContent);


    // Build main content
  },
  buildFooter: function () {
    // build footer
  },

  // Header builder
  buildLogo: function () {
    const logoContainer = createElementWithClassName('div', 'logo-container');
    const logoImg = createElementWithClassName('img', 'logo-img');
    logoImg.src = '#';
    logoImg.alt = 'Logo';

    logoContainer.appendChild(logoImg);
    return logoContainer;
  },

  buildSearch: function () {
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
  buildTempSwitch: function () {
    const switchTempContainer = createElementWithClassName('div', 'switch-temp-container');
    const switchBtn = createElementWithClassName('div', 'switch-btn');
    const celsiusContainer = createElementWithClassName('div', 'celsius-container');
    const fahrenheitContainer = createElementWithClassName('div', 'fahrenheit-container');

    const celsiusUnit = createElementWithClassName('span', 'celsius');
    celsiusUnit.textContent = '°C';
    const fahrenheitUnit = createElementWithClassName('span', 'fahrenheit');
    fahrenheitUnit.textContent = '°F';

    celsiusContainer.appendChild(celsiusUnit);
    fahrenheitContainer.appendChild(fahrenheitUnit);
    switchBtn.appendChild(celsiusContainer);
    switchBtn.appendChild(fahrenheitContainer);

    switchTempContainer.appendChild(switchBtn);
    return switchTempContainer;
  },

  // Main content builders
  // First section
  firstSection: function () {
    const firstSectionContainer = createElementWithClassName('div', 'first-section-container');
    const titleContainer = createElementWithClassName('div', 'first-section-title');
    const containerOne = createElementWithClassName('div', 'first-section-container-one');
    const containerTwo = createElementWithClassName('div', 'first-section-container-two');

    // ContainerOne containers.
    const weatherIconContainer = createElementWithClassName('div', 'weather-icon-container');
    const weatherTempContainer = createElementWithClassName('div', 'weather-temp-container');
    const weatherTextContainer = createElementWithClassName('div', 'weather-text-container');

    // ContainerTwo containers.
    const weatherDetails = ['Feel-like', 'Wind-Speed', 'RainProb', 'Humidity'];

    weatherDetails.forEach(element => {
      const container = createElementWithClassName('div', 'weather-detail', element);
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

  secondSection: function () {
    const secondSectionContainer = createElementWithClassName('div', 'second-section-container');
    const titleContainer = createElementWithClassName('div', 'second-section-title-container');
    const dailyForecastContainer = createElementWithClassName('div', 'daily-forecast-container');

    const title = createElementWithClassName('h3', 'daily-forecast-title');
    title.textContent = 'Daily Forecast';

    const dailyForecastList = ['Today', 'Tomorrow', 'After-tomorrow'];

    dailyForecastList.forEach((item) => {
      const containerCreation = createElementWithClassName('div', 'daily-container', item);
      const date = createElementWithClassName('div', 'date');
      const icon = createElementWithClassName('div', 'daily-icon');
      const minMaxTemp = createElementWithClassName('div', 'min-max-temp');
      const dailyDetail = createElementWithClassName('div', 'daily-detail');
      const dailyRainProb = createElementWithClassName('div', 'daily-rain-prob');

      containerCreation.appendChild(date);
      containerCreation.appendChild(icon);
      containerCreation.appendChild(minMaxTemp);
      containerCreation.appendChild(dailyDetail);
      containerCreation.appendChild(dailyRainProb);
      dailyForecastContainer.appendChild(containerCreation);
    })

    titleContainer.appendChild(title);

    secondSectionContainer.appendChild(titleContainer);
    secondSectionContainer.appendChild(dailyForecastContainer);

    return secondSectionContainer;
  }
};

import './style.css';

const pageBuilder = {
  // Build 3 main containers.

  buildHeader: function() {
    const header = this.createElementWithClassName('div', 'header');
    
    header.appendChild(this.buildLogo());
    header.appendChild(this.buildSearch());
    header.appendChild(this.buildTempSwitch());

    document.body.appendChild(header);
  },
  buildMainContent: function() {
    
    const content = this.buildMainContent();

    const sectionOne = this.buildSection1();
    const sectionTwo = this.buildSection2();
    const sectionThree = this.buildSection3();

    content.appendChild(sectionOne);
    content.appendChild(sectionTwo);
    content.appendChild(sectionThree);

  },
  buildFooter: function() {
    this.buildSignature();
  },

  // Header builder
  buildLogo: function() {
    const logoContainer = this.createElementWithClassName('div', 'logo-container');
    const logoImg = this.createElement('img', 'logo-img');
    logoImg.src = '#';
    logoImg.alt = 'Logo';

    logoContainer.appendChild(logoImg);
    return logoContainer;
  },

  buildSearch: function() {
    const searchContainer = this.createElementWithClassName('div', 'search-container');
    const searchForm = this.createElementWithClassName('form', 'search-form');
    const searchInput = this.createElementWithClassName('input', 'search-input');
    
    searchInput.type = 'text';
    searchInput.name = 'search';
    searchInput.placeHolder = 'Enter city or zip-code';

    searchForm.appendChild(searchInput);
    searchContainer.appendChild(searchForm);

    return searchContainer;
  },

  buildTempSwitch: function() {
    const switchTempContainer = createElementWithClassName('div', 'switch-temp-container');
    const switchBtn = this.createElementWithClassName('button', 'switch-btn');
    switchBtn.textContent = 'Switch temp';

    switchTempContainer.appendChild(switchBtn);
    return switchTempContainer;
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
    subsectionOne.appendChild(this.buildCurrentWeatherInfoContainer(this.today, this.todayForecast));

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

  buildCurrentWeatherInfoContainer: function(firstData, secondData) {
    // Contenedor informacion actual del clima.
    const currentWeatherInfoContainer = document.createElement('div');
    currentWeatherInfoContainer.className = 'current-weather-info-container';

    const windSpeed = document.createElement('h4');
    windSpeed.className = 'current-weather-info';
    windSpeed.textContent = `Wind: ${firstData.wind_kph} km`;

    const humidity = document.createElement('h4');
    humidity.className= 'current-weather-info';
    humidity.textContent = `Humidity: ${firstData.humidity}%`;

    const rain_prob = document.createElement('h4');
    rain_prob.className = 'current-weather-info';
    rain_prob.textContent = `Rain probability: ${secondData.rain_prob}`;


    currentWeatherInfoContainer.appendChild(windSpeed);
    currentWeatherInfoContainer.appendChild(humidity);
    currentWeatherInfoContainer.appendChild(rain_prob);

    return currentWeatherInfoContainer;
  }

  createElementWithClassName: function(type, className) {
    const element = document.createElement(type);
    if (className) element.classList.add(...className.split(' ')); // Can add more than one class name separate with space.
    return element
  } 
}

pageBuilder.buildHeader();
pageBuilder.buildMainContent();
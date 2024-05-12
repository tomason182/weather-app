import './style.css';

const pageBuilder = {
  // Build 3 main containers.
  mainContainer: function() {
    const mainContainer = document.getElementById('main-container');
    return mainContainer;
  },

  buildHeader: function() {
    const header = this.createElementWithClassName('div', 'header');    
    header.appendChild(this.buildLogo());
    header.appendChild(this.buildSearch());
    header.appendChild(this.buildTempSwitch());

    this.mainContainer().appendChild(header);
  },
  buildMainContent: function() {

    const mainContent = this.createElementWithClassName('div', 'main-content');
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
    const logoContainer = this.createElementWithClassName('div', 'logo-container');
    const logoImg = this.createElementWithClassName('img', 'logo-img');
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
    searchInput.placeholder = 'Enter city or zip-code';

    searchForm.appendChild(searchInput);
    searchContainer.appendChild(searchForm);

    return searchContainer;
  },

  buildTempSwitch: function() {
    const switchTempContainer = this.createElementWithClassName('div', 'switch-temp-container');
    const switchBtn = this.createElementWithClassName('button', 'switch-btn');
    switchBtn.textContent = 'Switch temp';

    switchTempContainer.appendChild(switchBtn);
    return switchTempContainer;
  },

  // Main content builders
  // First section

  firstSection: function() {
    const firstSectionContainer = this.createElementWithClassName('div', 'first-section-container');
    const titleContainer = this.createElementWithClassName('div', 'first-section-title');
    const containerOne = this.createElementWithClassName('div', 'first-section-container-one');
    const containerTwo = this.createElementWithClassName('div', 'first-section-container-two');

    // ContainerOne containers.
    const weatherIconContainer = this.createElementWithClassName('div', 'weather-icon-container');
    const weatherTempContainer = this.createElementWithClassName('div', 'weather-temp-container');
    const weatherTextContainer = this.createElementWithClassName('div', 'weather-text-container');

    // ContainerTwo containers.
    const weatherDetails = ['feelLike', 'windDir', 'rainProb', 'air quality'];

    weatherDetails.forEach(element => {
      const container = this.createElementWithClassName('div', 'weather-detail');
      const weatherCondition = this.createElementWithClassName('span', 'weather-condition');
      weatherCondition.textContent = element;
      const conditionValue = this.createElementWithClassName('span', 'condition-value');
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

  createElementWithClassName: function (elementType, className) {
    const element = document.createElement(elementType);
    
    if (className) {
      element.classList.add(className); // Can add more than one class name separate with space.
    }
    
    return element
  }, 
}

document.addEventListener('DOMContentLoaded', () => {
  pageBuilder.buildHeader();
  pageBuilder.buildMainContent();
})

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

    const mainContent = this.createElementWithClassName('main-content');
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
    const containerTow = this.createElementWithClassName('div', 'first-section-container-two');

    firstSectionContainer.appendChild(titleContainer);
    firstSectionContainer.appendChild(containerOne);
    firstSectionContainer.appendChild(containerTow);

    return firstSectionContainer;
  },

  createElementWithClassName: function(type, className) {
    const element = document.createElement(type);
    if (className) element.classList.add(...className.split(' ')); // Can add more than one class name separate with space.
    return element
  } 
}

pageBuilder.buildHeader();
pageBuilder.buildMainContent();
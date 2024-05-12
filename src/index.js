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

  createElementWithClassName: function(type, className) {
    const element = document.createElement(type);
    if (className) element.classList.add(...className.split(' ')); // Can add more than one class name separate with space.
    return element
  } 
}

pageBuilder.buildHeader();
import { createElementWithClassName } from "./create-element";


const addContent = {
    addTitle: async function(data) {
        const container = document.querySelector('.first-section-title');
        const title = createElementWithClassName('h3', 'location-title');
        title.textContent = await this.getLocation(data);

        const localtime = createElementWithClassName('span', 'local-time');
        localtime.textContent = await this.getLocalTime(data);

        container.appendChild(title);
        container.appendChild(localtime);
    },

    addTemp: async function(data) {
        const celsiusBtn = document.querySelector('.celsius-container');
        const fahrenheitBtn = document.querySelector('.fahrenheit-container');
        const tempContainer = document.querySelector('.weather-temp-container');
        const weatherTempElement = createElementWithClassName('h1', 'temperature-value');

        

        const temp_c = await this.getTempInCelsius(data);
        const temp_f = await this.getTempInFahrenheit(data);
    
        celsiusBtn.classList.add('active');
        weatherTempElement.textContent = temp_c;
        
        const handleCelsiusClick = () => {
            if(!celsiusBtn.classList.contains('active')) {
                celsiusBtn.classList.add('active');
                fahrenheitBtn.classList.remove('active');
                console.log(temp_c);
                weatherTempElement.textContent = temp_c;
                return weatherTempElement;
            }
        };
    
        const handleFahrenheitClick = () => {
            if(!fahrenheitBtn.classList.contains('active')) {
                fahrenheitBtn.classList.add('active');
                celsiusBtn.classList.remove('active');
                console.log(temp_f);
                weatherTempElement.textContent = temp_f;
                return weatherTempElement;
            }
        };
    
        celsiusBtn.addEventListener('click', handleCelsiusClick);
        fahrenheitBtn.addEventListener('click', handleFahrenheitClick);

        tempContainer.appendChild(weatherTempElement);
    
        return data.temp_c;
    },

    addIcon: async function(data) {
        const weatherIconContainer = document.querySelector('.weather-icon-container');
        const weatherIconElement = createElementWithClassName('img', 'weather-icon');

        weatherIconElement.src = await this.getWeatherIcon(data);
        weatherIconElement.alt = 'weather-icon';
        weatherIconContainer.appendChild(weatherIconElement);
    },

    getLocation: async function(data) {
        const obj = await data;
        return `${obj.city}, ${obj.region}, ${obj.country}`;
    },

    getLocalTime: async function(data) {
        const obj = await data;
        return obj.localtime;
    },

    getTempInCelsius: async function(data) {
        const obj = await data;
        return obj.temp_c;
    },

    getTempInFahrenheit: async function(data) {
        const obj = await data;
        return obj.temp_f;
    },

    getWeatherIcon: async function(data) {
        const obj = await data;
        return obj.condition_icon;
    }
}


export {addContent};
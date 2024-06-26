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
        const feelLikeElement = document.querySelector('.first-section-container-two > .weather-detail.Feel-like > .condition-value');
        const weatherTempElement = createElementWithClassName('h1', 'temperature-value');

        const temp_c = await this.getTempInCelsius(data);
        const temp_f = await this.getTempInFahrenheit(data);
        const feelslike_c = await this.getFeelsLikeinCelsius(data);
        const feelslike_f = await this.getFeelsLikeInFahrenheit(data);
    
        celsiusBtn.classList.add('active');
        weatherTempElement.textContent = `${temp_c} °C`;
        feelLikeElement.textContent = `${feelslike_c} °C`;
        
        const handleCelsiusClick = () => {
            if(!celsiusBtn.classList.contains('active')) {
                celsiusBtn.classList.add('active');
                fahrenheitBtn.classList.remove('active');
                weatherTempElement.textContent = `${temp_c} °C`;
                feelLikeElement.textContent = `${feelslike_c} °C`;

                return weatherTempElement;
            }
        };
    
        const handleFahrenheitClick = () => {
            if(!fahrenheitBtn.classList.contains('active')) {
                fahrenheitBtn.classList.add('active');
                celsiusBtn.classList.remove('active');
                weatherTempElement.textContent = `${temp_f} °F`;
                feelLikeElement.textContent = `${feelslike_f} °F`;
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

    addWeatherCondition: async function(data) {
        const weatherTextContainer = document.querySelector('.weather-text-container');
        const weatherTextElement = createElementWithClassName('h4', 'weather-condition');

        weatherTextElement.textContent = await this.getWeatherCondition(data);
        weatherTextContainer.appendChild(weatherTextElement);
    },

    addWindDirection: async function(data) {
        const windDirElement = document.querySelector('.first-section-container-two > .weather-detail.Wind-Speed > .condition-value');
        windDirElement.textContent = await this.getWindSpeed(data);        
    },

    addRainProb: async function(data) {
        const rainProbElement = document.querySelector('.first-section-container-two > .weather-detail.RainProb > .condition-value');
        rainProbElement.textContent = await this.getRainProb(data);
    },

    addHumidity: async function(data) {
        const airQualityElement = document.querySelector('.first-section-container-two > .weather-detail.Humidity > .condition-value');
        airQualityElement.textContent = await this.getHumidity(data);
    },

    addDate: function() {
        const dailyContainer = document.querySelectorAll('.daily-container');
        dailyContainer.forEach((item) => {
            if (item.classList.contains('Today')) {
                const today = new Date().getDate();
                const month = (new Date().getMonth()) + 1;
                const dateContainer = item.querySelector('.date');
                const dateElement = createElementWithClassName('span', 'date');
                const day = createElementWithClassName('span', 'day');
                dateElement.textContent = 'Today';
                day.textContent = `${today}/${month}`;
                dateContainer.appendChild(dateElement);
                dateContainer.appendChild(day);
            }
            console.log(item);
        })
        
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
    },

    getWeatherCondition: async function(data) {
        const obj = await data;
        return obj.condition_text;
    },

    getFeelsLikeinCelsius: async function(data) {
        const obj = await data;
        return obj.feelslike_c;
    },

    getFeelsLikeInFahrenheit: async function(data) {
        const obj = await data;
        return obj.feelslike_f;
    },

    getWindSpeed: async function(data) {
        const obj = await data;
        return `${obj.wind_kph} km/h`;
    },

    getRainProb: async function(data) {
        const obj = await data;
        return `${obj.rain_prob} %`;
    },

    getHumidity: async function(data) {
        const obj = await data;
        return `${obj.humidity} %`;
    }

}


export {addContent};
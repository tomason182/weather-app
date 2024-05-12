import { createElementWithClassName } from "./create-element";
import { getTodayWeatherData, getTodayForecastData, getTomorrowForecastData, getAfterTomorrowForecastData } from "./script";

const addContent = {
    addTitle: async function() {
        const container = document.querySelector('.first-section-title');
        const title = createElementWithClassName('h3', 'location-title');
        title.textContent = await this.getLocation(getTodayWeatherData());

        const localtime = createElementWithClassName('span', 'local-time');
        localtime.textContent = await this.getLocalTime(getTodayWeatherData());

        container.appendChild(title);
        container.appendChild(localtime);
    },

    getLocation: async function(data) {
        const obj = await data;
        return `${obj.city}, ${obj.region}, ${obj.country}`;
    },

    getLocalTime: async function(data) {
        const obj = await data;
        return obj.localtime;
    }

}

export {addContent};
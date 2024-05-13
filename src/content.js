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
        const weatherTempContainer = document.querySelector('.weather-temp-container');
        const switchUnitBtn = document.querySelector('.switch-btn');
        console.log(switchUnitBtn);
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

}

export {addContent};
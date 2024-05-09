import './style.css';
import { getTodayWeatherData } from "./script";

const today = await getTodayWeatherData();

/* console.log("Today result: ", today); */

function getSearchValue() {
    const searchForm = document.querySelector('#search-container > form');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.getElementById('search');        
        console.log(input.value);
        input.value = '';
    })
}

const displayWeather = function generateWeatherContainersAndDisplayInfo() {
    const mainContent = document.getElementById('main-content');

    // Create container for display today's weather
    const todayWeatherContainer = document.createElement('div');
    todayWeatherContainer.className = 'today-weather';

    // Inside todays weather container goes to more containers
    const todayTitleContainer = document.createElement('div');
    todayTitleContainer.className = 'today-title-container';

    const location = document.createElement('h2');
    location.className = 'location';
    location.textContent = `${today.city}, ${today.region}, ${today.country}`;
    const localtime = document.createElement('h3');
    localtime.className = 'localtime';
    localtime.textContent = `${today.localtime}`;


    todayTitleContainer.appendChild(location);
    todayTitleContainer.appendChild(localtime);
    todayWeatherContainer.appendChild(todayTitleContainer);

    // Create container for display today's details
    const todayDetailsContainer = document.createElement('div');
    todayDetailsContainer.className = 'today-details';


    mainContent.appendChild(todayWeatherContainer);
    mainContent.appendChild(todayDetailsContainer);
}


displayWeather();
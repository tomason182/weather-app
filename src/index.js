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
    const location = `${today.city}, ${today.region}, ${today.country} - ${today.localtime}`;
    console.log(location);

    // Create container for display today's weather
    const todayWeatherContainer = document.createElement('div');
    todayWeatherContainer.className = 'today-weather';

    // Inside todays weather container goes to more containers
    const todayTitleContainer = document.createElement('div');
    todayTitleContainer.className = 'today-title-container';

    const todayTitle = document.createElement('h2');
    todayTitle.className = 'today-title';
    todayTitle.textContent = location;

    todayTitleContainer.appendChild(todayTitle);
    todayWeatherContainer.appendChild(todayTitleContainer);

    // Create container for display today's details
    const todayDetailsContainer = document.createElement('div');
    todayDetailsContainer.className = 'today-details';


    mainContent.appendChild(todayWeatherContainer);
    mainContent.appendChild(todayDetailsContainer);
}


displayWeather();
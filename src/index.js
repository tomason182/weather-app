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

    // Create container for display today's details
    const todayDetailsContainer = document.createElement('div');
    todayDetailsContainer.className = 'today-details';


    mainContent.appendChild(todayWeatherContainer);
    mainContent.appendChild(todayDetailsContainer);
}


displayWeather();
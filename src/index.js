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

    // Location and localtime title.
    const location = document.createElement('h2');
    location.className = 'location';
    location.textContent = `${today.city}, ${today.region}, ${today.country}`;
    const localtime = document.createElement('h3');
    localtime.className = 'localtime';
    localtime.textContent = `${today.localtime}`;

    // Today weather condition summary;
    const todaySummary = document.createElement('div');
    todaySummary.className = 'today-summary';

    const todayForecastContainer = document.createElement('div');
    todayForecastContainer.className = 'today-forecast-container';

    const todayForecastDetails = document.createElement('div');
    todayForecastDetails.className = 'today-forecast-details';

    todaySummary.appendChild(todayForecastContainer);
    todaySummary.appendChild(todayForecastDetails);
    

    todayTitleContainer.appendChild(location);
    todayTitleContainer.appendChild(localtime);
    todayWeatherContainer.appendChild(todayTitleContainer);
    todayWeatherContainer.appendChild(todaySummary);

    // Create container for display today's details
    const todayDetailsContainer = document.createElement('div');
    todayDetailsContainer.className = 'today-details';


    mainContent.appendChild(todayWeatherContainer);
    mainContent.appendChild(todayDetailsContainer);
}


displayWeather();
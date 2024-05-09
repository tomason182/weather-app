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

getSearchValue()
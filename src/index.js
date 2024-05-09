import { getTodayWeatherData } from "./script";

const today = await getTodayWeatherData();

console.log("Today result: ", today);
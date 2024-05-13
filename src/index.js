import './style.css';
import { addContent, handleSwitchBtn } from './content';
import { getTodayWeatherData, getTodayForecastData, getTomorrowForecastData, getAfterTomorrowForecastData } from "./script";
import { pageBuilder } from './pageBuilder';

document.addEventListener('DOMContentLoaded', () => {
  pageBuilder.buildHeader();
  pageBuilder.buildMainContent();
  addContent.addTitle(getTodayWeatherData());
  addContent.addTemp(getTodayWeatherData());
  addContent.addIcon(getTodayWeatherData());
  addContent.addWeatherCondition(getTodayWeatherData());
  addContent.addWindDirection(getTodayWeatherData());
  addContent.addRainProb(getTodayForecastData());
  addContent.addHumidity(getTodayWeatherData());
})

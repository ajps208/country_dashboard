import axios from "axios";

// API for country data
export const countriesAPI = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// API for weather data
export const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

// OpenWeather API key
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

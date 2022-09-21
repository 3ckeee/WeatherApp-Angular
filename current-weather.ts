import { Weather } from "./weather-forecast";

export interface CurrentWeather {
    weatherForecast: Weather;
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
}
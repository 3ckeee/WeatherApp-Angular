export module weatherModel {

    export interface CurrentWeather {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        time: string;
    }

    export interface HourlyUnits {
        time: string;
        temperature_2m: string;
        relativehumidity_2m: string;
        apparent_temperature: string;
        precipitation: string;
        rain: string;
        showers: string;
        snowfall: string;
        snow_depth: string;
        freezinglevel_height: string;
        weathercode: string;
        surface_pressure: string;
        windspeed_10m: string;
    }

    export interface Hourly {
        time: string[];
        temperature_2m: number[];
        relativehumidity_2m: number[];
        apparent_temperature: number[];
        precipitation: number[];
        rain: number[];
        showers: number[];
        snowfall: number[];
        snow_depth: number[];
        freezinglevel_height: number[];
        weathercode: number[];
        surface_pressure: number[];
        windspeed_10m: number[];
    }

    export interface DailyUnits {
        time: string;
        weathercode: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        apparent_temperature_max: string;
        apparent_temperature_min: string;
        sunrise: string;
        sunset: string;
    }

    export interface Daily {
        time: string[];
        weathercode: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        apparent_temperature_max: number[];
        apparent_temperature_min: number[];
        sunrise: string[];
        sunset: string[];
    }

    export interface WeatherObject {
        latitude: number;
        longitude: number;
        generationtime_ms: number;
        utc_offset_seconds: number;
        timezone: string;
        timezone_abbreviation: string;
        elevation: number;
        current_weather: CurrentWeather;
        hourly_units: HourlyUnits;
        hourly: Hourly;
        daily_units: DailyUnits;
        daily: Daily;
    }


}

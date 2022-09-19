import { Injectable } from '@angular/core';

import { Weather } from './weather-forecast';
import {HttpClient, HttpResponse, HttpResponseBase} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  forecast:Weather = new Weather(21, 3.0, 330.0)
  constructor(private http: HttpClient) { }

  getWeatherData(current_weather: number) {
    return this.http
    .get<any>(`https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth,freezinglevel_height,weathercode,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin&past_days=7`)
    }

  weatherNow(){
    return this.forecast;
  }

  localWeather(lat:number, lon:number) {
    return this.http
    .get<any>(`https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth,freezinglevel_height,weathercode,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin&past_days=7`)
  ;
  }
  }

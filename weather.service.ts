import { Injectable } from '@angular/core';

import { Weather } from './weather-forecast';
import {HttpClient, HttpResponse, HttpResponseBase} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  

  private readonly forecastUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth,freezinglevel_height,weathercode,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin&past_days=7`;
  }

  public getCityCurrentWeather(latitude: number, longitude: number): Observable<Weather> {
    return this.httpClient.get<Weather>(
      this.forecastUrl + 
      'latitude=' + latitude + 
      '&longitude=' + longitude + 
      '&current_weather=true');
  }

}
import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather-forecast';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import { weatherModel } from '../models/weather.model'
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'wa-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather!: Weather;
  location!: GeolocationCoordinates;
  constructor(private ws:WeatherService) { }

  ngOnInit(): void {
   this.myWeather = this.ws.weatherNow();
   navigator.geolocation.getCurrentPosition((pos) => {
    this.location = pos.coords;
    const lat = this.location.latitude;
    const lon = this.location.longitude;
    this.ws.localWeather(lat, lon).subscribe(Response) 
    new Weather(.temperature, .weathercode, .winddirection: ) = this.myWeather.temperature
   }

}

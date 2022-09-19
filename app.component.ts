import { HttpResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Weather } from './weather-forecast';
import { WeatherService } from './weather.service';


@Component({
  selector: 'wa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private weatherService: WeatherService) {

}

weatherData?: Weather;

  ngOnInit(): void {
    this.weatherService.getWeatherData(12.9)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
      
    }
  }


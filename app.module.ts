import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { ChartComponent } from './chart/chart.component';
import { HicComponent } from './hic/hic.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    ChartComponent,
    HicComponent
  ],
  imports: [
    BrowserModule,
    weatherRouting,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

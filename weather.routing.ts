import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ChartComponent } from './chart/chart.component';
import { HicComponent } from './hic/hic.component';
import { WeatherComponent } from './weather/weather.component';
import { AppComponent } from './app.component';

const WEATHER_ROUTER:Routes = [
    {path: '', component: WeatherComponent},
    {path: 'chart', component: ChartComponent},
    {path: 'hic', component: HicComponent}
]

export const weatherRouting:ModuleWithProviders<any> = RouterModule.forRoot(WEATHER_ROUTER)
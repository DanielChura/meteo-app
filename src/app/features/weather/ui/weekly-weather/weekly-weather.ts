import { Component, input, Input, OnInit } from '@angular/core';
import { Hourly, WeatherResponse } from '../../models/DTOresponse';
import { LocationInfo } from '../../models/DTOgeoCode';

@Component({
  selector: 'app-weekly-weather',
  imports: [],
  templateUrl: './weekly-weather.html',
  styleUrl: './weekly-weather.css',
})
export class WeeklyWeatherComponent {
  weekly = input<WeatherResponse | null>();
  locationData = input<LocationInfo | null>();
}

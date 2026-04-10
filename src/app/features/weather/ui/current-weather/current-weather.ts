import { Component, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrentWeather, WeatherResponse } from '../../models/DTOresponse';
import { LocationInfo } from '../../models/DTOgeoCode';

@Component({
  selector: 'app-current-weather',
  imports: [],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.css',
})
export class CurrentWeatherComponent {
  current = input<WeatherResponse | null>();
  locationData = input<LocationInfo | null>();
}

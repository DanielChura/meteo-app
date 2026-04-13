import { Component, input } from '@angular/core';
import { CurrentWeather, WeatherResponse } from '../../models/DTOresponse';
import { LocationInfo } from '../../models/DTOgeoCode';
import { IconWeatherPipe } from '../../../../core/pipes/icon-weather-pipe';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { 
  lucideMapPin, 
  lucideWind, 
  lucideMountain, 
  lucideSun, 
  lucideCloud, 
  lucideCloudFog, 
  lucideCloudRain, 
  lucideSnowflake, 
  lucideCloudLightning 
} from '@ng-icons/lucide';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [NgIcon, IconWeatherPipe],
  providers: [
    provideIcons({
      lucideMapPin,
      lucideWind,
      lucideMountain,
      lucideSun,
      lucideCloud,
      lucideCloudFog,
      lucideCloudRain,
      lucideSnowflake,
      lucideCloudLightning
    })
  ],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.css',
})
export class CurrentWeatherComponent {
  current = input<WeatherResponse | null>();
  locationData = input<LocationInfo | null>();
}

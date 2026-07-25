import { Component, input } from '@angular/core';
import { WeatherResponse } from '../../models/DTOresponse';
import { LocationInfo } from '../../models/DTOgeoCode';
import { IconWeatherPipe } from '../../../../core/pipes/icon-weather-pipe';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorMapPinBold,
  phosphorWindBold,
  phosphorMountainsBold,
  phosphorSunBold,
  phosphorCloudBold,
  phosphorCloudFogBold,
  phosphorCloudRainBold,
  phosphorSnowflakeBold,
  phosphorCloudLightningBold,
} from '@ng-icons/phosphor-icons/bold';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [NgIcon, IconWeatherPipe],
  providers: [
    provideIcons({
      phosphorMapPinBold,
      phosphorWindBold,
      phosphorMountainsBold,
      phosphorSunBold,
      phosphorCloudBold,
      phosphorCloudFogBold,
      phosphorCloudRainBold,
      phosphorSnowflakeBold,
      phosphorCloudLightningBold,
    }),
  ],
  templateUrl: './current-weather.html',
})
export class CurrentWeather {
  current = input<WeatherResponse | null>();
  locationData = input<LocationInfo | null>();
}

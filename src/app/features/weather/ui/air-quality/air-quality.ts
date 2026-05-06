import { Component, input } from '@angular/core';
import { AirQualityResponse } from '../../models/DTOairResponse';
import { EuropeanAqiPipe } from '../../../../core/pipes/european-aqi-pipe';
import { OzonePipePipe } from '../../../../core/pipes/ozone-pipe-pipe';
import { Pm25PipePipe } from '../../../../core/pipes/pm2.5-pipe-pipe';
import { Pm10PipePipe } from '../../../../core/pipes/pm10-pipe-pipe';
import {
  lucideWind,
  lucideWaves,
  lucideShieldCheck,
  lucideActivity,
  lucideLeaf,
} from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-air-quality',
  standalone: true,
  imports: [EuropeanAqiPipe, OzonePipePipe, Pm25PipePipe, Pm10PipePipe, NgIcon],
  providers: [
    provideIcons({
      lucideWind,
      lucideWaves,
      lucideShieldCheck,
      lucideActivity,
      lucideLeaf,
    }),
  ],
  templateUrl: './air-quality.html',
  styleUrl: './air-quality.css',
})
export class AirQuality {
  air = input<AirQualityResponse | null>();
}

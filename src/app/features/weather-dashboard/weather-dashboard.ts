import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OpenMeteoHttp } from '../weather/api/open-meteo-http';
import { LocationService } from '../weather/api/location';
import { CurrentWeather } from '../weather/ui/current-weather/current-weather';
import { HourlyChart } from '../weather/ui/hourly-chart/hourly-chart';
import { WeatherResponse } from '../weather/models/DTOresponse';
import { LocationInfo } from '../weather/models/DTOgeoCode';
import { DailyForecast } from '../weather/ui/daily-forecast/daily-forecast';
import { AirQuality } from '../weather/ui/air-quality/air-quality';
import { AirQualityResponse } from '../weather/models/DTOairResponse';
import { OpenAirHttp } from '../weather/api/open-air-https';
import { UvIndex } from '../weather/ui/uv-index/uv-index';
import { EntryFadeDirective } from '../../core/animate/entry-fade.directive';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorCloudSunBold,
  phosphorSquaresFourBold,
  phosphorArrowClockwiseBold,
  phosphorArrowUpRightBold,
} from '@ng-icons/phosphor-icons/bold';

@Component({
  selector: 'app-weather-dashboard',
  imports: [
    CurrentWeather,
    HourlyChart,
    DailyForecast,
    AirQuality,
    UvIndex,
    EntryFadeDirective,
    NgIcon,
  ],
  providers: [
    provideIcons({
      phosphorCloudSunBold,
      phosphorSquaresFourBold,
      phosphorArrowClockwiseBold,
      phosphorArrowUpRightBold,
    }),
  ],
  templateUrl: './weather-dashboard.html',
})
export class WeatherDashboard implements OnInit {
  currentWeather: WeatherResponse | null = null;
  weeklyWeather: WeatherResponse | null = null;
  location: LocationInfo | null = null;
  airQuality: AirQualityResponse | null = null;
  isRefreshing = false;

  constructor(
    private readonly openMeteoHttp: OpenMeteoHttp,
    private readonly openAirHttp: OpenAirHttp,
    private readonly locationService: LocationService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  async getWeatherByCity(lat: number, lon: number) {
    try {
      await this.openMeteoHttp.getWeatherByCity(lat, lon).subscribe((data) => {
        this.currentWeather = data;
        this.weeklyWeather = data;
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('El usuario denegó el permiso o hubo un error', error);
    }
  }

  refreshData(): void {
    this.isRefreshing = true;
    this.ngOnInit();
    setTimeout(() => {
      this.isRefreshing = false;
      this.cdr.detectChanges();
    }, 800);
  }

  ngOnInit(): void {
    this.locationService.getLocation().then((location) => {
      if (location) {
        this.getWeatherByCity(location.lat, location.lon);
        this.openMeteoHttp.getGeoCode(location.lat, location.lon).subscribe((data) => {
          this.location = data;
          this.cdr.detectChanges();
        });
        this.openAirHttp
          .getAirQuality(location.lat, location.lon)
          .subscribe((data: AirQualityResponse) => {
            this.airQuality = data;
            this.cdr.detectChanges();
          });
      }
    });
  }
}

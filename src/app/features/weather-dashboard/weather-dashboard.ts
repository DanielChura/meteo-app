import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { OpenMeteoHttp } from '../weather/api/open-meteo-http';
import { LocationService } from '../weather/api/location';
import { CurrentWeatherComponent } from '../weather/ui/current-weather/current-weather';
import { WeeklyWeatherComponent } from '../weather/ui/weekly-weather/weekly-weather';
import { WeatherResponse } from '../weather/models/DTOresponse';
import { LocationInfo } from '../weather/models/DTOgeoCode';
import { HourlyWeather } from '../weather/ui/hourly-weather/hourly-weather';
import { Air } from '../weather/ui/air/air';
import { AirQualityResponse } from '../weather/models/DTOairResponse';
import { OpenAirHttp } from '../weather/api/open-air-https';

@Component({
  selector: 'app-weather-dashboard',
  imports: [CurrentWeatherComponent, WeeklyWeatherComponent, HourlyWeather, Air],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.css',
})
export class WeatherDashboard implements OnInit {
  currentWeather: WeatherResponse | null = null;
  weeklyWeather: WeatherResponse | null = null;
  location: LocationInfo | null = null;
  airQuality: AirQualityResponse | null = null;

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

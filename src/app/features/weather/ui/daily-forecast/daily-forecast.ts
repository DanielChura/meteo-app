import { Component, input, OnChanges, signal } from '@angular/core';
import { WeatherResponse } from '../../models/DTOresponse';
import { IconWeatherPipe } from '../../../../core/pipes/icon-weather-pipe';
import { NgIconComponent } from '@ng-icons/core';

export interface WeatherHour {
  time: string;
  temp: number;
  code: number;
}

export interface DailyWeather {
  date: string;
  hours: WeatherHour[];
}

@Component({
  selector: 'app-daily-forecast',
  imports: [IconWeatherPipe, NgIconComponent],
  templateUrl: './daily-forecast.html',
})
export class DailyForecast implements OnChanges {
  weatherData = input<WeatherResponse | null>(null, { alias: 'hourly' });

  DayW = signal<{ date: string[]; tempMax: number[]; tempMin: number[]; codes: number[] }>({
    date: [],
    tempMax: [],
    tempMin: [],
    codes: [],
  });

  ngOnChanges(): void {
    const data = this.weatherData();
    if (!data) return;

    const times = data.daily.time.map((t) => {
      const fecha = new Date(t);
      const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
      return diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1).toLowerCase();
    });
    const tempMax = data.daily.temperature_2m_max || [];
    const tempMin = data.daily.temperature_2m_min || [];
    const codes = data.daily.weathercode || [];

    this.DayW.set({ date: times, tempMax, tempMin, codes });
    console.log(this.DayW());
  }
}

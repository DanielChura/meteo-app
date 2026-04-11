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
  selector: 'app-weekly-weather',
  imports: [IconWeatherPipe, NgIconComponent],
  templateUrl: './weekly-weather.html',
  styleUrl: './weekly-weather.css',
})
export class WeeklyWeatherComponent implements OnChanges {
  weekly = input<WeatherResponse | null>();

  DayW = signal<{ date: string[]; hours: number[]; codes: number[] }>({
    date: [],
    hours: [],
    codes: [],
  });

  ngOnChanges(): void {
    const times = this.weekly()?.hourly.time || [];
    const temps = this.weekly()?.hourly.temperature_2m || [];
    const codes = this.weekly()?.hourly.weathercode || [];

    const dictionary = times.reduce(
      (acumulador, timeString, i) => {
        const [day, hour] = timeString.split('T');
        if (!acumulador[day]) {
          acumulador[day] = { date: day, hours: [] };
        }
        acumulador[day].hours.push({
          time: hour,
          temp: temps[i],
          code: codes[i],
        });
        return acumulador;
      },
      {} as Record<string, DailyWeather>,
    );
    const data = Object.values(dictionary);

    const days = data.map((data) => {
      const fecha = new Date(data.date);
      const nombreDia = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
      const nombre = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1).toLowerCase();

      return nombre;
    });

    const temp = data.map((data) => {
      const horaDia = data.hours.reduce((arr, curr) => {
        const suma = arr + curr.temp / data.hours.length;
        const redondear = Number(suma.toFixed(1));

        return redondear;
      }, 0);
      return horaDia;
    });

    const weatherCodes = data.map((dayData) => {
      const dailyCodes = dayData.hours.map((h) => h.code); // 24 elementos
      console.log('dailyCodes', dailyCodes);
      const counts: Record<number, number> = {};
      let maxCount = 0;
      let mostFrequent = dailyCodes[0];
      for (const code of dailyCodes) {
        counts[code] = (counts[code] || 0) + 1;
        if (counts[code] > maxCount) {
          maxCount = counts[code];
          mostFrequent = code;
        }
      }
      return mostFrequent;
    });

    this.DayW.set({ date: days, hours: temp, codes: weatherCodes });
  }
}

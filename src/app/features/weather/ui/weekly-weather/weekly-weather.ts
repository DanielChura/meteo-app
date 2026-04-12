import { Component, ElementRef, input, OnChanges, signal, ViewChild } from '@angular/core';
import { WeatherResponse } from '../../models/DTOresponse';
import { Chart } from 'chart.js/auto';

export interface HourlyDetail {
  time: string;
  temp: number;
}

export interface DayData {
  name: string;
  hourly: HourlyDetail[];
}

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.html',
  styleUrl: './weekly-weather.css',
})
export class WeeklyWeatherComponent implements OnChanges {
  weekly = input<WeatherResponse | null>();
  @ViewChild('chartJS') chartCanvas!: ElementRef<HTMLCanvasElement>;

  keys = signal<string[]>([]);
  weeklyData: Record<string, { time: string; temp: number }[]> = {};

  ngOnChanges(): void {
    const data = this.weekly()?.hourly;

    if (!data) return;

    const times = data.time.reduce(
      (acc, time, i) => {
        const [day, hour] = time.split('T');
        const fecha = new Date(day);
        const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
        const dia = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1).toLowerCase();

        if (!acc[dia]) {
          acc[dia] = [];
        }

        acc[dia].push({ time: hour, temp: data.temperature_2m[i] });

        return acc;
      },
      {} as Record<string, { time: string; temp: number }[]>,
    );
    this.weeklyData = times;
    this.keys.set(Object.keys(times));
    console.log(this.keys());
    console.log(times);
  }

  chart: Chart | undefined;

  createChart(key: string) {
    if (this.chart) {
      this.chart.destroy();
    }

    const data = this.weeklyData[key];

    const timeX = data.map((item) => item.time);
    const tempY = data.map((item) => item.temp);

    const ctx = this.chartCanvas.nativeElement;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeX,
        datasets: [
          {
            label: 'Temperatura',
            data: tempY,
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

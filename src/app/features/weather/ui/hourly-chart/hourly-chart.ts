import { Component, ElementRef, input, OnChanges, signal, ViewChild } from '@angular/core';
import { WeatherResponse } from '../../models/DTOresponse';
import { Chart } from 'chart.js/auto';
import { options } from './chart-config';
export interface HourlyDetail {
  time: string;
  temp: number;
}

export interface DayData {
  name: string;
  hourly: HourlyDetail[];
}

@Component({
  selector: 'app-hourly-chart',
  templateUrl: './hourly-chart.html',
  styleUrl: './hourly-chart.css',
})
export class HourlyChart implements OnChanges {
  weekly = input<WeatherResponse | null>();
  @ViewChild('chartJS') chartCanvas!: ElementRef<HTMLCanvasElement>;

  keys = signal<string[]>([]);
  activeKey = signal<string>('');
  weeklyData: Record<string, { time: string; temp: number }[]> = {};
  chart: Chart | undefined;

  ngOnChanges(): void {
    const data = this.weekly()?.hourly;
    if (!data) return;

    const times = data.time.reduce(
      (acc, time, i) => {
        const [day, hour] = time.split('T');
        const fecha = new Date(day);
        const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'short' });
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
    const generatedKeys = Object.keys(times);
    this.keys.set(generatedKeys);

    this.createChart(this.keys()[0]);
  }

  createChart(key: string) {
    this.activeKey.set(key);

    if (this.chart) {
      this.chart.destroy();
    }

    const data = this.weeklyData[key];
    const timeX = data.map((item) => item.time);
    const tempY = data.map((item) => item.temp);

    const canvasEl = this.chartCanvas.nativeElement;
    const ctx = canvasEl.getContext('2d');

    let gradientFill;
    if (ctx) {
      gradientFill = ctx.createLinearGradient(0, 0, 0, canvasEl.parentElement?.clientHeight || 300);
      gradientFill.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    }

    this.chart = new Chart(canvasEl, {
      type: 'line',
      data: {
        labels: timeX,
        datasets: [
          {
            label: 'Temperatura',
            data: tempY,
            borderColor: '#ffffff',
            backgroundColor: gradientFill || 'rgba(255, 255, 255, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: 'transparent',
            pointBorderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: 'rgba(255, 255, 255, 0.5)',
            pointHoverBorderWidth: 4,
          },
        ],
      },
      options: { ...options },
    });
  }
}

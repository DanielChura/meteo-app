import { Component, input, computed } from '@angular/core';
import { WeatherResponse } from '../../models/DTOresponse';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSun, lucideDroplets } from '@ng-icons/lucide';

@Component({
  selector: 'app-uv-index',
  imports: [NgIcon],
  providers: [provideIcons({ lucideSun, lucideDroplets })],
  templateUrl: './uv-index.html',
  styleUrl: './uv-index.css',
})
export class UvIndex {
  uvIndex = input<WeatherResponse | null>(null);

  uvData = computed(() => {
    const uvVal = this.uvIndex()?.current?.uv_index ?? 0;
    let status = '';
    let recommendation = '';
    let color = '';
    const percentage = Math.min((uvVal / 12) * 100, 100);

    if (uvVal <= 2) {
      status = 'Bajo';
      recommendation = 'Nivel seguro. Sin protección necesaria.';
      color = '#10b981'; // emeral-500
    } else if (uvVal <= 5) {
      status = 'Moderado';
      recommendation = 'Use protector solar FPS 30+ y gafas.';
      color = '#f59e0b'; // amber-500
    } else if (uvVal <= 7) {
      status = 'Alto';
      recommendation = 'Use protector FPS 50+ y busque sombra.';
      color = '#f97316'; // orange-500
    } else if (uvVal <= 10) {
      status = 'Muy Alto';
      recommendation = 'Evite sol directo. Use protección total.';
      color = '#ef4444'; // red-500
    } else {
      status = 'Extremo';
      recommendation = 'Peligro. Quédese en interiores hoy.';
      color = '#8b5cf6'; // violet-500
    }

    return { value: uvVal, status, recommendation, percentage, color };
  });

  humidityData = computed(() => {
    const humVal = this.uvIndex()?.current?.relative_humidity_2m ?? 0;
    let status = '';
    let recommendation = '';
    let color = '';
    const percentage = humVal;

    if (humVal < 30) {
      status = 'Seco';
      recommendation = 'Aire muy seco. Manténgase hidratado.';
      color = '#f59e0b'; // amber-500
    } else if (humVal <= 60) {
      status = 'Saludable';
      recommendation = 'Humedad ideal para confort y salud.';
      color = '#10b981'; // emeral-500
    } else if (humVal <= 80) {
      status = 'Alta';
      recommendation = 'Ambiente algo pesado y bochornoso.';
      color = '#3b82f6'; // blue-500
    } else {
      status = 'Muy Alta';
      recommendation = 'Humedad extrema. Aire muy pesado.';
      color = '#6366f1'; // indigo-500
    }

    return { value: humVal, status, recommendation, percentage, color };
  });
}

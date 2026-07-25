import { Component, input, computed } from '@angular/core';
import { WeatherResponse } from '../../models/DTOresponse';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorSunBold, phosphorDropBold } from '@ng-icons/phosphor-icons/bold';

@Component({
  selector: 'app-uv-index',
  imports: [NgIcon],
  providers: [provideIcons({ phosphorSunBold, phosphorDropBold })],
  templateUrl: './uv-index.html',
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
      recommendation = 'Nivel seguro. Sin proteccion necesaria.';
      color = '#059669';
    } else if (uvVal <= 5) {
      status = 'Moderado';
      recommendation = 'Use protector solar FPS 30+ y gafas.';
      color = '#D97706';
    } else if (uvVal <= 7) {
      status = 'Alto';
      recommendation = 'Use protector FPS 50+ y busque sombra.';
      color = '#EA580C';
    } else if (uvVal <= 10) {
      status = 'Muy Alto';
      recommendation = 'Evite sol directo. Use proteccion total.';
      color = '#DC2626';
    } else {
      status = 'Extremo';
      recommendation = 'Peligro. Quedese en interiores hoy.';
      color = '#991B1B';
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
      recommendation = 'Aire muy seco. Mantengase hidratado.';
      color = '#D97706';
    } else if (humVal <= 60) {
      status = 'Saludable';
      recommendation = 'Humedad ideal para confort y salud.';
      color = '#059669';
    } else if (humVal <= 80) {
      status = 'Alta';
      recommendation = 'Ambiente algo pesado y bochornoso.';
      color = '#0284C7';
    } else {
      status = 'Muy Alta';
      recommendation = 'Humedad extrema. Aire muy pesado.';
      color = '#2563EB';
    }

    return { value: humVal, status, recommendation, percentage, color };
  });
}

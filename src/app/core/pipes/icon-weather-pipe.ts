import { Pipe, PipeTransform } from '@angular/core';

export interface WeatherInfo {
  icon: string;
  description: string;
}

@Pipe({
  name: 'iconWeather',
})
export class IconWeatherPipe implements PipeTransform {
  transform(code: number): WeatherInfo {
    switch (true) {
      case code === 0:
        return { icon: 'lucideSun', description: 'Despejado' };
      case code === 1:
        return { icon: 'lucideSun', description: 'Mayormente despejado' };
      case code === 2:
        return { icon: 'lucideCloud', description: 'Parcialmente nublado' };
      case code === 3:
        return { icon: 'lucideCloud', description: 'Nublado' };
      case code === 45 || code === 48:
        return { icon: 'lucideCloudFog', description: 'Niebla' };
      case code >= 51 && code <= 55:
        return { icon: 'lucideCloudRain', description: 'Llovizna' };
      case code === 56 || code === 57:
        return { icon: 'lucideCloudRain', description: 'Llovizna helada' };
      case code >= 61 && code <= 65:
        return { icon: 'lucideCloudRain', description: 'Lluvia' };
      case code === 66 || code === 67:
        return { icon: 'lucideCloudRain', description: 'Lluvia helada' };
      case code >= 71 && code <= 77:
        return { icon: 'lucideSnowflake', description: 'Nieve' };
      case code >= 80 && code <= 82:
        return { icon: 'lucideCloudRain', description: 'Aguaceros' };
      case code === 85 || code === 86:
        return { icon: 'lucideSnowflake', description: 'Chubascos de nieve' };
      case code === 95:
        return { icon: 'lucideCloudLightning', description: 'Tormenta' };
      case code === 96 || code === 99:
        return { icon: 'lucideCloudLightning', description: 'Tormenta con granizo' };
      default:
        return { icon: 'lucideSun', description: 'Desconocido' };
    }
  }
}

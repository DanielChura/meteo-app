import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'europeanAqi',
  standalone: true,
})
export class EuropeanAqiPipe implements PipeTransform {
  transform(value: number): { label: string; color: string } {
    if (value <= 20) {
      return { label: 'Bueno', color: '#10b981' };
    }
    if (value <= 40) {
      return { label: 'Aceptable', color: '#84cc16' };
    }
    if (value <= 60) {
      return { label: 'Moderado', color: '#f59e0b' };
    }
    if (value <= 80) {
      return { label: 'Malo', color: '#f97316' };
    }
    if (value <= 100) {
      return { label: 'Muy malo', color: '#ef4444' };
    }
    return { label: 'Peligroso', color: '#8b5cf6' };
  }
}

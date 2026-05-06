import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pm10Pipe',
  standalone: true,
})
export class Pm10PipePipe implements PipeTransform {
  transform(value: number): { label: string; color: string } {
    if (value <= 20) {
      return { label: 'Bueno', color: '#10b981' };
    }
    if (value <= 35) {
      return { label: 'Aceptable', color: '#84cc16' };
    }
    if (value <= 50) {
      return { label: 'Moderado', color: '#f59e0b' };
    }
    if (value <= 100) {
      return { label: 'Malo', color: '#f97316' };
    }
    if (value <= 150) {
      return { label: 'Muy malo', color: '#ef4444' };
    }
    return { label: 'Peligroso', color: '#8b5cf6' };
  }
}

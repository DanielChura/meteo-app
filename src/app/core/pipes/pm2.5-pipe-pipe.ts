import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pm25Pipe',
  standalone: true,
})
export class Pm25PipePipe implements PipeTransform {
  transform(value: number): { label: string; color: string } {
    if (value <= 10) {
      return { label: 'Bueno', color: '#22c55e' };
    }
    if (value <= 20) {
      return { label: 'Aceptable', color: '#84cc16' };
    }
    if (value <= 25) {
      return { label: 'Moderado', color: '#facc15' };
    }
    if (value <= 50) {
      return { label: 'Malo', color: '#fb923c' };
    }
    if (value <= 75) {
      return { label: 'Muy malo', color: '#ef4444' };
    }
    return { label: 'Peligroso', color: '#8b5cf6' };
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ozonePipe',
  standalone: true,
})
export class OzonePipePipe implements PipeTransform {
  transform(value: number): { label: string; color: string } {
    if (value <= 80) {
      return { label: 'Bueno', color: '#22c55e' };
    }
    if (value <= 120) {
      return { label: 'Aceptable', color: '#84cc16' };
    }
    if (value <= 180) {
      return { label: 'Moderado', color: '#facc15' };
    }
    if (value <= 240) {
      return { label: 'Malo', color: '#fb923c' };
    }
    if (value <= 360) {
      return { label: 'Muy malo', color: '#ef4444' };
    }
    return { label: 'Peligroso', color: '#8b5cf6' };
  }
}

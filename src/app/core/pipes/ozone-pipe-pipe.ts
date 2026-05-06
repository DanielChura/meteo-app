import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ozonePipe',
  standalone: true,
})
export class OzonePipePipe implements PipeTransform {
  transform(value: number): { label: string; color: string } {
    if (value <= 80) {
      return { label: 'Bueno', color: '#10b981' };
    }
    if (value <= 120) {
      return { label: 'Aceptable', color: '#84cc16' };
    }
    if (value <= 180) {
      return { label: 'Moderado', color: '#f59e0b' };
    }
    if (value <= 240) {
      return { label: 'Malo', color: '#f97316' };
    }
    if (value <= 360) {
      return { label: 'Muy malo', color: '#ef4444' };
    }
    return { label: 'Peligroso', color: '#8b5cf6' };
  }
}

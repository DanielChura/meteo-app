import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ozonePipe',
  standalone: true,
})
export class OzonePipePipe implements PipeTransform {
  transform(value: number): { label: string; color: string; bg: string } {
    if (value <= 80) {
      return { label: 'Bueno', color: '#059669', bg: '#ECFDF5' };
    }
    if (value <= 120) {
      return { label: 'Aceptable', color: '#0284C7', bg: '#E0F2FE' };
    }
    if (value <= 180) {
      return { label: 'Moderado', color: '#D97706', bg: '#FEF3C7' };
    }
    if (value <= 240) {
      return { label: 'Malo', color: '#DC2626', bg: '#FEF2F2' };
    }
    if (value <= 360) {
      return { label: 'Muy malo', color: '#B91C1C', bg: '#FEE2E2' };
    }
    return { label: 'Peligroso', color: '#991B1B', bg: '#FEE2E2' };
  }
}


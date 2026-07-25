import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'europeanAqi',
  standalone: true,
})
export class EuropeanAqiPipe implements PipeTransform {
  transform(value: number): { label: string; color: string; bg: string } {
    if (value <= 20) {
      return { label: 'Bueno', color: '#059669', bg: '#ECFDF5' };
    }
    if (value <= 40) {
      return { label: 'Aceptable', color: '#0284C7', bg: '#E0F2FE' };
    }
    if (value <= 60) {
      return { label: 'Moderado', color: '#D97706', bg: '#FEF3C7' };
    }
    if (value <= 80) {
      return { label: 'Malo', color: '#DC2626', bg: '#FEF2F2' };
    }
    if (value <= 100) {
      return { label: 'Muy malo', color: '#B91C1C', bg: '#FEE2E2' };
    }
    return { label: 'Peligroso', color: '#991B1B', bg: '#FEE2E2' };
  }
}


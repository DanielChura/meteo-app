import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coPipe',
  standalone: true,
})
export class CoPipePipe implements PipeTransform {
  transform(value: number): { label: string; color: string; bg: string } {
    const mgm3 = value / 1000;
    if (mgm3 <= 4) {
      return { label: 'Bueno', color: '#059669', bg: '#ECFDF5' };
    }
    if (mgm3 <= 9) {
      return { label: 'Aceptable', color: '#0284C7', bg: '#E0F2FE' };
    }
    if (mgm3 <= 15) {
      return { label: 'Moderado', color: '#D97706', bg: '#FEF3C7' };
    }
    if (mgm3 <= 30) {
      return { label: 'Malo', color: '#DC2626', bg: '#FEF2F2' };
    }
    if (mgm3 <= 45) {
      return { label: 'Muy malo', color: '#B91C1C', bg: '#FEE2E2' };
    }
    return { label: 'Peligroso', color: '#991B1B', bg: '#FEE2E2' };
  }
}


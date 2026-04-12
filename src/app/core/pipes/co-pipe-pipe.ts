import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coPipe',
  standalone: true,
})
export class CoPipePipe implements PipeTransform {
  transform(value: number): { label: string; color: string } {
    const mgm3 = value / 1000;
    if (mgm3 <= 4) {
      return { label: 'Bueno', color: '#22c55e' };
    }
    if (mgm3 <= 9) {
      return { label: 'Aceptable', color: '#84cc16' };
    }
    if (mgm3 <= 15) {
      return { label: 'Moderado', color: '#facc15' };
    }
    if (mgm3 <= 30) {
      return { label: 'Malo', color: '#fb923c' };
    }
    if (mgm3 <= 45) {
      return { label: 'Muy malo', color: '#ef4444' };
    }
    return { label: 'Peligroso', color: '#8b5cf6' };
  }
}

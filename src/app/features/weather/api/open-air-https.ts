import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAirHttp {
  private readonly AIR_URL = environment.AIR_URL;
  constructor(private http: HttpClient) {}

  getAirQuality(lat: number, lon: number): any {
    const params = new HttpParams()
      .set('latitude', lat.toString())
      .set('longitude', lon.toString())
      .set(
        'current',
        'pm2_5,pm10,carbon_monoxide,nitrogen_dioxide,ozone,sulphur_dioxide,european_aqi',
      )
      .set('timezone', 'auto');

    return this.http.get<any>(`${this.AIR_URL}/air-quality`, { params });
  }
}

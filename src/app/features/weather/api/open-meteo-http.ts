import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherResponse } from '../models/DTOresponse';
import { Observable } from 'rxjs';
import { LocationInfo } from '../models/DTOgeoCode';

@Injectable({
  providedIn: 'root',
})
export class OpenMeteoHttp {
  private readonly URL_BASE = environment.BASE_URL;
  private readonly GEO_CODE_URL = environment.GEO_URL;
  constructor(private http: HttpClient) {}

  getWeatherByCity(lat: number, lon: number): Observable<WeatherResponse> {
    const params = new HttpParams()
      .set('latitude', lat.toString())
      .set('longitude', lon.toString())
      .set('hourly', 'temperature_2m,weathercode')
      .set('current', 'temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,is_day,weather_code,uv_index')
      .set('daily', 'temperature_2m_max,temperature_2m_min,weathercode')
      .set('timezone', 'auto');

    return this.http.get<WeatherResponse>(`${this.URL_BASE}/forecast`, { params });
  }

  getGeoCode(lat: number, lon: number): Observable<LocationInfo> {
    const params = new HttpParams()
      .set('latitude', lat.toString())
      .set('longitude', lon.toString())
      .set('localityLanguage', 'es');

    return this.http.get<LocationInfo>(`${this.GEO_CODE_URL}`, { params });
  }
}

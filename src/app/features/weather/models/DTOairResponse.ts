export interface AirQualityResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: CurrentUnits;
  current: CurrentAirQuality;
}

export interface CurrentUnits {
  time: string;
  interval: string;

  pm2_5: string;
  pm10: string;
  carbon_monoxide: string;
  nitrogen_dioxide: string;
  ozone: string;
  sulphur_dioxide: string;

  european_aqi: string;
}

export interface CurrentAirQuality {
  time: string;
  interval: number;

  pm2_5: number;
  pm10: number;
  carbon_monoxide: number;
  nitrogen_dioxide: number;
  ozone: number;
  sulphur_dioxide: number;

  european_aqi: number;
}

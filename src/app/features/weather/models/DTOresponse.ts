export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  daily_units: DailyUnits;
  daily: Daily;
}

export interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  is_day: number;
  weather_code: number;
  uv_index: number;
}

export interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  is_day: string;
  weather_code: string;
  uv_index: string;
}

export interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
}

export interface DailyUnits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  weathercode: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  weathercode: string;
}

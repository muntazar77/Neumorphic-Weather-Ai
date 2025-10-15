
export type IconName = 'sunny' | 'cloudy' | 'partly-cloudy' | 'rain' | 'drizzle' | 'storm' | 'snow' | 'windy' | 'fog' | 'default';

export interface CurrentWeather {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: IconName;
}

export interface HourlyForecastItem {
  time: string;
  temp: number;
  icon: IconName;
}

export interface DailyForecastItem {
  day: string;
  high: number;
  low: number;
  icon: IconName;
}

export interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyForecastItem[];
  daily: DailyForecastItem[];
}

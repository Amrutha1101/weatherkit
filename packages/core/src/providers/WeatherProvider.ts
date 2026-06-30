export interface WeatherProvider {
  name: string;

  current(city: string): Promise<any>;
}
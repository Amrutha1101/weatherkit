export interface WeatherProvider {
  current(city: string): Promise<any>;
}
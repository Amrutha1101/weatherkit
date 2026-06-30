import { CurrentWeather } from "../types/CurrentWeather";

export interface WeatherProvider {
  name: string;

  current(city: string): Promise<CurrentWeather>;
}
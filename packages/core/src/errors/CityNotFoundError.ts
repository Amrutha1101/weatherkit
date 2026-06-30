import {WeatherError} from "./WeatherError";

export class CityNotFoundError extends WeatherError {
  constructor(city: string) {
    super(`City "${city}" was not found.`);
    this.name = "CityNotFoundError";
  }
}
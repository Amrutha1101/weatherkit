import { WeatherError } from "./WeatherError";

export class RateLimitError extends WeatherError {
  constructor() {
    super("API rate limit exceeded.");
    this.name = "RateLimitError";
  }
}
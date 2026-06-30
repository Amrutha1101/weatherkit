import { WeatherError } from "./WeatherError";

export class AuthenticationError extends WeatherError {
  constructor() {
    super("Invalid API key.");
    this.name = "AuthenticationError";
  }
}
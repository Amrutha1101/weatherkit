import { OpenWeatherProvider } from "./providers/openweather/OpenWeatherProvider";

export class WeatherKit {
  private provider: OpenWeatherProvider;

  constructor(options: { apiKey: string }) {
    this.provider = new OpenWeatherProvider(options.apiKey);
  }

  async current(city: string) {
    return this.provider.current(city);
  }
}
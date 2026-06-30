import { WeatherProvider } from "./providers/WeatherProvider";
import { OpenWeatherProvider } from "./providers/openweather/OpenWeatherProvider";

type WeatherKitOptions = {
  apiKey: string;
};

export class WeatherKit {
  private provider: WeatherProvider;

  constructor(options: WeatherKitOptions) {
    this.provider = new OpenWeatherProvider(options.apiKey);
  }

  async current(city: string) {
    return this.provider.current(city);
  }
}
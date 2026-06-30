import { WeatherKitOptions } from "./types/WeatherKitOptions";
import { OpenWeatherProvider } from "./providers/openweather/OpenWeatherProvider";
import {WeatherProvider} from "./providers/WeatherProvider";

export class WeatherKit {
  private provider: WeatherProvider;

  constructor(options: WeatherKitOptions) {
    switch (options.provider) {
      case "openweather":
        this.provider = new OpenWeatherProvider(options.apiKey);
        break;

      default:
        throw new Error("Unsupported provider");
    }
  }

  async current(city: string) {
    return this.provider.current(city);
  }
}
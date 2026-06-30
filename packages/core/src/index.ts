//import { WeatherProvider } from "./providers/WeatherProvider";
import { WeatherProvider } from "./providers/WeatherProvider.ts";
type Options = {
  providers: WeatherProvider[];
};

export class WeatherKit {
  private providers: WeatherProvider[];

  constructor(options: Options) {
    this.providers = options.providers;
  }

  async current(city: string) {
    let lastError: any;

    for (const provider of this.providers) {
      try {
        const result = await provider.current(city);
        return {
          provider: provider.name,
          ...result
        };
      } catch (err) {
        lastError = err;
      }
    }

    throw new Error("All providers failed: " + lastError);
  }
}
import { OpenWeatherClient } from "./client";
import { mapOpenWeather } from "./mapper";

export class OpenWeatherProvider {
  private client: OpenWeatherClient;

  constructor(apiKey: string) {
    this.client = new OpenWeatherClient(apiKey);
  }

  async current(city: string) {
    const data = await this.client.getCurrent(city);
    return mapOpenWeather(data);
  }
}
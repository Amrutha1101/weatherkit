import { request } from "undici";

export class OpenWeatherClient {
  constructor(private apiKey: string) {}

  async getCurrent(city: string) {
    const url =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${city}&appid=${this.apiKey}&units=metric`;

    const { body } = await request(url);
    return await body.json();
  }
}
import { WeatherProvider } from "../WeatherProvider";

export class WeatherAPIProvider implements WeatherProvider {
  name = "weatherapi";

  constructor(private apiKey: string) {}

  async current(city: string) {
    const url =
      `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;

    const res = await fetch(url);
    const data = await res.json();

    return {
      city: data.location.name,
      temperature: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      humidity: data.current.humidity,
      condition: data.current.condition.text
    };
  }
}
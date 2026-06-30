import { OpenWeatherClient } from "./client";
import { WeatherProvider } from "../WeatherProvider";
import { mapOpenWeather } from "./mapper";

export class OpenWeatherProvider implements WeatherProvider {
  name = "openweather";

  constructor(private apiKey: string) {}

  async current(city: string) {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    //console.log("OpenWeatherProvider data:", data);

    return {
      city: data.name,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      condition: data.weather?.[0]?.main,
    //   seaLevel: data.main.sea_level,
    //   sunrise: data.sys.sunrise,
    //   sunset: data.sys.sunset,
    };
  }
}
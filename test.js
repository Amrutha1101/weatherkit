import { WeatherKit } from "./packages/core/src/index.ts";
import { OpenWeatherProvider } from "./packages/core/src/providers/openweather/OpenWeatherProvider.ts";
import { WeatherAPIProvider } from "./packages/core/src/providers/weatherapi/WeatherAPIProvider.ts";

const weather = new WeatherKit({
  provider: "openweather",
  apiKey: "YOUR_KEY"
});

console.log(await weather.current("Bangalore"));
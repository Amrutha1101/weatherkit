import { WeatherKit } from "./packages/core/dist/index.js";

const weather = new WeatherKit();

console.log(await weather.current("Bangalore"));
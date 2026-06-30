import { WeatherKit } from "./packages/core/dist/index.js";

const weather = new WeatherKit({
  apiKey: "3358c6fd1328302013467b17d108bbb5",
});

const data = await weather.current("London");

console.log(data);
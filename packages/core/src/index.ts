export class WeatherKit {
  async current(city: string) {
    return {
      city,
      temperature: 25,
      condition: "sunny",
    };
  }
}
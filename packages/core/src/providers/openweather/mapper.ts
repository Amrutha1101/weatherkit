export function mapOpenWeather(data: any) {
  return {
    city: data.name,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    condition: data.weather?.[0]?.main,
    description: data.weather?.[0]?.description,
  };
}
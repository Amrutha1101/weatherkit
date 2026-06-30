import { request } from 'undici';
import { WeatherError } from '../../errors/WeatherError';
import { RateLimitError } from '../../errors/RateLimitError';
import { CityNotFoundError } from '../../errors/CityNotFoundError';
import { AuthenticationError } from '../../errors/AuthenticationError';

export class OpenWeatherClient {
  constructor(private apiKey: string) {}

  async getCurrent(city: string) {
    const url =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${city}&appid=${this.apiKey}&units=metric`;

    const response = await fetch(url);

    if (response.status === 401) {
      throw new AuthenticationError();
    }

    if (response.status === 404) {
      throw new CityNotFoundError(city);
    }

    if (response.status === 429) {
      throw new RateLimitError();
    }

    if (!response.ok) {
      throw new WeatherError('Unknown weather API error.');
    }
    return await response.json();
  }
}

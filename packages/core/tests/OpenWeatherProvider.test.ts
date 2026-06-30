import { describe, expect, it } from "vitest";
import { OpenWeatherProvider } from "../src/providers/openweather/OpenWeatherProvider";

describe("OpenWeatherProvider", () => {
  it("creates provider", () => {
    const provider = new OpenWeatherProvider("demo");

    expect(provider.name).toBe("openweather");
  });
});
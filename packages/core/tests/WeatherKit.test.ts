import { describe, expect, it } from "vitest";
import { WeatherKit } from "../src";

describe("WeatherKit", () => {
  it("creates an SDK instance", () => {
    const sdk = new WeatherKit({
      provider: "openweather",
      apiKey: "demo"
    });

    expect(sdk).toBeDefined();
  });
});
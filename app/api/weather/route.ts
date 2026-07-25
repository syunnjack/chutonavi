export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = Number(searchParams.get("latitude"));
  const longitude = Number(searchParams.get("longitude"));

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return Response.json({ error: "Invalid coordinates" }, { status: 400 });
  }

  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    timezone: "Asia/Tokyo",
    forecast_days: "7",
    current: "temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    hourly: "temperature_2m,precipitation_probability,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Weather request failed");
    return Response.json(await response.json(), {
      headers: { "Cache-Control": "public, max-age=300, s-maxage=300" },
    });
  } catch {
    return Response.json({ error: "Weather unavailable" }, { status: 502 });
  }
}

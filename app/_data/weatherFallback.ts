import type { WeatherResponse } from "../_components/WeatherPanel";

type Snapshot = {
  current: WeatherResponse["current"];
  daily: WeatherResponse["daily"];
};

const snapshots: Record<string, Snapshot> = {
  "35.1815": { current:{time:"2026-07-26T07:15",temperature_2m:26.2,apparent_temperature:31.1,precipitation:0,weather_code:0,wind_speed_10m:3.1},daily:{time:["2026-07-26","2026-07-27","2026-07-28","2026-07-29","2026-07-30","2026-07-31","2026-08-01"],weather_code:[1,61,51,95,3,51,95],temperature_2m_max:[35.4,33.9,33.7,33.1,35.9,37.1,32.3],temperature_2m_min:[24.5,25.2,25.1,24.6,24.7,25.6,27],precipitation_probability_max:[46,65,94,57,6,8,21]} },
  "35.4233": { current:{time:"2026-07-26T07:15",temperature_2m:26.2,apparent_temperature:30.6,precipitation:0,weather_code:0,wind_speed_10m:2.5},daily:{time:["2026-07-26","2026-07-27","2026-07-28","2026-07-29","2026-07-30","2026-07-31","2026-08-01"],weather_code:[1,51,51,51,2,3,95],temperature_2m_max:[35.6,34.3,33.8,34.4,36.5,37.2,32.2],temperature_2m_min:[24.3,24.9,24,24.8,23.8,25.3,26.7],precipitation_probability_max:[37,40,92,65,10,9,16]} },
  "34.7303": { current:{time:"2026-07-26T07:15",temperature_2m:28,apparent_temperature:32.1,precipitation:0,weather_code:0,wind_speed_10m:7.7},daily:{time:["2026-07-26","2026-07-27","2026-07-28","2026-07-29","2026-07-30","2026-07-31","2026-08-01"],weather_code:[1,3,51,95,3,3,95],temperature_2m_max:[34.9,33.9,32.7,32.9,35.2,35.1,30.3],temperature_2m_min:[25.3,26.3,24.7,23.5,23.5,22.4,25.2],precipitation_probability_max:[27,55,97,73,16,10,14]} },
  "34.9756": { current:{time:"2026-07-26T07:15",temperature_2m:26.7,apparent_temperature:32.5,precipitation:0,weather_code:1,wind_speed_10m:2.5},daily:{time:["2026-07-26","2026-07-27","2026-07-28","2026-07-29","2026-07-30","2026-07-31","2026-08-01"],weather_code:[2,53,63,95,51,3,96],temperature_2m_max:[29.9,29.8,28.8,28.1,29.8,31.8,30.3],temperature_2m_min:[25.4,25,23.9,23.4,24.6,24.6,24.7],precipitation_probability_max:[91,100,100,84,20,16,43]} },
};

export function getWeatherFallback(latitude: number): WeatherResponse {
  const snapshot = snapshots[String(latitude)] ?? snapshots["35.1815"];
  const time: string[] = [];
  const temperature_2m: number[] = [];
  const precipitation_probability: number[] = [];
  const weather_code: number[] = [];

  snapshot.daily.time.forEach((day, dayIndex) => {
    for (let hour = 0; hour < 24; hour += 1) {
      time.push(`${day}T${String(hour).padStart(2, "0")}:00`);
      const min = snapshot.daily.temperature_2m_min[dayIndex];
      const max = snapshot.daily.temperature_2m_max[dayIndex];
      const daylightCurve = Math.max(0, Math.sin(((hour - 6) / 14) * Math.PI));
      temperature_2m.push(Number((min + (max - min) * daylightCurve).toFixed(1)));
      precipitation_probability.push(snapshot.daily.precipitation_probability_max[dayIndex]);
      weather_code.push(snapshot.daily.weather_code[dayIndex]);
    }
  });

  return { current:snapshot.current, daily:snapshot.daily, hourly:{time,temperature_2m,precipitation_probability,weather_code} };
}

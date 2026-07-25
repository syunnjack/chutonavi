"use client";

import { useEffect, useState } from "react";

type WeatherResponse = {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
    weather_code: number[];
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
};

type WeatherPanelProps = {
  prefecture: string;
  location: string;
  latitude: number;
  longitude: number;
};

const weatherLabels: Record<number, { icon: string; label: string }> = {
  0: { icon: "☀️", label: "快晴" },
  1: { icon: "🌤️", label: "晴れ" },
  2: { icon: "⛅", label: "一部くもり" },
  3: { icon: "☁️", label: "くもり" },
  45: { icon: "🌫️", label: "霧" },
  48: { icon: "🌫️", label: "霧" },
  51: { icon: "🌦️", label: "弱い霧雨" },
  53: { icon: "🌦️", label: "霧雨" },
  55: { icon: "🌧️", label: "強い霧雨" },
  61: { icon: "🌦️", label: "弱い雨" },
  63: { icon: "🌧️", label: "雨" },
  65: { icon: "🌧️", label: "強い雨" },
  71: { icon: "🌨️", label: "弱い雪" },
  73: { icon: "🌨️", label: "雪" },
  75: { icon: "❄️", label: "強い雪" },
  80: { icon: "🌦️", label: "にわか雨" },
  81: { icon: "🌧️", label: "にわか雨" },
  82: { icon: "⛈️", label: "激しい雨" },
  95: { icon: "⛈️", label: "雷雨" },
  96: { icon: "⛈️", label: "雷雨・ひょう" },
  99: { icon: "⛈️", label: "強い雷雨" },
};

const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

function getWeather(code: number) {
  return weatherLabels[code] ?? { icon: "🌡️", label: "変わりやすい天気" };
}

export default function WeatherPanel({ prefecture, location, latitude, longitude }: WeatherPanelProps) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams({
      latitude: String(latitude),
      longitude: String(longitude),
      timezone: "Asia/Tokyo",
      forecast_days: "7",
      current: "temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
      hourly: "temperature_2m,precipitation_probability,weather_code",
      daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    });

    fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`)
      .then((response) => {
        if (!response.ok) throw new Error("Weather request failed");
        return response.json();
      })
      .then((data: WeatherResponse) => setWeather(data))
      .catch(() => setError(true));
  }, [latitude, longitude]);

  if (error) {
    return <section className="weather-panel weather-error"><p>天気情報を取得できませんでした。時間をおいて再読み込みしてください。</p></section>;
  }

  if (!weather) {
    return <section className="weather-panel weather-loading" aria-label="天気情報を読み込み中">天気情報を読み込んでいます…</section>;
  }

  const currentTime = new Date(weather.current.time).getTime();
  const foundStart = weather.hourly.time.findIndex((time) => new Date(time).getTime() >= currentTime);
  const start = Math.max(0, foundStart);
  const next24Hours = weather.hourly.time.slice(start, start + 24).map((time, offset) => {
    const index = start + offset;
    return {
      time,
      temperature: weather.hourly.temperature_2m[index],
      rain: weather.hourly.precipitation_probability[index],
      code: weather.hourly.weather_code[index],
    };
  });
  const currentCondition = getWeather(weather.current.weather_code);

  return (
    <section className="weather-panel" aria-labelledby={`weather-${prefecture}`}>
      <div className="weather-heading">
        <div>
          <p className="content-kicker">LIVE WEATHER</p>
          <h2 id={`weather-${prefecture}`}>{prefecture}の天気</h2>
        </div>
        <p>{location}周辺・{weather.current.time.slice(5).replace("T", " ")}更新</p>
      </div>

      <div className="weather-current">
        <div className="weather-now-icon" aria-hidden="true">{currentCondition.icon}</div>
        <div className="weather-current-main">
          <small>現在</small>
          <strong>{Math.round(weather.current.temperature_2m)}℃ <span>{currentCondition.label}</span></strong>
        </div>
        <dl>
          <div><dt>体感</dt><dd>{Math.round(weather.current.apparent_temperature)}℃</dd></div>
          <div><dt>降水</dt><dd>{weather.current.precipitation} mm</dd></div>
          <div><dt>風速</dt><dd>{Math.round(weather.current.wind_speed_10m)} km/h</dd></div>
        </dl>
      </div>

      <div className="weather-block">
        <div className="weather-block-title"><h3>向こう24時間</h3><span>横にスクロールできます →</span></div>
        <div className="hourly-weather" tabIndex={0}>
          {next24Hours.map((hour, index) => {
            const condition = getWeather(hour.code);
            const date = new Date(hour.time);
            return (
              <article key={hour.time}>
                <time dateTime={hour.time}>{index === 0 ? "現在" : `${date.getHours()}時`}</time>
                <b aria-label={condition.label}>{condition.icon}</b>
                <strong>{Math.round(hour.temperature)}℃</strong>
                <small>☂ {hour.rain}%</small>
              </article>
            );
          })}
        </div>
      </div>

      <div className="weather-block">
        <div className="weather-block-title"><h3>一週間の予報</h3><span>最高 / 最低気温</span></div>
        <div className="weekly-weather">
          {weather.daily.time.map((day, index) => {
            const date = new Date(`${day}T00:00:00`);
            const condition = getWeather(weather.daily.weather_code[index]);
            return (
              <article key={day}>
                <time dateTime={day}>{index === 0 ? "今日" : `${date.getMonth() + 1}/${date.getDate()}（${dayNames[date.getDay()]}）`}</time>
                <b aria-label={condition.label}>{condition.icon}</b>
                <strong>{Math.round(weather.daily.temperature_2m_max[index])}℃ / {Math.round(weather.daily.temperature_2m_min[index])}℃</strong>
                <small>☂ {weather.daily.precipitation_probability_max[index]}%</small>
              </article>
            );
          })}
        </div>
      </div>

      <p className="weather-source">予報提供：<a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>（お出かけ前に最新の気象情報もご確認ください）</p>
    </section>
  );
}

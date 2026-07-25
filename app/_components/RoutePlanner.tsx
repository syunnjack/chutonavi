"use client";

import { useState } from "react";

type Position = { latitude: number; longitude: number };
type RoutePlannerProps = {
  destination: string;
  latitude: number;
  longitude: number;
  compact?: boolean;
};

const modes = [
  { key: "transit", label: "公共交通", icon: "🚃", speed: 28, factor: 1.15, fixedMinutes: 20 },
  { key: "driving", label: "車", icon: "🚗", speed: 35, factor: 1.25, fixedMinutes: 5 },
  { key: "bicycling", label: "自転車", icon: "🚲", speed: 15, factor: 1.18, fixedMinutes: 0 },
  { key: "walking", label: "徒歩", icon: "🚶", speed: 4.8, factor: 1.12, fixedMinutes: 0 },
];

function directDistance(from: Position, to: Position) {
  const radius = 6371;
  const toRad = (value: number) => value * Math.PI / 180;
  const dLat = toRad(to.latitude - from.latitude);
  const dLon = toRad(to.longitude - from.longitude);
  const lat1 = toRad(from.latitude);
  const lat2 = toRad(to.latitude);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatTime(minutes: number) {
  if (minutes < 60) return `約${Math.max(1, Math.round(minutes))}分`;
  const hours = Math.floor(minutes / 60);
  const rest = Math.round(minutes % 60);
  return `約${hours}時間${rest ? `${rest}分` : ""}`;
}

export default function RoutePlanner({ destination, latitude, longitude, compact = false }: RoutePlannerProps) {
  const [position, setPosition] = useState<Position | null>(null);
  const [status, setStatus] = useState("");

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setStatus("このブラウザでは現在地を取得できません。");
      return;
    }
    setStatus("現在地を取得しています…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition({ latitude: coords.latitude, longitude: coords.longitude });
        setStatus("");
      },
      () => setStatus("現在地を取得できませんでした。位置情報の利用を許可してください。"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
    );
  };

  const distance = position ? directDistance(position, { latitude, longitude }) : 0;

  return (
    <section id="route" className={`route-planner ${compact ? "route-planner-compact" : ""}`} aria-label={`${destination}までのルート`}>
      <div className="route-planner-heading">
        <div><small>ROUTE FROM YOUR LOCATION</small><h2>現在地から{destination}へ</h2></div>
        <button type="button" onClick={getCurrentLocation}>⌖ 現在地からルート表示</button>
      </div>
      {status && <p className="route-status" role="status">{status}</p>}
      {position && (
        <>
          <div className="route-mode-grid">
            {modes.map((mode) => {
              const routeDistance = distance * mode.factor;
              const minutes = routeDistance / mode.speed * 60 + mode.fixedMinutes;
              const fare = mode.key === "transit"
                ? `運賃目安 ¥${Math.max(210, Math.round((200 + routeDistance * 22) / 10) * 10).toLocaleString()}`
                : mode.key === "driving"
                  ? `燃料目安 ¥${Math.round(routeDistance * 15 / 10) * 10}`
                  : "運賃 ¥0";
              const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${position.latitude},${position.longitude}&destination=${latitude},${longitude}&travelmode=${mode.key}`;
              return (
                <a href={mapUrl} target="_blank" rel="noreferrer" key={mode.key}>
                  <b>{mode.icon} {mode.label}</b>
                  <strong>{routeDistance.toFixed(1)} km</strong>
                  <span>{formatTime(minutes)}</span>
                  <small>{fare}</small>
                  <em>実際のルートを確認 ↗</em>
                </a>
              );
            })}
          </div>
          <p className="route-notice">距離・時間・運賃は現在地との直線距離から算出した概算です。渋滞、乗換、道路状況、料金はGoogleマップ等の経路検索でご確認ください。位置情報は保存しません。</p>
        </>
      )}
    </section>
  );
}

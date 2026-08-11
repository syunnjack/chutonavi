import spotsData from "@/data/spots.json";
import type { Spot } from "@/lib/types";

const spots = spotsData as Spot[];

export function getSpots(): Spot[] {
  return [...spots].sort((a, b) => a.area.localeCompare(b.area, "ja"));
}

export function getSpot(slug: string): Spot | undefined {
  return spots.find((spot) => spot.slug === slug);
}

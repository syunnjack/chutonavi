import { getSpots } from "@/lib/data";
import { SITE_DESCRIPTION, SITE_NAME, resolveBaseUrl } from "@/lib/site";

export async function GET() {
  const baseUrl = resolveBaseUrl();
  const spots = getSpots();

  const lines = [
    `# ${SITE_NAME}`,
    "",
    SITE_DESCRIPTION,
    "",
    "## スポット一覧",
    ...spots.map((spot) => `- [${spot.name}](${baseUrl}/spots/${spot.slug}): ${spot.summary}`),
  ];

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

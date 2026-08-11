export const SITE_NAME = "ChutoNavi";
export const SITE_DESCRIPTION =
  "駐屯地イベント向けに、駅アクセス・周辺施設・混雑回避のコツをまとめた非公式ナビサイトです。";

const FALLBACK_BASE_URL = "http://localhost:3000";

export function resolveBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) return FALLBACK_BASE_URL;

  try {
    new URL(url);
    return url;
  } catch {
    return FALLBACK_BASE_URL;
  }
}

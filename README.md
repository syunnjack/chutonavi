# chutonavi

chutonavi は、駐屯地イベント来場者向けに、駅アクセス・周辺施設・混雑回避のコツを整理した非公式ナビサイトです。

## 機能

- スポット一覧ページ
- スポット詳細ページ（アクセス、駐車、周辺営業時間、混雑回避のコツ）
- SEO対応（metadata、robots.txt、sitemap.xml、JSON-LD、llms.txt）

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript
- ESLint

## 開発

```bash
npm ci
npm run dev
```

## 品質確認

```bash
npm run lint
npm run build
```

## データ更新

`data/spots.json` を編集すると掲載内容を更新できます。

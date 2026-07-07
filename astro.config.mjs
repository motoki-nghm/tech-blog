// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// デプロイ先: Vercel。静的出力(SSG)のため Vercel アダプタは不要
//（Framework Preset "Astro" がゼロコンフィグで検出する。詳細は README のデプロイ手順)。
// TODO(公開直前): site を本番URL(Vercel ドメイン or 独自ドメイン)へ差し替える。
//   現在はダミー。OGP・canonical URL の生成にこの値を使う。
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx()],
});

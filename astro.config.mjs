// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// site は公開URLが確定したら差し替える(OGP・サイトマップ・RSSで使用)
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx()],
});

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 記事コレクション。実体は src/content/blog/*.mdx(Content Layer の glob ローダーで読み込む)。
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // タグ設計: 「事例」「AI協働」「技術解説」+ アプリ名タグでシリーズを束ねる(企画書 7節)。
    tags: z.array(z.string()).default([]),
    // 下書きは一覧・ビルド出力から除外する運用にする。
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

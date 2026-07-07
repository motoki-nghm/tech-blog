// サイト全体で使う定数。文言や導線URLはここで一元管理する。

export const SITE_TITLE = "（サイト名・仮）AIアプリ製作実録";
export const SITE_DESCRIPTION =
  "AIを活用したアプリ開発の実績と、その裏側にある判断を発信するポートフォリオブログ。";

// ヘッダー/フッターの導線。プロフィール・問い合わせは営業導線として必須(企画書 7節)。
// リンク先が未確定のものはプレースホルダ。確定後に差し替える。
export const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/blog", label: "記事一覧" },
  { href: "/tags", label: "タグ" },
  { href: "/#profile", label: "プロフィール" },
  { href: "/#contact", label: "お問い合わせ" },
];

// タグ設計の軸(企画書 7節)。アプリ名タグはこれに加えてシリーズごとに付与する。
export const CORE_TAGS = ["事例", "AI協働", "技術解説"] as const;

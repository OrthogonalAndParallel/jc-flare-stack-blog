import type { SiteConfig } from "@/features/config/site-config.schema";

export const blogConfig = {
  title: "禅游博客",
  author: "JC",
  description: "知识、工作、生活",
  social: [
    { platform: "github", url: "https://github.com/OrthogonalAndParallel" },
    { platform: "email", url: "jinchen19940116@email.com" },
    { platform: "rss", url: "https://jc-blog.pages.dev/rss.xml" },
  ],
  icons: {
    faviconSvg: "/favicon.svg",
    faviconIco: "/favicon.ico",
    favicon96: "/favicon-96x96.png",
    appleTouchIcon: "/apple-touch-icon.png",
    webApp192: "/web-app-manifest-192x192.png",
    webApp512: "/web-app-manifest-512x512.png",
  },
  theme: {
    default: {
      navBarName: "导航栏",
    },
    fuwari: {
      homeBg: "/images/home-bg.webp",
      avatar: "/images/avatar.png",
      primaryHue: 250,
    },
  },
} as const satisfies SiteConfig;

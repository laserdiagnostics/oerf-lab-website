import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";
import { SITE } from "../config";
import type { Locale } from "./types";

export const staticRoutes = {
  home: "",
  research: "research",
  team: "team",
  publications: "publications",
  contact: "contact",
} as const;

export type StaticRouteKey = keyof typeof staticRoutes;
export type ActiveRoute = StaticRouteKey | "member" | "none";

export function memberRoute(id: string): string {
  return `team/${id}`;
}

function withTrailingSlash(url: string): string {
  return url.endsWith("/") ? url : `${url}/`;
}

export function localePath(locale: Locale, routePath = ""): string {
  return withTrailingSlash(getRelativeLocaleUrl(locale, routePath));
}

export function localeAbsoluteUrl(locale: Locale, routePath = ""): string {
  return withTrailingSlash(getAbsoluteLocaleUrl(locale, routePath));
}

export function absoluteAssetUrl(assetPath: string): string {
  return new URL(assetPath.replace(/^\/+/, ""), `${SITE.url}/`).toString();
}

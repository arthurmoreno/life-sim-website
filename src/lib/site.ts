import { readFileSync } from 'node:fs';
import { load } from 'js-yaml';

export type Stage = 'prototype' | 'demo' | 'steam_coming_soon' | 'early_access' | 'released';

export interface SiteConfig {
  name: string;
  short_name: string;
  genre: string;
  stage: Stage;
  platforms: string[];
  version: string;
  developer: { name: string; studio: string; location: string; email: string };
  links: Record<'itch' | 'steam' | 'newsletter' | 'youtube' | 'bluesky' | 'discord' | 'github' | 'patreon', string | null>;
  trailer_youtube_id: string | null;
}

export const config = load(readFileSync('site.config.yaml', 'utf8')) as SiteConfig;

export interface RoadmapData {
  ladder: { key: string; name: string; where: string; state: 'done' | 'current' | 'upcoming'; summary: string }[];
  columns: Record<'now' | 'next' | 'later', { title: string; items: string[] }>;
}
export const roadmap = load(readFileSync('src/data/roadmap.yaml', 'utf8')) as RoadmapData;

/** Prefix a site path with the configured base (works for a project path or a root domain). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function isPlaceholder(v: string | null | undefined): boolean {
  return !v || v.startsWith('TODO');
}

export interface Cta {
  label: string;
  href: string;
  external: boolean;
  /** true when the target link is not configured yet and the button falls back to the devlog */
  fallback: boolean;
}

/** Primary CTA: steam -> wishlist; else itch -> play/follow; else newsletter; else the devlog. */
export function primaryCta(): Cta {
  const { links, stage } = config;
  if (links.steam) return { label: 'Wishlist on Steam', href: links.steam, external: true, fallback: false };
  if (links.itch) {
    const label = stage === 'prototype' || stage === 'demo' ? 'Play the prototype on itch.io' : 'Get it on itch.io';
    return { label, href: links.itch, external: true, fallback: false };
  }
  if (links.newsletter) return { label: 'Follow the journey', href: url('#follow'), external: false, fallback: false };
  return { label: 'Read the devlog', href: url('devlog/'), external: false, fallback: true };
}

export const stageLabel: Record<Stage, string> = {
  prototype: 'In development · Prototype',
  demo: 'In development · Demo',
  steam_coming_soon: 'Coming soon to Steam',
  early_access: 'Steam Early Access',
  released: 'Released',
};

export function statusLine(): string {
  const bits = [stageLabel[config.stage]];
  if (config.stage === 'prototype' || config.stage === 'demo') bits[0] += ` ${config.version}`;
  if (config.links.itch) bits.push('itch.io');
  bits.push(config.platforms.join(' / '));
  return bits.join(' · ');
}

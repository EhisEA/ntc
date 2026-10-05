import { programme } from '../data/event.js';

export const initials = (name) =>
  name
    .replace(/^(Dr|Mr|Mrs|Ms|Prof|Pharm|Hon|Engr)\.?\s+/i, '')
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join('');

export const sessionFor = (n) => programme.find((p) => p.session === n);
export const sessionTime = (n) => {
  const p = sessionFor(n);
  return p ? `${p.time}–${p.end}` : '';
};
export const sessionHref = (n) => `#session-${n}`;

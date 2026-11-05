import { en } from "./en";
import { id } from "./id";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { portrait, projects } from "./types";
export {
  defaultLocale,
  isLocale,
  localePath,
  locales,
  otherLocale,
} from "./types";
export type { CaseStudyCopy, Dictionary, Locale, ProjectFacts, ProjectShot } from "./types";

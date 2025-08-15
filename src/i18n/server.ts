import { cookies } from "next/headers";
import { es } from "./locales/es";
import { en } from "./locales/en";
import type { Lang, RolKey, SexoKey, DiaKey } from "./types";

const DICTS = { es, en };

function getLangFromCookies(): Lang {
  const c = cookies().get("app_lang")?.value;
  return c === "en" ? "en" : "es";
}

// Traductor genérico por path: "campos.correo", "entidades.docente", etc.
export function tServer(path: string, fallback?: string, lang?: Lang): string {
  const l = lang ?? getLangFromCookies();
  const dict: any = DICTS[l];
  const val = path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), dict);
  return typeof val === "string" ? val : (fallback ?? path);
}

// Helpers específicos (roles / enums)
export function roleLabelServer(role: RolKey, lang?: Lang) {
  const l = lang ?? getLangFromCookies();
  return DICTS[l].roles[role] ?? role;
}

export function sexoLabelServer(v: SexoKey, lang?: Lang) {
  const l = lang ?? getLangFromCookies();
  return DICTS[l].enums.sexoUsuario[v] ?? v;
}

export function diaLabelServer(v: DiaKey, lang?: Lang) {
  const l = lang ?? getLangFromCookies();
  return DICTS[l].enums.dia[v] ?? v;
}
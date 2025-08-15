"use client";

import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { es } from "./locales/es";
import { en } from "./locales/en";
import type { Lang, DictionaryShape, RolKey, SexoKey, DiaKey } from "./types";

type Dict = DictionaryShape;
const DICTS: Record<Lang, Dict> = { es, en };
const COOKIE_KEY = "app_lang";

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000`;
}

type I18nContextType = {
  lang: Lang;
  dict: Dict;
  setLang: (l: Lang) => void;
  t: (path: string, fallback?: string) => string;
  roleLabel: (r: RolKey) => string;
  sexoLabel: (v: SexoKey) => string;
  diaLabel: (v: DiaKey) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function getByPath(obj: any, path: string) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), obj);
}

export const I18nProvider: React.FC<{ children: React.ReactNode; initialLang?: Lang }> = ({
  children,
  initialLang,
}) => {
  // usa SOLO el idioma que viene del server; default "es"
  const [lang, setLangState] = useState<Lang>(initialLang ?? "es");

  useEffect(() => { writeCookie(COOKIE_KEY, lang); }, [lang]);

  const dict = useMemo(() => DICTS[lang], [lang]);
  const t = (path: string, fallback?: string) => {
    const val = getByPath(dict, path);
    return typeof val === "string" ? val : (fallback ?? path);
  };

  const setLang = (l: Lang) => setLangState(l);
  const roleLabel = (r: RolKey) => dict.roles[r] ?? r;
  const sexoLabel = (v: SexoKey) => dict.enums.sexoUsuario[v] ?? v;
  const diaLabel = (v: DiaKey) => dict.enums.dia[v] ?? v;

  return (
    <I18nContext.Provider value={{ lang, dict, setLang, t, roleLabel, sexoLabel, diaLabel }}>
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
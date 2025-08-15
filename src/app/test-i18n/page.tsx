"use client";
import { useI18n } from "@/i18n";

export default function TestI18nPage() {
  const { t, roleLabel, sexoLabel, diaLabel, lang, setLang } = useI18n();

  return (
    <main className="p-6 space-y-3">
      <div className="flex gap-2 items-center">
        <span>{t("ui.idioma")}:</span>
        <button onClick={() => setLang("es")} className="px-2 py-1 border rounded">ES</button>
        <button onClick={() => setLang("en")} className="px-2 py-1 border rounded">EN</button>
        <span className="ml-2 text-sm opacity-70">({lang})</span>
      </div>

      <div>{t("campos.correo")}: ejemplo@dominio.com</div>
      <div>Rol ADMIN → {roleLabel("ADMIN")}</div>
      <div>Sexo MASCULINO → {sexoLabel("MASCULINO")}</div>
      <div>Día LUNES → {diaLabel("LUNES")}</div>
    </main>
  );
}
"use client";

import { useI18n } from "@/i18n";
import { useRouter } from "next/navigation";

export default function LangSwitch() {
  const { lang, setLang } = useI18n();
  const router = useRouter();

  const toggle = () => {
    setLang(lang === "es" ? "en" : "es"); // escribe cookie app_lang
    router.refresh();                     // refresca Server Components (Navbar/UserCard)
  };

  return (
    <button
      onClick={toggle}
      title={lang === "es" ? "Change to English" : "Cambiar a Español"}
      className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer text-[10px] font-semibold"
    >
      {lang.toUpperCase() /* ES | EN */}
    </button>
  );
}
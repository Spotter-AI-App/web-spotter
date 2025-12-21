"use client";

import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage, t } from "hooks/useLanguage";
import { appTranslations } from "translations/app";

export default function Header() {
  const { language } = useLanguage();
  const content = t(appTranslations, language);

  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-emerald">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="flex items-center gap-2" href="/">
          <img src="logos/icon_transparent.png" alt="Spotter AI" className="w-10 h-10" />
          {/* Text appear for screenwidths > 768px */}
          <span className="hidden md:inline text-xl dark:text-gray-100">Spotter AI</span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          <Link
            href="/policy"
            className="text-sm text-gray-800 dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            {content.header.privacyPolicy}
          </Link>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}

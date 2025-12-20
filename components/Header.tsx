"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage, t } from "hooks/useLanguage";
import { appTranslations } from "translations/app";

export default function Header() {
  const { language } = useLanguage();
  const content = t(appTranslations, language);

  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-logo-lime">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a className="flex items-center" href="/">
          <span className="text-xl dark:text-gray-100">Spotter AI</span>
          <img src="/icon_transparent.png" alt="logo" className="w-12 h-12" />
        </a>
        <nav className="flex items-center gap-3">
          <ul className="flex space-x-2">
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {content.header.contact}
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {content.header.privacyPolicy}
              </Link>
            </li>
          </ul>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage, t } from "hooks/useLanguage";
import { useLogoNavigation } from "hooks/useLogoNavigation";
import { appTranslations } from "translations/app";

export default function Header() {
  const { language } = useLanguage();
  const content = t(appTranslations, language);
  const { handleLogoClick } = useLogoNavigation();


  return (
    <header 
      className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md"
      style={{
        boxShadow: "0 4px 30px rgba(16, 185, 129, 0.3), 0 1px 3px rgba(16, 185, 129, 0.2)"
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          className="flex items-center gap-2 cursor-pointer" 
          href="/"
          onClick={handleLogoClick}
        >
          <img src="logos/icon_transparent.png" alt="Spotter AI" className="w-10 h-10" />
          {/* Text appear for screenwidths > 768px */}
          <div className="hidden md:flex flex-col">
            <span className="text-xl dark:text-gray-100">Spotter AI</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">by CAMPUS INFORMATION TECHNOLOGIES S.L.</span>
          </div>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          <Link
            href="/policy"
            className="text-sm dark:text-white hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors"
          >
            {content.header.privacyPolicy}
          </Link>
          <Link
            href="/terms"
            className="text-sm dark:text-white hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors"
          >
            {content.header.useTerms}
          </Link>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}

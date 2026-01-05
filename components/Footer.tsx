"use client";

import { FaInstagram } from "react-icons/fa";
import { useLanguage, t } from "hooks/useLanguage";
import { useLogoNavigation } from "hooks/useLogoNavigation";
import { appTranslations } from "translations/app";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const content = t(appTranslations, language);
  const { handleLogoClick } = useLogoNavigation();


  return (
    <footer className="bg-white dark:bg-black shadow-sm text-gray-400 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center gap-4 text-sm">
        {/* Left side - Logo and company info */}
        <div className="flex flex-col items-start min-w-0 flex-1">
          <a 
            href="/"
            onClick={handleLogoClick}
            className="cursor-pointer flex-shrink-0"
          >
            <img src="logos/icon_transparent.png" alt="logo" className="w-12 h-12" />
          </a>
          <p className="mt-2 text-xs sm:text-sm break-words">
            &copy; {currentYear} Spotter AI by CAMPUS INFORMATION TECHNOLOGIES S.L.
          </p>
        </div>

        {/* Right side - Instagram */}
        <a 
          href="https://www.instagram.com/spotterai.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-shrink-0"
          aria-label="Instagram"
        >
          <FaInstagram 
            size={28} 
            className="text-gray-400 group-hover:text-emerald transition-colors"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


"use client";

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
      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
        <div className="flex items-center">
          <a 
            href="/"
            onClick={handleLogoClick}
            className="cursor-pointer"
          >
            <img src="logos/icon_transparent.png" alt="logo" className="w-12 h-12" />
          </a>
        </div>
        <p className="ml-4">&copy; {currentYear} Spotter AI. {content.footer.copyright}</p>
        <p className="ml-4">by CAMPUS INFORMATION TECHNOLOGIES S.L.</p>
      </div>
    </footer>
  );
};

export default Footer;


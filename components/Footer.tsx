"use client";

import { useLanguage, t } from "hooks/useLanguage";
import { appTranslations } from "translations/app";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const content = t(appTranslations, language);

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
        <p className="ml-4">&copy; {currentYear} Spotter AI. {content.footer.copyright}</p>
        <div className="flex items-center">
          <a href="/">
            <img src="/icon_transparent.png" alt="logo" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


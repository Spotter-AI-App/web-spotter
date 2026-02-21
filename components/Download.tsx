"use client";

import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useLanguage, t } from "hooks/useLanguage";
import { appTranslations } from "translations/app";

const Download: React.FC = () => {
  const { language } = useLanguage();
  const content = t(appTranslations, language);

  return (
    <section className="container mx-auto py-24 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 order-1 flex justify-center md:justify-start">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
              {content.download.title}
            </h2>
            <div className="flex space-x-4">
<Link
                href="https://apps.apple.com/es/app/spotter-ai/id6756170372"
                className="download-button bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-md text-base flex items-center space-x-2 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple className="text-2xl" />
                <span>{content.download.appStore}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;


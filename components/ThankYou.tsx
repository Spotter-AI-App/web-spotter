"use client";

import { useLanguage, t } from "hooks/useLanguage";
import { appTranslations } from "translations/app";
import HighlightedText from "./HighlightedText";

export default function ThankYou() {
  const { language, mounted } = useLanguage();
  
  if (!mounted) return null;
  
  const content = t(appTranslations, language);

  return (
    <section className="text-center py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <img className="mx-auto mb-6" src="/icon_transparent.png" width={100} height={100} alt="Spotter AI Logo" />
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <HighlightedText text={content.thankYou.title} />
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8">
          <HighlightedText text={content.thankYou.subtitle} />
        </p>
      </div>
    </section>
  );
}

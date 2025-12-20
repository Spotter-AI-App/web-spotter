"use client";

import Section from "components/Section";
import { useLanguage } from "hooks/useLanguage";
import { appTranslations } from "translations/app";

export default function FeatureSections() {
  const { language, mounted } = useLanguage();
  
  if (!mounted) {
    return null; // Avoid hydration mismatch
  }
  
  const t = appTranslations[language];

  return (
    <>
      {t.sections.map((section, index) => (
        <Section 
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          description={section.description}
          reversed={section.reversed}
        />
      ))}
    </>
  );
}

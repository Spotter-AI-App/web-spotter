"use client";

import Image from "next/image";
import { useLanguage, t } from "hooks/useLanguage";
import { appTranslations } from "translations/app";

export default function Hero() {
  const { language } = useLanguage();
  const content = t(appTranslations, language);

  return (
    <section className="text-center my-16 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="flex items-center justify-center gap-4 font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
        <Image
          src="/spotties/avatar_inicial.png"
          alt="Spotty"
          width={80}
          height={80}
          className="rounded-full"
        />
        <strong>{content.hero.title}</strong>
      </h1>
      <p className="text-xl mb-12 text-emerald font-light">
        {content.hero.subtitle}
      </p>
    </section>
  );
}


"use client";

import PrivacyTerms from "components/PrivacyTerms";
import { useLanguage, t } from "hooks/useLanguage";
import { policyTranslations } from "translations/policy";

export default function PrivacyTermsPage() {
  const { language, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  const content = t(policyTranslations, language);

  return (
    <PrivacyTerms
      title={content.title}
      subtitle={content.subtitle}
      lastUpdated={content.lastUpdated}
      lastUpdatedLabel={content.lastUpdatedLabel}
      contactTitle={content.contactTitle}
      contactText={content.contactText}
      contactAddressLabel={content.contactAddressLabel}
      contactRightsText={content.contactRightsText}
      footerText={content.footerText}
      sections={content.sections}
      contactEmail="support@spotter-ai.app"
    />
  );
}

type PolicySection = {
  title: string;
  content: string;
  list?: string[];
  note?: string;
};

type PrivacyTermsProps = {
  title?: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: PolicySection[];
  contactEmail?: string;
};

export default function PrivacyTerms(props: PrivacyTermsProps) {
  return (
    <section className="my-16 mx-4 sm:mx-8 md:mx-16 lg:mx-24 max-w-4xl lg:max-w-5xl">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-4xl md:text-5xl dark:text-white mb-8">
        {props.title}
      </h1>
      {props.subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {props.subtitle}
        </p>
      )}

      <p className="text-gray-600 dark:text-gray-300 mb-8 font-light">
        Last updated: {props.lastUpdated}
      </p>

      <div className="space-y-8">
        {props.sections.map((section, index) => (
          <article key={index}>
            <h2 className="text-xl sm:text-2xl font-semibold dark:text-white mb-4">
              {index + 1}. {section.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
            {section.list && section.list.length > 0 && (
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4 mt-4">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
            {section.note && (
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              <i>{section.note}</i>
            </p>
            )}
          </article>
        ))}

        {props.contactEmail && (
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold dark:text-white mb-4">
              {props.sections.length + 1}. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have questions, concerns, or requests related to your privacy or this Privacy Policy, please do not hesitate to contact us. The developer responsible for Spotter AI will attend to your inquiry promptly.
              <br />
              Contact address:               <a
                href={`mailto:${props.contactEmail}`}
                className="text-emerald hover:text-primary transition-colors underline"
              >
                {props.contactEmail}
              </a>
              <br />
              You can also use this email to exercise your data protection rights or for any communication regarding your personal data. We will address all inquiries as quickly as possible and always within legal timeframes.
            </p>
          </article>
        )}
        <article>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            <i>This Privacy Policy has been drafted clearly and in accordance with legal and App Store requirements to ensure you know how your data is handled when using Spotter AI. We strive to protect your information and respect your privacy at all times.</i>
          </p>
        </article>
      </div>
    </section>
  );
}

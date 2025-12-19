type PolicySection = {
  title: string;
  content: string;
  list?: string[];
};

type PrivacyTermsProps = {
  title?: string;
  lastUpdated?: string;
  sections: PolicySection[];
  contactEmail?: string;
};

export default function PrivacyTerms({
  title = "Privacy Policy",
  lastUpdated = "December 2024",
  sections,
  contactEmail,
}: PrivacyTermsProps) {
  return (
    <section className="my-16 mx-4 sm:mx-8 md:mx-16 lg:mx-24 max-w-4xl lg:max-w-5xl">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-4xl md:text-5xl dark:text-white mb-8">
        {title}
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8 font-light">
        Last updated: {lastUpdated}
      </p>

      <div className="space-y-8">
        {sections.map((section, index) => (
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
          </article>
        ))}

        {contactEmail && (
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold dark:text-white mb-4">
              {sections.length + 1}. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about this policy, please contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-emerald hover:text-primary transition-colors underline"
              >
                {contactEmail}
              </a>
            </p>
          </article>
        )}
      </div>
    </section>
  );
}

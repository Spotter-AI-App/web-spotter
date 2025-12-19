import PrivacyTerms from "components/PrivacyTerms";

const policySections = [
  {
    title: "Introduction",
    content:
      "Welcome to Spotter AI. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.",
  },
  {
    title: "Information We Collect",
    content: "We may collect information about you in a variety of ways, including:",
    list: [
      "Personal data you voluntarily provide to us",
      "Usage data and analytics",
      "Device and browser information",
      "Cookies and tracking technologies",
    ],
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to:",
    list: [
      "Provide, operate, and maintain our services",
      "Improve, personalize, and expand our services",
      "Communicate with you about updates and offers",
      "Ensure the security of our platform",
    ],
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Your Rights",
    content: "Depending on your location, you may have the following rights:",
    list: [
      "Access to your personal data",
      "Correction of inaccurate data",
      "Deletion of your data",
      "Data portability",
      "Opt-out of marketing communications",
    ],
  },
];

export default function PolicyPage() {
  return (
    <PrivacyTerms
      title="Privacy Policy"
      lastUpdated="December 2024"
      sections={policySections}
      contactEmail="privacy@spotterai.com"
    />
  );
}

import PrivacyTerms from "components/PrivacyTerms";

const policySections = [
  {
    title: "What data we collect",
    content: "We only collect the personal data necessary to operate the App and provide you with a personalized experience.  This data includes:",
    list: [
      "Contact Information: Name, email address, and phone number.",
      "Health and Physical Data: Height, weight, age, gender, and training objectives (e.g., fitness goals you wish to achieve)",
      "Identifiers: An internal user ID assigned to your account and your device identifier (e.g., Expo push token for notifications).",
      "User Content: Photos (e.g., meal or profile photos you choose to upload), posts, and comments you make in the social sections of the App.",
      "Purchase History: Information about your in-app purchases, such as subscriptions or transactions made to access premium features.",
    ],
    note: "Note: We do not collect geographic location data or any data from your device's environment. We also do not obtain data that you have not provided directly or generated through your use of the App."
  },
  {
    title: "How We Use Your Data",
    content: "We use your personal data exclusively for the following legitimate purposes within the context of the App:",
    list: [
      "Providing the Service: We use your contact information to create and manage your account, allow you to log in, and communicate relevant App information. For example, we use your email or phone to verify your identity (e.g., sending SMS verification codes) and for user assistance if necessary.",
      "Personalization and App Functionality: We use your health and physical data to personalize your training experience, adjusting recommendations or plans according to your profile.",
      "Content and Community: Content you generate (photos, posts, comments) is used for the App's social functions. Your posts and comments may be seen by other users within Spotter IA, fostering community interaction. You control what information you publish publicly.",
      "Push Notifications: We use your device identifier to send non-advertising notifications related to the service, such as goal reminders or activity updates. You can disable these at any time in your device settings.",
      "Subscription and Purchase Management: We use purchase history to manage access to premium features and verify recurring payments.",
      "Service Improvements: We may analyze how the App is used in an aggregated and anonymous way to improve our service and fix errors.",
    ],
    note:"Important: We do not use your personal data for third-party marketing or behavioral advertising. We do not share your data with advertisers or sell personal information to third parties."
  },
  {
    title: "Use of Third-Party Services",
    content:
      "We rely on trusted third-party providers who act as data processors and only use your data under our instructions:",
    list:[
        "Supabase: Used for secure database storage (PostgreSQL) and file storage (e.g., photos you upload) in the cloud. They maintain high security and confidentiality standards.",
        "Twilio: Used exclusively for sending SMS verification messages. They do not retain your number for other purposes or marketing.",
        "Firebase (Google Firebase Cloud Messaging): Used on Android devices to deliver push notifications. Firebase does not use this information for advertising in our implementation.",
        "Apple/Expo Push Notifications: On iOS devices, notifications are sent through Apple (APNs) and the Expo platform. They only use the token for the technical delivery of messages.",
    ],
    note:"We do not share your personal data with any other services, social networks, or advertisers for commercial purposes."
    },
  {
    title: "Data Retention and Deletion",
    content: "We retain your data only as long as necessary to provide the service or as required by law.",
    list: [
      "Active Account: Data is kept while you maintain an active account to operate the App.",
      "Deleted Account: If you delete your account, we permanently delete all your personal data. Spotter IA provides a simple 'Delete Account' mechanism within the App. This action is irreversible.",
    ],
  },
  {
    title:"Your Rights",
    content:"As a user, you have the right to:",
    list:[
        "Access: Review the information in your account or request an electronic copy.",
        "Rectification: Correct or update inaccurate data directly in the App.",
        "Erasure: Delete your account and all associated data at any time.",
        "Object/Limit Processing: Request restrictions on how your data is treated in certain circumstances.",
        "Portability: Request your data in a structured, machine-readable format.",
        "Withdraw Consent: Withdraw any previously given consent at any time.",
        "Complain: File a claim with a control authority, such as the Spanish Data Protection Agency (AEPD).",
    ],
    note:"To exercise these rights, you can use the tools in the App or contact us via email."
  },
  {
    title:"Security and Minors",
    content: "We take your security seriously and have specific policies regarding minors:",
    list:[
        "Security: We use HTTPS/TLS encryption for communication and encryption at rest for stored data.",
        "Minors: The App is directed exclusively at users over 14 years of age. We do not knowingly collect data from children under 14.",
    ],
  },
];

export default function PrivacyTermsPage() {
  return (
    <PrivacyTerms
      title="Privacy Policy"
      subtitle= "Spotter IA is committed to transparency in the collection and use of your personal data, complying with applicable data protection regulations (e.g., the GDPR in Europe) and Apple App Store privacy guidelines. This Privacy Policy describes what information we collect, how we use it, with whom we share it, and what rights you have regarding your data. The Spotter AI application (hereinafter, 'the App') is offered by an independent developer residing in Madrid, Spain (without a corporate entity), who acts as the data controller for your processing. By using the App, you accept the terms of this Privacy Policy."
      lastUpdated="December 2025"
      sections={policySections}
      contactEmail="alfonsomayoral29@gmail.com"
    />
  );
}

import Hero from "components/Hero";
import Download from "components/Download";
import IPhoneCarousel from "components/IPhoneCarousel";
import LivePulseBackground from "components/LivePulseBackground";
import FeatureSections from "components/FeatureSections";
import { LOGO_LIME } from "config/colors";

export default function Page() {
  return (
    <>
      <Hero />
      {/* Phone Carousel with Pulse Background in same div to ensure centering */}
      <div className="relative">
        <LivePulseBackground colorHex={LOGO_LIME} />
        <IPhoneCarousel />
      </div>
      <FeatureSections />
      <Download />
    </>
  );
}


import Hero from "components/Hero";
import Section from "components/Section";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Download from "components/Download";
import IPhoneCarousel from "components/IPhoneCarousel";
import LivePulseBackground from "components/LivePulseBackground";
import { LOGO_LIME } from "config/colors";

export default function Page() {
  return (
    <>
      <Hero />
      <div className="relative">
        <LivePulseBackground colorHex={LOGO_LIME} />
        <IPhoneCarousel />
      </div>
      <Download />
    </>
  );
}

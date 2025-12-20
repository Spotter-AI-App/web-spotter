import Hero from "components/Hero";
import Section from "components/Section";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Download from "components/Download";
import IPhoneCarousel from "components/IPhoneCarousel";

export default function Page() {
  return (
    <>
      <Hero />
      <IPhoneCarousel />
      <Download />
    </>
  );
}

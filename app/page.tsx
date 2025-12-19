import Hero from "components/Hero";
import Section from "components/Section";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Download from "components/Download";

export default function Page() {
  return (
    <>
      <Hero />
      <Section
        leftHalf={
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
              Include here screenshots
            </h2> 
          </>
        }
        rightHalf={
          <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
        }
      />
{/*       <Customers />
      <Section
        leftHalf={<Accordion />}
        rightHalf={
          <div className="flex flex-col justify-end">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
              Highlight the key features
            </h2>
            <p className="text-xl font-light">
              Talk about some of the key features of your app that you want to highlight. Use the beautiful accordion
              to highlight the key features of your app.
            </p>
          </div>
        }
      /> */}
      <Download />
    </>
  );
}

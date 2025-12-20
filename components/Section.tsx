import Image from "next/image";
import HighlightedText from "./HighlightedText";
import ImageCarousel, { CarouselSlide } from "./ImageCarousel";

interface SectionProps {
  /** Single image source (for backwards compatibility) */
  imageSrc?: string;
  /** Single image alt (for backwards compatibility) */
  imageAlt?: string;
  /** Array of images for carousel */
  images?: CarouselSlide[];
  title: string;
  description: string;
  /** If true, image appears on the right instead of the left */
  reversed?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  imageSrc, 
  imageAlt = "",
  images,
  title, 
  description,
  reversed = false 
}) => {
  // Convert single image to slides array, or use images prop
  const slides: CarouselSlide[] = images || (imageSrc ? [{ src: imageSrc, alt: imageAlt }] : []);
  
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Side */}
        <div className={`w-full md:w-1/2 flex justify-center ${reversed ? 'md:order-2' : 'md:order-1'} order-1`}>
          <div className="w-full max-w-[250px]">
            <ImageCarousel 
              slides={slides}
              showControls={slides.length > 1}
              showDots={slides.length > 1}
              aspectRatio="iphone"
            />
          </div>
        </div>
        
        {/* Text Side */}
        <div className={`w-full md:w-1/2 ${reversed ? 'md:order-1' : 'md:order-2'} order-2`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            <HighlightedText text={title} />
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            <HighlightedText text={description} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;



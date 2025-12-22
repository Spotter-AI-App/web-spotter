"use client";

import ImageCarousel, { CarouselSlide } from "./ImageCarousel";

interface IPhoneCarouselProps {
  slides?: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const defaultSlides: CarouselSlide[] = [
  { src: "/carousel/workout/workout1.jpeg", alt: "Screenshot Workout Spotter AI" },
  { src: "/carousel/nutrition/nutrition1.jpeg", alt: "Screenshot Nutrition Spotter AI" },
  { src: "/carousel/social/social2.jpeg", alt: "Screenshot Social Spotter AI" },
  { src: "/carousel/streaks/streaks1.jpeg", alt: "Screenshot Streaks Spotter AI" },
  { src: "/carousel/workout/workout2.jpeg", alt: "Screenshot Workout Spotter AI" },
  { src: "/carousel/social/social4.jpeg", alt: "Screenshot Social Spotter AI" },
  { src: "/carousel/streaks/streaks3.jpeg", alt: "Screenshot Streaks Spotter AI" },
];

const IPhoneCarousel = ({
  slides = defaultSlides,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = "",
}: IPhoneCarouselProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* iPhone Frame */}
      <div className="relative">
        {/* iPhone outer frame */}
        <div
          className="relative rounded-[50px] p-3 shadow-2xl"
          style={{
            background: "#383838ff",
            boxShadow: `
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 25px 50px -12px rgba(0, 0, 0, 0.8),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 60px #10B98126
            `,
          }}
        >
          {/* iPhone inner bezel */}
          <div
            className="relative rounded-[38px] overflow-hidden"
            style={{
              width: "280px",
              height: "580px",
              background: "#000",
            }}
          >
            {/* Dynamic Island / Notch */}
{/*             <div className="absolute top left-1/2 -translate-x-1/2 z-20">
              <div
                className="rounded-full bg-black flex items-center justify-center"
                style={{
                  width: "80px",
                  height: "26px",
                  boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.8)",
                }}
              >
            
                <div
                  className="w-3 h-3 rounded-full mr-6"
                  style={{
                    background: "radial-gradient(circle, #1a3d5c 0%, #0a1929 70%)",
                    boxShadow: "inset 0 0 2px rgba(0, 230, 118, 0.3)",
                  }}
                />
              </div>
            </div> */}

            {/* Screen content - Reusing ImageCarousel */}
            <div className="absolute inset-0 overflow-hidden rounded-[38px]">
              <ImageCarousel 
                slides={slides}
                autoPlay={autoPlay}
                autoPlayInterval={autoPlayInterval}
                showControls={true}
                showDots={false}
                className="h-full rounded-none"
              />
              
              {/* Screen reflection overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[38px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Home indicator bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
              <div
                className="rounded-full"
                style={{
                  width: "100px",
                  height: "4px",
                  background: "rgba(255, 255, 255, 0.3)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Glow effect behind phone */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-50"
          style={{
            background: "radial-gradient(circle at center, #10B9814D 0%, transparent 70%)",
            transform: "scale(1.2)",
          }}
        />

        {/* Side buttons - Volume */}
        <div
          className="absolute left-0 top-28 w-1 h-8 rounded-l-md"
          style={{ background: "#8a8a8a" }}
        />
        <div
          className="absolute left-0 top-40 w-1 h-12 rounded-l-md"
          style={{ background: "#8a8a8a" }}
        />
        <div
          className="absolute left-0 top-56 w-1 h-12 rounded-l-md"
          style={{ background: "#8a8a8a" }}
        />

        {/* Side button - Power */}
        <div
          className="absolute right-0 top-36 w-1 h-16 rounded-r-md"
          style={{ background: "#8a8a8a" }}
        />
      </div>
    </div>
  );
};

export default IPhoneCarousel;

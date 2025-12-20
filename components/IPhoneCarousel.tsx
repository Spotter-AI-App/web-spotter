"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselSlide {
  src: string;
  alt: string;
}

interface IPhoneCarouselProps {
  slides?: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const defaultSlides: CarouselSlide[] = [
  { src: "/carousel/screen-1.png", alt: "App Screenshot 1" },
  { src: "/carousel/screen-2.png", alt: "App Screenshot 2" },
  { src: "/carousel/screen-3.png", alt: "App Screenshot 3" },
];

const IPhoneCarousel = ({
  slides = defaultSlides,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = "",
}: IPhoneCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, slides.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, slides.length, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* iPhone Frame */}
      <div className="relative">
        {/* iPhone outer frame */}
        <div
          className="relative rounded-[50px] p-3 shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)",
            boxShadow: `
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 25px 50px -12px rgba(0, 0, 0, 0.8),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 60px rgba(0, 230, 118, 0.15)
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
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
              <div
                className="rounded-full bg-black flex items-center justify-center"
                style={{
                  width: "100px",
                  height: "28px",
                  boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                {/* Camera lens */}
                <div
                  className="w-3 h-3 rounded-full mr-6"
                  style={{
                    background: "radial-gradient(circle, #1a3d5c 0%, #0a1929 70%)",
                    boxShadow: "inset 0 0 2px rgba(0, 230, 118, 0.3)",
                  }}
                />
              </div>
            </div>

            {/* Screen content - Carousel */}
            <div className="absolute inset-0 overflow-hidden rounded-[38px]">
              {/* Carousel wrapper */}
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Slider controls */}
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-white/70 group-hover:text-white transition-colors drop-shadow-lg"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-white/70 group-hover:text-white transition-colors drop-shadow-lg"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>

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
            background: "radial-gradient(circle at center, rgba(0, 230, 118, 0.3) 0%, transparent 70%)",
            transform: "scale(1.2)",
          }}
        />

        {/* Side buttons - Volume */}
        <div
          className="absolute left-0 top-28 w-1 h-8 rounded-l-md"
          style={{ background: "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)" }}
        />
        <div
          className="absolute left-0 top-40 w-1 h-12 rounded-l-md"
          style={{ background: "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)" }}
        />
        <div
          className="absolute left-0 top-56 w-1 h-12 rounded-l-md"
          style={{ background: "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)" }}
        />

        {/* Side button - Power */}
        <div
          className="absolute right-0 top-36 w-1 h-16 rounded-r-md"
          style={{ background: "linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)" }}
        />
      </div>
    </div>
  );
};

export default IPhoneCarousel;

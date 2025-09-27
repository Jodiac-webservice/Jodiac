import React, { useState, useEffect } from "react";
import { assets } from "../assets";

const HeroImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7 } = assets;
  const heroImages = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleExplore = () => {
    const token = localStorage?.getItem?.("token");
    if (token) {
      const showcaseElement = document.getElementById("jodiac-showcase");
      if (showcaseElement) showcaseElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Navigate to signup");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end z-30 px-6 sm:px-10 md:px-16 pb-12 sm:pb-20 md:pb-28 max-w-screen-xl mx-auto">
        <div className="max-w-xl w-full">
          {/* Heading */}
          <h1
            className={`text-white font-black leading-tight mb-4 sm:mb-6 md:mb-8 transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              COSMIC
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-1 text-white/90">
              25 COLLECTION
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-white/80 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            Discover the extraordinary in our cosmic-inspired collection. Where
            art meets the infinite possibilities of space.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleExplore}
            className={`relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-white text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wide rounded-lg overflow-hidden group hover:scale-105 active:scale-95 shadow-lg transform transition-all duration-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="relative z-10">Explore Collection →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-lg" />
          </button>

          {/* Image Indicators */}
          <div className="flex space-x-2 mt-6 sm:mt-8">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

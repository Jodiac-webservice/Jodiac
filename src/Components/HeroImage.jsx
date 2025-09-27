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
    <div className="relative w-screen min-h-screen h-3/4 overflow-hidden right-8 md:right-42">
      {/* Background Images with slight blur and dark overlay */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px) brightness(0.6)",
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent animate-gradient-x z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center z-30 px-6 sm:px-12 md:px-20 lg:px-32">
        <h1
          className={`text-white font-extrabold leading-tight mb-4 sm:mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            COSMIC
          </span>
          <span className="block text-white/90 font-light text-2xl sm:text-3xl md:text-4xl mt-2">
            25 COLLECTION
          </span>
        </h1>

        <p
          className={`text-white/70 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          Explore cosmic-inspired designs that blend art, style, and infinite imagination. Let your wardrobe transcend the ordinary.
        </p>

        <button
          onClick={handleExplore}
          className={`relative px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-base sm:text-lg rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95`}
        >
          <span className="relative z-10">Explore Collection →</span>
          <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none" />
        </button>

        {/* Image Indicators */}
        <div className="flex space-x-3 mt-6">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center animate-bounce">
          <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

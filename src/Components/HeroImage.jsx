import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets';
import { motion } from 'framer-motion';

const HeroImage = () => {
  const navigate = useNavigate();
  
  const handleExplore = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const showcaseElement = document.getElementById('jodiac-showcase');
      if (showcaseElement) {
        showcaseElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="relative w-screen h-screen right-8 md:right-42 overflow-hidden bg-black">
      <img
        src={assets.Hero4}
        alt="Hero 4"
        className="absolute w-full h-full object-cover animate-artisticImage animation-delay-0"
      />
      <img
        src={assets.Hero3}
        alt="Hero 3"
        className="absolute w-full h-full object-cover animate-artisticImage animation-delay-1000"
      />
      <img
        src={assets.Hero2}
        alt="Hero 2"
        className="absolute w-full h-full object-cover animate-artisticImage animation-delay-2000"
      />
      <img
        src={assets.Hero1}
        alt="Hero 1"
        className="absolute w-full h-full object-cover animate-artisticImage animation-delay-3000"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-end text-left text-white z-30 px-6 sm:px-10 md:px-1 pb-14 sm:pb-20 md:pb-28 max-w-screen-xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-snug md:leading-tight drop-shadow-lg max-w-3xl"
        >
          COSMIC 25 COLLECTION
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplore}
          className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-white/90 text-black font-semibold shadow-lg hover:bg-white transition backdrop-blur-sm text-sm sm:text-base md:text-lg"
        >
          Explore Collection
        </motion.button>
      </div>
    </div>
  );
};

export default HeroImage;
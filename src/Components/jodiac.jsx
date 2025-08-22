import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets';

const products = [
  {
    title: 'Y2K OVERSIZED JACKET IN LIGHT BLUE',
    price: '$1,380.00 USD',
    image: assets.Hero1
  },
  {
    title: 'LE CITY MEDIUM BAG IN BLACK',
    price: '$2,850.00 USD',
    image: assets.Hero2
  },
  {
    title: 'LION CLUB T-SHIRT OVERSIZED IN BLACK/RED',
    price: '$850.00 USD',
    image: assets.Hero3
  },
  {
    title: 'CLASSIC BLACK HOODIE',
    price: '$990.00 USD',
    image: assets.Hero4
  },
];

const JodiacShowcase = () => {
  return (
    <div className="bg-white px-10 md:px-8 py-8">
      <div className="text-left text-2xl md:text-4xl font-extrabold mb-6 md:mb-10 tracking-wide">@The_Best_For_Us</div>
      <div className="flex overflow-x-auto no-scrollbar space-x-4 md:space-x-6 snap-x snap-mandatory">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] flex-shrink-0 bg-white shadow-lg overflow-hidden snap-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 sm:h-72 md:h-80 object-cover"
            />
            <div className="p-4">
              <div className="text-left font-semibold text-xs sm:text-sm md:text-base uppercase">
                {product.title}
              </div>
              <div className="text-left text-gray-700 mt-1 md:mt-2 text-sm md:text-base">
                {product.price}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JodiacShowcase;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BestForUs = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://jodiacxthreadorabackend.store/api/productdetails/getproduct'
        );
        // Take top 3 products
        setProducts(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/Productpage/${productId}`);
  };

  return (
    <div className="bg-white px-10 md:px-8 py-8">
      <div className="text-left text-2xl md:text-4xl font-extrabold mb-6 md:mb-10 tracking-wide">
        @The_Best_From_Us
      </div>
      <div className="flex overflow-x-auto no-scrollbar space-x-4 md:space-x-6 snap-x snap-mandatory">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            onClick={() => handleProductClick(product._id)}
            className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] flex-shrink-0 bg-white shadow-lg overflow-hidden snap-start cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-80 sm:h-72 md:h-80 object-cover"
            />
            <div className="p-4">
              <div className="text-left font-semibold text-xs sm:text-sm md:text-base uppercase">
                {product.name}
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

export default BestForUs;

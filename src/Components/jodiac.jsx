import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Star, Heart } from "lucide-react";

const BestForUs = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://jodiacxthreadorabackend.store/api/productdetails/getproduct"
        );
        const products = response.data;

        // Shuffle + pick 5
        const shuffled = [...products].sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, 5));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/Productpage/${productId}`);
  };

  return (
    <div className="bg-white px-6 md:px-8 py-8">
      <div className="text-left text-2xl md:text-4xl font-extrabold mb-6 md:mb-10 tracking-wide">
        @The_Best_From_Us
      </div>
      <div className="flex overflow-x-auto no-scrollbar space-x-4 md:space-x-6 snap-x snap-mandatory">
        {products.map((product, index) => {
          // ✅ Discounted price logic
          const finalPrice =
            product.discount && product.discount > 0
              ? product.price - (product.price * product.discount) / 100
              : product.price;

          return (
            <motion.div
              key={product._id}
              onClick={() => handleProductClick(product._id)}
              className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden snap-start cursor-pointer group border"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Product Image */}
              <div className="relative w-full h-60 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-red-100 text-gray-600 hover:text-red-500">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2">
                {/* Name */}
                <div className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1">
                  {product.name}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      className={`w-4 h-4 ${
                        num <= Math.round(product.rating || 4)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-gray-500">
                    {product.rating?.toFixed(1) || "4.0"}
                  </span>
                </div>

                {/* Price Section */}
                {/* Price Section */}
<div className="flex items-baseline gap-2">
  {product.discount ? (
    <>
      {/* Final Price */}
      <span className="text-xl sm:text-2xl font-bold text-gray-900">
        ₹
        {(
          product.price - (product.price * product.discount) / 100
        ).toLocaleString()}
      </span>

      {/* Original Price */}
      <span className="text-sm sm:text-base line-through text-gray-400">
        ₹{product.price.toLocaleString()}
      </span>

      {/* Discount Badge */}
      <span className="text-xs sm:text-sm font-bold bg-red-500 text-white px-2 py-1 rounded-lg">
        {product.discount}% OFF
      </span>
    </>
  ) : (
    <span className="text-xl sm:text-2xl font-bold text-gray-900">
      ₹{product.price.toLocaleString()}
    </span>
  )}
</div>

{/* Savings */}
{product.discount && (
  <div className="text-xs sm:text-sm font-medium text-green-600">
    You save ₹
    {((product.price * product.discount) / 100).toLocaleString()}
  </div>
)}
              </div>xl
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BestForUs;

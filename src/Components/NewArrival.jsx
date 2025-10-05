import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          'https://jodiacxthreadorabackend.store/api/productdetails/getproduct'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductData();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/Productpage/${productId}`);
  };

  return (
    <div
      id="newarrival-section"
      className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <h2 className="text-3xl sm:text-4xl text-left font-extrabold text-gray-900 mb-8 sm:mb-12">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => handleProductClick(product._id)}
            className="flex flex-col cursor-pointer group transition-transform hover:-translate-y-2 duration-300 text-left p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h3>

            <p className="text-gray-600 mt-1 line-clamp-2 text-sm">
              {product.description}
            </p>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-1">
              {product.category}
            </p>

            {/* Sizes */}
            <p className="text-sm text-gray-600 mt-1">
              Sizes: {product.size.join(', ')}
            </p>

            {/* Price Section */}
<div className="mt-2">
  {/* Label + Final Payable */}
  <div className="flex items-baseline space-x-1">
    <span className="text-sm font-medium text-gray-600">After Discount:</span>
    <span className="text-2xl sm:text-3xl font-extrabold text-green-700">
      ₹{(product.price - (product.price * product.discount) / 100).toFixed(0)}
    </span>
  </div>

  {/* Price + Old Price */}
  <div className="flex items-center space-x-2 mt-1">
    <span className="text-base font-semibold text-gray-900">
      ₹{product.price}
    </span>
    {product.oldprice && (
      <span className="text-sm line-through text-gray-500">
        ₹{product.oldprice}
      </span>
    )}
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;

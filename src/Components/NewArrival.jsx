import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/productdetails/getproduct');
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
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl sm:text-4xl text-left font-extrabold text-gray-900 mb-8 sm:mb-12">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => handleProductClick(product._id)}
            className="flex flex-col cursor-pointer group transition-transform hover:-translate-y-2 duration-300 text-left"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 sm:h-72 md:h-80 object-cover mb-4 shadow-lg"
            />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2">{product.description}</p>
            {product.status && (
              <span className="mt-1 text-sm text-red-500 font-medium">
                {product.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;

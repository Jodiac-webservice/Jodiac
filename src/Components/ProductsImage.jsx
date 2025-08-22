import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Heart } from "lucide-react";
import { useParams } from "react-router-dom";

const ProductsImage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`https://jodiacbackend.onrender.com/api/product/${id}`);
        setProduct(res.data.product);
      } catch (err) {
        setError("Something went wrong while fetching product details.",err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProductDetails();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product?.images?.length) return null;

  const handlePrev = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  const handleNext = () =>
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Main Image */}
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-96 object-cover transition-transform duration-300"
          style={{
            transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
            transformOrigin: "center center",
          }}
        />

        {/* Navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white shadow"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white shadow"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Like */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-2 right-2 rounded-full p-2 ${
            isLiked ? "bg-red-500 text-white" : "bg-white/70 text-gray-700"
          } shadow hover:scale-105 transition`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-3 space-x-3">
        <button
          onClick={() => setZoomLevel((z) => Math.max(1, z - 0.5))}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={() => setZoomLevel((z) => Math.min(3, z + 0.5))}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={() => setRotation((r) => r + 90)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          <RotateCw className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${
              index === currentImageIndex
                ? "border-indigo-500"
                : "border-transparent hover:border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsImage;

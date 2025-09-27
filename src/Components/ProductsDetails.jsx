import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Share2,
  Heart,
  ShoppingCart,
  Zap,
  Star,
  Plus,
  Minus,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import axios from "axios";
import ProductsImage from "./ProductsImage";

function ProductsDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(
          `https://jodiacxthreadorabackend.store/api/product/${id}`
        );
        const data = res.data.product;
        setProduct(data);

        setSelectedColor(data.color?.[0] || null);
        setSelectedSize(data.size?.[0] || null);
        setSelectedWeight(data.weight?.[0] || null);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProductDetails();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to add items to your cart.");
        return;
      }
      const res = await axios.post(
        "https://jodiacxthreadorabackend.store/api/Cart/addcart",
        {
          productId: id,
          quantity,
          color: selectedColor,
          size: selectedSize,
          weight: selectedWeight,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        alert("Item added to cart successfully!");
        setCartItems((prev) => [
          ...prev,
          {
            id,
            productName: product.name,
            productColor: selectedColor,
            productSize: selectedSize,
            productWeight: selectedWeight,
            productQuantity: quantity,
            productPrice: product.price,
          },
        ]);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleRedirect = () => {
    const selectedProductDetails = {
      productId: id,
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      weight: selectedWeight,
      quantity,
      price: product.price,
      discount: product.discount,
    };

    const existingProducts =
      JSON.parse(localStorage.getItem("selectedProduct")) || [];

    const updatedProducts = [...existingProducts, selectedProductDetails];

    localStorage.setItem("selectedProduct", JSON.stringify(updatedProducts));

    navigate(`/checkout`);
  };

  const SelectionButtons = ({
    title,
    options,
    selected,
    setSelected,
    icon,
    colorPreview = false,
  }) => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-base sm:text-lg font-bold text-gray-800">
          {title}
        </h3>
      </div>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        {options?.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(opt)}
            className={`relative px-4 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all ${
              selected === opt
                ? "bg-gradient-to-r from-[#14213d] to-[#010646] text-[#e5e5e5] shadow-lg scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 shadow"
            }`}
          >
            {colorPreview && title.includes("Color") && (
              <div
                className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: opt }}
              />
            )}
            <span className={colorPreview ? "ml-5 sm:ml-6" : ""}>{opt}</span>
            {selected === opt && (
              <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="w-14 h-14 sm:w-20 sm:h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              Loading Amazing Product
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Preparing the best experience for you...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div className="p-6 sm:p-10 text-center text-red-500">{error}</div>;
  if (!product) return <div className="p-6 sm:p-10 text-center">No product found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-6 sm:py-8 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 mb-6 sm:mb-8 border">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8 space-y-4 lg:space-y-0">
            <div className="flex-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-black to-[#14213d] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-bold">Premium Quality</span>
                </div>
                <div className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  ✓ In Stock
                </div>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 gradient-text leading-tight">
                {product.name}
              </h1>

              {/* Product Images */}
              <ProductsImage product={product} />

              {/* Rating */}
              <div className="flex items-center gap-2 sm:gap-4 mt-3 sm:mt-4 mb-3 sm:mb-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Star
                    key={num}
                    className={`w-4 h-4 sm:w-6 sm:h-6 ${
                      num <= Math.round(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm sm:text-xl font-bold sm:font-black text-gray-800">
                  {product.rating} / 5.0
                </span>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex space-x-2 sm:space-x-3">
              <button className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gray-100 hover:bg-indigo-100">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-indigo-600" />
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl ${
                  isLiked
                    ? "bg-red-100 text-red-500"
                    : "bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500"
                }`}
              >
                <Heart
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${isLiked ? "fill-current" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-r from-black via-[#14213d] to-[#e5e5e5] p-1 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
              <span className="text-2xl sm:text-4xl font-black text-gray-900">
                ₹{product.price.toLocaleString()}
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:space-x-3">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg">
                  Save {product.discount}%
                </div>
                <div className="text-green-600 font-bold text-sm sm:text-lg">
                  ₹{(product.oldprice - product.price).toLocaleString()} OFF
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-lg font-medium">
              {product.description}
            </p>
          </div>

          {/* Selections */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="space-y-5 sm:space-y-6 text-[#14213d]">
              <SelectionButtons
                title="Choose Your Color"
                options={product.color}
                selected={selectedColor}
                setSelected={setSelectedColor}
                colorPreview={true}
              />
              <SelectionButtons
                title="Select Perfect Size"
                options={product.size}
                selected={selectedSize}
                setSelected={setSelectedSize}
              />
            </div>
            <div className="space-y-5 sm:space-y-6 text-[#14213d]">
              <SelectionButtons
                title="Choose Weight Option"
                options={product.weight}
                selected={selectedWeight}
                setSelected={setSelectedWeight}
              />
              {/* Quantity */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">
                    Select Quantity
                  </h3>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-2 shadow">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gray-100 hover:bg-indigo-100"
                    >
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <div className="mx-4 sm:mx-6 text-xl sm:text-2xl font-black text-gray-800 min-w-[2.5rem] sm:min-w-[3rem] text-center">
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gray-100 hover:bg-indigo-100"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <div className="bg-indigo-50 text-indigo-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-base">
                    <span className="font-bold">
                      Total: ₹{(product.price * quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-black to-[#14213d] text-[#fca311] font-bold text-base sm:text-lg shadow-lg"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleRedirect}
              className="flex-1 flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold text-base sm:text-lg shadow-lg"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-green-800 mb-2">
              Cart Items ({cartItems.length})
            </h3>
            <div className="space-y-2 text-sm sm:text-base">
              {cartItems.slice(-3).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-green-700"
                >
                  <span>
                    {item.productName} - {item.productColor}, {item.productSize}
                  </span>
                  <span className="font-semibold">
                    ₹{(item.productPrice * item.productQuantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
                  Success!
                </h3>
                <p className="text-gray-600 text-sm sm:text-lg">
                  Your product has been added to cart successfully!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsDetails;

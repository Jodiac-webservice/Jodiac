import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
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
        const res = await axios.get(`http://68.183.86.102/api/product/${id}`);
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
        "http://68.183.86.102/api/Cart/addcart",
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

  // Get any previously stored products
  const existingProducts = JSON.parse(localStorage.getItem("selectedProduct")) || [];

  // Store as an array
  const updatedProducts = [...existingProducts, selectedProductDetails];

  localStorage.setItem("selectedProduct", JSON.stringify(updatedProducts));

  console.log("Selected product details saved:", updatedProducts);

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
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex gap-3 flex-wrap transition-all duration-300">
        {options?.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(opt)}
            className={`group relative px-5 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
              selected === opt
                ? "bg-gradient-to-r from-[#14213d] to-[#010646] text-[#e5e5e5] shadow-2xl shadow-indigo-300/50 scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-xl"
            }`}
          >
            {colorPreview && title.includes("Color") && (
              <div
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: opt }}
              />
            )}
            <span className={colorPreview ? "ml-6" : ""}>{opt}</span>
            {selected === opt && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
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
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Loading Amazing Product
            </h3>
            <p className="text-gray-600">
              Preparing the best experience for you...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;
  if (!product) return <div className="p-10 text-center">No product found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-8 border relative overflow-hidden">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 space-y-4 lg:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-black to-[#14213d] text-white px-4 py-2 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-bold">Premium Quality</span>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ In Stock
                  </div>
                </div>
                <h1 className="text-5xl font-black mb-4 gradient-text leading-tight">
                  {product.name}
                </h1>
                <ProductsImage product={product} />
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      className={`w-6 h-6 ${
                        num <= Math.round(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xl font-black text-gray-800">
                    {product.rating} / 5.0
                  </span>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex space-x-3">
                <button className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-100 hover:bg-indigo-100">
                  <Share2 className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
                </button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`group w-14 h-14 flex items-center justify-center rounded-2xl transition-all ${
                    isLiked
                      ? "bg-red-100 text-red-500"
                      : "bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500"
                  }`}
                >
                  <Heart
                    className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`}
                  />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-black via-[#14213d] to-[#e5e5e5] p-1 rounded-3xl mb-8">
              <div className="bg-white rounded-3xl p-6 flex flex-wrap items-center justify-between">
                <span className="text-4xl font-black text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-2xl font-bold text-lg">
                    Save {product.discount}%
                  </div>
                  <div className="text-green-600 font-bold text-lg">
                    ₹{(product.oldprice - product.price).toLocaleString()} OFF
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                {product.description}
              </p>
            </div>

            {/* Selection */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6 text-[#14213d]">
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
              <div className="space-y-6 text-[#14213d]">
                <SelectionButtons
                  title="Choose Weight Option"
                  options={product.weight}
                  selected={selectedWeight}
                  setSelected={setSelectedWeight}
                />
                {/* Quantity */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Plus className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-bold text-gray-800">
                      Select Quantity
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-white border-2 border-gray-200 rounded-2xl p-2 shadow-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-indigo-100"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <div className="mx-6 text-2xl font-black text-gray-800 min-w-[3rem] text-center">
                        {quantity}
                      </div>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-indigo-100"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="bg-indigo-50 text-indigo-700 px-4 py-3 rounded-2xl">
                      <span className="font-bold">
                        Total: ₹{(product.price * quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 group flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-black to-[#14213d] text-[#fca311] font-bold text-lg shadow-xl"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={handleRedirect}
                className="flex-1 group flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold text-lg shadow-xl"
              >
                <Zap className="w-6 h-6" />
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-2">
              Cart Items ({cartItems.length})
            </h3>
            <div className="space-y-2">
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Success!
                </h3>
                <p className="text-gray-600 text-lg">
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

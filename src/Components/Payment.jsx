import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Banknote } from "lucide-react";

export default function Payment({ onPaymentSuccess }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate();

  // Load selected products from localStorage
  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("selectedProduct"));
    if (storedOrder) {
      setOrderData(storedOrder);
    }
  }, []);

  // Calculate totals
  const subtotal = orderData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalDiscount = orderData.reduce(
    (acc, item) =>
      acc + (item.price * item.quantity * (item.discount || 0)) / 100,
    0
  );
  const finalTotal = subtotal - totalDiscount;

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (!paymentMethod) {
        setMessage("⚠️ Please select a payment method.");
        setLoading(false);
        return;
      }

      // If UPI or Card → show "working on it"
      if (paymentMethod === "upi" || paymentMethod === "card") {
        setMessage("⚠️ We are working on this method, please choose Cash on Delivery instead.");
        setLoading(false);
        return;
      }

      // If COD → proceed and save details
      if (paymentMethod === "cod") {
        setTimeout(() => {
          setLoading(false);
          setMessage("✅ Cash on Delivery selected successfully!");
          navigate("/review");
          localStorage.setItem(
            "paymentDetails",
            JSON.stringify({
              method: "Cash on Delivery",
              totalAmount: finalTotal,
              status: "success",
            })
          );
          if (onPaymentSuccess) {
            onPaymentSuccess();
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Left Section - Order Summary */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white flex flex-col justify-center items-center p-12"
      >
        <h1 className="text-4xl font-bold mb-4">Checkout Summary</h1>
        <p className="text-lg opacity-90 mb-6">
          Review your order before payment
        </p>

        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md max-h-[300px] overflow-y-auto">
          {orderData.length > 0 ? (
            <>
              {orderData.map((item, idx) => {
                const itemTotal =
                  item.price * item.quantity -
                  (item.price * item.quantity * (item.discount || 0)) / 100;

                return (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-white/30 py-2"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm opacity-80">
                        Qty: {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                    <p className="font-bold">₹{itemTotal.toFixed(2)}</p>
                  </div>
                );
              })}

              {/* Totals */}
              <div className="mt-4 space-y-1 text-lg">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span>-₹{totalDiscount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl">
                  <span>Total:</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-200">No product selected.</p>
          )}
        </div>
      </motion.div>

      {/* Right Section - Payment Form */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 flex justify-center items-center p-8"
      >
        <form
          onSubmit={handlePaymentSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Select Payment Method
          </h2>

          {/* UPI Option */}
          <div className="border p-4 rounded-lg flex flex-col space-y-3 mb-4 hover:shadow-md transition">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
                className="h-5 w-5 accent-yellow-600"
              />
              <Wallet className="text-yellow-600" />
              <span className="text-gray-700">UPI</span>
            </label>
            {paymentMethod === "upi" && (
              <input
                type="text"
                placeholder="Enter your UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-yellow-600 outline-none"
              />
            )}
          </div>

          {/* Cash on Delivery */}
          <div className="border p-4 rounded-lg flex items-center space-x-3 mb-4 hover:shadow-md transition">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="h-5 w-5 accent-yellow-600"
            />
            <Banknote className="text-yellow-600" />
            <span className="text-gray-700">Cash on Delivery</span>
          </div>

          {/* Card Option */}
          <div className="border p-4 rounded-lg flex items-center space-x-3 mb-6 hover:shadow-md transition">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              className="h-5 w-5 accent-yellow-600"
            />
            <CreditCard className="text-yellow-600" />
            <span className="text-gray-700">Credit / Debit Card</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            {loading ? "Processing..." : "Continue to Review"}
          </button>

          {message && (
            <p
              className={`mt-4 text-center font-medium ${
                message.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}

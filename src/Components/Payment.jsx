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
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    phone: "",
    streetAddress: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId") || "test-user-id";
  console.log("User ID:", userId);
  console.log("Shipping Address:", shippingAddress);



  // Load selected products and shipping address
  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("selectedProduct")) || [];
    setOrderData(storedOrder);

    const storedAddress = JSON.parse(localStorage.getItem("shippingAddress"));
    if (storedAddress) setShippingAddress(storedAddress);
  }, []);

  // Calculate totals
  const subtotal = orderData.reduce((acc, item) => acc + item.price * item.quantity, 0);
const totalDiscount = orderData.reduce(
  (acc, item) => acc + ((item.price * item.quantity * (item.discount || 0)) / 100),
  0
);
const finalTotal = subtotal - totalDiscount;
console.log
// Prevent sending invalid amount
if (!finalTotal || finalTotal <= 0) {
  console.warn("Final total is invalid:", finalTotal);
}


  // Load Razorpay SDK
  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (document.getElementById("razorpay-sdk")) return resolve(true);
      const script = document.createElement("script");
      script.id = "razorpay-sdk";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const openRazorpay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Jodiac",
      description: "Order Payment",
      order_id: order.razorpayOrderId,
      handler: async (response) => {
        try {
          const verifyRes = await fetch("https://jodiacxthreadorabackend.store/api/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              orderData,
              shippingAddress,
              userId: localStorage.getItem("userId"),
              totalAmount: finalTotal,
              paymentMethod: paymentMethod === "upi" ? "UPI" : paymentMethod === "card" ? "Card" : "Other",
            }),
          }); 

          const data = await verifyRes.json();
          if (data.success) {
            localStorage.setItem(
              "paymentDetails",
              JSON.stringify({ method: paymentMethod, totalAmount: finalTotal, status: "success" })
            );
            setMessage("✅ Payment successful!");
            if (onPaymentSuccess) onPaymentSuccess();
            navigate("/review");
          } else {
            setMessage("❌ Payment verification failed.");
          }
        } catch (err) {
          console.error(err);
          setMessage("❌ Error verifying payment.");
        }
      },
      theme: { color: "#f59e0b" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePaymentSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  // Recalculate totals here
  const subtotal = orderData.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalDiscount = orderData.reduce(
    (acc, item) => acc + ((item.price * item.quantity * (item.discount || 0)) / 100),
    0
  );
  const finalTotal = subtotal - totalDiscount;

  if (!finalTotal || finalTotal <= 0) {
    setMessage("⚠️ Invalid order total.");
    setLoading(false);
    return;
  }

  try {
    if (!paymentMethod) {
      setMessage("⚠️ Please select a payment method.");
      setLoading(false);
      return;
    }

    if (paymentMethod === "cod") {
      setTimeout(() => {
        setLoading(false);
        setMessage("✅ Cash on Delivery selected successfully!");
        localStorage.setItem(
          "paymentDetails",
          JSON.stringify({ method: "Cash on Delivery", totalAmount: finalTotal, status: "success" })
        );
        if (onPaymentSuccess) onPaymentSuccess();
        navigate("/review");
      }, 500);
      return;
    }

    if (paymentMethod === "upi" && !upiId.trim()) {
      setMessage("⚠️ Please enter your UPI ID.");
      setLoading(false);
      return;
    }

    // Validate shipping address
    for (const key in shippingAddress) {
      if (!shippingAddress[key]) {
        setMessage(`⚠️ Please fill your ${key}.`);
        setLoading(false);
        return;
      }
    }

    const isRazorpayLoaded = await loadRazorpayScript();
    if (!isRazorpayLoaded) {
      setMessage("❌ Failed to load Razorpay SDK.");
      setLoading(false);
      return;
    }

    const res = await fetch("https://jodiacxthreadorabackend.store/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: finalTotal * 100 }), // send in paise
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      setMessage("❌ Failed to create order.");
      setLoading(false);
      return;
    }

    openRazorpay({ ...data, finalTotal }); // pass finalTotal explicitly
  } catch (err) {
    console.error(err);
    setMessage("❌ Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Order Summary */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white flex flex-col justify-center items-center p-12"
      >
        <h1 className="text-4xl font-bold mb-4">Checkout Summary</h1>
        <p className="text-lg opacity-90 mb-6">Review your order before payment</p>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md max-h-[300px] overflow-y-auto">
          {orderData.length > 0 ? (
            <>
              {orderData.map((item, idx) => {
                const itemTotal =
                  item.price * item.quantity - (item.price * item.quantity * (item.discount || 0)) / 100;
                return (
                  <div key={idx} className="flex justify-between items-center border-b border-white/30 py-2">
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

      {/* Payment Form */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 flex justify-center items-center p-8"
      >
        <form onSubmit={handlePaymentSubmit} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Select Payment Method</h2>

          {/* UPI */}
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

          {/* COD */}
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

          {/* Card */}
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
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-600 hover:bg-yellow-700"
            }`}
          >
            {loading ? "Processing..." : "Continue to Pay"}
          </button>

          {message && (
            <p className={`mt-4 text-center font-medium ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}

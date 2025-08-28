import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const payment = JSON.parse(localStorage.getItem("paymentDetails"));
    const products = JSON.parse(localStorage.getItem("selectedProduct"));
    const address = JSON.parse(localStorage.getItem("selectedAddress"));

    if (payment) setPaymentDetails(payment);
    if (products) setSelectedProduct(products);
    if (address) setSelectedAddress(address);
  }, []);

  const handleConfirmOrder = async () => {
    if (!paymentDetails || !selectedProduct || !selectedAddress) {
      setMessage("⚠️ Missing order details.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const payload = {
        orderItems: selectedProduct.map((item) => ({
          productId: item.productId,
          productName: item.name,
          quantity: item.quantity,
          price: item.price,
          color: item.color,
          size: item.size
        })),
        shippingAddress: {
          name: selectedAddress.name,
          street: selectedAddress.street,
          city: selectedAddress.city,
          state: selectedAddress.state,
          phone: selectedAddress.phone,
          Landmark: selectedAddress.landmark,
          pincode: selectedAddress.pincode,
          streetAddress: selectedAddress.streetAddress,
        },
        paymentMethod: paymentDetails.method,
        totalAmount: paymentDetails.totalAmount,
      };

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://jodiacbackend.onrender.com/api/Orders/createOrders",
        payload,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Order Response:", res.data);

      // Clear cart
      localStorage.removeItem("selectedProduct");
      localStorage.removeItem("paymentDetails");
      localStorage.removeItem("selectedAddress");

      // Show thank you popup
      setShowPopup(true);

    } catch (err) {
      console.error("Error placing order:", err);
      setMessage("❌ Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Review & Confirm
      </h1>

      <div className="grid gap-6 w-full max-w-3xl">
        {/* --- Address Card --- */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Delivery Address
          </h2>
          {selectedAddress ? (
            <div className="text-gray-600">
              <p>{selectedAddress.name}</p>
              <p>{selectedAddress.street}, {selectedAddress.city}</p>
              <p>{selectedAddress.state} - {selectedAddress.landmark}</p>
              <p>Phone: {selectedAddress.phone}</p>
            </div>
          ) : (
            <p className="text-gray-400">No address selected.</p>
          )}
        </div>

        {/* --- Products Card --- */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Ordered Products
          </h2>
          {selectedProduct && selectedProduct.length > 0 ? (
            <div className="space-y-3">
              {selectedProduct.map((item, idx) => {
                const itemTotal =
                  item.price * item.quantity -
                  (item.price * item.quantity * (item.discount || 0)) / 100;

                return (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                    <p className="font-semibold">₹{itemTotal.toFixed(2)}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-400">No products selected.</p>
          )}
        </div>

        {/* --- Payment Card --- */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Payment Details
          </h2>
          {paymentDetails ? (
            <div className="text-gray-600">
              <p>
                <span className="font-medium">Method:</span>{" "}
                {paymentDetails.method}
              </p>
              <p>
                <span className="font-medium">Amount:</span> ₹
                {paymentDetails.totalAmount}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                {paymentDetails.status}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No payment method selected.</p>
          )}
        </div>

        {/* --- Confirm Button --- */}
        <button
          onClick={handleConfirmOrder}
          disabled={loading}
          className={`${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-600 hover:bg-yellow-700"
          } text-white font-semibold py-3 rounded-xl shadow-md transition`}
        >
          {loading ? "Placing Order..." : "Confirm Order"}
        </button>

        {message && (
          <p className="text-center font-medium mt-4">{message}</p>
        )}
      </div>

      {/* --- Success Popup --- */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-sm">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been placed successfully.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

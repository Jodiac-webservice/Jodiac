import React, { useState, useEffect } from "react";
import { assets } from "../assets";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusLoading, setStatusLoading] = useState({});

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Please sign in to view your orders.");
                    setIsLoading(false);
                    return;
                }
                const response = await fetch("https://jodiacxthreadorabackend.store/api/orders", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setOrders(data.orders);
                } else {
                    const errorData = await response.json();
                    setError(errorData.message || "Failed to fetch orders.");
                }
            } catch (err) {
                console.error("Error fetching orders:", err);
                setError("An error occurred while fetching your orders. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const fetchOrderStatus = async (orderId) => {
        setStatusLoading((prev) => ({ ...prev, [orderId]: true }));
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(
                `https://jodiacxthreadorabackend.store/api/Orders/status/${orderId}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setOrders(prevOrders => prevOrders.map(order => 
                    order._id === orderId ? { ...order, status: data.status, trackingDetails: data.trackingDetails } : order
                ));
            } else {
                const errorData = await response.json();
                console.error("Failed to fetch status:", errorData);
            }
        } catch (err) {
            console.error("Network error fetching status:", err);
        } finally {
            setStatusLoading((prev) => ({ ...prev, [orderId]: false }));
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />
            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
                        Your Orders 📦
                    </h1>
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-blue-500 mb-4"></div>
                            <p className="text-gray-600 font-medium">Loading your order history...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center bg-red-50 border border-red-200 text-red-700 font-semibold p-4 rounded-lg shadow-sm">
                            {error}
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="text-center text-gray-500 font-medium p-8 rounded-lg border-2 border-dashed border-gray-300">
                            <p className="text-xl mb-2">No orders found.</p>
                            <p className="text-sm">Time to start filling up your cart! 🛍️</p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {orders.map((order) => (
                                <motion.div
                                    key={order._id}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <div className="p-6 border-b border-gray-100">
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800">Order #{order._id.slice(-6)}</h2>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Placed on: {new Date(order.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </p>
                                            </div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                                                    order.status === "Delivered" || order.status === "Shipped"
                                                        ? "bg-green-100 text-green-700"
                                                        : order.status === "Cancelled"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-blue-100 text-blue-700"
                                                }`}
                                            >
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        {order.orderItems?.map((item, index) => (
                                            <div key={index} className="flex items-center space-x-4 border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                                                <img
                                                    src={item.productImage || assets.placeholderImage}
                                                    alt={item.productName}
                                                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                                                />
                                                <div className="flex-1">
                                                    <p className="font-semibold text-gray-800 text-base">{item.productName}</p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Quantity: {item.quantity} x ${item.price?.toFixed(2)}
                                                    </p>
                                                </div>
                                                <p className="font-bold text-gray-900 text-base">
                                                    ${(item.quantity * item.price)?.toFixed(2)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                                        <p className="text-xl font-extrabold text-gray-900">
                                            Total: ${order.totalAmount?.toFixed(2)}
                                        </p>
                                        <div className="flex flex-col items-end gap-2 text-right">
                                            <button
                                                onClick={() => fetchOrderStatus(order._id)}
                                                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-full text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={statusLoading[order._id]}
                                            >
                                                {statusLoading[order._id] ? "Checking..." : "Check Live Status"}
                                            </button>
                                            {order.trackingDetails && (
                                                <p className="text-xs text-gray-500 mt-2">
                                                    Status from Shiprocket: <span className="font-semibold text-gray-700">{order.trackingDetails?.current_status || 'N/A'}</span>
                                                    {order.trackingDetails?.awb_code && (
                                                        <span> (AWB: <span className="font-semibold text-gray-700">{order.trackingDetails.awb_code}</span>)</span>
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Orders;
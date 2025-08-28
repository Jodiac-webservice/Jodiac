import React, { useEffect, useState } from "react";

const ActiveOrders = ({ onBack }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/getActiveOrders")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setOrders(data.orders);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-[#e5decf]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#1b2d2a]">Active Orders</h2>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-[#4b5d52] text-white rounded-lg shadow hover:bg-[#3a4a42] transition"
        >
          Back
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-500">No active orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f2e8cf] text-left">
                <th className="p-3 border">Order ID</th>
                <th className="p-3 border">Customer</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Total</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id} className="hover:bg-[#fdfaf3]">
                  <td className="p-3 border">{order._id}</td>
                  <td className="p-3 border">{order.shippingAddress.name}</td>
                  <td className="p-3 border">{order.shippingAddress.phone}</td>
                  <td className="p-3 border">₹{order.totalAmount}</td>
                  <td className="p-3 border">{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ActiveOrders;

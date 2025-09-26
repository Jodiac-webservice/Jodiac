import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, ShoppingCart, Percent } from "lucide-react";

const DashboardCards = ({ onActiveOrdersClick }) => {
  const [activeOrders, setActiveOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [profitMargin, setProfitMargin] = useState(0);

  // 🔹 Fetch Active Orders
  useEffect(() => {
    fetch("http://68.183.86.102/api/getActiveOrders")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setActiveOrders(data.totalActiveOrders);
        }
      })
      .catch(err => console.error(err));
  }, []);

  // 🔹 Fetch Revenue
  useEffect(() => {
    fetch("http://68.183.86.102/api/getRevenue")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setRevenue(data.totalRevenue);
        }
      })
      .catch(err => console.error(err));
  }, []);

  // 🔹 Fetch Profit Margin
  useEffect(() => {
    fetch("http://68.183.86.102/api/getRevenueAndCost")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProfitMargin(data.profitMargin);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const cards = [
    { title: "Revenue", value: `₹${revenue.toLocaleString()}`, icon: <DollarSign className="w-6 h-6 text-[#4b5d52]" /> },
    { title: "Profit Margin", value: `${profitMargin}%`, icon: <TrendingUp className="w-6 h-6 text-[#4b5d52]" /> },
    { title: "Active Orders", value: activeOrders, icon: <ShoppingCart className="w-6 h-6 text-[#4b5d52]" />, isActive: true },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
          className="bg-[#f2e8cf] p-6 rounded-2xl border shadow-md cursor-pointer transition-all"
          onClick={() => {
            if (card.isActive) onActiveOrdersClick();
          }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#1b2d2a]">{card.title}</h2>
            {card.icon}
          </div>
          <p className="text-2xl font-bold mt-3 text-[#4b5d52]">{card.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardCards;

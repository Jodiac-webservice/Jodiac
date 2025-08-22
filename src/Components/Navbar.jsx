import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsLoading(false);
        return;
      }

      const response = await fetch("https://jodiacbackend.onrender.com/api/auth/getuser", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched user data:", data);
        setUserName(data.user.name);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchUserData();
}, []);


  const navItems = [
    { id: 1, label: "Home", path: "/home" },
    { id: 2, label: "New Arrival", path: "/newarrival" },
    { id: 3, label: "About Us", path: "/aboutus" },
    { id: 4, label: "Contact", path: "/contact" },
  ];

  const rightItems = [
    { 
      id: 5,
      label: userName ? `Hi, ${userName}` : "Account", 
      path: userName ? "/account" : "/signin" 
    },
    { id: 6, label: "Cart (0)", path: "/Cart" },
  ];
  const mobileMenuItems = [...navItems, ...rightItems];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md flex items-center justify-between px-6 md:px-16 py-4 border-b border-transparent shadow-sm"
    >
      {/* Left Section (Desktop) */}
      <div className="hidden md:flex space-x-6 text-black text-sm md:text-base font-medium tracking-wide">
        {navItems.map((item) => (
          <motion.button
            whileHover={{ scale: 1.1, color: "#6b7280" }}
            transition={{ type: "spring", stiffness: 300 }}
            key={`nav-${item.id}`}
            onClick={() => navigate(item.path)}
            className="bg-transparent text-black transition"
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <img
          src={assets.Logo}
          alt="logo"
          className="h-14 md:h-16 w-auto cursor-pointer"
          onClick={() => navigate("/home")}
        />
      </motion.div>
      <div className="hidden md:flex items-center space-x-6 text-black text-sm md:text-base font-medium tracking-wide">
        {rightItems.map((item) => (
          <motion.button
            whileHover={{ scale: 1.1, color: "#6b7280" }}
            transition={{ type: "spring", stiffness: 300 }}
            key={`right-${item.id}`}
            onClick={() => navigate(item.path)}
            className="bg-transparent text-black transition"
          >
            {item.label}
          </motion.button>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md shadow-md py-4 flex flex-col space-y-4 px-6 z-50"
          >
            {mobileMenuItems.map((item) => (
              <button
                key={`mobile-${item.id}`}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className="text-black text-base font-medium tracking-wide text-left"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
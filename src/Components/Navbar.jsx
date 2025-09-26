import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0); // New state for cart quantity
  const [isLoading, setIsLoading] = useState(true);

  const accountRef = useRef(null);

  useEffect(() => {
    const fetchUserDataAndCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsLoading(false);
          return;
        }

        // Fetch user data
        const userResponse = await fetch("https://jodiacxthreadorabackend.store/api/auth/getuser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUserName(userData.user.name);
        }

        // Fetch cart data to get quantity
        const cartResponse = await fetch("https://jodiacxthreadorabackend.store/api/cart", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (cartResponse.ok) {
          const cartData = await cartResponse.json();
          const quantity = cartData.cart ? cartData.cart.products.reduce((total, item) => total + item.quantity, 0) : 0;
          setCartQuantity(quantity);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDataAndCart();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [accountMenuOpen]);

  const navItems = [
    { id: 1, label: "Home", path: "/home" },
    { id: 2, label: "New Arrival", path: "/newarrival" },
    { id: 3, label: "About Us", path: "/aboutus" },
    { id: 4, label: "Contact", path: "/contact" },
  ];

  const handleAccountClick = () => {
    if (userName) {
      setAccountMenuOpen(!accountMenuOpen);
    } else {
      navigate("/signin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserName(null);
    setCartQuantity(0); // Reset cart quantity on logout
    setAccountMenuOpen(false);
    navigate("/");
  };

  const mobileMenuItems = [
    ...navItems,
    {
      id: 5,
      label: userName ? `Hi, ${userName}` : "Account",
      action: userName ? () => setAccountMenuOpen(!accountMenuOpen) : () => navigate("/signin"),
    },
    { id: 6, label: `Cart (${cartQuantity})`, action: () => navigate("/cart") },
  ];

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

      {/* Right Section (Desktop) */}
      <div className="hidden md:flex items-center space-x-6 text-black text-sm md:text-base font-medium tracking-wide relative" ref={accountRef}>
        <motion.button
          whileHover={{ scale: 1.1, color: "#6b7280" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleAccountClick}
          className="bg-transparent text-black transition"
        >
          {userName ? `Hi, ${userName}` : "Account"}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, color: "#6b7280" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => navigate("/cart")}
          className="bg-transparent text-black transition"
        >
          Cart ({cartQuantity})
        </motion.button>

        <AnimatePresence>
          {accountMenuOpen && userName && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 w-48 bg-white rounded-md shadow-lg py-1 flex flex-col items-start"
            >
              <button
                onClick={() => {
                  setAccountMenuOpen(false);
                  navigate("/orders");
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Orders
              </button>
              <button
                onClick={() => {
                  setAccountMenuOpen(false);
                  navigate("/wishlist");
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Wishlist
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Toggle */}
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
                  if (item.action) {
                    item.action();
                  }
                  setMobileMenuOpen(false);
                }}
                className="text-black text-base font-medium tracking-wide text-left"
              >
                {item.label}
              </button>
            ))}
            {accountMenuOpen && userName && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col space-y-2 pl-4 pt-2 border-l border-gray-200"
              >
                <button
                  onClick={() => {
                    setAccountMenuOpen(false);
                    setMobileMenuOpen(false);
                    navigate("/orders");
                  }}
                  className="w-full text-left text-sm text-gray-700 hover:text-gray-900 transition"
                >
                  Orders
                </button>
                <button
                  onClick={() => {
                    setAccountMenuOpen(false);
                    setMobileMenuOpen(false);
                    navigate("/Profile");
                  }}
                  className="w-full text-left text-sm text-gray-700 hover:text-gray-900 transition"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-sm text-gray-700 hover:text-gray-900 transition"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
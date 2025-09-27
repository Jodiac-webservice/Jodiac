import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white text-black px-6 md:px-20 py-16 border-t border-black mt-20">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
        EVERYBODY CAN’T HAVE LIMITED ITEMS..
      </h2>

      <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base">
        JOIN OUR EMAIL LIST TO FIND OUT ABOUT THE NEW DROP AND NEVER MISS IT AGAIN
      </p>

      <div className="flex flex-col sm:flex-row items-center max-w-md w-full gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 border border-black px-4 py-3 outline-none w-full sm:w-auto"
        />
        <button className="bg-black text-white px-6 py-3 font-semibold w-full sm:w-auto">
          SUBSCRIBE
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium mt-10">
        <span onClick={() => navigate("/Terms")} className="cursor-pointer hover:underline">TERMS</span>
        <span onClick={() => navigate("/ShippingPolicy")} className="cursor-pointer hover:underline">SHIPPING</span>
        <span onClick={() => navigate("/RefundPolicy")} className="cursor-pointer hover:underline">REFUND</span>
        <span onClick={() => navigate("/PrivacyPolicy")} className="cursor-pointer hover:underline">PRIVACY</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-16 md:mt-20 gap-10 md:gap-0">
        <h1 className="text-[48px] sm:text-[60px] md:text-[110px] font-extrabold tracking-tight leading-none text-center md:text-left">
          JODIAC©2025
        </h1>

        <div className="flex space-x-6 text-2xl">
          <FaInstagram className="cursor-pointer hover:scale-110 transition duration-300" />
          <FaYoutube className="cursor-pointer hover:scale-110 transition duration-300" />
          <FaTiktok className="cursor-pointer hover:scale-110 transition duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

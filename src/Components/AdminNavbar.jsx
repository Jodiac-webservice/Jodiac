import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export const AdminNavbar = ({ activeItem, setActiveItem }) => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const menuItems = ["Dashboard", "Products", "Users", "Analytics", "Settings"];

  return (
    <nav className="w-full align-middle bg-[#1b2d2a] border-b border-[#3c4c47] shadow-md">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Left - Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-[#4b5d52] rounded-lg flex items-center justify-center">
            <span className="text-[#f2e8cf] font-bold text-sm">J</span>
          </div>
          <span className="text-xl font-bold text-[#f2e8cf] tracking-wide">
            Jodiac Admin
          </span>
        </div>

        {/* Middle - Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeItem === item
                    ? "bg-[#6b705c] text-[#f2e8cf]"
                    : "text-[#d3d3c7] hover:text-[#f2e8cf] hover:bg-[#3c4c47]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right - Profile + Mobile toggle */}
        <div className="flex items-center space-x-3">
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 p-2 text-[#d3d3c7] hover:text-[#f2e8cf] hover:bg-[#3c4c47] rounded-lg transition-all duration-200"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                alt="admin"
                className="w-8 h-8 rounded-full border-2 border-[#6b705c]"
              />
              <span className="hidden sm:block text-sm font-medium text-[#f2e8cf]">
                Jodiac Admins
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#d3d3c7] hover:text-[#f2e8cf] hover:bg-[#3c4c47] rounded-lg transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#3c4c47] px-4 py-3">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveItem(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                  activeItem === item
                    ? "bg-[#6b705c] text-[#f2e8cf]"
                    : "text-[#d3d3c7] hover:text-[#f2e8cf] hover:bg-[#3c4c47]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

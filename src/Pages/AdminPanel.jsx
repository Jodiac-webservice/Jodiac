import React, { useState } from "react";
import { AdminNavbar } from "../Components/AdminNavbar";
import DashboardCards from "../Components/DashboardCards";
import ActiveOrders from "../Components/ActiveOrders";
// TODO: create these
import Products from "../Components/Products";
import Users from "../Components/Users";
import Analytics from "../Components/Analytics";
import Settings from "../Components/Settings";

const AdminPanel = () => {
  const [view, setView] = useState("Dashboard");

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#fdfaf3]">
      <AdminNavbar activeItem={view} setActiveItem={setView} />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 text-[#1b2d2a] uppercase tracking-wide">
          Welcome to Jodiac Admin Panel
        </h1>

        {view === "Dashboard" && (
          <DashboardCards onActiveOrdersClick={() => setView("ActiveOrders")} />
        )}
        {view === "ActiveOrders" && <ActiveOrders onBack={() => setView("Dashboard")} />}
        {view === "Products" && <Products />}
        {view === "Users" && <Users />}
        {view === "Analytics" && <Analytics />}
        {view === "Settings" && <Settings />}
      </main>
    </div>
  );
};

export default AdminPanel;

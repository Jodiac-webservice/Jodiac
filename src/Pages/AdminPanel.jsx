import React, { useState } from "react";
import { AdminNavbar } from "../Components/AdminNavbar";
import DashboardCards from "../Components/DashboardCards";
import ActiveOrders from "../Components/ActiveOrders";

const AdminPanel = () => {
  const [view, setView] = useState("dashboard");

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#fdfaf3]">
      <AdminNavbar />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 text-[#1b2d2a] uppercase tracking-wide">
          Welcome to Jodiac Admin Panel
        </h1>

        {view === "dashboard" ? (
          <DashboardCards onActiveOrdersClick={() => setView("activeOrders")} />
        ) : (
          <ActiveOrders onBack={() => setView("dashboard")} />
        )}
      </main>
    </div>
  );
};

export default AdminPanel;

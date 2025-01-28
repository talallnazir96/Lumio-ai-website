import React from 'react';

interface SidebarProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebarr: React.FC<SidebarProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="hidden md:block w-64 border-r bg-white p-6">
      <nav className="space-y-2">
        <div
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${selectedTab === "dashboard" ? "bg-blue-50 text-blue-600" : ""}`}
          onClick={() => setSelectedTab("dashboard")}
        >
          <span>📊</span>
          <span>Dashboard</span>
        </div>
        <div
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${selectedTab === "profile" ? "bg-blue-50 text-blue-600" : ""}`}
          onClick={() => setSelectedTab("profile")}
        >
          <span>🏠</span>
          <span>My Profile</span>
        </div>
        <div
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${selectedTab === "payments" ? "bg-blue-50 text-blue-600" : ""}`}
          onClick={() => setSelectedTab("payments")}
        >
          <span>📈</span>
          <span>Payments & Reports</span>
        </div>
        {/* Support Button */}
        <button className="fixed bottom-4 left-16 rounded-full bg-teal-400 px-4 py-2 text-teal-900 hover:bg-teal-200">
          Support
        </button>
      </nav>
    </div>
  );
};

export default Sidebarr;
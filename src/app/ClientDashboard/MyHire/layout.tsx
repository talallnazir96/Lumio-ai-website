"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "../component/Sidebar";
import Nav2 from "../component/Nav2";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sortBy, setSortBy] = useState<string>("newest");

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="pl-56">
        <Nav2 sortBy={sortBy} setSortBy={setSortBy} />
        <div className="text-black p-4 rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "../component/Sidebar";
import Nav5 from "../component/Nav5";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sortBy, setSortBy] = useState<string>("newest");

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 lg:pl-56">
        <Nav5 sortBy={sortBy} setSortBy={setSortBy} />
        <div className="bg-white text-black">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
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

    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 lg:pl-56">
        <Nav2 sortBy={sortBy} setSortBy={setSortBy} />
        <div className="bg-white text-black">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
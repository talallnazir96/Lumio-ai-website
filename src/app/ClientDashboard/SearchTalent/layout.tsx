import React, { ReactNode } from "react";
import Sidebar from "../component/Sidebar";
import Nav from "../component/Nav";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="pl-56">
        <Nav />
        <div className="bg-white text-black">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center px-3">
        <img
          src={"/assets/logo.png"}
          alt="LumioAI Logo"
          width={140}
          height={30}
          className="h-8 w-auto"
        />
      </div>
      <button className="text-white flex items-center gap-2 hover:text-gray-300">
        <img
          src={"/assets/profile.png"}
          alt="Profile Icon"
          width={50}
          height={50}
          className="h-8 w-8 rounded-full"
        />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
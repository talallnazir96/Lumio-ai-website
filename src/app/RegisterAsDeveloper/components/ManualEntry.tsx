
"use client";
import React from "react";

const ManualEntry: React.FC = () => {
  const handleClick = () => {
    // Navigate to the signup page
    window.location.href = "/RegisterAsDeveloper/RegisterDeveloper";
  };

  return (
    <div className="w-full flex flex-col justify-between h-full">
      <h3 className="text-lg font-medium mb-2 text-black">Continue filling the information manually.</h3>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center flex-1 flex flex-col justify-center cursor-pointer hover:border-gray-400"
        onClick={handleClick}
      >
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-600">Fill the information here</p>
      </div>
    </div>
  );
};

export default ManualEntry;
"use client";
import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import Image from "next/image";

const SearchTalent: React.FC = () => {
  const [showAI, setShowAI] = useState<boolean>(false);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-3 bg-gray-100">
      <div className="flex max-w-md flex-col items-center space-y-4 text-center">
        <h1 className="text-xl font-semibold tracking-tight">You have not hired developers yet</h1>

        <div className="relative h-64 w-64">
          <Image
            src={"/assets/z-image-1.svg"}
            alt="Illustration of person working"
            className="object-contain"
            layout="fill"
          />
        </div>

        <div className="w-full space-y-4 bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              placeholder="Search talent"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button
            onClick={() => setShowAI(true)}
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md flex items-center justify-center gap-2 transition-all hover:opacity-90"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Search with AI assistant
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchTalent;
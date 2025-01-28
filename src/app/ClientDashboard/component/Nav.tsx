import React from 'react';
import { Bell } from 'lucide-react';
import Image from 'next/image';

const Nav: React.FC = () => {
  return (
    <nav className="border-b border-gray-100 bg-white px-6 py-2 m-1 rounded-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-black px-2 py-1 text-sm font-semibold text-white">Dash</span>
          <span className="font-semibold text-black">Board</span>
        </div>

        <h1 className="text-base font-bold text-gray-900">Monitor and track the progress of your jobs</h1>

        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center">
            <button className="group relative flex flex-col items-center">
              <div className="h-20 w-20 rounded-full overflow-hidden">
                <img
                  src="/assets/pro2.png" // Directly using pro2.svg
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">mr.man</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
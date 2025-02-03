"use client"

import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

interface FilterMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-96 bg-white shadow-lg">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium">Filters</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <img src="/skills.png" className='w-5 h-5' alt="" />
              <span className="font-medium">Skills</span>
            </div>
            <input
              type="text"
              placeholder="Ex: Python, Java, React"
              className="w-full rounded-lg bg-purple-50 px-4 py-2 text-sm outline-none"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <img src="/exp.png" className='w-5 h-5' alt="" />
              <span className="font-medium">Experience</span>
            </div>
            <input
              type="text"
              placeholder="Ex: 3 years"
              className="w-full rounded-lg bg-purple-50 px-4 py-2 text-sm outline-none"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <FaLocationDot className='w-5 h-5' color='gray' />
              <span className="font-medium">Location</span>
            </div>
            <input
              type="text"
              placeholder="Type..."
              className="w-full rounded-lg bg-purple-50 px-4 py-2 text-sm outline-none"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium">Rate</span>
              <div className="text-sm text-gray-600">
                <span>$0</span>
                <span> - </span>
                <span>$25k</span>
              </div>
            </div>
            <input type="range" min="0" max="25000" className="w-full" />
          </div>

          <div className="flex flex-col gap-2">
            <button className="rounded-lg bg-blue-500 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600">
              Apply
            </button>
            <button
              onClick={onClose}
              className="rounded-lg border border-gray-200 bg-white py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
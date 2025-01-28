"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface UpdatePasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdatePassword: React.FC<UpdatePasswordProps> = ({ isOpen, onClose }) => {
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-6">Edit Password</h2>

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-sm">Username</span>
            <span className="ml-2 text-green-500">✓</span>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPasswords.current ? "text" : "password"}
                placeholder="Current password"
                className="w-full p-2 border rounded-md pr-10"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPasswords((prev) => ({ ...prev, current: !prev.current }))}
              >
                {showPasswords.current ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="flex justify-start text-sm text-blue-500 cursor-pointer">
              <a href="/forgot-password" className="no-underline">Forgot password?</a>
            </div>

            <div className="relative">
              <input
                type={showPasswords.new ? "text" : "password"}
                placeholder="New password"
                className="w-full p-2 border rounded-md pr-10"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPasswords((prev) => ({ ...prev, new: !prev.new }))}
              >
                {showPasswords.new ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showPasswords.confirm ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full p-2 border rounded-md pr-10"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))}
              >
                {showPasswords.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white rounded-full py-2 px-8 hover:bg-blue-600 transition-colors"
            style={{ width: '50%' }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
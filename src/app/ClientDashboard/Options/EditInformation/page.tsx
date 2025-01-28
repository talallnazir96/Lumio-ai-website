"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, PenSquare } from "lucide-react";
import UpdatePassword from "../../component/UpdatePassword";

interface FormData {
  username: string;
  email: string;
  phone: string;
  company: string;
}

const EditInformation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "mr.man",
    email: "mr.man@atlas.com",
    phone: "+45487223823",
    company: "Atlas",
  });
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState<boolean>(false);

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Edit account</h2>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-6 flex-1 mr-6">
              <div className="space-y-1">
                <label className="flex items-center">
                  <span className="text-sm">Username</span>
                  <Check className="w-4 h-4 ml-2 text-green-500" />
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-1">
                <label className="flex items-center">
                  <span className="text-sm">Password</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value="iamthebest2024"
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-50"
                  />
                  <button
                    onClick={() => setIsPasswordModalOpen(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <PenSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="flex items-center">
                  <span className="text-sm">E-mail</span>
                  <Check className="w-4 h-4 ml-2 text-green-500" />
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-1">
                <label className="flex items-center">
                  <span className="text-sm">Phone</span>
                  <Check className="w-4 h-4 ml-2 text-green-500" />
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="space-y-1">
                <label className="flex items-center">
                  <span className="text-sm">Company</span>
                  <Check className="w-4 h-4 ml-2 text-green-500" />
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={"/assets/z-image-3.svg"}
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="w-40 bg-blue-500 text-white rounded-full py-2 hover:bg-blue-600 transition-colors">
              Save changes
            </button>
          </div>
        </div>
      </div>
      <UpdatePassword isOpen={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} />
    </div>
  );
}

export default EditInformation;
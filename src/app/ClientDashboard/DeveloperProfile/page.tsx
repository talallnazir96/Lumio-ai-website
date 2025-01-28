import React from "react";
import Image from "next/image";
import { TechBadge } from "@/app/DeveloperProfile/components/TechBadge";

const DeveloperProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-4">
      <div className="mx-auto max-w-2xl bg-gradient-to-b from-blue-200 to-pink-200 px-6 pb-6 rounded-xl">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <Image
            src={"/assets/logo.png"}
            alt="LumioAI Logo"
            width={170}
            height={40}
            className="h-10 object-contain bg-blue-600 px-5"
          />
        </div>

        {/* Profile Section */}
        <div className="mb-8 p-6 rounded-lg">
          <div className="flex gap-6">
            <div className="w-48 h-48 relative">
              <Image src={"/assets/pic-2.png"} alt="Profile" width={192} height={192} className="rounded-lg object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-xl font-semibold text-black">J.D.</h2>
                <div className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  LumioAI certified
                </div>
              </div>

              <div className="space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <code className="text-sm">&lt;/&gt;</code>
                  <span>Full-stack engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>8+ years of experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="flex items-center gap-1">
                    <img src="/placeholder.svg" alt="Spain flag" className="w-5 h-3 object-cover" />
                    Spain
                  </span>
                </div>
                <div className="text-xl font-semibold text-black">$4,500 mo.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-1 text-black">
            Expertise
            <span className="text-yellow-400">★</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            <TechBadge icon="/assets/python.png" name="Python" />
            <TechBadge icon="/assets/Angular_js.png" name="Angular" />
            <TechBadge icon="/assets/react.png" name="React.JS" />
            <TechBadge icon="/assets/aws.png" name="AWS" />
            <TechBadge icon="/assets/java.png" name="JavaScript" />
          </div>
        </div>

        {/* Vetting Results */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 text-black">LumioAI vetting results</h3>
          <p className="text-black text-sm leading-relaxed bg-blue-200 rounded-md p-2">
            John demonstrated deep understanding of Python language by doing this and that. Having worked with company X
            he acquired expertise by working on X model. He is especially skilled in developing. John demonstrated deep
            understanding of Python language by doing this and that. Having worked with company X he acquired expertise by
            working on X model. He is especially skilled in developing X.Y. John demonstrated deep understanding of Python
            language by doing this and that. Having worked with company.
          </p>
        </div>

        {/* Request Interview Button */}
        <div className="flex justify-center">
        <button className="w-40 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Request Interview
        </button>
        </div>
      </div>
    </div>
  );
}

export default DeveloperProfile;
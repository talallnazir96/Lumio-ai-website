"use client";

import React from "react";
import { BookmarkIcon } from "lucide-react"; // Assuming you're using lucide-react library

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

function Badge({ children, className }: BadgeProps) {
  return <span className={`inline-block px-2 py-1 text-sm font-semibold rounded ${className}`}>{children}</span>;
}

export function ProfileHeader() {
  return (
    <div className="bg-white text-black p-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-[240px] h-[240px] flex-shrink-0 flex md:block gap-4 md:gap-0">
          <img src={"/assets/pic-2.png"} alt="Profile" className="rounded-lg w-[180px] h-[180px] md:w-[240px] md:h-[240px]" />
          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="flex items-center gap-1 md:gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full" />
              <span>Available for work</span>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Interview John</button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">J.D.</h1>
              <Badge className="bg-blue-100 text-blue-600">LumoAI certified</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold">$4,500 mo.</span>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <BookmarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <code className="text-sm">&lt;/&gt;</code>
              <span>Full-stack engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>8+ years of experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>🇺🇸 United States</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Expertise ⭐</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "JavaScript",
                "Python",
                "Django",
                "React.js",
                "AWS",
                "React",
                "MySQL",
                "Node",
                "Node.js",
                "GO",
                "Flask",
                "C++",
                "Angular",
                "Vue.js",
              ].map((tech) => (
                <Badge key={tech} className="bg-gray-100 text-black">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <hr className="mb-6" />
        </div>
      </div>
    </div>
  );
}
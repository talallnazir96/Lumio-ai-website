"use client";

import { useState } from "react";
import Image from "next/image";
import { BookmarkIcon } from "lucide-react"; // Assuming you're using lucide-react library

type Tab = "LumoAI Vetting Results" | "About John" | "Work Experience";

export function PerformanceSummary() {
  const [activeTab, setActiveTab] = useState<Tab>("LumoAI Vetting Results");

  const tabs: Tab[] = ["LumoAI Vetting Results", "About John", "Work Experience"];

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTab === tab ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "LumoAI Vetting Results" && (
        <>
          <div className="bg-blue-50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium">Performance summary:</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                John demonstrated deep understanding of Python language by doing this and that. Having worked with
                company x he acquired expertise by working on x model. He is especially skilled in developing X.r
              </p>
              <p>
                John demonstrated deep understanding of Python language by doing this and that. Having worked with
                company x he acquired expertise by working on x model. He is especially skilled in developing X.r
              </p>
              <p>
                John demonstrated deep understanding of Python language by doing this and that. Having worked with
                company.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 items-center bg-gray-100 p-3 rounded-lg">
              <Image src="/assets/python.png" alt="Python" width={40} height={40} className="rounded" />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span>Python</span>
                  <span>97%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-[97%] bg-green-500 rounded-full" />
                </div>
              </div>
              <span className="text-green-600">Senior-level</span>
              <div className="max-w-xs">
                <p className="text-sm">
                  John demonstrated deep understanding of Python language by doing this and that. Having worked with
                  company X he acquired expertise by working on X model. He is especially skilled in developing X.Y.
                </p>
              </div>
              <span className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-600 text-white">✓</span>
            </div>

            <div className="flex flex-wrap gap-4 items-center bg-gray-100 p-3 rounded-lg">
              <Image src="/assets/java.png" alt="Java" width={40} height={40} className="rounded" />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span>Java</span>
                  <span>94%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-[94%] bg-green-500 rounded-full" />
                </div>
              </div>
              <span className="text-green-600">Senior-level</span>

              <div className="max-w-xs">
                <p className="text-sm">
                  John needed to understand a particularly challenging first module task. He studied the mirror code and
                  applied it to cover second layer, this way he made sure to build a robust code for x problem.
                </p>
              </div>
              <span className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-600 text-white">✓</span>
            </div>
          </div>

          <button className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-700">Soft Skills</button>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              John is a highly skilled engineer with exceptional soft skills. He excels in communication, both verbal
              and written, and is fluent in English enabling him to articulate complex technical concepts clearly and
              effectively. He's a strong team player with great problem-solving abilities and consistently delivers
              high-quality code while adapting seamlessly to diverse working environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { skill: "Communication skills", rating: "Top score" },
              { skill: "Teamwork", rating: "Top score" },
              { skill: "Work under pressure", rating: "Top score" },
              { skill: "English language", rating: "Fluent" },
              { skill: "Problem-solving", rating: "Top score" },
              { skill: "Meets deadlines", rating: "Top score" },
            ].map((item) => (
              <div key={item.skill} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.skill}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-600">⭐</span>
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "About John" && (
        <div className="bg-blue-50 rounded-lg p-6 space-y-8">
          <div className="space-y-4">
            <h3 className="font-medium">BIO</h3>
            <p className="text-sm text-gray-600">
              I am a software engineer with 7+ years of experience in building strong infrastructure for advanced
              software systems. I've worked in a successful startup allowing my responsibilities and to create and
              maintain complex structures, analyze data and manage AI integrations. I am ready to take on a new
              challenge.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Education</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <p className="font-medium">Harvard University</p>
                <p className="text-sm text-gray-600">Masters · 2015-2020</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Work Experience" && (
        <div className="space-y-8">
          <div className="relative">
            {[
              {
                company: "Bourbon Group ICE",
                period: "2018 - 2020",
                role: "Full-stack engineer",
                description: "Integrated something into something that was very complex",
                iconSrc: "/assets/icon1.png",
              },
              {
                company: "SCO Pillars",
                period: "2020 - 2022",
                role: "Python developer",
                description: "Implemented a new approach that blew everyone's mind.",
                iconSrc: "/assets/icon2.png",
              },
              {
                company: "Weststar Dreams",
                period: "2022 - 2023",
                role: "Python developer",
                description: "Did wonderful things. And the company CEO was happy.",
                iconSrc: "/assets/icon3.png",
              },
            ].map((job, index, array) => (
              <div key={job.company} className="flex gap-4 relative m-8">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-white  flex items-center justify-center">
                    <Image src={job.iconSrc} alt={job.company} width={100} height={100} />
                  </div>
                  {index !== array.length - 1 && <div className="w-0.5 h-16 bg-gray-200" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{job.company}</h3>
                    <span className="text-sm text-gray-600">· {job.period}</span>
                  </div>
                  <p className="text-sm font-medium mt-1">{job.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

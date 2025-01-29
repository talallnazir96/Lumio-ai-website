"use client"

import React, { useState } from "react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Sidebarr from "../components/Sidebarr";
import { useRouter } from "next/navigation";
import Navbar from "@/app/RegisterAsDeveloper/components/Navbar";
import Image from "next/image";

const DevProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("vetting");
  const [showVettingDetails, setShowVettingDetails] = useState<boolean>(false);
  const router = useRouter();
  const handleSkill = () => {
    router.push("/DeveloperProfile/VettingSystem");
  }

  const renderVettingContent = (): JSX.Element => {
    if (!showVettingDetails) {
      return (
        <div className="text-center p-6 bg-white rounded-lg">
          <h3 className="mb-4 text-xl font-semibold">You haven't taken any test yet.</h3>
          <p className="mx-auto mb-8 max-w-2xl">
            To be able to work with the best companies, each and every member of LumioAI talent network goes through
            vetting process that will evaluate their skills. Let us know your expertise level and we will make sure to
            connect you with the right companies.
          </p>
          <button
            className="rounded bg-gradient-to-r from-blue-800 to-purple-600 px-4 py-1 text-white hover:from-blue-900 hover:to-purple-700"
            onClick={() => setShowVettingDetails(true)}
          >
            Start LumioAI Test
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-8 rounded-lg">
        <div className="text-left">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-36 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
              </div>
              <span>2 tests left until LumioAI certification</span>
              <button className="text-blue-600 hover:underline" onClick={handleSkill}>+ Add skills</button>
            </div>
          </div>

          {/* Python Section */}
          <div className="mb-8 bg-gray-200 p-4 rounded-lg">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <Image
                    src={"/assets/python.png"}
                    alt="Python"
                    className="h-full w-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <span className="font-medium">Python</span>
              </div>
              <div className="flex items-center gap-14 flex-1">
                <div className="relative w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                  <span className="absolute right-0 top-[-20px] text-green-600">97%</span>
                </div>
                <span className="text-green-600">Senior-level</span>
                <p className="text-sm max-w-96 flex-1">
                  John demonstrated deep understanding of Python language by doing this and that. Having worked with company X
                  he acquired expertise by working on X model. He is especially skilled in developing X.Y.
                </p>
                <span className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-600 text-white">✓</span>
              </div>
            </div>
          </div>

          {/* JavaScript Section */}
          <div className="mb-8 bg-gray-200 p-4 rounded-lg">
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <Image
                    src={"/assets/java.png"}
                    alt="JavaScript"
                    className="h-full w-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <span className="font-medium">JavaScript</span>
              </div>
              <div className="flex items-center gap-14 flex-1">
                <div className="relative w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "94%" }}></div>
                  <span className="absolute right-0 top-[-20px] text-green-600">94%</span>
                </div>
                <span className="text-green-600">Senior-level</span>
                <p className="text-sm max-w-96 flex-1">
                  John demonstrated deep understanding of JavaScript language by doing this and that. Having worked with
                  company X he acquired expertise by working on X model. He is especially skilled in developing X.Y.
                </p>
                <span className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-600 text-white">✓</span>
              </div>
            </div>
          </div>

          {/* Angular */}
          <div className="mb-8 bg-gray-200 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <Image
                    src={"/assets/Angular_js.png"}
                    alt="Profile"
                    className="h-full w-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <span className="font-medium">Angular</span>
              </div>
              <span className="font-medium text-red-500">Test not token</span>
              <button className="rounded bg-gradient-to-r from-blue-800 to-purple-600 px-4 py-1 text-white hover:from-blue-900 hover:to-purple-700">
                Take test
              </button>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="flex justify-between items-center">
            <div className=" w-110 flex items-center gap-2">
              <div className="rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={"/assets/72.svg"}
                  alt="Coding Challenge Score"
                  className=""
                  width={300}
                  height={300}
                />
                <div>
                  <div className="text-sm">Coding challenge score</div>
                  <div className="font-medium text-green-600">90</div>
                </div>
              </div>

            </div>
            <div className="flex items-center gap-2">
              <div className="  w-100 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={"/assets/73.svg"}
                  alt="Soft Skills"
                  className=""
                  width={200}
                  height={200}
                />
                <div>
                  <div className="text-sm">Soft Skills</div>
                  <div className="text-green-600">optimal</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAboutContent = (): JSX.Element => {
    return (
      <div className="relative bg-white rounded-lg p-6">
        <div className="absolute right-1 top-1 text-sm">LumioAI member since Jan 15, 2025</div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-2">BIO</h3>
            <p className="text-sm leading-relaxed">
              I am a software engineer with 7+ years of experience in building strong infrastructure for advanced
              software systems, I've worked in 2 successful startups where my responsibilities were to create and
              maintain complex structures, analyze data and manage AI integrations. I am ready to take on a new
              challenge.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-6 h-6">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-semibold">Education</h3>
              </div>
            </div>
            <div className="ml-8">
              <div className="flex items-center justify-between">
                <span className="font-medium">Harvard University</span>
                <span className="text-sm">2015-2020</span>
              </div>
              <div className="text-sm">Masters</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderExperienceContent = (): JSX.Element => {
    return (
      <div>
        <ExperienceTimeline />
      </div>
    );
  };

  const renderContent = (): JSX.Element | null => {
    switch (selectedTab) {
      case "vetting":
        return renderVettingContent();
      case "about":
        return renderAboutContent();
      case "experience":
        return renderExperienceContent();
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100 text-black">
        <Sidebarr selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">My Profile</h1>
          </div>

          {/* Profile Section */}
          <div className="mb-8 flex items-start justify-between bg-white rounded-lg p-4">
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={"/assets/profile.png"}
                  alt="Profile"
                  className="h-full w-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">John Rockefeller</h2>
                </div>
                <div className="mt-1 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span>Front-end engineer</span>
                  </div>
                </div>
                <span>7+ years of experience</span>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm">us United States</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button className="rounded bg-transparent px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 mb-2">
                Edit profile
              </button>
              <div className="text-sm">Rate: $4,500 mo.</div>
              <div className="mt-1 flex items-center justify-end gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm">Available for work</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex gap-4 overflow-x-auto">
            <button
              className={`rounded px-4 py-2 ${selectedTab === "vetting" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-300"}`}
              onClick={() => setSelectedTab("vetting")}
            >
              LumioAI Vetting Results
            </button>
            <button
              className={`rounded px-4 py-2 ${selectedTab === "about" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-300"}`}
              onClick={() => setSelectedTab("about")}
            >
              About John
            </button>
            <button
              className={`rounded px-4 py-2 ${selectedTab === "experience" ? "bg-blue-100 text-blue-500" : "hover:bg-gray-300"}`}
              onClick={() => setSelectedTab("experience")}
            >
              Work Experience
            </button>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default DevProfile;
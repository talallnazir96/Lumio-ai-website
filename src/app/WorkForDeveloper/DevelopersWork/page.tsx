"use client";
import React from "react";
import Image from "next/image";
import { Building, Clock, Users, TrendingUp } from "lucide-react";
import Head from "../components/Head";
import StepItem from "../components/StepItem";


interface Feature {
  icon: string;
  title: string;
}

const DevelopersWork: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "🏦",
      title: "Keep what you earn",
    },
    {
      icon: "💵",
      title: "Get paid on time",
    },
    {
      icon: "🎁",
      title: "Get the benefits",
    },
    {
      icon: "📈",
      title: "Upgrade your skills",
    },
  ];

  return (
    <main>
      <Head />

      <div className="container mx-auto px-4 py-12 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <StepItem
              number={1}
              title="Let us know about you"
              description="Complete the registration process with your basic information."
            />
            <StepItem
              number={2}
              title="Get verified by LumioAI"
              description="Work through our custom LumioAI screening process & E-KYC evaluation system powered by AI."
            />
            <StepItem
              number={3}
              title="Start working with the top companies"
              description="Once verified, you can now get in touch with the best companies that are looking for exact skills that you possess. Building your career starts here."
            />
          </div>
          <div className="relative h-[350px] w-11/12 md:w-full rounded-lg overflow-hidden mx-auto">
            <Image
              src={"/assets/DevWork.png"}
              alt="Developer working"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full mb-10">
            Benefits of Working With LumioAI
          </button>
          <div className="flex justify-center flex-wrap gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative w-36 h-36 flex flex-col items-center justify-center"
              >
                {/* Background Shape */}
                <div className="absolute w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="absolute w-full h-full opacity-20"
                  >
                    <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                      <path d="M 4 0 L 0 0 0 4" fill="none" stroke="gray" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Icon and Text */}
                <div className="relative text-3xl z-10">{feature.icon}</div>
                <div className="relative text-center mt-2 font-medium text-gray-800 z-10">
                  {feature.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-black">
            Ready to Elevate Your Career?
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full mb-10">
            Apply as Developer
          </button>
        </div>
      </div>
    </main>
  );
};

export default DevelopersWork;
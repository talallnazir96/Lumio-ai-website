'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";

const ProjectDuration: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (duration: string) => {
    setSelectedDuration(duration);
    // Navigate to the desired route based on the selected duration
    router.push(`/ClientGetStarted/JobTiming?duration=${duration}`);
  };

  const handleNot = () => {
    router.push("/ClientGetStarted/JobTiming");
  };

  const handleBack = () => {
    router.push("/ClientGetStarted/GetStarted");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4 bg-white">
        <div className="w-full max-w-xl p-8 space-y-8 bg-white rounded-lg">
          <h2 className="text-xl font-semibold text-black">How long is the project?</h2>

          <div className="flex flex-col gap-4">
            {["1-3 months", "3-6 months", "6+ months"].map((duration) => (
              <button
                key={duration}
                onClick={() => handleSelect(duration)}
                className={`w-full h-16 py-2 text-lg border rounded-md ${selectedDuration === duration ? "bg-gray-300" : "bg-white hover:bg-gray-100"
                  }`}
              >
                {duration}
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4 gap-4 md:gap-0">
            <button className="px-8 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100" onClick={handleBack}>
              Back
            </button>

            <button className="px-8 py-2 text-white bg-black rounded-md hover:bg-black/90" onClick={handleNot}>
              Not sure yet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDuration;
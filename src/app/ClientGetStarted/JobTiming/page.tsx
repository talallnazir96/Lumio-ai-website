"use client";

import { useRouter } from "next/navigation";
import Header from "../components/Header";
import { useState } from "react";

const JobTiming: React.FC = () => {
    const router = useRouter();
    const [selectedTiming, setSelectedTiming] = useState<string | null>(null);

    const handleSelect = (timing: string) => {
        setSelectedTiming(timing);
        // Navigate to the desired route based on the selected timing
        router.push(`/ClientGetStarted/EngineersNeed?timing=${timing}`);
    };

    const handleNot = () => {
        router.push("/ClientGetStarted/EngineersNeed");
    };

    const handleBack = () => {
        router.push("/ClientGetStarted/ProjectDuration");
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <Header />
            <div className="min-h-screen flex items-center justify-center p-4 bg-white">
                <div className="w-full max-w-xl p-8 space-y-8 bg-white rounded-lg">
                    <h2 className="text-xl font-semibold text-black">
                        Are you Hiring Part Time or Full Time?
                    </h2>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => handleSelect("Part Time")}
                            className={`w-full h-16 py-2 text-lg border rounded-md ${selectedTiming === "Part Time"
                                    ? "bg-gray-300"
                                    : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            Part Time (Less than 30 hours a week)
                        </button>

                        <button
                            onClick={() => handleSelect("Full Time")}
                            className={`w-full h-16 py-2 text-lg border rounded-md ${selectedTiming === "Full Time"
                                    ? "bg-gray-300"
                                    : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            Full Time (30 to 40 hours a week)
                        </button>
                    </div>

                    <div className="flex justify-between pt-4 gap-4 md:gap-0">
                        <button
                            className="px-8 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
                            onClick={handleBack}
                        >
                            Back
                        </button>

                        <button
                            className="px-8 py-2 text-white bg-black rounded-md hover:bg-black/90"
                            onClick={handleNot}
                        >
                            Not sure yet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobTiming;
"use client";

import { useRouter } from "next/navigation";
import Header from "../components/Header";
import { useState } from "react";

const CompanyInformation: React.FC = () => {
    const router = useRouter();
    const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

    const handleSelect = (info: string) => {
        setSelectedInfo(info);
        // Navigate to the desired route based on the selected information
        router.push(`/ClientGetStarted/Success?info=${info}`);
    };

    const handleNot = () => {
        router.push("/ClientGetStarted/Success");
    };

    const handleBack = () => {
        router.push("/ClientGetStarted/EngineersNeed");
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <Header />
            <div className="min-h-screen flex items-center justify-center p-4 bg-white">
                <div className="w-full max-w-xl p-8 space-y-8 bg-white rounded-lg">
                    <h2 className="text-xl font-semibold text-black">
                        Your Company Information?
                    </h2>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => handleSelect("Professional Email")}
                            className={`w-full h-16 py-2 text-lg border rounded-md ${selectedInfo === "Professional Email"
                                    ? "bg-gray-300"
                                    : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            Professional Email
                        </button>

                        <button
                            onClick={() => handleSelect("Phone Number")}
                            className={`w-full h-16 py-2 text-lg border rounded-md ${selectedInfo === "Phone Number"
                                    ? "bg-gray-300"
                                    : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            Phone Number
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

export default CompanyInformation;
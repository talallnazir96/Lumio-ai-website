import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

export default function PhotoGuide() {
    return (
        <div className="max-w-7xl mx-auto px-20 py-6 bg-white text-black">
            {/* Top Heading */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-center">Professional photo requirements</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <p className="text-xl">We ensure to provide companies with the best talent and great hiring experience.</p>

                        <p className="text-xl">
                            Please check the requirements to provide a professional and up-to-date photo of yourself.
                        </p>

                        <p className="text-xl">This will help you build trust and secure better chances at getting hired.</p>

                        <div className="space-y-2">
                            <h2 className="text-1xl font-bold">Tips:</h2>
                            <ul className="space-y-4">
                                {[
                                    "Use clear background, preferably pure white",
                                    "Make sure the photo is not blurred or low in resolution",
                                    "Make sure the photo is at least 400x400 pixels",
                                    "Max size: 2MB",
                                ].map((tip, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                                        <span className="text-lg">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex flex-col items-center md:items-end">
                    <img
                        src="/assets/pic-1.png"
                        alt="Professional photo example"
                        className="w-full max-w-md rounded-lg"
                        width={400} // Provide width
                        height={400} // Provide height
                    />
                    <p className="text-xl mt-2">For reference</p>
                </div>
            </div>
        </div>
    );
}
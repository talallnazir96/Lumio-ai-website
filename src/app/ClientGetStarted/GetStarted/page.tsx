"use client"
import React, { useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
// Define a type for the technology objects
interface Technology {
  name: string;
  icon: string;
}

export default function GetStarted() {
  const router = useRouter();
  const handleNext = ()=>{
    router.push("/ClientGetStarted/ProjectDuration");
  }
  // Define the array of technologies with the Technology type
  const allTechnologies: Technology[] = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "JS" },
    { name: "PHP", icon: "PHP" },
    { name: "TypeScript", icon: "TS" },
    { name: "Java", icon: "☕" },
    { name: "HTML", icon: "</>" },
    { name: "DevOps", icon: "🔧" },
    { name: "React", icon: "⚛️" },
    { name: "Laravel", icon: "🔥" },
    { name: "CSS", icon: "🎨" },
    { name: "Angular", icon: "Ng" },
    { name: "MongoDB", icon: "🍃" },
    { name: "C++", icon: "C++" },
    { name: "Ruby", icon: "💎" },
    { name: "Swift", icon: "🐦" },
    { name: "Kotlin", icon: "🔷" },
    { name: "Go", icon: "🐹" },
    { name: "Rust", icon: "🦀" },
    { name: "SQL", icon: "DB" },
    { name: "NoSQL", icon: "DB" },
    { name: "Dart", icon: "🎯" },
    { name: "Flutter", icon: "🦋" },
    { name: "Node.js", icon: "🌳" },
    { name: "GraphQL", icon: "🔗" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "TensorFlow", icon: "🔬" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Blockchain", icon: "⛓️" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-4">
            We're happy to assist you, let us ask you a few questions to understand your needs.
          </h1>

          <h2 className="text-xl mb-8">What skills are you looking for?</h2>

          {/* Skills Container */}
          <div className="border p-4 rounded-lg mb-8 overflow-auto max-h-96">
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {allTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 flex items-center justify-center hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 mx-auto text-2xl">{tech.icon}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="mb-8 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search other skills"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 mb-20">
              <span className="text-gray-600">Not sure?</span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Schedule a demo</button>
            </div>

            <button className="w-48 max-w-md bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700" onClick={handleNext}>NEXT</button>

            <div>
              <a href="#" className="text-black underline">
                Skip for now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
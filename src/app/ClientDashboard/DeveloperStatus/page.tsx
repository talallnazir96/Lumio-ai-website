"use client";

import React, { useState } from "react";
import { DeveloperCard } from "../component/DeveloperCard";


interface Developer {
  id: string;
  name: string;
  position: string;
  skills: string[];
  salary: string;
  avatar: string;
  status: string;
}

const developers: Developer[] = [
  {
    id: "1",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "/assets/profile.png",
    status: "HIRED",
  },
  {
    id: "2",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "/assets/profile.png",
    status: "ENDED",
  },
];

const DeveloperStatus: React.FC = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(null);

  const handleOptions = (developer: Developer) => {
    setSelectedDeveloper(developer);
    // Add dropdown menu logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {developers.map((developer) => (
            <DeveloperCard
              key={developer.id}
              {...developer}
              onOptionsClick={() => handleOptions(developer)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default DeveloperStatus;
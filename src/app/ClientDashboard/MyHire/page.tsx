"use client";

import React, { useState } from "react";
import { CandidateCard } from "../component/CandidateCard";

interface Candidate {
  id: string;
  name: string;
  position: string;
  skills: string[];
  salary: string;
  avatar: string;
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "/assets/profile.png",
  },
  {
    id: "2",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "/assets/profile.png",
  },
  {
    id: "3",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "/assets/profile.png",
  },
  {
    id: "4",
    name: "John D. Rockefeller",
    position: "Senior AI Engineer",
    skills: ["React", "JavaScript", "Python"],
    salary: "$7,500",
    avatar: "/assets/profile.png",
  },
];

const MyHire: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("newest");

  return (
    <div className="bg-gray-100 container mx-auto py-8 max-w-4xl ">
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            name={candidate.name}
            position={candidate.position}
            skills={candidate.skills}
            salary={candidate.salary}
            avatar={candidate.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default MyHire;
import React from 'react';

interface CandidateCardProps {
  name: string;
  position: string;
  skills: string[];
  salary?: string;
  avatar?: string;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ name, position, skills, salary, avatar }) => {
  return (
    <div className="mb-4 bg-white hover:bg-gray-100 cursor-pointer transition-colors rounded-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src={avatar || "/assets/profile.png"} alt={name} className="h-24 w-24 rounded-full object-cover" />
          <div className="space-y-2">
            <div>
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-gray-500">{position}</p>
            </div>
            <div className="flex gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {salary && (
          <div className="text-right">
            <p className="font-medium">{salary}</p>
            <p className="text-sm text-gray-500">mo.</p>
          </div>
        )}
      </div>
    </div>
  );
};
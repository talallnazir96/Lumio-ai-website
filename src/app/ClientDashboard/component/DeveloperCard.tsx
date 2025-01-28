import React, { useState } from 'react';
import { Ban, History, UserCheck } from 'lucide-react';

interface DeveloperCardProps {
  name: string;
  position: string;
  skills: string[];
  salary: string;
  avatar?: string;
  status: 'HIRED' | 'AVAILABLE' | 'ENDED' | string;
  onOptionsClick: () => void;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({
  name,
  position,
  skills,
  salary,
  avatar,
  status,
  onOptionsClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white p-4 rounded-lg border mb-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-24 h-24 rounded-full" />
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-600">{position}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-right">
            <p className="font-medium">{salary}mo.</p>
          </div>
          <span className={`text-sm font-medium ${status === "HIRED" ? "text-green-600" : status === "ENDED" ? "text-red-600" : "text-gray-600"}`}>
            {status}
          </span>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-sm text-gray-600 flex items-center gap-1">
              Options
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                {status === "HIRED" && (
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-600 flex items-center gap-2 hover:bg-gray-100">
                    <Ban className="h-4 w-4" />
                    Request Contract Cancellation
                  </button>
                )}
                {status === "ENDED" && (
                  <>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-600 flex items-center gap-2 hover:bg-gray-100">
                      <UserCheck className="h-4 w-4" />
                      Hire Again
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-600 flex items-center gap-2 hover:bg-gray-100">
                      <History className="h-4 w-4" />
                      See History
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
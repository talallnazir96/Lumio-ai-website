import React from 'react';
import { FaUser, FaGraduationCap, FaTools, FaBriefcase, FaFileAlt, FaCheck, FaTimesCircle } from 'react-icons/fa';

interface SidebarProps {
  activeStep: string;
  formStatus: Record<string, { isCompleted: boolean; hasError: boolean }>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeStep, formStatus }) => {
  const navItems = [
    { title: 'Basics', icon: FaUser, step: 'basic' },
    { title: 'Education', icon: FaGraduationCap, step: 'education' },
    { title: 'Technical skills', icon: FaTools, step: 'technical-skills' },
    { title: 'Work experience', icon: FaBriefcase, step: 'work-experience' },
    { title: 'Profile Preview', icon: FaFileAlt, step: 'profile-preview' },
  ];

  return (
    <div className="w-64 p-4 rounded-sm mt-6 bg-white max-h-fit mx-auto md:mx-0">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <div
            key={item.title}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${item.step === activeStep ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="flex-1">{item.title}</span>
            {formStatus[item.step]?.isCompleted && <FaCheck className="h-4 w-4 text-green-500" />}
            {formStatus[item.step]?.hasError && <FaTimesCircle className="h-4 w-4 text-red-500" />}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
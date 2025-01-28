import React from 'react';

interface ExpertiseBadgeProps {
  icon: React.ReactNode;
  label: string;
}

export const ExpertiseBadge: React.FC<ExpertiseBadgeProps> = ({ icon, label }) => {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-sm">
      {icon} {label}
    </span>
  );
}
import React from 'react';

const VerifiedBadge: React.FC = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-blue-500" stroke="currentColor">
      <path
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default VerifiedBadge;
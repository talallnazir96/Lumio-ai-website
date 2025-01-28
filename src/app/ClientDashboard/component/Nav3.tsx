import React from 'react';

const Nav3: React.FC = () => {
  return (
    <nav className="m-1 flex justify-center w-full mb-0.5 bg-white p-4 shadow-sm rounded-lg">
      <button className="px-20 py-2 text-white rounded-full bg-blue-600 hover:bg-blue-600 transition-colors">
        View and manage your developers
      </button>
    </nav>
  );
};

export default Nav3;
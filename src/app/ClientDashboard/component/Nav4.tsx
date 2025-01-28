import React, { Dispatch, SetStateAction } from 'react';

interface Nav4Props {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}

const Nav4: React.FC<Nav4Props> = ({ sortBy, setSortBy }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <nav className="m-1 flex justify-center w-full mb-0.5 bg-white p-4 shadow-sm rounded-lg">
      <button className="px-20 py-2 text-white rounded-full bg-[#7FBEB3] hover:bg-[#6BA89D] transition-colors">
        Payroll management
      </button>
    </nav>
  );
};

export default Nav4;
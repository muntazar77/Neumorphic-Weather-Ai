
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  initialValue: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialValue }) => {
  const [input, setInput] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a city..."
        className="flex-grow bg-[#e0e5ec] text-gray-700 text-lg rounded-xl p-4 focus:outline-none placeholder-gray-500 transition-shadow duration-300 shadow-[inset_7px_7px_15px_#bec3c9,inset_-7px_-7px_15px_#ffffff]"
      />
      <button
        type="submit"
        className="bg-[#e0e5ec] text-gray-600 font-semibold px-6 rounded-xl transition-shadow duration-300 shadow-[7px_7px_15px_#bec3c9,-7px_-7px_15px_#ffffff] active:shadow-[inset_7px_7px_15px_#bec3c9,inset_-7px_-7px_15px_#ffffff]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

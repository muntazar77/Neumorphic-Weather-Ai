
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-16 h-16 border-8 border-[#e0e5ec] rounded-full animate-spin border-t-gray-400 shadow-[7px_7px_15px_#bec3c9,-7px_-7px_15px_#ffffff]"></div>
    </div>
  );
};

export default Loader;

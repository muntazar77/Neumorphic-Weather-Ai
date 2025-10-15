
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-[#e0e5ec] rounded-2xl p-6 text-center shadow-[inset_7px_7px_15px_#bec3c9,inset_-7px_-7px_15px_#ffffff]">
      <p className="text-red-500 font-semibold">{message}</p>
    </div>
  );
};

export default ErrorDisplay;

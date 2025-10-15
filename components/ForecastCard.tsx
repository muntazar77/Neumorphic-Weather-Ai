
import React from 'react';
import type { IconName } from '../types';
import WeatherIcon from './WeatherIcon';

interface ForecastCardProps {
  time: string;
  icon: IconName;
  temp: string;
  isDaily?: boolean;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ time, icon, temp, isDaily = false }) => {
  const cardClasses = isDaily 
    ? "flex flex-row sm:flex-col items-center justify-between sm:justify-center p-4 w-full flex-grow text-center"
    : "flex-shrink-0 flex flex-col items-center justify-center p-4 w-28 text-center";

  return (
    <div className={`${cardClasses} bg-[#e0e5ec] rounded-2xl shadow-[7px_7px_15px_#bec3c9,-7px_-7px_15px_#ffffff]`}>
      <p className="font-semibold text-gray-600">{time}</p>
      <div className="w-12 h-12 my-2">
        <WeatherIcon iconName={icon} className="w-full h-full text-gray-700" />
      </div>
      <p className="font-bold text-gray-800">{temp}</p>
    </div>
  );
};

export default ForecastCard;

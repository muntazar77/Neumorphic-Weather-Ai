
import React from 'react';
import type { HourlyForecastItem } from '../types';
import ForecastCard from './ForecastCard';

interface HourlyForecastProps {
  data: HourlyForecastItem[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ data }) => {
  return (
    <div className="bg-[#e0e5ec] rounded-3xl p-6 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <h3 className="text-xl font-bold text-gray-700 mb-4">Hourly Forecast</h3>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {data.map((item, index) => (
          <ForecastCard
            key={index}
            time={item.time}
            icon={item.icon}
            temp={`${Math.round(item.temp)}°`}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;

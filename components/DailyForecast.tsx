
import React from 'react';
import type { DailyForecastItem } from '../types';
import ForecastCard from './ForecastCard';

interface DailyForecastProps {
  data: DailyForecastItem[];
}

const DailyForecast: React.FC<DailyForecastProps> = ({ data }) => {
  return (
    <div className="bg-[#e0e5ec] rounded-3xl p-6 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <h3 className="text-xl font-bold text-gray-700 mb-4">5-Day Forecast</h3>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        {data.map((item, index) => (
          <ForecastCard
            key={index}
            time={item.day}
            icon={item.icon}
            temp={`${Math.round(item.high)}° / ${Math.round(item.low)}°`}
            isDaily={true}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;

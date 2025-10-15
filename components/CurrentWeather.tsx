
import React from 'react';
import type { CurrentWeather } from '../types';
import WeatherIcon from './WeatherIcon';

interface CurrentWeatherProps {
  data: CurrentWeather;
  city: string;
}

const InfoPill: React.FC<{ label: string; value: string | number; unit: string }> = ({ label, value, unit }) => (
  <div className="flex flex-col items-center">
    <span className="text-sm text-gray-500">{label}</span>
    <span className="font-bold text-lg text-gray-800">{value}{unit}</span>
  </div>
);


const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, city }) => {
  return (
    <div className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-3xl font-bold text-gray-800 capitalize">{city}</h2>
          <p className="text-lg text-gray-600 capitalize">{data.description}</p>
          <div className="text-7xl font-light text-gray-800 my-4">
            {Math.round(data.temp)}°<span className="text-5xl align-top">F</span>
          </div>
        </div>
        <div className="w-40 h-40">
          <WeatherIcon iconName={data.icon} className="w-full h-full text-gray-700" />
        </div>
      </div>
      <div className="mt-8 pt-6 border-t-2 border-gray-300/50 flex justify-around flex-wrap gap-4">
        <InfoPill label="Feels Like" value={Math.round(data.feelsLike)} unit="°" />
        <InfoPill label="Humidity" value={data.humidity} unit="%" />
        <InfoPill label="Wind Speed" value={Math.round(data.windSpeed)} unit=" mph" />
      </div>
    </div>
  );
};

export default CurrentWeather;

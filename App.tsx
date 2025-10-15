
import React, { useState, useEffect, useCallback } from 'react';
import type { WeatherData } from './types';
import { getWeatherData } from './services/weatherService';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('San Francisco');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (searchCity: string) => {
    if (!searchCity) return;
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const data = await getWeatherData(searchCity);
      if (data) {
        setWeatherData(data);
        setCity(searchCity);
      } else {
        setError('Could not fetch weather data. The response was empty.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchCity: string) => {
    fetchWeather(searchCity);
  };

  return (
    <div className="min-h-screen font-sans text-gray-700 antialiased p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <main className="w-full max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center text-gray-600 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.1)]">
          Neumorphic Weather
        </h1>
        
        <SearchBar onSearch={handleSearch} initialValue={city} />

        {loading && <Loader />}
        {error && <ErrorDisplay message={error} />}

        {weatherData && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <CurrentWeather data={weatherData.current} city={city} />
            <HourlyForecast data={weatherData.hourly} />
            <DailyForecast data={weatherData.daily} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

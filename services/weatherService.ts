
import { GoogleGenAI, Type } from "@google/genai";
import type { WeatherData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const weatherSchema = {
  type: Type.OBJECT,
  properties: {
    current: {
      type: Type.OBJECT,
      properties: {
        temp: { type: Type.NUMBER, description: "Current temperature in Fahrenheit." },
        feelsLike: { type: Type.NUMBER, description: "Feels like temperature in Fahrenheit." },
        humidity: { type: Type.NUMBER, description: "Humidity percentage." },
        windSpeed: { type: Type.NUMBER, description: "Wind speed in miles per hour." },
        description: { type: Type.STRING, description: "A short text description of the current weather." },
        icon: { type: Type.STRING, description: "An icon keyword: 'sunny', 'cloudy', 'partly-cloudy', 'rain', 'drizzle', 'storm', 'snow', 'windy', 'fog'." },
      },
    },
    hourly: {
      type: Type.ARRAY,
      description: "8-hour forecast.",
      items: {
        type: Type.OBJECT,
        properties: {
          time: { type: Type.STRING, description: "The hour for the forecast (e.g., '3 PM', '10 AM')." },
          temp: { type: Type.NUMBER, description: "Predicted temperature in Fahrenheit." },
          icon: { type: Type.STRING, description: "An icon keyword for the hour's weather." },
        },
      },
    },
    daily: {
      type: Type.ARRAY,
      description: "5-day forecast.",
      items: {
        type: Type.OBJECT,
        properties: {
          day: { type: Type.STRING, description: "The day of the week (e.g., 'Tuesday')." },
          high: { type: Type.NUMBER, description: "Predicted high temperature in Fahrenheit." },
          low: { type: Type.NUMBER, description: "Predicted low temperature in Fahrenheit." },
          icon: { type: Type.STRING, description: "An icon keyword for the day's weather." },
        },
      },
    },
  },
};

export const getWeatherData = async (city: string): Promise<WeatherData | null> => {
  try {
    const prompt = `Provide a detailed weather forecast for ${city}. Use Fahrenheit for temperature. The hourly forecast should cover the next 8 hours, and the daily forecast should cover the next 5 days. For icons, strictly use one of the following keywords: 'sunny', 'cloudy', 'partly-cloudy', 'rain', 'drizzle', 'storm', 'snow', 'windy', 'fog'.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: weatherSchema,
      },
    });

    const text = response.text.trim();
    if (!text) {
        throw new Error("API returned an empty response.");
    }

    const weatherData = JSON.parse(text);
    return weatherData as WeatherData;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error(`Failed to get weather for ${city}. Please check the city name and try again.`);
  }
};

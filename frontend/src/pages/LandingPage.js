import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const AirQualityLanding = () => {
  const location = { latitude: 28.6139, longitude: 77.2090 }; // Delhi
  const city = 'Delhi';
  const aqiData = 85; // Moderate
  const weatherData = {
    temperature_2m: 32,
    relative_humidity_2m: 48,
    precipitation: 0.2,
    visibility: 5000,
    wind_direction_10m: 90
  };

  const historicalAQI = [
    { date: '2025-06-25', aqi: 70 },
    { date: '2025-06-26', aqi: 78 },
    { date: '2025-06-27', aqi: 82 },
    { date: '2025-06-28', aqi: 88 },
    { date: '2025-06-29', aqi: 85 },
  ];

  const interpretAQI = (aqi) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
  };

  const aqiColor = "text-blue-600";

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-12 font-sans flex flex-col items-center justify-start space-y-10">
      {/* Separate Tab Heading */}
      <div className="w-full max-w-6xl bg-white rounded-3xl p-10 shadow-2xl mb-6">
        <h1 className={`text-5xl font-bold text-left ${aqiColor}`}>Air Quality</h1>
      </div>

      {/* Data Section */}
      <div className="w-full max-w-6xl bg-white rounded-3xl p-10 shadow-2xl">
        <div className="text-3xl text-slate-700 mb-10 pl-1">{city}</div>

        <div className="mb-10">
          <div className="text-4xl text-slate-600 mb-2">AQI</div>
          <div className="text-8xl font-bold text-blue-600">{aqiData}</div>
          <div className="text-3xl font-semibold text-blue-600 mt-2">{interpretAQI(aqiData)}</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <div className={`text-2xl font-semibold mb-2 ${aqiColor}`}>Temperature</div>
            <div className="text-3xl font-bold text-black">{weatherData.temperature_2m}°C</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <div className={`text-2xl font-semibold mb-2 ${aqiColor}`}>Humidity</div>
            <div className="text-3xl font-bold text-black">{weatherData.relative_humidity_2m}%</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <div className={`text-2xl font-semibold mb-2 ${aqiColor}`}>Precipitation</div>
            <div className="text-3xl font-bold text-black">{weatherData.precipitation} mm</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <div className={`text-2xl font-semibold mb-2 ${aqiColor}`}>Wind Direction</div>
            <div className="text-3xl font-bold text-black">{weatherData.wind_direction_10m}°</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
            <div className={`text-2xl font-semibold mb-2 ${aqiColor}`}>Visibility</div>
            <div className="text-3xl font-bold text-black">{weatherData.visibility} m</div>
          </div>
        </div>
      </div>

      {/* Historical AQI Trend Graph */}
      <div className="w-full max-w-6xl bg-white rounded-3xl p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Historical AQI Trend (Last 5 Days)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={historicalAQI} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="aqi" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AirQualityLanding;
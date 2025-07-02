import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const AirQualityLanding = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [displayLocation, setDisplayLocation] = useState('');
  const aqiData = 85;
  const weatherData = {
    temperature_2m: 32,
    relative_humidity_2m: 48,
    precipitation: 0.2,
    visibility: 5000,
    wind_direction_10m: 90,
  };

  const historicalAQI = [
    { date: '2025-06-25', aqi: 70 },
    { date: '2025-06-26', aqi: 78 },
    { date: '2025-06-27', aqi: 82 },
    { date: '2025-06-28', aqi: 88 },
    { date: '2025-06-29', aqi: 85 },
  ];

  const interpretAQI = (aqi) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
  };

  const handleLocateMe = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        // Replace with actual location API usage
      },
      (error) => {
        alert('Location access denied or unavailable.');
      }
    );
  };

  // Handle Enter key in search input
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setDisplayLocation(searchLocation);
    }
  };

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto bg-white text-gray-800">
      {/* Header with title, search, locate button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-blue-600">Air Quality Summary</h1>

        <div className="flex items-center gap-3 flex-wrap md:justify-end">
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search location..."
            className="px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm w-60"
          />
          <button
            onClick={handleLocateMe}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
          >
            Locate Me
          </button>
        </div>
      </div>

      {/* AQI Info Card */}
      <div className="bg-white rounded-2xl p-6 shadow-md border grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{displayLocation}</h2>
          <div className="text-6xl font-bold text-blue-600">{aqiData}</div>
          <div className="text-2xl font-medium mt-2">{interpretAQI(aqiData)}</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="text-sm text-gray-500">Temp</div>
            <div className="text-lg font-semibold">{weatherData.temperature_2m}°C</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="text-sm text-gray-500">Humidity</div>
            <div className="text-lg font-semibold">{weatherData.relative_humidity_2m}%</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="text-sm text-gray-500">Precipitation</div>
            <div className="text-lg font-semibold">{weatherData.precipitation} mm</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <div className="text-sm text-gray-500">Wind</div>
            <div className="text-lg font-semibold">{weatherData.wind_direction_10m}°</div>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 col-span-2 sm:col-span-1">
            <div className="text-sm text-gray-500">Visibility</div>
            <div className="text-lg font-semibold">{weatherData.visibility} m</div>
          </div>
        </div>
      </div>

      {/* Historical AQI Graph */}
      <div className="bg-white rounded-2xl p-6 shadow-md border">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Historical AQI Trend (Last 5 Days)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={historicalAQI}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AirQualityLanding;


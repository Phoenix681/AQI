import React from 'react';
import ForecastChart from '../components/ForecastChart';
import HourlyForecastChart from '../components/HourlyForecastChart';
import forecastData from '../data/forecastData.json';

const getAqiLevel = (aqi) => {
  if (aqi <= 50) return { label: 'Good', color: 'bg-green-500', tip: 'Great day for outdoor activity.' };
  if (aqi <= 100) return { label: 'Moderate', color: 'bg-yellow-400', tip: 'Sensitive groups should limit exposure.' };
  if (aqi <= 150) return { label: 'Sensitive', color: 'bg-orange-400', tip: 'Consider avoiding prolonged outdoor exertion.' };
  if (aqi <= 200) return { label: 'Unhealthy', color: 'bg-red-500', tip: 'Wear a mask and avoid outdoor activity.' };
  if (aqi <= 300) return { label: 'Very Unhealthy', color: 'bg-purple-600', tip: 'Stay indoors as much as possible.' };
  return { label: 'Hazardous', color: 'bg-pink-700', tip: 'Health alert: avoid all outdoor exposure.' };
};

const getNextThreeDays = (data) => data.slice(0, 3);

const ForecastPage = () => {
  const next3Days = getNextThreeDays(forecastData);
  const today = forecastData[0]; // Assuming first entry is current day
  const todayLevel = getAqiLevel(today.aqi);

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">Air Quality Forecast & History</h1>

      {/* Hourly Forecast Chart */}
      <div className="bg-white rounded-2xl p-4 shadow-md border">
        <HourlyForecastChart />
      </div>

      {/* Summary for current day */}
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-lg shadow">
        <p>
          <strong>Today&apos;s Air Quality:</strong> {today.date} with an AQI of <strong>{today.aqi}</strong> (
          <span className="font-semibold">{todayLevel.label}</span>).
          <br />
          <em>{todayLevel.tip}</em>
        </p>
      </div>

      {/* 3-Day Forecast Chart */}
      <div className="bg-white rounded-2xl p-4 shadow-md border">
        <ForecastChart data={next3Days} />
      </div>

      {/* 3-Day AQI Table with Health Tips */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-50 text-blue-700 uppercase tracking-wide">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">AQI</th>
              <th className="px-6 py-3">Level</th>
              <th className="px-6 py-3">Health Tip</th>
            </tr>
          </thead>
          <tbody>
            {next3Days.map((entry, index) => {
              const { label, color, tip } = getAqiLevel(entry.aqi);
              return (
                <tr key={index} className="border-t hover:bg-blue-50 transition">
                  <td className="px-6 py-3 font-medium">{entry.date}</td>
                  <td className="px-6 py-3">{entry.aqi}</td>
                  <td className="px-6 py-3">
                    <span className={`inline-block px-3 py-1 text-sm rounded-full text-white ${color}`}>
                      {label}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-gray-700">{tip}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastPage;


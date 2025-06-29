import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

// Dummy hourly data for current day (24 hours)
const hourlyData = [
  { hour: '00:00', aqi: 40 }, { hour: '01:00', aqi: 38 }, { hour: '02:00', aqi: 35 },
  { hour: '03:00', aqi: 33 }, { hour: '04:00', aqi: 30 }, { hour: '05:00', aqi: 32 },
  { hour: '06:00', aqi: 45 }, { hour: '07:00', aqi: 55 }, { hour: '08:00', aqi: 65 },
  { hour: '09:00', aqi: 75 }, { hour: '10:00', aqi: 85 }, { hour: '11:00', aqi: 95 },
  { hour: '12:00', aqi: 110 }, { hour: '13:00', aqi: 130 }, { hour: '14:00', aqi: 140 },
  { hour: '15:00', aqi: 150 }, { hour: '16:00', aqi: 135 }, { hour: '17:00', aqi: 120 },
  { hour: '18:00', aqi: 100 }, { hour: '19:00', aqi: 90 }, { hour: '20:00', aqi: 75 },
  { hour: '21:00', aqi: 60 }, { hour: '22:00', aqi: 50 }, { hour: '23:00', aqi: 45 },
];

const HourlyForecastChart = () => (
  <div className="w-full h-full bg-white p-6 rounded-lg shadow-md border border-blue-100 mt-10">
    <h2 className="text-xl font-bold text-blue-700 mb-4">Hourly AQI Forecast (Today)</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={hourlyData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
        <YAxis domain={[0, 300]} tick={{ fontSize: 12 }} />
        <Tooltip contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#d1d5db' }} />
        <Line type="monotone" dataKey="aqi" stroke="#3b82f6" strokeWidth={3} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default HourlyForecastChart;

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import data from '../data/historicalAqiData.json';

const HistoricalGraph = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100 w-full">
      <h3 className="text-xl font-bold text-blue-700 mb-4">AQI Trend (Past 7 Days)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 150]} tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#d1d5db' }} />
          <Line type="monotone" dataKey="aqi" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalGraph;

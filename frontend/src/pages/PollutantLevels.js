import React, { useEffect, useState } from "react";

const PollutantLevels = () => {
  const [pollutants, setPollutants] = useState(null);

  useEffect(() => {
    const mockData = {
      co: 220.34,
      no: 0.14,
      no2: 6.45,
      o3: 18.73,
      so2: 1.89,
      pm2_5: 12.41,
      pm10: 25.82,
      nh3: 0.60
    };
    setPollutants(mockData);
  }, []);

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">Pollutant Concentrations</h1>

      <div className="bg-white rounded-2xl p-6 shadow-md border">
        {pollutants ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(pollutants).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-100 rounded-xl p-6 text-center shadow-sm"
              >
                <p className="text-lg font-semibold text-blue-600 capitalize">{key}</p>
                <p className="text-2xl font-bold text-gray-800">{value.toFixed(2)} µg/m³</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">Loading pollutant data...</p>
        )}
      </div>
    </div>
  );
};

export default PollutantLevels;

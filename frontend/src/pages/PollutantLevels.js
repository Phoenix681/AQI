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
    <div className="min-h-screen bg-blue-50 px-6 py-12 font-sans flex flex-col items-center justify-start space-y-10">
      
      {/* Heading Section */}
      <div className="w-full max-w-6xl bg-white rounded-3xl p-10 shadow-2xl mb-6">
        <h1 className="text-5xl font-bold text-left text-blue-600">Pollutant Levels</h1>
      </div>

      {/* Pollutant Data Section */}
      <div className="w-full max-w-6xl bg-white rounded-3xl p-10 shadow-2xl">
        {pollutants ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(pollutants).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center"
              >
                <p className="text-2xl font-semibold capitalize text-blue-600">{key}</p>
                <p className="text-3xl font-bold text-black">{value.toFixed(2)} µg/m³</p>
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
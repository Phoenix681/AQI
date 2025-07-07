
// import React, { useEffect, useState } from "react";

// const PollutantLevels = () => {
//   const [pollutants, setPollutants] = useState(null);

//   useEffect(() => {
//     const mockData = {
//       co: 220.34,
//       no: 0.14,
//       no2: 6.45,
//       o3: 18.73,
//       so2: 1.89,
//       pm2_5: 12.41,
//       pm10: 25.82,
//       nh3: 0.60
//     };
//     setPollutants(mockData);
//   }, []);

//   // Human-readable pollutant names with proper chemical formatting
//   const pollutantNames = {
//     co: "CO",
//     no: "NO",
//     no2: "NO\u2082",
//     o3: "O\u2083",
//     so2: "SO\u2082",
//     pm2_5: "PM\u2082\u00B7\u2085",
//     pm10: "PM\u2081\u2080",
//     nh3: "NH\u2083"
//   };

//   return (
//     <div className="p-6 space-y-10 max-w-6xl mx-auto bg-white text-gray-800">
//       <h1 className="text-3xl font-bold text-blue-600">Pollutant Concentrations</h1>

//       <div className="bg-white rounded-2xl p-6 shadow-md border">
//         {pollutants ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {Object.entries(pollutants).map(([key, value]) => (
//               <div
//                 key={key}
//                 className="bg-gray-100 rounded-xl p-6 text-center shadow-sm"
//               >
//                 <p className="text-lg font-semibold text-blue-600">
//                   {pollutantNames[key]}
//                 </p>
//                 <p className="text-2xl font-bold text-gray-800">
//                   {value.toFixed(2)} µg/m³
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-lg">Loading pollutant data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PollutantLevels;


import React, { useEffect, useState } from "react";

const PollutantLevels = () => {
  const [pollutants, setPollutants] = useState(null);

  useEffect(() => {
    const mockData = {
      co: 610,
      no: 2.14,
      no2: 10.45,
      o3: 18.73,
      so2: 4,
      pm2_5: 27,
      pm10: 65,
      nh3: 3
    };
    setPollutants(mockData);
  }, []);

  // Names with subscripts
  const pollutantNames = {
    co: "CO",
    no: "NO",
    no2: "NO\u2082",
    o3: "O\u2083",
    so2: "SO\u2082",
    pm2_5: "PM\u2082\u00B7\u2085",
    pm10: "PM\u2081\u2080",
    nh3: "NH\u2083"
  };
  const safeLevels = {
    co: 2000,
    no: "N/A",
    no2: 80,
    o3: 100,
    so2: 80,
    pm2_5: 35,
    pm10: 60,
    nh3: 400
  };

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
                <p className="text-lg font-semibold text-blue-600">
                  {pollutantNames[key]}
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  {value.toFixed(2)} µg/m³
                </p>
                <p className="text-sm text-gray-600">
                  Safe Limit:{" "}
                  {safeLevels[key] === "N/A"
                    ? "Not Defined"
                    : `${safeLevels[key]} µg/m³`}
                </p>
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
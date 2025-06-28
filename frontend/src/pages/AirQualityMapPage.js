// src/pages/AirQualityMapPage.js
import React from 'react';
import AirQualityMap from '../components/AirQualityMap';

const AirQualityMapPage = () => {
  return (
    <div className="flex flex-col h-full bg-white text-gray-800">
      <header className="bg-white shadow px-6 py-4 text-2xl font-bold text-blue-600">
        Air Quality Map
      </header>
      <main className="flex-1 p-6 bg-blue-50">
        <div className="h-[80vh] rounded-2xl overflow-hidden shadow-md border">
          <AirQualityMap />
        </div>
      </main>
    </div>
  );
};

export default AirQualityMapPage;



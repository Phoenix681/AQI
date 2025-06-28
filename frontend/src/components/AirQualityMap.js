import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import aqiData from '../data/aqiData.json';

// Fix default marker icon issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const getAqiLevel = (aqi) => {
  if (aqi <= 50) return { label: 'Good', colorCode: '#22c55e' };
  if (aqi <= 100) return { label: 'Moderate', colorCode: '#eab308' };
  if (aqi <= 150) return { label: 'Sensitive', colorCode: '#fb923c' };
  if (aqi <= 200) return { label: 'Unhealthy', colorCode: '#ef4444' };
  if (aqi <= 300) return { label: 'Very Unhealthy', colorCode: '#9333ea' };
  return { label: 'Hazardous', colorCode: '#be185d' };
};

const ResizeHandler = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 300);
  }, [map]);
  return null;
};

const AirQualityMap = () => {
  return (
    <div className="w-full h-full relative z-0">
      {/* AQI Legend */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-4 text-sm space-y-1 z-[1000] border border-blue-100">
        <h3 className="font-semibold text-blue-600 mb-2">AQI Levels</h3>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-green-500 rounded-sm inline-block"></span> Good (0–50)</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-yellow-400 rounded-sm inline-block"></span> Moderate (51–100)</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-orange-400 rounded-sm inline-block"></span> Sensitive (101–150)</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-red-500 rounded-sm inline-block"></span> Unhealthy (151–200)</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-purple-600 rounded-sm inline-block"></span> Very Unhealthy (201–300)</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-pink-700 rounded-sm inline-block"></span> Hazardous (300+)</div>
      </div>

      <MapContainer
        center={[22.57, 88.36]}
        zoom={4}
        scrollWheelZoom
        className="w-full h-full rounded shadow z-0 relative"
      >
        <ResizeHandler />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {aqiData.map((location, index) => {
          const { label, colorCode } = getAqiLevel(location.aqi);
          return (
            <Marker position={[location.lat, location.lon]} key={index}>
              <Popup>
                <div className="text-sm space-y-1">
                  <div className="font-semibold text-base text-blue-700">{location.city}</div>
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: colorCode,
                        display: 'inline-block'
                      }}
                    ></span>
                    AQI: <strong>{location.aqi}</strong> ({label})
                  </div>
                  <p className="text-gray-600 text-xs">Updated: {location.time}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default AirQualityMap;






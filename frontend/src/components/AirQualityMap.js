import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icon issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// AQI Color Level Function
const getAqiLevel = (aqi) => {
  if (aqi <= 50) return { label: 'Good', colorCode: '#22c55e' };
  if (aqi <= 100) return { label: 'Moderate', colorCode: '#eab308' };
  if (aqi <= 150) return { label: 'Sensitive', colorCode: '#fb923c' };
  if (aqi <= 200) return { label: 'Unhealthy', colorCode: '#ef4444' };
  if (aqi <= 300) return { label: 'Very Unhealthy', colorCode: '#9333ea' };
  return { label: 'Hazardous', colorCode: '#be185d' };
};

// Fix map size on load
const ResizeHandler = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 300);
  }, [map]);
  return null;
};

// Simulated AQI
const getRandomAqi = () => Math.floor(Math.random() * 301);

// Geocode a city to lat/lon using OpenStreetMap Nominatim API
const geocodeCity = async (cityName) => {
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`);
  const data = await res.json();
  if (data.length > 0) {
    const { lat, lon, display_name } = data[0];
    return {
      city: display_name.split(',')[0],
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      aqi: getRandomAqi(),
      time: new Date().toLocaleTimeString(),
    };
  } else {
    throw new Error('Location not found');
  }
};

const AirQualityMap = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchedLocations, setSearchedLocations] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    try {
      const newLocation = await geocodeCity(searchInput.trim());
      // Avoid duplicate entries
      if (!searchedLocations.find((loc) => loc.city === newLocation.city)) {
        setSearchedLocations([...searchedLocations, newLocation]);
        setSearchInput('');
      }
    } catch (err) {
      alert('Location not found.');
    }
  };

  const removeLocation = (city) => {
    setSearchedLocations(searchedLocations.filter((loc) => loc.city !== city));
  };

  return (
    <div className="w-full h-full relative z-0">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="absolute top-4 left-16 z-[1000] flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search location..."
          className="px-4 py-2 rounded-lg border shadow text-sm w-48"
        />
        <button type="submit" className="bg-blue-600 text-white px-3 rounded-lg text-sm hover:bg-blue-700">
          Add
        </button>
      </form>

      {/* Location Tags */}
      <div className="absolute top-16 left-16 z-[1000] flex flex-wrap gap-2 max-w-[90%]">
        {searchedLocations.map((loc) => (
          <span
            key={loc.city}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs flex items-center gap-1"
          >
            {loc.city}
            <button
              onClick={() => removeLocation(loc.city)}
              className="ml-1 text-blue-600 hover:text-red-500"
            >
              ✕
            </button>
          </span>
        ))}
      </div>


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

        {/* User-Searched Markers */}
        {searchedLocations.map((location, index) => {
          const { label, colorCode } = getAqiLevel(location.aqi);
          return (
            <Marker position={[location.lat, location.lon]} key={`searched-${index}`}>
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
                        display: 'inline-block',
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







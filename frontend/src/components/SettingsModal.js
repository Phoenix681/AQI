import React, { useState } from 'react';

const SettingsModal = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState(true);
  const [tempUnit, setTempUnit] = useState('celsius');
  const [windUnit, setWindUnit] = useState('kmh');
  // Removed pressureUnit state

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-6 text-blue-600">Settings</h2>

        {/* Notifications */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 accent-blue-600"
            />
            Enable AQI Alerts
          </label>
        </div>

        {/* Units Settings */}
        <div className="space-y-4">
          {/* Temperature Unit */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Temperature Unit</label>
            <select
              value={tempUnit}
              onChange={(e) => setTempUnit(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
            </select>
          </div>

          {/* Wind Speed Unit */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Wind Speed Unit</label>
            <select
              value={windUnit}
              onChange={(e) => setWindUnit(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="kmh">km/h</option>
              <option value="ms">m/s</option>
              <option value="mph">mph</option>
            </select>
          </div>

          {/* Pressure Unit removed */}
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
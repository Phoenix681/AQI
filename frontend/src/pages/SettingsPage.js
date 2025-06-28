import React, { useState } from 'react';

const SettingsPage = () => {
  const [theme, setTheme] = useState('system');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');
  const [useLocation, setUseLocation] = useState(true);
  const [preferredCity, setPreferredCity] = useState('Delhi');

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-10">
      <h2 className="text-2xl font-bold text-blue-600">Settings</h2>

      {/* Core Settings */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Core Settings</h3>
        <div>
          <label className="block font-medium text-gray-600 mb-1">Theme</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="system">System Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </section>

      {/* Notifications */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5 accent-blue-600"
          />
          <label className="text-gray-700">Enable AQI alerts</label>
        </div>
      </section>

      {/* Language Settings */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Language</h3>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </section>

      {/* Location Preferences */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Location Preferences</h3>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useLocation}
            onChange={() => setUseLocation(!useLocation)}
            className="w-5 h-5 accent-blue-600"
          />
          <label className="text-gray-700">Use current location</label>
        </div>

        {!useLocation && (
          <div>
            <label className="block font-medium text-gray-600 mb-1">Preferred City</label>
            <input
              type="text"
              value={preferredCity}
              onChange={(e) => setPreferredCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter city name"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default SettingsPage;


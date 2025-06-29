import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsModal from '../components/SettingsModal'; // make sure path is correct

const HomePage = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow bg-white">
        <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          <Link to="/">Aeris</Link>
        </h1>

        {/* Settings Button (Gear) */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="text-blue-600 hover:text-blue-800 text-xl"
          aria-label="Settings"
        >
          ⚙️
        </button>

      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Your Personal Air Quality Companion
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
          Track real-time air quality, get personalized health advice, and plan your outdoor activities with confidence.
        </p>
        <Link to="/chat">
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold shadow transition">
            Get Started →
          </button>
        </Link>
      </section>

      {/* Features Preview */}
      <section className="py-12 bg-white shadow-inner">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="p-6 border rounded-2xl shadow hover:shadow-md transition text-center">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">AI Chat Assistant</h3>
            <p className="text-sm text-gray-600">Ask about current AQI and get tailored health tips instantly.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-md transition text-center">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">Forecast & History</h3>
            <p className="text-sm text-gray-600">View 7-day forecasts and past trends to plan better.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-md transition text-center">
            <h3 className="font-semibold text-lg text-blue-700 mb-2">Interactive AQI Map</h3>
            <p className="text-sm text-gray-600">Visualize air quality across cities and regions on a map.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 p-4 mt-auto">
        &copy; {new Date().getFullYear()} <span className="text-blue-600 font-semibold">Aeris</span>. All rights reserved.
      </footer>

      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
};

export default HomePage;




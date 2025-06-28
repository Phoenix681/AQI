// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ChatAssistant from './components/ChatAssistant';
import AirQualityMapPage from './pages/AirQualityMapPage';
import ForecastPage from './pages/forecastpage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Sidebar (hide on homepage) */}
      {!isHome && (
        <aside className={`fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
          <div className="p-6 space-y-6">
            <Link to="/" onClick={() => setSidebarOpen(false)}>
              <h1 className="text-2xl font-bold text-blue-600 hover:underline">Aeris</h1>
            </Link>
            <nav className="space-y-4 text-base">
              <Link to="/chat" className="block hover:text-blue-700 transition" onClick={() => setSidebarOpen(false)}>Chat Assistant</Link>
              <Link to="/forecast" className="block hover:text-blue-700 transition" onClick={() => setSidebarOpen(false)}>Forecast</Link>
              <Link to="/map" className="block hover:text-blue-700 transition" onClick={() => setSidebarOpen(false)}>Air Quality Map</Link>
              <Link to="/settings" className="block hover:text-blue-700 transition" onClick={() => setSidebarOpen(false)}>Settings</Link>
            </nav>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar (only when not on homepage) */}
        {!isHome && (
          <>
            {/* Mobile Topbar */}
            <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:hidden">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  {sidebarOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              <h1 className="text-lg font-semibold text-blue-600">Aeris</h1>
              <Link to="/login" className="text-blue-600 hover:underline text-sm">Login</Link>
            </header>

            {/* Desktop Topbar */}
            <header className="hidden md:flex items-center justify-between bg-white shadow px-6 py-4">
              <h1 className="text-xl font-semibold text-blue-600">Aeris</h1>
              <Link to="/login" className="text-blue-600 hover:underline text-sm">Login</Link>
            </header>
          </>
        )}

        {/* Page Content */}
        <main className={`flex-1 overflow-y-auto ${isHome ? 'p-0' : 'p-6 bg-blue-50'}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/forecast" element={<ForecastPage />} />
            <Route path="/map" element={<AirQualityMapPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;





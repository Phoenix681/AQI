import React from 'react';

const ChatAssistant = () => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center gap-4 bg-white shadow px-6 py-4 border-b">
        <img
          src="https://api.dicebear.com/7.x/open-peeps/svg?seed=user"
          alt="Avatar"
          className="w-12 h-12 rounded-full border border-blue-200"
        />
        <div>
          <h2 className="text-xl font-bold text-blue-700">AI Advisory Assistant</h2>
          <p className="text-sm text-gray-500">Track air quality with ease</p>
        </div>
      </div>

      {/* Chat Box */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-blue-50">
        <div className="bg-blue-600 text-white p-3 rounded-lg w-fit ml-auto max-w-[70%] shadow">
          What is the air quality right now?
        </div>

        <div className="bg-white p-3 rounded-lg w-fit max-w-[70%] shadow border border-gray-200">
          The air quality is good. The AQI is 42 today.
        </div>

        <div className="bg-white p-3 rounded-lg w-fit max-w-[70%] shadow border border-gray-200">
          <p className="font-semibold mb-1 text-blue-700">Here are some personalized tips for you:</p>
          <p className="text-gray-700">Consider opening windows to let in fresh air.</p>
        </div>
      </div>

      {/* Input Bar */}
      <div className="border-t bg-white px-6 py-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Send a message..."
          className="flex-grow border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="text-blue-600 hover:text-blue-700 text-2xl transition">🎤</button>
      </div>
    </div>
  );
};

export default ChatAssistant;


import React, { useState } from 'react';

// Main App component
const App = () => {
  const [message, setMessage] = useState("Hello, World!");

  return (
    // Main container with a centered, full-screen flex layout
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 font-sans text-gray-50">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl text-center transition-all duration-300 transform hover:scale-105">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          {message}
        </h1>
        <p className="text-lg sm:text-xl font-medium opacity-80">
          Your React + TypeScript app is deployed!
        </p>
      </div>
    </div>
  );
};

export default App;

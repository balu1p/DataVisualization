// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid animate-spin" style={{ background: 'linear-gradient(180deg, transparent 50%, #4299e1 50%)' }}></div>
    </div>
  );
};

export default Loader;

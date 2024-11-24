import React from 'react';

export const DigitalOverlay = () => {
  return (
    <div className="absolute inset-0 z-1">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900/80"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
};
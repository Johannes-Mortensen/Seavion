import React from 'react';

export const DigitalOverlay = () => {
  return (
    <div className="absolute inset-0 z-1">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900/80">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.1), transparent)',
            animation: 'slide 8s linear infinite'
          }}
        />
      </div>
    </div>
  );
};
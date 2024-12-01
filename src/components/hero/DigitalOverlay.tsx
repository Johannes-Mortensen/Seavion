import React from 'react';

export const DigitalOverlay = () => {
  return (
    <div className="absolute inset-0 z-1">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-900/70">
        {/* Dot grid pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        
        {/* Animated light beam */}
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
            animation: 'slide 8s linear infinite'
          }}
        />

        {/* Additional ambient light effect */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};
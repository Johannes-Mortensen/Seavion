import React from 'react';

export const DigitalOverlay = () => {
  return (
    <div className="absolute inset-0 z-10">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-900/70">
        {/* Dot grid pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Animated light beam */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, transparent 20%, rgba(59, 130, 246, 0.1) 25%, transparent 30%)',
            animation: 'slide 8s linear infinite'
          }}
        />

        {/* Additional ambient light effects */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full animate-float" />
      </div>
    </div>
  );
};
import React from 'react';

export const WaveBackground = () => {
  return (
    <div className="absolute inset-0 z-1 opacity-10">
      <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="#0ea5e9" 
          fillOpacity="0.8"
          d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,181.3C672,192,768,224,864,218.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-[wave_15s_ease-in-out_infinite]"
        >
        </path>
        <path 
          fill="#38bdf8" 
          fillOpacity="0.4"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="animate-[wave_12s_ease-in-out_infinite_reverse]"
        >
        </path>
      </svg>
    </div>
  );
};
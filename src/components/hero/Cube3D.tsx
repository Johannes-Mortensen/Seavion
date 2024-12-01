import React from 'react';

export const Cube3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="cube-wrapper absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
    </div>
  );
};
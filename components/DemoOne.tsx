
import React from 'react';
import Loader from './ui/3d-box-loader-animation';

/**
 * DemoOne component showcases the 3D Loader.
 * It uses Tailwind classes for centering and background styling.
 */
const DemoOne = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-[calc(100vh-160px)] bg-gray-200">
      <div className="relative">
        <Loader />
      </div>
    </div>
  );
};

export { DemoOne };

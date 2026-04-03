import React from 'react';
import { motion } from 'framer-motion';
import Loader from './ui/3d-box-loader-animation';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 overflow-hidden">
      {/* Absolute Minimalism: Pure 3D Animation Only */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[320px] flex items-center justify-center"
      >
        <Loader />
      </motion.div>
    </div>
  );
};
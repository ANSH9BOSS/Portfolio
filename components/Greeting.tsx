import React from 'react';
import { TextShimmer } from './ui/text-shimmer';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/spotlight';

export const Greeting = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-neutral-950 px-4 overflow-hidden">
      {/* Dramatic Atmosphere for the "Between" Phase */}
      <Spotlight 
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(0, 150, 255, 0.15)"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center space-y-6 z-10"
      >
        <div className="relative">
            <TextShimmer
              duration={1.8}
              className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight [--base-color:theme(colors.neutral.400)] [--base-gradient-color:theme(colors.neutral.950)] dark:[--base-color:theme(colors.neutral.600)] dark:[--base-gradient-color:theme(colors.white)]'
              children="Welcome to ANSH9BOSS"
            />
            {/* Subtle underline animation */}
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2"
            />
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="block"
        >
          <TextShimmer
            duration={2.5}
            className='text-xl md:text-2xl font-light tracking-[0.3em] uppercase [--base-color:theme(colors.neutral.300)] [--base-gradient-color:theme(colors.neutral.500)] dark:[--base-color:theme(colors.neutral.700)] dark:[--base-gradient-color:theme(colors.neutral.400)]'
            children="Initializing Excellence"
          />
        </motion.div>
      </motion.div>

      {/* Background Decorative Rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/5 rounded-full animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-purple-500/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};
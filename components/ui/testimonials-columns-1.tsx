
"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-xl shadow-primary/5 max-w-xs w-full" key={i}>
                  <div className="text-neutral-700 dark:text-neutral-300 italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="flex flex-col">
                      <div className="font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-5">{name}</div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-500 leading-5 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

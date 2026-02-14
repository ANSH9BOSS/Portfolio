"use client";

import React from "react";
import DisplayCards from "./ui/display-cards";
import { motion } from "framer-motion";
import { Code2, Bot, Layers } from "lucide-react";

const talentCards = [
  {
    icon: <Code2 className="size-4 text-emerald-300" />,
    title: "Minecraft Development",
    description: "Spigot, Java, NMS Expert",
    date: "5+ Years Exp",
    iconClassName: "text-emerald-500",
    titleClassName: "text-emerald-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Bot className="size-4 text-purple-300" />,
    title: "Discord Ecosystem",
    description: "Custom Bots & Integrations",
    date: "100+ Bots Built",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Layers className="size-4 text-amber-300" />,
    title: "Full-Stack Web",
    description: "React, Node.js, Next.js",
    date: "Modern Stack",
    iconClassName: "text-amber-500",
    titleClassName: "text-amber-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export const TalentSection = () => {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase">
              Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Masterpieces</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              From low-level Java optimizations for massive Minecraft networks to scalable web architectures and intelligent Discord automations. I blend performance with aesthetics.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">500k+</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mt-1">Users Reached</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">100%</h4>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center py-20"
          >
            <div className="relative scale-90 md:scale-100">
               {/* Decorative background element */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full" />
              <DisplayCards cards={talentCards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
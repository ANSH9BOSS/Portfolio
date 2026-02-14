"use client";

import React from "react";
import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";
import { Calendar, Code, Rocket, Brain, Shield, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    title: "Discovery",
    date: "Phase 01",
    content: "Diving deep into requirements, system architecture, and identifying performance bottlenecks.",
    category: "Planning",
    icon: Brain,
    relatedIds: [2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Prototyping",
    date: "Phase 02",
    content: "Building core Java modules and initial React layouts. Ensuring scalability from day one.",
    category: "Design",
    icon: Calendar,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Core Dev",
    date: "Phase 03",
    content: "Implementing Spigot/Paper optimizations and complex full-stack logic integrations.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4, 6],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 4,
    title: "Security",
    date: "Phase 04",
    content: "Hardening systems, auditing NMS calls, and securing API endpoints against common threats.",
    category: "Hardening",
    icon: Shield,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Deployment",
    date: "Phase 05",
    content: "Orchestrating cloud environments for maximum uptime and global load balancing.",
    category: "Release",
    icon: Cloud,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 25,
  },
  {
    id: 6,
    title: "Launch",
    date: "Phase 06",
    content: "Going live. Monitoring metrics and ensuring a smooth experience for all users.",
    category: "Success",
    icon: Rocket,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 15,
  },
];

export function InteractiveExperience() {
  return (
    <div className="bg-neutral-950">
      {/* Orbital Timeline Showcase - The core of the interactive journey */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden border-y border-neutral-900">
        <div className="absolute top-20 z-20 text-center px-4">
            <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
                The Development Cycle
            </motion.h2>
            <p className="text-neutral-500 text-sm md:text-base uppercase tracking-[0.4em]">Click nodes to explore our process</p>
        </div>
        
        <div className="w-full h-full">
            <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </section>
    </div>
  );
}
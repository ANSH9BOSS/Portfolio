"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ShineBorder } from "@/components/ui/shine-border";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "ANSH9BOSS",
}: {
    title?: string;
}) {
    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <SparklesText 
                        text={title}
                        className="text-5xl sm:text-7xl md:text-9xl font-bold mb-8 tracking-tighter text-neutral-900 dark:text-neutral-100"
                        sparklesCount={12}
                    />

                    <div className="mb-12 w-full">
                        <GooeyText 
                            texts={["Minecraft Full-Stack Developer", "Discord Bots", "Full stack websites"]}
                            className="font-bold h-24"
                            textClassName="text-3xl md:text-4xl text-neutral-600 dark:text-neutral-400"
                        />
                    </div>

                    <div className="flex justify-center">
                        <ShineBorder
                            className="p-0 bg-transparent dark:bg-transparent min-w-[280px] rounded-2xl overflow-hidden shadow-2xl"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                            borderRadius={16}
                            borderWidth={2}
                            duration={8}
                        >
                            <Button
                                variant="ghost"
                                onClick={scrollToServices}
                                className="rounded-2xl px-12 py-8 text-xl font-bold backdrop-blur-md 
                                bg-white/95 hover:bg-white dark:bg-black/95 dark:hover:bg-black 
                                text-black dark:text-white transition-all duration-300 
                                group border-none shadow-none w-full"
                            >
                                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                    Discover Excellence
                                </span>
                                <span
                                    className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                    transition-all duration-300"
                                >
                                    →
                                </span>
                            </Button>
                        </ShineBorder>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator - Centralised */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2 // Show after hero animation
                }}
                className="absolute bottom-10 inset-x-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
            >
                <span className="text-xs font-bold text-neutral-400 dark:text-neutral-600 tracking-[0.2em] uppercase text-center select-none">
                    Scroll Down Below
                </span>
                <div className="w-px h-16 bg-gradient-to-b from-neutral-400 dark:from-neutral-600 to-transparent" />
            </motion.div>
        </div>
    );
}
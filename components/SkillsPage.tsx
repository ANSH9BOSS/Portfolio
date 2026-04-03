import React from 'react';
import { SpiralAnimation } from './ui/spiral-animation';
import { GlowingEffect } from './ui/glowing-effect';
import { motion } from 'framer-motion';
import { Server, Terminal, FileCode, Package, Bot, Globe, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillsContent = [
  {
    title: "Minecraft Server Setup",
    description: "Enterprise network architecture utilizing Velocity, BungeeCord, and high-performance dedicated nodes for 1000+ player stability.",
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: "Java Plugins & NMS",
    description: "Deep Spigot/Paper API manipulation and NMS packet handling for custom mobs, advanced gameplay mechanics, and game logic.",
    icon: <Terminal className="h-4 w-4" />,
  },
  {
    title: "Skripts & Logic",
    description: "Efficient scripting for rapid feature deployment, automated economy systems, and dynamic GUI management.",
    icon: <FileCode className="h-4 w-4" />,
  },
  {
    title: "Resource Packs & 3D",
    description: "Integration of custom Blockbench models and shader-enhanced textures into unified server resource ecosystems.",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Discord Bots",
    description: "Scalable Discord management systems with real-time Minecraft-Discord bridges, verification gates, and AI automation.",
    icon: <Bot className="h-4 w-4" />,
  },
  {
    title: "Web Solutions",
    description: "Modern, high-performance web applications built with React, Node.js, and SQL for server dashboards and stores.",
    icon: <Globe className="h-4 w-4" />,
  }
];

export const SkillsPage = () => {
  return (
    <div className="relative min-h-screen pt-20 pb-20 px-4 bg-black overflow-hidden">
      {/* Dynamic Spiral Animation Background */}
      <div className="fixed inset-0 z-0">
        <SpiralAnimation />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsContent.map((skill, idx) => (
            <GridItem
              key={idx}
              index={idx}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] text-center backdrop-blur-3xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <Cpu className="w-16 h-16 text-blue-500 animate-pulse-slow" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">Scalable Architecture</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Every system I build is designed for maximum efficiency and seamless growth. From low-level Java optimizations to cloud-ready web systems, I ensure your project performs at scale.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  // Fix: Added key to the props type definition to satisfy TypeScript's JSX property checking
  key?: React.Key;
}

const GridItem = ({ icon, title, description, index }: GridItemProps) => {
  return (
    <motion.li 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="min-h-[14rem] list-none"
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background/50 backdrop-blur-sm p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-black tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground uppercase italic">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
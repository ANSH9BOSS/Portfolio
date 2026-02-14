
import React from 'react';
import { motion } from 'framer-motion';
import { SpiralAnimation } from './ui/spiral-animation';
import { GlowingEffect } from './ui/glowing-effect';
import { 
  Flame, 
  Sparkles, 
  Star, 
  Ticket, 
  Box, 
  ShieldCheck, 
  User, 
  Globe, 
  Layout, 
  CreditCard, 
  ShoppingBag,
  ExternalLink,
  Code
} from 'lucide-react';

const minecraftProjects = [
  {
    name: "Fireblade",
    tagline: "Ultra-Fast Combat Engine",
    description: "A custom combat enhancement plugin designed for competitive PvP environments, featuring low-latency hit detection.",
    icon: <Flame className="h-4 w-4" />,
  },
  {
    name: "ItemEffects",
    tagline: "Visual Item Augmentation",
    description: "Adds stunning particle effects and custom enchantments to any in-game item using low-level NMS packet manipulation.",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    name: "StarSMP Core",
    tagline: "The Survival Foundation",
    description: "A comprehensive SMP management suite including custom economy, land claims, and unique survival mechanics.",
    icon: <Star className="h-4 w-4" />,
  },
  {
    name: "Sync Ticket",
    tagline: "Cross-Server Support",
    description: "Bridge your support system between Minecraft and Discord. Tickets sync instantly for real-time staff response.",
    icon: <Ticket className="h-4 w-4" />,
  },
  {
    name: "AirDrop Pro",
    tagline: "Dynamic Event System",
    description: "Randomly generated loot events with customizable crates, guardian mobs, and holographic announcements.",
    icon: <Box className="h-4 w-4" />,
  },
  {
    name: "Security Guard",
    tagline: "Advanced Anti-Exploit",
    description: "Proprietary security layer blocking known packet exploits, command injections, and automated server flooding.",
    icon: <ShieldCheck className="h-4 w-4" />,
  }
];

const webProjects = [
  {
    name: "Elite Portfolios",
    tagline: "High-End Developer Hubs",
    description: "Immersive personal branding sites featuring advanced animations, interactive shaders, and premium UX design.",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Guns.lol Clones",
    tagline: "Modern Bio-Link Hubs",
    description: "Ultra-fast, customizable profile pages optimized for social media presence and personal linking.",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    name: "Hosting Solutions",
    tagline: "Professional Server Sites",
    description: "Conversion-optimized landing pages for VPS, Dedicated, and Game hosting providers with modern aesthetic.",
    icon: <Layout className="h-4 w-4" />,
  },
  {
    name: "Billing Panels",
    tagline: "Custom Fintech UI",
    description: "Modernized themes and custom dashboard integrations for WHMCS and Pterodactyl billing modules.",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    name: "Server Stores",
    tagline: "E-Commerce for Communities",
    description: "Custom-built web stores and themes for Tebex and CraftingStore, driving higher retention and sales.",
    icon: <ShoppingBag className="h-4 w-4" />,
  }
];

export const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen pt-40 pb-20 px-4 bg-black overflow-hidden">
      {/* Fixed Spiral Animation Background to match SkillsPage */}
      <div className="fixed inset-0 z-0">
        <SpiralAnimation />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase italic text-balance">
              LEGACY <span className="text-white/10">&</span> PROJECTS
            </h1>
            <p className="text-neutral-500 text-xs md:text-sm font-bold uppercase tracking-[0.6em] max-w-2xl mx-auto">
              A curated selection of industry-leading software and web ecosystems
            </p>
          </motion.div>
        </header>

        {/* Minecraft Projects Section */}
        <section className="mb-40">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl font-black text-white tracking-[0.3em] uppercase italic pr-4 border-r border-white/20">Minecraft</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </motion.div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minecraftProjects.map((project, idx) => (
              <GridItem 
                key={project.name}
                index={idx}
                icon={project.icon}
                title={project.name}
                tagline={project.tagline}
                description={project.description}
              />
            ))}
          </ul>
        </section>

        {/* Web Projects Section */}
        <section className="mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl font-black text-white tracking-[0.3em] uppercase italic pr-4 border-r border-white/20">Web Dev</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </motion.div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, idx) => (
              <GridItem 
                key={project.name}
                index={idx}
                icon={project.icon}
                title={project.name}
                tagline={project.tagline}
                description={project.description}
              />
            ))}
          </ul>
        </section>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] text-center backdrop-blur-3xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <Code className="w-16 h-16 text-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">Need Custom Software?</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed mb-10">
              I specialize in complex logic and premium aesthetics. From massive Minecraft networks to scalable web startups, I turn technical challenges into seamless digital experiences.
            </p>
            <button className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-110 transition-transform active:scale-95 shadow-2xl">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  index: number;
}

const GridItem = ({ icon, title, tagline, description, index }: GridItemProps) => {
  return (
    <motion.li 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.8 }}
      className="min-h-[16rem] list-none group"
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
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background/50 backdrop-blur-sm p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 transition-all duration-500">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 group-hover:scale-110 transition-transform duration-500">
                {icon}
              </div>
              <ExternalLink className="w-4 h-4 text-white/10 group-hover:text-white transition-all group-hover:translate-x-1" />
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="pt-0.5 text-xl leading-[1.375rem] font-black tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground uppercase italic">
                  {title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white/60 transition-colors">
                  {tagline}
                </p>
              </div>
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

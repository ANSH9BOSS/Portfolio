import React from "react";
import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconCloud,
  IconCode,
  IconCpu,
  IconDatabase,
  IconMessageCircle,
  IconShieldCheck,
  IconBolt,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Minecraft Systems",
      description:
        "High-performance Java plugins using Spigot, Paper, and NMS for seamless gameplay.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Discord Ecosystems",
      description:
        "Advanced bots with slash commands, automated moderation, and cross-platform syncing.",
      icon: <IconMessageCircle />,
    },
    {
      title: "Full-Stack Web",
      description:
        "Modern, responsive dashboards and landing pages built with React and Next.js.",
      icon: <IconCode />,
    },
    {
      title: "Cloud Deployment",
      description: "Optimized infrastructure setup for 100% uptime and low-latency worldwide access.",
      icon: <IconCloud />,
    },
    {
      title: "Backend Architecture",
      description: "Scalable API designs using Node.js and robust microservices architecture.",
      icon: <IconCpu />,
    },
    {
      title: "Data Management",
      description:
        "Efficient SQL and NoSQL database structures designed for speed and reliability.",
      icon: <IconDatabase />,
    },
    {
      title: "Security Audits",
      description:
        "Rigorous testing and patching of vulnerabilities in plugins and web apps.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Instant Performance",
      description: "Low-level optimizations to ensure your software runs faster than the competition.",
      icon: <IconBolt />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        /* Passing props explicitly to resolve the TypeScript error regarding the reserved 'key' property when using spread operator */
        <Feature 
          key={feature.title} 
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index} 
        />
      ))}
    </div>
  );
}

// Fix: Added key to the props type definition to satisfy TypeScript's JSX property checking
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  key?: React.Key;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
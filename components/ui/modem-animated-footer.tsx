import React from "react";
import {
  NotepadTextDashed,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden bg-white dark:bg-neutral-950", className)}>
      <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-background mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-900 dark:text-neutral-100 text-3xl font-bold tracking-tighter">
                    {brandName}
                  </span>
                </div>
                <p className="text-neutral-500 font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-6 gap-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-neutral-400 hover:text-blue-500 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-125 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-500 max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 hover:scale-105"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 z-20">
            <p className="text-sm text-neutral-500 text-center md:text-left font-mono">
              ©{new Date().getFullYear()} {brandName.toUpperCase()} // ALL RIGHTS RESERVED
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  className="text-sm text-neutral-500 hover:text-blue-500 transition-colors duration-300 hover:font-medium font-mono"
                >
                  CRAFTED BY {creatorName.toUpperCase()}
                </a>
              </nav>
            )}
          </div>
        </div>

        {/* Large background text */}
        <div 
          className="bg-gradient-to-b from-neutral-900/10 via-neutral-900/5 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-black tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: 'clamp(3rem, 15vw, 12rem)',
            maxWidth: '100vw'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo container with high-end glass effect */}
        <div className="absolute hover:border-blue-500/50 hover:scale-110 transition-all duration-500 drop-shadow-[0_0px_20px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.05)] bottom-24 md:bottom-20 backdrop-blur-md rounded-3xl bg-white/40 dark:bg-black/40 left-1/2 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-3 -translate-x-1/2 z-10">
          <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 rounded-2xl flex items-center justify-center shadow-2xl">
            {brandIcon || (
              <NotepadTextDashed className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-white dark:text-black drop-shadow-lg" />
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent w-full left-1/2 -translate-x-1/2"></div>
        <div className="bg-gradient-to-t from-white dark:from-neutral-950 via-white/80 dark:via-neutral-950/80 blur-[2em] to-transparent absolute bottom-0 w-full h-40 pointer-events-none"></div>
      </footer>
    </section>
  );
};
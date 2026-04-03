import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Waves } from './ui/wave-background';

const faqs = [
  { q: "What services do you offer?", a: "I offer full-stack development specializing in Minecraft server ecosystems (Java/Spigot/NMS), custom Discord bots, and high-performance web solutions (React/Next.js)." },
  { q: "How long have you been developing?", a: "I have over 5 years of professional experience in technical engineering and software architecture." },
  { q: "What is your primary tech stack?", a: "For web, I use React, Next.js, and Node.js. For Minecraft, I primarily use Java with deep Spigot/Paper API and NMS expertise." },
  { q: "Do you handle Minecraft server hosting?", a: "While I don't provide hosting directly, I offer enterprise-level infrastructure setup and cloud deployment services for maximum stability." },
  { q: "Can you build custom plugins for older versions?", a: "Yes, I can develop and optimize plugins for any version from 1.8.8 to the latest, ensuring cross-version compatibility." },
  { q: "How do I start a project with you?", a: "Simply click the 'Contact' or 'Menu' button and reach out via Discord or Email to discuss your requirements." },
  { q: "Do you offer long-term maintenance?", a: "Yes, I offer monthly maintenance plans to ensure your systems remain secure, updated, and bug-free." },
  { q: "What is your pricing model?", a: "Pricing is project-based. I provide fixed quotes after reviewing your specific requirements and scope." },
  { q: "Can you integrate Discord with my Minecraft server?", a: "Absolutely. I build custom bridges for syncing chats, syncing roles, cross-platform commands, and real-time logs." },
  { q: "Do you build web dashboards for servers?", a: "Yes, I create custom admin and player dashboards with real-time stats, server controls, and billing integration." },
  { q: "Are your plugins optimized for high player counts?", a: "Yes, all systems are built with low-level optimizations (NMS/Packets) to handle thousands of concurrent players efficiently." },
  { q: "Do you provide the source code?", a: "Source code provision is available upon request and is typically included in my premium development packages." },
  { q: "What is your typical turnaround time?", a: "Turnaround depends on complexity. Small plugins take 3-5 days, while larger web ecosystems can take 2-4 weeks." },
  { q: "Do you offer support after the project is delivered?", a: "I provide a 30-day bug-free guarantee and ongoing support for any delivered project." },
  { q: "Can you fix bugs in existing plugins?", a: "Yes, I offer specialized debugging and optimization services for existing codebases." },
  { q: "Do you work with networks (Velocity/Bungee)?", a: "Yes, I have extensive experience setting up and optimizing proxy-based networks for global scale." },
  { q: "Can you build custom e-commerce stores?", a: "Yes, I develop high-conversion stores using custom gateways or integrating with platforms like Tebex and CraftingStore." },
  { q: "What payment methods do you accept?", a: "I accept most major payment methods including PayPal, Crypto, and Bank Transfers." },
  { q: "Do you offer security audits for servers?", a: "Yes, I perform deep-dive security audits to patch packet exploits, command injections, and network vulnerabilities." },
  { q: "How can I contact you?", a: "The best way to reach me is via Discord (ansh9boss) or through the Email link provided in the footer." }
];

const FAQItem = ({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void, key?: React.Key }) => (
  <div className="border-b border-white/5 last:border-0 relative z-10">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-8 text-left group transition-all"
    >
      <span className={`text-xl md:text-2xl font-bold tracking-tight uppercase italic transition-colors ${isOpen ? 'text-white' : 'text-neutral-500 group-hover:text-white/70'}`}>
        {q}
      </span>
      <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-180 text-white' : 'text-neutral-600'}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-neutral-400 text-lg leading-relaxed max-w-3xl font-medium">
            {a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen pt-40 pb-20 px-4 bg-black overflow-hidden">
      {/* Wave Background Effect */}
      <Waves 
        className="opacity-30" 
        backgroundColor="#000000" 
        strokeColor="rgba(255, 255, 255, 0.2)"
      />

      {/* Decorative Blur Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-white opacity-20" />
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase italic">
              COMMON <span className="text-white/10">QUERIES</span>
            </h1>
            <p className="text-neutral-500 text-xs md:text-sm font-bold uppercase tracking-[0.6em]">
              Everything you need to know about working with ANSH9BOSS
            </p>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[3rem]"
        >
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-neutral-500 font-bold uppercase tracking-[0.3em] mb-8 italic">Still have questions?</p>
          <a 
            href="mailto:anshkumar19zx@gmail.com"
            className="inline-block px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-110 transition-transform active:scale-95 shadow-2xl"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Greeting } from './components/Greeting';
import { BackgroundPaths } from './components/ui/background-paths';
import { TalentSection } from './components/TalentSection';
import { Testimonials } from './components/Testimonials';
import { FeaturesSectionWithHoverEffects } from './components/ui/feature-section-with-hover-effects';
import { InteractiveExperience } from './components/InteractiveExperience';
import { Marquee } from './components/ui/marquee';
import { Footer } from './components/ui/modem-animated-footer';
import { KineticNavigation } from './components/ui/kinetic-navigation';
import { SkillsPage } from './components/SkillsPage';
import { ProjectsPage } from './components/ProjectsPage';
import { FAQPage } from './components/FAQPage';
import VaporizeTextCycle from './components/ui/vapour-text-effect';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Mail, 
  MessageSquare, 
  Code2, 
  Twitter
} from 'lucide-react';

type AppState = 'loading' | 'greeting' | 'hero' | 'skills' | 'projects' | 'faq';

const Logos = {
  tailwindcss: () => (
    <svg className="h-7 w-auto aspect-[262/33]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 262 33">
      <path className="fill-cyan-500" fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" />
    </svg>
  ),
  framer: () => (
    <svg className="h-6 w-auto aspect-square fill-current text-neutral-900 dark:text-neutral-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L12 8L4 16L4 8L12 0ZM12 8L20 0L20 8L12 16L12 8ZM12 16L20 24L4 24L12 16Z" />
    </svg>
  ),
  nextjs: () => (
    <svg className="h-5 w-auto aspect-[394/79] fill-current text-neutral-900 dark:text-neutral-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 79">
      <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path>
      <path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fillRule="evenodd"></path>
    </svg>
  ),
  aws: () => (
    <svg className="h-7 w-auto aspect-square fill-current text-neutral-900 dark:text-neutral-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.962 13.921c-2.31 0-3.321 1.096-3.321 2.45 0 1.258.85 2.193 2.535 2.193 1.218 0 2.372-.644 2.87-1.464l.033 1.054c.002.046.04.082.086.082h1.618a.087.087 0 0 0 .087-.087v-5.07c0-2.324-1.637-3.13-3.882-3.13-2.022 0-3.66 1.042-3.791 2.898-.002.045.033.083.078.083l1.84.004c.044 0 .08-.035.082-.079.056-.632.551-1.054 1.631-1.054 1.134 0 1.936.425 1.936 1.602v.568c-.6-.233-1.617-.468-2.614-.468v.001zm.685 3.32c-.524 0-1.085-.246-1.085-.863 0-.528.52-.772 1.04-.772.585 0 1.343.163 1.76.438v.373c-.287.493-.93.824-1.715.824zm9.32 1.487c-.571.503-1.503.772-2.31.772-2.176 0-3.324-1.398-3.324-3.52 0-2.58 1.683-3.79 3.486-3.79 1.144 0 1.83.35 2.227.697.034.03.087.006.087-.04V7.411a.087.087 0 0 0-.087-.087h-1.666a.087.087 0 0 0-.087.087v.646c-.368-.291-.986-.641-1.928-.641-2.091 0-3.847 1.547-3.847 4.35 0 2.834 1.583 4.234 3.905 4.234 1.192 0 1.78-.456 2.087-.723l.03.376c.004.045.04.08.085.08h1.66c.048 0 .087-.039.087-.087v-2.01c0-.048-.039-.087-.087-.087h-1.66a.087.087 0 0 0-.087.087v.654c0 .022.003.045-.034.077zm-19.864-.817c.046.012.089-.017.098-.063l1.802-9.453a.087.087 0 0 0-.085-.103H2.215a.087.087 0 0 0-.086.071l-.736 4.364c-.01.057-.089.057-.1 0l-.736-4.364A.087.087 0 0 0 .47 7.311H.087C.039 7.311 0 7.35 0 7.398l.383 2.112c.008.046.052.076.098.064l1.62-.423c.046-.012.089.018.098.064l.156.845a.087.087 0 0 1-.085.103H1.474a.087.087 0 0 0-.085.103l.316 1.71c.008.045.05.075.094.067l.3-.056c.047-.009.09.022.096.069l.192 1.493a.087.087 0 0 0 .086.076h.122c.048 0 .087-.039.087-.087V13.8l.193 1.054a.087.087 0 0 0 .085.071l.454.004z" />
    </svg>
  ),
};

function App() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingState, setPendingState] = useState<AppState | null>(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setAppState('greeting'), 2500);
    const greetingTimer = setTimeout(() => setAppState('hero'), 6500);
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(greetingTimer);
    };
  }, []);

  const marqueeLogos = [Logos.tailwindcss, Logos.framer, Logos.nextjs, Logos.aws];

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Github className="w-6 h-6" />, href: "https://github.com", label: "GitHub" },
    { icon: <MessageSquare className="w-6 h-6" />, href: "https://discord.com/users/ansh9boss", label: "Discord" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:anshkumar19zx@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { label: "Home", href: "#", onClick: () => handleNavigate('hero') },
    { label: "Skills", href: "#", onClick: () => handleNavigate('skills') },
    { label: "Projects", href: "#", onClick: () => handleNavigate('projects') },
    { label: "FAQ's", href: "#", onClick: () => handleNavigate('faq') },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#" },
  ];

  const handleNavigate = (page: string) => {
    const target = page as AppState;
    if (target === appState) return;
    setPendingState(target);
    setIsTransitioning(true);
    // Transition duration buffer
    setTimeout(() => {
      setAppState(target);
      setIsTransitioning(false);
      setPendingState(null);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[11000] bg-black flex items-center justify-center"
          >
            <div className="w-full max-w-4xl h-64">
              <VaporizeTextCycle 
                texts={[pendingState?.toUpperCase() || "LOADING"]} 
                font={{ fontFamily: "Inter, sans-serif", fontSize: "100px", fontWeight: 900 }}
                animation={{ vaporizeDuration: 2, fadeInDuration: 0.5, waitDuration: 0 }}
              />
            </div>
          </motion.div>
        )}

        {appState === 'loading' && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[10000]"
          >
            <LoadingScreen />
          </motion.div>
        )}

        {appState === 'greeting' && (
          <motion.div
            key="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[9000]"
          >
            <Greeting />
          </motion.div>
        )}

        {(['hero', 'skills', 'projects', 'faq'].includes(appState)) && (
            <KineticNavigation onNavigate={handleNavigate} />
        )}

        {appState === 'hero' && (
          <motion.div key="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <BackgroundPaths title="ANSH9BOSS" />
            <section id="services" className="bg-white dark:bg-neutral-950 py-20 border-y border-neutral-100 dark:border-neutral-900">
              <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">Premium Services</h2>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">End-to-end development solutions tailored for high-scale environments.</p>
              </div>
              <FeaturesSectionWithHoverEffects />
            </section>
            <section className="py-12 bg-neutral-50/50 dark:bg-neutral-900/30 overflow-hidden">
                <Marquee speed={25} pauseOnHover>
                    {marqueeLogos.map((Logo, index) => (
                        <div key={index} className="flex-shrink-0 relative h-full w-auto mx-[4rem] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <Logo />
                        </div>
                    ))}
                </Marquee>
            </section>
            <div id="expertise"><TalentSection /></div>
            <InteractiveExperience />
            <div id="testimonials"><Testimonials /></div>
            <Footer brandName="ANSH9BOSS" brandDescription="Expert Full-Stack Developer specializing in Minecraft ecosystems, Discord automations, and premium web solutions." socialLinks={socialLinks} navLinks={navLinks} creatorName="ANSH9BOSS" creatorUrl="https://github.com" brandIcon={<Code2 className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-white dark:text-black drop-shadow-lg" />} />
          </motion.div>
        )}

        {appState === 'skills' && (
          <motion.div key="skills" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="w-full">
            <SkillsPage />
            <Footer brandName="ANSH9BOSS" brandDescription="Specialized technical expert in high-concurrency Minecraft server systems and modern full-stack engineering." socialLinks={socialLinks} navLinks={navLinks} creatorName="ANSH9BOSS" creatorUrl="https://github.com" brandIcon={<Code2 className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-white dark:text-black drop-shadow-lg" />} />
          </motion.div>
        )}

        {appState === 'projects' && (
          <motion.div key="projects" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} className="w-full">
            <ProjectsPage />
            <Footer brandName="ANSH9BOSS" brandDescription="Showcasing a legacy of premium Minecraft plugins and modern web applications." socialLinks={socialLinks} navLinks={navLinks} creatorName="ANSH9BOSS" creatorUrl="https://github.com" brandIcon={<Code2 className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-white dark:text-black drop-shadow-lg" />} />
          </motion.div>
        )}

        {appState === 'faq' && (
          <motion.div key="faq" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="w-full">
            <FAQPage />
            <Footer brandName="ANSH9BOSS" brandDescription="Answers to your most frequent technical and collaborative questions." socialLinks={socialLinks} navLinks={navLinks} creatorName="ANSH9BOSS" creatorUrl="https://github.com" brandIcon={<Code2 className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-white dark:text-black drop-shadow-lg" />} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
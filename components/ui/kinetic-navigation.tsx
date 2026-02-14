import React, { useEffect, useRef, useState } from "react";
import gsap from "https://esm.sh/gsap";

export function KineticNavigation({ onNavigate }: { onNavigate: (page: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");
      
      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;
        
        if (!shape) return;
        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
             if (shapesContainer) {
                 shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
             }
             shape.classList.add("active");
             
             gsap.fromTo(shapeEls, 
                { scale: 0.5, opacity: 0, rotation: -10 },
                { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
             );
        };
        
        const onLeave = () => {
            gsap.to(shapeEls, {
                scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
                onComplete: () => shape.classList.remove("active"),
                overwrite: "auto"
            });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);
        
        (item as any)._cleanup = () => {
            item.removeEventListener("mouseenter", onEnter);
            item.removeEventListener("mouseleave", onLeave);
        };
      });
      
    }, containerRef);

    return () => {
        ctx.revert();
        if (containerRef.current) {
            const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
            items.forEach((item: any) => item._cleanup && item._cleanup());
        }
    };
  }, []);

  useEffect(() => {
      if (!containerRef.current) return;
      
      const ctx = gsap.context(() => {
        const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
        const menu = containerRef.current!.querySelector(".menu-content");
        const overlay = containerRef.current!.querySelector(".overlay");
        const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
        const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
        const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");
        
        const menuButton = containerRef.current!.querySelector(".nav-close-btn");
        const menuButtonTexts = menuButton?.querySelectorAll("p");
        const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

        const tl = gsap.timeline();
        
        if (isMenuOpen) {
            if (navWrap) navWrap.setAttribute("data-nav", "open");
            tl.set(navWrap, { display: "block" })
              .set(menu, { xPercent: 0 }, "<")
              .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2, duration: 0.4 })
              .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315, duration: 0.4 }, "<")
              .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, "<")
              .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
              .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05, duration: 0.5 }, "<+=0.35");
            if (fadeTargets.length) {
                tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all", duration: 0.4 }, "<+=0.2");
            }
        } else {
            if (navWrap) navWrap.setAttribute("data-nav", "closed");
            tl.to(overlay, { autoAlpha: 0, duration: 0.3 })
              .to(menu, { xPercent: 120, duration: 0.3 }, "<")
              .to(menuButtonTexts, { yPercent: 0, duration: 0.3 }, "<")
              .to(menuButtonIcon, { rotate: 0, duration: 0.3 }, "<")
              .set(navWrap, { display: "none" });
        }
      }, containerRef);
      return () => ctx.revert();
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const navigateTo = (page: string) => { closeMenu(); onNavigate(page); };

  return (
    <div ref={containerRef} className="fixed inset-0 z-[5000] pointer-events-none">
        <div className="site-header-wrapper absolute top-0 left-0 w-full pointer-events-auto">
          <header className="header p-6">
            <div className="max-w-[1400px] mx-auto">
              <nav className="nav-row flex items-center justify-between">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('hero'); }} className="nav-logo-row text-2xl font-black text-white tracking-tighter hover:scale-105 transition-transform">ANSH9BOSS</a>
                <div className="nav-row__right flex items-center gap-4">
                  <div className="nav-toggle-label hidden md:flex items-center gap-2 cursor-pointer group" onClick={toggleMenu}>
                    <span className="toggle-text text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white transition-colors">click me</span>
                  </div>
                  <button className="nav-close-btn flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 hover:bg-white transition-all shadow-xl group" onClick={toggleMenu}>
                    <div className="menu-button-text h-5 overflow-hidden text-xs font-bold text-black uppercase tracking-widest relative">
                      <p className="leading-5">Menu</p><p className="leading-5">Close</p>
                    </div>
                    <div className="icon-wrap w-4 h-4 text-black group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="menu-button-icon">
                        <path d="M7.33333 16L7.33333 0L8.66667 0L8.66667 16L7.33333 16Z" fill="currentColor"></path>
                        <path d="M16 8.66667L0 8.66667L0 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </nav>
            </div>
          </header>
        </div>

      <section className="fullscreen-menu-container pointer-events-none absolute inset-0">
        <div className="nav-overlay-wrapper fixed inset-0 hidden pointer-events-auto">
          <div className="overlay absolute inset-0 bg-black/60 backdrop-blur-md" onClick={closeMenu}></div>
          <nav className="menu-content absolute right-0 top-0 bottom-0 w-full sm:w-[500px] bg-neutral-950 border-l border-white/10 shadow-2xl flex flex-col justify-center px-12 overflow-hidden">
            <div className="menu-bg absolute inset-0 pointer-events-none z-0">
              <div className="backdrop-layer first absolute inset-0 bg-neutral-900 translate-x-[101%]"></div>
              <div className="backdrop-layer second absolute inset-0 bg-neutral-800 translate-x-[101%]"></div>
              <div className="backdrop-layer absolute inset-0 bg-neutral-950 translate-x-[101%]"></div>
              <div className="ambient-background-shapes absolute inset-0 opacity-20">
                <svg className="bg-shape bg-shape-1 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(99,102,241,0.5)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(139,92,246,0.4)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(236,72,153,0.3)" />
                </svg>
                <svg className="bg-shape bg-shape-2 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(99,102,241,0.4)" strokeWidth="60" fill="none" />
                </svg>
                <svg className="bg-shape bg-shape-3 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(99,102,241,0.6)" />
                </svg>
                <svg className="bg-shape bg-shape-4 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="100" cy="100" r="60" fill="rgba(236,72,153,0.4)" />
                </svg>
                <svg className="bg-shape bg-shape-5 absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <rect className="shape-element" x="50" y="50" width="100" height="100" rx="20" fill="rgba(34,197,94,0.3)" />
                </svg>
              </div>
            </div>
            <div className="menu-content-wrapper relative z-10">
              <ul className="menu-list space-y-6">
                <li className="menu-list-item group" data-shape="1" onClick={() => navigateTo('hero')}>
                  <div className="nav-link inline-block cursor-pointer"><p className="nav-link-text text-5xl sm:text-7xl font-black text-white/30 group-hover:text-white transition-all tracking-tighter uppercase italic">Home</p></div>
                </li>
                <li className="menu-list-item group" data-shape="2" onClick={() => navigateTo('skills')}>
                  <div className="nav-link inline-block cursor-pointer"><p className="nav-link-text text-5xl sm:text-7xl font-black text-white/30 group-hover:text-white transition-all tracking-tighter uppercase italic">Skills</p></div>
                </li>
                <li className="menu-list-item group" data-shape="4" onClick={() => navigateTo('projects')}>
                  <div className="nav-link inline-block cursor-pointer"><p className="nav-link-text text-5xl sm:text-7xl font-black text-white/30 group-hover:text-white transition-all tracking-tighter uppercase italic">Projects</p></div>
                </li>
                <li className="menu-list-item group" data-shape="5" onClick={() => navigateTo('faq')}>
                  <div className="nav-link inline-block cursor-pointer"><p className="nav-link-text text-5xl sm:text-7xl font-black text-white/30 group-hover:text-white transition-all tracking-tighter uppercase italic">FAQ's</p></div>
                </li>
              </ul>
              <div className="mt-20 pt-10 border-t border-white/10" data-menu-fade>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-4">Direct Connection</p>
                <div className="flex gap-8">
                  <a href="https://github.com" target="_blank" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">GitHub</a>
                  <a href="mailto:anshkumar19zx@gmail.com" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Email</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./BlurText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-label", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.4 });
      gsap.from(".hero-line",  { y: 90, opacity: 0, stagger: 0.1, duration: 1.1, ease: "power4.out", delay: 0.6 });
      
      // Premium staggered letter effect for the main name
      gsap.from(".hero-letter", { 
        y: 100, 
        opacity: 0, 
        rotateX: -40,
        stagger: 0.06, 
        duration: 1.2, 
        ease: "power4.out", 
        delay: 0.7 
      });

      gsap.from(".hero-sub",   { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 1.4 });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 60%",
          end:   "bottom 10%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -50,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[135vh] flex flex-col justify-center px-10 md:px-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl">
        <p className="hero-label text-[10px] md:text-xs text-[#ff6b1a] tracking-[0.25em] uppercase font-bold mb-6 font-mono">
          AI Systems & Software Engineer
        </p>

        <h1
          className="font-black tracking-tighter leading-[0.9] mb-10 flex flex-col relative z-10"
        >
          <span className="hero-line block ghost z-0 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Hey, I'm</span>
          <span className="block text-white mt-1 z-10 hero-perspective text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            {"Leela Ranga Prasad".split("").map((char, index) => (
              <span key={index} className="hero-letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

        <div className="max-w-xl hero-sub flex flex-col gap-5">
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            I build <span className="text-[#ff6b1a] font-semibold">AI systems</span>, not just models. My work centers on high-performance backend architectures, <span className="text-white font-semibold">intelligent NLP pipelines</span>, and robust API orchestration.
          </p>
          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Core technical foundation: <span className="text-white/90 font-mono text-xs sm:text-sm">Python · Flask · Machine Learning · Natural Language Processing · REST APIs · Data Structures & Algorithms</span>.
          </p>
          <p className="text-xs sm:text-sm text-white/45 font-light leading-relaxed">
            Undergraduate in <span className="text-white/80">Artificial Intelligence & Data Science</span> at VRSEC (2024–2028). Google Student Ambassador & former IIT Delhi eDC Campus Ambassador.
          </p>

          <p className="mt-4 text-[11px] text-[#ff6b1a] tracking-[0.4em] uppercase font-mono font-medium">
            Explore Systems ↓
          </p>
        </div>
      </div>

    </section>
  );
}

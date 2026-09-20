"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION } from "@/app/work/content";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    num: "01",
    label: "AI Agents",
    title: "AI & Intelligent Agents",
    description:
      "Autonomous conversational assistants, WhatsApp Business automation, and context-aware systems built for reliable real-world interaction.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
        <path d="M20 4v6M20 30v6M4 20h6M30 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="18" r="1.5" fill="currentColor"/>
        <circle cx="23" cy="18" r="1.5" fill="currentColor"/>
        <path d="M17 23c1 1 5 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    href: "/projects?cat=agents",
  },
  {
    num: "02",
    label: "NLP & APIs",
    title: "Backend & NLP Pipelines",
    description:
      "High-throughput RESTful services, Python Flask backends, automated text processing, and scalable API orchestration.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
        <rect x="6" y="8" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="6" y="22" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="13" r="1" fill="currentColor"/>
        <circle cx="11" cy="27" r="1" fill="currentColor"/>
        <path d="M16 13h12M16 27h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    href: "/projects?cat=nlp",
  },
  {
    num: "03",
    label: "Machine Learning",
    title: "Applied Machine Learning",
    description:
      "Data engineering, predictive algorithms, model training pipelines, and intelligent automated workflows.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
        <path d="M8 32V20l8-8 8 8 8-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="32" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    href: "/projects?cat=ml",
  },
];

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
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
      id="work-section"
      className="relative w-full min-h-screen px-10 md:px-20 pt-64 pb-72 flex flex-col justify-center"
    >
      <div className="max-w-4xl w-full">

        {/* Header and Filters */}
        <div className="mb-14 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium font-mono">
            {SECTION.label}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              className="font-sans font-black tracking-tighter text-white leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              {SECTION.heading}
            </h2>

            {/* Category pills — decorative only */}
            <div className="flex flex-wrap gap-2 lg:pb-2">
              {["AI Agents", "NLP & APIs", "Machine Learning"].map((cat) => (
                <Link
                  key={cat}
                  href={`/projects?cat=${cat.toLowerCase().split(" ")[0]}`}
                  className="px-4 py-2 rounded-full text-[10px] md:text-xs font-medium tracking-widest uppercase transition-all duration-300 bg-transparent text-white/40 border border-white/10 hover:text-white hover:border-white/30 font-mono"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Category Cards */}
        <div className="flex flex-col">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.num}
              href={cat.href}
              className="work-item group relative flex items-start gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
            >
              {/* Left orange accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              {/* Number */}
              <div className="pl-3 shrink-0 w-8 pt-1">
                <span className="font-mono text-[10px] text-white/20 group-hover:text-[#ff6b1a] tracking-widest transition-colors duration-300">
                  {cat.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                <p className="font-sans text-[10px] text-white/30 group-hover:text-[#ff6b1a]/70 tracking-[0.4em] uppercase font-light mb-2 transition-colors duration-300">
                  {cat.label}
                </p>
                <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter mb-3 group-hover:text-white transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-white/35 group-hover:text-white/60 font-light leading-relaxed max-w-2xl transition-colors duration-300">
                  {cat.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] text-white/20 group-hover:text-white/55 tracking-widest uppercase transition-colors duration-200">
                  View Projects
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>

              {/* Icon */}
              <div className="hidden md:flex shrink-0 items-center pt-2 text-white">
                {cat.icon}
              </div>
            </Link>
          ))}

          {/* 4th item — View Full Projects CTA */}
          <Link
            href="/projects"
            className="work-item group relative flex items-center gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
            <div className="pl-3 shrink-0 w-8">
              <span className="font-mono text-[10px] text-white/20 group-hover:text-[#ff6b1a] tracking-widest transition-colors duration-300">→</span>
            </div>
            <div className="flex-1 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
              <p className="font-sans text-[10px] text-white/30 group-hover:text-[#ff6b1a]/70 tracking-[0.4em] uppercase font-light mb-2 transition-colors duration-300">
                Full Portfolio
              </p>
              <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter group-hover:text-white transition-colors duration-300">
                View All Projects
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/20 group-hover:text-[#ff6b1a] transition-colors duration-300 pr-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14h16M16 8l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/data/portfolio";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection({ heroImage }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleScrollDown = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Neural network visualization"
          className="w-full h-full object-cover"
          style={{
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) scale(1.1)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(242,242,242,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242,242,242,1) 1px, transparent 1px)
          `,
          backgroundSize: "calc(100% / 12) calc(100% / 12)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-mono text-[11px] tracking-[0.4em] text-[#D1FF00] mb-6 uppercase"
        >
          {t.hero.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold text-[#F2F2F2] leading-[0.9] tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 8rem)",
            transform: `perspective(800px) rotateY(${mousePos.x * 1.5}deg) rotateX(${-mousePos.y * 1.5}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          SOFTWARE<br />
          <span className="text-[#D1FF00]">&</span> AI<br />
          ARCHITECT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-body text-[#F2F2F2]/50 text-base md:text-lg mt-8 max-w-xl mx-auto leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D1FF00] text-[#080808] font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#D1FF00]/90 transition-all duration-300"
          >
            {t.hero.cta}
          </a>
          <button
            onClick={handleScrollDown}
            className="font-mono text-xs tracking-[0.15em] text-[#F2F2F2]/40 hover:text-[#D1FF00] transition-colors border border-[#404040] px-8 py-4 hover:border-[#D1FF00]/40"
          >
            {t.hero.viewWork}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#404040] uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#D1FF00] to-transparent"
        />
      </motion.div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { COMPANY_NAME } from "@/data/portfolio";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  const navItems = [
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#404040]/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-mono text-xs tracking-[0.3em] text-[#D1FF00] hover:opacity-80 transition-opacity"
        >
          {COMPANY_NAME}
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="font-mono text-[11px] tracking-[0.2em] text-[#F2F2F2]/70 hover:text-[#D1FF00] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D1FF00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="font-mono text-[11px] tracking-[0.2em] border border-[#404040]/50 hover:border-[#D1FF00]/60 px-3 py-1 transition-colors duration-300"
            aria-label="Toggle language"
          >
            <span className={lang === 'pt-BR' ? 'text-[#D1FF00]' : 'text-[#F2F2F2]/40'}>PT</span>
            <span className="text-[#404040] mx-1">|</span>
            <span className={lang === 'en' ? 'text-[#D1FF00]' : 'text-[#F2F2F2]/40'}>EN</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
